import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【草津温泉 vs 伊香保温泉 どっちがいい？】泉質・街歩き・アクセス・宿を7項目で徹底比較",
  description: "草津温泉と伊香保温泉、どっちに行くべきか7項目で本気比較。泉質（酸性硫黄泉 vs 黄金の湯）、街歩き（湯畑 vs 365段石段）、アクセス、宿泊費、食べ歩きまで。",
  keywords: ["kusatsu-vs-ikaho-onsen-comparison", "草津温泉", "伊香保温泉", "比較", "どっち", "違い", "おすすめ"],
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

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-slate-800">
      <header className="mb-12">
        <h1 className="font-journal-serif text-3xl md:text-5xl font-bold text-emerald-900 leading-tight mb-6">
          【草津温泉 vs 伊香保温泉 どっちがいい？】<br className="hidden md:block"/>泉質・街歩き・アクセス・宿を7項目で徹底比較
        </h1>
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
                  <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
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
    </main>
  );
}
