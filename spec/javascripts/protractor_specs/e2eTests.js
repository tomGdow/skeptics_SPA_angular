'use strict';

describe('my app', function () {

    browser.get('#view1');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });

    describe('view2', function () {

        beforeEach(function () {
            browser.get('#/view2');
        });

        it('should render view2 when user navigates to /view2'
            , function () {
                expect(element.all(by.css('[ng-view] h4')).first().getText()).
                    toMatch(/Find a Gym Coach/);
            });

    });

});