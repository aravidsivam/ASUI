/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require('gulp');
var sass = require("gulp-sass");
var inlineNg2Template = require('gulp-inline-ng2-template');
var ts = require('gulp-typescript');
var rollup = require('rollup');
var rollupCommonJs = require('rollup-plugin-commonjs');
var tsProject = ts.createProject('tsconfig.json');
var htmlMinifier = require('html-minifier');

function minifyTemplate(path, ext, file, cb) {
    try {
        var minifiedFile = htmlMinifier.minify(file, {
            collapseWhitespace: true,
            caseSensitive: true,
            removeComments: true,
            removeRedundantAttributes: true
        });
        cb(null, minifiedFile);
    }
    catch (err) {
        cb(err);
    }
}

gulp.task('BuildTypescript', function () {
    return tsProject.src()
        .pipe(inlineNg2Template({ base: '/', useRelativePaths: true, templateProcessor: minifyTemplate }))
        .pipe(tsProject())
        .js.pipe(gulp.dest("./"));
});

gulp.task('DialogSASS', function () {
    gulp.src("src/Dialog/Resources/ae.dialog.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/Dialog/Resources/"));
});

gulp.task('DialogBundle', function () {
    return rollup.rollup({
        entry: "./src/Dialog/index.js",
        plugins: [
            rollupCommonJs()
        ],
        external: [
                '@angular/core',
                '@angular/platform-browser',
                'rxjs/Rx'
        ]
    })
   .then(function (bundle) {
       bundle.write({
           format: "umd",
           moduleName: "ASUI/Dialog",
           dest: "./bundles/asdialog.umd.js",
           sourceMap: true
       });
   })
});

