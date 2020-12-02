import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';

describe('E2E Tests - Pay', () => {
    it('Should login with valid credentials', () => {
        App.openLoginPage();
        LoginPage.formIsVisible();
        LoginPage.fillForm('username', 'password');
        LoginPage.submitForm();

        Navbar.insideNavbarIsVisible();
    });

    it('Should make payment', () => {
        $('#pay_bills_tab').click();
        const selectPayee = $('#sp_payee');
        selectPayee.waitForExist();
        selectPayee.selectByAttribute('value', 'apple');

        const selectAccount = $('#sp_account');
        selectAccount.waitForExist();
        selectAccount.selectByVisibleText('Loan');

        $('#sp_amount').setValue('500');
        $('#sp_date').setValue('2020-03-31');
        browser.keys('Enter');
		$('#sp_description').setValue('Test');
		$('#pay_saved_payees').click();
		const message = $('#alert_content');
		expect(message).toHaveText('The payment was successfully submitted.');
    });

});
