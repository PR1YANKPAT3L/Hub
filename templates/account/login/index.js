'use strict';

define([
	'angular',
	'angularRoute'
], function (angular) {
	angular.module('myApp.loginView', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'templates/account/login/login.html',
			controller: 'loginController'
		});
	}])
	.controller('loginController', ['$scope', function ($scope) {
		$scope.pageClass = 'page-login';
		$scope.toggleAlternativeLogin = function () {
			$(".login_box_primary").addClass("inactive");
			$(".login_box_alternative").removeClass("inactive");
			$scope.text = "Member Login";
		}

		$scope.toggleMemberLogin = function () {
			$(".login_box_primary").removeClass("inactive");
			$(".login_box_alternative").addClass("inactive");
			$scope.text = "Member Login";
		}
	}])
});