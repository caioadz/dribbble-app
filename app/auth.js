'use strict';

angular.module('Auth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
}])

.controller('AuthCtrl', function($scope, $window) {
	
	$scope.client_id = 'd91d0cc0171bcec0a272770480fa1c30a66d5bc095c5929b3bf0601ab7fbed1a';
	$scope.client_secret = '1ac7508f9ebe7f6081a029bdb09c72d68f234da850fe2e80712d73767aee786c';
	
	$scope.authorize = function() {
		$window.location.href = 'https://dribbble.com/oauth/authorize?client_id=' + $scope.client_id;
	}
	
});