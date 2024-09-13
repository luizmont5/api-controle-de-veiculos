import { useState } from 'react';
import styles from "../../../Forms/Form.module.css";

function Formulario_entrada() {
    const [veiculo, setVeiculo] = useState('');
    const [motorista, setMotorista] = useState('');
    const [data_hora, setData] = useState('');
    const [quilometragem, setQuilometragem] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const entrData = {
            veiculo,
            motorista,
            data_hora,
            quilometragem,
        };

        try {
            const response = await fetch('http://localhost:3036/api/entrada', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entrData),
            });

            const result = await response.json();

            if (result.error) {
                alert('Erro: ' + result.error);
            } else {
                alert('Entrada cadastrada com sucesso!');
            }

        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao cadastrar a entrada.');
        }
    };
   
    return (
        <section className={styles.container}>
            <h2>Registro de Entrada:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Código do Veiculo:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 18"
                        required="required"
                        value={veiculo}
                        onChange={e => setVeiculo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Código do Motorista:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 1"
                        required="required"
                        value={motorista}
                        onChange={e => setMotorista(e.target.value)}
                    />
                </div>
                <div>
                    <label>Data e Hora:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 12-12-2024 12:00 "
                        required="required"
                        value={data_hora}
                        onChange={e => setData(e.target.value)}
                    />
                </div>
                <div>
                    <label>Quilometragem de Entrada:</label>
                    <input
                        type="text"
                        placeholder="Ex.: 100.000 "
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

export default Formulario_entrada;
