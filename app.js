const express=require("express");
const mongoose=require("mongoose");
const morgan = require('morgan')
require('dotenv').config();
const app=express();
const PORT=process.env.PORT || 1234;
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use("/",require("./routes/url"));

mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
});
