'use strict';
describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	describe('Dynamic Search Functionality', function () {

		describe('Dynamic Search - grid view', function () {

			beforeEach(function () {
				browser.get('#view5');
				vars.products.click();
			});

			describe('Search Box', function () {

				it('should return the correct dynamic search result', function () {

					vars.grid_icon.click();
					vars.search_box_dynamicList.sendKeys('Charlton');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().charlton);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Hagi');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().hagi);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Iniesta');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().iniesta);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Neeskens');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().neeskens);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Pirlo');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().pirlo);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Romario');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().romario);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Cohen');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().cohen);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Muller');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().muller);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Platini');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().platini);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Breitner');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().breitner);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Ardiles');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().ardiles);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Baresi');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().baresi);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Klose');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().klose);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Milla');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().milla);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Puyol');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().puyol);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Buffon');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().buffon);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Hurst');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().hurst);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Banks');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().banks);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Pele');
					vars.lowest_id_dropdown.click();
					expect(vars.getGridImageSource()).toMatch(vars.getImg().pele);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Zoff');
					vars.lowest_id_dropdown.click();
					expect(vars.getGridImageSource()).toMatch(vars.getImg().zoff);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Kahn');
					expect(vars.getGridImageSource()).toMatch(vars.getImg().kahn);

				});

				it('should have focus on page-load', function () {
					expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('ngsearch');
				});

				it('should lose and regain focus', function () {

					vars.page_header.click();
					expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('');
					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Charlton');
					expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('ngsearch');
					vars.page_header.click();
					expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('');
					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Moore');
					expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('ngsearch');
				});

				it('should have the correct text colour', function () {
					expect(element(by.binding('query')).getCssValue('color'))
					  .toBe(vars.getRgba().navBarGray);
				});
			});

			describe('Dynamic Search Message', function () {

				it('should be invisible', function () {
					expect(vars.echo_search_term.getText()).toBe('');
				});

				it('should not become visible', function () {
					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('a');
					expect(vars.echo_search_term.getText()).toBe('');
				});

				it('should  become visible', function () {
					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('aa');
					expect(vars.echo_search_term.getText()).toMatch(/Search Term: aa/);
				});

				it('should  become invisible', function () {
					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('aa');
					vars.search_box_dynamicList.clear();
					expect(vars.echo_search_term.getText()).toBe('');
				});

				it('should correctly echo user input', function () {

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('zoff');
					expect(vars.echo_search_term.getText()).toMatch(/Search Term: zoff/);
				});

				it('should have the correct text colour', function () {
					expect(vars.echo_search_term.getCssValue('color')).toBe(vars.getRgba().navBarGray);
				});
			});
		});
	});
});
