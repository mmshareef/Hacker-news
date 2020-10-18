const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts")
router.get("/", (req, res) => {
    Posts.find({})
      .exec((error, data) => {
        if (error) throw error;
        res.render("index", { posts: data });
      });
  });
module.exports = router;

