import React, { useEffect, useRef, useState } from 'react';
import styles from './ImgDesign.module.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Menu_Bar = ({ title, mouseHandler, mouseLeaveHandle }) => {

  const titleRef = useRef(null);
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 1 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: "play none none reverse"
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <div className={styles.MenuText}>
        <div className={styles.Container} onMouseOver={mouseHandler} onMouseLeave={mouseLeaveHandle}>
          <span ref={titleRef} className={styles.title}>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default function ImgDesign() {
  const [isImageVisible, setImageVisible] = useState(-1);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const circles = document.querySelectorAll(`.${styles.circle}`);

      gsap.to(circles, {
        x: mouseX,
        y: mouseY,
        stagger: 0.1
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const OnMouseEnterGsap = () => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        opacity: 1,
        scale: 1.1,
        yPercent: 0,
        rotation: 0,
        ease: 'power2.out',
        duration: 0.5,
      });
    }
  };

  const handleMouseOut = () => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        opacity: 0,
        rotation: -9,
        scale: 0.9,
        ease: 'power2.in',
        duration: 0.5,
      });
    }
  };

  const menuItems = [
    { title: '01', img: '../../public/42Tokyo1.jpg' },
    { title: '02', img: '../../public/MyPicture2.png' },
    { title: '03', img: '../../public/42tokyo2.jpg' },
    { title: '04', img: '../../public/42tokyo4.jpg' },
    { title: '05', img: '../../public/MyPicture4.jpg' },
    { title: '06', img: '../../public/MyPicture3.png' },
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
      {menuItems.map((item, index) => (
        <Menu_Bar
          mouseHandler={() => { setImageVisible(index); OnMouseEnterGsap(); }}
          mouseLeaveHandle={handleMouseOut}
          key={index}
          title={item.title}
        />
      ))}
      <div className={styles.ImageCenterBoxContainer}>
        <div className={styles.ImgBox}>
          {isImageVisible >= 0 && <img className={styles.imgDesign} src={menuItems[isImageVisible].img} alt={menuItems[isImageVisible].title} ref={imgRef} />}
        </div>
      </div>

    </div>
  );
}