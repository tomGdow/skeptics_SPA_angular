
describe('my app', function () {

    browser.get('#view1');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });


    describe('Search Functionality', function () {

        beforeEach(function () {
            browser.get('#view5');
        });

        describe('Dynamic Search Box', function () {

            it('should return the correct search result', function () {

                var ptor = protractor.getInstance();

                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('charlton');
                expect(ptor.findElement(protractor.By.css('img')).getText()).toMatch('Charlton');

            });
        });
    });


});