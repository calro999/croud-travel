import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【奥州三名湯・飯坂温泉の熱湯共同浴場と名物円盤餃子】2026-2027年11-12月初冬の福島・飯坂！芭蕉ゆかりの鯖湖湯と波来湯・熱気あふれる湯めぐり、パリパリ焼き立て「名物円盤餃子」ととろける福島牛すき焼き・露天風呂名宿5選',
  description: '奥州三名湯の歴史を刻む福島の奥座敷・飯坂温泉！松尾芭蕉も浸かった日本最古級の木造共同浴場「鯖湖湯」をはじめとする熱湯共同浴場めぐりで、冬の寒気を吹き飛ばす芯からの温まり。摺上川の渓谷美を望む露天風呂と、名店が競い合う香ばしい「名物円盤餃子」、極上福島牛すき焼きを堪能する初冬の厳選名宿5選。',
  keywords: '福島県, 飯坂温泉, 温泉, 11月旅行, 12月旅行, 冬休み旅行, 初冬旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【奥州三名湯・飯坂温泉の熱湯共同浴場と名物円盤餃子】2026-2027年11-12月初冬の福島・飯坂！芭蕉ゆかりの鯖湖湯と波来湯・熱気あふれる湯めぐり、パリパリ焼き立て「名物円盤餃子」ととろける福島牛すき焼き・露天風呂名宿5選',
    description: '奥州三名湯の歴史を刻む福島の奥座敷・飯坂温泉！松尾芭蕉も浸かった日本最古級の木造共同浴場「鯖湖湯」をはじめとする熱湯共同浴場めぐりで、冬の寒気を吹き飛ばす芯からの温まり。摺上川の渓谷美を望む露天風呂と、名店が競い合う香ばしい「名物円盤餃子」、極上福島牛すき焼きを堪能する初冬の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-fukushima-iizaka-onsen-sabakoyu-enban-gyoza-fukushimagyu-stay/',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-fukushima-iizaka-onsen-sabakoyu-enban-gyoza-fukushimagyu-stay/',
  },
};

export default function WinterFeaturePage() {
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
                  "item": "https://croud-travel.pages.dev/features/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "【奥州三名湯・飯坂温泉の熱湯共同浴場と名物円盤餃子】2026-2027年11-12月初冬の福島・飯坂！芭蕉ゆかりの鯖湖湯と波来湯・熱気あふれる湯めぐり、パリパリ焼き立て「名物円盤餃子」ととろける福島牛すき焼き・露天風呂名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-fukushima-iizaka-onsen-sabakoyu-enban-gyoza-fukushimagyu-stay/"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "飯坂温泉の共同浴場は本当にそんなに熱いのですか？入り方のコツはありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "共同浴場の湯船は45℃〜47℃前後に保たれており、一般的な温泉よりかなり熱めです。入浴の際は、いきなり湯船に入らず、足先から膝、腰、肩へと10回以上しっかり掛け湯をして体を熱さに慣らすことが鉄則です。地元の方も利用されていますので、無理に長湯をせず、数分浸かっては上がって休憩する「短時間浴」を繰り返すのが正しい楽しみ方です。"
          }
        },
        {
          "@type": "Question",
          "name": "名物「円盤餃子」はどこで食べられますか？予約は必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "元祖の「照井（てるい）」や「おがた」「餃子の照吾」など、温泉街に数多くの人気店があります。夕方から営業を開始する店舗が多く、週末や連休は開店前から行列ができるため、早めの訪問がおすすめです。宿泊旅館によっては夕食プランに円盤餃子が組み込まれていたり、出前可能な宿もあります。"
          }
        },
        {
          "@type": "Question",
          "name": "11月〜12月の飯坂温泉周辺は積雪や路面凍結がありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "11月中旬までは市街地に雪が積もることは稀ですが、11月下旬以降や12月に入ると吾妻おろしの寒風とともに初雪が舞い、早朝や深夜の橋の上などで路面凍結が発生することがあります。お車で訪れる場合は、11月下旬以降はスタッドレスタイヤの装着をおすすめします。"
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
          <Link href="/features/" className="hover:text-slate-800 transition">特集一覧</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">【奥州三名湯・飯坂温泉の熱湯共同浴場と名物円盤餃子】2026-2027年11-12月初冬の福島・飯坂！芭蕉ゆかりの鯖湖湯と波来湯・熱気あふれる湯めぐり、パリパリ焼き立て「名物円盤餃子」ととろける福島牛すき焼き・露天風呂名宿5選</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026-2027年 11月〜12月初冬の厳選狙い目特集</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【奥州三名湯・飯坂温泉の熱湯共同浴場と名物円盤餃子】2026-2027年11-12月初冬の福島・飯坂！芭蕉ゆかりの鯖湖湯と波来湯・熱気あふれる湯めぐり、パリパリ焼き立て「名物円盤餃子」ととろける福島牛すき焼き・露天風呂名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            奥州三名湯の歴史を刻む福島の奥座敷・飯坂温泉！松尾芭蕉も浸かった日本最古級の木造共同浴場「鯖湖湯」をはじめとする熱湯共同浴場めぐりで、冬の寒気を吹き飛ばす芯からの温まり。摺上川の渓谷美を望む露天風呂と、名店が競い合う香ばしい「名物円盤餃子」、極上福島牛すき焼きを堪能する初冬の厳選名宿5選。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        {/* 導入解説 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600 shrink-0" />
            <span>初冬にこの地を訪れるべき理由と風土の魅力</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            福島市街地から福島交通飯坂線に揺られること約20分。吾妻連峰の裾野を流れる摺上川の渓谷沿いに、湯煙をもうもうと立ち上げる古湯が『飯坂温泉』です。鳴子温泉、秋保温泉と並び称される『奥州三名湯』の一角を占め、神話の時代に日本武尊が東征の折に湯浴みして病を治したという伝説をはじめ、文治5年（1189年）には松尾芭蕉が『おくのほそ道』の旅路で立ち寄ったことでも広く知られています。飯坂温泉の最大の個性は、何と言っても湧出温度が最高60℃を超える天然源泉と、共同浴場に代表される『熱湯（あつゆ）』の文化です。現在も温泉街には9つの共同浴場が点在し、地元の人々が日常的に利用する共同湯は湯船の温度が45℃から47℃に達することも珍しくありません。最初はその熱さに息を呑みますが、掛け湯を十数回重ねて肩まで浸かると、肌がピンと引き締まり、体の芯から血管が大きく拡張してぽかぽかと温まりが持続します。特にシンボル的存在である『鯖湖湯（さばこゆ）』は、元禄2年に芭蕉が訪れた湯元であり、現在の建物は明治時代の風情ある木造建築を総ヒバ造りで忠実に再現したもの。高い天井の湯気抜きから冬の柔らかな光が差し込むなか、無色透明で清冽な単純温泉に浸かる時間は格別です。そして飯坂の夜を彩るもうひとつの主役が、名物の『円盤餃子』です。フライパン一面に隙間なく丸く並べて多めの油でパリッと焼き上げ、中央に茹でモヤシを添えたこのスタイルは飯坂が発祥。小ぶりで薄皮の餃子はパリパリの香ばしさとキャベツと国産豚肉のジューシーな甘みが広がり、熱湯上がりの渇いた喉に地酒やビールとともに染み渡ります。夕食にはきめ細やかなサシが入った最高級ブランド『福島牛』のすき焼きやしゃぶしゃぶを味わい、摺上川のせせらぎを聞きながら過ごす飯坂温泉の初冬は、心身の活力を極限まで高めてくれる贅沢な癒やしの時間となります。
          </p>
          
          <div className="pt-4 space-y-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900">
              ▼ 本テーマが11〜12月の旅におすすめな3大ポイント
            </h3>
            <div className="space-y-3">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                1
              </span>
              <span>奥州三名湯の誇り！日本最古級木造共同浴場「鯖湖湯」と45℃超の熱湯めぐり</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              松尾芭蕉も浸かったとされる歴史ある鯖湖湯をはじめ、波来湯や導専の湯など個性豊かな共同浴場が点在。45℃前後の清冽な源泉に浸かることで血行が一気に促進され、冬の寒さを忘れる極上の湯温まりが持続します。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>湯上がりの至福！パリッと香ばしい「名物円盤餃子」ととろける福島牛会席</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              フライパンで円盤状に焼き上げる飯坂発祥の円盤餃子は、外はカリッ、中はキャベツと豚肉の旨味がぎっしり。夕食には福島県が誇る黒毛和牛「福島牛」の濃厚なすき焼きやすてーきが並び、美食の饗宴を堪能できます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>摺上川渓谷の初冬情緒と「ラジウム玉子」発祥の温泉文化</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              日本で初めてラジウムの存在が確認された地としても名高く、温泉源泉の熱で作られるトロトロの『ラジウム玉子』は朝食の逸品。摺上川沿いの渓谷美を眺めながら、歴史と人情が息づく温泉街散策を満喫できます。
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
              <span>近隣の必見名所：飯坂温泉</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Iizaka_Onsen_26-Aug-2018.jpg/1280px-Iizaka_Onsen_26-Aug-2018.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="奥州三名湯の歴史を誇る名湯・飯坂温泉（日本最古級木造共同浴場・鯖湖湯と摺上川渓谷の初冬風情）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                奥州三名湯の歴史を誇る名湯・飯坂温泉（日本最古級木造共同浴場・鯖湖湯と摺上川渓谷の初冬風情）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                飯坂温泉（いいざかおんせん）は、福島県福島市飯坂地域（旧国：陸奥国、明治以降は岩代国）にある温泉。歴史・規模ともに日本を代表する名泉の一つである。...
              </p>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200/60 text-[11px] md:text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-0.5">💡 周辺観光のポイント</span>
                各宿泊施設からアクセス良好。早朝や夕暮れ時は観光客が落ち着き、初冬ならではの静寂と美しい景色を心ゆくまで堪能できます。
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API厳選宿 5選 */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block">RAKUTEN TRAVEL RANKING</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                初冬を満喫する厳選名宿 5選
              </h2>
            </div>
            <span className="text-xs text-slate-500">リアルタイムAPI連携データ</span>
          </div>

          <div className="space-y-6">
        {/* 宿カード 1: 奥飯坂　穴原温泉　匠のこころ　吉川屋 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              摺上川渓谷の絶景を望む奥飯坂の老舗！自家源泉の大浴場と極上会席
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.28</span>
              <span className="text-slate-400">（クチコミ 1819件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15987/15987.jpg"
                  alt="奥飯坂　穴原温泉　匠のこころ　吉川屋"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  奥飯坂　穴原温泉　匠のこころ　吉川屋
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福島県福島市飯坂町湯野新湯6</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>お車…東北自動車道福島飯坂ICより12分｜電車…福島交通飯坂温泉駅から送迎※14：50～18：00</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>奥飯坂・穴原温泉に位置し、美しい摺上川の渓流と対岸の奇岩を目の前に望む東北屈指の大型名旅館。広々とした大浴場と渓流露天風呂は開放感抜群で、四季の移ろいを肌で感じられます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地元福島牛のすき焼きや旬の川魚・季節の山の幸を贅沢に盛り込んだ会席料理。伝統に裏打ちされた細やかなおもてなしと上質な空間で、記念日や三世代旅行にも最適です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>飯坂温泉駅からの無料送迎バスも運行されており、電車利用でも快適にアクセス可能。ロビーラウンジからは初冬の清らかな渓谷美を一望できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥13,200</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15987%2F15987.html"
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

        {/* 宿カード 2: 飯坂温泉　摺上亭　大鳥 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              美肌の自家源泉と広々庭園露天風呂！できたて料理が自慢の上質宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.34</span>
              <span className="text-slate-400">（クチコミ 721件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32116/32116.jpg"
                  alt="飯坂温泉　摺上亭　大鳥"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  飯坂温泉　摺上亭　大鳥
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福島県福島市飯坂町中ノ内24-3</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福島交通飯坂線　飯坂温泉駅よりタクシーで5分／東北自動車道　福島飯坂ICよりお車で5分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>敷地内から滾々と湧き出る自家源泉を有し、開放感あふれる庭園露天風呂や大浴場、ジェットバスなど多彩な湯巡りを楽しめるモダンな温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は料理人が目の前で腕を振るうオープンキッチンや彩り豊かな和食会席。福島牛をはじめ地場産の旬の味覚を出来立ての最も美味しい温度で提供してくれます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>バリアフリー対応の客室や露天風呂付き客室も備え、静けさとプライベート感を重視する大人のご夫婦やカップルの旅に選ばれています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥11,550</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32116%2F32116.html"
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

        {/* 宿カード 3: 飯坂温泉　青葉旅館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              全国の食通を唸らせる小鉢料理の真髄！全11室の大人の隠れ家名宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.61</span>
              <span className="text-slate-400">（クチコミ 201件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68682/68682.jpg"
                  alt="飯坂温泉　青葉旅館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  飯坂温泉　青葉旅館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福島県福島市飯坂町東堀切7</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>飯坂温泉駅より徒歩にて約１２分／東北自動車道　福島ＩＣより車で約７分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>一日限定11室、料理を目的に全国からリピーターが訪れる割烹旅館。夕食には地元福島の旬の山菜、茸、川魚、厳選肉を用いた約30品もの手の込んだ小鉢料理が美しく並びます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>一口ごとに異なる味覚の発見と感動があり、料理長の卓越した技と郷土への愛が凝縮された食体験は唯一無二。地酒とのペアリングも秀逸です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>館内の大浴場には肌触りの柔らかな飯坂の源泉が掛け流され、小規模宿ならではの行き届いた心温まるサービスと静寂の夜を過ごせます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥17,600</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68682%2F68682.html"
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

        {/* 宿カード 4: 飯坂温泉　喜久屋旅館＜福島県＞ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              摺上川を眼下に望む全室リバービュー！旬の食材と源泉掛け流し
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">3.69</span>
              <span className="text-slate-400">（クチコミ 131件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5672/5672.jpg"
                  alt="飯坂温泉　喜久屋旅館＜福島県＞"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  飯坂温泉　喜久屋旅館＜福島県＞
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福島県福島市飯坂町西堀切16</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>東北自動車道飯坂ＩＣより１０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>摺上川の清流沿いに建ち、客室の窓からせせらぎと渓谷の風情を間近に感じられる落ち着いた純和風旅館。源泉掛け流しの湯を心ゆくまで堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は福島の滋味豊かな季節の恵みを丁寧に調理した手作り和食膳。福島牛や旬の焼き魚など、素朴ながらも滋味深い味わいが評判を呼んでいます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>温泉街の中心部や共同浴場『波来湯』へも徒歩圏内。外湯めぐりと円盤餃子の名店巡りの拠点としても絶好のロケーションを誇ります。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥9,900</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5672%2F5672.html"
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

        {/* 宿カード 5: 飯坂温泉　ほりえや旅館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              開湯以来の源泉を守る木造の風情！明治創業の歴史薫る湯治の宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.34</span>
              <span className="text-slate-400">（クチコミ 423件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32420/32420.jpg"
                  alt="飯坂温泉　ほりえや旅館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  飯坂温泉　ほりえや旅館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福島県福島市飯坂町湯沢21</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福島飯坂線　飯坂温泉駅より徒歩５分／飯坂ＩＣより車で１０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>飯坂温泉のシンボル『鯖湖湯』のすぐ隣に位置する明治創業の老舗旅館。木造建築の温もりと昭和レトロな落ち着きが漂い、タイムスリップしたような情緒に浸れます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>館内のお風呂には鯖湖湯と同じ良質な熱湯源泉がそのまま引かれており、歴史ある名湯を貸切感覚で贅沢に楽しむことができます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>女将さんの温かなもてなしと家庭的な郷土料理が旅人の心をほぐし、リーズナブルに本物の飯坂温泉情緒を満喫したい一人旅や温泉ファンに熱烈に支持されています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥6,600</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32420%2F32420.html"
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
・電車：東北新幹線「JR福島駅」にて福島交通飯坂線へ乗り換え、終点「飯坂温泉駅」まで約23分。駅前から温泉街中心部へは徒歩すぐ。各旅館への無料送迎も充実しています。
・車：東北自動車道「福島飯坂IC」より国道13号線を経由して約10分。都心部（川口JCT）から約3時間30分、仙台宮城ICから約50分と極めて好アクセスです。
・飛行機：仙台空港よりアクセス鉄道でJR仙台駅へ出て東北新幹線を利用（所要約1時間30分）、または福島空港よりリムジンバスで郡山駅経由（所要約2時間）。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（初冬の澄んだ空気で温泉街の湯煙が最も美しく立ち上り、熱湯共同浴場と焼き立て餃子の温かさが身に染みるベストタイミング）。
・気温の目安：11月は日中10〜14℃、朝晩は3〜6℃。12月に入ると日中でも5〜8℃、朝晩は氷点下近くまで冷え込みます。
・服装のポイント：厚手のウールコートやダウンジャケット、マフラー、手袋を着用してください。温泉街の石畳や坂道を散策するため、歩きやすいフラットシューズやスニーカーが適しています。
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
              <span>飯坂温泉の共同浴場は本当にそんなに熱いのですか？入り方のコツはありますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              共同浴場の湯船は45℃〜47℃前後に保たれており、一般的な温泉よりかなり熱めです。入浴の際は、いきなり湯船に入らず、足先から膝、腰、肩へと10回以上しっかり掛け湯をして体を熱さに慣らすことが鉄則です。地元の方も利用されていますので、無理に長湯をせず、数分浸かっては上がって休憩する「短時間浴」を繰り返すのが正しい楽しみ方です。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>名物「円盤餃子」はどこで食べられますか？予約は必要ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              元祖の「照井（てるい）」や「おがた」「餃子の照吾」など、温泉街に数多くの人気店があります。夕方から営業を開始する店舗が多く、週末や連休は開店前から行列ができるため、早めの訪問がおすすめです。宿泊旅館によっては夕食プランに円盤餃子が組み込まれていたり、出前可能な宿もあります。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月〜12月の飯坂温泉周辺は積雪や路面凍結がありますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              11月中旬までは市街地に雪が積もることは稀ですが、11月下旬以降や12月に入ると吾妻おろしの寒風とともに初雪が舞い、早朝や深夜の橋の上などで路面凍結が発生することがあります。お車で訪れる場合は、11月下旬以降はスタッドレスタイヤの装着をおすすめします。
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
            寄附翌日から使える楽天トラベルクーポンで、今回の宿泊予約が実質2,000円の自己負担で楽しめます。年末の控除枠活用にも最適です。
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
