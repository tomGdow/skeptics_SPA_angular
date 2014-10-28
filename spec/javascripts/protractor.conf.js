//Protractor Configuration

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        'protractor_specs/oneTest_preliminaries.js'


    ],
    baseUrl: 'http://localhost:3000',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    }
};


/*
[
 'protractor_specs/oneTest_preliminaries.js',
 'protractor_specs/twoTest_mainNavbar.js',
 'protractor_specs/threeTest_timeNavBar.js',
 'protractor_specs/fourTest_footer.js',
 'protractor_specs/fiveTest_httpAndJSON.js',
 'protractor_specs/sixTest_repeaters.js',
 'protractor_specs/sevenTest_search.js',
 'protractor_specs/eightTest_flexslider.js',
 'protractor_specs/nineTest_charts_d3js.js',
 'protractor_specs/tenTest_image_mouseOver.js',
 'protractor_specs/elevenTest_image_flipper.js',
 'protractor_specs/twelveTest_tabsViewAFields.js',
 'protractor_specs/thirteenTest_dublinSlider.js',
 'protractor_specs/fourteen_test_videos.js',
 'protractor_specs/fifteen_tests_rotatingSnakes.js'

]


*/


//'protractor_specs/**/*.js'
//'protractor_specs/e2eTests.js'
//'protractor_specs/st.js'


