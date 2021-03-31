module.exports = function() {
    $.gulp.task('video', function() {
        return $.gulp.src('src/static/img/video/*')
            .pipe($.gulp.dest('build/img/video'))
    });
}
