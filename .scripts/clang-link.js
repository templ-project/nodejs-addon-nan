const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

rimraf.sync(`${__dirname}/../node_modules/.bin/clang-lint*`);
rimraf.sync(`${__dirname}/../node_modules/.bin/clang-prettier*`);

['clang-prettier', 'clang-prettier.cmd', 'clang-prettier.ps1', 'clang-lint'].forEach((f) => {
  fs.symlink(path.join(__dirname, f), path.join(__dirname, '..', 'node_modules', '.bin', f), (err) => {
    if (err) {
      console.error(`Could not symlink: ${err}`);
    }
  });
});
