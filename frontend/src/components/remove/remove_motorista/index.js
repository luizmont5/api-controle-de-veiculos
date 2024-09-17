import React, { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Remover_motorista() {
    const [codigo, setCodigo] = useState(''); // Renomeei a função para mais clareza

    const handleSubmit = async (e) => {
        e.preventDefault();

        const motoristaData = {
            id_mot: codigo // Envia o id_mot em vez de codigo
        };

        try {
            const response = await fetch('http://localhost:3036/api/motorista/remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(motoristaData), // Envia o motoristaData corretamente
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Motorista removido com sucesso!');
            }

        } catch (error) {
            console.error('Erro', error);
            alert('Erro ao remover o Motorista.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Remover Motorista:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Codigo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required
                        value={codigo}
                        onChange={e => setCodigo(e.target.value)} // Renomeado para consistência
                    />
                </div>
                <div>
                    <button type="submit">Remover</button>
                </div>
            </form>
        </section>
    );
}

export default Remover_motorista;
