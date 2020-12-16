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

        assert.equal(browser.getUrl(), 'https://glitchitsystem.com/');
        browser.pause(2000);
    });

    it('It should open wolverine modal', () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        HeaderPage.heroFactsLink.click();
        HeaderPage.wolverineOption.click();

        browser.pause(2000);

        assert.equal(HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
        assert.equal(HeaderPage.wolverineModalTitleText.getText(), 'Wolverine Fact', 'There is a title mismatch');
        assert.equal(HeaderPage.wolverineModalContentText.getText(), 'Wolverine made his first comic book appearance in 1974.', 'Content does not match');

    });

    it('It should close wolverine modal', () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        HeaderPage.heroFactsLink.click();
        HeaderPage.wolverineOption.click();

        browser.pause(2000);

        assert.equal(HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
        HeaderPage.wolverineModalCloseButton.click();

        browser.pause(1000);
        assert.equal(HeaderPage.wolverineModalWindow.isDisplayed(), false, 'Modal is still displayed');
    });

    it('It should open spiderman modal', () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        HeaderPage.heroFactsLink.click();
        HeaderPage.spiderManOption.click();

        browser.pause(2000);

        assert.equal(HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');
        assert.equal(HeaderPage.spidermanModalTitleText.getText(), 'Spider-Man Fact', 'There is a title mismatch');
        assert.equal(HeaderPage.spidermanModalContentText.getText(), 'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.', 'Content does not match');
    });

    it("It should close spiderman modal", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        HeaderPage.heroFactsLink.click();
        HeaderPage.spiderManOption.click();

        browser.pause(2000);

        assert.equal(HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');
        HeaderPage.spidermanModalCloseButton.click();

        browser.pause(1000);
        assert.equal(HeaderPage.spidermanModalWindow.isDisplayed(), false, 'Modal is still displayed');
    });

    it("Should search for wolverine", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        HeaderPage.searchField.setValue("wolverine");
        HeaderPage.searchButton.click();

        assert.equal(browser.isAlertOpen(), true, "Alert is not open");
        assert.equal(browser.getAlertText(), "Wolverine is awesome!", "text does not match");

        browser.pause(1000);
    });

    it("Should error from not searching for wolverine", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        HeaderPage.searchField.setValue("stuff");
        HeaderPage.searchButton.click();

        assert.equal(browser.isAlertOpen(), true, "Alert is not open");
        assert.equal(
            browser.getAlertText(), 
            "Your search for stuff returned 0 reults. Try something else.", "text does not match"
        );

        browser.pause(1000);
    });

    it("Should close the alert", () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        HeaderPage.searchField.setValue("stuff");
        HeaderPage.searchButton.click();

        assert.equal(browser.isAlertOpen(), true, "Alert is not open");
        browser.acceptAlert();
        assert.equal(browser.isAlertOpen(), false, "Alert is still open");

        browser.pause(2000);
    });

});
