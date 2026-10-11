import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "秋の那須岳紅葉＆高原ステイ！那須高原：茶臼岳ロープウェイと名湯・隠れ家リゾート宿5選",
  description: "茶臼岳の山肌が燃えるような赤と黄金色に染まる那須高原の秋！ロープウェイの空中散歩から、那須御用邸近くの老舗名旅館、全室客室露天風呂付きの別邸リゾートまで厳選5選。",
  keywords: "那須高原 紅葉 見頃 10月, 茶臼岳 ロープウェイ 紅葉, 那須温泉 旅館 高級, 那須別邸 回, 那須温泉山楽, 那須 リゾートホテル",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-tochigi-nasu-kougen-momiji-resort-hotels-stay/",
  },
  openGraph: {
    title: "秋の那須岳紅葉＆高原ステイ！那須高原：茶臼岳ロープウェイと名湯・隠れ家リゾート宿5選",
    description: "茶臼岳の山肌が燃えるような赤と黄金色に染まる那須高原の秋！ロープウェイの空中散歩から、那須御用邸近くの老舗名旅館、全室客室露天風呂付きの別邸リゾートまで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-tochigi-nasu-kougen-momiji-resort-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "那須高原 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "秋の那須岳紅葉＆高原ステイ！那須高原：茶臼岳ロープウェイと名湯・隠れ家リゾート宿5選",
    description: "茶臼岳の山肌が燃えるような赤と黄金色に染まる那須高原の秋！ロープウェイの空中散歩から、那須御用邸近くの老舗名旅館、全室客室露天風呂付きの別邸リゾートまで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "那須別邸　回",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/136100/136100.jpg",
      hotelNo: 136100,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/136100/136100.html"),
      rating: 4.82,
      reviews: 90,
      price: "¥40,200〜",
      access: "東北新幹線 那須塩原駅より路線バス約45分／東北道 那須ICより車約15分",
      features: [
        "クチコミ4.82点。約2,000坪の静寂な森にわずか数室の独立した離れと専用温泉風呂",
        "山深き那須の素材を極めた山里料理。客室ごとに異なる意匠とモダンな美意識に寛ぐ極上ステイ",
        "栃木県那須郡那須町湯本206（大人の記念日やおこもり旅に選ばれる最高峰の隠れ家宿）"
      ]
    },
    {
      name: "那須温泉山楽",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/56935/56935.jpg",
      hotelNo: 56935,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/56935/56935.html"),
      rating: 4.67,
      reviews: 680,
      price: "¥41,800〜",
      access: "東北自動車道 那須ICより車で約15分／那須塩原駅より無料送迎バスあり（要事前予約）",
      features: [
        "大正十二年創業。御用邸と同じ源泉を引く名湯を、木立に囲まれた広大な自家源泉露天風呂で満喫",
        "厳選したとちぎ和牛をメインに据えた月替わりの本格日本料理。全室純和風の気品ある佇まい",
        "栃木県那須郡那須町湯本206（皇室ゆかりの格式と心尽くしのおもてなしを受け継ぐ名旅館）"
      ]
    },
    {
      name: "那須高原の宿　山水閣",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/109123/109123.jpg",
      hotelNo: 109123,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/109123/109123.html"),
      rating: 4.63,
      reviews: 350,
      price: "¥18,700〜",
      access: "那須塩原駅より路線バス「山水閣入口」下車徒歩5分／那須ICより車で約15分",
      features: [
        "昭和初期の木造建築の温もりとモダンが調和する静かな大人の宿。自然の木立に囲まれた貸切風呂",
        "那須黒毛和牛の豆乳しゃぶしゃぶなど素材の味を活かした創作山里懐石が大好評",
        "栃木県那須郡那須町湯本206（落ち着いたラウンジで珈琲や地酒を愉しむ贅沢な時間）"
      ]
    },
    {
      name: "那須温泉　ホテルエピナール那須",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/7335/7335.jpg",
      hotelNo: 7335,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/7335/7335.html"),
      rating: 4.42,
      reviews: 7850,
      price: "¥7,770〜",
      access: "東北新幹線 那須塩原駅より無料シャトルバス約30分（要予約）／那須ICより約10分",
      features: [
        "那須最大級の温泉大浴場＆露天風呂、室内温水プール完備。ファミリーからカップルまで幅広く対応",
        "楽天アワード常連！90種類以上の豪華バイキング朝食＆フレンチ・和食・炭火焼きレストラン",
        "栃木県那須郡那須町大字高久丙1番地（茶臼岳や那須高原の主要観光地へのアクセス抜群）"
      ]
    },
    {
      name: "那須温泉　ホテルサンバレー那須",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/20574/20574.jpg",
      hotelNo: 20574,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/20574/20574.html"),
      rating: 4.21,
      reviews: 6420,
      price: "¥12,650〜",
      access: "東北道 那須ICより那須街道を湯本方面へ約20分／那須塩原駅西口より無料送迎バス約40分",
      features: [
        "硫黄泉・マグネシウム泉・弱アルカリ泉の3種の泉質を誇る大型温泉テーマパーク「湯遊天国」併設",
        "和洋中の本格バイキングディナーと、夜のイルミネーションや美術館など多彩な館内施設",
        "栃木県那須郡那須町湯本203（グループや三世代での秋の温泉旅行に最適なリゾート）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
            alt="那須高原 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋の高原リゾート特集・那須岳紅葉と名湯
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">「秋の那須岳紅葉＆高原ステイ！那須高原」<br className="hidden sm:inline" />茶臼岳ロープウェイと名湯・隠れ家リゾート宿5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            ロープウェイで一気に空中散歩！活火山・茶臼岳の荒々しい岩肌と燃えるような赤と黄金色の紅葉コントラスト。御用邸の歴史を受け継ぐ名門旅館から森の別邸まで、今すぐ予約したい名宿をご案内。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【秋の那須岳紅葉＆高原ステイ！那須高原】茶臼岳ロープウェイと名湯・隠れ家リゾート宿5選</span>
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
                "name": "那須岳（茶臼岳）の紅葉見頃時期とロープウェイの利用方法は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "茶臼岳山頂付近（姥ヶ平や峰の茶屋周辺）は例年9月下旬〜10月上旬から色づき始め、10月中旬が見頃のピークとなります。山麓の那須高原温泉郷は10月中旬〜11月上旬にかけて見頃を迎えます。那須ロープウェイは山麓駅から山頂駅まで約4分で結び、空中から錦秋の大パノラマを一望できます。紅葉期の週末は午前8時台から駐車場が満車になるため早めの出発が必須です。"
                }
              },
              {
                "@type": "Question",
                "name": "那須高原での宿選びのポイント（高級隠れ家 vs 大型リゾート）は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "静かに大人の温泉旅や記念日を満喫したいなら、那須湯本エリアの「那須別邸 回」や「那須温泉山楽」「山水閣」など、御用邸近くの森に佇む客室数の限られた隠れ家旅館が最適です。一方、ファミリーやグループなら、プールや多彩なバイキング、泉質めぐりができる「ホテルエピナール那須」や「サンバレー那須」が人気です。"
                }
              },
              {
                "@type": "Question",
                "name": "10月の那須岳・那須高原の気候とトレッキングの服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "茶臼岳（標高1,915m）付近は風が非常に強く、10月は気温が5℃以下、体感温度は氷点下になることもあります。山歩きにはトレッキングシューズ、防風・防水性のあるマウンテンパーカー、フリース、手袋が不可欠です。山麓の高原エリアでも東京の初冬並みの寒さになるため、厚手のアウターを準備しましょう。"
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
              { "@type": "ListItem", "position": 3, "name": "【秋の那須岳紅葉＆高原ステイ！那須高原】茶臼岳ロープウェイと名湯・隠れ家リゾート宿5選", "item": "https://croud-travel.pages.dev/autumn-tochigi-nasu-kougen-momiji-resort-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              標高1,900mの山肌を染める紅葉の絨毯。那須連山の雄大美と御用邸ゆかりの名湯
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            都心から東北新幹線で約70分。関東屈指の高原リゾート「那須高原」は、雄大な主峰・茶臼岳の山頂から徐々に紅葉前線が降りてくる秋の絶景の宝庫です。「姥ヶ平（うばがだいら）」の水面に映る茶臼岳と鮮烈なカエデの赤、ロープウェイの窓から広がる360度の大パノラマは圧巻のスケール。散策後は開湯1300年の歴史を持つ那須温泉の鹿の湯源泉や御用邸ゆかりの名湯に浸かり、那須黒毛和牛や乳製品の恵みに癒やされる秋のリゾートステイをお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">那須ロープウェイ＆姥ヶ平の紅葉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">関東屈指の早咲き紅葉スポット。白煙を上げる噴気孔と燃えるような赤のナナカマド。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">御用邸ゆかりの上質な温泉と格式</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">皇室が愛した那須の静寂と自然。乳白色の硫黄泉や弱アルカリ泉など多彩な湯巡り。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">那須黒毛和牛と高原チーズの美食</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">澄んだ水と空気で育まれた極上のブランド和牛。新鮮な高原野菜や本格チーズ料理。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">北関東・高原リゾートガイド：御用邸の森と紅葉ロープウェイ・那須高原</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/20090321%E9%82%A3%E9%A0%88%E5%B2%B3.jpg"
                alt="御用邸の森と紅葉ロープウェイ・那須高原"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">御用邸の森と紅葉ロープウェイ・那須高原の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">那須高原（なすこうげん）とは、栃木県北部の那須岳の南側山麓地域を言い、那須岳の標高千数百メートルの地域より東北本線、国道4号が通る標高300m辺りまで、緩やかな斜面が広がる。また、那珂川を挟んで那須野が原、那須高原の北西側は福島県の甲子高原に連なる。</p>
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
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">那須岳紅葉と高原ステイに最適な厳選宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選リゾート・温泉宿 5選</h2>
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
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】那須岳ロープウェイ紅葉＆名湯リゾート満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-700 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-700 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">那須高原到着〜高原カフェ＆隠れ家チェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">12:00〜</strong> 那須塩原駅に到着しレンタカーまたは路線バスで出発。那須街道沿いの老舗ベーカリーカフェでランチ。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 殺生石や那須温泉神社を参拝。硫黄の香りが漂う湯川沿いの散策路を歩く。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> ホテル・温泉旅館へチェックイン。木立を渡る秋風を感じながら露天風呂でリフレッシュ。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> とちぎ和牛のステーキや那須山里懐石ディナーに舌鼓。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝一番の那須ロープウェイ〜姥ヶ平の絶景鑑賞</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:00〜</strong> 混雑を避けて早めに宿を出発し、那須ロープウェイ山麓駅へ。</li>
                <li>・<strong className="text-stone-800">08:45〜</strong> ロープウェイで茶臼岳9合目へ！眼下に広がる錦秋の大パノラマを空中鑑賞。</li>
                <li>・<strong className="text-stone-800">10:30〜</strong> 牛ヶ首や姥ヶ平方面へ少し足を伸ばし、火山の荒涼とした岩肌と真っ赤な紅葉を撮影。</li>
                <li>・<strong className="text-stone-800">13:30〜</strong> チーズガーデン那須本店で御用邸チーズケーキを購入し、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と那須高原旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 那須岳（茶臼岳）の紅葉見頃時期とロープウェイの利用方法は？</span>
                <span className="text-amber-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 茶臼岳山頂付近（姥ヶ平や峰の茶屋周辺）は例年9月下旬〜10月上旬から色づき始め、10月中旬が見頃のピークとなります。山麓の那須高原温泉郷は10月中旬〜11月上旬にかけて見頃を迎えます。那須ロープウェイは山麓駅から山頂駅まで約4分で結び、空中から錦秋の大パノラマを一望できます。紅葉期の週末は午前8時台から駐車場が満車になるため早めの出発が必須です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 那須高原での宿選びのポイント（高級隠れ家 vs 大型リゾート）は？</span>
                <span className="text-amber-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 静かに大人の温泉旅や記念日を満喫したいなら、那須湯本エリアの「那須別邸 回」や「那須温泉山楽」「山水閣」など、御用邸近くの森に佇む客室数の限られた隠れ家旅館が最適です。一方、ファミリーやグループなら、プールや多彩なバイキング、泉質めぐりができる「ホテルエピナール那須」や「サンバレー那須」が人気です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 10月の那須岳・那須高原の気候とトレッキングの服装は？</span>
                <span className="text-amber-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 茶臼岳（標高1,915m）付近は風が非常に強く、10月は気温が5℃以下、体感温度は氷点下になることもあります。山歩きにはトレッキングシューズ、防風・防水性のあるマウンテンパーカー、フリース、手袋が不可欠です。山麓の高原エリアでも東京の初冬並みの寒さになるため、厚手のアウターを準備しましょう。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
