'use strict';

/* Directives */

angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).directive('myCurrentTime', ['$interval', 'dateFilter',
        function ($interval, dateFilter) {

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
    }).directive('myDraggable', ['$document', function ($document) {

        return function (scope, element, attr) {

            var startX = 0, startY = 0, x = 0, y = 0;

            element.css(
                {
                    order: '1px solid red',

                    position: 'relative'

                }
            );

            element.on('mousedown', function (event) {

                //Prevent default dragging of selected content

                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
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

    }]).directive('myYoutube', function ($sce) {
        return {
            restrict: 'EA',
            scope: { code: '=' },
            replace: true,
            template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:50%" width="420" height="315" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function (scope) {
                console.log('here');
                scope.$watch('code', function (newVal) {
                    if (newVal) {
                        scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                    }
                });
            }
        };
    }).directive('bars', function ($parse) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="chart"></div>',
            link: function (scope, element, attrs) {
                var data = attrs.data.split(','),
                    chart = d3.select('#chart')
                        .append("div").attr("class", "chart")
                        .selectAll('div')
                        .data(data).enter()
                        .append("div")
                        .transition().ease("elastic")
                        .style("width", function(d) { return d + "%"; })
                        .text(function(d) { return d + "%"; });
            }
        };
    }).directive('bars2', function ($parse) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="chart2"></div>',
            link: function (scope, element, attrs) {
                var data2 = attrs.data2.split(','),
                    chart = d3.select('#chart2')
                        .append("div").attr("class", "chart2")
                        .selectAll('div')
                        .data(data2).enter()
                        .append("div")
                        .transition().ease("elastic")
                        .style("width", function(d) { return d + "%"; })
                        .text(function(d) { return d + "%"; });
            }
        };
    }).directive('bars3', function ($parse) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="chart3"></div>',
            link: function (scope, element, attrs) {
                var data3 = attrs.data3.split(','),
                    chart = d3.select('#chart3')
                        .append("div").attr("class", "chart3")
                        .selectAll('div')
                        .data(data3).enter()
                        .append("div")
                        .transition().ease("elastic")
                        .style("width", function(d) { return d + "%"; })
                        .text(function(d) { return d + "%"; });
            }
        };
    });