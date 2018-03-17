console.log('running notes.js');

const fs = require('fs');

// module.exports.age = 26;
// module.exports.addNote = () => {
//   console.log('adding note');
//   return 'Here is a new note!'
// }
// module.exports.sum = (a,b) => a + b;

const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    const fetchedNotes = fs.readFileSync('notes-data.json');
    notes = JSON.parse(fetchedNotes);
  } catch (err) {

  }

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const getAll = () => {
  console.log('getting all notes');
};

const removeNote = (title) => {
  console.log('removing a note: ', title);
};

const readNote = (title) => {
  console.log('reading a note: ', title);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
};