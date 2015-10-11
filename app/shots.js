'use strict';

angular.module('Shots', ['ngRoute'])

.controller('ShotsCtrl', function(ShotsResource, $scope, $uibModal) {
	$scope.shots = [];
	
	/*$scope.shots.push({
		likes_count: 100,
		views_count: 300,
		comments_count: 1000,
		title: "Scrolling effect",
		description: "<p>Thanks for you vote guys! The version A wins (unanimous win). <br />I am done with this little project, so I am moving on something new, stay tuned :)</p> <p>I also put it on <strong><a href=\"https://www.behance.net/gallery/30024827/Menu-from-the-world\" rel=\"nofollow\">Behance</a></strong>.</p> <p>That 8mb limit fro GIF is hard but understandable. <a href=\"https://dribbble.com/39\">@Dribbble</a> Do you guys have any plans to support gifv, or increase the limit a little bit? </p> <p>Have a impressive day and take care,</p> <p><strong><a href=\"https://twitter.com/aureliensalomon\" rel=\"nofollow\">Twitter</a></strong> | <strong><a href=\"https://www.behance.net/aureliensalomon\" rel=\"nofollow\">Behance</a></strong> | <strong><a href=\"http://www.linkedin.com/profile/view?id=245944877&amp;trk=nav_responsive_tab_profile_pic%0A\" rel=\"nofollow\">LinkedIn</a></strong></p>",
		images: {
			hidpi: "https://d13yacurqjgara.cloudfront.net/users/30252/screenshots/2285816/yes.gif",
			normal: "https://d13yacurqjgara.cloudfront.net/users/30252/screenshots/2285816/yes_1x.gif",
			teaser: "https://d13yacurqjgara.cloudfront.net/users/30252/screenshots/2285816/yes_teaser.gif"
		},
		user: {
			name: "Aurélien Salomon ➔",
			avatar_url: "https://d13yacurqjgara.cloudfront.net/users/30252/avatars/normal/a8b7eb3a7c2e5a535337f44fa0bda235.png?1421609695",
		},
	});*/
	
	ShotsResource.query().$promise.then(function(data) {
		$scope.shots = data;
	});
	
	$scope.openModal = function (index) {
		$uibModal.open({
			templateUrl: 'details',
			size: 'details',
			controller: 'DetailsCtrl',
			resolve: {
				shot: function() {
					return $scope.shots[index];
				}
			}
		});
	}
});