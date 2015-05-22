module.exports = function(grunt) {

  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['client/js/app.js','client/js/controllers.js','client/js/services.js'],
        dest: 'dist/build.js',
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/build.min.js': ['dist/js/build.js']
        }
      }
    },
    htmlmin: {                                       // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'dist/index.html': 'client/index.html',     // 'destination': 'source'
            'dist/partials/list.html': 'client/partials/list.html'
          }
        }
      },
      clean:{
        dist:{
          src: 'dist/'
        }
      },
      express: {
        dev: {
          options: {
            script: 'app.js'
          }
        }
      },
      watch: {
        express: {
          files:  [ 'server/**/*.js' ],
          tasks:  [ 'express:dev' ],
          options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    }
  });

grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

grunt.registerTask('default', ['clean', 'concat', 'uglify', 'htmlmin']);
grunt.registerTask('server', [ 'express:dev', 'watch' ]);

};