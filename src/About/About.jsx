import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const FontRef = useRef(null);
  const AboutMe = useRef(null);

  useEffect(() => {
    const cont = container.current;
    const totalWidth = cont.scrollWidth;
    gsap.to(cont, {
      x: () => -(totalWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: cont,
        start: 'top top', 
        end: () => `+=${totalWidth - window.innerWidth}`,
        scrub: 2,
        pin: true,
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    const MoveFont = FontRef.current;
    gsap.fromTo(MoveFont,
      { x: 0 },
      { x: 100, 
        ease: 'none', 
      scrollTrigger: { 
        trigger: cont, 
        start: 'top top', 
        end: '+=500', 
        invalidateOnRefresh: true,
        markers: true,
        toggleActions: "play reverse play reverse",
      } }
    );
    const AboutMeAnimation = AboutMe.current;

    gsap.to(AboutMeAnimation, {
      yPercent: -500,
      repeat: -1,
      duration: 2,
      yoyo: true,
    })
  }, []);

  return (
    <>
      <div className={styles.container} ref={container}>

        <div className={styles.birthdayContainer}>
          <img className={styles.MyImg} alt="" src="../../public/MyPicture.png" />;
        </div>

        <div className={styles.NameContainer}>
          <h1 className={styles.NameFont} ref={FontRef}>Ayumi Kimura Angelinne</h1>
        </div>

        <div className={styles.AboutContainer}>
          <h1 className={styles.AboutFont} ref={AboutMe}>* About ME About ME About ME *</h1>
        </div>

        <div className={styles.IntroduceContainer}>
          <h1 className={styles.Introduceh1}>自己紹介</h1>
          <p className={styles.IntroduceP}>
          42Tokyo学生の木村歩美です。
          私はブラジル生まれで日本で育ちました。
          高校生までファッションデザイナーを目指し高校卒業後42Tokyoで2年半、
          C, C++, HTML, CSS, JavaScript, Reactを学びました。 
          42 Tokyoには教師が存在せず、自学とピアラーニングを通じて技術習得をしてきました。
          現在web制作やフロントエンドエンジニアそしてデザインに興味を持っています
          現在、CSS Awardへの出場を目指し、Webサイトを制作中です。
          このプロジェクトでは、HTMLとCSSで基本的な構築をし、進めています。
          またReact,JavaScript、JavaScript、Gsap、Three.jsなどの技術を取り入れるために積極的に学習しています。
          さらに、UXデザインに深い関心を持ち、ユーザーのニーズを的確に把握し、それを反映したデザインと機能性を追求しています。
          よろしくお願いします。
          </p>
        </div>

        <div className={styles.ImgContainer}>
        </div>

        <div className={styles.EnContainer}>
          <h1 className={styles.Introduceh1}>About Me</h1>
          <p className={styles.IntroduceP}>
            I was born in Brazil and raised in Japan. Until high school,
            I aimed to become a fashion designer. After graduating from high school, I spent two and a half years at 42Tokyo, where I learned C, C++, HTML, CSS, JavaScript, and React.
            At 42Tokyo, there are no teachers, and I have acquired technical skills through self-learning and peer learning. Currently, I am interested in web production, front-end engineering, and design. Thank you for your consideration.
          </p>
        </div>

        <div className={styles.HelloContainer}>
          <h1 className={styles.HelloFont} >!HELLO!</h1>
        </div>

        <div className={styles.IconsContainer}>
          <img className={styles.IconImg} src="../../public/Icons.png"></img>
        </div>

        <div className={styles.MoreTextContainer}>* More More More More *</div>

          <div className={styles.CircleOne}>
            <div className={styles.Circle}>1</div>
            <div className={styles.Text}>
              <h1>Education</h1>
              <h2>42tokyo エンジニアリングスクールにて 2年半在籍</h2>
              <p>C言語を中心としたプログラミング学習</p>
              <p>コンピュータグラフィックアルゴリズムの理解と実践</p>
              <p>Linuxシステム管理とセキュリティに関する習得</p>
              <p>マルチスレッドプログラミングの技術習得</p>
              <p>Dockerを用いたコンテナ管理のスキル取得</p>
              <p>チームweb開発を通じてフロントエンドデザインの習得</p>
            </div>
          </div>

          <div className={styles.CircleTwo}>
            <div className={styles.Circle}>2</div>
            <div className={styles.Text}>
              <h1>Skills</h1>
              <h2>エンジニアリング</h2>
              <p>プログラミング言語: C言語、JavaScript</p>
              <p>フレームワーク: React</p>
              <p>マークアップ言語: HTML、CSS</p>
              <p>デザインツール: Figma</p>
              <p>Docker、Linuxシステム管理、コンピュータグラフィックスアルゴリズム</p>
              <h2>その他</h2>
              <p>日本語 ネイティブ</p>
              <p>ポルトガル語 ネイティブレベル</p>
              <p>英語 ビジネスレベル</p>
            </div>
          </div>

          <div className={styles.CircleThree}>
            <div className={styles.Circle}>3</div>
            <div className={styles.Text}>
              <h1>Experience</h1>
              <h2>42tokyoスクールにおけるチームプロジェクト</h2>
              <p>フロントエンド開発とデザインにおいて、JavaScript、React、HTML、CSS、Figmaを活用</p>
              <p>Linuxシステム管理技術を実践したインフラ構築</p>
              <p>Dockerを用いたコンテナ化による効率的なデプロイメントの実現</p>
              <p></p>
            </div>
          </div>

        <div className={styles.BlankContainer}></div>


      </div>
    </>
  );
}