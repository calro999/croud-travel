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
