import { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Remover_Entrada() {
    const [codigo, removeEntrada] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const entrData = {
            codigo
        };

        try {
            const response = await fetch('http://localhost:3036/api/entrada/remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entrData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Entrada removida com sucesso!');
            }

        } catch (error) {
            console.error('Erro', error);
            alert('Erro ao remover a Entrada.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Remover Entrada:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Codigo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={codigo}
                        onChange={e => removeEntrada(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Remover</button>
                </div>
            </form>
        </section>
    );
}

export default Remover_Entrada;
