const assert = require('assert');

const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

Describe("Dynamic roster item suite", () => {
    it("should create single item", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        RosterPage.addHeroField.setValue("Spongebob");
        RosterPage.submitButton.click();

        assert.equal(RosterPage.rosterItems[5].getText(), "Spongebob", "Hero text does not match");

    });

    it("should have default list of heroes", () => {
        let heroes = ["Wolverine", "Iron Man", "Deadpool", "Thor", "Spider-Man"];

        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        for(let i = 0; i < heroes.length; i++){
            assert.equal(RosterPage.rosterItems[i].getText(), heroes[i], "Hero text does not match");
        }
    });

    it("should create single item", () => {
        let heroes = ["Joe", "Tom", "Dave", "Sharon"];

        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        for(let i = 0; i < heroes.length; i++){
            assert.equal(RosterPage.rosterItems[i].getText(), heroes[i], "Hero text does not match");
        }
    });
});
