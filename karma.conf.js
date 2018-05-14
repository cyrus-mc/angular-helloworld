// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-spec-reporter'),
            require('karma-junit-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'), reports: ['html', 'lcovonly', 'cobertura'],
            fixWebpackSourcePaths: true,
            dir: 'build/reports/coverage'
        },
        angularCli: {
            environment: 'dev'
        },
        // Use maxLogLines to control size of error stack traces. See DEBUG CONSOLE for full stack trace.
        specReporter: {
            maxLogLines: 3,
            suppressSkipped: true
        },
        remapCoverageReporter: {
            'text-summary': null,
            json: 'build/reports/coverage/coverage.json',
            cobertura: 'build/reports/coverage/cobertura.xml',
            lcovonly: 'build/reports/coverage/lcov.info',
            html: 'build/reports/coverage/html'
        },
        junitReporter: {
            outputDir: 'build/reports/unit',
            outputFile: 'test-results.xml',
            xmlVersion: 1
        },
        reporters: ['spec', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ 'Chrome_no_sandbox' ],
        customLaunchers: {
          Chrome_no_sandbox: {
            base: 'ChromeHeadless',
            flags: [ '--no-sandbox', '--disable-setuid-sandbox', '--headless', '--disable-gpu' ],
          },
        },
        browserDisconnectTolerance: 2,
        singleRun: false
    });
};
