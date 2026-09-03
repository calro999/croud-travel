import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata: Metadata = {
  title: "【由布院 vs 別府 どっちに泊まる？】温泉の泉質・宿のタイプ・観光スポット・費用を完全比較 ｜ 日本全国・旅宿クラウド",
  description: "由布院と別府、大分の温泉二大巨頭はどっちに泊まるべき？由布院（おしゃれな隠れ家宿＆金鱗湖朝霧）と別府（地獄めぐり＆砂湯＆とり天）を温泉の泉質・宿のタイプ・グルメ・費用で徹底比較。「1泊ずつハシゴ」プランも紹介。",
  keywords: ["yufuin-vs-beppu-which-stay", "由布院", "別府", "大分", "温泉", "比較", "観光", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yufuin-vs-beppu-which-stay"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for yufuin-vs-beppu-which-stay", e);
  }
  return [];
}

export default function YufuinVsBeppuPage() {
  const hotels = loadHotels();

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 md:p-14 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-10 text-[250px] leading-none pointer-events-none">♨️</div>
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            インスタ映え派 vs 温泉ガチ勢で推しが完全に割れる2つの温泉地
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight">
            【由布院 vs 別府 どっちに泊まる？】<br className="hidden md:block"/>温泉の泉質・宿のタイプ・観光スポット・費用を完全比較
          </h1>
          <p className="text-sm md:text-base font-medium text-emerald-50 max-w-2xl leading-relaxed">
            大分が誇る温泉二大巨頭、「由布院」と「別府」。距離は近いのに、実は雰囲気も楽しみ方も全く違うんです。<br />
            「どっちに泊まるべき？」と悩むあなたのために、泉質から宿のタイプ、グルメ、費用まで徹底比較しました。
          </p>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-journal-serif border-b-4 border-emerald-500 inline-block pb-2">
          ① 雰囲気の比較：あなたはどっち派？
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">🌿</span>由布院：おしゃれ＆静寂
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              由布院は、メインストリート「湯の坪街道」に可愛らしい雑貨屋さんやおしゃれなカフェが立ち並び、女子旅やカップルに大人気。
              早朝には金鱗湖に朝霧がかかる幻想的な景色が楽しめます。「静かにおこもりステイ」を満喫したいなら圧倒的に由布院。
            </p>
            <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
              <li>ターゲット：女子旅、カップル</li>
              <li>キーワード：おしゃれ、カフェ巡り、自然、静寂</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-amber-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">👹</span>別府：ディープ＆レトロ
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              迫力満点の「地獄めぐり」や、湯けむりが立ち上る鉄輪温泉の昭和レトロな路地裏。別府はまさに温泉マニアのためのパラダイス。
              街全体が活気に溢れており、「とにかく色んな温泉に入りまくりたい！」というガチ勢にたまりません。
            </p>
            <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
              <li>ターゲット：温泉好き、家族連れ、一人旅</li>
              <li>キーワード：地獄めぐり、湯けむり、レトロ、活気</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-journal-serif border-b-4 border-emerald-500 inline-block pb-2">
          ② 泉質・温泉体験の違い
        </h2>
        <div className="bg-emerald-50 rounded-3xl p-6 md:p-10 border border-emerald-100 space-y-6">
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2 border-l-4 border-emerald-500 pl-3">由布院：肌にやさしい「美人の湯」</h4>
            <p className="text-gray-700">
              刺激が少なく、とろりとした肌触りの単純温泉がメイン。湯上がりは肌がすべすべになると評判で、長湯できるのが魅力。おこもり宿の部屋付き露天風呂でじっくり浸かるスタイルが主流です。
            </p>
          </div>
          <hr className="border-emerald-200" />
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2 border-l-4 border-amber-500 pl-3">別府：世界屈指のバリエーション</h4>
            <p className="text-gray-700">
              源泉数、湧出量ともに日本一。なんと砂湯、泥湯、蒸し湯など、地球上の温泉の泉質11種類のうち10種類が揃っています。「温泉のテーマパーク」のように、様々な湯をハシゴできるのが醍醐味。
            </p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-journal-serif border-b-4 border-emerald-500 inline-block pb-2">
          ③ 宿の相場とグルメ比較
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center bg-gray-800 text-white py-3 rounded-full">由布院の相場・グルメ</h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h4 className="font-bold text-gray-800 mb-2 text-emerald-600">宿のタイプ・予算</h4>
              <p className="text-gray-600 mb-4">
                1日5組限定など、プライベート感を重視した離れの宿が多いです。<br/>
                <span className="font-bold text-gray-800">相場：25,000円〜60,000円 /泊</span>
              </p>
              <h4 className="font-bold text-gray-800 mb-2 text-emerald-600">名物グルメ</h4>
              <ul className="text-gray-600 space-y-2">
                <li>・由布まぶし（豊後牛・地鶏）：約2,500円</li>
                <li>・B-speak Pロール：420円（カット）</li>
                <li>・金鱗湖プリン：380円</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center bg-gray-800 text-white py-3 rounded-full">別府の相場・グルメ</h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h4 className="font-bold text-gray-800 mb-2 text-amber-600">宿のタイプ・予算</h4>
              <p className="text-gray-600 mb-4">
                地獄蒸しを楽しめる鉄輪の湯治民宿から、大型の温泉ホテルまで幅広い選択肢があります。<br/>
                <span className="font-bold text-gray-800">相場：6,000円〜（民宿）、10,000円〜（ホテル） /泊</span>
              </p>
              <h4 className="font-bold text-gray-800 mb-2 text-amber-600">名物グルメ</h4>
              <ul className="text-gray-600 space-y-2">
                <li>・とり天定食（東洋軒など）：約980円</li>
                <li>・地獄蒸し工房 鉄輪（釜代＋食材持込）：約500円〜</li>
                <li>・別府冷麺：約850円</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl mt-8">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💡</span>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">交通アクセスについて</h4>
              <p className="text-gray-700 text-sm md:text-base mb-3">
                福岡方面から由布院・別府へのアクセスは、バスと電車のどちらが良いのでしょうか？
                時間・料金・快適さを比較した記事も参考にしてください。
              </p>
              <Link href="/fukuoka-beppu-yufuin-bus-vs-train-guide" className="text-blue-600 font-bold hover:underline">
                → 【福岡から別府・由布院】高速バスと特急ソニック・ゆふいんの森はどっちがおすすめ？
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="bg-gray-800 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold font-journal-serif mb-6">
            結論：どっちに泊まるべき？
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-left">
            <div className="bg-white/10 p-5 rounded-xl border border-white/20">
              <p className="font-bold text-lg mb-2 text-emerald-300">✨ おしゃれ＆静かに過ごしたい → 由布院</p>
              <p className="text-sm text-gray-300">彼氏彼女との特別な日や、日々の喧騒を忘れて贅沢な時間を過ごしたいなら由布院一択です。</p>
            </div>
            <div className="bg-white/10 p-5 rounded-xl border border-white/20">
              <p className="font-bold text-lg mb-2 text-amber-300">♨️ 安く長くディープに温泉を楽しみたい → 別府</p>
              <p className="text-sm text-gray-300">色んな温泉を巡り、地元グルメも満喫しながらワイワイ過ごすなら別府が圧倒的コスパ。</p>
            </div>
            <div className="bg-amber-500 p-5 rounded-xl text-gray-900 border border-amber-400 transform hover:scale-105 transition-transform">
              <p className="font-bold text-xl mb-2 text-center">🏆 最強は「1泊ずつハシゴ」</p>
              <p className="text-sm text-center font-medium">実は由布院と別府はバス（路線バスや観光快速バス）でたったの約50分！せっかく大分まで行くなら、両方1泊ずつ楽しむのが最も満足度が高いプランです。</p>
            </div>
          </div>
        </div>
      </section>

      {hotels.length > 0 && (
        <section className="px-4 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-journal-serif text-center">
            由布院・別府のおすすめ宿
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hotels.map((hotel: any, index: number) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-transform hover:-translate-y-1">
                {hotel.hotelImageUrl && (
                  <div className="relative h-60 w-full bg-gray-100">
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {hotel.hotelName}
                  </h3>
                  {hotel.hotelMinCharge && (
                    <div className="text-emerald-600 font-bold text-lg mb-4">
                      目安：{hotel.hotelMinCharge.toLocaleString()}円〜 /人
                    </div>
                  )}
                  {hotel.hotelSpecial && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                      {hotel.hotelSpecial}
                    </p>
                  )}
                  {hotel.affiliateUrl && (
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                      楽天トラベルで詳細を見る
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
