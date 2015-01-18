'use strict';

angular.module('walletApp')
	.constant('Settings', {
		currency: 'EUR',
		availableCurrencies: [
			'EUR', 'USD', 'RUB'
		]
	});
