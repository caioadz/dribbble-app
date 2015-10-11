'use strict';

angular.module('Shots', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
}])

.controller('ShotsCtrl', function(ShotsResource, $scope, $modal, $location, $http) {
	
	ShotsResource.query().$promise.then(function(data) {
		$scope.shots = data;
	});
	
	$scope.openModal = function () {
		$modal.open({templateUrl: 'details'});
	}
});