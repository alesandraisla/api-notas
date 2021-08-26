import Student from "../models/Student.js";
import average from "../helpers/average.js";

//Inserir um dado
const create = async (req, res) => {
    const { nome, disciplina, nota1, nota2, nota3, nota4 } = req.body;
    const media = await average(req.body);
    const toSave = await Student.create( {
        nome, 
        disciplina,
        nota1,
        nota2,
        nota3,
        nota4,
        media
    })
    return res.json(toSave);
}

//Procurar por todos
const findAll = async (req, res) => {
    const response = await Student.find();
    return res.json(response);
}

//Procurar pelo id
const findById = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findOne({ _id: id });
    return res.json(student);
}

const update = async (req, res) => {
    const { id } = req.params;
    const { nome, disciplina, nota1, nota2, nota3, nota4 }= req.body;
    const media = await average(req.body);
    const update = await Student.updateOne({_id: id }, {
        nome,
        disciplina,
        nota1,
        nota2,
        nota3,
        nota4,
        media
    });
    return res.json({message: 'Atualizado com sucesso!!!'})
}

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    await Student.deleteOne({ _id: id });
    return res.json({message: 'Deletado!!!'});
} 

export default { create, findAll, findById, update, deleteStudent };