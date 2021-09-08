const router = require("express").Router();
const { Mongoose } = require("mongoose");
const { Workout, Exercise } = require("../models");

router.get('/api/workouts', async (req, res) => {
    Workout.find({}).populate("exercise")
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});


router.put('/api/workouts/:id', (req, res) => {
    Exercise.update({ _id: mongojs.ObjectId(req.params.id)}, {$set: req.body})
    .then(updatedExercise => {
      res.json(updatedExercise);
    })
    .catch(err => {
      res.json(err)
    })
});

router.post('/api/workouts', ({ body }, res) => {
  Workout.insert(body)
  .then(newWorkout => {
    res.json(newWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;
