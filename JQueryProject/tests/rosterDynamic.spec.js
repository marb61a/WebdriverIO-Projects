const assert = require('assert');

const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

Describe("Dynamic roster item suite", () => {
    it("should create single item", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.login("1@2.com", "password");

        // RosterPage.addHeroField.setValue("Spongebob");
        // RosterPage.submitButton.click();
        
        RosterPage.addHero("Spongebob");

        assert.equal(RosterPage.rosterItems[5].getText(), "Spongebob", "Hero text does not match");

    });

    it("should have default list of heroes", () => {
        let heroes = ["Wolverine", "Iron Man", "Deadpool", "Thor", "Spider-Man"];

        browser.url('');

        browser.maximizeWindow();

        LoginPage.login("1@2.com", "password");

        for(let i = 0; i < heroes.length; i++){
            assert.equal(RosterPage.rosterItems[i].getText(), heroes[i], "Hero text does not match");
        }
    });

    it("should create single item", () => {
        let heroes = ["Joe", "Tom", "Dave", "Sharon"];

        browser.url('');

        browser.maximizeWindow();

        LoginPage.login("1@2.com", "password");

        for(let i = 0; i < heroes.length; i++){
            // RosterPage.addHeroField.setValue(heroes[i]);
            // RosterPage.submitButton.click();

            RosterPage.addHero(heroes[i]);
            browser.pause(2000);
        }

        // Allows items to be created and then verified rather than verifying after each 
        // item is added to the list
        for(let i = 0; i < heroes.length; i++){
            assert.equal(RosterPage.rosterItems[i+5].getText(), heroes[i], "Hero text does not match");
        }
    });
});
