const router = require("express").Router();
const { login } = require("../controllers/user-controllers");

router.route("/").post(login);

module.exports = router;
