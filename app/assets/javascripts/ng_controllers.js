'use strict';

/* Controllers */

angular.module('myApp.controllers', ['angular-flexslider'])
    .controller('MyCtrlIndex', ['$scope', function($scope) {

    $scope.$watch('$viewContentLoaded', function(){
        $scope.active='home';
        //$scope.active='viewfour';
    });
    $scope.navclick = function(arg) {
        $scope.active = arg;

        //var tgd = document.getElementById('home').getAttribute("class");
        //alert(tgd);
    };

    function hideDiv (myId) {
        document.getElementById(myId).style.visibility = 'hidden';

    }

    function showDiv (myId) {

        document.getElementById(myId).style.visibility = 'visible';
    }

    $scope.dynamicClock ="dynamic-Clock";
    $scope.format = "h:mm:ss a";

    $scope.clockOnClick = function () {

        if( this.dynamicClock === 'dynamic-Clock'){

            this.dynamicClock ="dynamic-Clock-two";

        } else{
            this.dynamicClock ='dynamic-Clock';

        }
    };
    $scope.clockMouseLeave = function (myId) {
        hideDiv(myId);
    };


    $scope.dateMouseOver = function (myId)  {

        showDiv(myId);
        $scope.format ="";
    };

    $scope.dateMouseLeave = function (myId)  {

        hideDiv(myId);
        $scope.format = "h:mm:ss a";
    };
//Show Divs
    $scope.clockMouseOver= function (myId) {

        showDiv(myId);
    };

    $scope.clockMouseDoubleClick  = function () {

        if( $scope.format === "h:mm:ss a"){

            $scope.format = "h:mm a ";
        } else{
            $scope.format = "h:mm:ss a";
        }

    };

    $scope.dateOnClick = function () {

        if( this.dynamicClock === 'dynamic-Clock'){

            this.dynamicClock ="dynamic-Clock-two";

        } else{
            this.dynamicClock ='dynamic-Clock';

        }
    };

}]).controller('MyCtrl1', function($scope, $http) {


 //Flexslider
        $http.get('flexSlider.json').success(function(data) {
            $scope.slides = data;
            });

        $scope.slideShowQ = false;
        $scope.slideShowSpeed = 5000;
        $scope.animationSpeed = 1000;
        $scope.pauseOnHover = "true";
        $scope.pauseOnAction = "true";
        $scope.pauseText="";
        $scope.playText="";
        $scope.controlNav="true";
        $scope.animationLoop="true";
        $scope.prevText="";
        $scope.nextText="";
        $scope.pausePlay="true";
        $scope.directionNav="true";
        $scope.mydraggable="true";
        $scope.before = function(){
            $scope.myVar ="flexBeforeClass";
            };
        $scope.after = function(){
            $scope.myVar ="flexAfterClass"
        };
    })
    .controller('MyCtrl2', ['$scope', function($scope) {

        $scope.message = 'Heello From Partial Two';

    }]).controller('MyCtrl3', ['$scope', function($scope) {
        $scope.message = 'Heello From Partial Three';

    }]).controller('MyCtrl4', ['$scope', function($scope) {
        $scope.message = 'Heello From Partial Four';

    }]).controller('MyCtrl5', ['$scope', function($scope) {
        $scope.message = 'Heello From Partial Five';

    }]);