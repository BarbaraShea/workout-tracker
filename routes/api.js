const router = require("express").Router();
const Workouts = require("../models/workouts.js");


router.post("/api/workouts", ({ body }, res) => {
    Workouts.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  




















module.exports = router;
