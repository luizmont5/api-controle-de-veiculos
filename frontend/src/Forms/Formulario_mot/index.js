import styles from "./Form.module.css";

function Formulario_mot() {
   
    return(
        <section className={styles.container}>
            <h2>Cadastro de Motorista:</h2>
            <form>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Luiz Fernando"
                        required="required"
                    />
                </div>
                <div>
                <label>CPF:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 123.456.789-10"
                        required="required"
                    />
                </div>
                <div>
                <label>CNH:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 65179100492"
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

export default Formulario_mot;
