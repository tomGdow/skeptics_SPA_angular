'use strict';
describe('my app', function () {

    browser.get('#view1');

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

});





