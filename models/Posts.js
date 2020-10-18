const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
    title : {
        type : String, 
        require : true
    },
    Url : {
        type : String,
    },
    content : {
        type : String,
        require : true
    }
    
})
const Posts = mongoose.model("Posts",PostSchema)
module.exports = Posts