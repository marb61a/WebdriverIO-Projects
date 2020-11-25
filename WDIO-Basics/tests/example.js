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

});
