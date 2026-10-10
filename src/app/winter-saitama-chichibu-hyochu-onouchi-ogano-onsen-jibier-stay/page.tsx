import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Star,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "尾ノ内百景氷柱と薬師の湯：2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "冬の秩父路を幻想的に彩る尾ノ内百景氷柱・三十槌の氷柱と秩父三社新春初詣！名峰両神山麓に湧く美肌の「小鹿野温泉薬師の湯」、滋味豊かな秩父ジビエ猪鹿ぼたん鍋と極上武州和牛を堪能する大人の隠れ家名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-saitama-chichibu-hyochu-onouchi-ogano-onsen-jibier-stay",
  },
  openGraph: {
    title: "尾ノ内百景氷柱と薬師の湯：2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選",
    description: "冬の秩父路を幻想的に彩る尾ノ内百景氷柱・三十槌の氷柱と秩父三社新春初詣！名峰両神山麓に湧く美肌の「小鹿野温泉薬師の湯」、滋味豊かな秩父ジビエ猪鹿ぼたん鍋と極上武州和牛を堪能する大人の隠れ家名宿5選。",
    url: "https://croud-travel.pages.dev/winter-saitama-chichibu-hyochu-onouchi-ogano-onsen-jibier-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/56702/56702.jpg",
        width: 1200,
        height: 630,
        alt: "【尾ノ内百景氷柱と薬師の湯】2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "尾ノ内百景氷柱と薬師の湯：2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選",
    description: "冬の秩父路を幻想的に彩る尾ノ内百景氷柱・三十槌の氷柱と秩父三社新春初詣！名峰両神山麓に湧く美肌の「小鹿野温泉薬師の湯」、滋味豊かな秩父ジビエ猪鹿ぼたん鍋と極上武州和牛を堪能する大人の隠れ家名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/56702/56702.jpg"],
  },
};

export const dynamic = "force-static";

export default function FeaturePage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "氷柱（三十槌・尾ノ内）の見学には車がないと行けませんか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "路線バスやツアーバスを利用して訪れることが可能です。三十槌の氷柱へは西武秩父駅から三峯神社行きの路線バスが運行しており、氷柱シーズン中には土休日を中心に臨時便や急行バスが増便されることがあります。尾ノ内氷柱へも小鹿野町営バスが運行しています。ただし本数が限られるため、事前に最新ダイヤをご確認ください。"
      }
    },
    {
      "@type": "Question",
      "name": "小鹿野温泉の泉質や効能はどのような特徴がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "小鹿野温泉（両神温泉や須崎旅館の源泉）は、pH9を超える高アルカリ性の単純温泉が多く、古い角質をやさしくオフして肌をすべすべにする美肌効果が特徴です。神経痛や冷え性、疲労回復にも効果があり、冬の冷え切った身体を温めるのに最適です。"
      }
    },
    {
      "@type": "Question",
      "name": "冬の秩父・小鹿野ドライブで雪道対策は必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、スタッドレスタイヤ（またはチェーン携行）を強く推奨します。降雪がない日でも、国道140号や国道299号の日陰部分、山間部の橋の上などは路面凍結（ブラックアイスバーン）が頻繁に発生します。特に早朝や夜間の移動には十分な車間距離と安全運転を心がけてください。"
      }
    }
  ]
};
  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": "https://croud-travel.pages.dev/"
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
      "name": "埼玉県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/saitama"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【尾ノ内百景氷柱と薬師の湯】2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-saitama-chichibu-hyochu-onouchi-ogano-onsen-jibier-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "厳冬の造形美・三十槌の氷柱＆尾ノ内百景氷柱",
  "description": "氷柱（ひょうちゅう、つらら）は氷の柱。特に「つらら」は岩場や建物の軒下などから水滴が垂れてできる棒状に伸びた氷を指す。 1983年（昭和58年）の対馬勝年らの提案では、水滴が凍結して下方に伸びたものを「つらら」、下から上方に伸びたものを「氷筍」、両者が接合したものを「氷柱」と呼ぶことを提案している。",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/%E5%8F%A4%E9%96%91%E3%81%AE%E6%BB%9D.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      <main className="min-h-screen bg-stone-50 pb-20">
        {/* パンくずリスト */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-5xl mx-auto px-4 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap"
        >
          <Link href="/" className="hover:text-stone-900 transition-colors">
            ホーム
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link href="/features" className="hover:text-stone-900 transition-colors">
            特集一覧
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link
            href="/prefectures/saitama"
            className="hover:text-stone-900 transition-colors"
          >
            埼玉県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【尾ノ内百景氷柱と薬師の湯】2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選
          </span>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-white py-12 md:py-20 mb-10">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                2026-2027年 冬季厳選特集
              </span>
              <span className="bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                秩父・小鹿野・両神（埼玉県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">「尾ノ内百景氷柱と薬師の湯」2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選</h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-2">
              都心から特急ラビューでわずか約80分でアクセスできる埼玉県の奥座敷・秩父路。三峰山や武甲山などの霊峰に抱かれたこの山里は、12月から1月の厳冬期を迎えると、氷点下の澄みきった冷気と清流が生み出す奇跡の自然芸術「尾ノ内百景氷柱」や「三十槌の氷柱（みそつちのひょうちゅう）」で銀世界へと変貌します。岩肌から滴り落ちる湧水が幾重にも重なって凍りつき、巨大な青白い氷のカーテンを織りなす情景はまさに息を呑む絶景。夜間には環境に配慮したライトアップが行われ、昼とは異なる幻想世界が広がります。さらに日本屈指のパワースポット・三峯神社や宝登山神社、秩父神社への厳かな新春初詣、名峰両神山の麓に湧く「小鹿野温泉薬師の湯」のとろりとした美肌湯、冬の野趣あふれる秩父ジビエ「猪鹿ぼたん鍋」や霜降り「武州和牛」のすき焼き。心洗われる冬のショートトリップへと誘います。
            </p>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、秩父・小鹿野・両神を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 01</span>
              <h3 className="font-bold text-stone-900 text-base">厳冬の秩父路を青白く染める「尾ノ内百景氷柱」と「三十槌の氷柱」の壮大な造形美</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">奥秩父の厳しい冬の冷え込みが創り出す天然・人工の巨大氷瀑アート。三十槌の氷柱では天然の湧水が凍りついた繊細な氷のカーテンを間近に眺められ、尾ノ内渓谷では吊り橋の上から白銀の氷柱群を見下ろす圧倒的なスケールを体感できます。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 02</span>
              <h3 className="font-bold text-stone-900 text-base">名峰両神山の恵み「小鹿野温泉薬師の湯」ととろみのある美肌の湯ごもり</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">小鹿野町や秩父路に点在する名湯は、pH9前後のアルカリ性単純温泉やメタホウ酸を含む美肌の湯。湯上がりの肌がつるつるになると評判で、氷柱散策で冷え切った手足を芯からじんわりと温めてくれます。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 03</span>
              <h3 className="font-bold text-stone-900 text-base">冬の野趣あふれる「秩父ジビエ猪鹿鍋」と極上霜降り「武州和牛」の美食</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">秩父の山々で獲れた新鮮な猪肉・鹿肉を特製の田舎味噌や出汁で煮込む「ぼたん鍋」は、臭みがなく脂の甘みが際立つ冬の郷土のご馳走。さらに埼玉のブランド牛「武州和牛」のすき焼きや陶板焼き、名物わらじカツ丼など多彩なご当地グルメが揃います。</p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 現地アクセス・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-700" />
                アクセス・気候・おすすめの服装
              </h3>
            </div>
            <div className="whitespace-pre-line text-xs sm:text-sm text-stone-600 leading-relaxed">
              【エリアへのアクセス】
・電車：西武池袋駅から特急ラビューで「西武秩父駅」まで最短77分。秩父鉄道「御花畑駅」から「三峰口駅」方面へ接続。
・バス：西武秩父駅または秩父駅から西武観光バス「小鹿野車庫」行き・「栗尾」行きに乗車し約35〜45分。三十槌の氷柱へは西武秩父駅から「三峯神社」行きバスで約45分「三十槌」下車。
・車：関越自動車道「花園IC」より皆野寄居有料道路・国道140号・国道299号を経由して小鹿野町まで約45分。池袋方面から車で約2時間。

【見頃・気候・おすすめの服装】
・ベストシーズン：12月下旬〜1月下旬（三十槌・尾ノ内氷柱の最盛期、秩父三社新春初詣、温泉とジビエ鍋の最盛期）。
・気温の目安：盆地特有の内陸性気候のため、12月〜1月の夜間・早朝は氷点下3℃〜5℃以下まで下がります。日中も5〜9℃前後。
・服装のポイント：氷柱見学エリアは足元が凍結している場合があるため、滑り止めのあるスニーカーやスノーブーツが必須。厚手のダウンコート、ニット帽、ネックウォーマー、手袋、カイロを必ず携行してください。車で訪れる場合はスタッドレスタイヤの装着が不可欠です。
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：厳冬の造形美・三十槌の氷柱＆尾ノ内百景氷柱
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f9/%E5%8F%A4%E9%96%91%E3%81%AE%E6%BB%9D.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="厳冬の造形美・三十槌の氷柱＆尾ノ内百景氷柱"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  厳冬の造形美・三十槌の氷柱＆尾ノ内百景氷柱 の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  氷柱（ひょうちゅう、つらら）は氷の柱。特に「つらら」は岩場や建物の軒下などから水滴が垂れてできる棒状に伸びた氷を指す。 1983年（昭和58年）の対馬勝年らの提案では、水滴が凍結して下方に伸びたものを「つらら」、下から上方に伸びたものを「氷筍」、両者が接合したものを「氷柱」と呼ぶことを提案している。
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-cyan-700 font-semibold">冬の探訪推奨スポット</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              秩父・小鹿野・両神 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>


            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/56702/56702.jpg"
                    alt="小鹿野温泉　香り豊かな花のおもてなし　須崎旅館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第1位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        創業明治・風情あふれる宿場町の佇まいと名物花のおもてなし温泉旅館
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.44</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      小鹿野温泉　香り豊かな花のおもてなし　須崎旅館
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      小鹿野の古き良き町並みに溶け込む、明治初年創業の歴史ある老舗旅館。女将の温かい笑顔と館内いっぱいに彩られた生花のおもてなしが旅人の心をほぐします。敷地内にはとろみのある小鹿野温泉をたたえる大浴場のほか、趣ある貸切露天風呂も完備されており、冬の澄んだ星空を眺めながらの湯浴みは格別の贅沢。夕食には厳選された武州和牛のすき焼きや、地元農家の採れたて根菜を使った煮物、秩父名物のみそポテトなど、手作りの温もりが詰まった会席が並びます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>館内随所に飾られた可憐な花々とレトロモダンな純和風客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>美肌の小鹿野温泉を引いた貸切露天風呂と大浴場</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>武州和牛すき焼きや手作り季節料理・名物みそポテト</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「アットホームな雰囲気と素敵なスタッフに癒やされるアットホームな雰囲気で、滞在中はとてもリラックス出来て過ごせました。働いていらっしゃる方たちが皆素敵ですね～また利用したいと思いました。クチコミ…。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥6,900〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56702%2F56702.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/76410/76410.jpg"
                    alt="小鹿野温泉　越後屋旅館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第2位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        二百年の歴史薫る登録有形文化財・囲炉裏と本場ぼたん鍋の老舗
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>3.75</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      小鹿野温泉　越後屋旅館
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      江戸時代から旅人を迎え続けてきた小鹿野宿の名宿。歴史を感じさせる重厚な梁や格子戸が随所に残り、まるでタイムスリップしたかのような静謐な時間が流れます。こちらの冬の名物といえば、代々受け継がれてきた特製ブレンド味噌でじっくり煮込む本場天然ぼたん鍋。野性味あふれる猪肉の濃厚なコクとたっぷりの地元ネギやごぼうが絶妙に調和し、身体の芯から温まります。手入れの行き届いた温泉大浴場とともに、冬の奥秩父ならではの贅沢な逗留を約束してくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>江戸時代の面影をそのまま伝える風情豊かな木造建築の美</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬季限定の特製自家製味噌仕立て・天然猪肉ぼたん鍋</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>小鹿野温泉の名湯と静寂に包まれる贅沢なひととき</span></li>
                    </ul>
                    
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥6,800〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76410%2F76410.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/16053/16053.jpg"
                    alt="両神温泉　国民宿舎　両神荘"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第3位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        日本百名山・両神山の麓に湧く高アルカリ性美肌湯と大自然のパノラマ宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.29</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      両神温泉　国民宿舎　両神荘
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      名峰両神山の登山口近く、大自然の静寂に包まれた高台に位置する人気宿。最大の魅力は、国民保養温泉地にも指定された「両神温泉薬師の湯」。pH9.1を誇るアルカリ性温泉は石鹸のようなクレンジング効果があり、入浴後すぐに肌が滑らかになるのを実感できます。露天風呂からは冬枯れの木立と奥秩父の山並みを一望。夕食は武州和牛の陶板焼きや地元産の手打ちそば、清流魚の塩焼きなど、滋味豊かな山の幸が満載でコストパフォーマンスの高さも抜群です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>pH9.1を誇る「薬師の湯」源泉掛け流しの広々とした大浴場と露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>両神山麓の自然林を望む開放的なロケーションと落ち着いた客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>武州和牛の陶板焼きや秩父の旬の山の幸を満喫する和食膳</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「部屋は清潔で温泉も食事も大満足部屋がとてもきれい。温泉も食事も満足できました。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥7,920〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16053%2F16053.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/111229/111229.jpg"
                    alt="二百年の農家屋敷　宮本家"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第4位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        元力士当主がもてなす築200年の農家屋敷・囲炉裏炭火焼きと名物ちゃんこ
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.70</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      二百年の農家屋敷　宮本家
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      江戸幕府の直轄地であった奥秩父に建つ、築約200年の重厚な農家屋敷を改装した個性豊かな名宿。当主は元幕内力士というユニークな経歴を持ち、囲炉裏端でいただく豪快な炭火焼き料理と秘伝の出汁で仕立てる本格ちゃんこ鍋、秩父の鹿肉料理は圧顔の美味しさです。敷地内には蔵を改装した温泉風呂や五右衛門風呂など多彩なプライベート温泉があり、貸切でゆっくりと美肌湯を堪能可能。心身ともに温まる忘れられない冬の体験が待っています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>幕末の農家屋敷を再生した趣深い空間と大相撲の歴史展示</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>囲炉裏端で焼き上げる川魚・秩父野菜と直伝の本格ちゃんこ鍋</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>五右衛門風呂や蔵風呂など趣向を凝らした多彩な貸切温泉風呂</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「スタッフの方達の細やかなお気遣いにほっこり。とても静かにのんびりくつろげます。ちゃんこ鍋をはじめお食事も美味しくて、川魚の塩焼きの焼き加減も最高に抜群でしたお風呂も気持ちよくとてもゆっ… つづきは。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥19,000〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111229%2F111229.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/5828/5828.jpg"
                    alt="秩父七湯『御代の湯』　新木鉱泉旅館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第5位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        秩父最古の開湯・創業文政十年！十三代続く自家源泉「御代の湯」の名旅館
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.57</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      秩父七湯『御代の湯』　新木鉱泉旅館
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      秩父盆地の東端、横瀬川のせせらぎ沿いに佇む創業文政十年の歴史を誇る名旅館。秩父七湯の中で最古の歴史を持つ自家源泉「御代の湯」は、ほのかな硫黄の香りととろりとした肌触りが特徴で、近郷近在から湯治客が集まる奇跡の美肌湯です。総檜造りの大浴場や露天風呂に注がれる名湯で芯まで温まった後は、名物のすずらん鍋（きのこや旬菜と特製出汁の鍋）や武州和牛を盛り込んだ創作会席に舌鼓。静けさに包まれた老舗の風格が漂います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>江戸時代から湧き出でる秩父七湯最古の自家源泉と総檜風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ぬめり感のある極上の単純硫黄冷鉱泉で極まる美肌効果</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>秩父名物すずらん鍋や武州牛・四季折々の手作り創作会席</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「ずっと気になってた新木鉱泉さんの枠が空いてたので利用させていただきました。お風呂は自慢の鉱泉だけあって、滑らかに身体に馴染みます。外の露天風呂と源泉の水風呂の交互浴を繰り返し入ることで気持… つづ。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥8,220〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5828%2F5828.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
        </section>

        {/* ふるさと納税クーポンセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  埼玉県の宿に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  楽天ふるさと納税の宿泊クーポンを活用すれば、寄付額に応じて宿泊代金が大幅割引。予約済みの宿泊にも「あとから割引」が適用可能です。憧れの露天風呂付き客室や旬の特別会席プランもお手軽に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-amber-700 font-bold text-sm shadow hover:bg-amber-50 transition-colors"
              >
                ふるさと納税対象宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              冬の秩父・小鹿野・両神旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>氷柱（三十槌・尾ノ内）の見学には車がないと行けませんか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                路線バスやツアーバスを利用して訪れることが可能です。三十槌の氷柱へは西武秩父駅から三峯神社行きの路線バスが運行しており、氷柱シーズン中には土休日を中心に臨時便や急行バスが増便されることがあります。尾ノ内氷柱へも小鹿野町営バスが運行しています。ただし本数が限られるため、事前に最新ダイヤをご確認ください。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>小鹿野温泉の泉質や効能はどのような特徴がありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                小鹿野温泉（両神温泉や須崎旅館の源泉）は、pH9を超える高アルカリ性の単純温泉が多く、古い角質をやさしくオフして肌をすべすべにする美肌効果が特徴です。神経痛や冷え性、疲労回復にも効果があり、冬の冷え切った身体を温めるのに最適です。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>冬の秩父・小鹿野ドライブで雪道対策は必要ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、スタッドレスタイヤ（またはチェーン携行）を強く推奨します。降雪がない日でも、国道140号や国道299号の日陰部分、山間部の橋の上などは路面凍結（ブラックアイスバーン）が頻繁に発生します。特に早朝や夜間の移動には十分な車間距離と安全運転を心がけてください。
              </p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい埼玉県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/saitama" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>埼玉県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/features" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>全国の季節・目的別旅行特集一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-local-gourmet-inn-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
