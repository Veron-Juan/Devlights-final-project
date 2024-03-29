import { Schema, model } from "mongoose";
const postSchema = new Schema({
    //nombre de mascota
    name:{
        type: String, 
    },
    contact:{
        type:Number,
    },
    location:{
        type:String,
    },
    description:{
        type:String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    petType:{
        type: String,
    },
    user_id:
    {
        type: String,
    },
    user_id:
    {
        type: String,
    },
    nameUser: {
      type: String,
    },
    lastnameUser:
    {
        type: String,
    },
    latitude:{
        type: Number,
    },
    longitude:{
        type: Number,
    },
    status:{
        type: String,
    }


},
{
    timestamps:true,
    versionKey:false
}
)
const PostModel = model('posts', postSchema);
export default PostModel