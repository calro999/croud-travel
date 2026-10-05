import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, 
  Calendar, Utensils, Compass, ExternalLink, Snowflake, Waves, Flame, Building, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月滋賀】世界遺産・比叡山延暦寺の静謐な冬参拝＆根本中堂「不滅の法灯」と琵琶湖一望おごと温泉・極上近江牛名宿5選",
  description: "11月下旬から1月、日本仏教の母山と仰がれる世界遺産「比叡山延暦寺」は、厳かな白銀の雪化粧に包まれます。標高848メートルの霊峰に佇む総本堂・国宝「根本中堂」では、開山以来1200年間一度も消えることなく灯り続ける「不滅の法灯」が神聖な光を放ち、大改修中の今しか見られない特別な修学空間が旅人を迎えます。比叡山から日本一の長さを誇る坂本ケーブルで下れば、伝教大師最澄が開湯した名湯「おごと温泉」。雄大な冬の琵琶湖を望む雪見露天風呂と、日本三大和牛の筆頭「近江牛」のとろけるすき焼き・しゃぶしゃぶを心ゆくまで堪能する厳選名宿5選を徹底解説します。",
  keywords: '比叡山延暦寺 冬 参拝, 根本中堂 不滅の法灯, おごと温泉 近江牛 宿, 琵琶湖 雪景色 温泉, びわこ緑水亭, 湯の宿木もれび, 暖灯館きくのや, 雄山荘, 琵琶湖グランドホテル, 11月 12月 1月 滋賀 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月滋賀】世界遺産・比叡山延暦寺の静謐な冬参拝＆根本中堂「不滅の法灯」と琵琶湖一望おごと温泉・極上近江牛名宿5選",
    description: "11月下旬から1月、日本仏教の母山と仰がれる世界遺産「比叡山延暦寺」は、厳かな白銀の雪化粧に包まれます。標高848メートルの霊峰に佇む総本堂・国宝「根本中堂」では、開山以来1200年間一度も消えることなく灯り続ける「不滅の法灯」が神聖な光を放ち、大改修中の今しか見られない特別な修学空間が旅人を迎えます。比叡山から日本一の長さを誇る坂本ケーブルで下れば、伝教大師最澄が開湯した名湯「おごと温泉」。雄大な冬の琵琶湖を望む雪見露天風呂と、日本三大和牛の筆頭「近江牛」のとろけるすき焼き・しゃぶしゃぶを心ゆくまで堪能する厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/3165/3165.jpg', width: 1200, height: 630, alt: '比叡山延暦寺冬参拝とおごと温泉・近江牛名宿' }]
  }
};

export default function ShigaHieizanOgotoPage() {
  const hotelsData = [
            {
              id: 1,
              name: "おごと温泉　びわこ緑水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3165/3165.jpg",
              rating: 4.66,
              reviews: 2505,
              price: "¥21,900〜",
              access: "名神京都東Ｉ．Ｃから湖西道路経由で20分。ＪＲおごと温泉駅から送迎あり（要電話）",
              special: "滋賀県おごと温泉、琵琶湖畔の旅館、露天風呂付客室や近江牛のプラン、家族・カップルに人気の旅館。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3165%2F3165.html",
              story: "琵琶湖西岸の湖畔に佇み、雄大なレイクビューと上質なおもてなしで高い支持を集める名宿「おごと温泉 びわこ緑水亭」。客室の多くに琵琶湖を一望する温泉露天風呂が備えられ、冬の朝霧や雪景色に煙る湖面を眺めながら極上のプライベート温泉を満喫できます。自家源泉から引くアルカリ性単純温泉は肌触りが柔らかく、湯上がりもぽかぽかが持続。夕食には日本最古のブランド和牛「近江牛」の極上会席や、冬の滋賀の恵みを凝縮した旬の懐石料理が並び、贅を尽くした冬の休息を約束してくれます。",
              roomTip: "びわの風・温泉露天風呂付き和洋室。ワイドな窓から冬の朝日に輝く琵琶湖を独占し、バルコニーの専用露天で贅沢な雪見湯浴み。",
              gourmetTip: "「最高級認証近江牛会席」。きめ細やかな霜降り近江牛のサーロインステーキとすき焼き小鍋、琵琶湖の恵みを取り入れた華やかな膳。",
              highlights: [
                "琵琶湖畔の絶景露天風呂付き客室・朝日輝く湖面を眺めながら極上プライベート湯浴み",
                "最高級認証近江牛サーロインとすき焼き小鍋・滋賀の冬味覚を凝縮した贅沢会席",
                "比叡山坂本ケーブルまで車約15分・京都東ICから車20分の抜群のアクセス"
              ]
            },
            {
              id: 2,
              name: "おごと温泉　湯の宿木もれび",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/137820/137820.jpg",
              rating: 4.27,
              reviews: 475,
              price: "¥9,300〜",
              access: "おごと温泉駅よりお車にて５分（送迎有・要連絡）　19時以降はタクシー(お客様負担)でお越しください。",
              special: "温泉とお食事をお楽しみ下さい。近江牛ステーキがお勧めです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137820%2F137820.html",
              story: "カジュアルでありながら温もりあふれるサービスとコストパフォーマンスの高さで愛される「おごと温泉 湯の宿木もれび」。姉妹館「湯元舘」の多彩な湯巡り（地上階の大浴場から最上階の展望露天風呂まで）が利用できるのが最大の魅力です。冬の冷え切った身体を、多彩な湯舟で温め比べできる贅沢はここならでは。夕食の看板は豪快な近江牛料理で、近江牛ステーキやすき焼きをリーズナブルに堪能できます。比叡山延暦寺参拝の拠点として気兼ねなく寛げる人気の温泉宿です。",
              roomTip: "和モダンベッドルーム。木の温もりが感じられる落ち着いたインテリアで、冬の観光帰りに足を伸ばしてリラックス。",
              gourmetTip: "「近江牛ステーキ＆会席プラン」。ジューシーな近江牛鉄板焼きと、地元の旬野菜や温かな郷土小鍋を味わう満足度の高い夕食。",
              highlights: [
                "姉妹館「湯元舘」の多彩な湯巡り無料利用・最上階展望露天風呂から琵琶湖一望",
                "近江牛ステーキ付き手作り会席・リーズナブルに味わうブランド牛の極上旨み",
                "おごと温泉駅無料送迎あり・延暦寺参拝や京都観光の拠点として快適な滞在"
              ]
            },
            {
              id: 3,
              name: "おごと温泉　暖灯館　きくのや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8165/8165.jpg",
              rating: 4.68,
              reviews: 2882,
              price: "¥16,170〜",
              access: "京都駅より20分、JR湖西線おごと温泉駅下車、車5分＜送迎有＞。京都東ICより湖西道路経由20分558号線沿い",
              special: "地元食材を使った会席料理■テラスラウンジでフリードリンク■8/31-12/5貸切風呂リニューアル工事",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8165%2F8165.html",
              story: "「あたたかいおもてなしの宿」を掲げ、全館が優美な和モダン空間にリニューアルされた「おごと温泉 暖灯館 きくのや」。玄関を入ると優しい間接照明と看板犬が旅人を迎えます。客室からは琵琶湖の美しい水面を望み、露天風呂付き客室ではプライベートな湯浴みを楽しめます。料理長が腕を振るう冬の夕食は、認定近江牛のしゃぶしゃぶやすき焼きをメインに、地元契約農家の冬根菜や琵琶湖の湖魚を美しく仕立てた本格会席。きめ細やかな心配りと温かな空間が冬の夫婦旅や家族旅に好評です。",
              roomTip: "湖側露天風呂付き客室。雪が舞い散る琵琶湖を眺めながら、自分だけの空間で心ゆくまで名湯に浸る極上のひととき。",
              gourmetTip: "「認定近江牛しゃぶしゃぶ会席」。出汁にくぐらせることで肉の甘みが極限まで引き立つ極上近江牛と、滋賀県産コシヒカリの釜飯。",
              highlights: [
                "全館和モダンの温かな空間・認定近江牛しゃぶしゃぶと細やかなおもてなし",
                "極上近江牛しゃぶしゃぶ会席・契約農家の冬根菜と滋賀県産コシヒカリ釜飯",
                "テラスラウンジでフリードリンク・看板犬に癒やされるアットホームな宿"
              ]
            },
            {
              id: 4,
              name: "里湯昔話　雄山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15737/15737.jpg",
              rating: 4.41,
              reviews: 1916,
              price: "¥12,650〜",
              access: "JR湖西線おごと温泉駅送迎バス有/名神京都東IC～湖西道路(国道161号)経由約15分/栗東IC～琵琶湖大橋経由約40分",
              special: "「自然と文化との共生」里山がテーマです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15737%2F15737.html",
              story: "近江の昔話や民話をテーマに、里山の温もりと情緒を表現した個性豊かな名宿「里湯昔話 雄山荘」。高台に位置するため、露天風呂や客室からは琵琶湖の大パノラマを一望できます。特に冬の澄んだ空気の中で楽しむ展望露天風呂は、朝焼けに染まる琵琶湖の絶景が息を呑む美しさ。夕食は近江の郷土の味をモダンに再構築した会席料理で、近江牛の陶板焼きをはじめ、冬の味覚をふんだんに盛り込んだ滋味豊かな料理が並びます。地酒の飲み比べとともに心豊かな夜を過ごせます。",
              roomTip: "琵琶湖一望の露天風呂付き客室。雄大な湖を眼下に見下ろし、冬の夜風を感じながら何度も名湯を楽しめる贅沢。",
              gourmetTip: "「近江牛と冬の味覚・里山会席」。香ばしく焼き上げる近江牛陶板焼きと、郷土の旬食材を使った熱々小鍋仕立て。",
              highlights: [
                "高台から琵琶湖をパノラマで見渡す絶景露天風呂・民話をテーマにした心温まる宿",
                "近江牛陶板焼きと熱々郷土鍋・滋賀の地酒飲み比べが楽しめる里山料理",
                "展望露天風呂付き客室多数完備・冬の朝焼けと琵琶湖を望む至高のロケーション"
              ]
            },
            {
              id: 5,
              name: "琵琶湖グランドホテル・京近江",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106122/106122.jpg",
              rating: 4.19,
              reviews: 838,
              price: "¥13,200〜",
              access: "ＪＲ湖西線おごと温泉駅下車、車5分(送迎有)　名神高速道路、京都東ＩＣより湖西道路経由仰木雄琴より5分無料駐車場有り",
              special: "お1人様～カップル・ファミリー・グループ様大歓迎。大切な方と琵琶湖ステイ。京都や延暦寺へアクセス良好",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106122%2F106122.html",
              story: "おごと温泉屈指の規模を誇り、琵琶湖の波打ち際に建つ老舗大型旅館「琵琶湖グランドホテル・京近江」。館内には琵琶湖を一望する巨大な大浴場と雪見露天風呂が男女各2箇所ずつ完備され、24時間いつでも名湯を満喫できます。別館「京近江」は全室に天然温泉の露天風呂が備えられた贅沢な仕様。夕食には日本三大和牛・近江牛をふんだんに使った会席や、冬の旬魚・ずわい蟹を取り入れた豪華な料理が並び、比叡山延暦寺参拝後の宿泊先として安心感抜群の存在です。",
              roomTip: "京近江・温泉露天風呂付き客室。広々とした和室に琵琶湖を望む信楽焼の露天風呂が配され、三世代旅行や贅沢な記念日ステイに最適。",
              gourmetTip: "「近江牛づくし特別会席」。近江牛のローストビーフ、すき焼き小鍋、ステーキの食べ比べなど、ブランド牛の魅力を味わい尽くす贅沢膳。",
              highlights: [
                "琵琶湖岸に建つ老舗大型旅館・24時間利用可能な大浴場と別館客室露天風呂",
                "近江牛ステーキ＆すき焼き食べ比べ会席・冬の旬魚と豪華な盛り付けの饗宴",
                "無料大駐車場完備・京都や比叡山へのドライブ観光やグループ旅行に最適"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月〜1月）の比叡山延暦寺の積雪状況と参拝時の服装・靴の注意点は？",
    "a": "比叡山山頂（標高約848m）は平地（京都市内・大津市内）より気温が約5〜7度低く、11月下旬から氷点下になる日があり、12月中旬〜1月は本格的な積雪期となります。延暦寺山内（東塔・西塔・横川）の参道や石段は雪や凍結で滑りやすくなるため、防寒ダウンコートや手袋・マフラーに加え、靴底の滑り止めがしっかりしたスノーブーツや防寒防水シューズが必須です。根本中堂などのお堂内は靴を脱いで参拝するため、厚手の靴下を持参すると足元の冷えを防げます。"
  },
  {
    "q": "国宝「根本中堂」の大改修（大修理）の現状と「不滅の法灯」の拝観は可能？",
    "a": "現在、延暦寺総本堂の国宝「根本中堂」は約10年におよぶ大改修工事中ですが、堂内への参拝は通常通り可能です。むしろ改修期間中限定で設置されている「修学ステージ」から、普段は見上げることしかできない屋根の高さと同じ視点で国宝建築の構造や職人の匠の技を間近に見学できる貴重な機会となっています。開山以来1200年間灯り続ける「不滅の法灯」も、堂内の厳かな薄暗がりの中で静かに輝いており、間近で祈りを捧げることができます。"
  },
  {
    "q": "冬の比叡山へのアクセス方法（坂本ケーブル・比叡山ドライブウェイ）の運行・通行状況は？",
    "a": "冬の比叡山へは、大津側からの「坂本ケーブル（日本一長い2,025mのケーブルカー）」が通年運行しており最も確実でおすすめです。坂本ケーブル山頂駅からは雪の琵琶湖が一望できます。一方、車を利用して比叡山ドライブウェイ・奥比叡ドライブウェイを通行する場合は、冬期は路面凍結や積雪が発生するため、スタッドレスタイヤの装着またはチェーン携行が必須（チェーン規制が行われる場合あり）となります。"
  },
  {
    "q": "おごと温泉（雄琴温泉）の泉質と冬の美肌効果、歴史的背景は？",
    "a": "おごと温泉は約1200年前、比叡山延暦寺を開いた伝教大師最澄によって開湯されたと伝わる歴史ある古湯です。泉質はpH値9.0前後の「アルカリ性単純温泉（美肌の湯）」で、古い角質を優しく落とし肌を滑らかにするクレンジング効果があります。刺激が少なく柔らかいお湯のため、冬の乾燥肌にも優しく、湯冷めしにくいため冷え性や疲労回復に抜群の効果を発揮します。"
  },
  {
    "q": "日本三大和牛「近江牛」の歴史と、冬に味わうべきおすすめ料理は？",
    "a": "近江牛（おうみうし）は約400年の歴史を誇る日本で最も歴史のあるブランド黒毛和牛です。琵琶湖畔の豊かな自然と清らかな水、良質な飼料で育まれ、極めて細かなサシと低い融点の脂、豊かな芳醇な香りが特徴。冬には熱々の昆布出汁にくぐらせる「しゃぶしゃぶ」や、甘辛い割り下で煮込む「すき焼き」、香ばしい「陶板焼きステーキ」で味わうことで、とろけるような口どけと旨みの極致を堪能できます。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月滋賀】世界遺産・比叡山延暦寺の静謐な冬参拝＆根本中堂「不滅の法灯」と琵琶湖一望おごと温泉・極上近江牛名宿5選",
    description: "11月下旬から1月、日本仏教の母山と仰がれる世界遺産「比叡山延暦寺」は、厳かな白銀の雪化粧に包まれます。標高848メートルの霊峰に佇む総本堂・国宝「根本中堂」では、開山以来1200年間一度も消えることなく灯り続ける「不滅の法灯」が神聖な光を放ち、大改修中の今しか見られない特別な修学空間が旅人を迎えます。比叡山から日本一の長さを誇る坂本ケーブルで下れば、伝教大師最澄が開湯した名湯「おごと温泉」。雄大な冬の琵琶湖を望む雪見露天風呂と、日本三大和牛の筆頭「近江牛」のとろけるすき焼き・しゃぶしゃぶを心ゆくまで堪能する厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.com/features/' },
        { '@type': 'ListItem', position: 3, name: '比叡山延暦寺＆おごと温泉・近江牛ステイ', item: 'https://croud-travel.com/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay' }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotelsData.map((h, idx) => ({
        '@type': 'Hotel',
        position: idx + 1,
        name: h.name,
        image: h.img,
        priceRange: h.price,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.rating,
          reviewCount: h.reviews
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: '滋賀県',
          addressLocality: '大津市'
        }
      }))
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqListItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-amber-300" />
            11月・12月・1月 世界遺産冬参拝＆琵琶湖温泉・近江牛特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">
            白銀の霊峰に灯る不滅の法灯と湖畔の雪見名湯<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200">
              世界遺産・比叡山延暦寺の静謐な冬参拝＆おごと温泉・極上近江牛の名宿
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            日本仏教の母山・比叡山延暦寺。標高848mの白銀の峰に佇む国宝「根本中堂」で、1200年間燃え続ける「不滅の法灯」に祈りを捧げる静謐な冬。山頂から見下ろす雪の琵琶湖の大パノラマ、最澄ゆかりの古湯「おごと温泉」の美肌露天風呂、そして日本三大和牛「近江牛」のとろける美味に癒やされる珠玉の滞在をご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-amber-400" /> 旬の時期：11月下旬〜1月（厳冬期）
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-amber-400" /> 極上近江牛すき焼き・しゃぶしゃぶ
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-amber-400" /> おごと温泉・琵琶湖レイクビュー露天
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の比叡山延暦寺が放つ「静寂と祈りの神髄」とおごと温泉の温もり
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              雪化粧の杉木立に包まれる天台宗総本山と、最澄開湯1200年の湖畔名湯
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              京都と滋賀の境に聳える霊峰・比叡山。標高848メートルの山頂一帯に広がる天台宗総本山「延暦寺」は、最澄によって開かれて以来、法然、親鸞、栄西、道元、日蓮など日本仏教の各宗派の祖師たちが修行を積んだ「日本仏教の母山」として世界文化遺産に登録されています。秋の紅葉シーズンが過ぎた11月下旬以降、比叡山は本格的な冬の静寂に包まれます。平地より気温が5度以上低い山内には白雪が降り積もり、老杉の巨木並木とともに水墨画のような幽玄な世界が広がります。
            </p>
            <p>
              比叡山の中心である国宝「根本中堂」。堂内の中陣に足を踏み入れると、ひんやりとした静寂の中に、延暦7年（788年）の開山以来1200年間一度も絶やすことなく灯り続ける「不滅の法灯（ふめつのほうとう）」の柔らかな火が浮かび上がります。「油断大敵」の語源ともなったこの尊い灯火の前に立つと、千年の祈りの重みと静けさが心に染み渡ります。現在、根本中堂は約10年にわたる大改修工事中ですが、参拝は可能であり、改修期間中限定の「修学ステージ」からは国宝の巨大な屋根や職人の伝統技法を間近に拝観できる特別な体験が待っています。
            </p>
            <p>
              比叡山から日本一長い坂本ケーブルで琵琶湖岸へと下り立つと、そこには最澄が開湯したと伝わる「おごと温泉（雄琴温泉）」の湯けむりが漂います。pH9.0前後の高アルカリ性単純温泉は、冬の冷えた肌をしっとり包み込み、湯冷めしにくい極上の美肌湯。広大な琵琶湖を望む客室露天風呂で雪見風呂に浸かり、夕食には400年の歴史を誇る日本最古のブランド和牛「近江牛」のすき焼きやしゃぶしゃぶを味わう。霊峰での厳かな祈りと、湖畔の贅沢な温泉ステイが調和した、大人の冬の滋賀旅がここに極まります。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">根本中堂「不滅の法灯」と雪化粧</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                1200年燃え続ける神聖な灯火。改修期間中限定の修学ステージから見上げる国宝建築と、白銀の杉木立の冬参拝。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">琵琶湖一望のおごと温泉雪見露天</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                最澄開湯1200年の名湯。美肌効果抜群の高アルカリ泉に浸かり、冬の朝霧や雪景色に煙る琵琶湖を望む贅沢。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">日本最古のブランド和牛「近江牛」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                きめ細やかなサシと芳醇な香りの極上近江牛。熱々のすき焼きやしゃぶしゃぶ小鍋、ステーキで味わう至高の冬会席。
              </p>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              天台宗の聖地が育んだ歴史と、近江国が誇る最高峰の恵み
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                伝教大師最澄の祈り・延暦寺三塔十六谷と「不滅の法灯」
              </h3>
              <p>
                比叡山延暦寺は「東塔（とうどう）」「西塔（さいとう）」「横川（よかわ）」の三塔から成り、それぞれに歴史的な堂宇が点在します。最澄が灯したとされる根本中堂の不滅の法灯は、毎日朝夕に油を注ぎ足すことで一度も絶えることなく継承されてきました。雪が静かに降る冬の山内では、木々の葉が落ちて視界が開け、白銀の琵琶湖と京都の街並みを同時に見渡すことができます。大改修中の根本中堂で体験できる「修学ステージ」は、普段は決して見ることのできない木組みや屋根瓦の葺き替えを間近で観察できる歴史的ハイライトです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                日本三大和牛「近江牛」の歴史と最澄開湯1200年「おごと温泉」
              </h3>
              <p>
                江戸時代、彦根藩が将軍家へ味噌漬けの養生肉として献上した歴史を持つ「近江牛」。琵琶湖を取り囲む豊かな自然と清冽な伏流水、栄養価の高い飼料で育てられることで、細やかな霜降りと融点の低い極上の脂を実現しています。冬には昆布出汁にくぐらせる熱々のしゃぶしゃぶやすき焼きが絶品。また、比叡山を下りた湖畔に湧く「おごと温泉」は、pH9.0前後の高アルカリ性単純温泉で、肌の不要な角質を落としすべすべにする美肌効果抜群の名湯。冬の冷え切った身体を芯から解きほぐします。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】比叡山延暦寺冬参拝とおごと温泉・極上近江牛を巡る黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              坂本ケーブルで白銀の山頂へ登り、湖畔の名湯で心身を解きほぐす冬の旅路。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午前〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:30 比叡山坂本駅到着 ➔ 門前町散策＆日本一の「坂本ケーブル」乗車
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  JR京都駅から湖西線で約15分の比叡山坂本駅へ。穴太衆積みの美しい石垣が連なる門前町・坂本を抜け、全長2,025mを誇る日本最長の坂本ケーブルへ乗車。車窓から雪に煙る広大な琵琶湖を眺めながら、標高848mの延暦寺駅へ登ります。駅舎を出ると、白銀の静寂に包まれた比叡山頂が広がります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 昼〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 国宝「根本中堂」不滅の法灯参拝＆修学ステージ見学・比叡そば
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  山内の茶屋で熱々の名物「比叡そば」を味わった後、延暦寺の総本堂・国宝「根本中堂」へ。1200年間絶えることなく灯る「不滅の法灯」の前で厳かに合掌。大改修限定の修学ステージから国宝建築の匠の技を間近に見学します。大講堂や阿弥陀堂を巡り、冬の凛とした冷気の中で心洗われる時間を過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  15:30 ケーブル下山 ➔ おごと温泉名宿へチェックイン＆極上近江牛ディナー
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  ケーブルカーで下山後、おごと温泉の宿へチェックイン。客室露天風呂や大浴場のpH9.0の美肌温泉に浸かり、琵琶湖の雪景色を眺めながら芯まで温まります。夕食は極上近江牛のすき焼きやサーロインステーキ。きめ細やかなサシの甘みが口いっぱいに広がり、地酒とともに至福の冬夜を過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:30 琵琶湖の朝焼け露天風呂 ➔ 三井寺参拝＆近江八幡水郷散策
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  琵琶湖の水平線から昇る美しい朝日に照らされながら朝風呂を満喫。滋賀県産米の朝食を楽しんだ後、車または電車で天台寺門宗総本山「三井寺（園城寺）」へ。国宝金堂や三井の晩鐘を拝観し、近江八幡の水郷や八幡堀を散策。クラブハリエのバームクーヘンをお土産に購入し帰路へつきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              比叡山延暦寺参拝とおごと温泉を満喫する厳選名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              琵琶湖レイクビュー露天風呂と極上近江牛、心温まるおもてなしの宿
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">
                          {hotel.id}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          厳選名宿
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right sm:shrink-0 bg-amber-50/50 p-3 sm:p-4 rounded-2xl border border-amber-100">
                      <div className="flex items-center sm:justify-end gap-1 text-amber-600 font-bold text-sm sm:text-base">
                        <Star className="w-4 h-4 fill-current text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 text-xs font-normal">（{hotel.reviews}件）</span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">宿泊目安（1名/税込）</div>
                      <div className="text-lg sm:text-xl font-black text-amber-700">{hotel.price}</div>
                    </div>
                  </div>

                  {/* Hotel Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/60 space-y-2 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">客室の魅力：</strong><span className="text-stone-600">{hotel.roomTip}</span></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">冬の極上美食：</strong><span className="text-stone-600">{hotel.gourmetTip}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">おすすめのポイント</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2 text-center sm:text-right">
                    <a 
                      href={hotel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/20 hover:shadow-lg transition-all w-full sm:w-auto"
                    >
                      <span>露天風呂付き客室は残りわずか ▶ 空室を確認</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Winter Travel Tips */}
        <section className="bg-amber-50/60 rounded-3xl p-6 sm:p-10 border border-amber-200/80 space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">Winter Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の比叡山・おごと温泉旅行で知っておきたい気候・交通・防寒対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                山頂の氷点下冷え込みと堂内参拝
              </div>
              <p className="leading-relaxed">
                比叡山頂は平地より5度以上寒く、12月〜1月は氷点下が日常的です。ダウンコート、マフラー、手袋はもちろん、根本中堂など板の間を歩く参拝用に厚手の靴下やレッグウォーマーを必ず持参してください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-amber-700" />
                坂本ケーブルの利用と雪道ドライブ
              </div>
              <p className="leading-relaxed">
                冬の比叡山へは、除雪の心配がなく暖かい坂本ケーブルの利用が最も安全です。車でドライブウェイを利用する場合は、路面凍結や積雪の恐れがあるためスタッドレスタイヤの装着が必須となります。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Waves className="w-4 h-4 text-amber-700" />
                おごと温泉の送迎バス利用
              </div>
              <p className="leading-relaxed">
                JR湖西線「おごと温泉駅」から各旅館へは無料送迎バスが運行されています（要事前連絡または到着時電話）。電車利用の冬旅でも荷物を気にせず快適に移動できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              比叡山延暦寺・おごと温泉に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-amber-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい関西・近畿の冬景色・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">滋賀・長浜太閤温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                琵琶湖雪景色と天然真鴨の鴨鍋・極上近江牛を味わう名宿
              </span>
            </Link>

            <Link 
              href="/winter-shiga-omihachiman-hikone-snow-castle-omigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">滋賀・彦根＆近江八幡</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                国宝彦根城の雪景色と八幡堀水郷・極上近江牛すき焼き名宿
              </span>
            </Link>

            <Link 
              href="/winter-kyoto-ohara-sanzenin-snow-hosenin-misonabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">京都・大原三千院</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                静寂の洛北・三千院白銀雪景色と宝泉院額縁庭園・大原温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">京都・貴船＆鞍馬</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                雪の貴船神社ライトアップと名物ぼたん鍋・冬の奥座敷名宿
              </span>
            </Link>

            <Link 
              href="/winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">和歌山・高野山</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                雪の奥之院静寂参拝と歴史ある宿坊ステイ・精進料理名宿
              </span>
            </Link>

            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">兵庫・有馬温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                日本三古湯の金泉・銀泉と極上神戸牛会席を堪能する名宿
              </span>
            </Link>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif">おごと温泉の露天風呂付き客室は冬の争奪戦</h2>
          <p className="text-amber-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            琵琶湖を望む露天風呂付き客室は各旅館で数室限定。近江牛会席付きの冬プランは11月中に売り切れることも珍しくありません。比叡山参拝と温泉旅を計画中なら、今のうちに空室を確認しておきましょう。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fhotel%2Flist.html%3Ff_teikei%3Dtmp_kw_rt%26f_area%3D25_kansai%26f_keyword%3D%25E3%2581%258A%25E3%2581%2594%25E3%2581%25A8%25E6%25B8%25A9%25E6%25B3%2589"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-amber-700 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all"
          >
            <span>おごと温泉の宿を楽天トラベルで探す</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </section>
      </main>
    </article>
  );
}
