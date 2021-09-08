const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
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
      },
    },
  ]
});

workoutSchema.methods.durationAdder = function () {
  this.totalDuration = this.exercises.Sum({ duration })
  return this.totalDuration;
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout