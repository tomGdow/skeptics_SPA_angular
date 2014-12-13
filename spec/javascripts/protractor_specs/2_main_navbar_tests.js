'use strict';
describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	describe('Main Nav-bar', function () {

		describe('home page (view1)', function () {

			beforeEach(function () {
				browser.get('#view1');
				vars.home.click();
			});

			it('should visit the correct page', function () {
				var browser_url = browser.getLocationAbsUrl();

				expect(browser_url).toMatch('view1');
				expect(browser_url).not.toMatch('view2');
			});

			it('should have the correct title', function () {

				expect(vars.home.getText()).toMatch('home'.toUpperCase());
				expect(vars.home.getText()).not.toMatch(/Home/);
			});

			it('should have the correct background color', function () {
				expect($('nav.home .home').getCssValue('background-image'))
				  .toContain(vars.getRgb().skepticsBlue);
			});

			it('should display the correct icon', function () {
				expect(vars.home_icon.getAttribute('class')).toContain('fa-home');
			});
		});

		describe('view8', function () {

			beforeEach(function () {
				browser.get('#view8');
				vars.blog.click();
			});

			it('should visit the correct page', function () {
				var browser_url = browser.getLocationAbsUrl();
				vars.blog.click();
				expect(browser_url).toMatch('view8');
				expect(browser_url).not.toMatch('vieweight');
			});

			it('should have the correct title', function () {
				expect(vars.blog.getText()).toMatch('blog'.toUpperCase());
				expect(vars.blog.getText()).not.toMatch(/blog/);
			});

			it('should have the correct background color', function () {
				expect($('nav.vieweight .vieweight').getCssValue('background-image'))
				  .toContain(vars.getRgb().skepticsBlue);
			});

			it('should display the correct icon', function () {
				expect(vars.blog_icon.getAttribute('class')).toContain('fa-comment-o');
			});
		});

		describe('view2', function () {
			beforeEach(function () {
				browser.get('#view2');
				vars.video.click();
			});

			it('should visit the correct page', function () {
				var browser_url = browser.getLocationAbsUrl();
				expect(browser_url).toMatch('view2');
				expect(browser_url).not.toMatch('viewtwo');

			});

			it('should have the correct title', function () {
				expect(vars.video.getText()).toMatch('videos'.toUpperCase());
				expect(vars.video.getText()).not.toMatch(/videos/);
			});

			it('should have the correct background color', function () {
				var temp = element(by.css('nav.viewtwo .viewtwo'));
				expect(temp.getCssValue('background-image')).toContain(vars.getRgb().skepticsBlue);
			});

			it('should display the correct icon', function () {
				expect(vars.video_icon.getAttribute('class')).toContain('fa-film');
			});
		});

		describe('view3', function () {

			beforeEach(function () {
				browser.get('#view3');
				vars.api_feeds.click();
			});

			it('should visit the correct page', function () {
				var browser_url = browser.getLocationAbsUrl();
				expect(browser_url).toMatch('view3');
				expect(browser_url).not.toMatch('viewthree');
			});

			it('should have the correct title', function () {
				var expect_rendered = 'api feeds'.toUpperCase();
				expect(vars.api_feeds.getText()).toMatch(expect_rendered);
				expect(vars.api_feeds.getText()).not.toMatch(/api/);
			});

			it('should have the correct background color', function () {
				var temp = element(by.css('nav.viewthree .viewthree'));
				expect(temp.getCssValue('background-image')).toContain(vars.getRgb().skepticsBlue);
			});

			it('should display the correct icon', function () {

				expect(vars.api_instagram_icon.getAttribute('class')).toContain('fa-instagram');
				expect(vars.api_dribbble_icon.getAttribute('class')).toContain('fa-dribbble');
				expect(vars.api_dribbble_icon.getAttribute('class')).not.toContain('dribble');

			});
		});

		describe('view4', function () {

			// var my_gallery = $('#viewfour');

			beforeEach(function () {
				browser.get('#view4');
				vars.dublin_gallery.click();
			});

			it('should visit the correct page', function () {
				var browser_url = browser.getLocationAbsUrl();
				expect(browser_url).toMatch('view4');
				expect(browser_url).not.toMatch('viewfour');

			});

			it('should have the correct title', function () {
				var expect_rendered = 'dublin gallery'.toUpperCase();
				expect(vars.dublin_gallery.getText()).toMatch(expect_rendered);
				expect(vars.dublin_gallery.getText()).not.toMatch(/api/);
			});

			it('should have the correct background color', function () {
				var temp = element(by.css('nav.viewfour .viewfour'));
				expect(temp.getCssValue('background-image')).toContain(vars.getRgb().skepticsBlue);

			});

			it('should display the correct icon', function () {
				expect(vars.dublin_gallery_icon.getAttribute('class')).toContain('fa-camera');
			});
		});

		describe('view5', function () {

			beforeEach(function () {
				browser.get('#view5');
				vars.products.click();
			});

			it('should visit the correct page', function () {
				var browser_url = browser.getLocationAbsUrl();
				expect(browser_url).toMatch('view5');
				expect(browser_url).not.toMatch('viewfive');

			});

			it('should have the correct title', function () {
				expect(vars.products.getText()).toMatch('products'.toUpperCase());
				expect(vars.products.getText()).not.toMatch(/products/);
			});

			it('should have the correct background color', function () {
				var temp = element(by.css('nav.viewfive .viewfive'));
				expect(temp.getCssValue('background-image')).toContain(vars.getRgb().skepticsBlue);

			});

			it('should display the correct icon', function () {
				expect(vars.products_icon.getAttribute('class')).toContain('fa-shopping-cart');
			});
		});
	});
});