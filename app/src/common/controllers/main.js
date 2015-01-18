'use strict';

angular.module('walletApp')
	.controller('MainCtrl', function ($scope, Transactions, Settings) {
		$scope.Transactions = Transactions;
		$scope.Settings = Settings;
	});
