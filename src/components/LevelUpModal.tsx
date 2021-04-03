import React from 'react';

import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/LevelUpModal.module.css';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = React.useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você subiu de nível</p>

        <button type="button" onClick={() => closeLevelUpModal()}>
          <img src="/icons/close.svg" alt="Close Modal" />
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;
