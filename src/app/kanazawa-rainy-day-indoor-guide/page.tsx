import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【金沢 雨の日の観光モデルコース】「弁当忘れても傘忘れるな」の街！21世紀美術館・ひがし茶屋街カフェ・金箔貼り体験",
  description:
    "雨の日が多い金沢だからこそインドア施設が超充実！金沢21世紀美術館のスイミングプール、近江町市場の屋根付きアーケード海鮮丼、ひがし茶屋街のお座敷カフェ、雨情に浸る駅前温泉宿ガイド。",
  keywords: [
    "金沢 雨の日 観光",
    "金沢 21世紀美術館 雨",
    "近江町市場 アーケード グルメ",
    "ひがし茶屋街 カフェ 雨",
    "金沢 金箔貼り体験 室内",
    "金沢 雨の日 モデルコース",
    "金沢 温泉 ホテル 楽天トラベル"
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
      return data["kanazawa-rainy-day-indoor-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kanazawa-rainy-day-indoor-guide", e);
  }
  return [];
}

export default function KanazawaRainyDayIndoorGuidePage() {
  const hotels = loadHotels();

  // 金沢の雨情を楽しむインドア3大ハイライト
  const indoorHighlights = [
    {
      num: "01",
      badge: "現代アート＆雨の天窓",
      title: "金沢21世紀美術館｜雨水が揺れるレアンドロのプールと地下通路",
      description:
        "世界的名所『スイミング・プール』は、地下部（有料ゾーン）から見上げると水面を打つ雨粒の波紋が幻想的な光模様を描き出し、晴れの日以上のエモーショナルな美しさを放ちます。館内はガラス張りの円形建築で、雨音をBGMにアートライブラリーやミュージアムショップで過ごす贅沢な滞在を満喫できます。",
      tag: "全館完全屋内・雨天最高のアート体験"
    },
    {
      num: "02",
      badge: "屋根付き巨大アーケード",
      title: "近江町市場｜傘いらずで巡る「市民の台所」海鮮丼＆ハフハフおでん",
      description:
        "約300年の歴史を誇る近江町市場は、全域がアーケード屋根で覆われているため雨に一切濡れずに食べ歩きや名店巡りが可能。のどぐろや白エビが山盛りの豪快海鮮丼、出汁がしみしみの金沢おでん『車麩・ばい貝』をカウンターで味わう至福のランチタイムを楽しめます。",
      tag: "アーケード直結・雨天行列店巡り"
    },
    {
      num: "03",
      badge: "伝統工芸ワークショップ",
      title: "金箔貼り＆九谷焼体験｜手元に咲く1万分の1ミリの黄金の輝き",
      description:
        "日本の金箔生産シェア99%以上を誇る金沢。老舗箔座や今井金箔などの工房では、雨の静けさの中で集中してオリジナル手鏡や小皿、箸に金箔をあしらう体験が人気です。完成した作品はそのまま当日持ち帰り可能で、旅の一生モノの思い出になります。",
      tag: "所要約60分・雨の日に没頭できる伝統体験"
    }
  ];

  // 雨の日特化 1日タイムスケジュール
  const rainyDayTimeline = [
    {
      time: "09:30",
      spot: "JR金沢駅「もてなしドーム」集合",
      detail:
        "幾何学模様のガラス製巨大ドーム『もてなしドーム』は、「駅を降りた人に傘を差し出す金沢人のやさしさ」を具現化した建築。雨を遮る大空間からバス乗り場へ濡れずに移動開始。",
      icon: "☔"
    },
    {
      time: "10:00",
      spot: "金沢21世紀美術館（現代アート巡礼）",
      detail:
        "光庭の『スイミング・プール』を地下から鑑賞。雨粒がつくる波紋の揺らめきは雨の日だけの特等席。館内カフェ「Fusion21」で加賀野菜を使ったスイーツブレイクもおすすめ。",
      icon: "🎨"
    },
    {
      time: "12:30",
      spot: "近江町市場で雨宿り海鮮ランチ",
      detail:
        "屋根付きアーケードで濡れずに店舗間を移動。行列のできる海鮮丼専門店で日本海の幸（のどぐろ・甘海老・がす海老）を堪能。市場内の焼き牡蠣や金沢おでんの食べ歩きも最高。",
      icon: "🍣"
    },
    {
      time: "14:15",
      spot: "老舗金箔工芸工房で金箔貼り体験",
      detail:
        "息を止めながら極薄の金箔を筆で貼り付ける伝統体験。雨音を遠くに聞きながら、しっとりとした町家の静寂の中で自分だけの工芸品を制作。",
      icon: "✨"
    },
    {
      time: "15:45",
      spot: "ひがし茶屋街のお座敷格子カフェで雨情カフェタイム",
      detail:
        "出格子（木虫籠）越しに濡れる石畳を眺めながら、挽きたて珈琲と金箔抹茶パフェ、上生菓子を。雨に濡れる格子戸の風情は晴天時を上回る情緒があります。",
      icon: "🍵"
    },
    {
      time: "17:30",
      spot: "駅前温泉ホテルまたは割烹旅館へチェックイン",
      detail:
        "冷えた体を自家源泉の天然温泉や大浴場でじっくり温め、夕食には加賀会席や金沢地酒に酔いしれる極上の夜へ。",
      icon: "♨️"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 selection:bg-teal-500 selection:text-white pb-20">
      {/* ヒーローセクション（Teal基調） */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-slate-900 to-slate-900 py-16 sm:py-24 border-b border-teal-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-bold tracking-wider mb-6">
            <span>🌧️ 弁当忘れても傘忘れるな！加賀百万石のインドア観光術</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            【金沢 雨の日の観光モデルコース】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300">
              21世紀美術館・近江町市場・金箔体験＆雨情に浸る温泉宿
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            年間降雨日数が多い金沢には、古くから「弁当忘れても傘忘れるな」という言葉があります。
            だからこそ金沢の街は、雨天時に真価を発揮するガラス張りの美術館、全天候型アーケード市場、
            しっとり濡れた石畳が映える茶屋街カフェなど、全国随一のインドア観光インフラが整っています。
            雨だからとがっかりする必要は一切なし！雨情豊かな古都ステイを徹底案内します。
          </p>

          {/* 内部リンクバナー */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kanazawa-travel-budget-guide"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-900/60 hover:bg-teal-800 border border-teal-600/50 rounded-xl text-teal-200 text-xs sm:text-sm font-semibold transition"
            >
              <span>📊 金沢旅行の費用・予算内訳を見る</span>
              <span>→</span>
            </Link>
            <Link
              href="/kanazawa-vs-kyoto-comparison"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-xs sm:text-sm font-semibold transition"
            >
              <span>⛩️ 金沢 vs 京都 徹底比較ガイド</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 楽天トラベルクーポンプロモーション */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <SpecialCouponBanner />
      </section>

      {/* コンテンツ本体 */}
      <div className="max-w-5xl mx-auto px-4 mt-16 space-y-16">
        {/* セクション1：雨の日金沢 3大インドア見どころ */}
        <section>
          <div className="border-l-4 border-teal-400 pl-4 mb-8">
            <span className="text-teal-400 text-xs font-black tracking-widest uppercase">INDOOR HIGHLIGHTS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              雨の日だからこそ感動が倍増する！金沢インドア3大ハイライト
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {indoorHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-teal-800/50 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-teal-400/60 transition shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-teal-400 font-mono">{item.num}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-900/80 border border-teal-700 text-teal-300">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-700 text-[11px] font-semibold text-teal-300">
                  ✓ {item.tag}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2：タイムスケジュール */}
        <section className="bg-slate-800/60 border border-teal-900/80 rounded-3xl p-6 sm:p-8">
          <div className="border-l-4 border-teal-400 pl-4 mb-8">
            <span className="text-teal-400 text-xs font-black tracking-widest uppercase">MODEL TIMELINE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              傘をほとんど差さずに回る！雨の日1日モデルコース
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              もてなしドーム発着の「城下まち金沢周遊バス」を活用し、歩行移動を最小限に抑えた最適ルート。
            </p>
          </div>

          <div className="space-y-6">
            {rainyDayTimeline.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-700/50 transition">
                <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-700/60 flex items-center justify-center shrink-0 text-xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-teal-300 font-mono px-2 py-0.5 bg-teal-900/60 rounded">
                      {item.time}
                    </span>
                    <h3 className="text-base font-bold text-white">{item.spot}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：雨の日を快適に過ごすホテル厳選 */}
        <section>
          <div className="border-l-4 border-teal-400 pl-4 mb-8">
            <span className="text-teal-400 text-xs font-black tracking-widest uppercase">STAY & RELAX</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              雨の金沢を極上にする「駅近温泉＆割烹旅館」特選
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              濡れずにチェックインできる駅前アクセス良好宿や、館内でゆっくり加賀料理とお湯を堪能できる名宿。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="flex flex-col justify-between bg-slate-800/90 border border-teal-900/70 rounded-3xl overflow-hidden shadow-lg hover:border-teal-500/80 transition group"
                  >
                    <div>
                      {hotel.hotelImageUrl && (
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={hotel.hotelImageUrl}
                            alt={hotel.hotelName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-teal-300 border border-teal-700/50">
                            最寄駅: {hotel.nearestStation || "金沢"}
                          </div>
                          {hotel.reviewAverage && (
                            <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full text-xs font-black shadow flex items-center gap-1">
                              <span>★</span>
                              <span>{hotel.reviewAverage.toFixed(2)}</span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition">
                          {hotel.hotelName}
                        </h3>
                        <p className="text-xs text-slate-400 mb-3">
                          {hotel.address1} {hotel.address2}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                          {hotel.hotelSpecial || "金沢観光の拠点に最適な立地。雨の日も館内で快適にお過ごしいただけます。"}
                        </p>
                        {hotel.access && (
                          <div className="text-[11px] text-teal-200/80 bg-teal-950/60 p-2.5 rounded-xl border border-teal-800/40 mb-4">
                            🚃 {hotel.access}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-700/60 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">参考最安料金（目安）</span>
                        <span className="text-lg font-black text-amber-400">
                          {minCharge ? `¥${minCharge}〜` : "料金確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-teal-500/20 transition transform hover:-translate-y-0.5"
                      >
                        <span>空室・宿泊プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-8 text-center text-slate-400">
              現在、金沢エリアのおすすめ宿泊プランを読み込み中です。
            </div>
          )}
        </section>

        {/* セクション4：雨の日持ち物・移動テクニック */}
        <section className="bg-gradient-to-r from-teal-950/70 to-slate-900 border border-teal-800/40 rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🎒</span> 金沢の雨を制する！地元民直伝の雨天装備テク
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-teal-900/50">
              <strong className="text-teal-300 block mb-1 text-sm">① 防水スニーカーや撥水ミスト</strong>
              ひがし茶屋街や兼六園周辺の石畳は雨で滑りやすくなります。滑りにくい靴底と撥水加工がマストです。
            </div>
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-teal-900/50">
              <strong className="text-teal-300 block mb-1 text-sm">② 傘用ビニール袋を持参</strong>
              美術館や市場の飲食店に入る際、傘袋の取り出しに手間取らないよう、折りたたみ傘用の吸水カバーがあるとスマート。
            </div>
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-teal-900/50">
              <strong className="text-teal-300 block mb-1 text-sm">③ まちのり（シェアサイクル）は控える</strong>
              金沢はシェアサイクルが充実していますが、雨天は路面電車軌道跡や石畳で転倒リスクあり。周遊バスかタクシー利用が吉。
            </div>
          </div>
        </section>

        {/* 内部リンク回遊ブロック */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-400 mb-3">金沢旅行の計画をもっと深掘りする関連記事</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kanazawa-travel-budget-guide"
              className="text-xs sm:text-sm font-semibold text-teal-400 hover:text-teal-300 underline underline-offset-4"
            >
              【金沢旅行 費用】1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/kanazawa-vs-kyoto-comparison"
              className="text-xs sm:text-sm font-semibold text-teal-400 hover:text-teal-300 underline underline-offset-4"
            >
              【金沢 vs 京都】古都旅行はどっちに行くべき？費用・見どころ徹底比較
            </Link>
          </div>
        </div>
      </div>
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/fukui"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福井県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hokkaido"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                北海道の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagano"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
