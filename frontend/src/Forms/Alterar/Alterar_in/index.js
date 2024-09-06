import { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Alterar_in() {
    const [codigo, setcodigo] = useState('');
    const [veiculo, setveiculo] = useState('');
    const [motorista, setmotorista] = useState('');
    const [data_hora, setdata_hora] = useState('');
    const [quilometragem, setquilometragem] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const EntrData = {
            codigo,
            veiculo,
            motorista,
            data_hora,
            quilometragem
            
        };

        try {
            const response = await fetch('http://localhost:3036/api/entrada/alterar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(EntrData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Dados de Entrada alterada com sucesso!');
            }

        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao alterar os dados da entrada.');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Alterar dados da Entrada:</h2>
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Código:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={codigo}
                        onChange={e => setcodigo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Código do Veículo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={veiculo}
                        onChange={e => setveiculo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Código do Motorista:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={motorista}
                        onChange={e => setmotorista(e.target.value)}
                    />
                </div>
                <div>
                    <label>Data:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 2020-10-05"
                        required="required"
                        value={data_hora}
                        onChange={e => setdata_hora(e.target.value)}
                    />
            
                </div>
                <div>
                    <label>quilometragem:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 100.000"
                        required="required"
                        value={quilometragem}
                        onChange={e => setquilometragem(e.target.value)}
                    />
            
                </div>
                <div>
                    <button type="submit">Alterar</button>
                </div>
            </form>
        </section>
    );
}

export default Alterar_in;
