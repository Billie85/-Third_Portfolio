import React, { useEffect, useRef, useState } from 'react';
import styles from './ImgDesign.module.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Menu_Bar = ({title, mouseHandler, mouseLeaveHandle}) => {

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
                  markers: true,
                  toggleActions: "play none none reverse"
                },
              }
            );
          }
        }, []);

    return (
        <div className={styles.TextContainer}>
        <span className={styles.MenuItemText} onMouseOver={mouseHandler} onMouseLeave={mouseLeaveHandle}>
            <span ref={titleRef} className={styles.title}>{title}</span>
        </span>
    </div>
    );
};

export default function ImgDesign() {
    const [isImageVisible, setImageVisible] = useState(-1);
    const imgRef = useRef(null);

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
        { title: '07', img: '../../public/42tokyo3.jpg' },
        { title: '08', img: '../../public/MyPicture1.jpg' },
    ];

// -1だったら何も選択してない。
{/* itemの中身はtitleから<h1>~<p>まで入ってる */}
{/* index -> 0 1 2 3  これらの情報をMenu_barに渡す*/}
return (
    <div className={styles.container}>
            {menuItems.map((item, index) => (
                <Menu_Bar 
                mouseHandler ={() => {setImageVisible(index); OnMouseEnterGsap();}}
                mouseLeaveHandle={handleMouseOut}
                key={index}
                title={item.title}
                />
            ))}

{/* 1つだけのもの */}
            <div className={`${styles.ImageWrapper} ${isImageVisible >= 0 ? styles.ImgVisible : styles.ImgHidden}`}>
                <div className={styles.ImgBox} >
                    {isImageVisible >= 0 && <img className={styles.imgDesign} src={menuItems[isImageVisible].img} alt={menuItems[isImageVisible].title} ref={imgRef}/>}
                </div>
            </div>
    </div>
);
}