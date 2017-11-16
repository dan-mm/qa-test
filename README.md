# README #

### What is this repository for? ###

This is a sample automated test framework project. It has implemented a few test cases for reddit's main page search engine.
It uses Javascript and NodeJS.
It uses Jasmine to write the tests.  
It uses WebdriverIO to run the tests through a selenium server.  
It uses Grunt as the task runner.  

### Quick Setup ###

* Download repository
* install dependencies with 'npm install'
* run tests using Grunt.

### How do I run tests? ###

Grunt is setup to launch the tests defined in wdio.reddit.config
  
'grunt run'  

or to run without grunt:

  
### Pertinant Information ###

The tests are located in ./src/features/\*.spec.js  
Page objects are located in ./src/page\_objects/\*.page.js  

The config files are in the ./conf/wdio.\*.conf.js files.
wdio.conf.js is the base file. It has the settings that all the configurations share.  
Any other config file has specific settings that are merged with the base file.  

You can include/exclude specific features/specs in each configuration. Right now the only differences are the environments.  
