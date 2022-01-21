const {src, dest, watch} = require('gulp'); //Retorna multiples funciones

// Dependecias de CSS
const sass = require('gulp-sass')(require('sass')); //Retorna una sola funcion
const plumber = require('gulp-plumber');


function css ( done ) {
    src('src/scss/**/*.scss') // Identificar el archivo .SCSS a compilar
        .pipe( sass())//Compilar
        .pipe( dest('build/css') )// Almacenarlo

    done();
}

function dev ( done ) {
    
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;