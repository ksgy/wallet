'use strict';

angular.module('walletApp')
	.directive('transaction', function () {
		return {
			templateUrl: 'src/transaction/views/transaction.html',
			restrict: 'E',
			controller: 'TransactionTransactionCtrl',
			link: function postLink(scope, element, attrs) {

			}
		};
	});
