class AddNoteScreen {
    get skipBtn() { return $('//*[@text="SKIP"]') }
    get addNote() { return $('//*[@text="Add note"]') }
    get addText() { return $('//*[@text="Text"]') }
    get editing() { return $('//*[@text="Editing"]') }
    get titleBar() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]') }
    get title() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]') }
    get editNote() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]') }
    get editBtn() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]') }
    get viewNote() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]') }
    get menuBtn() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]') }
    get deleteBtn() { return $('//*[@text="Delete"]') }
    get noteList() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]') }
    get navIcon() { return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]') }
    get trashCan() { return $('//*[@text="Trash Can"]') }
}



export default new AddNoteScreen();

