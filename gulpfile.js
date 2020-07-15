const {src , dest, task, series, watch} = require('gulp');
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

// const env = process.env.NODE_ENV;

const {DIST_PATH, SRC_PATH, STYLES_LIBS, JS_LIBS} = require('./gulp.config')
sass.compiler = require('node-sass');

task( 'clean', () => {
    return src(`${DIST_PATH}/**/*`, { read: false }).pipe( rm() )
});


task('copy:html' , () =>{
    return src(`${SRC_PATH}/*.html`).pipe(dest(DIST_PATH)).pipe(reload({stream: true}));
});



task('styles' , () =>{
    return src([
        ...STYLES_LIBS, 'src/css/style.scss'
    ])
    .pipe(concat('style.min.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            cascade: false
        })
    )
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(dest(`${DIST_PATH}/styles`));
});



task('scripts', () => {
    
    return src([
        ...JS_LIBS, `${SRC_PATH}/js/*.js`
    ])
    .pipe(concat('main.min.js', {newLine: ';'}))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest(`${DIST_PATH}/js`))
});

task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false //предотвращает открытие нового окна при запуске сервера
    });
});


watch("./src/styles/**/*.scss", series('styles'));
watch("./src/*.html", series('copy:html'));
watch("./src/js/*.js", series('scripts'));

task('default', series('clean',"copy:html", 'styles', 'scripts',  'server'));
