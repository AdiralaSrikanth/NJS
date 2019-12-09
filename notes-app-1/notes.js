const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title,body)=>{
    const notes = loadNotes()
    // const duplicates = notes.filter((note)=>note.title === title) -- filter function loops
    //through all the items and returns array based on condn. 

    const duplicateNote = notes.find((note)=>note.title === title) //find method find and return only the first match

    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note Saved'))

    }else{
        console.log(chalk.red.inverse('Note Taken'))
    }
}
const saveNotes = (notes)=>{
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('notes.json', jsonData)
}
const loadNotes = ()=>{
    try {
        const readFileData = fs.readFileSync('notes.json')
        const bufferData = readFileData.toString()        
        const notesData = JSON.parse(bufferData)
        return notesData
    } catch (error) {
        return []
    }
}

const removeNotes = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !== title)
    if(notes.length > notesToKeep.length){
      saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note Removed'))
    } else{
        console.log(chalk.red.inverse('Note not found!'))

    }
}
const listNotes = ()=> {
    console.log(chalk.green.inverse("Your notes "))
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNotes = (title)=>{
    const notes = loadNotes()
    const findNote = notes.find((note)=> note.title === title)
    if(findNote){
        console.log(chalk.green.inverse("Note Title: "+ findNote.title))
        console.log("Note Body: "+ findNote.body)
    }else {
        console.log(chalk.red.inverse("No Note Found"))
    }

}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes

}