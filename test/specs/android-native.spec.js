describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await driver.pause(3000);
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async () => {
    
        // click on first dialog box
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')
            .click();
            
        // accept alert
        //await driver.acceptAlert();

        // dismiss alert
        //await driver.dismissAlert();

        //get alert text
        console.log('Alert TEXT -->', await driver.getAlertText());

        // click ok button
        (await $('//*[@resource-id="android:id/button1"]')).click();

        // assertion - alert box no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]'))
            .not.toExist();
    });

    it('Vertical Scrolling', async () => {
        (await $('~App')).click();
        await $('~Activity').click();

        // find element that is scrollable
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
        //(await $('~Secure Surfaces')).click();

        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        /*await $("~Views").click();
        await $("~Gallery").click();
        await $("~1. Photos").click();
        await driver.touchAction([
            { action: 'press', x: 1277, y: 424 },
            { action: 'moveTo', x: 459, y: 447 },
            'release'
        ]);
        await driver.touchAction([
            { action: 'press', x: 1289, y: 424 },
            { action: 'moveTo', x: 155, y: 465 },
            'release'
        ]);*/

        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await driver.pause(3000);

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

    });

    it.only('Date Picker', async () => {
        // open app and datewidgets
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        
        // get the current date
        const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate2 = await currentDate.getText();

        await $('~change the date').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await $('//*[@text="10"]').click();
        await $('//*[@resource-id="android:id/button1"]').click();

        const nextMonth = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const nextMonth2 = await nextMonth.getText();
        await expect(currentDate2).not.toEqual(nextMonth2);
    });
});