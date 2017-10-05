var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

var gutil = require('gulp-util');

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('styles/main.css')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assests'))
});

var coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src('scripts/hello.coffee')
  .pipe(coffee({bare: true})
    .on('error', gutil.log))
  .pipe(gulp.dest('scripts'))
});

var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets'))
});

gulp.task('default', ['coffee', 'js']);
