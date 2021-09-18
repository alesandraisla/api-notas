import path from 'path';
import express from 'express';


const app = express();

app.use(express.json());
app.use(express.static(path.resolve('./public')));
app.set('views', path.resolve('./views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/calculator', (req, res) => {
    res.render('calculator');
})

app.listen(3006, (err) => {
    if(err) {
        console.log('Não foi possível iniciar o servidor.');
    } else {
        console.log('Servidor rodando com sucesso na portal 3006!');
    }
})