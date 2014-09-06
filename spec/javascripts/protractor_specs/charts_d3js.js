'use strict';
describe('my app', function () {


    browser.get('#view1');

    describe('Charts functionality (d3js charts)', function () {

        beforeEach(function () {
            browser.get('#view1');
        });

        it('should dynamically render the correct date', function () {

            element(By.css('#toggleDataTwo')).click();
            expect(element(By.binding('renderYear')).getText()).toMatch('2013');
            expect(element(By.binding('renderYear')).getText()).not.toMatch('2012');

            element(By.css('#toggleDataThree')).click();
            expect(element(By.binding('renderYear')).getText()).toMatch('2014');
            expect(element(By.binding('renderYear')).getText()).not.toMatch('2012');

            element(By.css('#toggleDataOne')).click();
            expect(element(By.binding('renderYear')).getText()).toMatch('2012');
            expect(element(By.binding('renderYear')).getText()).not.toMatch('2013');

        });
    });
});
