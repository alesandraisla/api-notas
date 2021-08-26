import mongoose from "mongoose";

//Criação do esquema do banco de dados
const projectSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    disciplina: {
        type: String,
        required: true,
    },
    nota1: {
        type: Number,
        required: false,
    },
    nota2: {
        type: Number,
        required: false,
    },
    nota3: {
        type: Number,
        required: false,
    },
    nota4: {
        type: Number,
        required: false,
    },
    media: {
        type: Number,
        required: true,
    }
})

export default mongoose.model('projectSchema', projectSchema);