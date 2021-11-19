const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
        
    },
    gender: {
        type: String
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model("User", userSchema);