import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '【熊本・天草五橋＆崎津集落】世界遺産海の天主堂・イルカ遭遇＆車海老宿 完全ガイド ｜ 日本全国・旅宿クラウド',
  description: '世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の象徴・海の天主堂「崎津集落」、天草五橋（天草パールライン）の絶景シーサイドドライブ、通年98％の遭遇率を誇る「野生のミナミハンドウイルカウォッチング」、本場天草車海老と地魚宿を徹底解説。',
  keywords: [
    '【熊本・天草五橋＆下島・崎津集落】世界遺産崎津天主堂・天草五橋＆野生イルカ・車海老宿 完全ガイド',
    '観光モデルコース',
    'おすすめ旅館',
    'おすすめホテル',
    '楽天トラベル',
    '絶景',
    'ご当地グルメ'
  ],
  openGraph: {
    title: '【熊本・天草五橋＆崎津集落】世界遺産海の天主堂・イルカ遭遇＆車海老宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の象徴・海の天主堂「崎津集落」、天草五橋（天草パールライン）の絶景シーサイドドライブ、通年98％の遭遇率を誇る「野生のミナミハンドウイルカウォッチング」、本場天草車海老と地魚宿を徹底解説。',
    type: 'article',
    url: 'https://croud-travel.com/kumamoto-amakusa-sakitsu-dolphin-islands-stay',
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
            <span>AMAKUSA & SAKITSU HERITAGE GUIDE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            【熊本・天草五橋＆下島・崎津集落】世界遺産崎津天主堂・天草五橋＆野生イルカ・車海老宿 完全ガイド
          </h1>
          <p className="max-w-3xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            大小120余の島々が紺碧の海に浮かぶ天草諸島。九州本土と天草を結ぶ5つの橋を渡る爽快なドライブウェイ「天草五橋（パールライン）」。静かな漁村の海辺にゴシック様式の尖塔が佇む世界遺産「崎津集落・崎津天主堂」。有明海と早崎海峡に約200頭が生息する野生イルカとの感動的な出逢い。そして日本屈指の生産量を誇る甘みたっぷりの「天草車海老」と名湯・下田温泉。キリシタン史跡と豊かな海の生命が息づく天草ステイへご案内します。
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
            世界遺産・潜伏キリシタンと海の天主堂
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            1. 世界文化遺産「崎津集落」＆崎津天主堂（畳敷きのゴシック教会と漁村景観）
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            禁教期にも仏教や神道と共生しながら信仰を守り続けた「天草の崎津集落」。穏やかな羊角湾に面した静かな漁港にそびえる「崎津天主堂」は、ハルブ神父によって再建された国内でも極めて珍しい「内部が畳敷き」のゴシック建築。海辺の家々が海に向かってせり出す伝統の「カケ」や、細い小路「トーヤ」が網の目のように続く独特の漁村景観が心を打ちます。丘の上の崎津諏訪神社からは集落全体と天主堂を一望できます。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（春〜秋の澄んだ海、クリスマスのライトアップ、夕暮れの漁港風景）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">崎津集落・崎津天主堂（世界文化遺産）、崎津諏訪神社、崎津資料館みなと屋、大江天主堂（丘の上のロマネスク様式白亜教会）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">天草空港より車で約50分。熊本駅より快速バス「あまくさ号」で本渡バスセンター経由約2時間30分。松島有料道路「上島IC」より車で約1時間15分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">崎津天主堂の内部見学は信者の祈りの場であるため、事前予約（長崎と天草地方の潜伏キリシタン関連遺産インフォメーション）が推奨されています。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="68202" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/68202/68202.jpg"
                          alt="松島温泉　天草渚亭"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.7 (217+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        松島温泉　天草渚亭
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        天草でも珍しいオーシャンフロント旅館★鮮度バツグンの海鮮料理、魚釣り…いざ！渚亭
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県上天草市松島町阿村5650-2
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥33,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68202"
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
              
                <div key="162876" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/162876/162876.jpg"
                          alt="天草下田温泉　富士広旅館"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (14+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        天草下田温泉　富士広旅館
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        天然かけ流しの天草下田温泉。家族で営む小さくて古い建物ですが四季折々の海の幸を低価格で楽しめます。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県天草市天草町下田北1302
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥8,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D162876"
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
              
                <div key="54541" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/54541/54541.jpg"
                          alt="下田温泉　伊賀屋旅館"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (233+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        下田温泉　伊賀屋旅館
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        伊勢海老まつり【夕食は部屋食】下田温泉一の老舗温泉旅館で、天草のとれたて地魚を堪能
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県天草市天草町下田温泉1296-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥14,300〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54541"
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
              
                <div key="38288" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/38288/38288.jpg"
                          alt="植木温泉発祥の宿　旅館　松乃湯"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (196+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        植木温泉発祥の宿　旅館　松乃湯
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        開湯130年植木温泉発祥の宿で美肌の湯を堪能★熊本ICから車で7分！夕食は熊本の和会席に舌鼓　
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県熊本市北区植木町米塚208
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥5,250〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38288"
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
            島々を渡る日本屈指のシーサイドウェイ
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            2. 天草五橋「天草パールライン」ドライブ＆千巌山展望台（多島美パノラマ）
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            宇土半島先端の三角から大矢野島、永浦島、大池島、前島を経て天草上島までを結ぶ国道266号線・天草五橋。1号橋（天門橋）から5号橋（松島橋）まで、異なる構造の美しい橋で島々を渡る日本屈指のドライブコースです。名勝「千巌山展望台」からは、紺碧の海に浮かぶ天草の島々と五橋の全貌を360度の大パノラマで見渡せます。橋のたもとには海の見えるお洒落なリゾートカフェやマリーナが点在します。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（初夏〜夏のコバルトブルーの海、秋の夕暮れパノラマ）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">天草五橋（天門橋・大矢野橋・中の橋・前島橋・松島橋）、千巌山展望台、リゾラテラス天草、ミオ・カミーノ天草</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">九州自動車道「松橋IC」より車で約40分（三角大矢野道路経由）。JR三角線「三角駅」より車で約15分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">「リゾラテラス天草」では、天草の海を望むオープンテラスで特製の天草塩パンや地魚ランチを楽しめ、ドライブの休憩に最適です。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="67290" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/67290/67290.jpg"
                          alt="天草温泉　ホテルアレグリアガーデンズ天草"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (744+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        天草温泉　ホテルアレグリアガーデンズ天草
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        広大なリゾート、ゆっくりと楽しめる楽園、藍の島をお楽しみ下さい。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県天草市本渡町広瀬996
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥9,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67290"
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
              
                <div key="142536" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/142536/142536.jpg"
                          alt="Ｈｏｔｅｌ　Ｓｅａ　Ｓｈｅｌｌ"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.3 (137+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        Ｈｏｔｅｌ　Ｓｅａ　Ｓｈｅｌｌ
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        全室オーシャンビューのゲストルーム。 東京から2時間のリゾート
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 静岡県下田市白浜1755
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥11,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D142536"
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
              
                <div key="41854" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/41854/41854.jpg"
                          alt="亀の井ホテル　阿蘇"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (853+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        亀の井ホテル　阿蘇
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        お部屋の随所で「くまモン」と出会えるくまモンルームがおすすめ◆阿蘇五岳を一望できる温泉リゾートホテル
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県阿蘇市一の宮町宮地5936
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥8,210〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41854"
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
            遭遇率98％の奇跡と極上の車海老
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            3. 通詞島沖「野生イルカウォッチング」＆本場天草車海老・下田温泉夕日宿
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            天草下島北部の通詞島（つうじしま）周辺の海域には、約200頭の野生のミナミハンドウイルカが定住しており、クルーザーに乗って沖合わずか10分ほどでイルカの群れに出逢えます。船のすぐ横をジャンプしたり親子で泳ぐ姿は感動の連続。また天草は車海老養殖発祥の地として知られ、踊り食いや塩焼き、サクサクの天ぷらで味わう車海老は格別。天草最古の歴史を誇る西海岸の「下田温泉」からは東シナ海に沈む感動の夕日を望めます。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（年中約200頭が生息、波の穏やかな春〜秋がベストシーズン）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">イルカウォッチング受付各社（五和町）、通詞島風車、天草下田温泉（国民保養温泉地）、十三仏公園（夕日百選）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">本渡市街地より車で約25分。下田温泉へは本渡より車で約40分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">下田温泉は西海岸に位置するため、夕暮れ時の露天風呂からは東シナ海が真っ赤に染まる圧巻の夕日パノラマを堪能できます。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="67290" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/67290/67290.jpg"
                          alt="天草温泉　ホテルアレグリアガーデンズ天草"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (744+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        天草温泉　ホテルアレグリアガーデンズ天草
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        広大なリゾート、ゆっくりと楽しめる楽園、藍の島をお楽しみ下さい。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県天草市本渡町広瀬996
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥9,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67290"
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
              
                <div key="173017" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/173017/173017.jpg"
                          alt="大江戸温泉物語　天草ホテル亀屋"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (807+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        大江戸温泉物語　天草ホテル亀屋
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        「日本の夕陽百選」に選ばれた絶景を眺める温泉と 天草ならではの海の幸をご堪能ください
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県上天草市大矢野町中4463-2
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥10,500〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D173017"
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
              
                <div key="10814" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/10814/10814.jpg"
                          alt="天草プリンスホテル"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.3 (130+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        天草プリンスホテル
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        『天草生うに三昧』開催中！5/31まで。有明海を一望！新鮮な海の幸が自慢の宿です。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県天草市東町92
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥5,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10814"
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
              
                <div key="37953" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/37953/37953.jpg"
                          alt="天草温泉　ホテル松竜園　海星"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 3.9 (291+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        天草温泉　ホテル松竜園　海星
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        眼下にひろがる海のパノラマ。天草発！豪快な海鮮料理。やさしさあふれる海の温泉をたっぷりどうぞ。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県上天草市大矢野町上6494
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥3,450〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37953"
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
