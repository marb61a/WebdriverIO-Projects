const assert = require('assert');

const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require("../pages/intro.page");
const RosterPage = require("../pages/roster.page");

describe('Smoke Test Suite', () => {
    it('Should verify static elements are present', () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        bowser.pause(2000);
    });

    it('Should test something else');

});
