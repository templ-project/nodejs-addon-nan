const fs = require('fs');
const {spawn} = require('child_process');

const cppConfigpath = './.vscode/c_cpp_properties.json';

const cppConfig = JSON.parse(fs.readFileSync(cppConfigpath).toString());

let config = '';

const npxConfig = (callback) => {
  const npx = spawn('npx', ['node-gyp', 'configure']);

  npx.stdout.on('data', (data) => {
    // console.log(data.toString());
    config = `${config}${data}`;
  });

  npx.stderr.on('data', (data) => {
    // console.error(data.toString());
    config = `${config}${data}`;
  });

  npx.on('close', (code) => {
    console.log(config);

    const result = config.match(/-Dnode_root_dir=([^']*)/gim);
    if (Array.isArray(result)) {
      const nodeRootDir = result[0].split('=').pop();
      callback(nodeRootDir, code);
      return;
    }
    callback(null, code);
  });
};

npxConfig((rootDir, code) => {
  if (rootDir === null || code != 0) {
    throw new Error('Could not parse `npx node-gyp configure`');
  }

  cppConfig.configurations = cppConfig.configurations.map((itemConfig) => ({
    ...itemConfig,
    includePath: [
      ...itemConfig.includePath.filter((p) => !p.includes('include/node')),
      `${rootDir}/include/node`,
      `${rootDir}/include/node/openssl`,
    ],
  }));

  fs.writeFileSync(cppConfigpath, JSON.stringify(cppConfig, null, 2));
});
