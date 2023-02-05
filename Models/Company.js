const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "first name is required"]
    },
    description : {
        type: String
    },
    password: {
        type: String,
        required : [true, "password is required"]
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("Company", CompanySchema)