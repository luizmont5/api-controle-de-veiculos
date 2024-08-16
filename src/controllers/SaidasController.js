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

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await SaidaService.excluir(req.params.id_out);
        
        res.json(json);
    },
}


