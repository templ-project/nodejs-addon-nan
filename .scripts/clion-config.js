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

  writeCMakeListsTxt(includes);
}

function writeCMakeListsTxt(includes) {
  const cMakeListsTxtPath = path.join(__dirname, '..', 'CMakeLists.txt');
  const cMakeListsTxt = fs.readFileSync(cMakeListsTxtPath).toString();

  const cmakeLines = includes.map((item) => `  include_directories(${item})`);

  fs.writeFileSync(
    cMakeListsTxtPath,
    cMakeListsTxt.replace(
      /\s+# start clion-config here\n(.+\n)*\s+# end clion-config here/gi,
      `\n  # start clion-config here
${cmakeLines.join('\n')}
  # end clion-config here`,
    ),
  );
}
