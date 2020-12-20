const { watch } = require("gulp");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { include } = require("./include");

const watchTask = () => {
	watch("./src/styles/*.scss", styles);
	watch("./src/js/*.js", scripts);
	watch("./src/*.html", include);
};

exports.watch = watchTask;
