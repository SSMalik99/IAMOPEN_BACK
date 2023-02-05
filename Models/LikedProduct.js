LikedProduct

const mongoose = require('mongoose')

const LikedProductSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    Product : {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }
})

module.exports = mongoose.model("LikedProduct", LikedProductSchema)