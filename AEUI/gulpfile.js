/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require('gulp');
var sass = require("gulp-sass");
var inlineNg2Template = require('gulp-inline-ng2-template');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('ng2Template', function () {
    var tsResult = gulp.src('./src/Dialog/Model/Model.Component.ts')
     .pipe(inlineNg2Template({ base: '/src' }))
     .pipe(tsProject())
     .pipe(gulp.dest('G:/My/Angular2/Test/'));
});

gulp.task('sass', function () {
    gulp.src("src/Dialog/Resources/ae.dialog.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/Dialog/Resources/"));
});

gulp.task('default', function () {
    // place code for your default task here
});