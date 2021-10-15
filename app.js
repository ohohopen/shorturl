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

app.listen(port, () => {
	console.log("app is connecting.");
});
