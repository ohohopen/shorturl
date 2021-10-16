const express = require("express");
const router = express.Router();
const ShortUrl = require("../../models/shorturl");
const randomStr = require("../../randomStr");

//短網址路由，以shorten找出與其配對的原網址，再轉頁至該網址
router.get("/:shorten", (req, res) => {
	const shorten = req.params.shorten;
	ShortUrl.findOne({ shorten })
		.lean()
		.then((shorturls) => {
			res.redirect(shorturls.address);
		})
		.catch((error) => console.log(error));
});

//新增一筆網址和縮址的配對資料並重新render進最後一筆(也就是最新的)資料
router.post("/new", (req, res) => {
	const address = req.body.address;
	const randomString = randomStr();
	ShortUrl.create({
		address: address,
		shorten: randomString,
	})
		.then(() => {
			ShortUrl.find()
				.then((shorturls) => {
					const pop = shorturls.pop();
					// console.log("pop=", pop);
					res.render("success", { shorturls: pop.toJSON() });
				})
				.catch((error) => console.log(error));
		})
		.catch((error) => console.log(error));
});

module.exports = router;
