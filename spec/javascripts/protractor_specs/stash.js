'use strict';
describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	var getGridImageSource = function (arg) {
		arg = typeof arg !== 'undefined' ? arg : 0;
		return $$('.grid2 li span a img').get(arg).getAttribute('src')

	};

	$$('[ng-repeat]').get(0).getText()


	describe('CREATE a product', function () {

		beforeEach(function () {
			browser.get('#view5');
			vars.products.click();
		});

		describe('Preliminary Search', function () {

			it('should not occur in dynamic search', function () {

				var search_result = $('ul.grid2');

				vars.dynamic_search_btn_GoToView15.click();
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Charlton');
				expect(search_result.getInnerHtml()).toMatch(li_closing_tag_regex);
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Maradonna');
				expect(search_result.getInnerHtml()).not.toMatch(li_closing_tag_regex);

			});

			it('should not occur in Product search', function () {

				var search_result = $$('.table_lge_wrapper > table').get(0);

				product_search_btn_GoToView9.click();
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Charlton');
				expect(search_result.getInnerHtml()).toMatch(vars.getImg().charlton);
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Maradona');
				expect(search_result.getInnerHtml()).toMatch(vars.getImg().maradona);
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Maraddddona');
				expect(search_result.getInnerHtml()).not.toMatch(vars.getImg().maradona);
			});
		});

		describe('Add a new Product', function () {

			it('should be visible in dynamic search', function () {

				var search_result = $('ul.grid2');
				vars.search_box_dynamicList.clear();
				vars.search_box_dynamicList.sendKeys('Maradona');
				expect(search_result.getInnerHtml()).toMatch(vars.getImg().maradona);

			});

			it('should be visible in products search', function () {

				var search_result = $$('.table_lge_wrapper > table').get(0);
				product_search_btn_GoToView9.click();
				vars.search_box_dynamicTable.clear();
				vars.search_box_dynamicTable.sendKeys('Maradona');
				expect(search_result.getInnerHtml()).toMatch(vars.getImg().maradona);
				expect(search_result.getInnerHtml()).toMatch(vars.getRgb().input_box_gray);

			});
		});
	});
});

