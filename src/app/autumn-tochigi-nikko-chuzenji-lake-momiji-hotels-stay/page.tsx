import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月中旬〜下旬！日光中禅寺湖の紅葉】いろは坂・男体山ビューと奥日光名湯宿5選",
  description: "標高1,269mの山上湖・中禅寺湖畔を燃えるような紅葉が包む日光の秋！いろは坂の絶景や男体山を望む露天風呂、歴史ある名門リゾートから乳白色の秘湯まで厳選5選。",
  keywords: "中禅寺湖 紅葉 10月 見頃, いろは坂 紅葉 ホテル, 奥日光 温泉 旅館, 中禅寺金谷ホテル, ザ・リッツ・カールトン日光, 日光 紅葉 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-tochigi-nikko-chuzenji-lake-momiji-hotels-stay/",
  },
  openGraph: {
    title: "【10月中旬〜下旬！日光中禅寺湖の紅葉】いろは坂・男体山ビューと奥日光名湯宿5選",
    description: "標高1,269mの山上湖・中禅寺湖畔を燃えるような紅葉が包む日光の秋！いろは坂の絶景や男体山を望む露天風呂、歴史ある名門リゾートから乳白色の秘湯まで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-tochigi-nikko-chuzenji-lake-momiji-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "日光中禅寺湖の紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月中旬〜下旬！日光中禅寺湖の紅葉】いろは坂・男体山ビューと奥日光名湯宿5選",
    description: "標高1,269mの山上湖・中禅寺湖畔を燃えるような紅葉が包む日光の秋！いろは坂の絶景や男体山を望む露天風呂、歴史ある名門リゾートから乳白色の秘湯まで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "日光中禅寺温泉　中禅寺金谷ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg",
      hotelNo: 28759,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/28759/28759.html"),
      rating: 4.53,
      reviews: 1250,
      price: "¥18,600〜",
      access: "日光宇都宮道路 清滝ICより車で約25分（いろは坂経由）／東武日光駅より無料送迎バス運行あり",
      features: [
        "全室中禅寺湖ビューのウッドデッキ付き。伝統の西洋建築と木立の静寂に抱かれる名門ホテル",
        "奥日光湯元から引湯する源泉掛け流しの乳白色硫黄泉露天風呂「空ぶろ」で至福の湯浴み",
        "栃木県日光市中宮祠2482（いろは坂を登った中禅寺湖畔の静謐な森の中）"
      ]
    },
    {
      name: "ザ・リッツ・カールトン日光",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/179618/179618.jpg",
      hotelNo: 179618,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/179618/179618.html"),
      rating: 4.41,
      reviews: 215,
      price: "¥94,875〜",
      access: "JR・東武日光駅より湯元温泉行き路線バス約40分「ザ・リッツ・カールトン日光」下車",
      features: [
        "中禅寺湖と男体山を正面に望む最高のロケーション。ブランド初となる天然温泉大浴場を完備",
        "日本建築の美意識と現代のラグジュアリーが調和した客室。一生の思い出に残る極上の錦秋ステイ",
        "栃木県日光市中宮祠2482番地（中禅寺湖畔の特等席に佇む最高峰リゾート）"
      ]
    },
    {
      name: "奥日光湯元温泉　奥日光高原ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/8337/8337.jpg",
      hotelNo: 8337,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/8337/8337.html"),
      rating: 4.54,
      reviews: 1420,
      price: "¥8,800〜",
      access: "日光道 清滝ICより車で約40分／JR・東武日光駅より路線バス約80分",
      features: [
        "白根山麓の自然に抱かれる湯元温泉。乳白色の濃厚な硫黄泉を2種類の大浴場と露天風呂で満喫",
        "湯ノ湖や湯滝の紅葉散策拠点に最適。地元とちぎ和牛や旬の山菜を味わえるコスパ抜群の宿",
        "栃木県日光市湯元2549-6（標高約1,500mの澄んだ空気と名湯に癒やされる）"
      ]
    },
    {
      name: "日光湯元温泉　奥日光　森のホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/15755/15755.jpg",
      hotelNo: 15755,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/15755/15755.html"),
      rating: 4.58,
      reviews: 980,
      price: "¥23,000〜",
      access: "東武・JR日光駅より路線バス75分「湯元温泉バスターミナル」徒歩2分／清滝ICより約45分",
      features: [
        "奥日光最大級の広さを誇る大露天風呂。湯の花が舞うエメラルドグリーンと乳白色の美肌名湯",
        "北欧風の温もりあふれるラウンジ暖炉と、日光名産の引き上げ湯波や厳選和牛会席を堪能",
        "栃木県日光市湯元2551（静かな森に佇むモダンな大人のリゾートホテル）"
      ]
    },
    {
      name: "光徳温泉　日光アストリアホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/40537/40537.jpg",
      hotelNo: 40537,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/40537/40537.html"),
      rating: 4.11,
      reviews: 630,
      price: "¥15,600〜",
      access: "JR・東武日光駅より路線バス約70分「光徳温泉」下車すぐ／清滝ICより車で約40分",
      features: [
        "奥日光・戦場ヶ原の奥、白樺とカラマツの森に一軒だけ佇む静寂の高原リゾートホテル",
        "森の緑と紅葉に包まれる源泉掛け流し露天風呂。満天の星空と澄み切った秋の空気を独り占め",
        "栃木県日光市光徳温泉（戦場ヶ原・小田代原の草紅葉トレッキングにも絶好の立地）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" 
            alt="日光中禅寺湖の紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-700/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月秋の紅葉絶景特集・奥日光名湯
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月中旬〜下旬！日光中禅寺湖の紅葉】<br className="hidden sm:inline" />いろは坂・男体山ビューと奥日光名湯宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            いろは坂のヘアピンカーブを彩る紅葉グラデーションから、青く澄んだ中禅寺湖と秀峰・男体山の絶景へ。早朝の渋滞を回避してゆったり楽しむ奥日光の名宿を厳選紹介。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月中旬〜下旬！日光中禅寺湖の紅葉】いろは坂・男体山ビューと奥日光名湯宿5選</span>
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
                "name": "日光中禅寺湖・いろは坂の紅葉の見頃時期はいつ頃ですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "奥日光の湯ノ湖や竜頭の滝は10月上旬〜中旬、中禅寺湖畔や戦場ヶ原は10月中旬〜下旬、いろは坂周辺は10月下旬〜11月上旬に見頃を迎えます。標高差があるため、10月中旬から下旬にかけて訪れると山上から中腹までのグラデーションを長く楽しめます。"
                }
              },
              {
                "@type": "Question",
                "name": "紅葉シーズンのいろは坂の渋滞を避けるコツは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "土日祝日のいろは坂上りは午前7時〜8時頃から大渋滞が発生します。前日中に奥日光や中禅寺湖畔の宿へチェックインしておくか、早朝6時台までに清滝ICを通過していろは坂を上るスケジュールを組むのが最も有効な混雑回避策です。"
                }
              },
              {
                "@type": "Question",
                "name": "10月の奥日光の気候と適した服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "中禅寺湖は標高約1,269m、湯元温泉は約1,500mと高地に位置するため、10月は日中でも10〜15℃、朝晩や湖畔の風が吹く環境では氷点下近くまで冷え込みます。フリース、厚手のアウター、手袋やマフラーなど冬支度に近い防寒対策が必須です。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月中旬〜下旬！日光中禅寺湖の紅葉】いろは坂・男体山ビューと奥日光名湯宿5選", "item": "https://croud-travel.pages.dev/autumn-tochigi-nikko-chuzenji-lake-momiji-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              湖面に映える黄金と深紅のグラデーション。天下の名勝・奥日光の紅葉絵巻
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日光国立公園の中核をなす「中禅寺湖」は、周囲約25kmの広大さを誇る日本屈指の山上湖です。カエデやウルシ、ナナカマド、ブナの原生林が湖畔を取り囲み、秋晴れの青空と男体山の雄大な山影を背景に燃えるような赤と黄色に染まります。竜頭の滝や華厳の滝の水しぶきと紅葉のコントラスト、そして奥日光湯元温泉の上質な硫黄泉を心ゆくまで堪能する旅をお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">中禅寺湖スカイライン＆半月山展望台</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">八丁出島の突き出た地形と男体山、湖のパノラマを一望。紅葉ポスターの定番絶景ポイント。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">竜頭の滝＆湯滝の迫力ある渓流紅葉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">210mにわたる急流の岩肌を滑り落ちる滝と、両岸を覆うミズナラやカエデの紅葉は見事。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">乳白色の濁り湯・奥日光湯元温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">約1200年の歴史を誇る名湯。冷え込んだ秋の散策後に浸かる濃厚な硫黄泉は格別の癒やし。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">秋の観光地情報・名所ガイド：中禅寺湖（日光国立公園）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Mount_nantai_and_lake_chuzenji.jpg/1280px-Mount_nantai_and_lake_chuzenji.jpg"
                alt="中禅寺湖（日光国立公園）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">中禅寺湖（日光国立公園）の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">中禅寺湖（ちゅうぜんじこ）は、栃木県日光市の日光国立公園内にある湖。約2万年前に男体山の噴火でできた堰止湖で、人造湖を除けば日本一標高の高い場所にある湖である。また、栃木県最大の湖で、日本の湖沼では25番目の面積規模を有する。平均水深は約94.6mで最大水深は163mあり日本で7番目の深さとなっている。  1周は約25kmであり、歩くと9時間ほどかかる距離である。湖のすぐ北には男体山がそびえ、北西には戦場ヶ原が広がる。湖の南側には八丁出島と呼ばれる細長く突き出した半島があり、紅葉の名所として知られるほか、薬師如来を祀っていたとされる薬師堂跡がある。日本百景に選定されている。 現代では観光地として知られるが、奈良時代に湖岸に勝道上人が開いた中禅寺による名称であり、かつては神仏への信仰にもとづく修行の場として知られていた。湖岸から約100m離れた場所にある上野島には、勝道上人の遺骨の一部が納められている。</p>
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
              <span className="text-red-600 font-bold tracking-wider text-xs md:text-sm uppercase">中禅寺湖・奥日光の紅葉鑑賞に便利な名宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選宿泊施設 5選</h2>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-red-600 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-red-600">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】中禅寺湖・奥日光の紅葉をゆったり楽しむモデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-red-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">いろは坂通過〜中禅寺湖クルーズ＆チェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">11:00〜</strong> 早めの時間にいろは坂を上り、明智平ロープウェイから華厳の滝と中禅寺湖の全景を鑑賞。</li>
                <li>・<strong className="text-stone-800">13:00〜</strong> 中禅寺湖畔のレストランで日光名物の湯波（ゆば）御膳やヒメマス料理のランチ。</li>
                <li>・<strong className="text-stone-800">14:30〜</strong> 中禅寺湖機船の遊覧船に乗船。湖上から眺める八丁出島や男体山の燃えるような紅葉パノラマを満喫。</li>
                <li>・<strong className="text-stone-800">16:00〜</strong> ホテルへチェックイン。乳白色の天然温泉露天風呂に浸かり、旅の疲れを心地よく癒やす。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝の竜頭の滝〜戦場ヶ原の草紅葉散策</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:00〜</strong> 朝風呂と豪華な朝食後、混雑前の「竜頭の滝」へ。滝壺を囲む鮮烈な紅葉を静かに鑑賞。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> 戦場ヶ原の木道トレッキング。黄金色に輝くカラマツ林とススキの草紅葉の雄大な自然を体感。</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> 湯ノ湖畔で休憩後、日光宇都宮道路経由で安全運転にて帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と日光中禅寺湖旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 日光中禅寺湖・いろは坂の紅葉の見頃時期はいつ頃ですか？</span>
                <span className="text-red-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 奥日光の湯ノ湖や竜頭の滝は10月上旬〜中旬、中禅寺湖畔や戦場ヶ原は10月中旬〜下旬、いろは坂周辺は10月下旬〜11月上旬に見頃を迎えます。標高差があるため、10月中旬から下旬にかけて訪れると山上から中腹までのグラデーションを長く楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 紅葉シーズンのいろは坂の渋滞を避けるコツは？</span>
                <span className="text-red-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 土日祝日のいろは坂上りは午前7時〜8時頃から大渋滞が発生します。前日中に奥日光や中禅寺湖畔の宿へチェックインしておくか、早朝6時台までに清滝ICを通過していろは坂を上るスケジュールを組むのが最も有効な混雑回避策です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 10月の奥日光の気候と適した服装は？</span>
                <span className="text-red-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 中禅寺湖は標高約1,269m、湯元温泉は約1,500mと高地に位置するため、10月は日中でも10〜15℃、朝晩や湖畔の風が吹く環境では氷点下近くまで冷え込みます。フリース、厚手のアウター、手袋やマフラーなど冬支度に近い防寒対策が必須です。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
