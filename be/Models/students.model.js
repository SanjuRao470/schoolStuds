const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,


    first_name: String,
    email: String,
    last_name:String,
    Department:String,
    DOB:String,
    ID:String,
    // first_name: String,
    // last_name: String,
    // gender: String,
    // class: String,
    // Department: String,
    // DOB: String,
    // Address: String,
    // Hobbies: String,
    // avatar: String,
    
    
        
         })

   





module.exports = mongoose.model('studentcollections', studentSchema);











