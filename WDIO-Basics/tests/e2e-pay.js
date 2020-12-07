import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import PaymentPage from '../page-objects/pages/PaymentPage';
import InsideNavbar from '../page-objects/components/InsideNavbar';
import Navbar from '../page-objects/components/Navbar';

describe('E2E Tests - Pay', () => {
    it('Should login with valid credentials', () => {
        App.openLoginPage();
        LoginPage.login('username', 'password');

        Navbar.insideNavbarIsVisible();
    });

    it('Should make payment', () => {
        InsideNavbar.clickPayBillsTab();
		const selectPayee = PaymentPage.payeeSelect;
		selectPayee.waitForExist();
		selectPayee.selectByAttribute('value', 'apple');

        const selectAccount = PaymentPage.accountSelect;
        selectAccount.waitForExist();
        selectAccount.selectByVisibleText('Loan');

        // Did not make use of form fill method due to issue
        // when trying to enter all details. Dropdown date picker
        // element was obscuring another elements.
        $('#sp_amount').setValue('500');
        $('#sp_date').setValue('2020-03-31');
        browser.keys('Enter');
		$('#sp_description').setValue('Test');
        $('#pay_saved_payees').click();
        
		const message = PaymentPage.message;
		expect(message).toHaveText('The payment was successfully submitted.');
    });

});
