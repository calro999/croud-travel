import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【天然芝プライベートドッグラン付きヴィラ】アジリティ＆貸切一棟ステイ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "ノーリードで思いっきり駆け回る歓び！客室専用天然芝プライベートドッグラン付き一棟貸しヴィラ完全特化！千葉九十九里・那須・軽井沢・琵琶湖、アジリティ完備、足洗い場＆温水シャワー、愛犬とBBQを楽しむ宿を徹底解説。",
  keywords: ["dog-private-grass-run-villa-stay", "ペットと泊まれる宿", "愛犬同伴", "ドッグリゾート", "プライベートドッグラン", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["dog-private-grass-run-villa-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for dog-private-grass-run-villa-stay", e);
  }
  return {};
}

export default function PetDogResortHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "chiba_kujukuri_dog_villa_run",
    "title": "1. 千葉・九十九里＆南房総（100坪超の広大天然芝ドッグランと海風）",
    "timing": "通年（都心から車で約90分・年間を通じて温暖）",
    "desc": "太平洋の潮風を感じる九十九里海岸沿いの一棟貸しヴィラ。敷地内に100坪〜200坪の完全フェンス付き天然芝ドッグラン。愛犬用アジリティ（ハードル・トンネル）完備。ナイター照明付きで夜でも安全に遊べる設計。ウッドデッキBBQ。",
    "spots": "九十九里ビーチ（愛犬と砂浜ダッシュ）、片貝海水浴場、ハーブガーデン、道の駅オライはすぬま",
    "access": "圏央道「東金IC」または「松尾横芝IC」より車約15〜20分。",
    "tip": "九十九里の砂浜は遠浅で砂が細かく、早朝や夕暮れ時に愛犬と一緒に波打ち際を走ると最高のフォトジェニックな写真が撮れます。"
  },
  {
    "key": "karuizawa_nasu_dog_forest_villa",
    "title": "2. 長野・軽井沢＆栃木・那須（緑の木漏れ日とウッドチップラン）",
    "timing": "通年（夏期の涼しい避暑地滞在・秋の紅葉ラン）",
    "desc": "浅間山山麓の軽井沢や那須の原生林に佇むプライベートヴィラ。クッション性が高く足腰に優しいウッドチップや天然芝のドッグラン。薪ストーブが灯るリビングで愛犬と添い寝。愛犬同伴OKの軽井沢プリンスショッピングプラザ。",
    "spots": "軽井沢プリンスショッピングプラザ（ドッグラン・愛犬同伴店舗多数）、ハルニレテラス、雲場池、浅間牧場",
    "access": "上信越道「碓氷軽井沢IC」より車約15〜20分。北陸新幹線軽井沢駅。",
    "tip": "軽井沢の「ハルニレテラス」は清流沿いのウッドデッキテラス席が全店愛犬同伴可能で、せせらぎを聞きながら愛犬と優雅なカフェタイムを過ごせます。"
  },
  {
    "key": "biwako_kansai_dog_run_resort",
    "title": "3. 滋賀・琵琶湖畔＆兵庫・淡路島（レイクサイドドッグランとグランピング）",
    "timing": "通年（水遊びが大好きなレトリバーにも大人気）",
    "desc": "琵琶湖の白砂ビーチに直結したドッグヴィラや、淡路島の海を望むグランピング。ドッグランからそのまま湖に入ってドッグサップや水遊び。温水フットシャワーやトリミングスペース完備。近江牛BBQディナー。",
    "spots": "琵琶湖マイアミビーチ、びわこ箱館山（ドッグラン・ゴンドラ愛犬OK）、淡路島明石海峡大橋展望台",
    "access": "名神高速「京都東IC」より湖西道路経由、または神戸淡路鳴門道経由。",
    "tip": "「びわこ箱館山」のパノラマゴンドラは愛犬と一緒に乗車でき、山頂に広がる広大な天然芝ドッグランから琵琶湖を見下ろす大絶景が楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-emerald-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            PRIVATE DOG RUN VILLA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【天然芝プライベートドッグラン付きヴィラ】アジリティ＆貸切一棟ステイ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            リビングの掃き出し窓を開けると、目の前に広がる100平米超の専用天然芝ガーデン！「天然芝プライベートドッグラン付きヴィラ」。他の犬を気にせずノーリードで全力疾走。アジリティ遊具やプール、足洗い場完備。愛犬の笑顔を独占する休日へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
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
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🐾 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめスポット＆お散歩エリア</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-1.5">
                  <span className="font-bold text-orange-950 block text-[11px]">💡 愛犬と快適に過ごすコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ドッグフレンドリー宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの愛犬同伴厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    愛犬歓迎宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで愛犬同伴プランを見る
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
