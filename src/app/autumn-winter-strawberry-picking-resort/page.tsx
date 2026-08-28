import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【もぎたて完熟】冬・春いちご狩り＆温泉リゾートホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "甘くてジューシーな完熟いちご食べ放題！栃木（とちおとめ＆スカイベリー）、静岡伊豆（紅ほっぺ）、千葉南房総、福岡（あまおう）など、観光農園でのいちご狩りと極上温泉をセットで楽しむ冬旅宿を徹底解説。",
  keywords: ["autumn-winter-strawberry-picking-resort", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-strawberry-picking-resort"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-strawberry-picking-resort", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tochigi_strawberry",
    "title": "1. 栃木・宇都宮＆日光（いちご王国！とちおとめ・スカイベリー・とちあいか食べ比べ）",
    "timing": "シーズン：12月上旬〜5月上旬（1月〜2月が最も甘い）",
    "desc": "いちご収穫量日本一を誇る栃木県。高級品種「スカイベリー」やハート形の断面が可愛い「とちあいか」を農園で食べ放題。日光東照宮参拝や鬼怒川温泉・宇都宮餃子グルメと組み合わせた王道プラン。",
    "spots": "日光ストロベリーパーク、宇都宮みんみん（餃子）、日光東照宮、鬼怒川温泉街",
    "access": "東北新幹線「宇都宮駅」または東武特急「東武日光駅・鬼怒川温泉駅」。",
    "tip": "いちご狩りは午前中（特に開園直後）が果実が冷えていて最も甘みを感じられおすすめです。"
  },
  {
    "key": "izu_strawberry",
    "title": "2. 静岡・伊豆の国＆伊豆長岡温泉（大粒の紅ほっぺ狩りと歴史ある名湯ステイ）",
    "timing": "シーズン：12月中旬〜5月上旬",
    "desc": "伊豆最大級のいちご狩りエリア・伊豆の国市。甘みと酸味のバランスが絶妙な「紅ほっぺ」や「きらぴ香」を味わい、伊豆長岡温泉のアルカリ性単純温泉でつるつる美肌を実感する週末ドライブ旅。",
    "spots": "伊豆の国パノラマリゾート（碧テラス）、江間いちご狩りセンター、韮山反射炉（世界遺産）",
    "access": "伊豆箱根鉄道駿豆線「伊豆長岡駅」下車。新東名長泉沼津ICより伊豆縦貫道経由約25分。",
    "tip": "「碧テラス」から富士山と駿河湾のパノラマを眺め、いちご大福やソフトクリームを味わうのが定番です。"
  },
  {
    "key": "chiba_strawberry",
    "title": "3. 千葉・南房総＆館山（冬も温暖な房総半島で楽しむ早春のいちご狩り＆花摘み）",
    "timing": "シーズン：1月上旬〜5月上旬（菜の花畑と同時に楽しめる）",
    "desc": "都心からアクアラインで気軽に行ける南房総。ハウス栽培の甘いいちご狩りとポピー・菜の花摘みを楽しんだ後は、館山や白浜のオーシャンビュー温泉ホテルで房総の地魚舟盛りディナーを満喫。",
    "spots": "館山いちご狩りセンター、道の駅とみうら枇杷倶楽部、房総フラワーライン、野島埼灯台",
    "access": "富津館山道路富浦ICより車約5分。JR内房線館山駅下車。東京駅から高速バスあり。",
    "tip": "道の駅とみうら枇杷倶楽部の「プレミアム苺パフェ」や完熟びわソフトクリームが大人気です。"
  },
  {
    "key": "fukuoka_strawberry",
    "title": "4. 福岡・久留米＆原鶴温泉（あかい・まるい・おおきい・うまい！本場あまおう狩り）",
    "timing": "シーズン：12月下旬〜4月下旬",
    "desc": "いちごの王様「博多あまおう」の本場・筑後川流域。広大な観光農園で完熟あまおうを心ゆくまで味わい、「ダブル美肌の湯」として名高い原鶴温泉・筑後川温泉の源泉かけ流し湯で癒やされます。",
    "spots": "原鶴温泉街、道の駅うきは、筑後川鵜飼い（夏）／フルーツ狩り街道、水縄連山",
    "access": "大分自動車道杷木ICより車で約5分。JR久大本線「筑後吉井駅」より車約10分。",
    "tip": "原鶴温泉は「硫黄泉」と「弱アルカリ性単純泉」が合わさった珍しい泉質で、古い角質を落として肌をしっとり整えてくれます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            STRAWBERRY PICKING & SPA
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【もぎたて完熟】冬・春いちご狩り＆温泉リゾートホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            12月から春にかけて最盛期を迎えるいちご狩り。大粒で真っ赤に実った完熟いちごをその場で頬張る幸せ。いちご狩り農園へのアクセスが良く、温泉やご当地スイーツを楽しめる人気ホテルへ。
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
