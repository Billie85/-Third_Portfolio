import React from 'react';
import styles from './Game.module.css';

export default function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <div className={styles.character}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
}