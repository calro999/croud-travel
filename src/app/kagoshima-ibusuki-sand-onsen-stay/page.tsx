import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【鹿児島・指宿温泉】天然砂むし温泉＆開聞岳パノラマ・黒豚極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "南国鹿児島・指宿温泉エリア完全特化！波打ち際で温まる世界唯一の「天然砂むし温泉」、薩摩富士「開聞岳」、干潮時に歩いて渡る知林ヶ島、鹿児島黒豚しゃぶしゃぶ・さつま揚げと南国リゾート旅館を徹底解説。",
  keywords: ["kagoshima-ibusuki-sand-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kagoshima-ibusuki-sand-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kagoshima-ibusuki-sand-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ibusuki_sand_bath_walk",
    "title": "1. 砂むし会館 砂楽〜摺ヶ浜海岸（世界唯一の天然砂むし温泉で極上のデトックス）",
    "timing": "通年（波打ち際で潮騒を聞きながら温まる唯一無二の体験）",
    "desc": "海岸から湧き出る温泉熱で温められた砂に埋まる「砂むし温泉」。浴衣を着て砂に包まれること約10〜15分。波音を聞きながら全身から汗が噴き出し、通常の温泉の約3倍〜4倍のデトックス効果と血流改善。",
    "spots": "砂むし会館 砂楽、摺ヶ浜海岸、指宿駅前足湯、指宿いわさきホテル砂むし温泉",
    "access": "JR指宿枕崎線「指宿駅」より路線バスで約5分「砂むし会館前」下車。鹿児島中央駅から特急「指宿のたまて箱」で約50分。",
    "tip": "大潮の干潮時を狙って行くと、波打ち際のすぐ近くに掘られた砂むし場でよりダイナミックな入浴が楽しめます。"
  },
  {
    "key": "ibusuki_kaimondake_view",
    "title": "2. 開聞岳〜長崎鼻・知林ヶ島（薩摩富士の円錐美と縁結びの砂州アイランド）",
    "timing": "通年（3月〜10月の干潮時に現れる知林ヶ島の砂の道ちりりんロード）",
    "desc": "標高924m、海に突き出た美しい円錐形の薩摩富士「開聞岳」。浦島太郎伝説が残る薩摩半島最南端の「長崎鼻」から望む開聞岳と東シナ海。干潮時だけ歩いて渡れる縁結びの無人島「知林ヶ島」。",
    "spots": "開聞岳（登山・ふれあい公園）、長崎鼻（竜宮神社・薩摩長崎鼻灯台）、知林ヶ島（砂州ロード・ちりりんズベル）、池田湖（イッシー伝説・大うなぎ）",
    "access": "指宿駅より車・レンタカーで約20〜30分。または路線バス運行。",
    "tip": "「ヘルシーランド露天風呂 たまて箱温泉」は、目の前に東シナ海と開聞岳が広がる日本屈指の絶景露天風呂です。"
  },
  {
    "key": "ibusuki_kurobuta_gourmet",
    "title": "3. 鹿児島黒豚しゃぶしゃぶ＆薩摩焼酎（本場さつま揚げと温たまらん丼）",
    "timing": "通年（極上の旨味と甘みを持つかごしま黒豚）",
    "desc": "サツマイモを食べて育った「かごしま黒豚」の極上しゃぶしゃぶ。指宿の温泉卵を使ったご当地グルメ「温たまらん丼」や、揚げたてサクサクのさつま揚げ。厳選された薩摩本格芋焼酎とのマリアージュ。",
    "spots": "唐船峡そうめん流し（名水百選・回転式そうめん流し発祥の地）、指宿名物温たまらん丼取扱店",
    "access": "指宿温泉街および唐船峡周辺。",
    "tip": "「唐船峡そうめん流し」は年間を通じて湧き出る冷涼な湧水で楽しむ回転式そうめん流しの元祖で、夏冬問わず大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            IBUSUKI SAND BATH GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【鹿児島・指宿温泉】天然砂むし温泉＆開聞岳パノラマ・黒豚極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            錦江湾と南国のヤシの木が揺れる「指宿（いぶすき）」。海岸の砂浜に埋もれて波音を聞きながら全身から汗を流す「砂むし温泉」。秀峰・開聞岳を望む絶景露天風呂と、本場鹿児島黒豚・極上焼酎に酔いしれる旅。
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
