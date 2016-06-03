
var Department = angular.module('myAppDepartment', []);

Department.controller("myController", function($scope){
	$scope.name="Marketing";
	$scope.country="Netherlands";
	$scope.employees= ["Katharina", "Andrea", "Max"];
	
	
});

