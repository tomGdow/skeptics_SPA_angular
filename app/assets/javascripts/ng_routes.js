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
  $routeProvider.when('/view6', {templateUrl: 'commodities', controller: 'MyCtrl6'});
  $routeProvider.when('/view7', {templateUrl: 'commodities/new.html', controller: 'MyCtrl7'});
  $routeProvider.when('/view8', {templateUrl: 'home/partial8.html', controller: 'MyCtrl8'});
  $routeProvider.when('/view9', {templateUrl: 'home/partial9.html', controller: 'MyCtrl9'});//dynamic searching

  $routeProvider.when('/view102', {templateUrl: 'commodities/2', controller: 'MyCtrl10'});
  $routeProvider.when('/view502', {templateUrl: 'commodities/2/edit', controller: 'MyCtrl10'});
  $routeProvider.when('/view105', {templateUrl: 'commodities/5', controller: 'MyCtrl9'});
  $routeProvider.when('/view10', {templateUrl: 'commodities/edit/', controller: 'MyCtrl10'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
