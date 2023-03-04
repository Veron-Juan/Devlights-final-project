import mongoose, { Schema }  from "mongoose";

const entradachema = new Schema({
    autor:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    fecha_creado: {
        type: Date,
        default: Date.now,
    },
    fecha_editado: {
        type: Date,
        default: Date.now,
    },
    contenido: {
        type: String,
        required: true,
    },
    imagen_url: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});

const entradaModel = mongoose.model("Entrada", entradaSchema);

export default entradaModel;