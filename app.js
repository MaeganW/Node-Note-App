console.log('running app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

const user = os.userInfo();
console.log(user);

fs.appendFile('hello.txt', `Hello ${user.username}!`);