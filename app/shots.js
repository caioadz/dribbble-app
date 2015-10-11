'use strict';

angular.module('Shots', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
}])

.controller('ShotsCtrl', function($scope, $modal) {
	
	$scope.shots = [];
	
	$scope.shots.push({
		likes: 0,
		views: 300,
		comments: 10
	});
	
	$scope.shots.push({
		likes: 0,
		views: 300,
		comments: 10
	});
	
	$scope.shots.push({
		likes: 10,
		views: 50,
		comments: 1
	});
	
	$scope.openModal = function () {
		$modal.open({templateUrl: 'details'});
	}
	
});