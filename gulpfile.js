var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// Views tasks requirements
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
// Images task requirements
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
// Styles task requirements
var minifyCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var npmSass = require('npm-sass');
var autoprefixer = require('gulp-autoprefixer');
// Scripts tasks requirements
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var jshint = require('gulp-jshint');
// Build task requirements
var del = require('del');
var runSequence = require('run-sequence');

// *** Tasks ***

// Index.html
gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
});

// Template views
gulp.task('views', function() {
  return gulp.src('src/scripts/**/*.html')
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(rename('app.templates.js'))
    .pipe(gulp.dest('src/scripts/config/'));
});

// Images
gulp.task('images', function() {
  gulp.src(['src/images/**/*'])
    .pipe(cache(imageMin()))
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.stream());
});

// Styles
gulp.task('styles', function() {
  return gulp.src(['src/styles/app.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: npmSass.importer
    }))
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', ['views'], function() {
 var bundler = browserify({
  entries: 'src/scripts/app.js',
  debug: true
 });

 return bundler
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/scripts/'))
  .pipe(browserSync.stream());
});

// Linting
gulp.task('lint', function(){
  return gulp.src('src/scripts/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Default task
// Use 'gulp' or 'npm run serve'
gulp.task('default', ['html', 'styles', 'scripts', 'images'], function() {
  browserSync.init({
    server: './dist',
    notify: false
  });
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch('src/scripts/**/*.js', ['scripts', 'lint']);
  gulp.watch('src/scripts/**/*.html', ['views']);
  gulp.watch('src/index.html', ['html']);
});

// Build task (Cleans before re-building, for production etc. )
gulp.task('clean:dist', function() {
  return del.sync('dist');
});
// Use 'gulp build' or 'npm run build'
gulp.task('build', function() {
  runSequence('clean:dist', ['html', 'styles', 'scripts', 'images']);
});
