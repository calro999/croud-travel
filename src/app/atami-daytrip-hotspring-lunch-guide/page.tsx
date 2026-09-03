import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【熱海 日帰り温泉 ランチ付きおすすめ】相模湾一望オーシャンビュー露天風呂＆極上海鮮丼日帰りプラン ｜ 日本全国・旅宿クラウド",
  description: "東京から50分の熱海で楽しむ日帰り温泉ランチ！相模湾を一望する絶景インフィニティ露天風呂、金目鯛煮付け＆朝獲れ地魚海鮮丼ランチがセットになったホテルプラン徹底比較。",
  keywords: ["atami-daytrip-hotspring-lunch-guide", "熱海 日帰り温泉 ランチ付き", "熱海 オーシャンビュー露天風呂", "熱海 海鮮丼 ランチ", "熱海 日帰り温泉 個室", "楽天トラベル"],
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
      return data["atami-daytrip-hotspring-lunch-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for atami-daytrip-hotspring-lunch-guide", e);
  }
  return [];
}

export default function AtamiDaytripHotspringLunchPage() {
  const hotels = loadHotels();

  const oceanviewPlans = [
    {
      title: "インフィニティ絶景露天 ＆ 贅沢海鮮丼御膳",
      scenery: "相模湾・初島・大島を一望する水平線ビュー",
      lunchMenu: "朝獲れ地魚（真鯛・アジ・マグロ・いくら）極上海鮮丼 ＋ あら汁",
      price: "5,500円〜9,800円 / 1名",
      timeSlot: "11:30〜15:30（食事＋入浴・タオルフリー）",
      highlight: "海と湯船が一体化するインフィニティ風呂。晴れた日には青く輝く海を眺めながら極上のリゾート気分を満喫できます。"
    },
    {
      title: "名門老舗旅館の個室休憩 ＆ 伝統の金目鯛姿煮会席",
      scenery: "閑静な日本庭園と湧出する名湯の湯けむり",
      lunchMenu: "伊豆名物・金目鯛の姿煮 ＋ 季節の先付け・お造り懐石",
      price: "12,000円〜22,000円 / 1名",
      timeSlot: "最大5時間（11:00〜16:00 客室利用付き）",
      highlight: "文人墨客に愛された歴史ある名門旅館で、客室貸切とお部屋食。記念日やお祝いの日帰り旅行に選ばれています。"
    },
    {
      title: "海辺のリゾートホテル ＆ ランチビュッフェ＋温泉",
      scenery: "熱海サンビーチ沿い・マリーナビュー",
      lunchMenu: "焼き立てステーキ・地魚握り寿司・スイーツ食べ放題",
      price: "4,800円〜7,500円 / 1名",
      timeSlot: "12:00〜16:00（ランチバイキング＋大浴場入浴）",
      highlight: "友人同士や家族連れに最適！好きなものを好きなだけ食べられるビュッフェと、広々とした展望大浴場がセットになった高コスパプラン。"
    }
  ];

  const atamiGourmetHighlights = [
    {
      name: "伊豆近海 稲取・下田港直送「金目鯛の煮付け」",
      desc: "熱海に来たら絶対に外せない王道のごちそう。濃厚で甘辛い秘伝のタレでふっくら煮付けられた脂の乗った金目鯛は、白ご飯やお酒との相性が抜群です。"
    },
    {
      name: "網代港直送 朝獲れ地魚の海鮮丼",
      desc: "熱海のすぐ隣に位置する天然の良港・網代（あじろ）から毎朝届く新鮮なアジ、カンパチ、地魚の数々。プリプリとした歯ごたえと抜群の鮮度を堪能できます。"
    },
    {
      name: "熱海駅前仲見世通り＆銀座商店街の食べ歩き",
      desc: "日帰り温泉の前後に立ち寄りたいのが商店街。温泉まんじゅう、磯揚げまる天、出来立て熱海プリンなど、活気あふれるストリートフードが目白押しです。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans text-slate-800">
      {/* ヒーローセクション（Orange Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-amber-600 via-orange-500 to-rose-500 text-white p-8 md:p-14 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 text-[180px] text-white/5 font-black select-none pointer-events-none">
          ATAMI
        </div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-white text-orange-600 px-3.5 py-1 rounded-full uppercase shadow-sm">
              SHINKANSEN 45MIN FROM TOKYO
            </span>
            <span className="text-xs font-bold bg-orange-950/20 text-orange-100 px-3 py-1 rounded-full border border-white/20">
              相模湾オーシャンビュー・極上海鮮
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【熱海 日帰り温泉 ランチ付きおすすめ】<br />
            相模湾一望オーシャンビュー露天風呂＆極上海鮮丼日帰りプラン
          </h1>

          <p className="text-xs md:text-sm text-orange-50 leading-relaxed font-medium">
            東京駅から東海道新幹線で最速35〜45分、普通列車でも約1時間45分。思い立ったらすぐ行ける距離感が最大の魅力である熱海温泉。一面に広がる青い相模湾を望むインフィニティ露天風呂と、脂の乗った金目鯛煮付けや朝獲れ海鮮丼がセットになった、極上の日帰り温泉プランを比較解説します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#ocean-plans"
              className="px-5 py-2.5 bg-white hover:bg-orange-50 text-orange-600 font-black text-xs md:text-sm rounded-xl transition shadow-lg inline-flex items-center gap-2"
            >
              <span>🌊 絶景プラン3選を見る</span>
              <span>↓</span>
            </a>
            <a
              href="#bus-tour-section"
              className="px-5 py-2.5 bg-orange-950/40 hover:bg-orange-950/60 text-white font-bold text-xs md:text-sm rounded-xl border border-white/30 transition inline-flex items-center gap-2"
            >
              <span>🚌 熱海・伊豆バスツアー</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 内部リンクカード（Orangeトーン） */}
      <section className="bg-orange-50/80 border border-orange-200 rounded-3xl p-6">
        <div className="text-xs font-bold text-orange-900 mb-2">熱海・伊豆旅行を検討中の方へのおすすめガイド</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/atami-izu-travel-budget-guide"
            className="p-4 bg-white rounded-2xl border border-orange-100 hover:border-orange-400 transition shadow-sm group flex items-start justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-orange-600 uppercase">費用白書</span>
              <h3 className="text-sm font-black text-slate-900 group-hover:text-orange-700 transition">
                【熱海・伊豆旅行 費用】日帰り・1泊2日でいくら？片道2,000円で行く全費用
              </h3>
            </div>
            <span className="text-orange-600 font-bold ml-2">→</span>
          </Link>

          <Link
            href="/tokyo-izu-atami-bus-vs-train-guide"
            className="p-4 bg-white rounded-2xl border border-orange-100 hover:border-orange-400 transition shadow-sm group flex items-start justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-orange-600 uppercase">交通比較</span>
              <h3 className="text-sm font-black text-slate-900 group-hover:text-orange-700 transition">
                【東京から熱海・伊豆 安く行く方法】新幹線・特急踊り子・普通列車を徹底比較
              </h3>
            </div>
            <span className="text-orange-600 font-bold ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* オーシャンビュープラン比較セクション */}
      <section id="ocean-plans" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-orange-100 pb-4">
          <span className="text-xs font-black tracking-widest text-orange-600 uppercase">OCEAN VIEW PLANS</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
            熱海で選ぶべき日帰り温泉＆ランチ 3大人気プラン
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            絶景のロケーションと料理のバリエーションで比較。旅の目的や同伴者に合わせて選べます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {oceanviewPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-orange-50/40 border-2 border-orange-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-orange-400 transition"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black bg-orange-500 text-white px-2.5 py-0.5 rounded-full">
                    Plan {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-orange-800 bg-white px-2 py-0.5 rounded border border-orange-200">
                    ⏱️ {plan.timeSlot}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {plan.title}
                  </h3>
                  <div className="mt-2 text-lg font-black text-orange-600">
                    {plan.price}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 bg-white p-3 rounded-xl border border-orange-100">
                  <div>
                    <strong className="text-slate-900">🌅 景色:</strong> {plan.scenery}
                  </div>
                  <div>
                    <strong className="text-slate-900">🐟 昼食:</strong> {plan.lunchMenu}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {plan.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-orange-200/60 text-[11px] font-bold text-orange-700">
                ✨ 日帰りで非日常感を味わうイチオシスタイル
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 熱海ランチ＆グルメの魅力 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-orange-100 pb-4">
          <span className="text-xs font-black tracking-widest text-orange-600 uppercase">ATAMI SEAFOOD GOURMET</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
            温泉の前後に味わう！熱海名物グルメの見どころ
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            相模灘の豊かな漁場に面した熱海ならではの極上海の幸。
          </p>
        </div>

        <div className="space-y-4">
          {atamiGourmetHighlights.map((gourmet, idx) => (
            <div key={idx} className="p-5 bg-orange-50/50 rounded-2xl border border-orange-100 space-y-1.5">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="text-orange-500">🥢</span> {gourmet.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {gourmet.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 楽天トラベル 日帰りバスツアー & クーポン（プロミネント） */}
      <section id="bus-tour-section" className="bg-gradient-to-br from-orange-950 via-stone-900 to-amber-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-orange-600/40 space-y-6">
        <div className="border-b border-orange-800/60 pb-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-orange-400 text-slate-950 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL BUS TOUR & COUPON
            </span>
            <span className="text-xs text-orange-300 font-bold">
              運転不要・海鮮食べ放題＆温泉付き
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            熱海・伊豆半島 日帰りバスツアー＆高速バス特集
          </h2>
          <p className="text-xs md:text-sm text-orange-100/80 leading-relaxed font-medium">
            熱海の日帰り旅行はバスツアーも大人気！都内（新宿・東京・池袋など）から出発し、「熱海温泉入浴＋海鮮浜焼き食べ放題＋みかん狩り」など、季節の味覚と観光が丸ごとセットになったプランが格安で利用できます。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-2xl p-5 border border-orange-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">🦀</div>
              <h3 className="text-base font-black text-white">熱海・伊豆日帰りバスツアー</h3>
              <p className="text-xs text-orange-100/80 leading-relaxed">
                浜焼きバイキング・絶景露天風呂・熱海海上花火大会観覧など、人気日帰りツアーを最安値で比較予約。
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 text-white font-black text-xs md:text-sm rounded-xl shadow-lg transition"
            >
              👉 楽天トラベル 日帰りバスツアーを見る
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-orange-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">🎫</div>
              <h3 className="text-base font-black text-white">高速バス・ツアークーポン</h3>
              <p className="text-xs text-orange-100/80 leading-relaxed">
                楽天トラベルでは伊豆・熱海方面の観光バスや高速バスで使えるお得な割引クーポンを定期配布中！
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

      {/* 提携宿一覧 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-orange-100 pb-4">
          <div className="flex items-center gap-2 text-orange-600 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>RECOMMENDED ATAMI HOTELS & RYOKAN</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900">
            熱海温泉 露天風呂自慢のおすすめ提携ホテル・旅館
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            日帰り入浴プランやデイユース、宿泊でも大人気の熱海の名宿をピックアップ。
          </p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <span className="absolute bottom-2 right-2 text-[10px] font-black bg-slate-900/90 text-orange-300 px-2 py-0.5 rounded">
                        目安 ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-black font-journal-serif text-slate-900 line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
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
                    className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-orange-500 to-rose-500 hover:brightness-110 rounded-xl shadow transition"
                  >
                    ♨️ 楽天トラベルでプラン・空室を見る
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

      {/* 熱海日帰り成功のコツ */}
      <section className="bg-orange-50/50 border border-orange-200 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-base md:text-lg font-black font-journal-serif text-orange-950 flex items-center gap-2">
          <span>💡</span> 熱海の日帰り温泉＆ランチを最高に楽しむ3つのコツ
        </h3>
        <ul className="space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed list-disc list-inside">
          <li>
            <strong className="text-slate-900">ランチタイムの事前予約は必須：</strong>
            熱海の有名海鮮店は休日の12時台に1〜2時間待ちになることも。日帰りプランで温泉と食事処がセット予約できるプランを選ぶのが最も効率的です。
          </li>
          <li>
            <strong className="text-slate-900">坂道が多いので歩きやすいスニーカーで：</strong>
            熱海駅からサンビーチや海岸沿いの旅館街へは急な下り坂（帰りは上り坂）が続きます。路線バスやタクシー（初乗り600円程度）も上手に活用しましょう。
          </li>
          <li>
            <strong className="text-slate-900">帰りの新幹線自由席・指定席の確保：</strong>
            日曜夕方の熱海駅は東京方面へ戻る行楽客で混雑します。事前にチケットレス特急券やスマートEXで座席を確保しておくと帰りも安心です。
          </li>
        </ul>
      </section>
    </div>
  );
}
