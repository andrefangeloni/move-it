import React from 'react';

import Cookies from 'js-cookie';

import challenges from '../../challenges.json';

import LevelUpModal from '../components/LevelUpModal';

interface ChallengesProviderProps {
  children: React.ReactNode;
  level: number;
  currentXp: number;
  challengesDone: number;
}

interface Challenge {
  type: 'body' | 'eye';
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
  closeLevelUpModal: () => void;
  completeChallenge: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = React.createContext(
  {} as ChallengesContextData,
);

const ChallengesProvider = ({ children, ...rest }: ChallengesProviderProps) => {
  const [level, setLevel] = React.useState(rest.level ?? 1);
  const [currentXp, setCurrentXp] = React.useState(rest.currentXp ?? 0);
  const [challengesDone, setChallengesDone] = React.useState(
    rest.challengesDone ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = React.useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = React.useState(false);

  const xpToNextLevel = ((level + 1) * 4) ** 2;

  React.useEffect(() => {
    Notification.requestPermission();
  }, []);

  React.useEffect(() => {
    Cookies.set('moveIt_level', String(level));
    Cookies.set('moveIt_currentXp', String(currentXp));
    Cookies.set('moveIt_challengesDone', String(challengesDone));
  }, [level, currentXp, challengesDone]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };

  const closeLevelUpModal = () => setIsLevelUpModalOpen(false);

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
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentXp,
        xpToNextLevel,
        challengesDone,
        resetChallenge,
        activeChallenge,
        closeLevelUpModal,
        completeChallenge,
        startNewChallenge,
      }}
    >
      {children}

      {isLevelUpModalOpen ? <LevelUpModal /> : null}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;
