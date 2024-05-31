import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        gsap.to(`.${styles.cursor}`, { x: cursorPosition.x, y: cursorPosition.y });
    }, [cursorPosition]);

    return (
        <div className={styles.cursor}>
            <div className={styles.cursor2}></div>
        </div>

    );
}