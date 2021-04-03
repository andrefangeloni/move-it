import React from 'react';

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import CountdownProvider from '../contexts/CountdownContext';
import ChallengesProvider from '../contexts/ChallengeContext';

import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import ExperienceBar from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentXp: number;
  challengesDone: number;
}

const Home = ({ level, currentXp, challengesDone }: HomeProps) => (
  <ChallengesProvider
    level={level}
    currentXp={currentXp}
    challengesDone={challengesDone}
  >
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
  </ChallengesProvider>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { cookies } = ctx.req;

  return {
    props: {
      level: Number(cookies.moveIt_level),
      currentXp: Number(cookies.moveIt_currentXp),
      challengesDone: Number(cookies.moveIt_challengesDone),
    },
  };
};
