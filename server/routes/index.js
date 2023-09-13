const router = require("express").Router();

const apiRoutes = require("./api");
const authRoute = require("./auth-route");

router.use("/api", apiRoutes);
router.use("/login", authRoute);

router.use((req, res) => {
	res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
