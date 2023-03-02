const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // can also take string
        minlength: 3,
        maxlength: 33
    },
    body: {
        type: String,
        required: true, // can also take string
        minlength: 3,
        maxlength: 333
    }
});

module.exports = mongoose.model("Post", postSchema);