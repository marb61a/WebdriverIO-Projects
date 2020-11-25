describe('First Steps with WebdrverIO', () => {
    it("Load example website", () => {
        browser.url('http://www.example.com');
        browser.pause(3000);

        expect(browser).toHaveUrl('http://www.example.com/');
        expect(browser).toHaveTitle('Example Domain');

    });
    
    // it("Load Webdriver website", () => {
    //     browser.url('https://webdriver.io');
    //     browser.pause(3000);
    // });

    it('H1 should be visible', () => {
        // Gets the selector and saves to variable
        const h1 = $('h1');

        expect(h1).toBeVisible();
    });

    it('P tag should be visible', () => {
        const p = $('p');

        expect(p).toBeVisible();
    });

    it('Check Link Value', () => {
        const link = $('a');
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    });

});
