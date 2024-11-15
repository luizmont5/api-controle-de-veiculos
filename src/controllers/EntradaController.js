const EntradaService = require('../services/EntradaService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let entradas = await EntradaService.buscarTodos();

        for(let i in entradas){
            json.result.push({
                codigo: entradas[i].id_in,
                veiculo: entradas[i].veiculo_id,
                motorista: entradas[i].motorista_id,
                data: entradas[i].data_hora,
                quilometragem: entradas[i].quilometragem_in

            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.id_in; //para pegar o parametro
        let entradas = await EntradaService.buscarUm(codigo);

        if(entradas){
            json.result = entradas; //se tiver nota ele joga no json
        }else{
            json.error = 'entrada não encontrada';
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
                let EntCodigo = await EntradaService.inserir(veiculo, motorista, data, quilometragem);
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
                await EntradaService.alterar(codigo, veiculo, motorista, data, quilometragem);
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
                let result = await EntradaService.excluir(codigo);  // Passamos o campo `codigo` aqui
    
                if (result.affectedRows > 0) {
                    json.result = 'Entrada removida com sucesso!';
                } else {
                    json.error = 'Entrada não encontrada.';
                }
            } catch (error) {
                json.error = 'Erro ao remover a entrada: ' + error.message;
            }
        } else {
            json.error = 'Código não fornecido.';
        }
    
        res.json(json);
    },
    
}


