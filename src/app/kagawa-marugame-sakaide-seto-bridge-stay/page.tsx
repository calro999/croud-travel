import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '【香川・丸亀＆坂出・瀬戸大橋】現存丸亀城・骨付鳥＆瀬戸大橋夕景宿 完全ガイド ｜ 日本全国・旅宿クラウド',
  description: '総高60mの日本一高い石垣を誇る現存木造十二天守「丸亀城」、全国に誇るご当地グルメ「元祖 骨付鳥（おや・ひな）」のスパイシーな肉汁、東山魁夷せとうち美術館から眺める瀬戸大橋の壮大なパノラマ、本場讃岐うどんの名店めぐり宿を徹底解説。',
  keywords: [
    '【香川・丸亀＆坂出・瀬戸大橋】石垣の名城丸亀城・元祖骨付鳥＆瀬戸大橋パノラマ宿 完全ガイド',
    '観光モデルコース',
    'おすすめ旅館',
    'おすすめホテル',
    '楽天トラベル',
    '絶景',
    'ご当地グルメ'
  ],
  openGraph: {
    title: '【香川・丸亀＆坂出・瀬戸大橋】現存丸亀城・骨付鳥＆瀬戸大橋夕景宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '総高60mの日本一高い石垣を誇る現存木造十二天守「丸亀城」、全国に誇るご当地グルメ「元祖 骨付鳥（おや・ひな）」のスパイシーな肉汁、東山魁夷せとうち美術館から眺める瀬戸大橋の壮大なパノラマ、本場讃岐うどんの名店めぐり宿を徹底解説。',
    type: 'article',
    url: 'https://croud-travel.com/kagawa-marugame-sakaide-seto-bridge-stay',
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* ヒーローヘッダー */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-black mb-6">
            <span>🗺️</span>
            <span>MARUGAME & SETO BRIDGE GUIDE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            【香川・丸亀＆坂出・瀬戸大橋】石垣の名城丸亀城・元祖骨付鳥＆瀬戸大橋パノラマ宿 完全ガイド
          </h1>
          <p className="max-w-3xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            白壁の木造天守を戴く日本一の高石垣「丸亀城」。四層に重なる扇の勾配と呼ばれる美しい曲線美の石垣が旅人を圧倒します。全国の肉好きを唸らせるスパイシーな丸亀発祥のご当地グルメ「骨付鳥」。瀬戸内海を跨いで本州と四国を結ぶ世紀の大架橋「瀬戸大橋」。夕景に浮かび上がる橋梁美を望む「東山魁夷せとうち美術館」と、朝から行列ができる名門讃岐うどん店。歴史・橋梁・美食が凝縮した香川・中讃ステイへご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-stone-400">
            <span className="flex items-center gap-1">📍 厳選見どころ・観光スポット網羅</span>
            <span>•</span>
            <span className="flex items-center gap-1">♨️ 露天風呂・名湯ホテル</span>
            <span>•</span>
            <span className="flex items-center gap-1">🍱 地元旬菜・名物グルメ</span>
            <span>•</span>
            <span className="flex items-center gap-1">✅ 楽天トラベルリアルタイム空室連携</span>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* セクション 1 */}
        <section className="bg-stone-900/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-4">
            日本一の石垣美と現存十二天守
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            1. 丸亀城天守（扇の勾配・高石垣六十メートル）＆丸亀うちわ伝統工芸体験
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            築城四百年の歴史を刻む「丸亀城」。山麓から天守まで四段に重ねられた石垣の総高は約60mにおよび日本一の高さを誇ります。反り返る曲線が優美な「扇の勾配」の石垣の上には、全国に現存する木造十二天守の一つである三重三階の小ぶりで美しい天守が凛と佇みます。城下町は日本のうちわ生産量シェア9割を誇る伝統工芸「丸亀うちわ」の産地でもあり、職人の技に触れる手作り体験も人気です。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（春の桜まつりと石垣ライトアップ、新緑のお城散歩、秋の菊花展）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">丸亀城天守・大手一の門・見返り坂、うちわの港ミュージアム、丸亀市猪熊弦一郎現代美術館（MIMOCA）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR予讃線「丸亀駅」下車徒歩約15分。高松自動車道「善通寺IC」または「坂出IC」より車で約15分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">丸亀駅前にある「猪熊弦一郎現代美術館（MIMOCA）」は、谷口吉生設計の洗練された空間にモダンアートが広がる必見の現代アートスポットです。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="109518" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/109518/109518.jpg"
                          alt="ホテルルートイン丸亀"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (650+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルルートイン丸亀
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ＷＯＷＯＷ全室で無料視聴可■男女別大浴場完備■朝食バイキング無料！24時間チェックインOK
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県丸亀市田村町二丁田512-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥6,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109518"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="178679" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/178679/178679.jpg"
                          alt="スーパーホテル丸亀駅前　天然温泉「京極の湯」"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.3 (948+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        スーパーホテル丸亀駅前　天然温泉「京極の湯」
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ＪＲ予讃線「丸亀」駅から徒歩約4分！男女別天然温泉、無料健康朝食。無料平面駐車場約１１０台完備！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県丸亀市通町142-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥4,260〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D178679"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="12630" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/12630/12630.jpg"
                          alt="丸亀プラザホテル"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.1 (1606+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        丸亀プラザホテル
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        室内バス及びウォシュレット付・全室ゆとりのセミダブルベッド・お部屋にてインターネット可（無料）
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県丸亀市塩飽町50-3
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥3,900〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12630"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="80598" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/80598/80598.jpg"
                          alt="アパホテル〈丸亀駅前大通〉"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (2041+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        アパホテル〈丸亀駅前大通〉
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        JR予讃線「丸亀駅」南口から徒歩5分（高松駅より特急で3駅約30分。岡山駅より特急で約40分）
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県丸亀市大手町3-6-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥3,762〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D80598"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
    
          </div>
        </section>
    


        {/* セクション 2 */}
        <section className="bg-stone-900/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-4">
            ニンニクとスパイスが弾ける丸亀のソウルフード
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            2. 元祖「骨付鳥」（おやどり・ひなどり）＆早朝営業の本場讃岐うどん巡礼
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            丸亀市を発祥とする全国的人気グルメ「骨付鳥」。鶏のもも肉を特製のスパイスとニンニクでじっくりオーブンで焼き上げ、皮はパリッと中は肉汁が溢れ出します。歯ごたえと深い旨味が癖になる「おやどり」と、柔らかくジューシーな「ひなどり」の食べ比べが王道。お皿に残った秘伝の油におにぎりを浸して食べるのが本場の流儀。翌朝は近隣の製麺所直営の讃岐うどん店で打ちたてのうどんをすする黄金コースです。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（年中味わえる熱々ジューシーなご当地グルメ、朝うどん体験）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">一鶴（骨付鳥発祥の店 各店）、讃岐うどん名店各店（日の出製麺所、よしや、なかむら等）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR丸亀駅周辺に骨付鳥の名店が集中。早朝うどん店へはレンタカーが便利。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">超有名店「日の出製麺所（坂出市）」の店頭うどん営業時間は「昼の11:30〜12:30のわずか1時間」という幻のうどん店として有名です。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="70208" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/70208/70208.jpg"
                          alt="ホテルルートイン坂出北インター"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (736+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルルートイン坂出北インター
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能（一般映画のみ：コンフォートルーム特典）
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県坂出市西大浜北4-5-31
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥5,575〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70208"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="80598" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/80598/80598.jpg"
                          alt="アパホテル〈丸亀駅前大通〉"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (2041+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        アパホテル〈丸亀駅前大通〉
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        JR予讃線「丸亀駅」南口から徒歩5分（高松駅より特急で3駅約30分。岡山駅より特急で約40分）
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県丸亀市大手町3-6-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥3,762〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D80598"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="143328" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/143328/143328.jpg"
                          alt="ホテルアネシス瀬戸大橋"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (1633+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルアネシス瀬戸大橋
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        丸亀・坂出より一駅５分、ＪＲ宇多津駅より徒歩０分！香川県下で最も駅からフロントが近いホテルです。ご宿泊のお客様は朝食無料！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県綾歌郡宇多津町浜六番丁81-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥1〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D143328"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
    
          </div>
        </section>
    


        {/* セクション 3 */}
        <section className="bg-stone-900/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-4">
            世紀の大架橋と日本画の巨匠の美意識
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            3. 瀬戸大橋パノラマ記念公園＆東山魁夷せとうち美術館・沙弥島サンセット
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            坂出市から岡山県倉敷市まで、瀬戸内海の島々を飛び石にして渡る全長9.4kmの「瀬戸大橋」。橋のたもとに位置する「瀬戸大橋記念公園」の回転展望タワーからは、雄大な橋梁と多島美の全景を360度見渡せます。万葉の歴史が息づく沙弥島（しゃみじま）に建つ「香川県立東山魁夷せとうち美術館」は、カフェの巨大ガラス窓越しに瀬戸大橋を一幅の絵画のように望める絶景美術館です。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（毎週土曜日や特定日の瀬戸大橋ライトアップ、夕暮れマジックアワー）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">瀬戸大橋記念公園・タワー、香川県立東山魁夷せとうち美術館、沙弥島（瀬戸内国際芸術祭会場）、番の州臨海公園</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR坂出駅より坂出市営バス（瀬戸大橋記念公園行）で約20分。瀬戸中央道「坂出北IC」すぐ。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">毎週土曜日や連休の日没後には瀬戸大橋が黄金色にライトアップされ、漆黒の瀬戸内海に浮かび上がる光のアーチはロマンチックの極みです。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="143328" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/143328/143328.jpg"
                          alt="ホテルアネシス瀬戸大橋"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (1633+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルアネシス瀬戸大橋
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        丸亀・坂出より一駅５分、ＪＲ宇多津駅より徒歩０分！香川県下で最も駅からフロントが近いホテルです。ご宿泊のお客様は朝食無料！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県綾歌郡宇多津町浜六番丁81-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥1〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D143328"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="70208" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/70208/70208.jpg"
                          alt="ホテルルートイン坂出北インター"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (736+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルルートイン坂出北インター
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能（一般映画のみ：コンフォートルーム特典）
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県坂出市西大浜北4-5-31
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥5,575〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70208"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="15414" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/15414/15414.jpg"
                          alt="坂出グランドホテル"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 3.8 (1983+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        坂出グランドホテル
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        懐かしいぬくもりとクラシカルな趣。心温まるひと時を。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県坂出市西大浜北1-2-33
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥3,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15414"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="17901" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/17901/17901.jpg"
                          alt="坂出プラザホテル"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (2543+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        坂出プラザホテル
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ★自家製朝食ビュッフェ・クチコミ4.7★楽天アワード４年連続受賞★姉妹館美肌温泉無料★坂出北インタ近
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 香川県坂出市西大浜北3-2-43
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥5,100〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
    
          </div>
        </section>
    

        {/* まとめ・下部ナビ */}
        <section className="bg-stone-900/60 rounded-3xl p-8 border border-stone-800 text-center space-y-6 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-amber-200">
            四季の感動に出逢う、極上のステイへ出かけよう
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            日本各地の風土が育んだ奇跡の景観、受け継がれる伝統文化、そして心ほどける名湯。
            お気に入りの宿を見つけて、特別な旅の思い出を刻んでみませんか。
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-bold rounded-2xl transition border border-stone-700"
            >
              ← トップページへ戻る
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
