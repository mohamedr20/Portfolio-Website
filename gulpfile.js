const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const browser_sync = require('browser-sync').create()
const minify  = require('gulp-minify')
const gulp = require('gulp')
const input= "./src/assets/scss/*.scss";
const output = "./dist/"

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

gulp.task('browser-sync',function(){
    browser_sync.init({
        server:{
            baseDir:'./',
            port:3000
        }
    })
    gulp.watch('./**/*.html').on('change',browser_sync.reload);
    gulp.watch('./**/*.js').on('change',browser_sync.reload);
    gulp.watch('./**/*.css').on('change',browser_sync.reload);
})


gulp.task('uglify/minify',function(){
    return gulp.src('./src/assets/js/*.js')
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest(output))
})

gulp.task('scss',function(){
    return gulp.src(input)
    .pipe(sass(sassOptions).on('error',sass.logError))
    .pipe(gulp.dest(output))
})

gulp.task('scss:watch',function(){
    gulp.watch('./src/assets/scss/**/*.scss',['scss'])
})
gulp.task('js:watch',function(){
    gulp.watch('./src/assets/js/**/*.js',['uglify/minify'])
})
gulp.task('build',['uglify/minify','scss'])

gulp.task('serve',['build','js:watch','scss:watch','browser-sync'])