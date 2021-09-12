const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/notebook'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const notesRouter = require('./routes/notes')
app.use('/notes',notesRouter)

app.listen(9000, () => {
    console.log('Server started')
})