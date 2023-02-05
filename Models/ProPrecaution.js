const mongoose = require('mongoose')

const ProPrecautionSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "first name is required"]
    },
    description : {
        type: String
    },
    Product : {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }
})

module.exports = mongoose.model("ProPrecaution", ProPrecautionSchema)