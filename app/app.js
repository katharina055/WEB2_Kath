'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.departments',
  'myApp.employees',
  'myApp.tasks',
  'myApp.dashboard',
  'ui.bootstrap',
  


  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.otherwise({redirectTo: '/departments'});

  
}]);
