const router = require("express").Router();
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
    Exercise.findOneAndUpdate({ _id: mongojs.ObjectId(req.params.id)}, {$push: req.body})
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

router.get('/api/workouts/range', (req, res) => {

})

module.exports = router;
