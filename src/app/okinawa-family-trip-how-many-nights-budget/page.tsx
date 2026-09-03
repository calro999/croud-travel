import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【子連れ沖縄旅行 何泊がベスト？】年齢別おすすめ日数・総額費用＆キッズプール付きリゾートホテル比較 ｜ 日本全国・旅宿クラウド",
  description: "子連れ沖縄旅行は2泊3日？3泊4日？未就学児・小学生の年齢別最適スケジュール、美ら海水族館とビーチの回り方、レンタカー選び、キッズプールやスライダー充実の恩納村ファミリーリゾート徹底解説。",
  keywords: [
    "子連れ 沖縄旅行 何泊",
    "沖縄 子連れ 2泊3日 3泊4日 比較",
    "沖縄旅行 予算 家族4人",
    "美ら海水族館 子連れ 回り方",
    "沖縄 プール付きホテル 子連れ",
    "恩納村 リゾートホテル 子連れ",
    "北谷 アメリカンビレッジ 子連れ",
    "楽天トラベル 沖縄 子連れ"
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
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["okinawa-family-trip-how-many-nights-budget"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for okinawa-family-trip-how-many-nights-budget", e);
  }
  return [];
}

export default function OkinawaFamilyTripNightsBudgetPage() {
  const hotels = loadHotels();

  // 宿泊日数別の比較表データ
  const nightsComparison = [
    {
      plan: "2泊3日（コンパクト日程）",
      target: "0〜2歳の乳幼児・週末＋有給1日・飛行機疲れを最小限にしたい家族",
      merit: "荷物が少なくて済み、子どもの体力消耗が少ない。仕事の調整がつけやすい。",
      demerit: "北部（美ら海水族館）と南部を両方回るのはハード。中南部中心の観光に限定される。",
      budget: "家族4人：約16万〜24万円",
      recommendRoute: "那覇空港 → 豊崎美らSUNビーチ・DMMかりゆし水族館 → 北谷・アメリカンビレッジ宿泊 → 国際通り"
    },
    {
      plan: "3泊4日（王道ベスト日程）",
      target: "3〜6歳未就学児〜小学生連れのファミリー全般に最もおすすめ！",
      merit: "中日（2日目・3日目）を丸々遊べるため、美ら海水族館もホテルのキッズプールも存分に満喫可能。",
      demerit: "台風シーズン（7〜9月）の欠航リスクや、繁忙期のホテル代・航空券代がやや高くなる。",
      budget: "家族4人：約25万〜38万円",
      recommendRoute: "那覇空港 → 恩納村リゾートホテル宿泊 → 美ら海水族館＆古宇利島 → ホテルプール＆ビーチ → 那覇空港"
    },
    {
      plan: "4泊5日（ゆったりリゾート日程）",
      target: "小学生以上の活発キッズ・青の洞窟シュノーケリング・離島日帰りも楽しみたい家族",
      merit: "天候に合わせてスケジュールを柔軟に変更でき、ホテルステイとアクティビティを完璧に両立。",
      demerit: "旅行総額が40万円を超えやすく、長期休暇（夏休み・春休み・GW）の手配争奪戦が激しい。",
      budget: "家族4人：約35万〜50万円以上",
      recommendRoute: "那覇空港 → 本部・名護滞在 → 恩納村高級リゾート滞在（ホテルホッピング） → 那覇ショッピング"
    }
  ];

  // 年齢別の旅程アドバイス
  const ageAdvice = [
    {
      age: "0〜1歳（ねんね・ハイハイ期）",
      icon: "🍼",
      stay: "那覇空港から車で40分以内の「北谷・宜野湾・南部」",
      point: "長時間のチャイルドシート移動はギャン泣きの原因に。美ら海水族館（片道約2時間）は無理せず、空港近くの「DMMかりゆし水族館」やホテルの芝生・屋内ベビープールでゆったり過ごすのが吉。"
    },
    {
      age: "2〜4歳（イヤイヤ期・トイトレ期）",
      icon: "🧸",
      stay: "浅瀬のキッズプール＆和洋室のある「恩納村・読谷村」",
      point: "水深30cm前後の幼児用プールやすべり台があるホテルが天国。おむつが外れていなくても「水遊びパンツ着用で利用可能か」を事前確認しておくと安心です。"
    },
    {
      age: "5歳〜小学生（わんぱくアクティブ期）",
      icon: "🤿",
      stay: "大型ウォータースライダー＆プライベートビーチ直結ホテル",
      point: "美ら海水族館のオキちゃん劇場（イルカショー）やエメラルドビーチ、マリンクラフト体験など好奇心を刺激する体験をプラス。夜はアメリカンビレッジでステーキディナーが定番人気！"
    }
  ];

  // 家族4人（大人2名・子ども2名）のリアル費用内訳（3泊4日モデル）
  const budgetBreakdown = [
    { item: "往復航空券（LCC〜大手航空会社）", cost: "約80,000円〜150,000円", note: "3歳未満の膝上抱っこは無料。早期割やセールを活用。" },
    { item: "リゾートホテル宿泊費（3泊分）", cost: "約90,000円〜160,000円", note: "添い寝無料プランや朝食付きファミリープラン。" },
    { item: "レンタカー代（コンパクト〜ミニバン）", cost: "約25,000円〜45,000円", note: "チャイルドシート・ジュニアシート2台レンタル込み。" },
    { item: "現地食費（朝食・ランチ・カフェ・夕食）", cost: "約40,000円〜60,000円", note: "沖縄そば、タコライス、ステーキ、ホテルディナー。" },
    { item: "観光入場料＆アクティビティ代", cost: "約15,000円〜25,000円", note: "美ら海水族館、グラスボート、お土産代など。" },
    { item: "合計総額の目安", cost: "約250,000円〜440,000円", note: "オフシーズンなら20万円台前半、夏休み繁忙期は40万円台〜" }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-stone-800">
      {/* ヒーローセクション（Sky/Ocean Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-950 to-blue-900 text-white p-8 md:p-14 shadow-2xl border border-sky-700/40">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-sky-500/30 text-sky-200 border border-sky-400/40 px-3.5 py-1 rounded-full uppercase shadow-sm">
              OKINAWA FAMILY RESORT GUIDE
            </span>
            <span className="text-xs font-bold bg-amber-400 text-stone-950 px-3 py-1 rounded-full shadow font-semibold">
              年齢別・ベスト日数徹底比較
            </span>
            <span className="text-xs font-bold bg-white/20 text-white backdrop-blur px-3 py-1 rounded-full">
              予算総額公開
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【子連れ沖縄旅行 何泊がベスト？】<br />
            <span className="text-sky-300">年齢別おすすめ日数・総額費用＆キッズプール付きリゾートホテル比較</span>
          </h1>

          <p className="text-sm md:text-base text-sky-100/90 leading-relaxed font-normal pt-1">
            「赤ちゃんと行くなら2泊3日？それとも3泊4日？」「家族4人の総額費用はいくら用意すれば足りる？」「レンタカー移動で子どもが飽きないルートは？」初めての子連れ沖縄旅行で迷いがちな疑問をまるごと解決！年齢別の最適日数から予算内訳、キッズプール＆大浴場付きのおすすめリゾートまで徹底解説します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-sky-200">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 結論：ファミリーの黄金比は「3泊4日」
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 0〜2歳は無理せず中南部リゾート滞在
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 添い寝無料＆キッズプール完備ホテル
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル公式 ファミリー応援クーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 内部リンク・関連予算ガイドナビゲーション */}
      <nav className="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm md:text-base font-black text-sky-950 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
            沖縄旅行の費用・予算シミュレーション（あわせて読みたい）
          </h2>
          <span className="text-[10px] text-sky-700 bg-sky-100/70 font-bold px-2 py-0.5 rounded">
            予算詳細ガイド
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <Link
            href="/okinawa-travel-budget-plan"
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-sky-200/60 hover:border-sky-500 hover:shadow transition group"
          >
            <span className="text-sky-600 font-bold text-base">🌺</span>
            <div>
              <span className="font-bold text-sky-950 group-hover:text-sky-700 transition block">
                沖縄旅行 費用・予算プラン完全解説
              </span>
              <span className="text-[11px] text-stone-500">
                2泊3日・3泊4日の時期別旅費総額、レンタカー代、格安航空券の手配法
              </span>
            </div>
          </Link>
          <div className="p-3 rounded-xl bg-sky-100/50 border border-sky-200/40 text-sky-900 flex items-center">
            <span className="text-xs leading-relaxed">
              💡 <strong>子連れ節約の秘訣：</strong>航空券とホテルがセットになった「楽天トラベル 楽パック（航空券＋宿泊）」を利用すると、個別予約よりも大幅に安くなるケースが多数あります。
            </span>
          </div>
        </div>
      </nav>

      {/* 📅 何泊がベスト？宿泊日数別 徹底比較テーブル */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-sky-900/10 pb-4">
          <div className="flex items-center gap-2 text-sky-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>📅 HOW MANY NIGHTS?</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            2泊3日 vs 3泊4日 vs 4泊5日！子連れファミリー向け徹底比較
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            子どもの年齢、移動の体力、予算のバランスから最適な日数を選びましょう。
          </p>
        </div>

        <div className="space-y-6">
          {nightsComparison.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-sky-50/40 via-cyan-50/20 to-white border border-sky-200/70 shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-100 pb-3">
                <h3 className="text-base md:text-lg font-black text-sky-950 flex items-center gap-2">
                  <span className="text-sky-600">🌴</span> {item.plan}
                </h3>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                  費用目安：{item.budget}
                </span>
              </div>

              <div className="text-xs space-y-2">
                <div>
                  <span className="font-bold text-stone-900 block mb-0.5">🎯 おすすめ対象：</span>
                  <p className="text-stone-600 leading-relaxed">{item.target}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                    <span className="font-bold block mb-1">⭕ メリット</span>
                    <p className="text-[11px] leading-relaxed">{item.merit}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
                    <span className="font-bold block mb-1">⚠️ 注意点</span>
                    <p className="text-[11px] leading-relaxed">{item.demerit}</p>
                  </div>
                </div>
                <div className="pt-2 text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                  <span className="font-bold text-sky-900 block mb-0.5">🗺️ おすすめ王道ルート：</span>
                  <p className="text-[11px] leading-relaxed">{item.recommendRoute}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 👶 年齢別アドバイスセクション */}
      <section className="bg-gradient-to-br from-cyan-50/60 via-sky-50/40 to-stone-50 border border-sky-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-sky-200 pb-3">
          <div className="flex items-center gap-2 text-sky-800 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>👶 AGE-BY-AGE GUIDE</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-sky-950">
            我が子にピッタリなのはどこ？子どもの年齢別エリア選び＆過ごし方
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ageAdvice.map((adv, idx) => (
            <div key={idx} className="bg-white border border-sky-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{adv.icon}</span>
                <h3 className="text-sm font-bold text-sky-950 leading-snug">
                  {adv.age}
                </h3>
              </div>
              <div className="text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 p-2 rounded-lg">
                📍 おすすめ宿泊エリア：{adv.stay}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {adv.point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 リアル費用シミュレーション（家族4人・3泊4日） */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-sky-900/10 pb-4">
          <div className="flex items-center gap-2 text-sky-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>💰 BUDGET BREAKDOWN</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            家族4人（大人2＋子ども2）沖縄3泊4日のリアル総額費用内訳
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            何にいくらかかるかを把握して、無駄な出費を抑える予算シミュレーションです。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-sky-100/70 text-sky-950 border-b border-sky-200">
                <th className="p-3 font-bold">費目</th>
                <th className="p-3 font-bold">費用目安（家族4人）</th>
                <th className="p-3 font-bold">パパママ向け節約ワンポイント</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {budgetBreakdown.map((row, idx) => (
                <tr key={idx} className={idx === budgetBreakdown.length - 1 ? "bg-amber-50/80 font-bold text-stone-900" : "hover:bg-sky-50/30"}>
                  <td className="p-3">{row.item}</td>
                  <td className="p-3 text-sky-900 font-bold whitespace-nowrap">{row.cost}</td>
                  <td className="p-3 text-stone-600 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 🏨 厳選おすすめ宿セクション */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2 text-sky-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>🏨 RECOMMENDED FAMILY RESORTS</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            キッズプール・大浴場・ビーチ直結！子連れに大人気の沖縄リゾートホテル
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            オーシャンビュー、充実のプール施設、観光に便利な立地を兼ね備えたファミリー高評価宿。
          </p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col justify-between border border-sky-900/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-sky-50 border-b border-sky-950/5">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sky-950/30 text-xs font-bold">
                        {hotel.hotelName}
                      </div>
                    )}
                    {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                      <span className="absolute bottom-2 right-2 text-[10px] font-black bg-stone-900/90 text-amber-300 px-2 py-0.5 rounded shadow">
                        ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    ) : null}
                  </div>

                  <div className="p-4 space-y-2">
                    {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                      <div className="flex items-center justify-between text-[10px] font-bold text-amber-600">
                        <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount || 0}件）</span>
                        <span className="text-[10px] text-stone-500 font-normal">{hotel.access || ""}</span>
                      </div>
                    ) : null}
                    
                    <h3 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                      {hotel.hotelName}
                    </h3>

                    <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
                      {hotel.hotelSpecial || ""}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 hover:from-sky-500 hover:to-cyan-500 rounded-xl shadow hover:shadow-md transition"
                  >
                    🌺 楽天トラベルで空室・プール付きプランを見る
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

      {/* 🚗 沖縄レンタカー＆パパママ注意点まとめ */}
      <section className="bg-sky-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-sky-800 space-y-6">
        <div className="space-y-2 border-b border-sky-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3 py-0.5 rounded-full uppercase">
              RENTAL CAR & PACKING TIPS
            </span>
            <span className="text-xs text-sky-200 font-bold">
              子連れ沖縄の必須ノウハウ
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            空港到着からスムーズに出発！レンタカー選びと持ち物3原則
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-sky-100">
          <li className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
            <span className="font-bold text-amber-300 block text-sm">1. 送迎待ち時間を減らす営業所選び</span>
            <p className="text-sky-200 leading-relaxed text-xs">
              那覇空港のレンタカー送迎バスは混雑時に30〜60分待つことも。空港から近い「赤嶺・豊見城エリア」の店舗や、スピード貸出対応プランを選ぶと子どものぐずりを防げます。
            </p>
          </li>
          <li className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
            <span className="font-bold text-amber-300 block text-sm">2. ラッシュガード＆マリンシューズ必携</span>
            <p className="text-sky-200 leading-relaxed text-xs">
              沖縄の紫外線は本州の約1.5倍。肌の弱い子どもには長袖ラッシュガードが必須。珊瑚の欠片や岩場が多いビーチでは脱げにくいマリンシューズが怪我防止に役立ちます。
            </p>
          </li>
          <li className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
            <span className="font-bold text-amber-300 block text-sm">3. 荷物はホテルへ事前配送が賢い選択</span>
            <p className="text-sky-200 leading-relaxed text-xs">
              オムツや水着、着替えでスーツケースがパンパンになる子連れ旅行。出発2日前に宿泊先ホテルへ宅配便で送っておくと、飛行機の預け荷物待ちもなく空港から身軽に行動できます。
            </p>
          </li>
        </ul>

        <div className="pt-2 text-center">
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon-week%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-stone-950 font-black text-sm rounded-2xl shadow-lg hover:shadow-xl hover:brightness-105 transition"
          >
            <span>🎟️ 楽天トラベルの最新割引クーポンで沖縄リゾートを予約する</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-sky-50 border border-stone-300 hover:border-sky-300 px-6 py-3 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の厳選ホテル・旅館一覧を見る</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
