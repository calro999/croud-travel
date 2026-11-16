import ShareButtons from "@/app/components/ShareButtons";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選",
  description: "富山湾の冬の訪れを告げる「ひみ寒ぶり宣言」！丸々と太り極上の脂を蓄えた天然寒ブリの刺身、とろけるブリしゃぶ、香ばしいカマ焼き、そして海越しに雪化粧の立山連峰を望む奇跡のパノラマ温泉宿。",
  keywords: "氷見 温泉 旅館, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-toyama-himi-kanburi-luxury-stay/",
  },
  openGraph: {
    title: "【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選",
    description: "富山湾の冬の訪れを告げる「ひみ寒ぶり宣言」！丸々と太り極上の脂を蓄えた天然寒ブリの刺身、とろけるブリしゃぶ、香ばしいカマ焼き、そして海越しに雪化粧の立山連峰を望む奇跡のパノラマ温泉宿。",
    url: 'https://croud-travel.pages.dev/winter-toyama-himi-kanburi-luxury-stay/',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/188047/188047.jpg',
        width: 1200,
        height: 630,
        alt: "【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選",
    description: "富山湾の冬の訪れを告げる「ひみ寒ぶり宣言」！丸々と太り極上の脂を蓄えた天然寒ブリの刺身、とろけるブリしゃぶ、香ばしいカマ焼き、そして海越しに雪化粧の立山連峰を望む奇跡のパノラマ温泉宿。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選",
    "description": "富山湾の冬の訪れを告げる「ひみ寒ぶり宣言」！丸々と太り極上の脂を蓄えた天然寒ブリの刺身、とろけるブリしゃぶ、香ばしいカマ焼き、そして海越しに雪化粧の立山連峰を望む奇跡のパノラマ温泉宿。",
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188047/188047.jpg",
    "datePublished": "2026-10-18T00:00:00+09:00",
    "dateModified": "2026-10-18T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド 編集部",
      "url": "https://croud-travel.pages.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-toyama-himi-kanburi-luxury-stay/"
    }
  };

  const hotelList = [
            {
              name: "氷見旅館　たきの荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188047/188047.jpg",
              rating: 4.6,
              reviews: 67,
              price: "¥5,000〜",
              access: "JR氷見線　氷見駅よりお車にて約6分",
              features: ["「ひみ番屋街」まで徒歩3分！！氷見や富山観光の拠点としてご利用くださいませ。", "氷見市北大町7-38", "楽天アワード受賞歴"]
            },
            {
              name: "氷見温泉郷　魚巡りの宿　永芳閣（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29954/29954.jpg",
              rating: 4.4,
              reviews: 1690,
              price: "¥8,200〜",
              access: "【ＪＲ】氷見線　氷見駅から車で１０分（無料送迎あり）/【車】北陸（東海北陸）自動車道⇒能越自動車道　氷見北ＩＣより５分",
              features: ["北陸の富山を代表する、お魚処氷見の旅館。評判の魚料理と絶景の露天。海一望の客室。貸切風呂無料プランも", "氷見市阿尾3257", "楽天アワード受賞歴"]
            },
            {
              name: "氷見温泉郷　民宿いけもり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141093/141093.jpg",
              rating: 4.2,
              reviews: 83,
              price: "¥8,500〜",
              access: "氷見駅よりお車にて約２０分（６.０ｋｍ）/【車】北陸（東海北陸）自動車道⇒能越自動車道　氷見北ＩＣより５分",
              features: ["魚処・氷見の山里に佇む、癒しの宿。露天風呂が自慢です☆【全室Wi-Fi完備！ 】", "氷見市指崎1632　　　　　　　　　　　　　　　　　　　　　　　　　　", "楽天アワード受賞歴"]
            },
            {
              name: "温泉めい想倶楽部　富士屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5174/5174.jpg",
              rating: 4.0,
              reviews: 990,
              price: "¥7,040〜",
              access: "【ＪＲ】北陸本線加賀温泉駅より送迎有（１4：３０～１８：００）要事前予約／【車】北陸道加賀IC又は片山津ICより約20分",
              features: ["【料理高評価】ライブラリ・ギャラリー・無料卓球・など嬉しいがいっぱい♪◆楽天トラベルアワード受賞の宿", "加賀市山代温泉桔梗ヶ丘2-121-3", "楽天アワード受賞歴"]
            },
            {
              name: "宇奈月温泉の老舗旅館　延対寺荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4804/4804.jpg",
              rating: 4.3,
              reviews: 1570,
              price: "¥13,200〜",
              access: "北陸自動車道黒部 Ｉ．Ｃより２０分。富山地方鉄道「宇奈月温泉駅」より徒歩５分。",
              features: ["温泉街でも最も眺望の良い場所に立地し、源泉１００％の加温・加水無しの湯がお楽しみいただけます。", "黒部市宇奈月温泉53", "楽天アワード受賞歴"]
            }
  ];


  return (
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[580px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('https://img.travel.rakuten.co.jp/share/HOTEL/188047/188047.jpg')" }}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-sm font-semibold tracking-wider mb-6 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>ひみ寒ぶり会席＆立山連峰絶景温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            富山湾の冬の訪れを告げる「ひみ寒ぶり宣言」！丸々と太り極上の脂を蓄えた天然寒ブリの刺身、とろけるブリしゃぶ、香ばしいカマ焼き、そして海越しに雪化粧の立山連峰を望む奇跡のパノラマ温泉宿。
          </p>
        </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <ShareButtons title={"【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選"} url={"https://croud-travel.pages.dev/winter-toyama-himi-kanburi-luxury-stay/"} />
      </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features/" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「氷見旅館 たきの荘」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「氷見旅館 たきの荘」へは、JR氷見線 氷見駅よりお車にて約6分。最寄りの氷見駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「氷見旅館 たきの荘」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「氷見旅館 たきの荘」は『「ひみ番屋街」まで徒歩3分！！氷見や富山観光の拠点としてご利用くださいませ。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「氷見旅館 たきの荘」と「氷見温泉郷 魚巡りの宿 永芳閣」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選","item":"https://croud-travel.pages.dev/winter-toyama-himi-kanburi-luxury-stay/"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">荒波が育む脂の乗った最高峰の寒ブリ。富山湾の冬の奇跡「氷見寒ブリ」と絶景温泉ステイ</h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            毎年11月下旬頃、富山湾に鳴り響く「ぶり起こし」の雷鳴とともに水揚げが本格化する「氷見の寒ブリ」。厳しい日本海の荒波を乗り越え、きめ細やかな脂を全身にまとった身は、まさに海の宝石です。さっと出汁にくぐらせて余分な脂を落とし、甘みと旨味を凝縮させる「ブリしゃぶ」や、濃厚なブリ大根は冬ならではの至福。海越しに白銀の立山連峰が浮かび上がる富山湾の絶景露天風呂に浸かり、心温まる贅沢な時間をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">本場・氷見港直送「極上ひみ寒ぶりフルコース」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">寒ブリのお造り、とろけるブリしゃぶ、脂ののったカマ塩焼き、濃厚ブリ大根。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">海越しに3000m級の立山連峰を望む絶景展望露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ナトリウム塩化物泉の温まり名湯。朝日に輝く雪山と富山湾のコントラスト。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">白エビ・紅ズワイガニ・富山湾の旬魚の競演</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">天然の生け簀と称される富山湾の幸。地酒「勝駒」や「立山」とともに。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards List */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">11・12月おすすめ宿泊施設</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選おすすめ宿 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金・空室情報は季節により変動します</p>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors mb-3">{hotel.name}</h3>

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
                      <span className="text-xs text-stone-500 block">参考料金 (2名1室利用時/1名あたり)</span>
                      <span className="text-xl md:text-2xl font-black text-amber-600">{hotel.price}</span>
                    </div>
                    <a
                      href={(() => { const id = hotel.img?.match(/HOTEL\/(\d+)/)?.[1]; return id ? `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=${encodeURIComponent(`https://travel.rakuten.co.jp/HOTEL/${id}/${id}.html`)}` : `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=${encodeURIComponent(`https://travel.rakuten.co.jp/`)}`; })()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
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
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">【1泊2日】氷見旅館 たきの荘を拠点にするおすすめ滞在モデルコース</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 氷見駅よりアクセス。JR氷見線 氷見駅よりお車にて約6分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「氷見旅館 たきの荘」にチェックイン。「ひみ番屋街」まで徒歩3分！！氷見や富山観光の拠点としてご利用くださいませ。 窓外に広がる景色を眺めながらチェックイン後の寛ぎ時間を。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「氷見旅館 たきの荘」の湯船で寛ぎタイム。季節の空気を感じながら手足を伸ばし、心豊かな夕方のリラックス時間を満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「氷見旅館 たきの荘」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「氷見旅館 たきの荘」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「氷見旅館 たきの荘」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は宿周辺の散策とショッピングを満喫。地元の名産品やグルメを味わってから余裕をもって帰路につく。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">よくある質問（FAQ）と氷見旅館 たきの荘の滞在ポイント</h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「氷見旅館 たきの荘」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「氷見旅館 たきの荘」へは、JR氷見線 氷見駅よりお車にて約6分。最寄りの氷見駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「氷見旅館 たきの荘」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「氷見旅館 たきの荘」は『「ひみ番屋街」まで徒歩3分！！氷見や富山観光の拠点としてご利用くださいませ。 窓外に広がる景色を眺めながらチェックイン後の寛ぎ時間を。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「氷見旅館 たきの荘」と「氷見温泉郷 魚巡りの宿 永芳閣」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">あわせて読みたい人気特集＆全国エリアガイド</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 leading-relaxed">富山・高岡＆射水・新湊・雨晴 国宝「高岡瑞龍寺」新春初詣＆雨晴海岸の気嵐絶景！ 新湊紅ズワイガニ・富山湾寒ブリ＆高岡名宿5選</span>
            </a>
            <a href="/autumn-budget-toyama-tateyama-kurobe-onsen-hotels-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 leading-relaxed">「秋の富山×格安」立山連峰の三段紅葉と富山湾の白えび・紅ズワイガニ！天然温泉付き1泊4,000円〜6,000円台のコスパ最強ホテル5選</span>
            </a>
            <a href="/firefly-squid-toyama-spring-gourmet-onsen-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 leading-relaxed">「富山湾の青い神秘（春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選）」富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選</span>
            </a>
            <a href="/furusato-tax-shirakawa-gokayama-gassho-autumn-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 leading-relaxed">世界遺産・五箇山合掌造りと庄川峡紅葉遊覧船！庄川温泉郷の美肌湯・秋の鮎料理と富山地酒を味わう秋旅｜ふるさと納税で泊まれる名宿ガイド</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/toyama/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                富山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagano/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamanashi/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山梨県の宿・温泉
              </Link>
              <Link
                href="/prefectures/niigata/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

        {/* Related Callout */}
        <section className="text-center py-8 border-t border-stone-200">
          <h3 className="text-lg font-bold text-stone-800 mb-3">他の特集記事もチェック</h3>
          <p className="text-sm text-stone-500 mb-6">全国各地の魅力あふれるテーマ別おすすめ宿泊施設をご紹介しています</p>
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>特集一覧ページへ戻る</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </section>
      
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* FAQ Section */}
        

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">あわせて読みたい人気特集＆全国エリアガイド</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link
              href="/furusato-tax-three-great-lacquer-tree-forests-stay/"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm leading-snug">日本三大漆原木美林＆うるしの森トレッキングと漆器ギャラリー名旅館×ふるさと納税完全ガイド【2026年最新】浄法寺・会津・丹波</h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/spring-yamanashi-koshu-wine-beef-stay/"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm leading-snug">【甲州ワインビーフ＆勝沼ワイナリー】芳醇ワインペアリングと石和温泉の美食宿5選</h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-wagyu-beef-luxury-stay/"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm leading-snug">日本三大銘牛の極上鉄板焼き＆すき焼き名湯宿×ふるさと納税完全ガイド【2026年最新】松阪牛・神戸牛・米沢牛</h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-kurokawa-onsen-nyuto-tegata-stay/"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm leading-snug">【黒川温泉×ふるさと納税】入湯手形で巡る秘境露天風呂＆極上あか牛美食！里山の名門隠れ家宿完全ガイド｜山みず木・旅館わかば・山の宿新明館</h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/saitama/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                埼玉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hyogo/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                兵庫県の宿・温泉
              </Link>
              <Link
                href="/prefectures/akita/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                秋田県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kyoto/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                京都府の宿・温泉
              </Link>
            </div>
          
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8">
        <ShareButtons title={"【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選"} url={"https://croud-travel.pages.dev/winter-toyama-himi-kanburi-luxury-stay/"} />
      </div>
      <HubRelatedPosts currentSlug="winter-toyama-himi-kanburi-luxury-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
