import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kusatsu-vs-ikaho-onsen-comparison/" },
  title: "草津温泉 vs 伊香保温泉 どっちがいい？：泉質・街歩き・アクセス・宿を7項目で徹底比較",
  description: "草津温泉と伊香保温泉、どっちに行くべきか7項目で本気比較。泉質（酸性硫黄泉 vs 黄金の湯）、街歩き（湯畑 vs 365段石段）、アクセス、宿泊費、食べ歩きまで。",
  keywords: ["草津温泉", "vs", "伊香保温泉", "どっちがいい？", "泉質", "街歩き", "アクセス"],
  openGraph: {
    title: "草津温泉 vs 伊香保温泉 どっちがいい？：泉質・街歩き・アクセス・宿を7項目で徹底比較",
    description: "草津温泉と伊香保温泉、どっちに行くべきか7項目で本気比較。泉質（酸性硫黄泉 vs 黄金の湯）、街歩き（湯畑 vs 365段石段）、アクセス、宿泊費、食べ歩きまで。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "草津温泉 vs 伊香保温泉 どっちがいい？：泉質・街歩き・アクセス・宿を7項目で徹底比較",
    description: "草津温泉と伊香保温泉、どっちに行くべきか7項目で本気比較。泉質（酸性硫黄泉 vs 黄金の湯）、街歩き（湯畑 vs 365段石段）、アクセス、宿泊費、食べ歩きまで。",
  }
};

interface Hotel {
  hotelName: string;
  hotelSpecial: string;
  hotelImageUrl: string;
  hotelMinCharge: number;
  affiliateUrl: string;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kusatsu-vs-ikaho-onsen-comparison"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels", e);
  }
  return [];
}

export default function KusatsuVsIkahoPage() {
  const hotels = loadHotels();


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【草津温泉 vs 伊香保温泉 どっちがいい？】泉質・街歩き・アクセス・宿を7項目で徹底比較",
    "description": "草津温泉と伊香保温泉、どっちに行くべきか7項目で本気比較。泉質（酸性硫黄泉 vs 黄金の湯）、街歩き（湯畑 vs 365段石段）、アクセス、宿泊費、食べ歩きまで。",
    "url": "https://croud-travel.pages.dev/kusatsu-vs-ikaho-onsen-comparison/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【草津温泉 vs 伊香保温泉 どっちがいい？】泉質・街歩き・アクセス・宿を7項目で徹底比較", "item": "https://croud-travel.pages.dev/kusatsu-vs-ikaho-onsen-comparison/" }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-slate-800">
      <header className="mb-12">
        <h1 className="font-journal-serif text-3xl md:text-5xl font-bold text-emerald-900 leading-tight mb-6">「草津温泉 vs 伊香保温泉 どっちがいい？」<br className="hidden md:block"/>泉質・街歩き・アクセス・宿を7項目で徹底比較</h1>
        <p className="text-lg text-slate-600 leading-relaxed bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
          群馬県が誇る日本屈指の二大名湯、「草津温泉」と「伊香保温泉」。
          週末の温泉旅行を計画する際、「ぶっちゃけどっちがいいの？」と迷う方も多いはず。
          実際に両方を何度も訪れている筆者が、泉質、街歩きの楽しさ、交通アクセス、費用の相場など、7つの項目で徹底的に比較してみました！
        </p>
      </header>

      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          1. 泉質の比較：刺激的な草津か、芯から温まる伊香保か
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-amber-600 mb-3">♨ 草津温泉：圧倒的な湯力</h3>
            <p className="text-slate-600">
              日本一の自然湧出量を誇り、pH2.1の「強酸性」が特徴。「恋の病以外効かない病はない」と言われるほどの殺菌力で、ピリッとした肌触りがたまりません。
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-amber-600 mb-3">♨ 伊香保温泉：2種類の源泉</h3>
            <p className="text-slate-600">
              鉄分を含み茶褐色になる「黄金の湯」と、無色透明でマイルドな「白銀の湯」。特に黄金の湯は、子宝の湯としても知られ、じんわりと身体の芯まで温まります。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          2. 街歩きの魅力：シンボルを囲むか、登るか
        </h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            <strong>草津温泉</strong>といえば、何と言っても町の中心にある「湯畑」。もうもうと上がる湯けむりと、硫黄の香りが温泉情緒を掻き立てます。夜のライトアップは幻想的で、浴衣姿で周辺を散策するのが最高です。
          </p>
          <p>
            一方、<strong>伊香保温泉</strong>のシンボルは「365段の石段」。石段の両脇にはレトロな射的場や土産物屋、お饅頭屋さんが連なり、昭和レトロな雰囲気が漂います。頂上の伊香保神社まで登り切ったときの達成感もひとしお。
          </p>
        </div>
      </section>

      <section className="mb-14 bg-teal-50 rounded-3xl p-6 md:p-8">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-teal-900 mb-6">
          3. アクセスと交通費：東京からの行きやすさ
        </h2>
        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-2xl">
            <h4 className="font-bold text-teal-800 mb-2">🚌 草津温泉へのアクセス</h4>
            <p className="text-sm text-slate-600">
              直行バスで約3時間半（片道約3,600円）。電車よりバスが安くて乗り換えなしで便利。<br/>
              詳細は<Link href="/tokyo-kusatsu-onsen-highway-bus-guide" className="text-emerald-600 underline hover:text-emerald-500">東京から草津温泉への高速バスガイド</Link>をチェック！
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl">
            <h4 className="font-bold text-teal-800 mb-2">🚌 伊香保温泉へのアクセス</h4>
            <p className="text-sm text-slate-600">
              東京方面から高速バスで約2時間半（片道約2,600円）。草津よりも1時間ほど近く、交通費も安く済みます。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          4〜6. 宿泊費・食べ歩き・外湯をサクッと比較
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-100 text-emerald-900">
                <th className="p-4 rounded-tl-2xl">項目</th>
                <th className="p-4">草津温泉</th>
                <th className="p-4 rounded-tr-2xl">伊香保温泉</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-emerald-50">
                <td className="p-4 font-bold text-slate-700">宿泊費相場</td>
                <td className="p-4 text-slate-600">12,000円〜40,000円<br/><span className="text-xs">※人気宿は早めの予約必須</span></td>
                <td className="p-4 text-slate-600">10,000円〜35,000円<br/><span className="text-xs">※比較的リーズナブルな宿も多め</span></td>
              </tr>
              <tr className="border-b border-emerald-50">
                <td className="p-4 font-bold text-slate-700">食べ歩き</td>
                <td className="p-4 text-slate-600">温泉まんじゅう（約150円）、焼き鳥など</td>
                <td className="p-4 text-slate-600">水沢うどん（約1,200円）、湯の花まんじゅう発祥</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-700">日帰り外湯</td>
                <td className="p-4 text-slate-600">御座之湯（600円）、西の河原露天風呂（600円）</td>
                <td className="p-4 text-slate-600">石段の湯（410円）、伊香保露天風呂（450円）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          7. 結論：結局どっちがおすすめ？
        </h2>
        <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200">
          <p className="text-slate-700 mb-4">
            <strong>圧倒的な温泉力と活気ある温泉街を楽しみたいなら「草津温泉」。</strong><br/>
            強酸性のお湯に浸かり、湯畑の周りを浴衣で歩く王道の温泉旅行を求める方におすすめです。
          </p>
          <p className="text-slate-700">
            <strong>レトロな雰囲気の中、サクッと手軽に癒やされたいなら「伊香保温泉」。</strong><br/>
            都心から近く、石段街での射的や食べ歩きなど、ノスタルジックな散歩を楽しみたい方にぴったりです。
          </p>
        </div>
      </section>

      
      {/* 季節ごとの見どころ比較 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          季節別の選び方：春・夏・秋・冬のベストシーズン
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-emerald-900 mb-2">🌿 春・夏の避暑なら草津温泉</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              草津は標高1,200mに位置するため、真夏でも最高気温が25度前後の圧倒的な涼しさ。都会の猛暑を逃れて湯畑周辺を夕涼み散歩する体験は格別です。
            </p>
            <p className="text-xs text-slate-500">※夜間は夏でも肌寒くなるため、薄手の羽織りものが1枚あると安心です。</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-amber-800 mb-2">🍁 秋の紅葉ライトアップなら伊香保温泉</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              伊香保の「河鹿橋」は全国屈指の紅葉名所。朱塗りの太鼓橋と深紅のモミジが夜間ライトアップされる光景は息をのむ美しさです。石段街から徒歩10分でアクセス可能。
            </p>
            <p className="text-xs text-slate-500">※見頃は例年10月下旬〜11月中旬。周辺の宿は早くから満室になるため早めの予約が鉄則。</p>
          </div>
        </div>
      </section>

      {/* 現地で使える節約＆賢い回り方 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          損しないための現地節約ハック＆予約のコツ
        </h2>
        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4">
          <div className="flex items-start gap-3">
            <span className="bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">草津</span>
            <p className="text-sm text-slate-700">
              「三湯めぐり手形（大人2,100円）」を購入すると、御座之湯・大滝乃湯・西の河原露天風呂の3大外湯に個別入場するより400円お得になります。有効期限がないため次回訪問時にも利用可能。
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-amber-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">伊香保</span>
            <p className="text-sm text-slate-700">
              水沢うどん街の店舗は夕方16時には閉店する店が多いため、ランチタイム（11:30〜13:30）の訪問が必須。石段街の無料足湯「辰の湯」タオル持参でサクッと楽しめます。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          草津温泉 vs 伊香保温泉 よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 電車とバスだけで行くならどっちが楽？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              所要時間の手軽さなら伊香保温泉（新宿・東京から高速バスで約2時間30分）。乗り換えなしの直行高速バスが充実している点では草津温泉（バスタ新宿・東京駅から直行便で約3時間30分〜4時間）も非常に快適です。どちらも車なしで完全に回ることができます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. カップルや女子旅で行くならどちらがおすすめ？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              石段街のレトロな雰囲気や射的、水沢うどんのランチ、おしゃれなカフェ巡りを楽しみたいなら伊香保温泉がおすすめ。夜の湯畑ライトアップや圧倒的な硫黄泉の湯浴み、外湯巡りを楽しみたいなら草津温泉が最適です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 1泊2日で草津と伊香保を両方ハシゴできますか？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              車であれば約1時間〜1時間20分で移動可能なため、1日目昼に伊香保石段街を散策し、夕方に草津温泉の宿にチェックインするハシゴ旅行も大人気です。公共交通機関の場合は高崎駅・渋川駅経由で約2時間〜2時間半でアクセスできます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 冬場（12月〜3月）にノーマルタイヤの車で行けますか？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              草津温泉は標高約1,200mの豪雪地帯に位置するため、冬期はスタッドレスタイヤまたはチェーンが絶対に必須です。ノーマルタイヤの場合は都内からの直行高速バスを利用するのが最も安全で確実です。
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"草津温泉と伊香保温泉、電車とバスだけで行くならどっちが楽？","acceptedAnswer":{"@type":"Answer","text":"所要時間の手軽さなら伊香保温泉（新宿・東京から高速バスで約2時間30分）、乗り換えなしの直行高速バスが充実している点では草津温泉（バスタ新宿・東京駅から直行便で約3時間30分〜4時間）も非常に快適です。どちらも車なしで完全に回ることができます。"}},{"@type":"Question","name":"カップルや女子旅で行くならどちらがおすすめですか？","acceptedAnswer":{"@type":"Answer","text":"石段街のレトロな雰囲気や射的、水沢うどんのランチ、おしゃれなカフェ巡りを楽しみたいなら伊香保温泉がおすすめ。夜の湯畑ライトアップや圧倒的な硫黄泉の湯浴み、外湯巡りを楽しみたいなら草津温泉が最適です。"}},{"@type":"Question","name":"草津と伊香保、1泊2日で両方ハシゴすることは可能ですか？","acceptedAnswer":{"@type":"Answer","text":"レンタカーや自家用車であれば約1時間〜1時間20分で移動可能なため、1日目昼に伊香保石段街を散策し、夕方に草津温泉の宿にチェックインするハシゴ旅行も大人気です。公共交通機関の場合は高崎駅・渋川駅経由で約2時間〜2時間半で移動できます。"}},{"@type":"Question","name":"冬場（12月〜3月）にノーマルタイヤの車で行けますか？","acceptedAnswer":{"@type":"Answer","text":"草津温泉は標高約1,200mの豪雪地帯に位置するため、冬期はスタッドレスタイヤまたはチェーンが絶対に必須です。ノーマルタイヤの場合は都内からの直行高速バスを利用するのが最も安全で確実です。伊香保温泉も降雪・凍結リスクがあるため冬用タイヤを推奨します。"}}]}) }}
        />
      </section>
  
      {hotels.length > 0 && (
        <section className="mb-14">
          <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6">
            草津・伊香保のおすすめ温泉宿
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" loading="lazy" decoding="async" />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg mb-2 text-slate-800 line-clamp-2">{hotel.hotelName}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-3 flex-grow">{hotel.hotelSpecial}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                    <span className="text-emerald-700 font-bold">
                      {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "価格未定"}
                    </span>
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded-full transition-colors font-medium"
                    >
                      詳細を見る
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
        

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と泉質・街歩き・アクセス・宿を7項目で徹底比較の旅ノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「泉質・街歩き・アクセス・宿を7項目で徹底比較」を効率よく巡るコツは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 草津温泉 vs 伊香保温泉 どっちがいい？：泉質・街歩き・アクセス・宿を7項目で徹底比較エリアでは、「草津温泉　湯畑展望露天の宿　ぬ志勇旅館（ぬしゆうりょかん）」（楽天評価★4.39・クチコミ567件、所在地：群馬県吾妻郡草津町446）をはじめとする宿を拠点にし、最寄り駅（長野原草津口）やアクセス条件（長野原草津口駅から草津温泉行きバスで約２０分）に合わせて午前中に周辺観光名所を巡り、15時のチェックイン後に温泉や夕食会席を堪能するスケジュールが最も効率的です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 事前準備や持ち物で注意すべきポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 宿泊予約時は最安料金目安（例：「伊香保温泉　大衆旅館　ふくぜん」は1名あたり¥6,400〜）や駐車場条件（有り　１４台　無料　予約不要）を事前に確認しましょう。連休や紅葉・年末年始シーズンは早期に満室となるため、楽天トラベルの早期割引プランやクーポンの活用がおすすめです。
              </p>
            </details>
          </div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 草津温泉 vs 伊香保温泉 どっちがいい？：泉質・街歩き・アクセス・宿を7項目で徹底比較：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「草津温泉 vs 伊香保温泉 どっちがいい？：泉質・街歩き・アクセス・宿を7項目で徹底比較」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 草津温泉　湯畑展望露天の宿　ぬ志勇旅館（ぬしゆうりょかん）</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町446</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有り　１４台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.39（567件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108587%2F108587.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 草津温泉　中村屋旅館＜群馬県＞</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町草津98</td>
                <td className="p-3 text-stone-600">■JR吾妻線■長野原草津口駅下車→草津温泉行きバスで20分→草津温泉バ</td>
                <td className="p-3 text-stone-600">湯畑観光駐車場1階　ご来館時に当日15時〜翌日10時までの駐車サービス券をお渡ししております。</td>
                <td className="p-3 font-bold text-amber-600">★4.74（593件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31675%2F31675.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 草津温泉　尻焼き風呂の桐島屋旅館</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町大字草津541 桐島屋旅館</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有り　12台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.27（187件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,145〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2487%2F2487.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 伊香保温泉　大衆旅館　ふくぜん</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保396-1</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">旅館前駐車場有り75台　無料　駐車スペースが無い場合は大変お手数ですがフロントまでお申し付けください</td>
                <td className="p-3 font-bold text-amber-600">★3.92（2925件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7006%2F7006.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 伊香保温泉　旅館　さくらい</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保210-2</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">有り　８０台　無料　予約不要　チェックイン前ご利用可能</td>
                <td className="p-3 font-bold text-amber-600">★4.27（1221件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38692%2F38692.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 伊香保温泉　森秋旅館</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保60</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">有（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.26（2256件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17741%2F17741.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　湯畑展望露天の宿　ぬ志勇旅館（ぬしゆうりょかん）</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　ゆばたけてんぼうろてんのやど　ぬしゆうりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108587/108587_kan.jpg" alt="草津温泉　湯畑展望露天の宿　ぬ志勇旅館（ぬしゆうりょかん） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯畑が望める源泉掛け流し露天風呂が自慢。草津でも名湯といわれ１０軒の宿しか引いていない「白旗の湯」をご堪能頂けます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町446 ／ 最寄り駅：長野原草津口 ／ 交通案内：長野原草津口駅から草津温泉行きバスで約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１４台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.42 ／ 立地 ★4.48 ／ 部屋 ★4.14 ／ 設備 ★4.02 ／ 風呂 ★4.53 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「美味しい食事とスタッフの優しさに和むご飯が美味しいスタッフさんも、優しくて和みましたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-10-08 00:46:46投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　中村屋旅館＜群馬県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　なかむらやりょかん＜ぐんまけん＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31675/31675_room.jpg" alt="草津温泉　中村屋旅館＜群馬県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2024シルバーアワード受賞☆看板猫のなかにゃんずがお出迎え！/湯畑まで30秒♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町草津98 ／ 最寄り駅：主要駅 ／ 交通案内：■JR吾妻線■長野原草津口駅下車→草津温泉行きバスで20分→草津温泉バスターミナルより徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>湯畑観光駐車場1階　ご来館時に当日15時〜翌日10時までの駐車サービス券をお渡ししております。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.79 ／ 立地 ★4.74 ／ 部屋 ★4.42 ／ 設備 ★4.48 ／ 風呂 ★4.75 ／ 食事 ★4.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/31675?reviewId=33123479672627　2026-10-09 14:33:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　尻焼き風呂の桐島屋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　しりやきぶろの　きりしまやりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,145〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2487/2487_heya.jpg" alt="草津温泉　尻焼き風呂の桐島屋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯畑まで徒歩3分！明治時代から続く老舗旅館。100%源泉かけ流しの尻焼き風呂。貸切風呂無料！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町大字草津541 桐島屋旅館 ／ 最寄り駅：長野原草津口 ／ 交通案内：関越道渋川伊香保ICより車で1時間半 or JR長野原草津口駅よりJRバスで草津温泉バスターミナル駅まで約25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　12台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.36 ／ 立地 ★4.23 ／ 部屋 ★4.23 ／ 設備 ★4.05 ／ 風呂 ★4.64</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉は最高、朝食も程よい満足感温泉は横綱でした。朝食も程よい感じでした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voic…　2026-09-21 20:20:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　大衆旅館　ふくぜん</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　たいしゅうりょかん　りょかんふくぜん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7006/7006_war.jpg" alt="伊香保温泉　大衆旅館　ふくぜん 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【部屋食で周りを気にせずのんびりお食事できるプラン多数あり】人気の露天風呂付き客室もオススメ！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保396-1 ／ 最寄り駅：渋川 ／ 交通案内：関越自動車道の渋川伊香保ICより伊香保温泉方面へやく9km。高崎駅・前橋駅からも近く車で約40分程度で来れちゃいます♪</p>
                  <p><strong>【駐車場・マイカー利用】</strong>旅館前駐車場有り75台　無料　駐車スペースが無い場合は大変お手数ですがフロントまでお申し付けください</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事も美味しく、子連れへの対応が温かい食事が良かったです。子ども向けの部屋があって手厚いおもてなしでした。子どもが部屋を汚してしまいましたが嫌な顔せず対応してくれました。また行きたいで…　2026-08-24 17:05:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　旅館　さくらい</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　りょかん　さくらい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38692/38692_k1.jpg" alt="伊香保温泉　旅館　さくらい 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>喧騒を離れた小宿。4名まで夕食お部屋出し。小ぶりながら上州の山々を一望する展望露天風呂</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保210-2 ／ 最寄り駅：渋川 ／ 交通案内：JR上越線　渋川駅より伊香保温泉行きバス、又は車で２０分。関越自動車道 渋川伊香保ＩＣより３０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８０台　無料　予約不要　チェックイン前ご利用可能</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.3 ／ 立地 ★4.13 ／ 部屋 ★4.4 ／ 設備 ★4.22 ／ 風呂 ★4.31 ／ 食事 ★4.42</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ひとり旅にやさしい伊香保で泊まってみたかった旅館のひとつ。旅館前の駐車場は一台ぶんのスペースが狭め。ひとり旅、ほったらかしプランは嬉しい。貸し切り風呂が多いお宿だからか、大浴場は2回入って2回とも…　2026-10-07 15:53:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　森秋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　もりあきりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17741/17741_rote.jpg" alt="伊香保温泉　森秋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★名湯「黄金の湯」源泉掛け流しが自慢の宿♪ ★観光名所「石段街」まで徒歩３分♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保60 ／ 最寄り駅：渋川 ／ 交通案内：ＪＲ渋川駅下車バスで25分！新宿から高速バスで2時間半！伊香保の名物石段街から徒歩３分と好立地♪散策に抜群の好立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（無料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「石段への好立地とスタッフの温かいおもてなし伊香保温泉の石段までのアクセスが近く初めての伊香保温泉観光を満喫出来ました。お料理も美味しくて何よりスタッフの方のおもてなしは素晴らしかったです。リピ…　2026-08-21 19:19:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
