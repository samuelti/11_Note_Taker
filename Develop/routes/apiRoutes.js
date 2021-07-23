const router = require('express').Router();

const db = require('../db/index')

router.get('/notes',(req, res)=>{
    db.getNotes().then((notes)=>{
        return res.json(notes);
    }).catch(err=> res.status(500).json(err))
})

//post route
router.post('/notes',(req, res)=>{
    db.saveNotes(req.body).then((notes)=>{
      res.json(notes);
    }).catch(err=> res.status(500).json(err))
})
//delete route
router.delete('/notes/:id', (req, res)=>{
    db.deleteNotes(req.params.id)
    .then(()=>{
         res.json({ ok:true});
    }).catch(err=> res.status(500).json(err))
})

module.exports = router;