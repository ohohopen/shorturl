const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortUrlSchema = new Schema({
	address: {
		type: String,
		required: true,
	},
	shorten: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("ShortUrl", shortUrlSchema);
