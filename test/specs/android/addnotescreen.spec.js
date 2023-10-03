import AddNoteScreen from '../../screenobjects/android/add-note.screen';
import EditNoteScreen from "../../screenobjects/android/edit-note-functions.screen"; 

describe('Color Note', () => {
    it('Add Note & Delete', async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV Shows", "Friends\nBreaking Bad\nThe Game of Thrones");

        // Get Note Title
        const note = await AddNoteScreen.titleBar.getText();

        await EditNoteScreen.deleteNote();

        //Get Note Title in Trash
        const trashcanNote = await AddNoteScreen.title.getText();

        // Assertion
        await expect(note).toEqual(trashcanNote);

    });
});