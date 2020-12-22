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

        // Verifying the Login
        assert.equal(LoginPage.headingText.isDisplayed(), true, "LoginPage.headingText");
        assert.equal(LoginPage.emailLabel.isDisplayed(), true, "LoginPage.emailLabel");
        assert.equal(LoginPage.emailField.isDisplayed(), true, "LoginPage.emailField");
        assert.equal(LoginPage.passwordLabel.isDisplayed(), true, "LoginPage.passwordLabel");
        assert.equal(LoginPage.passwordField.isDisplayed(), true, "LoginPage.passwordField");
        assert.equal(LoginPage.rememberLoginCheckbox.isDisplayed(), true, "LoginPage.rememberLoginCheckbox");
        assert.equal(LoginPage.rememberLoginLabel.isDisplayed(), true, "LoginPage.rememberLoginLabel");
        assert.equal(LoginPage.submitButton.isDisplayed(), true, "LoginPage.submitButton");

        // Header Verification
        assert.equal(HeaderPage.logoutLink.isDisplayed(), true, "HeaderPage.logoutLink");
        assert.equal(HeaderPage.linkLink.isDisplayed(), true, "HeaderPage.linkLink");
        assert.equal(HeaderPage.heroFactsLink.isDisplayed(), true, "HeaderPage.heroFactsLink");
        assert.equal(HeaderPage.wolverineOption.isDisplayed(), true, "HeaderPage.wolverineOption");
        assert.equal(HeaderPage.spiderManOption.isDisplayed(), true, "HeaderPage.spidermanOption");
        assert.equal(HeaderPage.searchField.isDisplayed(), true, "HeaderPage.searchField");
        assert.equal(HeaderPage.searchButton.isDisplayed(), true, "HeaderPage.searchButton");

        // Intro Verification
        assert.equal(IntroPage.titleText.isDisplayed(), true, "IntroPage.titleText");
        assert.equal(IntroPage.mainImage.isDisplayed(), true, "IntroPage.mainImage");

        // Roster Verification
        assert.equal(RosterPage.instructionText.isDisplayed(), true, "RosterPage.instructionText");
        assert.equal(RosterPage.listTitle.isDisplayed(), true, "RosterPage.listTitle");

        bowser.pause(2000);
    });

});
