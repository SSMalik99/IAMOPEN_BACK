const mongoose = require('mongoose')

const TutorialSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "first name is required"]
    },
    description : {
        type: String
    },
    image: {
        type: String
    },
    isVideo : {
        type:Boolean

    },
    product : {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }
})

module.exports = mongoose.model("Tutorial", TutorialSchema)