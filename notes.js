console.log('running notes.js');

// module.exports.age = 26;
// module.exports.addNote = () => {
//   console.log('adding note');
//   return 'Here is a new note!'
// }
// module.exports.sum = (a,b) => a + b;

const addNote = (title, body) => {
  console.log('adding note: ', title, body);
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