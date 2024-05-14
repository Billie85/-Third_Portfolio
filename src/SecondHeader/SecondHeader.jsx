import React from 'react';
import gsap from 'gsap';
import styles from './SecondHeader.module.css';
import gifImage from '../../public/twoBand.mp4';

export default function SecondHeader() {
  return (
    <div className={styles.Container}>
      <video autoPlay loop muted playsInline>
        <source src={gifImage} type="video/mp4" />
      </video>
    </div>
  );
}