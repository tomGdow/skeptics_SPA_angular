'use strict';
describe('my app', function () {


    browser.get('#view1');

    describe('Flexslider Functionality', function () {
        beforeEach(function () {
            browser.get('#view1');
        });

        it('should render the correct title for each image', function () {

            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide')).getText()).toMatch('James Watson');
            element(By.css('.flex-next')).click();
            //expect(element(By.css('.flex-active-slide')).getText()).toMatch('Karl Popper');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide')).getText()).toMatch('Ernst Rutherford');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide')).getText()).toMatch('Lise Meitner');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide')).getText()).toMatch('Dorothy Hodgkin');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide')).getText()).toMatch('Marie Curie');
        });

        it('should render the correct image', function () {

            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide figure img')).getAttribute('src')).toMatch('watson_golden_ratio.jpg');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide figure img')).getAttribute('src')).toMatch('popper_golden_ratio.jpg');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide figure img')).getAttribute('src')).toMatch('rutherford_golden_ratio.jpg');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide figure img')).getAttribute('src')).toMatch('lise_meitner_golden_ratio.jpg');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide figure img')).getAttribute('src')).toMatch('dorothy_hodgkin_golden_ratio.jpg');
            element(By.css('.flex-next')).click();
            expect(element(By.css('.flex-active-slide figure img')).getAttribute('src')).toMatch('marie_curie.jpg');

        });
    });

});
