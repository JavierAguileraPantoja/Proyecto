const notesController = {};

notesController.renderNoteForm = (req, res) => {
    res.send('Note Add');
};
notesController.createNewNote = (req, res) => {
    res.send('New Note');
};

notesController.renderNotes = (req, res) => {
    res.send('Render Notes');
};

notesController.renderEditForm = (req, res) => {
    res.send('Edit Form Notes');
};

notesController.updateNote = (req, res) => {
    res.send('Update Notes');
};

notesController.deleteNote = (req, res) => {
    res.send('Delete Notes');
};


module.exports = notesController;
