module.exports = function() {
    $.gulp.task('svg-img', function() {
        return $.gulp.src('src/static/svg/*')
            .pipe($.gulp.dest('build/img/svg'))
    });
}

