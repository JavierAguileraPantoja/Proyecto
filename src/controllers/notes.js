const notesController = {};
const Note = require('../medels/Note');

notesController.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesController.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    //console.log(newNote);
    await newNote.save();
    req.flash('success_msg','Nota Agredada Exitosamente');
    res.redirect('/notes')
};

notesController.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', { notes });
};

notesController.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    //console.log(note);
    res.render('notes/edit-note', { note });
};

notesController.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg','Nota Editada Exitosamente');
    res.redirect('/notes');
};

notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Nota Eliminada Exitosamente');
    res.redirect('/notes');
};


module.exports = notesController;
