import React from 'react';

import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  const { level } = React.useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/andrefangeloni.png" alt="GitHub Profile" />
      <div>
        <strong>André Angeloni</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          {`Nível ${level}`}
        </p>
      </div>
    </div>
  );
};

export default Profile;
