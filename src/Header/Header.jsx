import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { gsap } from 'gsap';

// onClick = eventの事
const Menu_Bar = ({ title, ClickHandler, isVisible, mouseHandler, mouseLeaveHandle}) => {
    
    useEffect(() => {
        const wrappers = document.querySelectorAll(`.${styles.Wrapper}`);
        if (isVisible) {
            wrappers.forEach(wrapper => {
                gsap.to(wrapper, { opacity: 1, duration: 0.5, scale: 1.2 });
            });
        } else {
            wrappers.forEach(wrapper => {
                gsap.to(wrapper, { opacity: 0, duration: 0.6 });
            });
        }
    }, [isVisible]);


{/* menu barはたくさんあるもの */}
    return (
        <div onMouseOver={mouseHandler} onMouseLeave={mouseLeaveHandle}>
            <span className={styles.MenuItemText} onClick={ClickHandler}>
                <span>{title}</span>
            </span>
        </div>
    );
};

export default function Header() {
    const [isVisible, setVisible] = useState(-1);
    const [isImageVisible, setImageVisible] = useState(-1);

    const handleCloseButtonClick = () => {
        setVisible(-1);
    };

    // 要相談
    const handleMouseOut  = () => {
        setImageVisible(-1);
    }

    const menuItems = [
        {
            title: 'Education',
            img: '../../public/42Tokyo1.jpg',
            content: (
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
            )
        },
        {
            title: 'Skills',
            img: '../../public/MyPicture2.png',
            content: (
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
            )
        },
        {
            title: 'Experience',
            img: '../../public/42tokyo2.jpg',
            content: (
                <>
                    <h1>Experience</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <p>フロントエンド開発とデザインにおいて<br />
                        JavaScript、React、HTML、CSS、Figmaを活用</p>
                    <p>Linuxシステム管理技術を実践したインフラ構築</p>
                    <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
                </>
            )
        },
        {
            title: '42Tokyo',
            img: '../../public/42tokyo4.jpg',
            content: (
                <>
                    <h1>42Tokyo</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <p>フロントエンド開発とデザインにおいて<br />
                        JavaScript、React、HTML、CSS、Figmaを活用</p>
                    <p>Linuxシステム管理技術を実践したインフラ構築</p>
                    <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
                </>
            )
        },
        {
            title: 'AboutMe',
            img: '../../public/MyPicture4.jpg',
            content: (
                <>
                    <h1>AboutMe</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <p>フロントエンド開発とデザインにおいて<br />
                        JavaScript、React、HTML、CSS、Figmaを活用</p>
                    <p>Linuxシステム管理技術を実践したインフラ構築</p>
                    <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
                </>
            )
        },
        {
            title: 'Test1',
            img: '../../public/MyPicture3.png',
            content: (
                <>
                    <h1>Test1</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <p>フロントエンド開発とデザインにおいて<br />
                        JavaScript、React、HTML、CSS、Figmaを活用</p>
                    <p>Linuxシステム管理技術を実践したインフラ構築</p>
                    <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
                </>
            )
        },
        {
            title: 'Test2',
            img: '../../public/42tokyo3.jpg',
            content: (
                <>
                    <h1>Test2</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <p>フロントエンド開発とデザインにおいて<br />
                        JavaScript、React、HTML、CSS、Figmaを活用</p>
                    <p>Linuxシステム管理技術を実践したインフラ構築</p>
                    <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
                </>
            )
        },
        {
            title: 'Test3',
            img: '../../public/MyPicture1.jpg',
            content: (
                <>
                    <h1>Test3</h1>
                    <h2>42tokyoにおける<br />チームプロジェクト</h2>
                    <p>フロントエンド開発とデザインにおいて<br />
                        JavaScript、React、HTML、CSS、Figmaを活用</p>
                    <p>Linuxシステム管理技術を実践したインフラ構築</p>
                    <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
                </>
            )
        }
    ];

// -1だったら何も選択してない。
{/* itemの中身はtitleから<h1>~<p>まで入ってる */}
{/* index -> 0 1 2 3  これらの情報をMenu_barに渡す*/}
return (
    <div className={styles.container}>
            {menuItems.map((item, index) => (
                <Menu_Bar 
                ClickHandler={() => {setVisible(index)}}
                mouseHandler ={() => {setImageVisible(index);}}
                mouseLeaveHandle={handleMouseOut}
                key={index}
                title={item.title}
                isVisible={isVisible >= 0}
                isImageVisible={isImageVisible >= 0  
                } //gsap用
                />
            ))}

{/* 1つだけのもの */}
            <div className={`${styles.Wrapper} ${isVisible >= 0 ? styles.visible : styles.hidden}`}>
                <div className={styles.Box}>
                    <button className={styles.CloseButton} onClick={handleCloseButtonClick}>&times;</button>
                    {isVisible >= 0 && menuItems[isVisible].content}
                </div>
            </div>

            <div className={`${styles.ImageWrapper} ${isImageVisible >= 0 ? styles.ImgVisible : styles.ImgHidden}`}>
                <div className={styles.ImgBox}>
                    {isImageVisible >= 0 && <img className={styles.imgDesign} src={menuItems[isImageVisible].img} alt={menuItems[isImageVisible].title}/>}
                </div>
            </div>
    </div>
);
}