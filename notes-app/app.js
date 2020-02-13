//const validator = require('validator')
const getNotes = require('./getNotes.js');

const chalk = require('chalk');
const yargs = require('yargs')
 
//Create 'add' comand
yargs.command({
    command: 'add',
    describe: 'Add new note...',
    handler: function(){
        console.log('Adding new note..')
    }
}).argv

//Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove note...',
    handler: function () {
        console.log('Removing note...')
    }
}).argv

//Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Reading note...',
    handler: function(){
        console.log('Reading note')
    }
}).argv

//Create 'list' command
yargs.command({
    command: 'list',
    describe: 'Listing notes...',
    handler: function(){
        console.log('Listing notes')
    }
}).argv

// console.log(yargs.argv)

//console.log(getNotes('Who let the dogs out?'))



//const add = require('./utils.js')
//console.log(add(419, 1))
//const fs = require('fs');
//fs.writeFileSync('notes.txt', 'TEST!');
//fs.appendFileSync('notes.txt', ' Append test.')


/****************** Chalk + Examples ******************/
// const chalk = require('chalk');
// const log = console.log;
// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));
// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));