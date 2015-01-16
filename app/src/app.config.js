'use strict';

angular.module('walletApp')
	.config(function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: '/src/common/views/main.html',
				controller: 'MainCtrl'
			})

			.otherwise({
				redirectTo: '/'
			});

	});
