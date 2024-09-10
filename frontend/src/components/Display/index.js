import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Display.module.css";

function Display() {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate('/cadastro/veic')}>Cadastro veículos</button>
      <button className={styles.button} onClick={() => navigate('/cadastro/mot')}>Cadastro Motoristas</button>
      <button className={styles.button} onClick={() => navigate('/registro/in')}>Registrar Entrada</button>
      <button className={styles.button} onClick={() => navigate('/registro/out')}>Registrar Saída</button>
      <button className={styles.button} onClick={() => navigate('/alterar/carro')}>Alterar veículo</button>
      <button className={styles.button} onClick={() => navigate('/alterar/mot')}>Alterar Motorista</button>
      <button className={styles.button} onClick={() => navigate('/alterar/entr')}>Alterar Entrada</button>
      <button className={styles.button} onClick={() => navigate('/alterar/said')}>Alterar Saída</button>
      <button className={styles.button} onClick={() => navigate('/exibir')}>Exibir Veículos</button>
    </div>
  );
};

export default Display;
