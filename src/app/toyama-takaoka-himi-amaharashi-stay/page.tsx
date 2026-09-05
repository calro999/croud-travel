import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '【富山・高岡＆氷見・雨晴海岸】瑞龍寺・雨晴海岸立山連峰＆氷見寒ブリ温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
  description: '加賀前田家二代当主前田利長の菩提寺・富山県唯一の建造物国宝「瑞龍寺」、高岡大仏、千本格子の金屋町、海を挟んで3,000m級の立山連峰を望む奇跡の絶景「雨晴海岸」、冬の味覚の王者「氷見寒ブリ」と天然温泉が湧く氷見海岸宿を徹底解説。',
  keywords: [
    '【富山・高岡＆氷見・雨晴海岸】国宝瑞龍寺・雨晴富山湾立山連峰＆氷見寒ブリ宿 完全ガイド',
    '観光モデルコース',
    'おすすめ旅館',
    'おすすめホテル',
    '楽天トラベル',
    '絶景',
    'ご当地グルメ'
  ],
  openGraph: {
    title: '【富山・高岡＆氷見・雨晴海岸】瑞龍寺・雨晴海岸立山連峰＆氷見寒ブリ温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '加賀前田家二代当主前田利長の菩提寺・富山県唯一の建造物国宝「瑞龍寺」、高岡大仏、千本格子の金屋町、海を挟んで3,000m級の立山連峰を望む奇跡の絶景「雨晴海岸」、冬の味覚の王者「氷見寒ブリ」と天然温泉が湧く氷見海岸宿を徹底解説。',
    type: 'article',
    url: 'https://croud-travel.com/toyama-takaoka-himi-amaharashi-stay',
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
            <span>TAKAOKA & HIMI AMAHARASHI GUIDE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            【富山・高岡＆氷見・雨晴海岸】国宝瑞龍寺・雨晴富山湾立山連峰＆氷見寒ブリ宿 完全ガイド
          </h1>
          <p className="max-w-3xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            加賀百万石の美意識と工芸の魂が息づくものづくりの城下町「高岡」。壮麗な禅宗様建築が整然と並ぶ富山県唯一の国宝「高岡 瑞龍寺」と日本三大仏の「高岡大仏」。万葉の歌人・大伴家持が愛し、義経伝説が残る「雨晴海岸」からは、青い富山湾の海原越しに雪をいただく標高3000mの立山連峰がそびえ立つ世界でも極めて稀な大絶景。そして冬の富山湾の至宝「氷見寒ブリ」。歴史建築と大パノラマ、極上寒ブリに酔いしれる富山ステイへご案内します。
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
            加賀百万石の美の極致と鋳物の町
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            1. 国宝「瑞龍寺」（壮麗な禅宗様伽藍）＆高岡大仏・金屋町千本格子の石畳散歩
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            前田利長公を弔うため三代利常公が約20年の歳月をかけて建立した曹洞宗の名刹「瑞龍寺」。総門・山門・仏殿・法堂が一直線に並び、左右に回廊がめぐる中国宋代の禅宗様伽藍配置は見事の極みであり、富山県で唯一の国宝に指定されています。高岡の街中には端正な顔立ちで愛される高さ約16mの青銅製「高岡大仏」や、加賀藩の保護のもと鋳物師が集まった「金屋町」の千本格子（さまのこ）と銅片が埋め込まれた石畳の風情ある町並みが広がります。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（春・夏のライトアップイベント、新緑の境内、秋の紅葉）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">国宝高岡山瑞龍寺、高岡大仏、金屋町（重伝建地区・鋳物体験工房）、山町筋（土蔵造りの町並み）、高岡古城公園</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR北陸新幹線「新高岡駅」より徒歩約10分。あいの風とやま鉄道「高岡駅」より徒歩約10分。能越自動車道「高岡IC」より約15分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">金屋町の鋳物工房では、伝統の錫（すず）を使って自分だけのぐい呑みやアクセサリーを制作できる鋳物体験が大人気です。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="20569" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/20569/20569.jpg"
                          alt="高岡マンテンホテル駅前（マンテンホテルグループ）"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.3 (3120+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        高岡マンテンホテル駅前（マンテンホテルグループ）
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ◆高岡駅＆大駐車場【徒歩１分】　大浴場　◆全２３３室　【全室禁煙】　◆全室Wi-Fi、有線LAN接続
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県高岡市末広町1-8
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥4,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D20569"
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
              
                <div key="146844" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/146844/146844.jpg"
                          alt="ホテルクラウンヒルズ高岡駅前（ＢＢＨホテルグループ）"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (798+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルクラウンヒルズ高岡駅前（ＢＢＨホテルグループ）
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        高岡駅から徒歩１分！大浴場、夕食、アルコールサービス等無料サービス充実！観光・ビジネスにオススメ♪
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県高岡市駅南5-3-3
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥3,150〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D146844"
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
              
                <div key="5573" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/5573/5573.jpg"
                          alt="ホテルニューオータニ高岡"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.3 (1983+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルニューオータニ高岡
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        高岡市唯一の都市型ホテル。駅より徒歩5分。ホテル周辺は飲食店も充実。コンビニも近くに有り。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県高岡市新横町1　
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥4,900〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5573"
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
              
                <div key="167201" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/167201/167201.jpg"
                          alt="ホテルセブンセブン高岡"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (947+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ホテルセブンセブン高岡
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ホテルセブンセブン高岡は、高岡駅南口より徒歩１分・新高岡駅より車で５分、ビジネス・観光拠点に最適です
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県高岡市駅南5-2-7
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥3,400〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D167201"
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
            海越しに三千メートル級連峰を望む世界屈指の景観
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            2. 雨晴海岸（義経岩・女岩）＆富山湾越しの立山連峰パノラマ・氷見線列車
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            万葉集にも詠まれた名勝「雨晴海岸（あまはらしかいがん）」。源義経が奥州へ落ち延びる途中に雨宿りをしたという「義経岩」や沖合に浮かぶ「女岩」がシンボル。冬の晴れた日には、富山湾の青い海を挟んで遠く標高3,000m級の北アルプス立山連峰が屏風のようにそびえ立つ奇跡のパノラマが出現します。海岸沿いを走るローカル線「JR氷見線」の列車と海、連峰が織りなす風景は国内外の写真家を魅了し続けています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">秋〜冬（11〜2月の早朝、空気が澄み立山連峰がくっきりと白く輝くベストシーズン）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">雨晴海岸（義経岩・女岩）、道の駅 雨晴（展望デッキ）、JR氷見線（越乃Shu＊Kura等観光列車）、武田家住宅</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR氷見線「雨晴駅」より徒歩約5分。能越道「高岡北IC」より車で約15分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">冬の早朝、海面から水蒸気が立ち上る幻想的な自然現象「気あらし」と立山連峰の組み合わせは息を呑む神々しさです。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="29954" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/29954/29954.jpg"
                          alt="氷見温泉郷　魚巡りの宿　永芳閣（ＢＢＨホテルグループ）"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1667+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        氷見温泉郷　魚巡りの宿　永芳閣（ＢＢＨホテルグループ）
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        北陸の富山を代表する、お魚処氷見の旅館。評判の魚料理と絶景の露天。海一望の客室。貸切風呂無料プランも
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県氷見市阿尾3257
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥8,200〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29954"
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
              
                <div key="141093" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/141093/141093.jpg"
                          alt="氷見温泉郷　民宿いけもり"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (78+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        氷見温泉郷　民宿いけもり
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        魚処・氷見の山里に佇む、癒しの宿。露天風呂が自慢です☆【全室Wi-Fi完備！ 】
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県氷見市指崎1632　　　　　　　　　　　　　　　　　　　　　　　　　　
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥8,500〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141093"
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
            富山湾の王者・ひみ寒ぶりと名湯
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            3. 本場「氷見寒ブリ」尽くし会席（刺身・ブリしゃぶ・ブリ大根）＆氷見温泉郷海沿い宿
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            富山湾の定置網漁で水揚げされる脂の乗った最高峰のブランド「氷見寒ブリ」。厳しい寒さの日本海で丸々と太ったブリは、とろけるような大トロの刺身、出汁にさっとくぐらせる「ブリしゃぶ」、旨味が染み渡った「ブリ大根」、香ばしい塩焼きとまさに贅の極み。海岸線沿いに広がる「氷見温泉郷」はナトリウム-塩化物強塩泉の名湯で、肌がすべすべになり体がポカポカと温まります。湯船から富山湾の日の出を拝む朝湯も最高です。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">冬（11月下旬〜2月の「ひみ寒ぶり宣言」発令期間が最高潮）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">ひみ番屋街（氷見漁港場外市場）、氷見漁港（朝セリ見学）、潮風ギャラリー（藤子不二雄Aアートコレクション）、氷見市海浜植物園</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR氷見線「氷見駅」下車。能越道「氷見IC」より約5〜10分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">「ひみ番屋街」では新鮮なブリや白えび・紅ズワイガニの買い物ができるほか、併設の総湯（日帰り温泉）や足湯からも立山連峰を望めます。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="188047" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/188047/188047.jpg"
                          alt="氷見旅館　たきの荘"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.6 (61+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        氷見旅館　たきの荘
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        「ひみ番屋街」まで徒歩3分！！氷見や富山観光の拠点としてご利用くださいませ。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県氷見市北大町7-38
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥5,000〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D188047"
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
              
                <div key="29954" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/29954/29954.jpg"
                          alt="氷見温泉郷　魚巡りの宿　永芳閣（ＢＢＨホテルグループ）"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1667+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        氷見温泉郷　魚巡りの宿　永芳閣（ＢＢＨホテルグループ）
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        北陸の富山を代表する、お魚処氷見の旅館。評判の魚料理と絶景の露天。海一望の客室。貸切風呂無料プランも
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県氷見市阿尾3257
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥8,200〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D29954"
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
              
                <div key="141093" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/141093/141093.jpg"
                          alt="氷見温泉郷　民宿いけもり"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (78+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        氷見温泉郷　民宿いけもり
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        魚処・氷見の山里に佇む、癒しの宿。露天風呂が自慢です☆【全室Wi-Fi完備！ 】
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 富山県氷見市指崎1632　　　　　　　　　　　　　　　　　　　　　　　　　　
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥8,500〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141093"
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
              
                <div key="5174" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/5174/5174.jpg"
                          alt="温泉めい想倶楽部　富士屋旅館"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (984+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        温泉めい想倶楽部　富士屋旅館
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        【料理高評価】ライブラリ・ギャラリー・無料卓球・など嬉しいがいっぱい♪◆楽天トラベルアワード受賞の宿
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 石川県加賀市山代温泉桔梗ヶ丘2-121-3
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥7,040〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5174"
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
