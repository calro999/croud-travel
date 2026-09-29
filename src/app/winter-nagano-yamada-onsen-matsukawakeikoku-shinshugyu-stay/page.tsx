import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月長野・高山村山田温泉＆松川渓谷】松川渓谷の雪見露天と信州牛・小布施栗おこわと信州高山ワインを味わう名宿5選",
  description: "11月から12月にかけて、信州北部に位置する高山村・松川渓谷は、晩秋の彩りから息を呑む白銀の渓谷美へと劇的な移ろいを見せます。開湯200年以上の歴史を刻む山田温泉をはじめ、八つの個性豊かな温泉地が点在する「信州高山温泉郷」は、小林一茶や森鴎外など多くの文人墨客に愛されてきた隠れ里。断崖絶壁にせり出す露天風呂に浸かれば、眼下に轟く松川の渓流と純白の雪をまとった渓谷美が視界いっぱいに広がり、湯けむりの中で身体の深部まで温もりが染み渡ります。近隣の栗の名所・小布施町では、名物のふっくら炊き上げた「小布施栗おこわ」や栗菓子を味わい、夕餉には長野県が誇る最高峰の「信州プレミアム牛肉」の石焼きステーキや信州サーモン、高山村の冷涼な気候が育んだ極上の「信州高山ワイン」とのペアリングを堪能。初冬の信州で静かな湯浴みと美食に満たされる厳選名宿5選を紐解きます。",
  keywords: '山田温泉 旅館, 松川渓谷 温泉, 心を整える宿 風景館, 平野屋旅館, 山田館, 旅館わらび野, 五色温泉 五色の湯旅館, 信州プレミアム牛, 小布施栗おこわ, 高山村ワイン, 雪見露天風呂, 11月 12月 長野温泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-nagano-yamada-onsen-matsukawakeikoku-shinshugyu-stay'
  },
  openGraph: {
    title: "【11・12月長野・高山村山田温泉＆松川渓谷】松川渓谷の雪見露天と信州牛・小布施栗おこわと信州高山ワインを味わう名宿5選",
    description: "11月から12月にかけて、信州北部に位置する高山村・松川渓谷は、晩秋の彩りから息を呑む白銀の渓谷美へと劇的な移ろいを見せます。開湯200年以上の歴史を刻む山田温泉をはじめ、八つの個性豊かな温泉地が点在する「信州高山温泉郷」は、小林一茶や森鴎外など多くの文人墨客に愛されてきた隠れ里。断崖絶壁にせり出す露天風呂に浸かれば、眼下に轟く松川の渓流と純白の雪をまとった渓谷美が視界いっぱいに広がり、湯けむりの中で身体の深部まで温もりが染み渡ります。近隣の栗の名所・小布施町では、名物のふっくら炊き上げた「小布施栗おこわ」や栗菓子を味わい、夕餉には長野県が誇る最高峰の「信州プレミアム牛肉」の石焼きステーキや信州サーモン、高山村の冷涼な気候が育んだ極上の「信州高山ワイン」とのペアリングを堪能。初冬の信州で静かな湯浴みと美食に満たされる厳選名宿5選を紐解きます。",
    url: 'https://croud-travel.com/winter-nagano-yamada-onsen-matsukawakeikoku-shinshugyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の長野県高山村・松川渓谷と山田温泉の雪見露天風呂'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月長野・高山村山田温泉＆松川渓谷】松川渓谷の雪見露天と信州牛・小布施栗おこわと信州高山ワインを味わう名宿5選",
    description: "11月から12月にかけて、信州北部に位置する高山村・松川渓谷は、晩秋の彩りから息を呑む白銀の渓谷美へと劇的な移ろいを見せます。開湯200年以上の歴史を刻む山田温泉をはじめ、八つの個性豊かな温泉地が点在する「信州高山温泉郷」は、小林一茶や森鴎外など多くの文人墨客に愛されてきた隠れ里。断崖絶壁にせり出す露天風呂に浸かれば、眼下に轟く松川の渓流と純白の雪をまとった渓谷美が視界いっぱいに広がり、湯けむりの中で身体の深部まで温もりが染み渡ります。近隣の栗の名所・小布施町では、名物のふっくら炊き上げた「小布施栗おこわ」や栗菓子を味わい、夕餉には長野県が誇る最高峰の「信州プレミアム牛肉」の石焼きステーキや信州サーモン、高山村の冷涼な気候が育んだ極上の「信州高山ワイン」とのペアリングを堪能。初冬の信州で静かな湯浴みと美食に満たされる厳選名宿5選を紐解きます。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function NaganoYamadaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12月長野・高山村山田温泉＆松川渓谷】松川渓谷の雪見露天と信州牛・小布施栗おこわと信州高山ワインを味わう名宿5選",
    description: "11月から12月にかけて、信州北部に位置する高山村・松川渓谷は、晩秋の彩りから息を呑む白銀の渓谷美へと劇的な移ろいを見せます。開湯200年以上の歴史を刻む山田温泉をはじめ、八つの個性豊かな温泉地が点在する「信州高山温泉郷」は、小林一茶や森鴎外など多くの文人墨客に愛されてきた隠れ里。断崖絶壁にせり出す露天風呂に浸かれば、眼下に轟く松川の渓流と純白の雪をまとった渓谷美が視界いっぱいに広がり、湯けむりの中で身体の深部まで温もりが染み渡ります。近隣の栗の名所・小布施町では、名物のふっくら炊き上げた「小布施栗おこわ」や栗菓子を味わい、夕餉には長野県が誇る最高峰の「信州プレミアム牛肉」の石焼きステーキや信州サーモン、高山村の冷涼な気候が育んだ極上の「信州高山ワイン」とのペアリングを堪能。初冬の信州で静かな湯浴みと美食に満たされる厳選名宿5選を紐解きます。",
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
    datePublished: '2026-09-29T12:00:00+09:00',
    dateModified: '2026-09-29T12:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      url: 'https://croud-travel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-nagano-yamada-onsen-matsukawakeikoku-shinshugyu-stay'
    }
  };

  const hotelList = [
            {
              id: 1,
              name: "心を整える宿　風景館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72777/72777.jpg",
              rating: 4.66,
              reviews: 747,
              price: "¥14,500〜",
              access: "長電バス山田温泉行き終点より徒歩1分。小布施から車で20分。当館送迎バス運行しております（要予約）",
              special: "松川渓谷が作り出す自然を感じながら温泉を満喫、善光寺や小布施、志賀高原、戸隠観光も",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72777%2F72777.html",
              story: "松川渓谷の切り立った断崖にせり出すように佇み、創業明和6年（1769年）の歴史を紡ぐ渓谷の絶景宿「心を整える宿 風景館」。宿の代名詞は、渓谷の谷底近くまで百数十段の階段を下りて辿り着く野趣満点の仙人露天風呂「渓谷野天風呂」です。荒々しい岩肌と松川の清流が目の前に迫り、冬には周囲の岩肌や木々が真っ白な雪と氷柱に覆われ、まるで自然の懐に抱かれたかのような圧倒的な非日常感を味わえます。泉質はメタケイ酸が豊富な含硫黄-ナトリウム・カルシウム-塩化物温泉で、身体を芯から温める熱の湯。夕食は信州の豊かな大地と気候の恵みを五感で楽しむ里山炭火会席。囲炉裏端で焼き上げる信州プレミアム牛のサーロインや渓流岩魚の串焼き、季節の信州キノコ鍋など、素材本来の旨味を凝縮した滋味あふれる料理が並びます。世界的にも評価の高い地元・高山村産ワインとの相性も抜群で、静寂の中で心身が深く整う極上の滞在を約束してくれます。",
              roomTip: "松川渓谷を一望する渓谷側の和室または展望露天風呂付き客室。初冬の渓谷に舞い落ちる雪と清らかなせせらぎの音に包まれ、静かなプライベート時間を満喫できます。",
              gourmetTip: "「信州プレミアム牛炭火焼き＆渓谷炉端会席」。炭火で香ばしく焼き上げる信州牛ステーキ、松川の清流岩魚塩焼き、小布施栗を使った季節のデザート、高山村シャルドネワイン。",
              highlights: [
                "渓谷の谷底に迫る仙人野天風呂＆囲炉裏炭火で焼く信州牛と高山村ワイン",
                "創業明和6年の歴史と心整う空間＆四季の松川渓谷パノラマビュー",
                "小布施観光や善光寺参拝に好立地＆渓谷のせせらぎを聞く至極の滞在"
              ]
            },
            {
              id: 2,
              name: "信州高山温泉郷・山田温泉　平野屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/199356/199356.jpg",
              rating: 4.33,
              reviews: 6,
              price: "¥5,400〜",
              access: "須坂駅よりバスで約40分、上信越道須坂長野東ICより約30分",
              special: "「源泉かけ流し」の熱い温泉が自慢です。 新しい宿泊スタイルで、ご滞在中ゆっくりとお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F199356%2F199356.html",
              story: "山田温泉の中心、堂々たる大湯の向かいに佇み、大正ロマンの風情と温かなもてなしで旅人を迎える老舗宿「信州高山温泉郷・山田温泉 平野屋旅館」。江戸時代から続く老舗で、文豪・森鴎外が滞在した宿としても知られています。館内には木の温もりが満ち、純和風の落ち着いた空間が初冬の旅情を掻き立てます。自慢のお湯は、大湯と同じ源泉から引かれるナトリウム・カルシウム-塩化物温泉。無色透明でわずかに硫黄の香りを放つ湯は、肌あたりが驚くほど滑らかで、入浴後もぽかぽかと温かさが長く持続します。冬の寒風で冷えた身体に染み入る名湯を堪能した後は、信州の家庭的な温もりを感じさせる郷土料理膳に舌鼓。信州名物の馬刺し、季節野菜の天ぷら、信州ポークの陶板焼きなど、派手さはないものの滋味深く心温まる料理が並びます。コストパフォーマンスも極めて高く、気兼ねなく名湯を味わいたい一人旅や湯治客にも深く愛されている名宿です。",
              roomTip: "昔ながらの旅籠の情緒を残す落ち着いた和室。窓からは山田温泉の風情ある街並みや初冬の山並みを望み、のんびりと寛ぐことができます。",
              gourmetTip: "「信州味覚の郷土会席膳」。信州名産の極上霜降り馬刺し、信州ポークの味噌陶板焼き、手打ち信州そば、高山村産の搾りたてリンゴジュース。",
              highlights: [
                "大正ロマン漂う文豪ゆかりの老舗＆大湯源泉の滑らか名湯と信州郷土料理膳",
                "森鴎外ゆかりの歴史的旅情＆一人旅や湯治にも嬉しいリーズナブルな価格",
                "山田温泉大湯の目の前という抜群のロケーション＆アットホームな接客"
              ]
            },
            {
              id: 3,
              name: "松川渓谷に佇む宿　信州山田温泉　山田館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/173176/173176.jpg",
              rating: 4.62,
              reviews: 55,
              price: "¥33,300〜",
              access: "長野電鉄須坂駅または小布施駅下車、当館無料送迎バスをご利用ください（要事前予約）",
              special: "全室渓谷ビュー。松川渓谷が織り成す絶景、心づくしのお料理と山田の湯で五感を潤すご滞在を叶えます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F173176%2F173176.html",
              story: "松川渓谷の絶景を望む特等席に位置し、大正浪漫の気品と静謐な高級感を漂わせる山田温泉屈指の名門宿「松川渓谷に佇む宿 信州山田温泉 山田館」。館内のどの場所からも四季折々の渓谷美を愛でることができ、特に初冬の白銀に染まった松川渓谷のパノラマは一幅の山水画のような息を呑む美しさです。宿自慢の渓流露天風呂は、松川の清らかなせせらぎを間近に感じながら湯浴みを楽しめる贅沢な造り。滾々と注がれる掛け流しの名湯は、肌を柔らかく包み込み、日頃のストレスや疲労を優しく解き放ちます。料理は信州の高級食材を惜しみなく使用した本格懐石。とろけるような食感と芳醇な香りを誇る「信州プレミアム牛肉」のしゃぶしゃぶやステーキ、信州サーモンのお造り、地元の冬野菜を活かした繊細な小鉢など、料理人の確かな技が光る逸品揃いです。大切な記念日や特別な冬旅にふさわしい最高峰の隠れ宿です。",
              roomTip: "松川渓谷を眼下に望む露天風呂付き特別室または数寄屋造りの贅沢な和室。窓一面に広がる白銀の渓谷を眺めながら、極上のプライベートバスタイムを堪能できます。",
              gourmetTip: "「信州プレミアム牛食べ比べ本格懐石」。信州牛のフィレステーキとしゃぶしゃぶ、信州大王イワナのお造り、小布施栗の甘露煮、長野県産銘酒の利き酒セット。",
              highlights: [
                "松川渓谷の絶景を望む格式ある名門宿＆極上信州プレミアム牛の本格懐石",
                "全館から望む一幅の絵画のような渓谷美＆記念日や特別な冬旅に最適なもてなし",
                "客室露天風呂付き特別室完備＆信州サーモンと冬野菜を散りばめた極上膳"
              ]
            },
            {
              id: 4,
              name: "旅館わらび野",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141307/141307.jpg",
              rating: 4.51,
              reviews: 242,
              price: "¥18,000〜",
              access: "長野電鉄『須坂駅』より山田温泉行きバス（原宮経由）にて〔蕨温泉〕下車　バス停目の前",
              special: "館内温泉は全て貸切でのご利用。地場のお料理と温泉をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141307%2F141307.html",
              story: "高山村ののどかな山里、蕨温泉エリアに佇み、全客室が広大な日本庭園に面した離れ風の隠れ宿「旅館わらび野」。敷地内には手入れの行き届いた庭園が広がり、初冬には雪吊りが施された松や庭石が白銀の雪をまとい、静寂と幽玄の美を醸し出します。宿の温泉は、微かに青みを帯びた単純温泉。刺激が少なく肌に優しい柔らかな湯触りで、長湯をしても身体に負担がかかりません。冬の庭園露天風呂からは、雪化粧した木々越しに北信濃の山並みが望め、澄み切った初冬の空気の中で心洗われる湯浴みが叶います。夕食は地産地消に徹底してこだわった「山里会席」。信州牛の陶板焼きをはじめ、信州名物の岩魚の姿焼き、契約農家から届く新鮮な根菜料理、そして契約栽培の信州米をふっくら炊き上げたご飯が並びます。静かでプライベートな時間を大切にしたい大人の旅人に絶大な支持を得ています。",
              roomTip: "日本庭園を望む離れ風の和洋室または和室。縁側に座り、雪化粧した庭園の静けさを眺めながら過ごす時間は、日々の喧騒を忘れさせてくれる至福のひとときです。",
              gourmetTip: "「信州牛陶板焼き＆季節の山里会席」。柔らかくジューシーな信州牛ステーキ、清流岩魚の香ばしい塩焼き、信州そばがき椀、高山村産赤ワイン「ピノ・ノワール」。",
              highlights: [
                "雪吊りの日本庭園を望む離れ風隠れ宿＆柔らかな美肌湯と地産地消山里会席",
                "手入れの行き届いた純和風の静謐空間＆信州牛陶板焼きと旬の山菜料理",
                "静かに過ごせる大人の隠れ家＆肌に優しい弱アルカリ性泉で長湯を満喫"
              ]
            },
            {
              id: 5,
              name: "五色温泉　五色の湯旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/74642/74642.jpg",
              rating: 4.08,
              reviews: 56,
              price: "¥11,000〜",
              access: "須坂駅より山田温泉行きバスにて４０分　山田温泉より送迎有り",
              special: "信州サーモン、信州黄金シャモなど、地場産の野菜を使用した和懐石",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74642%2F74642.html",
              story: "松川渓谷の最奥部、標高約1,400mの雲上に位置し、天候や気温によって湯の色が5色に変化する神秘の名湯を持つ「五色温泉 五色の湯旅館」。日本秘湯を守る会に加盟する素朴な一軒宿で、初冬には一面の銀世界に包まれます。宿の最大の魅力は、敷地内の岩盤から滾々と自噴する含硫黄-カルシウム・ナトリウム-硫酸塩・塩化物温泉。乳白色からエメラルドグリーン、コバルトブルー、透明、黒褐色へと表情を変える奇跡の源泉は、濃厚な硫黄の香りと豊富な湯の花が特徴です。雪深い山肌を望む露天風呂では、氷点下の澄み切った冷気の中で熱い名湯に浸かる醍醐味が味わえ、まさに秘湯の真骨頂を体感できます。食事は山菜やきのこ、信州ポークなど山の恵みを中心とした素朴な田舎料理。気取らない温かなもてなしと奇跡の湯を求めて、全国から熱狂的な温泉ファンが訪れる伝説の秘湯宿です。",
              roomTip: "雪山を望む素朴な和室。余計な装飾を排した静かな空間で、冬の山の風音と湯の湧き出る音を聞きながら、本物の秘湯旅情に浸ることができます。",
              gourmetTip: "「五色秘湯 郷土山里膳」。信州産豚肉の陶板焼き、山菜や保存食の小鉢盛り合わせ、地元産キノコの具だくさん汁、長野県産米の炊き立てご飯。",
              highlights: [
                "天候で色彩を変える五色温泉の神秘硫黄泉＆標高1400mの絶景雪見露天",
                "日本秘湯を守る会加盟の雲上の一軒宿＆白銀の山懐で過ごす本物の温泉時間",
                "湯の花が舞う完全掛け流しの濃厚源泉＆冬の雪見風呂ファンの聖地"
              ]
            }
  ];

  const faqList = [
  {
    "q": "高山村の山田温泉や松川渓谷エリアの11月・12月の気候や降雪、道路状況は？",
    "a": "高山村は標高約800m〜1,500mに広がる山里です。11月上旬から中旬にかけては紅葉の名残と初冠雪が重なる美しい季節ですが、11月下旬以降は本格的な雪景色となり、12月に入ると路面は凍結・圧雪状態になります。車でアクセスする場合は、上信越自動車道の須坂長野東ICまたは小布施スマートICが便利ですが、冬用スタッドレスタイヤの装着は必須です。特に標高の高い五色温泉や七味温泉方面へ向かう山道は急勾配やヘアピンカーブが続くため、4WD車の利用が強く推奨されます。"
  },
  {
    "q": "信州高山温泉郷の特徴や湯めぐりの楽しみ方は？",
    "a": "信州高山温泉郷は、松川渓谷沿いに点在する山田温泉、松川渓谷温泉、五色温泉、七味温泉、蕨温泉、子安温泉、奥山田温泉など、異なる個性と泉質を持つ八つの温泉地の総称です。透明な弱アルカリ性の美肌泉から、青みがかった乳白色の硫黄泉、天候によって色が変わる五色温泉まで、車で20分圏内で多彩な泉質を一度に楽しめます。中心となる山田温泉には江戸時代の建築美を再現した木造の共同浴場「大湯」があり、日帰り入浴や温泉街散策の拠点として賑わいます。"
  },
  {
    "q": "初冬の高山村・小布施エリアで絶対に味わうべきグルメは？",
    "a": "隣接する小布施町は全国有数の栗の名産地で、秋に収穫された栗を用いた「小布施栗おこわ」や栗かのこ、栗羊羹などの栗菓子は初冬も絶大な人気を誇ります。また、長野県が厳格な基準で認定する最高峰ブランド「信州プレミアム牛肉」のステーキやすき焼き、信州サーモン、冬が旬の信州リンゴ、地元手打ち蕎麦は必食。さらに高山村は日本有数のワイン用ブドウの産地であり、「信州高山ワイナリー」をはじめとする世界的評価の高いシャルドネやピノ・ノワールのワインは料理と最高の相性を誇ります。"
  },
  {
    "q": "冬の高山村周辺のおすすめ観光スポットは？",
    "a": "松川渓谷にかかる「高井橋」からの白銀の渓谷美や、「雷滝（裏見の滝）」の豪快な景観は冬ならではの迫力があります（積雪状況により遊歩道が閉鎖される場合あり）。また、車で約20分の小布施町では「北斎館」で葛飾北斎の肉筆画を鑑賞したり、蔵造りの街並み散策を楽しめます。国宝・善光寺（長野市）へも車で約40分と近く、初冬の静かな信州の文化と歴史を巡るドライブに最適です。"
  },
  {
    "q": "東京方面からの電車でのアクセス方法と所要時間は？",
    "a": "北陸新幹線で東京駅から「長野駅」まで約1時間20分。長野駅から長野電鉄の特急電車に乗り換えて「須坂駅」まで約25分です。須坂駅からは長電バス（山田温泉行き）が運行されており、約40分で山田温泉に到着します。また、小布施観光を兼ねる場合は長野電鉄の小布施駅下車も便利です。多くの旅館が須坂駅や小布施駅からの事前予約制送迎を行っているため、事前に宿へ問い合わせることをおすすめします。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative w-full h-[65vh] min-h-[480px] max-h-[640px] flex items-end justify-start overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="白銀の信州高山村・松川渓谷と雪見露天風呂"
          fill
          priority
          className="object-cover object-center brightness-[0.72] scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-600/90 text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full mb-4 backdrop-blur-xs shadow-xs">
            <Snowflake className="w-4 h-4 text-amber-200" />
            <span>11・12月 冬の極上秘湯旅特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            長野・高山村山田温泉＆松川渓谷<br className="hidden sm:inline" />
            松川渓谷の雪見露天と信州牛・小布施栗おこわ名宿5選
          </h1>
          <p className="text-stone-200 text-sm sm:text-base max-w-3xl leading-relaxed drop-shadow-xs">
            11月から白銀の渓谷美へ。断崖絶壁にせり出す野趣あふれる露天風呂、小林一茶や森鴎外ゆかりの文豪の湯、信州プレミアム牛肉と小布施栗おこわ、信州高山ワインに酔いしれる冬の隠れ里。
          </p>

          <div className="flex flex-wrap gap-3 pt-1 text-xs text-amber-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（松川渓谷の雪化粧と小布施の新栗グルメ）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-3.5 h-3.5 text-amber-300" />
              <span>旬の美味: 信州プレミアム牛炭火焼き・小布施栗おこわ・信州サーモン・高山村ワイン</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Waves className="w-3.5 h-3.5 text-amber-300" />
              <span>名湯泉質: ナトリウム・カルシウム-塩化物温泉（大湯源泉）＆五色温泉硫黄泉</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-900 transition">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-900 transition">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-700 font-medium">長野・山田温泉＆松川渓谷 初冬名宿5選</span>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-6">

        {/* Introduction Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            信州高山村・山田温泉の初冬の魅力
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 leading-snug">
            松川渓谷の断崖に湧く名湯と、小布施・北信濃が誇る美食。<br />
            文人墨客が愛した静寂の山里で過ごす贅沢な冬の休日
          </h2>

          <div className="text-stone-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              長野県北部、志賀高原の南西麓に広がる高山村。松川が削り出した険しい断崖絶壁が続く松川渓谷沿いには、山田温泉をはじめ、五色温泉や蕨温泉など八つの温泉地が点在し、「信州高山温泉郷」として古くから湯治客や旅人を癒やしてきました。11月に入ると渓谷の紅葉がフィナーレを迎え、11月下旬からは山肌が純白の雪に覆われて息を呑む白銀の渓谷美へと変貌します。
            </p>
            <p>
              このエリアの真骨頂は、大自然のダイナミズムを肌で感じる露天風呂体験です。松川渓谷の谷底近くや断崖に張り出すように造られた野天風呂に浸かれば、激しく波打つ清流の瀬音と、雪をまとった巨岩や木々の静けさが同時に押し寄せます。無色透明で柔らかく肌を包む塩化物泉や、天候で色が変化する神秘の硫黄泉など、湧き出る名湯が身体の芯までじっくりと熱を届けてくれます。
            </p>
            <p>
              そして旅を彩るのが、北信濃が誇る豊かな味覚。近隣の小布施町で受け継がれてきた名物「小布施栗おこわ」のふっくらとした甘み、長野県が誇る最高品質「信州プレミアム牛肉」の芳醇な旨味、そして冷涼な気候と水はけの良い扇状地が育んだ世界水準の「信州高山ワイン」。上質な地酒とともに味わう郷土会席は、冬の寒さを忘れさせる至福の余韻を残してくれます。
            </p>
            <p>
              江戸時代の俳諧師・小林一茶が足繁く通い、明治の文豪・森鴎外が癒やしを求めて滞在した山田温泉。歴史と文化が息づく温泉街には、伝統の木造共同浴場「大湯」が鎮座し、冬の冷気の中に立ち上る湯けむりが旅情をかき立てます。雪深い松川渓谷の絶景と、北信濃の滋味あふれる食材に満たされるひとときは、本物の安らぎを求める大人にとって最高の冬の贅沢です。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <ThermometerSun className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">渓谷断崖の雪見野天風呂</h3>
                <p className="text-xs text-stone-500 mt-1">松川の清流と白銀の渓谷美を一望。豊富なメタケイ酸が肌をしっとり整えます。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <Utensils className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">信州牛と小布施栗おこわ</h3>
                <p className="text-xs text-stone-500 mt-1">霜降り信州プレミアム牛と小布施栗の共演。高山村産極上ワインとのマリアージュ。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <Landmark className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">文豪が愛した歴史の隠れ里</h3>
                <p className="text-xs text-stone-500 mt-1">小林一茶や森鴎外ゆかりの風情。小布施の葛飾北斎散策や善光寺参拝にも最適。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full mb-2">
              <Landmark className="w-4 h-4" />
              厳選宿泊施設
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              初冬の長野・高山村山田温泉で泊まるべき名宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              楽天トラベルで卓越した評価を誇る、渓谷絶景と信州の美食を極めた宿
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                id={`hotel-${hotel.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image Container */}
                  <div className="relative lg:col-span-5 h-64 lg:h-auto min-h-[260px]">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                      <span>第{hotel.id}位</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-stone-400">口コミ {hotel.reviews}件</span>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-100 text-xs">
                      <div className="space-y-1">
                        <div className="font-bold text-stone-800 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-amber-700" />
                          客室選びのアドバイス
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="font-bold text-stone-800 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          必食の夕食プラン
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-stone-400 tracking-wider uppercase">この宿の注目ポイント</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Access & Booking Link */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition duration-200 shadow-xs hover:shadow-md shrink-0"
                      >
                        <span>空室・料金プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-amber-300" />
            初冬の信州高山美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の長野・高山村で味わい尽くす極上グルメと冬の恵み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                最高峰「信州プレミアム牛肉」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                長野県独自の厳格なオレイン酸含有基準をクリアした最高品質の黒毛和牛「信州プレミアム牛肉」。きめ細やかなサシの甘みと芳醇な香りが口の中でとろけ、石焼きステーキやすき焼きで極上の肉の旨味を堪能できます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                名物「小布施栗おこわ」と栗菓子
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                隣接する小布施町で古くから愛されてきた栗文化。秋に収穫された大粒の栗をふっくら炊き上げた「小布施栗おこわ」は、ほのかな塩気と栗本来の濃厚な甘みが絶妙なバランスで、初冬の旅路を温かく満たしてくれます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                世界が認める「信州高山ワイン」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                日照時間が長く水はけの良い扇状地が広がる高山村は、日本屈指のワイン用ブドウ産地。国内外のコンクールで高い評価を受けるシャルドネやピノ・ノワールは、信州サーモンや信州牛会席と息を呑むマリアージュを奏でます。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の長野・高山村山田温泉＆松川渓谷 1泊2日満喫モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：小布施の栗散策から松川渓谷へ・断崖雪見露天と信州牛の饗宴
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                長野電鉄で小布施の栗おこわランチ、渓谷の絶景露天と高山村ワイン
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                北陸新幹線長野駅から長野電鉄の特急で小布施駅へ。風情ある蔵造りの街並みや北斎館を散策し、老舗で名物「小布施栗おこわ」と栗菓子の昼食を満喫。午後は高山村へ向かい、松川渓谷にかかる高井橋から白銀に染まる渓谷美を眺めて山田温泉の宿へチェックイン。百数十段の階段を下りて辿り着く野天風呂で、雪をかぶった断崖と清流の瀬音に包まれながら湯浴み。夜は信州プレミアム牛の石焼きと地元高山村産ワインのマリアージュに酔いしれます。
              </p>
            </div>

            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：渓流の雪見朝風呂から山田温泉大湯・国宝善光寺参拝へ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                朝の滑らか名湯から、木造建築の大湯立ち寄り・信州蕎麦ランチ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                川風が心地よい朝、渓流露天風呂で身体を目覚めさせた後、信州米と温かい郷土汁の朝食を味わってチェックアウト。山田温泉のシンボルである総木造の共同浴場「大湯」に立ち寄り、江戸情緒漂う湯殿で滑らかな源泉を再堪能。信州高山ワイナリー直売所でワインをお土産に選んだ後は、長野市内へ移動して門前町の老舗で打ち立ての手打ち信州蕎麦を昼食に味わい、初冬の澄み切った空気に包まれる国宝・善光寺を参拝して新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Travel Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            初冬の山田温泉・松川渓谷 旅の心得とアクセスガイド
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            渓谷の雪景色と高原ドライブを安全に満喫するヒント
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                新幹線長野駅＋長電特急のスマートアクセス
              </h3>
              <p>
                東京駅から北陸新幹線で長野駅まで約1時間20分。長野電鉄の特急電車に乗り換えて須坂駅まで約25分です。
              </p>
              <p>
                須坂駅からは山田温泉行きの路線バスや旅館の無料送迎バスが運行されており、雪道運転の不安を一切抱えることなく快適に秘湯へ到着できます。途中で小布施駅に立ち寄り、栗の小路散策を楽しむのもおすすめです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Mountain className="w-4 h-4 text-amber-700" />
                マイカー利用時の山道・積雪対策
              </h3>
              <p>
                上信越道須坂長野東ICまたは小布施スマートICより車で約25〜40分。高山村中心部から松川渓谷上流部へ進むにつれて標高が高くなり、道路状況が変化します。
              </p>
              <p>
                11月下旬以降はスタッドレスタイヤ必須です。特に五色温泉や七味温泉などの標高1,400mエリアへ向かう場合は、路面凍結や急カーブに備え、4WD車での日中移動を心がけましょう。
              </p>
            </div>
          </div>

          <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-amber-700" />
              渓谷雪見露天風呂の入浴マナーと湯冷め対策
            </h3>
            <p>
              渓谷の野天風呂は外気との寒暖差が非常に激しいため、浴室に入る前の丁寧なかけ湯が欠かせません。
            </p>
            <p>
              露天風呂までの移動階段や通路は凍結している場合があるため、足元に十分注意してゆっくり歩行しましょう。浴後は塩化物成分が肌の熱を逃がさない働きをしてくれますが、水分をしっかり拭き取り、厚手の羽織をまとって速やかに暖かい室内へ戻ることが湯冷め予防のポイントです。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の長野・山田温泉＆松川渓谷旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-amber-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-amber-300" />
              あわせて読みたい信州・長野の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              白銀のアルプス絶景と名湯、極上の信州牛会席を満喫する厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-nagano-shibu-onsen-nine-sotoyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">長野・渋温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                渋温泉の九湯めぐりと石畳の雪景色
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                厄除け巡浴祈願と情緒あふれる木造宿、スノーモンキー地獄谷野猿公苑を巡る冬旅。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">長野・別所温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                信州の鎌倉・別所温泉の古刹と信州牛
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                北向観音の門前町に湧く美肌の湯と雪景色、極上信州牛すき焼きを味わう歴史ロマン旅。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-asama-onsen-matsumoto-castle-snow-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">長野・浅間温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                国宝松本城の白銀雪景色と浅間温泉名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                松本藩主ゆかりの奥座敷と冬の城下町散策、信州サーモンと手打ち蕎麦を堪能。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
