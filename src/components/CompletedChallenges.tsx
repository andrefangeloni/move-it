import React from 'react';

import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/CompletedChallenges.module.css';

const CompletedChallenges = () => {
  const { challengesDone } = React.useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesDone}</span>
    </div>
  );
};

export default CompletedChallenges;
