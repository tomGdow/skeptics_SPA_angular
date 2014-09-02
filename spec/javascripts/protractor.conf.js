//Protractor Configuration

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    specs: ['protractor_specs/st.js'],
    baseUrl: 'http://localhost:4000',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    }
};

//'protractor_specs/**/*.js '
//'protractor_specs/e2eTests.js '
//'protractor_specs/st.js'