import React, { useState } from 'react';
// J'importe la librérie Font Awesome et chaque icon présent dans le code.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
// Importe le style CSS du compteur Counter
import styles from './style.module.css';

// Le résultat affiché 'count' est au départ à 0 avec useState(0) et il se met à jour avec le set du setCount.
const Counter = () => {
  const [count, setCount] = useState(0);

  // L'élément const addition fait en sorte d'ajouter 1 au résultat.
  const addition = () => {
    setCount(count + 1);
  };

  // L'élément const addition5 fait en sorte d'ajouter 5 au résultat.
  const addition5 = () => {
    setCount(count + 5);
  }

    // L'élément const addition10 fait en sorte d'ajouter 10 au résultat.
    const addition10 = () => {
        setCount(count + 10);
      }

    // L'élément const addition50 fait en sorte d'ajouter 50 au résultat.
    const addition50 = () => {
        setCount(count + 50);
      }

  // L'élément const soustraction fait en sorte d'enlever 1 au résultat SI il est supérieur à 0.
  const soustraction = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // L'élément const soustraction5 fait en sorte d'enlever 5 au résultat SI il est supérieur ou égal à 10. SI le résultat est inférieur à 5, il le reset à 0 (pour éviter les montants négatifs).
  const soustraction5 = () => {
    if (count < 5) {
        setCount(0);
    }
    if (count >= 5) {
      setCount(count - 5);
    }
  };

  // Pareil que le soustraction5 mais avec 10.
  const soustraction10 = () => {
    if (count < 10) {
        setCount(0);
    }
    if (count >= 10) {
      setCount(count - 10);
    }
  };

 // Pareil que le soustraction10 mais avec 50.
 const soustraction50 = () => {
    if (count < 50) {
        setCount(0);
    }
    if (count >= 50) {
      setCount(count - 50);
    }
  };

  // L'élément const rest fait en sorte de remettre le résultat à 0.
  const reset = () => {
    setCount(0);
  };

  // Affichage écran du compteur avec des className pour les modifier avec le CSS.
  return (
    <div className={styles.counterContainer}>
        <div className={styles.counterContainerAdd}>
            <button className={styles.decrementButton} onClick={soustraction50}><FontAwesomeIcon icon={faMinus} />50</button>
            <button className={styles.decrementButton} onClick={soustraction10}><FontAwesomeIcon icon={faMinus} />10</button>
            <button className={styles.decrementButton} onClick={soustraction5}><FontAwesomeIcon icon={faMinus} />5</button>
            <button className={styles.decrementButton} onClick={soustraction}><FontAwesomeIcon icon={faMinus} /></button>
            <h1>{count}</h1>
            <button className={styles.incrementButton} onClick={addition}><FontAwesomeIcon icon={faPlus} /></button>
            <button className={styles.incrementButton} onClick={addition5}><FontAwesomeIcon icon={faPlus} />5</button>
            <button className={styles.incrementButton} onClick={addition10}><FontAwesomeIcon icon={faPlus} />10</button>
            <button className={styles.incrementButton} onClick={addition50}><FontAwesomeIcon icon={faPlus} />50</button>
        </div>
      <button className={styles.resetButton} onClick={reset}>Remettre à zéro</button>
    </div>
  );
};

export default Counter;