import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山梨 シャインマスカット狩り 日帰りバスツアー2026】巨峰食べ放題＆勝沼ワイナリー・温泉付き最安比較 ｜ 日本全国・旅宿クラウド",
  description: "2026年秋の山梨シャインマスカット狩り日帰りバスツアー特集！高級シャインマスカット食べ放題、勝沼ワイナリー試飲、ハーブ庭園散策、ほったらかし温泉立ち寄りなど、人気ツアーの最安値予約ガイド。",
  keywords: ["yamanashi-grape-bus-tour-daytrip-guide", "山梨 シャインマスカット狩り バスツアー", "日帰りバスツアー 食べ放題", "勝沼 ワイナリー", "ほったらかし温泉 日帰り", "楽天トラベル"],
};

interface Hotel {
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamanashi-grape-bus-tour-daytrip-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for yamanashi-grape-bus-tour-daytrip-guide", e);
  }
  return [];
}

export default function YamanashiGrapeBusTourPage() {
  const hotels = loadHotels();

  const tourRankings = [
    {
      rank: "第1位",
      title: "【贅沢満喫】極上シャインマスカット狩り食べ放題 ＆ 甲州ワイン牛ステーキランチ ＆ 勝沼ワイナリー試飲",
      priceRange: "9,900円〜13,800円",
      route: "新宿/東京発 → 勝沼ぶどう農園（シャインマスカット30分食べ放題）→ 甲州牛ランチ → 歴史ある勝沼ワイナリー見学＆試飲 → ハーブ庭園旅日記",
      appeal: "市場価格1房2,000円〜3,000円する高級シャインマスカットが農園でもぎ取り食べ放題！大粒で皮ごとパリッと弾けるジューシーな甘み。ワインの試飲もたっぷり楽しめる人気の王道コース。",
      tag: "一番人気"
    },
    {
      rank: "第2位",
      title: "【秋の味覚＋絶景温泉】巨峰・シャインマスカット狩り ＆ 山梨郷土料理ほうとう鍋 ＆ ほったらかし温泉入浴",
      priceRange: "10,800円〜14,500円",
      route: "新宿/横浜発 → ぶどう園食べ比べ → 熱々かぼちゃほうとう御膳 → ほったらかし温泉（富士山と甲府盆地を望む絶景露天風呂）→ ご当地お土産館",
      appeal: "山梨ならではのフルーツ狩りと絶景温泉が一度に楽しめる欲張りプラン。甲府盆地を見下ろす大露天風呂に浸かり、名物の温玉揚げを味わう至福の休日。",
      tag: "温泉付き"
    },
    {
      rank: "第3位",
      title: "【コスパ最強】ぶどう狩り食べ比べ（巨峰・ピオーネ・マスカット） ＆ ハイジの村スイスビュッフェ ＆ お土産付き",
      priceRange: "8,800円〜11,500円",
      route: "東京/池袋発 → フルーツ王国山梨ぶどう狩り → ハイジの村（ヨーロッパ風庭園＆ランチバイキング）→ 信玄餅詰め放題体験 → 帰着",
      appeal: "1万円以下から参加できる驚きの高コスパ！ぶどうのお土産1房プレゼント付きや信玄餅の詰め放題など、両手いっぱいのお土産を持って帰れる大満足ツアー。",
      tag: "コスパ抜群"
    }
  ];

  const autumnGrapeVarieties = [
    {
      name: "シャインマスカット",
      season: "8月下旬〜10月中旬",
      color: "エメラルドグリーン",
      flavor: "糖度18〜20度と非常に甘く、酸味は控えめ。皮が薄いため種なしで丸ごとパリッと食べられる大人気品種。"
    },
    {
      name: "巨峰（きょほう）",
      season: "8月中旬〜9月下旬",
      color: "濃い紫黒色",
      flavor: "「ぶどうの王様」と称される濃厚なコクとたっぷりの果汁。芳醇な甘酸っぱさが昔から日本人に愛される味。"
    },
    {
      name: "ピオーネ",
      season: "9月上旬〜10月上旬",
      color: "深紫〜漆黒",
      flavor: "巨峰とカノンホール・マスカットを交配した大粒品種。すっきりとした爽やかなマスカット香と強い甘みが魅力。"
    },
    {
      name: "甲州ぶどう",
      season: "9月下旬〜11月上旬",
      color: "赤紫色・淡いピンク",
      flavor: "日本固有の歴史あるぶどう。ワインの原料としても有名で、みずみずしい上品な和の甘さが楽しめます。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans text-slate-800">
      {/* ヒーローセクション（Purple Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-purple-950 via-indigo-900 to-fuchsia-900 text-white p-8 md:p-14 shadow-2xl border border-purple-800/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-fuchsia-400 text-purple-950 px-3.5 py-1 rounded-full uppercase">
              AUTUMN 2026 BUS TOUR
            </span>
            <span className="text-xs font-bold bg-white/10 text-purple-200 px-3 py-1 rounded-full border border-purple-300/20">
              シャインマスカット食べ放題・勝沼ワイン・絶景温泉
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山梨 シャインマスカット狩り 日帰りバスツアー2026】<br />
            巨峰食べ放題＆勝沼ワイナリー・温泉付き最安比較
          </h1>

          <p className="text-xs md:text-sm text-purple-100/90 leading-relaxed font-medium">
            秋の味覚狩りの主役といえば、大粒で甘い高級シャインマスカット！マイカーで行くと中央道の渋滞やワイナリーでの運転手飲酒NGが悩みどころですが、日帰り観光バスツアーなら都内から乗っているだけで楽々到着＆ワインの無料試飲も思いっきり満喫できます。2026年秋の最新人気プランを徹底比較！
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#tour-ranking"
              className="px-5 py-2.5 bg-fuchsia-400 hover:bg-fuchsia-300 text-purple-950 font-black text-xs md:text-sm rounded-xl transition shadow-lg inline-flex items-center gap-2"
            >
              <span>🍇 人気ツアープランを見る</span>
              <span>↓</span>
            </a>
            <a
              href="#rakuten-bus-official"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-purple-100 font-bold text-xs md:text-sm rounded-xl border border-white/20 transition inline-flex items-center gap-2"
            >
              <span>🚌 楽天トラベル 山梨バスツアー</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 内部リンクカード */}
      <section className="bg-purple-50/80 border border-purple-200 rounded-3xl p-6">
        <div className="text-xs font-bold text-purple-900 mb-2">山梨・富士五湖エリアのアクセスガイド</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/tokyo-fujikawaguchiko-highway-bus-guide"
            className="p-4 bg-white rounded-2xl border border-purple-100 hover:border-purple-400 transition shadow-sm group flex items-start justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-purple-600 uppercase">直行高速バス完全ガイド</span>
              <h3 className="text-sm font-black text-slate-900 group-hover:text-purple-700 transition">
                【新宿・東京から富士急・河口湖 直行バス】電車とどっちが安い？料金比較＆絶景コース
              </h3>
            </div>
            <span className="text-purple-600 font-bold ml-2">→</span>
          </Link>

          <div className="p-4 bg-white rounded-2xl border border-purple-100 flex flex-col justify-center space-y-1">
            <span className="text-[10px] font-bold text-purple-700 uppercase">バスツアーのメリット</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              勝沼ワイナリーでの試飲も全員可能！運転手不要で秋の山梨グルメとお酒を存分に楽しめるのがバスツアー最大の魅力覚。
            </p>
          </div>
        </div>
      </section>

      {/* バスツアー人気ランキング比較 */}
      <section id="tour-ranking" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-purple-100 pb-4">
          <span className="text-xs font-black tracking-widest text-purple-700 uppercase">POPULAR BUS TOURS</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
            2026年秋 山梨ぶどう狩り日帰りバスツアー 人気コース比較
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            シャインマスカット食べ放題に「温泉」「ご当地牛」「ワイン」が組み合わさった満足度の高いコースです。
          </p>
        </div>

        <div className="space-y-6">
          {tourRankings.map((tour, idx) => (
            <div
              key={idx}
              className="bg-purple-50/40 border-2 border-purple-200/80 rounded-2xl p-6 hover:border-purple-400 hover:shadow-md transition space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-purple-700 text-white text-xs font-black">
                    {tour.rank}
                  </span>
                  <span className="text-xs font-black bg-fuchsia-100 text-fuchsia-900 px-3 py-0.5 rounded-full border border-fuchsia-300">
                    {tour.tag}
                  </span>
                </div>
                <div className="text-base md:text-lg font-black text-purple-700">
                  {tour.priceRange}
                </div>
              </div>

              <h3 className="text-base md:text-lg font-black text-slate-900 leading-snug">
                {tour.title}
              </h3>

              <div className="bg-white p-3.5 rounded-xl border border-purple-100 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-purple-900">🗺️ 巡回ルート例:</div>
                <div className="leading-relaxed">{tour.route}</div>
              </div>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {tour.appeal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ぶどう品種と旬の時期 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-purple-100 pb-4">
          <span className="text-xs font-black tracking-widest text-purple-700 uppercase">GRAPE VARIETIES</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
            山梨ぶどう狩りで味わえる！人気4大品種の特徴と旬
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            時期によって食べ頃の品種が変わります。お好みのぶどうの旬に合わせてツアー日程を選びましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {autumnGrapeVarieties.map((v, idx) => (
            <div key={idx} className="p-5 bg-purple-50/50 rounded-2xl border border-purple-100 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-purple-950 flex items-center gap-1.5">
                  <span>🍇</span> {v.name}
                </h3>
                <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                  {v.season}
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                果皮色: {v.color}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {v.flavor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 楽天トラベル バスツアー公式リンク & クーポン（プロミネント） */}
      <section id="rakuten-bus-official" className="bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-purple-600/40 space-y-6">
        <div className="border-b border-purple-800/60 pb-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-fuchsia-400 text-purple-950 px-3 py-0.5 rounded-full uppercase">
              OFFICIAL RAKUTEN BUS TOUR
            </span>
            <span className="text-xs text-fuchsia-300 font-bold">
              秋の味覚狩り・最安値予約
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            楽天トラベルで山梨ぶどう狩り＆ワイナリーツアーを予約！
          </h2>
          <p className="text-xs md:text-sm text-purple-100/80 leading-relaxed font-medium">
            楽天トラベルなら、各社の日帰りバスツアーを一括比較して最安値で予約可能。楽天ポイントが貯まる＆使えるほか、季節限定の割引クーポンを活用すればさらにお得に参加できます！
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-2xl p-5 border border-purple-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">🍇</div>
              <h3 className="text-base font-black text-white">山梨フルーツ狩りバスツアー特集</h3>
              <p className="text-xs text-purple-100/80 leading-relaxed">
                シャインマスカット食べ放題・勝沼ワイナリー試飲・ほったらかし温泉ツアーなど、秋の大人気プランが勢ぞろい！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-gradient-to-r from-fuchsia-400 to-purple-400 hover:brightness-110 text-purple-950 font-black text-xs md:text-sm rounded-xl shadow-lg transition"
            >
              👉 楽天トラベル 日帰りバスツアーを見る
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-purple-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">🎟️</div>
              <h3 className="text-base font-black text-white">高速バス・観光バス割引クーポン</h3>
              <p className="text-xs text-purple-100/80 leading-relaxed">
                楽天トラベル限定の高速バス・観光バス割引クーポンが随時配布中。予約ステップで適用するだけで格安に。
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-white/20 hover:bg-white/30 text-white font-black text-xs md:text-sm rounded-xl border border-white/30 transition"
            >
              🎟️ 高速バスクーポンをチェック
            </a>
          </div>
        </div>
      </section>

      {/* 山梨・富士山麓の提携宿泊施設 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-purple-100 pb-4">
          <div className="flex items-center gap-2 text-purple-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>YAMANASHI RESORTS & ONSEN</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900">
            日帰り入浴や秋の山梨滞在におすすめの提携宿
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            農園体験施設や富士山を望む展望温泉ホテルなど、ぶどう狩りと合わせて楽しめる名宿です。
          </p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-bold">
                        {hotel.hotelName}
                      </div>
                    )}
                    {typeof hotel.hotelMinCharge === "number" && hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[10px] font-black bg-slate-900/90 text-fuchsia-300 px-2 py-0.5 rounded">
                        目安 ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-sm md:text-base font-black font-journal-serif text-slate-900">
                      {hotel.hotelName}
                    </h3>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 text-xs font-black text-white bg-gradient-to-r from-purple-700 to-indigo-700 hover:brightness-110 rounded-xl shadow transition"
                  >
                    🍇 楽天トラベルでプラン・空室を見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-xs">
            ホテル情報を読み込み中または該当ホテルを検索中です。
          </div>
        )}
      </section>

      {/* ぶどう狩りバスツアー参加時の持ち物＆注意点 */}
      <section className="bg-purple-50/50 border border-purple-200 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-base md:text-lg font-black font-journal-serif text-purple-950 flex items-center gap-2">
          <span>🍇</span> シャインマスカット狩りバスツアーを100%楽しむ心得
        </h3>
        <ul className="space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed list-disc list-inside">
          <li>
            <strong className="text-slate-900">ウェットティッシュ・小さなゴミ袋を持参：</strong>
            ぶどうをもぎ取って食べる際、果汁で手がベタつきやすくなります。アルコール除菌シートがあると快適です。
          </li>
          <li>
            <strong className="text-slate-900">黄色がかったシャインマスカットが最も甘い：</strong>
            きれいな黄緑色よりも、少し黄色みを帯びた房の方が完熟していて糖度が抜群に高くなっています。
          </li>
          <li>
            <strong className="text-slate-900">歩きやすいスニーカー推奨：</strong>
            ぶどう棚の下は土の畑です。ヒールやサンダルではなく、汚れてもよいスニーカーで参加しましょう。
          </li>
        </ul>
      </section>
    </div>
  );
}
