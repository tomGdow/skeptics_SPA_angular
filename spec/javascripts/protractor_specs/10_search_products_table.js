'use strict';
describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	describe('Search Products', function () {

		beforeEach(function () {
			browser.get('#view5');
			vars.productSearch_linkTo_view9.click();
		});

		describe('Sort-By (Select Box)', function () {

			it('should sort by lowest price', function () {

				vars.select_lowest_price.click();

				expect(vars.getTableElement()).toMatch('Roger'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Milla'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Neeskens'.toUpperCase());

				expect(vars.getTableElement(1)).toMatch('Bobby'.toUpperCase());
				expect(vars.getTableElement(1)).toMatch('Moore'.toUpperCase());
				expect(vars.getTableElement(1)).not.toMatch('Charlton'.toUpperCase());

				expect(vars.getTableElement(2)).toMatch('Geoff'.toUpperCase());
				expect(vars.getTableElement(2)).toMatch('Hurst'.toUpperCase());
				expect(vars.getTableElement(2)).not.toMatch('Roger'.toUpperCase());

				expect(vars.getTableElement(3)).toMatch('Salvatore'.toUpperCase());
				expect(vars.getTableElement(3)).toMatch('Schillaci'.toUpperCase());
				expect(vars.getTableElement(3)).not.toMatch('Bobby'.toUpperCase());

			});

			it('should sort alphabetically', function () {

				vars.select_alphabetical.click();

				expect(vars.getTableElement()).toMatch('Andrea Pirlo'.toUpperCase());
				expect(vars.getTableElement(1)).toMatch('Andres Iniesta'.toUpperCase());
				expect(vars.getTableElement(2)).toMatch('Bobby Charlton'.toUpperCase());
				expect(vars.getTableElement(3)).toMatch('Bobby Moore'.toUpperCase());

			});

			it('should sort by highest price', function () {

				vars.select_highest_price.click();

				expect(vars.getTableElement()).toMatch('Neeskens'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Cohen'.toUpperCase());

				expect(vars.getTableElement(1)).toMatch('Cohen'.toUpperCase());
				expect(vars.getTableElement(1)).toMatch('George'.toUpperCase());
				expect(vars.getTableElement(1)).not.toMatch('Best'.toUpperCase());

				expect(vars.getTableElement(2)).toMatch('Hagi'.toUpperCase());
				expect(vars.getTableElement(2)).toMatch('Gheorghe'.toUpperCase());
				expect(vars.getTableElement(2)).not.toMatch('George'.toUpperCase());

				expect(vars.getTableElement(3)).toMatch('Carles'.toUpperCase());
				expect(vars.getTableElement(3)).toMatch('Puyol'.toUpperCase());
				expect(vars.getTableElement(3)).not.toMatch('Bobby'.toUpperCase());

			});

			it('should sort by id with lowest value first', function () {

				vars.select_lowest_id.click();
				expect(vars.retrieveTableId()).toMatch('product_1');
				expect(vars.retrieveTableId(1)).toMatch('product_2');
				expect(vars.retrieveTableId(2)).toMatch('product_3');
				expect(vars.retrieveTableId(24)).toMatch('product_25');

			});

			it('should sort by id with highest value first', function () {

				vars.select_highest_id.click();
				expect(vars.retrieveTableId()).toMatch('product_25');
				expect(vars.retrieveTableId(1)).toMatch('product_24');
				expect(vars.retrieveTableId(2)).toMatch('product_23');
				expect(vars.retrieveTableId(24)).toMatch('product_1');

			});
		});

		describe('Search Box', function () {

			it('should return the correct dynamic search result', function () {

				vars.search_box_dynamicTable.sendKeys('Charlton');
				expect(vars.getTableElement()).toMatch('Bobby'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Charlton'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Moore'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Hagi');
				expect(vars.getTableElement()).toMatch('Gheorghe'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Hagi'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('George'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Iniesta');
				expect(vars.getTableElement()).toMatch('Andres'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Iniesta'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Hagi'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Neeskens');
				expect(vars.getTableElement()).toMatch('Johan'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Neeskens'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Cruyff'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Pirlo');
				expect(vars.getTableElement()).toMatch('Andrea'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Pirlo'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Zoff'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Romario');
				expect(vars.getTableElement()).toMatch('Romario'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Pele'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Cohen');
				expect(vars.getTableElement()).toMatch('George'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Cohen'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Gheorghe'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Muller');
				expect(vars.getTableElement()).toMatch('Muller'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Gerhard'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Puyol'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Platini');
				expect(vars.getTableElement()).toMatch('Platini'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Michel'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Baresi'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Breitner');
				expect(vars.getTableElement()).toMatch('Paul'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Breitner'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Muller'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Ardiles');
				expect(vars.getTableElement()).toMatch('Ardiles'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Ossie'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Pirlo'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Baresi');
				expect(vars.getTableElement()).toMatch('Baresi'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Franco'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Ardiles'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Klose');
				expect(vars.getTableElement()).toMatch('Klose'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Miroslav'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Baresi'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Milla');
				expect(vars.getTableElement()).toMatch('Roger'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Milla'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Miller'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Puyol');
				expect(vars.getTableElement()).toMatch('Carles'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Puyol'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Poyol'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Buffon');
				expect(vars.getTableElement()).toMatch('Buffon'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Gianluigi'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Buffoni'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Hurst');
				expect(vars.getTableElement()).toMatch('Hurst'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Geoff'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Herst'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Banks');
				expect(vars.getTableElement()).toMatch('Gordon'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Banks'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Branks'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Pele');
				vars.select_lowest_id.click();
				expect(vars.getTableElement()).toMatch('Pele'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Poyol'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Zoff');
				vars.select_lowest_id.click();
				expect(vars.getTableElement()).toMatch('Dino'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Zoff'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Dinny'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Kahn');
				expect(vars.getTableElement()).toMatch('Oliver'.toUpperCase());
				expect(vars.getTableElement()).toMatch('Kahn'.toUpperCase());
				expect(vars.getTableElement()).not.toMatch('Kohn'.toUpperCase());

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Defender');
				expect(vars.rollcall('Bobby_Moore')).toBe(true);
				expect(vars.rollcall('Carles_Puyol')).toBe(true);
				expect(vars.rollcall('Franco_Baresi')).toBe(true);
				expect(vars.rollcall('Franz_Beckenbauer')).toBe(true);
				expect(vars.rollcall('George_Cohen')).toBe(true);
				expect(vars.rollcall('Paolo_Maldini')).toBe(true);
				expect(vars.rollcall('Gordon_Banks')).toBe(false);
				expect(vars.rollcall('Dino_Zoff')).toBe(false);
				expect(vars.rollcall('Bobby_Charlton')).toBe(false);

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Midfielder');

				expect(vars.rollcall('Andrea_Pirlo')).toBe(true);
				expect(vars.rollcall('Andres_Iniesta')).toBe(true);
				expect(vars.rollcall('Bobby_Charlton')).toBe(true);
				expect(vars.rollcall('Gheorghe_Hagi')).toBe(true);
				expect(vars.rollcall('Johan_Neeskens')).toBe(true);
				expect(vars.rollcall('Michel_Platini')).toBe(true);
				expect(vars.rollcall('Salvatore_Schillaci')).toBe(true);
				expect(vars.rollcall('Carles_Puyol')).toBe(false);
				expect(vars.rollcall('Dino_Zoff')).toBe(false);
				expect(vars.rollcall('Bobby_Moore')).toBe(false);

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Goalkeeper');

				expect(vars.rollcall('Dino_Zoff')).toBe(true);
				expect(vars.rollcall('Gianluigi_Buffon')).toBe(true);
				expect(vars.rollcall('Gordon_Banks')).toBe(true);
				expect(vars.rollcall('Oliver_Kahn')).toBe(true);
				expect(vars.rollcall('Gheorghe_Hagi')).toBe(false);
				expect(vars.rollcall('Michel_Platini')).toBe(false);
				expect(vars.rollcall('Carles_Puyol')).toBe(false);
				expect(vars.rollcall('Bobby_Moore')).toBe(false);

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Forward');

				expect(vars.rollcall('Geoff_Hurst')).toBe(true);
				expect(vars.rollcall('Gerhard_Muller')).toBe(true);
				expect(vars.rollcall('Roger_Milla')).toBe(true);
				expect(vars.rollcall('Miroslav_Klose')).toBe(true);
				expect(vars.rollcall('Romario_Romario')).toBe(true);
				expect(vars.rollcall('Carles_Puyol')).toBe(false);
				expect(vars.rollcall('Bobby_Moore')).toBe(false);
				expect(vars.rollcall('Gordon_Banks')).toBe(false);

			});

			it('should have focus on page-load', function () {

				expect(browser.driver.switchTo().activeElement()
				  .getAttribute('id')).toBe('prodSearchInput');
			});

			it('should lose and regain focus', function () {

				element(by.binding('viewSixMessage')).click();
				expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('');
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Charlton');
				expect(browser.driver.switchTo().activeElement()
				  .getAttribute('id')).toBe('prodSearchInput');
				element(by.binding('viewSixMessage')).click();
				expect(browser.driver.switchTo().activeElement().getAttribute('id')).toBe('');
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Moore');
				expect(browser.driver.switchTo().activeElement()
				  .getAttribute('id')).toBe('prodSearchInput');
			});

			it('should have the correct text colour', function () {

				expect(element(by.binding('search')).getCssValue('color')).toBe(vars.getRgba().navBarGray);
			});
		});

		describe('Dynamic Search Message', function () {

			it('should be invisible', function () {
				expect(vars.echo_search_param.getText()).toBe('');
			});

			it('should not become visible', function () {
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('a');
				expect(vars.echo_search_param.getText()).toBe('');
			});

			it('should  become visible', function () {
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('aa');
				expect(vars.echo_search_param.getText()).toMatch(/Search Term: aa/);
			});

			it('should  become invisible', function () {
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('aa');
				vars.search_box_dynamicTable.clear();
				expect(vars.echo_search_param.getText()).toBe('');
			});

			it('should correctly echo user input', function () {

				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('zoff');
				expect(vars.echo_search_param.getText()).toMatch(/Search Term: zoff/);
			});

			it('should have the correct text colour', function () {
				expect(vars.echo_search_param.getCssValue('color')).toBe(vars.getRgba().navBarGray);
			});
		});
	});
});

