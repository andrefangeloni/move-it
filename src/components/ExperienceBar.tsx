import React from 'react';

import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar = () => {
  const { currentXp, xpToNextLevel } = React.useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentXp * 100) / xpToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {`${currentXp} xp`}
        </span>
      </div>
      <span>{`${xpToNextLevel} xp`}</span>
    </header>
  );
};

export default ExperienceBar;
