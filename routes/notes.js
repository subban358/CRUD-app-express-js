const express = require('express')
const router = express.Router();
const Note = require('../models/Note')

router.get('/', async(req,res) => {
    try{
           const notes = await Note.find()
           res.json(notes)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const note = await Note.findById(req.params.id)
           res.json(note)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const note = new Note({
        name: req.body.name,
        description: req.body.description,
    })

    try{
        const a1 =  await note.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const note = await Note.findById(req.params.id) 
        if(req.body.description){
            note.description = req.body.description
        }else if(req.body.name){
            note.name = req.body.name
        }
        const a1 = await note.save()
        res.json(a1)   
    }catch(err){
        res.send('Error: Note not found')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const note = await Note.findById(req.params.id) 
        note.description = req.body.description
        note.name = req.body.name
        const a1 = await note.save()
        res.json(a1)   
    }catch(err){
        res.send('Error: All the fields needs to be sent')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const note = await Note.findById(req.params.id) 
        const a1 = await note.delete()
        res.json(a1)   
    }catch(err){
        res.send('Error: Note does not exist')
    }
})

module.exports = router