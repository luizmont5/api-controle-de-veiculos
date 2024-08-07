const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM veiculos', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM veiculos WHERE codigo = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (placa, marca, modelo, ano, quilometragem)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO veiculos (placa, marca, modelo, ano, quilometragem ) VALUES (?, ?, ?, ?, ?)',
                [placa, marca, modelo, ano, quilometragem],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertCodigo); //insertId
                }
            );
        });
    },
    alterar:(codigo, placa, marca, modelo, ano)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE veiculos SET placa = ? ,marca = ?, modelo = ?, ano = ? WHERE codigo = ?',
                [placa, marca, modelo,ano , codigo],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM veiculos WHERE codigo = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};


