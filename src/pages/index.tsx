import React from 'react';

import Profile from '../components/Profile';
import ExperienceBar from '../components/ExperienceBar';

import styles from '../styles/pages/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <ExperienceBar />

    <section>
      <div>
        <Profile />
      </div>

      <div />
    </section>
  </div>
);

export default Home;
