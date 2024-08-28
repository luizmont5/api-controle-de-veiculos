const CarroService = require('../services/CarroService');


module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let veiculos = await CarroService.buscarTodos();

        for(let i in veiculos){
            json.result.push({
                codigo: veiculos[i].codigo,
                descricao: veiculos[i].modelo
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo; //para pegar o parametro
        let veiculos = await CarroService.buscarUm(codigo);

        if(veiculos){
            json.result = veiculos; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};
    
        let placa = req.body.placa;
        let marca = req.body.marca;
        let modelo = req.body.modelo;
        let ano = req.body.ano;
        let quilometragem = req.body.quilometragem;
    
        console.log("Dados recebidos:", { placa, marca, modelo, ano, quilometragem });
    
        if (modelo && placa){
            let CarroCodigo = await CarroService.inserir(placa, marca, modelo, ano, quilometragem);
            json.result = {
                codigo: CarroCodigo,
                placa,
                marca,
                modelo,
                ano,
                quilometragem
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let placa = req.body.placa;
        let marca = req.body.marca;
        let modelo = req.body.modelo;
        let ano = req.body.ano;
        
        if (codigo && placa && marca && modelo && ano){
            await CarroService.alterar(codigo, placa, marca, modelo, ano);
            json.result = {
                codigo,
                placa,
                marca,
                modelo,
                ano
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.codigo);
        
        res.json(json);
    },
}


