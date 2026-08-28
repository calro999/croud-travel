import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の秘湯】白銀の雪見露天風呂＆絶景名湯旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "静寂の雪景色と温かい名湯。山形・銀山温泉、群馬・草津温泉、北海道・登別定山渓、宮城山形・蔵王温泉など、一生に一度は浸かりたい白銀の雪見露天風呂宿を徹底解説。",
  keywords: ["winter-snow-onsen", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-snow-onsen"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-snow-onsen", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ginzan_snow",
    "title": "1. 山形・銀山温泉（ガス灯と大正ロマンが息づく雪の温泉街）",
    "timing": "雪見の見頃：12月下旬〜3月上旬",
    "desc": "銀山川の両岸に大正〜昭和初期の木造多層建築が立ち並ぶ、まるでおとぎ話のような温泉街。夕暮れ時にガス灯が灯り、白雪が舞う光景は息をのむ美しさ。川沿いの名湯宿で贅沢な雪見ステイを。",
    "spots": "銀山温泉街（能登屋旅館等の木造建築）、白銀の滝、延沢銀山遺跡、和楽足湯",
    "access": "山形新幹線「大石田駅」より路線バスまたは各旅館の送迎バスで約40分。",
    "tip": "冬の銀山温泉は全国屈指の超人気のため、数ヶ月前からの予約が必須。雪靴や防寒具をしっかり準備して出かけましょう。"
  },
  {
    "key": "kusatsu_snow",
    "title": "2. 群馬・草津温泉（湯畑の湯けむりと雪のコントラスト）",
    "timing": "雪見の見頃：12月中旬〜3月中旬",
    "desc": "日本三名泉の一つ、圧倒的な湯量を誇る草津温泉。ライトアップされた湯畑から立ち上る白い湯けむりと降り積もる雪のコントラストは圧巻。pH2前後の強酸性の名湯が冷えた体を芯から温めます。",
    "spots": "湯畑、西の河原公園大露天風呂（雪景色の中で入浴）、熱乃湯（湯もみショー）、草津温泉スキー場",
    "access": "JR特急「草津・四万」で上野駅から長野原草津口駅まで約2時間20分、接続バス約25分。",
    "tip": "西の河原公園の広大な大露天風呂での雪見入浴は格別。草津温泉スキー場でのスノーアクティビティ後の宿泊にも最適です。"
  },
  {
    "key": "noboribetsu_snow",
    "title": "3. 北海道・登別温泉＆定山渓温泉（北海道を代表する名湯と雪景色）",
    "timing": "雪見の見頃：12月上旬〜3月下旬",
    "desc": "9種類もの多彩な泉質が湧き出す登別温泉や、札幌の奥座敷・定山渓温泉。白煙を上げる地獄谷の冬景色や、渓谷美を眺める雪見露天風呂は北海道ならではのスケール感です。",
    "spots": "登別地獄谷、大湯沼、定山渓渓谷（雪灯路イベント）、登別クマ牧場",
    "access": "新千歳空港からJR特急または直行バスで登別まで約60分。札幌から定山渓まで直行バス「かっぱライナー号」で約60分。",
    "tip": "新千歳空港や札幌駅からのアクセスが良く、冬の北海道観光（雪まつり等）の拠点として極めて優秀です。"
  },
  {
    "key": "zao_snow",
    "title": "4. 山形・宮城・蔵王温泉（スノーモンスター樹氷と乳白色の美肌湯）",
    "timing": "雪見の見頃：12月下旬〜3月上旬（樹氷は1月下旬〜2月）",
    "desc": "世界的に有名なスノーモンスター「蔵王の樹氷」。ロープウェイで幻想的な樹氷ライトアップを鑑賞した後は、硫黄が香る乳白色・強酸性の天然温泉で冷え切った体を極上に解きほぐせます。",
    "spots": "蔵王ロープウェイ（樹氷鑑賞）、蔵王温泉大露天風呂（冬季休業あり・足湯充実）、蔵王温泉スキー場",
    "access": "山形新幹線「山形駅」より路線バスで蔵王温泉バスターミナルまで約45分。",
    "tip": "樹氷ナイトクルーズ（暖房付き雪上車ツアー）付きの宿泊プランがおすすめ。山形名物の玉こんにゃくや米沢牛すき焼きも絶品です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SNOW ONSON
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の秘湯】白銀の雪見露天風呂＆絶景名湯旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            しんしんと降り積もる雪の中、立ち上る湯けむりと温かい湯船。大正ロマンの木造旅館街から大自然の秘湯まで、冬だからこそ訪れたい日本の白銀絶景温泉宿をご紹介します。
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
