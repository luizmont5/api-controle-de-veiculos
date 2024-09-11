import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../show_screen.css';

const SaidasList = () => {
  const [saidas, setsaidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSaidas = async () => {
    try {
      const response = await axios.get('http://localhost:3036/api/saidas');  // Ajuste para a URL correta
      console.log(response.data);
      if (response.data && response.data.result) {
        setsaidas(response.data.result);
      } else {
        setError('Erro: Estrutura de dados inesperada.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados das Saidas', error);
      setError('Erro ao buscar dados das Saidas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSaidas();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Saidas</h1>
      <table>
        <thead>
          <tr>
          <th>Data e Hora:</th>
            <th>Código da Saída:</th>
            <th>Código do Veículo:</th>
            <th>Código do Motorista:</th>
            <th>Quilometragem de Saída:</th>
          </tr>
        </thead>
        <tbody>
          {saidas.map((saida) => (
            <tr key={saida.codigo}>
              <td>{saida.data}</td>
              <td>{saida.codigo}</td>
              <td>{saida.veiculo}</td>
              <td>{saida.motorista}</td>
              <td>{saida.quilometragem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaidasList;
