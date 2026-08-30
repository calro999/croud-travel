import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【登録有形文化財・名建築の宿】宮大工の木造建築・文豪が愛した老舗旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "国登録有形文化財・宮大工の名建築旅館完全特化！釘を一本も使わない数寄屋造り、文豪が執筆に訪れた客室、歴史ある磨き上げられた廊下、日本庭園と伝統会席を味わう至高のクラシックステイを徹底解説。",
  keywords: ["heritage-cultural-wooden-ryokan", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["heritage-cultural-wooden-ryokan"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for heritage-cultural-wooden-ryokan", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tangible_cultural_heritage_ryokan",
    "title": "1. 国登録有形文化財・数寄屋造り名旅館（宮大工の技が光る組子細工と漆黒の廊下）",
    "timing": "通年（四季折々の日本庭園美と木造建築の温もり）",
    "desc": "樹齢数百年の銘木を用い、釘を一本も使わずに組み上げられた木造多層階建築。欄間に施された精緻な組子細工や職人の手彫り彫刻。年月を経て黒光りする廊下や階段が、日本の伝統美と静寂を醸し出します。",
    "spots": "客室の床の間・違い棚、職人手彫りの欄間彫刻、手吹きガラスの波打ち窓、大正ロマンの意匠",
    "access": "修善寺、湯河原、箱根塔ノ沢、渋温泉、角館などの歴史ある宿場町・温泉街。",
    "tip": "館内ツアーを実施している宿も多く、宮大工の隠された細工や建物の歴史について女将や支配人から解説を聞くことができます。"
  },
  {
    "key": "bungo_literary_master_stay",
    "title": "2. 文豪が逗留した客室＆日本庭園（川端康成・夏目漱石・太宰治が愛した静寂）",
    "timing": "通年（読書や思索にふける静かな執筆リトリート）",
    "desc": "『伊豆の踊子』『城の崎にて』『雪国』など、日本文学史に輝く名作が執筆された客室。文豪が実際に使った文机や硯、直筆の書や原稿が残る宿。窓外に広がる手入れの行き届いた日本庭園を眺めながら過ごす贅沢。",
    "spots": "文豪逗留客室、歴史資料展示室・ギャラリー、池泉回遊式日本庭園、書斎風ラウンジ",
    "access": "城崎温泉、湯ヶ島温泉、湯河原温泉、越後湯沢温泉など。",
    "tip": "文豪が好んだ銘菓や地酒をいただきながら、その宿で生まれた小説を読み返す時間は格別の体験です。"
  },
  {
    "key": "classic_hotel_modern_heritage",
    "title": "3. 日本のクラシックホテル＆洋館（明治・大正の鹿鳴館時代を偲ぶクラシックステイ）",
    "timing": "通年（重厚なメインダイニングと伝統フレンチ）",
    "desc": "日光金谷ホテル、富士屋ホテル、奈良ホテル、東京ステーションホテルなど「日本クラシックホテルの会」加盟ホテル。格天井やアンティーク家具、高い天井に響く足音。歴代の総料理長から受け継がれる伝統のコンソメスープ。",
    "spots": "格天井のメインダイニング、アンティークバー、ミュージアム、歴史的ロビー",
    "access": "日光、箱根宮ノ下、軽井沢、横浜、奈良など。",
    "tip": "パスポート型「クラシックホテルパスポート」にスタンプを集めながら、全国の名門ホテルを巡る旅が大人の間で人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HERITAGE ARCHITECTURE RYOKAN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【登録有形文化財・名建築の宿】宮大工の木造建築・文豪が愛した老舗旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本の美意識と宮大工の匠の技が息づく「登録有形文化財の宿」。明治・大正・昭和の文豪や皇族が愛した伝統木造建築、釘を使わない数寄屋造り、磨き抜かれた艶やかな廊下。時を超えて受け継がれる極上のおもてなしへ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
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
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
    </div>
  );
}
