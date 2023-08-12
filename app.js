const express=require("express");
const mongoose=require("mongoose");
const morgan = require('morgan');
const URL = require("./models/url");
const path = require("path");
const ShortUniqueId = require("short-unique-id");

require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 1234;
const uid = new ShortUniqueId({ length: 5 });

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/",async (req, res) => {
  await URL.find({}).then((url) => {
    res.render("home", { url: url });
  });
});

app.post("/addurl", (req, res) => {
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

app.get(`/shorturl/:id`, (req, res) => {
  URL.findById({ _id: req.params.id }).then((result) => {
    res.render("shorturl", { url: result });
  });
});

app.get("/:id", (req, res) => {
  if (req.params.id=== null) {
    
  }
  else{
    URL.findOneAndUpdate(
      { ShortUrl: req.params.id },
      {
        $inc: { Clicks: 1 },
      }
    ).then((result) => {
      res.redirect(result.FullUrl);
    });
  }
});

mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
});
