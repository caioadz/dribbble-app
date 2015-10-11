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
	
	console.log('wow!');
	$http.get('//api.dribbble.com/v1/user?access_token=251eccbc923c4d792366411d7587058eb2a4527dc7fcf2380879172479106e6f');
	
	console.log($scope.test = ShotsResource.query());
	
	$scope.openModal = function () {
		$modal.open({templateUrl: 'details'});
	}
});