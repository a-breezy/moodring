const router = require("express").Router();

const userRoutes = require("./user-routes");
const moodRoutes = require("./mood-routes");

router.use("/user", userRoutes);
router.use("/mood", moodRoutes);

module.exports = router;
