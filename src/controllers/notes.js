const notesController = {};
const Note = require('../medels/Note');

notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesController.createNewNote = async(req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    //console.log(newNote);
     await newNote.save();
    res.send('New Note')
};

notesController.renderNotes = async(req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes',{notes});
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
