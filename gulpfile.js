const { series, parallel, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

const files = {
  "source": {
    "scss": "./source/scss/index.scss"
  },
  "public": {
    "css": "./public/css/"
  },
  "watch": "./source/scss/**/*.scss"
}

// Sass Task
function scssTask() {
  return src( files.source.scss )
    .pipe( sass() )
    .pipe( dest( files.public.css ));
}

// Watch Task
function watchTask() {
  // Watch files
  watch( [ files.watch ] ,
    series( scssTask) );
}

exports.default = series(
  parallel( scssTask ),
  watchTask
);