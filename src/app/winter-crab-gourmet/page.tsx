import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の味覚】カニ食べ尽くし＆絶景雪見温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "冬の日本海の王様！城崎温泉（兵庫）、越前三国（福井）、加賀山中（石川）、皆生温泉（鳥取）で本場の松葉ガニ・越前ガニ会席を堪能できる贅沢温泉宿を徹底ガイド。",
  keywords: ["winter-crab-gourmet", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-crab-gourmet"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-crab-gourmet", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kinosaki_crab",
    "title": "1. 兵庫・城崎温泉（津居山ガニ・柴山ガニと風情ある7つの外湯めぐり）",
    "timing": "カニ漁解禁：11月上旬〜翌年3月下旬",
    "desc": "大谿川沿いの柳並木と下駄の音が響く情緒豊かな温泉街。水揚げされたばかりの新鮮なタグ付き松葉ガニ（柴山ガニ・津居山ガニ）を贅沢なフルコースで味わい、雪化粧の街を浴衣で湯巡りできます。",
    "spots": "城崎温泉7つの外湯（一の湯・御所の湯等）、城崎ロープウェイ、玄武洞公園、津居山港",
    "access": "JR特急「こうのとり」「はまかぜ」で大阪・京都から城崎温泉駅まで直通約2時間40分。",
    "tip": "外湯めぐりパス（デジタル湯めぐり券）が付いた宿を選ぶと便利。冬場は積雪があるため、電車利用またはスタッドレスタイヤ装着が必須です。"
  },
  {
    "key": "echizen_crab",
    "title": "2. 福井・越前海岸＆三国温泉（皇室献上品質！本場の越前ガニを食す）",
    "timing": "カニ漁解禁：11月上旬〜翌年3月下旬",
    "desc": "黄色いタグが最高級の証である「越前ガニ」。日本海の荒波を望む三国温泉や越前海岸沿いの料理旅館では、水揚げ当日の活ガニを豪快に茹で上げ、濃厚なカニ味噌と上品な甘みの身を心ゆくまで堪能できます。",
    "spots": "東尋坊、三国のレトロな町並み、越前がにミュージアム、越前松島水族館、あわら温泉",
    "access": "北陸新幹線「芦原温泉駅」または「福井駅」より車・路線バスで約30〜45分。",
    "tip": "三国港近くの宿では「茹でたて熱々」の越前ガニを丸ごと1杯提供するプランが名物。三国温泉の夕日と日本海ビュー露天風呂も格別です。"
  },
  {
    "key": "hokuriku_crab",
    "title": "3. 石川・加賀温泉郷＆山中・山代（九谷焼の器で愛でるズワイガニ会席）",
    "timing": "カニ漁解禁：11月上旬〜翌年3月下旬",
    "desc": "開湯1300年の歴史を誇る山代・山中・粟津・片山津の加賀温泉郷。名門老舗旅館のおもてなしを受けながら、石川のブランドガニ「加能ガニ」と香箱ガニ（雌ガニ）を、美しい伝統工芸の器で優雅に味わえます。",
    "spots": "鶴仙渓（山中温泉）、山代温泉古総湯、那谷寺、ゆのくにの森、片山津温泉柴山潟",
    "access": "北陸新幹線「加賀温泉駅」直通（東京から約2時間45分）。駅より各温泉街へ無料送迎バス約10〜15分。",
    "tip": "11月〜12月限定で味わえる「香箱ガニ（内子と外子が絶品）」付きプランは大人気のため、早期の予約がおすすめです。"
  },
  {
    "key": "tottori_crab",
    "title": "4. 鳥取・皆生温泉＆境港（日本有数の水揚げ量を誇る境港の松葉ガニ）",
    "timing": "カニ漁解禁：11月上旬〜翌年3月下旬",
    "desc": "弓ヶ浜の白砂青松と日本海を一望する皆生温泉（かいけおんせん）。境港で揚がったばかりの特上松葉ガニや紅ズワイガニをリーズナブルに味わえ、塩分を含んだ美肌の温泉で体の芯まで温まります。",
    "spots": "境港水木しげるロード、境港さかなセンター、米子城跡、大山（だいせん）スキー場",
    "access": "米子空港よりタクシーで約20分。JR米子駅より路線バスで約20分。米子ICから車で約10分。",
    "tip": "米子鬼太郎空港からアクセスが良いため飛行機利用にも最適。皆生温泉名物の「海から湧く温泉」とカニすき鍋の組み合わせは最高です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            WINTER GOURMET
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の味覚】カニ食べ尽くし＆絶景雪見温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            冬の旅の醍醐味といえば、獲れたて極上のカニ料理と雪見露天風呂。茹でガニ、カニ刺し、焼きガニ、カニすき鍋から甲羅酒まで。北陸・山陰の名湯旅館で極上の美食ステイを。
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
