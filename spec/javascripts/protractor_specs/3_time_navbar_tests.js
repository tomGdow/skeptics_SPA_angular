'use strict';

describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	describe('Nav-bar with time', function () {

		var check_my_location = 'Dublin, Ireland';



		describe('Time Function)', function () {

			beforeEach(function () {
				browser.get('#view1');
				vars.home.click();
			});

			describe('time-icon', function () {

				it('should display the correct icon', function () {
					expect(vars.time_icon.getAttribute('class')).toContain('fa fa-clock-o');
				});

				it('should display the correct color', function () {
					expect(vars.time_icon.getCssValue('color')).toBe(vars.getRgba().navBarGray);
				});

				it('should change color on mouse-over', function () {

					browser.actions().mouseMove(vars.time_icon).perform();
					expect(vars.time_icon.getCssValue('color')).toBe(vars.getRgba().skepticsOrange);
					browser.actions().mouseMove(element(by.binding('viewOneMessage'))).perform();
					expect(vars.time_icon.getCssValue('color')).toBe(vars.getRgba().navBarGray);

				});
			});

			describe('time-icon mouseover', function () {

				it('should not display the time', function () {
					expect(vars.displayed_time.getInnerHtml().getAttribute('class')).toMatch('hidden');
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeFalsy();
				});

				it('should non-persistently display the time in the correct format', function () {

					browser.actions().mouseMove(vars.time_icon).perform();
					expect(vars.displayed_time.getInnerHtml()).toMatch(vars.time_format_long);
					expect(vars.displayed_time.getInnerHtml()).not.toMatch(vars.time_format_short);
					browser.actions().mouseMove(element(by.binding('viewOneMessage'))).perform();
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeFalsy();

				});

				it('should change the time format on click', function () {

					browser.actions().mouseMove(vars.time_icon).perform();
					vars.time_icon.click();
					expect(vars.displayed_time.getInnerHtml()).toMatch(vars.time_format_short);
					expect(vars.displayed_time.getInnerHtml()).not.toMatch(vars.time_format_long);
					vars.time_icon.click();
					browser.actions().mouseMove(vars.time_icon).perform();
				});

			});

			describe('time-icon on-click', function () {

				it('should persistently display the time', function () {

					vars.time_icon.click();
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeTruthy();
					browser.actions().mouseMove(element(by.binding('viewOneMessage'))).perform();
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeTruthy();

				});

				it('should hide the time', function () {
					vars.time_icon.click();
					vars.time_icon.click();
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeFalsy();
				});

				it('should re-display the time', function () {
					vars.time_icon.click();
					vars.time_icon.click();
					vars.time_icon.click();
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeTruthy();
					vars.time_icon.click();
				});

			});

			describe('display time on-click', function () {

				it('should hide the time', function () {
					vars.time_icon.click();
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeTruthy();
					vars.displayed_time.click();
					expect(vars.displayed_time.getInnerHtml().isDisplayed()).toBeFalsy();
				});

			});
		});

		describe('Date Function)', function () {

			var displayed_date = $('#showTheDate');
			var date_icon = $('#date_with_icon');

			beforeEach(function () {
				browser.get('#view1');
				vars.home.click();
			});

			describe('date-icon', function () {

				it('should display the correct icon', function () {
					expect(date_icon.getAttribute('class')).toContain('fa fa-calendar');
				});

				it('should display the correct color', function () {
					expect(date_icon.getCssValue('color')).toBe(vars.getRgba().navBarGray);
				});

				it('should change color on mouse-over', function () {

					browser.actions().mouseMove(date_icon).perform();
					expect(date_icon.getCssValue('color')).toBe(vars.getRgba().skepticsOrange);
					browser.actions().mouseMove(element(by.binding('viewOneMessage'))).perform();
					expect(date_icon.getCssValue('color')).toBe(vars.getRgba().navBarGray);

				});

			});

			describe('date-icon mouseover', function () {

				it('should not display the date', function () {
					expect(displayed_date.getInnerHtml().getAttribute('class')).toMatch('hidden');
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeFalsy();
				});

				it('should non-persistently display the date in the correct format', function () {

					browser.actions().mouseMove(date_icon).perform();
					expect(displayed_date.getInnerHtml()).toMatch(vars.date_format_long);
					expect(displayed_date.getInnerHtml()).not.toMatch(vars.date_format_short);
					browser.actions().mouseMove(element(by.binding('viewOneMessage'))).perform();
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeFalsy();

				});

				it('should change the date format on click', function () {

					browser.actions().mouseMove(date_icon).perform();
					date_icon.click();
					expect(displayed_date.getInnerHtml()).toMatch(vars.date_format_short);
					expect(displayed_date.getInnerHtml()).not.toMatch(vars.date_format_long);
					date_icon.click();
					browser.actions().mouseMove(date_icon).perform();
				});
			});

			describe('date-icon on-click', function () {

				it('should persistently display the date', function () {

					date_icon.click();
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeTruthy();
					browser.actions().mouseMove(element(by.binding('viewOneMessage'))).perform();
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeTruthy();

				});

				it('should hide the date', function () {
					date_icon.click();
					date_icon.click();
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeFalsy();

				});

				it('should re-display the date', function () {
					date_icon.click();
					date_icon.click();
					date_icon.click();
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeTruthy();
					date_icon.click();
				});

			});

			describe('display date on-click', function () {

				it('should hide the time', function () {
					date_icon.click();
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeTruthy();
					displayed_date.click();
					expect(displayed_date.getInnerHtml().isDisplayed()).toBeFalsy();
				});
			});
		});

		describe('Fahrenheit to Celcius Converter)', function () {

			beforeEach(function () {
				browser.get('#view1');
				vars.home.click();
			});

			it('should toggle visibility', function () {
				expect(vars.dropdown_panel_F_to_C.isDisplayed()).toBeFalsy();
				vars.icon_F_to_C.click();
				expect(vars.dropdown_panel_F_to_C.isDisplayed()).toBeTruthy();
				vars.icon_F_to_C.click();
				expect(vars.dropdown_panel_F_to_C.isDisplayed()).toBeFalsy();

			});

			it('should convert Fahrenheit to Celsius correctly', function () {
				vars.icon_F_to_C.click();
				vars.fahrenheit_input_box.sendKeys('100.4');
				expect(vars.celcius_input_box.getAttribute('value')).toBe('38');

			});

			it('should convert Celsius to Fahrenheit correctly', function () {
				vars.icon_F_to_C.click();
				vars.fahrenheit_input_box.clear();
				vars.celcius_input_box.clear();
				vars.celcius_input_box.sendKeys('0');
				expect(vars.fahrenheit_input_box.getAttribute('value')).toBe('32');
				vars.icon_F_to_C.click();
			});

			it('should display the correct icon', function () {
				expect(vars.icon_F_to_C.getAttribute('class')).toContain('fa-umbrella');
			});

			it('should display the correct labels', function () {
				vars.icon_F_to_C.click();
				expect(vars.fahrenheit_sub_panel.getText()).toMatch(/Fahrenheit/);
				expect(vars.fahrenheit_sub_panel.getCssValue('color')).toBe(vars.getRgba().navBarGray);
				expect(vars.celsius_sub_panel.getText()).toMatch(/Celsius/);
				expect(vars.celsius_sub_panel.getCssValue('color')).toBe(vars.getRgba().navBarGray);

			});

		});

		describe('Latitude and Longitude)', function () {

			it('should toggle visibility', function () {

				browser.get('#view1');
				vars.home.click();

				expect(vars.dropdown_panel_latlong.isDisplayed()).toBeFalsy();
				expect(vars.input_box_lat_long.isDisplayed()).toBeFalsy();
				expect(vars.search_button_lat_long.isDisplayed()).toBeFalsy();

				vars.menu_item_lat_long.click();

				expect(vars.dropdown_panel_latlong.isDisplayed()).toBeTruthy();
				expect(vars.input_box_lat_long.isDisplayed()).toBeTruthy();
				expect(vars.search_button_lat_long.isDisplayed()).toBeTruthy();

				vars.menu_item_lat_long.click();

				expect(vars.dropdown_panel_latlong.isDisplayed()).toBeFalsy();
				expect(vars.input_box_lat_long.isDisplayed()).toBeFalsy();
				expect(vars.search_button_lat_long.isDisplayed()).toBeFalsy();
			});

			it('should retrieve the correct latitude and longitude', function () {

				browser.get('#view1');
				vars.home.click();

				vars.menu_item_lat_long.click();
				expect(vars.latitude_caption.isDisplayed()).toBeFalsy();
				expect(vars.longitude_caption.isDisplayed()).toBeFalsy();

				vars.input_box_lat_long.sendKeys(check_my_location);
				browser.driver.sleep(600);

				vars.input_box_lat_long.sendKeys(protractor.Key.ARROW_UP);
				browser.driver.sleep(600);
				vars.input_box_lat_long.sendKeys(protractor.Key.ARROW_DOWN);
				browser.driver.sleep(600);

				vars.input_box_lat_long.sendKeys(protractor.Key.ARROW_DOWN);
				browser.driver.sleep(600);
				vars.input_box_lat_long.sendKeys(protractor.Key.ARROW_DOWN);
				browser.driver.sleep(600);
				vars.input_box_lat_long.sendKeys(protractor.Key.ARROW_UP);
				browser.driver.sleep(600);
				vars.input_box_lat_long.sendKeys(protractor.Key.ENTER);
				browser.driver.sleep(600);

				vars.search_button_lat_long.click();

				expect(vars.latitude_caption.isDisplayed()).toBeTruthy();
				expect(vars.longitude_caption.isDisplayed()).toBeTruthy();
				expect(vars.longitude_value.isDisplayed()).toBe(true);
				expect(vars.latitude_value.isDisplayed()).toBe(true);
				expect(vars.latitude_value.getText()).toContain('53');
				expect(vars.longitude_value.getText()).toContain('6');

			});

			it('should not display captions when minimized', function () {
				vars.minimize_expand_button.click();
				expect(vars.latitude_caption.isDisplayed()).toBeFalsy();
				expect(vars.longitude_caption.isDisplayed()).toBeFalsy();
				expect(vars.latitude_value.getText()).toContain('53');
				expect(vars.longitude_value.getText()).toContain('6');
				vars.minimize_expand_button.click();
				expect(vars.latitude_caption.isDisplayed()).toBeTruthy();
				expect(vars.longitude_caption.isDisplayed()).toBeTruthy();
				vars.menu_item_lat_long.click();
			});
		});

		describe('Cart Button)', function () {

			browser.get('#view1');

			it('should display the Cart  when clicked', function () {
				expect(vars.little_cart.isDisplayed()).toBeTruthy();
				vars.little_cart.click();
				expect(vars.little_cart.isDisplayed()).toBeFalsy();
				expect(element(by.id('emptycart')).getCssValue('background-image')).
				  toMatch('empty-cart.jpg');
				expect($$('h3').get(1).getText()).toMatch(/Your Cart is Empty/);
			});
		});
	});
});
