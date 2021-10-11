const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/shorturl");
const db = mongoose.connection;
db.on("error", () => console.log("mongoose connecting is fail."));
db.once("open", () => console.log("mongoose connecting is success."));

module.exports = db;
