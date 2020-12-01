import Base from '../Base';

class LoginPage extends Base {
    get loginForm(){
        return $('#login_form');
    }

    get usernameInput(){
        return $('#user_login');
    }

    get passwordInput(){
        return $('#user_password');
    }

    get submitButton(){
        return $('input[type="submit"]');
    }

    formIsVisible(){
        this.loginForm.waitForExist();
    }
}

export default new LoginPage();