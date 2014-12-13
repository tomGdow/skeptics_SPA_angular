'use strict';
describe('my app', function () {

    browser.get('#view1');

    describe('Image Mouse-Overs', function () {

        describe('Home Page', function () {

            beforeEach(function () {
                browser.get('#view1');
            });

            describe('Gordon Banks Image', function () {

                var gbanks = $('#gordon-banks');
                var gbanks_image = $('#gordon-banks img');

                it('should render the correct image', function () {

                    expect(gbanks_image.getAttribute('src')).toMatch('001_banks.jpg');
                    expect(gbanks_image.getAttribute('src')).toMatch('01_banks.jpg');

                });

                it('should render the correct caption', function () {


                    expect(gbanks.getText()).not.toMatch('Gordon Banks');
                    gbanks.click();
                    expect(gbanks.getText()).toMatch('Gordon Banks');

                });

                it('should make surrounding text invisible', function () {

                    var h2_caption =$('h2.loremParagraph');
                    var paragraph =$('h2+span+p');

                    expect(h2_caption.getAttribute('class')).not.toMatch('vishidden');
                    expect(paragraph.getAttribute('class')).not.toMatch('vishidden');
                    gbanks.click();
                    expect(h2_caption.getAttribute('class')).toMatch('vishidden');
                    expect(paragraph.getAttribute('class')).toMatch('vishidden');

                });

                it('should transform correctly', function () {
                    expect(gbanks.getCssValue('transform')).toBe('none');
                    gbanks.click();
                    expect(gbanks.getCssValue('transform')).toMatch("matrix3d");
                });
            });
        });

        describe('Blog page', function () {

            beforeEach(function () {
                browser.get('#view8');
            });

            describe('Pele Image', function () {
                var pele = element(By.css('#pele-image'));
                var pele_image = element(By.css('#pele-image img'));

                it('should render the correct image', function () {

                    expect(pele_image.getAttribute('src')).toMatch('103_pele.jpg');
                    expect(pele_image.getAttribute('src')).not.toMatch('02_pele.jpg');

                });

                it('should render the correct caption', function () {
                    expect(pele.getText()).not.toMatch('Pele');
                    pele.click();
                    expect(pele.getText()).toMatch('Pele');

                });

                it('should make surrounding text invisible', function () {
                    var paragraph =$('div >span+p');
                    expect(paragraph.getAttribute('class')).not.toMatch('vishidden');
                    pele.click();
                    expect(paragraph.getAttribute('class')).toMatch('vishidden');

                });

                it('should transform correctly', function () {
                    expect(pele.getCssValue('transform')).toBe('none');
                    pele.click();
                    expect(pele.getCssValue('transform')).toMatch("matrix3d");
                });
            });
        });

        describe('Dublin Gallery', function () {

            beforeEach(function () {
                browser.get('#view4');
            });

            describe('Schillachi Image', function () {

                var schillachi = element(by.css('#schillachi-italy'));
                var schillachi_image = element(By.css('#schillachi-italy img'));

                it('should render the correct image', function () {

                    expect(schillachi_image.getAttribute('src')).toMatch('109_schillaci.jpg');
                    expect(schillachi_image.getAttribute('src')).not.toMatch('1009_schillaci.jpg');

                });

                it('should render the correct caption', function () {


                    expect(schillachi.getText()).not.toMatch('Schillachi');
                    schillachi.click();
                    expect(schillachi.getText()).toMatch('Schillachi');

                });

                it('should make surrounding text invisible', function () {
                    var paragraph =$('h2+span+ipsum');
                    expect(paragraph.getAttribute('class')).not.toMatch('vishidden');
                    schillachi.click();
                    expect(paragraph.getAttribute('class')).toMatch('vishidden');

                });

                it('should transform correctly', function () {
                    expect(schillachi.getCssValue('transform')).toBe('none');
                    schillachi.click();
                    expect(schillachi.getCssValue('transform')).toMatch("matrix3d");
                });

            });
        });

    });
});




//'matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 20, 20, 10, 1)'

