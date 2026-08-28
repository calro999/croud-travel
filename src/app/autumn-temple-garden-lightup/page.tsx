import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【錦秋の光の芸術】紅葉庭園ライトアップ＆夜間特別拝観の宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "幻想的な闇に浮かび上がる紅葉の美！京都東山（清水寺・高台寺）、東京目白（ホテル椿山荘東京の雲海庭園）、金沢兼六園（雪吊りライトアップ）、宮城松島円通院など、夜間ライトアップを満喫できる極上宿を徹底解説。",
  keywords: ["autumn-temple-garden-lightup", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-temple-garden-lightup"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-temple-garden-lightup", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kyoto_temple_lightup",
    "title": "1. 京都・東山＆嵐山（高台寺のプロジェクションマッピングと清水の舞台）",
    "timing": "開催期間：10月下旬〜12月上旬（夜間特別拝観）",
    "desc": "高台寺の波心庭で行われる最新プロジェクションマッピングや、清水寺の舞台から放たれる青い一筋の光（観音様の慈悲）。東山周辺の京旅館に泊まれば、閉門間際まで夜桜・紅葉の幻想空間を堪能できます。",
    "spots": "高台寺（臥龍池の紅葉リフレクション）、清水寺、東福寺、永観堂禅林寺（みかえり阿弥陀）、宝厳院（嵐山）",
    "access": "JR京都駅から市バスで祇園・清水道まで約15分。京阪祇園四条駅・清水五条駅徒歩圏内。",
    "tip": "夜間拝観の入場待ち列を避けるため、閉門1時間前の20時〜20時半頃に入場すると比較的スムーズに鑑賞できます。"
  },
  {
    "key": "rikugien_tokyo",
    "title": "2. 東京・目白＆文京（ホテル椿山荘東京の「東京雲海」と六義園夜間特別観賞）",
    "timing": "開催期間：11月中旬〜12月上旬",
    "desc": "広大な日本庭園に人工の霧を発生させるホテル椿山荘東京の「東京雲海×紅葉ライトアップ」は圧巻。大名庭園・六義園の「夜間特別観賞」と合わせて、都心にいながら圧倒的な自然美と名門ホテルステイを満喫。",
    "spots": "ホテル椿山荘東京庭園（東京雲海・三重塔）、六義園（回遊式築山泉水庭園）、旧古河庭園",
    "access": "地下鉄有楽町線「江戸川橋駅」より徒歩約10分。JR目白駅よりバス約10分。",
    "tip": "椿山荘のガーデンビュー客室を予約すると、お部屋の窓からライトアップされた雲海庭園をプライベートに独占できます。"
  },
  {
    "key": "kenrokuen_lightup",
    "title": "3. 石川・金沢兼六園＆金沢城公園（冬の風物詩「雪吊り」と紅葉のライトアップ）",
    "timing": "開催期間：10月下旬〜11月下旬（金沢城・兼六園四季物語 秋の段）",
    "desc": "唐崎松の雪吊りと色鮮やかな紅葉が霞ヶ池に映り込む絶景。金沢城公園の菱櫓・石垣ライトアップとともに無料で夜間開放されます。兼六園周辺のホテルや茶屋街の町家宿で加賀料理に舌鼓。",
    "spots": "兼六園（霞ヶ池・徽軫灯籠・唐崎松）、金沢城公園、玉泉院丸庭園、金沢21世紀美術館",
    "access": "JR金沢駅東口より路線バスで兼六園下・広坂まで約15分。",
    "tip": "玉泉院丸庭園では、音楽に合わせて光の演出が変わる夜間ライトアップが行われており必見です。"
  },
  {
    "key": "matsushima_lightup",
    "title": "4. 宮城・日本三景松島＆円通院（心字池に映る奇跡の紅葉リフレクション）",
    "timing": "開催期間：10月下旬〜11月下旬（松島紅葉ライトアップ）",
    "desc": "国指定重要文化財「円通院」の庭園。風のない夜、心字池の水面が完全な鏡となり、ライトアップされたモミジを上下対称に映し出す光景は息をのむ美しさ。松島湾を一望する温泉リゾートホテルが人気です。",
    "spots": "円通院（三慧殿・心字池）、瑞巌寺、五大堂、松島遊覧船、松島さかな市場",
    "access": "JR仙石線「松島海岸駅」下車徒歩約5分。JR東北本線「松島駅」下車。仙台駅から約30分。",
    "tip": "秋の松島湾で獲れる旬の「松島牡蠣（焼き牡蠣・牡蠣鍋）」と宮城の地酒を温泉宿で味わうのが至高です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AUTUMN ILLUMINATED GARDEN
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【錦秋の光の芸術】紅葉庭園ライトアップ＆夜間特別拝観の宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            昼間の鮮やかな紅葉とは一変し、漆黒の夜空と鏡のような池の水面に映し出される光の芸術。門前宿や庭園自慢のホテルに宿泊し、夜間特別拝観の感動をそのまま客室へ持ち帰る贅沢な秋の旅。
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
