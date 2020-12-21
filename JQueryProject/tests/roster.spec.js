const assert = require('assert');

const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Test Suite', () => {
    it('Should have default value', () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        var title = "Build Your Superhero Roster:";
        var instructions = "Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.";

        assert.equal(RosterPage.instructionText.getText(), instructions, "Instruction text mismatch");
        assert.equal(RosterPage.listTitle.getText(), title, "Title does not match");

        browser.pause(2000);

    });

    it('Should test something else');

});
