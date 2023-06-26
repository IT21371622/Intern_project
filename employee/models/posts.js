const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({     //creating schema in mongo database
    name: {                                  //creating attributes
        type: String,
        
    },
    email: {
        type: String,
        
    },
    message: {
        type: String,
       
    },
    note: {
        type: String,
    }
});



module.exports = mongoose.model('Post', postSchema);


