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
  completeChallenge: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = React.createContext({} as ChallengesContextData);

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = React.useState(1);
  const [currentXp, setCurrentXp] = React.useState(0);
  const [challengesDone, setChallengesDone] = React.useState(0);
  const [activeChallenge, setActiveChallenge] = React.useState(null);

  const xpToNextLevel = ((level + 1) * 4) ** 2;

  React.useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalXp = currentXp + amount;

    if (finalXp >= xpToNextLevel) {
      finalXp -= xpToNextLevel;
      levelUp();
    }

    setCurrentXp(finalXp);
    setActiveChallenge(null);
    setChallengesDone(challengesDone + 1);
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
      completeChallenge,
      startNewChallenge,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
