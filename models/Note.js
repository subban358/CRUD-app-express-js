const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Note',noteSchema)