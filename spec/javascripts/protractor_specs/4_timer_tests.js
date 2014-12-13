'use strict';

describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	browser.get('#view1');

	describe('Animated Timer )', function () {

		var static_background_img_timer = $$('.maus_elefant_static').get(0).getCssValue('background-image');

		beforeEach(function () {
			browser.get('#view1');
			vars.home.click();
		});

		describe('nav_bar_icon', function () {

			it('should display the correct icon', function () {
				expect(vars.timer_icon.getAttribute('class')).toContain('icon-stopwatch');
			});

			it('should display the correct color', function () {
				expect(vars.timer_icon.getCssValue('color')).toBe(vars.getRgba().navBarGray);
			});

			it('should change color on mouse-over', function () {

				browser.actions().mouseMove(vars.timer_icon).perform();
				browser.driver.sleep(1000);
				expect(vars.timer_icon.getCssValue('color')).toContain(vars.getRgba().skepticsOrange);
				browser.actions().mouseMove(element(by.binding('viewOneMessage'))).perform();
				browser.driver.sleep(1000);
				expect(vars.timer_icon.getCssValue('color')).toContain(vars.getRgba().navBarGray);

			});
		});

		describe('drop-down panel', function () {

			it('should not be visible',
			  function () {
				  expect(vars.timer_panel.isDisplayed()).toBe(false);
			  });

			it('should become visible',
			  function () {
				  vars.timer_icon.click();
				  expect(vars.timer_panel.isDisplayed()).toBe(true);
			  });

			it('should become hidden',
			  function () {
				  vars.timer_icon.click();
				  vars.timer_icon.click();
				  expect(vars.timer_panel.isDisplayed()).toBe(false);
			  });
		});

		describe('static timer', function () {

			beforeEach(function () {
				vars.timer_icon.click();
				vars.home.click();
			});

			it('should display the correct message',
			  function () {
				  expect(element(by.id('timer_ready')).getInnerHtml()).toContain('Ready');
			  });

			it('should render the correct background image',
			  function () {
				  expect(static_background_img_timer)
					.toContain('maus_elefant_static.gif');
				  expect(static_background_img_timer.isDisplayed()).toBe(true);
			  });

			it('should display the correct buttons',
			  function () {

				  expect(vars.start_button_timer.isDisplayed()).toBe(true);
				  expect(vars.stop_button_timer.isDisplayed()).toBe(true);
				  expect(vars.clear_button_timer.isDisplayed()).toBe(true);
				  expect(vars.resume_button_timer.isDisplayed()).toBe(false);
			  });

			it('should display the correct button status',
			  function () {

				  expect(vars.start_button_timer.getAttribute('disabled')).not.toBeTruthy();
				  expect(vars.stop_button_timer.getAttribute('disabled')).toBeTruthy();
				  expect(vars.clear_button_timer.getAttribute('disabled')).not.toBeTruthy();

			  });
		});

		describe('running timer', function () {

			beforeEach(function () {
				vars.timer_icon.click();
				vars.start_button_timer.click();
			});

			it('should display an animated image',
			  function () {

				  expect($$('.maus_elefant_animation').get(0).getCssValue('background-image')).
					toContain('maus_elefant.gif');
			  });

			it('should display the correct buttons',
			  function () {

				  expect(vars.start_button_timer.isDisplayed()).toBe(true);
				  expect(vars.stop_button_timer.isDisplayed()).toBe(true);
				  expect(vars.clear_button_timer.isDisplayed()).toBe(true);
				  expect(vars.resume_button_timer.isDisplayed()).toBe(false);
			  });

			it('should display the correct button  status',
			  function () {
				  browser.driver.sleep(1000);
				  expect(vars.start_button_timer.getAttribute('disabled')).toBeTruthy();
				  expect(vars.stop_button_timer.getAttribute('disabled')).not.toBeTruthy();
				  expect(vars.clear_button_timer.getAttribute('disabled')).toBeTruthy();

			  });

			it('should display the time',
			  function () {
				  browser.driver.sleep(1000);
				  expect($$('.timerFlex').get(0).getText()).toMatch(/^\w+\ssecond\w?$/);
			  });

			it('should change time display after time lapse',
			  function () {

				  browser.driver.sleep(1000);
				  var timeone = $$('.timerFlex').get(0).getText();
				  browser.driver.sleep(2000);
				  var timetwo = $$('.timerFlex').get(0).getText();
				  expect(timeone).toMatch(/^\w+\ssecond\w?$/);
				  expect(timetwo).toMatch(/^\w+\ssecond\w?$/);
				  //expect(timeone).not.toMatch(timetwo);
				  expect(timetwo).toBeGreaterThan(timeone);
			  });
		});

		describe('stopped timer', function () {

			beforeEach(function () {
				vars.timer_icon.click();
				vars.start_button_timer.click();

			});

			it('should display a resume button',
			  function () {

				  vars.stop_button_timer.click();
				  expect(vars.resume_button_timer.isDisplayed()).toBe(true);
				  expect(vars.start_button_timer.isDisplayed()).toBe(true);
				  expect(vars.stop_button_timer.isDisplayed()).toBe(true);
				  expect(vars.clear_button_timer.isDisplayed()).toBe(true);
			  });

			it('should display the correct button status',
			  function () {

				  vars.stop_button_timer.click();
				  expect(vars.start_button_timer.getAttribute('disabled')).not.toBeTruthy();
				  expect(vars.stop_button_timer.getAttribute('disabled')).toBeTruthy();
				  expect(vars.clear_button_timer.getAttribute('disabled')).not.toBeTruthy();
				  expect(vars.resume_button_timer.getAttribute('disabled')).not.toBeTruthy();

			  });

			it('should render a static image',
			  function () {
				  vars.stop_button_timer.click();
				  expect(static_background_img_timer.isDisplayed()).toBe(true);
			  });

			it('should render static time',
			  function () {

				  browser.driver.sleep(2000);
				  vars.stop_button_timer.click();

				  browser.driver.sleep(1000);
				  var timethree = $$('.timerFlex').get(0).getText();
				  browser.driver.sleep(2000);
				  var timefour = $$('.timerFlex').get(0).getText();

				  expect(timethree).toMatch(/^\w+\ssecond\w?$/);
				  expect(timefour).toMatch(/^\w+\ssecond\w?$/);
				  expect(timefour).toMatch(timethree);
			  });
		});

		describe('resumed timer', function () {

			beforeEach(function () {
				vars.timer_icon.click();
				vars.start_button_timer.click();

			});

			it('should restart time display',
			  function () {

				  browser.driver.sleep(1000);
				  var time_a = $$('.timerFlex').get(0).getText();
				  browser.driver.sleep(1000);
				  vars.stop_button_timer.click();
				  var time_stopped_a = $$('.timerFlex').get(0).getText();
				  browser.driver.sleep(1000);
				  var time_stopped_b = $$('.timerFlex').get(0).getText();
				  vars.resume_button_timer.click();
				  browser.driver.sleep(1000);
				  var time_resumed_a = $$('.timerFlex').get(0).getText();
				  browser.driver.sleep(1000);
				  var time_resumed_b = $$('.timerFlex').get(0).getText();
				  vars.stop_button_timer.click();

				  expect(time_a).toBeLessThan(time_stopped_a);
				  expect(time_stopped_a).toEqual(time_stopped_b);

				  expect(time_resumed_a).toBeGreaterThan(time_stopped_b);
				  expect(time_resumed_b).toBeGreaterThan(time_resumed_a);
			  });
		});

		describe('cleared timer', function () {

			beforeEach(function () {
				vars.timer_icon.click();
				vars.start_button_timer.click();
				vars.stop_button_timer.click();
				vars.clear_button_timer.click();
			});

			it('should display the correct message',
			  function () {

				  expect(element(by.id('timer_ready')).getInnerHtml()).toContain('Ready');
			  });

			it('should render a static background image',
			  function () {

				  expect(static_background_img_timer)
					.toContain('maus_elefant_static.gif');
				  expect(static_background_img_timer.isDisplayed()).toBe(true);
			  });

			it('should display the correct buttons',
			  function () {

				  expect(vars.start_button_timer.isDisplayed()).toBe(true);
				  expect(vars.stop_button_timer.isDisplayed()).toBe(true);
				  expect(vars.clear_button_timer.isDisplayed()).toBe(true);
				  expect(vars.resume_button_timer.isDisplayed()).toBe(false);
			  });

			it('should display the correct button status',
			  function () {

				  expect(vars.start_button_timer.getAttribute('disabled')).not.toBeTruthy();
				  expect(vars.stop_button_timer.getAttribute('disabled')).toBeTruthy();
				  expect(vars.clear_button_timer.getAttribute('disabled')).not.toBeTruthy();

			  });
		});
	});
});

