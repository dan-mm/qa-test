module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      reddit: {
        configFile: './conf/wdio.reddit.conf.js'
      }
    }
  });


  grunt.registerTask('run',   ['webdriver:reddit']);
  grunt.registerTask('default', ['run']);


};
