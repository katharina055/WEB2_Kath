
var Department = angular.module('myAppDepartment', []);

Department.controller("myController", function($scope){
	$scope.name="Marketing";
	$scope.country="Netherlands";
	$scope.employees1= ["Katharina", "Andrea", "Max"];
	
	
});

