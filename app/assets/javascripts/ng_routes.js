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

  $routeProvider.when('/view1',  {templateUrl: 'home/partial1.html', controller: 'MyCtrl1'}); //home
  $routeProvider.when('/view2',  {templateUrl: 'home/partial2.html', controller: 'MyCtrl2'}); //videos
  $routeProvider.when('/view3',  {templateUrl: 'home/partial3.html', controller: 'MyCtrl3'}); //Instagram
  $routeProvider.when('/view4',  {templateUrl: 'home/partial4.html', controller: 'MyCtrl4'}); //Sixties Dublin
  $routeProvider.when('/view5',  {templateUrl: 'home/partial5.html', controller: 'MyCtrl5'}); //Dynamic Searching
  $routeProvider.when('/view6',  {templateUrl: 'commodities', controller: 'MyCtrl6'});
  $routeProvider.when('/view7',  {templateUrl: 'commodities/new.html', controller: 'MyCtrl7'});
  $routeProvider.when('/view8',  {templateUrl: 'home/partial8.html', controller: 'MyCtrl8'}); //Blog
  $routeProvider.when('/view9',  {templateUrl: 'home/partial9.html', controller: 'MyCtrl9'});//dynamic searching
  $routeProvider.when('/view10', {templateUrl: 'commodities/edit/', controller: 'MyCtrl10'});
  $routeProvider.when('/view11', {templateUrl: 'your_cart', controller: 'MyCtrl11'});
  $routeProvider.when('/view12', {templateUrl: 'home/partial12.html', controller: 'MyCtrl12'});//Detailed Cart
  $routeProvider.when('/view13', {templateUrl: 'home/partial13.html', controller: 'MyCtrl13'});//Dribbble
  $routeProvider.when('/view14', {templateUrl: 'home/partial14.html', controller: 'MyCtrl14'});//Dribbble

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
