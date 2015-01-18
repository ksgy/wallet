'use strict';

angular.module('walletApp')
	.directive('menu', function () {
		return {
			templateUrl: '/src/menu/views/menu.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	});
