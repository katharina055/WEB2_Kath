'use strict';
var Task = angular.module('myAppTask', []);

Task.controller("TaskController", function($scope){
    $scope.Tasks = [
        {"number": 1, "name":"Do AngularJS","employee" : "Max" ,"duedate":"02/02/2002" },
        {"number": 2, "name":"Do Math3", "employee" : "Max" ,"duedate":"02/02/2002" },
        {"number": 3, "name":"Do PCS4", "employee" : "Max" ,"duedate":"02/02/2002" },
        {"number": 4, "name":"Take Shower", "employee" : "Dre" ,"duedate":"02/02/2002" },
        {"number": 5, "name":"Become fatter", "employee" : "Kath" ,"duedate":"02/02/2002" }
        
    ];
    })
	


