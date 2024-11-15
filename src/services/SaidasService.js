const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM saidas', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM saidas WHERE id_out = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (veiculo, motorista, dataHora, quilometragem) => {
        return new Promise((aceito, rejeitado) => {
            // Converte data e hora de "dia-mês-ano hora:minuto:segundo" para "ano-mês-dia hora:minuto:segundo"
            const [data, hora] = dataHora.split(' '); // Separa a data do horário
            const [dia, mes, ano] = data.split('-'); // Separa dia, mês e ano
            const dataConvertida = `${ano}-${mes}-${dia} ${hora}`; // Concatena a data convertida com o horário

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
                        [veiculo, motorista, dataConvertida, quilometragem],
                        (error, results) => {
                            if (error) { rejeitado(new Error('Erro ao inserir saída: ' + error.message)); return; }
                            aceito(results.insertCodigo);
                        }
                    );
                });
            });
        });
    },

    alterar: (codigo, veiculo, motorista, dataHora, quilometragem) => {
        return new Promise((aceito, rejeitado) => {
            // Converte data e hora de "dia-mês-ano hora:minuto:segundo" para "ano-mês-dia hora:minuto:segundo"
            const [data, hora] = dataHora.split(' '); // Separa a data do horário
            const [dia, mes, ano] = data.split('-'); // Separa dia, mês e ano
            const dataConvertida = `${ano}-${mes}-${dia} ${hora}`; // Concatena a data convertida com o horário

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

                    // Altera os dados na tabela saidas
                    db.query('UPDATE saidas SET veiculos_id = ?, motoristas_id = ?, data_hora = ?, quilometragem_out = ? WHERE id_out = ?',
                        [veiculo, motorista, dataConvertida, quilometragem, codigo],
                        (error, results) => {
                            if (error) { rejeitado(new Error('Erro ao alterar saída: ' + error.message)); return; }
                            aceito(results.affectedRows); // Retorna o número de linhas afetadas
                        }
                    );
                });
            });
        });
    },

    excluir: (id_mot) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM motoristas WHERE id_mot = ?', [id_mot], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);  // Retorna o resultado da operação de exclusão
            });
        });
    }
};