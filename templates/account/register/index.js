'use strict';

define([
	'angular',
	'angularRoute'
], function (angular) {
	angular.module('myApp.registerView', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/register', {
			templateUrl: 'templates/account/register/register.html',
			controller: 'registerController'
		});
	}])
	.controller('registerController', ['$scope', function ($scope) {
		$scope.pageClass = 'page-register';
		
	}])
});