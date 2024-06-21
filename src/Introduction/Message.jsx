import { useEffect, useRef } from 'react';
import Desktop from './Personality.module.css';
import global from './global.module.css'
import picture from '/logo.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Message() {
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
      <div className={`${Desktop.container} ${global.container_top_500}`}>
        <div className={Desktop.MyPictureContainer}>
            <img ref={imgRef} src={picture} alt='logo img'/>
        </div>
        <div className={Desktop.IntroduceContainer}>
          <h1>課題</h1>
             <p>
                42Tokyoでの学びを通じて、私は多様なプロジェクトに取り組んできました。<br></br>
                特に、下にある動画では、Transcendenceプロジェクトで3人のチームでPongゲームをプレイヤー同士でプレイできるフルスタックWebサイトを構築し、
                チャット機能や招待機能、画像設定機能、ゲームモード選択機能などを実装しました。
                私はこのプロジェクトでCSS、HTML、Figmaを使ったデザインを担当し、この経験がWeb制作に対する興味を持つきっかけになりました。<br/>
                また、標準Cライブラリのprintf関数を再実装するプロジェクトでは、
                可変引数の処理、フォーマット文字列の解析、文字列操作、メモリ管理について学習しました。
                Philosophersプロジェクトでは、哲学者の食事問題を解決することで並行プログラミングの概念を学び、
                スレッドの使用やミューテックス、セマフォを用いた同期、競合状態の回避、デッドロックの防止のスキルを習得しました。
                InceptionプロジェクトではDockerと仮想化技術を使用して複数のサービスを連携させ、
                Dockerの基本と応用、コンテナオーケストレーション、サービス間のネットワーキング、DevOpsの基本概念を習得しました。<br/>
                Born2berootプロジェクトでは、仮想マシンを構築し、ユーザー管理、サービスとデーモンの管理、ファイルシステムの管理、
                ネットワーキング、セキュリティ設定、スクリプト作成、システムの監視とログ管理のスキルを身につけました。
            </p>
        </div>
      </div>
    </>
  );
}
