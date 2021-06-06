const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        enum: ["resistance", "cardio"],
        required: true
      },
      name: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      weight: {
        type: Number,
        required: false
      },
      reps: {
        type: Number,
        required: false
      },
      sets: {
        type: Number,
        required: false
      },
      distance: {
        type: Number,
        required: false
      },
    }
  ]

});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;