import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月鹿教湯温泉】文殊菩薩の霊泉と渓流雪見露天！名宿5選',
  description: '11月から12月にかけて、信州上田の奥座敷・内村川の渓流沿いに佇む「鹿教湯温泉（かけゆおんせん）」は、初冬の静けさと美しい初雪の情景に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '鹿教湯温泉 旅館, 信州上田 宿泊, 斎藤ホテル, 三水館, 鹿乃屋旅館, 河鹿荘, 望山亭ことぶき, 国民保養温泉地, 投じ蕎麦, 信州牛, 11月 12月 長野温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay/"
  },
  openGraph: {
    title: '【11・12月鹿教湯温泉】文殊菩薩の霊泉と渓流雪見露天！名宿5選',
    description: '11月から12月にかけて、信州上田の奥座敷・内村川の渓流沿いに佇む「鹿教湯温泉（かけゆおんせん）」は、初冬の静けさと美しい初雪の情景に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の鹿教湯温泉と屋根付き五台橋の雪景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月長野・鹿教湯温泉＆信州上田】文殊菩薩の霊泉と渓流雪見露天・名物信州投じ蕎麦と極上信州牛を味わう名宿5選",
    description: "11月から12月にかけて、信州上田の奥座敷・内村川の渓流沿いに佇む「鹿教湯温泉（かけゆおんせん）」は、初冬の静けさと美しい初雪の情景に包まれます。その昔、信仰心の厚い猟師が鹿に姿を変えた文殊菩薩に導かれて発見したという伝説から「鹿が教えた湯＝鹿教湯」と名付けられたこの地は、環境省から国民保養温泉地に指定される日本屈指の湯治場です。名所である屋根付き木造橋「五台橋（ごだいばし）」や文殊堂に初雪が降り積もる姿は息を呑むほどの旅情を醸し出します。無色透明でまろやかな弱アルカリ性単純温泉は、入浴だけでなく飲泉も可能で、身体の外側と内側の両面から疲労を癒やし血行を促進してくれます。夕食には信州の厳しい冬に生まれた伝統の郷土鍋「投じ蕎麦（とうじそば）」が登場。小分けにした新蕎麦を竹編みの「とうじ籠」に入れ、旬のキノコや冬根菜が煮立つ熱々の鍋出汁にさっとくぐらせてすする一杯は、身体の芯まで温もりを届けてくれます。さらにきめ細やかな霜降りの「信州プレミアム牛」や地酒とともに、初冬の信州で極上のリトリートを叶える厳選名宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterNaganoKakeyuPage() {
  const hotels = [
            {
              id: 1,
              name: "鹿教湯温泉　斎藤ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2767/2767.jpg",
              rating: 4.35,
              reviews: 556,
              price: "¥18,433〜",
              access: "ＪＲ北陸長野新幹線上田駅下車または松本駅下車",
              special: "『Resatrant溪』信州ブランドアワード2023 GOOD DESIGN部門/部門賞受賞",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2767%2F2767.html",
              story: "創業元禄年間、鹿教湯温泉の伝統を守りながら「現代の湯治リゾート」を確立した名門ホテル「鹿教湯温泉 斎藤ホテル」。館内には本格的な室内温泉プールやフィットネスジム、エステサロンが完備され、長期滞在でも飽きることのない健康づくりの設備が整っています。大浴場と渓流露天風呂には、毎分豊富な湯量を誇る弱アルカリ性の単純温泉が掛け流されており、肌に吸い付くような優しい湯触りが特徴。初冬の冷たい外気を感じながら、湯煙越しに雪化粧した内村川の木立を眺めて浸かる雪見露天風呂は格別の心地よさです。斎藤ホテルのもう一つの大きな自慢が、契約農家から届く新鮮な信州野菜を惜しみなく使用したビュッフェスタイルのディナー。オープンキッチンで焼き上げる信州プレミアム牛のステーキをはじめ、信州サーモンのお造り、具だくさんの手打ち蕎麦、和洋中の多彩な創作料理が並び、健康と美味しさを高次元で両立させた滞在が多くのリピーターを惹きつけてやみません。",
              roomTip: "内村川のせせらぎと初冬の山景色を望む上層階の洋室ツインまたは和洋室。床暖房や充実したアメニティが備わり、長期逗留やワーケーションにも最適な機能性を誇ります。",
              gourmetTip: "「信州美食ビュッフェ」。オープンキッチンで焼き立ての信州プレミアム牛ステーキ、信州サーモンのカルパッチョ、地場キノコと冬根菜の具だくさん蕎麦、地酒「真田丸」。",
              highlights: [
                "元禄創業の現代湯治リゾート＆室内温泉プール完備と信州牛・新鮮野菜ビュッフェ",
                "弱アルカリ性のまろやかな美肌泉＆内村川の初雪を望む開放的な雪見露天風呂",
                "国民保養温泉地の本格ヘルスケア滞在＆一人旅からワーケーションまで快適"
              ]
            },
            {
              id: 2,
              name: "鹿教湯温泉　三水館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187467/187467.jpg",
              rating: 4.78,
              reviews: 3,
              price: "¥19,800〜",
              access: "上田駅よりバスで70分、松本駅よりバスで50分、東部湯の丸インターおよび松本梓川インターより車で40分",
              special: "自然と共存する宿　（2023年10月1日からプランの販売開始を予定しております。）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187467%2F187467.html",
              story: "鹿教湯の温泉街から少し離れた山あいの集落にひっそりと佇み、日本の原風景のような美しい里山空間で全国の温泉通を魅了する隠れ宿「鹿教湯温泉 三水館（さんすいかん）」。木造の温もりを活かした館内には薪ストーブがパチパチと音を立て、初冬の冷え切った身体を温かく迎え入れてくれます。大浴場には大きなガラス窓越しに冬の里山林が広がり、檜の浴槽には掛け流しの柔らかな鹿教湯の名湯が注がれています。無色透明で癖のない温泉は、じっくりと時間をかけて長湯を楽しむのに最適。三水館の最大の魅力は、料理長が毎朝仕込む素朴ながらも極限まで洗練された「山里の家庭料理会席」。旬の地場野菜やキノコ、根菜を主役に据え、素材本来の力強い甘みと旨味を引き出した料理の数々は、一口食べるごとに身体が浄化されていくような感動を与えてくれます。初冬の夜にいただく熱々の小鍋仕立ての投じ蕎麦や、じっくり煮込んだ冬野菜の煮物は、都会の喧騒を完全に忘れさせてくれる贅沢そのものです。",
              roomTip: "中庭の雪景色や冬枯れの里山を望む落ち着いた数寄屋和室。余計な装飾を排した引き算の美学が貫かれ、畳の上で静かに読書や思索を楽しむ大人の旅に最適です。",
              gourmetTip: "「里山の冬味覚会席」。地元産冬根菜とキノコの熱々投じ蕎麦小鍋、信州牛と季節野菜の炭火焼き、自家製豆腐の餡掛け、土鍋で炊き上げる長野県産米ご飯。",
              highlights: [
                "里山の静寂に包まれる大人の隠れ宿＆洗練を極めた山里家庭料理と薪ストーブ",
                "檜風呂から眺める冬の里山林＆手作りの投じ蕎麦小鍋が織りなす至福の夜",
                "余計なもののない引き算の美学＆大切な人と静かに語らう贅沢な時間"
              ]
            },
            {
              id: 3,
              name: "鹿教湯温泉　鹿乃屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/43723/43723.jpg",
              rating: 4.35,
              reviews: 331,
              price: "¥7,800〜",
              access: "北陸新幹線上田駅より車で約30分、千曲バス45分。東部湯の丸IC、松本ICより、それぞれ車で45分",
              special: "馬刺しが名物☆素朴な家庭料理とゆったり露天風呂で安らぐ贅沢を。美術館やミニコンサートも好評！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43723%2F43723.html",
              story: "創業百余年、鹿教湯温泉の中心に位置し、文殊菩薩の恵みを伝える名湯と伝統の信州会席で愛され続ける老舗温泉宿「鹿教湯温泉 鹿乃屋旅館（かのやりょかん）」。自慢は、木造の太い梁と檜の香りに包まれた風情ある大浴場と、四季の移ろいを肌で感じる野趣あふれる露天風呂。弱アルカリ性の単純温泉は、刺激が少なく肌にすっと染み入る優しさで、古くから「中風（脳卒中後遺症）の治癒や神経痛の湯」として名高い名湯です。初冬には雪吊りが施された庭園の木々に白い雪が舞い散り、幻想的な雪見風呂を心ゆくまで堪能できます。夕食は信州上田の風土が育んだ山里の味覚を散りばめた季節会席。信州名物の手打ち蕎麦を熱々のキノコ出汁にくぐらせていただく「投じ蕎麦」、きめ細やかなサシが美しい信州牛の陶板焼き、信州サーモンのお造りなど、温もりのある手作りのご馳走がテーブルを彩ります。女将の温かな笑顔と親身なおもてなしに心が和む、どこか懐かしい名宿です。",
              roomTip: "純和風の落ち着きある和室。窓を開けると初冬の澄んだ山風が吹き抜け、温泉街の湯けむりと遠くの雪山を眺めながらゆったりと寛げます。",
              gourmetTip: "「信州手打ち投じ蕎麦会席」。手打ち信州蕎麦の投じ鍋、特選信州牛の陶板焼き、信州サーモンのお造り、季節の山菜と冬野菜の天ぷら、信州地酒「亀齢（きれい）」。",
              highlights: [
                "創業百年の老舗旅館＆屋根付き五台橋に近く手打ち投じ蕎麦と信州牛を味わう",
                "雪吊り庭園の風情漂う露天風呂＆文殊菩薩ゆかりの名湯で身体を芯から癒やす",
                "女将の温かな笑顔とおもてなし＆信州の地酒とともに楽しむ郷土会席"
              ]
            },
            {
              id: 4,
              name: "渓流露天湯の宿　河鹿荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2149/2149.jpg",
              rating: 4.14,
              reviews: 213,
              price: "¥3,850〜",
              access: "ＪＲ上田駅からバスで４０分、東部湯の丸ＩＣから車で４０分",
              special: "混浴の渓流露天風呂が自慢の温泉宿、湯治部(自炊)は１泊5,000円から",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2149%2F2149.html",
              story: "清流内村川の渓谷にせり出すように建ち、川のせせらぎと豊かな自然林に包まれた温泉旅館「渓流露天湯の宿 河鹿荘（かじかそう）」。宿の代名詞ともいえるのが、川面を間近に見下ろす名物渓流露天風呂です。11月下旬から12月にかけて、対岸の落葉樹林に初雪が降り積もり、青く透き通る川の流れと白い雪景色のコントラストを目前にしながら、源泉掛け流しの名湯に身を委ねることができます。身体を包み込む柔らかな単純温泉は、入浴後もぽかぽかとした温もりが続き、肌に潤いを与えてくれます。夕食は素朴ながらもボリューム満点の信州郷土会席。地元のキノコや山菜、川魚の塩焼き、信州産豚の温まり小鍋など、気取らない手作りの美味しさが旅人の胃袋を満たします。リーズナブルな価格設定と自然に寄り添った静かなロケーションは、一人旅の湯治滞在やのんびりとした気ままな温泉旅行に絶大な人気を誇っています。",
              roomTip: "内村川の渓流をダイレクトに望む和室。眼下に流れる清流の心地よい水音を聞きながら、静寂の初冬の渓谷美を独り占めできる特等席です。",
              gourmetTip: "「渓流山里膳」。川魚の香ばしい塩焼き、信州豚と地元野菜の温まり鍋、手打ち蕎麦、自家製漬物盛り合わせ、信州の地酒。",
              highlights: [
                "内村川の渓流にせり出す絶景雪見露天風呂＆素朴で温かい郷土料理と高コスパ",
                "清流のせせらぎが間近に響く野趣＆自然に囲まれた静かなロケーション",
                "一人旅の湯治や連泊にも最適＆気軽な料金で楽しむ本物の源泉掛け流し"
              ]
            },
            {
              id: 5,
              name: "鹿教湯温泉　望山亭　ことぶき",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4917/4917.jpg",
              rating: 4.23,
              reviews: 323,
              price: "¥6,270〜",
              access: "北陸新幹線上田駅より鹿教湯温泉行き直通バスで40分鹿教湯温泉上、下車。松本駅より車で約40分",
              special: "空を眺めながらの展望露天風呂と信州ならではのお料理をお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4917%2F4917.html",
              story: "鹿教湯温泉の奥、静かな高台に位置し、アットホームな家族的もてなしと家庭的な手作り料理でリピーターの心を掴む湯宿「鹿教湯温泉 望山亭 ことぶき」。こぢんまりとした宿ならではのきめ細やかな心配りと、清潔に整えられた館内が心地よい滞在を約束してくれます。自慢の内湯と露天風呂には、鹿教湯の天然温泉が無色透明のまま注がれており、24時間いつでも好きな時に湯浴みを楽しむことができます。初冬の冷え込みが厳しい夜でも、熱すぎずぬるすぎない絶妙な湯加減に調整された名湯にじっくり浸かることで、全身の緊張がほどけて深い眠りへと誘われます。夕食は地元のお母さんたちが腕を振るう温かな家庭料理。信州名物の馬刺しや、季節の野菜をたっぷり使った鍋物、手作りの信州蕎麦など、素朴で温もりのある味わいが旅人の身体を芯から癒やしてくれます。実家に帰ってきたような安心感に包まれる、温かな隠れ宿です。",
              roomTip: "明るく清潔な和室。窓からは初冬の山並みを見渡すことができ、過剰なサービスのないプライベートな静けさの中でリフレッシュできます。",
              gourmetTip: "「ことぶき特選手作り膳」。信州名物の上赤身馬刺し、季節の熱々郷土鍋、手打ち信州蕎麦、信州味噌仕立ての味噌汁、地酒一合。",
              highlights: [
                "アットホームな家族的もてなし＆24時間入浴可能な源泉風呂と家庭料理",
                "手作りの信州郷土鍋と馬刺し＆実家のように寛げる心温まるサービス",
                "リーズナブルな価格設定＆鹿教湯温泉街の散策にも便利な好立地"
              ]
            }
  ];

  const faqList = [
  {
    "q": "鹿教湯温泉の名前の由来と「国民保養温泉地」としての特徴・効能は？",
    "a": "鹿教湯（かけゆ）温泉は、文殊菩薩が鹿に化身して信仰心の厚い猟師を導き、温泉の湧出地を教えたという伝説からその名が付けられました。環境省が指定する「国民保養温泉地」であり、温泉の効能、湧出量、豊かな自然環境、健全な保養環境が国から公認されています。泉質は弱アルカリ性単純温泉。無色透明で無味無臭、肌への刺激が極めて少なく、入浴による神経痛やリウマチ、疲労回復のほか、飲泉所が設置されており飲泉によって胃腸病や整腸作用への効果も期待できます。"
  },
  {
    "q": "信州の伝統郷土料理「投じ蕎麦（とうじそば）」とはどのような食べ方ですか？",
    "a": "投じ蕎麦は、長野県の山間部で厳しい冬の寒さを乗り切るために生まれた伝統的な蕎麦の食べ方です。「とうじかご」と呼ばれる小さな竹編みのひしゃくのような籠に、一口大に小分けにした手打ちの冷たい蕎麦を入れます。そして、キノコや鶏肉、冬根菜（大根、人参、ゴボウなど）をたっぷり煮込んだ熱々の出汁鍋の中に籠ごとさっと浸し（投じ）、温まったところをお椀に移し、具と出汁をかけていただきます。熱々で香り高い新蕎麦の喉ごしと、具材の旨味が凝縮されたスープが一体となり、身体が芯から温まります。"
  },
  {
    "q": "11月・12月の鹿教湯温泉の気候や積雪状況、冬道の注意点は？",
    "a": "鹿教湯温泉は標高約600〜700mの山間盆地に位置します。11月の日中気温は10〜14℃前後ですが、朝晩は0〜3℃近くまで冷え込みます。12月に入ると最高気温も5〜8℃程度となり、朝晩は氷点下5℃前後の厳しい寒さとなります。初雪は例年11月下旬頃に観測され、12月に入ると降雪や日陰での路面凍結（アイスバーン）が頻発します。車でアクセスする場合は、必ず高性能スタッドレスタイヤ（4WD推奨）を装着してください。三才山トンネルや上田・松本方面からの峠道は除雪が行われますが、早朝・深夜の運転は避け、日中の明るい時間帯に移動しましょう。"
  },
  {
    "q": "北陸新幹線上田駅やJR松本駅からの公共交通機関アクセスは？",
    "a": "東京方面からは、北陸新幹線でJR上田駅まで約1時間20分。上田駅お城口から千曲バス「鹿教湯温泉行」に乗車して約50〜60分で鹿教湯温泉バスターミナルへ到着します。また、名古屋・長野方面からは、JR松本駅からも松本バスターミナル発の路線バス（美ヶ原高原・鹿教湯方面、約50分）が運行されています。主要な旅館は温泉街の中心にまとまっており、バス停からのアクセスも良好です。雪道の運転に自信がない旅行者でも、新幹線と路線バスを乗り継ぐことで安全快適に訪れることができます。"
  },
  {
    "q": "鹿教湯温泉の象徴である「五台橋」と「文殊堂」の散策ポイントは？",
    "a": "温泉街を流れる内村川の渓谷に架かる「五台橋（ごだいばし）」は、全国的にも珍しい屋根付きの木造橋で、上田市の有形文化財に指定されています。初冬には屋根や欄干にうっすらと雪が積もり、渓谷のせせらぎとともに絵画のような情景を見せてくれます。五台橋を渡って石段を登った先にある「文殊堂」は、鹿教湯温泉の守護仏である文殊菩薩を祀る霊場で、国の重要文化財に指定された多宝塔が静かに佇んでいます。初冬の凛とした冷気の中で行う参拝と散策は、心洗われる静寂のひとときを提供してくれます。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月長野・鹿教湯温泉＆信州上田】文殊菩薩の霊泉と渓流雪見露天・名物信州投じ蕎麦と極上信州牛を味わう名宿5選",
        'description': "11月から12月にかけて、信州上田の奥座敷・内村川の渓流沿いに佇む「鹿教湯温泉（かけゆおんせん）」は、初冬の静けさと美しい初雪の情景に包まれます。その昔、信仰心の厚い猟師が鹿に姿を変えた文殊菩薩に導かれて発見したという伝説から「鹿が教えた湯＝鹿教湯」と名付けられたこの地は、環境省から国民保養温泉地に指定される日本屈指の湯治場です。名所である屋根付き木造橋「五台橋（ごだいばし）」や文殊堂に初雪が降り積もる姿は息を呑むほどの旅情を醸し出します。無色透明でまろやかな弱アルカリ性単純温泉は、入浴だけでなく飲泉も可能で、身体の外側と内側の両面から疲労を癒やし血行を促進してくれます。夕食には信州の厳しい冬に生まれた伝統の郷土鍋「投じ蕎麦（とうじそば）」が登場。小分けにした新蕎麦を竹編みの「とうじ籠」に入れ、旬のキノコや冬根菜が煮立つ熱々の鍋出汁にさっとくぐらせてすする一杯は、身体の芯まで温もりを届けてくれます。さらにきめ細やかな霜降りの「信州プレミアム牛」や地酒とともに、初冬の信州で極上のリトリートを叶える厳選名宿5選を詳しく紹介します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay',
        'datePublished': '2026-09-29T00:00:00+09:00',
        'dateModified': '2026-09-29T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay#destination',
        'name': '長野・鹿教湯温泉＆信州上田',
        'description': '長野県上田市の内村川沿いに湧く環境省指定の国民保養温泉地。文殊菩薩の霊泉と屋根付き五台橋の初冬雪景色、伝統の投じ蕎麦と信州プレミアム牛が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 36.3156,
          'longitude': 138.1136
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      },
      {
        '@type': 'ItemList',
        '@id': 'https://croud-travel.pages.dev/winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay#hotellist',
        'name': '長野・鹿教湯温泉＆信州上田のおすすめ名宿5選',
        'itemListElement': hotels.map((h, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': h.name,
          'url': h.url
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-indigo-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-950 via-stone-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-indigo-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">長野・鹿教湯温泉＆信州上田</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            11月・12月 国民保養温泉地の霊泉と名物投じ蕎麦・信州牛特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月長野・鹿教湯温泉＆信州上田】文殊菩薩の霊泉と雪見露天
            <span className="block text-indigo-300 text-lg sm:text-2xl mt-3 font-normal">
              屋根付き五台橋の初冬雪景色・名物信州投じ蕎麦と極上信州牛を味わう名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、信州上田の奥座敷・内村川の渓流沿いに佇む「鹿教湯温泉（かけゆおんせん）」は、初冬の静けさと美しい初雪の情景に包まれます。その昔、信仰心の厚い猟師が鹿に姿を変えた文殊菩薩に導かれて発見したという伝説から「鹿が教えた湯＝鹿教湯」と名付けられたこの地は、環境省から国民保養温泉地に指定される日本屈指の湯治場です。名所である屋根付き木造橋「五台橋（ごだいばし）」や文殊堂に初雪が降り積もる姿は息を呑むほどの旅情を醸し出します。無色透明でまろやかな弱アルカリ性単純温泉は、入浴だけでなく飲泉も可能で、身体の外側と内側の両面から疲労を癒やし血行を促進してくれます。夕食には信州の厳しい冬に生まれた伝統の郷土鍋「投じ蕎麦（とうじそば）」が登場。小分けにした新蕎麦を竹編みの「とうじ籠」に入れ、旬のキノコや冬根菜が煮立つ熱々の鍋出汁にさっとくぐらせてすする一杯は、身体の芯まで温もりを届けてくれます。さらにきめ細やかな霜降りの「信州プレミアム牛」や地酒とともに、初冬の信州で極上のリトリートを叶える厳選名宿5選を詳しく紹介します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-indigo-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-indigo-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（内村川の初雪・新蕎麦の出回り・静寂の湯治）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-indigo-300" />
              <span>旬の味覚: 伝統信州投じ蕎麦・特選信州プレミアム牛・信州サーモン・上田の地酒</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Waves className="w-4 h-4 text-indigo-300" />
              <span>泉質: 弱アルカリ性単純温泉（国民保養温泉地公認・飲泉可能・源泉掛け流し）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-800 text-sm font-bold bg-indigo-50 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            11月・12月の信州丸子・鹿教湯の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            文殊菩薩の化身が授けた名湯・屋根付き五台橋の雪化粧と熱々投じ蕎麦の温もり
          </h2>
          <div className="text-stone-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              長野県の中央部、真田氏ゆかりの城下町・上田と、国宝松本城を擁する松本の中間に位置する山あいの渓谷。内村川の清流沿いに石畳の小道と木造旅館が落ち着いた風情を漂わせる「鹿教湯温泉」は、平安時代の開湯伝説に始まる歴史ある名湯です。文殊菩薩が傷ついた鹿の姿となって猟師を導き、湯の湧き出る場所を教えたという神秘的な伝説が今も大切に語り継がれています。その卓越した効能と豊かな自然環境から、昭和31年には環境庁（現環境省）より国民保養温泉地の指定を受け、古くから中風や神経痛、リウマチの湯治場として多くの人々を救ってきました。
            </p>
            <p>
              鹿教湯の温泉は、肌への刺激がほとんどない無色透明の弱アルカリ性単純温泉。泉温は約46〜48度と適温で、湧出量が極めて豊富なため、多くの宿で加水なしの贅沢な源泉掛け流しが楽しめます。肌にすっと馴染む優しい湯触りで、入浴すれば身体の芯から頑固な凝りや冷えが解けていくのを実感できます。さらに温泉街には国指定の飲泉所が設けられており、コップに注いで飲めば、ほのかに甘みを感じるまろやかな温泉水が胃腸の働きを活発にしてくれます。
            </p>
            <p>
              11月下旬を迎えると、山肌の紅葉が静かに散り、初雪が舞い始めます。温泉街のシンボルである屋根付き木造橋「五台橋」や、橋を渡った先の杉木立に佇む「文殊堂」の境内は、白銀の雪化粧をまとい、息を呑むほど静謐で美しい冬の表情を見せてくれます。外気温が氷点下近くまで冷え込む中、内村川のせせらぎを聞きながら露天風呂に浸かれば、舞い散る粉雪と立ち上る湯気のコントラストが、日頃の忙しさを完全に忘れさせてくれます。
            </p>
            <p>
              そして夜の膳を飾る最大の楽しみが、信州の冬の風物詩「投じ蕎麦（とうじそば）」です。小分けにされた冷たい新蕎麦を、竹編みの「とうじ籠」に入れ、旬のキノコや鶏肉、大根や人参などの根菜をたっぷり煮込んだ熱々の出汁鍋にさっとくぐらせます。出汁の旨味をまとった熱々の蕎麦をすすり込めば、豊かな蕎麦の香りと具材のコクが口いっぱいに広がり、身体の奥底から温もりが満ちてきます。長野県が誇る最高級ブランド「信州プレミアム牛」の陶板ステーキやすき焼き、澄んだ川魚の塩焼き、上田の銘酒「真田丸」や「亀齢」とともに味わうひとときは、冬の信州旅ならではの最高の贅沢です。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-800 text-sm font-bold bg-indigo-50 px-3 py-1 rounded-full">
              <Mountain className="w-4 h-4" />
              厳選宿泊施設
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              長野・鹿教湯温泉＆信州上田 11月・12月に泊まるべき名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              国民保養温泉地の源泉掛け流し、渓流雪見露天、本場信州投じ蕎麦、極上の信州牛会席を備えた名宿を厳選
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 transition hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>★ {h.rating}</span>
                      <span className="text-stone-300">({h.reviews}件)</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-xl text-white">
                      <p className="text-xs text-indigo-200 font-semibold">参考最低料金（1名あたり）</p>
                      <p className="text-lg font-black text-amber-300">{h.price}</p>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md inline-block mb-2">
                          厳選第{h.id}位
                        </span>
                        <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs text-stone-500 flex items-center gap-1 mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                          <span>{h.access}</span>
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                        <p className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-700" />
                          この宿の注目ポイント
                        </p>
                        <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                          {h.highlights.map((hl, hlIdx) => (
                            <li key={hlIdx}>{hl}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 space-y-1">
                          <p className="font-bold text-indigo-900 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-indigo-700" />
                            おすすめ客室
                          </p>
                          <p className="text-stone-600">{h.roomTip}</p>
                        </div>
                        <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100 space-y-1">
                          <p className="font-bold text-amber-900 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-amber-700" />
                            名物グルメ
                          </p>
                          <p className="text-stone-600">{h.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-800 to-slate-900 hover:from-indigo-900 hover:to-slate-950 text-white font-bold text-sm rounded-xl shadow-xs hover:shadow-md transition duration-200"
                      >
                        <span>空室状況・宿泊プランを楽天トラベルで確認</span>
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
        <section className="bg-gradient-to-br from-stone-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-indigo-300" />
            初冬の信州美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の信州上田で味わい尽くす温もり郷土鍋と銘柄牛
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-indigo-400" />
                冬の伝統「信州手打ち投じ蕎麦」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                冷たい新蕎麦を竹編みの「とうじ籠」に入れ、キノコや鶏肉、冬根菜の旨味が凝縮された熱々の醤油出汁鍋にさっとくぐらせる伝統の味。熱々の蕎麦の喉ごしと出汁のコクが冷えた身体に染み渡ります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-indigo-400" />
                最高峰銘柄「信州プレミアム牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                長野県独自の美味しさ基準（オレイン酸含有率と脂肪交雑）をクリアした極上黒毛和牛。口に入れた瞬間に広がる芳醇な香りと、とろけるような滑らかな舌触りは、ステーキやすき焼きで真価を発揮します。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                清流育ちの「信州サーモン＆地酒」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                信州の冷たく清らかな湧水で丹精込めて育てられる信州サーモン。きめ細やかな肉質とクセのない上品な脂が特徴でお造りに最適。上田・真田ゆかりの地酒とともに、冬の夜を優雅に演出します。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-800 text-sm font-bold bg-indigo-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の鹿教湯温泉 交通アクセス＆冬道・防寒対策
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-700" />
                北陸新幹線上田駅・松本駅からのバスアクセス
              </h3>
              <p>
                東京方面からは北陸新幹線上田駅より千曲バス（約50〜60分）、名古屋方面からはJR松本駅より路線バス（約50分）で鹿教湯温泉バスターミナルへ直通します。
              </p>
              <p>
                車を利用する場合は、上信越自動車道（東部湯の丸IC等）から約40分ですが、11月下旬以降は降雪や三才山方面の峠道での路面凍結が発生するため、必ずスタッドレスタイヤを装着してください。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-indigo-700" />
                国民保養温泉地の入浴法と飲泉の楽しみ方
              </h3>
              <p>
                鹿教湯の弱アルカリ性単純温泉は肌に優しく、1日に何度でも安心して湯浴みを楽しめます。内村川沿いの露天風呂では、外気と湯温の心地よいコントラストを味わいながらゆっくり長湯を堪能できます。
              </p>
              <p>
                温泉街にある飲泉所では新鮮な源泉を飲むことができ、身体の内側から胃腸を整える効果が期待できます。入浴後の水分補給として温かい温泉水をいただくのもおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-800 text-sm font-bold bg-indigo-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の長野・鹿教湯温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-indigo-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-stone-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-indigo-300" />
              あわせて読みたい信州の冬雪見温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-indigo-200">
              歴史ある名湯と郷土の温もり鍋・信州牛を堪能する長野県各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-indigo-300 bg-indigo-400/20 px-2 py-0.5 rounded-full inline-block">長野・別所温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
                信州の鎌倉・別所温泉の厄除け名湯と信州牛
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                国宝安楽寺の初冬静寂と外湯めぐり、信州プレミアム牛すき焼きの名宿。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-asama-onsen-matsumoto-castle-snow-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-indigo-300 bg-indigo-400/20 px-2 py-0.5 rounded-full inline-block">長野・浅間温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
                国宝松本城の白銀絶景と浅間温泉の名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                城下町松本の文化薫る奥座敷、弱アルカリ性単純温泉と信州郷土会席。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-indigo-300 bg-indigo-400/20 px-2 py-0.5 rounded-full inline-block">長野・野沢温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
                外湯十三湯めぐりと極上パウダースノー
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                豪雪地帯に湧く熱々の硫黄泉と名物野沢菜新漬け、信州牛すき焼きの冬旅。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
