const express = require("express");
const port = 3000;
const exphbs = require("express-handlebars");
const app = express();
require("./config/mongoose");
const bodryParser = require("body-parser");
const { urlencoded } = require("express");
const ShortUrl = require("./models/shorturl");
app.use(bodryParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.get("/", (req, res) => {
	res.render("index");
});
app.post("/shorturl", (req, res) => {
	console.log(req.body.webUrl);
	const adderss = req.body.webUrl;
	res.send("post成功");
});
app.listen(port, () => {
	console.log("app is connecting.");
});
