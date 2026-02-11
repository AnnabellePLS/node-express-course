const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  conpleted: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
