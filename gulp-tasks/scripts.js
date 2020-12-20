const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const uglify = require("gulp-uglify");
const jsConcat = require("gulp-concat");

const scripts = () =>
  src("./src/js/*.js")
    .pipe(jsConcat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("./dist/js/"))
    .pipe(browsersync.reload({ stream: true }));

exports.scripts = scripts;
