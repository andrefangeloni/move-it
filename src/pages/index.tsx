import React from 'react';

import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <ExperienceBar />

    <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>

      <div />
    </section>
  </div>
);

export default Home;
