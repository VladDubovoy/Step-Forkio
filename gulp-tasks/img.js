const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");

const img = () =>
  src("./src/img/*")
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 90, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest("dist/img"));

exports.img = img;
