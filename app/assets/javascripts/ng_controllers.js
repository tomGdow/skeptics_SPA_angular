'use strict';


/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', function($scope) {

        $scope.message = 'Hello From Partial One';

    }])
    .controller('MyCtrl2', ['$scope', function($scope) {

        $scope.message = 'Hello From Partial Two';

    }]).controller('MyCtrl3', ['$scope', function($scope) {
        $scope.message = 'Hello From Partial Three';

    }]).controller('MyCtrl4', ['$scope', function($scope) {
        $scope.message = 'Hello From Partial Four';

    }]).controller('MyCtrl5', ['$scope', function($scope) {
        $scope.message = 'Hello From Partial Five';

    }]).controller('MyCtrlNav', ['$scope', function($scope) {

        $scope.$watch('$viewContentLoaded', function(){
            $scope.active='home';
            //$scope.active='viewfour';
        });
        $scope.navclick = function(arg) {
            $scope.active = arg;

            //var tgd = document.getElementById('home').getAttribute("class");
            //alert(tgd);
        };
    }]);