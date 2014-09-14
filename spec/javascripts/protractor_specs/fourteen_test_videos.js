'use strict';
describe('my app', function () {

    browser.get('#view2');

    describe('Videos)', function () {

        beforeEach(function () {
            browser.get('#view2');
        });

        var videoSources = {
            "oceanView": "video-js.zencoder.com/oceans-clip.mp4",
            "earthAsdot": 'http://www.videogular.com/assets/videos/videogular.mp4'
        };



        describe('Ocean View Video)', function () {

            var ocean_view_video_container = $('#videoregularOne');
            var ocean_view_video = $('#videoOne');
            var make_large_small_btn1 = $$('button.button.tiny').get(2);
            var ocean_view_src = $$('.videoPlayer').get(0).getAttribute('src');
            var page_header = $('#viewTwoMessage');
            var ocean_view_controls = $('#videoOneControls');
            var pause_play_one = $$('.iconButton').get(0);
            var autohide_btn1 = $('#autoHideInput');


            it('should have the correct source', function () {

                expect(ocean_view_src).toMatch(videoSources.oceanView);

            });

            it('should have the correct title', function () {

                expect(element(by.id('videoOneTitle')).getInnerHtml()).toMatch('Ocean View');

            });     $$('img.fill').get(0).getAttribute('src')

            it('should have the correct overlay image', function () {

                expect($$('img.fill').get(0).getAttribute('src')).toMatch('/assets/oceans-clip.png');

            });

            it('should display/hide hidden control panel', function () {

                browser.actions().mouseMove(page_header).perform();
                browser.actions().mouseMove(ocean_view_video).perform();

                expect(ocean_view_controls.getAttribute('class')).not.toMatch('vgControlsHidden');
                expect(ocean_view_controls.getAttribute('class')).toMatch('vgControlsTwo');
                expect(element(by.id('width_label_ocean_view')).isDisplayed()).toBeTruthy();
                expect(element(by.id('height_label_ocean_view')).isDisplayed()).toBeTruthy();

                browser.actions().mouseMove(page_header).perform();

                expect(ocean_view_controls.getAttribute('class')).toMatch('vgControlsHidden');
                expect(ocean_view_controls.getAttribute('class')).toMatch('vgControlsTwo');

                expect(element(by.id('width_label_ocean_view')).isDisplayed()).toBeFalsy();
                expect(element(by.id('height_label_ocean_view')).isDisplayed()).toBeFalsy();

            });

            it('should change size', function () {
                browser.actions().mouseMove(page_header).perform();
                browser.actions().mouseMove(ocean_view_video).perform();
                expect(ocean_view_video_container.getCssValue('height')).toMatch('228');
                expect(ocean_view_video_container.getCssValue('width')).toMatch('444');

                make_large_small_btn1.click();

                expect(ocean_view_video_container.getCssValue('height')).toMatch('360');
                expect(ocean_view_video_container.getCssValue('width')).toMatch('720');


            });

            it('should autohide controls ', function () {

                    // browser.get('#view2');
                    browser.actions().mouseMove(page_header).perform();
                    browser.actions().mouseMove(ocean_view_video).perform();
                    expect(element(by.id('autoHideInput')).getAttribute('checked')).toBeTruthy();

                    autohide_btn1.click();
                    expect(pause_play_one.isDisplayed()).toBe(true);
                    expect(element(by.id('autoHideInput')).getAttribute('checked')).toBeFalsy();

                }
            );

            it('should display the correct button text ', function () {

                    browser.actions().mouseMove(page_header).perform();
                    browser.actions().mouseMove(ocean_view_video).perform();
                    expect(element(by.buttonText('Larger View')).isDisplayed()).toBe(true);
                    make_large_small_btn1.click();
                    expect(element(by.buttonText('Smaller View')).isDisplayed()).toBe(true);
                    make_large_small_btn1.click();

                }
            );

            it('should activate/deactivate play', function (done) {

                    browser.actions().mouseMove(page_header).perform();
                    browser.actions().mouseMove(ocean_view_video).perform();

                    autohide_btn1.click();

                    expect(pause_play_one.getAttribute('class')).toMatch('play');

                    pause_play_one.click();

                    expect(pause_play_one.getAttribute('class')).toMatch('pause');

                    setTimeout(function () {
                        pause_play_one.click();
                        done();

                    }, 1000);

                    pause_play_one.click();
                    expect(pause_play_one.getAttribute('class')).toMatch('play');

                }
            );

        });


        describe('Earth as Dot (Isis Expedition) Video)', function () {

            var earthAsDot_video_container = $('#videoregularTwo');
            var earthAsDot_video = $('#videoTwo');
            var make_large_small_btn2 = $$('button.button.tiny').get(3);
            var earthAsDot_view_src = $$('.videoPlayer').get(1).getAttribute('src');
            var video_two_title = element(by.id('videoTwoTitle'));
            var earthAsDot_controls = $('#videoTwoControls');
            var pause_play_two = $$('.iconButton').get(3);
            var autohide_btn2 = $('#autoHideInput2');


            it('should have the correct source', function () {

                expect(earthAsDot_view_src).toMatch(videoSources.earthAsdot);

            });

            it('should have the correct title', function () {

                expect(video_two_title.getInnerHtml()).toMatch('Earth from Isis Expedition');

            });

            it('should have the correct overlay image', function () {

                expect($$('img.fill').get(1).getAttribute('src')).toMatch('/assets/videogular.png');

            });



            it('should display/hide hidden control panel', function () {

                browser.actions().mouseMove(video_two_title).perform();
                browser.actions().mouseMove(earthAsDot_video).perform();

                expect(earthAsDot_controls.getAttribute('class')).not.toMatch('vgControlsHidden');
                expect(earthAsDot_controls.getAttribute('class')).toMatch('vgControlsTwo');
                expect(element(by.id('width_label_earth_as_dot')).isDisplayed()).toBeTruthy();
                expect(element(by.id('height_label_earth_as_dot')).isDisplayed()).toBeTruthy();

                browser.actions().mouseMove(video_two_title).perform();

                expect(earthAsDot_controls.getAttribute('class')).toMatch('vgControlsHidden');
                expect(earthAsDot_controls.getAttribute('class')).toMatch('vgControlsTwo');

                expect(element(by.id('width_label_earth_as_dot')).isDisplayed()).toBeFalsy();
                expect(element(by.id('height_label_earth_as_dot')).isDisplayed()).toBeFalsy();

            });

            it('should change size', function () {
                browser.actions().mouseMove(video_two_title).perform();
                browser.actions().mouseMove(earthAsDot_video).perform();
                expect(earthAsDot_video_container.getCssValue('height')).toMatch('360');
                expect(earthAsDot_video_container.getCssValue('width')).toMatch('720');

                make_large_small_btn2.click();

                expect(earthAsDot_video_container.getCssValue('height')).toMatch('228');
                expect(earthAsDot_video_container.getCssValue('width')).toMatch('444');


            });

            it('should autohide controls ', function () {

                    // browser.get('#view2');
                    browser.actions().mouseMove(video_two_title).perform();
                    browser.actions().mouseMove(earthAsDot_video).perform();
                    expect(element(by.id('autoHideInput2')).getAttribute('checked')).toBeTruthy();

                    autohide_btn2.click();
                    expect(pause_play_two.isDisplayed()).toBe(true);
                    expect(element(by.id('autoHideInput2')).getAttribute('checked')).toBeFalsy();



                }
            );

            it('should display the correct button text ', function () {

                    browser.actions().mouseMove(video_two_title).perform();
                    browser.actions().mouseMove(earthAsDot_video).perform();
                    expect(element(by.buttonText('Smaller View')).isDisplayed()).toBe(true);
                    make_large_small_btn2.click();
                    browser.actions().mouseMove(earthAsDot_video).perform();
                    expect(element(by.buttonText('Larger View')).isDisplayed()).toBe(true);
                    make_large_small_btn2.click();

                }
            );
            /*
             it('should activate/deactivate play', function (done) {

             browser.actions().mouseMove(video_two_title).perform();
             browser.actions().mouseMove(earthAsDot_video).perform();

             autohide_btn2.click();
             browser.actions().mouseMove(earthAsDot_video).perform();
             expect(pause_play_two.getAttribute('class')).toMatch('play');

             pause_play_two.click();

             expect(pause_play_two.getAttribute('class')).not.toMatch('play');

             setTimeout(function () {
             pause_play_two.click();
             done();

             }, 1000);
             browser.actions().mouseMove(earthAsDot_video).perform();
             pause_play_two.click();
             expect(pause_play_two.getAttribute('class')).toMatch('play');

             }
             );*/




        });
    });
});
