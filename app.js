const express = require("express");
const port = 3000;
const exphbs = require("express-handlebars");
const app = express();
require("./config/mongoose");
const bodryParser = require("body-parser");
const ShortUrl = require("./models/shorturl");
const randomStr = require("./randomStr");
app.use(bodryParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.get("/", (req, res) => {
	ShortUrl.find()
		.lean()
		.then((shorturls) => {
			res.render("index", { shorturls });
		})
		.catch((error) => console.log(error));
});
//短網址路由，以shorten找出與其配對的原網址，再轉頁至該網址
app.get("/:shorten", (req, res) => {
	const shorten = req.params.shorten;
	ShortUrl.findOne({ shorten })
		.lean()
		.then((shorturls) => {
			res.redirect(shorturls.address);
		})
		.catch((error) => console.log(error));
});

//新增一筆網址和縮址的配對資料並重新render進最後一筆(也就是最新的)資料
app.post("/shorturl/new", (req, res) => {
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

app.listen(port, () => {
	console.log("app is connecting.");
});
