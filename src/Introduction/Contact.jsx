import { useEffect, useRef } from 'react';
import Desktop from './Personality.module.css';
import global from './global.module.css'
import picture from '/logo.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {

      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom',
          scrub: 1.9,
        },
        yPercent: -40
      })

      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom',
          scrub: 1.9,
        },
        scale: 1.2,
      })
    } 
  }, []);
  return (
    <>
      <div className={`${Desktop.container} ${global.container_top_700}`}>
        <div className={Desktop.IntroduceContainer}>
          <h1>最後に</h1>
             <p>
             最後まで読んでいただき、ありがとうございました。<br />
             私はWeb制作に強い興味があり、これまでの学びや経験を通じて、多様な技術スキルを身につけてきました。
             特に、42Tokyoでの2年半の経験は、私の技術力と問題解決能力を大いに高めました。さらに、日本語、英語、ポルトガル語を駆使して、
             最新の技術動向や業界のベストプラクティスを迅速に取り入れ、常に最前線での学びを続けています。
             私の目標は、「全ての技術を融合する存在へ」と進化することです。UI/UXデザインから映像や写真制作まで、
             ウェブ制作に必要なすべてのスキルを身につけ、ユーザーにとって魅力的で直感的な体験を提供することを目指しています。
             将来的には、CSS Awardのようなコンテストで賞を獲得し、私のスキルが業界で高く評価されることを目指しています。
             私は常に新しい挑戦を求め、創造力と好奇心を持って学び続けています。多言語スキルを活かして国際的な視点を取り入れ、独自の視点で革新的なウェブ制作に取り組んでいきます。
             10年後には、ウェブ制作におけるすべての素材を自分で作成できるエンジニアとして成長し、業界での評価を確立することを目指します。

             また、私の目指すクリエイティブな環境とは、常に新しいアイデアや技術を探求し、実践できる場所です。
             そこでは、自分の創造力を最大限に発揮し、ユーザーに感動を与えるようなウェブサイトやアプリケーションを作り上げることができます。
             私は、そのような環境で働き、最善の力を尽くしてチームに貢献したいと考えています。
            </p>
        </div>
        <div className={Desktop.textContainer}>
            <a href='https://www.instagram.com/styles.hello?igsh=N2hhbmJ1dzJzbHJ6&utm_source=qr' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='https://github.com/Billie85' target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href='https://42tokyo.jp/' target="_blank" rel="noopener noreferrer">42Tokyo</a>
        </div>
      </div>
    </>
  );
}
