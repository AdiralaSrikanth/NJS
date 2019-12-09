const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')

yargs.command({
    command:'add',
    describe: 'Add a note',
    builder: {
       title: {
            describe:'Add note',
            type:'string',
            demandOption:true
        },
        body:{
            describe:'body of the note',
            type:'string',
            demandOption:true
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)

    }
})

yargs.command({
    command:'remove',
    describe: 'Remove note',
    builder: {
       title: {
            describe:'Note title',
            type:'string',
            demandOption:true
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe: 'Lists all Notes',
    handler(){
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'Read Note',
    builder: {
        title:{
            describe: 'Read command',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)