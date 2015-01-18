'use strict';

angular.module('walletApp')
	.controller('MenuMenuCtrl', function ($scope, Transactions) {
		$scope.reset = Transactions.reset;
	});
