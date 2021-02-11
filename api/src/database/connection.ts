// aqui estamos pegando essa função que chamao BDe jogando em uma variável
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./src/database/clientes.sqlite", sqlite3.OPEN_READWRITE,
    (err: { message: any; }) => {
        //aqui estamos conectando com o BD
        //tentativa de erro
        if (err) { 
            console.error(err.message);
        }
        console.log('Connected to database.');
        console.log(db)
    });

export default db;//exportando o DB