import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kusatsu-vs-ikaho-onsen-comparison/" },
  title: "【草津温泉 vs 伊香保温泉 どっちがいい？】泉質・街歩き・アクセス・宿を7項目で徹底比較",
  description: "草津温泉と伊香保温泉、どっちに行くべきか7項目で本気比較。泉質（酸性硫黄泉 vs 黄金の湯）、街歩き（湯畑 vs 365段石段）、アクセス、宿泊費、食べ歩きまで。",
  keywords: ["草津温泉", "vs", "伊香保温泉", "どっちがいい？", "泉質", "街歩き", "アクセス"],
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
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/nagano"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/iwate"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岩手県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
