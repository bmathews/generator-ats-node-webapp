'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

gulp.task('test', function () {
    return gulp.src(['./test/**/test*.js'])
        .pipe(mocha());
});

gulp.task('lint', function () {
    return gulp.src(['./generators/**/*.js', '!./generators/**/templates/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint', 'test']);
