import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../show_screen.css';

const EntradasList = () => {
  const [entradas, setentradas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEntradas = async () => {
    try {
      const response = await axios.get('http://localhost:3036/api/entradas');  // Ajuste para a URL correta
      console.log(response.data);
      if (response.data && response.data.result) {
        setentradas(response.data.result);
      } else {
        setError('Erro: Estrutura de dados inesperada.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados das Entradas', error);
      setError('Erro ao buscar dados das Entradas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntradas();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de entradas</h1>
      <table>
        <thead>
          <tr>
            <th>Data e Hora:</th>
            <th>Código de Saída:</th>
            <th>Código do Veículo:</th>
            <th>Código do Motorista:</th>
            <th>Quilometragem de Entrada:</th>
          </tr>
        </thead>
        <tbody>
          {entradas.map((entrada) => (
            <tr key={entrada.codigo}>
              <td>{entrada.data}</td>
              <td>{entrada.codigo}</td>
              <td>{entrada.veiculo}</td>
              <td>{entrada.motorista}</td>
              <td>{entrada.quilometragem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntradasList;
