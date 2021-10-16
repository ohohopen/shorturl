const express = require("express");
const router = express.Router();
const ShortUrl = require("../../models/shorturl");

router.get("/", (req, res) => {
	ShortUrl.find()
		.lean()
		.then((shorturls) => {
			res.render("index", { shorturls });
		})
		.catch((error) => console.log(error));
});

module.exports = router;
