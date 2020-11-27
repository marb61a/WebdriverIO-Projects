import { short, medium, long} from '../lib/timeouts';

describe('Browser Actions', () => {
    it('Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');
		const input = $('#developer-name');
        input.waitForExist();
        input.setValue('Joe');
		browser.pause(short);
		input.clearValue()
		browser.pause(short);
		input.addValue('Jack');
		browser.pause(short);
    });

    it('Click', () => {
        const buttonPupulate = $('#populate')
		buttonPupulate.waitForExist()
        buttonPupulate.click();
        browser.pause(medium);
    });

});
