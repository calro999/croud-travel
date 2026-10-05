import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, Sparkles, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Building, ThermometerSun } from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月日光】世界遺産・日光東照宮の静謐な冬参拝＆新春初詣と名物「日光湯波会席」・とちぎ和牛を堪能する名宿5選",
  description: "11月から1月、木々の葉が落ち清澄な大気に包まれる日光山内は、世界遺産・日光東照宮が最も神聖な静寂を纏う季節です。白銀の雪化粧に黄金と極彩色が際立つ国宝「陽明門」、静まり返る薬師堂に響く「鳴龍」の鈴音、徳川家康公を祀る奥宮への白銀杉並木の石段。新春には輪王寺や日光二荒山神社とともに数万人が訪れる新春初詣の聖地となります。寒さ深まる門前町で味わう名物「日光湯波会席」や極上の「とちぎ和牛」、身体の芯まで温もる日光温泉の雪見露天風呂を満喫できる厳選名宿5選を徹底紹介します。",
  keywords: '日光東照宮 冬 参拝, 日光東照宮 初詣 混雑, 日光湯波 会席 宿, とちぎ和牛 日光 温泉, 日光千姫物語, 日光金谷ホテル, 日光 星の宿, 小槌の宿 鶴亀大吉, 日光西町倶楽部あらとうと, 11月 12月 1月 日光旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay/"
  },
  openGraph: {
    title: "【11・12・1月日光】世界遺産・日光東照宮の静謐な冬参拝＆新春初詣と名物「日光湯波会席」・とちぎ和牛を堪能する名宿5選",
    description: "11月から1月、木々の葉が落ち清澄な大気に包まれる日光山内は、世界遺産・日光東照宮が最も神聖な静寂を纏う季節です。白銀の雪化粧に黄金と極彩色が際立つ国宝「陽明門」、静まり返る薬師堂に響く「鳴龍」の鈴音、徳川家康公を祀る奥宮への白銀杉並木の石段。新春には輪王寺や日光二荒山神社とともに数万人が訪れる新春初詣の聖地となります。寒さ深まる門前町で味わう名物「日光湯波会席」や極上の「とちぎ和牛」、身体の芯まで温もる日光温泉の雪見露天風呂を満喫できる厳選名宿5選を徹底紹介します。",
    url: 'https://croud-travel.com/winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/41382/41382.jpg', width: 1200, height: 630, alt: '日光東照宮と日光温泉名宿' }]
  }
};

export default function TochigiNikkoToshoguPage() {
  const hotelsData = [
            {
              id: 1,
              name: "日光温泉　日光千姫物語",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41382/41382.jpg",
              rating: 4.53,
              reviews: 853,
              price: "¥19,250〜",
              access: "ＪＲ　東武日光駅より車で10分、徒歩30分　日光東照宮まで徒歩10分",
              special: "訪れる旅人に「夢のような美しい物語」を。地元の厳選素材を使った本格懐石料理で料理自慢の宿です！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41382%2F41382.html",
              story: "日光東照宮まで徒歩約10分、大谷川（だいやがわ）の清流を眼下に望む静かなロケーションに佇む「日光温泉 日光千姫物語」。客室やロビーラウンジからは雪化粧をまとった日光連山の雄姿を眺めることができ、優雅で温かなおもてなしが旅人を迎えます。大浴場では広々とした内湯と冬の澄んだ空気に包まれる庭園露天風呂を完備。夕食には日光名物の生湯波をはじめ、旬の川魚やとちぎ和牛を上品に仕立てた本格懐石料理が並び、女性目線の細やかなアメニティや居心地の良さが冬の参拝客に絶賛されています。",
              roomTip: "渓谷側和洋室。窓一面に広がる大谷川の渓流と雪景色の山並みを眺めながら、畳の温もりとシモンズ製ベッドの快適さを両立。",
              gourmetTip: "「日光名物・千姫湯波懐石」。巻き湯波の炊き合わせや揚げ湯波、生湯波の刺身など多彩な湯波料理と厳選とちぎ和牛ステーキの饗宴。",
              highlights: [
                "日光東照宮まで徒歩約10分の好立地・大谷川の渓谷美を望む四季の露天風呂",
                "名物千姫湯波懐石と厳選とちぎ和牛・彩り豊かな旬の味覚を心ゆくまで堪能",
                "清潔感あふれる和洋室と細やかなアメニティ・女子旅や夫婦旅に大人気"
              ]
            },
            {
              id: 2,
              name: "日光金谷ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28760/28760.jpg",
              rating: 4.48,
              reviews: 904,
              price: "¥14,750〜",
              access: "東武・ＪＲ日光駅よりバス約５分、神橋バス停下車／日光－宇都宮有料道路日光ＩＣより神橋交差点近く　日光東照宮より徒歩15分",
              special: "創業明治６年、日本最古のクラシックリゾートホテル。明治の薫り漂う館内で時間旅行をご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28760%2F28760.html",
              story: "明治6年創業、日本現存最古のリゾートホテルとして国の登録有形文化財に指定されている「日光金谷ホテル」。アインシュタインやヘレン・ケラーなど世界中の要人が滞在したクラシックホテルの最高峰です。雪降る冬の日光山内において、重厚な回転扉をくぐると大正ロマンの暖炉や職人彫刻が灯る別世界が広がります。メインダイニングで味わう冬のディナーは、伝統のコンソメスープや日光虹鱒のソテー金谷風、とちぎ和牛のフィレステーキなど、150年の歴史が磨き上げた正統派フランス料理。東照宮や神橋への朝の雪道散策も格別の風情です。",
              roomTip: "本館クラシックツイン。創業当時の宮大工の細工やクラシカルな木製家具が残り、時空を超えた文化財宿泊体験を満喫できます。",
              gourmetTip: "「金谷伝統フルコースディナー」。代々受け継がれる秘伝レシピの虹鱒ソテーと栃木県産和牛フィレ、名物百年ライスカレーの朝食。",
              highlights: [
                "創業150年を誇る日本最古のリゾートホテル・登録有形文化財の重厚な建築美",
                "伝統のコンソメスープと虹鱒ソテー・百年ライスカレーが息づく正統派フレンチ",
                "アインシュタインや要人が愛した歴史空間・冬の神橋や東照宮への早朝散策"
              ]
            },
            {
              id: 3,
              name: "日光温泉　日光　星の宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41725/41725.jpg",
              rating: 4.43,
              reviews: 674,
              price: "¥30,250〜",
              access: "東武，JR日光駅送迎あり　日光宇都宮道路日光ICより5分　路線バスにて「神橋」下車、徒歩3分",
              special: "～自然と庭園を愉しむ高台の宿～ひきあげ湯波KAISEKI　日光星の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41725%2F41725.html",
              story: "世界遺産・日光社寺の参道入り口、日本庭園の静けさに抱かれた数寄屋造りの隠れ宿「日光温泉 日光 星の宿」。客室の障子を開けると、雪吊りが施された風情ある日本庭園と日光の山々が静かに広がります。自家源泉から引く天然温泉は、肌あたりの柔らかいアルカリ性単純温泉で、雪見の庭園露天風呂で冷えた身体を芯から温めてくれます。名物の夕食は、日光名産「引き上げ湯波」を出来立ての温かさで味わう本格湯波会席。料理長の卓越した出汁の技が光る繊細な冬の味覚を心静かに堪能できます。",
              roomTip: "庭園ビュー和室。しっとりと雪が積もる日本庭園を見下ろし、冬の静寂と和の美意識に包まれる贅沢なひとときを過ごせます。",
              gourmetTip: "「引き上げ生湯波付きこだわり湯波会席」。豆乳から目の前で引き上げる極上湯波と、栃木の旬野菜・厳選霜降り牛の小鍋仕立て。",
              highlights: [
                "世界遺産参道沿いに佇む数寄屋造りの隠れ宿・雪吊りが美しい日本庭園一望",
                "引き上げ生湯波を目の前で楽しむ本格湯波会席・出汁にこだわった優しい和食",
                "柔らかな自家源泉のアルカリ性単純温泉・静寂に包まれる大人の癒やし旅"
              ]
            },
            {
              id: 4,
              name: "小槌の宿　鶴亀大吉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68195/68195.jpg",
              rating: 4.45,
              reviews: 888,
              price: "¥14,300〜",
              access: "バスにて「安川町」下車徒歩１分、９：００～１８：００の間で電車の到着時間に合せてお迎え可。要事前予約。",
              special: "東照宮まで歩いてすぐ！招福と味覚をテーマにした縁起づくしの宿&amp;#10025;開運の扉で皆様をお迎え♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68195%2F68195.html",
              story: "日光東照宮まで徒歩約10分、館内の随所に開運・招福の縁起物が散りばめられた個性豊かな名宿「小槌の宿 鶴亀大吉」。日光山内の澄んだ空気の中、最上階の展望露天風呂からは大谷川の渓谷美と日光連山の雪景色をパノラマで一望できます。夕食は特注の炭火炉端テーブルで味わう「炭火焼き会席」。炭火でじっくり香ばしく焼き上げる鮎や岩魚、とちぎ和牛の串焼き、日光巻き湯波の煮物など、素朴で力強い冬の味覚が冷えた身体に染み渡ります。新春の開運初詣旅にも最高の宿泊先です。",
              roomTip: "最上階展望和洋室。日光の山並みを見渡すバルコニー付きで、冬の朝日に照らされる美しい山肌を間近に楽しめます。",
              gourmetTip: "「開運招福・名物炭火炉端焼き会席」。遠赤外線でジューシーに焼き上げるとちぎ和牛ステーキと香ばしい川魚、熱々の郷土鍋。",
              highlights: [
                "東照宮西参道近くの開運招福の宿・最上階展望露天風呂から日光連山を一望",
                "炭火炉端焼きテーブルで味わう熱々の川魚ととちぎ和牛・冷えた身体を温める郷土料理",
                "館内随所の縁起物と温かいおもてなし・新春の開運初詣ステイにぴったり"
              ]
            },
            {
              id: 5,
              name: "日光西町倶楽部あらとうと",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165811/165811.jpg",
              rating: 5.00,
              reviews: 23,
              price: "¥25,850〜",
              access: "「JR日光駅」・「東武日光駅」より送迎車で約10分 ・ 日光I.Cより車で約7分",
              special: "日光東照宮まで徒歩10分のラグジュアリーホテル。日光フレンチや貸切湯で「大人の贅沢旅」を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165811%2F165811.html",
              story: "日光東照宮の西参道から徒歩数分、緑豊かな別荘地にひっそりと佇む大人のための全室スイート仕様ホテル「日光西町倶楽部あらとうと」。わずか数室の贅沢なプライベート空間には、各室に半露天の温泉風呂が備えられ、プライベートな雪見風呂を24時間心ゆくまで堪能できます。夕食は地元栃木の厳選食材とシェフの感性が融合したイノベーティブ・フレンチ。熟成とちぎ和牛のグリルや日光湯波をモダンに再構築した前菜など、ワインとともに味わう至高の美食体験が記念日や大人の冬旅を華やかに彩ります。",
              roomTip: "温泉半露天風呂付きエグゼクティブスイート。ガラス張りの広々としたバスルームから雪の木立を眺めつつ上質なプライベートタイム。",
              gourmetTip: "「日光創作イノベーティブフレンチコース」。A5ランクとちぎ和牛の炭火ローストと厳選オーガニック野菜、ソムリエ厳選ワインのペアリング。",
              highlights: [
                "全室スイート仕様の隠れ家ホテル・客室半露天風呂で楽しむ贅沢な雪見温泉",
                "イノベーティブフレンチと厳選ワインのマリアージュ・大人の記念日旅に最適",
                "静寂な別荘地で過ごすプライベート空間・混雑を離れた至高のリトリートステイ"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月〜1月）の日光東照宮の積雪状況と参拝時の服装・靴の注意点は？",
    "a": "11月中旬以降の日光山内は朝晩の冷え込みが厳しくなり、12月〜1月は氷点下まで下がり雪が積もることが珍しくありません。特に奥宮へと続く207段の石段や東照宮境内の石畳は、雪が踏み固められて凍結（アイスバーン）しやすくなります。防寒着（ダウンコート・マフラー・手袋・耳あて）の完全装備に加え、靴底にしっかりとした溝があるスノーブーツや防寒トレッキングシューズを強く推奨します。境内を歩くだけでも足元から冷えが上がってくるため、厚手の靴下や携帯用カイロの持参が必須です。"
  },
  {
    "q": "日光東照宮の新春初詣（年末年始）の混雑状況と狙い目の参拝時間帯は？",
    "a": "日光東照宮・日光山輪王寺・日光二荒山神社（日光二社一寺）は、正月三が日に全国から大勢の初詣参拝客が訪れます。特に元日の0時〜2時、および三が日の10時〜14時は表参道や駐車場、拝観受付前で長蛇の列ができます。混雑を避けて静かに参拝したい場合は、開門直後の朝8時〜9時台、または閉門前の15時以降がおすすめです。冬の早朝は空気が澄み渡り、陽明門の黄金の彫刻が朝日に照らされて最も神々しく輝く絶好の時間帯でもあります。"
  },
  {
    "q": "日光名物「日光湯波」と京都の「湯葉」の違いとは？どこで味わえる？",
    "a": "京都の「湯葉」と日光の「湯波」は漢字も製法も異なります。京都は豆乳の膜の中央に串を入れ1枚で引き上げるため薄く繊細ですが、日光は膜の中央を持ち上げて2つ折りに巻き上げるため、厚みがありボリューミーでジューシーな食感が特徴です。日光山内の修験道僧侶の貴重なタンパク源として発達し、巻き湯波の含め煮や生湯波の刺身、揚げ湯波など多彩な調理法があります。本記事で紹介している門前の宿の会席料理や、表参道沿いの老舗湯波料理店で出来立てを堪能できます。"
  },
  {
    "q": "東京（浅草・新宿）から冬の日光へのアクセス方法と雪道運転の注意点は？",
    "a": "鉄道利用の場合、東武鉄道の新型特急「スペーシアX」または「リバティ」「けごん」が浅草・北千住から約1時間50分で東武日光駅まで直通運行しており、冬でも暖かく快適に移動できます。JR新宿駅からの直通特急「日光号」も便利です。一方、車を利用する場合は、日光宇都宮道路・日光ICから市街地までは除雪が行き届いていますが、日陰や坂道、早朝・深夜はブラックアイスバーンが発生します。スタッドレスタイヤの装着は必須であり、奥日光（中禅寺湖方面）のいろは坂へ向かう場合はチェーンの携行が義務付けられます。"
  },
  {
    "q": "日光山内参拝とあわせて楽しみたい周辺の冬の見どころは？",
    "a": "国の重要文化財である木造朱塗りの「神橋（しんきょう）」は、雪が積もると大谷川の青い渓流と白い雪、朱色の欄干のコントラストが息を呑む絶景となります。また、日光山輪王寺の「三仏堂」での新春護摩祈祷や、日光二荒山神社での縁結び・開運祈願も定番。少し足を伸ばせば、冬限定で凍結する「華厳の滝（ブルーアイスの氷瀑）」や、湯西川温泉のかまくら祭など、奥日光や鬼怒川方面の冬景色と組み合わせた1泊2日のドライブ・鉄道旅が大変充実します。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月日光】世界遺産・日光東照宮の静謐な冬参拝＆新春初詣と名物「日光湯波会席」・とちぎ和牛を堪能する名宿5選",
    description: "11月から1月、木々の葉が落ち清澄な大気に包まれる日光山内は、世界遺産・日光東照宮が最も神聖な静寂を纏う季節です。白銀の雪化粧に黄金と極彩色が際立つ国宝「陽明門」、静まり返る薬師堂に響く「鳴龍」の鈴音、徳川家康公を祀る奥宮への白銀杉並木の石段。新春には輪王寺や日光二荒山神社とともに数万人が訪れる新春初詣の聖地となります。寒さ深まる門前町で味わう名物「日光湯波会席」や極上の「とちぎ和牛」、身体の芯まで温もる日光温泉の雪見露天風呂を満喫できる厳選名宿5選を徹底紹介します。",
    url: 'https://croud-travel.com/winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.com/features/' },
        { '@type': 'ListItem', position: 3, name: '日光東照宮・日光湯波＆名湯ステイ', item: 'https://croud-travel.com/winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay' }
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
          addressRegion: '栃木県',
          addressLocality: '日光市'
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月日光】世界遺産・日光東照宮の静謐な冬参拝＆新春初詣と名物「日光湯波会席」・とちぎ和牛を堪能する名宿5選",
    "description": "11月から1月、木々の葉が落ち清澄な大気に包まれる日光山内は、世界遺産・日光東照宮が最も神聖な静寂を纏う季節です。白銀の雪化粧に黄金と極彩色が際立つ国宝「陽明門」、静まり返る薬師堂に響く「鳴龍」の鈴音、徳川家康公を祀る奥宮への白銀杉並木の石段。新春には輪王寺や日光二荒山神社とともに数万人が訪れる新春初詣の聖地となります。寒さ深まる門前町で味わう名物「日光湯波会席」や極上の「とちぎ和牛」、身体の芯まで温もる日光温泉の雪見露天風呂を満喫できる厳選名宿5選を徹底紹介します。",
    "url": "https://croud-travel.pages.dev/winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月日光】世界遺産・日光東照宮の静謐な冬参拝＆新春初詣と名物「日光湯波会席」・とちぎ和牛を堪能する名宿5選", "item": "https://croud-travel.pages.dev/winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay/" }
    ]
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
            11月・12月・1月 冬の社寺参拝・初詣＆味覚特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">
            白銀の国宝陽明門と静寂の杉並木古道<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200">
              世界遺産・日光東照宮冬参拝＆名物湯波会席とちぎ和牛の名宿
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            凛とした冬の大気が漂う日光山内。雪化粧に包まれた国宝「陽明門」の精緻な彫刻美、徳川家康公が眠る奥宮への白銀の石段、そして新春の開運初詣。門前町の伝統息づく「日光湯波（ゆば）会席」と芳醇な「とちぎ和牛」、雪見の露天風呂に心ほどける珠玉の滞在をご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-amber-400" /> 旬の時期：11月〜1月
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-amber-400" /> 日光湯波・とちぎ和牛
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-amber-400" /> 日光温泉・名湯露天
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
              冬の日光東照宮が魅せる「静謐の美」と門前文化の神髄
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              秋の喧騒を過ぎた11月下旬から1月、日光山内は最も清らかな神気に満たされます
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              世界遺産「日光の社寺」の中心に位置する日光東照宮。紅葉のハイシーズンを終えた11月中旬以降、木々は葉を落とし、透き通った冬空の下に壮麗な社殿群が姿を現します。冬の日光の最大の魅力は、凛とした冷気の中で際立つ「陽明門（国宝）」の純白の胡粉と黄金、極彩色の彫刻美です。雪が舞い降りると、杉の巨木並木とともに一面の白銀の世界へと姿を変え、まるで水墨画の中に浮かび上がる宮殿のような神々しさを放ちます。
            </p>
            <p>
              薬師堂の「鳴龍」の天井下で響く澄んだ拍子木の反響音や、207段の石段を登りつめた先に佇む家康公の宝塔（奥宮）を包む深い静寂は、訪れる者の心を瞬時に洗い清めてくれます。新春を迎えると、日光山輪王寺や日光二荒山神社とともに数万人の初詣客で賑わい、一年の息災と開運を祈る人々の熱気で包まれます。冬の冷え込みが厳しいからこそ、雪化粧の神橋や東照宮の石鳥居、輪王寺三仏堂の堂々たる威容が、より一層鮮烈な美しさを湛えて心に迫ります。
            </p>
            <p>
              参拝後は、門前町の冷えた身体を温める滋味豊かなグルメが待っています。修験道の精進料理を起源とする「日光湯波」は、京都の薄い湯葉と異なり、豆乳の膜を二つ折りにして巻き上げるため肉厚で濃厚。出汁をたっぷり含んだ巻き湯波の煮物や、とろけるような生湯波の刺身は冬にこそ味わいたい至高の逸品です。さらに、豊かな自然で育まれたブランド牛「とちぎ和牛」の極上ステーキやすき焼き、芯まで温まる日光温泉の名湯が、五感を満たす特別な冬の旅を約束してくれます。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">雪化粧の陽明門と奥宮古道</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                白銀の雪と黄金の彫刻が織りなす荘厳なコントラスト。樹齢数百年を超える杉並木の石段を歩き、徳川家康公の奥宮へ。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">伝統の日光湯波＆とちぎ和牛</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                二重仕立てで肉厚ジューシーな名物「日光湯波」の本格会席と、きめ細やかなサシがとろける霜降り「とちぎ和牛」の贅沢ディナー。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">雪見の庭園露天風呂＆初詣</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                肌あたりの柔らかなアルカリ性単純温泉で冷えた身体をじっくり解きほぐす。二荒山神社や輪王寺を巡る新春開運初詣。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】世界遺産日光東照宮参拝と門前湯波・雪見温泉を巡る黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              東京・浅草から新型特急スペーシアXでアクセス。混雑を避けて神聖な気を受け取る冬の旅路。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午前〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:45 東武日光駅到着 ➔ 神橋散策＆表参道「老舗日光湯波」ランチ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  東武浅草駅や北千住駅から特急スペーシアXに乗車し、快適に東武日光駅へ。駅前で名物の熱々「揚げゆばまんじゅう」を味わった後、バスで朱塗りの名橋「神橋」へ移動し、大谷川の青い渓流と白雪、朱色の橋の雪景色を鑑賞。門前町の老舗「油源」や「日光ゆば遊膳」で、出汁の染みた巻き湯波煮や生湯波刺身のランチを味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 輪王寺三仏堂＆日光二荒山神社参拝 ➔ 日光温泉の宿へチェックイン
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  日光山輪王寺の三仏堂で金色に輝く三尊仏を拝観し新春の護摩祈祷。良縁祈願で知られる日光二荒山神社で初詣を済ませた後、日光山内の温泉宿へ早めにチェックイン。冷えた身体を庭園露天風呂や大浴場のアルカリ性単純温泉で芯まで温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  18:30 贅を尽くした「日光湯波懐石」＆「とちぎ和牛ステーキ」ディナー
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  宿自慢の本格会席。目の前で引き上げる温かな生湯波、季節の炊き合わせ、そしてきめ細やかな霜降りのとちぎ和牛を鉄板焼きやすき焼きで堪能。栃木の銘酒「四季桜」や「鳳凰美田」とともに、静寂に包まれる冬の日光の夜を心ゆくまで満喫します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:30 開門直後の日光東照宮へ ➔ 国宝陽明門・薬師堂鳴龍・奥宮参拝
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  一般客の少ない開門直後の朝一番に日光東照宮へ。朝日に輝く純白と黄金の陽明門を鑑賞し、薬師堂で天井に響く鳴龍の鈴のような反響音を体感。眠り猫をくぐり、雪の杉並木が続く207段の石段を登って家康公が眠る奥宮へ参拝。門前町で日光羊羹や酒饅頭を購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              修験道が育んだ日光湯波の知恵と、ブランド牛「とちぎ和牛」の魅力
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                肉厚でジューシーな「日光湯波」の歴史と多彩な調理法
              </h3>
              <p>
                日光湯波の歴史は奈良時代末期、勝道上人が日光山を開山した際に修験僧の貴重な栄養源として持ち込まれたことに始まります。豆乳を熱して表面に張る膜の中央に串を入れ、2つ折りに巻き上げて引き上げるため、一枚仕立ての京都湯葉に比べて肉厚で食べ応えがあるのが最大の特徴です。煮汁をたっぷり含む「巻き湯波（揚巻湯波）」の含め煮、とろりとした食感の「生湯波の刺身」、香ばしい「揚げ湯波そば」など、冬の寒さに温かい出汁が染み渡ります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                澄んだ水と肥沃な大地が育む極上霜降り「とちぎ和牛」
              </h3>
              <p>
                栃木県内の指定生産農家によって丹精込めて肥育された黒毛和牛のうち、格付基準A4・A5ランクを満たした最高級ブランド「とちぎ和牛」。きめ細やかなサシが細部まで美しく入り、融点が低いため舌の上でサラリととろけるような甘みと濃厚な赤身の旨味が広がります。冬の夕食には、地元のたまり醤油と合わせた割り下で煮込むすき焼きや、備長炭で香ばしく表面を焼き上げるフィレステーキが絶品。冷えた身体に確かな活力を与えてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Selected Hotels Section */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-amber-700 font-bold text-xs sm:text-sm tracking-wider uppercase block">
              Handpicked Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif">
              日光東照宮参拝と美食・雪見温泉を堪能する名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              公式楽天トラベルAPIより取得した最新の宿泊データ・クチコミ・最低料金を掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel: any) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl border border-stone-200/90 shadow-xs overflow-hidden transition-all duration-300 hover:border-amber-400 hover:shadow-md"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header Badge & Title */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        厳選名宿 No.{hotel.id}
                      </span>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1 text-amber-600 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
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
                        className="hover:text-amber-700 transition-colors inline-flex items-center gap-2"
                      >
                        {hotel.name}
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-amber-700 inline" />
                      </a>
                    </h3>

                    <p className="text-stone-500 text-xs sm:text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
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
                      参考宿泊料金：<span className="text-amber-300 font-bold">{hotel.price}</span> / 名
                    </div>
                  </div>

                  {/* Editorial Story */}
                  <div className="space-y-3 bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <h4 className="text-xs sm:text-sm font-bold text-amber-900 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-amber-600" />
                      宿の魅力と冬の滞在ストーリー
                    </h4>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>
                  </div>

                  {/* Tips 2-col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-amber-50/30 border border-amber-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-amber-900 flex items-center gap-1">
                        <ThermometerSun className="w-3.5 h-3.5 text-amber-700" /> おすすめの客室
                      </span>
                      <p className="text-stone-600 text-xs leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-amber-50/30 border border-amber-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-amber-900 flex items-center gap-1">
                        <Utensils className="w-3.5 h-3.5 text-amber-700" /> 冬の自慢グルメ
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
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
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
                      className="block w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
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
        <section className="bg-amber-50/60 rounded-3xl p-6 sm:p-10 border border-amber-200/60 space-y-6">
          <div className="border-b border-amber-200/80 pb-4">
            <span className="text-amber-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-950 font-serif">
              冬の日光東照宮・門前町を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-amber-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                奥宮石段の凍結と滑り止め対策
              </div>
              <p className="leading-relaxed text-stone-700">
                奥宮へと続く207段の石段や境内の石畳は、12月〜1月は雪が踏み固められアイスバーン化します。転倒防止のため、滑り止めの溝が深いスノーブーツや防水トレッキングシューズでお出かけください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                薬師堂・本殿拝観の底冷え対策
              </div>
              <p className="leading-relaxed text-stone-700">
                鳴龍の薬師堂や東照宮本殿内は靴を脱いで上がる板張りのため、足元から強烈に冷え込みます。厚手の靴下やレッグウォーマー、携帯カイロを持参すると快適に拝観できます。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-amber-700" />
                雪道ドライブと公共交通の活用
              </div>
              <p className="leading-relaxed text-stone-700">
                冬の日光山内やいろは坂方面は急勾配と日陰の凍結が多く、車利用時はスタッドレスタイヤ装着が必須です。浅草・新宿からの直通特急電車を利用すれば雪道の不安なく快適に移動できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の日光東照宮参拝・湯波グルメに関するよくある質問
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
              あわせて読みたい全国の冬景色・初詣・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">栃木・奥日光湯元</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                白銀の湯ノ湖と濃厚な乳白色硫黄泉・極上雪見露天風呂名宿
              </span>
            </Link>

            <Link 
              href="/winter-tochigi-ashikaga-flowerpark-sano-yakuyoke-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">栃木・足利＆佐野</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                日本三大イルミネーション「光の花の庭」＆佐野厄除け大師初詣名宿
              </span>
            </Link>

            <Link 
              href="/winter-nagano-togakushi-zenkoji-hatsumode-snow-soba-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">長野・戸隠＆善光寺</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                白銀の戸隠神社奥社杉並木と国宝善光寺冬のお朝事・信州牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                新春の伊勢神宮初詣とおかげ横丁・伊勢海老＆松阪牛会席名宿
              </span>
            </Link>

            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">群馬・草津温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                湯畑ライトアップと西の河原露天風呂雪景色・名湯上州牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">神奈川・鎌倉＆江の島</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                鶴岡八幡宮初詣と江の島「湘南の宝石」＆富士山夕景オーシャン名宿
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
