//Protractor Configuration

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['protractor_specs/st.js'],
    baseUrl: 'http://localhost:4000',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    }
};

//'protractor_specs/**/*.js'
//'protractor_specs/e2eTests.js'
//'protractor_specs/st.js'

//'protractor_specs/nav_bar.js'
//'protractor_specs/st.js'

// 'protractor_specs/search.js',
// 'protractor_specs/repeaters.js'
// 'protractor_specs/httpAndJSON.js'
// 'protractor_specs/charts_d3js.js'
// 'protractor_specs/flexslider.js'
// 'protractor_specs/image_mouseOver.js'
// 'protractor_specs/image_flipper.js'
// 'protractor_specs/prelims.js'
// 'protractor_specs/footer.js'