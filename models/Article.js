// Requiring Mongoose
var mongoose = require("mongoose");
// Setting Schema varible
var Schema = mongoose.Schema;

// Using Schema Constructor
var ArticleSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Using our model above with mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;