'use strict';

angular.module('Details', ['ngRoute'])

.controller('DetailsCtrl', function($scope, $sce, shot) {
	$scope.shot = shot;
	$scope.shot.description = $sce.trustAsHtml($scope.shot.description);
});