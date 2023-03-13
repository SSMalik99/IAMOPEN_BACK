const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "first name is required"]
    },
    description : {
        type: String
    },
    image: {
        type: String
    },
    company : {
        type: mongoose.Schema.ObjectId,
        ref: 'Company'
    }
})

module.exports = mongoose.model("Product", ProductSchema)