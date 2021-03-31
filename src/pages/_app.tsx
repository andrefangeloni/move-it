import React from 'react';

import ChallengesProvider from '../contexts/ChallengeContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => (
  <ChallengesProvider>
    <Component {...pageProps} />
  </ChallengesProvider>
);

export default MyApp;
