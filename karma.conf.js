'use strict';

module.exports = function(config) {
	config.set({
		basePath: './',

		files: [
			{ pattern: 'scripts/vendor/angular.min.js', included: false },
			{ pattern: 'scripts/vendor/angular-route.min.js', included: false },
			{ pattern: 'scripts/vendor/angular-mock.js', included: false },
			{ pattern: 'scripts/app/components/**/*.js', included: false },
			{ pattern: 'templates/**/*.js', included: false },
			{ pattern: 'scripts/app/app.js', included: false },
			'scripts/app/require-config.js'
		],

		autoWatch: true,

		frameworks: ['jasmine', 'requirejs'],

		browsers: ['Chrome'],

		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-requirejs',
			'karma-junit-reporter'
		],

		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	});
}