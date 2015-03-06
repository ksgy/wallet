'use strict';

angular.module('walletApp')
	.directive('recent', function () {
	return {
		templateUrl: 'src/recent/views/recent.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {

		}
	};
	});
