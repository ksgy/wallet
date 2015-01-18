'use strict';

angular.module('walletApp')
	.controller('MainCtrl', function ($scope, Transactions) {
		$scope.Transactions = Transactions;
	});
