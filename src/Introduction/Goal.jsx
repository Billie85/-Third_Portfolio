import { useEffect, useRef } from 'react';
import Desktop from './Personality.module.css';
import global from './global.module.css'
import MyPicture from '/Myimg2.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Goal() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {

      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom',
          scrub: 1.9,
        },
        yPercent: -60
      })

      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom',
          scrub: 1.9,
        },
        scale: 1.4,
      })
    } 
  }, []);
  return (
    <>
      <div className={`${Desktop.container} ${global.container_top_400}`}>
        <div className={Desktop.IntroduceContainer}>
          <h1>全ての技術を融合する存在へ</h1>
          <p>
            私は、UI/UX設計から映像や写真制作まで、ウェブ制作に必要なすべてのスキルを身につけることを目指しています。
            これにより、ユーザーにとって使いやすく、美しく、魅力的なウェブサイトやアプリケーションを一貫して作り上げることができるエンジニアになることを目標としています。
            具体的には、UI/UX設計ではユーザーのニーズを深く理解し、直感的で使いやすいインターフェースをデザインするスキルを磨いています。ユーザーテストやプロトタイピングを通じて、ユーザー体験を向上させるための改善を継続的に行います。
            さらに、映像や写真制作のスキルも習得することで、ビジュアルコンテンツのクオリティを高め、ウェブサイトの魅力を最大限に引き出すことができます。これにより、単なる情報提供の場としてだけでなく、ユーザーの感情に訴えかけるエンターテインメント性やストーリーテリングの要素を取り入れたデザインを提供したいと考えています。
            私の最終的な目標は、CSS Awardなどのコンテストで賞を獲ることです。これは、自分のスキルが業界で高く評価されることを示す一つの指標であり、自分の成長を確認するための重要なステップだと考えています。コンテストに参加することで、最新のデザイントレンドや技術を学び、常に高いレベルでのパフォーマンスを維持することができます。
            これまでに培ってきた技術力と語学力を活かし、最新の情報にアクセスし続けながら、独自の視点で革新的なウェブ制作に挑戦していきます。
          </p>
        </div>
      <div className={Desktop.MyPictureContainer}>
        <img ref={imgRef} src={MyPicture} alt='My picture' />
      </div>
      </div>
    </>
  );
}
