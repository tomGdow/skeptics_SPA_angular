'use strict';
describe('my app', function () {

    browser.get('#view1');

    describe(' Image Flipper', function () {

        beforeEach(function () {
            browser.get('#view8');
        });

        var jamesWatson = element(by.css('.side-a'));
        var marieCurie = element(by.css('.side-b'));
        var watsonLegend =element(by.css('.legendWatson'));
        var curieLegend=element(by.css('.legendCurie'));

        it('should render the correct caption when clicked', function () {
            expect(element(by.binding('obj.nameone')).getAttribute('class')).toMatch('legendWatson');
            expect(watsonLegend.getAttribute('class')).not.toMatch('vishidden-alt');
            expect(curieLegend.getAttribute('class')).toMatch('vishidden-alt');

            jamesWatson.click();

            expect(element(by.binding('obj.nametwo')).getAttribute('class')).toMatch('legendCurie');
            expect(curieLegend.getAttribute('class')).not.toMatch('vishidden-alt');
            expect(watsonLegend.getAttribute('class')).toMatch('vishidden-alt');

            expect(element(by.css('.wrap')).getAttribute('class')).toMatch('wrapFlip');

            marieCurie.click();

            expect(element(by.binding('obj.nameone')).getAttribute('class')).toMatch('legendWatson');
            expect(watsonLegend.getAttribute('class')).not.toMatch('vishidden-alt');
            expect(curieLegend.getAttribute('class')).toMatch('vishidden-alt');

        });

        it('should render the correct class when clicked', function () {
            expect(element(by.css('.wrap')).getAttribute('class')).not.toMatch('wrapFlip');

            jamesWatson.click();

            expect(element(by.css('.wrap')).getAttribute('class')).toMatch('wrapFlip');

            marieCurie.click();

            expect(element(by.css('.wrap')).getAttribute('class')).not.toMatch('wrapFlip');

        });

        it('should show the correct image', function () {

            expect(jamesWatson.getCssValue('background-image')).toMatch(/watson_golden_ratio/);
            expect(marieCurie.getCssValue('background-image')).toMatch(/marie_curie.jpg/);

        });


    });
});
