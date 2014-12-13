'use strict';
describe('my app', function () {

	describe('Dynamic Search Functionality', function () {

		var _ = require('underscore');
		var vars = require('./testvariables');

		describe('Dynamic Search - list view', function () {

			beforeEach(function () {
				browser.get('#view5');
				$('#viewfive').click();
			});

			describe('Sort-By (Select Box)', function () {

				it('should sort by lowest price', function () {

					vars.list_icon.click();
					vars.lowest_price_dropdown.click();

					expect(vars.retrieveListElement()).toMatch('Roger');
					expect(vars.retrieveListElement()).toMatch('Milla');
					expect(vars.retrieveListElement()).not.toMatch('Neeskens');

					expect(vars.retrieveListElement(1)).toMatch('Bobby');
					expect(vars.retrieveListElement(1)).toMatch('Moore');
					expect(vars.retrieveListElement(1)).not.toMatch('Charlton');

					expect(vars.retrieveListElement(2)).toMatch('Geoff');
					expect(vars.retrieveListElement(2)).toMatch('Hurst');
					expect(vars.retrieveListElement(2)).not.toMatch('Roger');

					expect(vars.retrieveListElement(3)).toMatch('Salvatore');
					expect(vars.retrieveListElement(3)).toMatch('Schillaci');
					expect(vars.retrieveListElement(3)).not.toMatch('Bobby');
				});

				it('should sort alphabetically', function () {

					vars.list_icon.click();
					vars.alphabetical_dropdown.click();

					expect(vars.retrieveListElement()).toMatch('Andrea Pirlo');
					expect(vars.retrieveListElement(1)).toMatch('Andres Iniesta');
					expect(vars.retrieveListElement(2)).toMatch('Bobby Charlton');
					expect(vars.retrieveListElement(3)).toMatch('Bobby Moore');
				});

				it('should sort by id with lowest value first', function () {

					vars.list_icon.click();
					vars.lowest_id_dropdown.click();

					expect($$('.flex-span > a').get(0).getAttribute('href')).toMatch('commodities/1');
					expect($$('.flex-span > a').get(1).getAttribute('href')).toMatch('commodities/2');
					expect($$('.flex-span > a').get(2).getAttribute('href')).toMatch('commodities/3');
					expect($$('.flex-span > a').get(3).getAttribute('href')).toMatch('commodities/4');
					expect($$('.flex-span > a').get(-1).getAttribute('href')).toMatch('commodities/25');

				});

				it('should sort by id with highest value first', function () {

					vars.list_icon.click();
					vars.highest_id_dropdown.click();

					expect($$('.flex-span > a').get(0).getAttribute('href')).toMatch('commodities/25');
					expect($$('.flex-span > a').get(1).getAttribute('href')).toMatch('commodities/24');
					expect($$('.flex-span > a').get(2).getAttribute('href')).toMatch('commodities/23');
					expect($$('.flex-span > a').get(3).getAttribute('href')).toMatch('commodities/22');
					expect($$('.flex-span > a').get(-1).getAttribute('href')).toMatch('commodities/1');
				});

			}); //sort by

			describe('Search Box', function () {

				it('should return the correct dynamic search result', function () {

					vars.list_icon.click();
					vars.search_box_dynamicList.sendKeys('Charlton');
					expect(vars.retrieveListElement()).toMatch('Bobby');
					expect(vars.retrieveListElement()).toMatch('Charlton');
					expect(vars.retrieveListElement()).not.toMatch('Moore');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Hagi');
					expect(vars.retrieveListElement()).toMatch('Gheorghe');
					expect(vars.retrieveListElement()).toMatch('Hagi');
					expect(vars.retrieveListElement()).not.toMatch('George');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Iniesta');
					expect(vars.retrieveListElement()).toMatch('Andres');
					expect(vars.retrieveListElement()).toMatch('Iniesta');
					expect(vars.retrieveListElement()).not.toMatch('Hagi');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Neeskens');
					expect(vars.retrieveListElement()).toMatch('Johan');
					expect(vars.retrieveListElement()).toMatch('Neeskens');
					expect(vars.retrieveListElement()).not.toMatch('Cruyff');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Pirlo');
					expect(vars.retrieveListElement()).toMatch('Andrea');
					expect(vars.retrieveListElement()).toMatch('Pirlo');
					expect(vars.retrieveListElement()).not.toMatch('Zoff');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Romario');
					expect(vars.retrieveListElement()).toMatch('Romario');
					expect(vars.retrieveListElement()).not.toMatch('Pele');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Cohen');
					expect(vars.retrieveListElement()).toMatch('George');
					expect(vars.retrieveListElement()).toMatch('Cohen');
					expect(vars.retrieveListElement()).not.toMatch('Gheorghe');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Muller');
					expect(vars.retrieveListElement()).toMatch('Muller');
					expect(vars.retrieveListElement()).toMatch('Gerhard');
					expect(vars.retrieveListElement()).not.toMatch('Puyol');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Platini');
					expect(vars.retrieveListElement()).toMatch('Platini');
					expect(vars.retrieveListElement()).toMatch('Michel');
					expect(vars.retrieveListElement()).not.toMatch('Baresi');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Breitner');
					expect(vars.retrieveListElement()).toMatch('Paul');
					expect(vars.retrieveListElement()).toMatch('Breitner');
					expect(vars.retrieveListElement()).not.toMatch('Muller');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Ardiles');
					expect(vars.retrieveListElement()).toMatch('Ardiles');
					expect(vars.retrieveListElement()).toMatch('Ossie');
					expect(vars.retrieveListElement()).not.toMatch('Pirlo');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Baresi');
					expect(vars.retrieveListElement()).toMatch('Baresi');
					expect(vars.retrieveListElement()).toMatch('Franco');
					expect(vars.retrieveListElement()).not.toMatch('Ardiles');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Klose');
					expect(vars.retrieveListElement()).toMatch('Klose');
					expect(vars.retrieveListElement()).toMatch('Miroslav');
					expect(vars.retrieveListElement()).not.toMatch('Baresi');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Milla');
					expect(vars.retrieveListElement()).toMatch('Roger');
					expect(vars.retrieveListElement()).toMatch('Milla');
					expect(vars.retrieveListElement()).not.toMatch('Miller');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Puyol');
					expect(vars.retrieveListElement()).toMatch('Carles');
					expect(vars.retrieveListElement()).toMatch('Puyol');
					expect(vars.retrieveListElement()).not.toMatch('Poyol');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Buffon');
					expect(element(by.css('#Gianluigi_Buffon')).getText()).toMatch('Gianluigi');
					expect(element(by.css('#Gianluigi_Buffon')).getText()).toMatch('Buffon');
					expect(element(by.css('#Gianluigi_Buffon')).getText()).not.toMatch('Buffoni');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Hurst');
					expect(vars.retrieveListElement()).toMatch('Hurst');
					expect(vars.retrieveListElement()).toMatch('Geoff');
					expect(vars.retrieveListElement()).not.toMatch('Herst');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Banks');
					expect(vars.retrieveListElement()).toMatch('Gordon');
					expect(vars.retrieveListElement()).toMatch('Banks');
					expect(vars.retrieveListElement()).not.toMatch('Branks');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Pele');
					expect(element(by.css('#Pele_Pele')).getText()).toMatch('Pele');
					expect(element(by.css('#Pele_Pele')).getText()).not.toMatch('Peile');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Zoff');
					expect(element(by.css('#Dino_Zoff')).getText()).toMatch('Dino');
					expect(element(by.css('#Dino_Zoff')).getText()).toMatch('Zoff');
					expect(element(by.css('#Dino_Zoff')).getText()).not.toMatch('Zoft');

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Kahn');
					expect(vars.retrieveListElement()).toMatch('Oliver');
					expect(vars.retrieveListElement()).toMatch('Kahn');
					expect(vars.retrieveListElement()).not.toMatch('Kohn');


					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Defender');
					expect(vars.rollcall('Bobby_Moore')).toBe(true);
					expect(vars.rollcall('Carles_Puyol')).toBe(true);
					expect(vars.rollcall('Franco_Baresi')).toBe(true);
					expect(vars.rollcall('Franz_Beckenbauer')).toBe(true);
					expect(vars.rollcall('George_Cohen')).toBe(true);
					expect(vars.rollcall('Paolo_Maldini')).toBe(true);
					expect(vars.rollcall('Gordon_Banks')).toBe(false);
					expect(vars.rollcall('Dino_Zoff')).toBe(false);
					expect(vars.rollcall('Bobby_Charlton')).toBe(false);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Midfielder');

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

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Goalkeeper');

					expect(vars.rollcall('Dino_Zoff')).toBe(true);
					expect(vars.rollcall('Gianluigi_Buffon')).toBe(true);
					expect(vars.rollcall('Gordon_Banks')).toBe(true);
					expect(vars.rollcall('Oliver_Kahn')).toBe(true);
					expect(vars.rollcall('Gheorghe_Hagi')).toBe(false);
					expect(vars.rollcall('Michel_Platini')).toBe(false);
					expect(vars.rollcall('Carles_Puyol')).toBe(false);
					expect(vars.rollcall('Bobby_Moore')).toBe(false);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Forward');

					expect(vars.rollcall('Geoff_Hurst')).toBe(true);
					expect(vars.rollcall('Gerhard_Muller')).toBe(true);
					expect(vars.rollcall('Roger_Milla')).toBe(true);
					expect(vars.rollcall('Miroslav_Klose')).toBe(true);
					expect(vars.rollcall('Romario_Romario')).toBe(true);
					expect(vars.rollcall('Carles_Puyol')).toBe(false);
					expect(vars.rollcall('Bobby_Moore')).toBe(false);
					expect(vars.rollcall('Gordon_Banks')).toBe(false);

				});

				it('should dynamically sort the result of search ',
				  function () {
					  vars.list_icon.click();
					  vars.search_box_dynamicList.clear();
					  vars.search_box_dynamicList.sendKeys('Defender');
					  vars.highest_price_dropdown.click();

					  expect(vars.retrieveListElement()).toMatch('Cohen');
					  expect(vars.retrieveListElement(1)).toMatch('Puyol');
					  expect(vars.retrieveListElement(2)).toMatch('Maldini');
					  expect(vars.retrieveListElement(-1)).toMatch('Moore');

					  vars.lowest_id_dropdown.click();

					  expect(vars.retrieveListElement()).toMatch('Baresi');
					  expect(vars.retrieveListElement(1)).toMatch('Moore');

					  vars.alphabetical_dropdown.click();

					  expect(vars.retrieveListElement()).toMatch('Bobby Moore');
					  expect(vars.retrieveListElement(1)).toMatch('Carles Puyol');
				  });
			});
		});
	});
});

