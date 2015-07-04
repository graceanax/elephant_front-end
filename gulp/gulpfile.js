'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');
var server = livereload({ start: true });

function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}


	  gulp.task('sass', function () {
	  	gulp.src('../sass/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('../css'))
			.pipe(livereload());
	  });
	  // Watch Task 		        
	  gulp.task('watch', function () {
	  	var server = livereload();
	        gulp.watch('../sass/*.scss', ['sass']);
	  });

	  gulp.task('default', ['sass', 'watch']);
