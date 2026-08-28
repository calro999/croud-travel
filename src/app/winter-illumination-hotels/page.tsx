import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の夜景】イルミネーション＆クリスマス絶景ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "光り輝く冬の絶景！丸の内・六本木（東京）、ハウステンボス光の王国（長崎）、中之島・御堂筋（大阪）、あしかがフラワーパーク（栃木）など、幻想的なイルミネーションを満喫できる人気ホテルを徹底解説。",
  keywords: ["winter-illumination-hotels", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-illumination-hotels"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-illumination-hotels", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tokyo_illumination",
    "title": "1. 東京・丸の内・大手町＆六本木（シャンパンゴールドの街並みと摩天楼夜景）",
    "timing": "開催期間：11月中旬〜2月中旬",
    "desc": "丸の内仲通りを彩る約120万球のシャンパンゴールドLEDや、六本木けやき坂の青白い光の並木道。東京駅周辺や六本木のラグジュアリーホテルでは、高層階の客室からきらめく都心のパノラマ夜景を楽しめます。",
    "spots": "丸の内仲通りイルミネーション、東京ミッドタウン（六本木）、恵比寿ガーデンプレイス、東京タワー",
    "access": "JR東京駅・有楽町駅、地下鉄六本木駅直結・徒歩圏内。羽田空港から約30分。",
    "tip": "客室から東京タワーやイルミネーション通りが見える部屋タイプ（東京タワービュー・シティビュー）を確約して予約するのがポイントです。"
  },
  {
    "key": "huistenbosch_winter",
    "title": "2. 長崎・ハウステンボス（世界最大級1,300万球！光の王国ステイ）",
    "timing": "開催期間：11月上旬〜翌年5月上旬（通年開催・冬が最高峰）",
    "desc": "日本一のイルミネーションとして名高いハウステンボス「光の王国」。園内の直営ホテルに宿泊すれば、運河を流れる光のパレードや白銀の世界を閉園時間を気にせず夜遅くまで堪能できます。",
    "spots": "ハウステンボス（光の滝・アンブレラストリート・アートガーデン）、佐世保バーガー、九十九島",
    "access": "博多駅から特急「ハウステンボス号」で約1時間45分。長崎空港から高速船で直行約50分。",
    "tip": "オフィシャルホテル宿泊者限定の「翌日1Dayパスポート特典」や先行入場を活用すると、連休でもアトラクションを効率よく楽しめます。"
  },
  {
    "key": "osaka_illumination",
    "title": "3. 大阪・中之島＆御堂筋（OSAKA光の饗宴・プロジェクションマッピング）",
    "timing": "開催期間：11月上旬〜12月下旬（OSAKA光のルネサンス）",
    "desc": "梅田からなんばまで約4kmにわたって光が連なる「御堂筋イルミネーション」と、中之島中央公会堂を彩る圧巻のプロジェクションマッピング。水都大阪の夜景を望むリバーサイドホテルが人気です。",
    "spots": "大阪市中央公会堂（光のルネサンス）、御堂筋イルミネーション、グランフロント大阪、梅田スカイビル",
    "access": "JR大阪駅・北新地駅、地下鉄淀屋橋駅・肥後橋駅周辺。新大阪駅から約10分。",
    "tip": "中之島リバークルーズ（光の水都ルネサンスクルーズ）に乗船すると、水上から煌びやかな光の演出をパノラマで楽しめます。"
  },
  {
    "key": "ashikaga_hotel",
    "title": "4. 栃木・あしかがフラワーパーク（日本三大イルミネーション「光の花の庭」）",
    "timing": "開催期間：10月中旬〜2月中旬",
    "desc": "全国イルミネーションランキング第1位を誇る奇跡の光の庭。樹齢160年におよぶ大藤を再現した「奇蹟の大藤」や光のスイレンなど500万球以上の光の芸術。近隣の佐野・足利温泉ホテルが観光拠点に最適です。",
    "spots": "あしかがフラワーパーク、佐野プレミアム・アウトレット、足利学校、鑁阿寺（ばんなじ）",
    "access": "JR両毛線「あしかがフラワーパーク駅」より徒歩3分。東北自動車道佐野藤岡ICより約18分。",
    "tip": "日暮れ直後の16:30〜17:30は入場門が大変混雑するため、15時台の早め入園がおすすめ。夜は佐野ラーメンや名物ポテト入り焼きそばを。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            WINTER ILLUMINATION
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の夜景】イルミネーション＆クリスマス絶景ホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            街中が幻想的な光に包まれる冬。クリスマスデートや家族での特別な旅行に、ホテルのお部屋やレストランからイルミネーションを一望できる極上の夜景ステイをご紹介します。
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
