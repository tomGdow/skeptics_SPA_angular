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

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });

    describe('nav bar functionality', function () {

        describe('home', function () {

            beforeEach(function () {
                browser.get('#view1');

            });


            element(by.css('.home')).click();
            it('should visit the correct page', function () {
                var browser_url = browser.getLocationAbsUrl();
                var my_home = element.all(by.css('.home'));
                expect(browser_url).toMatch('view1');
                expect(browser_url).not.toMatch('view2');

                it('should have the correct title', function () {

                    expect(my_home.get(1).getText()).
                        toMatch(/toUpperCase(home)/);
                    expect(my_home.get(1).getText()).
                        not.toMatch(/Home/);
                });

                it('should render the correct background color ', function () {

                    var my_bg_color = element(by.css('nav.vieweight .vieweight'));
                    var my_color = hexToRgb('0078A0');

                expect(my_bg_color.getCssValue('background-image')).toContain(my_color);
                });


            });

        });


    });

});