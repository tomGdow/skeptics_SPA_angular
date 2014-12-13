'use strict';

describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	browser.get('#view1');

	describe('footer', function () {

		beforeEach(function () {
			browser.get('#view1');
			vars.home.click();
		});

		it('should be visible', function () {

			expect(vars.footer.isDisplayed()).toBeTruthy();
		});

		it('should be become invisible', function () {
			vars.x_button_footer.click();
			browser.driver.sleep(600);
			expect(vars.footer.isDisplayed()).toBeFalsy();
		});

		it('should be become visible', function () {

			vars.x_button_footer.click();
			browser.executeScript('window.scrollTo(0,0)');
			browser.actions().mouseMove(vars.github).perform();
			expect(vars.footer.isDisplayed()).toBeTruthy();

			vars.x_button_footer.click();
			expect(vars.footer.isDisplayed()).toBeFalsy();

			browser.executeScript('window.scrollTo(0,0)');
			browser.actions().mouseMove(vars.github).perform();
			expect(vars.footer.isDisplayed()).toBeTruthy();
		});

		it('should have the correct transition time', function () {

			expect(vars.github.getCssValue('transition-duration')).toBe('1s');
			expect(vars.github.getCssValue('transition-duration')).not.toBe('2s');
			expect(vars.facebook.getCssValue('transition-duration')).toBe('1s');
			expect(vars.twitter.getCssValue('transition-duration')).toBe('1s');
			expect(vars.googlePlus.getCssValue('transition-duration')).toBe('1s');

		});

		it('should have the correct transition timing function', function () {

			expect(vars.github.getCssValue('transition-timing-function')).toBe('ease-in-out');
			expect(vars.facebook.getCssValue('transition-timing-function')).toBe('ease-in-out');
			expect(vars.twitter.getCssValue('transition-timing-function')).toBe('ease-in-out');
			expect(vars.googlePlus.getCssValue('transition-timing-function')).toBe('ease-in-out');

		});


		it('should have the correct external urls', function () {

			expect(vars.github.getAttribute('href')).toMatch(vars.git_address);
			expect(vars.facebook.getAttribute('href')).toMatch(vars.facebook_address);
			expect(vars.twitter.getAttribute('href')).toMatch(vars.twitter_address);
			expect(vars.googlePlus.getAttribute('href')).toMatch(vars.googleplus_address);

		});

		it('should be a flexbox', function () {

			var elem = element(by.css('.footerList '));
			expect(elem.getCssValue('display')).toBe('flex')

		});

		it('should display the correct text on mouse-over', function () {

			expect(vars.github.getText()).not.toMatch('vars.github');
			browser.actions().mouseMove(vars.github).perform();
			expect(vars.github.getText()).toMatch('Github');

			expect(vars.facebook.getText()).not.toMatch('vars.facebook');
			browser.actions().mouseMove(vars.facebook).perform();
			expect(vars.facebook.getText()).toMatch('Facebook');

			expect(vars.twitter.getText()).not.toMatch('vars.twitter');
			browser.actions().mouseMove(vars.twitter).perform();
			expect(vars.twitter.getText()).toMatch('Twitter');

			expect(vars.x_button_footer.getText()).not.toMatch('Hide');
			browser.actions().mouseMove(vars.x_button_footer).perform();
			expect(vars.x_button_footer.getText()).toMatch('Hide');
		});
	});
});

