'use strict';
describe('my app', function () {

    browser.get('#view1');

    describe('Nav-bar with time (under-nav)', function () {

        describe('Time Function)', function () {

            it('should display and hide the time', function () {

                browser.get('#view1');
                var ptor = protractor.getInstance();
                var show_time=element(by.css('#showTheTime'));

                expect(show_time.getAttribute('class')).toMatch('hidden');
                expect(show_time.isDisplayed()).toBeFalsy();


                ptor.actions().
                    mouseMove(ptor.findElement(protractor.By.css('#time_with_icon'))).
                    perform();

                expect(show_time.getAttribute('class')).not.toMatch('hidden');
                expect(show_time.getAttribute('class')).toMatch('dynamic-clock_one');
                expect(show_time.isDisplayed()).toBeTruthy();

                ptor.actions().
                    mouseMove(ptor.findElement(protractor.By.css('#showTheTime'))).
                    perform();

                expect(show_time.getAttribute('class')).toMatch('dynamic-clock-hidden');
                expect(show_time.getAttribute('class')).not.toMatch('one');
                expect(show_time.isDisplayed()).toBeFalsy();
            });

        });


        describe('Date Function)', function () {

            it('should display and hide the date', function () {

                browser.get('#view1');
                var ptor = protractor.getInstance();
                var show_date=element(by.css('#showTheDate'));

                expect(show_date.getAttribute('class')).toMatch('hidden');
                expect(show_date.isDisplayed()).toBeFalsy();

                ptor.actions().
                    mouseMove(ptor.findElement(protractor.By.css('#date_with_icon'))).
                    perform();

                expect(show_date.getAttribute('class')).not.toMatch('hidden');
                expect(show_date.getAttribute('class')).toMatch('dynamic-date_one');
                expect(show_date.isDisplayed()).toBeTruthy();

                ptor.actions().
                    mouseMove(ptor.findElement(protractor.By.css('#time_with_icon'))).
                    perform();

                expect(show_date.getAttribute('class')).toMatch('dynamic-date-hidden');
                expect(show_date.getAttribute('class')).not.toMatch('one');
                expect(show_date.isDisplayed()).toBeFalsy();

            });

        });

        describe('GMT Time)', function () {

            it('should display and hide GMT time', function () {

                browser.get('#view1');
                var ptor = protractor.getInstance();
                var gmt=element(by.css('#showTheGMT'));

                expect(gmt.getAttribute('class')).toMatch('ng-hide');
                expect(gmt.isDisplayed()).toBeFalsy();

                ptor.actions().
                    mouseMove(ptor.findElement(protractor.By.css('#GMT_with_icon'))).
                    perform();

                expect(gmt.getAttribute('class')).not.toMatch('ng-hide');
                expect(gmt.isDisplayed()).toBeTruthy();
            });

        });


        describe('Fahrenheit to Celcius Converter)', function () {

            it('should toggle visibility', function () {

                var button_F_to_C = element(by.css('#degrees_F_to_C'));
                var degree_F_to_C = element(by.css('#celcius-to-fahrenheit'));

                expect(degree_F_to_C.isDisplayed()).toBeFalsy();
                button_F_to_C.click();

                expect(degree_F_to_C.isDisplayed()).toBeTruthy();
                button_F_to_C.click();
                expect(degree_F_to_C.isDisplayed()).toBeFalsy();

                //element(by.id("ngsearch")).sendKeys('Charlton');
            });

            it('should convert F to C correctly', function () {

                var button_F_to_C = element(by.css('#degrees_F_to_C'));
                var degree_F_to_C = element(by.css('#celcius-to-fahrenheit'));
                button_F_to_C.click();
                element(by.id("fahrenheit")).sendKeys('100.4');
                expect( element(by.css('#celcius')).getAttribute('value')).toBe('38');

            });

            it('should convert C to F correctly', function () {

                var button_F_to_C = element(by.css('#degrees_F_to_C'));
                var degree_F_to_C = element(by.css('#celcius-to-fahrenheit'));

                element(by.id("fahrenheit")).clear();
                element(by.id("celcius")).clear();
                element(by.id("celcius")).sendKeys('0');
                expect( element(by.css('#fahrenheit')).getAttribute('value')).toBe('32');
                button_F_to_C.click();
            });

        });

        describe('Latitude and Longitude)', function () {

            it('should toggle visibility', function () {

                var button_lat_long = element(by.css('#lat_to_long_button'));
                var lat_long = element(by.css('#lat-to-long'));

                expect(lat_long.isDisplayed()).toBeFalsy();
                button_lat_long.click();

                expect(lat_long.isDisplayed()).toBeTruthy();
                button_lat_long.click();
                expect(lat_long.isDisplayed()).toBeFalsy();
            });

            it('should search and retrieve the correct latitude and longitude', function () {
                var button_lat_long = element(by.css('#lat_to_long_button'));
                button_lat_long.click();
                element(by.css("#google_places_ac")).sendKeys('National College of Ireland');

                ptor.actions().
                    mouseMove(ptor.findElement(protractor.By.css('#GMT_with_icon'))).
                    perform();

                element(by.css("#lat_long_search_btn")).click();
                // element(by.css("#min_expand_button")).click();

                expect(element(by.css("#my_latit_caption")).isDisplayed()).toBeTruthy();



            });

        });
    });
});
