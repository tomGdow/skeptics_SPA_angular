'use strict';
describe('my app', function () {

    //==helper hexToRgb ===
    //hexToRgb modified from here:http://stackoverflow.com/a/11508164/499167
    function hexToRgba(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        var str = 'rgba(';
        str+=[r, g, b, 1].join(', ');
        str+=')';
        return str;
    }
    browser.get('#view1');


    describe('Tabs View )', function () {

        //browser.get('#view4');    //here

        var skepticsBlue ='0078A0';
        var skepticsBlack ='000000';

        var tabs =   $('.tabs');

        var tab_one =$('#tab_one');
        var tab_two =$('#tab_two');
        var tab_three =$('#tab_three');
        var tab_four =$('#tab_four');
        var tab_five =$('#tab_five');

        var tabs_caption_one =   $('#tabs_caption_one');
        var tabs_caption_two =  $('#tabs_caption_two');
        var tabs_caption_three =  $('#tabs_caption_three');
        var tabs_caption_four =  $('#tabs_caption_four');
        var tabs_caption_five =   $('#tabs_caption_five');

        beforeEach(function () {
            browser.get('#view4');
            $('#viewfour').click();
        });


        describe('Arthur Fields tab)', function () {
            browser.get('#view4');
            var arthur_fields = $('#arthur-fields');
            var arthur_fields_image_src = $('#arthur-fields > img').getAttribute('src');

            it('should render the correct image', function () {

                expect(arthur_fields_image_src).toMatch('assets/manOnBridge2.jpg');
                expect(arthur_fields_image_src).not.toMatch('assets/manOnBridge.jpg');

            });

            it('should render the correct image caption', function () {

                var arthur_fields_caption = $('#arthur-fields > figcaption');
                expect(arthur_fields_caption.getText()).not.toMatch('Arthur Fields');
                arthur_fields.click();
                expect(arthur_fields_caption.getText()).toMatch('Arthur Fields');

            });

            it('should make surroundings invisible', function () {

                expect(tabs.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_one.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_two.getAttribute('class')).not.toMatch('vishidden');

                arthur_fields.click();

                expect(tabs_caption_one.getAttribute('class')).toMatch('vishidden');
                expect(tabs_caption_two.getAttribute('class')).toMatch('vishidden');
                expect(tabs.getAttribute('class')).toMatch('vishidden');

            });


            it('should transform correctly', function () {

                expect(arthur_fields.getCssValue('transform')).toMatch('matrix');
                expect(arthur_fields.getCssValue('transform')).not.toMatch('matrix3d');
                arthur_fields.click();
                expect(arthur_fields.getCssValue('transform')).toMatch("matrix3d");
            });


            it('should render the correct button background color', function () {

                tab_one.click();
                expect(tab_one.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlue));

                expect(tab_two.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlack));

            });


            it('should render the correct tab caption', function () {
                expect(tabs_caption_one.getText()).toMatch('Arthur Fields');
            });

        });

        describe('Young Arthur tab)', function () {

            beforeEach(function () {
                $('#tab_two').click();
            });

            var young_arthur = $('#arthur-fields-young');
            var young_arthur_image_src = $('#arthur-fields-young > img').getAttribute('src');

            it('should render the correct image', function () {

                expect(young_arthur_image_src).toMatch('assets/young_arthur_fields.jpg');
                expect(young_arthur_image_src).not.toMatch('assets/arthur_fields.jpg');

            });

            it('should render the correct image caption', function () {

                var young_arthur_caption = $('#arthur-fields-young > figcaption');
                expect(young_arthur_caption.getText()).not.toMatch('Arthur Fields');
                young_arthur.click();
                expect(young_arthur_caption.getText()).toMatch('Arthur Fields');

            });

            it('should make surroundings invisible', function () {

                expect(tabs.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_two.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_three.getAttribute('class')).not.toMatch('vishidden');

                young_arthur.click();

                expect(tabs_caption_two.getAttribute('class')).toMatch('vishidden');
                expect(tabs_caption_three.getAttribute('class')).toMatch('vishidden');
                expect(tabs.getAttribute('class')).toMatch('vishidden');

            });


            it('should transform correctly', function () {

                expect(young_arthur.getCssValue('transform')).toMatch('matrix');
                expect(young_arthur.getCssValue('transform')).not.toMatch('matrix3d');
                young_arthur.click();
                expect(young_arthur.getCssValue('transform')).toMatch("matrix3d");
            });

            it('should render the correct button background color', function () {

                tab_two.click();
                expect(tab_two.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlue));

                expect(tab_one.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlack));

            });


            it('should render the correct tab caption', function () {

                expect(tabs_caption_two.getText()).toMatch('Young Arthur Fields');

            });

        });

        describe('Miss Marple tab)', function () {

            beforeEach(function () {
                $('#tab_three').click();
            });

            var miss_marple = $('#arthur-fields-marple');
            var miss_marple_image_src = $('#arthur-fields-marple > img').getAttribute('src');

            it('should render the correct image', function () {

                expect(miss_marple_image_src).toMatch('assets/miss_marple2.jpg');
                expect(miss_marple_image_src).not.toMatch('assets/miss_marple.jpg');

            });

            it('should render the correct image caption', function () {

                var miss_marple_caption = $('#arthur-fields-marple > figcaption');
                expect(miss_marple_caption.getText()).not.toMatch('Maragaret Rutherford');
                miss_marple.click();
                expect(miss_marple_caption.getText()).toMatch('Margaret Rutherford');
                expect(miss_marple_caption.getText()).toMatch('Miss Marple');

            });

            it('should make surroundings invisible', function () {


                var tabs =   $('.tabs');
                var tabs_caption_three =  $('#tabs_caption_three');
                var tabs_caption_four =   $('#tabs_caption_four');

                expect(tabs.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_three.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_four.getAttribute('class')).not.toMatch('vishidden');

                miss_marple.click();

                expect(tabs_caption_three.getAttribute('class')).toMatch('vishidden');
                expect(tabs_caption_four.getAttribute('class')).toMatch('vishidden');
                expect(tabs.getAttribute('class')).toMatch('vishidden');

            });


            it('should transform correctly', function () {

                expect(miss_marple.getCssValue('transform')).toMatch('matrix');
                expect(miss_marple.getCssValue('transform')).not.toMatch('matrix3d');
                miss_marple.click();
                expect(miss_marple.getCssValue('transform')).toMatch("matrix3d");
            });

            it('should render the correct button background color', function () {

                tab_three.click();
                expect(tab_three.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlue));

                expect(tab_two.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlack));

            });


            it('should render the correct tab caption', function () {

                expect(tabs_caption_three.getText()).toMatch('Margaret Rutherford');
                expect(tabs_caption_three.getText()).toMatch('Miss Marple');

            });
        });

        describe('Arthur taking Photograph tab)', function () {

            beforeEach(function () {
                $('#tab_four').click();
            });

            var taking_photo = $('#arthur-fields-inaction');
            var taking_photo_image_src = $('#arthur-fields-inaction > img').getAttribute('src');

            it('should render the correct image', function () {

                expect(taking_photo_image_src).toMatch('assets/arthur-taking-photo90.jpg');
                expect(taking_photo_image_src).not.toMatch('arthur-taking-photo.jpg');

            });

            it('should render the correct image caption', function () {

                var taking_photo_caption = $('#arthur-fields-inaction > figcaption');
                expect(taking_photo_caption.getText()).not.toMatch('Arthur Fields');
                taking_photo.click();
                expect(taking_photo_caption.getText()).toMatch('Arthur Fields');
                expect(taking_photo_caption.getText()).toMatch('Connell Bridge');

            });

            it('should make surroundings invisible', function () {

                expect(tabs.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_four.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_five.getAttribute('class')).not.toMatch('vishidden');

                taking_photo.click();

                expect(tabs_caption_four.getAttribute('class')).toMatch('vishidden');
                expect(tabs_caption_five.getAttribute('class')).toMatch('vishidden');
                expect(tabs.getAttribute('class')).toMatch('vishidden');

            });


            it('should transform correctly', function () {

                expect(taking_photo.getCssValue('transform')).toMatch('matrix');
                expect(taking_photo.getCssValue('transform')).not.toMatch('matrix3d');
                taking_photo.click();
                expect(taking_photo.getCssValue('transform')).toMatch("matrix3d");
            });

            it('should render the correct button background color', function () {

                tab_four.click();
                expect(tab_four.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlue));

                expect(tab_three.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlack));

            });

            it('should render the correct tab caption', function () {

                expect(tabs_caption_four.getText()).toMatch('Arthur Fields');
                expect(tabs_caption_four.getText()).toMatch('taking photograph');

            });
        });

        describe('Brendan Behan tab)', function () {

            beforeEach(function () {
                $('#tab_five').click();
            });

            var brendan_behan = $('#arthur-fields-behan');
            var brendan_behan_image_src = $('#arthur-fields-behan > img').getAttribute('src');

            it('should render the correct image', function () {

                expect(brendan_behan_image_src).toMatch('assets/brendanBehan2.jpg');
                expect(brendan_behan_image_src).not.toMatch('brendanBehan.jpg');

            });

            it('should render the correct image caption', function () {

                var brendan_behan_caption = $('#arthur-fields-behan > figcaption');
                expect(brendan_behan_caption.getText()).not.toMatch('Brendan Behan');
                brendan_behan.click();
                expect(brendan_behan_caption.getText()).toMatch('Brendan Behan');
                expect(brendan_behan_caption.getText()).toMatch('Connell Bridge');

            });

            it('should make surroundings invisible', function () {

                expect(tabs.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_five.getAttribute('class')).not.toMatch('vishidden');
                expect(tabs_caption_one.getAttribute('class')).not.toMatch('vishidden');

                brendan_behan.click();

                expect(tabs_caption_five.getAttribute('class')).toMatch('vishidden');
                expect(tabs_caption_one.getAttribute('class')).toMatch('vishidden');
                expect(tabs.getAttribute('class')).toMatch('vishidden');

            });


            it('should transform correctly', function () {

                expect(brendan_behan.getCssValue('transform')).toMatch('matrix');
                expect(brendan_behan.getCssValue('transform')).not.toMatch('matrix3d');
                brendan_behan.click();
                expect(brendan_behan.getCssValue('transform')).toMatch("matrix3d");
            });

            it('should render the correct button background color', function () {

                tab_five.click();
                expect(tab_five.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlue));

                expect(tab_one.getCssValue('background-color'))
                    .toContain(hexToRgba(skepticsBlack));

            });

            it('should render the correct tab caption', function () {

                expect(tabs_caption_five.getText()).toMatch('Brendan Behan');
                expect(tabs_caption_five.getText()).toMatch('Connell Bridge');

            });
        });
    });
});
