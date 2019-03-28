var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/ourTeam", function(req, res, next) {
  res.send(
    {
      fname: "Gonzalo",
      lname: "Reyes",
      founderStatus: "Co-Founder",
      position: "President",
      personalWeb: "...",
      github: "...",
      linkedIn: "..."
    },
    {
      fname: "Gaurav",
      lname: "Jayasawal",
      founderStatus: "Co-Founder",
      position: "Vice President",
      personalWeb: "...",
      github: "...",
      linkedIn: "..."
    },
    {
      fname: "Keenan",
      lname: "Kunzelman",
      founderStatus: "Co-Founder",
      position: "PR Chair",
      personalWeb: "...",
      github: "...",
      linkedIn: "..."
    },
    {
      fname: "Hung",
      lname: "Nguyen",
      founderStatus: "Co-Founder",
      position: "Treasurer",
      personalWeb: "...",
      github: "...",
      linkedIn: "..."
    },
    {
      fname: "Keith",
      lname: "Prevost",
      founderStatus: "Co-Founder",
      position: "PR Chair",
      personalWeb: "...",
      github: "...",
      linkedIn: "..."
    },
    {
      fname: "Khanh",
      lname: "Le",
      founderStatus: "Co-Founder",
      position: "Secretary",
      personalWeb: "...",
      github: "...",
      linkedIn: "..."
    },
    {
      fname: "Michael",
      lname: "Gates",
      founderStatus: "Co-Founder",
      position: "Avid Contributor",
      personalWeb: "...",
      github: "...",
      linkedIn: "..."
    }
  );
});

module.exports = router;
