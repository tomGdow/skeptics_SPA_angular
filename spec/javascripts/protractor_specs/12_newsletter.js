'use strict';
describe('my app', function () {

	var _ = require('underscore');
	var vars = require('./testvariables');

	describe('Newsletter', function () {

		beforeEach(function () {
			browser.get('#view1');
			vars.users_icon.click();
		});

		describe('Submit button', function () {

			it('should display the correct text', function () {
				expect(vars.subscribe_button.getAttribute('value')).toMatch(/Subscribe/)
			});

			it('should not be active', function () {
				expect(vars.subscribe_button.getAttribute('disabled')).toBeTruthy();
			});

			it('should not become active', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.invalid_email);
				expect(vars.subscribe_button.getAttribute('disabled')).toBeTruthy();
			});

			it('should become active', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				expect(vars.subscribe_button.getAttribute('disabled')).toBeFalsy();
			});

			it('should become inactive', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				vars.subscribe_button.click();
				expect(vars.subscribe_button.getAttribute('disabled')).toBeTruthy();
			});
		});

		describe('error message', function () {

			it('should not be visible',
			  function () {
				  expect(vars.email_error_message.isDisplayed()).toBe(false);
			  });

			it('should become visible',
			  function () {
				  vars.input_email.clear();
				  vars.input_email.sendKeys(vars.invalid_email);
				  vars.subscribe_message.click();
				  expect(vars.email_error_message.isDisplayed()).toBe(true);
			  });

			it('should become invisible',
			  function () {
				  vars.input_email.clear();
				  vars.input_email.sendKeys(vars.invalid_email);
				  vars.subscribe_message.click();
				  vars.input_email.click();
				  expect(vars.email_error_message.isDisplayed()).toBe(false);
			  });

			it('should have the correct colour', function () {
				expect(vars.email_error_message.getCssValue('color')).toContain(vars.getRgba().red);
			});

			it('should display the correct text', function () {

				expect(vars.email_error_message.getInnerHtml()).toContain('Not a valid email')

			});
		});

		describe('email input-box', function () {

			it('should have the correct border-color', function () {
				expect(vars.input_email.getCssValue('border-color')).toBe(vars.getRgb().input_box_gray);
			});

			it('should change border-color',
			  function () {
				  vars.input_email.clear();
				  vars.input_email.sendKeys(vars.invalid_email);
				  expect(vars.input_email.getCssValue('border-color')).toBe(vars.getRgb().red);
			  });

			it('should have the correct box-shadow',
			  function () {
				  expect(vars.input_email.getCssValue('box-shadow'))
					.toMatch(/0px 1px 2px 0px inset/)

			  });

			it('should NOT have focus on page-load', function () {
				expect(browser.driver.switchTo().activeElement()
				  .getAttribute('class')).not.toMatch(vars.email_class_regex);
			});

			it('should gain and lose focus', function () {
				vars.input_email.click();
				expect(browser.driver.switchTo().activeElement()
				  .getAttribute('class')).toMatch(vars.email_class_regex);
				vars.search_box_users.click();
				expect(browser.driver.switchTo().activeElement()
				  .getAttribute('class')).not.toMatch(vars.email_class_regex);
				vars.input_email.click();
				expect(browser.driver.switchTo().activeElement()
				  .getAttribute('class')).toMatch(vars.email_class_regex);
			});
		});

		describe('Dynamic Message', function () {

			it('should be invisible', function () {

				expect(vars.echo_valid_email.getText()).toBe('');
			});

			it('should  echo a correct email address', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				expect(vars.echo_valid_email.getText()).toBe(vars.valid_email);
			});

			it('should  not echo an incorrect email address', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.invalid_email);
				expect(vars.echo_valid_email.getText()).toBe('');
			});

			it('should become invisible', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				expect(vars.echo_valid_email.getText()).toBe(vars.valid_email);
				vars.input_email.clear();
				expect(vars.echo_valid_email.getText()).toBe('');
			});
		});

		describe('Thank-you message', function () {

			it('should be invisible', function () {

				expect(vars.thank_you_message.isDisplayed()).toBe(false);
			});

			it('it should become visible', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				vars.subscribe_button.click();
				expect(vars.thank_you_message.isDisplayed()).toBe(true);
			});

			it('it should become invisible', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				vars.subscribe_button.click();
				vars.input_email.click();
				expect(vars.thank_you_message.isDisplayed()).toBe(false);
			});

			it('should have the correct structure', function () {
				expect(vars.thank_you_message.getInnerHtml()).toMatch(/Thank you,/);
				expect(vars.thank_you_message.getInnerHtml())
				  .toMatch(/you have subscribed to our news letter/);
				expect(vars.thank_you_message.getInnerHtml()).toMatch(/email address:/);

			});

			it('should contain the user-name in uppercase', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				vars.subscribe_button.click();
				expect(vars.thank_you_message.getText()).toMatch(/VALIDEMAIL/);
				expect(vars.thank_you_message.getText()).toMatch(/validemail/);
			});

			it('should contain the users email address', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				vars.subscribe_button.click();
				expect(vars.thank_you_message.getText()).toMatch(vars.valid_email);
			});

			it('should have the correct color', function () {
				vars.input_email.clear();
				vars.input_email.sendKeys(vars.valid_email);
				vars.subscribe_button.click();
				expect(vars.thank_you_message.getCssValue('color')).toContain(vars.getRgba().navBarGray);
			})
		});
	});
});

