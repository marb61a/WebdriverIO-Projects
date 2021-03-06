const assert = require('assert');

const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Test Suite', () => {
    it('Should display error when password is missing', () => {
        browser.url('');

        LoginPage.emailField.setValue('test@test.com');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');
        
    });
    
    it('Should display error when email is missing', () => {
        browser.url('');

        LoginPage.passwordField.setValue('blah');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');
        
    });

    it('Should display error when email and password are missing', () => {
        browser.url('');

        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'Alert is still open');
        
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

        
    });

    it('Should login with valid email and passord', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'The overlay is still displayed');

        
    });

    it("Should remember login credentials", () => {
        browser.url('');

        // Need to maximize window to avoid the menu becoming a hamburger and not 
        // interactable during testing
        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'The overlay is still displayed');

        HeaderPage.logoutLink.click();

        assert.equal(LoginPage.overlay.isDisplayed(), true, 'The overlay is not displayed');
        assert.equal(LoginPage.emailField.getValue(), '1@2.com', 'Values are not the same');

        // Only useful in this example as the password length is 8 but the field is obfuscated
        assert.equal(LoginPage.passwordField.getValue().length, 8, 'Password is too short');
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), true, 'Checkbox is not selected');

    });

    it.only("Should not remember login credentials", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'The overlay is still displayed');

        HeaderPage.logoutLink.click();

        assert.equal(LoginPage.overlay.isDisplayed(), true, 'The overlay is not displayed');
        assert.equal(LoginPage.emailField.getValue(), '', 'Values are not the same');
        assert.equal(LoginPage.passwordField.getValue().length, 0, 'Password is too short');
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), false, 'Checkbox is not selected');        
    });
    
});
