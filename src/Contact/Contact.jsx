import styles from './Contact.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState  } from 'react';

export default function () {
    return (
        <div className={styles.container}>
            <div className={styles.Text}>
                <a href='https://www.instagram.com/styles.hello?igsh=N2hhbmJ1dzJzbHJ6&utm_source=qr'>Instagram</a>
                <a href='https://github.com/Billie85'>GitHub</a>
                <a href='https://42tokyo.jp/'>42Tokyo</a>
            </div>
            <div className={styles.contactText}>
                <h1>Contact</h1>
            </div>
        </div>
    )
}