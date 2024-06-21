import { useEffect, useRef } from 'react';
import Desktop from './Personality.module.css';
import global from './global.module.css'
import picture from '/Myimg1.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Strengths() {
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
      <div className={`${Desktop.container} ${global.container_top_200}`}>
        <div className={Desktop.IntroduceContainer}>
          <h1>強み</h1>
          <p>
            私の強みは多言語スキル日本語、英語、ポルトガル語を流暢に話すことができ、異なる文化背景を持つ人々とのコミュニケーションに優れています。
            自学と継続力:UdemyやYouTubeを活用して、独学で新しい技術を学び続けています。特に動画学習を好み、実践的なスキルを磨いています。
            問題解決能力:42Tokyoでのプロジェクトを通じて、問題解決のスキルを高めてきました。
            ピアレビュー方式で他の学生からのフィードバックを受け入れ、コードの品質を向上させることに努めています。
            デザインの感性:Figmaを使ってデザインを行い、チームでの話し合いを通じて、完成度の高いプロジェクトを作り上げています。
          </p>
        </div>
      <div className={Desktop.MyPictureContainer}>
        <img ref={imgRef} src={picture} alt='My picture' />
      </div>
      </div>
    </>
  );
}
