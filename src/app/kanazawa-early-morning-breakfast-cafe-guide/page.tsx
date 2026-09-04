import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【金沢駅・近江町市場 早朝朝食おすすめ7選】朝7時から開いている海鮮丼・絶品おにぎり・純喫茶モーニング",
  description:
    "夜行バスや始発新幹線で金沢に着いたらここへ！混雑前の近江町市場で食べる朝獲れ海鮮丼、金沢駅あんと内の早朝カフェ、地元民に愛される老舗純喫茶のモーニング、朝食クチコミ高評価ホテル特集。",
  keywords: [
    "金沢 早朝 朝食",
    "近江町市場 朝ごはん 海鮮丼",
    "金沢駅 モーニング 7時",
    "金沢 夜行バス 早朝 過ごし方",
    "金沢 純喫茶 モーニング",
    "金沢 朝食 美味しい ホテル",
    "金沢 朝風呂 銭湯"
  ],
};

interface Hotel {
  hotelNo: number;
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
  address1?: string;
  address2?: string;
  access?: string;
  nearestStation?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kanazawa-early-morning-breakfast-cafe-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kanazawa-early-morning-breakfast-cafe-guide", e);
  }
  return [];
}

export default function KanazawaEarlyMorningBreakfastPage() {
  const hotels = loadHotels();

  // 早朝おすすめグルメ7選
  const morningSpots = [
    {
      num: "01",
      name: "近江町市場 刺身屋（さしみや）",
      genre: "朝獲れ日本海海鮮丼・のどぐろ炙り",
      hours: "8:00〜（ネタ完売次第終了）",
      access: "金沢駅東口から路線バス5分「武蔵ヶ辻・近江町市場」下車すぐ / 徒歩約15分",
      budget: "¥1,800〜¥3,500",
      description:
        "昼前には大行列となる近江町市場でも、朝8時の開店直後なら待ち時間ほぼゼロ。日本海でその日の朝に水揚げされたばかりの白身魚や甘エビ、名物のどぐろの炙りが美しく盛られた『朝獲れ海鮮丼』は圧巻の鮮度です。温かいあら汁をすすりながら、市場の活気を一番乗りで体感できます。",
      tip: "8時ちょうどに滑り込むのがベスト。市場内の通路が観光客で埋まる前にゆっくり堪能できます。"
    },
    {
      num: "02",
      name: "米屋のおにぎり むすび 金沢駅あんと店",
      genre: "石川県産ひゃくまん穀手握りおにぎり・豚汁",
      hours: "7:00〜20:00",
      access: "JR金沢駅構内 金沢百番街「あんと」1F",
      budget: "¥500〜¥900",
      description:
        "石川県のブランド米『ひゃくまん穀』を大釜でふっくら炊き上げ、熟練の職人がふんわりと握るおにぎり専門店。能登牛のしぐれ煮、加賀能登のへしこ、定番の紅鮭など具材のバリエーションも豊富。具だくさんの熱々豚汁と合わせれば、夜行バスで冷えた体がじんわり温まります。",
      tip: "新幹線改札口・夜行バス降車場から徒歩2分。イートイン席のほかテイクアウトでバス車内やベンチでも。"
    },
    {
      num: "03",
      name: "純喫茶 ローレンス（Lawrence）",
      genre: "昭和レトロ純喫茶・トースト＆極上深煎りネルドリップ",
      hours: "7:30〜（不定休）",
      access: "金沢市片町 / 武蔵ヶ辻からバスで約7分「片町」下車徒歩3分",
      budget: "¥600〜¥1,000",
      description:
        "蔦の絡まるクラシックな扉を開けると、そこは昭和の時が止まったような重厚なアンティーク空間。マスターが1杯ずつ丁寧にネルドリップで淹れる深煎り珈琲と、厚切りバタートースト、ゆで卵のクラシックモーニングは、金沢の文化人にも愛されてきた伝説の味です。",
      tip: "店内は落ち着いた静寂が流れる空間。読書や旅の計画をノートに書き留める朝時間にぴったり。"
    },
    {
      num: "04",
      name: "喫茶 謎屋珈琲店 金沢本店",
      genre: "ミステリーカフェ・自家焙煎珈琲＆ワッフルモーニング",
      hours: "7:00〜22:00",
      access: "金沢駅東口（兼六園口）から徒歩約8分（安江町）",
      budget: "¥700〜¥1,200",
      description:
        "金沢駅近くの隠れ家カフェ。毎朝7時から焼き立ての香ばしいベルギーワッフルやクロックムッシュのモーニングを提供しています。名物メニューを注文するとオリジナルの本格ミステリークイズに挑戦できるユニークな仕掛けも大人気。豆の種類を厳選した自家焙煎スペシャルティコーヒーの味わいは本格派です。",
      tip: "朝の静かな時間帯ならゆったりソファ席で謎解きと極上ラテを満喫できます。"
    },
    {
      num: "05",
      name: "近江町市場 ゆたか水産（店頭イートイン）",
      genre: "焼き牡蠣・生ウニ・ボタンエビの立ち食い朝市",
      hours: "7:30〜16:00",
      access: "近江町市場 いちば館1F通路",
      budget: "¥800〜¥2,500",
      description:
        "市場の醍醐味である『その場で殻を割って食べる』朝食体験ならここ。能登半島直送の岩牡蠣や活ホタテ、目の前で剥いてくれる濃厚な生ウニを地酒のミニカップとともに楽しめます。しっかりした丼物ではなく、海の幸をダイレクトにつまんでハシゴしたい早起き派に最適。",
      tip: "朝一番は仕込み中の職人さんとの会話も楽しい時間。その日の最高おすすめ魚を教えてもらえます。"
    },
    {
      num: "06",
      name: "金沢 百番街Rinto カフェ・ド・クリエ / スターバックス",
      genre: "電源・Wi-Fi完備 高速充電＆スマートモーニング",
      hours: "7:00〜22:00",
      access: "JR金沢駅構内 金沢百番街「Rinto」入口すぐ",
      budget: "¥450〜¥800",
      description:
        "夜行バス下車後、まずスマートフォンのバッテリーをフル充電しつつ身支度を整えたい旅行者のオアシス。カウンター席には充電コンセントが充実しており、焼きたてトーストサンドやホットサンドを片手に今日の観光ルート確認や手荷物のパッキング整理が落ち着いて行えます。",
      tip: "金沢駅構内は冬場や雨天でも濡れずにアクセス可能。観光案内所（8:30開所）の開く前の待機に最適。"
    },
    {
      num: "07",
      name: "尾山神社前 喫茶 メルツバウ（Marzbau）",
      genre: "尾山神社参道・焼き立てスコーン＆スパイス香るモーニング",
      hours: "7:30〜17:00",
      access: "近江町市場から徒歩約6分、尾山神社神門から徒歩1分",
      budget: "¥600〜¥1,100",
      description:
        "ステンドグラスが美しい尾山神社のすぐ目の前にある、北欧ヴィンテージ調の居心地抜群カフェ。手作りの温かいスコーンとジャム、スパイスが優しく香るチャイや珈琲のモーニングセットが評判。早朝の澄んだ空気の中で尾山神社を参拝した直後の朝食スポットとして最高のロケーションです。",
      tip: "早朝の尾山神社は観光客が少なく、ステンドグラスに朝日が差し込む奇跡的な景色が拝めます。"
    }
  ];

  // 早朝リフレッシュ手順
  const morningRefreshSteps = [
    {
      step: "06:30",
      title: "金沢駅コインロッカーへ荷物をデポ",
      text: "夜行バス到着直後は駅西口・東口地下通路の大型コインロッカーが空車多数。近江町市場や純喫茶へ身軽に向かうため、スーツケースは真っ先に預けるのが鉄則です。"
    },
    {
      step: "07:00",
      title: "駅構内で朝活 or 銭湯で朝風呂リフレッシュ",
      text: "夜行バスの疲れをほぐすなら、金沢駅周辺の温浴施設や早朝営業スポットへ。温かいシャワーや身支度を整えることで、1日の観光スタートダッシュが格段に快適になります。"
    },
    {
      step: "08:00",
      title: "近江町市場へ移動、朝獲れ海鮮丼を並ばず実食",
      text: "昼時は1〜2時間待ちの大人気海鮮丼も、朝8時なら待ち時間ゼロでカウンターへ。港直送の鮮魚とあつあつのあら汁をゆったり味わえます。"
    },
    {
      step: "09:00",
      title: "尾山神社〜兼六園を早朝散策",
      text: "お腹を満たしたら尾山神社や兼六園へ。日中の混雑が嘘のような静寂の中で、加賀百万石の壮麗な城郭建築と手入れの行き届いた庭園美を堪能できます。"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans pb-24">
      {/* ヒーローセクション（アンバーゴールド調） */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-950/60 via-slate-900 to-slate-950 pt-16 pb-20 border-b border-amber-500/20">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 tracking-wide">
            <span className="animate-pulse">🌅</span> 早朝6:30・7:00台から動ける北陸美食案内
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5">
            【金沢駅・近江町市場 早朝朝食おすすめ7選】
            <span className="block text-amber-400 mt-2 text-xl sm:text-3xl font-black">
              朝7時から開いている海鮮丼・絶品おにぎり・純喫茶モーニング
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            夜行高速バスや北陸新幹線の始発で金沢駅に降り立った瞬間から旅は始まっています。
            日中は大行列の近江町市場海鮮丼を待ち時間ゼロで味わう裏ワザから、金沢駅直結の炊きたて米おにぎり、
            昭和の佇まいを残す純喫茶ネルドリップまで、早起き旅行者だけが出会える金沢の極上モーニングを完全網羅しました。
          </p>

          {/* クイックサマリータグ */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-200">
              🐟 近江町市場 8:00朝獲れ海鮮
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-200">
              🍙 金沢駅あんと 7:00開店おにぎり
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-200">
              ☕ レトロ純喫茶＆ネルドリップ
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-200">
              ♨️ 夜行バス明けの朝風呂＆荷物預け
            </span>
          </div>
        </div>
      </section>

      {/* コンテンツ本体 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 space-y-12">
        {/* キャンペーンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 導入：夜行バス・始発到着者のタイムスケジュール比較 */}
        <section className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl shadow-amber-950/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm">
              💡
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              なぜ「朝7時〜8時台の近江町市場・金沢駅」が最強なのか？
            </h2>
          </div>
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              金沢観光の王道・近江町市場は、午前11時〜午後14時のランチピークには各海鮮丼屋で<strong className="text-amber-300">60分〜120分待ちの長蛇の列</strong>が発生します。
              しかし、市場内の実力派店の中には朝8:00（一部店頭イートインは7:30）から暖簾を掲げている店舗があります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-red-500/30">
                <span className="text-red-400 font-bold block mb-1">❌ 昼12:00に近江町市場へ行った場合</span>
                <p className="text-xs text-slate-400">
                  狭い通路はすれ違うのも困難な大混雑。人気店は整理券配付終了または90分待ちで、貴重な旅の時間が待機列で消費されてしまいます。
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40">
                <span className="text-amber-300 font-bold block mb-1">⭕ 朝8:00に近江町市場へ行った場合</span>
                <p className="text-xs text-amber-100/90">
                  待ち時間なしで即着席。競り落とされたばかりの朝獲れ鮮魚とあら汁を堪能。9:00には兼六園や城址公園へ出発でき、1日が2倍有効に使えます！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* メイン：金沢の早朝朝食おすすめ7選 */}
        <section className="space-y-6">
          <div className="border-b border-amber-500/30 pb-3">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
              <span className="text-amber-400 font-mono">SELECTION</span>
              金沢の早朝朝食スポット厳選7店
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              朝7:00〜8:00から営業している海鮮丼・おにぎり・名物喫茶の実力派リスト
            </p>
          </div>

          <div className="space-y-6">
            {morningSpots.map((spot) => (
              <div
                key={spot.num}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition rounded-3xl p-6 sm:p-7 shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 font-mono font-bold text-xs">
                      #{spot.num}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {spot.genre}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="text-amber-300 font-mono font-semibold">⏰ {spot.hours}</span>
                    <span>💰 {spot.budget}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{spot.name}</h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {spot.description}
                </p>

                <div className="bg-amber-950/30 border-l-2 border-amber-500 px-3.5 py-2.5 rounded-r-xl text-xs text-amber-200/90 mb-3">
                  <strong className="text-amber-400 font-semibold block mb-0.5">💡 早朝攻略ワンポイント</strong>
                  {spot.tip}
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{spot.access}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 早朝到着リフレッシュ タイムライン */}
        <section className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <span>🎒</span> 夜行バス・始発到着者のための「完全リフレッシュ手順」
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            早朝6時台の到着からスムーズに金沢観光へ合流するための鉄板タイムライン
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {morningRefreshSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-amber-400 font-mono font-black text-xs block mb-1">
                    TIME: {item.step}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天トラベルホテル紹介セクション */}
        <section className="space-y-6">
          <div className="border-b border-amber-500/30 pb-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <span className="text-amber-400">🏨</span>
                  金沢 朝食クチコミ高評価＆駅前好立地ホテル
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  朝食バイキングで治部煮や金沢おでんが味わえる！早朝観光の拠点に最適な宿泊先
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/40">
                楽天トラベル厳選
              </span>
            </div>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      {hotel.hotelImageUrl && (
                        <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                          <img
                            src={hotel.hotelImageUrl}
                            alt={hotel.hotelName}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            loading="lazy"
                          />
                          {hotel.reviewAverage && (
                            <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-400 text-xs font-black border border-amber-500/30 flex items-center gap-1 shadow">
                              <span>★</span>
                              <span>{hotel.reviewAverage.toFixed(1)}</span>
                              {hotel.reviewCount && (
                                <span className="text-[10px] text-slate-400">({hotel.reviewCount})</span>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 text-xs text-amber-400/90 mb-2 font-medium">
                          <span>📍</span>
                          <span>最寄り: {hotel.nearestStation || "金沢駅"}</span>
                          {hotel.address1 && (
                            <span className="text-slate-400">
                              ({hotel.address1}
                              {hotel.address2 ? ` ${hotel.address2}` : ""})
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 leading-snug">
                          {hotel.hotelName}
                        </h3>

                        {hotel.hotelSpecial && (
                          <p className="text-xs text-slate-300 line-clamp-3 mb-3 leading-relaxed">
                            {hotel.hotelSpecial}
                          </p>
                        )}

                        {hotel.access && (
                          <p className="text-[11px] text-slate-400 line-clamp-2">
                            🚌 {hotel.access}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">参考最安料金（目安）</span>
                        <span className="text-base sm:text-lg font-black text-amber-400">
                          {minCharge ? `¥${minCharge}〜` : "プラン確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-amber-500/20 transition transform hover:-translate-y-0.5"
                      >
                        <span>空室・朝食付プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-900 rounded-2xl p-8 text-center text-slate-400">
              現在、金沢エリアのおすすめ宿泊プランを読み込み中です。
            </div>
          )}
        </section>

        {/* 内部リンク回遊ブロック */}
        <section className="pt-8 border-t border-slate-800">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <h3 className="text-sm font-bold text-slate-300 mb-4">
              あわせて読みたい金沢旅行ガイド
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/tokyo-kanazawa-bus-vs-shinkansen-guide"
                className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                【東京〜金沢】新幹線 vs 夜行バス 時間・料金・快適度を徹底比較
              </Link>
              <span className="hidden sm:inline text-slate-600">|</span>
              <Link
                href="/kanazawa-travel-budget-guide"
                className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                【金沢旅行 予算シミュレーション】1泊2日・2泊3日の総費用まとめ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
