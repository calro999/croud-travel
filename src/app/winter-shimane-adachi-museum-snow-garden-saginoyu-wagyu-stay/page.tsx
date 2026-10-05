import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, Sparkles, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Building, ThermometerSun } from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月島根】米誌20年連続日本一・足立美術館「白銀の日本庭園」雪景色とさぎの湯温泉・極上しまね和牛＆松葉ガニを堪能する名宿5選",
  description: "11月から1月、山陰・島根の安来（やすぎ）は白銀の雪と静寂に包まれ、世界が称賛する日本美の最高峰が姿を現します。アメリカの日本庭園専門誌で20年以上連続日本一に君臨し、ミシュラン三ツ星を獲得した「足立美術館」。雪化粧をまとった枯山水庭や白砂青松庭は、額縁越しに眺めると息を呑む一幅の巨大な山水画へと昇華します。美術館のすぐ隣に湧く白鷺伝説の古湯「さぎの湯温泉」、冬の日本海がもたらす味覚の王者「松葉ガニ」、そして口の中でとろける霜降り「しまね和牛」。冬の静寂と至福の温泉美食に癒やされる厳選名宿5選をご紹介します。",
  keywords: '足立美術館 冬 雪景色, 足立美術館 日本庭園 一位, さぎの湯温泉 旅館, しまね和牛 宿, 松葉ガニ 安来 境港, さぎの湯温泉 さぎの湯荘, 安来苑, 竹葉 足立美術館, 皆生シーサイドホテル, ホテルアクシス, 11月 12月 1月 島根旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shimane-adachi-museum-snow-garden-saginoyu-wagyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月島根】米誌20年連続日本一・足立美術館「白銀の日本庭園」雪景色とさぎの湯温泉・極上しまね和牛＆松葉ガニを堪能する名宿5選",
    description: "11月から1月、山陰・島根の安来（やすぎ）は白銀の雪と静寂に包まれ、世界が称賛する日本美の最高峰が姿を現します。アメリカの日本庭園専門誌で20年以上連続日本一に君臨し、ミシュラン三ツ星を獲得した「足立美術館」。雪化粧をまとった枯山水庭や白砂青松庭は、額縁越しに眺めると息を呑む一幅の巨大な山水画へと昇華します。美術館のすぐ隣に湧く白鷺伝説の古湯「さぎの湯温泉」、冬の日本海がもたらす味覚の王者「松葉ガニ」、そして口の中でとろける霜降り「しまね和牛」。冬の静寂と至福の温泉美食に癒やされる厳選名宿5選をご紹介します。",
    url: 'https://croud-travel.com/winter-shimane-adachi-museum-snow-garden-saginoyu-wagyu-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/17912/17912.jpg', width: 1200, height: 630, alt: '足立美術館雪景色とさぎの湯温泉名宿' }]
  }
};

export default function ShimaneAdachiSaginoyuPage() {
  const hotelsData = [
            {
              id: 1,
              name: "さぎの湯温泉　さぎの湯荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17912/17912.jpg",
              rating: 4.76,
              reviews: 775,
              price: "¥23,100〜",
              access: "ＪＲ安来駅よりバスにて１５分／山陰道安来ＩＣより１０分",
              special: "足立美術館から徒歩30秒。その昔、鷺が傷を癒したことから名づけられた薬効高い源泉掛け流し温泉。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17912%2F17912.html",
              story: "足立美術館の正門まで徒歩わずか1分、白鷺が傷を癒やしたという開湯千年の伝説を伝える「さぎの湯温泉 さぎの湯荘」。敷地内から自噴する豊富な自家源泉を惜しみなく掛け流しで使用し、毎分毎秒新鮮な美肌の湯を堪能できます。雪吊りが施された風情ある日本庭園を望む客室や露天風呂付き客室は、大人の静かな冬籠もりに最適。夕食には山陰の冬の味覚の王様・松葉ガニや、きめ細やかな肉質のブランド牛「しまね和牛」のステーキ、地元契約農家の冬野菜を使った上品な会席料理が並び、心尽くしのおもてなしに心ほどけます。",
              roomTip: "庭園露天風呂付き離れ和洋室。プライベートな源泉掛け流し露天風呂から白銀の日本庭園を独り占めできる至極の空間。",
              gourmetTip: "「山陰冬の味覚・松葉ガニ＆しまね和牛会席」。甘み濃厚な焼きガニやカニ刺しと、香ばしくジューシーに焼き上げるしまね和牛ステーキ。",
              highlights: [
                "足立美術館まで徒歩1分の好立地・源泉100％掛け流し天然温泉の庭園露天風呂",
                "冬の味覚松葉ガニと極上霜降りしまね和牛ステーキ・繊細な出汁が香る本格会席",
                "雪吊りが美しい日本庭園と露天風呂付き客室・大人の冬の記念日旅に大人気"
              ]
            },
            {
              id: 2,
              name: "さぎの湯温泉　安来苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39767/39767.jpg",
              rating: 4.06,
              reviews: 242,
              price: "¥7,100〜",
              access: "ＪＲ山陰本線安来駅からバスで15分。足立美術館前下車ですぐ。",
              special: "足立美術館目の前の家庭的な旅館。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39767%2F39767.html",
              story: "足立美術館のすぐ目の前に位置し、昔ながらの純和風の落ち着きと家庭的な温もりで参拝・鑑賞客を迎える老舗料理旅館「さぎの湯温泉 安来苑」。美術館開館前の静かな朝や夕暮れ時に、混雑を避けてゆっくりと庭園散策を楽しめる最高のロケーションを誇ります。大浴場には柔らかな肌触りで身体を芯から温める天然温泉が満ち、長旅の疲れを心地よく癒やしてくれます。夕食は地元の海・山の恵みを丹精込めて手作りした郷土会席。安来名物のどじょう料理や旬の日本海の鮮魚、島根県産米の炊きたてご飯をゆったりと味わえます。",
              roomTip: "落ち着いた純和風客室。窓の外に広がる山陰の冬の田園風景と静寂に包まれ、どこか懐かしい寛ぎの時間を過ごせます。",
              gourmetTip: "「安来郷土会席膳」。滋養強壮に優れた安来名物どじょう鍋（柳川風）と、日本海直送の冬の寒ビラメや鮮魚のお造り。",
              highlights: [
                "美術館の目の前に佇む老舗純和風旅館・アットホームなおもてなしと肌に優しい天然温泉",
                "安来名物どじょう鍋と日本海直送の冬の鮮魚・山陰の郷土の味をほっこり満喫",
                "開館直後の混雑しない時間帯に足立美術館へ・リーズナブルで温かな滞在"
              ]
            },
            {
              id: 3,
              name: "さぎの湯温泉　竹葉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14414/14414.jpg",
              rating: 4.26,
              reviews: 365,
              price: "¥11,000〜",
              access: "山陰道安来ＩＣより１０分／ＪＲ安来駅より足立美術館無料シャトルバスで２０分／米子空港よりレンタカーで50分。",
              special: "『足立美術館』まで３０秒の温泉宿。温泉は源泉１００％かけ流し。戦国武将のコンセプトルームあり。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14414%2F14414.html",
              story: "足立美術館の隣に佇み、名物女将による心温まるおもてなしと健康美食でメディアにも多数取り上げられる個性豊かな温泉宿「さぎの湯温泉 竹葉（ちくよう）」。山陰の豊かな自然が育んだ食材を活かしたマクロビオティック料理や薬膳会席が女性や健康志向の旅人に大人気です。さぎの湯温泉の源泉100％を引く大浴場と貸切風呂でしっとりと温まった後は、しまね和牛の豆乳小鍋や季節の薬膳料理を堪能。女将の温かな語り口や館内のアート展示が、冬の心身をじんわりと解きほぐしてくれます。",
              roomTip: "モダン和洋室。畳スペースと快適なローベッドが備わり、一人旅から夫婦旅まで心地よいリトリート滞在が叶います。",
              gourmetTip: "「冬の薬膳＆しまね和牛会席」。身体を温める生薬や旬の根菜を取り入れた薬膳スープと、極上しまね和牛の陶板焼き。",
              highlights: [
                "足立美術館隣接の癒やしの宿・女将の心温まるもてなしとマクロビ＆薬膳会席",
                "身体を内側から温める冬の薬膳スープとしみじみ美味しいしまね和牛陶板焼き",
                "一文字セラピーやアート空間・静かに心身をリセットする女性一人旅にもおすすめ"
              ]
            },
            {
              id: 4,
              name: "皆生温泉　皆生シーサイドホテル　海の四季",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5020/5020.jpg",
              rating: 4.42,
              reviews: 4995,
              price: "¥5,940〜",
              access: "米子自動車道・米子ＩＣより車で約10分、ＪＲ米子駅よりタクシー又はバスで約15分、米子空港よりタクシー又はバスで約20分",
              special: "【楽天アワード2025受賞】14年連続＆通算17回目！全室オーシャンフロント！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5020%2F5020.html",
              story: "足立美術館から車で約25分、山陰屈指の名湯・皆生温泉の海岸沿いに位置し、全室から雄大な日本海と美保湾を一望できる絶景ホテル「皆生シーサイドホテル 海の四季」。東館と西館からなる洗練された館内には、海を一望する絶景露天風呂を備え、塩化物泉の温まりの湯に浸かりながら冬の日本海の荒波や雪化粧の大山を望むことができます。冬の夕食は境港から直送される本場松葉ガニのフルコースや鳥取・島根の厳選和牛会席。美術館観光と海の絶景露天風呂を贅沢に両立したい旅人に選ばれています。",
              roomTip: "オーシャンビュー展望風呂付き和洋室。窓一面に広がる冬の日本海を眺めながら、プライベートな潮湯露天風呂を満喫。",
              gourmetTip: "「境港直送・極上本松葉ガニづくし会席」。茹でガニ姿一杯、焼きガニ、カニすき鍋、カニ雑炊まで本場のズワイガニを堪能。",
              highlights: [
                "日本海・美保湾一望のオーシャンフロント露天風呂・冬の味覚松葉ガニフルコース",
                "境港水揚げ本松葉ガニづくし・潮風を感じる絶景雪見温泉と海の恵みディナー",
                "全室オーシャンビュー・雪化粧の大山と冬の白波を眺めるパノラマビュー"
              ]
            },
            {
              id: 5,
              name: "ホテル　アクシス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39390/39390.jpg",
              rating: 3.99,
              reviews: 350,
              price: "¥3,350〜",
              access: "米子道－米子南ICより181号線：お車5分  JR境港線－富士見町駅より：徒歩5分 バス停－錦町1丁目：ホテル正面",
              special: "市内の中心に位置しビジネスと観光に最適なホテルです。　山陰最大の飲食街に徒歩２分！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39390%2F39390.html",
              story: "JR米子駅前に位置し、足立美術館行きの無料シャトルバス発着拠点や周辺観光へのアクセス抜群のデザイナーズホテル「ホテル アクシス」。シンプルモダンで清潔感あふれるインテリアと、広々とした客室設計が旅の快適性を約束します。全室にシモンズ社製高級ベッドと個別空調を完備し、冬の観光やドライブの拠点としてコストパフォーマンスも抜群。周辺には山陰の地酒や旬の松葉ガニ、しまね和牛を気軽に味わえる居酒屋や名店が揃い、自由度の高いスマートな山陰冬旅をサポートします。",
              roomTip: "デラックスダブルルーム。ワイドなクイーンベッドとゆったりとしたソファスペースを備え、機能的で快適な夜を過ごせます。",
              gourmetTip: "「山陰の味覚朝食」。地元産のお米や日本海名産のハタハタ・干物、島根・鳥取の郷土料理を取り入れた朝の和定食。",
              highlights: [
                "米子駅近のモダンホテル・足立美術館シャトルバス発着拠点に最適で快適滞在",
                "シモンズ製ベッド完備の快適ルーム・周辺居酒屋で山陰の地酒と冬の味覚探訪",
                "抜群のフットワークとコスパ・足立美術館・松江城・出雲大社を巡るドライブ拠点"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬の「足立美術館」の雪景色（庭園美）の見頃時期とおすすめの鑑賞時間は？",
    "a": "足立美術館の雪景色は例年12月下旬から2月上旬にかけて見られます。寒波が訪れると、5万坪の日本庭園（枯山水庭、苔庭、池庭、白砂青松庭）が一面の純白に染まり、黒々とした松の枝や岩肌とのコントラストがまるで実物大の水墨山水画のような息を呑む絶景を描き出します。おすすめの鑑賞時間は「朝一番（開館直後の9時〜10時）」。誰も踏み入れていない静寂の中、朝の澄んだ光に照らされる雪庭を額縁越し（生の額絵・生の掛軸）に静かに鑑賞できます。"
  },
  {
    "q": "足立美術館の入館料金やチケット購入方法、所要時間は？",
    "a": "足立美術館の大人入館料は2,300円（大学生1,800円、高校生1,000円、小中学生500円）です。事前予約制ではなく当日券で入場できますが、公式サイトでWEBチケットの事前購入も可能です。所要時間は、5万坪の日本庭園鑑賞、横山大観をはじめとする近代日本画コレクション、魯山人館、新館などをじっくり巡ると約2時間〜2時間半が目安です。庭園を眺める喫茶室「大正浪漫」や「翠」でのお茶時間も含めると半日ゆったりと楽しめます。"
  },
  {
    "q": "「さぎの湯温泉」の泉質・効能と足立美術館からの近さは？",
    "a": "さぎの湯温泉は、足立美術館の正門からわずか徒歩1分〜3分の距離に位置する温泉地です。戦国時代には尼子氏と毛利氏の合戦の傷を癒やした歴史があり、白鷺が傷を癒やしたという伝説から名付けられました。泉質は含放射能-ナトリウム・カルシウム-塩化物・硫酸塩泉（弱アルカリ性低張性高温泉）で、無色透明の柔らかな肌触り。ラジウムを微量に含むため新陳代謝を高め、保温・保湿効果に優れ「美肌の湯」として高く評価されています。"
  },
  {
    "q": "冬の山陰で味わうべき「しまね和牛」と「松葉ガニ」の特徴とは？",
    "a": "「しまね和牛」は全国和牛能力共進会で最高賞の内閣総理大臣賞を受賞した実績を持つ日本最高峰の黒毛和牛です。融点が低くきめ細やかなサシと芳醇な香りが特徴で、冬のステーキやすき焼きはとろけるような口どけです。一方、11月上旬に漁が解禁される「松葉ガニ（山陰ズワイガニの雄）」は、安来に隣接する境港が日本有数の水揚げ量を誇ります。ぎっしり詰まった上品な甘みの身と濃厚なカニ味噌は冬の山陰でしか味わえない至高の美味です。"
  },
  {
    "q": "東京・大阪方面から足立美術館・さぎの湯温泉へのアクセスと雪道対策は？",
    "a": "飛行機の場合、米子鬼太郎空港または出雲縁結び空港からJR米子駅・安来駅経由でアクセスします。新幹線・特急の場合、JR岡山駅から特急「やくも」で約2時間15分でJR安来駅へ。安来駅からは足立美術館行きの「無料シャトルバス（所要約20分）」が毎日運行しています。車の場合、山陰自動車道・安来ICから約10分ですが、12月〜1月の山陰地方は積雪や凍結があるため、スタッドレスタイヤの装着が必須です。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月島根】米誌20年連続日本一・足立美術館「白銀の日本庭園」雪景色とさぎの湯温泉・極上しまね和牛＆松葉ガニを堪能する名宿5選",
    description: "11月から1月、山陰・島根の安来（やすぎ）は白銀の雪と静寂に包まれ、世界が称賛する日本美の最高峰が姿を現します。アメリカの日本庭園専門誌で20年以上連続日本一に君臨し、ミシュラン三ツ星を獲得した「足立美術館」。雪化粧をまとった枯山水庭や白砂青松庭は、額縁越しに眺めると息を呑む一幅の巨大な山水画へと昇華します。美術館のすぐ隣に湧く白鷺伝説の古湯「さぎの湯温泉」、冬の日本海がもたらす味覚の王者「松葉ガニ」、そして口の中でとろける霜降り「しまね和牛」。冬の静寂と至福の温泉美食に癒やされる厳選名宿5選をご紹介します。",
    url: 'https://croud-travel.com/winter-shimane-adachi-museum-snow-garden-saginoyu-wagyu-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.com/features/' },
        { '@type': 'ListItem', position: 3, name: '足立美術館雪景色＆さぎの湯温泉ステイ', item: 'https://croud-travel.com/winter-shimane-adachi-museum-snow-garden-saginoyu-wagyu-stay' }
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
          addressRegion: idx === 3 || idx === 4 ? '鳥取県' : '島根県',
          addressLocality: idx === 3 || idx === 4 ? '米子市' : '安来市'
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
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
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
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-teal-300" />
            11月・12月・1月 冬の日本庭園雪景色・美肌名湯＆しまね和牛・松葉ガニ特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">
            白銀の山水画を額縁に望む日本庭園の最高峰<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-200 to-amber-200">
              足立美術館雪景色とさぎの湯温泉・しまね和牛と松葉ガニの名宿
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            アメリカ庭園専門誌で20年以上連続日本一に輝く「足立美術館」。雪化粧に包まれた5万坪の枯山水庭は、創設者の言葉通り「生きた一幅の山水画」として息を呑む静謐を放ちます。美術館至近の白鷺伝説息づく「さぎの湯温泉」、冬の日本海が誇る「松葉ガニ」、そして極上の霜降り「しまね和牛」。山陰の冬の美と味覚に抱かれる厳選名宿をお届けします。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-teal-400" /> 旬の時期：11月〜1月
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-teal-400" /> しまね和牛・松葉ガニ
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-teal-400" /> さぎの湯源泉・美肌温泉
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              世界が称賛する足立美術館の「冬の静寂」と、さぎの湯の温もり
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              雪の枯山水庭が描く墨絵の世界と、山陰の冬が育む至高の味覚
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              島根県安来市に位置する足立美術館は、創設者・足立全康（あだちぜんこう）の「庭園もまた一幅の絵画である」という信念のもと、広大な5万坪の借景式日本庭園と横山大観をはじめとする近代日本画が融合した世界屈指の美術館です。アメリカの日本庭園専門誌『ジャーナル・オブ・ジャパニーズ・ガーデニング』の日本庭園ランキングで20年以上連続で第1位を獲得し、『ミシュラン・グリーンガイド・ジャポン』でも最高評価の三ツ星を獲得しています。
            </p>
            <p>
              11月から1月にかけて、冬の冷涼な空気とともに初雪が舞い降りると、庭園は一年で最もドラマチックな変貌を遂げます。白砂青松庭の緑の松と白い雪、枯山水庭の巨岩が雪化粧をまとい、奥に連なる山々の雪景色と一体化する光景は、まさに自然が創り出した巨大な山水画そのもの。館内の窓枠を額縁に見立てた「生の額絵」や、床の間の壁をくり抜いて庭園を掛軸に見立てた「生の掛軸」から眺める冬景色は、見る者の言葉を失わせるほどの美を誇ります。静まり返る展示室には横山大観の壮大な名画や北大路魯山人の陶芸が並び、美の極致へと誘います。
            </p>
            <p>
              美術館を鑑賞した後は、徒歩数分に湧く「さぎの湯温泉」で心ゆくまで冷えた身体を温めるのが至福の過ごし方です。古くから白鷺が傷を癒やしたと伝わる名湯は、肌をしっとり潤す弱アルカリ性の美肌泉。そして夕食には、全国和牛能力共進会で日本一に輝いた「しまね和牛」のステーキや、境港から直送される冬の味覚の王様「松葉ガニ」の贅沢な会席料理が待っています。出雲大社の神在月や初詣とも組み合わせやすく、静けさと贅に満ちた山陰の冬旅が、深く心に刻まれます。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-teal-50/50 border border-teal-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">白銀の枯山水庭と生の額絵</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                20年以上連続日本一の日本庭園。雪化粧の松と岩肌、借景の山々が織りなす静謐な山水画の絶景鑑賞。
              </p>
            </div>

            <div className="bg-teal-50/50 border border-teal-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">さぎの湯温泉の美肌源泉</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                美術館から徒歩1分の白鷺伝説の古湯。柔らかで保温効果抜群の弱アルカリ性源泉掛け流しで極上の湯浴み。
              </p>
            </div>

            <div className="bg-teal-50/50 border border-teal-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">しまね和牛＆境港松葉ガニ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                内閣総理大臣賞受賞のしまね和牛と、冬の日本海が誇る甘み豊かな松葉ガニ。山陰の冬を凝縮した贅沢会席。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-teal-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】白銀の足立美術館とさぎの湯名湯・カニ和牛美食を巡る黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              特急やくも号でアクセス。世界一の雪庭と源泉掛け流し温泉に浸かる至高の休日。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 安来駅到着 ➔ 無料シャトルバスでさぎの湯温泉へチェックイン
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  JR岡山駅から新型の特急やくも号でJR安来駅へ。駅前から足立美術館・さぎの湯温泉行きの無料シャトルバスに乗車し約20分。安来は古くから「たたら製鉄」と安来節の民謡で栄えた歴史ある街です。美術館至近の老舗宿にチェックインし、敷地内自噴の源泉100％掛け流し露天風呂で冷えた身体をじっくり温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  18:30 本場松葉ガニづくし＆最高級「しまね和牛ステーキ」会席ディナー
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  隣接する境港から届いたばかりの冬の王者・松葉ガニの茹でガニや焼きガニ、カニすき鍋と、きめ細やかなサシがとろけるしまね和牛ステーキを贅沢に味わうディナー。島根の銘酒「月山」や「李白」とともに、雪の静寂に包まれる大人の夜を過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 開館直後の「足立美術館」へ ➔ 白銀の枯山水庭・生の額絵・大観名画鑑賞
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  徒歩ですぐの足立美術館へ。朝一番の静けさの中、雪化粧をまとった5万坪の枯山水庭園と生の額絵を鑑賞。横山大観の『富士越しの龍』や近代日本画の名作、魯山人館を鑑賞し、庭園を望む喫茶室で雪景色を眺めながらお茶を楽しみます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 2 昼〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:30 安来節演芸館＆名物どじょう鍋ランチ ➔ シャトルバスで安来駅へ帰路へ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  美術館隣接の「安来節演芸館」で郷土民謡の生演奏を鑑賞。安来名物のどじょう柳川鍋や出雲そばのランチを堪能し、お土産に銘菓「どじょう掬いまんじゅう」を購入。無料シャトルバスで安来駅へ戻り、特急やくもで帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              境港直送の松葉ガニと、内閣総理大臣賞の「しまね和牛」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-700" />
                冬の日本海の至宝「本松葉ガニ」の濃厚な甘みとカニ味噌
              </h3>
              <p>
                安来からほど近い境港は、日本屈指のズワイガニ水揚げ港。11月上旬から3月にかけて水揚げされるオスのズワイガニは「松葉ガニ」と呼ばれ、日本海の荒波とプランクトン豊富な深海で育った身は甘みが極めて濃厚です。繊細な甘みが引き立つカニ刺し、香ばしい煙とともに旨味が凝縮される焼きガニ、濃厚なカニ味噌の甲羅焼きは、冬の山陰を訪れる最大の歓びです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-teal-700" />
                全国和牛能力共進会日本一に輝いた「しまね和牛」の極み
              </h3>
              <p>
                「和牛のオリンピック」と称される全国和牛能力共進会において、内閣総理大臣賞を受賞した実績を持つ「しまね和牛」。良質なオレイン酸を豊富に含み、体温でさっと溶け出す脂の融点の低さが特徴です。口に運んだ瞬間に広がる芳醇な香りと、重たさを感じさせない軽やかな後味は、冬のステーキやすき焼きでその真価を発揮します。
              </p>
            </div>
          </div>
        </section>

        {/* Selected Hotels Section */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-teal-700 font-bold text-xs sm:text-sm tracking-wider uppercase block">
              Handpicked Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif">
              足立美術館雪景色＆さぎの湯温泉を堪能する名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              公式楽天トラベルAPIより取得した最新の宿泊データ・クチコミ・最低料金を掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel: any) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl border border-stone-200/90 shadow-xs overflow-hidden transition-all duration-300 hover:border-teal-400 hover:shadow-md"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header Badge & Title */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                        厳選名宿 No.{hotel.id}
                      </span>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1 text-teal-600 font-bold">
                          <Star className="w-4 h-4 fill-teal-400 text-teal-400" />
                          {hotel.rating}
                        </span>
                        <span className="text-stone-400">({hotel.reviews}件のクチコミ)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-teal-700 transition-colors inline-flex items-center gap-2"
                      >
                        {hotel.name}
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-teal-700 inline" />
                      </a>
                    </h3>

                    <p className="text-stone-500 text-xs sm:text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                      {hotel.access}
                    </p>
                  </div>

                  {/* Hotel Image & Price Banner */}
                  <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-21/9 bg-stone-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 right-3 bg-stone-900/85 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md">
                      参考宿泊料金：<span className="text-teal-300 font-bold">{hotel.price}</span> / 名
                    </div>
                  </div>

                  {/* Editorial Story */}
                  <div className="space-y-3 bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <h4 className="text-xs sm:text-sm font-bold text-teal-900 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-teal-600" />
                      宿の魅力と冬の滞在ストーリー
                    </h4>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>
                  </div>

                  {/* Tips 2-col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-teal-50/30 border border-teal-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-teal-900 flex items-center gap-1">
                        <ThermometerSun className="w-3.5 h-3.5 text-teal-700" /> おすすめの客室
                      </span>
                      <p className="text-stone-600 text-xs leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-teal-50/30 border border-teal-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-teal-900 flex items-center gap-1">
                        <Utensils className="w-3.5 h-3.5 text-teal-700" /> 冬の自慢グルメ
                      </span>
                      <p className="text-stone-600 text-xs leading-relaxed">{hotel.gourmetTip}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {hotel.highlights.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
                    >
                      楽天トラベルで空室・冬の宿泊プランを確認する
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-teal-50/60 rounded-3xl p-6 sm:p-10 border border-teal-200/60 space-y-6">
          <div className="border-b border-teal-200/80 pb-4">
            <span className="text-teal-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-teal-950 font-serif">
              足立美術館雪景色＆さぎの湯温泉を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-teal-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Sparkles className="w-4 h-4 text-teal-700" />
                朝一番（開館直後9時）の入館がおすすめ
              </div>
              <p className="leading-relaxed text-stone-700">
                雪の日の足立美術館は、誰も踏み入れていない純白の雪庭を額絵越しに撮るため、朝9時の開館直後が最も美しい瞬間です。さぎの湯温泉の宿に泊まれば、徒歩数分で開館と同時に入場できます。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-teal-700" />
                山陰エリアの雪道運転と無料シャトルバス
              </div>
              <p className="leading-relaxed text-stone-700">
                12月下旬〜2月の山陰道や一般道は積雪・凍結のリスクが高まります。車利用時はスタッドレスタイヤが必須ですが、JR安来駅から毎日運行されている無料シャトルバスを利用すれば雪道の不安なくアクセスできます。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                名湯さぎの湯温泉の美肌入浴法
              </div>
              <p className="leading-relaxed text-stone-700">
                さぎの湯温泉は弱アルカリ性で成分が濃厚なため、長湯せず15分程度ずつゆっくり浸かるのが身体を冷やさないコツです。入浴後は水分をしっかり補給し、庭園の静けさの中で寛ぎましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              足立美術館雪景色＆さぎの湯温泉に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-teal-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい山陰・中国地方の冬景色・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-700 font-bold text-xs block mb-1">鳥取・境港＆皆生温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-800 transition-colors line-clamp-2">
                冬の味覚の王様・境港水揚げ松葉ガニと皆生美肌温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-700 font-bold text-xs block mb-1">島根・松江しんじ湖</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-800 transition-colors line-clamp-2">
                宍道湖の冬夕日と国宝松江城雪景色・松葉ガニとしじみ汁名宿
              </span>
            </Link>

            <Link 
              href="/winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-700 font-bold text-xs block mb-1">島根・出雲大社</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-800 transition-colors line-clamp-2">
                神在月・新春初詣の出雲大社参拝と名物出雲そば・しまね和牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-700 font-bold text-xs block mb-1">島根・玉造温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-800 transition-colors line-clamp-2">
                日本最古の美肌温泉と冬の松葉ガニフルコース・勾玉の里名宿
              </span>
            </Link>

            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-700 font-bold text-xs block mb-1">鳥取・三朝温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-800 transition-colors line-clamp-2">
                世界屈指の高濃度ラドン温泉と冬の山陰松葉ガニ名宿
              </span>
            </Link>

            <Link 
              href="/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-700 font-bold text-xs block mb-1">岡山・倉敷＆吉備津</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-800 transition-colors line-clamp-2">
                白壁倉敷美観地区冬夜景と吉備津神社初詣・千屋牛会席名宿
              </span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
