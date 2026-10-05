import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Camera, Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月山口】長門＆角島・元乃隅神社！冬のコバルトブルー角島大橋と123基赤鳥居初詣・長門湯本温泉と仙崎イカ・ふぐを味わう名宿5選",
  description: "冬の日本海が最も透明度を増す11月中旬から1月。エメラルドグリーンとコバルトブルーの海を貫く「角島大橋」の絶景、CNN日本の最も美しい場所31選に輝く「元乃隅神社」の断崖に連なる123基の朱塗り鳥居での厳かな初詣、そして約600年の歴史を誇る名湯「長門湯本温泉」の恩湯と音信川の竹林ライトアップ散策。冬の味覚の王様・仙崎港の活イカや下関直送天然とらふぐ、長州黒かしわ。歴史と絶景が織りなす冬の山口・長門の厳選名宿5選を徹底解説します。",
  keywords: '長門湯本温泉 ホテル, 角島大橋 ホテル, 元乃隅神社 初詣, 大谷山荘, ホテル西長門リゾート, ホテル楊貴館, 仙崎イカ, とらふぐ, 11月 12月 1月 山口 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay/"
  },
  openGraph: {
    title: "【11・12・1月山口】長門＆角島・元乃隅神社！冬のコバルトブルー角島大橋と123基赤鳥居初詣・長門湯本温泉と仙崎イカ・ふぐを味わう名宿5選",
    description: "冬の日本海が最も透明度を増す11月中旬から1月。エメラルドグリーンとコバルトブルーの海を貫く「角島大橋」の絶景、CNN日本の最も美しい場所31選に輝く「元乃隅神社」の断崖に連なる123基の朱塗り鳥居での厳かな初詣、そして約600年の歴史を誇る名湯「長門湯本温泉」の恩湯と音信川の竹林ライトアップ散策。冬の味覚の王様・仙崎港の活イカや下関直送天然とらふぐ、長州黒かしわ。歴史と絶景が織りなす冬の山口・長門の厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178.jpg",
      width: 1200,
      height: 630,
      alt: '冬の角島大橋コバルトブルーと元乃隅神社の赤鳥居'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月山口】長門＆角島・元乃隅神社！冬のコバルトブルー角島大橋と123基赤鳥居初詣・長門湯本温泉と仙崎イカ・ふぐを味わう名宿5選",
    description: "冬の日本海が最も透明度を増す11月中旬から1月。エメラルドグリーンとコバルトブルーの海を貫く「角島大橋」の絶景、CNN日本の最も美しい場所31選に輝く「元乃隅神社」の断崖に連なる123基の朱塗り鳥居での厳かな初詣、そして約600年の歴史を誇る名湯「長門湯本温泉」の恩湯と音信川の竹林ライトアップ散策。冬の味覚の王様・仙崎港の活イカや下関直送天然とらふぐ、長州黒かしわ。歴史と絶景が織りなす冬の山口・長門の厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178.jpg"]
  }
};

export default function YamaguchiNagatoWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "山口県　長門湯本温泉　大谷山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178.jpg",
              rating: 4.76,
              reviews: 1481,
              price: "¥23,100〜",
              access: "お車で角島・JR新山口駅へ60分／宇部空港へ70分／絶景元乃隅神社・萩へ35分／JR長門湯本駅より無料送迎5分",
              special: "山間の自然に佇む明治14年創業の温泉旅館。長州藩主も湯治に訪れた長門湯本温泉で、四季折々のお寛ぎを",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8178%2F8178.html",
              story: "長門湯本温泉のシンボルとして、歴代首相や各国のVIPをもてなしてきた名門旅館「大谷山荘」。音信川の清流沿いに佇み、広大な吹き抜けロビーからは冬の澄んだ水面と山あいの木立を望む贅沢な空間が広がります。館内にはせせらぎを聞きながら湯浴みを楽しむ「大浴場 せせらぎの湯」や木造りの温もりに包まれる「こもれびの湯」、ジャグジーやサウナなど多彩な温泉施設を完備。アルカリ性単純温泉の柔らかな湯が、冬の冷えた体を優しく包み込みます。夜には天体ドーム（要予約）で本格的な天体望遠鏡による冬の星空観測が楽しめるのも大谷山荘ならでは。夕食は長門の山海の幸を極めた会席料理で、仙崎港直送の鮮魚やとらふぐ、山口県産黒毛和牛の炭火焼きを堪能できます。",
              roomTip: "曙館または芙蓉館の渓流側和洋室。大きな窓から音信川のせせらぎと冬の山景色を眺めながら、静謐なプライベート時間を満喫。",
              gourmetTip: "会席レストランでの冬の特選会席。旬のとらふぐ刺しやちり鍋、香ばしく焼き上げる山口和牛のステーキなど極上の美食揃い。",
              highlights: [
                "歴代要人をもてなす最高峰宿・音信川のせせらぎ露天・天体ドーム星空観測",
                "冬のとらふぐ会席＆山口和牛・贅沢な吹き抜けロビー・心温まるおもてなし",
                "長門湯本温泉街の竹林散策至便・格調高い和洋室・極上のリフレッシュ"
              ]
            },
            {
              id: 2,
              name: "ホテル西長門リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16824/16824.jpg",
              rating: 4.27,
              reviews: 1764,
              price: "¥9,200〜",
              access: "新下関駅から無料送迎あり（３日前迄の予約制１日１便）／中国自動車道　美祢ＩＣ→Ｒ４３５／中国自動車道　下関ＩＣ→Ｒ１９１",
              special: "【ウェルカムベビーのお宿】角島大橋が目の前のリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16824%2F16824.html",
              story: "角島大橋のすぐたもと、海に突き出た絶景の岬に佇む本格リゾート「ホテル西長門リゾート」。全客室がオーシャンビューとなっており、窓一面にエメラルドグリーンの響灘と角島大橋の雄大なパノラマが広がります。最大の自慢は、海と一体になる感覚を味わえる展望露天風呂。冬の澄んだ空の下、夕刻には茜色に染まる日本海と角島灯台の明かりを眺めながらの温泉入浴は言葉を失うほどの美しさです。冬は響灘で獲れる寒ブリや下関のとらふぐ、イカなど海の幸が最も美味しい季節。和食会席レストランやフレンチで、海を見つめながら旬の海鮮フルコースを堪能できます。角島観光の拠点としてこれ以上のロケーションはありません。",
              roomTip: "海側和洋室または角島大橋ビュー客室。朝目覚めると眼下に広がる青い海と角島大橋をベッドから独占できる特等席。",
              gourmetTip: "和食レストランでの冬の海鮮会席。旬のとらふぐ刺し（てっさ）やふぐちり鍋、響灘の新鮮な地魚舟盛りを心ゆくまで。",
              highlights: [
                "角島大橋のすぐ目の前・全室オーシャンビュー・海一望のインフィニティ露天",
                "響灘の寒ブリ＆下関ふぐ会席・角島灯台の夜景・夕日百選の絶景ロケーション",
                "角島観光の最高拠点・プライベートビーチ併設・冬の澄んだ海を満喫"
              ]
            },
            {
              id: 3,
              name: "長門湯本温泉　湯本観光ホテル　西京",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7243/7243.jpg",
              rating: 4.00,
              reviews: 935,
              price: "¥6,800〜",
              access: "中国道美称ICより車で30分／JR美祢線長門湯本駅より徒歩10分",
              special: "広々とした大浴場や多彩な館内施設をお楽しみいただける温泉旅館■無料屋外駐車場100台収容可能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7243%2F7243.html",
              story: "長門湯本温泉の温泉街中心部に位置し、多彩なエンターテインメントと本格温泉を融合させた大型名旅館「湯本観光ホテル 西京」。敷地内にはボウリング場や芝居小屋、足湯などを備え、世代を問わず楽しく過ごせる設備が充実しています。自慢の大浴場と大露天風呂は、木々に囲まれた野趣あふれる造りで、長門湯本の名湯がたっぷりと注がれます。冬の夜にはライトアップされた庭園を眺めながらの雪見・星空露天が旅の疲れをじんわりと癒やしてくれます。夕食は季節の味覚を彩った会席料理で、ふぐ料理や山口名物瓦そば、国産牛ステーキなど山口ならではの味覚がテーブルを賑やかに彩ります。",
              roomTip: "本館和室または特別室。広々とした畳敷きの空間で足を伸ばし、温泉情緒に浸りながらゆったりと団らんを楽しめる寛ぎの客室。",
              gourmetTip: "季節の味覚会席。冬限定のとらふぐ料理プランやアワビの踊り焼きなど、豪快かつ繊細な山口の味を堪能。",
              highlights: [
                "長門湯本中心街・ボウリングや足湯併設の大型旅館・広々とした大浴場",
                "庭園露天風呂での雪見湯浴み・名物瓦そばと国産牛ステーキ・家族旅行に最適",
                "高いコストパフォーマンス・エンタメ充実・冬のグループ旅行におすすめ"
              ]
            },
            {
              id: 4,
              name: "長門湯本温泉　山村別館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5670/5670.jpg",
              rating: 4.29,
              reviews: 1033,
              price: "¥9,700〜",
              access: "マイカー・中国縦貫自動車道美称ＩＣより長門湯本車で３０分 ＪＲ長門湯本駅より徒歩１３分（送迎あり）",
              special: "本場フィンランドのロウリュウ式バレルサウナ！四季を観望できる洋風造りの露天風呂を備えた宿です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5670%2F5670.html",
              story: "音信川のほとりに佇み、和の情緒と温かなもてなしが息づく大人の隠れ家「長門湯本温泉 山村別館」。静かな山あいの環境で、日常の喧騒から離れて心静かに過ごしたい旅人に愛され続けています。アルカリ性の肌触り滑らかな温泉が注がれる大浴場と露天風呂は、冬の澄み渡る冷気の中で長湯が心地よい名湯。庭園を望む露天風呂からは、冬木立の静寂と風の音が耳を癒やしてくれます。料理自慢の宿としても知られ、仙崎港の競り権を持つ料理長が毎朝厳選する極上の海の幸を使用。冬はとらふぐのフルコースや脂の乗った寒ヒラメ、長州黒かしわの鍋など、素材の味を最大限に引き出した会席料理が絶賛されています。",
              roomTip: "和洋室または庭園ビュー和室。和モダンな設えとベッドを備え、シニアやカップルにも快適な静寂の空間を提供。",
              gourmetTip: "料理長特選のふぐ尽くし会席。透き通るようなふぐ刺し、熱々のふぐ唐揚げ、旨味が凝縮されたふぐちり雑炊まで堪能。",
              highlights: [
                "音信川ほとりの静かな隠れ家・仙崎港の競り権を持つ料理長の極上魚料理",
                "冬のとらふぐフルコース・アルカリ性単純泉の名湯・温かな和のホスピタリティ",
                "静寂を愛する大人の旅に最適・地元常連も絶賛する出汁の旨い料理"
              ]
            },
            {
              id: 5,
              name: "油谷湾温泉　ホテル楊貴館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16823/16823.jpg",
              rating: 4.47,
              reviews: 1250,
              price: "¥16,200〜",
              access: "美祢インターから約５０分、下関インターから約８０分、角島から約２０分、萩から約５０分、周辺観光地へのアクセス抜群！",
              special: "pH9.6のアルカリ単純泉。美容液のようなとろとろ温泉。女性に人気のエステもございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16823%2F16823.html",
              story: "日本海を一望する油谷湾の小高い丘に建ち、全国屈指の美肌の湯として名高い「油谷湾温泉 ホテル楊貴館」。楊貴妃伝説が残る地に湧く温泉は、とろりとした化粧水のような極上のぬるぬる美肌湯で、一度浸かれば肌がしっとりと潤う至福の泉質です。展望大浴場と露天風呂からは、冬の穏やかな油谷湾と夕日が織りなす絵画のような大パノラマを一望。元乃隅神社まで車で約15分という抜群のアクセスを誇り、朝の参拝や夕暮れのドライブの拠点に最適です。夕食は長門の海と山の恵みが凝縮された創作会席。地元の名産・仙崎イカやとらふぐ、むつみ豚など厳選素材を洗練されたプレゼンテーションで楽しめます。",
              roomTip: "油谷湾ビュー和洋室（展望風呂付き客室）。プライベートな湯船から冬の日本海の夕暮れと朝焼けを独り占めできる極上空間。",
              gourmetTip: "創作会席「楊貴妃の宴」。冬のふぐ料理と長州黒毛和牛、地元仙崎の海の幸を美しく盛り付けた目にも鮮やかな絶品ディナー。",
              highlights: [
                "油谷湾一望の絶景・化粧水のようなとろとろ美肌湯・元乃隅神社車15分",
                "展望風呂付き客室完備・楊貴妃伝説の地・冬の海鮮創作会席が絶品",
                "とろみ成分たっぷりのPH9.6美肌泉・オーシャンサンセット・抜群の満足度"
              ]
            }
  ];

  const faqData = [
  {
    "q": "冬の角島大橋を訪れるベストな時間帯と天候のポイントは？",
    "a": "冬の日本海は空気が澄んで透明度が高まるため、晴れた日の海のエメラルドグリーンは年間で最も美しい輝きを放ちます。おすすめは「午前10時〜14時頃」。太陽が高く昇り、海面が最も明るくコバルトブルーに輝く時間帯です。また、夕暮れ時（16:30〜17:00頃）には角島大橋の先に夕日が沈むドラマチックなサンセットを鑑賞できます。海風が非常に強いため、展望台での写真撮影時は防風コートやマフラーをご準備ください。"
  },
  {
    "q": "「元乃隅神社」の123基の鳥居と龍宮の潮吹の冬の見どころ・初詣の混雑は？",
    "a": "日本海に向かって赤い鳥居がトンネルのように123基連なる元乃隅神社は、冬の白波と青い海、朱色のコントラストが一層際立つ絶景パワースポットです。岩壁の割れ目から海水が最大30mも噴き上がる「龍宮の潮吹」は、冬の荒波の日に最もダイナミックな姿を見せます。正月三が日の初詣は日中（10:30〜15:00）に駐車場待ちの車列ができるため、午前中の早い時間帯（9:00前後）または夕方に訪れるとスムーズに参拝できます。"
  },
  {
    "q": "リニューアルした「長門湯本温泉」の冬の楽しみ方や恩湯の利用方法は？",
    "a": "長門湯本温泉は星野リゾートと地域が連携して再生した美しい温泉街です。温泉街の中心を流れる音信川（おとづれがわ）沿いには遊歩道や竹林の階段、川床テラスが整備され、冬の夜には温かな竹灯籠やライトアップが灯ります。立ち寄り湯「恩湯（おんゆ）」では、岩盤から湧き出る39℃前後のぬるめの源泉にじっくり浸かる「足元湧出温泉」を体験可能。湯上がりには川沿いのカフェで温かいほうじ茶や団子を楽しむのが人気です。"
  },
  {
    "q": "冬の長門・仙崎で味わうべきご当地グルメは何ですか？",
    "a": "何と言っても「仙崎イカ（活イカ）」と「下関直送のとらふぐ」、そして山口県の地鶏「長州黒かしわ」です。冬のイカは身が厚く甘みが濃厚で、透き通るような活造りは感動の食感。また、11月〜1月はとらふぐの最盛期であり、てっさ（ふぐ刺し）、てっちり（ふぐ鍋）、ふぐヒレ酒で体の芯から温まります。さらに長門市は日本屈指の焼き鳥の街としても有名で、ガーリックパウダーを振って食べる長門焼き鳥も必食です。"
  },
  {
    "q": "冬の山口県北部（長門・下関・萩）の道路状況と運転の注意点は？",
    "a": "山口県の日本海側は南国と思われがちですが、強い冬型の気圧配置になると山間部や峠道（美祢や萩方面へのアクセス路）で積雪や路面凍結が発生することがあります。海沿いの幹線道路（国道191号など）は通常問題なく走れる日が多いですが、12月下旬〜1月に車で訪れる場合はスタッドレスタイヤの装着をおすすめします。降雪情報は事前に「山口県道路情報道路見えるナビ」などで確認しておくと安心です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay"
        },
        "headline": "【11・12・1月山口】長門＆角島・元乃隅神社！冬のコバルトブルー角島大橋と123基赤鳥居初詣・長門湯本温泉と仙崎イカ・ふぐを味わう名宿5選",
        "description": "冬の日本海が最も透明度を増す11月中旬から1月。エメラルドグリーンとコバルトブルーの海を貫く「角島大橋」の絶景、CNN日本の最も美しい場所31選に輝く「元乃隅神社」の断崖に連なる123基の朱塗り鳥居での厳かな初詣、そして約600年の歴史を誇る名湯「長門湯本温泉」の恩湯と音信川の竹林ライトアップ散策。冬の味覚の王様・仙崎港の活イカや下関直送天然とらふぐ、長州黒かしわ。歴史と絶景が織りなす冬の山口・長門の厳選名宿5選を徹底解説します。",
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "長門＆角島・元乃隅神社冬特集",
            "item": "https://croud-travel.com/winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-blue-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-medium">
            <Waves className="w-4 h-4 text-teal-300" />
            <span>11月・12月・1月冬の絶景日本海＆名湯・ふぐ美食特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            長門＆角島・元乃隅神社！<br className="hidden sm:inline" />
            冬のコバルトブルー角島大橋と123基赤鳥居初詣・長門湯本温泉と仙崎イカ・ふぐを味わう名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            澄み渡る冬の日本海に架かる奇跡の絶景「角島大橋」、CNN選出の断崖に連なる「元乃隅神社」の123基の朱塗り鳥居初詣。そして約600年の歴史を持つ「長門湯本温泉」の恩湯と音信川沿いの温かな竹林ライトアップ。冬の日本海が育む仙崎の活イカ、本場下関直送のとらふぐ、長州黒かしわ。歴史ある名湯と冬の美食に心癒やされる山口・長門の旅をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400 shrink-0" />
              <span>期間：11月中旬〜1月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-teal-400 shrink-0" />
              <span>冬のコバルトブルー角島大橋</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-teal-400 shrink-0" />
              <span>元乃隅神社123基鳥居初詣</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-teal-400 shrink-0" />
              <span>長門湯本温泉＆恩湯の美肌湯</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Waves className="w-6 h-6 text-teal-500 shrink-0" />
              冬の山口・長門が放つ圧倒的な海の絶景と再生の名湯文化
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              本州の西端に位置する山口県北部の長門・豊北エリアは、冬こそが最も海の透明度を増し、自然の力強さと美しさが際立つ季節です。全長1,780mにおよぶ「角島大橋」は、冬の澄んだ大気のもとでエメラルドグリーンからコバルトブルーへとグラデーションを描く海を真っ直ぐに貫きます。風が凪いだ冬晴れの日には、まるで海の上を浮遊しているかのような開放感を味わえます。
            </p>
            <p>
              日本海の断崖絶壁に建つ「元乃隅神社」は、昭和30年に白狐のお告げによって建立されたパワースポット。海に向かって急勾配の崖地に立ち並ぶ123基の朱塗りの鳥居は圧巻で、冬の日本海の荒波が打ち寄せる「龍宮の潮吹」の白飛沫と鳥居の紅のコントラストは息を呑む景観を描きます。頭上約6mの大鳥居に設置された賽銭箱に見事賽銭を投げ入れることができれば願いが叶うとされ、新年の開運祈願に多くの参拝者が訪れます。
            </p>
            <p>
              絶景を巡った後は、開湯約600年の歴史を誇る「長門湯本温泉」へ。温泉街の中心を流れる音信川沿いには、飛び石や川床テラス、竹林の小径が美しくライトアップされ、冬の夕暮れ散策に温かな風情を添えます。立ち寄り湯「恩湯」の足元湧出のぬる湯でじっくりと体を解きほぐし、夜は仙崎港の活イカや下関直送の熱々とらふぐ鍋に舌鼓を打つ——五感が満たされる冬の旅がここにあります。
            </p>
          </div>
        </section>

        {/* Section 2: 厳選5ホテル詳細 */}
        <section className="space-y-8">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Verified Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の長門・角島を満喫する極上温泉旅館＆絶景リゾート5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              楽天トラベルAPIより最新の空室・プラン情報、クチコミ評価を取得。絶景露天・美肌温泉・冬の味覚会席に優れた宿を厳選
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((h) => (
              <article 
                key={h.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col lg:flex-row"
              >
                <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full">
                  <img 
                    src={h.img} 
                    alt={h.name}
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-teal-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}位 厳選名宿
                  </div>
                </div>

                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-xs font-semibold text-teal-600 block mb-0.5">{h.access}</span>
                        <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-extrabold text-amber-900 text-sm">{h.rating}</span>
                        <span className="text-xs text-amber-700">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Waves className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">温泉・客室の魅力：</strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">美食ポイント：</strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-700 block">宿の注目ハイライト：</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（目安）</span>
                      <span className="text-lg sm:text-xl font-black text-teal-950">{h.price}</span>
                      <span className="text-[10px] text-slate-400 ml-1">/ 1名あたり（2名1室利用時）</span>
                    </div>

                    <div className="w-full sm:w-auto">
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold text-sm shadow-sm hover:shadow transition-all text-center"
                      >
                        <span>楽天トラベルで宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・アクセス・服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Climate & Packing Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-teal-500 shrink-0" />
              11月・12月・1月の気温推移と山口・長門の冬海風対策・服装ガイド
            </h2>
          </div>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              角島大橋や元乃隅神社など海に突き出た岬エリアは、冬期に北西の強い季節風が吹き付けます。体感温度は表示気温より大幅に下がるため、風を遮断するアウター選びが観光の快適度を大きく左右します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-teal-950 text-base flex items-center justify-between">
                <span>11月中旬〜下旬</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded">平均 13℃ / 最低 8℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                秋の深まりとともに透明度が増す季節。日中はウールセーターや秋用コートで快適ですが、角島大橋の展望台では冷たい海風が吹くためマフラーやストールがあると安心です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-teal-950 text-base flex items-center justify-between">
                <span>12月（寒波到来）</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded">平均 8℃ / 最低 4℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日本海の荒波が迫力を増す時期。元乃隅神社の断崖では強風が吹き抜けるため、フード付きの防風ダウンジャケット、手袋、耳あてが必須。足元は滑りにくいスニーカーを。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-teal-950 text-base flex items-center justify-between">
                <span>1月（新春初詣〜厳冬期）</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded">平均 5℃ / 最低 1℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                初詣の時期。早朝や夕方は氷点下近くまで冷え込みます。山間部の峠道を通る場合は路面凍結に備えてスタッドレスタイヤを装着し、厚手の保温インナーで防寒対策を徹底してください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 絶景フォトスポット攻略 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Photography Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-teal-500 shrink-0" />
              青と紅の絶景を撮る！角島大橋＆元乃隅神社のプロ直伝撮影攻略
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-teal-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                角島大橋展望台の順光パノラマ
              </h3>
              <p className="leading-relaxed">
                午前10時から13時の太陽が高い時間帯がベスト。海面が最も透き通るエメラルドグリーンに輝きます。橋の手前の小高い丘（角島展望テラス周辺）から道路と橋の直線を美しく収めるアングルが定番です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-teal-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                元乃隅神社123基鳥居と龍宮の潮吹
              </h3>
              <p className="leading-relaxed">
                崖の上部から海を見下ろす俯瞰アングルが圧巻。荒波が打ち寄せる日に訪れると、鳥居の深紅と打ち上がる白い潮吹きのしぶきがダイナミックに対比し、奇跡の1枚が撮影できます。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-teal-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                音信川の竹林ライトアップ
              </h3>
              <p className="leading-relaxed">
                日没直後のブルーアワーに音信川沿いの竹林階段へ。温かな竹灯篭の灯りと、清流に映る光のリフレクションをスローシャッターで捉えると、幻想的な温泉街情緒が美しく表現されます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬の美食＆長門お土産ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gourmet & Souvenirs</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-teal-500 shrink-0" />
              冬の日本海が育む至高の美味＆仙崎港・長門の厳選お土産
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-teal-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                透明な身が躍る仙崎活イカ＆本場とらふぐ会席
              </h3>
              <p className="leading-relaxed">
                仙崎港名物の活イカは、注文後に生け簀から揚げて捌くため身が透き通る美しさ。コリコリとした歯ごたえと噛むほどに広がる濃厚な甘みは冬の日本海ならでは。さらに11月から1月にかけて旬を迎えるとらふぐは、大皿に美しく引かれた「てっさ」、熱々の出汁が染みる「てっちり鍋」、香ばしいヒレ酒まで贅を尽くしたフルコースで楽しめます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-teal-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                センザキッチンの名産蒲鉾＆長門ゆずきち・地酒
              </h3>
              <p className="leading-relaxed">
                道の駅「センザキッチン」には、仙崎伝統の焼き抜き蒲鉾「白楽」や揚げたて天ぷらが勢揃い。魚本来の強いコシと旨味が詰まった名品です。さらに長門特産の柑橘「長門ゆずきち」を使った爽やかなポン酢やドレッシング、山口が誇る銘酒「東洋美人」「獺祭」の限定酒など、冬の食卓を豊かに彩るお土産が手に入ります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: 1泊2日モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-teal-400 shrink-0" />
              角島大橋・元乃隅神社と長門湯本温泉を満喫する1泊2日モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-teal-300 text-lg">
                <span className="bg-teal-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>コバルトブルーの角島大橋ドライブ＆長門湯本温泉の竹林ライトアップ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 新山口駅または山口宇部空港からレンタカーで出発。角島大橋へ向かう。
                </p>
                <p>
                  <strong>13:00</strong> 角島大橋に到着。展望台からエメラルドグリーンの絶景を眺め、橋を渡って角島灯台公園を散策。
                </p>
                <p>
                  <strong>16:00</strong> 長門湯本温泉の宿へチェックイン。名湯で旅の疲れを癒やす。
                </p>
                <p>
                  <strong>17:30</strong> 音信川沿いの遊歩道へ。竹林の階段ライトアップや飛び石の幻想的な夜景を夕暮れ散策。
                </p>
                <p>
                  <strong>19:00</strong> 宿で旬のとらふぐ会席や仙崎活イカ、山口和牛ディナーを地酒とともに味わう。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-teal-300 text-lg">
                <span className="bg-teal-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>元乃隅神社で123基赤鳥居初詣＆センザキッチン海の幸めぐり</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:30</strong> 宿で朝風呂と贅沢な和朝食を楽しんでチェックアウト。
                </p>
                <p>
                  <strong>09:30</strong> 元乃隅神社へ早朝参拝。海に向かって連なる123基の朱塗り鳥居をくぐり、新年の開運を祈願。龍宮の潮吹きの白波に圧倒される。
                </p>
                <p>
                  <strong>11:30</strong> 道の駅「センザキッチン」へ。仙崎港の獲れたて干物や海産物、地元スイーツをお土産に購入し、海鮮丼ランチ。
                </p>
                <p>
                  <strong>14:00</strong> 金子みすゞ記念館のある仙崎の通りを散策後、新山口駅へ戻り帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の長門・角島・元乃隅神社旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！山口・山陰の人気温泉＆冬の美食特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-teal-400 block mb-1">下関・川棚冬特集</span>
              <span className="font-bold text-white block">下関天然とらふぐ＆川棚温泉瓦そば！関門海峡夜景名宿</span>
            </Link>

            <Link 
              href="/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-teal-400 block mb-1">萩・萩温泉冬特集</span>
              <span className="font-bold text-white block">城下町の冬雪景色と長州和牛・萩温泉郷の老舗名宿</span>
            </Link>

            <Link 
              href="/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-teal-400 block mb-1">湯田温泉冬特集</span>
              <span className="font-bold text-white block">白狐伝説の名湯湯田温泉！とらふぐと長州牛を味わう名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    </div>
  );
}
