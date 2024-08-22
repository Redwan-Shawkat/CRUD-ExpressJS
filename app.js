/*
node. app.js Have to SHopping
add,show
node app.js add Have to Shopping
node app.js shows
*/




// -----> IMPORTING addNote
const {addNote, showNotes,deleteNote} = require('./notes') 

// -----> Command
const command = process.argv[2]

/*
[বা] const command = process.argv[2].trim
*/

// -----> String 
const note = process.argv.slice(3).join(' ')

/*

SELF TRY! SELF TRY! SELF TRY!

// -----> Delete Noteid
let noteId;

for (let i = 1; i<process.argv.length; i++){
     noteId = parseInt(process.argv[i]) - 1;
     console.log("note id:",noteId )
     break;
     console.log("DELETED!")
}

*/


//function run
switch(command){
     case "add":
          addNote(note);
          break;
     case "show":
          showNotes();
          break;
     
     /*

     case "delete":
          // const noteIndex = parseInt(prompt("Enter the index You wanna delete"))
          // const noteId = noteIndex - 1
          deleteNote(noteId)
          break;
     
     */
    
     default:
          console.log("Invalid command")
} 