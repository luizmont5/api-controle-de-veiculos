import styles from "./Form.module.css";

function Formulario_usuario() {
   
    return(
        <section className={styles.container}>
            <h2>Login:</h2>
            <form>
                <div>
                    <label>Usuário:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Luiz_Fernando"
                        required="required"
                    />
                </div>
                <div>
                <label>Senha:</label>
                    <input
                        type="password"
                        placeholder="Ex.: senha123"
                        required="required"
                    /> 
                </div>
                <div>
                    <button>entrar</button>
                </div>
            </form>
           
        </section>
    );
}

export default Formulario_usuario;
