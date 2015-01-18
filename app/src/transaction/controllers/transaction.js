'use strict';

angular.module('walletApp')
	.controller('TransactionTransactionCtrl', function ($scope, Transactions) {

		$scope.amount = 0;
		$scope.error = '';

		$scope.add = function() {
			if($scope.amount <= 0){
				$scope.error = 'You can\'t add zero or negative number!';
			} else {
				Transactions.add($scope.amount);
				$scope.error = '';
			}
		};
		$scope.remove = function() {
			if(Transactions.getTotal() - $scope.amount < 0){
				$scope.error = 'You can\'t remove that much money! :(';
			} else {
				Transactions.remove($scope.amount);
			}
		};
	});
