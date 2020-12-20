const { src } = require("gulp");
const gulpClean = require('gulp-clean');

const clean = () =>
	src("./dist", {read: false, allowEmpty: true})
    .pipe(gulpClean());

exports.clean = clean;