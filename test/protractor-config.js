exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        //'e2e/*.js'
        'e2e/scenarios.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/app/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};