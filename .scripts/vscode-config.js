const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');

runNodeGypConfigure(parseNodeGypSettingsAndConfigureVscode);

function runNodeGypConfigure(callback) {
  console.log('Running configuration...');
  const npx = spawn('npx', ['node-gyp', 'configure']);
  let config = '';

  npx.stdout.on('data', (data) => {
    config = `${config}${data}`;
  });

  npx.stderr.on('data', (data) => {
    config = `${config}${data}`;
  });

  npx.on('close', (code) => {
    if (code !== 0) {
      console.error(config);
      process.exit(code);
    }
    console.log('Done.');
    callback();
  });
}

function parseMainTargetMk() {
  const incsRelease = fs
    .readFileSync(path.join(__dirname, '..', 'build', 'main.target.mk'))
    .toString()
    .match(/INCS_Release := \\\n(\s+\-I[^\n]+\n)+/g);

  if (!Array.isArray(incsRelease) || incsRelease.length === 0) {
    console.error('Could not determine include list');
    process.exit(1);
  }

  const localSrc = path.join(__dirname, '..', 'src');

  return incsRelease[0]
    .split('\n')
    .slice(1)
    .map((c) =>
      c
        .trim()
        .replace(/^\-I/gi, '')
        .replace(/\s+\\$/, '')
        .replace('$(srcdir)', path.join(__dirname, '..')),
    )
    .filter((c) => c)
    .filter((c) => c != localSrc)
    .filter((c) => {
      try {
        return fs.statSync(c).isDirectory();
      } catch (e) {
        return null;
      }
    });
}

function parseNodeGypSettingsAndConfigureVscode() {
  console.log('Reading configuration...');
  let includes = [];
  if (process.platform !== 'win32') {
    includes = parseMainTargetMk();
  } else {
    // TODO:
  }
  console.log('Done.');

  writeVSCodeConfig(includes);
}

function writeVSCodeConfig(includes) {
  writeCCppProperties(includes);
  writeCompileFlagsTxt(includes);
  changeVsCodeSettings();
}

function writeCCppProperties(includes) {
  console.log('Configuring `ms-vscode.cpptools` extension...');
  const cppConfigPath = './.vscode/c_cpp_properties.json';
  const cppConfig = JSON.parse(fs.readFileSync(cppConfigPath).toString());
  cppConfig.configurations = cppConfig.configurations.map((itemConfig) => ({
    ...itemConfig,
    includePath: includes,
  }));
  fs.writeFileSync(cppConfigPath, JSON.stringify(cppConfig, null, 2));
  console.log('Done.');
}

function writeCompileFlagsTxt(includes) {
  console.log('Configuring `llvm-vs-code-extensions.vscode-clangd` extension...');
  let lines = ['-Wall'];
  includes.forEach((c) => (lines = [...lines, '-I', c]));

  fs.writeFileSync(path.join(__dirname, '..', 'compile_flags.txt'), lines.join('\n'));
  console.log('Done.');
}

function changeVsCodeSettings() {
  console.log('Configuring .vscode/settings.json');
  const vscodeConfigPath = path.join(__dirname, '..', '.vscode', 'settings.json');
  const vscodeConfig = JSON.parse(fs.readFileSync(vscodeConfigPath).toString());

  vscodeConfig['[cpp]'] = {
    ...vscodeConfig['[cpp]'],
    'editor.defaultFormatter': 'llvm-vs-code-extensions.vscode-clangd',
  };

  if (process.argv.includes('--clangd')) {
    console.log(`It seems you want to use clang for intellisense. Disabling C++ InstelliSenseEngine`);
    vscodeConfig['C_Cpp.intelliSenseEngine'] = 'Disabled';
  } else {
    console.log(
      `It seems you want to use Microsoft C++ module. To use 'clangd', please add --clangd flag to the command.`,
    );
    console.log(
      `If you wish to continue with the Microsoft C++ module, you should disable 'llvm-vs-code-extensions.vscode-clangd' module, in order to run things smoothly.`,
    );
    vscodeConfig['C_Cpp.intelliSenseEngine'] = 'Default';
    vscodeConfig['[cpp]'] = {
      ...vscodeConfig['[cpp]'],
      'editor.defaultFormatter': '',
    };
    delete vscodeConfig['[cpp]']['editor.defaultFormatter'];
  }

  fs.writeFileSync(vscodeConfigPath, JSON.stringify(vscodeConfig, null, 2));

  console.log('Done.');
}
