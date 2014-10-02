// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-09-28 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'app/bower_components/jquery/jquery.js',
        'app/bower_components/lodash/dist/lodash.js',
        'app/bower_components/messageformat/messageformat.js',

        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/angular-animate/angular-animate.js',
        'app/bower_components/angular-cookies/angular-cookies.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-sanitize/angular-sanitize.js',
        'app/bower_components/angular-touch/angular-touch.js',

        'app/Bower_components/angular-local-storage/angular-local-storage.js',
        'app/bower_components/angular-translate/angular-translate.js',
        'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'app/bower_components/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',

        'app/scripts/*.js',
        'app/scripts/**/*.js',
        'test/mock/**/*.js',
        'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
        'PhantomJS'
        // 'Firefox'
        //'Chrome'
    ],

    // Which plugins to enable
    plugins: [
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
