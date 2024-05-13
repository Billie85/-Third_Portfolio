import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {

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
        scrub: 3,
        invalidateOnRefresh: true,
        toggleActions: "styles.overflowNone"
      }
    })
  }, [])

  return (
    <>
    <div className={styles.img_carousel} ref={img_carousel}>
      <img className={styles.ImgStyle} src="../../public/blackInk.png" alt="" />
    </div>
    <section></section>
    </>
  );
}