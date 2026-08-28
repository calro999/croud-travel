import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【秋の美食】松茸＆ブランド和牛づくし極上温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "秋の贅沢味覚！信州別所温泉の松茸づくし、京都亀岡の丹波松茸＆丹波牛会席、岐阜飛騨高山のA5飛騨牛、滋賀おごと温泉の近江牛懐石など、秋限定の極上美食温泉宿を徹底解説。",
  keywords: ["autumn-gourmet-matsutake-wagyu", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-gourmet-matsutake-wagyu"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-gourmet-matsutake-wagyu", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shinshu_matsutake",
    "title": "1. 長野・信州上田＆別所温泉（本場信州の松茸小屋と極上松茸会席）",
    "timing": "旬の時期：9月中旬〜11月上旬",
    "desc": "全国有数の松茸の産地として名高い信州・上田周辺。信州最古の温泉地・別所温泉の老舗旅館では、焼き松茸、松茸土瓶蒸し、松茸ご飯、信州プレミアム牛とのすき焼きなど贅を尽くした料理を堪能できます。",
    "spots": "別所温泉（北向観音・安楽寺八角三重塔）、上田城跡公園、美ヶ原高原",
    "access": "北陸新幹線「上田駅」より上田電鉄別所線で約30分（終点別所温泉駅下車）。上信越道上田菅平ICより車約30分。",
    "tip": "秋限定の「松茸小屋（マツタケ専門小屋）」での食事と別所温泉宿泊を組み合わせたグルメツアーが非常に人気です。"
  },
  {
    "key": "kyoto_tanba_beef",
    "title": "2. 京都・亀岡＆湯の花温泉（丹波松茸と幻の丹波牛が彩る京懐石）",
    "timing": "旬の時期：9月下旬〜11月中旬",
    "desc": "京の奥座敷・湯の花温泉。最高峰の香りを誇る「丹波松茸」と、きめ細やかな霜降りが特徴の「丹波牛」を、伝統の技が光る京懐石で贅沢に味わえます。静寂に包まれた山あいの温泉で大人の休日を。",
    "spots": "保津川下り、嵯峨野トロッコ列車（亀岡駅）、出雲大神宮、丹波篠山城下町",
    "access": "JR京都駅から嵯峨野線で亀岡駅まで約20分。亀岡駅より各旅館の無料送迎バス約15分。",
    "tip": "嵐山から嵯峨野トロッコ列車に乗って亀岡に入り、湯の花温泉に宿泊。翌日は保津川下りで嵐山へ戻る王道周遊ルートがおすすめです。"
  },
  {
    "key": "hida_wagyu",
    "title": "3. 岐阜・飛騨高山＆下呂温泉（とろける最高級A5等級飛騨牛と美肌の名湯）",
    "timing": "通年（特に秋〜冬のすき焼き・しゃぶしゃぶが絶品）",
    "desc": "古い町並みが残る飛騨高山と、日本三名泉の美肌湯・下呂温泉。美しいサシが入ったA5ランク飛騨牛のサーロインステーキ、朴葉味噌焼き、すき焼き会席を客室や個室でゆっくり味わえます。",
    "spots": "飛騨高山古い町並み（さんまち通り）、宮川朝市、下呂温泉合掌村、白川郷（車で約50分）",
    "access": "JR特急「ひだ」で名古屋駅から高山駅まで約2時間20分、下呂駅まで約1時間40分。",
    "tip": "高山名物の食べ歩き（飛騨牛にぎり寿司や飛騨牛串焼き）を楽しんだ後、夜は温泉旅館でフルコースの飛騨牛会席をいただくのが至福です。"
  },
  {
    "key": "omi_wagyu",
    "title": "4. 滋賀・びわ湖おごと温泉（日本三大和牛・近江牛懐石と琵琶湖絶景）",
    "timing": "通年（秋の近江牛×松茸すき焼きプランが人気）",
    "desc": "比叡山の麓、琵琶湖の西岸に位置する名湯・おごと温泉。日本最古のブランド牛とされる「近江牛」の極上ロース肉を、秋の味覚とともに味わい、琵琶湖の朝焼けを望む露天風呂で癒やされます。",
    "spots": "比叡山延暦寺、びわ湖バレイ（びわ湖テラス）、浮御堂（満月寺）、近江八幡水郷めぐり",
    "access": "JR京都駅から湖西線で「おごと温泉駅」までわずか約20分。名神高速京都東ICより車約20分。",
    "tip": "京都駅から電車で20分という抜群のアクセス。秋の京都観光で日中の紅葉を楽しんだ後、夜はおごと温泉で近江牛を堪能するプランが人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AUTUMN GOURMET
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【秋の美食】松茸＆ブランド和牛づくし極上温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            香り高い旬の松茸と、とろけるようなブランド和牛のすき焼き・炭火焼き。秋の味覚を極めた豪華会席料理と美肌温泉で心もお腹も満たされる、大人の贅沢ご褒美ステイ。
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
