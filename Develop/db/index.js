const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);
const uuid = require('uuid');
class Functions {
    read() {
        return read('db/db.json', 'utf8')
    }
    write(a) {
        return write('db/db.json', JSON.stringify(a))
    }
    getNotes() {
        return this.read().then((b) => {
            let notes;
            try {
                notes = [].concat(JSON.parse(b))
            } catch (err) {
                note = []
            }
            return notes;
        })
    }
    //add note function
    saveNotes(note) {
        const { title, text } = note;
        if (!title || !text) {
          throw new Error("Note 'title' and 'text' cannot be blank");
        }
        // Add a unique id to the note using uuid package
        const newNote = { title, text, id: uuid.v1() };
        // Get all notes, add the new note, write all the updated notes, return the newNote
        return this.getNotes()
          .then((notes) => [...notes, newNote])
          .then((updatedNotes) => this.write(updatedNotes))
          .then(() => newNote);
      }
      deleteNotes(id) {
        // Get all notes, remove the note with the given id, write the filtered notes
        return this.getNotes()
          .then((notes) => notes.filter((note) => note.id != id))
          .then((filteredNotes) => this.write(filteredNotes));
      }
}
module.exports = new Functions()

// const fs = require('fs');
// const util = require('util');
// const read = util.promisify(fs.readFile);
// const write = util.promisify(fs.writeFile);


// class Functions {
//     read() {
//         return read('db/db.json', 'utf8')
//     }
//     write(a) {
//         return write('db/db.json', JSON.stringify(a))
//     }
//     getNotes() {
//         return this.read().then((b) => {
//             let notes;
//             try {
//                 notes = [].concat(JSON.parse(b))
//             } catch (err) {
//                 note = []
//             }
//             return notes;
//         })
//     }

//     //add note function
//     saveNotes(body) {

//         const { title, text } = body
//         const note = { title, text, id: Math.floor((Math.random() * 1000) + 100) }
//         return this.getNotes().then((notes) => [...notes, note]).then((newNotes) => this.write(newNotes)).then(() => note)
//     }
//     //delete note function
//     deleteNotes(id) {
//         return this.getNotes()
//             .then((notes) => {
//                 // var dump = notes.filter(note=> note.id !== id)
//                  return notes.filter(note=> note.id != id)
//             }
//                )
//                 .then(newNotes =>console.log(newNotes))
//     }

// }

// module.exports = new Functions()