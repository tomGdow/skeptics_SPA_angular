'use strict';

/* ANGULAR CONTROLLERS */

angular.module('myApp.controllers', ['angular-flexslider',
                                     'ngFitText',
                                     'ngAnimate',
                                     'underscore'])
    .run(function($rootScope) {

         //$rootScope.imageSource  =   imgService.imgBanks.imageSource;
        // $rootScope.imageAltDesc =   imgService.imgBanks.imageAltDesc;
        // $rootScope.captionText  =   imgService.imgBanks.captionText;
        // $rootScope.imageId      =   imgService.imgBanks.imageId;

        // $rootScope.toggleShow=true;

        $rootScope.globalFoo = function() {
            alert("I'm global foo!");
        };

}).controller('MyCtrlIndex', function($scope, _) {

        //====INDEX PAGE CONTROLLER====

        /*
                var data = [{tweet:"hello world", id:1}, {tweet:"this is awesome", id: 2}, {tweet: 'wow, this is nice', id: 3}];
                $scope.ids = (_.pluck(data, 'tweet'))[0];*/

        $scope.format_one       =   "h:mm:ss a";
        $scope.format_two       =   "fullDate";
        $scope.setMyClass       =   'dynamic-clock_one';
        $scope.setMyClass2      =   'dynamic-date_one';
        $scope.timezones_model  =   false;
        $scope.footerModel      =   true;
        $scope.toggleLocation   =   true;
        $scope.cfConvModel      =   false;
        $scope.longlat          =   false;
        $scope.toggleLatLongCaption = false;
        $scope.textdate = "https://www.thetimenow.com/clock/gmt/greenwich_mean_time?t=n&amp;embed=1&amp;text=16&amp;{{textdate}}&amp;format=24&amp;digitalclock=20&amp;analogclock=60&amp;letter_spacing=-2&amp;bordersize=0&amp;bordercolor=fff&amp;bgcolor=fff&amp;colorloc=fff&amp;colordigital=FFA500&amp;colordate=ffffff&amp;styleloc=normal&amp;styledigital=normal&amp;styledate=normal&amp;right=0" ;


    //====NavBar
    $scope.$watch('$viewContentLoaded', function(){
        $scope.active='home';
        //$scope.active='viewfour';
    });
    $scope.navclick = function(arg) {
        $scope.active = arg;

    };

    //====Time and Date

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

        this.clock_image_model = false;

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
            this.setMyClass = 'dynamic-clock_three';
            this.current_time_model=true;
         }
    };

    $scope.timeViewOnClick = function ()  {
        this.setMyClass='dynamic-clock-hidden';
        };

        $scope.gmtMouseOver = function (){

            $scope.showtime =true;
            $scope.toggleLocation=false;

            this.current_time_model = true;
            this.setMyClass += ' dynamic-clock_four';
            this.format_one = "h:mm:ss a";

            if(this.setMyClass === 'dynamic-clock-hidden dynamic-clock_four') {
                this.setMyClass = ' dynamic-clock_three';
                this.setMyClass += ' dynamic-clock_four'
                }
            };

        $scope.gmtMouseLeave = function (){
            $scope.showtime =false;
            $scope.toggleLocation=true;

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

    //====Footer
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

      //====Farentheit to Celcius

          //modified from  OverZealous at StackOverflow
            // see:
            // http://plnkr.co/edit/0n0golhEzU7dokMOkHN6?p=preview
            // http://stackoverflow.com/a/17626761

        $scope.edited = null;
        $scope.markEdited = function(which) {
            $scope.edited = which;
        };

        $scope.$watch('fahrenheit', function(value) {
            if($scope.edited == 'F') {
                //console.log(value+'C -> F');
                $scope.celsius = (value - 32) * 5.0/9.0;
            }
        });
        $scope.$watch('celsius', function(value) {
            if($scope.edited == 'C') {
                //console.log(value+'F -> C');
                $scope.fahrenheit = value * 9.0 / 5.0 + 32;
            }
        });

      //==== Celcius to Fahrenheit Button

        $scope.toggleCelciusNav = function () {
            if (this.cfConvModel) {
                return  $scope.cfConvModel = false;
            }
            return  $scope.cfConvModel = true;
        };

       //==== Latitude and Longitude

          //modified from; http://jsfiddle.net/mrajcok/pEq6X/
          //see also http://techslides.com/angular-js-demos-examples-and-resources/

        $scope.location = '';

        $scope.doSearch = function(){
            if($scope.location === ''){
                alert('Directive did not update the location property in parent controller.');
            } else {
                var mylocation  = $scope.location;

                $scope.mylatitude = mylocation.split(',')[0];
                $scope.mylongitude = mylocation.split(',')[1];
                $scope.toggleLatLongCaption=true;

            }
        };

        $scope.toggleLatLong = function () {
            if (this.longlat) {
                return  $scope.longlat = false;
            }
            return  $scope.longlat = true;
        };


    }).controller('MyCtrl1', function($scope, $http,chartsService, imgService, flexsliderService) {

        //====CONTROLLER FOR PARTIAL ONE ====

        $scope.mydraggable      =   "true";
        //$scope.toggleOnTab      =   true;//fade paragraph

        //====Flexslider
         //modified from: https://github.com/thenikso/angular-flexslider

            //old way of getting data
            //$http.get('flexSlider.json').success(function (data) {
             //   $scope.slides = data;
            //});

        $scope.slides = flexsliderService.flexdata;

        $scope.slideShowQ       =   false;
        $scope.slideShowSpeed   =   5000;
        $scope.animationSpeed   =   1000;
        $scope.pauseOnHover     =   "true";
        $scope.pauseOnAction    =   "true";
        $scope.pauseText        =   "";
        $scope.playText         =   "";
        $scope.controlNav       =   "true";
        $scope.animationLoop    =   "true";
        $scope.prevText         =   "";
        $scope.nextText         =   "";
        $scope.pausePlay        =   "true";
        $scope.directionNav     =   "true";

        $scope.before = function () {
            $scope.myVar = "flexBeforeClass";
        };
        $scope.after = function () {
            $scope.myVar = "flexAfterClass"
        };

      //====Chart
          //modified from http://codepen.io/danielemoraschi/pen/qFmol
          //see also http://techslides.com/angular-js-demos-examples-and-resources/

        $scope.renderYear = (chartsService.dataYears)[0];
        $scope.mydata = (chartsService.dataOne).toString();
        $scope.mydata2 = (chartsService.dataTwo).toString();
        $scope.mydata3 = (chartsService.dataThree).toString();

        $scope.data1model = true;
        $scope.toggleDataOne = function () {
            this.data1model = true;
            this.data2model = false;
            this.data3model = false;
            $scope.renderYear =  (chartsService.dataYears)[0];
        };

        $scope.toggleDataTwo = function () {
            this.data2model = true;
            this.data1model = false;
            this.data3model = false;
            $scope.renderYear = $scope.renderYear = (chartsService.dataYears)[1];
        };
        $scope.toggleDataThree = function () {
            this.data3model = true;
            this.data1model = false;
            this.data2model = false;
            //$scope.renderYear= 2014;
            $scope.renderYear = $scope.renderYear = (chartsService.dataYears)[2];
        };

        //=== original chart code
        //$http.get('charts.json').success(
        // function (data) {
        //  $scope.chartdata = data;
        //$scope.mydata = (($scope.chartdata)[0]).toString();
        // $scope.mydata2 = ($scope.chartdata)[1].toString();
        //$scope.mydata3 = ($scope.chartdata)[2].toString();


        //Uncommenting above 3 while commenting-out corresponding 3 below works initially
        //but fails on partial reload (but not on full refresh)
        // });

    //==== Image Transition

        $scope.imageSource  =   imgService.imgBanks.imageSource;
        $scope.imageAltDesc =   imgService.imgBanks.imageAltDesc;
        $scope.captionText  =   imgService.imgBanks.captionText;
        $scope.imageId      =   imgService.imgBanks.imageId;

        $scope.toggleShowPara=true;
        $scope.toggleCaption=true;

        $scope.MouseOverLeave = function (arg1, arg2) {


            if(arg1 == false && arg2 ==1)  {
                $scope.toggleShowPara =false;
                $scope.toggleCaption= false;
            }

            if(arg1 == true && arg2 ==1)  {
                $scope.toggleShowPara =true;
                $scope.toggleCaption =true;
            }
        }
    })
    .controller('MyCtrl2', ['$scope', function($scope) {

        //====CONTROLLER FOR PARTIAL TWO====

        $scope.message = 'Hello From Partial Two';
        $scope.code = 'nSFiQloC3yw';

    }]).controller('MyCtrl3', function($scope,  $http) {

        //====CONTROLLER FOR PARTIAL THREE====
        $scope.message = 'Heello From Partial Three';

        var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fdailyjs.com%2Fatom.xml'%20and%20itemPath%3D'feed.entry'&format=json&diagnostics=true&callback=JSON_CALLBACK";

        $http.jsonp(url).
            success(function(data, status, headers, config) {
                $scope.feed = {
                    title: 'DailyJS',
                    items: data.query.results.entry
                };
            }).
            error(function(data, status, headers, config) {
                console.error('Error fetching feed:', data);
            });

    }).controller('MyCtrl4',  function($scope, $http) {



        //====CONTROLLER FOR PARTIAL FOUR====
            //(Sixties Dublin)

        //====Angular Slider ====
          // Called here dublinslider
          // Modified from:  http://www.script-tutorials.com/photo-gallery-with-angularjs-and-css3/
          // See also: http://www.script-tutorials.com/demos/366/index.html#

        $http.get('dublinSlider.json').success(function(data) {
            $scope.photos = data;
        });

        $scope.showHideCaptions=false;
        $scope.showHideArrows=false;

        // initial image index
        $scope._Index = 0;

        // if a current image is the same as requested image
        $scope.isActive = function (index) {
            return $scope._Index === index;
        };

        // show prev image
        $scope.showPrev = function () {
            $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
        };

        // show next image
        $scope.showNext = function () {
            $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
        };

        // show a certain image
        $scope.showPhoto = function (index) {
            $scope._Index = index;
        };

        $scope.mouseOverDubImg = function () {
            $scope.showHideCaptions=true;
            $scope.showHideArrows=true;
            $scope.togglebuttonlist=true;//show the button
        };

        $scope.mouseLeaveDubSlider = function () {
            $scope.showHideCaptions=false;
            $scope.showHideArrows=false;
        };

        $scope.mouseOverSliderNav = function(){
            $scope.showHideArrows=false;
            $scope.showHideCaptions=true;
            $scope.togglebuttonlist=true;//show the button
        };

    //====Google Maps

        $http.get('googleMaps.json').success(function(data) {
            $scope.googleAddress = data;
        });

        $scope.toggleslideshow=true;
        $scope.togglegmap=false;
        $scope.toggleslideshowButton=true;
        $scope.togglegmapButton=false;
        $scope.togglebuttonlist=false;
        var address = "College Green, Dublin, Ireland";

        function FindLocation(address) {

            // Modified from original code written by John Fitzpatrick (M.Sc, NCI)

          var  geocoder = new google.maps.Geocoder();
            InitializeMap();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                }
                else {
                    alert("Not successful: " + status);
                }
            });
        }

        $scope.updateGoogle = function(id) {

            switch(id){

                case 0: address = $scope.googleAddress[0].addressOne;
                    break;
                case 1: address = $scope.googleAddress[0].addressTwo;
                    break;
                case 2: address = $scope.googleAddress[0].addressThree;
                    break;
                case 3: address = $scope.googleAddress[0].addressFour;
                    break;
                case 4: address = $scope.googleAddress[0].addressFive;
                    break;
            }

            FindLocation(address);
        };

        $scope.toggleSliderGmap = function () {
            $scope.toggleslideshow=false;
            $scope.togglegmap=true;
            $scope.toggleslideshowButton=false;
            $scope.togglegmapButton=true;
            //$scope.buttonToggleSliderGoogle=false;
        };

        $scope.toggleSliderGmap2 = function () {
            $scope.toggleslideshow=true;
            $scope.togglegmap=false;
            $scope.toggleslideshowButton=true;
            $scope.togglegmapButton=false;
        };

        $scope.mouseOverGoogleMap =function () {
            $scope.togglebuttonlist=true;//show the button
        };

        $scope.mapAndSlide =function() {
            $scope.togglebuttonlist=false;
        };

        //====tab view

        $scope.selected = 'first';
        $scope.toggleOnTabc =true;

       $scope.tabbedImgMouseover= function ( ) {

           $scope.toggleOnTab=false;
       };

        $scope.tabbedImgMouseleave = function () {

            $scope.toggleOnTab=true;
        };



    }).controller('MyCtrl5', function($scope) {

        //====CONTROLLER FOR PARTIAL FIVE ====

    }).controller('MyCtrl6', ['$scope', function($scope) {

        //====CONTROLLER FOR PARTIAL Six ====
        $scope.message = 'Hello From Partial Six';

    }]).controller('MyCtrl7', ['$scope', function($scope) {

        //====CONTROLLER FOR PARTIAL Seven ====
        $scope.message = 'Hello From Partial Seven';

    }]).controller('MyCtrl8', ['$scope', 'myService','imgService',
        function($scope, myService, imgService) {

        //====CONTROLLER FOR PARTIAL EIGHT====
           //(Blog Menu Item)


            $scope.callFoo = function() {
                myService.foo();
            };




          $scope.selected = 'first'; // tab view

         //====Flip picture 180 degrees ====

        $scope.pictureFlipper = false;
        $scope.toggleFlipLegend=true;
        $scope.toggleFlipLegendWrapper="true";
        $scope.obj = { "nameone": "James Watson",
                       "nametwo": "Marie Curie"};

        $scope.flipPicture = function () {
            if (this.pictureFlipper) {
                this.toggleFlipLegend=true;
                return  this.pictureFlipper = false;
            }
            this.toggleFlipLegend=false;
            return  this.pictureFlipper = true;
        };

        $scope.flipPictMouseover = function () {
            this.toggleFlipLegendWrapper=false;
        };
        $scope.flipPictMouseleave = function () {
            this.toggleFlipLegendWrapper=true;
        };

        //====Small Image Transitions ====

            $scope.imageSource2  =   imgService.imgPele.imageSource;
            $scope.imageAltDesc2 =   imgService.imgPele.imageAltDesc;
            $scope.captionText2  =   imgService.imgPele.captionText;
            $scope.imageId2      =   imgService.imgPele.imageId;

            $scope.imageSource3  =   imgService.imgSchillachi.imageSource;
            $scope.imageAltDesc3 =   imgService.imgSchillachi.imageAltDesc;
            $scope.captionText3  =   imgService.imgSchillachi.captionText;
            $scope.imageId3      =   imgService.imgSchillachi.imageId;



            $scope.toggleShow3=true;
            $scope.toggleFlipLegendWrapper3=true;
            $scope.toggleShow4=true; //toggleOnTab,used to be
            $scope.toggleFlipLegendWrapper4=true;




    }]);