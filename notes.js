console.log('running notes.js');

module.exports.age = 26;
module.exports.addNote = () => {
  console.log('adding note');
  return 'Here is a new note!'
}
module.exports.sum = (a,b) => a + b;

//variables typed into the console
console.log(process.argv);