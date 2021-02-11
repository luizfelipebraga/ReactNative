import express from 'express';
import db from './database/connection';

//transformando em uma variável manipulável
const routes = express.Router();
//trasformamos nossa função em async
routes.get('/clientes', async (request, response) => {
    const dataBase = await db;
    //pq a requicição para o db precisa ser await, para nossa aplicação poder esperar acontecer, e jogamos em uma variável tbm
    dataBase.serialize(() => {
        //aqui que estamos fazendo a busca no db e mostrando, no console
        dataBase.each('SELECT * FROM clientes', function (err: { message: any; }, row: any) {
            //tratativa de erros
            if (err) {
                console.error(err.message);
            }
            //vai retornar tudo que temos no banco de dados
            console.log(row)
        });
        //mostrar uma mensagem de ‘ok’
        return response.send(200)
    });
});


routes.post('/novocliente', async (request, response) => {
    //uma nova rota
    const dataBase = await db;
    dataBase.run(`INSERT INTO clientes (name, telefone, cep, n_casa) VALUES(?,?,?,?)`, [
        `${request.body.name}`, `${request.body.telefone}`, `${request.body.cep}`, `${request.body.n_casa}`], function (err: { message: any; }, row: any) {
            // nessa parte estamos escrevendo sqlite e usando concatenação de strings para podermos jogar as variaveis do corpo no lugar as interrogações no comando SQLite
            if (err) {//tratativa de erro
                console.error(err.message);
            }
            console.log(row);
            return response.send(200)//resposta ok
        });
});
export default routes;