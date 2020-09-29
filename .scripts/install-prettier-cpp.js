const rimraf = require('rimraf');
const copy = require('copy');


rimraf.sync(`${__dirname}/../node_modules/.bin/prettier-cpp*`);
copy(`${__dirname}/prettier-cpp*`, `${__dirname}/../node_modules/.bin`, {}, () => {});
