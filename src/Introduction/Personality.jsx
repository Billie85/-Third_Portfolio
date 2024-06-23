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
          <h1>衝動に駆られるままに進み続ける</h1>
          <p>
            私は、創造力と好奇心に満ちた性格で、常に新しい挑戦を求めて行動しています。
            幼い頃から紙や粘土、木材などの素材を使ってアイデアを形にすることに喜びを感じてきました。
            特に、美術の時間は私にとって創造力を発揮する最高の場であり、与えられた素材を自由に使い、自分の好きなものを作り出すことに夢中でした。この創造力は、エンジニアリングの分野でも大いに役立っており、新しい技術やアイデアに対する好奇心と結びついています。
            私の性格は、衝動に駆られて行動することが多く、何か面白そうだと感じたらすぐに手を動かして試してみるタイプです。この行動力は私のスキルセットを広げ、問題解決能力を高める原動力となっています。42Tokyoでの2年半にわたる学びの中で、この衝動的な行動力を活かし、多くのプロジェクトに取り組んできました。自由で自発的な学習環境に身を置き、多様なバックグラウンドを持つ仲間たちと切磋琢磨しながら成長してきました。
            また、私は人との交流を通じて新しい視点や価値観を知ることが大好きです。相手がどんな考えを持っているのかを聞くことに興味があり、コミュニケーションを通じて得られる新しい知識や視点は私にとって大きな喜びです。アートが好きで、インスピレーションを得たりしています。
            衝動に駆られて行動する一方で、計画性も大切にしています。プロジェクトを進める上で目標を設定し、タスクを分割して効率的に進める方法を学びました。このバランス感覚が、私の成長を一層加速させています。困難な課題に対しても恐れず挑戦し、解決策を見つけるまで諦めない姿勢は、チームメンバーからも高く評価されています。
            私の性格は、創造力と好奇心、行動力と計画性のバランスが取れたものです。このような特性が、エンジニアリングやクリエイティブな分野での私の活躍を支えています。常に前向きな姿勢で新しいチャレンジを積極的に引き受け、立ち止まることなく学び続けることで、さらに成長していきたいと考えています。
          </p>
        </div>
      </div>
    </>
  );
}
