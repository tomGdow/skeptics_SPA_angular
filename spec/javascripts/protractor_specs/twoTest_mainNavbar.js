'use strict';
describe('my app', function () {

    //==helper hexToRgb ===
    //hexToRgb modified from here:http://stackoverflow.com/a/11508164/499167

    function hexToRgb(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        var str = 'rgb(';
        str += [r, g, b].join(', ');
        str += ')';
        return str;
    } //hexToRgba is a different function.

    browser.get('#view1');

    describe('Main Nav-bar', function () {

        var skepticsBlue = '0078A0';

        describe('home page (view1)', function () {

            var my_home = $('#myhome');

            beforeEach(function () {
                browser.get('#view1');
                my_home.click();
            });

            it('should visit the correct page', function () {
                var browser_url = browser.getLocationAbsUrl();
                expect(browser_url).toMatch('view1');
                expect(browser_url).not.toMatch('view2');
            });

            it('should have the correct title', function () {
                var expect_rendered = 'home'.toUpperCase();
                expect(my_home.getText()).
                    toMatch(expect_rendered);
                expect(my_home.getText()).
                    not.toMatch(/Home/);
            });

            it('should have the correct background color', function () {
                expect($('nav.home .home').getCssValue('background-image'))
                    .toContain(hexToRgb(skepticsBlue));
            });

            it('should display the correct icon', function () {
                expect($('#myhome > span').getAttribute('class')).toContain('fa-home');
            });
        });

        describe('view8', function () {

            var my_blog = $('#vieweight');
            var expect_rendered = 'blog'.toUpperCase();

            beforeEach(function () {
                browser.get('#view8');
                my_blog.click();
            });

            it('should visit the correct page', function () {
                $('#vieweight').click();
                var browser_url = browser.getLocationAbsUrl();
                expect(browser_url).toMatch('view8');
                expect(browser_url).not.toMatch('vieweight');
            });

            it('should have the correct title', function () {
                expect(my_blog.getText()).toMatch(expect_rendered);
                expect(my_blog.getText()).not.toMatch(/blog/);
            });

            it('should have the correct background color', function () {
                expect($('nav.vieweight .vieweight').getCssValue('background-image'))
                    .toContain(hexToRgb(skepticsBlue));
            });

            it('should display the correct icon', function () {
                expect($('#vieweight > span').getAttribute('class')).toContain('fa-comment-o');
            });
        });

        describe('view2', function () {

            var my_videos = $('#viewtwo');

            beforeEach(function () {
                browser.get('#view2');
                my_videos.click();
            });

            it('should visit the correct page', function () {
                var browser_url = browser.getLocationAbsUrl();
                expect(browser_url).toMatch('view2');
                expect(browser_url).not.toMatch('viewtwo');

            });

            it('should have the correct title', function () {
                var expect_rendered = 'videos'.toUpperCase();
                expect(my_videos.getText()).toMatch(expect_rendered);
                expect(my_videos.getText()).not.toMatch(/videos/);
            });

            it('should have the correct background color', function () {
                var my_bg_color = element(by.css('nav.viewtwo .viewtwo'));
                var my_color = hexToRgb('0078A0');
                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);
            });

            it('should display the correct icon', function () {
                expect($('#viewtwo > span').getAttribute('class')).toContain('fa-film');
            });

        });

        describe('view3', function () {

            var my_apis = $('#viewthree');

            beforeEach(function () {
                browser.get('#view3');
                my_apis.click();
            });

            it('should visit the correct page', function () {

                var browser_url = browser.getLocationAbsUrl();
                expect(browser_url).toMatch('view3');
                expect(browser_url).not.toMatch('viewthree');

            });

            it('should have the correct title', function () {

                var expect_rendered = 'api feeds'.toUpperCase();
                expect(my_apis.getText()).toMatch(expect_rendered);
                expect(my_apis.getText()).not.toMatch(/api/);
            });

            it('should have the correct background color', function () {

                var my_bg_color = element(by.css('nav.viewthree .viewthree'));
                var my_color = hexToRgb('0078A0');
                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

            it('should display the correct icon', function () {

                var view3_icon_one = $('#viewthree > span:first-child');
                var view3_icon_two = $('#viewthree > span:nth-child(2)');

                expect(view3_icon_one.getAttribute('class')).toContain('fa-instagram');
                expect(view3_icon_two.getAttribute('class')).toContain('fa-dribbble');
                expect(view3_icon_two.getAttribute('class')).not.toContain('dribble');
            });

        });

        describe('view4', function () {

            var my_gallery = $('#viewfour');

            beforeEach(function () {
                browser.get('#view4');
                my_gallery.click();
            });

            it('should visit the correct page', function () {

                var browser_url = browser.getLocationAbsUrl();
                expect(browser_url).toMatch('view4');
                expect(browser_url).not.toMatch('viewfour');

            });

            it('should have the correct title', function () {

                var expect_rendered = 'dublin gallery'.toUpperCase();
                expect(my_gallery.getText()).toMatch(expect_rendered);
                expect(my_gallery.getText()).not.toMatch(/api/);
            });

            it('should have the correct background color', function () {
                var my_bg_color = element(by.css('nav.viewfour .viewfour'));
                var my_color = hexToRgb('0078A0');
                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

            it('should display the correct icon', function () {
                expect($('#viewfour > span').getAttribute('class')).toContain('fa-camera');
            });
        });


        describe('view5', function () {

            var my_products = $('#viewfive');

            beforeEach(function () {
                browser.get('#view5');
                my_products.click();
            });

            it('should visit the correct page', function () {

                var browser_url = browser.getLocationAbsUrl();
                expect(browser_url).toMatch('view5');
                expect(browser_url).not.toMatch('viewfive');

            });

            it('should have the correct title', function () {
                var my_products = element.all(by.css('.viewfive'));
                var expect_rendered = 'products'.toUpperCase();

                expect(my_products.get(1).getText()).toMatch(expect_rendered);
                expect(my_products.get(1).getText()).not.toMatch(/products/);
            });

            it('should have the correct background color', function () {

                var my_bg_color = element(by.css('nav.viewfive .viewfive'));
                var my_color = hexToRgb('0078A0');
                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

            it('should display the correct icon', function () {
                expect($('#viewfive > span').getAttribute('class')).toContain('fa-shopping-cart');
            });

        });

    }); //main-nav
});//api