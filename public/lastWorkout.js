fetch("/api/workouts/range")
const lastWorkout = db.getCollection("workouts").find({}).sort({ "_id": -1}).limit(1);
