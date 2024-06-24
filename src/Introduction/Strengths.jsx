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
          <h1>語学力でエンジニアリングスキルをブースト</h1>
          <p>
            私は、多様な技術スキルと語学力、そして創造力と好奇心を活かして、複雑なプロジェクトを成功に導くことができるエンジニアです。技術面では、TypeScript、HTML、CSS、C/C++に精通しており、これらのスキルを駆使してユーザーフレンドリーで高性能なアプリケーションを開発することができます。
            特に、42Tokyoでの2年半の経験は、私の技術力、問題解決能力、そして創造力を大いに高めました。自由で自発的な学習環境の中で、仲間と協力しながら様々なプロジェクトに挑戦し、新しい技術やアイディアに対する好奇心を常に持ち続けています。この好奇心が、技術の習得と応用において大きな原動力となっています。
            私の最大の強みの一つは、多言語スキルです。日本語、英語、ポルトガル語を流暢に話すことができ、このトリリンガルの能力により、ネット上の多種多様な情報にアクセスできることが大きな強みです。最新の技術動向や業界のベストプラクティスに関する情報を、英語やポルトガル語のソースから直接入手し、理解することができます。これにより、最新の技術やトレンドを迅速に取り入れ、プロジェクトに反映させることができます。語学力は、私のエンジニアリングスキルを大いにブーストしています。
            さらに、私は自学と継続力にも自信があります。UdemyやYouTubeを活用して、独学で新しい技術を学び続けており、特に動画学習を通じて実践的なスキルを磨いています。
            デザインにおいても、チームとの協力を重視し、意見交換を通じてより良いプロジェクトを追求しています。このように、私のデザイン感性とユーザー体験へのこだわりが、プロジェクトの完成度を高めています。
            私の強みは、技術スキル、語学力、創造力、好奇心、そして継続的な学習能力にあります。これらの特性が組み合わさることで、エンジニアリングやクリエイティブな分野での成功を支える強力な基盤となっています。語学力によって多様な情報源にアクセスできることが、私のエンジニアリングスキルを大いにブーストし、常に最新の技術やトレンドを取り入れることが可能です。
          </p>
        </div>
      <div className={Desktop.MyPictureContainer}>
        <img ref={imgRef} src={picture} alt='My picture' />
      </div>
      </div>
    </>
  );
}
