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
  title: "北海道旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿",
  description:
    "北海道旅行の計画を完全サポート！札幌・小樽・函館・富良野の王道＆広域モデルコース、絶品海鮮丼＆朝食自慢ホテル、登別・定山渓温泉旅館、カップル・子連れファミリー向け宿までおすすめの宿泊プランまで完全網羅。",
  keywords: ["北海道旅行", "完全計画ガイド", "2026", "2泊3日", "3泊4日モデルコース", "札幌", "小樽"],
  alternates: { canonical: "https://croud-travel.pages.dev/hokkaido/" },
  openGraph: {
    title: "北海道旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿",
    description: "北海道旅行の計画を完全サポート！札幌・小樽・函館・富良野の王道＆広域モデルコース、絶品海鮮丼＆朝食自慢ホテル、登別・定山渓温泉旅館、カップル・子連れファミリー向け宿までおすすめの宿泊プランまで完全網羅。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "北海道旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿",
    description: "北海道旅行の計画を完全サポート！札幌・小樽・函館・富良野の王道＆広域モデルコース、絶品海鮮丼＆朝食自慢ホテル、登別・定山渓温泉旅館、カップル・子連れファミリー向け宿までおすすめの宿泊プランまで完全網羅。",
  }
};

function loadHokkaidoData(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "all_hubs_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      const all = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return all.hokkaido || {};
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

export default function HokkaidoHubPage() {
  const hokkaidoData = loadHokkaidoData();


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【北海道旅行 完全計画ガイド 2026】2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿 ｜ 旅宿クラウド",
    "description": "北海道旅行の計画を完全サポート！札幌・小樽・函館・富良野の王道＆広域モデルコース、絶品海鮮丼＆朝食自慢ホテル、登別・定山渓温泉旅館、カップル・子連れファミリー向け宿までおすすめの宿泊プランまで完全網羅。",
    "url": "https://croud-travel.pages.dev/hokkaido/",
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
      { "@type": "ListItem", "position": 2, "name": "【北海道旅行 完全計画ガイド 2026】2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿 ｜ 旅宿クラウド", "item": "https://croud-travel.pages.dev/hokkaido/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/hokkaido/" className="hover:text-teal-800 transition">北海道</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">北海道旅行 完全ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-blue-400 text-slate-950 px-3.5 py-1 rounded-full uppercase shadow">
            北海道観光 完全計画ハブ 🏔️
          </span>
          <span className="text-xs font-bold text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            2泊3日・3泊4日モデルコース
          </span>
          <span className="text-xs font-bold text-teal-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめホテル・温泉旅館
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">「北海道旅行 厳選ガイド」<br /> <span className="bg-gradient-to-r from-blue-200 via-teal-100 to-amber-100 bg-clip-text text-transparent"> 壮大な自然・海鮮グルメ・名湯温泉＆札幌・函館・富良野 </span></h1>

        <p className="text-blue-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          大自然と美食の宝庫・北海道。「広すぎて回り方がわからない」「札幌・小樽・函館・富良野の移動時間は？」「朝食日本一のホテルや名湯温泉は？」を縦掘りし、おすすめの宿泊施設情報で繋ぐ総合ガイド。
        </p>
      </section>

      {/* 札幌・函館・登別温泉の公式おすすめホテル */}
      {hokkaidoData.sapporo_hotel && (
        <section className="space-y-6 bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-blue-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">札幌駅・大通周辺 おすすめホテル（おすすめ厳選）</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hokkaidoData.sapporo_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-blue-800 text-white px-2.5 py-0.5 rounded-full">札幌駅チカ</span>
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
                  <a href={hotel.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow transition">
                    ✈️ 楽天トラベルで空室・プランを見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {hokkaidoData.hakodate_hotel && (
        <section className="space-y-6 bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-blue-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">函館 海鮮＆朝食バイキングが絶品の宿（おすすめ厳選）</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hokkaidoData.hakodate_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-amber-600 text-white px-2.5 py-0.5 rounded-full">海鮮朝食自慢</span>
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
                  <a href={hotel.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow transition">
                    ✈️ 楽天トラベルで朝食プランを見る
                  </a>
                </div>
              
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">北海道旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「北海道旅行 完全計画ガイド 2026：2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテルルートイン　札幌駅前北口</td>
                <td className="p-3 text-stone-600">北海道札幌市北区北7条西4-2-2</td>
                <td className="p-3 text-stone-600">札幌駅周辺</td>
                <td className="p-3 text-stone-600">ご到着順にてご案内。ご予約は承れません。１泊につき１５００円／１台。ハイルーフタイプ用もございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.05（3969件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56806%2F56806.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ＦＯＲＺＡ　ホテルフォルツァ札幌駅前</td>
                <td className="p-3 text-stone-600">北海道札幌市中央区北三条西2丁目1-1</td>
                <td className="p-3 text-stone-600">札幌駅周辺</td>
                <td className="p-3 text-stone-600">近隣の提携駐車場をご案内いたします。詳細は公式ホームページ内「周辺提携駐車場情報」をご確認ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.44（1105件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178964%2F178964.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. リッチモンドホテル札幌駅前</td>
                <td className="p-3 text-stone-600">北海道札幌市中央区北3西1丁目1-7</td>
                <td className="p-3 text-stone-600">札幌駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　1,400円（税込／泊）</td>
                <td className="p-3 font-bold text-amber-600">★4.32（4788件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,150〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50125%2F50125.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルグレイスリー札幌</td>
                <td className="p-3 text-stone-600">北海道札幌市中央区北4条西4丁目</td>
                <td className="p-3 text-stone-600">札幌駅周辺</td>
                <td className="p-3 text-stone-600">有料 (但し、オートバイは利用不可）</td>
                <td className="p-3 font-bold text-amber-600">★4.36（5383件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F635%2F635.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. プレミアホテル－ＴＳＵＢＡＫＩ－札幌</td>
                <td className="p-3 text-stone-600">北海道札幌市豊平区豊平4条1丁目1-1</td>
                <td className="p-3 text-stone-600">札幌駅周辺</td>
                <td className="p-3 text-stone-600">地下駐車場200台◇1泊1台1000円◇高さ制限2.1m◇24時間出し入れ自由</td>
                <td className="p-3 font-bold text-amber-600">★4.45（2189件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1432%2F1432.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ホテル京阪　札幌</td>
                <td className="p-3 text-stone-600">北海道札幌市北区北6条西6丁目1-9</td>
                <td className="p-3 text-stone-600">札幌駅周辺</td>
                <td className="p-3 text-stone-600">20台有り予約不可・先着順　一泊1,500円　満車時は同料金にて提携駐車場をご案内いたします</td>
                <td className="p-3 font-bold text-amber-600">★4.38（3638件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79254%2F79254.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">北海道旅行 完全計画ガイド 2026で比較したい各宿のロケーション・駐車場・料金詳細</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルルートイン　札幌駅前北口</h3>
                  <span className="text-xs text-stone-400 ml-2">（るーといん　さっぽろえきまえきたぐち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/56806/56806.jpg" alt="ホテルルートイン　札幌駅前北口 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>札幌駅北口から徒歩1分■ＷＯＷＯＷ全室で無料視聴可■朝食無料サービス＆大浴場あり！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道札幌市北区北7条西4-2-2 ／ 最寄り駅：札幌 ／ 交通案内：ＪＲ札幌駅下車、北口より徒歩１分。新千歳空港からJR線快速列車で４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ご到着順にてご案内。ご予約は承れません。１泊につき１５００円／１台。ハイルーフタイプ用もございます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食は種類も多く、美味しかったルートインさんは部屋の作りが同じだと思っていたが、違っていたので残念狭いし、ベッドも何か違うし、寝心地悪かった急遽予約する必要があり、慌てて予約した為確認…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＦＯＲＺＡ　ホテルフォルツァ札幌駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふぉるつぁさっぽろえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/178964/178964.jpg" alt="ＦＯＲＺＡ　ホテルフォルツァ札幌駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>テレビでYouTube視聴やミラーリングが可能。朝食ブッフェで北海道名物もお楽しみいただけます！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道札幌市中央区北三条西2丁目1-1 ／ 最寄り駅：札幌 ／ 交通案内：JR札幌駅南口より徒歩にて約４分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>近隣の提携駐車場をご案内いたします。詳細は公式ホームページ内「周辺提携駐車場情報」をご確認ください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.4 ／ 立地 ★4.45 ／ 部屋 ★4.44 ／ 設備 ★4.4 ／ 風呂 ★4.35 ／ 食事 ★4.4</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利、いつも安心して利用できる出張で何度か利用しています。駅から近くて便利です。フロントの方も丁寧でQRでスムーズにチェックインできます。アメニティはエレベーター前で必要分だけピックアップし…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">リッチモンドホテル札幌駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（りっちもんど　さっぽろえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,150〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/50125/50125_tw.jpg" alt="リッチモンドホテル札幌駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>札幌駅徒歩7分。大通公園至近。大和ハウスプレミストドーム(旧:札幌ドーム)約30分。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道札幌市中央区北3西1丁目1-7 ／ 最寄り駅：札幌 ／ 交通案内：◆ＪＲ札幌駅南口より徒歩7分（地下鉄東豊線22番出口徒歩0分！荷物の多い方は23番出口がおすすめ）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　1,400円（税込／泊）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は綺麗でウォーターサーバーも便利部屋が綺麗で満足です。エレベーターホールにあるウォーターサーバーも使いやすくてとても助かりました。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルグレイスリー札幌</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐれいすりーさっぽろ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/635/635_heya.jpg" alt="ホテルグレイスリー札幌 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ札幌駅より地下街直結。JR札幌駅南口からの地上アクセスは徒歩1分　全室wi-fi接続無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道札幌市中央区北4条西4丁目 ／ 最寄り駅：札幌 ／ 交通案内：札幌駅地下街（アピア・フードウォーク）より直結。JR札幌駅南口より徒歩1分とアクセス抜群。北海道読売新聞ビル7階</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有料 (但し、オートバイは利用不可）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「フロントの案内が不親切で非常に不快フロントスタッフの当たり外れが大きい。自動チェックイン機がかなり混雑している状態でようやく自分の順番がきたところフロントに行くような指示が書かれたレシートが発…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">プレミアホテル－ＴＳＵＢＡＫＩ－札幌</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぷれみあほてる　つばき　さっぽろ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1432/1432_room.jpg" alt="プレミアホテル－ＴＳＵＢＡＫＩ－札幌 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ご宿泊者様専用サウナ＆フィットネス◇すすきの徒歩圏内◇ご宿泊者様専用ラウンジ（利用条件有り）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道札幌市豊平区豊平4条1丁目1-1 ／ 最寄り駅：札幌 ／ 交通案内：《新千歳空港から》空港連絡バス「プレミアホテルTSUBAKI」下車 《お車》地下駐車場有《JR札幌駅から》シャトルバス有</p>
                  <p><strong>【駐車場・マイカー利用】</strong>地下駐車場200台◇1泊1台1000円◇高さ制限2.1m◇24時間出し入れ自由</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.5 ／ 立地 ★4.24 ／ 部屋 ★4.42 ／ 設備 ★4.34 ／ 風呂 ★4.26 ／ 食事 ★4.62</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「建物は古いが手入れが行き届いている建物は古いですが、広くて良いホテルだと思います。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル京阪　札幌</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるけいはん　さっぽろ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79254/79254_ka.jpg" alt="ホテル京阪　札幌 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR「札幌」駅より徒歩約4分！全客室にReFa製シャワーヘッド・ドライヤーを新しく導入しました！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道札幌市北区北6条西6丁目1-9 ／ 最寄り駅：札幌 ／ 交通案内：【新千歳空港からホテルまで約44分】JR「札幌」駅西口より徒歩約4分★詳しくはアクセスページをご覧ください。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>20台有り予約不可・先着順　一泊1,500円　満車時は同料金にて提携駐車場をご案内いたします</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「札幌駅チカで駐車場あり、スタッフの対応も丁寧比較的札幌駅チカ駐車場がある宿ということで利用しました。ホテルの駐車場は車高が高い車だと使えない場合がありますが、近隣の駐車場を案内してもらえます。…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>

      </article>
            ))}
          </div>
        </section>
      )}
    
      <HubRelatedPosts currentSlug="hokkaido" />
</div>
  );
}
