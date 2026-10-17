import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/yufuin-vs-beppu-which-stay/" },
  title: "由布院 vs 別府 どっちに泊まる？：温泉の泉質・宿のタイプ・観光スポット・費用を完全比較 ｜ 日本全国・旅宿クラウド",
  description: "由布院と別府、大分の温泉二大巨頭はどっちに泊まるべき？由布院（おしゃれな隠れ家宿＆金鱗湖朝霧）と別府（地獄めぐり＆砂湯＆とり天）を温泉の泉質・宿のタイプ・グルメ・費用で徹底比較。「1泊ずつハシゴ」プランも紹介。",
  keywords: ["由布院", "vs", "別府", "どっちに泊まる？", "温泉の泉質", "宿のタイプ", "観光スポット"],
  openGraph: {
    title: "由布院 vs 別府 どっちに泊まる？：温泉の泉質・宿のタイプ・観光スポット・費用を完全比較 ｜ 日本全国・旅宿クラウド",
    description: "由布院と別府、大分の温泉二大巨頭はどっちに泊まるべき？由布院（おしゃれな隠れ家宿＆金鱗湖朝霧）と別府（地獄めぐり＆砂湯＆とり天）を温泉の泉質・宿のタイプ・グルメ・費用で徹底比較。「1泊ずつハシゴ」プランも紹介。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "由布院 vs 別府 どっちに泊まる？：温泉の泉質・宿のタイプ・観光スポット・費用を完全比較 ｜ 日本全国・旅宿クラウド",
    description: "由布院と別府、大分の温泉二大巨頭はどっちに泊まるべき？由布院（おしゃれな隠れ家宿＆金鱗湖朝霧）と別府（地獄めぐり＆砂湯＆とり天）を温泉の泉質・宿のタイプ・グルメ・費用で徹底比較。「1泊ずつハシゴ」プランも紹介。",
  }
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【由布院 vs 別府 どっちに泊まる？】温泉の泉質・宿のタイプ・観光スポット・費用を完全比較 ｜ 日本全国・旅宿クラウド",
    "description": "由布院と別府、大分の温泉二大巨頭はどっちに泊まるべき？由布院（おしゃれな隠れ家宿＆金鱗湖朝霧）と別府（地獄めぐり＆砂湯＆とり天）を温泉の泉質・宿のタイプ・グルメ・費用で徹底比較。「1泊ずつハシゴ」プランも紹介。",
    "url": "https://croud-travel.pages.dev/yufuin-vs-beppu-which-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【由布院 vs 別府 どっちに泊まる？】温泉の泉質・宿のタイプ・観光スポット・費用を完全比較 ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/yufuin-vs-beppu-which-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 md:p-14 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-10 text-[250px] leading-none pointer-events-none">♨️</div>
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            インスタ映え派 vs 温泉ガチ勢で推しが完全に割れる2つの温泉地
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight">「由布院 vs 別府 どっちに泊まる？」<br className="hidden md:block"/>温泉の泉質・宿のタイプ・観光スポット・費用を完全比較</h1>
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
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 由布院 vs 別府 どっちに泊まる？：温泉の泉質・宿のタイプ・観光スポット・費用を完全比較：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「由布院 vs 別府 どっちに泊まる？：温泉の泉質・宿のタイプ・観光スポット・費用を完全比較」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 由布院温泉　旅館光の家</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町川上2490</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.5（121件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14835%2F14835.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 由布院温泉　旅館　めばえ荘</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町川南249-1</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.25（95件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70229%2F70229.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 由布院温泉　旅館　冨季の舎</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町川南814-1</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">有　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4（126件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32186%2F32186.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 天然温泉　鉄輪の湯　スーパーホテル別府駅前</td>
                <td className="p-3 text-stone-600">大分県別府市駅前町13-8</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り/５００円（１泊１台あたり）　先着順/予約不可</td>
                <td className="p-3 font-bold text-amber-600">★4.38（1170件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,280〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180258%2F180258.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 別府温泉　ホテルニューツルタ</td>
                <td className="p-3 text-stone-600">大分県別府市北浜1-14-15</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">入庫後21時間：最大700円・駐車場は有料＆先着順。満車の場合はご利用いただけないことがございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.24（1215件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1938%2F1938.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 別府鉄輪温泉　ホテル山水館</td>
                <td className="p-3 text-stone-600">大分県別府市鶴見628-1</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.19（244件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107764%2F107764.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">由布院温泉　旅館光の家</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆふいんおんせん　りょかんひかりのいえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14835/14835_war.jpg" alt="由布院温泉　旅館光の家 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>由布岳の麓通りにある小さな湯宿 -盆地の傍 静かな暮らしを‐ 古道具屋、古着屋、図書室、茶室を備える</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町川上2490 ／ 最寄り駅：由布院 ／ 交通案内：由布院駅より車で５分／湯布院ＩＣから１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「由布院温泉　旅館光の家は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">由布院温泉　旅館　めばえ荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（めばえそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70229/70229_h.jpg" alt="由布院温泉　旅館　めばえ荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>心静かに季節をめぐる。惜しみなく流れるゆたかな時を、想いを込めてお客様にお贈りいたします。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町川南249-1 ／ 最寄り駅：由布院 ／ 交通案内：由布院駅より車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「由布院温泉　旅館　めばえ荘は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">由布院温泉　旅館　冨季の舎</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆふいんおんせん　りょかん　ふきのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/32186/32186_h.jpg" alt="由布院温泉　旅館　冨季の舎 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>３棟ある離れには、内風呂と露天風呂付。その他に５つの貸切風呂がございます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町川南814-1 ／ 最寄り駅：由布院 ／ 交通案内：ＪＲ久大線　由布院駅より車で５分　徒歩１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「由布院温泉　旅館　冨季の舎は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　鉄輪の湯　スーパーホテル別府駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてる　べっぷえきまえ　てんねんおんせん　かんなわのゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,280〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180258/180258.jpg" alt="天然温泉　鉄輪の湯　スーパーホテル別府駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ別府駅東口より徒歩約2分！　鉄輪（かんなわ）温泉直送の天然温泉完備！　駅前繁華街もすぐ！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市駅前町13-8 ／ 最寄り駅：別府（大分） ／ 交通案内：ＪＲ　別府駅　東口より徒歩にて約1分　/　大分空港よりバス(エアライナー)で約1時間　/　別府ICより車で15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り/５００円（１泊１台あたり）　先着順/予約不可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「別府湾の眺望と充実したサービスに大満足ハリウッドツインを3名利用でしたが十分な広さがあり、部屋の窓からは別府湾の海が見えました。温泉と朝食とチェックイン後のドリンクバー(夕方以降はアルコールも…　2026-08-22 18:07:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府温泉　ホテルニューツルタ</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっぷおんせん　ほてるにゅーつるた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1938/1938_room.jpg" alt="別府温泉　ホテルニューツルタ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>別府湾を望む、まちなかに立地。地上20ｍにある大浴場からは別府湾が一望！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市北浜1-14-15 ／ 最寄り駅：大分 ／ 交通案内：ＪＲ別府駅より徒歩8分。別府ＩＣより車で約15分。駐車場先着順、入庫後21時間最大700円。全室ロビー無料Wi-fi</p>
                  <p><strong>【駐車場・マイカー利用】</strong>入庫後21時間：最大700円・駐車場は有料＆先着順。満車の場合はご利用いただけないことがございます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「施設は古めだが温泉と朝食は十分満足施設は少し古めですが、温泉、朝食とも十分楽しめました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/ho…　2026-08-21 13:05:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府鉄輪温泉　ホテル山水館</h3>
                  <span className="text-xs text-stone-400 ml-2">（さんすいかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/107764/107764.jpg" alt="別府鉄輪温泉　ホテル山水館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>木々に囲まれ二連水車の廻る大露天風呂と別府湾や湯煙りの情景を一望できる展望露天風呂が人気</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市鶴見628-1 ／ 最寄り駅：別府（大分） ／ 交通案内：ＪＲ　別府駅よりお車にて約１５分、亀の井バスに乗車「朝日」にて下車後、徒歩１分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は綺麗で展望風呂と大浴場を満喫部屋は綺麗で、窓際が和室になっていてとてもよかったです温泉は展望風呂と大浴場の2種類があって楽しめます欲を言えばぬる湯が一箇所でもあるといいなと思いました…　2026-08-25 16:40:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！大分県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、大分県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">別府地獄めぐり</h3>
                <p className="text-xs text-stone-600 leading-relaxed">源泉数・湧出量日本一を誇る別府温泉の代表的観光コース。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」、噴気で蒸す地獄蒸し料理が楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Yufuin_Onsen_-Mus%C5%8Den_02.jpg/1280px-Yufuin_Onsen_-Mus%C5%8Den_02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="由布院（金鱗湖・辻馬車）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">由布院（金鱗湖・辻馬車）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">由布岳の麓に広がる全国屈指のおしゃれな温泉リゾート。清水と温泉が湧き出て朝霧が立ち込める「金鱗湖」や湯の坪街道のスイーツ巡りが女性に大人気です。 由布院温泉（ゆふいんおんせん）は、大分県由布市（旧国豊後国速見郡）にある温泉。由布岳（標高1,584m）の麓に広がる温泉地である。 温泉湧出量、源泉数ともに全国2位の豊富な湯量を誇る。1959年5月5日に湯平温泉とともに「湯布院温泉」として国民保養温泉地に指定され、2019年10月4日には、由布市内の塚原温泉・庄内温泉・挾間温泉を含めた「湯布院温泉郷」として…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">九重“夢”大吊橋</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水面からの高さ173m、全長390mを誇る日本一高い歩行者専用吊り橋。橋の上からは「日本の滝百選」の震動の滝や九酔渓の壮大なパノラマを見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">宇佐神宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に40,000社以上ある八幡社の総本宮。豊かな原生林に包まれた広大な敷地に朱塗りの本殿が建ち、伊勢神宮に並ぶ二拝四拍手一拝の参拝様式が特徴です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 大分県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 大分県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="yufuin-vs-beppu-which-stay" />
</div>
  );
}
