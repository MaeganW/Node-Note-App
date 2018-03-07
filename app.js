console.log('running app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs');

// const user = os.userInfo();
// console.log(user);
// console.log(module);
// console.log(notes.sum(12,21))

// fs.appendFile('hello.txt', `Hello ${user.username}! You are ${notes.age}. ${notes.addNote()}`);

//variables typed into the console
var command = process.argv[2];
// console.log(process.argv);
// console.log('process argv: ', command);

let msg = '';
if (command === 'add') {
  msg = 'Adding a note';
} else if (command === 'delete') {
  msg = 'Deleting a note';
} else if (command === 'read') {
  msg = 'Reading a note';
} else if (command === 'list') {
  msg = 'Listing all notes';
} else {
  msg = 'Command not recognized';
}

console.log('Note Taker Says: ', msg);