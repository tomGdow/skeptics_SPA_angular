'use strict';
describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	beforeEach(function () {
		browser.get('#view1');
		vars.users_icon.click();
	});

	describe('Search', function () {

		describe('Search Box', function () {

			it('should return a non-null search result', function () {
				vars.search_box_users.sendKeys('10');
				expect(vars.getMyTableElement()).not.toMatch('t$om$$as');
			});

			it('should have focus on page-load', function () {
				expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('userSearchInput');
			});

			it('should lose and regain focus', function () {

				element(by.binding('viewMessageFourteen')).click();
				expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('');
				vars.search_box_users.clear();
				vars.search_box_users.sendKeys('thomas');
				expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('userSearchInput');
				element(by.binding('viewMessageFourteen')).click();
				expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('');
				vars.search_box_users.clear();
				vars.search_box_users.sendKeys('gerry');
				expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('userSearchInput');
			});

			it('should have the correct text colour', function () {

				expect(element(by.binding('search')).getCssValue('color')).toBe(vars.getRgba().navBarGray);
			});
		});

		describe('Dynamic Search Message', function () {

			it('should be invisible', function () {

				expect(vars.echo_search_string.getText()).toBe('');
			});

			it('should not become visible', function () {
				vars.search_box_users.clear();
				vars.search_box_users.sendKeys('a');
				expect(vars.echo_search_string.getText()).toBe('');
			});

			it('should  become visible', function () {
				vars.search_box_users.clear();
				vars.search_box_users.sendKeys('aa');
				expect(vars.echo_search_string.getText()).toMatch(/Search Term: aa/);
			});

			it('should  become invisible', function () {
				vars.search_box_users.clear();
				vars.search_box_users.sendKeys('aa');
				vars.search_box_users.clear();
				expect(vars.echo_search_string.getText()).toBe('');
			});

			it('should correctly echo user input', function () {
				vars.search_box_users.clear();
				vars.search_box_users.sendKeys('thomas');
				expect(vars.echo_search_string.getText()).toMatch(/Search Term: thomas/);
			});

			it('should have the correct text colour', function () {
				vars.search_box_users.clear();
				vars.search_box_users.sendKeys('thomas');
				expect(vars.echo_search_string.getCssValue('color')).toBe(vars.getRgba().navBarGray);
			});
		});
	});
});

