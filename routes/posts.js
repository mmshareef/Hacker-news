const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");
const mongoose = require("mongoose");
router.get("/posts",(request,response)=>{
    response.render("posts")
})

router.post("/posts", (request, response) => {
    const { title, Url, content } = request.body;
    const newPost = new Posts({
      title: title,
      Url: Url,
      content: content,
    });
    newPost
      .save()
      .then(() => {
        response.redirect("/");
      })
      .catch((error) => console.log(error));
  });
  module.exports = router;