import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';

describe('E2E Tests - Login/Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomePage();
        Navbar.clickSignIn();

        LoginPage.pauseShort();
        LoginPage.formIsVisible();
        LoginPage.fillForm('invalid username', 'invalid password');
        LoginPage.submitForm();

        const errorMessage = LoginPage.error;
        expect(errorMessage).toHaveText('Login and/or password are wrong.');
    });

    it('Should login with valid credentials', () => {
        App.openHomePage();
        Navbar.clickSignIn();
        
        LoginPage.formIsVisible();
        LoginPage.fillForm('username', 'password');
        LoginPage.submitForm();
        Navbar.insideNavbarIsVisible();
    });

    it('Should logout of app', () => {
        App.logout();
        $('#pages-nav').waitForExist();
    });

});
