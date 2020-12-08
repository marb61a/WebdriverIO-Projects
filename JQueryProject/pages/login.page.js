class LoginPage {
    get headingText(){
        return $('#login-title');
    }

    get emailLabel(){
        return $('#form-login > div:nth-child(1) > label');
    }

    get emailField(){
        return $('#loginEmail');
    }

    get passwordLabel(){
        return $('#form-login > div:nth-child(2) > label');
    }

}

module.exports = new LoginPage();