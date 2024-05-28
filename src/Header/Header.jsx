import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Menu_Bar = ({ title, ClickHandler}) => {

    // Title Animation
    const titleRef = useRef(null);
    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0},
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

export default function Header() {

    // mouse Animation
    const [isVisible, setVisible] = useState(-1);
    const handleCloseButtonClick = () => {
        setVisible(-1);
    };
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

    //   Box Animation
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
            // Education
            title: 'Education',
            content_right: (
                <>
                    <h1>Education</h1>
                    <h2>42tokyo エンジニアリングスクール<br />2年半在籍</h2>
                    <ul>
                        <li>C言語を中心としたプログラミング学習</li>
                        <li>コンピュータグラフィックアルゴリズムの理解と実践</li>
                        <li>Linuxシステム管理とセキュリティに関する習得</li>
                        <li>マルチスレッドプログラミングの技術習得</li>
                        <li>Dockerを用いたコンテナ管理のスキル取得</li>
                        <li>チームweb開発を通じてフロントエンドデザインの習得</li>
                    </ul>
                </>
            )
        },
        {
            // Skill
            title: 'Skills',
            content_right: (
                <>
                    <h1>Skills</h1>
                    <h2>エンジニアリング</h2>
                    <ul>
                        <li>プログラミング言語: C C++ JavaScript</li>
                        <li>フレームワーク: React</li>
                        <li>マークアップ言語: HTML CSS</li>
                        <li>デザインツール: Figma</li>
                        <li>システム管理: Docker Linux</li>
                        <h2>その他</h2>
                        <li>日本語 ネイティブ</li>
                        <li>ポルトガル語 ネイティブレベル</li>
                        <li>英語 ビジネスレベル</li>
                    </ul>
                </>
            )
        },
        {
            // Experience
            title: 'Experience',
            content_right: (
                <>
                    <h1>Experience</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <ul>
                        <li>Linuxシステム管理技術を実践したインフラ構築</li>
                        <li>Dockerを用いたコンテナ化による効率的な<br/>デプロイメントの実現</li>
                        <li>フロントエンド開発とデザインにおいて<br/>
                        JavaScript、React、HTML、CSS、Figmaを活用</li>
                    </ul>
                </>
            )
        },
    ];

    return (
        <div className={styles.container}>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
            {menuItems.map((item, index) => (
                <Menu_Bar
                    ClickHandler={() => { setVisible(index) }}
                    key={index}
                    title={item.title}
                    isVisible={isVisible >= 0}
                />
            ))}
            {/* 真ん中に出す部分CenterBoxContainer */}
            <div className={`${styles.CenterBoxContainer} ${isVisible >= 0 ? styles.visible : styles.hidden}`}>
                <div className={styles.CenterBox} ref={BoxRef}>
                    <button className={styles.CloseButton} onClick={handleCloseButtonClick}>&times;</button>{isVisible >= 0 && menuItems[isVisible].content_right}
                </div>
            </div>

            <div className={styles.ImageContainer}>
                <div className={styles.imgflex}>
                    <div className={styles.imgbox}>
                        <img className={styles.Myimg} src='../../public/42tokyo4.jpg' />
                    </div>
                    <div className={styles.imgbox}>
                        <img className={styles.Myimg} src='../../public/MyPicture2.png' />
                    </div>
                    <div className={styles.imgbox}>
                        <img className={styles.Myimg} src='../../public/42tokyo2.jpg' />
                    </div>
                    <div className={styles.imgbox}>
                        <img className={styles.Myimg} src='../../public/MyPicture1.jpg' />
                    </div>
                    <div className={styles.imgbox}>
                        <img className={styles.Myimg} src='../../public/42Tokyo1.jpg' />
                    </div>
                    <div className={styles.imgbox}>
                        <img className={styles.Myimg} src='../../public/MyPicture3.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}