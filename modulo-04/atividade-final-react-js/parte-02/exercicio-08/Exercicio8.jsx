import React from 'react';
import styles from './Exercicio8.module.css';

export default function Exercicio8() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Exercício 8 — Estilização em React</h2>

      <div className={styles.card}>
        <p>Este cartão demonstra o uso de <strong>CSS Modules</strong> e a prop <code>className</code>.</p>
        <button className={styles.button}>Clique aqui</button>
      </div>
    </div>
  );
}
