import { useEffect, useRef } from 'react';
import Desktop from './Personality.module.css';
import global from './global.module.css'
import MyPicture from '/42Tokyo3.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Tokyo42() {
  const imgRef = useRef(null);
  const TextP = useRef(null);
  const Title = useRef(null);


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
      <div className={`${Desktop.container} ${global.container_top_100}`}>

        <div className={Desktop.MyPictureContainer}>
          <img ref={imgRef} src={MyPicture} alt='42tokyo picture' />
        </div>
        <div className={Desktop.IntroduceContainer}>
          <h1>飲み会のノリで学ぶ</h1>
          <p>
              私は2年半42Tokyoに在籍していました。
              42Tokyoと言うとエンジニアスクールとホームページでは説明されておりますが、実際は「スクール」という一言では言い表せないと私は感じております。<br />
              敢えて言い表すのであれば、42Tokyoは 「飲み会のノリでコードを書く場所」といっても過言ではない気がします。
              まず、42Tokyoの最大の特徴はその自由さです。<br />
              従来の学校のように、教師がいて授業があるわけではありません。生徒同士が自発的に学び合い、助け合う環境が整っています。
              課題が与えられ、それをクリアするために必要なスキルや知識を自分で探し、学んでいくプロセスは、まるで仲間と一緒に難問に挑戦するアドベンチャーゲームのようです。
              この自主性が要求される環境は、飲み会のノリでわいわいと楽しみながらも、確実に成長していくことができる理由の一つです。
              また、42Tokyoには年齢やバックグラウンドが異なる多様なメンバーが集まっています。
              新卒の学生から、キャリアチェンジを目指す社会人まで、様々な人が一つのコミュニティに共存しています。この異なるバックグラウンドを持つメンバー同士の交流が、新しいアイデアや視点を生み出し、プロジェクトに新たな刺激を与えてくれます。
              さらに、42Tokyoでは評価の方法も独特です。
              全ての課題はピアレビュー方式で評価され、他の生徒からのフィードバックを受けて、自分のコードを改善していきます。このプロセスは、自分のスキルを客観的に見直す機会を与えてくれるだけでなく、他人のコードを読む力も養われます。
              私自身、42Tokyoでの学びを通じて、単なる技術力の向上にとどまらず、自ら考え、行動し、問題を解決する力を身につけることができました。これらの経験は、エンジニアとしてのキャリアにおいて非常に貴重な財産となっています。<br />
              飲み会のノリで楽しく学びながらも、確実にスキルを磨くことができる42Tokyoは、まさにユニークで特別な場所です。
          </p>
        </div>
      </div>
    </>
  );
}
