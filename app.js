if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
const express = require("express");
const app = express();
app.set("view engine","ejs");
//const bodyParser = require("body-parser")
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
const expressLayouts = require("express-ejs-layouts");

app.use("/",require("./routes/index")) 
app.use("/",require("./routes/posts"))

//MongoDb Configuration
 const mongoose = require("mongoose");
 mongoose.connect(process.env.DATABASE_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });
//MongoDb Connection
 const db = mongoose.connection;
 db.on("error", (error) => console.error(error));
 db.once("open", () => console.log("Connected to MongoDB"));

 //app.use(bodyParser());
 










app.listen(3000,()=>console.log("server started"))