//Importar as tecnologias necessárias, (express e sqlite)

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

//Criando o servidor e dizendo qual a porta dele
const app = express()
const port = 5000;

//Criando banco de dados e fazendo a tratativa de erros
const db = new sqlite3.Database('quiz.db', (erro)=>{
    if(erro){
        console.error('Erro na conexão com o banco de dados')
    }else{
        console.log('Conectado com sucesso ao banco de dados')
    }
});

//Configuração para permitir conexões JSON
app.use(express.json());


//Criando um tabela para armazenar as perguntas, ele é organizado pelo item da tabela em seguida do tipo que vai receber
db.run(`
CREATE TABLE IF NOT EXISTS perguntas(
    id INTEGER PRIMARY KEY,
    texto TEXT,
    opcaoA TEXT,
    opcaoB TEXT,
    opcaoC TEXT,
    opcaoD TEXT,
    resposta TEXT

)
`);


// Definindo a rota de onde estará a tabela
app.get('/perguntas', (req, res)=>{
    //Lógica para obter as perguntas
    db.all('SELECT * FROM perguntas', (erro, perguntas)=>{
        if (erro){
            res.status(500).json({error: 'Erro ao obter perguntas'});
        }else{
            res.json(perguntas);
        }
    });
});

//Iniciar o servidor
app.listen(port, ()=>{
    console.log(`O servidor está ouvindo a porta ${port}`)
})