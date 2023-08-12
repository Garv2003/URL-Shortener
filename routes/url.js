const URL = require("../models/url");
const path = require("path");
const express = require("express");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 5 });
const router = express.Router();

router.get("/", (req, res) => {
  URL.find({}).then((url) => {
    res.render("home", { url: url });
  });
});

router.post("/addurl", (req, res) => {
  let newurl = new URL({
    FullUrl: req.body.FullUrl,
    ShortUrl: uid(),
    Clicks: 0,
  });
  newurl
    .save()
    .then((result) => {
      res.redirect(`/shorturl/${result._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get(`/shorturl/:id`, (req, res) => {
  URL.findById({ _id: req.params.id }).then((result) => {
    res.render("shorturl", { url: result });
  });
});

router.get("/:id", (req, res) => {
  URL.findOneAndUpdate(
    { ShortUrl: req.params.id },
    {
      $inc: { Clicks: 1 },
    }
  ).then((result) => {
    res.redirect(result.FullUrl);
  });
});

module.exports = router;
