const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number,
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



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout