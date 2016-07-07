module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'dist/textShake.min.js': ['dist/textShake.js']
				}
			}
		}
	});

	grunt.registerTask('default', ['uglify']);

	grunt.loadNpmTasks('grunt-contrib-uglify');

};
