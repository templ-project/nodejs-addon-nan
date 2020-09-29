const rimraf = require('rimraf');
const copy = require('copy');
const fs = require('fs');


rimraf.sync(`${__dirname}/../node_modules/.bin/prettier-cpp*`);
copy(`${__dirname}/prettier-cpp*`, `${__dirname}/../node_modules/.bin`, {}, () => {
  fs.chmod(`${__dirname}/../node_modules/.bin/prettier-cpp`, 0o775, (err) => {
    if (err) throw err;
  });
});
