var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var uglify = require('gulp-uglify')

function css () {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
        
        
};

exports.default = function () {
    watch('src/*.scss', css);
    watch('src/modules/*.scss', css);
};