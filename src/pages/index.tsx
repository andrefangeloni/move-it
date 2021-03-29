import React from 'react';
import Head from 'next/head';

import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Início | move.it</title>
    </Head>

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
