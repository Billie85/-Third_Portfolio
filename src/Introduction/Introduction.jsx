import { useEffect, useRef } from 'react';
import Desktop from './Introduction.module.css';
import MyPicture from '/MyPicture.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(imgRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    }
  }, []);

  return (
    <>
      <div className={Desktop.container}>
        <div className={Desktop.MyPictureContainer}>
          <div className={Desktop.img} ref={imgRef}>
            <img className={Desktop.MyImg} alt="" src={MyPicture} />
          </div>
        </div>

        <div className={Desktop.IntroduceContainer}>
        <h1>飲み会のノリでコードを書く</h1>
        <p>
          こんにちは、木村歩美と申します。<br />
          高校を卒業後、新しい挑戦を求めて、2年半エンジニアリングスクール42Tokyoに入学しました。そこでの学びの中で最も印象に残ったのは、チームでフルスタックのWebアプリケーションを開発し、デザインを担当した経験です。Udemyや公式ドキュメントを使い、デザインの基礎から学び始めましたが、チームの希望するデザインや自分の理想のデザインを実現できるまでに成長しました。<br />
          42Tokyoはフランスから始まったコンピュータプログラミングエンジニア養成機関で、教師が存在しないのが特徴です。42Tokyoではコードを書くのが好きな人たちが集まり、飲み会に行く感覚で徹夜でコードを書いたり、教え合ったりしながら成長します。<br />
          そのため、私の強みは42Tokyoで培った自学とピアラーニングの精神です。これにより、どんな課題でも自分で学び、実践に活かすことができます。また、C、C++、CSS、HTML、JavaScript、Docker、Figma、Reactなど、多様な技術を使えることが私の強みです。さらに、ポルトガル語、英語、日本語を話せることも私の強みです。<br />
          10年後には、Web制作で使われる全ての素材を作成できるようになることを目標にしています。また、CSS Awardのようなウェブ制作コンテストに参加することも目指しています。<br />
          私を一言で表すと「七転び八起き」です。常に上を目指し、自分よりレベルの高いデザインや技術を見てモチベーションを高めています。<br />
          よろしくお願いします。
        </p>
          </div>
        </div>
    </>
  );
}
