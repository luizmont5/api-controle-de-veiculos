const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM motoristas', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM motoristas WHERE id_mot = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (nome, cpf, cnh)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO motoristas (nome, cpf, cnh) VALUES (?, ?, ?)',
                [nome, cpf, cnh],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertCodigo); //insertId
                }
            );
        });
    },
    alterar:(codigo, nome, cpf, cnh)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE motoristas SET nome = ?, cpf = ?, cnh = ? WHERE id_mot = ?',
                [nome, cpf, cnh, codigo],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM motoristas WHERE id_mot = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};


