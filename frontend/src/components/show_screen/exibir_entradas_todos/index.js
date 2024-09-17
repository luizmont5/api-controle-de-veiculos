import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../show_screen.css';

// Função para formatar a data no formato dia/mês/ano 00:00:00
const formatarData = (dataISO) => {
  const data = new Date(dataISO);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses começam do zero
  const ano = data.getFullYear();

  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  const segundos = String(data.getSeconds()).padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
};

const EntradasList = () => {
  const [entradas, setEntradas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEntradas = async () => {
    try {
      const response = await axios.get('http://localhost:3036/api/entradas');  // Ajuste para a URL correta
      console.log(response.data);
      if (response.data && response.data.result) {
        setEntradas(response.data.result);
      } else {
        setError('Erro: Estrutura de dados inesperada.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados das entradas', error);
      setError('Erro ao buscar dados das entradas');
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
            <th>Código de Entrada:</th>
            <th>Código do Veículo:</th>
            <th>Código do Motorista:</th>
            <th>Quilometragem de Entrada:</th>
          </tr>
        </thead>
        <tbody>
          {entradas.map((entrada) => (
            <tr key={entrada.codigo}>
              <td>{formatarData(entrada.data)}</td> {/* Formatação da data */}
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
