import { useEffect, useRef, useState } from 'react';
import styles from './Project.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video from '/video.mp4'

export default function Project() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.videoContainer}>
                    <video src={video} autoPlay muted loop />
                </div>
            </div>
        </>
    )
}