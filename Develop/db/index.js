const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v1');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

class Functions {
    read(){
        return read('db/db.json','utf8')
    }
    write(a){
        return write('db/db.json',JSON.stringify(a))
    }
    getNotes(){
        return this.read().then((b)=>{
            let notes;
            try{
                notes= [].concat(JSON.parse(b))
            }catch(err){
                note = []
            }
            return notes;
        })
    }

    //add note function
    addNotes(){
        return this.write().then((b)=>{
            let notes;
            try{
                notes= [].concat(JSON.parse(b))
            }catch(err){
                note = []
            }
            return notes;
        })
        
    }
    //delete note function
    deleteNotes(){
        return this.deleteNotes().then((c)=>{
            let notes;
            try{
                notes=
            }
        })
    }

}

module.exports = new Functions()