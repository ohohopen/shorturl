const db = require("../../config/mongoose");
const defaultData = require("../../public/data/default.json");
const len = defaultData.results.length;
const ShortUrl = require("../shorturl");
db.on("error", () => {
	console.log("seed connection error");
});
db.once("open", () => {
	for (let i = 0; i < len; i++) {
		ShortUrl.create({
			address: defaultData.results[i].address,
			shorten: defaultData.results[i].shorten,
		});
	}
	console.log("len");
});
