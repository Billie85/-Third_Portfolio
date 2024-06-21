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
          <h1>目標</h1>
          <p>
            私は将来的に、デザインもできるフロントエンドエンジニアとして成長することを目指しています。
            UI/UXデザインから映像や写真制作まで、ウェブ制作に必要なすべてのスキルを身につけることを目標にしています。
            また、CSS Awardのようなコンテストに参加し、動きがあり、見る人を感動させるようなウェブサイトを作成することを夢見ています。
            10年後には、ウェブ制作におけるすべての素材を自分で作成できるようになりたいと考えています。
          </p>
        </div>
      <div className={Desktop.MyPictureContainer}>
        <img ref={imgRef} src={MyPicture} alt='My picture' />
      </div>
      </div>
    </>
  );
}
