
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:  {
        type: String,
    }, 
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phoneNumber: {
        type:String
    },
    imgUrl: {
        type: String, 
    },
    type: {
        type: String
    }, 
    description : {
        type: String
    }
}, {
    timestamps: true
});
module.exports =  mongoose.model('Books', bookSchema);