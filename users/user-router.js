
const express = require("express")
const db = require("./user-model")
const restrict = require("../middleware/restrict");
const router = express.Router()

// This endpoint is only available to logged-in admin users due to the `restrict` middleware
router.get("/users", restrict("admin"), async (req, res, next) => {
	try {
		res.json(await db.get())
	} catch(err) {
		next(err)
	}
})
 module.exports = router;

