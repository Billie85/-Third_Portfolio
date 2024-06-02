import React, { useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const Text = useRef(null);

    useEffect(() => {
        gsap.to(
            Text.current,
            {
                opacity: 1,
                duration: 3,
                ease: 'power1.out',
                startOpacity: 0,
                scrollTrigger: {
                    trigger: Text.current,
                    start: 'top 80%',
                    toggleActions: "play none none reverse"
                },
            }
        )
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.Text}>
                <a href='https://www.instagram.com/styles.hello?igsh=N2hhbmJ1dzJzbHJ6&utm_source=qr'>Instagram</a>
                <a href='https://github.com/Billie85'>GitHub</a>
                <a href='https://42tokyo.jp/'>42Tokyo</a>
            </div>
            <div className={styles.contactText} >
                <h1 ref={Text} style={{ opacity: 0 }}>Contact</h1>
            </div>
        </div>
    )
}
