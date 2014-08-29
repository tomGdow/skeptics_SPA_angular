
describe('my app', function () {

    browser.get('#view1');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });



});

