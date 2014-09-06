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
        str+=[r, g, b].join(', ');
        str+=')';
        return str;
    }

    browser.get('#view1');

    describe('Main Nav-bar', function () {

        describe('home page (view1)', function () {

            element(by.css('.home')).click();

            it('should visit the correct page', function () {

                var browser_url = browser.getLocationAbsUrl();

                expect(browser_url).toMatch('view1');
                expect(browser_url).not.toMatch('view2');

            });

            it('should have the correct title', function () {
                element(by.css('.home')).click();
                var my_home = element.all(by.css('.home'));
                var rendered_home = 'home'.toUpperCase();

                expect(my_home.get(1).getText()).
                    toMatch(rendered_home);
                expect(my_home.get(1).getText()).
                    not.toMatch(/Home/);
            });

            it('should have the correct background color', function () {
                element(by.css('.home')).click();

                var my_bg_color = element(by.css('nav.home .home'));
                var my_color = hexToRgb('0078A0');

                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });
        });


        describe('view8', function () {

            it('should visit the correct page', function () {

                element(by.css('.vieweight')).click();

                var browser_url = browser.getLocationAbsUrl();

                expect(browser_url).toMatch('view8');
                expect(browser_url).not.toMatch('vieweight');

            });

            it('should have the correct title', function () {
                element(by.css('.vieweight')).click();
                var my_blog = element.all(by.css('.vieweight'));
                var rendered_blog = 'blog'.toUpperCase();

                expect(my_blog.get(1).getText()).
                    toMatch(rendered_blog);
                expect(my_blog.get(1).getText()).
                    not.toMatch(/blog/);
            });

            it('should have the correct background color', function () {
                element(by.css('.vieweight')).click();

                var my_bg_color = element(by.css('nav.vieweight .vieweight'));
                var my_color = hexToRgb('0078A0');

                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

        });


        describe('view2', function () {

            it('should visit the correct page', function () {

                element(by.css('.viewtwo')).click();

                var browser_url = browser.getLocationAbsUrl();

                expect(browser_url).toMatch('view2');
                expect(browser_url).not.toMatch('viewtwo');

            });

            it('should have the correct title', function () {
                element(by.css('.viewtwo')).click();
                var my_videos = element.all(by.css('.viewtwo'));
                var rendered_videos = 'videos'.toUpperCase();

                expect(my_videos.get(1).getText()).
                    toMatch(rendered_videos);
                expect(my_videos.get(1).getText()).
                    not.toMatch(/videos/);
            });

            it('should have the correct background color', function () {
                element(by.css('.viewtwo')).click();

                var my_bg_color = element(by.css('nav.viewtwo .viewtwo'));
                var my_color = hexToRgb('0078A0');

                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

        });

        describe('view3', function () {

            it('should visit the correct page', function () {

                element(by.css('.viewthree')).click();

                var browser_url = browser.getLocationAbsUrl();

                expect(browser_url).toMatch('view3');
                expect(browser_url).not.toMatch('viewthree');

            });

            it('should have the correct title', function () {
                element(by.css('.viewthree')).click();
                var my_apis = element.all(by.css('.viewthree'));
                var rendered_apis = 'api feeds'.toUpperCase();

                expect(my_apis.get(1).getText()).
                    toMatch(rendered_apis);
                expect(my_apis.get(1).getText()).
                    not.toMatch(/api/);
            });

            it('should have the correct background color', function () {
                element(by.css('.viewthree')).click();

                var my_bg_color = element(by.css('nav.viewthree .viewthree'));
                var my_color = hexToRgb('0078A0');

                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

        });

        describe('view4', function () {

            it('should visit the correct page', function () {

                element(by.css('.viewfour')).click();

                var browser_url = browser.getLocationAbsUrl();

                expect(browser_url).toMatch('view4');
                expect(browser_url).not.toMatch('viewfour');

            });

            it('should have the correct title', function () {
                element(by.css('.viewfour')).click();
                var my_gallery = element.all(by.css('.viewfour'));
                var rendered_gallery = 'dublin gallery'.toUpperCase();

                expect(my_gallery.get(1).getText()).
                    toMatch(rendered_gallery);
                expect(my_gallery.get(1).getText()).
                    not.toMatch(/api/);
            });

            it('should have the correct background color', function () {
                element(by.css('.viewfour')).click();

                var my_bg_color = element(by.css('nav.viewfour .viewfour'));
                var my_color = hexToRgb('0078A0');

                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

        });


        describe('view5', function () {

            it('should visit the correct page', function () {

                element(by.css('.viewfive')).click();

                var browser_url = browser.getLocationAbsUrl();

                expect(browser_url).toMatch('view5');
                expect(browser_url).not.toMatch('viewfive');

            });

            it('should have the correct title', function () {
                element(by.css('.viewfive')).click();
                var my_products = element.all(by.css('.viewfive'));
                var rendered_products = 'products'.toUpperCase();

                expect(my_products.get(1).getText()).
                    toMatch(rendered_products);
                expect(my_products.get(1).getText()).
                    not.toMatch(/products/);
            });

            it('should have the correct background color', function () {
                element(by.css('.viewfive')).click();

                var my_bg_color = element(by.css('nav.viewfive .viewfive'));
                var my_color = hexToRgb('0078A0');

                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);

            });

        });

    });

});