import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【愛媛・しまなみ海道＆今治】来島海峡大橋・多島美サイクリング＆来島鯛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "サイクリストの聖地・瀬戸内しまなみ海道＆今治エリア完全特化！世界初の三連吊橋「来島海峡大橋」、亀老山展望公園パノラマ、急流観潮船、今治タオル、来島海峡の急流で育つ「来島鯛」とオーシャンビュー宿を徹底解説。",
  keywords: ["ehime-shimanami-kaido-imabari-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ehime-shimanami-kaido-imabari-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ehime-shimanami-kaido-imabari-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimanami_bridge_cycling_view",
    "title": "1. サンライズ糸山〜来島海峡大橋（海の上を走る絶景サイクリングと急流観潮船）",
    "timing": "通年（春〜秋の爽快サイクリング・夜の大橋ライトアップ）",
    "desc": "しまなみ海道の四国側拠点「サンライズ糸山」。世界初の三連吊橋「来島海峡大橋（全長4,105m）」を自転車や徒歩で渡る爽快感。日本三大急流「来島海峡」の渦潮を間近で見る「急流観潮船」の冒険。",
    "spots": "サンライズ糸山（サイクリングターミナル・SHIMANAMIモニュメント）、来島海峡大橋、糸山展望台、来島海峡急流観潮船（下田水港発着）",
    "access": "JR予讃線「今治駅」より路線バスで約20分「展望館前」下車。西瀬戸自動車道今治北ICより車約5分。",
    "tip": "サンライズ糸山の「SHIMANAMIモニュメント」前は、自転車と一緒に来島海峡大橋をバックに撮影できる記念撮影の聖地です。"
  },
  {
    "key": "kirosan_sunset_view_stay",
    "title": "2. 大島・亀老山展望公園（隈研吾設計の展望デッキから望む夕陽と瀬戸内多島美）",
    "timing": "通年（日本の夕陽百選・日没前後のマジックアワー）",
    "desc": "大島の南端、標高307.8mに位置する「亀老山（きろうさん）展望公園」。建築家・隈研吾氏が自然の地形に埋め込むように設計したモダンな展望台。来島海峡大橋と瀬戸内海の島々が茜色に染まる息をのむ大パノラマ。",
    "spots": "亀老山展望公園（展望デッキ・藻塩ジェラート）、よしうみバラ公園、道の駅よしうみいきいき館（七輪海鮮バーベキュー）",
    "access": "今治市街より車で約20分（大島南IC下車）。",
    "tip": "亀老山の売店で販売されている「藻塩ジェラート」は、伯方の塩を使った塩味と甘みのバランスが絶品のスイーツです。"
  },
  {
    "key": "imabari_kurushima_tai_gourmet",
    "title": "3. 来島海峡の天然真鯛＆今治鉄板焼鳥（身の締まった来島鯛と今治タオルの贅沢）",
    "timing": "通年（春の桜鯛・秋のもみじ鯛）",
    "desc": "最大時速10ノット（約18km/h）の激流で育つ「来島海峡の天然鯛」。お造りや鯛の宝楽焼き、炊きたての今治鯛めし。重しでプレスしてカリッと焼き上げるご当地グルメ「今治焼鳥」。肌触り極上の今治タオルアメニティ。",
    "spots": "今治城（日本三大水城・海水を引き入れた堀）、テクスポート今治（今治タオル本店）、タオル美術館ICHIHIRO",
    "access": "今治市街地中心部。",
    "tip": "「タオル美術館ICHIHIRO」では、広大なヨーロピアンガーデンとタオルの製造工程見学、限定タオルの購入が楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIMANAMI KAIDO RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【愛媛・しまなみ海道＆今治】来島海峡大橋・多島美サイクリング＆来島鯛極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            瀬戸内海の島々を6つの橋で結ぶ海の道「しまなみ海道」。世界初の三連吊橋「来島海峡大橋」と青い海。隈研吾設計の「亀老山展望公園」から望む夕日の多島美。身が引き締まった名物「来島鯛」と今治タオルの心地よさに包まれる旅。
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
