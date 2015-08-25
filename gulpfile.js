var uglify = require('gulp-uglify');
var gulp = require('gulp');
var rename = require("gulp-rename");

var name = 'jq-ajax-progress';

gulp.task('default', function () {
  return gulp.src('src/' + name + '.js')
    .pipe(uglify())
    .pipe(rename(name + '.min.js'))
    .pipe(gulp.dest('src'));
});
