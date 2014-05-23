'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'home/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'home/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view3', {templateUrl: 'home/partial3.html', controller: 'MyCtrl3'});
  $routeProvider.when('/view4', {templateUrl: 'home/partial4.html', controller: 'MyCtrl4'});
  $routeProvider.when('/view5', {templateUrl: 'home/partial5.html', controller: 'MyCtrl5'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
