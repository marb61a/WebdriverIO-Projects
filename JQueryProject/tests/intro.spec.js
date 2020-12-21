const assert = require('assert');

const LoginPage = require('../pages/login.page');

describe("Intro Test Suite", () => {
    it("Should display correct title", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

    });

});
