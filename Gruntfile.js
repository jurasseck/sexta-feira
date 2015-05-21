module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['client/js/app.js','client/js/controllers.js','client/js/services.js'],
        dest: 'dist/build.js',
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/build.min.js': ['dist/build.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};