const assert = require('assert');

const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Vote Section Test Suite', () => {
    it('Should increment vote', () => {
        browser.url('');

        browser.maximizeWindow();

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        // Converts the text string from gettext to a number to allow for incrementation
        let originalVoteValue = Number(VotePage.voteItemVal1.getText());

        // Uses the default x-men selection
        VotePage.submitButton.click();

        assert.equal(VotePage.voteItemVal1.getText(), originalVoteValue + 1, "Votes do not match");
        assert.equal(VotePage.thanksAlert.isDisplayed(), true, 'Alert is not displayed');
        assert.equal(VotePage.thanksAlert.getText(), 'Thanks for voting!', 'Text does not match');

        browser.pause(2000);
    });

});
