const { src, dest } = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const cssConcat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const { browsersync } = require("./serv");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

const styles = () =>
	src("./src/styles/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(cssConcat("style.min.css"))
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 5 versions"],
			cascade: true
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(sourcemaps.write(""))
		.pipe(dest("./dist/css/"))
		.pipe(browsersync.reload({ stream: true }));

exports.styles = styles;
