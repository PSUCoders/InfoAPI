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
      personalWeb: "https://www.iamgonchi.com/",
      github: "https://github.com/gonzen2310",
      linkedIn: "https://www.linkedin.com/in/gonzalo-reyes/"
    },
    {
      fname: "Gaurav",
      lname: "Jayasawal",
      founderStatus: "Co-Founder",
      position: "Vice President",
      personalWeb: "https://www.gauravjj.com/",
      github: "https://github.com/jgaurav6",
      linkedIn: "https://www.linkedin.com/in/gauravjj/"
    },
    {
      fname: "Keenan",
      lname: "Kunzelman",
      founderStatus: "Co-Founder",
      position: "PR Chair",
      personalWeb: "...",
      github: "https://github.com/KeenanKunzelman",
      linkedIn: "https://www.linkedin.com/in/keenankunzelman/"
    },
    {
      fname: "Hung",
      lname: "Nguyen",
      founderStatus: "Co-Founder",
      position: "Treasurer",
      personalWeb: "https://hungs.dev/",
      github: "https://github.com/nthungdev",
      linkedIn: "..."
    },
    {
      fname: "Keith",
      lname: "Prevost",
      founderStatus: "Co-Founder",
      position: "PR Chair",
      personalWeb: "...",
      github: "https://github.com/rickyprev",
      linkedIn: "https://www.linkedin.com/in/nthungdev/"
    },
    {
      fname: "Khanh",
      lname: "Le",
      founderStatus: "Co-Founder",
      position: "Secretary",
      personalWeb: "...",
      github: "https://github.com/winkhanh",
      linkedIn: "https://www.linkedin.com/in/khanh-le-5b1b7817a/"
    },
    {
      fname: "Michael",
      lname: "Gates",
      founderStatus: "Co-Founder",
      position: "Avid Contributor",
      personalWeb: "...",
      github: "https://github.com/MichaelGatesDev",
      linkedIn: "https://www.linkedin.com/in/michael-gates-867311182/"
    }
  );
});

module.exports = router;
