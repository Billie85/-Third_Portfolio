import { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import EducationImg from '/42Tokyo1.jpg'
// import SkillImg from '/logo.png'
// import ExperienceImg from '/MyPicture2.png'
import ProjectImg from '/video.mp4'
gsap.registerPlugin(ScrollTrigger);

const Menu_Bar = ({ title, ClickHandler }) => {

    // Title Animation
    const titleRef = useRef(null);
    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: "play none none reverse"
                    },
                }
            )
        }
    }, []);
    return (
        <div className={styles.MenuContainer} onClick={ClickHandler}>
            <div className={styles.right}>
                <span className={styles.RightTitle} ref={titleRef}>{title}</span>
            </div>
        </div>
    );
};

export default function AboutMe() {

    const [isVisible, setVisible] = useState(-1);
    const handleCloseButtonClick = () => {
        setVisible(-1);
        };
        
        // Box Animation
        const BoxRef = useRef(null);
    useEffect(() => {
        if (BoxRef.current && isVisible >= 0) {
            gsap.fromTo(
                BoxRef.current,
                {
                    opacity: 0,
                    scale: 0.5,
                    y: 100,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    ease: "circ.inOut",
                    duration: 0.8,
                }
            );
        }
    }, [isVisible]);

    const menuItems = [
        {
            // Transcendence
            title: 'Transcendence',
            CenterText: (
                <>
                <div className={styles.flexBox1}>
                    <h1>Transcendence</h1>
                    <p>
                        Pongゲームをプレイヤー同士でプレイできるフルスタックWebサイトを構築しました。
                        チャット機能、招待機能、画像設定機能、ゲームモード選択機能などを備えており、
                        私はCSS、HTML、Figmaを使ってデザインを担当しました。
                    </p>
                </div>
                <div className={styles.flexBox2}>
                    <video controls className={styles.video}>
                        <source className={styles.InsideVideo} src={ProjectImg} type='video/mp4' />
                    </video>
                </div>
                </>
            )
        },
    ];
    
    return (
        <div className={`${styles.container} ${isVisible >= 0 ? styles.overlay : ''}`}>
            {menuItems.map((item, index) => (
                <Menu_Bar
                    ClickHandler={() => { setVisible(index) }}
                    key={index}
                    title={item.title}
                    isVisible={isVisible >= 0}
                />
            ))}
            <div className={`${styles.CenterBoxContainer} ${isVisible >= 0 ? styles.visible : styles.hidden}`}>
                <div className={styles.CenterBox} ref={BoxRef}>
                    {isVisible >= 0 && 
                    <>
                        <button className={styles.CloseButton} onClick={handleCloseButtonClick}>
                            <span className={styles.CloseButtonIcon}>&times;</span>
                        </button>
                        {menuItems[isVisible].CenterText}
                    </>}
                </div>
            </div>
        </div>
    );
}