const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });


const landing = require("./landing");
router.get("/", async (req, res) => {
	try {
		res.status(200).json(landing);
	} catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router;
