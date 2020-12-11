const assert = require('assert');

const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Header Test Suite', () => {
    it('It should redirect to new site', () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        browser.pause(2000);
        HeaderPage.linkLink.click();

        // assert.equal(browser.getUrl(), 'https://glitchitsystem.com/');
        // browser.pause(2000);
    });

    it('It should test something else', () => {

    });

});
