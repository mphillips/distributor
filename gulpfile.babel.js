import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import livereload from 'gulp-livereload';

requireDir( './gulp-tasks' );

/**
 * Gulp task to run all JS processes in a sequential order.
*/
gulp.task( 'js', () => {
	runSequence(
		'jsclean',
		'webpack'
	);
} );

/**
 * Gulp task to run all Sass/CSS processes in a sequential order.
*/
gulp.task( 'css', () => {
	runSequence(
		'cssclean',
		'cssnext',
		'cssnano',
		'csscomplete'
	);
} );

/**
 * Gulp task to watch for file changes and run the associated processes.
 */
gulp.task( 'watch', () => {
	livereload.listen( { basePath: 'dist' } );
	gulp.watch( './assets/css/*.css', ['css'] );
	gulp.watch( './assets/js/*.js', ['js'] );
} );

/**
 * Gulp task to run the default release processes in a sequential order.
 */
gulp.task( 'release', () => {
	runSequence(
		'css',
		'js',
		'copy'
	);
} );

/**
 * Gulp task to run the default build processes in a sequential order.
 */
gulp.task( 'default', () => {
	runSequence(
		'css',
		'js'
	);
} );
