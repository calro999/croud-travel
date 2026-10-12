import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【竹林の秘境・日本最高峰ラグジュアリー離れ「竹ふえ」と「月洸樹」】2026-2027年11-12月初冬の熊本・黒川温泉郷奥座敷！広大な客室専用露天風呂と幻のあか牛フィレ炭火焼き・大人の一生に一度は泊まりたい憧れ名宿5選 | クラウドトラベル',
  description: '阿蘇外輪山の奥深く、鬱蒼とした竹林と清らかな小川に包まれた南小国・黒川温泉郷の奥座敷。全国の温泉ファンが「一生に一度は泊まりたい」と憧れる日本最高峰のプライベート離れ「竹ふえ」や「月洸樹 黒川」。数百平米もの広さを誇る客室専用露天風呂や内湯に自家源泉が並々と掛け流され、冬の冷たい大気の中で竹林のライトアップを眺める至高の湯浴み。熊本が誇る幻の和牛「あか牛」の極上フィレ肉炭火焼きと季節の創作会席を味わう、究極の贅沢名宿5選。',
  keywords: '熊本県, 黒川温泉, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【竹林の秘境・日本最高峰ラグジュアリー離れ「竹ふえ」と「月洸樹」】2026-2027年11-12月初冬の熊本・黒川温泉郷奥座敷！広大な客室専用露天風呂と幻のあか牛フィレ炭火焼き・大人の一生に一度は泊まりたい憧れ名宿5選',
    description: '阿蘇外輪山の奥深く、鬱蒼とした竹林と清らかな小川に包まれた南小国・黒川温泉郷の奥座敷。全国の温泉ファンが「一生に一度は泊まりたい」と憧れる日本最高峰のプライベート離れ「竹ふえ」や「月洸樹 黒川」。数百平米もの広さを誇る客室専用露天風呂や内湯に自家源泉が並々と掛け流され、冬の冷たい大気の中で竹林のライトアップを眺める至高の湯浴み。熊本が誇る幻の和牛「あか牛」の極上フィレ肉炭火焼きと季節の創作会席を味わう、究極の贅沢名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-kumamoto-kurokawa-shirakawa-luxury-takefue-gekkouju-akagyu-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kumamoto-kurokawa-shirakawa-luxury-takefue-gekkouju-akagyu-stay',
  },
};

export default function LuxuryWinterFeaturePage() {

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【竹林の秘境・日本最高峰ラグジュアリー離れ「竹ふえ」と「月洸樹」】2026-2027年11-12月初冬の熊本・黒川温泉郷奥座敷！広大な客室専用露天風呂と幻のあか牛フィレ炭火焼き・大人の一生に一度は泊まりたい憧れ名宿5選 | クラウドトラベル",
    "description": "阿蘇外輪山の奥深く、鬱蒼とした竹林と清らかな小川に包まれた南小国・黒川温泉郷の奥座敷。全国の温泉ファンが「一生に一度は泊まりたい」と憧れる日本最高峰のプライベート離れ「竹ふえ」や「月洸樹 黒川」。数百平米もの広さを誇る客室専用露天風呂や内湯に自家源泉が並々と掛け流され、冬の冷たい大気の中で竹林のライトアップを眺める至高の湯浴み。熊本が誇る幻の和牛「あか牛」の極上フィレ肉炭火焼きと季節の創作会席を味わう、究極の贅沢名宿5選。",
    "image": ["https://croud-travel.pages.dev/winter-kumamoto-kurokawa-shirakawa-luxury-takefue-gekkouju-akagyu-stay"],
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "url": "https://croud-travel.pages.dev/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/favicon.ico"
      }
    },
    "datePublished": "2026-09-01T09:00:00+09:00",
    "dateModified": "2026-10-12T11:00:00+09:00",
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-kumamoto-kurokawa-shirakawa-luxury-takefue-gekkouju-akagyu-stay/"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 構造化データ: FAQ & Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "ホーム",
                  "item": "https://croud-travel.pages.dev"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "特集一覧",
                  "item": "https://croud-travel.pages.dev/features"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "【竹林の秘境・日本最高峰ラグジュアリー離れ「竹ふえ」と「月洸樹」】2026-2027年11-12月初冬の熊本・黒川温泉郷奥座敷！広大な客室専用露天風呂と幻のあか牛フィレ炭火焼き・大人の一生に一度は泊まりたい憧れ名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-kumamoto-kurokawa-shirakawa-luxury-takefue-gekkouju-akagyu-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "黒川温泉の有名な「入湯手形」は宿泊者以外でも購入できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい、黒川温泉観光旅館協同組合（風の舎）や各旅館のフロントで1枚1,500円（税込）で購入できます。手形1枚につき、参加旅館の中からお好きな3箇所の露天風呂に入浴可能です。有効期限は半年間あるため、宿泊当日のチェックイン前やチェックアウト後の湯巡りにも大活躍します。"
          }
        },
        {
          "@type": "Question",
          "name": "「あか牛」とはどのような牛肉ですか？黒毛和牛との違いは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "「あか牛（褐毛和種）」は熊本・阿蘇の大自然で放牧されて育つ和牛です。黒毛和牛に比べて無駄な脂肪分が少なく、赤身肉の中にアミノ酸と適度なサシが凝縮されているのが最大の特徴です。胃もたれせず、噛むほどに芳醇な赤身本来の濃厚な旨味が広がるヘルシーで贅沢な高級和牛です。"
          }
        },
        {
          "@type": "Question",
          "name": "11月〜12月に阿蘇・黒川温泉へレンタカーで行く際の道路状況は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "11月中旬までは概ねノーマルタイヤで通行できますが、11月下旬以降や12月に入ると阿蘇山周辺やミルクロード、やまなみハイウェイなどの峠道で突然の降雪や凍結が発生します。冬季に訪れる場合は、スタッドレスタイヤ装着のレンタカーを予約することを強くおすすめします。"
          }
        }
              ]
            }
          ])
        }}
      />

      {/* パンくずリスト */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-500 py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition">ホーム</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/features" className="hover:text-slate-800 transition">特集一覧</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">【竹林の秘境・日本最高峰ラグジュアリー離れ「竹ふえ」と「月洸樹」】2026-2027年11-12月初冬の熊本・黒川温泉郷奥座敷！広大な客室専用露天風呂と幻のあか牛フィレ炭火焼き・大人の一生に一度は泊まりたい憧れ名宿5選</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026-2027年 憧れの高級宿・ラグジュアリー特選</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【竹林の秘境・日本最高峰ラグジュアリー離れ「竹ふえ」と「月洸樹」】2026-2027年11-12月初冬の熊本・黒川温泉郷奥座敷！広大な客室専用露天風呂と幻のあか牛フィレ炭火焼き・大人の一生に一度は泊まりたい憧れ名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            阿蘇外輪山の奥深く、鬱蒼とした竹林と清らかな小川に包まれた南小国・黒川温泉郷の奥座敷。全国の温泉ファンが「一生に一度は泊まりたい」と憧れる日本最高峰のプライベート離れ「竹ふえ」や「月洸樹 黒川」。数百平米もの広さを誇る客室専用露天風呂や内湯に自家源泉が並々と掛け流され、冬の冷たい大気の中で竹林のライトアップを眺める至高の湯浴み。熊本が誇る幻の和牛「あか牛」の極上フィレ肉炭火焼きと季節の創作会席を味わう、究極の贅沢名宿5選。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        {/* 導入解説 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600 shrink-0" />
            <span>初冬にこの地を訪れるべき理由と風土の魅力</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            阿蘇くじゅう国立公園の南麓、鬱蒼とした杉や雑木林の深い渓谷沿いに木造の湯宿が寄り添うように立ち並ぶ熊本県・南小国町。『黒川温泉郷』は、『街全体が一つの宿（宿は離れ、道は廊下、植木は庭）』という景観哲学のもと、日本で最も統一された風情ある景観を誇る全国屈指の温泉地です。この黒川温泉からさらに山奥へと分け入った白川温泉や小田温泉の一帯は、喧騒から完全に隔離された『全国の温泉愛好家が一生に一度は泊まりたいと切望する超高級離れ宿』が点在する聖地。その頂点に君臨するのが、数千坪の広大な竹林にわずか数室の離れのみを贅沢に配した『竹ふえ』や、阿蘇の峰々を望む全室露天付きヴィラ『月洸樹 黒川』など、1泊1名10万〜25万円を超える日本最高峰のプレミアム宿です。客室の扉を開けると、そこには優に十数人が入れるほどの巨大な専用露天風呂や内湯、足湯が備えられ、自家源泉の滑らかな美肌湯が24時間掛け流されています。初冬の11月から12月にかけては、温泉街で冬の風物詩である竹灯籠のライトアップ『湯あかり』が始まり、静まり返った渓流沿いに柔らかな竹の灯火が揺らめく光景は息を呑むほど幻想的。食事には、広大な阿蘇の大草原で放牧されヘルシーな赤身の旨味と濃厚なアミノ酸を蓄えた幻のブランド和牛『あか牛（褐毛和種）』の極上フィレ肉炭火焼き。人目を一切気にすることのない完全プライベート空間で、雪をまとった阿蘇外輪山と静寂の竹林を眺めながら過ごす夜は、これまでの旅行体験のすべてを塗り替える究極のラグジュアリー体験となります。
          </p>
          
          <div className="pt-4 space-y-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900">
              ▼ 本テーマが初冬の記念日・贅沢旅に絶対おすすめな3大ポイント
            </h3>
            <div className="space-y-3">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                1
              </span>
              <span>全国屈指の憧れ！広大な竹林に佇む日本最高峰の離れ宿と巨大専用露天風呂</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              数千坪の敷地にわずかな客室のみを配した完全プライベートヴィラ。誰にも気兼ねせず、客室専用の巨大露天風呂で自家源泉掛け流しの湯を独り占めする贅沢が叶います。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>冬の風物詩「湯あかり」ライトアップ！竹灯籠が田の原川を照らす幻想的な夜</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              11月下旬から点灯する黒川温泉の冬名物『湯あかり』。職人が彫り上げた数百本の竹灯籠が川面や橋を幻想的な光で包み込み、初冬の温泉街をロマンチックに彩ります。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>阿蘇の大草原が育む幻の牛肉「あか牛」フィレ炭火焼きと馬刺しの極上会席</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              赤身の濃厚な旨味と上質なサシが調和した熊本の至宝『あか牛』。極上フィレ肉の炭火焼きや新鮮な特選馬刺し、地元の山の幸を贅沢に味わう至高のディナーを堪能できます。
            </p>
          </div>
            </div>
          </div>
        </section>

        {/* Wikipedia連携 観光地紹介 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-600 shrink-0" />
              <span>近隣の必見名所：黒川温泉 (熊本県)</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/TsukimiBashi2004-12.jpg/1280px-TsukimiBashi2004-12.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="「街全体が一つの宿」緑豊かな渓谷の秘湯・黒川温泉（入湯手形と田の原川のせせらぎ・竹林の美）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                「街全体が一つの宿」緑豊かな渓谷の秘湯・黒川温泉（入湯手形と田の原川のせせらぎ・竹林の美）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                温泉街（おんせんがい、おんせんまち）は、温泉に付随して温浴施設や宿泊施設、飲食店や土産物店、遊戯店などが立ち並ぶ町並み。...
              </p>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200/60 text-[11px] md:text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-0.5">💡 周辺観光のポイント</span>
                各高級旅館からスムーズにアクセス可能。初冬の澄んだ大気のもとで、静寂と壮大な自然美を心ゆくまで堪能できます。
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API厳選宿 5選 */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block">RAKUTEN TRAVEL LUXURY RANKING</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                一生に一度は泊まりたい最高峰名宿 5選
              </h2>
            </div>
            <span className="text-xs text-slate-500">リアルタイムAPI連携データ</span>
          </div>

          <div className="space-y-6">
        {/* 宿カード 1: 黒川温泉　旅館　山河 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              国の登録有形文化財と薬師の湯！三千坪の敷地に佇む日本旅館の最高峰
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.64</span>
              <span className="text-slate-400">（クチコミ 152件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/138061/138061.jpg"
                  alt="黒川温泉　旅館　山河"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  黒川温泉　旅館　山河
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>熊本県阿蘇郡南小国町</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>阿蘇駅からバスで５０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>黒川温泉街から少し離れた静寂の山あいに佇み、約3000坪の広大な敷地にわずか数室の客室と美しい雑木林を有する名旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>敷地内には自家源泉が2本湧出し、pHの異なる名湯を大浴場や渓流沿いの露天風呂、貸切風呂など多彩な湯処で掛け流しで堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地元熊本の滋味あふれる食材を丁寧に仕立てた創作会席。極上のあか牛料理や新鮮な馬刺しなど、郷土の恵みを心ゆくまで味わえます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥26,620</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138061%2F138061.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 2: 黒川温泉　山みず木別邸　深山山荘 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              全室離れ・専用露天風呂付き！田の原川の渓流沿いに佇む別邸スイート
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.76</span>
              <span className="text-slate-400">（クチコミ 313件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147706/147706.jpg"
                  alt="黒川温泉　山みず木別邸　深山山荘"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  黒川温泉　山みず木別邸　深山山荘
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>熊本県阿蘇郡南小国町満願寺6393</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>バスで到着の場合、黒川温泉バス停より無料送迎あり(要予約)</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>名宿『山みず木』の別邸として誕生した、全室が完全独立した離れ形式のプレミアムリゾート。プライベート感を追求した贅沢な造りです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>すべての客室に専用の温泉内湯や露天風呂を備え、川のせせらぎを聞きながら誰にも気兼ねなく源泉掛け流しの湯を独り占めできます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>お食事処も全室個室となっており、プライバシーを重視するご夫婦やカップルの記念日旅行に最高の贅沢を提供してくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥24,850</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147706%2F147706.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 3: 黒川温泉　山の宿　新明館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              創業百余年・手掘りの洞窟風呂が名物！黒川温泉の中心に佇む情緒あふれる老舗
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.67</span>
              <span className="text-slate-400">（クチコミ 375件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/80794/80794.jpg"
                  alt="黒川温泉　山の宿　新明館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  黒川温泉　山の宿　新明館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>熊本県阿蘇郡南小国町満願寺6608</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>九州自動車道・鳥栖JCTより大分道へ。日田IC下車後、黒川温泉まで約１時間</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>温泉街の中心を流れる田の原川沿いに建ち、十代目の主人がノミ一本で掘り進めたという伝説の『洞窟風呂』で全国に知られる名門旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>温泉街の散策や湯あかり鑑賞へのアクセスは抜群。川のせせらぎと提灯の灯りが風情ある夜を演出してくれます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>肥後赤牛の炭火焼きや郷土料理を盛り込んだ夕食は味わい深く、古き良き黒川温泉の情緒にどっぷりと浸かることができます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥22,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80794%2F80794.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 4: 黒川温泉　山あいの宿　山みず木 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              自然と調和する渓流露天風呂の元祖！田の原川と一体化する至高の湯浴み
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.64</span>
              <span className="text-slate-400">（クチコミ 485件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/136864/136864.jpg"
                  alt="黒川温泉　山あいの宿　山みず木"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  黒川温泉　山あいの宿　山みず木
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>熊本県阿蘇郡南小国町黒川温泉</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>大分自動車道・日田ICより国道212号線を熊本方面へ約70分。黒川温泉バス停から車で約10分（送迎要予約）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>黒川温泉の最奥部、原生林に囲まれた清流沿いに佇む人気の温泉旅館。川のすぐ脇に作られた名物露天風呂『幽谷の湯』の開放感は圧巻です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>裸足で歩ける畳敷きの館内や温かな木造建築の美しさが旅人の心を癒やし、非日常のリラックスへと誘います。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地元の契約農家が育てる野菜や阿蘇の銘柄牛を用いた彩り豊かな和食会席。丁寧なおもてなしとともに極上の時間を過ごせます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥23,100</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F136864%2F136864.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 5: 滝の上温泉　お宿　花風月 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              全室離れ・源泉掛け流し客室露天風呂！大人の隠れ家名宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.50</span>
              <span className="text-slate-400">（クチコミ 110件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/79284/79284.jpg"
                  alt="滝の上温泉　お宿　花風月"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  滝の上温泉　お宿　花風月
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>熊本県阿蘇郡南小国町満願寺瀧の上5890</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>阿蘇駅よりお車で４０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>黒川温泉の奥、滝の上温泉の静寂に包まれた地に位置する全室離れの高級旅館。大人の贅沢な隠れ家として高い人気を誇ります。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>各離れには専用の露天風呂が完備され、効能豊かな源泉が24時間掛け流されています。人目を気にせず名湯を満喫できる環境が整っています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は厳選された熊本牛や新鮮な馬刺し、季節の山の幸をふんだんに取り入れた豪華会席。静かな山あいで特別な記念日を祝うのに最適です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥19,800</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79284%2F79284.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </section>

        {/* アクセス＆見頃情報 */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 text-amber-300">
            <Train className="w-5 h-5 shrink-0" />
            <span>アクセスガイド・気候と服装のポイント</span>
          </h2>
          <div className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            【エリアへのアクセス】
・飛行機・熊本空港から：阿蘇くじゅう観光バスまたは九州産交バス「やまびこ号」「九州横断バス」で黒川温泉まで直通約2時間。空港からレンタカー利用ならミルクロード経由で約1時間20分。
・飛行機・福岡空港から：博多バスターミナル・福岡空港国際線より高速バス「福岡〜黒川温泉線」で直通約2時間40分。
・新幹線・熊本駅から：JR九州横断特急で阿蘇駅経由、または熊本駅前より九州横断バスで約2時間50分。
・車：大分自動車道「日田IC」より国道212号線経由で約1時間。または九州自動車道「熊本IC」よりミルクロード経由で約1時間20分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜12月（竹灯籠のライトアップ「湯あかり」がスタートし、初雪が舞う渓谷露天風呂の風情が最も高まる大人の狙い目シーズン）。
・気温の目安：阿蘇外輪山の北側、標高約700mの山間部に位置するため冬の寒さは厳しく、11月は日中11〜15℃、朝晩は3〜6℃。12月は日中でも6〜9℃、朝晩は氷点下に達します。
・服装のポイント：厚手のダウンコート、手袋、マフラーを必ずご着用ください。黒川温泉街の坂道散策や湯あかり見学には、歩きやすいフラットシューズやスノーブーツが適しています。
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>よくある質問（FAQ）</span>
          </h2>
          <div className="space-y-3">
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>黒川温泉の有名な「入湯手形」は宿泊者以外でも購入できますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              はい、黒川温泉観光旅館協同組合（風の舎）や各旅館のフロントで1枚1,500円（税込）で購入できます。手形1枚につき、参加旅館の中からお好きな3箇所の露天風呂に入浴可能です。有効期限は半年間あるため、宿泊当日のチェックイン前やチェックアウト後の湯巡りにも大活躍します。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>「あか牛」とはどのような牛肉ですか？黒毛和牛との違いは？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              「あか牛（褐毛和種）」は熊本・阿蘇の大自然で放牧されて育つ和牛です。黒毛和牛に比べて無駄な脂肪分が少なく、赤身肉の中にアミノ酸と適度なサシが凝縮されているのが最大の特徴です。胃もたれせず、噛むほどに芳醇な赤身本来の濃厚な旨味が広がるヘルシーで贅沢な高級和牛です。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月〜12月に阿蘇・黒川温泉へレンタカーで行く際の道路状況は？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              11月中旬までは概ねノーマルタイヤで通行できますが、11月下旬以降や12月に入ると阿蘇山周辺やミルクロード、やまなみハイウェイなどの峠道で突然の降雪や凍結が発生します。冬季に訪れる場合は、スタッドレスタイヤ装着のレンタカーを予約することを強くおすすめします。
            </p>
          </div>
          </div>
        </section>

        {/* ふるさと納税・関連リンク */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-2xl p-6 md:p-8 space-y-3 text-center">
          <h2 className="text-xl md:text-2xl font-black">
            楽天トラベル ふるさと納税で最大30%お得に予約！
          </h2>
          <p className="text-xs md:text-sm max-w-xl mx-auto font-medium">
            高価格帯の高級宿だからこそ、楽天トラベルふるさと納税クーポンの割引効果は絶大。実質2,000円の自己負担で憧れのスイートルームに宿泊できます。
          </p>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-slate-950 text-white font-black text-sm rounded-xl shadow-lg hover:bg-slate-900 transition transform active:scale-95"
            >
              <span>楽天トラベル ふるさと納税クーポンをチェック</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
