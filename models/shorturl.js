const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortUrlSchema = new Schema({
	adderss: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("ShortUrl", shortUrlSchema);
