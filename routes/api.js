const router = require("express").Router();
const Workout = require("../models/workout");

router.get('/api/workouts', async (req, res) => {
    Workout.find({}).populate("exercise")
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put('/api/workouts/:id', ({ params, body }, res) => {
    Workout.findOneAndUpdate(
      { _id: mongojs.ObjectId(params.id)}, 
      { $push: {exercises: body }},
      { new: true },
    )
    .then(updatedExercise => {
      res.json(updatedExercise);
    })
    .catch(err => {
      res.json(err)
    })
});

router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
  .then(newWorkout => {
    res.json(newWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find({}).populate("exercise")
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
})

module.exports = router;
