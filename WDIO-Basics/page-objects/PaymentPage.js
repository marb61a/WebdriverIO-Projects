import Base from '../Base'

class PaymentPage extends Base {
    get payeeSelect(){
        return $('#sp_payee');
    }

    get accountSelect() {
		return $('#sp_account');
    }
    
    get amountInput(){
        return $('#sp_amount');
    }
    
}

export default new PaymentPage();