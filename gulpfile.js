const { series, parallel } = require("gulp");
const { clean } = require("./gulp-tasks/clean");
const { img } = require("./gulp-tasks/img");
const { scripts } = require("./gulp-tasks/scripts");
const { styles } = require("./gulp-tasks/styles");
const { serv } = require("./gulp-tasks/serv");
const { watch } = require("./gulp-tasks/watch");
const { include} = require("./gulp-tasks/include");

exports.dev = parallel(serv, watch);
exports.build = series(clean, include, styles, scripts, img);