import styles from './Contact.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState  } from 'react';

export default function () {
    return (
        <div className={styles.container}>
            <div className={styles.Text}>
                <a href=''>Instagram</a>
                <a href=''>Twitter</a>
                <a href=''>GitHub</a>
                <a href=''>42Tokyo</a>
            </div>
            <div className={styles.contactText}>
                <h1>Contact</h1>
            </div>
        </div>
    )
}