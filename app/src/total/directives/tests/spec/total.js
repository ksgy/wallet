'use strict';

describe('Directive: total/total', function () {

  // load the directive's module
  beforeEach(module('walletApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<total></total>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the total/total directive');
  }));
});
