//Protractor Configuration

var _ = require('underscore');

var array = [
	'st.js',
    '1_preliminary_tests.js',
    '2_main_navbar_tests.js',
    '3_time_navbar_tests.js',
    '4_timer_tests.js',
    '5_footer_tests.js',
    '6_http_and_JSON_tests.js',
    '7_repeaters_tests.js',
    '8_search_dynamic_listView.js',
    '9_search_dynamic_gridView.js',
    '10_search_products_table.js',
	'11_search_users.js',
	'12_newsletter.js',
    '13_create_update_destroy.js',
    '17_flaky_tests.js'
  ];  //st = 'single test'

var tests = _.map(array, function(arg){ return 'protractor_specs/' + arg});

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: _.flatten([

   // tests[0]
    //  tests.splice(11,13)
      tests[13]
    ]),
    baseUrl: 'http://localhost:3000',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    },
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    }
};




