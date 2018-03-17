// const obj = {
//   name: 'Andrew'
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const parsedStringObj = JSON.parse(stringObj);
// console.log(typeof parsedStringObj);
// console.log(parsedStringObj);



const fs = require('fs');
const originalNote = {
  title: 'A title',
  body: 'Some content'
}
const originalNoteJson = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteJson);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);