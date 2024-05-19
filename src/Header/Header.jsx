import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Header.module.css';

export default function Header() {
    useEffect(() => {
        const circle = document.querySelectorAll(`.${styles.circle}`);
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            gsap.to(circle, {
                x: mouseX, 
                y: mouseY,
                stagger: 0.1
            })
        })
    }, [])
  return (
      <div className={styles.Container}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={`${styles.last} ${styles.circle}`}>
            <h1>Move Your Mouse</h1>
        </div>
    </div>
  );
}
