import {Schema,  model} from "mongoose"

const UserSchema = new Schema(
    {   
        name:{
            required:true,
            type:String,
            
        },
        lastname:{
            required:true,
            type:String,
            
        },
        email:{
            required:true,
            unique:true,
            type:String,
        },
        password:{
            required:true,
            type:String,
        },
        
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const UserModel = model('users', UserSchema);
export default UserModel