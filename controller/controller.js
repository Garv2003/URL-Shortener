const URL = require("../models/url");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 5 });

module.exports.posturl = (req, res) => {
  URL.find({ FullUrl: req.body.FullUrl }).then((result) => {
    if (result.length > 0) {
      res.redirect(`/shorturl/${result[0]._id}`);
    }
    else{
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
    }
  });
};

module.exports.geturl = (req, res) => {
  URL.findById({ _id: req.params.id })
    .then((result) => {
      res.render("shorturl", { url: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.redirecturl = async (req, res) => {
  try {
    await URL.findOneAndUpdate(
      { ShortUrl: req.params.id },
      {
        $inc: { Clicks: 1 },
      }
    ).then((result) => {
      res.redirect(result.FullUrl);
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.gethome = async (req, res) => {
  await URL.find({}).then((url) => {
    res.render("home", { url: url });
  });
};
