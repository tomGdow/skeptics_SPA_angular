'use strict';

describe('my app', function () {

  describe('root', function () {

    browser.get('#view1');

    it('should automatically redirect to /view1 when location hash/fragment is empty',
      function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
      });

  });

  describe('Application Title', function () {

    beforeEach(function () {
      browser.get('#view1');
    });

    it('should have the correct title', function () {
      expect(browser.getTitle()).toBe('Skeptics with Angular');

    });
  });

  describe('view 1', function () {

    beforeEach(function () {
      browser.get('#view1');
    });

    it('should render view1 message when user navigates to /#view1',
      function () {
        expect(element(by.binding('viewOneMessage')).getText()).
          toMatch(/Natural Skeptics/);
      });

    it('should render correct header',
      function () {
        expect($$('h2').get(0).getText()).
          toMatch(/Welcome/);
      });
  });

  describe('view 2', function () {

    beforeEach(function () {
      browser.get('#view2');
    });

    it('should render view2 message when user navigates to /#view2',
      function () {
        expect(element(by.binding('viewTwoMessage')).getText()).
          toMatch(/Videos with Videogular/);
      });

    it('should render the correct headers',
      function () {
        expect($('#videoOneTitle').getText()).
          toMatch(/Ocean View/);
        expect($('#videoTwoTitle').getText()).
          toMatch(/Earth from Isis Expedition/);
      });
  });

  describe('views 3 and 13', function () {

    describe('view 3', function () {

      beforeEach(function () {
        browser.get('#view3');
      });

      it('should render view 3 message when user navigates to /view3',
        function () {
          expect(element(by.binding('viewThreeMessage')).getText()).
            toMatch(/Instagram/);
        });
    });

    describe('view 13', function () {

      beforeEach(function () {
        browser.get('#view13');
      });

      it('should render view13 message when user navigates to /view13',
        function () {
          expect(element(by.binding('viewMessageThirteen')).getText()).
            toMatch(/Dribbble/);
        });

    });
  });

  describe('view 4', function () {

    beforeEach(function () {
      browser.get('#view4');
    });

    it('should render view 4 message when user navigates to /view4',
      function () {
        expect(element(by.binding('viewFourMessage')).getText()).
          toMatch(/Sixties Dublin/);
      });

    it('should render the correct headers',
      function () {
        expect($$('h3').get(0).getText()).
          toMatch(/Cushman Collection/);
        expect($$('h3').get(1).getText()).
          toMatch(/The Man on the Bridge/);
      });
  });

  describe('views 5 and 15', function () {

    describe('view 5', function () {

      beforeEach(function () {
        browser.get('#view5');

      });

      it('should render view 5 message when user navigates to /view5',
        function () {
          expect(element(by.binding('viewFiveMessage')).getText()).
            toMatch(/Dynamic Searching/);
        });

    });

    describe('view 15', function () {

      beforeEach(function () {
        browser.get('#view5');

      });

      it('should render view 5 message when user navigates to /view15',
        function () {
          expect(element(by.binding('viewFiveMessage')).getText()).
            toMatch(/Dynamic Searching/);
        });

    });

  });

  describe('views 6 and 9', function () {

    describe('view 6', function () {

      beforeEach(function () {
        browser.get('#view6');
      });

      it('should render view6 message when user navigates to /view6',
        function () {
          expect(element(by.binding('viewSixMessage')).getText()).
            toMatch(/Search Commodities/);
        });

    });

    describe('view 9 ', function () {

      beforeEach(function () {
        browser.get('#view9');
      });

      it('should render view 6 message when user navigates to /view9',
        function () {
          expect(element(by.binding('viewSixMessage')).getText()).
            toMatch(/Search Commodities/);
        });
    });
  });

  describe('view 7', function () {

    beforeEach(function () {
      browser.get('#view7');
    });

    it('should render view7 when user navigates to /view7',
      function () {
        expect(element(by.binding('viewSevenMessage')).getText()).
          toMatch(/New Commodity/);
      });

    it('should render a form element',
      function () {
        expect($('form').isDisplayed()).toBe(true);
      });
  });

  describe('view 8', function () {

    beforeEach(function () {
      browser.get('#view8');
    });

    it('should render view8 message when user navigates to /view8',
      function () {
        expect(element(by.binding('viewEightMessage')).getText()).
          toMatch(/Blog Page/);
      });

    it('should render the correct headings ',
      function () {
        expect($$('h2').get(0).getText()).
          toMatch('Column B');
        expect($$('h2').get(1).getText()).
          toMatch('Column C');
      });
  });

  describe('view 11', function () {

    beforeEach(function () {
      browser.get('#view11');
    });

    it('should  render the correct table when user navigates to /view11',
      function () {
        expect($$('table').get(0).getAttribute('id')).
          toMatch(/yourCart/)
      });

    it('should render the correct table headings',
      function () {
        expect(element.all(by.css('[ng-view]  th')).get(1).getText()).
          toMatch(/Name/);
        expect($$('[ng-view]  th').get(2).getText()).
          toMatch(/Category/);
        expect($$('[ng-view]  th').get(3).getText()).
          toMatch(/Quantity/);
        expect($$('[ng-view]  th').get(4).getText()).
          toMatch(/Item Price/);
        expect($$('[ng-view]  th').get(5).getText()).
          toMatch(/Sub-total/);
      });
  });

  describe('view 12', function () {

    beforeEach(function () {
      browser.get('#view12');
    });

    it('should render an empty-cart message when user navigates to /view12',
      function () {
        expect($$('h3').get(1).getText()).
          toMatch(/Your Cart is Empty/);
      });

    it('should not render a non-empty-cart message',
      function () {
        expect(element(by.binding('viewMessageTwelve')).isDisplayed()).
          toBe(false);
      });

    it('should have the correct background image',
      function () {
        expect(element(by.id('emptycart')).getCssValue('background-image')).
          toMatch('empty-cart.jpg');
      });

    it('should render the correct background image',
      function () {
        expect(element(by.id('emptycart')).isDisplayed()).
          toBe(true);
      });
  });

  describe('view 14', function () {

    beforeEach(function () {
      browser.get('#view14');
    });

    it('should have the correct heading',
      function () {
        expect($$('h3').get(0).getText()).
          toMatch('Search')

      });

    it('should render view 14 message when user navigates to /#view14',
      function () {
        expect(element(by.binding('viewMessageFourteen')).getText()).
          toMatch(/Subscribe to Our Newsletter/);
      });

    it('should should render the correct input box',
      function () {
        expect($$('input').get(-1).getAttribute('id')).
          toBe('userSearchInput');
      });
  });
});