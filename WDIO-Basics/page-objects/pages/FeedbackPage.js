import Base from '../Base';

class FeedbackPage extends Base {
    get form(){
        return $('form');
    }

    get name(){
        return $('#name');
    }

    get email(){
        return $('#email');
    }

    get subject(){
        return $('#subject');
    }

    get message(){
        return $('#comment');
    }

    get submitButton(){
        return $('input[type="submit"]');
    }

    formIsVisible(){
        this.form.waitForExist();
    }
}

export default new FeedbackPage();