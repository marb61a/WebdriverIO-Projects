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
        browser.url('');

        LoginPage.emailField.setValue('fake@fake.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

        browser.pause(2000);
    });

    it('Should display error when password is incorrect', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('fake');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

        browser.pause(2000);
    });

    it('Should display error when password case is incorrect', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('PASSWORD');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

        browser.pause(2000);
    });

    it('Should login with valid email and passord', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'The overlay is still displayed');

        browser.pause(2000);
    });

});
