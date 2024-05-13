import styles from './Navbar.module.css'
// import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navbar () {
  return (
    <div>
      <ul className={styles.Navbar}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
