import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../show_screen.css';

const MotoristasList = () => {
  const [motoristas, setMotoristas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMotoristas = async () => {
    try {
      const response = await axios.get('http://localhost:3036/api/motoristas');  // Ajuste para a URL correta
      console.log(response.data);
      if (response.data && response.data.result) {
        setMotoristas(response.data.result);
      } else {
        setError('Erro: Estrutura de dados inesperada.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados dos motoristas:', error);
      setError('Erro ao buscar dados dos motoristas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMotoristas();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Motoristas</h1>
      <table>
        <thead>
          <tr>
            <th>Código:</th>
            <th>Nome:</th>
            <th>CPF:</th>
            <th>CNH:</th>
          </tr>
        </thead>
        <tbody>
          {motoristas.map((motorista) => (
            <tr key={motorista.codigo}>
              <td>{motorista.codigo}</td>
              <td>{motorista.nome}</td>
              <td>{motorista.cpf}</td>
              <td>{motorista.cnh}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MotoristasList;
