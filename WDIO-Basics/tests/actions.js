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
        const buttonPopulate = $('#populate')
		buttonPopulate.waitForExist()
        buttonPopulate.click();
        browser.pause(medium);
        buttonPopulate.doubleClick();
    });

    it('Checkbox & Radio Button', () => {
		browser.url('https://devexpress.github.io/testcafe/example/');
		const radio = $('#linux');
		radio.waitForExist();
		radio.click();
		browser.pause(short);

		const checkbox = $('#remote-testing');
		checkbox.waitForExist();
		checkbox.click();
		browser.pause(short);
    });

    it('Select Box', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');
        const select = $('#preferred-interface');
        select.waitForExist();
        select.selectByVisibleText('JavaScript API');
		browser.pause(short);
    });

});
