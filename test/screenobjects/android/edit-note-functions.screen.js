import AddNoteScreen from "../../screenobjects/android/add-note.screen";

class EditNoteScreen {
    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNote).toBeDisplayed();
    }

    async addAndSaveNote(noteTitle, noteBody) {
        // Add Note
        await AddNoteScreen.addNote.click();
        await AddNoteScreen.addText.click();

        await expect(AddNoteScreen.editing).toBeDisplayed();

        // Add note title
        await AddNoteScreen.titleBar.addValue(noteTitle);

        // Add note body
        await AddNoteScreen.editNote.addValue(noteBody);
        
        // Save changes
        await driver.back();
        await driver.back();

        // Assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(noteBody); 
    }


    async deleteNote() {
        // Open more Icon
        await AddNoteScreen.menuBtn.click();

        await AddNoteScreen.deleteBtn.click();

        await driver.acceptAlert();
        //await driver.pause(3000);

        await expect(AddNoteScreen.noteList).toHaveText("");

        await AddNoteScreen.navIcon.click();

        await AddNoteScreen.trashCan.click();


    }

    
}

export default new EditNoteScreen();
