import mongoose, { Schema }  from "mongoose";

const petSchema = new Schema({
    propietario:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        enum: ['Macho','Hembra','Desconocido'],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    edad_aproximada: {
        type: Number,
        required: true,
        trim: true,
    },
    imagen_url: {
        type: String,
        required: true,
        trim: true,
    },
    conducta: {
        type: String,
        enum: ['Agresiva','Dócil','Asustadiza','Desconocida'],
        required: true,
    },
    localizacion_aproximada: {
        type: String,
        required: true,
    },
    estado:
        type: String,
        enum: ['Encondro','Perdido'],
        required: true,
}, {
    versionKey: false,
    timestamps: true,
});

const pettModel = mongoose.model("Pet", petSchema);

export default petModel;