// Requiring Mongoose
var mongoose = require("mongoose");
// Setting Schema varible
var Schema = mongoose.Schema;

// Using Schema Constructor
var NoteSchema = new Schema({
    title: String,
    body: String
});

// Using our model above with mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;