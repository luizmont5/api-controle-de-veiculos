const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM entradas', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM entradas WHERE id_in = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (veiculo, motorista, data, quilometragem) => {
        return new Promise((aceito, rejeitado) => {
            // Verifica se o veículo existe
            db.query('SELECT codigo FROM veiculos WHERE codigo = ?', [veiculo], (error, veiculoResults) => {
                if (error) { rejeitado(new Error('Erro ao verificar veículo: ' + error.message)); return; }
                if (veiculoResults.length === 0) {
                    rejeitado(new Error('Veículo não encontrado'));
                    return;
                }
    
                // Verifica se o motorista existe
                db.query('SELECT id_mot FROM motoristas WHERE id_mot = ?', [motorista], (error, motoristaResults) => {
                    if (error) { rejeitado(new Error('Erro ao verificar motorista: ' + error.message)); return; }
                    if (motoristaResults.length === 0) {
                        rejeitado(new Error('Motorista não encontrado'));
                        return;
                    }
    
                    // Insere os dados na tabela entradas
                    db.query('INSERT INTO entradas (veiculo_id, motorista_id, data_hora, quilometragem_in) VALUES (?, ?, ?, ?)',
                        [veiculo, motorista, data, quilometragem],
                        (error, results) => {
                            if (error) { rejeitado(new Error('Erro ao inserir entrada: ' + error.message)); return; }
                            aceito(results.insertCodigo);
                        }
                    );
                });
            });
        });
    },
    
    
    alterar: (codigo, veiculo, motorista, data, quilometragem) => {
        return new Promise((aceito, rejeitado) => {
            // Verifica se o veículo existe
            db.query('SELECT codigo FROM veiculos WHERE codigo = ?', [veiculo], (error, veiculoResults) => {
                if (error) { rejeitado(new Error('Erro ao verificar veículo: ' + error.message)); return; }
                if (veiculoResults.length === 0) {
                    rejeitado(new Error('Veículo não encontrado'));
                    return;
                }
    
                // Verifica se o motorista existe
                db.query('SELECT id_mot FROM motoristas WHERE id_mot = ?', [motorista], (error, motoristaResults) => {
                    if (error) { rejeitado(new Error('Erro ao verificar motorista: ' + error.message)); return; }
                    if (motoristaResults.length === 0) {
                        rejeitado(new Error('Motorista não encontrado'));
                        return;
                    }
    
                    // altera os dados na tabela entradas
                    db.query('UPDATE entradas SET veiculo_id = ?, motorista_id = ?, data_hora = ?, quilometragem_in = ? WHERE id_in = ?',
                        [veiculo, motorista, data, quilometragem, codigo],
                        (error, results) => {
                            if (error) { rejeitado(new Error('Erro ao inserir entrada: ' + error.message)); return; }
                            aceito(results.insertCodigo);
                        }
                    );
                });
            });
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM entradas WHERE id_in = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};


