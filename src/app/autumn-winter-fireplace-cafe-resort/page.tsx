import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【暖炉と珈琲】パチパチ薪が燃える！大人の隠れ家クラシックホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "静かな冬の読書と美食。長野・軽井沢、栃木・日光金谷ホテル、神奈川・箱根宮ノ下富士屋ホテル、長野・松本民芸の宿など、本物の暖炉ラウンジと歴史的建築美を誇るクラシックリゾートを徹底解説。",
  keywords: ["autumn-winter-fireplace-cafe-resort", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-fireplace-cafe-resort"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-fireplace-cafe-resort", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "karuizawa_fireplace",
    "title": "1. 長野・軽井沢＆中軽井沢（薪暖炉のある重厚なラウンジと森のリゾート）",
    "timing": "通年（秋の黄葉・冬の静寂シーズンが至高）",
    "desc": "別荘文化が息づく軽井沢。暖炉の火が揺らめくライブラリーラウンジやバーを備えたクラシックホテルで、信州食材を使ったフレンチとワインに舌鼓。観光客が少なくなる冬こそ軽井沢の真骨頂です。",
    "spots": "軽井沢高原教会、ハルニレテラス、雲場池（雪景色）、旧三笠ホテル",
    "access": "北陸新幹線「軽井沢駅」下車。東京駅から新幹線で約65分。",
    "tip": "軽井沢高原教会の「星降る森のクリスマス（キャンドルナイト）」と暖炉ホテルの組み合わせは冬デートの最高峰です。"
  },
  {
    "key": "nikko_classic",
    "title": "2. 栃木・日光中禅寺湖＆日光金谷ホテル（日本最古のリゾートクラシックホテル）",
    "timing": "通年（秋の奥日光紅葉・冬の雪景色）",
    "desc": "明治6年創業、アインシュタインやヘレン・ケラーも滞在した「日光金谷ホテル」。アール・デコ調のダイニングで伝統の百年ライスカレーや虹鱒のソテーを味わい、中禅寺湖の静かな自然に浸ります。",
    "spots": "日光東照宮、中禅寺湖、華厳の滝、日光田母沢御用邸記念公園",
    "access": "東武特急スペーシアで浅草・新宿から東武日光駅まで約1時間50分。日光駅から送迎・路線バス。",
    "tip": "金谷ホテルのバー「デイサイト」で暖炉の灯りを眺めながらいただくオリジナルカクテルが旅の夜を演出します。"
  },
  {
    "key": "hakone_fujiya",
    "title": "3. 神奈川・箱根宮ノ下（登録有形文化財！富士屋ホテルの歴史美と天然温泉）",
    "timing": "通年（秋の宮ノ下散策・冬の温泉ステイ）",
    "desc": "明治11年創業、和洋折衷の美しい建築が目を引く宮ノ下「富士屋ホテル」。全館に引かれた天然温泉と、メインダイニング「ザ・フジヤ」の格天井に描かれた高山植物の絵画など、文化財に泊まる感動体験。",
    "spots": "箱根登山鉄道（宮ノ下駅）、彫刻の森美術館、堂ヶ島渓谷遊歩道、渡邊ベーカリー",
    "access": "箱根湯本駅より箱根登山電車で宮ノ下駅まで約25分。",
    "tip": "歴史ある敷地内庭園の散策や、名物ベーカリー「PICOT」のクラシックカレーパンをお土産にするのが定番です。"
  },
  {
    "key": "kamikochi_imperial",
    "title": "4. 長野・松本浅間温泉＆民芸宿（松本民芸家具と薪ストーブの温もり）",
    "timing": "通年（秋のクラフトフェア・冬の城下町）",
    "desc": "国宝松本城の城下町と、手仕事の美が宿る松本民芸家具。浅間温泉や松本市内の老舗宿では、重厚な民芸家具と薪ストーブが置かれた空間で、信州牛や十割蕎麦、名湯をゆっくり堪能できます。",
    "spots": "国宝松本城、松本市美術館（草間彌生展示）、縄手通り、中町通り（蔵造りの街並み）",
    "access": "JR中央本線特急「あずさ」で新宿から松本駅まで約2時間30分。長野道松本IC。",
    "tip": "中町通りのカフェで自家焙煎珈琲を味わい、夜は浅間温泉の源泉掛け流し湯で温まるプランが人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            CLASSIC & FIREPLACE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【暖炉と珈琲】パチパチ薪が燃える！大人の隠れ家クラシックホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            外の寒さを忘れさせるパチパチと薪が爆ぜる暖炉の温もり。芳しい挽きたて珈琲やウイスキーを片手に、お気に入りの本を開く贅沢な冬の時間。時を重ねたクラシックホテルで過ごす大人の隠れ家ステイ。
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
