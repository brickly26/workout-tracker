const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a type for the exercise"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise"
  },
  duration: {
    type: Number,
    required: "Please enter a duration"
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise