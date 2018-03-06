console.log('running notes.js');

module.exports.age = 26;
module.exports.addNote = () => {
  console.log('adding note');
  return 'Here is a new note!'
}
module.exports.sum = (a,b) => a + b;

//variables typed into the console
var command = process.argv[2];
// console.log(process.argv);
// console.log('process argv: ', command);

let msg = '';
if (command === 'add') {
  msg = 'Adding a note';
} else if (command === 'delete') {
  msg = 'Deleting a note';
} else {
  msg = 'Command not recognized';
}

console.log('Note Taker Says: ', msg);