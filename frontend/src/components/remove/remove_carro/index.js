import { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Remover_carro() {
    const [codigo, removeCarro] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const carroData = {
            codigo
        };

        try {
            const response = await fetch('http://localhost:3036/api/carro/remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carroData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Veículo removido com sucesso!');
            }

        } catch (error) {
            console.error('Erro', error);
            alert('Erro ao remover o veículo.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Remover veículo:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Codigo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={codigo}
                        onChange={e => removeCarro(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Remover</button>
                </div>
            </form>
        </section>
    );
}

export default Remover_carro;
