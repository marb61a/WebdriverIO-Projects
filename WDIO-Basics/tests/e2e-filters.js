import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';

describe('E2E Tests - Transactions Filter', () => {
    it('Should login with valid credentials', () => {
        App.openLoginPage();
        LoginPage.formIsVisible();
        LoginPage.fillForm('username', 'password');
        LoginPage.submitForm();

        Navbar.insideNavbarIsVisible();
    });

    it('Transaction filter should work', () => {
        $('#account_activity_tab').click();
        $('#tabs > ul > li:nth-child(2) > a').waitForExist();
        $('#tabs > ul > li:nth-child(2) > a').click();
        $('#aa_description').waitForExist();
        $('#aa_description').setValue('Test');
        $('button[type="submit"]').click();
        $('#filtered_transactions_for_account').waitForExist();
        const message = $('.well');
        expect(message).toHaveText('No results.');
    });

});
