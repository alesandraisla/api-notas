import express from 'express';
import studentController from './controller/student.controller.js';
import auth from './middlewares/auth.middlewares.js';
import userController from './controller/user.controller.js';

const routes = express.Router();


routes.post('/login', userController.createMasterUser);

//Buscando Dados
// routes.get('/student', (req, res) => {
//     return res.json(studentGrade);
// })

routes.get('/student', auth, studentController.findAll);

// routes.get('/student/:id', (req, res) => {
//     const { id } = req.params;
//     const indexStudent = studentGrade.findIndex(item => item.id === id);
//     const student = studentGrade[indexStudent];
//     return res.json(student);
// })

routes.get('/student/:id', auth, studentController.findById);

// Adicionando Dados
// routes.post('/student', (req, res) => {
//     const { nome, disciplina, nota1, nota2, nota3, nota4 } = req.body;
//     const media = average(req.body);
//     const saveStudent = {
//         id: uuidV4(),
//         nome,
//         disciplina, 
//         nota1, 
//         nota2,
//         nota3,
//         nota4,
//         media,
//     };
//     studentGrade.push(saveStudent);
//     return res.json(saveStudent);
// })

routes.post('/student', studentController.create);
// Atualizar Dados
// routes.put('/student/:id', (req, res) => {
//     const { id } = req.params;
//     const { nome , disciplina, nota1, nota2, nota3, nota4 } = req.body;
//     const media = average(req.body);

//     const indexStudent = studentGrade.findIndex(item => item.id === id);
//     const toUpdate = { id, nome, disciplina, nota1, nota2, nota3, nota4, media};
//     studentGrade[indexStudent] = toUpdate;
//     return res.json({message: 'Lançamento alterado!'});
// })

routes.put('/student/:id', auth, studentController.update);

// Deletar Dados
// routes.delete('/student/:id', (req, res) => {
//     const { id } = req.params;
//     const indexStudent = studentGrade.findIndex(item => item.id == id);
//     const justDelete = 1;
//     studentGrade.splice(indexStudent, justDelete);
//     return res.json({message: 'Lançamento deletado!'});
// })


routes.delete('/student/:id', auth, studentController.deleteStudent);

export default routes;
