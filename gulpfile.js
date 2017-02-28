var gulp = require("gulp");

var concat = require('gulp-concat');
var jsSource = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
];

var cssSource = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
];

gulp.task('jsTask', function() {
  return gulp.src(jsSource)
    .pipe(concat('all-min.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('cssTask', function() {
  return gulp.src(cssSource)
    .pipe(concat('all-min.css'))
    .pipe(gulp.dest('./dist/css/'));
});