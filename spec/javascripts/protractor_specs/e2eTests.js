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

    describe('Skeptics with Angular', function () {

        beforeEach(function () {
            browser.get('#view1');
        });

        it('should have the correct title', function() {

            expect(browser.getTitle()).toBe('Skeptics with Angular');

        });
    });

    describe('nav bar functionality', function () {
        beforeEach(function () {
            browser.get('#view1');
        });

        describe('Click on menu links', function () {

            it('should visit the correct page and have the correct title', function () {

                var ptor = protractor.getInstance();

                //This will not get the option required

                ptor.findElement(protractor.By.css('.home')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view1');
                expect(browser.getLocationAbsUrl()).not.toMatch('view2');
                expect(element.all(by.css('.home')).get(1).getText()).
                    toMatch(/HOME/);
                expect(element.all(by.css('.home')).get(1).getText()).
                    not.toMatch(/Home/);

                ptor.findElement(protractor.By.css('.vieweight')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view8');
                expect(browser.getLocationAbsUrl()).not.toMatch('view1');
                expect(element.all(by.css('.vieweight')).get(1).getText()).
                    toMatch(/BLOG/);
                expect(element.all(by.css('.vieweight')).get(1).getText()).
                    not.toMatch(/Blog/);

                ptor.findElement(protractor.By.css('.viewtwo')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view2');
                expect(browser.getLocationAbsUrl()).not.toMatch('view8');
                expect(element.all(by.css('.viewtwo')).get(1).getText()).
                    toMatch(/VIDEOS/);
                expect(element.all(by.css('.viewtwo')).get(1).getText()).
                    not.toMatch(/Videos/);

                ptor.findElement(protractor.By.css('.viewthree')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view3');
                expect(browser.getLocationAbsUrl()).not.toMatch('view2');
                expect(element.all(by.css('.viewthree')).get(1).getText()).
                    toMatch(/API FEEDS/);
                expect(element.all(by.css('.viewthree')).get(1).getText()).
                    not.toMatch(/Api FEEDS/);

                ptor.findElement(protractor.By.css('.viewfour')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view4');
                expect(browser.getLocationAbsUrl()).not.toMatch('view3');
                expect(element.all(by.css('.viewfour')).get(1).getText()).
                    toMatch(/DUBLIN GALLERY/);
                expect(element.all(by.css('.viewfour')).get(1).getText()).
                    not.toMatch(/Dublin Gallery/);

                ptor.findElement(protractor.By.css('.viewfive')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view5');
                expect(browser.getLocationAbsUrl()).not.toMatch('view4');
                expect(element.all(by.css('.viewfive')).get(1).getText()).
                    toMatch(/PRODUCTS/);
                expect(element.all(by.css('.viewfive')).get(1).getText()).
                    not.toMatch(/Products/);

            });
        });
    });

    describe('Search Functionality', function () {

        beforeEach(function () {
            browser.get('#view5');
        });

        describe('Dynamic Search Box', function () {



            it('should return the correct sort-by result', function () {

                var ptor = protractor.getInstance();

                ptor.findElement(protractor.By.css('.list-icon')).click();

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(2)')).click();
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Roger');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Milla');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Neeskens');

                ptor.findElement(protractor.By.css('.list-icon')).click();
                ptor.findElement(protractor.By.css('#sortBy option:nth-child(2)')).click();
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Roger');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Milla');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Neeskens');



                ptor.findElement(protractor.By.css('#sortBy option:nth-child(3)')).click();
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Neeskens');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Johan');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Cohen');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(4)')).click();
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Baresi');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Franco');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Moore');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(5)')).click();
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Iniesta');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Andres');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Banks');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(7)')).click();
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Iniesta');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Andres');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Cruyff')

            });

            it('should return the correct dynamic search result', function () {

                var ptor = protractor.getInstance();
                ptor.findElement(protractor.By.css('.list-icon')).click();

                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Charlton');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Bobby');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Charlton');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Moore');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Hagi');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Gheorghe');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Hagi');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('George');


                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Iniesta');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Andres');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Iniesta');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Hagi');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Neeskens');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Johan');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Neeskens');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Cruyff');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Pirlo');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Andrea');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Pirlo');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Zoff');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Romario');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Romario');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Pele');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Cohen');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('George');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Cohen');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Gheorghe');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Muller');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Muller');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Gerhard');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Puyol');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Platini');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Platini');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Michel');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Baresi');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Breitner');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Paul');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Breitner');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Muller');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Ardiles');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Ardiles');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Ossie');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Pirlo');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Baresi');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Baresi');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Franco');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Ardiles');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Klose');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Klose');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Miroslav');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Baresi');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Milla');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Roger');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Milla');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Miller');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Puyol');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Carles');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Puyol');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Poyol');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Buffon');
                expect(ptor.findElement(protractor.By.css('#Gianluigi_Buffon')).getText()).toMatch('Gianluigi');
                expect(ptor.findElement(protractor.By.css('#Gianluigi_Buffon')).getText()).toMatch('Buffon');
                expect(ptor.findElement(protractor.By.css('#Gianluigi_Buffon')).getText()).not.toMatch('Buffoni');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Hurst');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Hurst');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Geoff');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Herst');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Banks');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Gordon');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Banks');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Branks');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Pele');
                expect(ptor.findElement(protractor.By.css('#Pele_Pele')).getText()).toMatch('Pele');
                expect(ptor.findElement(protractor.By.css('#Pele_Pele')).getText()).not.toMatch('Peile');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Zoff');
                expect(ptor.findElement(protractor.By.css('#Dino_Zoff')).getText()).toMatch('Dino');
                expect(ptor.findElement(protractor.By.css('#Dino_Zoff')).getText()).toMatch('Zoff');
                expect(ptor.findElement(protractor.By.css('#Dino_Zoff')).getText()).not.toMatch('Zoft');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Kahn');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Oliver');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).toMatch('Kahn');
                expect(ptor.findElement(protractor.By.css('.myspan')).getText()).not.toMatch('Kohn');


                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Defender');
                expect(element(by.id('Bobby_Moore')).isPresent()).toBe(true);
                expect(element(by.id('Carles_Puyol')).isPresent()).toBe(true);
                expect(element(by.id('Franco_Baresi')).isPresent()).toBe(true);
                expect(element(by.id('Franz_Beckenbauer')).isPresent()).toBe(true);
                expect(element(by.id('George_Cohen')).isPresent()).toBe(true);
                expect(element(by.id('Paolo_Maldini')).isPresent()).toBe(true);
                expect(element(by.id('Gordon_Banks')).isPresent()).toBe(false);
                expect(element(by.id('Dino_Zoff')).isPresent()).toBe(false);
                expect(element(by.id('Bobby_Charlton')).isPresent()).toBe(false);

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Midfielder');

                expect(element(by.id('Andrea_Pirlo')).isPresent()).toBe(true);
                expect(element(by.id('Andres_Iniesta')).isPresent()).toBe(true);
                expect(element(by.id('Bobby_Charlton')).isPresent()).toBe(true);
                expect(element(by.id('Gheorghe_Hagi')).isPresent()).toBe(true);
                expect(element(by.id('Johan_Neeskens')).isPresent()).toBe(true);
                expect(element(by.id('Michel_Platini')).isPresent()).toBe(true);
                expect(element(by.id('Carles_Puyol')).isPresent()).toBe(false);
                expect(element(by.id('Dino_Zoff')).isPresent()).toBe(false);
                expect(element(by.id('Bobby_Moore')).isPresent()).toBe(false);

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Goalkeeper');

                expect(element(by.id('Dino_Zoff')).isPresent()).toBe(true);
                expect(element(by.id('Gianluigi_Buffon')).isPresent()).toBe(true);
                expect(element(by.id('Gordon_Banks')).isPresent()).toBe(true);
                expect(element(by.id('Oliver_Kahn')).isPresent()).toBe(true);
                expect(element(by.id('Gheorghe_Hagi')).isPresent()).toBe(false);
                expect(element(by.id('Michel_Platini')).isPresent()).toBe(false);
                expect(element(by.id('Carles_Puyol')).isPresent()).toBe(false);
                expect(element(by.id('Bobby_Moore')).isPresent()).toBe(false);

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Forward');

                expect(element(by.id('Geoff_Hurst')).isPresent()).toBe(true);
                expect(element(by.id('Gerhard_Muller')).isPresent()).toBe(true);
                expect(element(by.id('Roger_Milla')).isPresent()).toBe(true);
                expect(element(by.id('Miroslav_Klose')).isPresent()).toBe(true);
                expect(element(by.id('Romario_Romario')).isPresent()).toBe(true);
                expect(element(by.id('Salvatore_Schillaci')).isPresent()).toBe(true);
                expect(element(by.id('Carles_Puyol')).isPresent()).toBe(false);
                expect(element(by.id('Bobby_Moore')).isPresent()).toBe(false);
                expect(element(by.id('Gordon_Banks')).isPresent()).toBe(false);

            });

        });
    });

    describe('Repeater Functions', function () {

        describe('Dynamic Searching Repeater', function () {

            beforeEach(function () {
                browser.get('#view5');
            });

            it('should have the correct number of items', function() {
                var elems = element.all(by.repeater('product in productList'));
                expect(elems.count()).toBe(50); //2x25 (as repeater appears twice on page)

            });
        });

        describe('Instagram Repeater', function () {

            beforeEach(function () {
                browser.get('#view3');
            });

            it('should have the correct number of items', function() {
                var elems = element.all(by.repeater('p in pics'));
                expect(elems.count()).toBe(40);//2x20

            });
        });

        describe('Dribble Repeater', function () {

            beforeEach(function () {
                browser.get('#view13');
            });

            it('should have the correct number of items', function() {
                var elems = element.all(by.repeater('shot in list.shots'));
                expect(elems.count()).toBe(30);// 2x15

            });
        });
    });

    describe('$http and $jsonp requests ', function () {

        describe('$http request for the file -public/commodities.json-', function () {

            beforeEach(function () {
                browser.get('#view5');
            });

            it('should make a valid $http request', function() {
                expect(element(by.css('.httpStatus')).getAttribute('class')).toMatch('200');
                expect(element(by.css('.httpStatus')).getAttribute('class')).not.toMatch('400');
                expect(element(by.css('.httpStatus')).getAttribute('class')).not.toMatch('404');
            })
        });

        describe('$http request for Google Map API', function () {

            beforeEach(function () {
                browser.get('#view4');
            });

            it('should make a valid $http request', function() {
                expect(element(by.css('.httpStatus2')).getAttribute('class')).toMatch('200');
                expect(element(by.css('.httpStatus2')).getAttribute('class')).not.toMatch('400');
                expect(element(by.css('.httpStatus2')).getAttribute('class')).not.toMatch('404');
            })
        });

        describe('$jsonp request for Dribble API', function () {

            beforeEach(function () {
                browser.get('#view13');
            });

            it('should make a valid $jsonp request', function() {
                expect(element(by.css('.httpStatus3')).getAttribute('class')).toMatch('200');
                expect(element(by.css('.httpStatus3')).getAttribute('class')).not.toMatch('400');
                expect(element(by.css('.httpStatus3')).getAttribute('class')).not.toMatch('404');
            })
        });

        describe('$jsonp request for Instagram API', function () {

            beforeEach(function () {
                browser.get('#view3');
            });

            it('should return a non-empty array', function() {
                expect(element(by.css('.httpStatus4')).getAttribute('class')).toMatch('true');
                expect(element(by.css('.httpStatus4')).getAttribute('class')).not.toMatch('false');
            })
        });

        describe('$http request for your_cart (carts/show)', function () {

            beforeEach(function () {
                browser.get('#view12');
            });

            it('should make a valid $http request', function() {
                expect(element(by.css('.httpStatus5')).getAttribute('class')).toMatch('200');
                expect(element(by.css('.httpStatus5')).getAttribute('class')).not.toMatch('400');
                expect(element(by.css('.httpStatus5')).getAttribute('class')).not.toMatch('404');
            })
        });

    });

});