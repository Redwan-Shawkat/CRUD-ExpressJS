// -----> IMPORTING FILE SYSTEM
const fs = require("fs");

// -----> Returning Notes
const getNotes = () => {
     const notes = JSON.parse(fs.readFileSync("./notes.json", "utf-8"))
     return notes;
}

// -----> Write (MODIFIED)
const writeToFile = (notes) => {
     const data = JSON.stringify(notes)
     fs.writeFileSync('./notes.json', data)
}


// ----> Add Notes
const addNote = (note) => {

     const notes = getNotes();

     if(notes.find(item => note === item)){
          
          console.log("Already Exist");
     } else {
          notes.push (note);
          // const data = JSON.stringify(notes)
          // fs.writeFileSync('./notes.json', data)
          writeToFile(notes)
          console.log("Noted!!!")
     }
}

// -----> SHOW
const showNote = () => {
     // const notes = JSON.parse(fs.readFileSync("./notes.json", "utf-8"))
     const notes = getNotes();
     notes.forEach((item, idx) => console.log(` ${idx+1} ${item}`))
}

/*

SELF TRY! SELF TRY! SELF TRY!

// -----> DELETE
const deleteNote = (noteId) => {
     let notes = getNotes();


     const filteredNotes = notes.filter((note, index) => index !== noteId);
     const newNotes = filteredNotes.slice(); // Create a copy of filteredNotes

     console.log(newNotes);

     writeToFile(newNotes)
     
}

*/


module.exports = {
    addNote: addNote,
     showNotes:showNote,
     deleteNote: deleteNote,
}