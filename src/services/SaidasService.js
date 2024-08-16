const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM saidas', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM saidas WHERE id_out = ?', [codigo], (error, results) => {
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
    
                    // Insere os dados na tabela saidas
                    db.query('INSERT INTO saidas (veiculos_id, motoristas_id, data_hora, quilometragem_out) VALUES (?, ?, ?, ?)',
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
                if (error) {
                    rejeitado(new Error('Erro ao verificar veículo: ' + error.message));
                    return;
                }
                if (veiculoResults.length === 0) {
                    rejeitado(new Error('Veículo não encontrado'));
                    return;
                }
    
                // Verifica se o motorista existe
                db.query('SELECT id_mot FROM motoristas WHERE id_mot = ?', [motorista], (error, motoristaResults) => {
                    if (error) {
                        rejeitado(new Error('Erro ao verificar motorista: ' + error.message));
                        return;
                    }
                    if (motoristaResults.length === 0) {
                        rejeitado(new Error('Motorista não encontrado'));
                        return;
                    }
    
                    // Altera os dados na tabela saidas
                    db.query('UPDATE saidas SET veiculos_id = ?, motoristas_id = ?, data_hora = ?, quilometragem_out = ? WHERE id_out = ?',
                        [veiculo, motorista, data, quilometragem, codigo],
                        (error, results) => {
                            if (error) {
                                rejeitado(new Error('Erro ao alterar entrada: ' + error.message));
                                return;
                            }
                            aceito(results.affectedRows); // Atualizado para retornar o número de linhas afetadas
                        }
                    );
                });
            });
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM saidas WHERE id_out = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};


