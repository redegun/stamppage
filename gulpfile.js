const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync') .create();

gulp.task('less', function() {
  return gulp.src('app/less/**/*.less')
  .pipe(less())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    },
    notify: false
  });
});

gulp.task('watch', ['less','browser-sync'], function() {
  gulp.watch('app/less/**/*.less',['less']);
  gulp.watch('app/css/**/*.css', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});

