describe('E2E Tests - Feedback', () => {
    it('Should load feedback form', () => {
        browser.url('http://zero.webappsecurity.com/index.html');
		$('#feedback').waitForExist();
		$('#feedback').click();
		$('form').waitForExist();
    });

    it('Should submit feedback form', () => {

    });

});
