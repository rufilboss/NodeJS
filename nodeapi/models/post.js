const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 3,
        maxlength: 33
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 3,
        maxlength: 333
    }
});

module.exports = mongoose.model("Post", postSchema);