import React from 'react';

import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: React.ReactNode;
}

interface Challenge {
  type: 'body' | 'eye',
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentXp: number;
  levelUp: () => void;
  challengesDone: number;
  activeChallenge: Challenge;
  startNewChallenge: () => void;
}

export const ChallengesContext = React.createContext({} as ChallengesContextData);

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = React.useState(1);
  const [currentXp, setCurrentXp] = React.useState(0);
  const [challengesDone, setChallengesDone] = React.useState(0);
  const [activeChallenge, setActiveChallenge] = React.useState(null);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentXp,
      challengesDone,
      activeChallenge,
      startNewChallenge,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
