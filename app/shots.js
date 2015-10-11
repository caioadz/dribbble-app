'use strict';

angular.module('Shots', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
}])

.controller('ShotsCtrl', function(ShotsResource, $scope, $modal, $location, $http) {
	
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
		likes: 5,
		views: 50,
		comments: 1
	});
	
	$scope.shots = ShotsResource.query();
	
	$scope.openModal = function () {
		$modal.open({templateUrl: 'details'});
	}
});