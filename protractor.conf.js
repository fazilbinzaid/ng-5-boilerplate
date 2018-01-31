// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

<<<<<<< HEAD
<<<<<<< HEAD
/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');
=======
const { SpecReporter } = require('jasmine-spec-reporter');
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
=======
const { SpecReporter } = require('jasmine-spec-reporter');
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
<<<<<<< HEAD
<<<<<<< HEAD
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
=======
=======
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
<<<<<<< HEAD
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
=======
>>>>>>> 9dc88cf0741ddaf0286b707d008b1d4e072cc189
  }
};
