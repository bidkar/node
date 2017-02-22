var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('css', function() {
    return gulp.src('src/styles.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('js', function() {
    return gulp.src([
        'node_modules/materialize-css/dist/js/*',
        'node_modules/jquery/dist/*'])
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('fonts', function() {
    return gulp.src('node_modules/materialize-css/dist/fonts/**/*')
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('watch', function() {
    return gulp.watch('src/styles.scss', ['css']);
});

gulp.task('default', ['css','js','fonts']);