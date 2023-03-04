import mongoose, { Schema }  from "mongoose";

const postSchema = new Schema({
    autor:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    post:{
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        require: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    contenido: {
        type: String,
        required: true,
    },
    imagen_url: {
        type: String,
        required: true,
    },
    fecha_creado: {
        type: Date,
        default: Date.now,
    },
    fecha_editado: {
        type: Date,
        default: Date.now,
    },
}, {
    versionKey: false,
    timestamps: true,
});

const postModel = mongoose.model("Post", postSchema);

export default postModel;