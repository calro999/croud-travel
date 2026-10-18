import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";

interface RakutenHotel {
  hotelNo: number;
  hotelName: string;
  hotelInformationUrl: string;
  hotelImageUrl: string;
  reviewCount: number;
  reviewAverage: number;
  hotelMinCharge: number;
  address1: string;
  address2: string;
  hotelSpecial?: string;
  access?: string;
  affiliateUrl: string;
}

interface RakutenCategoryData {
  label: string;
  query: string;
  hotels: RakutenHotel[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";

export const metadata: Metadata = {
  title: "沖縄旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー",
  description:
    "沖縄旅行の計画を完全サポート！2泊3日・3泊4日の王道モデルコース、恩納村や北部の絶景ビーチリゾート、カップル・子連れプール付きホテル、那覇国際通り周辺宿からレンタカー＆雨の日観光まで、おすすめの宿泊プランまで徹底網羅。",
  keywords: ["沖縄旅行", "完全計画ガイド", "2026", "2泊3日", "3泊4日モデルコース", "那覇", "恩納村"],
  alternates: { canonical: "https://croud-travel.pages.dev/okinawa/" },
  openGraph: {
    title: "沖縄旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー",
    description: "沖縄旅行の計画を完全サポート！2泊3日・3泊4日の王道モデルコース、恩納村や北部の絶景ビーチリゾート、カップル・子連れプール付きホテル、那覇国際通り周辺宿からレンタカー＆雨の日観光まで、おすすめの宿泊プランまで徹底網羅。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "沖縄旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー",
    description: "沖縄旅行の計画を完全サポート！2泊3日・3泊4日の王道モデルコース、恩納村や北部の絶景ビーチリゾート、カップル・子連れプール付きホテル、那覇国際通り周辺宿からレンタカー＆雨の日観光まで、おすすめの宿泊プランまで徹底網羅。",
  }
};

function loadOkinawaData(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "all_hubs_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      const all = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return all.okinawa || {};
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

export default function OkinawaHubPage() {
  const okinawaData = loadOkinawaData();

  const faqList = [
    {
      q: "沖縄観光のおすすめ日数と王道モデルコース（2泊3日・3泊4日）は？",
      a: "沖縄本島は2泊3日または3泊4日が王道です。1日目は那覇空港到着後に国際通りやウミカジテラスを散策し那覇泊。2日目は万座毛〜古宇利島〜美ら海水族館を巡り恩納村のビーチリゾート泊。3日目はシュノーケリングやアメリカンビレッジ散策を楽しむルートが最も人気です。"
    },
    {
      q: "沖縄旅行でレンタカーは必須？車なしでも楽しめますか？",
      a: "美ら海水族館や恩納村など北部・中部を回るならレンタカーが断然便利です。車なしの場合は、那覇空港から直結の「ゆいレール」で那覇市内（国際通り・首里城）を巡るか、主要リゾートホテル直行の空港リムジンバスや観光周遊バスツアーを活用するのがおすすめです。"
    },
    {
      q: "沖縄でホテルを選ぶならどのエリア（那覇・恩納村・名護・宮古石垣）がおすすめ？",
      a: "到着日や最終日の夜遊び・グルメ・ショッピングなら「那覇・国際通りエリア」、エメラルドグリーンの海とプライベートビーチ、大型プールを満喫するなら「恩納村・西海岸リゾートエリア」が最適です。"
    }
  ];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【沖縄旅行 完全計画ガイド 2026】2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー ｜ 旅宿クラウド",
    "description": "沖縄旅行の計画を完全サポート！2泊3日・3泊4日の王道モデルコース、恩納村や北部の絶景ビーチリゾート、カップル・子連れプール付きホテル、那覇国際通り周辺宿からレンタカー＆雨の日観光まで、おすすめの宿泊プランまで徹底網羅。",
    "url": "https://croud-travel.pages.dev/okinawa/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【沖縄旅行 完全計画ガイド 2026】2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー ｜ 旅宿クラウド", "item": "https://croud-travel.pages.dev/okinawa/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"沖縄観光のおすすめ日数と王道モデルコース（2泊3日・3泊4日）は？","acceptedAnswer":{"@type":"Answer","text":"沖縄本島は2泊3日または3泊4日が王道です。1日目は那覇空港到着後に国際通りやウミカジテラスを散策し那覇泊。2日目は万座毛〜古宇利島〜美ら海水族館を巡り恩納村のビーチリゾート泊。3日目はシュノーケリングやアメリカンビレッジ散策を楽しむルートが最も人気です。"}},{"@type":"Question","name":"沖縄旅行でレンタカーは必須？車なしでも楽しめますか？","acceptedAnswer":{"@type":"Answer","text":"美ら海水族館や恩納村など北部・中部を回るならレンタカーが断然便利です。車なしの場合は、那覇空港から直結の「ゆいレール」で那覇市内（国際通り・首里城）を巡るか、主要リゾートホテル直行の空港リムジンバスや観光周遊バスツアーを活用するのがおすすめです。"}},{"@type":"Question","name":"沖縄でホテルを選ぶならどのエリア（那覇・恩納村・名護・宮古石垣）がおすすめ？","acceptedAnswer":{"@type":"Answer","text":"到着日や最終日の夜遊び・グルメ・ショッピングなら「那覇・国際通りエリア」、エメラルドグリーンの海とプライベートビーチ、大型プールを満喫するなら「恩納村・西海岸リゾートエリア」が最適です。"}}]}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/okinawa/" className="hover:text-teal-800 transition">沖縄県</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">沖縄旅行 完全ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-950 via-teal-900 to-emerald-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-cyan-400 text-cyan-950 px-3.5 py-1 rounded-full uppercase shadow">
            沖縄観光 完全計画ハブ 🌺
          </span>
          <span className="text-xs font-bold text-cyan-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            2泊3日・3泊4日モデルコース
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめホテル・温泉旅館
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">「沖縄旅行 厳選ガイド」<br /> <span className="bg-gradient-to-r from-cyan-200 via-teal-100 to-amber-100 bg-clip-text text-transparent"> 青の絶景ビーチ・リゾートホテル・美ら海・王道モデルコース </span></h1>

        <p className="text-cyan-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          エメラルドグリーンの海と琉球文化が息づく沖縄。「2泊3日の効率的な回り方は？」「ビーチリゾートホテルの選び方は？」「子連れプールや雨の日スポットは？」を徹底深掘りし、おすすめの宿泊施設情報で繋ぐ総合ガイド。
        </p>
      </section>

      {/* モデルコースセクション */}
      <section className="bg-white border border-cyan-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-cyan-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            沖縄観光 モデルコース 🌴
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">
            沖縄観光モデルコース ｜ 2泊3日＆3泊4日で巡る絶景美ら海ドライブ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 bg-cyan-50/50 rounded-2xl border border-cyan-200 space-y-2">
            <h3 className="text-sm font-bold text-cyan-950">【1日目・2日目：那覇〜西海岸〜美ら海水族館】</h3>
            <p className="text-slate-700 leading-relaxed">
              那覇空港到着後レンタカーを借り、ウミカジテラスで海風ランチ。58号線を北上して万座毛の絶景を望み、恩納村のビーチリゾートへ。翌日は古宇利大橋の青い海を渡り美ら海水族館へ。
            </p>
          </div>
          <div className="p-5 bg-teal-50/50 rounded-2xl border border-teal-200 space-y-2">
            <h3 className="text-sm font-bold text-teal-950">【3日目：アメリカンビレッジ〜国際通り〜帰路】</h3>
            <p className="text-slate-700 leading-relaxed">
              異国情緒漂う北谷アメリカンビレッジで海沿いカフェ＆ショッピング。那覇へ戻り国際通りで沖縄そばやステーキ、紅芋タルト・ちんすこうのお土産を購入して空港へ。
            </p>
          </div>
        </div>
      </section>

      {/* 公式おすすめホテル表示 */}
      {okinawaData.resort_hotel && (
        <section className="space-y-6 bg-white border border-cyan-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-cyan-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">
              沖縄 絶景ビーチリゾートホテル（おすすめ厳選）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {okinawaData.resort_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-cyan-900/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-cyan-700 text-white px-2.5 py-0.5 rounded-full">恩納村・リゾート</span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">¥{Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                      <span>{hotel.address1} {hotel.address2.slice(0, 8)}</span>
                      {hotel.reviewAverage > 0 && <span className="text-amber-600 font-extrabold">⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)</span>}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-slate-900 line-clamp-2">{hotel.hotelName}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{hotel.hotelSpecial || hotel.access}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <a href={hotel.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-500 hover:to-teal-600 rounded-xl shadow transition">
                    ✈️ 楽天トラベルで空室・プランを見る
                  </a>
                </div>
              
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 沖縄旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「沖縄旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. ワイズキャビン＆ホテル那覇国際通り</td>
                <td className="p-3 text-stone-600">沖縄県那覇市久茂地3-9-18</td>
                <td className="p-3 text-stone-600">ゆいレール県庁前駅徒歩３分</td>
                <td className="p-3 text-stone-600">有＊予約制＊1泊1,000円(税込)、2026年2月から￥1200円に改定</td>
                <td className="p-3 font-bold text-amber-600">★4.28（738件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,975〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166949%2F166949.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 琉球オリオンホテル　那覇国際通り（旧：オリオンホテル那覇）</td>
                <td className="p-3 text-stone-600">沖縄県那覇市安里1-2-21</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">有り（先着順）　1泊1台1,500円</td>
                <td className="p-3 font-bold text-amber-600">★4.21（837件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2906%2F2906.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルＪＡＬシティ那覇（国際通り）</td>
                <td className="p-3 text-stone-600">沖縄県那覇市牧志1-3-70</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">（1泊1台）1,800円</td>
                <td className="p-3 font-bold text-amber-600">★4.27（1503件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,863〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50220%2F50220.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテル　サン・クイーン（那覇／国際通り沿い）</td>
                <td className="p-3 text-stone-600">沖縄県那覇市安里2-4-2-1</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">電話・メールにてご予約下さい。メッセージでは受付致しません。満車時は近隣コイン駐車場をご利用下さい。</td>
                <td className="p-3 font-bold text-amber-600">★3.88（599件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52511%2F52511.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルアートステイ那覇国際通り</td>
                <td className="p-3 text-stone-600">沖縄県那覇市牧志1-3-43</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">提携のコインパーキングが1箇所ございます。詳しくはフロントまでお問い合わせ下さいませ。</td>
                <td className="p-3 font-bold text-amber-600">★4.34（1193件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,770〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73895%2F73895.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ＨＯＴＥＬ　ＴＨＥ　ＣＵＢＥ　那覇国際通り</td>
                <td className="p-3 text-stone-600">沖縄県那覇市牧志3-13-17</td>
                <td className="p-3 text-stone-600">ゆいレール「牧志駅」より徒歩１分・国際通りまで徒歩0分♪那覇空港からホ</td>
                <td className="p-3 text-stone-600">無し</td>
                <td className="p-3 font-bold text-amber-600">★3.89（361件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158644%2F158644.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ワイズキャビン＆ホテル那覇国際通り</h3>
                  <span className="text-xs text-stone-400 ml-2">（わいず　きゃびんあんどほてるなはこくさいどおり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,975〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/166949/166949_kan1.jpg" alt="ワイズキャビン＆ホテル那覇国際通り 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ゆったり寛げる男女別サウナ付大浴場併設！キャビン・洋室・和室と幅広いラインナップ！！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市久茂地3-9-18 ／ 最寄り駅：主要駅 ／ 交通案内：ゆいレール県庁前駅徒歩３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有＊予約制＊1泊1,000円(税込)、2026年2月から￥1200円に改定</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スリッパの外出や清掃方法の改善を希望海外のお客様が館内で履くスリッパのまま外出されていました。入り口のスーツケースのタイヤを拭くタオルが乾いたタオルで拭けている気がしませんでした。コストはかか…　2026-08-20 17:16:56投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">琉球オリオンホテル　那覇国際通り（旧：オリオンホテル那覇）</h3>
                  <span className="text-xs text-stone-400 ml-2">（りゅうきゅうおりおんほてるなはこくさいどおり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2906/2906_heya.jpg" alt="琉球オリオンホテル　那覇国際通り（旧：オリオンホテル那覇） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2025年リブランド】国際通り沿い、牧志駅徒歩3分！「沖縄をもっと楽しくする」旅の拠点となるホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市安里1-2-21 ／ 最寄り駅：那覇空港 ／ 交通案内：那覇空港よりモノレールで約20分、牧志駅より徒歩3分、国際通り沿い、コンビニ、スーパーも目の前の好立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（先着順）　1泊1台1,500円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「トイレットペーパーの補充と対応に不満トイレットペーパーが無くなるという前代未聞の出来事がありました。予備は置いていない。フロントに電話をかけても一向に出ない。仕方ないので取りに行ったら…　2026-08-20 23:26:44投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルＪＡＬシティ那覇（国際通り）</h3>
                  <span className="text-xs text-stone-400 ml-2">（じゃるしてぃ　なは（こくさいどおり））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,863〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/50220/50220_tu.jpg" alt="ホテルＪＡＬシティ那覇（国際通り） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>国際通り徒歩0分！ホテル正面玄関を出れば観光客で賑わう国際通り沿いの中心地。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市牧志1-3-70 ／ 最寄り駅：那覇空港 ／ 交通案内：那覇空港より車で約15分／沖縄都市モノレール(ゆいレール)美栄橋駅より徒歩約8分/牧志駅より徒歩約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>（1泊1台）1,800円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地やサービスは抜群だが清掃面に難あり旅の最終日に国際通り目的で立地の良いJALホテルを選びました。立地、フロントの対応、荷物が送れる、タクシーの配車のスムーズさなどサービスは抜群。翌日の午前便の…　2026-08-14 14:05:41投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　サン・クイーン（那覇／国際通り沿い）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてる　さん・くいーん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/52511/52511_wi.jpg" alt="ホテル　サン・クイーン（那覇／国際通り沿い） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>国際通りに位置するあなたにやさしいホテル。豊富なアメニティーに加え、天然無垢のフローリングを使用。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市安里2-4-2-1 ／ 最寄り駅：那覇空港 ／ 交通案内：モノレール牧志駅より徒歩2分。那覇空港からモノレール・お車とも20分弱。コンビニへ徒歩1分の好立地で好評を頂いております</p>
                  <p><strong>【駐車場・マイカー利用】</strong>電話・メールにてご予約下さい。メッセージでは受付致しません。満車時は近隣コイン駐車場をご利用下さい。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「国際通りに近く便利だが朝食は残念外国の方が多かったです。朝食はおすすめしません(冷凍食品?)。それ以外は特に不満なく国際通りも近いので便利でした。クチコミの詳細はこちらから　https://r…　2026-08-29 12:32:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルアートステイ那覇国際通り</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるあーとすていなはこくさいどおり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,770〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/73895/73895_mea.jpg" alt="ホテルアートステイ那覇国際通り 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>◇国際通りの中心◇全室異なるアートな客室と充実の無料サービスでクラシックな滞在を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市牧志1-3-43 ／ 最寄り駅：那覇空港 ／ 交通案内：那覇空港より車で約20分/ゆいレール美栄橋駅・牧志駅から徒歩5分/国際通りまで徒歩30秒/泊港離島ターミナル徒歩15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携のコインパーキングが1箇所ございます。詳しくはフロントまでお問い合わせ下さいませ。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「デラックスツインは広くて快適、設備も充実デラックスツインに宿泊 前日はここがとれず別室の狭いツインに宿泊してたこともあり、広くて快適でした壁一面に絵が描かれてて、広い引き戸のクローゼット、洗面…　2026-07-17 00:39:08投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＨＯＴＥＬ　ＴＨＥ　ＣＵＢＥ　那覇国際通り</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてる　ざ　きゅーぶ　なはこくさいどおり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/158644/158644_kan1.jpg" alt="ＨＯＴＥＬ　ＴＨＥ　ＣＵＢＥ　那覇国際通り 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>コスパ重視の方にオススメ★国際通り沿いにあるホテル コンパクトで上質な空間</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市牧志3-13-17 ／ 最寄り駅：主要駅 ／ 交通案内：ゆいレール「牧志駅」より徒歩１分・国際通りまで徒歩0分♪那覇空港からホテルまでゆいレールで15分♪</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.08 ／ 立地 ★4.11 ／ 部屋 ★3.73 ／ 設備 ★3.77 ／ 風呂 ★3.63 ／ 食事 ★3.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの対応と清潔感、立地が素晴らしいスタッフの方が親切で気持ちが良いです。シャワールームとトイレの清潔感もバッチリです。また、ウェルカムドリンクのサービスが充実しています。夕方には泡盛3種類が…　2026-10-09 22:32:53投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=158644&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！沖縄県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、沖縄県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">沖縄美ら海水族館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">本部半島の国営沖縄記念公園内にある世界最大級の水族館。巨大アクリルパネル越しに大水槽「黒潮の海」を泳ぐジンベエザメやナンヨウマンタのダイナミックな姿は必見です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">首里城公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて琉球王国の政治・外交・文化の中心であった世界遺産。朱塗りの守礼門や守礼の邦の精神、琉球独自のアジアと日本の融合した建築美を感じられます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">古宇利島（古宇利大橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">エメラルドグリーンの透き通る海の上に架かる全長1,960mの直線の橋。「恋の島」とも呼ばれ、古宇利オーシャンタワーやハートロックが人気を呼んでいます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">万座毛（まんざも）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「万人が座するに足る毛（草原）」が由来の景勝地。隆起サンゴ礁が侵食された象の鼻のような形状の断崖絶壁と、そこに打ち寄せる東シナ海の青い波が壮観です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 沖縄県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 沖縄県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white border border-cyan-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 flex items-center gap-2">
          <span>❓</span> <span>沖縄旅行のプロが回答！よくある質問（FAQ）</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-cyan-50/40 border border-cyan-900/10 space-y-2">
              <h3 className="text-sm font-bold text-cyan-950 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    
      <HubRelatedPosts currentSlug="okinawa" />
</div>
  );
}
