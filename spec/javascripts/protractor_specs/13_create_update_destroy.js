'use strict';
describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');


	describe('CREATE', function () {

		beforeEach(function () {
			browser.get('#view5');
			vars.products.click();
		});

		describe('Preliminary Search', function () {

			it('should not occur in dynamic list search', function () {

				//New product is Maradona

				vars.dynamicSearch_linkTo_view15.click();
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Charlton');
				var search_result = $('ul.grid2');
				expect(search_result.getInnerHtml()).toMatch(vars.li_closing_tag_regex);
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Maradona');
				var search_result2 = $('ul.grid2');
				expect(search_result2.getInnerHtml()).not.toMatch(vars.li_closing_tag_regex);

			});

			it('should not occur in Product-table search', function () {

				vars.productSearch_linkTo_view9.click();
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Charlton');
				var search_result = $$('.table_lge_wrapper > table').get(0);
				expect(search_result.getInnerHtml()).toMatch(vars.getImg().charlton);
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Maradona');
				var search_result2 = $$('.table_lge_wrapper > table').get(0);
				expect(search_result2.getInnerHtml()).not.toMatch(vars.getImg().maradona);
				vars.search_box_dynamicTable.clear();
			});
		});

		describe('Create a new Product', function () {

			it('should create a new product',
			  function () {
				  vars.new_product_btn.click();
				  vars.name_field.sendKeys('Maradona');
				  vars.description_field.sendKeys('Considered by many to the greatest ever footballer');
				  vars.price_field.sendKeys('1000');
				  vars.category_field.sendKeys('Midfielder');
				  vars.image_url_field.sendKeys(vars.getImg().maradona);
				  vars.year_field.sendKeys(2014);
				  vars.winner_field.sendKeys(true);
				  browser.driver.sleep(600);
				  vars.submit_btn_new_product.click();
				  browser.driver.sleep(600);
				  expect($('#notice').getText()).toContain('Commodity was successfully created');
				  expect($$('table > thead > tr').get(0).getText()).toContain('Maradona');
				  browser.driver.sleep(1600);
			  });


			it('should appear in products table search', function () {

				vars.productSearch_linkTo_view9.click();
				vars.search_box_dynamicTable.sendKeys('Maradona');
				expect(vars.getRepeaterElementText()).toMatch('Maradona'.toUpperCase());
				expect(vars.getRepeaterElementText()).not.toMatch('Pirlo'.toUpperCase());

			});

			it('should appear in dynamic list search', function () {
				var maradona_image = vars.getImg().maradona;
				vars.dynamicSearch_linkTo_view15.click();
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Maradona');
				var search_result = $('ul.grid2');
				browser.driver.sleep(600);

				expect(search_result.getInnerHtml()).toMatch(maradona_image);
				expect(search_result.getInnerHtml()).toMatch(vars.li_closing_tag_regex);
				expect(vars.getGridImageSource()).toMatch(maradona_image);


			});
		});
	});

	describe('UPDATE', function () {

		beforeEach(function () {
			browser.get('#view5');
			vars.products.click();
		});

		describe('Preliminary Search', function () {

			it('should occur in dynamic search', function () {

				vars.dynamicSearch_linkTo_view15.click();
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Maradona');
				var search_result = $('ul.grid2');
				expect(search_result.getInnerHtml()).toMatch('Maradona');
				expect($$('[ng-src]').get(0).getAttribute('src')).toContain(vars.getImg().maradona)

			});

			describe('Update product', function () {

				it('should update a product',
				  function () {
					  var search_result_alt = $$('[ng-src]').get(0);
					  vars.dynamicSearch_linkTo_view15.click();
					  vars.search_box_dynamicList.clear();
					  vars.search_box_dynamicList.sendKeys('Maradona');
					  search_result_alt.click();
					  vars.edit_commodity_button.click();
					  vars.name_field.clear();
					  vars.name_field.sendKeys('Diego Maradona');
					  vars.update_commodity_button.click();
					  browser.driver.sleep(600);
					  expect($('#notice').getText()).toContain('Commodity was successfully updated');
					  expect($$('table > thead> tr').get(0).getText()).toContain('Diego');

				  });

				it('should appear in dynamic list search', function () {

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Diego');
					var search_result = $('ul.grid2');
					expect(search_result.getInnerHtml()).toMatch(vars.getImg().maradona);

				});

				it('should appear in products table search', function () {

					vars.productSearch_linkTo_view9.click();
					vars.search_box_dynamicTable.sendKeys('Diego');
					expect(vars.getRepeaterElementText()).toMatch('Diego'.toUpperCase());
					expect(vars.getRepeaterElementText()).not.toMatch('Pirlo'.toUpperCase());

				});
			});
		});
	});

	describe('DESTROY', function () {

		beforeEach(function () {
			browser.get('#view5');
			vars.products.click();
		});

		describe('Preliminary Search', function () {

			it('should occur in dynamic search', function () {

				var search_result = $('ul.grid2');
				vars.dynamicSearch_linkTo_view15.click();
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Diego');
				expect(search_result.getInnerHtml()).toMatch('Diego');
				expect($$('[ng-src]').get(0).getAttribute('src'))
				  .toContain(vars.getImg().maradona)

			});

			describe('Destroy product', function () {

				it('should destroy a product',
				  function () {
					  var search_result_alt = $$('[ng-src]').get(0);
					  vars.dynamicSearch_linkTo_view15.click();
					  vars.search_box_dynamicList.clear();
					  vars.search_box_dynamicList.sendKeys('Diego');
					  search_result_alt.click();
					  vars.destroy_commodity_button.click();
					  browser.driver.sleep(600);
					  browser.switchTo().alert().accept();
					  browser.driver.sleep(600);
					  expect(element(by.binding('viewSevenMessage')).getText()).
						toMatch(/New Commodity/);

				  });

				it('should not appear in dynamic list search', function () {
					var search_result = $('ul.grid2');
					vars.dynamicSearch_linkTo_view15.click();
					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Diego');
					expect(search_result.getInnerHtml()).not.toMatch(vars.li_closing_tag_regex);

					vars.search_box_dynamicList.clear();
					vars.search_box_dynamicList.sendKeys('Charlton');
					expect(search_result.getInnerHtml()).toMatch(vars.li_closing_tag_regex);

				});

				it('should not appear in products table search', function () {

					vars.productSearch_linkTo_view9.click();
					vars.search_box_dynamicTable.sendKeys('Diego');
					expect($$('table').get(0).getText()).not.toMatch('DIEGO');
					vars.search_box_dynamicTable.clear();
					vars.search_box_dynamicTable.sendKeys('Pirlo');
					expect($$('table').get(0).getText()).not.toMatch('DIEGO');
					expect($$('table').get(0).getText()).toMatch('PIRLO');

				});
			});
		});
	});
});
