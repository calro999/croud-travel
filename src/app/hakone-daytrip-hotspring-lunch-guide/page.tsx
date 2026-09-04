import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【箱根 日帰り温泉 ランチ付きおすすめ】個室休憩＆貸切風呂・老舗旅館の贅沢日帰りプラン完全比較 ｜ 日本全国・旅宿クラウド",
  description: "箱根の日帰り温泉ランチ付きプランを徹底解説！箱根湯本駅チカ旅館の懐石ランチ、強羅のにごり湯＆個室付きプラン、絶景露天風呂と湯葉料理がセットになった日帰り贅沢ステイの料金・予約方法。",
  keywords: ["hakone-daytrip-hotspring-lunch-guide", "箱根 日帰り温泉 ランチ付き", "箱根湯本 個室休憩", "強羅 貸切風呂", "日帰りプラン", "楽天トラベル"],
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
      return data["hakone-daytrip-hotspring-lunch-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-daytrip-hotspring-lunch-guide", e);
  }
  return [];
}

export default function HakoneDaytripHotspringLunchPage() {
  const hotels = loadHotels();

  const daytripPlans = [
    {
      type: "王道・個室休憩＋懐石ランチ",
      area: "箱根湯本",
      priceRange: "8,500円〜16,000円 / 1名",
      stayHours: "最大5〜6時間（11:00〜17:00）",
      target: "記念日・夫婦・母娘旅・ゆったりおこもり派",
      features: [
        "箱根湯本駅から送迎または徒歩圏で移動負担ゼロ",
        "老舗旅館の客室を日帰り専用で貸切利用可能",
        "料理長特選の季節の懐石料理をお部屋食または個室食事処で堪能",
        "大浴場露天風呂に加えて貸切露天風呂の割引特典付きプランも豊富"
      ],
      points: "チェックイン時に浴衣・バスタオルが用意され、宿泊客と同等のハイグレードなおもてなしを半額以下の予算で体感できます。"
    },
    {
      type: "絶景露天＋名物湯葉・自然薯ランチ",
      area: "塔ノ沢・宮ノ下",
      priceRange: "4,500円〜8,000円 / 1名",
      stayHours: "約3〜4時間（入浴＋食事）",
      target: "アクティブ女子旅・カップル・週末リフレッシュ",
      features: [
        "早川渓谷や箱根の森を望む絶景インフィニティ露天風呂",
        "箱根名物の汲み上げ湯葉御膳や滋養たっぷりの自然薯とろろ蕎麦",
        "個室なしでも広々とした湯上がりラウンジや足湯カフェでリラックス",
        "箱根登山鉄道の駅から近く、観光の合間にスムーズに立ち寄れる"
      ],
      points: "事前予約なしでも利用できる施設もあり、思い立ったらすぐ行ける気軽さと高コスパが魅力です。"
    },
    {
      type: "硫黄にごり湯貸切＋創作和食",
      area: "強羅・仙石原",
      priceRange: "9,000円〜18,500円 / 1名",
      stayHours: "最大4〜6時間（11:30〜17:30）",
      target: "泉質重視の温泉通・静寂を好む大人の休日",
      features: [
        "大涌谷から引湯した乳白色の濃厚な硫黄泉（酸性硫酸塩泉）を満喫",
        "緑に囲まれた専用貸切露天風呂で誰にも邪魔されない湯浴み",
        "地元足柄牛ステーキや駿河湾直送の旬魚を取り入れた創作ランチコース",
        "標高の高い高原ならではの爽快な空気と四季折々の借景"
      ],
      points: "箱根湯本から登山電車やケーブルカーに乗るプチ旅情も抜群。美肌効果を求める温泉通に圧倒的人気です。"
    }
  ];

  const timeSchedule = [
    {
      time: "08:50",
      title: "小田急ロマンスカーで新宿駅を出発",
      desc: "新宿駅から「メトロはこね」または「スーパーはこね」に乗車。車窓の緑を眺めながらわずか約75分で箱根湯本駅へ直行。"
    },
    {
      time: "10:15",
      title: "箱根湯本駅に到着＆温泉街の川沿いをお散歩",
      desc: "湯本橋から早川の清流を眺め、老舗の温泉まんじゅう店で焼きたてをパクリ。ランチ前の心地よいウォーキング。"
    },
    {
      time: "11:00",
      title: "老舗旅館にチェックイン・客室へ案内",
      desc: "日帰り個室プランの受付。ふかふかの座布団が迎える純和風客室で浴衣に着替え、ウェルカム銘菓で一服。"
    },
    {
      time: "11:30",
      title: "一番風呂！緑まぶしい渓流露天風呂を満喫",
      desc: "まだ日帰り客で混み合わない午前中の露天風呂へ。アルカリ性単純温泉のやわらかな湯が日頃の疲れをじんわり解きほぐします。"
    },
    {
      time: "12:45",
      title: "個室でいただく極上の季節懐石ランチ",
      desc: "箱根名水で仕込んだ手作り湯葉、相模湾の地魚お造り、足柄牛の小鍋仕立てなど、目にも華やかな出来立て料理をじっくり堪能。"
    },
    {
      time: "14:15",
      title: "プライベート貸切風呂＆お部屋でお昼寝",
      desc: "食後は畳の部屋でゴロゴロ寛ぐ至福の湯浴み体験。事前予約しておいた貸切風呂で湯上がりの贅沢なプライベートタイムを。"
    },
    {
      time: "16:30",
      title: "チェックアウト＆駅前商店街でお土産探し",
      desc: "湯本駅前通りで寄木細工、干物、箱根ラスクなどを品定め。17時台のロマンスカーに乗れば、19時には都内自宅へ帰着！"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans text-slate-800">
      {/* ヒーローセクション（Cyan Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-900 to-slate-900 text-white p-8 md:p-14 shadow-2xl border border-cyan-800/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-cyan-400 text-slate-950 px-3.5 py-1 rounded-full uppercase">
              HAKONE DAYTRIP ONSEN & LUNCH
            </span>
            <span className="text-xs font-bold bg-white/10 text-cyan-200 px-3 py-1 rounded-full border border-cyan-300/20">
              個室休憩・貸切露天・名旅館
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【箱根 日帰り温泉 ランチ付きおすすめ】<br />
            個室休憩＆貸切風呂・老舗旅館の贅沢プラン完全比較
          </h1>

          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            「宿泊する時間はないけれど、旅館の美味しい料理と名湯で贅沢に癒やされたい！」そんな大人の休日に最適なのが、箱根の日帰り温泉＆ランチプラン。箱根湯本の老舗旅館による客室休憩付きプランから、強羅のにごり湯貸切、湯葉会席ランチまで、失敗しない選び方と最新料金を徹底解説します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#plans-comparison"
              className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs md:text-sm rounded-xl transition shadow-lg inline-flex items-center gap-2"
            >
              <span>♨️ プラン比較を見る</span>
              <span>↓</span>
            </a>
            <a
              href="#bus-tour-section"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-cyan-100 font-bold text-xs md:text-sm rounded-xl border border-white/20 transition inline-flex items-center gap-2"
            >
              <span>🚌 楽天トラベル 箱根バスツアー</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 内部リンクカード */}
      <section className="bg-cyan-50/70 border border-cyan-200 rounded-3xl p-6">
        <div className="text-xs font-bold text-cyan-800 mb-2">合わせてチェックしたい箱根ガイド</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/hakone-travel-budget-guide"
            className="p-4 bg-white rounded-2xl border border-cyan-100 hover:border-cyan-400 transition shadow-sm group flex items-start justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-cyan-600 uppercase">費用シミュレーション</span>
              <h3 className="text-sm font-black text-slate-900 group-hover:text-cyan-700 transition">
                【箱根旅行 費用】日帰り・1泊2日それぞれいくら？フリーパス活用の全費用
              </h3>
            </div>
            <span className="text-cyan-600 font-bold ml-2">→</span>
          </Link>

          <Link
            href="/hakone-vs-atami-which-better"
            className="p-4 bg-white rounded-2xl border border-cyan-100 hover:border-cyan-400 transition shadow-sm group flex items-start justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-cyan-600 uppercase">徹底比較</span>
              <h3 className="text-sm font-black text-slate-900 group-hover:text-cyan-700 transition">
                【箱根 vs 熱海 どっちに行く？】日帰り・1泊それぞれのおすすめを本気比較
              </h3>
            </div>
            <span className="text-cyan-600 font-bold ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* プラン比較セクション */}
      <section id="plans-comparison" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-cyan-100 pb-4">
          <span className="text-xs font-black tracking-widest text-cyan-700 uppercase">PLAN SELECTION</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
            箱根の日帰り温泉＆ランチ 3大スタイルの特徴と料金目安
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            箱根の日帰り温泉ランチプランは「エリア」「滞在スタイル」「ランチの内容」で大きく3タイプに分かれます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {daytripPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-cyan-50/40 border-2 border-cyan-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-cyan-400 transition"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black bg-cyan-600 text-white px-2.5 py-0.5 rounded-full">
                    Type {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-cyan-800 bg-white px-2 py-0.5 rounded border border-cyan-200">
                    📍 {plan.area}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {plan.type}
                  </h3>
                  <div className="mt-2 text-lg font-black text-cyan-700">
                    {plan.priceRange}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    滞在時間: {plan.stayHours}
                  </div>
                </div>

                <div className="text-[11px] font-bold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-cyan-100">
                  🎯 おすすめ: {plan.target}
                </div>

                <ul className="space-y-2 text-xs text-slate-700">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <span className="text-cyan-600 font-black">✔</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-cyan-200/60 text-[11px] text-slate-600 leading-relaxed">
                💡 <span className="font-semibold">{plan.points}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* タイムスケジュール・モデルコース */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-cyan-100 pb-4">
          <span className="text-xs font-black tracking-widest text-cyan-700 uppercase">BEST TIMELINE</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
            日帰りで120%満喫する！至福の個室ステイ 1日タイムスケジュール
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            都内から出発して夕方には優雅に帰宅できる、無駄のない大人のモデルコースです。
          </p>
        </div>

        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-cyan-200">
          {timeSchedule.map((item, idx) => (
            <div key={idx} className="relative space-y-1">
              <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-600 border-2 border-white shadow" />
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-xs font-black text-cyan-800 bg-cyan-100 px-2.5 py-0.5 rounded-md border border-cyan-200">
                  {item.time}
                </span>
                <h3 className="text-sm md:text-base font-black text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 楽天トラベル 日帰りバスツアー & クーポン 特集（プロミネント） */}
      <section id="bus-tour-section" className="bg-gradient-to-br from-cyan-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-cyan-700/50 space-y-6">
        <div className="border-b border-cyan-800/60 pb-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-cyan-400 text-slate-950 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL BUS TOUR & COUPON
            </span>
            <span className="text-xs text-cyan-300 font-bold">
              運転なし・乗り換えなしで直行！
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            箱根名湯＆グルメ付き！楽天トラベル日帰りバスツアー
          </h2>
          <p className="text-xs md:text-sm text-cyan-100/80 leading-relaxed font-medium">
            電車やロマンスカーの乗り換えが面倒な方には、都内（新宿・東京・横浜など）から直行する「日帰り温泉＆ランチ付きバスツアー」が大人気！芦ノ湖遊覧船や大涌谷観光、海鮮・湯葉バイキングがセットになったお得な限定プランが多数ラインナップされています。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-2xl p-5 border border-cyan-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">🚌</div>
              <h3 className="text-base font-black text-white">箱根日帰りバスツアー特集</h3>
              <p className="text-xs text-cyan-100/80 leading-relaxed">
                新宿・東京発着。箱根の絶景露天風呂入浴券とランチ、秋の紅葉めぐりがセットになった添乗員付きプランを予約。
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 text-slate-950 font-black text-xs md:text-sm rounded-xl shadow-lg transition"
            >
              👉 楽天トラベル 日帰りバスツアーを見る
            </a>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 border border-cyan-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-2xl">🎫</div>
              <h3 className="text-base font-black text-white">高速バス・観光バス割引クーポン</h3>
              <p className="text-xs text-cyan-100/80 leading-relaxed">
                楽天トラベルでは高速バスや日帰り観光バスで使えるお得な割引クーポンを定期配布中。週末の予約前に必ず獲得しておきましょう。
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-white/20 hover:bg-white/30 text-white font-black text-xs md:text-sm rounded-xl border border-white/30 transition"
            >
              🎟️ 高速バス・ツアークーポンをチェック
            </a>
          </div>
        </div>
      </section>

      {/* 掲載宿一覧（loadHotels() による楽天トラベル提携宿） */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-cyan-100 pb-4">
          <div className="flex items-center gap-2 text-cyan-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>RECOMMENDED RYOKAN & HOTELS</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900">
            日帰りプラン・温泉自慢のおすすめ名旅館
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            日帰り入浴や個室デイユース、宿泊でも高評価を誇る箱根の名湯宿を厳選。
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
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-bold">
                        {hotel.hotelName}
                      </div>
                    )}
                    {typeof hotel.hotelMinCharge === "number" && hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[10px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded">
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
                    className="block w-full text-center py-3 text-xs font-black text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 rounded-xl shadow transition"
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

      {/* 失敗しない予約のポイント・注意点 */}
      <section className="bg-cyan-50/50 border border-cyan-200 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-base md:text-lg font-black font-journal-serif text-cyan-950 flex items-center gap-2">
          <span>💡</span> 箱根の日帰り温泉＆ランチを予約する前の注意点
        </h3>
        <ul className="space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed list-disc list-inside">
          <li>
            <strong className="text-slate-900">個室利用時間は11:00〜15:00頃が中心：</strong>
            旅館の清掃・宿泊客チェックイン（15時以降）に合わせて設定されているため、遅刻すると滞在可能時間が短くなるので注意が必要です。
          </li>
          <li>
            <strong className="text-slate-900">週末のロマンスカー・箱根湯本周辺は午前中から混雑：</strong>
            人気の特急券は1週間前までの事前予約を推奨。帰りの電車もあらかじめ座席指定しておくとスムーズです。
          </li>
          <li>
            <strong className="text-slate-900">入湯税は日帰りでも別途発生（50円〜150円程度）：</strong>
            プラン料金とは別に現地現金精算となる宿が多いため、小銭を用意しておくとスマートです。
          </li>
        </ul>
      </section>
    </div>
  );
}
