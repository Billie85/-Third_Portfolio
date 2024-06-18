import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './WelcomePage.module.css';
import gifImage from '/twoBand.mp4';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WelcomePage() {
  const Arrow = useRef(null);
  const ArrowDelete = useRef(null);
  const video = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const Delete = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5, ease: 'power1.inOut' } });

    tl.fromTo(video.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0}
    ).fromTo(text1.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.3 },
    ).fromTo(text2.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.3 },
    ).fromTo(Arrow.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.3 },
    );
    
    gsap.to(ArrowDelete.current,{
      scrollTrigger: {
        trigger: ArrowDelete.current,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      },
      opacity: 0
    })
    
    gsap.to(Delete.current,{
      scrollTrigger: {
        trigger: Delete.current,
        start: 'tpp top',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
      },
      opacity: 0
    })
  }, [])
  
  return (
    <div className={styles.Container}>
        <div ref={Delete} className={styles.Font}>
          <h1 ref={text1}>特技 Web開発</h1>
          <h1 ref={text2}>趣味 Web開発</h1>
        </div>
      <video ref={video} className={styles.videoPart} autoPlay loop muted playsInline>
        <source src={gifImage} type="video/mp4" />
      </video>
      <div className={styles.ArrowContainer} ref={ArrowDelete}>
        <h1 ref={Arrow} className={styles.Arrow}>&#9759;</h1>
      </div>
    </div>
  );
}