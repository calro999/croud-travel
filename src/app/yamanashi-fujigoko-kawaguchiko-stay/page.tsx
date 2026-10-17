import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/yamanashi-fujigoko-kawaguchiko-stay/" },
  title: "山梨・富士五湖＆河口湖：逆さ富士・富士急ハイランド＆ほうとう極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "山梨・富士五湖（河口湖・山中湖）エリア完全特化！湖面に映る奇跡の「逆さ富士」、富士急ハイランド、富士山パノラマロープウェイ、名物ほうとう鍋と全室富士山ビュー温泉ホテルを徹底解説。",
  keywords: ["山梨", "富士五湖", "河口湖", "逆さ富士", "富士急ハイランド", "ほうとう極上宿", "温泉宿"],
  openGraph: {
    title: "山梨・富士五湖＆河口湖：逆さ富士・富士急ハイランド＆ほうとう極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "山梨・富士五湖（河口湖・山中湖）エリア完全特化！湖面に映る奇跡の「逆さ富士」、富士急ハイランド、富士山パノラマロープウェイ、名物ほうとう鍋と全室富士山ビュー温泉ホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "山梨・富士五湖＆河口湖：逆さ富士・富士急ハイランド＆ほうとう極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "山梨・富士五湖（河口湖・山中湖）エリア完全特化！湖面に映る奇跡の「逆さ富士」、富士急ハイランド、富士山パノラマロープウェイ、名物ほうとう鍋と全室富士山ビュー温泉ホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamanashi-fujigoko-kawaguchiko-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamanashi-fujigoko-kawaguchiko-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kawaguchiko_fuji_view",
    "title": "1. 河口湖北岸・大石公園周辺（湖と富士山が織りなす「逆さ富士」の特等席）",
    "timing": "通年（春の桜・初夏のラベンダー・秋の紅葉回廊・冬の雪化粧富士）",
    "desc": "河口湖の北岸エリアに立ち並ぶ絶景リゾートホテル。波のない早朝、湖面に映る完璧な「逆さ富士」を客室テラスや露天風呂から鑑賞。秋の「もみじ回廊」ライトアップや大石公園のコキアなど見どころ満載。",
    "spots": "大石公園（ラベンダー・コキア・河口湖自然生活館）、もみじ回廊（紅葉まつり）、河口湖音楽と森の美術館、河口湖遊覧船「天晴」",
    "access": "富士急行線「河口湖駅」より河口湖周遊レトロバス（レッドライン）で約15〜25分。新宿から直通高速バスあり。",
    "tip": "逆さ富士を綺麗に見るなら、風が止む早朝6時〜7時頃が最大のチャンスです。北岸の宿に泊まれば客室からすぐに見られます。"
  },
  {
    "key": "kawaguchiko_station_walk",
    "title": "2. 河口湖駅〜富士山パノラマロープウェイ・富士急（名物ほうとうと爽快絶景）",
    "timing": "通年（世界最高クラスのアトラクションと絶景ブランコ）",
    "desc": "富士五湖観光の拠点・河口湖駅周辺。太宰治ゆかりの天上山へ登る「富士山パノラマロープウェイ」や、絶叫マシンが揃う「富士急ハイランド」。熱々の鉄鍋で提供される名物「甲州ほうとう」を満喫。",
    "spots": "〜河口湖〜 富士山パノラマロープウェイ（絶景やぐら・カチカチ山）、富士急ハイランド、ほうとう不動、小作河口湖店",
    "access": "JR中央線直通特急「富士回遊」で新宿から河口湖駅まで直通約1時間55分。",
    "tip": "パノラマロープウェイ山頂展望台にある「カチカチ山絶景ブランコ」は、富士山に向かって飛び出すような大迫力写真が撮れます。"
  },
  {
    "key": "yamanakako_onsen_stay",
    "title": "3. 山中湖・忍野八海（富士山の湧水群と朝日に輝く「紅富士」ステイ）",
    "timing": "通年（冬のダイヤモンド富士・忍野八海の透明度）",
    "desc": "富士五湖の中で最も標高が高い「山中湖」。朝日に赤く染まる「紅富士」や、夕日が山頂に沈む「ダイヤモンド富士」。富士山の雪解け水が湧き出す国の天然記念物「忍野八海」の神秘的な透明度。",
    "spots": "忍野八海（湧池・鏡池・名水百選）、山中湖パノラマ台、山中湖花の都公園、紅富士の湯",
    "access": "東富士五湖道路山中湖ICより車約10分。河口湖駅・御殿場駅より路線バス運行。",
    "tip": "忍野八海でいただく「草餅（栃餅）」や名水仕込みの蕎麦・豆腐は、富士山の清らかな水ならではの絶品です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【山梨・富士五湖＆河口湖】逆さ富士・富士急ハイランド＆ほうとう極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "山梨・富士五湖（河口湖・山中湖）エリア完全特化！湖面に映る奇跡の「逆さ富士」、富士急ハイランド、富士山パノラマロープウェイ、名物ほうとう鍋と全室富士山ビュー温泉ホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/yamanashi-fujigoko-kawaguchiko-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【山梨・富士五湖＆河口湖】逆さ富士・富士急ハイランド＆ほうとう極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/yamanashi-fujigoko-kawaguchiko-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            FUJI FIVE LAKES MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「山梨・富士五湖＆河口湖」逆さ富士・富士急ハイランド＆ほうとう極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            波静かな湖面に鏡のように映り込む霊峰富士の「逆さ富士」。四季折々の花々と青い湖水が織りなす圧倒的な美景。客室露天風呂から雪化粧した富士山を独占し、名物ほうとうと甲州牛に舌鼓を打つ休日。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 山梨・富士五湖＆河口湖：逆さ富士・富士急ハイランド＆ほうとう極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「山梨・富士五湖＆河口湖：逆さ富士・富士急ハイランド＆ほうとう極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 富士河口湖温泉　富士山の見える温泉旅館　大池ホテル</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町船津6713-103</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場50台・河口湖駅からの無料送迎有・バイク専用の駐車場無・富士急ハイランドまで車で7分</td>
                <td className="p-3 font-bold text-amber-600">★4.36（5587件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2946%2F2946.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 富士河口湖温泉郷　四季の宿　富士山</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町船津6713-19</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">有り　13台　無料　予約不要　※満車時は隣接町営無料駐車場をご案内</td>
                <td className="p-3 font-bold text-amber-600">★3.68（378件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50707%2F50707.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. Ｌａｋｅ　Ｅｎｇｌａｎｄ　富士山が見える隠れ家ロッジ／西湖近隣／ＢＢＱ／企業研修　＾</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町西湖3111　Ｌａｋｅ　Ｅｎｇｌａｎｄ</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">有り</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥9,744〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F194446%2F194446.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 富士山と河口湖とホテル風鈴</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町河口763</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">★5（16件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193462%2F193462.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 天然温泉　富士五湖の湯　スーパーホテル富士河口湖天然温泉</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町船津3062-5</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">敷地内平面駐車場普通車80台先着順予約不可　普通車以外は提携駐車場１泊1,100円電話にて要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.28（821件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,910〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182686%2F182686.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 河口湖温泉　足和田ホテル</td>
                <td className="p-3 text-stone-600">山梨県南都留郡富士河口湖町長浜395</td>
                <td className="p-3 text-stone-600">河口湖駅周辺</td>
                <td className="p-3 text-stone-600">有り　４０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.34（946件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,425〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4869%2F4869.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富士河口湖温泉　富士山の見える温泉旅館　大池ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじかわぐちこおんせん　ふじさんのみえるおんせんりょかん　おおいけほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946_wa.jpg" alt="富士河口湖温泉　富士山の見える温泉旅館　大池ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>山梨 富士山 河口湖 露天風呂 温泉 バイキング ブッフェ 温泉　貸切露天風呂</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町船津6713-103 ／ 最寄り駅：河口湖 ／ 交通案内：駅から無料送迎有■駐車場無料■河口湖駅から車で4分■富士急から車で7分河口湖ICから車で12分新宿駅からバスで約120分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場50台・河口湖駅からの無料送迎有・バイク専用の駐車場無・富士急ハイランドまで車で7分</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.5 ／ 立地 ★4.4 ／ 部屋 ★4.23 ／ 設備 ★4.29 ／ 風呂 ★4.31 ／ 食事 ★4.45</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「富士山が見えた瞬間に感動、料理も最高とても良いお部屋で最高でしたお部屋には浴衣や作務衣が全サイズ取り揃えてあり早速着替えてゆったりと過ごせましたお料理もどれも美味しく大満足でした富…　2026-10-06 19:19:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富士河口湖温泉郷　四季の宿　富士山</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじかわぐちこおんせんきょう　しきのやど　ふじさん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/50707/50707_kya.jpg" alt="富士河口湖温泉郷　四季の宿　富士山 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>河口湖畔沿いにある富士山を望む温泉宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町船津6713-19 ／ 最寄り駅：河口湖 ／ 交通案内：富士急行線　河口湖駅より車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　13台　無料　予約不要　※満車時は隣接町営無料駐車場をご案内</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「入浴時間が長く、古き良き雰囲気に癒やされたお風呂の入浴可能時間が朝夕長いのでくつろげました。施設自体は古いですが、イイ雰囲気でした。また行きます。ありがとうございました。クチコミの詳細はこちら…　2026-08-18 02:00:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｌａｋｅ　Ｅｎｇｌａｎｄ　富士山が見える隠れ家ロッジ／西湖近隣／ＢＢＱ／企業研修　＾</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,744〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/194446/194446.jpg" alt="Ｌａｋｅ　Ｅｎｇｌａｎｄ　富士山が見える隠れ家ロッジ／西湖近隣／ＢＢＱ／企業研修　＾ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>Ｌａｋｅ　Ｅｎｇｌａｎｄは「森の空気を感じ、近隣の湖でバケーションを楽しむ」が魅力のロッジです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町西湖3111　Ｌａｋｅ　Ｅｎｇｌａｎｄ ／ 最寄り駅：河口湖 ／ 交通案内：河口湖駅から車で約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「Ｌａｋｅ　Ｅｎｇｌａｎｄ　富士山が見える隠れ家ロッジ／西湖近隣／ＢＢＱ／企業研修　＾は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富士山と河口湖とホテル風鈴</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじさんとかわぐちことほてるふうりん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/193462/193462.jpg" alt="富士山と河口湖とホテル風鈴 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富士山を望む閑静な田舎町で新築のずっといたくなるような広くて居心地の良い部屋とサービスをあなたへ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町河口763 ／ 最寄り駅：河口湖 ／ 交通案内：河口湖駅よりバスで約１５分、中央自動車道河口湖ＩＣよりお車で約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「富士山と河口湖とホテル風鈴は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　富士五湖の湯　スーパーホテル富士河口湖天然温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてるふじかわぐちこてんねんおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,910〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/182686/182686.jpg" alt="天然温泉　富士五湖の湯　スーパーホテル富士河口湖天然温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>スーパーホテル富士河口湖2021年7月16日グランドオープン！！壮大な富士の北麓をご覧頂けます！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町船津3062-5 ／ 最寄り駅：河口湖 ／ 交通案内：中央自動車道　富士吉田I.Cより約5分！富士急行線　河口湖駅よりタクシーで約5分！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>敷地内平面駐車場普通車80台先着順予約不可　普通車以外は提携駐車場１泊1,100円電話にて要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食が美味しく会場のデザインも最高朝食のメニューは、さすが豊富に加えてどれも美味しいので、取り過ぎに注意ですね。朝食会場は、一流ホテル顔負けのデザインで、リゾートに来ている感が満載です。海外の皆さ…　2026-08-20 17:14:16投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=182686&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">河口湖温泉　足和田ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（かわぐちこおんせん　あしわだほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,425〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4869/4869_heya.jpg" alt="河口湖温泉　足和田ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>人気のワイン風呂や星空露天寝湯、サウナも完備。河口湖畔に佇む当館でのんびり静かなひと時を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南都留郡富士河口湖町長浜395 ／ 最寄り駅：河口湖 ／ 交通案内：【電車】富士急行線河口湖駅より車で約10分【車】河口湖ICより約3キロ・約15分。勝山から湖畔道路を大石方面へ湖畔沿いへ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　４０台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.44 ／ 立地 ★4.19 ／ 部屋 ★4.16 ／ 設備 ★4.12 ／ 風呂 ★4.35 ／ 食事 ★4.4</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「外観は少し古く感じますが、館内はとても清潔に整えられていて、お部屋もキレイで快適に過ごす事ができました。電車での旅でしたので、駅から送迎バスがあって助かりました。クチコミの詳細はこちらから…　2026-10-06 18:12:22投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山梨県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山梨県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">富士山（吉田ルート/五合目）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本の最高峰であり世界文化遺産の象徴。富士スバルラインで行く五合目は観光施設が充実し、眼下に雲海を望む圧巻のスタート地点です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">新倉山浅間公園（忠霊塔）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">五重塔（忠霊塔）越しに雄大な富士山と満開の桜を一望できる、世界中の観光客が熱望する「これぞ日本」という究極のアジアンビジュアルスポット。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富士五湖（河口湖）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の北麓に位置する静かな湖畔リゾート。四季折々の富士山が水面に映る「逆さ富士」や、大石公園のコキア・ラベンダー越しのアングルが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">勝沼ぶどうの丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本有数のワイン産地・勝沼の高台に立つ総合ワインリゾート。タパスとともに100種類以上の甲州ワインを試飲できる地下ワインカーヴが魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山梨県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山梨県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="yamanashi-fujigoko-kawaguchiko-stay" />
</div>
  );
}
