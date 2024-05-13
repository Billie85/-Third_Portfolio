import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Header.module.css';

export default function Header() {
    const welcomeRef = useRef(null);
    const portfolioRef = useRef(null);

    useEffect(() => {
        const welcome = welcomeRef.current;
        const portfolio = portfolioRef.current;

        gsap.from(welcome, {
            y: 100,
            opacity: 0,
            ease: "power1.inOut",
            duration: 1.3,
            delay: 1.2,
        });

        gsap.from(portfolio, {
            y: 100,
            opacity: 0,
            ease: "power1.inOut",
            duration: 1.3,
            delay: 2,
        });
    }, []);

    return (
        <div className={styles.Container}>
            <div className={styles.Font1} ref={welcomeRef}>Welcome</div>
            <div className={styles.Font2} ref={portfolioRef}>My Portfolio</div>
        </div>
    );
}
