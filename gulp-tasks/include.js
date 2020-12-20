const { src, dest } = require("gulp");
const fileInclude = require('gulp-file-include');
const { browsersync } = require("./serv");

const include = () => 
    src(['./src/index.html'])
        .pipe(fileInclude({
          prefix: '@',
          basepath: '@file'
        }))
        .pipe(dest('./'))
        .pipe(browsersync.reload({ stream: true }));

exports.include = include;