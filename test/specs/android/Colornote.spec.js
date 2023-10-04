describe('Color Note', () => {
    it('Add Note', async () => {
        await $('//*[@text="SKIP"]')
            .click();

        await $('//*[@text="Add note"]')
            //.toBeDisplayed()
            .click();

        await $('//*[@text="Text"]')
            .click();

        await expect($('//*[@text="Editing"]'))
            .toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Favorite Anime List");

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("Naruto\nOnepiece\nBleach");

        await driver.back();
        await driver.back();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Naruto\nOnepiece\nBleach");
    });

    it('Delete Note', async () => {
        const note = (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).getText()

        await $('~More').click();

        await $('//*[@text="Delete"]').click();
        
        await driver.acceptAlert();
        //await driver.pause(3000);
        
        // await $('//*[@resource-id="android:id/button1"]').click();
        //~android:id/button1').click();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]'))
            .toHaveText("");
        
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
            .click();

        await $('//*[@text="Trash Can"]')
            .click();    

        const trashcanNote = (await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).getText();

        await expect(note).toEqual(trashcanNote);


    });
});