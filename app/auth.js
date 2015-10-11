'use strict';

var client_id = '251eccbc923c4d792366411d7587058eb2a4527dc7fcf2380879172479106e6f';
var client_secret = '1ac7508f9ebe7f6081a029bdb09c72d68f234da850fe2e80712d73767aee786c';
var authorize_url = 'https://dribbble.com/oauth/authorize?client_id=';
var token_url = 'https://dribbble.com/oauth/token';

angular.module('Auth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
}])

.controller('AuthCtrl', function($scope, $window, $http, $location) {
	
	Redirect($location.search()['redirect']);
	GetAuthToken($location.search()['code'], $http);
	
});

function Redirect(redirect) {
	if (redirect) {
		window.location.href = authorize_url + client_id;
	}
}

function GetAuthToken(code, $http) {
	if (code) {
		$http({
			method: 'POST',
			url: token_url,
			headers: { 'Content-Type': 'application/json' },
			data: {
				client_id: client_id,
				client_secret: client_secret,
				code: code
			}
		}).then(GetAuthToken_Success, GetAuthToken_Failure);
	}
}

function GetAuthToken_Success(res) {
	
}

function GetAuthToken_Failure(res) {
	
}