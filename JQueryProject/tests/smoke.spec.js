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

        // Login to the App
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        // Header Verification
        assert.equal(HeaderPage.logoutLink.isDisplayed(), true, "HeaderPage.logoutLink");
        assert.equal(HeaderPage.linkLink.isDisplayed(), true, "HeaderPage.linkLink");
        assert.equal(HeaderPage.heroFactsLink.isDisplayed(), true, "HeaderPage.heroFactsLink");

        // Need to expand HeroFactsLink to avoid test failing
        HeaderPage.heroFactsLink.click();

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
        assert.equal(RosterPage.wolverineItem.isDisplayed(), true, "RosterPage.wolverineItem");
        assert.equal(RosterPage.ironManItem.isDisplayed(), true, "RosterPage.iromManItem");
        assert.equal(RosterPage.deadpoolItem.isDisplayed(), true, "RosterPage.deadpoolItem");
        assert.equal(RosterPage.thorItem.isDisplayed(), true, "RosterPage.thorItem");
        assert.equal(RosterPage.spidermanItem.isDisplayed(), true, "RosterPage.spidermanItem");
        assert.equal(RosterPage.addHeroLabel.isDisplayed(), true, "RosterPage.addHeroLabel");
        assert.equal(RosterPage.addHeroField.isDisplayed(), true, "RosterPage.addHeroField");
        assert.equal(RosterPage.submitButton.isDisplayed(), true, "RosterPage.submitButton");

        // Vote Verification
        assert.equal(VotePage.voteTitle.isDisplayed(), true, "VotePage.voteTitle");
        assert.equal(VotePage.voteItem1.isDisplayed(), true, "VotePage.voteItem1");
        assert.equal(VotePage.voteItem2.isDisplayed(), true, "VotePage.voteItem2");
        assert.equal(VotePage.voteItem3.isDisplayed(), true, "VotePage.voteItem3");
        assert.equal(VotePage.voteItem4.isDisplayed(), true, "VotePage.voteItem4");
        assert.equal(VotePage.voteItem5.isDisplayed(), true, "VotePage.voteItem5");
        assert.equal(VotePage.voteItemLabel1.isDisplayed(), true, "VotePage.voteItemLabel1");
        assert.equal(VotePage.voteItemLabel2.isDisplayed(), true, "VotePage.voteItemLabel2");
        assert.equal(VotePage.voteItemLabel3.isDisplayed(), true, "VotePage.voteItemLabel3");
        assert.equal(VotePage.voteItemLabel4.isDisplayed(), true, "VotePage.voteItemLabel4");
        assert.equal(VotePage.voteItemLabel5.isDisplayed(), true, "VotePage.voteItemLabel5");
        assert.equal(VotePage.submitButton.isDisplayed(), true, "VotePage.submitButton");
        assert.equal(VotePage.voteItemText1.isDisplayed(), true, "VotePage.voteItemText1");
        assert.equal(VotePage.voteItemVal1.isDisplayed(), true, "VotePage.voteItemVal1");
        assert.equal(VotePage.voteItemText2.isDisplayed(), true, "VotePage.voteItemText2");
        assert.equal(VotePage.voteItemVal2.isDisplayed(), true, "VotePage.voteItemVal2");
        assert.equal(VotePage.voteItemText3.isDisplayed(), true, "VotePage.voteItemText3");
        assert.equal(VotePage.voteItemVal3.isDisplayed(), true, "VotePage.voteItemVal3");
        assert.equal(VotePage.voteItemText4.isDisplayed(), true, "VotePage.voteItemText4");
        assert.equal(VotePage.voteItemVal4.isDisplayed(), true, "VotePage.voteItemVal4");
        assert.equal(VotePage.voteItemText5.isDisplayed(), true, "VotePage.voteItemText5");
        assert.equal(VotePage.voteItemVal5.isDisplayed(), true, "VotePage.voteItemVal5");

        browser.pause(2000);
    });

});
