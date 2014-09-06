'use strict';
describe('my app', function () {


    browser.get('#view1');

    describe('Image mouseovers', function () {

        var hiddenPara = element(by.css('.loremParagraph'));

        describe('Home Page image-mouseovers', function () {

            beforeEach(function () {
                browser.get('#view1');
            });


            var gbanks = element(By.css('#gordon-banks'));
            var gbanks_image = element(By.css('#gordon-banks img'));

            it('should render the correct image', function () {

                expect(gbanks_image.getAttribute('src')).toMatch('001_banks.jpg');
                expect(gbanks_image.getAttribute('src')).toMatch('01_banks.jpg');

            });

            it('should render the correct image title and make-hidden class when clicked', function () {

                expect(gbanks.getText()).not.toMatch('Gordon Banks');
                expect(hiddenPara.getAttribute('class')).not.toMatch('vishidden');
                gbanks.click();
                expect(gbanks.getText()).toMatch('Gordon Banks');
                expect(hiddenPara.getAttribute('class')).toMatch('vishidden');

            });

        });

        describe('Blog page image-mouseovers', function () {

            beforeEach(function () {
                browser.get('#view8');
            });


            var pele = element(By.css('#pele-image'));
            var pele_image = element(By.css('#pele-image img'));

            it('should render the correct image', function () {

                expect(pele_image.getAttribute('src')).toMatch('103_pele.jpg');
                expect(pele_image.getAttribute('src')).not.toMatch('02_pele.jpg');

            });

            it('should render the correct image title and make-hidden class when clicked', function () {

                expect(pele.getText()).not.toMatch('Pele');
                expect(hiddenPara.getAttribute('class')).not.toMatch('vishidden');
                pele.click();
                expect(pele.getText()).toMatch('Pele');
                expect(hiddenPara.getAttribute('class')).toMatch('vishidden');

            });

        });

        describe('Dublin Gallery image-mouseovers', function () {

            beforeEach(function () {
                browser.get('#view4');
            });

            var hiddenPara = element(by.css('.loremParagraph'));
            var schillachi = element(by.css('#schillachi-italy'));
            var schillachi_image = element(By.css('#schillachi-italy img'));

            it('should render the correct image', function () {

                expect(schillachi_image.getAttribute('src')).toMatch('109_schillaci.jpg');
                expect(schillachi_image.getAttribute('src')).not.toMatch('1009_schillaci.jpg');

            });

        });
    });

});
