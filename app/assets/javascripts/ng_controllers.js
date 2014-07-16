'use strict';

/* ANGULAR CONTROLLERS */

angular.module('myApp.controllers', ['angular-flexslider'])
    .controller('MyCtrlIndex', ['$scope', function($scope) {

        /*INDEX PAGE CONTROLLER*/

    //NavBar
    $scope.$watch('$viewContentLoaded', function(){
        $scope.active='home';
        //$scope.active='viewfour';
    });
    $scope.navclick = function(arg) {
        $scope.active = arg;

    //var tgd = document.getElementById('home').getAttribute("class");
    };

    //Time and Date
    $scope.format_one = "h:mm:ss a";
    $scope.format_two = "fullDate";
    $scope.setMyClass= 'dynamic-clock_one';
    $scope.setMyClass2= 'dynamic-date_one';

        //clock
    $scope.clockMouseOver = function () {

        this.clock_image_model = true;
        this.format_one = "h:mm:ss a";

        if(this.setMyClass === 'dynamic-clock_three') {
           this.setMyClass = 'dynamic-clock_four';
        }
        else {
           this.setMyClass= 'dynamic-clock_one';
           this.current_time_model=true;
        }
    };

    $scope.clockMouseLeave = function ()  {

        this.clock_image_model =false;

        if(this.setMyClass === 'dynamic-clock_three') {
           this.current_time_model=true;
           this.format_one = "h:mm a";
        }
        else if (this.setMyClass === 'dynamic-clock_four') {
            this.setMyClass = 'dynamic-clock_three';
            this.format_one = "h:mm a";
        }
        else {
           this.current_time_model=false;
        }
    };

    $scope.clockOnClick = function () {

         if(this.setMyClass === 'dynamic-clock_three'|| this.setMyClass === 'dynamic-clock_four') {
            this.setMyClass= 'dynamic-clock-hidden';
         }
         else {
            this.format_one = "h:mm a";
            this.setMyClass= 'dynamic-clock_three';
            this.current_time_model=true;
         }
    };

    $scope.timeViewOnClick = function ()  {

        this.setMyClass='dynamic-clock-hidden';
    };

    $scope.timeViewMouseOver = function ()  {

       if (this.setMyClass === 'dynamic-clock_four'){
           this.setMyClass = 'dynamic-clock-hidden';
        }
        else {
            this.format_one = "h:mm:ss a";
            this.setMyClass= 'dynamic-clock_four';
           this.setMyClass += ' dynamic-clock-underline_color'
            }
    };

    $scope.timeViewMouseLeave = function () {

        this.format_one = "h:mm a";

        if (this.setMyClass === 'dynamic-clock_four dynamic-clock-underline_color') {

            this.setMyClass = 'dynamic-clock_three';
        }

        };
/*
    $scope.clockMouseDoubleClick  = function () {

            if( $scope.format_one === "h:mm:ss a"){
                $scope.format_one = "h:mm a ";
            } else{
                $scope.format_one = "h:mm:ss a";
            }
        };*/

            //date
        $scope.dateMouseOver = function () {

            this.date_image_model = true;
            this.format_two =  'fullDate';

            if(this.setMyClass2 === 'dynamic-date_three') {
                this.setMyClass2 = 'dynamic-date_four';
            }
            else {
                this.setMyClass2= 'dynamic-date_one';
                this.current_date_model=true;
            }
        };

        $scope.dateMouseLeave = function ()  {

            this.date_image_model =false;

            if(this.setMyClass2 === 'dynamic-date_three') {
                this.current_date_model=true;
                this.format_two = 'longDate';
            }
            else if (this.setMyClass2 === 'dynamic-date_four') {
                this.setMyClass2 = 'dynamic-date_three';
                this.format_two = 'longDate';
            }
            else {
                this.current_date_model=false;
            }
        };

        $scope.dateOnClick = function () {

            if(this.setMyClass2 === 'dynamic-date_three'|| this.setMyClass2 === 'dynamic-date_four') {
                this.setMyClass2= 'dynamic-date-hidden';
            }
            else {
                this.format_two = 'longDate';
                this.setMyClass2= 'dynamic-date_three';
                this.current_date_model=true;
            }
        };

        $scope.dateViewOnClick = function ()  {

            this.setMyClass2='dynamic-date-hidden';
        };

        $scope.dateViewMouseOver = function ()  {

            if (this.setMyClass2 === 'dynamic-date_four'){
                this.setMyClass2 = 'dynamic-date-hidden';
            }
            else {
                this.format_two = 'fullDate';
                this.setMyClass2= 'dynamic-date_four';
                this.setMyClass2 += ' dynamic-clock-underline_color'
            }
        };

        $scope.dateViewMouseLeave = function () {

            this.format_two = 'longDate';

            if (this.setMyClass2 === 'dynamic-date_four dynamic-clock-underline_color') {

                this.setMyClass2 = 'dynamic-date_three';
            }

        };


        function getTime(zone, success) {
            var url = 'http://json-time.appspot.com/time.json?tz=' + zone,
                ud = 'json' + (+new Date());
            window[ud]= function(o){
                success && success(new Date(o.datetime));
            };
            document.getElementsByTagName('head')[0].appendChild((function(){
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = url + '&callback=' + ud;
                return s;
            })());
        }
        getTime('GMT', function(time){
            // This is where you do whatever you want with the time:
            alert(time);
        });




}]).controller('MyCtrl1', function($scope, $http) {

        /*CONTROLLER FOR PARTIAL ONE*/



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

        /*CONTROLLER FOR PARTIAL TWO*/

        $scope.message = 'Hello From Partial Two';
        $scope.code = 'nSFiQloC3yw';

    }]).controller('MyCtrl3', ['$scope', function($scope) {
        /*CONTROLLER FOR PARTIAL THREE*/
        $scope.message = 'Heello From Partial Three';

    }]).controller('MyCtrl4', ['$scope', function($scope) {
        /*CONTROLLER FOR PARTIAL FOUR*/
        $scope.message = 'Heello From Partial Four';

    }]).controller('MyCtrl5', ['$scope', function($scope) {

        /*CONTROLLER FOR PARTIAL FIVE*/
        $scope.message = 'Heello From Partial Five';



    }]);