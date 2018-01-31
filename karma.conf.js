// Karma configuration file, see link for more information
<<<<<<< HEAD
<<<<<<< HEAD
// https://karma-runner.github.io/0.13/config/configuration-file.html
=======
// https://karma-runner.github.io/1.0/config/configuration-file.html
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
=======
// https://karma-runner.github.io/1.0/config/configuration-file.html
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189

module.exports = function (config) {
  config.set({
    basePath: '',
<<<<<<< HEAD
<<<<<<< HEAD
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'karma-remap-istanbul']
              : ['progress'],
=======
=======
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
<<<<<<< HEAD
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
=======
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
