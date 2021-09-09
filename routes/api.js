const router = require("express").Router();
const Workout = require("../models/workout");

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(workouts => {
      const lastWorkout = workouts[workouts.length-1]
      let sum = 0
      lastWorkout.exercises.forEach(exercise => {
        sum += exercise.duration
      })
      lastWorkout.totalDuration = sum
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put('/api/workouts/:id', ({ params, body }, res) => {
    Workout.findOneAndUpdate(
      { _id: params.id}, 
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
  Workout.find({})
    .then(workouts => {
      console.log(workouts)
      workouts.forEach((workout) => {
        let sum = 0
        workout.exercises.forEach(exercise => {
          sum += exercise.duration
        })
        workout.totalDuration = sum
      })
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
})

module.exports = router;
