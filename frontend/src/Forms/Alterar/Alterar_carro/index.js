import { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Alterar_carro() {
    const [codigo, setCodigo] = useState('');
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const carroData = {
            codigo,
            placa,
            marca,
            modelo,
            ano
            
        };

        try {
            const response = await fetch('http://localhost:3036/api/carro/alterar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carroData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Dados do veículo alterado com sucesso!');
            }

        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao alterar os dados do veículo.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Alterar dados do veículo:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Código:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={codigo}
                        onChange={e => setCodigo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Placa:</label>
                    <input
                        type="text"
                        placeholder="Ex.: ABC-1D34"
                        required="required"
                        value={placa}
                        onChange={e => setPlaca(e.target.value)}
                    />
                </div>
                <div>
                    <label>Marca:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Fiat"
                        required="required"
                        value={marca}
                        onChange={e => setMarca(e.target.value)}
                    />
                </div>
                <div>
                    <label>Modelo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: Argo"
                        required="required"
                        value={modelo}
                        onChange={e => setModelo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Ano:</label>
                    <input
                        type="number"
                        placeholder="Ex.: 2024"
                        required="required"
                        value={ano}
                        onChange={e => setAno(e.target.value)}
                    />
                </div>
                <div>
                    
                    <button type="submit">Alterar</button>
                </div>
            </form>
        </section>
    );
}

export default Alterar_carro;
