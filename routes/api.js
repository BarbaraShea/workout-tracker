const router = require("express").Router();
const {Workout} = require("../models");


router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("route hit");
  const id = params.id
  Workout.findByIdAndUpdate({_id:params.id},{$push:{exercises:body}})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.post("/api/workouts", ({ body }, res) => {
    console.log("route hit");
    Workout.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration:{$sum: "$exercises.duration"}
        }
      }
    ]) 
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
      $addFields: {
        totalDuration:{$sum: "$exercises.duration"}
      }
    }])
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  






















module.exports = router;
