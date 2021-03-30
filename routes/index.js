const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path");
const landing = require("./landing");

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

router.get("/", async (req, res) => {
	try {
		res.sendFile(path.join(__dirname, "index.html"));
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/routes", async (req, res) => {
	try {
		res.status(200).json(landing);
	} catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router;
