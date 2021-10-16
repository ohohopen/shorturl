const express = require("express");
const router = express.Router();
// 引入 home 模組程式碼
const home = require("./modules/home");
// 將網址結構符合 / 字串的 request 導向 home 模組
router.use("/", home);
// 引入 todos 模組程式碼
const shorts = require("./modules/shorturls");
// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組
router.use("/", shorts);
module.exports = router;
