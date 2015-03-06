'use strict';

angular.module('walletApp')
	.directive('menu', function () {
		return {
			templateUrl: 'src/menu/views/menu.html',
			restrict: 'E',
			controller: 'MenuMenuCtrl',
			link: function postLink(scope, element, attrs) {
				var nav = responsiveNav('.nav-collapse', {
					label: '<i class="fa fa-bars"></i>'
				});
			}
		};
	});
