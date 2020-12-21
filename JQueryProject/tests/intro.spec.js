const assert = require('assert');

const LoginPage = require('../pages/login.page');
const IntroPage = require("../pages/intro.page");

describe("Intro Test Suite", () => {
    it("Should display correct title", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        assert.equal(IntroPage.titleText.getText(), "Superhero Roster", "Text does not match");

        browser.pause(2000);
    });

    it.only("Should display correct image", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        // Cannot use relative source for image path, it must be absolute
        assert.equal(IntroPage.mainImage.getAttribute("src"), "http://localhost:8080/images/superhero.png", "Src differs");
        assert.equal(IntroPage.mainImage.getAttribute("alt"), "Superhero Image", "Alt differs");

        browser.pause(2000);
    });

});
