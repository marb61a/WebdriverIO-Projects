import Base from '../Base';

class ExchangePage extends Base {
    get currencySelect(){
        return $('#pc_currency');
    }

    get amountInput() {
		return $('#pc_amount')
	}

	get dollarButton() {
		return $('#pc_inDollars_true')
	}

	get submitButton() {
		return $('#purchase_cash')
	}

	get message() {
		return $('#alert_content')
    }
    
}

export default new ExchangePage();