'use strict';

describe('myApp.employees module', function() {

  beforeEach(module('myApp.employees'));

  describe('employees controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});