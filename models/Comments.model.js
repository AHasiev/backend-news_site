const mongoose = require("mongoose");
const News = require("./News.model");

const commentsSchema = ({
    text: String,
    userId: {
        ref: "Users",
        type: mongoose.SchemaTypes.ObjectId
    },
    newsId: {
        ref: "News",
        type: mongoose.SchemaTypes.ObjectId
    }
}) 

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment