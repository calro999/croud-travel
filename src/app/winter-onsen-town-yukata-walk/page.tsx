import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【風情満点】冬の温泉街・浴衣で湯巡り＆街歩き宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "石畳に響く下駄の音と立ち上る湯けむり。長野・渋温泉、愛媛・道後温泉、群馬・伊香保温泉、熊本・黒川温泉など、浴衣と丹前を羽織って湯巡りや射的・スイーツ食べ歩きを楽しめる名湯街を徹底解説。",
  keywords: ["winter-onsen-town-yukata-walk", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-onsen-town-yukata-walk"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-onsen-town-yukata-walk", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shibu_onsen",
    "title": "1. 長野・信州渋温泉（石畳の小路と宿泊者限定「厄除九湯めぐり」）",
    "timing": "通年（冬の雪景色と外湯めぐりが最高）",
    "desc": "千と千尋の神隠しのモデルとも言われる木造多層建築「金具屋」が有名な渋温泉。宿泊者専用の鍵（マスターキー）を受け取り、一番湯「初湯」から九番湯「渋大湯」まで巡る「外湯めぐり」が名物です。",
    "spots": "渋温泉外湯九湯、金具屋（国登録有形文化財）、地獄谷野猿公苑、渋高薬師",
    "access": "長野駅から長野電鉄特急で湯田中駅まで約45分、バス・タクシーで約5分。",
    "tip": "手ぬぐいにスタンプを押しながら巡る九湯めぐり。すべての湯を巡って渋高薬師に参拝すると「九（苦）労を流し、満願成就」のご利益があります。"
  },
  {
    "key": "dogo_walk",
    "title": "2. 愛媛・松山道後温泉（日本最古の名湯・道後温泉本館とハイカラ通り）",
    "timing": "通年（冬の足湯めぐりとみかんスイーツ）",
    "desc": "約3000年の歴史を誇る道後温泉。2024年に全館営業再開した「道後温泉本館」や、飛鳥乃湯泉・椿の湯を湯巡りし、商店街「道後ハイカラ通り」で坊っちゃん団子やみかんジュースの蛇口を楽しめます。",
    "spots": "道後温泉本館、道後温泉別館 飛鳥乃湯泉、道後ハイカラ通り、坊っちゃんカラクリ時計、松山城",
    "access": "松山空港から空港リムジンバスで道後温泉まで直行約40分。JR松山駅から市内電車で約25分。",
    "tip": "本館前の足湯や空の散歩道からの本館ライトアップ鑑賞がおすすめ。鯛めし（東予の炊き込み・南予の生鯛）の食べ比べも人気です。"
  },
  {
    "key": "ikaho_steps",
    "title": "3. 群馬・伊香保温泉（365段の石段街と情緒あふれる黄金の湯・白銀の湯）",
    "timing": "通年（秋の河鹿橋紅葉〜冬の石段イルミ）",
    "desc": "温泉街の中心を貫く365段の石段街。石段の両脇に射的場やお土産屋、温泉まんじゅう発祥の店が並びます。茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」を堪能。",
    "spots": "伊香保石段街、河鹿橋、伊香保神社、水沢うどん街、竹久夢二伊香保記念館",
    "access": "JR高崎駅または渋川駅より関越交通バスで伊香保温泉へ約25〜40分。関越道渋川伊香保ICより車約20分。",
    "tip": "日本三大うどんの一つ「水沢うどん」をランチに味わい、石段街の足湯「岸権 辰の湯」でひと休みするのが王道コースです。"
  },
  {
    "key": "kurokawa_walk",
    "title": "4. 熊本・黒川温泉（入湯手形で巡る渓流沿いの露天風呂と冬の湯あかり）",
    "timing": "通年（冬期は竹灯籠イベント「湯あかり」開催）",
    "desc": "山あいの渓流沿いに落ち着いた木造旅館が立ち並ぶ黒川温泉。1枚の「入湯手形」で28箇所の露天風呂から好きな3箇所に入浴可能。冬の夜には川沿いに数千個の竹灯籠が灯る「湯あかり」が幻想的です。",
    "spots": "黒川温泉川端通り、湯あかり（12月〜3月開催）、べっちん館（手形販売所）、夫婦滝",
    "access": "熊本空港から車で約80分。博多駅・熊本駅から直行高速バスあり。",
    "tip": "各旅館で泉質や浴槽の趣（洞窟風呂、立ち湯、滝見風呂など）が全く異なるため、手形を使ってじっくりお気に入りを探すのが醍醐味です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ONSEN TOWN WALK
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【風情満点】冬の温泉街・浴衣で湯巡り＆街歩き宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            どこか懐かしい木造旅館、川沿いの柳並木、夜を照らすガス灯や行燈。冬の冷たい空気の中、温かい温泉に何度も浸かり、温泉街の酒蔵やレトロな甘味処を巡る情緒あふれる大人の温泉旅へ。
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
