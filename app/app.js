'use strict';

angular.module('app', [
	'ngRoute',
	'ngAnimate',
	'ngResource',
	'Shots',
	'Auth',
	'ui.bootstrap'
])

.config(function($routeProvider, $locationProvider) {	
	$routeProvider.otherwise({ redirectTo: '404' });	
	$locationProvider.html5Mode({
		enabled: true,
  		requireBase: false
	});	
});