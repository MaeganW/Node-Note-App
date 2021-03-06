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

const cmdOptions = {
  title: {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
  }
}
const yargsArgv = yargs
  .command('add', 'This command adds a new note', {
    title: cmdOptions.title,
    body: cmdOptions.body
  })
  .command('list', 'This command lists all notes')
  .command('read', 'Read a note with the matching title', {
    title: cmdOptions.title
  })
  .command('delete', 'This command removes the indicated note', {
    title: cmdOptions.title
  })
  .help()
  .argv;
const command = yargsArgv._[0];
// console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs Arguments: ', yargsArgv);

let msg = '';

switch(command) {
  case 'add':
    const note = notes.addNote(yargsArgv.title, yargsArgv.body);
    if (note) {
      msg = `Added note with title "${note.title}" and body "${note.body}"`;
    } else {
      msg = "Adding note errored";
    }
    break;
  case 'delete':
    const isNoteRemoved = notes.removeNote(yargsArgv.title);
    msg = isNoteRemoved ? 'Note was removed' : 'Note not found';
    break;
  case 'read':
    const readNote = notes.readNote(yargsArgv.title);
    msg = (readNote.length === 0) ? 'Note not found' : readNote[0].body;
    break;
  case 'list':
    const allNotes = notes.getAll();
    msg = `Listing ${allNotes.length} note(s)`;
    allNotes.forEach(note => console.log(`${note.title}: ${note.body}`));
    break;
  default:
    msg = 'Command not recognized';
}

console.log('Note Taker Says: ', msg);