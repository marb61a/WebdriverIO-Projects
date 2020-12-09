const assert = require('assert');

const LoginPage = require('../pages/login.page');

describe('Test Suite', () => {
    it('Should display error when password is missing', () => {
        browser.url('');

        LoginPage.emailField.setValue('test@test.com');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

        browser.pause(2000);
    });
    
    it('Should display error when email is missing', () => {
        browser.url('');

        LoginPage.passwordField.setValue('blah');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');
        browser.pause(2000);
    });

    it('Should display error when email and password are missing', () => {
        browser.url('');

        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');
        browser.pause(2000);
    });

    it('Should display error when email is incorrect', () => {

    });

    it('Should display error when password is incorrect');
    it('Should display error when password case is incorrect');
    it('Should login with valid email and passord');

});
