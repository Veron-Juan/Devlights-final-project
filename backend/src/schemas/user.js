import mongoose, { Schema }  from "mongoose";

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        require:true,
    },
    fecha_nac:{
        type: Date,
        require: true,
    },
    direccion:{
        descripcion: String,
        ciudad: String,
        provincia: String,
    },
    telefono:{
        type: Number
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >= 8;
            },
            'El password deberia de ser tener al menos 8 caracteres '],
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true,
});



const userModel = mongoose.model("User", userSchema);

export default userModel;