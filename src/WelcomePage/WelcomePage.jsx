import styles from './WelcomePage.module.css';
import gifImage from '/twoBand.mp4';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function WelcomePage() {
  const Arrow = useRef(null);
  useEffect(() => {
    gsap.to(Arrow.current, {
      scrollTrigger: {
        trigger: Arrow.current,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      },
      opacity: 0
    })
  })
  
  return (
    <div className={styles.Container}>
      <video className={styles.videoPart} autoPlay loop muted playsInline>
        <source src={gifImage} type="video/mp4" />
      </video>

      <div className={styles.ArrowContainer} ref={Arrow}>
        <h1 className={styles.Arrow}>&#9759;</h1>
      </div>
    </div>
  );
}