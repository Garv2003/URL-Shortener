const URL = require("../models/url");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 5 });

module.exports.posturl = async (req, res) => {
  try {
    if (!req.body.FullUrl) {
      return res.status(400).json({ error: "Please enter a URL" });
    }
    const FullUrl = req.body.FullUrl.trim();
    const existingURL = await URL.findOne({ FullUrl: FullUrl });

    if (existingURL) {
      res.status(200).json(existingURL);
    } else {
      const newURL = new URL({
        FullUrl: req.body.FullUrl,
        ShortUrl: uid(),
        Clicks: 0,
      });
      const savedURL = await newURL.save();
      res.status(200).json(savedURL);
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
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.gethome = async (req, res) => {
  try {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 2);
    await URL.deleteMany({ createdAt: { $lt: date } });

    await URL.find()
      .sort({ Clicks: -1 })
      .then((result) => {
        res.status(200).json({ urls: result });
      });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.fortest = async (req, res) => {
  try {
    res.status(200).send("for testing purpose");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

let count = 0;

module.exports.customurl = async (req, res) => {
  const { q } = req.query;
  console.log(q);
  count++;
  console.log(count);
  res.status(200).json(uid(q));
  // const existingURL = await URL.findOne({ ShortUrl: q });
  // if (existingURL) {
  //   res.status(200).json(existingURL);
  // } else {
  //   res.status(404).json({ error: "URL not found" });
  // }
};
