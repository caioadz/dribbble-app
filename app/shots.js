'use strict';

angular.module('Shots', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
}])

.controller('ShotsCtrl', function(ShotsResource, $scope, $uibModal, $location, $http) {
	
	$scope.shots = [];
	
	/*$scope.shots.push({
		likes_count: 100,
		views_count: 300,
		comments_count: 1000,
		images: {
			normal: 'images/pois_1x.png'
		}
	})*/
	
	ShotsResource.query().$promise.then(function(data) {
		$scope.shots = data;
	});
	
	$scope.openModal = function () {
		$uibModal.open({
			templateUrl: 'details',
			size: 'details'
		});
	}
});