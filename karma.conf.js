// module.exports = function (config) {
//     config.set({
//       frameworks: ['jasmine'],
//       files: [
//       ],
//       browsers: ['Chrome'], // You can use other browsers as well
//     });
//   };
  

  module.exports = function (config) {
    config.set({
  
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('karma-junit-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      files: [
        require('path').join(__dirname, 'polyfills.ts')
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
  
      junitReporter: {
        outputDir: 'test_reports/', // Output directory for the JUnit report
        outputFile: 'junit.xml',   // Output filename for the JUnit report
      },
  
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/evok-new'),
        subdir: '.',
        reporters: [
          { type: 'html' },
        ]
  
      },
      reporters: ['progress', 'junit', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      restartOnFileChange: true
    });
   
  };