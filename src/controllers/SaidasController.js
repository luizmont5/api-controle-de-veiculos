const SaidasService = require('../services/SaidasService');
const SaidaService = require('../services/SaidasService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let saidas = await SaidaService.buscarTodos();

        for(let i in saidas){
            json.result.push({
                codigo: saidas[i].id_out,
                veiculo: saidas[i].veiculos_id,
                motorista: saidas[i].motoristas_id,
                data: saidas[i].data_hora,
                quilometragem: saidas[i].quilometragem_out

            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.id_out; //para pegar o parametro
        let saidas = await SaidaService.buscarUm(codigo);

        if(saidas){
            json.result = saidas; //se tiver nota ele joga no json
        }else{
            json.error = 'saida não encontrada';
        }

        res.json(json);

    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };
    
        let veiculo = req.body.veiculo;
        let motorista = req.body.motorista;
        let data = req.body.data_hora;
        let quilometragem = req.body.quilometragem;
        console.log("Dados recebidos:", { veiculo, motorista, data, quilometragem });

        if (veiculo && motorista && data && quilometragem) {
            try {
                let EntCodigo = await SaidaService.inserir(veiculo, motorista, data, quilometragem);
                json.result = {
                    codigo: EntCodigo,
                    veiculo,
                    motorista,
                    data,
                    quilometragem,
                };
            } catch (error) {
                json.error = error.message;
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} };
    
        let codigo = req.body.codigo;
        let veiculo = req.body.veiculo;
        let motorista = req.body.motorista;
        let data = req.body.data_hora;
        let quilometragem = req.body.quilometragem;
        
        console.log("Dados recebidos:", { codigo,veiculo, motorista, data, quilometragem });
        if (codigo && (veiculo || motorista || data || quilometragem)) {
            try {
                await SaidaService.alterar(codigo, veiculo, motorista, data, quilometragem);
                json.result = {
            
                    veiculo,
                    motorista,
                    data,
                    quilometragem
                };
            } catch (error) {
                json.error = error.message; // Captura o erro vindo do service e envia a mensagem
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: '', result: {} };
    
        const { codigo } = req.body;  // Aqui garantimos que o código recebido seja o campo correto
    
        if (codigo) {
            try {
                let result = await SaidasService.excluir(codigo);  // Passamos o campo `codigo` aqui
    
                if (result.affectedRows > 0) {
                    json.result = 'Saída removida com sucesso!';
                } else {
                    json.error = 'Saída não encontrada.';
                }
            } catch (error) {
                json.error = 'Erro ao remover a Saída: ' + error.message;
            }
        } else {
            json.error = 'Código não fornecido.';
        }
    
        res.json(json);
    },
}


