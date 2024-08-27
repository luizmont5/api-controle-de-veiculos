import styles from "./Form.module.css";

function Formulario_carro() {
   
    return(
        <section className={styles.container}>
            <h2>Cadastro de veículo:</h2>
            <form>
                <div>
                    <label>Placa:</label>
                    <input
                        type="text"
                        placeholder="Ex.: ABC-1D34"
                        required="required"
                    />
                </div>
                <div>
                <label>Marca:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Fiat"
                        required="required"
                    />
                </div>
                <div>
                <label>Modelo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Argo"
                        required="required"
                    />
                </div>
                <div>
                <label>Ano:</label>
                    <input
                        type="number"
                        placeholder="Ex.: 2024"
                        required="required"
                    />
                </div>
                <div>
                <label>Quilometragem:</label>
                    <input
                        type= "number"
                        placeholder="Ex.: 100.000"
                        required="required"
                    />
                    
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
           
        </section>
    );
}

export default Formulario_carro;
