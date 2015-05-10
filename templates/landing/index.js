'use strict';

define([
	'angular',
	'angularRoute'
], function (angular) {
	angular.module('myApp.landingView', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'templates/landing/landing.html',
			controller: 'landingController'
		});
	}])
	.controller('landingController', ['$scope', '$location', function ($scope, $location) {
		$scope.pageClass = 'page-landing';
		$scope.mainStyle = function () {
			return "height: " + window.innerHeight + "px";
		}

		$scope.infoStyle = function () {
			return "height: " + window.innerHeight + "px";
		}

		$scope.toggleLogin = function () {
			$location.path('/login');
		}

		$scope.toggleRegister = function () {
			$location.path('/register');
		}
	}])
});