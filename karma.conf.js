// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    files: [
      // Add your dependencies and source files here, for example:
      // 'path/to/your/dependencies.js',
      // 'path/to/your/source/files/*.js',

      // Include the Jasmine and test files
      'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
      'node_modules/jasmine-core/lib/jasmine-core/boot.js',
      'path/to/your/test/files/*.spec.js',
    ],

    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'), // Add karma-junit-reporter
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/demo'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml', 'junit'], // Add 'junit' reporter for XML test reports
    junitReporter: {
      outputDir: 'test-results', // Output directory for test reports
      outputFile: 'test-results.xml' // Name of the output XML file
    },
    browsers: ['Chrome'],
    restartOnFileChange: true
  });
};
