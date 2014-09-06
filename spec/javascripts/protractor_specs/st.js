'use strict';
describe('my app', function () {

    browser.get('#view1');




    describe('Nav-bar with time (under-nav)', function () {

        describe('Latitude and Longitude)', function () {

            var lat_long_panel = element(by.css('#lat-to-long'));
            var menu_item_lat_long = element(by.css('#lat_to_long_button'));
            var input_box = element(by.css("#google_places_ac"));
            var search_button = element(by.css('#lat_long_search_btn'));
            var longitude_value = element(by.css('#my_longitude'));
            var latitude_value = element(by.css('#my_latitude'));
            var latitude_caption = element(by.css('#my_latit_caption'));
            var longitude_caption = element(by.css('#my_longit_caption'));
            var minimize_expand_button = element(by.css('#min_expand_button'));
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

                input_box.sendKeys(check_my_location);
                input_box.sendKeys(protractor.Key.ARROW_DOWN);
                input_box.sendKeys(protractor.Key.ARROW_DOWN);
                input_box.sendKeys(protractor.Key.ARROW_UP);
                input_box.sendKeys(protractor.Key.ENTER);
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

        describe('Cart Button)', function () {

            browser.get('#view1');

            it('should display the Cart  when clicked', function () {

                var little_cart = element(by.css('#fa-shopping-cart'));
                little_cart.click();


            });
        });
    });
});
