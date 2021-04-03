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
  xpToNextLevel: number;
  challengesDone: number;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = React.createContext({} as ChallengesContextData);

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = React.useState(1);
  const [currentXp, setCurrentXp] = React.useState(0);
  const [challengesDone, setChallengesDone] = React.useState(0);
  const [activeChallenge, setActiveChallenge] = React.useState(null);

  const xpToNextLevel = ((level + 1) * 4) ** 2;

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentXp,
      xpToNextLevel,
      challengesDone,
      resetChallenge,
      activeChallenge,
      startNewChallenge,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
