import Mobile from './Design/Mobile.module.css';
import Desktop from './Design/Desktop.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState  } from 'react';
import MyPicture from '/MyPicture.png';


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ScrollAnimation = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    if (!ScrollAnimation.current) return;

    const cont = ScrollAnimation.current;
    const totalWidth = cont.scrollWidth;

    gsap.to(cont, {
      x: () => -(totalWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: cont,
        start: 'top top',
        end: () => `+=${totalWidth - window.innerWidth + 800}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, [windowWidth]);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let v;
  if (windowWidth >= 320 && windowWidth <= 768) {
    v = (
      // スマートフォン
      <div className={Mobile.container}>
        <div className={Mobile.MyPictureContainer}>
          <div className={Mobile.img}>
            <img className={Mobile.MyImg} alt="" src={MyPicture} />
          </div>
        </div>

        <div className={Mobile.NameContainer}>
          <h1 className={Mobile.NameFont}>Ayumi Kimura</h1>
        </div>
        
        <div className={Mobile.IntroduceContainer}>
          <div className={Mobile.box}>
            <p>
              こんにちは 木村歩美と申します。<br />私はブラジルで生まれ日本で育ちました。
              高校を卒業後、新しい挑戦を求めて2年半エンジニアリングスクール42tokyoに入学しました。
              そこでの学びの中で最も印象に残ったのは、チームでフルスタックのWebアプリケーションを開発し、デザインを担当した経験です。
              Udemyや公式ドキュメントなどを使い、デザインを基礎から学び始めましたが、チームの希望するデザインや自分のやりたいデザインを
              想像通りに実現できるまでに成長できました。

              私の強みは、42tokyoで培った自学とピアラーニングの精神です。
              42 Tokyoには教師が存在せず、自学とピアラーニングを通じて技術習得をします。
              これにより、どんな課題でも自分で学び、実践に活かすことができます。
              また、C、C++、CSS、HTML、JavaScript、Docker、Figma、Reactなど、
              多様な技術を使えることが私の強みです。
              他にも私の強みは、ポルトガル語、英語、日本語を話せることです。
              10年後には、Web制作で使われる全ての素材を作成できるようになることを目標にしています。
              また、CSS Awardのようなウェブ制作コンテストに参加することも目指しています。
              私を一言で表すと「七転び八起き」です。常に上を目指し、自分よりレベルの高いデザインや技術を見てモチベーションを高めています。
              よろしくお願いします。
            </p>
          </div>
        </div>
      </div>
    )
  } 
  else if (windowWidth >= 769) {
    v = (
      // デスクトップ
      <div className={Desktop.container} ref={ScrollAnimation}>
        <div className={Desktop.MyPictureContainer}>
          <div className={Desktop.img}>
            <img className={Desktop.MyImg} alt="" src={MyPicture} />
          </div>
        </div>

        <div className={Desktop.NameContainer}>
          <h1 className={Desktop.NameFont}>Ayumi Kimura</h1>
        </div>

        <div className={Desktop.hogeContainer}></div>

        <div className={Desktop.IntroduceContainer}>
        <div className={Desktop.box}>
            <p>
              <span className={Desktop.TextDesign}>こんにちは 木村歩美と申します。</span><br />私はブラジルで生まれ日本で育ちました。
              高校を卒業後、新しい挑戦を求めて2年半エンジニアリングスクール42tokyoに入学しました。
              そこでの学びの中で最も印象に残ったのは、チームでフルスタックのWebアプリケーションを開発し、デザインを担当した経験です。
              Udemyや公式ドキュメントなどを使い、デザインを基礎から学び始めましたが、チームの希望するデザインや自分のやりたいデザインを
              想像通りに実現できるまでに成長できました。
            </p>
          </div>

          <div className={Desktop.box}>
            <p>
              私の強みは、42tokyoで培った自学とピアラーニングの精神です。
              42 Tokyoには教師が存在せず、自学とピアラーニングを通じて技術習得をします。
              これにより、どんな課題でも自分で学び、実践に活かすことができます。
              また、C、C++、CSS、HTML、JavaScript、Docker、Figma、Reactなど、
              多様な技術を使えることが私の強みです。
              他にも私の強みは、ポルトガル語、英語、日本語を話せることです。
              10年後には、Web制作で使われる全ての素材を作成できるようになることを目標にしています。
              また、CSS Awardのようなウェブ制作コンテストに参加することも目指しています。
              私を一言で表すと「七転び八起き」です。
              常に上を目指し、自分よりレベルの高いデザインや技術を見てモチベーションを高めています。
              よろしくお願いします。
            </p>
          </div>
        </div>

        <div className={Desktop.ArrowContainer}>
          <h1 className={Desktop.ArrowFont}>&#9756;</h1>
        </div>
      </div>
    )
  }
  return (
    <>
      {v}
    </>
  );
}