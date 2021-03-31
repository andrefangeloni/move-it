import React from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => (
  <div className={styles.challengeBoxContainer}>
    <div className={styles.challengeNotActive}>
      <strong>Finalize um ciclo para receber um desafio</strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up" />
        Avance de level completando desafios
      </p>
    </div>
  </div>
);

export default ChallengeBox;
