import React from 'react';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

const Countdown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = React.useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const ButtonCicle = () => {
    if (hasFinished) {
      return <div className={styles.countdownFinished}>Ciclo encerrado</div>;
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
