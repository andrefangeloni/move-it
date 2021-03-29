import React from 'react';

import styles from '../styles/components/Profile.module.css';

const Profile = () => (
  <div className={styles.profileContainer}>
    <img src="https://github.com/andrefangeloni.png" alt="GitHub Profile" />
    <div>
      <strong>André Angeloni</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </div>
  </div>
);

export default Profile;
