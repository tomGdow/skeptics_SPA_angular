'use strict';

describe('my app', function () {

  browser.get('#view1');

  describe('$http and $jsonp requests ', function () {

    describe('$http request for the file -public/commodities.json-', function () {

      beforeEach(function () {
        browser.get('#view5');
      });

      it('should make a valid $http request', function () {
        expect(element(by.css('.httpStatus')).getAttribute('class')).toMatch('200');
        expect(element(by.css('.httpStatus')).getAttribute('class')).not.toMatch('400');
        expect(element(by.css('.httpStatus')).getAttribute('class')).not.toMatch('404');
      })
    });

    describe('$http request for Google Map API', function () {

      beforeEach(function () {
        browser.get('#view4');
      });

      it('should make a valid $http request', function () {
        expect(element(by.css('.httpStatus2')).getAttribute('class')).toMatch('200');
        expect(element(by.css('.httpStatus2')).getAttribute('class')).not.toMatch('400');
        expect(element(by.css('.httpStatus2')).getAttribute('class')).not.toMatch('404');
      })
    });

    describe('$jsonp request for Dribble API', function () {

      beforeEach(function () {
        browser.get('#view13');
      });

      it('should make a valid $jsonp request', function () {
        expect(element(by.css('.httpStatus3')).getAttribute('class')).toMatch('200');
        expect(element(by.css('.httpStatus3')).getAttribute('class')).not.toMatch('400');
        expect(element(by.css('.httpStatus3')).getAttribute('class')).not.toMatch('404');
      })
    });

    describe('$jsonp request for Instagram API', function () {

      beforeEach(function () {
        browser.get('#view3');
      });

      it('should return a non-empty array', function () {
        expect(element(by.css('.httpStatus4')).getAttribute('class')).toMatch('true');
        expect(element(by.css('.httpStatus4')).getAttribute('class')).not.toMatch('false');
      })
    });

    describe('$http request for your_cart (carts/show)', function () {

      beforeEach(function () {
        browser.get('#view12');
      });

      it('should make a valid $http request', function () {
        expect(element(by.css('.httpStatus5')).getAttribute('class')).toMatch('200');
        expect(element(by.css('.httpStatus5')).getAttribute('class')).not.toMatch('400');
        expect(element(by.css('.httpStatus5')).getAttribute('class')).not.toMatch('404');
      })
    });


    describe('$jsonp request for filltext (users)', function () {

      beforeEach(function () {
        browser.get('#view14');
      });

      it('should return a non-empty object', function () {
        expect($('#fillTextStatus').getInnerHtml()).toContain('50');

      })
    });

  });

});