'use strict';
describe('my app', function () {

    browser.get('#view1');

    describe('footer', function () {

        //browser.get('#view1');

        it('should be visible', function () {
            var footerDisplay = element(by.css('.footerDisplay '));
            expect(footerDisplay.getCssValue('visibility')).toBe('visible');
        });

        it('should be change visibility', function () {
            element(by.css('.fa-times-circle')).click();
            var footerHide = element(by.css('.footerHide '));
            expect(footerHide.getCssValue('visibility')).toBe('hidden');
        });

        it('should have the correct transition time', function () {

            var elem =  element(by.css('.footerList li a '));
            var elem2 = element(by.css('.icon-github '));
            var elem3 = element(by.css('.icon-facebook'));
            var elem4 = element(by.css('.icon-twitter'));
            var elem5 = element(by.css('.icon-googleplus'));

            expect(elem.getCssValue('transition-duration')).toBe('1s');
            expect(elem2.getCssValue('transition-duration')).toBe('1s');
            expect(elem2.getCssValue('transition-duration')).not.toBe('2s');
            expect(elem3.getCssValue('transition-duration')).toBe('1s');
            expect(elem4.getCssValue('transition-duration')).toBe('1s');
            expect(elem5.getCssValue('transition-duration')).toBe('1s');

        });

        it('should have the correct transition timing function', function () {

            var elem =  element(by.css('.footerList li a '));
            var elem2 = element(by.css('.icon-github '));
            var elem3 = element(by.css('.icon-facebook'));
            var elem4 = element(by.css('.icon-twitter'));
            var elem5 = element(by.css('.icon-googleplus'));
           // var timing_function ='cubic-bezier(0.42, 0, 0.58, 1)';//ease-in-out
            var timing_function ='ease-in-out';//ease-in-out

            expect(elem.getCssValue('transition-timing-function')).toBe(timing_function);
            expect(elem2.getCssValue('transition-timing-function')).toBe(timing_function);
            //expect(elem2.getCssValue('transition-timing-function')).not.toBe('ease-in-out');
            expect(elem3.getCssValue('transition-timing-function')).toBe(timing_function);
            expect(elem4.getCssValue('transition-timing-function')).toBe(timing_function);
            expect(elem5.getCssValue('transition-timing-function')).toBe(timing_function);

        });


        it('should have the correct external url', function () {

            var elem2 = element(by.css('.icon-github '));
            var elem3 = element(by.css('.icon-facebook'));
            var elem4 = element(by.css('.icon-twitter'));
            var elem5 = element(by.css('.icon-googleplus'));

            var git_address = 'github.com/tomGdow/skeptics_SPA_angular';
            var twitter_address = 'twitter.com';
            var facebook_address = 'www.facebook.com';
            var googleplus_address = 'plus.google.com';

            expect(elem2.getAttribute('href')).toMatch(git_address);
            expect(elem3.getAttribute('href')).toMatch(facebook_address);
            expect(elem4.getAttribute('href')).toMatch(twitter_address);
            expect(elem5.getAttribute('href')).toMatch(googleplus_address);

        });

        it('should be a flexbox', function () {

            var elem = element(by.css('.footerList '));
            expect(elem.getCssValue('display')).toBe('flex')

        });

        it('should display the correct text on mouse-over', function () {

            browser.get('#view1');
            var github = element(by.css('.icon-github'));
            var facebook = element(by.css('.icon-facebook'));
            var twitter = element(by.css('.icon-twitter'));
            var hide_me = element(by.css('.fa-times-circle'));

            expect(github.getText()).not.toMatch('Github');
            browser.actions().mouseMove($('.icon-github')).perform();

            expect(facebook.getText()).not.toMatch('Facebook');
            browser.actions().mouseMove($('.icon-facebook')).perform();

            expect(facebook.getText()).toMatch('Facebook');

            expect(twitter.getText()).not.toMatch('Twitter');
            browser.actions().mouseMove($('.icon-twitter')).perform();
            expect(twitter.getText()).toMatch('Twitter');

            expect(hide_me.getText()).not.toMatch('Hide');
            browser.actions().mouseMove($('.fa-times-circle')).perform();
            expect(hide_me.getText()).toMatch('Hide');
        });
    });
});