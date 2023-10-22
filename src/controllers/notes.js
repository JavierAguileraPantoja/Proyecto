const notesController = {};

notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesController.createNewNote = (req, res) => {
    console.log(req.body)
    res.send('New Note')
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
