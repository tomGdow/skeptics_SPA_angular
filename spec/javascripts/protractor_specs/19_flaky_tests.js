'use strict';

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

describe('my app', function () {

    var dropdown_panel_latlong = $('#lat-to-long');
    var menu_item_lat_long = $('#lat_to_long_button');
    var input_box = $("#google_places_ac");
    var search_button = $('#lat_long_search_btn');
    var longitude_value = $('#my_longitude');
    var latitude_value = $('#my_latitude');
    var latitude_caption = $('#my_latit_caption');
    var longitude_caption = $('#my_longit_caption');
    var minimize_expand_button = $('#min_expand_button');
    var check_my_location = 'Dublin, Ireland';

    var little_cart = $('#fa-shopping-cart');
    var my_home = $('#myhome');

    describe('Nav-bar with time', function () {

        describe('Latitude and Longitude)', function () {

            it('should toggle visibility', function () {

                browser.get('#view1');
                my_home.click();

                expect(dropdown_panel_latlong.isDisplayed()).toBeFalsy();
                expect(input_box.isDisplayed()).toBeFalsy();
                expect(search_button.isDisplayed()).toBeFalsy();

                menu_item_lat_long.click();

                expect(dropdown_panel_latlong.isDisplayed()).toBeTruthy();
                expect(input_box.isDisplayed()).toBeTruthy();
                expect(search_button.isDisplayed()).toBeTruthy();

                menu_item_lat_long.click();

                expect(dropdown_panel_latlong.isDisplayed()).toBeFalsy();
                expect(input_box.isDisplayed()).toBeFalsy();
                expect(search_button.isDisplayed()).toBeFalsy();
            });

            it('should retrieve the correct latitude and longitude', function () {

                browser.get('#view1');
                my_home.click();

                menu_item_lat_long.click();
                expect(latitude_caption.isDisplayed()).toBeFalsy();
                expect(longitude_caption.isDisplayed()).toBeFalsy();

                input_box.sendKeys(check_my_location);
                browser.driver.sleep(600);

                input_box.sendKeys(protractor.Key.ARROW_UP);
                browser.driver.sleep(600);
                input_box.sendKeys(protractor.Key.ARROW_DOWN);
                browser.driver.sleep(600);

                input_box.sendKeys(protractor.Key.ARROW_DOWN);
                browser.driver.sleep(600);
                input_box.sendKeys(protractor.Key.ARROW_DOWN);
                browser.driver.sleep(600);
                input_box.sendKeys(protractor.Key.ARROW_UP);
                browser.driver.sleep(600);
                input_box.sendKeys(protractor.Key.ENTER);
                browser.driver.sleep(600);

                search_button.click();

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
    });
});
