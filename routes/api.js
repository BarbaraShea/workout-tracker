const router = require("express").Router();
const Workouts = require("../models/workouts.js");


router.post("/api/workouts", ({ body }, res) => {
    console.log("route hit");
    Workouts.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts", (req, res) => {
    Workouts.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  






















module.exports = router;
