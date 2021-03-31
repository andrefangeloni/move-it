import React from 'react';

interface ChallengesProviderProps {
  children: React.ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentXp: number;
  levelUp: () => void;
  challengesDone: number;
  startNewChallenge: () => void;
}

export const ChallengesContext = React.createContext({} as ChallengesContextData);

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = React.useState(1);
  const [currentXp, setCurrentXp] = React.useState(0);
  const [challengesDone, setChallengesDone] = React.useState(0);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    console.log('new challenge');
  };

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentXp,
      challengesDone,
      startNewChallenge,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
