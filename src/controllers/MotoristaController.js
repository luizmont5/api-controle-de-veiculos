const MotoristaService = require('../services/MotoristaService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let motoristas = await MotoristaService.buscarTodos();

        for(let i in motoristas){
            json.result.push({
                codigo: motoristas[i].id_mot,
                nome: motoristas[i].nome,
                cpf: motoristas[i].cpf,
                cnh: motoristas[i].cnh
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.id_mot; //para pegar o parametro
        let motoristas = await MotoristaService.buscarUm(codigo);

        if(motoristas){
            json.result = motoristas; //se tiver nota ele joga no json
        }else{
            json.error = 'motorista não encontrado';
        }

        res.json(json);

    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let cnh = req.body.cnh;
       
        console.log("Dados recebidos:", { nome, cpf, cnh });

        if (nome && cpf && cnh){
            let MotCodigo = await MotoristaService.inserir(nome, cpf,cnh);
            json.result = {
                codigo: MotCodigo,
                nome,
                cpf,
                cnh,
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let id_mot = req.body.id_mot;
        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let cnh = req.body.cnh;
        
        console.log("Dados recebidos:", { id_mot,nome, cpf, cnh });
        if (id_mot && nome && cpf && cnh){
            await MotoristaService.alterar(id_mot, nome, cpf, cnh);
            json.result = {
                id_mot,
                nome,
                cpf,
                cnh,
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};
    
        const id_mot = req.body.id_mot; // Certifica-se de que o identificador está correto
    
        if (id_mot) {
            await MotoristaService.excluir(id_mot);
            json.result = "Motorista removido com sucesso!";
        } else {
            json.error = 'ID do motorista não fornecido';
        }
    
        res.json(json);
    }
    
}


