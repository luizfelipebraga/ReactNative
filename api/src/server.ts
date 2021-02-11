import express from 'express';
import routes from './routes';
// importar as rotas para caso tenha erro com ela, podedeixa-la comentada e depois, antes de rodar o get, venha e descomente
import cors from 'cors';
//importar o cors para nossa aplicação ser visível por outros fronts-end

//transformar o express() em uma variável manipulvel
const app = express(); 
//falar para express usar o cors
app.use(cors()); 
//falar para express usar json
app.use(express.json()); 
//caso de erro n início, comente tbm //falar para express usar as rotas
app.use(routes); 
//falar para express usar ouvir a porta 3333, podemos usar qualquerporta
app.listen(3333); 
//localhost:3333

