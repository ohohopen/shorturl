const express = require("express");
const port = 3000;
const exphbs = require("express-handlebars");
const app = express();
require("./config/mongoose");
const bodryParser = require("body-parser");

// 引用路由器
const routes = require("./routes");

app.use(bodryParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
// 將 request 導入路由器
app.use(routes);

app.listen(port, () => {
	console.log("app is connecting.");
});
