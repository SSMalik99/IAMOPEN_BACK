const mongoose = require('mongoose')

// for company we are going to use other table
// 1 for admin, 2 for early buyers, 3 for regular user
const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, "first name is required"]
    },
    lastName : {
        type: String
    },
    email : {
        type: String,
        required: [true, "first name is required"]
    },
    image:{
        type: String
    },
    password:{
        type:String,
        required: true
    },
    role : {
        type:Number,
        require:[true],
    }
})

module.exports = mongoose.model("User", UserSchema)