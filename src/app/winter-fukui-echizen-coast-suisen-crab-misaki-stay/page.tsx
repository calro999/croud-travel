import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【12・1月福井】越前海岸＆越前町！日本海に咲く「越前水仙まつり」群生美と越前岬灯台・黄色タグ付き本場「越前がに」フルコース＆絶景温泉宿5選",
  description: "冬の日本海の荒波が打ち寄せる断崖絶壁に清楚な水仙の花々が咲き乱れる12〜1月の福井・越前海岸。日本三大水仙群生地の絶景を巡る「越前水仙まつり」や越前岬灯台からの雄大な水平線、織田信長ゆかりの越前二宮・劔神社での雪の初詣。そして本場越前町が誇る黄色いブランドタグ付き「越前がに」の茹でたて極上フルコースと、海を目前に望む塩化物泉の露天風呂に癒やされる厳選宿5選を徹底特集します。",
  keywords: '越前水仙まつり, 越前がに 宿, 越前海岸 旅館, 越前岬 観光, 黄色タグ 越前蟹, 越前温泉 ホテル, せいこがに 福井, 劔神社 初詣, 12月 1月 福井 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukui-echizen-coast-suisen-crab-misaki-stay/"
  },
  openGraph: {
    title: "【12・1月福井】越前海岸＆越前町！日本海に咲く「越前水仙まつり」群生美と越前岬灯台・黄色タグ付き本場「越前がに」フルコース＆絶景温泉宿5選",
    description: "冬の日本海の荒波が打ち寄せる断崖絶壁に清楚な水仙の花々が咲き乱れる12〜1月の福井・越前海岸。日本三大水仙群生地の絶景を巡る「越前水仙まつり」や越前岬灯台からの雄大な水平線、織田信長ゆかりの越前二宮・劔神社での雪の初詣。そして本場越前町が誇る黄色いブランドタグ付き「越前がに」の茹でたて極上フルコースと、海を目前に望む塩化物泉の露天風呂に癒やされる厳選宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/14121/14121.jpg",
      width: 1200,
      height: 630,
      alt: '冬の越前海岸に咲き誇る越前水仙と本場越前がに'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12・1月福井】越前海岸＆越前町！日本海に咲く「越前水仙まつり」群生美と越前岬灯台・黄色タグ付き本場「越前がに」フルコース＆絶景温泉宿5選",
    description: "冬の日本海の荒波が打ち寄せる断崖絶壁に清楚な水仙の花々が咲き乱れる12〜1月の福井・越前海岸。日本三大水仙群生地の絶景を巡る「越前水仙まつり」や越前岬灯台からの雄大な水平線、織田信長ゆかりの越前二宮・劔神社での雪の初詣。そして本場越前町が誇る黄色いブランドタグ付き「越前がに」の茹でたて極上フルコースと、海を目前に望む塩化物泉の露天風呂に癒やされる厳選宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/14121/14121.jpg"]
  }
};

export const dynamic = 'force-static';

export default function FukuiEchizenCoastPage() {
  const hotels = [
            {
              id: 1,
              name: "越前温泉　平成　ＨＥＩＳＥＩ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14121/14121.jpg",
              rating: 4.21,
              reviews: 320,
              price: "¥15,730〜",
              access: "『敦賀IC』より国道8号、305号経由で約45分／JR『武生駅』",
              special: "≪ご夕食は完全個室食orお部屋食≫越前の海の幸をご堪能あれ！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14121%2F14121.html",
              story: "越前海岸の高台に位置し、眼前いっぱいに広がる日本海の大パノラマと、主人が自ら競り落とす極上の越前がにで食通たちを唸らせる老舗宿「越前温泉 平成（HEISEI）」。冬の冷たい日本海風を受けながら浸かる展望大浴場「渚の湯」は、美肌効果の高いアルカリ性単純温泉が豊富に注がれ、夕暮れ時には赤銅色に染まる水平線と荒波の飛沫を眺めながら極上の湯浴みが愉しめます。宿の真骨頂は何と言っても11月上旬から解禁される黄色いタグ付きの「越前がに会席」。生簀から揚げたばかりの活ガニを絶妙な塩加減で茹で上げる名物「姿茹でガニ」は、芳醇な湯気とともに甘みたっぷりの肉厚な身がほぐれ、甲羅いっぱいに詰まった黄金色のカニ味噌に浸して味わえば言葉を失う美味です。焼きガニの香ばしい磯の香り、透き通る花咲くカニ刺しまで、冬の越前町ならではの贅を尽くした一夜を過ごせます。",
              roomTip: "日本海を一望するオーシャンビュー和室。冬の澄み渡る夜には沖合に灯る漁火の幻想的な光を眺められ、波音に耳を傾けながら落ち着いた時間を過ごせます。",
              gourmetTip: "「黄色タグ付き越前がに特選フルコース」。一人一杯の茹でガニに加えてカニ刺し、焼きガニ、甲羅味噌焼き、最後の旨味が凝縮したカニ雑炊まで堪能できる至高の膳。",
              highlights: [
                "全室オーシャンビュー＆展望大浴場「渚の湯」からの夕日絶景",
                "黄色タグ付き本場越前がに姿茹で・濃厚カニ味噌と花咲くカニ刺し",
                "越前岬灯台ドライブや水仙まつり鑑賞に最適な海岸沿いの好立地"
              ]
            },
            {
              id: 2,
              name: "越前の宿　うおたけ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68492/68492.jpg",
              rating: 4.25,
              reviews: 410,
              price: "¥6,500〜",
              access: "北陸自動車道敦賀インタ－から「道の駅越前」より車で約1分ほど",
              special: "海水浴場が目の前　越前海岸を望むオーシャンビュー　【大浴場】とろっとした肌ざわり「越前くりや温泉」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68492%2F68492.html",
              story: "越前町厨（くりや）漁港の目の前に佇み、漁港仲買人の主人が毎朝自らの目利きで最高ランクの越前がにを仕入れる美食の湯宿「越前の宿 うおたけ」。宿の玄関をくぐると巨大な大型生簀が並び、元気に蠢く活越前がにや旬の若狭湾・越前灘の鮮魚が旅人を迎えます。お風呂は越前厨温泉の源泉を引き込んだ展望風呂で、ナトリウム―炭酸水素塩・硫酸塩泉のまろやかな湯触りが旅の疲れを芯から解きほぐします。料理に対するこだわりは妥協がなく、注文を受けてから生簀から引き揚げて捌く越前がには鮮度が命。繊維一本一本に旨味が凝縮した刺身の甘さ、強火の炭火で殻ごと香ばしく焼き上げる焼きガニ、そして蟹味噌に辛口の地酒「黒龍」を注いで炙る「甲羅酒」はまさに冬の越前海岸でしか出会えない至福の体験です。",
              roomTip: "海側最上階和室。目の前の厨漁港を行き交う漁船や、冬の荒々しくも美しい日本海の白波をワイドな窓から一望できる特等席。",
              gourmetTip: "「活越前がに極み尽くし会席」。重さ1kg超の特大タグ付き越前がにを贅沢に使用。越前港水揚げの寒ブリや甘エビのお造りも絶品です。",
              highlights: [
                "漁港仲買人の主人が営む生簀料理宿・注文後に捌く鮮度抜群の活蟹",
                "特大タグ付き越前がにフルコース＆地酒黒龍を注ぐ熱々甲羅酒",
                "厨漁港の競りの熱気を間近に感じる海の風情・美肌の炭酸水素塩泉"
              ]
            },
            {
              id: 3,
              name: "りぞうと旅館　宿かり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51656/51656.jpg",
              rating: 4.24,
              reviews: 103,
              price: "¥15,400〜",
              access: "ＪＲ　武生駅より福鉄バス「かれい崎」行きで約６０分→バス停「高佐会館」下車し、徒歩１分",
              special: "冬は越前かに、夏は鮑や雲丹、四季を通じて極上級の海鮮グルメを＜お手ごろ＞に楽しめる料理旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51656%2F51656.html",
              story: "越前海岸沿いの潮風薫るロケーションに建ち、アットホームなおもてなしとボリューム満点の海鮮料理でリピーターが絶えない「りぞうと旅館 宿かり」。冬の越前海岸といえば水仙とカニですが、宿かりではリーズナブルな価格設定ながら、しっかりとした品質の越前がに料理を提供することで高い満足度を誇っています。海を望む大浴場には越前温泉の滑らかな天然温泉が満たされ、冷え切った身体にじわじわと温もりが染み渡ります。夕食には名物のカニすき鍋を中心に、茹でガニ、陶板焼きガニ、カニ茶碗蒸しなど多彩な蟹料理が並び、家族連れやグループ旅行でも気兼ねなく蟹三昧の宴を満喫できます。すぐ近くには越前水仙の群生地があり、冬のドライブ拠点にも最適な好立地です。",
              roomTip: "海側和洋室。畳の寛ぎとシモンズ製ベッドの快適さを両立。朝起きると目の前に冬の朝日に輝く日本海が広がります。",
              gourmetTip: "「冬の越前蟹＆旬魚満足プラン」。地元漁港で獲れた脂の乗った寒ヒラメやアオリイカのお造りと共に熱々のカニ鍋を囲む団らんの味。",
              highlights: [
                "越前水仙群生地至近・リーズナブルに蟹三昧を愉しめるアットホーム宿",
                "熱々の越前カニすき鍋と旬魚お造り・家族旅行にも最適な和洋室",
                "親しみやすいもてなしと清潔な館内・冬の日本海ドライブ拠点"
              ]
            },
            {
              id: 4,
              name: "旅館　大西",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30836/30836.jpg",
              rating: 4.29,
              reviews: 150,
              price: "¥6,600〜",
              access: "ハピラインふくい線　武生駅／福鉄バス　かれい崎下車徒歩１分",
              special: "全室海一望！鮮度抜群の海の幸をどうぞ♪越前浜焼き会席が人気の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30836%2F30836.html",
              story: "越前海岸米ノ浦の静かな入り江に佇み、全室オーシャンビューの客室から日本海の絶景を独り占めできる隠れ家宿「旅館 大西」。派手な観光旅館とは一線を画し、静かに冬の海を眺めながら本物の越前がにを味わいたい大人たちに愛され続けています。宿自慢の天然温泉はナトリウム・炭酸水素塩泉で、湯上がりの肌がしっとりと潤う「美人の湯」。冬の凛とした空気の中、湯煙の向こうに広がる荒波を眺める時間は格別です。夕食は主人が長年の経験で茹で加減を見極めるタグ付き越前がに。絶妙な塩梅で茹で上げられたカニ肉はみずみずしく、濃厚な内子と外子を持つメスの「せいこがに（越前がにの雌）」を使ったセイコ丼や甲羅盛りも冬の初め（11月〜12月末限定）ならではの贅沢な味わいです。",
              roomTip: "純和風次の間付き海側客室。木造の落ち着いた設えで、寄せては返す波の音を天然のヒーリングミュージックに心洗われる滞在が叶います。",
              gourmetTip: "「越前がに夫婦（めおと）会席」。希少な黄色タグ付きオス越前がにと、内子外子の旨味が凝縮したメスせいこがにを両方味わえる贅沢極まる冬限定膳。",
              highlights: [
                "米ノ浦の静かな入り江に佇む大人の隠れ家・しっとり美肌の天然温泉",
                "越前がにオスとせいこがにメスの贅沢夫婦会席・絶妙な茹で職人技",
                "波音に包まれる純和風の静謐空間・せいこがにの濃厚な内子外子"
              ]
            },
            {
              id: 5,
              name: "鷹巣温泉　国民宿舎　鷹巣荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67189/67189.jpg",
              rating: 4.26,
              reviews: 540,
              price: "¥6,500〜",
              access: "北陸新幹線福井駅から京福バス＜越前海岸ブルーライン　波の華行き＞乗車⇒みの浦下車（50分）　徒歩5分（400m）",
              special: "自家源泉100％かけ流しが自慢〇目の前が日本海〇",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67189%2F67189.html",
              story: "越前海岸の北端、福井市蓑町に位置し、名勝・鷹巣（たかす）海岸の岩礁美を眼下に望む天然温泉宿「鷹巣温泉 国民宿舎 鷹巣荘」。日本海を一望する絶景露天風呂は、源泉掛け流しの弱アルカリ性ナトリウム―炭酸水素塩・塩化物泉。つるつるとした肌触りの名湯に浸かりながら、冬の日本海に沈みゆく夕日や激しい白波を眺める入浴体験は爽快そのものです。国民宿舎ならではの親しみやすい価格帯でありながら、冬期は越前港・三国港で水揚げされた新鮮なズワイガニやタグ付き越前がにを贅沢に組み込んだプランが充実。福井県産のブランドコシヒカリ、地場産冬野菜、越前越冬おろし蕎麦など、福井ならではの食の恵みを心ゆくまで楽しめます。",
              roomTip: "海側展望和室。ワイドなピクチャーウィンドウから鷹巣の奇岩群と日本海のダイナミックな景観をパノラマで堪能できます。",
              gourmetTip: "「越前がに姿茹で＆日本海冬の海鮮御膳」。手頃な価格でタグ付き越前がにの姿茹でを味わえ、寒ブリしゃぶしゃぶや越前甘エビと共に満喫できます。",
              highlights: [
                "名勝鷹巣海岸を一望・源泉掛け流し絶景露天風呂と国民宿舎の良心的な価格",
                "越前港・三国港直送の冬魚介＆手頃な越前がにプラン・福井米コシヒカリ",
                "鷹巣の奇岩群パノラマ・日帰り入浴でも人気の高い名湯"
              ]
            }
  ];

  const faqs = [
  {
    "q": "越前海岸の水仙まつりの見頃時期とおすすめビュースポットはどこですか？",
    "a": "越前水仙の開花時期は例年12月上旬から1月下旬にかけてで、最盛期は12月中旬から1月中旬です。日本海の冷たい潮風を受けることで花弁が引き締まり、非常に強い芳香を放つのが特徴です。代表的な鑑賞スポットは、越前岬灯台周辺に広がる「越前岬水仙ランド」や、梨子ヶ平（なしがだいら）の棚田状の水仙畑です。急斜面一面に白い水仙が咲き乱れ、眼下に広がる日本海の荒波と青い海原のコントラストは息を呑む絶景です。例年1月中旬には越前町水仙まつりイベントも開催されます。"
  },
  {
    "q": "本物の「越前がに」の見分け方と、黄色いタグの意味を教えてください。",
    "a": "「越前がに」は福井県内の漁港（越前港・三国港・敦賀港・小浜港）に水揚げされたオスのズワイガニのみに与えられるブランド呼称です。全国のズワイガニブランドの中で最も歴史が古く、唯一皇室へ献上されるカニとしても知られています。福井県で水揚げされた正規の越前がにには、産地漁港名と船名が刻印された「黄色いプラスチックタグ」が足に取り付けられています。越前沖は海底が段丘状でカニの生息に適した泥砂地であり、港から漁場までがわずか1〜2時間と極めて近いため、抜群の鮮度で生きたまま水揚げされるのが極上の甘みと身詰まりの秘密です。"
  },
  {
    "q": "冬の越前海岸へ車でアクセスする際の雪道・路面凍結の注意点は？",
    "a": "越前海岸を通る国道305号は海岸線沿いのため、内陸部（大野や勝山など）に比べて豪雪になることは稀ですが、12月中旬から1月にかけては強い冬型の気圧配置により激しい降雪や吹雪、夜間の路面凍結が発生します。また、北陸自動車道の敦賀ICや武生ICから海岸線へ抜ける峠道（国道365号や国道8号線など）は内陸の山間を通るため、チェーン規制や積雪が頻発します。冬期に車で訪れる際は、必ず全輪スタッドレスタイヤ（冬用タイヤ）の装着を行い、急発進・急ブレーキを避けた慎重な運転を心がけてください。"
  },
  {
    "q": "越前岬周辺で立ち寄るべき初詣や歴史観光スポットはありますか？",
    "a": "冬の初詣スポットとして最もおすすめなのが、越前町織田に鎮座する「劔神社（つるぎじんじゃ）」です。越前二宮として千八百余年の歴史を誇り、織田信長公が自身の祖先の発祥の地として生涯にわたり格別に崇敬した神社です。境内には国宝の梵鐘が守られており、初詣には県内外から多くの参拝客が訪れて開運厄除や必勝祈願を行います。また、海沿いの「越前岬灯台」や、カニの生態と漁の歴史を体験的に学べる「越前がにミュージアム」も冬の立ち寄りに最適です。"
  },
  {
    "q": "メスの「せいこがに」とオスの「越前がに」の違い、食べられる期間は？",
    "a": "オスの「越前がに」は甲羅が大きく肉厚で、漁期は11月6日から翌年3月20日まで続きます。一方、メスのズワイガニは福井では「せいこがに（セイコガニ）」と呼ばれ、オスに比べて小ぶりですが、資源保護のため漁期が「11月6日から12月末までの約2ヶ月弱」と極めて短く限定されています。せいこがにの最大の魅力は、甲羅の内側にある濃厚でねっとりとした赤い卵巣「内子（うちこ）」と、お腹に抱えたプチプチとした食感の「外子（そとこ）」、そして濃厚な蟹味噌です。12月中に訪れれば、オスの豪快な身とメスの濃厚な卵を同時に味わえる贅沢な体験が叶います。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay"
        },
        "headline": "【12・1月福井】越前海岸＆越前町！日本海に咲く「越前水仙まつり」群生美と越前岬灯台・黄色タグ付き本場「越前がに」フルコース＆絶景温泉宿5選",
        "description": "冬の日本海の荒波が打ち寄せる断崖絶壁に清楚な水仙の花々が咲き乱れる12〜1月の福井・越前海岸。日本三大水仙群生地の絶景を巡る「越前水仙まつり」や越前岬灯台からの雄大な水平線、織田信長ゆかりの越前二宮・劔神社での雪の初詣。そして本場越前町が誇る黄色いブランドタグ付き「越前がに」の茹でたて極上フルコースと、海を目前に望む塩化物泉の露天風呂に癒やされる厳選宿5選を徹底特集します。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/14121/14121.jpg",
        "datePublished": "2026-10-04T21:00:00+09:00",
        "dateModified": "2026-10-04T21:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay#breadcrumb",
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
            "name": "越前海岸＆越前町水仙まつり・越前がに名宿",
            "item": "https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };


  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs font-semibold text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-amber-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-amber-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-stone-800">福井・越前海岸＆越前町水仙まつり・越前がに名宿</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-amber-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wide">
            <Flower2 className="w-3.5 h-3.5 text-amber-400" />
            12月〜1月限定・冬の越前プレミアム特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-snug text-balance">
            【12・1月福井】越前海岸＆越前町！日本海に咲く「越前水仙まつり」群生美と越前岬灯台・黄色タグ付き本場「越前がに」フルコース＆絶景温泉宿5選
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            激しく砕け散る冬の日本海の荒波と、断崖を埋め尽くす可憐な越前水仙の芳香。本場越前町ならではの黄色いタグ付き活越前がにの極上フルコースと、海に浸かるような絶景露天風呂を愉しむ贅沢な冬旅をご案内します。
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3 text-xs text-amber-200">
            <span className="flex items-center gap-1.5"><Anchor className="w-4 h-4" /> 越前港直送タグ付き蟹</span>
            <span className="flex items-center gap-1.5"><Flower2 className="w-4 h-4" /> 日本三大水仙群生地</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4" /> 越前温泉美肌の湯</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4" /> 織田信長ゆかり劔神社初詣</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* イントロダクション解説 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Winter Highlights</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の越前海岸が旅人を魅了する理由：断崖の白い水仙と日本海の王者「越前がに」
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              冬の北陸・福井県西部に弧を描く「越前海岸」。激しい季節風が吹き荒れ、日本海の荒波が奇岩や断崖絶壁を洗うこの地は、12月から1月にかけて日本屈指の美しい冬の表情を見せます。その象徴が、厳しい寒さの中で一斉に咲き誇る「越前水仙」です。日本三大群生地の中でも最大の面積を誇る越前海岸では、切り立った斜面に約数百万本もの水仙が自生し、雪交じりの寒風に耐えながら凛とした純白の花弁と芳しい甘い香りを放ちます。灰色の空と群青の海、そして白緑の水仙畑が織りなすコントラストは、この季節に訪れた者だけが享受できる幽玄の絶景です。
            </p>
            <p>
              そして、冬の越前海岸の旅を語る上で欠かせない最大の主役が、11月6日に漁が解禁される「越前がに」です。福井県沖の越前堆は、暖流と寒流が交差する豊かなプランクトンと段丘状の海底地形を持ち、ズワイガニの生育にとって日本最高の環境を誇ります。さらに越前港は漁場まで船でわずか1〜2時間という驚異的な近さにあり、生きたまま港へ持ち帰られたカニは、全国で最も厳しい選別を経て、誇り高き「黄色いプラスチックタグ」が付けられます。
            </p>
            <p>
              水深の深い海底から湧出する越前温泉郷（くりや温泉、高佐温泉、玉川温泉など）は、ナトリウムや炭酸水素塩を多く含み、冷えた身体を芯まで温めて肌を滑らかに整える極上の泉質。水平線に沈む冬の夕陽を眺めながら温泉に浸かり、夜は茹でたての越前がにに舌鼓を打つ——五感すべてが満たされる冬の最高峰の贅沢がここにあります。
            </p>
          </div>
        </section>

        {/* 厳選ホテル5選 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Selected Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              越前海岸＆越前町！本場越前がにと絶景温泉を味わい尽くす名宿5選
            </h2>
            <p className="text-stone-600 text-xs md:text-sm">
              楽天トラベルで高評価を獲得し、直接競り落とす黄色タグ付き活蟹と海一望の露天風呂を誇る宿を厳選
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition">
                <div className="p-6 md:p-8 space-y-6">
                  {/* ヘッダー情報 */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-amber-600 text-white text-xs font-black px-2.5 py-0.5 rounded-full">
                          第{hotel.id}選
                        </span>
                        <div className="flex items-center text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 ml-1">({hotel.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-stone-900 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-stone-400 block">参考宿泊料金（1名）</span>
                      <span className="text-lg md:text-xl font-black text-amber-700">{hotel.price}</span>
                    </div>
                  </div>

                  {/* 宿の詳細ストーリー */}
                  <div className="prose text-stone-700 text-sm md:text-base leading-relaxed">
                    <p>{hotel.story}</p>
                  </div>

                  {/* ハイライト3点 */}
                  <div className="bg-amber-50/50 rounded-2xl p-4 md:p-5 border border-amber-100 space-y-2.5">
                    <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      この宿の注目ポイント＆こだわり
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 客室・グルメのアドバイス */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Building className="w-3.5 h-3.5 text-amber-700" /> おすすめ客室
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Utensils className="w-3.5 h-3.5 text-amber-700" /> 冬の美食プラン
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                    </div>
                  </div>

                  {/* 予約リンク */}
                  <div className="pt-2 text-center md:text-right">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-xs md:text-sm hover:from-amber-700 hover:to-amber-800 shadow-sm hover:shadow transition"
                    >
                      楽天トラベルで空室・プラン詳細を見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 冬の越前を味わう三大美味＆文化セクション */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Local Food & Culture</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の越前町で絶対に味わうべき三大味覚：黄色タグ越前がに・せいこがに・越前そば
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-700">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                黄色タグ付き「越前がに」の極み
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                福井県で水揚げされるオスのズワイガニは、皇室献上ガニとしても名高い日本最高峰のブランド。太い脚にぎっしり詰まった繊維の甘みと、甲羅に詰まった芳醇な蟹味噌は別格です。炭火で香ばしく焼き上げる「焼きガニ」、繊細な花が咲く「カニ刺し」、そして熱々の甲羅酒まで、余すところなくカニの旨味を味わい尽くせます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                12月末までの幻「せいこがに」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                ズワイガニのメスである「せいこがに」は、漁期が11月上旬から12月末までのわずか2ヶ月足らずに限定される冬の至宝。小ぶりな甲羅の中に詰まった濃厚な赤い卵巣「内子」と、お腹に抱えたプチプチの「外子」、そして濃厚な蟹味噌が絶品。ご飯の上にほぐした身と内子外子を敷き詰めた「セイコ丼」は冬の贅沢の頂点です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                越前おろし蕎麦と冬の水ようかん
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                石臼挽きのそば粉を使い、ピリッと辛い大根おろしと濃いめの出汁で味わう「越前おろし蕎麦」は福井県民のソウルフード。さらに福井県では、冬に暖かいこたつに入ってツルリと冷たい一枚を食べる「冬の水ようかん（丁稚羊羹）」の文化が根付いており、黒糖の優しい甘さが旅の締めくくりにぴったりです。
              </p>
            </div>
          </div>
        </section>

        {/* 越前水仙の歴史と越前焼の文化コラム */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">History & Heritage</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              断崖に咲く越前水仙の伝承と、日本六古窯「越前焼」の温もり
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              越前海岸の急峻な岩場になぜこれほど多くの水仙が自生するようになったのか。その起源には古くからの海の伝承があります。その昔、日本海の荒波によって南方から漂着した水仙の球根が、越前岬の急斜面に根を下ろし、過酷な潮風と寒さに耐えながら代々群生を広げていったと伝えられています。越前の水仙は雪の中でも蕾を膨らませることから「雪中花（せっちゅうか）」とも呼ばれ、厳しい冬を生き抜く福井の人々の不屈の精神のシンボルとして親しまれてきました。
            </p>
            <p>
              また、越前町は日本六古窯の一つに数えられる「越前焼（えちぜんやき）」の故郷でもあります。平安時代末期から約850年の歴史を誇り、釉薬を使わずに高温で焼き締める素朴な土の風合いが特徴です。冬の越前がに会席では、越前焼の大皿に豪快に盛り付けられたカニや、越前焼の酒器で味わう地酒「黒龍」や「梵」が、冬の夜の団らんを格調高く演出してくれます。
            </p>
          </div>
        </section>

        {/* 12・1月モデルコース */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Model Itinerary</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              【1泊2日】越前海岸水仙ロードと黄色タグ越前がに満喫モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm text-stone-700">
            <div className="relative pl-6 border-l-2 border-amber-200 space-y-4">
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">1日目：信長ゆかりの古社初詣と水仙岬ドライブ</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  午前、北陸新幹線・ハピラインふくい武生駅よりレンタカーで出発。まずは越前二宮「劔神社」へ立ち寄り、信長公も祈願した由緒ある社殿で雪の初詣。名物「おたふくや」の織田まんじゅうを味わった後、国道365号を経て越前海岸へ。昼食は海沿いの食事処で名物「せいこがに丼（12月末まで）」や旬の越前甘エビ丼を堪能。午後は「越前岬水仙ランド」へ。断崖絶壁に咲き乱れる数百万本の白い水仙の甘い香りに包まれ、白亜の越前岬灯台から日本海の大パノラマを展望。夕刻、越前温泉の宿にチェックインし、水平線を赤く染める夕日を眺めながら露天風呂で温まる。夜は待望の黄色タグ付き越前がにフルコースに舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">2日目：活気ある漁港見学と冬の味覚お土産巡り</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  朝、日本海の爽快な潮騒を聞きながら朝風呂。朝食には福井県産コシヒカリとカニ汁、地魚の干物を満喫。「越前がにミュージアム」に立ち寄り、カニの生態や深海の不思議をジオラマやシアターで見学。隣接する「うおいち通り」や道の駅越前で、茹でたての越前がにや地酒「黒龍」「一本義」、水仙の切り花をお土産に購入。午後は鷹巣海岸の奇岩群を眺めながら福井市内へ戻り、名物「越前おろし蕎麦」と「ソースカツ丼」を味わって帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 冬のアクセス＆雪道・防寒対策ガイド */}
        <section className="bg-amber-50/60 rounded-3xl p-6 md:p-10 border border-amber-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>冬の越前海岸旅行・安全ドライブ＆防寒ガイド</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 leading-relaxed">
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">冬用タイヤ（スタッドレス）の完全装着</strong>
              <p>
                海岸線沿いの国道305号は比較的雪が少なめですが、日本海からの寒波直撃時には一時的な猛吹雪や路面凍結が発生します。また、北陸道武生ICや敦賀ICから海岸へ抜ける山越えルート（国道365号など）は積雪路面になることが多いため、全輪スタッドレスタイヤの装着が不可欠です。
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">強風対策と防寒ウエアの準備</strong>
              <p>
                冬の越前岬や海岸沿いは、遮るもののない日本海からの強烈な季節風が吹き付けます。傘は風で壊れやすいため、フード付きの防風防水ダウンジャケット、手袋、マフラーを着用してください。また、波しぶきが舞い上がって泡立つ「波の花」が見られるのも冬の越前ならではの風物詩です。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Frequently Asked Questions</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の越前海岸・越前がに旅行に関するよくある質問
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {faqs.map((f, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm md:text-base flex items-start gap-2">
                  <span className="text-amber-600 font-black">Q.</span>
                  <span>{f.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-stone-600 pl-6 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク・関連特集 */}
        <section className="bg-stone-100 rounded-3xl p-6 md:p-8 space-y-4">
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
            あわせて読みたい！冬の味覚＆温泉特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay" className="p-3 bg-white rounded-xl hover:text-amber-700 shadow-xs transition">
              🦀 三国温泉＆東尋坊！越前がにと絶景露天
            </Link>
            <Link href="/winter-fukui-eiheiji-snow-zen-echizen-oroshi-soba-wakasa-beef-stay" className="p-3 bg-white rounded-xl hover:text-amber-700 shadow-xs transition">
              ❄️ 永平寺の雪景色＆越前おろし蕎麦・若狭牛名宿
            </Link>
            <Link href="/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay" className="p-3 bg-white rounded-xl hover:text-amber-700 shadow-xs transition">
              🌲 金沢兼六園の雪吊り＆香箱ガニ・加賀名宿
            </Link>
            <Link href="/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay" className="p-3 bg-white rounded-xl hover:text-amber-700 shadow-xs transition">
              🏔️ 伯耆大山雪景色＆皆生温泉・松葉ガニ名宿
            </Link>
            <Link href="/campaigns/autumn-gourmet-travel" className="p-3 bg-white rounded-xl hover:text-amber-700 shadow-xs transition">
              🍁 全国の旬の味覚＆極上温泉宿特集まとめ
            </Link>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="winter-fukui-echizen-coast-suisen-crab-misaki-stay" />
</div>
  );
}
