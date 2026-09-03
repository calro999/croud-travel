import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【草津温泉 日帰り温泉＆ランチ】湯畑周辺で楽しむ源泉かけ流し名湯＆上州牛・手打ちそば名店ガイド ｜ 日本全国・旅宿クラウド",
  description: "草津温泉を日帰りで満喫するモデルコース！西の河原露天風呂・御座之湯・大滝乃湯の外湯巡りと、上州牛すき焼き・石臼挽き手打ちそばの絶品ランチ、日帰り入浴可能な名門旅館まとめ。",
  keywords: ["kusatsu-daytrip-hotspring-lunch-guide", "草津温泉 日帰り", "草津 ランチ", "湯畑 日帰り温泉", "西の河原露天風呂", "上州牛 すき焼き", "楽天トラベル"],
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
      return data["kusatsu-daytrip-hotspring-lunch-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kusatsu-daytrip-hotspring-lunch-guide", e);
  }
  return [];
}

export default function KusatsuDaytripHotspringLunchPage() {
  const hotels = loadHotels();

  const bathHouses = [
    {
      name: "西の河原露天風呂",
      source: "万代鉱源泉",
      ph: "pH 1.6（強酸性・殺菌力抜群）",
      fee: "大人 700円 / 子供 350円",
      feature: "圧倒的スケール！男女合わせて総面積500㎡を誇る日本屈指の大露天風呂。360度大自然に囲まれ、秋は紅葉と湯けむりのコントラストが圧巻。",
      badge: "圧倒的開放感"
    },
    {
      name: "御座之湯（ござのゆ）",
      source: "湯畑源泉 ＆ 万代鉱源泉",
      ph: "2つの源泉を一度に引き比べ",
      fee: "大人 700円 / 子供 350円",
      feature: "湯畑の目の前に佇む木造建築。2階には広々とした大広間の畳休憩所があり、日帰り湯巡りの途中でゆったり横になって寛げるのが最大の魅力。",
      badge: "畳の無料休憩所付き"
    },
    {
      name: "大滝乃湯（おおたきのゆ）",
      source: "煮川源泉（希少な名湯）",
      ph: "美肌の湯・合わせ湯体験",
      fee: "大人 980円 / 子供 450円",
      feature: "温度の異なる湯船（38℃〜46℃）を順に巡る伝統の「合わせ湯」が体験できる日帰り温泉館。サウナ、打たせ湯、お食事処、カフェも完備。",
      badge: "草津伝統の合わせ湯"
    }
  ];

  const lunchGourmet = [
    {
      category: "絶品肉料理",
      title: "群馬銘柄肉「上州牛」すき焼き・ステーキ重",
      price: "約1,800円〜3,500円",
      desc: "群馬が誇る上州牛は、きめ細やかなサシと赤身の甘みが絶品。湯畑周辺の割烹や料理屋で、群馬名物の下仁田ねぎや蒟蒻と一緒に甘辛い割り下でいただくすき焼き鍋御膳は日帰りの贅沢の極みです。",
      recommendSpot: "湯畑周辺の老舗料理店、湯畑一望の食事処"
    },
    {
      category: "名物手打ち麺",
      title: "石臼挽き手打ち二八そば ＆ 舞茸天ぷら",
      price: "約1,200円〜1,900円",
      desc: "草津の清らかな冷水で締めた喉越し抜群の蕎麦。地元特産の肉厚な六合村（くにむら）産・群馬産舞茸をからりと揚げた大判の天ぷらは、サクサクの衣と芳醇な香りが口いっぱいに広がります。",
      recommendSpot: "西の河原通り沿いの名代そば処、湯畑前蕎麦店"
    },
    {
      category: "湯上がりスイーツ",
      title: "草津温泉プリン ＆ 出来立て温泉まんじゅう",
      price: "約120円〜500円",
      desc: "湯畑のエメラルドグリーンを表現したジュレプリンや、湯畑散策中に湯気が立ち上るセイロから手渡されるアツアツの温泉まんじゅう。日帰り散策の食べ歩きに欠かせない大定番です。",
      recommendSpot: "湯畑前プリン専門店本舗、西の河原通り温泉まんじゅう本舗"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans text-stone-800">
      {/* ヒーローセクション（Stone Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-stone-900 text-stone-100 p-8 md:p-14 shadow-2xl border border-stone-700">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800/90 to-amber-950/40" />
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-stone-200 text-stone-900 px-3.5 py-1 rounded-full uppercase">
              KUSATSU NATURAL HOT SPRINGS
            </span>
            <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
              源泉かけ流し・三湯めぐり・上州牛
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【草津温泉 日帰り温泉＆ランチ】<br />
            湯畑周辺で楽しむ源泉かけ流し名湯＆上州牛・手打ちそば名店ガイド
          </h1>

          <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-medium">
            自然湧出量日本一を誇る天下の名湯・草津温泉。日帰りでも直行高速バスを使えば都内から手軽にアクセス可能！西の河原露天風呂・御座之湯・大滝乃湯の「三湯めぐり」から、熱いお湯のあとに染み渡る上州牛すき焼き・舞茸天ぷら蕎麦まで、1日を濃密に楽しむ日帰り極楽ルートをご紹介します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#bathhouses"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs md:text-sm rounded-xl transition shadow-lg inline-flex items-center gap-2"
            >
              <span>♨️ 名湯3選を見る</span>
              <span>↓</span>
            </a>
            <a
              href="#bus-tour-section"
              className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs md:text-sm rounded-xl border border-stone-600 transition inline-flex items-center gap-2"
            >
              <span>🚌 草津行き高速バス・ツアー</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 内部リンクカード（Stoneトーン） */}
      <section className="bg-stone-100 border border-stone-300 rounded-3xl p-6">
        <div className="text-xs font-bold text-stone-700 mb-2">草津温泉の計画に役立つ関連記事</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/kusatsu-onsen-travel-budget-guide"
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-stone-400 transition shadow-sm group flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-amber-700 uppercase">費用完全計算</span>
              <h3 className="text-xs md:text-sm font-black text-stone-900 group-hover:text-amber-800 transition mt-1">
                【草津温泉 費用】1泊2日いくらかかる？交通費＆宿泊費
              </h3>
            </div>
            <div className="text-xs font-bold text-stone-500 mt-3 flex items-center justify-between">
              <span>詳細を見る</span>
              <span>→</span>
            </div>
          </Link>

          <Link
            href="/kusatsu-vs-ikaho-onsen-comparison"
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-stone-400 transition shadow-sm group flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-amber-700 uppercase">群馬二大名湯比較</span>
              <h3 className="text-xs md:text-sm font-black text-stone-900 group-hover:text-amber-800 transition mt-1">
                【草津 vs 伊香保】泉質・街歩き・宿を7項目で徹底比較
              </h3>
            </div>
            <div className="text-xs font-bold text-stone-500 mt-3 flex items-center justify-between">
              <span>詳細を見る</span>
              <span>→</span>
            </div>
          </Link>

          <Link
            href="/tokyo-kusatsu-onsen-highway-bus-guide"
            className="p-4 bg-white rounded-2xl border border-stone-200 hover:border-stone-400 transition shadow-sm group flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-amber-700 uppercase">直行アクセス</span>
              <h3 className="text-xs md:text-sm font-black text-stone-900 group-hover:text-amber-800 transition mt-1">
                【東京・新宿から草津温泉】直行バス「ゆめぐり号」料金・時間
              </h3>
            </div>
            <div className="text-xs font-bold text-stone-500 mt-3 flex items-center justify-between">
              <span>詳細を見る</span>
              <span>→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 外湯三湯めぐりセクション */}
      <section id="bathhouses" className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-xs font-black tracking-widest text-stone-600 uppercase">FAMOUS BATHHOUSES</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
            日帰り入浴ならここ！草津の「三湯（西の河原・御座之湯・大滝乃湯）」完全ガイド
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            草津温泉には無数の共同浴場がありますが、ビジターが快適・清潔に利用できるのが町営の代表3施設。3施設すべて入浴できる「三湯めぐり手形（大人2,100円）」もお得です。
          </p>
        </div>

        <div className="space-y-6">
          {bathHouses.map((bath, idx) => (
            <div
              key={idx}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-md transition space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center text-xs font-black">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-black text-stone-900 font-journal-serif">
                    {bath.name}
                  </h3>
                </div>
                <span className="text-xs font-black bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-300">
                  {bath.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs bg-white p-3 rounded-xl border border-stone-200 text-stone-700">
                <div><strong className="text-stone-900">源泉名:</strong> {bath.source}</div>
                <div><strong className="text-stone-900">泉質特性:</strong> {bath.ph}</div>
                <div><strong className="text-stone-900">入浴料金:</strong> {bath.fee}</div>
              </div>

              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                {bath.feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 草津ランチ＆ご当地グルメセクション */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-xs font-black tracking-widest text-stone-600 uppercase">LOCAL GOURMET LUNCH</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
            お湯のあとは絶品ランチ！草津温泉で絶対食べたい3大名物
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            強酸性のお湯に浸かった後は代謝が上がりお腹もペコペコ。湯畑周辺には名店が集結しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lunchGourmet.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black tracking-wider uppercase bg-stone-200 text-stone-800 px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
                <h3 className="text-base font-black text-stone-900 leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-black text-amber-800">
                  目安予算: {item.price}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="text-[11px] font-semibold text-stone-500 bg-white p-2.5 rounded-xl border border-stone-200">
                📍 {item.recommendSpot}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 楽天トラベル 日帰りバスツアー & クーポン（Stoneトーン） */}
      <section id="bus-tour-section" className="bg-stone-900 text-stone-100 rounded-3xl p-6 md:p-10 shadow-xl border border-stone-700 space-y-6">
        <div className="border-b border-stone-700 pb-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL BUS TOUR & PASS
            </span>
            <span className="text-xs text-amber-300 font-bold">
              湯畑まで乗り換えなし直行
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            草津温泉行き 日帰りバスツアー＆高速バス直行便
          </h2>
          <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-medium">
            草津は電車だと駅から路線バスへの乗り換えが必要ですが、高速バスなら新宿・東京・渋谷・練馬から草津温泉バスターミナル（湯畑徒歩5分）まで完全直行！往復バスとランチ、入浴券がセットになった楽天トラベルの日帰りツアーも大変便利です。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-stone-800 rounded-2xl p-5 border border-stone-700 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">♨️</div>
              <h3 className="text-base font-black text-white">草津日帰り温泉バスツアー</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                都内発着の往復バス＋人気ホテルランチバイキング＋西の河原露天風呂入浴券がセットになったお得プラン。
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs md:text-sm rounded-xl shadow-lg transition"
            >
              👉 楽天トラベル 日帰りバスツアーを予約
            </a>
          </div>

          <div className="bg-stone-800 rounded-2xl p-5 border border-stone-700 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">🚌</div>
              <h3 className="text-base font-black text-white">高速バスクーポン＆直行便</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                片道約3,600円〜運行の高速バス「ゆめぐり号」。楽天トラベル限定の配布中クーポン利用でさらに安く予約可能！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-stone-700 hover:bg-stone-600 text-stone-100 font-black text-xs md:text-sm rounded-xl border border-stone-600 transition"
            >
              🎟️ 高速バスクーポン・直行便をチェック
            </a>
          </div>
        </div>
      </section>

      {/* 提携名門旅館セクション */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>RYOKAN & HOTELS FOR STAY & DAYUSE</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            草津温泉 泉質自慢の名門旅館＆リゾートホテル
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            日帰り入浴や個室デイユース、もちろん1泊旅行にも最高の評価を誇る草津の提携旅館です。
          </p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, idx) => (
              <article
                key={idx}
                className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full bg-stone-200 overflow-hidden">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                        {hotel.hotelName}
                      </div>
                    )}
                    {typeof hotel.hotelMinCharge === "number" && hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[10px] font-black bg-stone-900/90 text-amber-300 px-2 py-0.5 rounded">
                        目安 ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    {hotel.hotelSpecial && (
                      <p className="text-[11px] text-stone-600 line-clamp-3 leading-relaxed">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-stone-800 to-amber-900 hover:from-stone-700 hover:to-amber-800 rounded-xl shadow transition"
                  >
                    ♨️ 楽天トラベルでプラン・空室を見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-stone-500 text-xs">
            ホテル情報を読み込み中または該当ホテルを検索中です。
          </div>
        )}
      </section>

      {/* 入浴マナー＆強酸性泉の心得 */}
      <section className="bg-amber-50/60 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-base md:text-lg font-black font-journal-serif text-amber-950 flex items-center gap-2">
          <span>⚠️</span> 草津温泉（強酸性泉）日帰り入浴の心得
        </h3>
        <ul className="space-y-2 text-xs md:text-sm text-stone-700 leading-relaxed list-disc list-inside">
          <li>
            <strong className="text-stone-900">貴金属類（シルバー・アクセサリー）は必ず外す：</strong>
            草津の強酸性硫黄泉は銀製品を一瞬で黒く変色させます。入浴前に時計や指輪を外してバッグへ保管しましょう。
          </li>
          <li>
            <strong className="text-stone-900">目に入るとかなりしみるため注意：</strong>
            洗顔時は目をつぶり、万が一お湯が目に入った場合は備え付けの真水のシャワーで洗い流してください。
          </li>
          <li>
            <strong className="text-stone-900">肌がデリケートな方は「上がり湯」を：</strong>
            基本は温泉成分を肌に残すのが推奨されますが、皮膚がピリピリしやすい方は最後に真水で軽く流すのが安心です。
          </li>
        </ul>
      </section>
    </div>
  );
}
