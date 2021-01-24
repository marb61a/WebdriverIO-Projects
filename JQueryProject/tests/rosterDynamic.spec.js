const assert = require('assert');

const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

Describe("Dynamic roster item suite", () => {
    it("should create multiple items", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        RosterPage.addHeroField.setValue("Spongebob");
        RosterPage.submitButton.click();

        assert.equal(RosterPage.rosterItems[6].getText(), "Spongebob", "Hero text does not match");
        
    });
});
