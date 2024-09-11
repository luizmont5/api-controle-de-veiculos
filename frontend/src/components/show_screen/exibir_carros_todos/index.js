import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../show_screen.css';


const VeiculosList = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVeiculos = async () => {
    try {
      const response = await axios.get('http://localhost:3036/api/carros');  // Ajuste para a URL correta
      console.log(response.data);
      if (response.data && response.data.result) {
        setVeiculos(response.data.result);
      } else {
        setError('Erro: Estrutura de dados inesperada.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados dos veículos:', error);
      setError('Erro ao buscar dados dos veículos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVeiculos();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Veículos</h1>
      <table>
        <thead>
          <tr>
            <th>Código:</th>
            <th>Placa:</th>
            <th>Marca:</th>
            <th>Modelo:</th>
            <th>Ano:</th>
            <th>Quilometragem:</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo) => (
            <tr key={veiculo.codigo}>
              <td>{veiculo.codigo}</td>
              <td>{veiculo.placa}</td>
              <td>{veiculo.marca}</td>
              <td>{veiculo.descricao}</td>
              <td>{veiculo.ano}</td>
              <td>{veiculo.quilometragem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VeiculosList;
