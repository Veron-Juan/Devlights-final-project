import { Schema, model } from "mongoose";
const postSchema = new Schema({
    name:{
        type: String, 
    },
    contact:{
        type:Number,
    },
    location:{
        type:String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})
const PostModel = model('posts', postSchema);
export default PostModel

