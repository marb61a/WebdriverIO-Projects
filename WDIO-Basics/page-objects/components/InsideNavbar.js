import Base from '../Base';

class InsideNavbar extends Base {
    get accountActivityTab(){
        return $('#account_activity_tab');
    }

    get filtersLink(){
        return $('#tabs > ul > li:nth-child(2) > a');
    }

    clickAccountActivityTab(){
        
    }
}

export default new InsideNavbar();
