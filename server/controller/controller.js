const URL = require("../models/url");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 5 });

module.exports.posturl = async (req, res) => {
  try {
    const existingURL = await URL.findOne({ FullUrl: req.body.FullUrl });

    if (existingURL) {
      res.status(200).json(existingURL);
    } else {
      const newURL = new URL({
        FullUrl: req.body.FullUrl,
        ShortUrl: uid(),
        Clicks: 0,
      });

      const savedURL = await newURL.save();
      res.status(200).json({ savedURL });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.redirecturl = async (req, res) => {
  try {
    await URL.findOneAndUpdate(
      { ShortUrl: req.params.id },
      {
        $inc: { Clicks: 1 },
      }
    ).then((result) => {
      res.status(200).json({ result });
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.gethome = async (req, res) => {
  try {
    await URL.find()
      .sort({ Clicks: -1 })
      .then((result) => {
        res.status(200).json({ urls: result });
      });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
