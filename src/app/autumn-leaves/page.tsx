import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【全国】紅葉露天風呂＆絶景温泉旅館ガイド ｜ 日本全国・旅宿クラウド",
  description: "秋の絶景！全国屈指の紅葉名所（日光、箱根、京都嵐山、黒川温泉、乳頭温泉）と、湯船から紅葉を一望できる人気露天風呂付き温泉旅館を徹底比較。見頃時期、アクセス、おすすめの過ごし方完全ガイド。",
  keywords: ["紅葉", "露天風呂", "温泉旅館", "日光", "箱根", "嵐山", "黒川温泉", "乳頭温泉", "秋旅行", "客室露天風呂"],
};

function loadAutumnHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "autumn_silverweek_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-leaves-onsen"] || {};
    }
  } catch (e) {
    console.error("Failed to load autumn hotels data", e);
  }
  return {};
}

export default function AutumnLeavesOnsenPage() {
  const sections = loadAutumnHotels();

  const areaGuides = [
    {
      key: "nikko_kinugawa",
      title: "1. 日光・鬼怒川温泉（栃木）",
      timing: "例年の見頃：10月上旬〜11月中旬",
      desc: "いろは坂や中禅寺湖、華厳の滝から鬼怒川渓谷へと標高差に合わせて長く紅葉が楽しめる関東屈指の名所。渓谷沿いの露天風呂からは、赤や黄色に染まる断崖絶壁と清流のコントラストを堪能できます。",
      spots: "日光東照宮、いろは坂、中禅寺湖、竜頭の滝、鬼怒楯岩大吊橋",
      accessTime: "東武特急スペーシアで浅草・新宿から鬼怒川温泉駅まで約2時間。日光宇都宮道路経由で車アクセスも快適。",
      stayTip: "中禅寺湖周辺の混雑を避けるなら、早朝7時台のドライブが鉄則。午後は鬼怒川温泉の露天風呂でゆったり疲れを癒すプランが王道です。"
    },
    {
      key: "hakone_gora",
      title: "2. 箱根・強羅・芦ノ湖温泉（神奈川）",
      timing: "例年の見頃：10月下旬〜11月下旬",
      desc: "箱根登山鉄道の車窓から眺める紅葉のトンネルや、芦ノ湖に映る富士山と紅葉の絶景。強羅エリアには白濁湯や美肌の湯を引く客室露天風呂付き高級宿が点在し、秋の大人の贅沢ステイに最適です。",
      spots: "箱根美術館（苔庭の紅葉）、強羅公園、芦ノ湖遊覧船、大涌谷、仙石原すすき草原",
      accessTime: "新宿から小田急ロマンスカーで箱根湯本まで約85分。箱根登山鉄道・ケーブルカーで強羅へ接続。",
      stayTip: "仙石原の黄金色に輝くススキ草原と紅葉のグラデーションは必見。日暮れ後は冷え込むため、部屋食と客室露天風呂のある宿が特に人気です。"
    },
    {
      key: "kyoto_arashiyama",
      title: "3. 京都・嵐山・湯の花温泉（京都）",
      timing: "例年の見頃：11月中旬〜12月上旬",
      desc: "渡月橋の背後に広がる嵐山全山の錦秋グラデーションや、天龍寺・宝厳院の庭園ライトアップ。喧騒を離れた奥嵐山や亀岡・湯の花温泉に宿泊すれば、静寂の中で極上の秋の京都情緒に浸れます。",
      spots: "渡月橋、天龍寺曹源池庭園、嵐山竹林の小径、嵯峨野トロッコ列車、保津川下り",
      accessTime: "京都駅からJR嵯峨野線で嵯峨嵐山駅まで約16分。亀岡・湯の花温泉へはJR亀岡駅より無料送迎バス約15分。",
      stayTip: "嵐山のメインストリートは日中大変混雑するため、早朝の寺院拝観（早朝開門）を活用し、夕方は宿の京懐石と温泉をゆっくり味わうのがスマートです。"
    },
    {
      key: "kurokawa_onsen",
      title: "4. 熊本・黒川温泉（熊本）",
      timing: "例年の見頃：10月下旬〜11月中旬",
      desc: "阿蘇の山あいに佇む、日本屈指の風情を誇る温泉街。渓流沿いにモミジやカエデが生い茂り、「入湯手形」を使った露天風呂めぐりで湯けむりと紅葉の絶景を巡ることができます。",
      spots: "黒川温泉街（川端通り）、夫婦滝、阿蘇大観峰、瀬の本高原、鍋ヶ滝",
      accessTime: "熊本空港からレンタカーで約80分、または福岡・博多駅から高速直行バスで約2時間45分。",
      stayTip: "夕暮れ時に行燈（あんどん）が灯る温泉街の風情は格別。冷えた体に名物の馬刺しや肥後牛の会席料理が染み渡ります。"
    },
    {
      key: "nyuto_onsen",
      title: "5. 東北・乳頭温泉郷（秋田）",
      timing: "例年の見頃：10月上旬〜10月下旬",
      desc: "十和田八幡平国立公園のブナ原生林に囲まれた7つの秘湯。黄金色に染まるブナの木々と、乳白色の源泉かけ流し露天風呂が織りなす風景は、一生に一度は訪れたい日本の秋の原風景です。",
      spots: "乳頭温泉郷（鶴の湯・妙乃湯など）、田沢湖、角館武家屋敷（黒板塀と紅葉のコントラスト）",
      accessTime: "秋田新幹線「田沢湖駅」より路線バスで約50分。盛岡ICから車で約80分。",
      stayTip: "野趣あふれる混浴・女性専用露天風呂があり、名物の山の芋鍋やイワナの塩焼きなど素朴で贅沢な山の恵みを味わえます。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AUTUMN SPECIAL FEATURE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【全国】紅葉露天風呂＆絶景温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            秋風が心地よい季節。山々が赤や黄金に染まる絶景を眺めながら、名湯に浸かる至福のひととき。日光、箱根、嵐山、黒川温泉など、全国屈指の紅葉名所とおすすめ温泉宿を厳選紹介。
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
                    🍁 {guide.timing}
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
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主な紅葉見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.accessTime}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 混雑回避・おすすめの過ごし方</span>
                  <p className="text-stone-700 leading-relaxed">{guide.stayTip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>♨️</span> <span>{guide.title}周辺の紅葉露天・おすすめ名湯宿</span>
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
