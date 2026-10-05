import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Snowflake, Mountain, Waves, ShieldCheck, Footprints, Flame, Coffee, Camera
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【12・1月北海道】然別湖＆ぬかびら源泉郷！氷結した湖上の幻の村「しかりべつ湖コタン」氷上露天風呂＆タウシュベツ川橋梁・十勝ハーブ牛名宿5選",
  description: "大雪山国立公園の南端、北海道で最も標高の高い自然湖・然別湖が厚い氷に閉ざされる12〜1月。完全結氷した湖上にわずか60日間だけ現れる幻の村「しかりべつ湖コタン」では、世界唯一の氷上露天風呂やアイスバーが旅人を魅了します。近隣のぬかびら源泉郷では古代ローマ遺跡のようなタウシュベツ川橋梁の白銀絶景と源泉掛け流しの秘湯、十勝ハーブ牛や新得そばなど北の大地の極上美食を堪能できる厳選名宿5選を徹底解説します。",
  keywords: '然別湖コタン ホテル, 然別湖畔温泉ホテル風水, 氷上露天風呂 然別湖, ぬかびら源泉郷 旅館, タウシュベツ川橋梁 冬, 十勝ハーブ牛, サホロリゾート, 十勝川温泉 観月苑, モール温泉, 12月 1月 北海道 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay/"
  },
  openGraph: {
    title: "【12・1月北海道】然別湖＆ぬかびら源泉郷！氷結した湖上の幻の村「しかりべつ湖コタン」氷上露天風呂＆タウシュベツ川橋梁・十勝ハーブ牛名宿5選",
    description: "大雪山国立公園の南端、北海道で最も標高の高い自然湖・然別湖が厚い氷に閉ざされる12〜1月。完全結氷した湖上にわずか60日間だけ現れる幻の村「しかりべつ湖コタン」では、世界唯一の氷上露天風呂やアイスバーが旅人を魅了します。近隣のぬかびら源泉郷では古代ローマ遺跡のようなタウシュベツ川橋梁の白銀絶景と源泉掛け流しの秘湯、十勝ハーブ牛や新得そばなど北の大地の極上美食を堪能できる厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/135963/135963.jpg",
      width: 1200,
      height: 630,
      alt: '氷結した然別湖のしかりべつ湖コタンと氷上露天風呂の湯煙'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12・1月北海道】然別湖＆ぬかびら源泉郷！氷結した湖上の幻の村「しかりべつ湖コタン」氷上露天風呂＆タウシュベツ川橋梁・十勝ハーブ牛名宿5選",
    description: "大雪山国立公園の南端、北海道で最も標高の高い自然湖・然別湖が厚い氷に閉ざされる12〜1月。完全結氷した湖上にわずか60日間だけ現れる幻の村「しかりべつ湖コタン」では、世界唯一の氷上露天風呂やアイスバーが旅人を魅了します。近隣のぬかびら源泉郷では古代ローマ遺跡のようなタウシュベツ川橋梁の白銀絶景と源泉掛け流しの秘湯、十勝ハーブ牛や新得そばなど北の大地の極上美食を堪能できる厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/135963/135963.jpg"]
  }
};

export default function HokkaidoShikaribetsuNukabiraWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "然別湖畔温泉　然別湖畔温泉ホテル風水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/135963/135963.jpg",
              rating: 4.43,
              reviews: 366,
              price: "¥12,100〜",
              access: "ＪＲ石勝線　新得駅からバスで６０分",
              special: "絶景レイクビュー。雄大な大自然に囲まれた、神秘の湖「然別湖」の湖畔に佇むくつろぎの宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135963%2F135963.html",
              story: "然別湖の湖畔に建ち、全客室や大浴場から白銀に凍りつく然別湖と湖上に浮かぶ「しかりべつ湖コタン」の全景を一望できる唯一無二の絶景宿「然別湖畔温泉ホテル風水」。湖面から湯煙が立ち上る展望大浴場と露天風呂には、地下深くから自噴する源泉が掛け流しで注がれ、鉄分と塩分を含む茶褐色のにごり湯が冷え切った体を芯からポカポカに温めてくれます。冬期は客室からコタンのアイスドーム群や夜のライトアップ、頭上に降り注ぐ満天の星空を眺められる特等席。夕食には大雪山の清流で育まれた幻の魚「オショロコマ」の塩焼きや、十勝産黒毛和牛の陶板焼き、地元鹿追産そば粉の手打ち蕎麦など、山と大地の恵みをふんだんに散りばめた心づくしの会席料理を堪能できます。極寒の地だからこそ染み入る温もりに満ちた宿です。",
              roomTip: "レイクビュー和洋室（高層階）。窓の外一面に広がる白銀の然別湖と雪を纏ったくちびる山（天望山）のコントラストが息を呑む美しさ。",
              gourmetTip: "「然別湖名物オショロコマと十勝和牛会席」。清流の冷水で育ったオショロコマの香ばしい塩焼きと、濃厚な肉汁が溢れる十勝和牛が絶品。",
              highlights: [
                "然別湖畔唯一の宿・客室＆展望露天風呂から氷結湖とコタンアイスドーム一望",
                "源泉自噴の茶褐色にごり湯・冷えた体が芯から温まる濃厚な塩化物泉",
                "幻の魚オショロコマ塩焼き会席・冬の満天星空観賞に最高のロケーション"
              ]
            },
            {
              id: 2,
              name: "糠平温泉ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130705/130705.jpg",
              rating: 4.13,
              reviews: 160,
              price: "¥12,100〜",
              access: "帯広駅より路線バスで１時間半",
              special: "源泉掛け流しの温泉宿で、北海道十勝ならではの四季を通した、雄大な景色と、大雪の山里の料理を満喫して下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130705%2F130705.html",
              story: "大雪山系の原生林に抱かれたぬかびら源泉郷の老舗「糠平温泉ホテル」。ぬかびら源泉郷は全旅館が「源泉掛け流し宣言」を行っている全国でも稀少な温泉地で、こちらの宿でも湯量豊富なナトリウム・塩化物・炭酸水素塩泉を一切の加水・加温・循環なしで贅沢に湯船へ注いでいます。無色透明でまろやかな湯は「美肌の湯」として名高く、冬の厳しい乾燥や寒さで疲れた肌を優しく潤してくれます。冬期は古代ローマの水道橋を彷彿とさせる「タウシュベツ川橋梁」のスノーシューツアーの拠点としても最適。夕食には十勝産の厳選豚肉や牛肉、近隣農家から仕入れる冬の根菜を活かした温かい手作り料理が並び、どこか懐かしい山荘のような温もりに心癒やされます。",
              roomTip: "落ち着きある和室。窓からはエゾマツやトドマツの針葉樹林に降り積もる雪景色が見渡せ、運が良ければエゾシカやエゾリスが姿を見せます。",
              gourmetTip: "「十勝大地の恵み会席」。十勝産豚肉の陶板焼きや熱々の鍋料理、上士幌産の豆料理など素朴ながら深い味わいが自慢。",
              highlights: [
                "全浴槽源泉掛け流し宣言・大雪山原生林に囲まれた美肌炭酸水素塩泉",
                "タウシュベツ川橋梁スノーハイク拠点・上士幌産素材の手作り和会席",
                "エゾシカや小鳥が訪れる山荘情緒・静寂を愛する大人の湯治ステイ"
              ]
            },
            {
              id: 3,
              name: "湯宿くったり温泉レイク・イン",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109036/109036.jpg",
              rating: 4.22,
              reviews: 699,
              price: "¥3,000〜",
              access: "新得駅から車で約20分／札幌北IC～高速トマムIC経由：約2時間30分／千歳東IC～高速トマムIC経由：約2時間",
              special: "◆湖畔に佇む隠れ家リゾート◆本格的なサウナ＆温泉あり◆くったり湖を望むサウナ付ヴィラ＆寛ぎのお部屋",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109036%2F109036.html",
              story: "日高山脈の麓、屈足（くったり）湖の湖畔に静かに佇む「湯宿くったり温泉レイク・イン」。雄大な湖と雪原を見渡す絶好のロケーションに加え、近年サウナ愛好家（サウナー）の間で絶大な人気を誇る本格フィンランド式ロウリュサウナを完備しています。雪景色を眺めながらセルフロウリュでしっかり発汗した後は、冬の十勝の冷涼な外気浴で極上の「ととのい」を体験。大浴場には肌触りの滑らかな弱アルカリ性低張性温泉が注がれ、冷えた体をじっくり包み込みます。夕食は新得町名物の「手打ち新得そば」や、地元十勝のブランド豚・牛肉のグリルなど地産地消のこだわりメニュー。冬のアクティビティ後のリフレッシュに最高の隠れ家リゾートです。",
              roomTip: "レイクビュー洋室または和室。静まり返った屈足湖の雪景色と日高山脈の稜線を眺めながら、静謐な読書や休息を楽しめます。",
              gourmetTip: "「新得地鶏と十勝ハーブ牛の陶板焼きコース」。香ばしく焼き上げた新得地鶏の深いコクと、十勝ハーブ牛の柔らかさが舌を喜ばせます。",
              highlights: [
                "屈足湖畔の静寂・本格フィンランド式サウナと雪原外気浴＆弱アルカリ美肌湯",
                "新得地鶏と十勝ハーブ牛の陶板焼き・サウナー絶賛の極上ととのい空間",
                "リーズナブルな価格設定・冬のアクティビティ派に選ばれる快適設備"
              ]
            },
            {
              id: 4,
              name: "サホロリゾートホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10773/10773.jpg",
              rating: 3.29,
              reviews: 295,
              price: "¥9,900〜",
              access: "ＪＲ石勝線新得駅から車で約１５分",
              special: "ベアマウンテンでヒグマを観察！ホテル内のセルフロウリュできるサウナも人気です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10773%2F10773.html",
              story: "十勝平野と日高山脈の間に広がる広大なリゾートエリアに佇み、北欧の山岳リゾートを思わせるクラシカルな気品漂う「サホロリゾートホテル」。ホテルを出ればすぐにパウダースノーが広がる「十勝サホロリゾートスキー場」へアクセスでき、スキーやスノーボード、圧雪車で行く雪山ナイトツアーなど冬のアクティビティを心ゆくまで満喫できます。館内には開放的な吹き抜けの暖炉ラウンジがあり、パチパチと薪がはぜる音を聞きながら過ごす冬の夜はロマンチックそのもの。大浴場「サホロ マイナスイオン風呂」で雪山の疲れを解きほぐした後は、十勝産の新鮮野菜やチーズ、お肉を贅沢に使ったフレンチディナーや和洋ビュッフェに舌鼓を打てます。",
              roomTip: "コンフォートツイン。ゆったりとした広さの客室には大きな窓が配され、白樺の森と白銀のゲレンデを一望できます。",
              gourmetTip: "レストラン「サホロガーデン」のフレンチコース。十勝産ラクレットチーズやエゾシカ肉のローストなど、北欧風の本格料理。",
              highlights: [
                "十勝サホロリゾート直結・暖炉の灯る北欧調ホテル＆極上パウダースノー",
                "十勝産ラクレットチーズ＆フレンチコース・圧雪車ナイトツアーなど体験充実",
                "ファミリーからカップルまで楽しめる広々客室・白樺林の雪景色"
              ]
            },
            {
              id: 5,
              name: "十勝川温泉　観月苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19237/19237.jpg",
              rating: 4.47,
              reviews: 2021,
              price: "¥13,750〜",
              access: "【バス】JR帯広駅より30分（観月苑前下車）｜【お車】帯広駅より20分、音更帯広ICより20分、帯広空港より40分",
              special: "十勝川温泉初！２０２０年５月フィンランド式サウナへリニューアル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19237%2F19237.html",
              story: "十勝川のほとりに建ち、世界でも極めて珍しい植物性温泉「モール温泉」を心ゆくまで堪能できる名宿「十勝川温泉 観月苑」。数億年前の太古の植物が堆積した地層を通って湧き出るモール温泉は、植物由来のフミン酸やフルボ酸を豊富に含み、琥珀色に輝く湯は「天然の化粧水」と呼ばれるほどの極上美肌効果を誇ります。庭園露天風呂からは、冬の十勝川に飛来するオオハクチョウの群れや雄大な十勝富士の山並みを遠望。夕食は十勝の豊かな食文化を体感できる「十勝ビュッフェ」で、オープンキッチンで焼き上げる十勝牛ステーキ、揚げたての天ぷら、十勝産チーズフォンデュやスイーツが食べ放題。然別湖観光の前後に組み合わせる宿泊先としても抜群の人気を誇ります。",
              roomTip: "十勝川ビュー展望風呂付き客室。客室の専用露天風呂にも琥珀色のモール温泉が注がれ、誰にも気兼ねなく至極の湯浴みを満喫。",
              gourmetTip: "「十勝の恵みビュッフェ」。目の前で焼き上げる十勝ハーブ牛ステーキとラクレットチーズ、採れたて冬野菜のせいろ蒸しが大人気。",
              highlights: [
                "世界でも稀少な植物性モール温泉・庭園露天風呂から十勝川の白鳥飛来を一望",
                "オープンキッチン十勝牛ステーキ＆チーズビュッフェ・専用露天付き客室あり",
                "天然の化粧水と称される琥珀色の湯・三世代旅行にも安心の充実設備"
              ]
            }
  ];

  const faqData = [
  {
    "q": "「しかりべつ湖コタン」の開催期間と氷上露天風呂の利用方法は？",
    "a": "例年1月下旬から3月中旬頃まで開催されます（氷の厚さや天候状況により変動あり）。完全結氷した湖上に現れる村には、氷のブロックで作られたアイスバー、アイスチャペル、氷のロッジなどが立ち並びます。名物の「氷上露天風呂」は、氷の湖上に設置された湯船に然別湖畔温泉の源泉が掛け流しで注がれる前代未聞の温泉です。脱衣所も氷のドーム内にあり、見渡す限りの白銀世界の中で湯に浸かる感動は唯一無二です。水着着用での入浴や、時間帯による男女入替制（混浴時間帯・男性専用・女性専用）が設けられています。"
  },
  {
    "q": "幻の橋「タウシュベツ川橋梁」の冬の見どころとアクセス方法は？",
    "a": "旧国鉄士幌線のコンクリート製アーチ橋「タウシュベツ川橋梁」は、糠平湖の水位変動により姿を現したり沈んだりすることから「幻の橋」と呼ばれます。12月〜1月は湖面が完全結氷し、純白の雪原の中に11連のアーチ橋が古代ローマ遺跡のようにそびえ立つ最も幻想的な季節です。冬期は湖面への立ち入りに危険が伴うため、現地のネイチャーガイドが案内するスノーシューツアー（長靴やスノーシューレンタル込み）への参加が強く推奨されます。"
  },
  {
    "q": "冬の十勝・然別湖エリアの気温と必要な防寒具・服装は？",
    "a": "12月から1月にかけての然別湖・ぬかびら源泉郷は、夜間から早朝にかけて氷点下15度〜20度以下に達する日本屈指の極寒エリアです。防風・防寒性に優れた厚手のダウンジャケット（お尻まで隠れる丈推奨）、吸湿発熱インナー、フリースやセーターの重ね着が必須です。また、手袋は防風・防水のスノーグローブ、耳が隠れるニット帽、ネックウォーマー、厚手のウール靴下に加えて、靴底に滑り止めが付いた防寒スノーブーツ（足首まで覆うもの）を必ず着用してください。"
  },
  {
    "q": "帯広空港や新得駅からの冬季アクセスとレンタカー運転の注意点は？",
    "a": "帯広空港から車で約1時間30分、JR帯広駅からは路線バス（北海道拓殖バス）で約1時間40分、新得駅からは車で約45分です。冬期は道道85号（鹿追糠平線）など一部峠道が冬期通行止めになるルートがあるため、事前の道路交通情報の確認が不可欠です。レンタカーを運転する場合は、必ず4WD＋スタッドレスタイヤを選択し、ブラックアイスバーン（黒く凍結した路面）や地吹雪によるホワイトアウトに厳重に注意してください。雪道運転に不安がある方は、帯広駅からの路線バスや送迎バスの利用が安心です。"
  },
  {
    "q": "十勝川温泉の「モール温泉」とはどんな温泉ですか？",
    "a": "十勝川温泉のモール温泉は、植物由来の有機物（フミン酸やフルボ酸など）を豊富に含む世界でも極めて珍しい温泉で、北海道遺産にも認定されています。琥珀色のとろりとしたお湯は弱アルカリ性で、皮脂を適度に落としつつ肌に潤いを与えるため「天然の化粧水」「美人の湯」と称されます。然別湖の氷上露天風呂や極寒ツアーで冷えた体を包み込むと、信じられないほどの滑らかさと温まりを実感できます。"
  },
  {
    "q": "冬の十勝で味わえるおすすめグルメやご当地食材は何ですか？",
    "a": "豊かな大地が広がる十勝は日本屈指の食糧基地です。冬のイチオシはハーブを食べて健康に育った「十勝ハーブ牛」のステーキやすき焼き、濃厚なコクがたまらない「十勝ラクレットチーズ」のチーズフォンデュ、大雪山の清流で育つ幻の淡水魚「オショロコマ」、そして新得町の風味豊かな「手打ち新得そば」です。また、十勝名物の「豚丼」や、十勝川の温泉熱を利用して作られるモール温泉豚・スイーツも見逃せません。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay"
        },
        "headline": "【12・1月北海道】然別湖＆ぬかびら源泉郷！氷結した湖上の幻の村「しかりべつ湖コタン」氷上露天風呂＆タウシュベツ川橋梁・十勝ハーブ牛名宿5選",
        "description": "大雪山国立公園の南端、北海道で最も標高の高い自然湖・然別湖が厚い氷に閉ざされる12〜1月。完全結氷した湖上にわずか60日間だけ現れる幻の村「しかりべつ湖コタン」では、世界唯一の氷上露天風呂やアイスバーが旅人を魅了します。近隣のぬかびら源泉郷では古代ローマ遺跡のようなタウシュベツ川橋梁の白銀絶景と源泉掛け流しの秘湯、十勝ハーブ牛や新得そばなど北の大地の極上美食を堪能できる厳選名宿5選を徹底解説します。",
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
            "name": "然別湖＆ぬかびら源泉郷冬特集",
            "item": "https://croud-travel.com/winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay"
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
      <header className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-medium">
            <Snowflake className="w-4 h-4 text-sky-300" />
            <span>12月・1月冬の北海道極寒絶景特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            然別湖＆ぬかびら源泉郷！<br className="hidden sm:inline" />
            氷結した湖上の幻の村「しかりべつ湖コタン」氷上露天風呂＆タウシュベツ川橋梁・十勝ハーブ牛名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            大雪山国立公園の南端に位置し、北海道で最も標高の高い自然湖（標高810m）である然別湖。マイナス20度を下回る厳冬期、湖面が完全に氷結すると、雪と氷のブロックだけで作られた幻の村「しかりべつ湖コタン」がわずか60日間だけ姿を現します。厚い氷の上に湯煙を上げる奇跡の氷上露天風呂、アイスバー、そして白銀の雪原にたたずむ古代ローマ遺跡のようなタウシュベツ川橋梁。全館源泉掛け流しのぬかびら温泉や琥珀色のモール温泉、極上の十勝ハーブ牛を味わう冬の冒険旅へご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
              <span>旬期：12月中旬〜3月上旬（コタン1月〜）</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-sky-400 shrink-0" />
              <span>氷上露天風呂＆アイスバー</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-sky-400 shrink-0" />
              <span>タウシュベツ川橋梁冬景色</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-sky-400 shrink-0" />
              <span>源泉掛け流し＆モール温泉</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-sky-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Arctic Wonderland Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-sky-500 shrink-0" />
              マイナス30度の奇跡！雪と氷が織りなす大雪山国立公園の厳冬のアート
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              北海道の屋根と呼ばれる大雪山連峰の南東麓、標高810メートルに位置する「然別湖（しかりべつこ）」。周囲を原生林に囲まれたこのカルデラ湖は、12月に入ると急速に氷結が進み、1月には厚さ数十センチから1メートル近い頑丈な氷のキャンバスへと変貌を遂げます。この氷上に出現するのが、40年以上の歴史を紡いできた「しかりべつ湖コタン」です。
            </p>
            <p>
              村にある建物（イグルー）は、すべて湖の純粋な氷と雪だけで築かれます。青く澄んだ氷のブロックを積み上げた「アイスバー」では氷のグラスでカクテルを傾け、「アイスチャペル」では幻想的なキャンドルの光が瞬きます。そして何より世界中の旅人を驚嘆させるのが「氷上露天風呂」。凍りついた湖の真ん中に設置された湯船から立ち上る湯煙、湯船の縁に付着する純白の霧氷、そして夜空に広がる無数の天の川。氷点下の冷気と熱い温泉のコントラストは、一度体験したら生涯忘れられない感動をもたらします。
            </p>
            <p>
              然別湖から峠を越えた上士幌町に広がる「ぬかびら源泉郷」は、すべての旅館が加水・加温・循環なしの完全源泉掛け流しを提供する名湯の聖地。冬には糠平湖に架かる旧国鉄士幌線の「タウシュベツ川橋梁」が雪原の中に浮かび上がり、古代遺跡のような荘厳な姿を現します。大自然の猛威と温もり、極限の美しさが共存する冬の十勝・東大雪の旅は、まさに大人のための究極のアドベンチャーです。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-sky-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-sky-500 shrink-0" />
              然別湖＆ぬかびら・十勝で泊まりたい冬の厳選宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。絶景レイクビュー、源泉掛け流し秘湯、モール温泉、冬サウナを誇る名宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <article key={h.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold">
                        第{h.id}位
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1 text-sky-600 font-bold text-sm">
                        <Star className="w-4 h-4 fill-sky-500 text-sky-500" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                      </div>
                      <div className="text-slate-600 font-medium">
                        目安: <span className="text-slate-900 font-bold text-sm">{h.price}</span>/人
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-sky-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        {h.access}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-700 bg-sky-50/50 p-2.5 rounded-lg border border-sky-100/60">
                        <strong className="text-sky-800 block mb-0.5">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div className="text-xs text-slate-700 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/60">
                        <strong className="text-amber-800 block mb-0.5">冬の料理のこだわり:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">宿泊ハイライト</h4>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all gap-1.5"
                      >
                        <span>空室・宿泊プランを楽天トラベルで確認</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 冬の見どころ＆アクティビティ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-sky-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Sightseeing Highlights</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-sky-500 shrink-0" />
              厳冬期にしか出会えない奇跡！然別湖・ぬかびら・十勝の必訪絶景
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="border-l-4 border-sky-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                1. しかりべつ湖コタンの「アイスバー」と「氷のグラス」
              </h3>
              <p className="text-xs sm:text-sm">
                雪のドーム内に広がる「アイスバー」は、カウンターも椅子もすべて氷でできています。自ら削って作るオリジナルの「氷のグラス」に注がれるカクテルやソフトドリンクは、氷点下の室内でも冷たさを保ち、青白く照らされた氷の空間で味わう一杯は格別の体験。夜にはキャンドルが灯り、静謐でロマンチックな大人のバータイムへと表情を変えます。
              </p>
            </div>

            <div className="border-l-4 border-sky-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                2. 氷結糠平湖にそびえる「タウシュベツ川橋梁」スノートレッキング
              </h3>
              <p className="text-xs sm:text-sm">
                発電用ダム湖である糠平湖に架かる11連の美しいアーチ橋。冬には湖全体が厚い氷で覆われ、白銀の雪原をスノーシューで歩いて橋の真下までアプローチできます。経年劣化と氷圧によって削られたコンクリートの質感は、まるで古代ローマの水道橋のような荘厳さを醸し出します。崩落が進んでおり「今しか見られない絶景」として世界中から写真愛好家が訪れます。
              </p>
            </div>

            <div className="border-l-4 border-sky-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                3. 十勝川の白鳥飛来地と豊頃町大津海岸の「ジュエリーアイス」
              </h3>
              <p className="text-xs sm:text-sm">
                十勝川温泉のすぐそばを流れる十勝川には、冬期に数百羽のオオハクチョウが越冬のために飛来し、優美に羽を休める姿を間近に観察できます。また車で約1時間の太平洋沿岸（豊頃町大津海岸）では、十勝川の氷が海に流出し、波に洗われてクリスタルのように丸みを帯びて砂浜に打ち上げられる自然現象「ジュエリーアイス（1月中旬〜2月）」が発生。朝日に照らされて黄金色に輝く氷の宝石は息を呑む絶景です。
              </p>
            </div>

            <div className="border-l-4 border-sky-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                4. 十勝サホロリゾートの白銀パウダースノーと圧雪車ナイトツアー
              </h3>
              <p className="text-xs sm:text-sm">
                内陸性気候のため湿り気が極めて少なく、サラサラとした極上のパウダースノーを楽しめるサホロリゾート。日高山脈の雄大な景観を望む全21コースのゲレンデに加え、夜にはキャタピラ付きの巨大な圧雪車に乗って夜の山頂を目指す「圧雪車ナイトツアー」も人気。満天の星空と十勝平野の夜景を見下ろす特別なアクティビティが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 冬の美食 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-sky-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Tokachi Winter Gourmet</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-sky-500 shrink-0" />
              極寒の大地が育む至福の美味！十勝ハーブ牛・ラクレットチーズ・幻のオショロコマ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-sky-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                旨味凝縮「十勝ハーブ牛」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                ハーブを配合した飼料でストレスなく育てられた十勝のブランド黒毛和牛。赤身の旨味が非常に濃く、適度なサシが舌の上でとろけます。陶板焼きやステーキ、熱々のすき焼きで味わえば、寒さを忘れさせる豊かなエネルギーが体に満ちていきます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-sky-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                熱々とろ〜り「十勝チーズ料理」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                日本一の酪農王国・十勝。冬のご馳走といえば、ラクレットチーズをとろとろに溶かして蒸したてジャガイモやソーセージにかけるラクレット料理や、濃厚なチーズフォンデュ。芳醇なミルクの香りとコクが冷えた体を優しく温めてくれます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-sky-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                幻の渓流魚「オショロコマ」と新得そば
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                大雪山の標高の高い冷水域にしか生息しないイワナの仲間「オショロコマ」。然別湖周辺でのみ養殖が許されており、じっくり炭火で焼いた塩焼きは淡白ながら上品な甘みが絶品。新得町特産の手打ち新得そばとともに味わうのが伝統の贅沢です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 防寒装備＆雪道運転ガイド */}
        <section className="bg-sky-50/60 rounded-2xl p-6 sm:p-10 border border-sky-100 space-y-6">
          <div className="border-b border-sky-200/60 pb-4">
            <span className="text-sky-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Cold Weather Equipment & Safety</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0" />
              氷点下20度の世界を楽しむ！万全の防寒レイヤリング＆冬道ドライブの心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="bg-white p-5 rounded-xl border border-sky-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-sky-600" />
                服装の基本は「3層レイヤリング」
              </h3>
              <p>
                しかりべつ湖コタンやタウシュベツ散策では、肌着（吸湿発熱インナー）、中間着（フリースやインナーダウン）、外層（防風・防水の厚手ダウンパーカ）の3層構造が基本。首・手首・足首の「3つの首」を温めるため、ネックウォーマー、防風スノーグローブ、厚手ウールソックスを着用。足元は底が厚く滑り止めが効いたスノーブーツ（足首まであるハイカット）が必須です。カイロはスマホのバッテリー保温用にも用意しておきましょう。
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-sky-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-600" />
                レンタカー運転とホワイトアウト対策
              </h3>
              <p>
                帯広空港や新得駅でレンタカーを利用する際は、必ず4WD＋最新スタッドレスタイヤを指定してください。然別湖へ向かう山道（道道85号）は急カーブや圧雪凍結路面が続きます。日没（16時頃）以降は気温が一気に下がりブラックアイスバーンになるため、夕方前の宿到着を計画しましょう。強風による地吹雪で視界ゼロ（ホワイトアウト）になった場合は、ハザードランプを点灯して無理な走行を避けてください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-sky-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-sky-400 shrink-0" />
              氷上露天風呂とタウシュベツ橋梁を巡る2泊3日完全満喫コース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-sky-300 text-lg">
                <span className="bg-sky-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>帯広到着・新得そば＆然別湖コタンの氷上露天風呂へ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> とかち帯広空港またはJR帯広駅に到着。レンタカーで鹿追・新得方面へドライブ。
                </p>
                <p>
                  <strong>12:45</strong> 新得町の手打ち蕎麦屋で名物の「温かい地鶏ごぼうそば」の昼食。
                </p>
                <p>
                  <strong>14:30</strong> 然別湖畔温泉ホテル風水へチェックイン。防寒着に着替えてすぐ目の前の然別湖上へ。
                </p>
                <p>
                  <strong>15:30</strong> 「しかりべつ湖コタン」の氷上露天風呂へ！白銀の湖面から湧き出る湯に浸かり、夕暮れに染まる空を眺める。
                </p>
                <p>
                  <strong>17:00</strong> アイスバーで氷のグラスに注がれた特製カクテルを味わう。
                </p>
                <p>
                  <strong>18:30</strong> 宿で自噴源泉の茶褐色にごり湯に浸かり、オショロコマ塩焼きと十勝牛会席に舌鼓。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-sky-300 text-lg">
                <span className="bg-sky-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>タウシュベツ川橋梁スノーハイクとぬかびら源泉掛け流し湯</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:30</strong> 朝の澄んだ空気の中、糠平湖へ移動。現地ネイチャーガイドと合流。
                </p>
                <p>
                  <strong>09:30</strong> スノーシューを履いて完全結氷した糠平湖へ。「タウシュベツ川橋梁」の足元までスノートレッキング。
                </p>
                <p>
                  <strong>12:30</strong> 上士幌町のカフェで十勝牛バーガーや熱々のスープカレーランチ。
                </p>
                <p>
                  <strong>14:30</strong> ぬかびら源泉郷または十勝川温泉の宿へチェックイン。
                </p>
                <p>
                  <strong>16:00</strong> 源泉掛け流しの秘湯、または琥珀色の植物性モール温泉で冷えた体を極上に潤す。
                </p>
                <p>
                  <strong>18:30</strong> オープンキッチンで焼き上げる十勝ハーブ牛ステーキとラクレットチーズビュッフェを満喫。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-sky-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の然別湖＆ぬかびら・十勝旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-sky-600 font-extrabold shrink-0">Q.</span>
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
            <span className="text-sky-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！北海道の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-sky-400 block mb-1">十勝川温泉冬特集</span>
              <span className="font-bold text-white block">十勝川温泉！奇跡のモール温泉と白鳥飛来・十勝牛名宿</span>
            </Link>

            <Link 
              href="/winter-hokkaido-biei-furano-bluepond-lightup-tokachidake-onsen-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-sky-400 block mb-1">美瑛・富良野冬特集</span>
              <span className="font-bold text-white block">白銀の青い池ライトアップ＆十勝岳温泉雪見露天名宿</span>
            </Link>

            <Link 
              href="/winter-niseko-powder-snow-ski-resort-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-sky-400 block mb-1">ニセコ冬特集</span>
              <span className="font-bold text-white block">世界屈指のパウダースノー！ニセコ極上スキーリゾート名宿</span>
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
