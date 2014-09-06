'use strict';

describe('my app', function () {

    browser.get('#view1');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });

    describe('view1', function () {

        beforeEach(function () {
            browser.get('#view1');
        });

        it('should render view1 when user navigates to /#view1'
            , function () {
                expect(element.all(by.css('[ng-view] h1')).first().getText()).
                    toMatch(/Natural Skeptics/);
            });

    });

    describe('view2', function () {

        beforeEach(function () {
            browser.get('#view2');
        });

        it('should render view2 when user navigates to /#view2'
            , function () {
                expect(element.all(by.css('[ng-view] h2')).first().getText()).
                    toMatch(/Videos with Videogular/);
            });

    });

    describe('view3', function () {

        beforeEach(function () {
            browser.get('#view3');
        });

        it('should render view3 when user navigates to /view3'
            , function () {
                expect(element.all(by.css('[ng-view] h2')).first().getText()).
                    toMatch(/Instagram/);
            });
    });

    describe('view8', function () {

        beforeEach(function () {
            browser.get('#view8');
        });

        it('should render view8 when user navigates to /view8'
            , function () {
                expect(element.all(by.css('[ng-view]  h1')).first().getText()).
                    toMatch(/Blog Page/);
            });

    });

    describe('view5', function () {

        beforeEach(function () {
            browser.get('#view5');
        });

        it('should render view5 when user navigates to /view5'
            , function () {
                expect(element.all(by.css('[ng-view]  h2')).first().getText()).
                    toMatch(/Dynamic Searching/);
            });

    });

    describe('view6', function () {

        beforeEach(function () {
            browser.get('#view6');
        });

        it('should render view6 when user navigates to /view6'
            , function () {
                expect(element.all(by.css('[ng-view]  h1')).first().getText()).
                    toMatch(/Listing commodities/);
            });
    });

    describe('view7', function () {

        beforeEach(function () {
            browser.get('#view7');
        });

        it('should render view7 when user navigates to /view7'
            , function () {
                expect(element.all(by.css('[ng-view]  h1')).first().getText()).
                    toMatch(/New Commodity/);
            });
    });

    describe('view8', function () {

        beforeEach(function () {
            browser.get('#view8');
        });

        it('should render view8 when user navigates to /view8'
            , function () {
                expect(element.all(by.css('[ng-view]  h1')).first().getText()).
                    toMatch(/Blog Page/);
            });

    });

    describe('view9', function () {

        beforeEach(function () {
            browser.get('#view9');
        });

        it('should render view9 when user navigates to /view9'
            , function () {
                expect(element.all(by.css('[ng-view]  h2')).first().getText()).
                    toMatch(/Dynamic Searching/);
            });

    });

    describe('view11', function () {

        beforeEach(function () {
            browser.get('#view11');
        });

        it('should render view11 when user navigates to /view11'
            , function () {
                expect(element.all(by.css('[ng-view]  th')).get(1).getText()).
                    toMatch(/Description/);
                expect(element.all(by.css('[ng-view]  th')).get(2).getText()).
                    toMatch(/Price/);
                expect(element.all(by.css('[ng-view]  th')).get(4).getText()).
                    toMatch(/Category/);
            });

    });

    describe('view12', function () {

        beforeEach(function () {
            browser.get('#view12');
        });

        it('should render view12 when user navigates to /view12'
            , function () {
                expect(element.all(by.css('[ng-view]  h2')).first().getText()).
                    toMatch(/Detailed Cart/);
            });

    });

    describe('view13', function () {

        beforeEach(function () {
            browser.get('#view13');
        });

        it('should render view13 when user navigates to /view13'
            , function () {
                expect(element.all(by.css('[ng-view]  h2')).first().getText()).
                    toMatch(/Dribbble/);
            });

    });

    describe('Application Title', function () {

        beforeEach(function () {
            browser.get('#view1');
        });

        it('should have the correct title', function() {

            expect(browser.getTitle()).toBe('Skeptics with Angular');

        });
    });


});