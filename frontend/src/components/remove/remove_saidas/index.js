import { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Remover_Saida() {
    const [codigo, removeSaida] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const SaidData = {
            codigo
        };

        try {
            const response = await fetch('http://localhost:3036/api/saida/remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(SaidData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Saída removida com sucesso!');
            }

        } catch (error) {
            console.error('Erro', error);
            alert('Erro ao remover a Saída.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Remover saida:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Codigo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={codigo}
                        onChange={e => removeSaida(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Remover</button>
                </div>
            </form>
        </section>
    );
}

export default Remover_Saida;
