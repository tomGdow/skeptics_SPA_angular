'use strict';
describe('my app', function () {

    browser.get('#view1');

    describe('Search Functionality', function () {

        beforeEach(function () {
            browser.get('#view5');
        });

        describe('Dynamic Search - Column View', function () {

            it('should return the correct sort-by result', function () {


                element(by.css('.list-icon')).click();

                element(by.css('#sortBy option:nth-child(2)')).click();
                expect(element(by.css('.myspan')).getText()).toMatch('Roger');
                expect(element(by.css('.myspan')).getText()).toMatch('Milla');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Neeskens');

                element(by.css('.list-icon')).click();
                element(by.css('#sortBy option:nth-child(2)')).click();
                expect(element(by.css('.myspan')).getText()).toMatch('Roger');
                expect(element(by.css('.myspan')).getText()).toMatch('Milla');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Neeskens');


                element(by.css('#sortBy option:nth-child(3)')).click();
                expect(element(by.css('.myspan')).getText()).toMatch('Neeskens');
                expect(element(by.css('.myspan')).getText()).toMatch('Johan');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Cohen');

                element(by.css('#sortBy option:nth-child(4)')).click();
                expect(element(by.css('.myspan')).getText()).toMatch('Baresi');
                expect(element(by.css('.myspan')).getText()).toMatch('Franco');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Moore');

                element(by.css('#sortBy option:nth-child(5)')).click();
                expect(element(by.css('.myspan')).getText()).toMatch('Iniesta');
                expect(element(by.css('.myspan')).getText()).toMatch('Andres');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Banks');

                element(by.css('#sortBy option:nth-child(7)')).click();
                expect(element(by.css('.myspan')).getText()).toMatch('Iniesta');
                expect(element(by.css('.myspan')).getText()).toMatch('Andres');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Cruyff')

            });

            it('should return the correct dynamic search result', function () {
                element(by.css('.list-icon')).click();

                element(by.id("ngsearch")).sendKeys('Charlton');
                expect(element(by.css('.myspan')).getText()).toMatch('Bobby');
                expect(element(by.css('.myspan')).getText()).toMatch('Charlton');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Moore');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Hagi');
                expect(element(by.css('.myspan')).getText()).toMatch('Gheorghe');
                expect(element(by.css('.myspan')).getText()).toMatch('Hagi');
                expect(element(by.css('.myspan')).getText()).not.toMatch('George');


                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Iniesta');
                expect(element(by.css('.myspan')).getText()).toMatch('Andres');
                expect(element(by.css('.myspan')).getText()).toMatch('Iniesta');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Hagi');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Neeskens');
                expect(element(by.css('.myspan')).getText()).toMatch('Johan');
                expect(element(by.css('.myspan')).getText()).toMatch('Neeskens');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Cruyff');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Pirlo');
                expect(element(by.css('.myspan')).getText()).toMatch('Andrea');
                expect(element(by.css('.myspan')).getText()).toMatch('Pirlo');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Zoff');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Romario');
                expect(element(by.css('.myspan')).getText()).toMatch('Romario');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Pele');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Cohen');
                expect(element(by.css('.myspan')).getText()).toMatch('George');
                expect(element(by.css('.myspan')).getText()).toMatch('Cohen');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Gheorghe');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Muller');
                expect(element(by.css('.myspan')).getText()).toMatch('Muller');
                expect(element(by.css('.myspan')).getText()).toMatch('Gerhard');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Puyol');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Platini');
                expect(element(by.css('.myspan')).getText()).toMatch('Platini');
                expect(element(by.css('.myspan')).getText()).toMatch('Michel');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Baresi');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Breitner');
                expect(element(by.css('.myspan')).getText()).toMatch('Paul');
                expect(element(by.css('.myspan')).getText()).toMatch('Breitner');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Muller');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Ardiles');
                expect(element(by.css('.myspan')).getText()).toMatch('Ardiles');
                expect(element(by.css('.myspan')).getText()).toMatch('Ossie');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Pirlo');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Baresi');
                expect(element(by.css('.myspan')).getText()).toMatch('Baresi');
                expect(element(by.css('.myspan')).getText()).toMatch('Franco');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Ardiles');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Klose');
                expect(element(by.css('.myspan')).getText()).toMatch('Klose');
                expect(element(by.css('.myspan')).getText()).toMatch('Miroslav');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Baresi');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Milla');
                expect(element(by.css('.myspan')).getText()).toMatch('Roger');
                expect(element(by.css('.myspan')).getText()).toMatch('Milla');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Miller');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Puyol');
                expect(element(by.css('.myspan')).getText()).toMatch('Carles');
                expect(element(by.css('.myspan')).getText()).toMatch('Puyol');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Poyol');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Buffon');
                expect(element(by.css('#Gianluigi_Buffon')).getText()).toMatch('Gianluigi');
                expect(element(by.css('#Gianluigi_Buffon')).getText()).toMatch('Buffon');
                expect(element(by.css('#Gianluigi_Buffon')).getText()).not.toMatch('Buffoni');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Hurst');
                expect(element(by.css('.myspan')).getText()).toMatch('Hurst');
                expect(element(by.css('.myspan')).getText()).toMatch('Geoff');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Herst');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Banks');
                expect(element(by.css('.myspan')).getText()).toMatch('Gordon');
                expect(element(by.css('.myspan')).getText()).toMatch('Banks');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Branks');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Pele');
                expect(element(by.css('#Pele_Pele')).getText()).toMatch('Pele');
                expect(element(by.css('#Pele_Pele')).getText()).not.toMatch('Peile');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Zoff');
                expect(element(by.css('#Dino_Zoff')).getText()).toMatch('Dino');
                expect(element(by.css('#Dino_Zoff')).getText()).toMatch('Zoff');
                expect(element(by.css('#Dino_Zoff')).getText()).not.toMatch('Zoft');

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Kahn');
                expect(element(by.css('.myspan')).getText()).toMatch('Oliver');
                expect(element(by.css('.myspan')).getText()).toMatch('Kahn');
                expect(element(by.css('.myspan')).getText()).not.toMatch('Kohn');


                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Defender');
                expect(element(by.id('Bobby_Moore')).isPresent()).toBe(true);
                expect(element(by.id('Carles_Puyol')).isPresent()).toBe(true);
                expect(element(by.id('Franco_Baresi')).isPresent()).toBe(true);
                expect(element(by.id('Franz_Beckenbauer')).isPresent()).toBe(true);
                expect(element(by.id('George_Cohen')).isPresent()).toBe(true);
                expect(element(by.id('Paolo_Maldini')).isPresent()).toBe(true);
                expect(element(by.id('Gordon_Banks')).isPresent()).toBe(false);
                expect(element(by.id('Dino_Zoff')).isPresent()).toBe(false);
                expect(element(by.id('Bobby_Charlton')).isPresent()).toBe(false);

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Midfielder');

                expect(element(by.id('Andrea_Pirlo')).isPresent()).toBe(true);
                expect(element(by.id('Andres_Iniesta')).isPresent()).toBe(true);
                expect(element(by.id('Bobby_Charlton')).isPresent()).toBe(true);
                expect(element(by.id('Gheorghe_Hagi')).isPresent()).toBe(true);
                expect(element(by.id('Johan_Neeskens')).isPresent()).toBe(true);
                expect(element(by.id('Michel_Platini')).isPresent()).toBe(true);
                expect(element(by.id('Carles_Puyol')).isPresent()).toBe(false);
                expect(element(by.id('Dino_Zoff')).isPresent()).toBe(false);
                expect(element(by.id('Bobby_Moore')).isPresent()).toBe(false);

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Goalkeeper');

                expect(element(by.id('Dino_Zoff')).isPresent()).toBe(true);
                expect(element(by.id('Gianluigi_Buffon')).isPresent()).toBe(true);
                expect(element(by.id('Gordon_Banks')).isPresent()).toBe(true);
                expect(element(by.id('Oliver_Kahn')).isPresent()).toBe(true);
                expect(element(by.id('Gheorghe_Hagi')).isPresent()).toBe(false);
                expect(element(by.id('Michel_Platini')).isPresent()).toBe(false);
                expect(element(by.id('Carles_Puyol')).isPresent()).toBe(false);
                expect(element(by.id('Bobby_Moore')).isPresent()).toBe(false);

                element(by.id("ngsearch")).clear();
                element(by.id("ngsearch")).sendKeys('Forward');

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

});

