'use strict';

angular.module('myApp.view1', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'View1/View1.html',
    controller: 'View1Ctrl',
    controllerAs: "View1"

  });
 }])



.controller('View1Ctrl', function() {
	var vm = this;
		vm.departments = ['Financial', 'Infastructure','Business']
        
        
});

