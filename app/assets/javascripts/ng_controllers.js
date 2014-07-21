'use strict';

/* ANGULAR CONTROLLERS */

angular.module('myApp.controllers', ['angular-flexslider', 'ngFitText', 'ngAnimate', 'underscore'])
    .controller('MyCtrlIndex', function($scope, _) {

        $scope.templates =
            [ { name: 'template1.html', url: 'home/template1.html'},
                { name: 'template2.html', url: 'home/template2.html'} ];
        $scope.template = $scope.templates[0];



        var data = [{tweet:"hello world", id:1}, {tweet:"this is awesome", id: 2}, {tweet: 'wow, this is nice', id: 3}];



        $scope.ids = (_.pluck(data, 'tweet'))[0];



        /*INDEX PAGE CONTROLLER*/
      $scope.textdate = "https://www.thetimenow.com/clock/gmt/greenwich_mean_time?t=n&amp;embed=1&amp;text=16&amp;{{textdate}}&amp;format=24&amp;digitalclock=20&amp;analogclock=60&amp;letter_spacing=-2&amp;bordersize=0&amp;bordercolor=fff&amp;bgcolor=fff&amp;colorloc=fff&amp;colordigital=FFA500&amp;colordate=ffffff&amp;styleloc=normal&amp;styledigital=normal&amp;styledate=normal&amp;right=0" ;
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
    $scope.timezones_model= false;
    $scope.footerModel= false;

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

        $scope.gmtMouseOver = function (){

            this.timezones_model=true;
            this.current_time_model = true;

            //this.setMyClass -= ' dynamic-clock_hidden';
            this.setMyClass += ' dynamic-clock_four';

            this.format_one = "h:mm:ss a";

            if(this.setMyClass === 'dynamic-clock-hidden dynamic-clock_four') {

                this.setMyClass = ' dynamic-clock_three';
                this.setMyClass += ' dynamic-clock_four'

            }
        };

        $scope.gmtMouseLeave = function (){

            this.timezones_model=false;

            if(this.setMyClass === 'dynamic-clock_three'
                || this.setMyClass === 'dynamic-clock_three dynamic-clock_four'
                ) {
                this.setMyClass = 'dynamic-clock_three';
                this.format_one = "h:mm a";
            }

            else {

                this.current_time_model = false;
            }

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

        $scope.dateOnClick = function () {                                    $scope.templates =
            [ { name: 'home/template1.html.erb', url: 'template1.html.erb'},
                { name: 'template2.html', url: 'template2.html'} ];
        $scope.template = $scope.templates[0]

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

        //footer

        $scope.toggleClassModel ="toggleOn";

        $scope.footerMouseOver = function () {

            if (this.toggleClassModel === 'toggleOn') {
                this.footerModel = true;
                this.toggleClassModel = 'toggleOff';
                return false;
            }
             };

        $scope.footerOnClick= function () {

            if (this.toggleClassModel === 'toggleOff') {
                this.footerModel = false;
            }
        };

        $scope.footerMouseAway= function () {
            this.toggleClassModel = 'toggleOn';
        };
    }).controller('MyCtrl1', function($scope, $http) {

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

    }]).controller('MyCtrl6', ['$scope', function($scope) {

        /*CONTROLLER FOR PARTIAL SIX */
        $scope.message = 'Hello From Partial Six';

    }]).controller('MyCtrl7', ['$scope', function($scope) {

        /*CONTROLLER FOR PARTIAL SEVEN */
        $scope.message = 'Hello From Partial Seven';

    }]);