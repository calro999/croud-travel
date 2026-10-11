import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "見頃！国営ひたち海浜公園コキア紅葉で過ごす冬の旅（10月）！みはらしの丘と勝田・大洗の人気宿5選",
  description: "約4万本のコキアがみはらしの丘を真っ赤に染め上げる国営ひたち海浜公園の秋！勝田駅至近ホテルや大洗海岸のオーシャンビュー温泉宿、水戸の迎賓館ホテルまで厳選5選。",
  keywords: "ひたち海浜公園 コキア 見頃 10月, 勝田駅 ホテル, 大洗温泉 旅館, 水戸プラザホテル, 茨城 秋旅行 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-ibaraki-hitachi-seaside-park-kochia-hotels-stay/",
  },
  openGraph: {
    title: "見頃！国営ひたち海浜公園コキア紅葉で過ごす冬の旅（10月）！みはらしの丘と勝田・大洗の人気宿5選",
    description: "約4万本のコキアがみはらしの丘を真っ赤に染め上げる国営ひたち海浜公園の秋！勝田駅至近ホテルや大洗海岸のオーシャンビュー温泉宿、水戸の迎賓館ホテルまで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-ibaraki-hitachi-seaside-park-kochia-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【10月見頃！国営ひたち海浜公園コキア紅葉】みはらしの丘と勝田・大洗の人気宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "見頃！国営ひたち海浜公園コキア紅葉で過ごす冬の旅（10月）！みはらしの丘と勝田・大洗の人気宿5選",
    description: "約4万本のコキアがみはらしの丘を真っ赤に染め上げる国営ひたち海浜公園の秋！勝田駅至近ホテルや大洗海岸のオーシャンビュー温泉宿、水戸の迎賓館ホテルまで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "アパホテル〈ひたちなか勝田駅前〉",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/178978/178978.jpg",
      hotelNo: 178978,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/178978/178978.html"),
      rating: 4.31,
      reviews: 810,
      price: "¥5,700〜",
      access: "ＪＲ常磐線 勝田駅東口から徒歩6分（約450m）／北関東自動車道 ひたちなかICより車で約15分",
      features: [
        "国営ひたち海浜公園まで車で約15分。勝田駅東口から直通路線バスも運行する抜群の観光拠点",
        "2020年オープンで館内は清潔・快適。大型液晶テレビや快眠ベッドなど充実の最新設備",
        "茨城県ひたちなか市勝田中央10-7（勝田駅前で飲食店やコンビニも徒歩圏内）"
      ]
    },
    {
      name: "ホテル　クリスタルパレス",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/16031/16031.jpg",
      hotelNo: 16031,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/16031/16031.html"),
      rating: 4.1,
      reviews: 1884,
      price: "¥5,440〜",
      access: "JR勝田駅よりタクシー約7分／ひたちなかICより約4km（車で約5分）",
      features: [
        "ひたち海浜公園まで車で約10〜15分。無料駐車場完備でドライブ旅やファミリーに最適",
        "旅の疲れをほぐす人工温泉大浴場を完備、焼き立てパンや和洋惣菜が並ぶ無料朝食バイキング",
        "茨城県ひたちなか市大平1-22-1（緑に囲まれた落ち着いた環境）"
      ]
    },
    {
      name: "水戸プラザホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/5754/5754.jpg",
      hotelNo: 5754,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/5754/5754.html"),
      rating: 4.7,
      reviews: 771,
      price: "¥11,050〜",
      access: "JR水戸駅南口よりタクシー約15分／常磐自動車道 水戸ICより車で約15分",
      features: [
        "世界的インテリアデザイナーのジョン・デビッド・エジソンが手掛けた「森の中の迎賓館」",
        "吹き抜けのアトリウムガーデンと上質な客室。記念日や秋のご褒美ステイに選ばれる最高峰ホテル",
        "茨城県水戸市千波町2078-1（ひたち海浜公園まで北関東道経由で車約25分）"
      ]
    },
    {
      name: "大洗ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/5950/5950.jpg",
      hotelNo: 5950,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/5950/5950.html"),
      rating: 4.58,
      reviews: 2903,
      price: "¥25,000〜",
      access: "東水戸道路 水戸大洗ICより約15分／鹿島臨海鉄道 大洗駅よりタクシー約5分（大洗海岸徒歩3分）",
      features: [
        "太平洋を間近に望むオーシャンビュー。滞在中のドリンクや軽食を楽しめる充実のオールインクルーシブ",
        "神磯の鳥居で有名な大洗磯前神社まで徒歩5分。日の出と紅葉狩りを両方欲張る秋の絶景旅",
        "茨城県東茨城郡大洗町磯浜町6881（ひたち海浜公園まで海岸沿いルートで車約20分）"
      ]
    },
    {
      name: "里海邸　－金波楼本邸－",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/136101/136101.jpg",
      hotelNo: 136101,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/136101/136101.html"),
      rating: 4.86,
      reviews: 50,
      price: "¥27,610〜",
      access: "東水戸道路 水戸大洗ICより約10分／大洗鹿島線 大洗駅よりタクシー約7分",
      features: [
        "楽天トラベルクチコミ4.86点。波打ち際に佇むプライベート別荘のような極上隠れ家宿",
        "無垢の木と潮騒に包まれる空間。常陸牛や茨城の旬の海の幸、素朴な田舎料理を贅沢に堪能",
        "茨城県東茨城郡大洗町磯浜町6883（静寂の海岸線で至福の秋を過ごす大人の宿）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" 
            alt="国営ひたち海浜公園コキアの紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月秋の絶景特集・コキアカーニバル
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">見頃！国営ひたち海浜公園コキア紅葉で過ごす冬の旅（10月）！<br className="hidden sm:inline" />みはらしの丘と勝田・大洗の人気宿5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            丘一面が深紅に染まる国営ひたち海浜公園の秋！混雑を回避して朝一番に楽しむ駅前拠点から、太平洋の潮騒と海の幸に寛ぐ大洗の絶景宿まで、楽天API公式データを基に厳選紹介します。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月見頃！国営ひたち海浜公園コキア紅葉】みはらしの丘と勝田・大洗の人気宿5選</span>
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
                "name": "国営ひたち海浜公園のコキアの紅葉見頃時期はいつですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年10月上旬から緑と赤のグラデーションが始まり、10月中旬から下旬にかけて「みはらしの丘」全体が鮮やかな深紅に染まり見頃のピークを迎えます。10月下旬から11月上旬には黄金色に移り変わるグラデーションも楽しめます。"
                }
              },
              {
                "@type": "Question",
                "name": "コキアの混雑を避けるためのおすすめ宿泊エリアや移動方法は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "最寄りのJR勝田駅周辺（アパホテル〈ひたちなか勝田駅前〉など）に前泊するのが最もおすすめです。開園前の直行路線バスやタクシーで朝一番に西口・翼のゲートへ到着でき、渋滞や混雑を避けて澄んだ空気の中で撮影ができます。車旅なら大洗海岸エリアでの海鮮温泉ステイも人気です。"
                }
              },
              {
                "@type": "Question",
                "name": "秋のひたち海浜公園散策の服装や持ち物のポイントは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "広大な敷地とみはらしの丘を歩いて登るため、歩きやすいスニーカーが必須です。10月の茨城沿岸部は海風が吹くと体感温度が下がるため、着脱しやすいマウンテンパーカーやカーディガン、ストールを用意しておくと安心です。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月見頃！国営ひたち海浜公園コキア紅葉】みはらしの丘と勝田・大洗の人気宿5選", "item": "https://croud-travel.pages.dev/autumn-ibaraki-hitachi-seaside-park-kochia-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              空の青と燃えるような紅のコントラスト。約4万本のコキアが描く秋の絶景パノラマ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            茨城県ひたちなか市の「国営ひたち海浜公園」では、10月中旬から下旬にかけて「みはらしの丘」を約4万本のモコモコとしたコキアが真っ赤に染め上げます。丘の頂上からは太平洋の大海原と鮮烈な深紅の絨毯を一望でき、秋を代表する日本の絶景として多くの旅行者を惹きつけます。週末やピーク時は周辺道路が大変混雑するため、前泊して朝一番の澄んだ光の中で散策するのが快適に楽しむ秘訣です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">約4万本のコキア＆コスモスの共演</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">みはらしの丘の麓に咲く白・ピンクのコスモスと、真っ赤なコキアのグラデーションは圧巻の美しさ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">勝田駅前ステイで朝の混雑を回避</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">勝田駅東口から直通バスでアクセス可能。前泊すれば開園直後のベストアングルをゆっくり撮影可能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">大洗の海の幸＆常陸牛グルメ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">散策後は大洗の海鮮料理や那珂湊おさかな市場、茨城自慢の常陸牛を堪能する極上グルメコース。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">茨城・絶景花畑ガイド：みはらしの丘を染めるコキア・国営ひたち海浜公園</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Ferris_wheel_of_the_Hitachi_beach_park%2Chitachi-kaihin-koen%2Chitachinaka-city%2Cjapan.JPG/1280px-Ferris_wheel_of_the_Hitachi_beach_park%2Chitachi-kaihin-koen%2Chitachinaka-city%2Cjapan.JPG"
                alt="みはらしの丘を染めるコキア・国営ひたち海浜公園"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">みはらしの丘を染めるコキア・国営ひたち海浜公園の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">国営ひたち海浜公園（こくえいひたちかいひんこうえん、英: Hitachi Seaside Park）は、茨城県ひたちなか市にある日本の国営公園。国土交通省関東地方整備局国営常陸海浜公園事務所が管理する施設である。名称のひたちは、茨城県がかつて常陸国であったことに由来する。</p>
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
              <span className="text-red-600 font-bold tracking-wider text-xs md:text-sm uppercase">10月秋のコキア鑑賞に便利な厳選宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">おすすめ宿泊施設 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金は楽天トラベル記載の目安料金です</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelList.map((hotel, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 flex flex-col group"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden">
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

                <div className="p-6 md:p-8 w-full flex flex-col justify-between space-y-6">
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
            <div className="w-2.5 h-8 bg-red-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】コキア絶景と海の幸を満喫するおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-red-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">大洗・水戸エリア観光とチェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 大洗磯前神社の「神磯の鳥居」を参拝。太平洋の白波が打ち寄せる岩礁の鳥居の厳かな風景を鑑賞。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 宿泊先（勝田駅前または大洗エリア）へチェックイン。翌朝の海浜公園開園スケジュールを確認してゆったり準備。</li>
                <li>・<strong className="text-stone-800">18:00〜</strong> 那珂湊漁港直送の新鮮な魚介会席や常陸牛の料理に舌鼓。名物あんこう鍋の走りを味わえるプランもおすすめ。</li>
                <li>・<strong className="text-stone-800">20:30〜</strong> 大浴場や客室でリラックス。明日の早起きに備えて心地よい眠りへ。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝一番の国営ひたち海浜公園＆コキア散策</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> ホテルを出発し国営ひたち海浜公園へ（勝田駅からは臨時直行バス、車なら西口駐車場へ）。</li>
                <li>・<strong className="text-stone-800">09:30〜</strong> 「みはらしの丘」へ直行。丘一面を埋め尽くす約4万本の真紅のコキアと秋晴れの青空が織りなす大絶景を撮影。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 園内のカフェでコキアソフトクリームを味わった後、那珂湊おさかな市場で海鮮丼ランチとお土産探し。</li>
                <li>・<strong className="text-stone-800">14:30〜</strong> 常磐自動車道または特急ひたち号を利用して、秋の余韻を感じながら帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）とひたちなか観光のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 国営ひたち海浜公園のコキアの紅葉見頃時期はいつですか？</span>
                <span className="text-red-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年10月上旬から緑と赤のグラデーションが始まり、10月中旬から下旬にかけて「みはらしの丘」全体が鮮やかな深紅に染まり見頃のピークを迎えます。10月下旬から11月上旬には黄金色に移り変わるグラデーションも楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. コキアの混雑を避けるためのおすすめ宿泊エリアや移動方法は？</span>
                <span className="text-red-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 最寄りのJR勝田駅周辺（アパホテル〈ひたちなか勝田駅前〉など）に前泊するのが最もおすすめです。開園前の直行路線バスやタクシーで朝一番に西口・翼のゲートへ到着でき、渋滞や混雑を避けて澄んだ空気の中で撮影ができます。車旅なら大洗海岸エリアでの海鮮温泉ステイも人気です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋のひたち海浜公園散策の服装や持ち物のポイントは？</span>
                <span className="text-red-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 広大な敷地とみはらしの丘を歩いて登るため、歩きやすいスニーカーが必須です。10月の茨城沿岸部は海風が吹くと体感温度が下がるため、着脱しやすいマウンテンパーカーやカーディガン、ストールを用意しておくと安心です。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
