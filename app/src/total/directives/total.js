'use strict';

angular.module('walletApp')
	.directive('total', function () {
		return {
			templateUrl: '/src/total/views/total.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	});
