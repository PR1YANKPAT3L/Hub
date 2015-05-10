'use strict';

define([
	'angular',
	'angularRoute',
	'angularAnimate',
	'templates/landing/index',
	'templates/account/login/index',
	'templates/account/register/index'
], function (angular, angularRoute, landingView, loginView, registerView) {
	return angular.module('myApp', [
		'ngRoute',
		'ngAnimate',
		'myApp.landingView',
		'myApp.loginView',
		'myApp.registerView'
	]).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: 'templates/account/login/login.html',
			controller: 'loginController'
		})
		.when('/register', {
			templateUrl: 'templates/account/register/register.html',
			controller: 'registerController'
		});

		$routeProvider.otherwise({
			redirectTo: '/home'
		});
	}]);
});