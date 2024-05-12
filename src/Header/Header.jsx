import styles from './Header.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {

  const img_carousel = useRef(null);

  useEffect(() => {
    let cont = img_carousel.current;
    gsap.to("img", {
      ease: "none",
      x: () => -(cont.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: cont,
        pin: cont,
        start: "center center",
        end: () => "+=" + (cont.scrollWidth - window.innerWidth),
        scrub: true,
        invalidateOnRefresh: true,
        markers: true,
      }
    })
  }, [])

  return (
    <>
    <section></section>
    <div className={styles.img_carousel} ref={img_carousel}>
      <img src="https://placehold.co/600x400" alt="" />
      <img src="https://placehold.co/600x400" alt="" />
      <img src="https://placehold.co/600x400" alt="" />
      <img src="https://placehold.co/600x400" alt="" />
      <img src="https://placehold.co/600x400" alt="" />
    </div>
    <section></section>
    <section></section>

    </>
  );
}