describe('Android Elements Tests', () => {
    it('Find Element by Accessibility ID', async () => {
        /** 
        * TODO: Open the application, Find "App", click on "App", assert if "Action Bar" is on the screen.
        */
        // find element by accessbility id. use sign ~ pill when using accessibility ID
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find Element by Class Name', async () => {
        // find element by class name
        // $ command will return single element
        // $$ command will return multiple element

        const className = await $('android.widget.TextView');

        console.log(className.getText());

        // Assertion
        await expect(className).toHaveText('API Demos');
    });

    it('Find Element by xpath', async () => {
        //  find element by xpath
        // xpath - (//tagname[@attribute=value])
        // tagname - class
        
        await $('~App');

        // using content description
        await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();

        //find element using resource id
        (await $("//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']")).click();

        //find element by text
        (await $("//android.widget.TextView[@text='Command two']")).click();

        //find by class - assertion
        const textAssertion = await $("//android.widget.TextView");
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find Elements by UIAutomator Selector', async () => {
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Multiple Elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 
            'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'
        ]

        const actualList = []

        //  find multiple elements
        const multipleElements = await $$('//android.widget.TextView');

        //  loop through elemenets
        for (const element of multipleElements) {
            actualList.push(await element.getText());
            
        }

        //  assert the list
        await expect(actualList).toEqual(expectedList);
    });
    

    it.only('Text Field', async () => {
        await $('~Views').click();
        await $('//*[@content-desc="Auto Complete"]').click();
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();

        const countryName = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await countryName.addValue("Philippines");
        await expect(countryName).toHaveText("Philippines");

        await $('test').addv
    });
});