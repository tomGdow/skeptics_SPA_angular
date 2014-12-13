'use strict';
describe('my app', function () {

    browser.get('#view2');

    var rotSnakeData = {
        "author" : "Michael Bach",
        "imageSource": "http://media.uniklinik-freiburg.de/aug/homede/mit/bach/mdia/rotsnake2.gif",
        "michaelBachSite": "http://michaelbach.de/",
        "moreInfoOnIllusion" : "http://www.michaelbach.de/ot/mot_rotsnake/"
    };


    describe('Rotating Snake Illusion)', function () {

        beforeEach(function () {
            browser.get('#view2');
        });


        it('should have the correct title', function () {

            expect($('#rotatingSnakesTitle').getInnerHtml()).toMatch('Rotating Snake Illusion');

        });

        it('should have the correct author', function () {

            expect($$('h4').get(-1).getInnerHtml()).toMatch(rotSnakeData.author);

        });

        it('should display the correct image', function () {

            expect($('.rotating_snake>img').getAttribute('src')).toMatch(rotSnakeData.imageSource);

        });

        it('should display the correct links', function () {


            expect($$('h4 a').get(-1).getAttribute('href')).toMatch(rotSnakeData.michaelBachSite);
            expect(element(by.css('#rotatingSnakesTitle+h4+p>a')).getAttribute('href'))
                .toMatch(rotSnakeData.moreInfoOnIllusion);

        });
    });

});
