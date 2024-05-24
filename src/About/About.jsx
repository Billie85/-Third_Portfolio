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
        // markers: true,
        end: () => `+=${totalWidth - window.innerWidth + 800}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    const MoveFont = FontRef.current;
    gsap.fromTo(
      MoveFont,
      { x: 0 },
      {
        x: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: cont,
          start: 'top top',
          end: '+=500',
          invalidateOnRefresh: true,
          toggleActions: "play reverse play reverse",
        }
      }
    );

    const AboutMeAnimation = AboutMe.current;
    gsap.to(AboutMeAnimation, {
      yPercent: -500,
      repeat: -1,
      duration: 2,
      yoyo: true,
    });

    // styles.boxクラスが適用された要素のアニメーション
    const boxElements = document.querySelectorAll(`.${styles.box}`);
    boxElements.forEach(box => {
      gsap.fromTo(
        box,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className={styles.container} ref={container}>
        <div className={styles.MyPictureContainer}>
          <img className={styles.MyImg} alt="" src="../../public/MyPicture.png" />
        </div>

        <div className={`${styles.NameContainer} ${styles.box}`}>
          <h1 className={styles.NameFont} ref={FontRef}>Ayumi Kimura</h1>
        </div>
        <div className={`${styles.AboutContainer} ${styles.box}`}>
          <h1 className={styles.AboutFont} ref={AboutMe}>* About ME About ME About ME *</h1>
        </div>
        <div className={styles.IntroduceContainer}>
          <div>
            <p className={styles.TextP}>
              <span className={styles.TextDesign}>こんにちは 木村歩美と申します。</span><br/>私はブラジルで生まれ日本で育ちました。高校を卒業後、新しい挑戦を求めて2年半エンジニアリングスクール42tokyoに入学しました。
              そこでの学びの中で最も印象に残ったのは、チームでフルスタックのWebアプリケーションを開発し、デザインを担当した経験です。
              プログラミングやエンジニアリングに興味を持ったきっかけは、
              10年以上会っていない兄がブラジルでエンジニアを目指して勉強している姿を見たことでした。
              それ以来、エンジニアに強い興味を抱きました。
              特に、JavaScriptやCSSを使ってWebアプリケーションをデザインすることに魅力を感じています。
            </p>
          </div>

          <div>
            <p className={styles.TextP}>私の強みは、ポルトガル語、英語、日本語を話せることと、42tokyoで培った自学とピアラーニングの精神です。
              これにより、どんな課題でも自分で学び、実践に活かすことができます。
              また、C、C++、CSS、HTML、JavaScript、Docker、Figma、Reactなど、
              多様な技術を使いこなせることも私の強みです。
              新卒として入社後には、Web制作に積極的に取り組みたいと考えています。
              10年後には、Web制作で使われる全ての素材を作成できるようになることを目標にしています。
              また、CSS Awardのようなウェブ制作コンテストに参加し、評価されることも目指しています。
            </p>
          </div>

          <div>
            <p className={styles.TextP}>
            趣味はダンスやジムで体を動かすことやアートやデザインを見ることで自分のアイディアを増やすことです。
            また、自分の部屋の模様替えも好きです。学外では、gsapを使いこなせるように練習しています。
            チームプロジェクトでは、フルスタックのWebアプリケーション開発のデザインを担当し、Udemyでの学習を通じてスキルを向上させました。
            チーム内でのコミュニケーションの課題も、ミーティングの時間を調整することで克服しました。
            私を一言で表すと「七転び八起き」です。常に上を目指し、自分よりレベルの高いデザインを見てモチベーションを高めています。
            </p>
          </div>
        </div>
        <div className={`${styles.HelloContainer} ${styles.box}`}>
          <h1 className={styles.HelloFont} >&#9756;</h1>
        </div>
      </div>
    </>
  );
}