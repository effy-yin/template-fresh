const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

function cssTranspile(cb) {
    return src('style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('assets/css/'))
}

function cssMinify(cb) {
    return src('assets/css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('assets/css/'))

}


watch(['style.scss'], series(cssTranspile, cssMinify));

exports.default = series( cssTranspile, cssMinify);


