'use strict';

if(window.__karma__) {
	var allTestFiles = [];
	var TEST_REGEXP = /spec\.js$/;

	var pathToModule = function(path) {
		return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
	};

	Object.keys(window.__karma__.files).forEach(function(file) {
		if (TEST_REGEXP.test(file)) {
			// Normalize paths to RequireJS module names.
			allTestFiles.push(pathToModule(file));
		}
	});
}

// Configure the requirejs library with paths and dependencies
require.config({
	paths: {
		angular: '../scripts/vendor/angular.min',
		angularRoute: '../scripts/vendor/angular-route.min',
		angularMocks: '../scripts/vendor/angular-mock',
		angularAnimate: '../scripts/vendor/angular-animate.min',
		text: '../scripts/vendor/text',
		app: '../scripts/app/app',
		niceScroll: '../scripts/vendor/jquery.nicescroll',
		jquery: '../scripts/vendor/jquery-1.11.3.min'
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angularRoute': ['angular'],
		'angularAnimate': ['angular'],
		'angularMocks': {
			deps: ['angular'],
			'exports': 'angular.mock'
		},
		'niceScroll': {
			deps: ['jquery']
		}
	},
	priority: [
		'angular'
	],
	deps: window.__karma__ ? allTestFiles: [],
	callback: window.__karma__ ? window.__karma__.start: null,
	baseUrl: window.__karma__ ? '/base/app' : '',
});

require([
	'angular',
	'app',
	'niceScroll'
], function (angular, app) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	angular.element().ready(function () {
		logConsole("Angular Ready to Inject");
		$("html").niceScroll();
		angular.bootstrap(document, ['myApp']);
	});
});