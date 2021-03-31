import React from 'react';

import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const initialTime = 25 * 60;

  const { startNewChallenge } = React.useContext(ChallengesContext);

  const [time, setTime] = React.useState(initialTime);
  const [isActive, setIsActive] = React.useState(false);
  const [hasFinished, setHasFinished] = React.useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => {
    setIsActive(true);
  };

  React.useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && !time) {
      setIsActive(false);
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(initialTime);
  };

  const ButtonCicle = () => {
    if (hasFinished) {
      return (
        <div className={styles.countdownFinished}>
          Ciclo encerrado
        </div>
      );
    }

    if (isActive) {
      return (
        <button
          type="button"
          onClick={() => resetCountdown()}
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        >
          Abandonar ciclo
        </button>
      );
    }

    return (
      <button
        type="button"
        onClick={() => startCountdown()}
        className={styles.countdownButton}
      >
        Iniciar ciclo
      </button>
    );
  };

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <ButtonCicle />
    </div>
  );
};

export default Countdown;
