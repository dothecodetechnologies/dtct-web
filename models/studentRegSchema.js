
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: String,
    email: String,
    mobile: Number,
    c_course: String,
    s_course: String,
    final_location: String,
    slot: Number,
    adhar: Number
});
module.exports = mongoose.model('Students', studentSchema);
