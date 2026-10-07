import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月下旬！上高地黄金のカラマツ黄葉】大正池・河童橋と乳白色の白骨名湯宿5選",
  description: "穂高連峰が初冠雪を抱き、梓川沿いのカラマツ並木が黄金色に輝く秋の上高地！大正池の朝靄から、3日入れば3年風邪をひかない乳白色の秘湯・白骨温泉の名宿まで厳選5選。",
  keywords: "上高地 カラマツ 黄葉 10月 見頃, 上高地 紅葉 ホテル, 白骨温泉 旅館 おすすめ, 湯元齋藤旅館, 上高地ルミエスタホテル, 梓川 河童橋",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-nagano-kamikochi-karamatsu-shirahone-onsen-hotels-stay/",
  },
  openGraph: {
    title: "【10月下旬！上高地黄金のカラマツ黄葉】大正池・河童橋と乳白色の白骨名湯宿5選",
    description: "穂高連峰が初冠雪を抱き、梓川沿いのカラマツ並木が黄金色に輝く秋の上高地！大正池の朝靄から、3日入れば3年風邪をひかない乳白色の秘湯・白骨温泉の名宿まで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-nagano-kamikochi-karamatsu-shirahone-onsen-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "上高地 カラマツ黄葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月下旬！上高地黄金のカラマツ黄葉】大正池・河童橋と乳白色の白骨名湯宿5選",
    description: "穂高連峰が初冠雪を抱き、梓川沿いのカラマツ並木が黄金色に輝く秋の上高地！大正池の朝靄から、3日入れば3年風邪をひかない乳白色の秘湯・白骨温泉の名宿まで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "上高地ルミエスタホテル(旧：上高地清水屋ホテル)",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/72775/72775.jpg",
      hotelNo: 72775,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/72775/72775.html"),
      rating: 4.76,
      reviews: 320,
      price: "¥52,800〜",
      access: "上高地バスターミナルより徒歩約15分（帝国ホテル前バス停より徒歩約10分）",
      features: [
        "上高地屈指のラグジュアリーホテル。客室から梓川の清流と霞沢岳のパノラマを一望",
        "地下から湧く自家源泉100%の天然温泉大浴場を完備。本格フランス料理ディナーが美食家に評判",
        "長野県松本市安曇4469-1（黄金色のカラマツ林を目の前に臨む特等席のリゾート）"
      ]
    },
    {
      name: "星降るホテル　上高地大正池ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/129679/129679.jpg",
      hotelNo: 129679,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/129679/129679.html"),
      rating: 4.38,
      reviews: 410,
      price: "¥25,190〜",
      access: "アルピコ交通 上高地線 新島々駅よりバス50分「大正池バス停」下車すぐ（目の前）",
      features: [
        "大正池の湖畔に建つ唯一のホテル。朝靄に包まれる立ち枯れの木々と焼岳の絶景を独り占め",
        "早朝の大正池散策や夜の満天の星空鑑賞に最高の立地。信州サーモンや信州牛会席を堪能",
        "長野県松本市安曇上高地（観光客が訪れる前の静寂の大正池を心ゆくまで満喫）"
      ]
    },
    {
      name: "白骨温泉　湯元齋藤旅館",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/32100/32100.jpg",
      hotelNo: 32100,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/32100/32100.html"),
      rating: 4.61,
      reviews: 820,
      price: "¥20,900〜",
      access: "松本ICより車で約60分／さわんどバスターミナルより上高地連絡バスで約30分",
      features: [
        "創業享保年間。「3日入れば3年風邪をひかない」と伝わる乳白色の名湯を引く名門宿",
        "渓谷の紅葉を見下ろす大野天風呂「鬼角の湯」。信州サーモンや信州プレミアム牛の懐石料理",
        "長野県松本市安曇白骨温泉4195（上高地散策とセットで訪れたい信州屈指の秘湯旅館）"
      ]
    },
    {
      name: "白骨温泉　小梨の湯　笹屋",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/141241/141241.jpg",
      hotelNo: 141241,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/141241/141241.html"),
      rating: 4.65,
      reviews: 290,
      price: "¥14,300〜",
      access: "松本駅より松本電鉄新島々駅下車、バスで約60分／長野道 松本ICより車で約60分",
      features: [
        "白樺の原生林に囲まれたわずか10室の静寂の隠れ家。無料の貸切露天風呂を完備",
        "飲泉も可能な自家源泉掛け流しの濁り湯。囲炉裏端でいただく岩魚の塩焼きや山里会席",
        "長野県松本市安曇4182-1（大人のひとり旅や夫婦の記念日旅行に選ばれる静かな宿）"
      ]
    },
    {
      name: "白骨温泉　かつらの湯　丸永旅館",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/107804/107804.jpg",
      hotelNo: 107804,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/107804/107804.html"),
      rating: 4.42,
      reviews: 210,
      price: "¥18,700〜",
      access: "新島々駅よりバス「泡の湯」下車徒歩1分／松本ICより車で約60分",
      features: [
        "天然の巨木「かつらの木」の根元から自噴する極上の源泉。風情ある混浴露天風呂と内湯",
        "白骨温泉ならではの濃厚な硫黄の香りと湯の花。素朴で心温まる手作り山菜・きのこ料理",
        "長野県松本市安曇白骨温泉4185-2（秘湯の趣をありのままに残す木造の山宿）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
            alt="上高地 カラマツ黄葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月下旬限定・神降地カラマツ黄葉特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月下旬！上高地黄金のカラマツ黄葉】<br className="hidden sm:inline" />大正池・河童橋と乳白色の白骨名湯宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            梓川のエメラルドグリーンと、黄金色に輝くカラマツ林。初冠雪の穂高連峰が織りなす「三段紅葉」の奇跡！11月の閉山直前に訪れたい上高地と、秘湯・白骨温泉の極上宿を厳選。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月下旬！上高地黄金のカラマツ黄葉】大正池・河童橋と乳白色の白骨名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "上高地のカラマツ黄葉の見頃時期と閉山祭のスケジュールは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "上高地のカラマツ黄葉は例年10月下旬（10月20日前後〜11月上旬）が最盛期です。山頂の初冠雪（白）、山腹の広葉樹の紅葉（赤・橙）、梓川沿いのカラマツ黄葉（黄）が揃う「三段紅葉」が楽しめます。上高地は例年11月15日の閉山祭をもって冬期閉鎖に入るため、秋の旅は10月中旬〜11月上旬の予約が最もおすすめです。"
                }
              },
              {
                "@type": "Question",
                "name": "上高地へのマイカー規制と白骨温泉からのアクセス方法は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "上高地は通年マイカー規制が実施されています。長野県側からは「さわんどバスターミナル（さわんど駐車場）」に車を停め、シャトルバスまたはタクシー（約30分）に乗り換えて入山します。白骨温泉からはさわんどまで車で約15分と極めて近く、上高地前泊・後泊の温泉地として最適です。"
                }
              },
              {
                "@type": "Question",
                "name": "秋の上高地の気温とハイキングに適した服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "10月下旬の上高地は標高約1,500mに位置し、朝晩は氷点下まで冷え込み霜柱が立ちます。日中でも10℃前後のため、防風性のあるアウター、フリースやインナーダウン、ニット帽や手袋、歩きやすいトレッキングシューズを必ず準備しましょう。"
                }
              }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev/" },
              { "@type": "ListItem", "position": 2, "name": "特集一覧", "item": "https://croud-travel.pages.dev/features" },
              { "@type": "ListItem", "position": 3, "name": "【10月下旬！上高地黄金のカラマツ黄葉】大正池・河童橋と乳白色の白骨名湯宿5選", "item": "https://croud-travel.pages.dev/autumn-nagano-kamikochi-karamatsu-shirahone-onsen-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              冠雪の穂高と黄金に輝くカラマツ林。息をのむ秋の神降地と秘湯・白骨温泉
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            国の特別名勝・特別天然記念物に指定されている日本屈指の山岳リゾート「上高地」。10月中旬を過ぎると、梓川の岸辺を埋め尽くすカラマツが黄金色に染まり、初冠雪した穂高連峰の険しい山肌とのコントラストは言葉を失うほどの美しさです。早朝の大正池に立ち込める朝靄、河童橋からの絶景を歩いた後は、車で約30分の山あいに佇む白骨温泉へ。乳白色に濁る名湯に身を委ね、信州の秋の味覚に舌鼓を打つ極上の旅をお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">黄金色のカラマツ並木と三段紅葉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">穂高の白い雪、中腹の紅葉、谷底のカラマツ黄葉。秋の限られた時期だけに現れる奇跡の色彩。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">大正池の幻想的な朝靄と水鏡</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">静まり返った湖面に映り込む焼岳の雄姿。静寂を切り裂く朝の光が照らす幻想風景。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">白骨温泉の乳白色濁り湯と信州美食</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">弱酸性で肌に優しい硫黄泉。散策後の冷えた身体を芯から解きほぐす至福の秘湯ステイ。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">信州・秋の絶景ガイド：特別名勝・上高地 大正池と河童橋</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/%E7%A7%8B%E3%81%AE%E4%B8%8A%E9%AB%98%E5%9C%B0_%28Kamikochi_in_autumn%29_24_Oct%2C_2011_-_panoramio.jpg"
                alt="特別名勝・上高地 大正池と河童橋"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">特別名勝・上高地 大正池と河童橋の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">上高地（かみこうち）は、長野県松本市の西部、清流梓川（あずさがわ）上流に所在する県を代表する山岳景勝地。飛騨山脈（北アルプス）南部の長野県側（全域が松本市）に属する。中部山岳国立公園の一部ともなっており、国の文化財（特別名勝・特別天然記念物/天然保護区域）に指定されている。河童橋や大正池など上高地自体が国内外から観光客が訪れる一大観光地であるだけでなく、上高地内にホテルなどの宿泊施設や温泉があり、周辺にある穂高連峰や槍ヶ岳への登山基地ともなっている。標高は約1,500m。 「かみこうち」の名称は本来「神垣内」の漢字表記だが、後に現在の「上高地」の漢字表記が一般的となった。「神垣内」とは、穂高神社の祭神・「穂高見命」（ほたかみのみこと）が穂高岳に降臨し、この地（穂高神社奥宮と明神池）で祀られていることに由来する。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">上高地・白骨温泉のおすすめ宿泊施設</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選リゾート・秘湯宿 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金は楽天トラベル記載の目安料金です</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelList.map((hotel, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 flex flex-col md:flex-row group"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] overflow-hidden">
                  <Image 
                    src={hotel.img} 
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    第{index + 1}位
                  </div>
                </div>

                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-bold text-sm text-stone-900">{hotel.rating}</span>
                      </div>
                      <span className="text-xs text-stone-400">({hotel.reviews}件のクチコミ)</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-3">
                      {hotel.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs md:text-sm text-stone-500 mb-4">
                      <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {hotel.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-stone-500 block">参考料金 (1名あたり)</span>
                      <span className="text-xl md:text-2xl font-black text-amber-700">{hotel.price}</span>
                    </div>
                    <a 
                      href={hotel.affiliateUrl || "https://travel.rakuten.co.jp/"} 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
                    >
                      <span>宿泊プラン・空室を見る</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】上高地カラマツ黄葉と白骨温泉満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">松本〜白骨温泉チェックイン＆秘湯の湯浴み</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:00〜</strong> 松本駅または松本ICを出発し、国道158号線を上高地方面へドライブ。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> 白骨温泉の宿へチェックイン。木造建築の風情と温泉の硫黄の香りに包まれる。</li>
                <li>・<strong className="text-stone-800">16:00〜</strong> 渓谷を望む露天風呂へ。乳白色の湯に浸かり、見上げる紅葉を眺めながら芯まで温まる。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 信州サーモンや信州プレミアム牛、名物の温泉粥など郷土の味覚を堪能。</li>
              </ul>
            </div>
            <div className="border-l-2 border-emerald-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝一番の上高地入山〜大正池・河童橋散策</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:30〜</strong> 朝食後、さわんどバスターミナルへ移動しシャトルバスで大正池へ。</li>
                <li>・<strong className="text-stone-800">08:30〜</strong> 大正池で朝靄の立ち枯れの木を鑑賞後、梓川沿いの遊歩道を歩き田代湿原・田代池へ。</li>
                <li>・<strong className="text-stone-800">10:30〜</strong> 河童橋に到着！冠雪した穂高連峰と黄金に輝くカラマツ並木の絶景を撮影。</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> 上高地帝国ホテルやルミエスタホテルで信州リンゴパイを味わい、シャトルバスで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と上高地旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 上高地のカラマツ黄葉の見頃時期と閉山祭のスケジュールは？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 上高地のカラマツ黄葉は例年10月下旬（10月20日前後〜11月上旬）が最盛期です。山頂の初冠雪（白）、山腹の広葉樹の紅葉（赤・橙）、梓川沿いのカラマツ黄葉（黄）が揃う「三段紅葉」が楽しめます。上高地は例年11月15日の閉山祭をもって冬期閉鎖に入るため、秋の旅は10月中旬〜11月上旬の予約が最もおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 上高地へのマイカー規制と白骨温泉からのアクセス方法は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 上高地は通年マイカー規制が実施されています。長野県側からは「さわんどバスターミナル（さわんど駐車場）」に車を停め、シャトルバスまたはタクシー（約30分）に乗り換えて入山します。白骨温泉からはさわんどまで車で約15分と極めて近く、上高地前泊・後泊の温泉地として最適です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋の上高地の気温とハイキングに適した服装は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 10月下旬の上高地は標高約1,500mに位置し、朝晩は氷点下まで冷え込み霜柱が立ちます。日中でも10℃前後のため、防風性のあるアウター、フリースやインナーダウン、ニット帽や手袋、歩きやすいトレッキングシューズを必ず準備しましょう。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
