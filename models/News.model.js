const mongoose = require("mongoose")

const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    image: String,

    categoryId: {
        ref: "Category",
        type: mongoose.SchemaTypes.ObjectId
    },
    userId: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }
})


const News = mongoose.model("News", newsSchema)

module.exports = News;