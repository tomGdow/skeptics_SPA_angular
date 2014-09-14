'use strict';
describe('my app', function () {

    //==helper hexToRgb ===
    //modified from here:http://stackoverflow.com/a/11508164/499167
    function hexToRgba(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        var str = 'rgba(';
        str += [r, g, b, 1].join(', ');
        str += ')';
        return str;
    }

    browser.get('#view1');

    describe('Nav-bar with time (under-nav)', function () {

        var skepticsOrange = 'FFA500';
        var navBarGray = '999999';

        describe('Time Function)', function () {

            var show_time_button = $('#time_with_icon');

            it('should display and hide the time', function () {

                browser.get('#view1');
                var show_time = $('#showTheTime');

                expect(show_time.getAttribute('class')).toMatch('hidden');
                expect(show_time.isDisplayed()).toBeFalsy();

                browser.actions().mouseMove($('#time_with_icon')).perform();

                expect(show_time.getAttribute('class')).not.toMatch('hidden');
                expect(show_time.getAttribute('class')).toMatch('dynamic-clock_one');
                expect(show_time.isDisplayed()).toBeTruthy();

                browser.actions().mouseMove($('#showTheTime')).perform();

                expect(show_time.getAttribute('class')).toMatch('dynamic-clock-hidden');
                expect(show_time.getAttribute('class')).not.toMatch('one');
                expect(show_time.isDisplayed()).toBeFalsy();
            });

            it('should display the correct color', function () {

                expect(show_time_button.getCssValue('color')).toBe(hexToRgba(navBarGray));
                show_time_button.click();
                expect(show_time_button.getCssValue('color')).toBe(hexToRgba(skepticsOrange));
            });


            it('should display the correct icon', function () {

                expect(show_time_button.getAttribute('class')).toContain('fa fa-clock-o');

            });

        });

        describe('Date Function)', function () {

            var show_date_button = $('#date_with_icon');

            it('should display and hide the date', function () {

                browser.get('#view1');
                var show_date = $('#showTheDate');

                expect(show_date.getAttribute('class')).toMatch('hidden');
                expect(show_date.isDisplayed()).toBeFalsy();

                browser.actions().mouseMove($('#date_with_icon')).perform();

                expect(show_date.getAttribute('class')).not.toMatch('hidden');
                expect(show_date.getAttribute('class')).toMatch('dynamic-date_one');
                expect(show_date.isDisplayed()).toBeTruthy();

                browser.actions().mouseMove($('#time_with_icon')).perform();

                expect(show_date.getAttribute('class')).toMatch('dynamic-date-hidden');
                expect(show_date.getAttribute('class')).not.toMatch('one');
                expect(show_date.isDisplayed()).toBeFalsy();

            });

            it('should display the correct color', function () {

                expect(show_date_button.getCssValue('color')).toBe(hexToRgba(navBarGray));
                show_date_button.click();
                expect(show_date_button.getCssValue('color')).toBe(hexToRgba(skepticsOrange));
            });

            it('should display the correct icon', function () {
                expect(show_date_button.getAttribute('class')).toContain('fa fa-calendar');
            });

        });

        describe('GMT Time)', function () {

            var gmt = $('#showTheGMT');
            var gmt_button = $('#GMT_with_icon');

            it('should display and hide GMT time', function () {

                browser.get('#view1');
                var ptor = protractor.getInstance();

                expect(gmt.getAttribute('class')).toMatch('ng-hide');
                expect(gmt.isDisplayed()).toBeFalsy();

                ptor.actions().
                    mouseMove(ptor.findElement(protractor.By.css('#GMT_with_icon'))).
                    perform();

                expect(gmt.getAttribute('class')).not.toMatch('ng-hide');
                expect(gmt.isDisplayed()).toBeTruthy();
            });

            it('should display the correct icon', function () {
                expect(gmt_button.getAttribute('class')).toContain('fa-sun-o');
            });

        });


        describe('Fahrenheit to Celcius Converter)', function () {

            var button_F_to_C = $('#degrees_F_to_C');
            var degree_F_to_C = $('#celcius-to-fahrenheit');

            it('should toggle visibility', function () {

                expect(degree_F_to_C.isDisplayed()).toBeFalsy();
                button_F_to_C.click();
                expect(degree_F_to_C.isDisplayed()).toBeTruthy();
                button_F_to_C.click();
                expect(degree_F_to_C.isDisplayed()).toBeFalsy();

                //element(by.id("ngsearch")).sendKeys('Charlton');
            });

            it('should convert F to C correctly', function () {

                button_F_to_C.click();
                element(by.id("fahrenheit")).sendKeys('100.4');
                expect($('#celcius').getAttribute('value')).toBe('38');

            });

            it('should convert C to F correctly', function () {

                element(by.id("fahrenheit")).clear();
                element(by.id("celcius")).clear();
                element(by.id("celcius")).sendKeys('0');
                expect($('#fahrenheit').getAttribute('value')).toBe('32');
                button_F_to_C.click();
            });

            it('should display the correct icon', function () {
                expect(button_F_to_C.getAttribute('class')).toContain('fa-umbrella');
            });

        });
        describe('Latitude and Longitude)', function () {

            var lat_long_panel = $('#lat-to-long');
            var menu_item_lat_long = $('#lat_to_long_button');
            var input_box = $("#google_places_ac");
            var search_button = $('#lat_long_search_btn');
            var longitude_value = $('#my_longitude');
            var latitude_value = $('#my_latitude');
            var latitude_caption = $('#my_latit_caption');
            var longitude_caption = $('#my_longit_caption');
            var minimize_expand_button = $('#min_expand_button');
            var check_my_location = 'Dublin, Ireland';

            it('should toggle visibility', function () {

                expect(lat_long_panel.isDisplayed()).toBeFalsy();
                expect(input_box.isDisplayed()).toBeFalsy();
                expect(search_button.isDisplayed()).toBeFalsy();

                menu_item_lat_long.click();

                expect(lat_long_panel.isDisplayed()).toBeTruthy();
                expect(input_box.isDisplayed()).toBeTruthy();
                expect(search_button.isDisplayed()).toBeTruthy();

                menu_item_lat_long.click();

                expect(lat_long_panel.isDisplayed()).toBeFalsy();
                expect(input_box.isDisplayed()).toBeFalsy();
                expect(search_button.isDisplayed()).toBeFalsy();
            });

            it('should retrieve the correct latitude and longitude', function () {

                menu_item_lat_long.click();
                expect(latitude_caption.isDisplayed()).toBeFalsy();
                expect(longitude_caption.isDisplayed()).toBeFalsy();

                input_box.sendKeys(check_my_location).then(
                    function () {

                        browser.waitForAngular();
                        input_box.sendKeys(protractor.Key.ARROW_UP).then(
                            function () {
                                browser.waitForAngular();
                                input_box.sendKeys(protractor.Key.ARROW_DOWN).then(
                                    function () {

                                        browser.waitForAngular();
                                        input_box.sendKeys(protractor.Key.ARROW_DOWN).then(
                                            function () {

                                                browser.waitForAngular();
                                                input_box.sendKeys(protractor.Key.ARROW_DOWN).then(
                                                    function () {

                                                        browser.waitForAngular();
                                                        input_box.sendKeys(protractor.Key.ARROW_UP).then(
                                                            function () {

                                                                browser.waitForAngular();
                                                                input_box.sendKeys(protractor.Key.ENTER).then(
                                                                    function () {

                                                                        browser.waitForAngular();
                                                                        search_button.click();
                                                                    }
                                                                )
                                                            }
                                                        )
                                                    }
                                                )

                                            }
                                        )
                                    }
                                )

                            }
                        )

                    }
                );
                /*                browser.waitForAngular();
                 input_box.sendKeys(protractor.Key.ARROW_DOWN);
                 browser.waitForAngular();
                 input_box.sendKeys(protractor.Key.ARROW_DOWN);
                 browser.waitForAngular();
                 input_box.sendKeys(protractor.Key.ARROW_UP);
                 browser.waitForAngular();
                 input_box.sendKeys(protractor.Key.ENTER);
                 browser.waitForAngular();
                 search_button.click();*/

                expect(latitude_caption.isDisplayed()).toBeTruthy();
                expect(longitude_caption.isDisplayed()).toBeTruthy();
                expect(longitude_value.isDisplayed()).toBe(true);
                expect(latitude_value.isDisplayed()).toBe(true);
                expect(latitude_value.getText()).toContain('53');
                expect(longitude_value.getText()).toContain('6');

            });

            it('should not display captions when minimized', function () {
                minimize_expand_button.click();
                expect(latitude_caption.isDisplayed()).toBeFalsy();
                expect(longitude_caption.isDisplayed()).toBeFalsy();
                expect(latitude_value.getText()).toContain('53');
                expect(longitude_value.getText()).toContain('6');
                minimize_expand_button.click();
                expect(latitude_caption.isDisplayed()).toBeTruthy();
                expect(longitude_caption.isDisplayed()).toBeTruthy();
                menu_item_lat_long.click();
            });
        });

        describe('Cart Button)', function () {
            browser.get('#view1');
            it('should display the Cart  when clicked', function () {
                var cart_page_message = element(by.binding('viewMessageTwelve'));
                var little_cart = $('#fa-shopping-cart');
                expect(little_cart.isDisplayed()).toBeTruthy();
                little_cart.click();
                expect(cart_page_message.getText()).toBe('Detailed Cart');
                expect(little_cart.isDisplayed()).toBeFalsy();

            });
        });
    });
});
