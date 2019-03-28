var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/ourTeam", function(req, res, next) {
  res.send({ name: "Express" });
});

module.exports = router;
