'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('myCurrentTime',['$interval', 'dateFilter',
        function($interval, dateFilter) {

            function link(scope, element, attrs) {

                var format,
                    timeoutId;

                function updateTime() {

                    element.text(dateFilter(new Date(), format));
                }

                scope.$watch(attrs.myCurrentTime, function (value) {
                    format = value;
                    updateTime();

                });

                element.on('$destroy', function () {

                    $interval.cancel(timeoutId);
                });

                //Start the UI update proces; save the timeoutId for cancelling

                timeoutId = $interval(function () {
                    updateTime();//update DOM
                }, 1000);

            }

            return {
                link: link
            };
        }]).directive('jqdatepicker', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                $(element).datepicker({
                    dateFormat: 'DD, d  MM, yy',
                    onSelect: function (date) {
                        scope.date = date;
                        scope.$apply();
                    }
                });
            }
        };
    }).directive('myDraggable',['$document', function($document){

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
