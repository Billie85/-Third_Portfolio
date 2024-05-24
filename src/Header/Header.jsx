import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Menu_Bar = ({content_left, title, ClickHandler}) => {

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
            <span className={styles.LeftTitle}>{content_left}</span>
            <span className={styles.RightTitle} ref={titleRef}>{title}</span>
        </div>
    );
};

export default function Header() {

    const [isVisible, setVisible] = useState(-1);
    const handleCloseButtonClick = () => {
        setVisible(-1);
    };

    // mouse Animation
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
            title: 'Show More',
            content_left: (
                <>
                    <h1>Education</h1>
                    <h2>42tokyo エンジニアリングスクール<br />2年半在籍</h2>
                    <p>C言語を中心としたプログラミング学習</p>
                    <p>コンピュータグラフィックアルゴリズムの理解と実践</p>
                    <p>Linuxシステム管理とセキュリティに関する習得</p>
                    <p>マルチスレッドプログラミングの技術習得</p>
                    <p>Dockerを用いたコンテナ管理のスキル取得</p>
                    <p>チームweb開発を通じてフロントエンドデザインの習得</p>
                </>
            ),
            content_right: (
                <>
                    <h1>42Tokyo</h1>
                    <h2>フランス発のエンジニア養成機関</h2>
                    <p>
                        42は、フランス発のエンジニア養成機関です。
                        現在は、世界31カ国にて展開されており、2020年6月に東京校として 42 Tokyo を設立しました。
                        多くの企業の支援、寄付で支えられており、授業料は完全無料
                        学生は、18歳以上であれば経歴を問わず入学することができ、
                        その後のキャリアは起業をしたり、就職するなど、自由です。
                        また、基礎カリキュラムを終えたら、他の42キャンパスに留学することも可能です。
                        革新的で、日々最新にアップデートされるカリキュラム。
                        世界中の学生たちが、今この瞬間も42でスキルを磨いています。
                    </p>
                </>
            )
        },
        {
            // Experience
            title: 'Show More',
            content_left: (
                <>
                    <h1>Experience</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <p>フロントエンド開発とデザインにおいて<br />
                        JavaScript、React、HTML、CSS、Figmaを活用</p>
                    <p>Linuxシステム管理技術を実践したインフラ構築</p>
                    <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
                </>
            ),
            content_right: (
                <>
                    <img src='../../public/White.jpg' />
                </>
            )
        },
        {
            // Skill
            title: 'Show More',
            content_left: (
                <>
                    <h1>Skills</h1>
                    <h2>エンジニアリング</h2>
                    <p>プログラミング言語: C C++ JavaScript</p>
                    <p>フレームワーク: React</p>
                    <p>マークアップ言語: HTML CSS</p>
                    <p>デザインツール: Figma</p>
                    <p>Docker Linuxシステム管理</p>
                    <h2>その他</h2>
                    <p>日本語 ネイティブ</p>
                    <p>ポルトガル語 ネイティブレベル</p>
                    <p>英語 ビジネスレベル</p>
                </>
            ),
            content_right: (
                <>
                    <img src='../../public/White.jpg' />
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
                    content_left={item.content_left}
                />
            ))}
            {/* 真ん中に出す部分CenterBoxContainer */}
            <div className={`${styles.CenterBoxContainer} ${isVisible >= 0 ? styles.visible : styles.hidden}`}>
                <div className={styles.CenterBox} ref={BoxRef}>
                    <button className={styles.CloseButton} onClick={handleCloseButtonClick}>&times;</button>{isVisible >= 0 && menuItems[isVisible].content_right}
                </div>
            </div>
        </div>
    );
}