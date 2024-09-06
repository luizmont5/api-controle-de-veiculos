import { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Alterar_mot() {
    const [id_mot, setid_mot] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnh, setCnh] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const motData = {
            id_mot,
            nome,
            cpf,
            cnh
            
        };

        try {
            const response = await fetch('http://localhost:3036/api/motorista/alterar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(motData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Dados do motorista alterado com sucesso!');
            }

        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao alterar os dados do motorista.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Alterar dados do Motorista:</h2>
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Código:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={id_mot}
                        onChange={e => setid_mot(e.target.value)}
                    />
                </div>
                <div>
                    <label>Motorista:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Luiz Fernando"
                        required="required"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label>CPF:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 123.456.789-10"
                        required="required"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                </div>
                <div>
                    <label>CNH:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 65179100492"
                        required="required"
                        value={cnh}
                        onChange={e => setCnh(e.target.value)}
                    />
            
                </div>
                <div>
                    <button type="submit">Alterar</button>
                </div>
            </form>
        </section>
    );
}

export default Alterar_mot;
