import React from 'react';
import Head from 'next/head';

import CountdownProvider from '../contexts/CountdownContext';

import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import ExperienceBar from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Início | move.it</title>
    </Head>

    <ExperienceBar />

    <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </CountdownProvider>
  </div>
);

export default Home;
