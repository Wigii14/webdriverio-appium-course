import EditNoteScreen from "../../screenobjects/android/edit-note-functions.screen";

describe('Web Browser Access', () => {
    before(async () => {
        await EditNoteScreen.skipTutorial();
    });

    it('Access external link and verify content in the browser', async () => {
        //click on navigation/hamburger icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
            .click();

        //click on fb link
        await $('//*[@text="Like us on Facebook"]').click();
        
    });
});