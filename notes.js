console.log('running notes.js');

const fs = require('fs');

// module.exports.age = 26;
// module.exports.addNote = () => {
//   console.log('adding note');
//   return 'Here is a new note!'
// }
// module.exports.sum = (a,b) => a + b;

const fetchNotes = () => {
  try {
    const fetchedNotes = fs.readFileSync('notes-data.json');
    return JSON.parse(fetchedNotes);
  } catch (err) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('getting all notes');
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const newNotes = notes.filter(note => note.title !== title);
  fs.writeFileSync('notes-data.json', JSON.stringify(newNotes));

  return notes.length !== newNotes.length;
};

const readNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes;
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
};