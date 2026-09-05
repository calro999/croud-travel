import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・諏訪湖＆諏訪大社】四社まいり・片倉館千人風呂＆地酒宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本最古の神社の一つ「信濃國一之宮 諏訪大社（上社・下社四社）」、映画のモデルとも言われる「諏訪湖」の絶景パノラマ、重要文化財「片倉館」の千人風呂、甲州街道沿いの「諏訪五蔵」酒蔵めぐりを徹底解説。湖畔温泉ホテルや老舗旅館を厳選。",
  keywords: ["nagano-suwa-lake-onbashira-shrine-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-suwa-lake-onbashira-shrine-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-suwa-lake-onbashira-shrine-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "suwa_taisha_four_shrines_stay",
    "badge": "全国一万有余の諏訪神社の総本社",
    "title": "1. 諏訪大社「四社まいり」＆御柱（上社本宮・前宮、下社秋宮・春宮の神域巡礼）",
    "timing": "通年（春の桜、夏の神楽、秋の紅葉、冬の御神渡り（おみわたり）神事）",
    "desc": "日本最古の神社の一つに数えられる信濃國一之宮「諏訪大社」。諏訪湖の南側に上社（本宮・前宮）、北側に下社（秋宮・春宮）の二社四宮が鎮座します。本殿を持たず背後の山や神木をご神体とする古代信仰の姿を今に残し、四隅にそびえる巨大な「御柱（おんばしら）」の迫力は圧巻。四社すべてを巡拝すると記念品が授与される「四社まいり」が人気です。",
    "spots": "諏訪大社上社本宮・前宮、諏訪大社下社秋宮・春宮、万治の石仏、御柱館、北澤美術館",
    "access": "上社本宮へはJR茅野駅よりバス約15分。下社秋宮・春宮へはJR下諏訪駅より徒歩約10〜15分。中央道「諏訪IC」より約10分。",
    "tip": "下社春宮のすぐ近くにある「万治の石仏」は、時計回りに3回まわりながら願い事を唱えると叶うと言われるユニークなパワースポットです。"
  },
  {
    "key": "suwa_lake_fireworks_geyser_stay",
    "badge": "湖畔の絶景と国指定重要文化財の湯",
    "title": "2. 諏訪湖畔＆片倉館「千人風呂」・諏訪湖間欠泉センター（大正ロマンの深風呂）",
    "timing": "通年（8月15日の諏訪湖祭湖上花火大会、夏の毎夜サマーナイト花火、冬のワカサギ釣り）",
    "desc": "周囲約16km、四季折々の表情を見せる諏訪湖。湖畔に建つ「片倉館」は、製糸王・片倉財閥が昭和3年に建設した国指定重要文化財の温泉保養施設。ステンドグラスや彫刻に囲まれた大浴場「千人風呂」は深さ1.1mあり、底に敷き詰められた玉砂利が足裏を心地よく刺激します。湖畔公園の間欠泉や足湯、遊覧船クルーズも楽しめます。",
    "spots": "片倉館（重要文化財・千人風呂）、諏訪湖間欠泉センター、諏訪湖足湯、諏訪湖遊覧船（スワン号）、立石公園（君の名は聖地パノラマ）",
    "access": "JR中央本線「上諏訪駅」下車徒歩約5〜8分。中央道「諏訪IC」より約15分。",
    "tip": "高台にある「立石公園」からは諏訪湖全体とアルプスの山並みが一望でき、夕暮れのグラデーションは映画のワンシーンそのものです。"
  },
  {
    "key": "suwa_five_sake_breweries_stay",
    "badge": "甲州街道沿い500mに並ぶ銘醸蔵",
    "title": "3. 諏訪五蔵「酒蔵めぐり」（真澄・本金・横笛・麗人・舞姫）＆信州サーモン・わかさぎ",
    "timing": "通年（春〜冬の酒蔵飲み歩き、秋のひやおろし、冬の新酒しぼりたて）",
    "desc": "霧ヶ峰高原からの清らかな伏流水と良質な酒米に恵まれた上諏訪の甲州街道沿い。わずか500mの間に「真澄」「本金」「横笛」「麗人」「舞姫」の5軒の名酒蔵が立ち並ぶ奇跡の酒蔵ストリート。「極楽セット」を購入すると特製グラスとお猪口バッグを手に各蔵の自慢の地酒を試飲して歩けます。夕食は諏訪湖名物のわかさぎ天ぷらや信州サーモンに舌鼓。",
    "spots": "諏訪五蔵（宮坂醸造・酒ぬのや本金酒造・伊東酒造・麗人酒造・舞姫）、高島城（諏訪の浮城）、くらすわ（養命酒直営レストラン）",
    "access": "JR上諏訪駅より徒歩約5〜10分。徒歩で無理なく5蔵を巡回可能。",
    "tip": "各蔵の営業時間は夕方17〜18時頃までのため、お昼過ぎから夕方にかけてゆっくり時間を取って巡るのがおすすめです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SUWA LAKE & TAISHA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・諏訪湖＆諏訪大社・上諏訪】諏訪大社四社まいり・片倉館千人風呂＆五蔵酒蔵宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            諏訪湖を挟んで鎮座する日本屈指の古社「諏訪大社」四社（本宮・前宮・秋宮・春宮）。勇壮な御柱祭の熱気と七年に一度の神話が息づく地。湖畔に湧き出る豊富な湯量を誇る「上諏訪温泉」、大正ロマンあふれる千人風呂「片倉館」。そして街道沿いにわずか500mの間に名酒蔵が並ぶ「諏訪五蔵」。信州の大自然と歴史ロマンに酔いしれる諏訪ステイへご案内します。
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
