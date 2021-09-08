const router = require("express").Router();
const { Workout, Exercises } = require("../models");

router.get('/api/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find({}).populate("exercise");
    res.json(workouts);
  } catch (err) {
    res.json(err);
  }
})

module.exports = router;
