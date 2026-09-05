import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【埼玉・秩父＆長瀞】長瀞ライン下り・三峯神社＆芝桜宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "国の名勝・天然記念物「長瀞の岩畳」と荒川ライン下り、関東屈指の天空パワースポット「三峯神社」の雲海、羊山公園のピンクの絨毯「芝桜の丘」、秩父名物わらじカツ丼や豚みそ丼を徹底解説。美肌温泉旅館や清流リゾートを厳選。",
  keywords: ["saitama-chichibu-nagatoro-line-kudari-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["saitama-chichibu-nagatoro-line-kudari-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for saitama-chichibu-nagatoro-line-kudari-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nagatoro_line_rocky_pavement_stay",
    "badge": "国の名勝・天然記念物の渓谷美",
    "title": "1. 長瀞ライン下り＆岩畳・宝登山（荒川の急流と畳敷きのような一枚岩）",
    "timing": "通年（春の桜並木、夏の新緑と納涼ライン下り、秋の岩畳紅葉ライトアップ、冬のぽかぽかコタツ舟）",
    "desc": "地質学の発祥の地として知られる長瀞。荒川沿いに幅約50m、長さ約600mにわたって広がる結晶片岩の巨大な岩盤「岩畳（国の名勝・天然記念物）」。伝統の木造和船に乗って豪快な水しぶきを上げながら急流と瀞（とろ）を下る「ライン下り」は爽快そのもの。宝登山ロープウェイで山頂へ登ればロウバイや梅の香りが漂います。",
    "spots": "長瀞ライン下り、長瀞岩畳、宝登山ロープウェイ・宝登山神社、阿左美冷蔵（天然氷かき氷）、月の石もみじ公園",
    "access": "秩父鉄道「長瀞駅」下車徒歩約5分。関越道「花園IC」より国道140号経由で約30分。",
    "tip": "長瀞名物の天然氷かき氷（阿左美冷蔵）は、宝登山の天然水が冬の寒さでじっくり凍った氷を使用しており、頭がキーンとしない極上の口溶けです。"
  },
  {
    "key": "chichibu_shrine_shibazakura_stay",
    "badge": "ピンクの絨毯とユネスコ無形遺産",
    "title": "2. 羊山公園「芝桜の丘」＆秩父神社（武甲山を望む花園と名工左甚五郎の彫刻）",
    "timing": "春（4月中旬〜5月上旬の芝桜まつり、新緑の初夏、12月2〜3日の秩父夜祭）",
    "desc": "秩父のシンボル・武甲山を背景に、約1万7600平方メートルの広大な丘一面に9種類・40万株以上の芝桜が咲き乱れる羊山公園「芝桜の丘」。ピンクや白、淡い青紫のパッチワークのような光景は圧巻。秩父市街中心に鎮座する「秩父神社」では、日光東照宮でも有名な左甚五郎作「子宝子育ての虎」や「つなぎの龍」の見事な彫刻を鑑賞できます。",
    "spots": "羊山公園芝桜の丘、秩父神社、秩父まつり会館、番場通り（昭和レトロ建築街）、西武秩父駅前温泉 祭の湯",
    "access": "西武秩父線「西武秩父駅」より徒歩約15〜20分。池袋駅より西武特急ラビュー（Laview）で直通最速77分。",
    "tip": "西武秩父駅直結の「祭の湯」では、露天風呂や岩盤浴、秩父名物のわらじカツ丼や豚みそ丼のフードコートが揃い、帰路の立ち寄りにも最高です。"
  },
  {
    "key": "mitsumine_shrine_cloud_sea_stay",
    "badge": "標高1100m・狼信仰の天空霊峰",
    "title": "3. 三峯神社〜雲海と気守り＆奥秩父秘湯温泉（関東最強の天空パワースポット）",
    "timing": "通年（春〜秋の早朝雲海、秋の境内紅葉、冬の厳かな雪景色）",
    "desc": "奥秩父の標高1100mの山頂に位置し、日本武尊（ヤマトタケル）が創祀したとされる古社「三峯神社」。神の使いである「狼（山犬）」が狛犬として祀られ、強い神気と生命力をもたらす「氣守り」や、拝殿前の石畳に突如現れた「龍神様」の敷石で全国から参拝者が絶えません。遥拝所から眼下に望む秩父盆地の雲海は息をのむ絶景です。",
    "spots": "三峯神社（随身門・拝殿・遥拝所・ご神木）、奥宮、大滝温泉、新木鉱泉・柴原温泉（秩父七湯の秘湯）",
    "access": "西武秩父駅より三峯神社行き急行バスで約75分。関越道花園ICより国道140号・皆野寄居有料道路経由で約100分。",
    "tip": "雨上がりで湿度が高く、晴れて冷え込んだ早朝には、遥拝所から雲海が眼下に広がる確率が非常に高くなります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            CHICHIBU & NAGATORO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【埼玉・秩父＆長瀞】長瀞ライン下り岩畳・三峯神社雲海＆羊山公園芝桜宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            都心から特急でわずか約80分、豊かな山々と清流に抱かれた埼玉のリゾート「秩父・長瀞」。荒川の渓谷美を船頭の巧みな竿さばきで下る「長瀞ライン下り」と国の天然記念物「岩畳」。標高1100mの神域に鎮座する関東屈指のパワースポット「三峯神社」の神秘的な雲海。滋味あふれる名物グルメと良質な天然温泉で心洗われる週末トリップへご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
