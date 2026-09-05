import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '【長崎・雲仙＆島原城】雲仙地獄・名水湧水武家屋敷＆小浜夕日温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
  description: '立ち込める湯けむりと硫黄の香り「雲仙地獄」、日本最初の国立公園に指定された高原リゾート、名水百選の水路が流れる「島原武家屋敷」と五層白亜の「島原城」、伝統名物「具雑煮」、日本一長い足湯と橘湾の夕日を望む小浜温泉を徹底解説。',
  keywords: [
    '【長崎・雲仙＆島原城・有明海】雲仙地獄白濁名湯・島原湧水武家屋敷＆具雑煮宿 完全ガイド',
    '観光モデルコース',
    'おすすめ旅館',
    'おすすめホテル',
    '楽天トラベル',
    '絶景',
    'ご当地グルメ'
  ],
  openGraph: {
    title: '【長崎・雲仙＆島原城】雲仙地獄・名水湧水武家屋敷＆小浜夕日温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '立ち込める湯けむりと硫黄の香り「雲仙地獄」、日本最初の国立公園に指定された高原リゾート、名水百選の水路が流れる「島原武家屋敷」と五層白亜の「島原城」、伝統名物「具雑煮」、日本一長い足湯と橘湾の夕日を望む小浜温泉を徹底解説。',
    type: 'article',
    url: 'https://croud-travel.com/nagasaki-unzen-shimabara-castle-volcano-stay',
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
            <span>UNZEN & SHIMABARA VOLCANO GUIDE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            【長崎・雲仙＆島原城・有明海】雲仙地獄白濁名湯・島原湧水武家屋敷＆具雑煮宿 完全ガイド
          </h1>
          <p className="max-w-3xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            地球のマグマの息吹が地表に噴き出す「雲仙地獄」の湯けむりと、強酸性の白濁硫黄泉が旅人を癒やす高原の名湯「雲仙温泉」。明治時代には外国人の避暑地として栄えた日本最古のパブリックリゾート。裾野に広がる「島原」は、湧水が路傍を潤し名水で泳ぐ錦鯉と白壁の武家屋敷、天草四郎の島原の乱を伝える白亜の島原城。有明海と橘湾の絶景海鮮を味わう島原半島周遊ステイへご案内します。
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
            日本最初の国立公園と白濁硫黄の噴気
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            1. 雲仙地獄めぐり（大叫喚地獄・お糸地獄）＆白濁源泉かけ流し老舗リゾート宿
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            キリシタン殉教の歴史を秘め、岩肌から白い噴気と熱湯がゴボゴボと湧き出す「雲仙地獄」。木道が整備された地獄地帯を歩けば、硫黄の香りと地球の強烈なエネルギーを五感で実感できます。名物の温泉スチームで蒸した「温泉たまご」や足元から地熱を感じる「足蒸し」も人気。強酸性の濃厚な硫黄泉は殺菌効果が高く美肌の湯としても知られ、クラシックホテルや露天風呂付き離れ宿で至福の湯浴みが楽しめます。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（春のミヤマキリシマ、夏の冷涼な避暑、秋の紅葉、冬の霧氷・温泉スチーム）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">雲仙地獄、雲仙ロープウェイ（仁田峠展望台・妙見岳）、雲仙ビジターセンター、お山の情報館、原生沼</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR長崎本線「諫早駅」より島鉄バスで約80分。長崎空港より諫早経由特急バスで約100分。長崎道「諫早IC」より約60分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">仁田峠展望台へ向かう雲仙ロープウェイからは、平成新山（普賢岳噴火で形成された最高峰）の荒々しい溶岩ドームを間近に望めます。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="31749" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/31749/31749.jpg"
                          alt="雲仙温泉　ゆやど　雲仙新湯"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (701+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        雲仙温泉　ゆやど　雲仙新湯
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        【美肌の湯】 は、どこよりも濃く。 “最上のご褒美” をお届け。個室食プラン、露天風呂付きプランあり
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 長崎県雲仙市小浜町雲仙320
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥8,893〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31749"
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
            水の都の白亜天守と名水百選の城下町
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            2. 島原城天守＆湧水庭園「四明荘」・武家屋敷水路散策・名物「具雑煮」グルメ
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            安土桃山様式の美しい五層白亜の天守がそびえる「島原城」。キリシタン史料や島原の乱の貴重な展示を鑑賞できます。城下には澄み切った名水が流れる水路沿いに江戸時代の武家屋敷が残り、住宅の庭園に一日3000トンもの清らかな水が湧き出す「四明荘」では座敷から透明な池を泳ぐ鯉を眺めながら優雅な時間を過ごせます。島原の乱の際に農民軍が炊いたとされる餅や山海の幸が山盛りの「具雑煮」は必食です。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（春の城まつり・桜並木、清涼な夏の湧水巡り、秋の島原城薪能）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">島原城天守・民具資料館、湧水庭園 四明荘、しまばら湧水館、武家屋敷通り（鉄砲町）、鯉の泳ぐまち、姫松屋（元祖具雑煮）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">島原鉄道「島原駅」より徒歩約5〜10分。熊本港より有明フェリー・九商フェリーで島原港へ約30〜60分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">島原名物スイーツ「かんざらし」は、白玉粉の小さな団子を湧水で冷やし、特製の蜜をかけた上品な甘さのご当地甘味です。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="4733" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/4733/4733.jpg"
                          alt="島原温泉　旅館海望荘"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (177+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        島原温泉　旅館海望荘
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        島原港の高台に位置し、有明海を一望！島原の自然の恵みを使った自慢の料理と温泉で癒しのひと時を
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 長崎県島原市下川尻町45
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥6,380〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4733"
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
              
                <div key="162772" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/162772/162772.jpg"
                          alt="ビジネス旅館　梅崎"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 3.6 (56+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ビジネス旅館　梅崎
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        シンプルでリーズナブルなバストイレ付のお部屋で、仕事でゆっくり、家族や友達と楽しくご利用できます
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県玉名郡長洲町長洲2864-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥4,900〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D162772"
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
              
                <div key="31933" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/31933/31933.jpg"
                          alt="雲仙温泉　雲仙スカイホテル"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 3.9 (397+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        雲仙温泉　雲仙スカイホテル
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        雲仙国立公園温泉街の中心に位置する温泉旅館。雲仙地蔵入口徒歩１分、源泉掛け流し大浴場露天風呂が自慢
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 長崎県雲仙市小浜町雲仙323-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥13,800〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31933"
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
              
                <div key="20136" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/20136/20136.jpg"
                          alt="ビジネスイン　うめさき"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.3 (516+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ビジネスイン　うめさき
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ビジネス、ご家族で、合宿セミナー等にもご利用下さい。遊園地グリーンランド゛まで車で15分！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 熊本県玉名郡長洲町長洲2878-6
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥5,500〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20136"
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
            橘湾に沈む夕日と日本一長い足湯
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            3. 小浜温泉「ほっとふっと105」＆橘湾サンセット・小浜ちゃんぽん名湯ステイ
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            橘湾の海岸沿いに位置する小浜温泉は、105度の源泉温度にちなんで名付けられた日本一の長さ105mを誇る露天足湯「ほっとふっと105」がシンボル。海に面した足湯に浸かりながら、水平線に沈む黄金の夕日を眺める時間は格別です。蒸し釜では持参した野菜や卵、海産物を高温温泉スチームで一気に蒸し上げて味わえます。長崎ちゃんぽんをベースに殻付きエビや魚介の旨味が凝縮した「小浜ちゃんぽん」も大人気です。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（特に秋〜冬の澄み渡る橘湾夕日、日没マジックアワー）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">小浜温泉「ほっとふっと105」、小浜歴史資料館、雲仙市小浜マリンパーク、波の湯茜（海抜ゼロメートル露天）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">諫早駅より島鉄バスで約50分。雲仙温泉よりバスまたは車で約20分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">「波の湯 茜」は満潮時には波しぶきがかかるほど海に近い絶景露天風呂で、夕暮れ時の入浴はまさに絵画のような絶景です。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="54690" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/54690/54690.jpg"
                          alt="小浜温泉　くつろぎの宿　旅館山田屋"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (214+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        小浜温泉　くつろぎの宿　旅館山田屋
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ★ふるさとで“心呼吸”の旅キャンペーン★九州絶景の湯ベスト１０に選ばれた檜造展望露天はまさに圧巻！！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 長崎県雲仙市小浜町北本町905-7
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥14,300〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54690"
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
              
                <div key="13421" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/13421/13421.jpg"
                          alt="小浜温泉　つたや旅館"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (449+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        小浜温泉　つたや旅館
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        全室オーシャンビュー和室★大浴場＆5つの貸切展望風呂完備★日本一長い足湯まで徒歩5分♪
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 長崎県雲仙市小浜町北本町907
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥11,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13421"
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
