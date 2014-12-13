
var vars = (function () {
	'use strict';
	var _ = require('underscore');

 //PRIVATE
	//variables
	var imgArr = [
		'001_banks.jpg','002_buffon.jpg','005_kahn.jpg',
		'010_zoff.jpg','015_baresi.jpg','016_beckenbauer.jpg',
		'019_boer.jpg','020_breitner.jpg','026_cohen.jpg',
		'034_maldini.jpg','035_moore.jpg','040_puyol.jpg',
		'051_ardiles.jpg','055_charlton.jpg','067_hagi.jpg',
		'068_iniesta.jpg','073_neeskens.jpg','075_pirlo.jpg',
		'076_platini.jpg','095_hurst.jpg','098_klose.jpg',
		'101_milla.jpg','102_muller.jpg','103_pele.jpg',
		'105_romario.jpg','09_schillaci.jpg',
		'x1_roy_keane.jpg', 'x2_rivelino.jpg', 'x3_eusebio.jpg',
		'x4_maradona.jpg', 'x5_phil_lynott.jpg'
	     ];

	var hex_colors = {
		navBarGray: '999999',
		input_box_gray:'CCCCCC',
		skepticsBlue : '0078A0',
		skepticsOrange : 'FFA500',
		red : 'FF0000',
		skepticsBackground : 'eee',
		tabsCaption : 453922
        };

	//functions

	var hexToRgb = function (hex,a) {
		//hexToRgb modified from here:http://stackoverflow.com/a/11508164/499167
		a = a !== 0  && typeof a !== 'undefined' ? 1 : 0;
		hex = hex.toString().replace("#", "");
		var bigint = parseInt(hex, 16);
		var r = (bigint >> 16) & 255;
		var g = (bigint >> 8) & 255;
		var b = bigint & 255;
		var str = 'rgb';
		if(a) {
			str+= 'a(';
			str += [r, g, b, 1].join(', ');
		}
		else {
			str +='(';
			str += [r, g, b].join(', ');
		}
		str += ')';
		return str;
	};

	var rgb_colors = _.object(_.keys(hex_colors),
	  _.map(_.values(hex_colors), function (arg) {
		  return hexToRgb(arg);
	  }));

	var	rgba_colors = _.object(_.keys(hex_colors),
	  _.map(_.values(hex_colors),function (arg) {
		  return hexToRgb(arg,1);
	  }));

	var images = _.object(
	  _.map(imgArr,
		function(arg){
			return arg.split("_").pop().split(".").shift();
		}),
	  imgArr);

  //PUBLIC

	return {

	 //variables

	    //nav-bar
		home : $('#myhome'),
		blog : $('#vieweight'),
		video : $('#viewtwo'),
		products : $('#viewfive'),
		api_feeds : $('#viewthree'),
		dublin_gallery : $('#viewfour'),
		dublin_gallery_icon : $('#viewfour > span'),
		products_icon : $('#viewfive > span'),
		api_instagram_icon : $('#viewthree > span:first-child'),
		api_dribbble_icon : $('#viewthree > span:nth-child(2)'),
		video_icon : $('#viewtwo > span'),
		blog_icon :  $('#vieweight > span'),
		home_icon : $('#myhome > span'),
		users_icon : $('a .icon-users'),

	    //nav-bar with time
		time_format_long : /^.?[0-9]:[0-9][0-9]:[0-9][0-9]\s.M/,
		time_format_short : /^.?[0-9]:[0-9][0-9]\s.M/,
		date_format_long : /^\S+\b[,]\s\b\S+\b\s\w+[,]\s\w+$/,
		date_format_short : /^\S+\b\s\w+[,]\s\w+$/,
		displayed_time : $('#showTheTime'),
		time_icon : $('#time_with_icon'),
		icon_F_to_C : $('#degrees_F_to_C'),
		fahrenheit_input_box : element(by.id("fahrenheit")),
		dropdown_panel_F_to_C : $('#celcius-to-fahrenheit'),
		celcius_input_box : $('#celcius'),
		fahrenheit_sub_panel : $('#fahren_panel'),
		celsius_sub_panel : $('#celsius_panel'),
		dropdown_panel_latlong : $('#lat-to-long'),
		menu_item_lat_long : $('#lat_to_long_button'),
		input_box_lat_long : $("#google_places_ac"),
		search_button_lat_long : $('#lat_long_search_btn'),
		longitude_value : $('#my_longitude'),
		latitude_value : $('#my_latitude'),
		latitude_caption : $('#my_latit_caption'),
		longitude_caption : $('#my_longit_caption'),
		minimize_expand_button : $('#min_expand_button'),
		little_cart : $('#fa-shopping-cart'),

	    // Timer
		timer_icon : $('#timer_icon'),
		timer_panel : $('.timerWrapper'),
		start_button_timer : $$('.timerBtn').get(0),
		stop_button_timer : $$('.timerBtn').get(1),
		clear_button_timer : $$('.timerBtn').get(2),
		resume_button_timer : $$('.timerBtn').get(3),

	    // Footer
		footer : $('footer'),
		x_button_footer : $('.fa-times-circle'),
		github : element(by.css('.icon-github')),
		facebook : element(by.css('.icon-facebook')),
		twitter : element(by.css('.icon-twitter')),
		googlePlus : element(by.css('.icon-googleplus')),
		git_address : 'github.com/tomGdow/skeptics_SPA_angular',
		twitter_address : 'twitter.com',
		facebook_address : 'www.facebook.com',
		googleplus_address : 'plus.google.com',

	    //dynamic search
		list_icon : $('.list-icon'),
		grid_icon : $('.grid-icon'),
		alphabetical_dropdown : $('#sortBy option:nth-child(1)'),
		lowest_price_dropdown : $('#sortBy option:nth-child(2)'),
		highest_price_dropdown : $('#sortBy option:nth-child(3)'),
		lowest_id_dropdown : $('#sortBy option:nth-child(7)'),
		highest_id_dropdown : $('#sortBy option:nth-child(8)'),
		search_box_dynamicList : element(by.id("ngsearch")),
		echo_search_term : $('[ng-show ="query.length>=2"]'),
		page_header : element(by.binding('viewFiveMessage')),

	    // product search
		select_alphabetical : $('#sortBy option:nth-child(1)'),
		select_lowest_price : $('#sortBy option:nth-child(2)'),
		select_highest_price : $('#sortBy option:nth-child(3)'),
		select_lowest_id :  $('#sortBy option:nth-child(7)'),
		select_highest_id : $('#sortBy option:nth-child(8)'),
		echo_search_param : $('[ng-show ="search.length>=2"]'),

        //view5 (products)
		dynamicSearch_linkTo_view15:  $('dd > a[href="#view15"]'),
		dynamicSearch_linkTo_View5 : $('dd > a[href="#view5"]'),
		new_product_btn : $('#new_product_navBar'),
		productSearch_linkTo_view9 : $('dd > a[href="#view9"]'),
		productSearch_linkTo_view6 : $('dd > a[href="#view6"]'),
		search_box_dynamicTable : element(by.id("prodSearchInput")),
		echo_search_string : $('[ng-show ="search.length>=2"]'),
		search_box_users : element(by.id("userSearchInput")),

	    //newsletter
		subscribe_button : $('#btnNewsletter'),
	    input_email : $('[type = "email"]'),
		valid_email : 'validemail@mymail.com',
		invalid_email : 'invalidemail@@mymail.com',
		email_class_regex : /ng(\w|-)\w*(\w|-*)email/,
		email_error_message : $('.newsLetterErr'),
		subscribe_message : element(by.binding('viewMessageFourteen')),
		echo_valid_email : $('#valid_email_echo'),
		thank_you_message : $$('[ng-show ="thankYouMessage"]').get(0),

		//New Product (view 7)
		li_closing_tag_regex : /((.*?<\/li>))/,
		name_field :  $('#commodity_name'),
		description_field :  $('#commodity_description'),
		price_field :  $('#commodity_price'),
		image_url_field :  $('#commodity_image_url'),
		category_field :  $('#commodity_category'),
		year_field :  $('#commodity_year'),
		winner_field :  $('#commodity_winner'),
		submit_btn_new_product : $('[value="Create Commodity"]'),
		edit_commodity_button : $('#editBtn'),
		update_commodity_button : $('[value="Update Commodity"]'),
		destroy_commodity_button : $('[data-method="delete"]'),

	//functions
		getImg:function () {
			return images;
		},
		getHex:function () {
			return hex_colors;
		},
		getRgb:function () {
			return rgb_colors;
		},
		getRgba:function () {
			return rgba_colors;
		},

		rollcall : function (arg) {
			return element(by.id(arg)).isPresent();
		},

		retrieveListElement : function (arg) {
			arg = typeof arg !== 'undefined' ? arg : 0;
			return $$('.flex-span-title').get(arg).getText();
		},

		getGridImageSource : function (arg) {
			arg = typeof arg !== 'undefined' ? arg : 0;
			return $$('.grid2 li span a img').get(arg).getAttribute('src');
		},

		getTableElement : function (arg) {
			arg = typeof arg !== 'undefined' ? arg : 0;
			return $$('tr td:nth-child(2)').get(arg).getText();
		},

		retrieveTableId : function (arg) {
			arg = typeof arg !== 'undefined' ? arg : 0;
			return $$('tr td:nth-child(2)>span').get(arg).getAttribute('id');
		},

		getMyTableElement : function (arg) {
			arg = typeof arg !== 'undefined' ? arg : 0;
			return $$('table tr td:nth-child(1)').get(arg).getText();
		},

		getRepeaterElementText : function (arg) {
			arg = typeof arg !== 'undefined' ? arg : 0;
			return $$('[ng-repeat]').get(arg).getText();

		},


}
})();

module.exports = vars;