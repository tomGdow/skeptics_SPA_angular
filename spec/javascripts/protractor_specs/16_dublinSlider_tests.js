'use strict';
describe('my app', function () {

    //==helper hexToRgbAlt ===
    //modified from here:http://stackoverflow.com/a/11508164/499167
    function hexToRgbaAlt(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        var str = '(';
        str += [r, g, b, 1].join(', ');
        str += ')';
        return str;
    }
    browser.get('#view1');


    describe('Slider)', function () {
        var mapSlideContainer = $('.mapSlideContainer');
        var arrow_next = $('.arrow.next');
        var arrow_previous = $('.arrow.prev');
        var show_googleMaps_btn = $('[ng-show="toggleslideshowButton"]');
        var google_map_button = $('.toggleslideshowButton .button.tiny');
        var show_gallery_btn = $('[ng-show="togglegmapButton"]');
        var gallery_button = $('.togglegmapButton .button.tiny');
        var tab_one = $('#tab_one');
        var google_slides = $('.googleSlide');
        var nav_bar_btn_1 = $$('.nav li span').get(0);
        var nav_bar_btn_2 = $$('.nav li span').get(1);
        var nav_bar_btn_3 = $$('.nav li span').get(2);
        var nav_bar_btn_4 = $$('.nav li span').get(3);
        var nav_bar_btn_5 = $$('.nav li span').get(4);
        var button_color = '008cba';
        var button_hover_color = '007095';
        var slider_images = {
            "collegeGreen": "dublinzz.jpg",
            "lordEdwardStreet": "dublinee.jpg",
            "parlimentStreet": "dublincc.jpg",
            "OConnellBridge": "dublinaa.jpg",
            "dawsonStreet": "dublinbb.jpg"};
        var gooleMapData = {
            collegeGreen: {lat: 53.3444, long: -6.2608},
            lordEdwardSt: {lat: 53.3439, long: -6.2686},
            parlimentSt: {lat: 53.3447, long: -6.2674},
            oconnellBridge: {lat: 53.3486, long: -6.2596},
            dawsonSt: {lat: 53.3409, long: -6.2583}
        };
        var copyrightData = {
            "collegeGreen": "86157-942. Copyright Indiana University Archive",
            "lordEdwardStreet": "0008615e-942. Copyright Indiana University Archive",
            "parlimentStreet": "0008615c-942. Copyright Indiana University Archive",
            "oconnellBridge": "0008615a-942. Copyright Indiana University Archive",
            "dawsonStreet": "0008615b-942. Copyright Indiana University Archive"
        };

        //browser.get('#view4');

        beforeEach(function () {
            $('#viewfour').click();
        });

        describe('Buttons and Arrows)', function () {
            describe('Arrow Next)', function () {
                it('should become visible', function () {
                    expect(arrow_next.getAttribute('Class')).toMatch('ng-hide');
                    mapSlideContainer.click();
                    expect(arrow_next.getAttribute('Class')).not.toMatch('ng-hide');
                });

                it('should display the correct background image', function () {
                    expect(arrow_next.getCssValue('background-image')).toMatch('next.png');

                });

                it('should have the correct transition value', function () {
                    expect(arrow_next.getCssValue('transition')).toBe('all 0.2s linear 0s');
                });

                it('should change opacity', function () {
                    expect(arrow_next.getCssValue('opacity')).toBe('0');
                    mapSlideContainer.click();
                    expect(arrow_next.getCssValue('opacity')).not.toBe('0');
                    arrow_next.getCssValue('opacity').then(function (value) {

                        //protractor returns a promise
                        expect(parseFloat(value).toPrecision(1)).toBe('0.2');
                    });

                    browser.actions().mouseMove($('.arrow.next')).perform();

                    arrow_next.getCssValue('opacity').then(function (value) {
                        expect(Math.round(value)).toBe(1);
                    });

                });
            });
            describe('Arrow Previous)', function () {

                it('should become visible', function () {
                    expect(arrow_previous.getAttribute('Class')).toMatch('ng-hide');
                    mapSlideContainer.click();
                    expect(arrow_previous.getAttribute('Class')).not.toMatch('ng-hide');
                });

                it('should display the correct background image', function () {
                    expect(arrow_previous.getCssValue('background-image')).toMatch('prev.png');

                });

                it('should have the correct transition value', function () {
                    expect(arrow_previous.getCssValue('transition')).toBe('all 0.2s linear 0s');
                });

                it('should change opacity', function () {
                    expect(arrow_previous.getCssValue('opacity')).toBe('0');
                    mapSlideContainer.click();
                    expect(arrow_previous.getCssValue('opacity')).not.toBe('0');
                    arrow_previous.getCssValue('opacity').then(function (value) {

                        //protractor returns a promise
                        expect(parseFloat(value).toPrecision(1)).toBe('0.2');
                    });

                    browser.actions().mouseMove($('.arrow.prev')).perform();

                    arrow_previous.getCssValue('opacity').then(function (value) {
                        expect(Math.round(value * 1)).toBe(1);
                    });
                });
            });

            describe('Toggle Google Map/SlideShow Buttons)', function () {

                describe('Show Google Maps Button)', function () {

                    it('should become visible', function () {
                        expect(show_googleMaps_btn.isDisplayed()).toBe(false);
                        tab_one.click();
                        mapSlideContainer.click();
                        expect(show_gallery_btn.isDisplayed()).toBe(false);
                        expect(show_googleMaps_btn.isDisplayed()).toBe(true);

                    });

                    it('should display the correct text', function () {
                        expect(show_googleMaps_btn.getInnerHtml()).toMatch('Show Google Map');
                        expect(show_googleMaps_btn.getInnerHtml()).not.toMatch('Gallery');
                    });

                    it('should display the correct background color', function () {

                        expect(google_map_button.getCssValue('background-color'))
                            .toMatch(hexToRgbaAlt(button_color));
                        mapSlideContainer.click();
                        browser.actions().mouseMove($('.toggleslideshowButton')).perform();
                        expect(google_map_button.getCssValue('background-color'))
                            .toMatch(hexToRgbaAlt(button_hover_color));
                    });
                });

                describe('Show Gallery Button)', function () {

                    it('should become visible', function () {
                        expect(show_googleMaps_btn.isDisplayed()).toBe(false);
                        expect(show_gallery_btn.isDisplayed()).toBe(false);
                        tab_one.click();
                        mapSlideContainer.click();
                        expect(show_gallery_btn.isDisplayed()).toBe(false);
                        expect(show_googleMaps_btn.isDisplayed()).toBe(true);
                        show_googleMaps_btn.click();
                        expect(show_googleMaps_btn.isDisplayed()).toBe(false);
                        expect(show_gallery_btn.isDisplayed()).toBe(true);
                        show_gallery_btn.click();
                        expect(show_googleMaps_btn.isDisplayed()).toBe(true);
                        expect(show_gallery_btn.isDisplayed()).toBe(false);
                        tab_one.click();
                        //expect(c.isDisplayed()).toBe(false);
                        expect(show_gallery_btn.isDisplayed()).toBe(false);
                    });

                    it('should display the correct text', function () {
                        expect(show_gallery_btn.getInnerHtml()).toMatch('Show Gallery');
                        expect(show_gallery_btn.getInnerHtml()).not.toMatch('Google');

                    });

                    it('should display the correct background color', function () {

                        expect(gallery_button.getCssValue('background-color'))
                            .toMatch(hexToRgbaAlt(button_color));

                        browser.actions().mouseMove($('.toggleslideshowButton')).perform();
                        mapSlideContainer.click();
                        show_googleMaps_btn.click();
                        expect(gallery_button.getCssValue('background-color'))
                            .toMatch(hexToRgbaAlt(button_hover_color));
                        show_gallery_btn.click();
                    });
                });
            });
        });

        describe('Picture Gallery)', function () {

            it('should show the correct Image', function () {

                var photo_div_one = element(by.repeater('photo in photos').row(1));
                var photo_div_two = element(by.repeater('photo in photos').row(2));
                var photo_div_three = element(by.repeater('photo in photos').row(3));
                var photo_div_four = element(by.repeater('photo in photos').row(4));
                var photo_div_zero = element(by.repeater('photo in photos').row(0));
                var image_one = $$('.slide.ng-scope>img').get(1);
                var image_two = $$('.slide.ng-scope>img').get(2);
                var image_three = $$('.slide.ng-scope>img').get(3);
                var image_four = $$('.slide.ng-scope>img').get(4);
                var image_zero = $$('.slide.ng-scope>img').get(0);


                expect(photo_div_one.getAttribute('class')).toMatch('ng-hide');
                expect(photo_div_two.getAttribute('class')).toMatch('ng-hide');
                expect(photo_div_three.getAttribute('class')).toMatch('ng-hide');
                expect(image_one.isDisplayed()).toBe(false);
                expect(image_two.isDisplayed()).toBe(false);

                mapSlideContainer.click();
                arrow_next.click();

                expect(photo_div_one.getAttribute('class')).not.toMatch('ng-hide');
                expect(image_one.isDisplayed()).toBe(true);
                expect(image_one.getAttribute('src')).toMatch(slider_images.lordEdwardStreet);

                mapSlideContainer.click();
                arrow_next.click();

                expect(photo_div_two.getAttribute('class')).not.toMatch('ng-hide');
                expect(image_two.isDisplayed()).toBe(true);
                expect(image_two.getAttribute('src')).toMatch(slider_images.parlimentStreet);

                mapSlideContainer.click();
                arrow_next.click();

                expect(photo_div_three.getAttribute('class')).not.toMatch('ng-hide');
                expect(image_three.isDisplayed()).toBe(true);
                expect(image_three.getAttribute('src')).toMatch(slider_images.OConnellBridge);

                mapSlideContainer.click();
                arrow_next.click();

                expect(photo_div_four.getAttribute('class')).not.toMatch('ng-hide');
                expect(image_four.isDisplayed()).toBe(true);
                expect(image_four.getAttribute('src')).toMatch(slider_images.dawsonStreet);

                mapSlideContainer.click();
                arrow_next.click();

                expect(photo_div_zero.getAttribute('class')).not.toMatch('ng-hide');
                expect(image_zero.isDisplayed()).toBe(true);
                expect(image_zero.getAttribute('src')).toMatch(slider_images.collegeGreen)

            });

            it('should show the correct Caption', function () {

                mapSlideContainer.click();
                nav_bar_btn_1.click();
                expect($$('.dubfigcaption').get(0).getInnerHtml()).toMatch(copyrightData.collegeGreen);
                nav_bar_btn_2.click();
                expect($$('.dubfigcaption').get(1).getInnerHtml()).toMatch(copyrightData.lordEdwardStreet);
                nav_bar_btn_3.click();
                expect($$('.dubfigcaption').get(2).getInnerHtml()).toMatch(copyrightData.parlimentStreet);
                nav_bar_btn_4.click();
                expect($$('.dubfigcaption').get(3).getInnerHtml()).toMatch(copyrightData.oconnellBridge);
                nav_bar_btn_5.click();
                expect($$('.dubfigcaption').get(4).getInnerHtml()).toMatch(copyrightData.dawsonStreet);
            });
        });


        describe('Google Maps)', function () {

            it('should become visible', function () {
                tab_one.click();
                mapSlideContainer.click();
                expect(google_slides.isDisplayed()).toBe(false);
                show_googleMaps_btn.click();
                expect(google_slides.isDisplayed()).toBe(true);
                show_gallery_btn.click();
                expect(google_slides.isDisplayed()).toBe(false);
            });
            it('should display the correct content', function () {

                nav_bar_btn_1.click();
                show_googleMaps_btn.click();
                expect(google_slides.getInnerHtml()).toMatch(gooleMapData.collegeGreen.long);
                show_gallery_btn.click();
                nav_bar_btn_2.click();
                show_googleMaps_btn.click();
                expect(google_slides.getInnerHtml()).toMatch(gooleMapData.lordEdwardSt.long);
                show_gallery_btn.click();
                nav_bar_btn_3.click();
                show_googleMaps_btn.click();
                expect(google_slides.getInnerHtml()).toMatch(gooleMapData.parlimentSt.long);
                show_gallery_btn.click();
                nav_bar_btn_4.click();
                show_googleMaps_btn.click();
                expect(google_slides.getInnerHtml()).toMatch(gooleMapData.oconnellBridge.long);
                show_gallery_btn.click();
                nav_bar_btn_5.click();
                show_googleMaps_btn.click();
                expect(google_slides.getInnerHtml()).toMatch(gooleMapData.dawsonSt.long);
            });
        });

        describe('Image Captions)', function () {

            var caption_one = $$('[ng-bind="photo.longdesc"]').get(0);
            var caption_two = $$('[ng-bind="photo.longdesc"]').get(1);
            var caption_three = $$('[ng-bind="photo.longdesc"]').get(2);
            var caption_four = $$('[ng-bind="photo.longdesc"]').get(3);
            var caption_five = $$('[ng-bind="photo.longdesc"]').get(4);

            it('should become visible', function () {
                browser.get('#view4');
                tab_one.click();
                mapSlideContainer.click();
                //expect(caption_one.isDisplayed()).toBe(true);
                expect(element.all(by
                    .cssContainingText('.ng-binding', 'College Green Dublin'))
                    .get(0).isDisplayed()).toBe(true);
            });

            it('should display the correct content', function () {
                browser.get('#view4');
                tab_one.click();
                mapSlideContainer.click();
                expect(caption_one.getInnerHtml()).toMatch('College Green');
                expect(caption_one.getInnerHtml()).toMatch('1961');
                mapSlideContainer.click();
                arrow_previous.click();
                expect(caption_five.getInnerHtml()).toMatch('Dawson Street');
                expect(caption_five.getInnerHtml()).not.toMatch('College Green');
                mapSlideContainer.click();
                arrow_previous.click();
                expect(caption_four.getInnerHtml()).toMatch('Connell Bridge');
                expect(caption_four.getInnerHtml()).not.toMatch('Dawson Street');
                mapSlideContainer.click();
                arrow_previous.click();
                expect(caption_three.getInnerHtml()).toMatch('Parliment Street');
                expect(caption_three.getInnerHtml()).not.toMatch('Connell Bridge');

                mapSlideContainer.click();
                arrow_previous.click();
                expect(caption_two.getInnerHtml()).toMatch('Lord Edward Street');
                expect(caption_two.getInnerHtml()).not.toMatch('Parliment');

            });

            it('should display the correct index', function () {
                browser.get('#view4');
                mapSlideContainer.click();

                expect(element.all(by.binding('Index')).get(0).getInnerHtml()).toMatch('1.');
                expect(element.all(by.binding('Index')).get(0).getInnerHtml()).toMatch('College Green.');
                expect(element.all(by.binding('Index')).get(0).isDisplayed()).toBe(true);
                expect(element.all(by.binding('Index')).get(1).isDisplayed()).toBe(false);

                mapSlideContainer.click();
                arrow_next.click();
                expect(element.all(by.binding('Index')).get(1).getInnerHtml()).toMatch('2.');
                expect(element.all(by.binding('Index')).get(1).getInnerHtml()).toMatch('Lord Edward Street');
                expect(element.all(by.binding('Index')).get(1).getInnerHtml()).not.toMatch('Green');

                mapSlideContainer.click();
                arrow_next.click();

                expect(element.all(by.binding('Index')).get(2).getInnerHtml()).toMatch('3.');
                expect(element.all(by.binding('Index')).get(2).getInnerHtml()).toMatch('Parliment');
                expect(element.all(by.binding('Index')).get(2).getInnerHtml()).not.toMatch('Green');

                mapSlideContainer.click();
                arrow_next.click();

                expect(element.all(by.binding('Index')).get(3).getInnerHtml()).toMatch('4.');
                expect(element.all(by.binding('Index')).get(3).getInnerHtml()).toMatch('Connell Bridge');
                expect(element.all(by.binding('Index')).get(3).getInnerHtml()).not.toMatch('Parliment');

                mapSlideContainer.click();
                arrow_next.click();

                expect(element.all(by.binding('Index')).get(4).getInnerHtml()).toMatch('5.');
                expect(element.all(by.binding('Index')).get(4).getInnerHtml()).toMatch('Dawson');
                expect(element.all(by.binding('Index')).get(4).getInnerHtml()).not.toMatch('Connell');

            });
        });
    });
});
