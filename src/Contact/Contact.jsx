import { useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const ContactText = useRef(null);

    useEffect(() => {
        gsap.to(ContactText.current, {
          y: -20,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ContactText.current,
            start: "top 90%",
            end: "bottom 25%",
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
        })
      }, [])

    return (
        <div className={styles.container}>
            <div className={styles.Text}>
                <a href='https://www.instagram.com/styles.hello?igsh=N2hhbmJ1dzJzbHJ6&utm_source=qr' target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href='https://github.com/Billie85' target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href='https://42tokyo.jp/' target="_blank" rel="noopener noreferrer">42Tokyo</a>
            </div>
            <div className={styles.contactText}>
            <h1 ref={ContactText} style={{ opacity: 0 }}>Contact</h1></div>
        </div>
    );
}
