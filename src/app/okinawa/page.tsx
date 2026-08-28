import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";

interface RakutenHotel {
  hotelNo: number;
  hotelName: string;
  hotelInformationUrl: string;
  hotelImageUrl: string;
  reviewCount: number;
  reviewAverage: number;
  hotelMinCharge: number;
  address1: string;
  address2: string;
  hotelSpecial?: string;
  access?: string;
  affiliateUrl: string;
}

interface RakutenCategoryData {
  label: string;
  query: string;
  hotels: RakutenHotel[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";

export const metadata: Metadata = {
  title: "【沖縄旅行 完全計画ガイド 2026】2泊3日・3泊4日モデルコース＆那覇・恩納村・美ら海水族館・ビーチリゾートホテル・レンタカー ｜ 旅宿クラウド",
  description:
    "沖縄旅行の計画を完全サポート！2泊3日・3泊4日の王道モデルコース、恩納村や北部の絶景ビーチリゾート、カップル・子連れプール付きホテル、那覇国際通り周辺宿からレンタカー＆雨の日観光まで、おすすめの宿泊プランまで徹底網羅。",
  keywords: [
    "沖縄", "沖縄観光", "沖縄観光モデルコース", "沖縄 2泊3日", "沖縄 3泊4日",
    "沖縄 リゾートホテル", "沖縄 ホテル プール", "沖縄 子連れ ホテル", "沖縄 カップル ホテル",
    "沖縄 雨の日", "沖縄 穴場", "那覇 ホテル", "恩納村 ホテル", "楽天トラベル"
  ],
  alternates: { canonical: "https://croud-travel.pages.dev/okinawa" },
};

function loadOkinawaData(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "all_hubs_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      const all = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return all.okinawa || {};
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

export default function OkinawaHubPage() {
  const okinawaData = loadOkinawaData();

  const faqList = [
    {
      q: "沖縄観光のおすすめ日数と王道モデルコース（2泊3日・3泊4日）は？",
      a: "沖縄本島は2泊3日または3泊4日が王道です。1日目は那覇空港到着後に国際通りやウミカジテラスを散策し那覇泊。2日目は万座毛〜古宇利島〜美ら海水族館を巡り恩納村のビーチリゾート泊。3日目はシュノーケリングやアメリカンビレッジ散策を楽しむルートが最も人気です。"
    },
    {
      q: "沖縄旅行でレンタカーは必須？車なしでも楽しめますか？",
      a: "美ら海水族館や恩納村など北部・中部を回るならレンタカーが断然便利です。車なしの場合は、那覇空港から直結の「ゆいレール」で那覇市内（国際通り・首里城）を巡るか、主要リゾートホテル直行の空港リムジンバスや観光周遊バスツアーを活用するのがおすすめです。"
    },
    {
      q: "沖縄でホテルを選ぶならどのエリア（那覇・恩納村・名護・宮古石垣）がおすすめ？",
      a: "到着日や最終日の夜遊び・グルメ・ショッピングなら「那覇・国際通りエリア」、エメラルドグリーンの海とプライベートビーチ、大型プールを満喫するなら「恩納村・西海岸リゾートエリア」が最適です。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/okinawa" className="hover:text-teal-800 transition">沖縄県</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">沖縄旅行 完全ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-950 via-teal-900 to-emerald-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-cyan-400 text-cyan-950 px-3.5 py-1 rounded-full uppercase shadow">
            沖縄観光 完全計画ハブ 🌺
          </span>
          <span className="text-xs font-bold text-cyan-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            2泊3日・3泊4日モデルコース
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめホテル・温泉旅館
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【沖縄旅行 完全ガイド】<br />
          <span className="bg-gradient-to-r from-cyan-200 via-teal-100 to-amber-100 bg-clip-text text-transparent">
            青の絶景ビーチ・リゾートホテル・美ら海・王道モデルコース
          </span>
        </h1>

        <p className="text-cyan-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          エメラルドグリーンの海と琉球文化が息づく沖縄。「2泊3日の効率的な回り方は？」「ビーチリゾートホテルの選び方は？」「子連れプールや雨の日スポットは？」を徹底深掘りし、おすすめの宿泊施設情報で繋ぐ総合ガイド。
        </p>
      </section>

      {/* モデルコースセクション */}
      <section className="bg-white border border-cyan-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-cyan-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            沖縄観光 モデルコース 🌴
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">
            沖縄観光モデルコース ｜ 2泊3日＆3泊4日で巡る絶景美ら海ドライブ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 bg-cyan-50/50 rounded-2xl border border-cyan-200 space-y-2">
            <h3 className="text-sm font-bold text-cyan-950">【1日目・2日目：那覇〜西海岸〜美ら海水族館】</h3>
            <p className="text-slate-700 leading-relaxed">
              那覇空港到着後レンタカーを借り、ウミカジテラスで海風ランチ。58号線を北上して万座毛の絶景を望み、恩納村のビーチリゾートへ。翌日は古宇利大橋の青い海を渡り美ら海水族館へ。
            </p>
          </div>
          <div className="p-5 bg-teal-50/50 rounded-2xl border border-teal-200 space-y-2">
            <h3 className="text-sm font-bold text-teal-950">【3日目：アメリカンビレッジ〜国際通り〜帰路】</h3>
            <p className="text-slate-700 leading-relaxed">
              異国情緒漂う北谷アメリカンビレッジで海沿いカフェ＆ショッピング。那覇へ戻り国際通りで沖縄そばやステーキ、紅芋タルト・ちんすこうのお土産を購入して空港へ。
            </p>
          </div>
        </div>
      </section>

      {/* 楽天API直接取得ホテル表示 */}
      {okinawaData.resort_hotel && (
        <section className="space-y-6 bg-white border border-cyan-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-cyan-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">
              沖縄 絶景ビーチリゾートホテル（おすすめ厳選）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {okinawaData.resort_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-cyan-900/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-cyan-700 text-white px-2.5 py-0.5 rounded-full">恩納村・リゾート</span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">¥{Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                      <span>{hotel.address1} {hotel.address2.slice(0, 8)}</span>
                      {hotel.reviewAverage > 0 && <span className="text-amber-600 font-extrabold">⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)</span>}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-slate-900 line-clamp-2">{hotel.hotelName}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{hotel.hotelSpecial || hotel.access}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-500 hover:to-teal-600 rounded-xl shadow transition">
                    ✈️ 楽天トラベルで空室・プランを見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white border border-cyan-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 flex items-center gap-2">
          <span>❓</span> <span>沖縄旅行のプロが回答！よくある質問（FAQ）</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-cyan-50/40 border border-cyan-900/10 space-y-2">
              <h3 className="text-sm font-bold text-cyan-950 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
