import { useState } from 'react';
import styles from "../../Forms/Form.module.css";

function Formulario_carro() {
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [quilometragem, setQuilometragem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const carroData = {
            placa,
            marca,
            modelo,
            ano,
            quilometragem
        };

        try {
            const response = await fetch('http://localhost:3036/api/carro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carroData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Veículo cadastrado com sucesso!');
            }

        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao cadastrar o veículo.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Cadastro de veículo:</h2>
            <form onSubmit={handleSubmit}>
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
                    <label>Quilometragem:</label>
                    <input
                        type="number"
                        placeholder="Ex.: 100.000"
                        required="required"
                        value={quilometragem}
                        onChange={e => setQuilometragem(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </section>
    );
}

export default Formulario_carro;
