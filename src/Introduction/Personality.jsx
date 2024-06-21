import { useEffect, useRef } from 'react';
import Desktop from './Personality.module.css';
import global from './global.module.css'
import MyPicture from '/Myimg3.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Personality() {
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
      <div className={`${Desktop.container} ${global.container_top_300}`}>
      <div className={Desktop.MyPictureContainer}>
        <img ref={imgRef} src={MyPicture} alt='My picture' />
      </div>
        <div className={Desktop.IntroduceContainer}>
          <h1>性格</h1>
          <p>
            私は、自らを「七転び八起き」と表現するように、
            困難に直面しても立ち上がり続ける強い意志を持っています。
            しい技術やデザインの高みを目指して常に努力し続ける姿勢を大切にしています。
            ISFPの性格タイプであり、非定型的な生活スタイルを好みます。
            創造的で、周囲の意見やアイデアを聞くことを楽しむと同時に、独自の視点で物事を見ることができます。
          </p>
        </div>
      </div>
    </>
  );
}
