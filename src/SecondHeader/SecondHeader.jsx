import React from 'react';
import styles from './SecondHeader.module.css';
import gifImage from '../../public/twoBand.mp4';

export default function SecondHeader() {
  return (
    <div className={styles.Container}>
      <video className={styles.videoPart} autoPlay loop muted playsInline>
        <source src={gifImage} type="video/mp4" />
      </video>
    </div>
  );
}