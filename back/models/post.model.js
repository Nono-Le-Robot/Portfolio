const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    nom : {
        type : String, 
        required: true,
    },
    prenom : {
        type : String, 
        required: true,
    },
    email : {
        type : String, 
        required: true,
    },
    message : {
        type : String, 
        trim : true 
    },
})

module.exports = mongoose.model('Post', PostSchema)
