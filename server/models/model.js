const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    link2:{
        type: String
    }

})

module.exports = mongoose.model("project",dataSchema)