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
    }]).directive('myDraggable',['$document', function($document){

        return function(scope, element, attr) {

            var startX = 0, startY= 0, x= 0, y=0;

            element.css(

                {
                    order: '1px solid red',

                    position: 'relative'

                }
            );

            element.on('mousedown', function (event){

                //Prevent default dragging of selected content

                event.preventDefault();
                startX = event.pageX -x;
                startY = event.pageY -y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);

            });

            function mousemove(event) {

                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({

                    top: y + 'px',
                    left: x + 'px'
                });
            }

            function mouseup() {

                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        };

    }]);