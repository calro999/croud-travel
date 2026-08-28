import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【おこもり贅沢】貸切露天風呂＆お部屋食の極上温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "誰にも気兼ねしない二人だけの至福の時間。箱根強羅、伊豆修善寺、熊本黒川温泉、京都嵯峨嵐山など、無料貸切露天風呂や贅沢な部屋食会席プランを備えた秋・冬のおこもり人気宿を徹底解説。",
  keywords: ["autumn-winter-private-bath-ryokan", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-private-bath-ryokan"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-private-bath-ryokan", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakone_private_bath",
    "title": "1. 神奈川・箱根強羅温泉（美肌の白濁湯を独占！絶景貸切露天とお部屋食会席）",
    "timing": "通年（秋の紅葉・冬の雪見風呂が最高）",
    "desc": "大涌谷から引湯する乳白色の酸性硫酸塩泉。複数の貸切露天風呂を無料で巡ることができる宿や、相模湾の地魚と足柄牛のすき焼きをお部屋でゆっくり味わえる名門旅館が揃っています。",
    "spots": "箱根強羅公園（クラフトハウス）、箱根美術館（名勝庭園・苔庭）、早雲山（cu―mo箱根足湯）",
    "access": "箱根登山鉄道「強羅駅」下車。小田急ロマンスカー箱根湯本駅から登山電車で約35分。",
    "tip": "早めにチェックインして貸切風呂の予約枠を確保し、夕暮れ時のマジックアワーに入浴するのが最もおすすめです。"
  },
  {
    "key": "izu_private_bath",
    "title": "2. 静岡・伊豆修善寺温泉（桂川のせせらぎと竹林の小径に佇む隠れ家旅館）",
    "timing": "通年（秋の修善寺紅葉・冬の静寂）",
    "desc": "伊豆最古の歴史を誇る修善寺温泉。桂川沿いの老舗旅館では、竹林を望む風情ある貸切露天風呂や、伊豆名物の本わさびを使った伊豆牛ステーキ・金目鯛姿煮をお部屋食で堪能できます。",
    "spots": "竹林の小径、修禅寺、独鈷の湯（足湯）、修善寺虹の郷、指月殿",
    "access": "伊豆箱根鉄道駿豆線「修善寺駅」より路線バスで約8分。東名沼津ICより伊豆縦貫道経由約30分。",
    "tip": "浴衣に着替えて夕暮れの竹林の小径ライトアップを散策した後、部屋に戻って温かい鍋料理をいただくのが至福です。"
  },
  {
    "key": "kurokawa_private_bath",
    "title": "3. 熊本・黒川温泉（渓流を望む貸切野天風呂と肥後牛炭火焼きおこもりステイ）",
    "timing": "通年（冬の湯あかりイベント開催）",
    "desc": "山あいに佇む木造旅館の情緒。渓流のせせらぎがBGMの貸切野天風呂に浸かり、熊本名物の特選馬刺しや肥後牛の炭火焼きを個室や客室でゆったり楽しむ大人の隠れ家リトリート。",
    "spots": "黒川温泉川端通り、べっちん館、平野台親水公園（恋人の聖地展望台）、夫婦滝",
    "access": "熊本空港より車・直行バスで約80分。博多駅より直行高速バスあり。",
    "tip": "冬限定の竹灯籠イベント「湯あかり」を鑑賞した後は、宿の貸切風呂で冷えた体をじっくり温めましょう。"
  },
  {
    "key": "arashiyama_private_bath",
    "title": "4. 京都・嵯峨嵐山温泉（渡月橋のすぐそば！天然温泉貸切風呂と京の伝統会席）",
    "timing": "通年（秋の嵐山紅葉・冬の嵐山花灯路）",
    "desc": "風光明媚な嵐山に湧く弱アルカリ性の美肌温泉「嵐山温泉」。人混みの多い日中の嵐山観光から戻り、静寂の貸切風呂で疲れを癒やして、伝統の京野菜と旬の素材を活かした京懐石をお部屋で。",
    "spots": "渡月橋、天龍寺（曹源池庭園）、竹林の小径、嵐山モンキーパークいわたやま",
    "access": "阪急嵐山線「嵐山駅」徒歩約5分。JR嵯峨野線「嵯峨嵐山駅」徒歩約15分。",
    "tip": "早朝の静かな渡月橋散策と、夜の客室露天風呂・部屋食を組み合わせると、混雑を避けて優雅な京都旅が叶います。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            PRIVATE BATH & IN-ROOM DINING
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【おこもり贅沢】貸切露天風呂＆お部屋食の極上温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湯けむり立ち上るプライベートな貸切露天風呂で手足を伸ばし、夜は誰にも邪魔されず客室でいただく出来立ての贅沢会席。カップルやご夫婦、記念日旅行に最適な極上のおこもり温泉旅館へ。
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
