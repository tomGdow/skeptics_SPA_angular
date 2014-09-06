describe(' Footer', function () {

    beforeEach(function () {
        browser.get('#view1');
    });

    it('should render the correct image title when clicked', function () {
        expect(element(by.css('footer.small-12.columns')).getAttribute('class')).toMatch('footerDisplay');
        expect(element(by.css('footer.small-12.columns')).getAttribute('class')).not.toMatch('footerHide');

        element(by.css('.fa.fa-times-circle')).click();

        expect(element(by.css('footer.small-12.columns')).getAttribute('class')).not.toMatch('footerDisplay');
        expect(element(by.css('footer.small-12.columns')).getAttribute('class')).toMatch('footerHide');

        element(by.css('.row.footer')).click();

        expect(element(by.css('footer.small-12.columns')).getAttribute('class')).toMatch('footerDisplay-add');
        expect(element(by.css('footer.small-12.columns')).getAttribute('class')).toMatch('footerHide-add');

    });
});




element(by.css('.viewtwo')).click();
expect(browser.getLocationAbsUrl()).toMatch('view2');
expect(browser.getLocationAbsUrl()).not.toMatch('view8');
expect(element.all(by.css('.viewtwo')).get(1).getText()).
    toMatch(/VIDEOS/);
expect(element.all(by.css('.viewtwo')).get(1).getText()).
    not.toMatch(/Videos/);

element(by.css('.viewthree')).click();
expect(browser.getLocationAbsUrl()).toMatch('view3');
expect(browser.getLocationAbsUrl()).not.toMatch('view2');
expect(element.all(by.css('.viewthree')).get(1).getText()).
    toMatch(/API FEEDS/);
expect(element.all(by.css('.viewthree')).get(1).getText()).
    not.toMatch(/Api FEEDS/);

element(by.css('.viewfour')).click();
expect(browser.getLocationAbsUrl()).toMatch('view4');
expect(browser.getLocationAbsUrl()).not.toMatch('view3');
expect(element.all(by.css('.viewfour')).get(1).getText()).
    toMatch(/DUBLIN GALLERY/);
expect(element.all(by.css('.viewfour')).get(1).getText()).
    not.toMatch(/Dublin Gallery/);

element(by.css('.viewfive')).click();
expect(browser.getLocationAbsUrl()).toMatch('view5');
expect(browser.getLocationAbsUrl()).not.toMatch('view4');
expect(element.all(by.css('.viewfive')).get(1).getText()).
    toMatch(/PRODUCTS/);
expect(element.all(by.css('.viewfive')).get(1).getText()).
    not.toMatch(/Products/);


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


it('should have the correct class', function () {

    element(by.css('.view8')).click();

    var thumbsUp = element(by.css('nav.vieweight'));

    expect(thumbsUp.isDisplayed()).toBeFalsy();


});















describe('View Eight', function () {

    element(by.css('.vieweight')).click();

    var browser_url = browser.getLocationAbsUrl();
    var view_eight = element.all(by.css('.vieweight'));
    var colorSpan = element(by.css('nav.vieweight .vieweight'));
    var my_color=hexToRgb('0078A0');

    expect(browser_url).toMatch('view8');
    expect(browser_url).not.toMatch('view1');
    expect(view_eight.get(1).getText()).
        toMatch(/BLOG/);
    expect(view_eight.get(1).getText()).
        not.toMatch(/Blog/);


    expect(colorSpan.getCssValue('background-image')).toContain(my_color);

});



describe('Time Function)', function () {

    it('should display and hide the time', function () {

        browser.get('#view1');
        var ptor = protractor.getInstance();
        var show_time=element(by.css('#showTheTime'));

        expect(show_time.getAttribute('class')).toMatch('hidden');
        expect(show_time.isDisplayed()).toBeFalsy();


        ptor.actions().
            mouseMove(ptor.findElement(protractor.By.css('#time_with_icon'))).
            perform();

        expect(show_time.getAttribute('class')).not.toMatch('hidden');
        expect(show_time.getAttribute('class')).toMatch('dynamic-clock_one');
        expect(show_time.isDisplayed()).toBeTruthy();

        ptor.actions().
            mouseMove(ptor.findElement(protractor.By.css('#showTheTime'))).
            perform();

        expect(show_time.getAttribute('class')).toMatch('dynamic-clock-hidden');
        expect(show_time.getAttribute('class')).not.toMatch('one');
        expect(show_time.isDisplayed()).toBeFalsy();
    });

});


describe('Date Function)', function () {

    it('should display and hide the date', function () {

        browser.get('#view1');
        var ptor = protractor.getInstance();
        var show_date=element(by.css('#showTheDate'));

        expect(show_date.getAttribute('class')).toMatch('hidden');
        expect(show_date.isDisplayed()).toBeFalsy();

        ptor.actions().
            mouseMove(ptor.findElement(protractor.By.css('#date_with_icon'))).
            perform();

        expect(show_date.getAttribute('class')).not.toMatch('hidden');
        expect(show_date.getAttribute('class')).toMatch('dynamic-date_one');
        expect(show_date.isDisplayed()).toBeTruthy();

        ptor.actions().
            mouseMove(ptor.findElement(protractor.By.css('#time_with_icon'))).
            perform();

        expect(show_date.getAttribute('class')).toMatch('dynamic-date-hidden');
        expect(show_date.getAttribute('class')).not.toMatch('one');
        expect(show_date.isDisplayed()).toBeFalsy();

    });

});

describe('GMT Time)', function () {

    it('should display and hide GMT time', function () {

        var ptor = protractor.getInstance();

        browser.get('#view1');
        var ptor = protractor.getInstance();
        var gmt=element(by.css('#showTheGMT'));

        expect(gmt.getAttribute('class')).toMatch('ng-hide');
        expect(gmt.isDisplayed()).toBeFalsy();

        ptor.actions().
            mouseMove(ptor.findElement(protractor.By.css('#GMT_with_icon'))).
            perform();

        expect(gmt.getAttribute('class')).not.toMatch('ng-hide');
        expect(gmt.isDisplayed()).toBeTruthy();
    });

});
