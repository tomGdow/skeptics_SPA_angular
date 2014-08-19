'use strict';

/* ANGULAR CONTROLLERS */

angular.module('myApp.controllers', [
    'angular-flexslider',
    'ngFitText',
    'ngAnimate',
    'underscore',
    'ngSanitize',
    'ngResource',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.buffering",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster"])
    .run(function($rootScope) {

        $rootScope.toggleShowPara=true;
        $rootScope.toggleCaption=true;
        $rootScope.toggleShowPara2=true;
        $rootScope.toggleCaption2=true;
        $rootScope.toggleShowPara3=true;
        $rootScope.toggleCaption3=true;

        $rootScope.tomcart ="true";

        $rootScope.mouseOverLeave = function (arg1, arg2) {

            //home page: arg2=1
            if(arg1 == false && arg2 ==1)  {
                $rootScope.toggleShowPara =false;
                $rootScope.toggleCaption= false;
            }

            if(arg1 == true && arg2 ==1)  {
                $rootScope.toggleShowPara =true;
                $rootScope.toggleCaption =true;
            }

            //partial8: arg2=2
            if(arg1 == false && arg2 ==2)  {
                $rootScope.toggleShowPara2 =false;
                $rootScope.toggleCaption2= false;
            }

            if(arg1 == true && arg2 ==2)  {
                $rootScope.toggleShowPara2 =true;
                $rootScope.toggleCaption2 =true;
            }

            //partial4: arg2=3
            if(arg1 == false && arg2 ==3)  {
                $rootScope.toggleShowPara3 =false;
                $rootScope.toggleCaption3= false;
            }

            if(arg1 == true && arg2 ==3)  {
                $rootScope.toggleShowPara3 =true;
                $rootScope.toggleCaption3 =true;
            }
        };

        /* $rootScope.globalFoo = function() {
         alert("I'm global foo!");
         };*/

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
        });
        $scope.toggleProductsNav=false;
        $scope.navclick = function(arg) {
            $scope.active = arg;
            if(arg =='viewfive') {
                return $scope.toggleProductsNav=true;
            }
            $scope.toggleProductsNav=false;
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
        $scope.showToggleButton=false;

        $scope.doSearch = function(){
            if($scope.location === ''){
                alert('Directive did not update the location property in parent controller.');
            } else {
                var mylocation  = $scope.location;

                $scope.mylatitude = mylocation.split(',')[0];
                $scope.mylongitude = mylocation.split(',')[1];
                $scope.toggleLatLongCaption=true;
                $scope.showToggleButton=true;
                $scope.minimizeExpand=false;
            }
        };

        $scope.toggleLatLong = function () {
            if (this.longlat) {
                return  $scope.longlat = false;
            }
            return  $scope.longlat = true;
        };

        $scope.toggleView = function () {

            if($scope.toggleLatLongCaption)  {

                this.minimizeExpand=true;

                return  this.toggleLatLongCaption=false;
            }

            if($scope.toggleLatLongCaption==false)  {

                this.minimizeExpand=false;

                return   this.toggleLatLongCaption=true;
            }

        };

        $scope.onFocus = function () {

            this.showToggleButton=false;
            this.toggleLatLongCaption=false;

        };


    }).controller('MyCtrl1', function($scope, $http,chartsService, imgService, flexsliderService) {

        //====CONTROLLER FOR PARTIAL ONE ====

        $scope.mydraggable  =   "true";


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

        //==== Image Transition

        $scope.imageSource  =   imgService.imgBanks.imageSource;
        $scope.imageAltDesc =   imgService.imgBanks.imageAltDesc;
        $scope.captionText  =   imgService.imgBanks.captionText;
        $scope.imageId      =   imgService.imgBanks.imageId;


    })
    .controller('MyCtrl2', function($scope, videoService, $sce) {

        //====CONTROLLER FOR PARTIAL TWO====

        //==== Videogular ====

        $scope.showLargeSmall = function (arg) {

            if(arg===1) {
                if ($scope.vgToggle == true) {

                    $scope.config.width = 720;
                    $scope.config.height = 360;
                    $scope.makeVideoSmall = true;
                    $scope.makeVideoLarge = false;
                    $scope.setVgClass = false;
                    $scope.vgFalse = "vg-video-two";
                    return  this.vgToggle = false
                }
                $scope.config.width = 444;
                $scope.config.height = 228;
                $scope.makeVideoSmall = false;
                $scope.makeVideoLarge = true;
                $scope.setVgClass = true;
                return   this.vgToggle = true;
            }

            if(arg===2) {
                if ($scope.vgToggle2 == true) {

                    $scope.config2.width = 720;
                    $scope.config2.height = 360;
                    $scope.makeVideoSmall2 = true;
                    $scope.makeVideoLarge2 = false;
                    $scope.setVgClass2 = false;
                    $scope.vgFalse2 = "vg-video-two";
                    return  this.vgToggle2 = false
                }

                $scope.config2.width = 444;
                $scope.config2.height = 228;
                $scope.makeVideoSmall2 = false;
                $scope.makeVideoLarge2 = true;
                $scope.setVgClass2 = true;
                return   this.vgToggle2 = true;
            }
        };

        $scope.onFullScreen = function (arg){
            if(arg ==1) {
                $scope.setVgClass = false;
                $scope.vgFalse = "vg-video-three";
                //$scope.toggleOverLayPlay=false;
            }
            if(arg==2) {
                $scope.setVgClass2 = false;
                $scope.vgFalse2 = "vg-video-three";
            }
        };

        $scope.style = function (arg) {
            if(arg ===1) {
                return {
                    'height': $scope.config.height + 'px'
                };
            }
            if(arg ==2)  {
                return {
                    'height': $scope.config2.height + 'px'
                };
            }
        };

        $scope.stretchModes = [
            {label: "None", value: "none"},
            {label: "Fit", value: "fit"},
            {label: "Fill", value: "fill"}
        ];

        //====Ocean View Video
        $scope.vgToggle=true;
        $scope.makeVideoSmall= false;
        $scope.makeVideoLarge=true;
        $scope.setVgClass=true;
        $scope.vgFalse = "vg-video-two";
        $scope.setVgControls2Class= true;

        $scope.vgMouseOver = function () {
            $scope.setVgControlsTwoClass=false;
        };

        $scope.vgMouseLeave = function () {
            $scope.setVgControlsTwoClass=true;
        };

        $scope.config = {
            width: 444,
            height: 228,
            autoHide: true,
            autoPlay: false,
            responsive: true,
            stretch: $scope.stretchModes[2],

            sources: [
                {src: $sce.trustAsResourceUrl(videoService.oceanVideo[0].mp4), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl(videoService.oceanVideo[0].webm), type: "video/webm"},
                {src: $sce.trustAsResourceUrl(videoService.oceanVideo[0].ogg), type: "video/ogg"}
            ],

            theme: {
                url: "../assets/videogular.css",
                playIcon: "&#xe000;",
                pauseIcon: "&#xe001;",
                volumeLevel3Icon: "&#xe002;",
                volumeLevel2Icon: "&#xe003;",
                volumeLevel1Icon: "&#xe004;",
                volumeLevel0Icon: "&#xe005;",
                muteIcon: "&#xe006;",
                enterFullScreenIcon: "&#xe007;",
                exitFullScreenIcon: "&#xe008;"
            },
            plugins: {
                poster: {
                    url: "../assets/oceans-clip.png"
                }
            }
        };

        $scope.vgMouseOver2 = function () {
            $scope.setVgControlsTwoClass2=false;
        };

        $scope.vgMouseLeave2 = function () {
            $scope.setVgControlsTwoClass2=true;
        };

        //=== EarthAsDot video
        $scope.vgToggle2=false;
        $scope.makeVideoSmall2= true;
        $scope.makeVideoLarge2=false;
        $scope.setVgClass2=false;
        $scope.vgFalse2 = "vg-video-two";
        $scope.setVgControlsTwoClass2= true;

        $scope.config2 = {
            width: 720,
            height: 360,
            autoHide: true,
            autoPlay: false,
            responsive: true,
            stretch: $scope.stretchModes[2],

            sources: [
                {src: $sce.trustAsResourceUrl(videoService.earthAsDotVideo[0].mp4), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl(videoService.earthAsDotVideo[0].webm), type: "video/webm"},
                {src: $sce.trustAsResourceUrl(videoService.earthAsDotVideo[0].ogg), type: "video/ogg"}
            ],

            theme: {
                url: "../assets/videogular.css",
                playIcon: "&#xe000;",
                pauseIcon: "&#xe001;",
                volumeLevel3Icon: "&#xe002;",
                volumeLevel2Icon: "&#xe003;",
                volumeLevel1Icon: "&#xe004;",
                volumeLevel0Icon: "&#xe005;",
                muteIcon: "&#xe006;",
                enterFullScreenIcon: "&#xe007;",
                exitFullScreenIcon: "&#xe008;"
            },
            plugins: {
                poster: {
                    url: "../assets/videogular.png"
                }
            }
        };
        //====End Videogular

    }).controller('MyCtrl3', function($scope,  $http, instagram) {

        //====CONTROLLER FOR PARTIAL THREE====
        //===Instagram Feeds
        //Modified from http://tutorialzine.com/2013/08/learn-angularjs-5-examples/
        //See also http://techslides.com/angular-js-demos-examples-and-resources/

        $scope.layout = 'grid';

        $scope.pics = [];

        // Use the instagram service and fetch a list of the popular pics
        instagram.fetchPopular(function(data){
            $scope.pics = data;
        });


    }).controller('MyCtrl4',  function($scope, $http, imgService, dublinSliderService) {

        //====CONTROLLER FOR PARTIAL FOUR====
        //(Sixties Dublin)

        //====Angular Slider ====
        // Called here dublinslider
        // Modified from:  http://www.script-tutorials.com/photo-gallery-with-angularjs-and-css3/
        // See also: http://www.script-tutorials.com/demos/366/index.html#

        $scope.photos= dublinSliderService.dublinSliderData;

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

        //===Small Images
        $scope.imageSource3  =   imgService.imgSchillachi.imageSource;
        $scope.imageAltDesc3 =   imgService.imgSchillachi.imageAltDesc;
        $scope.captionText3  =   imgService.imgSchillachi.captionText;
        $scope.imageId3      =   imgService.imgSchillachi.imageId;


    }).controller('MyCtrl5', function($scope) {

        $scope.toggleProductsNav=true;

        //====CONTROLLER FOR PARTIAL FIVE ====
        //Products Display page

    }).controller('MyCtrl6', ['$scope', function($scope) {

        //====CONTROLLER FOR Commodities ====
        $scope.message = 'Hello From Partial Six';

    }]).controller('MyCtrl7', ['$scope', function($scope) {

        //====CONTROLLER FOR Commodities/new ====
        $scope.message = 'Hello From Partial Seven';


    }]).controller('MyCtrl8', ['$scope', 'myService','imgService',
        function($scope, myService, imgService) {

            //====CONTROLLER FOR PARTIAL EIGHT====
            //(Blog Menu Item)

            /* $scope.callFoo = function() {
             myService.foo();
             };*/

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

        }]).controller('MyCtrl9',
    function($scope, $http,$sce) {

        //====CONTROLLER FOR PARTIAL Nine====

        //Dynamic Searching


        /* $scope.cartflipper = true;

         $scope.tomoover = function (){
         $scope.cartflipper=false;
         };*/


        $scope.layout = 'grid2';
        $scope.message = "Dynamic Search";

        $http.get('./skepticsCommodities.json').success(function(data) {
            $scope.productList = data;
        });

        $scope.orderProp = 'name';
        $scope.alpha="Alphabetical";
        $scope.lowestPrice="Lowest Price";
        $scope.highestPrice="Highest Price";
        $scope.productCategory="Category";
        $scope.productCreated_at="Created At";
        $scope.productUpdatedAt="Updated At";
        $scope.productid="Id";

        //$scope.orderPropAlt = 'email';
        $scope.myFirstName = function(string) {
            return  string.split(' ')[0]
        };

        $scope.checked =false;

        $scope.moreAboutProductOnClick= function () {

            this.checked =false;

        }

    }).controller('MyCtrl10', ['$scope',
        function($scope) {

            //====CONTROLLER FOR Commodities/Edit ====

        }]).controller('MyCtrl11', ['$scope',
        function($scope) {

            //====CONTROLLER FOR your_cart ===

        }]).controller('MyCtrl12',
    function($scope,$http) {

        $scope.message ="hello from partial 12";

        //====CONTROLLER FOR PARTIAL TWELVE====

        $http.get('your_cart').success(function(data2) {
            $scope.yourCart = data2;
        });
    });