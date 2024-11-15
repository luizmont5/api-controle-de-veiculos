import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Display.module.css";

function Display() {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
    <button className={styles.button} onClick={() => navigate('/cadastro/veic')}>Cadastro veículos</button>
    <button className={styles.button} onClick={() => navigate('/alterar/carro')}>Alterar veículo</button>
    <button className={styles.button} onClick={() => navigate('/exibir')}>Exibir Veículos</button>
    <button className={styles.button} onClick={() => navigate('/remover/carro')}>Remover veículo</button>
    <button className={styles.button} onClick={() => navigate('/cadastro/mot')}>Cadastro Motoristas</button>
    <button className={styles.button} onClick={() => navigate('/alterar/mot')}>Alterar Motorista</button>
    <button className={styles.button} onClick={() => navigate('/exibir/motoristas')}>Exibir Motoristas</button>
    <button className={styles.button} onClick={() => navigate('/remover/motorista')}>Remover motorista</button>
    <button className={styles.button} onClick={() => navigate('/registro/in')}>Cadastro Entrada</button>
    <button className={styles.button} onClick={() => navigate('/alterar/entr')}>Alterar Entrada</button>      
    <button className={styles.button} onClick={() => navigate('/exibir/entradas')}>Exibir Entradas</button>
    <button className={styles.button} onClick={() => navigate('/remover/entrada')}>Remover entrada</button>
    <button className={styles.button} onClick={() => navigate('/registro/out')}>Cadastro Saída</button>
    <button className={styles.button} onClick={() => navigate('/alterar/said')}>Alterar Saída</button>
    <button className={styles.button} onClick={() => navigate('/exibir/saidas')}>Exibir Saídas</button>
    <button className={styles.button} onClick={() => navigate('/remover/saida')}>Remover saída</button>
    </div>
  );
};

export default Display;