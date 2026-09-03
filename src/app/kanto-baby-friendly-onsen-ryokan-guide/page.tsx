import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【関東 赤ちゃん連れ温泉旅行おすすめ宿7選】部屋食・貸切風呂・おむつ替えグッズ完備の安心名宿 ｜ 日本全国・旅宿クラウド",
  description: "赤ちゃんの温泉デビューに安心な関東近郊の名湯宿特集！箱根・伊香保・鬼怒川・湯河原から、離乳食対応、部屋食確約、温度調整可能な貸切風呂、おむつ専用ゴミ箱・ベビーバス完備の極上旅館を厳選比較。",
  keywords: [
    "関東 赤ちゃん 温泉旅行",
    "赤ちゃん 温泉デビュー 関東",
    "部屋食 貸切風呂 赤ちゃん 箱根",
    "伊香保 温泉 赤ちゃん連れ 旅館",
    "赤ちゃん 温泉 畳風呂",
    "ウェルカムベビー 温泉 関東",
    "楽天トラベル 赤ちゃん 温泉"
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
      return data["kanto-baby-friendly-onsen-ryokan-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kanto-baby-friendly-onsen-ryokan-guide", e);
  }
  return [];
}

export default function KantoBabyFriendlyOnsenGuidePage() {
  const hotels = loadHotels();

  // 赤ちゃん温泉デビューの必須5大条件
  const babyBathCriteria = [
    {
      num: "01",
      title: "プライベート空間が保てる「部屋食」または「個室食事処」",
      desc: "食事中に赤ちゃんが泣き出したり、途中で授乳・オムツ替えが必要になっても周りの目を気にする必要がありません。大人も温かい懐石料理を一品ずつ味わえます。",
      tag: "周囲への気兼ねゼロ"
    },
    {
      num: "02",
      title: "家族水入らずで温度調節できる「貸切風呂」または「客室露天風呂」",
      desc: "大浴場での長湯は赤ちゃんの肌や体温調節に負担。貸切風呂なら加水してぬるめ（38〜40℃）に調整でき、パパママが協力して安全に入浴させられます。",
      tag: "湯温38〜40℃調整可"
    },
    {
      num: "03",
      title: "赤ちゃんのデリケート肌に優しい「低刺激な泉質（弱アルカリ性・単純温泉）」",
      desc: "酸性度が強い温泉や硫黄泉は刺激が強すぎる場合があります。肌触りが柔らかく湯上がりに湯冷めしにくい単純温泉やアルカリ性単純温泉を選ぶのが鉄則です。",
      tag: "単純温泉・弱アルカリ性"
    },
    {
      num: "04",
      title: "転んでも安心な「畳敷きの大浴場」や「客室和室・ローベッド」",
      desc: "水回りの濡れたタイルは滑りやすく転倒の危険大。洗い場や浴槽まわりに畳が敷かれた宿なら、ハイハイ期の赤ちゃんを座らせても冷たくなく安全です。",
      tag: "滑り止め＆安全性"
    },
    {
      num: "05",
      title: "ベビーバス・調乳ポット・おむつ用ゴミ箱の無料貸出",
      desc: "赤ちゃん連れ旅行はどうしても大荷物になりがち。ベビーソープ、補助便座、バンボ、使い放題おむつプランが備わっている宿なら最小限の手荷物で出発できます。",
      tag: "荷物を大幅削減"
    }
  ];

  // 温泉デビュー当日のタイムスケジュール例
  const babyOnsenSchedule = [
    {
      time: "14:30",
      title: "チェックイン＆畳の客室で赤ちゃんのハイハイ運動タイム",
      detail: "移動のチャイルドシートや抱っこ紐から解放され、畳の部屋で手足を伸ばしてリラックス。持参したお気に入りのおもちゃで機嫌を整えます。"
    },
    {
      time: "16:00",
      title: "混雑前の夕方に貸切風呂で「温泉デビュー」",
      detail: "夕食前の落ち着いた時間帯に予約した貸切風呂へ。ベビーバスにぬるめのお湯を張り、まずは足先からお湯に慣れさせます。入浴時間は5〜10分程度が目安。"
    },
    {
      time: "18:00",
      title: "お部屋食でゆったり懐石ディナー＆離乳食タイム",
      detail: "仲居さんがお部屋まで運んでくれるお膳料理。持参した離乳食の温めも気兼ねなく頼めます。赤ちゃんが途中で寝てしまっても、すぐ横に布団を敷いて寝かせられます。"
    },
    {
      time: "20:30",
      title: "赤ちゃん就寝後、パパママ交代で大浴場・露天風呂を満喫",
      detail: "お部屋で赤ちゃんがぐっすり寝入ったら、パパとママが交代で旅館自慢の大露天風呂やサウナへ。日頃の育児の疲れをじっくり癒す至福の時間です。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-stone-800">
      {/* ヒーローセクション（Rose Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-950 via-pink-950 to-rose-900 text-white p-8 md:p-14 shadow-2xl border border-rose-700/40">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-400/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-rose-500/30 text-rose-200 border border-rose-400/40 px-3.5 py-1 rounded-full uppercase shadow-sm">
              BABY ONSEN GUIDE
            </span>
            <span className="text-xs font-bold bg-amber-400 text-stone-950 px-3 py-1 rounded-full shadow font-semibold">
              赤ちゃんの温泉デビュー応援
            </span>
            <span className="text-xs font-bold bg-white/20 text-white backdrop-blur px-3 py-1 rounded-full">
              関東近郊・厳選名宿
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【関東 赤ちゃん連れ温泉旅行おすすめ宿7選】<br />
            <span className="text-rose-200">部屋食・貸切風呂・おむつ替えグッズ完備の安心名宿</span>
          </h1>

          <p className="text-sm md:text-base text-rose-100/90 leading-relaxed font-normal pt-1">
            「赤ちゃんの初めての温泉、大浴場で泣いたらどうしよう…」「食事中にぐずったら周りに迷惑がかかるかも…」そんな不安をすべて解消！箱根・伊香保など都心からアクセス抜群のエリアから、夕食部屋出し確約、源泉かけ流しの貸切風呂、畳敷き浴場、ベビーグッズ完備の至れり尽くせり旅館を厳選してご紹介します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-rose-200">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 周りに気兼ねのないお部屋食
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 家族専用の貸切風呂・客室露天
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-300 font-bold">✓</span> 滑りにくい畳風呂＆ベビーバス
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル公式 ファミリー応援クーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 内部リンク・関連予算ガイドナビゲーション */}
      <nav className="bg-rose-50/80 border border-rose-200/80 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm md:text-base font-black text-rose-950 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
            関東人気温泉地の費用・計画ガイド（あわせて読みたい）
          </h2>
          <span className="text-[10px] text-rose-700 bg-rose-100/70 font-bold px-2 py-0.5 rounded">
            予算シミュレーション
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <Link
            href="/hakone-travel-budget-guide"
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-rose-200/60 hover:border-rose-500 hover:shadow transition group"
          >
            <span className="text-rose-600 font-bold text-base">♨️</span>
            <div>
              <span className="font-bold text-rose-950 group-hover:text-rose-700 transition block">
                箱根旅行 費用シミュレーション
              </span>
              <span className="text-[11px] text-stone-500">
                ロマンスカー交通費・箱根フリーパス・人気温泉旅館の宿泊相場まとめ
              </span>
            </div>
          </Link>
          <Link
            href="/kusatsu-onsen-travel-budget-guide"
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-rose-200/60 hover:border-rose-500 hover:shadow transition group"
          >
            <span className="text-rose-600 font-bold text-base">🌿</span>
            <div>
              <span className="font-bold text-rose-950 group-hover:text-rose-700 transition block">
                草津温泉 旅行費用ガイド
              </span>
              <span className="text-[11px] text-stone-500">
                特急草津・高速バス比較と湯畑周辺旅館のリアルな料金内訳
              </span>
            </div>
          </Link>
        </div>
      </nav>

      {/* 👶 赤ちゃん温泉デビューの選び方5箇条 */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-rose-900/10 pb-4">
          <div className="flex items-center gap-2 text-rose-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>🛁 ESSENTIAL CHECKPOINTS</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            失敗しない！赤ちゃん連れ温泉宿選び 5つの絶対条件
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            パパママの負担を減らし、赤ちゃんが安全にご機嫌で過ごすための宿選び基準です。
          </p>
        </div>

        <div className="space-y-4">
          {babyBathCriteria.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-rose-50/50 to-pink-50/30 border border-rose-100 hover:border-rose-300 transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-black font-journal-serif text-rose-400">
                  {item.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm md:text-base font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
              <span className="self-start md:self-center text-xs font-bold text-rose-800 bg-rose-100 border border-rose-200 px-3 py-1 rounded-full whitespace-nowrap">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 🕒 赤ちゃん温泉1日の過ごし方 */}
      <section className="bg-gradient-to-br from-rose-50/60 via-pink-50/40 to-stone-50 border border-rose-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-rose-200 pb-3">
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>⏰ IDEAL BABY TIMETABLE</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-rose-950">
            無理のないゆったり滞在！温泉デビュー当日の理想スケジュール
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {babyOnsenSchedule.map((step, idx) => (
            <div key={idx} className="bg-white border border-rose-100 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black bg-rose-900 text-rose-100 px-2.5 py-0.5 rounded">
                  {step.time}
                </span>
                <h3 className="text-sm font-bold text-rose-950">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏨 厳選おすすめ宿セクション */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2 text-rose-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>🏨 SELECTED BABY-FRIENDLY ONSEN RYOKAN</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900">
            箱根・伊香保の厳選名宿！部屋食・貸切風呂・畳風呂完備プラン
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            赤ちゃんの温泉デビューを温かく迎えてくれる、設備・サービス・口コミ高評価の旅館です。
          </p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col justify-between border border-rose-900/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-rose-50 border-b border-rose-950/5">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-rose-950/30 text-xs font-bold">
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
                    className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 rounded-xl shadow hover:shadow-md transition"
                  >
                    ♨️ 楽天トラベルでお部屋食＆貸切プランを見る
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

      {/* 🎒 持ち物リスト＆注意点 */}
      <section className="bg-rose-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-rose-800 space-y-6">
        <div className="space-y-2 border-b border-rose-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3 py-0.5 rounded-full uppercase">
              BATHING ESSENTIALS
            </span>
            <span className="text-xs text-rose-200 font-bold">
              温泉デビューの安心準備
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            持参すると安心！赤ちゃんの温泉持ち物チェックリスト
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm text-rose-100">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5">
            <span className="font-bold text-amber-300 block text-sm">スイミングパンツ＆水遊び用オムツ</span>
            <p className="text-rose-200 leading-relaxed text-xs">
              貸切風呂や客室露天でも、万が一の排泄が心配な場合は水遊び用オムツ着用可か事前確認を。多くの宿ではベビーバス内での入浴が基本ルールとなります。
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5">
            <span className="font-bold text-amber-300 block text-sm">使い慣れた保湿剤＆ベビーローション</span>
            <p className="text-rose-200 leading-relaxed text-xs">
              温泉成分でお肌が乾燥しやすくなることがあります。お風呂から上がったらすぐに全身をたっぷり保湿できるよう、普段愛用しているローションを持参しましょう。
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5">
            <span className="font-bold text-amber-300 block text-sm">入浴後の水分補給用麦茶・白湯</span>
            <p className="text-rose-200 leading-relaxed text-xs">
              短時間の入浴でも赤ちゃんは汗をかきます。湯上がり後すぐに飲ませられるよう、ストローマグに麦茶や調乳ミルクを用意しておくと脱水を防げます。
            </p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon-week%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 text-stone-950 font-black text-sm rounded-2xl shadow-lg hover:shadow-xl hover:brightness-105 transition"
          >
            <span>🎟️ 楽天トラベルの限定クーポンで赤ちゃん温泉宿をお得に予約</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-rose-50 border border-stone-300 hover:border-rose-300 px-6 py-3 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の厳選ホテル・旅館一覧を見る</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
