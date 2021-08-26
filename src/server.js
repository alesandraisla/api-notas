import express from 'express';
// import average from './helpers/average.js';
import routes from './routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dbOptions from './config/db.options.js';
dotenv.config();

const server = express();

mongoose.connect(process.env.DATABASE_URL, dbOptions);

server.use(express.json());
server.use(routes);

const database = mongoose.connection;

//Tratativas 
database.on('open', () => {
    console.log('Database foi conectada!!!');
});

database.on('error', () => {
    console.log('Erro na conexão da database');
})

//Resposta que será visualizada
server.listen(3002, () => {
    console.log('Server is running');
})