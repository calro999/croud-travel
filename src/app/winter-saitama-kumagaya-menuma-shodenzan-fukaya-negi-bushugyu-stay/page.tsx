import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Star,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
  HelpCircle,
  Thermometer,
  Car,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【国宝・妻沼聖天山新春初詣と冬の極上深谷ねぎ】2026-2027年冬の埼玉・熊谷＆深谷！美肌天然温泉と武州和牛すき焼き名宿5選 | 旅行キュレーション',
  description: '「埼玉の日光東照宮」と称される国宝・妻沼聖天山歓喜院の精緻な彫刻美と新春開運初詣！寒さで糖度15度を超える冬の至宝「深谷ねぎ」のねぎカルビやすき焼き、渋沢栄一の郷愁、天然温泉のぬくもりに癒やされる埼玉北部の厳選名宿5選。',
  keywords: ['熊谷・深谷・本庄', '冬旅行', '新春初詣', '温泉', '名宿', '埼玉県観光', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '【国宝・妻沼聖天山新春初詣と冬の極上深谷ねぎ】2026-2027年冬の埼玉・熊谷＆深谷！美肌天然温泉と武州和牛すき焼き名宿5選',
    description: '「埼玉の日光東照宮」と称される国宝・妻沼聖天山歓喜院の精緻な彫刻美と新春開運初詣！寒さで糖度15度を超える冬の至宝「深谷ねぎ」のねぎカルビやすき焼き、渋沢栄一の郷愁、天然温泉のぬくもりに癒やされる埼玉北部の厳選名宿5選。',
    images: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Menuma_Shouden_Kangi-in_201810a.jpg/1280px-Menuma_Shouden_Kangi-in_201810a.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail'],
    type: 'article',
  },
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "【国宝・妻沼聖天山新春初詣と冬の極上深谷ねぎ】2026-2027年冬の埼玉・熊谷＆深谷！美肌天然温泉と武州和牛すき焼き名宿5選",
      "description": "「埼玉の日光東照宮」と称される国宝・妻沼聖天山歓喜院の精緻な彫刻美と新春開運初詣！寒さで糖度15度を超える冬の至宝「深谷ねぎ」のねぎカルビやすき焼き、渋沢栄一の郷愁、天然温泉のぬくもりに癒やされる埼玉北部の厳選名宿5選。",
      "image": [
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Menuma_Shouden_Kangi-in_201810a.jpg/1280px-Menuma_Shouden_Kangi-in_201810a.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "https://img.travel.rakuten.co.jp/share/HOTEL/67407/67407.jpg"
      ],
      "datePublished": "",
      "dateModified": "",
      "author": {
        "@type": "Organization",
        "name": "Japan Travel Curations"
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Hotel",
            "name": "四季の湯温泉　ホテルヘリテイジ（森林公園・熊谷）",
            "description": "熊谷の南部に位置する武蔵丘陵の豊かな森の中に広がる、本格的な天然温泉リゾートホテル。最大の魅力は、敷地内から滾々と湧き出る自家源泉を使用した「四季の湯温泉」。広々とした内湯はもちろん、水着を着用して家族やカップルで楽しめる巨大な滝の露天風呂やジャグジー、薬湯など多彩な湯巡りが楽しめます。冬の夕食には、地元埼玉の滋味あふれる旬野菜や霜降りの国産牛を使った特選会席を用意。都心からわずか1時間とは思えない深い森の静寂の中で、冷えた身体を芯から解きほぐす極上のリフレッシュが叶います。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67407/67407.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "埼玉県",
              "streetAddress": "埼玉県 熊谷市小江川228"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4",
              "reviewCount": "1075"
            },
            "priceRange": "¥4,000〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "キングアンバサダーホテル熊谷",
            "description": "新幹線が停車するJR熊谷駅北口から徒歩わずか3分という抜群のアクセスを誇る上質なシティホテル。洗練されたアールデコ調の館内は落ち着いた雰囲気に包まれ、全室に導入されたシモンズ製ベッドが長旅の疲れを優しく癒やしてくれます。妻沼聖天山への直通バスが発着する駅前広場にも近く、国宝参拝や埼玉北部の史跡巡りのベースキャンプとして最適。朝食には地元埼玉県産の新鮮卵や採れたて野菜を贅沢に使った和洋ビュッフェが並び、心地よい旅の朝を演出してくれます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/72808/72808.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "埼玉県",
              "streetAddress": "埼玉県 熊谷市筑波1-99-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.12",
              "reviewCount": "3145"
            },
            "priceRange": "¥4,300〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "国済寺天然温泉　ハナホテル深谷＆スパ",
            "description": "歴史ある国済寺の境内に隣接し、地下深くから汲み上げた良質な天然温泉スパを併設した人気の温泉ホテル。泉質は肌をしっとりと包み込む弱アルカリ性の美肌温泉で、内湯や露天風呂、サウナを完備しており、宿泊者は滞在中何度でも温泉を満喫できます。客室は機能的かつ温かみのあるインテリアで統一され、旅の快適性を追求。朝食には地元深谷の名産品を取り入れた身体に優しいバイキングが無料で提供され、冬の深谷観光や渋沢栄一生家巡りの拠点として圧倒的な支持を集めています。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/151166/151166.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "埼玉県",
              "streetAddress": "埼玉県 深谷市国済寺510-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.33",
              "reviewCount": "1745"
            },
            "priceRange": "¥3,750〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "花園天然温泉　ハナホテル　花園インター",
            "description": "関越自動車道花園ICから車でわずか2分という好立地にあり、深谷市街や熊谷はもちろん、秩父・長瀞方面へのドライブ旅行にも絶好のハブとなる天然温泉ホテル。自家源泉の天然温泉大浴場では、冬のドライブで凝り固まった筋肉をじんわりと温める至福の湯浴みが楽しめます。周辺には大型道の駅「はなぞの」やスイーツの名店が点在し、冬の深谷ねぎや地酒のお買い物を楽しむのにも最適。清潔で広々としたベッドと充実のアメニティが揃い、快適な埼玉冬旅を約束してくれます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/162616/162616.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "埼玉県",
              "streetAddress": "埼玉県 深谷市小前田538-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.4",
              "reviewCount": "1794"
            },
            "priceRange": "¥3,000〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "行田天然温泉　ハナホテル行田",
            "description": "熊谷と深谷に隣接し、映画『のぼうの城』の舞台として名高い忍城や、レトロな足袋蔵が立ち並ぶ行田市に位置する天然温泉ホテル。館内には自家源泉を引いた天然温泉大浴場が備わり、弱アルカリ性の柔らかな湯が冷えた身体を心地よく包み込みます。妻沼聖天山や深谷の渋沢栄一記念館へも車で20分圏内とアクセス良好。歴史情緒漂う城下町をのんびりと散策した後は、温かな温泉とふかふかのベッドで心安らぐ夜を過ごせます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/167186/167186.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "埼玉県",
              "streetAddress": "埼玉県 行田市佐間1-11-11"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "1608"
            },
            "priceRange": "¥3,750〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "妻沼聖天山の国宝・本殿彫刻をじっくり見学するためのポイントは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "国宝・歓喜院聖天堂の彫刻は保存のために覆屋で保護されており、拝観料（大人700円）を納めて中に入ると間近で鑑賞できます。定時ガイドによるボランティア解説ツアー（約40分）が随時行われており、彫刻に隠された物語や職人技の秘密を詳しく聞くことができるため、初詣時期でもガイドツアーへの参加を強くおすすめします。"
          }
        },
        {
          "@type": "Question",
          "name": "「深谷ねぎ」を最も美味しく堪能できるおすすめの料理やお店は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "冬の深谷ねぎはシンプルに一本焼きにしたり、すき焼きやねぎ鍋にするのが一番甘みを実感できます。深谷駅周辺の郷土料理店や道の駅「はなぞの」「おかべ」では、アツアツの「深谷ねぎ煮ぼうとう」や「深谷ねぎカルビ丼」が提供されており、直売所では採れたての泥付きねぎをお土産として手に入れることができます。"
          }
        },
        {
          "@type": "Question",
          "name": "新春初詣時期の混雑状況とおすすめの参拝時間帯は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "元旦から1月3日の日中は多くの初詣客で賑わいますが、都心の有名寺社に比べると適度な賑わいで、ゆっくりとお参りしやすいのが魅力です。混雑を避けて優美な彫刻を心ゆくまで鑑賞したい場合は、午前9時前の早朝または午後15時以降の参拝がおすすめです。"
          }
        }
      ]
    }
  ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-stone-50 text-stone-800 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-800 text-white pt-16 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
              <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/features" className="hover:text-white transition-colors">厳選特集</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/prefectures/saitama" className="hover:text-white transition-colors">埼玉県</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-cyan-400 font-medium">熊谷・深谷・本庄</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）最新厳選ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
              【国宝・妻沼聖天山新春初詣と冬の極上深谷ねぎ】2026-2027年冬の埼玉・熊谷＆深谷！美肌天然温泉と武州和牛すき焼き名宿5選
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl pt-2">
              「埼玉の日光東照宮」と称される国宝・妻沼聖天山歓喜院の精緻な彫刻美と新春開運初詣！寒さで糖度15度を超える冬の至宝「深谷ねぎ」のねぎカルビやすき焼き、渋沢栄一の郷愁、天然温泉のぬくもりに癒やされる埼玉北部の厳選名宿5選。
            </p>
          </div>
        </header>

        {/* リード文セクション */}
        <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
            <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <span>冬の熊谷・深谷・本庄探訪：静寂と温もりに包まれる旅の魅力</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              北関東の冷たいからっ風「赤城おろし」が吹き抜ける初冬から厳冬期、埼玉県北部の熊谷市・深谷市・行田市は、この季節ならではの豊かな風情と極上の味覚に包まれます。熊谷市の北端、利根川を間近に臨む「妻沼聖天山（めぬましょうでんざん）歓喜院。」は、名将・斎藤別当実盛が開創した日本三大聖天のひとつ。本殿「歓喜院聖天堂」は、日光東照宮の修復を手掛けた名工たちが24年の歳月をかけて彫り上げた極彩色の彫刻美を誇り、2012年に国宝に指定されました。「埼玉の日光」と称されるこの社殿には、新春の縁結びや家内安全を願う参拝客が各地から訪れます。そして冬の埼玉北部を語る上で欠かせないのが、霜が降りる11月下旬から1月に甘みのピークを迎える名産「深谷ねぎ」。冷え込みによって糖度が15度近くまで上がり、加熱するととろけるような甘みと旨味が口いっぱいに広がります。新一万円札の肖像となった渋沢栄一の生家やゆかりの洋館を訪ね、滋味あふれる「煮ぼうとう」や極上の「武州和牛」すき焼きに舌鼓を打ち、芯から温まる天然温泉に身を委ねる。首都圏から日帰り圏内でありながら、知る人ぞ知る贅沢な冬の隠れ家旅へ誘います。
            </p>
          </div>
        </section>

        {/* なぜ冬に訪れるべきかの3ポイント */}
        <section className="max-w-4xl mx-auto px-4 mb-14 space-y-4">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              この冬、熊谷・深谷・本庄を訪れるべき3つの理由
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              11月〜1月ならではの幻想的な光景、開運初詣、そして冬が一番美味しい旬の味覚
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  極彩色の彫刻が息を呑む美しさ！国宝「妻沼聖天山歓喜院」新春縁結び・開運祈願
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                日光東照宮を彷彿とさせる精緻を極めた彫刻群が壁面を埋め尽くす国宝・聖天堂。左甚五郎の系譜を継ぐ名工たちが刻んだ七福神や天女、霊獣たちの姿は息を呑む迫力です。良縁成就や厄除け、家内安全を祈願する新春初詣の後は、名物の長大な「妻沼いなり寿司」を味わうのが地元伝統の参拝コースです。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  冬の寒さで糖度15度超！とろける甘さの「深谷ねぎ」と郷土の温もり「煮ぼうとう」
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                利根川流域の肥沃な粘土質土壌で育つ深谷ねぎは、冬の寒さに当たることで甘みが凝縮。鍋や鉄板でじっくり焼いたねぎカルビやすき焼き、地元産小麦の手打ち幅広麺を旬野菜とともに醤油仕立てで煮込んだ深谷名物「煮ぼうとう」は、冬の冷えた身体を芯からポカポカに温めてくれます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  渋沢栄一の郷愁を訪ねる歴史散歩と、地下深くから湧き出る琥珀色の美肌天然温泉
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                日本の近代経済の父・渋沢栄一が生まれ育った「中の家」や誠之堂・清風亭などの歴史的建築を巡るノスタルジックな散策。旅の締めくくりには、熊谷や深谷、行田の地下から汲み上げられる自家源泉の天然温泉へ。弱アルカリ性の柔らかな湯に浸かり、武州和牛の贅沢会席とともに贅沢な寛ぎを堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* アクセス・気候・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-cyan-950/5 border border-cyan-800/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-cyan-800" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                アクセス・気候・冬の服装ガイド
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line bg-white/70 p-5 rounded-xl border border-stone-200/60">
              【エリアへのアクセス】
・電車・新幹線：JR上越新幹線・北陸新幹線・高崎線・秩父鉄道「熊谷駅」または高崎線「深谷駅」下車。東京駅から熊谷駅まで上越新幹線で約38分、上野東京ライン（高崎線直通）で約70分。熊谷駅北口より朝日バス「妻沼聖天前」行きで約25分。
・車・マイカー：関越自動車道「花園IC」より深谷市街まで約15分、東北自動車道「羽生IC」より妻沼聖天山まで約30分。都心（練馬IC）から花園ICまで約45分。
・深谷・行田への周遊：熊谷駅から深谷駅へはJR高崎線で約9分、忍城のある行田市へは車で約15〜20分。国宝・妻沼聖天山から渋沢栄一記念館へは車で約20分とスムーズに周遊可能。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（深谷ねぎの最盛期、新春開運初詣、冬晴れの澄んだ青空と温泉の旬）。
・気温の目安：晴天率は非常に高いものの、冬は北西からの乾燥したからっ風（赤城おろし）が強く吹き、朝晩の冷え込みは氷点下近くまで下がります。日中は8〜12℃前後。
・服装のポイント：風を通さない防風仕様のダウンジャケットやコート、マフラー、手袋が必須です。妻沼聖天山の境内散策や渋沢栄一ゆかりの史跡巡りは歩く距離が長いため、履き慣れたスニーカーやウォーキングシューズがおすすめです。
            </div>
          </div>
        </section>

        {/* 近隣名所アーカイブ（Wikipedia連携） */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl text-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>近隣名所アーカイブ＆公式百科事典連携</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 rounded-xl overflow-hidden bg-stone-800">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Menuma_Shouden_Kangi-in_201810a.jpg/1280px-Menuma_Shouden_Kangi-in_201810a.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="国宝・妻沼聖天山歓喜院（埼玉の日光東照宮・精緻な彫刻美と新春縁結び開運）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <div>
                  <span className="text-[11px] text-cyan-300 font-mono">Spot Spotlight</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    国宝・妻沼聖天山歓喜院（埼玉の日光東照宮・精緻な彫刻美と新春縁結び開運）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-2">
                    歓喜院（かんぎいん）は、埼玉県熊谷市妻沼（めぬま）にある高野山真言宗の仏教寺院である。日本三大聖天の一つとされる。一般的には山号に地名を冠した「妻沼聖天山（めぬましょうでんざん）」と呼称され、公式でも主にその名で案内される。 また、「埼玉日光」（国宝に指定される前は「埼玉の小日光」 ）とも称されている。参拝客や地元住民からは「（妻沼の）聖天様」などと呼ばれている。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-700 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）公式情報</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/歓喜院 (熊谷市)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>詳細百科事典</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選名宿一覧 */}
        <section className="max-w-4xl mx-auto px-4 space-y-6 mb-14">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              熊谷・深谷・本庄 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・立地に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">
            {/* 宿1: 四季の湯温泉　ホテルヘリテイジ（森林公園・熊谷） */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.00</span>
                    <span className="text-stone-400 text-xs font-normal">（1075件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    四季の湯温泉　ホテルヘリテイジ（森林公園・熊谷）
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    天然温泉と圧倒的な森の静寂・水着混浴露天風呂と四季の和洋会席
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/67407/67407.jpg"
                      alt="四季の湯温泉　ホテルヘリテイジ（森林公園・熊谷）"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      熊谷の南部に位置する武蔵丘陵の豊かな森の中に広がる、本格的な天然温泉リゾートホテル。最大の魅力は、敷地内から滾々と湧き出る自家源泉を使用した「四季の湯温泉」。広々とした内湯はもちろん、水着を着用して家族やカップルで楽しめる巨大な滝の露天風呂やジャグジー、薬湯など多彩な湯巡りが楽しめます。冬の夕食には、地元埼玉の滋味あふれる旬野菜や霜降りの国産牛を使った特選会席を用意。都心からわずか1時間とは思えない深い森の静寂の中で、冷えた身体を芯から解きほぐす極上のリフレッシュが叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天然温泉「四季の湯」の大露天風呂や薬湯・水着で入れる滝の混浴露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>武蔵丘陵の雄大な自然に囲まれた広大なリゾート空間と本格リフレクソロジー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元埼玉の厳選素材を活かした四季の和食会席・特選牛すき焼き</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「温泉施設、四季の湯に、時々以下の輩がいる。入れ墨NGにしているのなら、しっかり管理しないとならないのでは?それが出来ないレベルの宿なら、入れ墨OKにすべきではないか。しっかり。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 4,000円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67407%2F67407.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿2: キングアンバサダーホテル熊谷 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.12</span>
                    <span className="text-stone-400 text-xs font-normal">（3145件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    キングアンバサダーホテル熊谷
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    熊谷駅徒歩3分のシティリゾート・上質な客室空間と本格イタリアン
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/72808/72808.jpg"
                      alt="キングアンバサダーホテル熊谷"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      新幹線が停車するJR熊谷駅北口から徒歩わずか3分という抜群のアクセスを誇る上質なシティホテル。洗練されたアールデコ調の館内は落ち着いた雰囲気に包まれ、全室に導入されたシモンズ製ベッドが長旅の疲れを優しく癒やしてくれます。妻沼聖天山への直通バスが発着する駅前広場にも近く、国宝参拝や埼玉北部の史跡巡りのベースキャンプとして最適。朝食には地元埼玉県産の新鮮卵や採れたて野菜を贅沢に使った和洋ビュッフェが並び、心地よい旅の朝を演出してくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR熊谷駅から徒歩3分の好立地！妻沼聖天山や秩父方面への観光拠点</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室シモンズ社製ベッド完備の上質で広々とした落ち着きある客室空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元埼玉の新鮮野菜や厳選肉をふんだんに取り入れた豪華朝食ビュッフェ</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「広い部屋と美味しい朝食ブッフェに満足部屋も広くリーズナブルな宿泊代とブッフェ形式の朝ごはんが美味しいです。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 4,300円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72808%2F72808.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿3: 国済寺天然温泉　ハナホテル深谷＆スパ */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.33</span>
                    <span className="text-stone-400 text-xs font-normal">（1745件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    国済寺天然温泉　ハナホテル深谷＆スパ
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    国済寺境内の源泉かけ流し天然温泉・深谷ねぎの郷で癒やす極上の湯浴み
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/151166/151166.jpg"
                      alt="国済寺天然温泉　ハナホテル深谷＆スパ"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      歴史ある国済寺の境内に隣接し、地下深くから汲み上げた良質な天然温泉スパを併設した人気の温泉ホテル。泉質は肌をしっとりと包み込む弱アルカリ性の美肌温泉で、内湯や露天風呂、サウナを完備しており、宿泊者は滞在中何度でも温泉を満喫できます。客室は機能的かつ温かみのあるインテリアで統一され、旅の快適性を追求。朝食には地元深谷の名産品を取り入れた身体に優しいバイキングが無料で提供され、冬の深谷観光や渋沢栄一生家巡りの拠点として圧倒的な支持を集めています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>国済寺境内の地下から湧く美肌の天然温泉スパ「美肌の湯」入り放題</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>清潔感あふれる和モダン客室とハイスペックベッドで快眠ステイ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元深谷の旬素材を活かした健康朝食バイキングと温かなおもてなし</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「お気に入りの場所、朝の温泉と朝食が最高お気に入りのホテルなので何度も宿泊しています!お部屋はコンパクトですがとても綺麗ですし、温泉もとても良いです。夜は混んでいることが多いですが、朝は空い。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 3,750円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151166%2F151166.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿4: 花園天然温泉　ハナホテル　花園インター */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.40</span>
                    <span className="text-stone-400 text-xs font-normal">（1794件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    花園天然温泉　ハナホテル　花園インター
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    関越道花園ICすぐ！自家源泉天然温泉と広々客室・観光拠点に最適
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/162616/162616.jpg"
                      alt="花園天然温泉　ハナホテル　花園インター"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      関越自動車道花園ICから車でわずか2分という好立地にあり、深谷市街や熊谷はもちろん、秩父・長瀞方面へのドライブ旅行にも絶好のハブとなる天然温泉ホテル。自家源泉の天然温泉大浴場では、冬のドライブで凝り固まった筋肉をじんわりと温める至福の湯浴みが楽しめます。周辺には大型道の駅「はなぞの」やスイーツの名店が点在し、冬の深谷ねぎや地酒のお買い物を楽しむのにも最適。清潔で広々としたベッドと充実のアメニティが揃い、快適な埼玉冬旅を約束してくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>関越自動車道花園ICから約2分の好アクセス！秩父・長瀞方面への周遊にも便利</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天然温泉大浴場完備！旅の疲れを洗い流す柔らかな泉質の温もり</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>隣接する道の駅や商業施設での深谷ねぎグルメ・お土産購入にも至近</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「清潔感ある部屋と美味しい朝食、電波は微妙部屋は、とても清潔感があって、無料の朝食は、手抜き感なく、どれもおいしかったです。ただ、電波の入り具合が、ちょっと微妙でした。その他は、何も。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 3,000円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162616%2F162616.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿5: 行田天然温泉　ハナホテル行田 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.50</span>
                    <span className="text-stone-400 text-xs font-normal">（1608件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    行田天然温泉　ハナホテル行田
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    行田の古代蓮の里近く・忍城と足袋蔵の歴史薫る天然温泉ホテル
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/167186/167186.jpg"
                      alt="行田天然温泉　ハナホテル行田"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      熊谷と深谷に隣接し、映画『のぼうの城』の舞台として名高い忍城や、レトロな足袋蔵が立ち並ぶ行田市に位置する天然温泉ホテル。館内には自家源泉を引いた天然温泉大浴場が備わり、弱アルカリ性の柔らかな湯が冷えた身体を心地よく包み込みます。妻沼聖天山や深谷の渋沢栄一記念館へも車で20分圏内とアクセス良好。歴史情緒漂う城下町をのんびりと散策した後は、温かな温泉とふかふかのベッドで心安らぐ夜を過ごせます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地下から湧き出る天然温泉大浴場と清潔でスタイリッシュな客室空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>映画『のぼうの城』で有名な忍城や日本遺産の足袋蔵のまち歩きに便利</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>朝から活力みなぎる無料健康朝食バイキングとフレンドリーな接客</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「夕食はボリューム満点、お風呂も清潔で快適夕食がボリュームありました。お刺身も鮮度良かったです。定食が6種あり、ハンバーグとミックスフライを選びました。ほかのテーブルで釜めしを注。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 3,750円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167186%2F167186.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ふるさと納税セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Furusato Tax
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                楽天ふるさと納税で実質2,000円！お得に泊まる賢い旅行術
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
                旅行先の自治体へ寄付することで、最大30%相当の楽天トラベル宿泊クーポンが返礼品として付与されます。予約済みの日程にも「あとから割引」で適用可能！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 flex-shrink-0 transition-colors shadow-md shadow-amber-600/20"
            >
              <span>対象宿・クーポンを見る</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                冬の熊谷・深谷・本庄旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">
            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>妻沼聖天山の国宝・本殿彫刻をじっくり見学するためのポイントは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                国宝・歓喜院聖天堂の彫刻は保存のために覆屋で保護されており、拝観料（大人700円）を納めて中に入ると間近で鑑賞できます。定時ガイドによるボランティア解説ツアー（約40分）が随時行われており、彫刻に隠された物語や職人技の秘密を詳しく聞くことができるため、初詣時期でもガイドツアーへの参加を強くおすすめします。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>「深谷ねぎ」を最も美味しく堪能できるおすすめの料理やお店は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                冬の深谷ねぎはシンプルに一本焼きにしたり、すき焼きやねぎ鍋にするのが一番甘みを実感できます。深谷駅周辺の郷土料理店や道の駅「はなぞの」「おかべ」では、アツアツの「深谷ねぎ煮ぼうとう」や「深谷ねぎカルビ丼」が提供されており、直売所では採れたての泥付きねぎをお土産として手に入れることができます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>新春初詣時期の混雑状況とおすすめの参拝時間帯は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                元旦から1月3日の日中は多くの初詣客で賑わいますが、都心の有名寺社に比べると適度な賑わいで、ゆっくりとお参りしやすいのが魅力です。混雑を避けて優美な彫刻を心ゆくまで鑑賞したい場合は、午前9時前の早朝または午後15時以降の参拝がおすすめです。
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連回遊ナビゲーション */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              あわせて読みたい関連旅行ガイド
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                href="/prefectures/saitama"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>埼玉県のおすすめ温泉宿・ホテル一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/features"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>全国の季節・目的別厳選特集一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>実質2,000円で泊まる高級温泉旅館ガイド</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-local-gourmet-inn-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
