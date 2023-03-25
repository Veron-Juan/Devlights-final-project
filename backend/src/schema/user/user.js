import {Schema,  model} from "mongoose"

const UserSchema = new Schema(
    {   
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
          },

        name:{
            required:true,
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: {
            args: [3, 50],
            msg: "No es un nombre valido",
      },
    },
            
    },


        lname:{
            required:true,
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: {
            args: [3, 50],
            msg: "No es un apellido valido",
            },
        },
    },
        email:{
            required:true,
            unique:true,
            allowNull:false,
            type:DataTypes.String,
            validate:{
                idEmail:{
                    msg:"No es un email valido",
                },
            },
        },
        password:{
            required:true,
            type:String,
        },
        repassword:{
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