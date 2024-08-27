import styles from "./Form.module.css";

function Formulario_entrada() {
   
    return(
        <section className={styles.container}>
            <h2>Registro de Entrada:</h2>
            <form>
                <div>
                    <label>Veiculo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Mobi"
                        required="required"
                    />
                </div>
                <div>
                <label>Motorista:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Luiz Fernando"
                        required="required"
                    /> 
                </div>
                <div>

                </div>
                <div>
                <label>data e hora:</label>
                    <input
                        type="date_time"
                        placeholder="Ex.: 01/01/2024"
                        required="required"
                    /> 
                </div>
                <div>

                <label>quilometragem:</label>
                    <input
                        type="int"
                        placeholder="Ex.: 100.000"
                        required="required"
                    /> 
                </div>
                <div>
                    <button>registrar</button>
                </div>
            </form>
           
        </section>
    );
}

export default Formulario_entrada;
