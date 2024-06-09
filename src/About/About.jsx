import Desktop from './Design/Desktop.module.css';
import MyPicture from '/MyPicture.png';
export default function About() {
  
  return (
    <>
      <div className={Desktop.container}>
        <div className={Desktop.MyPictureContainer}>
          <div className={Desktop.img}>
            <img className={Desktop.MyImg} alt="" src={MyPicture} />
          </div>
        </div>

        <div className={Desktop.IntroduceContainer}>
              <h1>Ayumi Kimura</h1>
              <span>こんにちは 木村歩美と申します。</span>
              <p>高校を卒業後、新しい挑戦を求めて2年半エンジニアリングスクール42tokyoに入学しました。</p>
              <p>そこでの学びの中で最も印象に残ったのは、チームでフルスタックのWebアプリケーションを開発し、デザインを担当した経験です。</p>
              <p>Udemyや公式ドキュメントなどを使い、デザインを基礎から学び始めましたが、チームの希望するデザインや自分のやりたいデザインを想像通りに実現できるまでに成長できました。</p>
              <p>私の強みは、42tokyoで培った自学とピアラーニングの精神です。</p>
              <p>42 Tokyoには教師が存在せず、自学とピアラーニングを通じて技術習得をします。</p>
              <p>これにより、どんな課題でも自分で学び、実践に活かすことができます。</p>
              <p>また、C、C++、CSS、HTML、JavaScript、Docker、Figma、Reactなど、多様な技術を使えることが私の強みです。</p>
              <p>他にも私の強みは、ポルトガル語、英語、日本語を話せることです。</p>
              <p>10年後には、Web制作で使われる全ての素材を作成できるようになることを目標にしています。</p>
              <p>また、CSS Awardのようなウェブ制作コンテストに参加することも目指しています。</p>
              <p>私を一言で表すと「七転び八起き」です。</p>
              <p>常に上を目指し、自分よりレベルの高いデザインや技術を見てモチベーションを高めています。</p>
              <p>よろしくお願いします。</p>
          </div>
        </div>
    </>
  );
}
