import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Sun, Mountain, Building, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月岡山】雲海に浮かぶ天空の山城・備中松山城＆美星町満天星空！幻の千屋牛すき焼きを堪能する名宿5選",
  description: "冬の岡山・高梁＆新見・美星町は、標高430mの臥牛山頂に佇む現存天守「備中松山城」が一面の白い霧海に浮かび上がる年間最大の絶景シーズン。早朝の雲海展望台から拝む奇跡の天空の山城、ベンガラ色の格子と赤銅色石州瓦が連なる重要伝統的建造物群「吹屋ふるさと村」、そして国際ダークスカイ協会認定「美星町」の冬の満天星空。日本最古の蔓牛の血統を継ぐ幻の黒毛和牛「千屋牛」の極上すき焼きや熱々の郷土料理に舌鼓を打ち、冬の静けさに抱かれる厳選名宿5選を徹底解説します。",
  keywords: '備中松山城 雲海, 高梁 ホテル, 備中松山城 天空の城, 美星町 星空, 千屋牛 すき焼き, 吹屋ふるさと村, 高梁国際ホテル, 新見 ホテル, 11月 12月 1月 岡山 観光',
  alternates: {
    canonical: 'https://croud-travel.com/winter-okayama-takahashi-bitchu-matsuyama-castle-unkai-chiyagyu-stay'
  },
  openGraph: {
    title: "【11・12・1月岡山】雲海に浮かぶ天空の山城・備中松山城＆美星町満天星空！幻の千屋牛すき焼きを堪能する名宿5選",
    description: "冬の岡山・高梁＆新見・美星町は、標高430mの臥牛山頂に佇む現存天守「備中松山城」が一面の白い霧海に浮かび上がる年間最大の絶景シーズン。早朝の雲海展望台から拝む奇跡の天空の山城、ベンガラ色の格子と赤銅色石州瓦が連なる重要伝統的建造物群「吹屋ふるさと村」、そして国際ダークスカイ協会認定「美星町」の冬の満天星空。日本最古の蔓牛の血統を継ぐ幻の黒毛和牛「千屋牛」の極上すき焼きや熱々の郷土料理に舌鼓を打ち、冬の静けさに抱かれる厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-okayama-takahashi-bitchu-matsuyama-castle-unkai-chiyagyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '備中松山城の雲海と美星町の星空' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月岡山】雲海に浮かぶ天空の山城・備中松山城＆美星町満天星空！幻の千屋牛すき焼きを堪能する名宿5選",
    description: "冬の岡山・高梁＆新見・美星町は、標高430mの臥牛山頂に佇む現存天守「備中松山城」が一面の白い霧海に浮かび上がる年間最大の絶景シーズン。早朝の雲海展望台から拝む奇跡の天空の山城、ベンガラ色の格子と赤銅色石州瓦が連なる重要伝統的建造物群「吹屋ふるさと村」、そして国際ダークスカイ協会認定「美星町」の冬の満天星空。日本最古の蔓牛の血統を継ぐ幻の黒毛和牛「千屋牛」の極上すき焼きや熱々の郷土料理に舌鼓を打ち、冬の静けさに抱かれる厳選名宿5選を徹底解説します。"
  }
};

export default function OkayamaTakahashiUnkaiPage() {
  const hotels = [
            {
              id: 1,
              name: "高梁国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39582/39582.jpg",
              rating: 4.09,
              reviews: 404,
              price: "¥6,600〜",
              access: "ＪＲ　備中高梁駅より徒歩３分",
              special: "【高梁観光・出張に便利♪】JR備中高梁駅徒歩3分！駐車場70台＆Wi-Fi無料♪備中松山城観光にも◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39582%2F39582.html",
              story: "JR備中高梁駅から徒歩約3分、城下町の武家屋敷や歴史ある町並みへの散策拠点として最高の立地を誇る「高梁国際ホテル」。落ち着きと気品ある館内は、備中松山城の早朝雲海鑑賞に出発する旅人の定宿として絶大な信頼を集めています。客室は広々として機能的であり、冬の寒さに備えた暖かなベッドと快適な設備を完備。館内レストランでは、地元高梁産の新鮮な冬野菜や岡山県産黒毛和牛を用いた洋食コースや和会席が楽しめ、早朝チェックアウトにも柔軟に対応してくれる温かなサービスが冬の絶景ハントを力強く支えます。",
              roomTip: "デラックスツインルーム。城下町の山並みと落ち着いた街並みを望むゆとりの客室。早朝の雲海観賞に備えて静かに快眠できる空間。",
              gourmetTip: "「岡山県産牛ステーキディナー＆高梁野菜朝食」。柔らかなブランド牛の旨みと、地元農家が育てる滋味豊かな冬根菜の温かいスープ。",
              highlights: [
                "JR備中高梁駅徒歩3分・城下町散策の拠点・早朝の雲海展望台へ車約20分の好立地",
                "岡山県産牛ステーキディナー＆高梁の地元農家直送冬野菜の温かい朝食スープ",
                "現存天守唯一の山城・備中松山城と猫城主さんじゅーろーに会う旅"
              ]
            },
            {
              id: 2,
              name: "新見　グランドホテルみよしや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9151/9151.jpg",
              rating: 4.17,
              reviews: 438,
              price: "¥5,500〜",
              access: "『JR新見駅』より徒歩1分、中国道『新見IC』より1km",
              special: "新見駅に１番近く、岡山県新見市の中心にありビジネスにも観光にも　洋室はシモンズベッドにデュベスタイル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9151%2F9151.html",
              story: "JR新見駅前から徒歩約1分に位置する「新見 グランドホテルみよしや」は、日本最古の蔓牛（つるうし）として名高い「千屋牛（ちやぎゅう）」の本場で、その極上の味を堪能できる老舗ホテル。澄み切った清流と澄んだ空気の中で育てられた千屋牛は、細やかな霜降りと赤身の芳醇なコクが格別。冬の夕食では、千屋牛の贅沢なすき焼きやしゃぶしゃぶ、ステーキを心ゆくまで味わえる名物プランが揃います。新見や高梁、吹屋ふるさと村を巡る冬のドライブの拠点としても抜群の安心感を誇ります。",
              roomTip: "和室および広めの洋室ツイン。畳の上で足を伸ばしてくつろげる空間があり、冬の冷えた身体を温かく包み込んでくれます。",
              gourmetTip: "「本場・千屋牛すき焼き会席」。美しい霜降りの千屋牛を特製の割り下で煮込み、濃厚な地元生卵にくぐらせて味わう至福の逸品。",
              highlights: [
                "JR新見駅徒歩1分・幻の黒毛和牛「千屋牛」本場・贅沢すき焼き会席プラン",
                "日本最古の蔓牛「千屋牛」の濃厚な霜降りと甘辛割り下が絡む本場すき焼き",
                "吹屋ふるさと村ベンガラ格子巡りや新見鍾乳洞へのドライブに便利"
              ]
            },
            {
              id: 3,
              name: "高梁ファイブシーズホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/193515/193515.jpg",
              rating: 3.71,
              reviews: 89,
              price: "¥2,500〜",
              access: "ＪＲ伯備線　備中高梁駅より徒歩約２分・岡山自動車道賀陽ICより車で約15分",
              special: "ビジネスや観光に便利！コスパ抜群ホテルです★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193515%2F193515.html",
              story: "高梁市街地の国道沿いに位置し、リーズナブルな価格設定と機能的なサービスで高いリピート率を誇る「高梁ファイブシーズホテル」。備中松山城雲海展望台まで車で約20分と至近であり、夜明け前の早朝出発を予定する絶景写真愛好家やアクティブな一人旅・カップルに最適な拠点です。全館Wi-Fi完備、24時間出入り可能で、無料の軽朝食サービスも用意。清潔な客室には快適なベッドと個別エアコンが整い、余計な気兼ねなくマイペースに冬の天空の山城探訪に専念できます。",
              roomTip: "スタンダードダブル・ツイン。コンパクトながら効率的な動線と清潔なベッド。早朝アラームをセットして雲海に備える安心ステイ。",
              gourmetTip: "「近隣名店でのインディアントマト焼そば＆地酒」。宿周辺の高梁ご当地グルメ店で、トマトとカレー風味が食欲をそそる熱々焼そばを堪能。",
              highlights: [
                "雲海アタックに最適なリーズナブル宿・24時間出入り可能・無料Wi-Fi完備",
                "周辺名物グルメ探訪・名物インディアントマト焼そば＆奥備中の地酒",
                "早朝の絶景写真撮影に専念できるスマートステイ・一人旅にも安心"
              ]
            },
            {
              id: 4,
              name: "サントピア岡山総社",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/105969/105969.jpg",
              rating: 3.90,
              reviews: 624,
              price: "¥7,590〜",
              access: "駐車場無料！岡山総社ICより車で20分　倉敷ICより車で20分　【最上稲荷まで車約30分／総社宮まで車約15分】",
              special: "◆Wi-Fi（無料）　◆駐車場（無料）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105969%2F105969.html",
              story: "総社市街の高台に広がり、雄大な吉備路のパノラマを一望できる複合リゾート「サントピア岡山総社」。館内には広々とした大浴場や露天風呂、サウナが完備されており、冬の冷たい風に包まれた後の温浴はまさに極楽。冬の夕食には、岡山県産の厳選和牛や瀬戸内の旬魚、冬野菜を美しく盛り付けた本格会席が振る舞われます。高梁・備中松山城や美星町の星空スポットへも車で快適にアクセスでき、リゾートならではの開放感と行き届いたサービスを満喫できます。",
              roomTip: "パノラマビュー和洋室。総社平野の夜景や朝霧を見下ろす開放的な眺望。家族やグループでもゆったり寛げる広々設計。",
              gourmetTip: "「吉備路味覚会席＆岡山黒毛和牛陶板焼き」。ジューシーな岡山牛と冬の温かい小鍋仕立て、料理長こだわりの季節の創作和食。",
              highlights: [
                "総社の丘の上に建つリゾートホテル・美肌温泉大浴場＆サウナで芯までポカポカ",
                "岡山県産黒毛和牛の陶板焼き会席＆冬の旬魚・料理長特製創作ディナー",
                "吉備路パノラマビューの客室・家族やカップルでの冬リフレッシュに最適"
              ]
            },
            {
              id: 5,
              name: "吉備高原リゾートホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12654/12654.jpg",
              rating: 4.23,
              reviews: 272,
              price: "¥7,070〜",
              access: "岡山空港より車で約20分／[E73]岡山道 賀陽ICより約15分／岡山市内より約40分／JR岡山駅より中鉄バスで約60分",
              special: "豊かな自然と澄んだ空気に囲まれた吉備高原。岡山県の食材を使用した自慢の料理をお楽しみください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12654%2F12654.html",
              story: "標高約300mの吉備高原の中心都市「きびプラザ」内に位置する「吉備高原リゾートホテル」。世界的建築家が手掛けた円形広場に隣接し、自然豊かな高原の静寂とアートな雰囲気が融合した上質空間です。冬の澄み切った夜には、街明かりの少ない高原ならではの美しい星空が頭上に広がり、美星町の星空観測ドライブとあわせてロマンチックなひとときを過ごせます。広々とした客室と落ち着いたレストランでの地元食材を活かした料理が、心洗われる高原ステイを演出します。",
              roomTip: "デラックスツイン（バルコニー付き）。高原の澄んだ空気を吸い込めるバルコニーとゆったりとしたベッド。静けさに包まれたリトリート空間。",
              gourmetTip: "「高原の旬彩ディナー」。吉備中央町産の新鮮な高原野菜や銘柄ポーク、温かいポタージュスープで身体を内側から癒やす料理。",
              highlights: [
                "吉備高原の自然に囲まれたアート建築ホテル・街明かりのない澄んだ冬星空",
                "高原野菜と銘柄ポークの温野菜ディナー・澄んだ空気の中で楽しむ美食",
                "美星町の星空保護区へのナイトドライブにもアクセス良好な高原の隠れ家"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）の備中松山城で「雲海に浮かぶ天空の城」が見られる条件や時間帯は？",
    "a": "備中松山城の雲海は、9月下旬から4月上旬にかけて発生しますが、最も発生率が高く濃密な雲海が現れるのが11月上旬から1月中旬の冬期です。発生の条件は「前日の昼と当日の早朝の寒暖差が大きいこと（放射冷却）」「風がほとんどない穏やかな晴天であること」「適度な湿度があること」です。観賞時間帯は夜明け前の午前6時半頃から午前8時頃まで。日の出とともに朝霧が金色に輝き、標高430mの臥牛山頂に佇む白壁の天守が雲海の上に孤島のように浮かび上がる光景は、息をのむ神々しさです。最高のアングルは城の北東側にある「備中松山城雲海展望台」です。"
  },
  {
    "q": "備中松山城の歴史的価値と、城内へのアクセス・登城の注意点は？",
    "a": "備中松山城は天和3年（1683年）水谷勝宗によって修築された城郭で、日本全国に12基しか残っていない「現存天守」の中で、唯一の山城（標高430m）です。天守、二重櫓、三光櫓跡の土塀が国指定重要文化財。中世の山城の要害性と近世城郭の美しさを兼ね備えています。また、人懐っこい元野良猫の「猫城主 さんじゅーろー」が天守周辺を巡回しており観光客に大人気です。登城時はふいご峠駐車場から約20分（約700m）の急な石段・山道を登るため、歩きやすいスニーカーや登山靴、防寒具が必須です。冬の朝は石段が凍結することもあるため足元に十分注意してください。"
  },
  {
    "q": "幻の黒毛和牛「千屋牛（ちやぎゅう）」とは？特徴やおすすめの食べ方は？",
    "a": "千屋牛は岡山県新見市千屋地区で育まれるブランド黒毛和牛で、「日本最古の蔓牛（血統を守り継ぐ牛）」として知られる竹の谷蔓（たけのたにつる）の系統を引く全国の和牛のルーツとも言える幻の牛肉です。出荷頭数が年間数百頭と極めて少なく、岡山県外にはほとんど出回らない希少価値を誇ります。その肉質はきめ細やかな霜降りと良質な脂の甘み、赤身の深いコクが特徴。冬の冷え込む夜には、特製の割り下で煮て地元の新鮮な卵を絡める「すき焼き」や、肉本来の旨みをダイレクトに味わう「サーロインステーキ」「しゃぶしゃぶ」で堪能するのが最高です。"
  },
  {
    "q": "吹屋ふるさと村の魅力と、美星町の冬の星空観測の楽しみ方は？",
    "a": "高梁市成羽町にある「吹屋（ふきや）ふるさと村」は、江戸時代から明治にかけて日本一の生産量を誇った赤色顔料「ベンガラ（酸化鉄）」の富によって築かれた鉱山町です。赤銅色の石州瓦とベンガラ色（赤褐色）の格子で統一された町並みは、国の重要伝統的建造物群保存地区に選定。冬の澄んだ青空と赤い町並みのコントラストは息をのむ美しさです。また井原市「美星町（びせいちょう）」は、アジアで初めて国際ダークスカイ協会から「星空保護区（コミュニティ部門）」に認定された聖地。冬は空気が乾燥して大気中の水蒸気が極限まで減るため、頭上一面に零れ落ちるような満天の星空や冬の大三角を鮮明に観測できます。"
  },
  {
    "q": "冬の高梁・新見・美星町を満喫するおすすめの1泊2日絶景モデルコースは？",
    "a": "1日目はJR備中高梁駅に到着後、城下町の武家屋敷通りを散策。午後は成羽町の「吹屋ふるさと村」へドライブし、ベンガラ染め体験や旧片山家住宅を見学。夕方に高梁市街または新見の宿へチェックイン。幻の千屋牛すき焼きに舌鼓を打ち、夜は美星町へナイトドライブして満天の冬星空を観測。2日目は早朝5時半に宿を出発し、「備中松山城雲海展望台」へ。夜明けの雲海に浮かぶ天空の山城を撮影した後、ふいご峠から本丸へ登城して猫城主さんじゅーろーと対面。下山後は高梁ご当地グルメのインディアントマト焼そばを味わい帰路へ着く、絶景尽くしの黄金プランです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.com' },
          { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.com/features' },
          { '@type': 'ListItem', 'position': 3, 'name': '備中松山城雲海・美星町星空と千屋牛名宿', 'item': 'https://croud-travel.com/winter-okayama-takahashi-bitchu-matsuyama-castle-unkai-chiyagyu-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '備中松山城・吹屋ふるさと村・高梁市',
        'description': "冬の岡山・高梁＆新見・美星町は、標高430mの臥牛山頂に佇む現存天守「備中松山城」が一面の白い霧海に浮かび上がる年間最大の絶景シーズン。早朝の雲海展望台から拝む奇跡の天空の山城、ベンガラ色の格子と赤銅色石州瓦が連なる重要伝統的建造物群「吹屋ふるさと村」、そして国際ダークスカイ協会認定「美星町」の冬の満天星空。日本最古の蔓牛の血統を継ぐ幻の黒毛和牛「千屋牛」の極上すき焼きや熱々の郷土料理に舌鼓を打ち、冬の静けさに抱かれる厳選名宿5選を徹底解説します。",
        'touristType': ['歴史探訪', '絶景鑑賞', '雲海観測', '星空鑑賞', '冬の美食']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "冬（11月〜1月）の備中松山城で「雲海に浮かぶ天空の城」が見られる条件や時間帯は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "備中松山城の雲海は、9月下旬から4月上旬にかけて発生しますが、最も発生率が高く濃密な雲海が現れるのが11月上旬から1月中旬の冬期です。発生の条件は「前日の昼と当日の早朝の寒暖差が大きいこと（放射冷却）」「風がほとんどない穏やかな晴天であること」「適度な湿度があること」です。観賞時間帯は夜明け前の午前6時半頃から午前8時頃まで。日の出とともに朝霧が金色に輝き、標高430mの臥牛山頂に佇む白壁の天守が雲海の上に孤島のように浮かび上がる光景は、息をのむ神々しさです。最高のアングルは城の北東側にある「備中松山城雲海展望台」です。"
            }
          },
          {
            '@type': 'Question',
            'name': "備中松山城の歴史的価値と、城内へのアクセス・登城の注意点は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "備中松山城は天和3年（1683年）水谷勝宗によって修築された城郭で、日本全国に12基しか残っていない「現存天守」の中で、唯一の山城（標高430m）です。天守、二重櫓、三光櫓跡の土塀が国指定重要文化財。中世の山城の要害性と近世城郭の美しさを兼ね備えています。また、人懐っこい元野良猫の「猫城主 さんじゅーろー」が天守周辺を巡回しており観光客に大人気です。登城時はふいご峠駐車場から約20分（約700m）の急な石段・山道を登るため、歩きやすいスニーカーや登山靴、防寒具が必須です。冬の朝は石段が凍結することもあるため足元に十分注意してください。"
            }
          },
          {
            '@type': 'Question',
            'name': "幻の黒毛和牛「千屋牛（ちやぎゅう）」とは？特徴やおすすめの食べ方は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "千屋牛は岡山県新見市千屋地区で育まれるブランド黒毛和牛で、「日本最古の蔓牛（血統を守り継ぐ牛）」として知られる竹の谷蔓（たけのたにつる）の系統を引く全国の和牛のルーツとも言える幻の牛肉です。出荷頭数が年間数百頭と極めて少なく、岡山県外にはほとんど出回らない希少価値を誇ります。その肉質はきめ細やかな霜降りと良質な脂の甘み、赤身の深いコクが特徴。冬の冷え込む夜には、特製の割り下で煮て地元の新鮮な卵を絡める「すき焼き」や、肉本来の旨みをダイレクトに味わう「サーロインステーキ」「しゃぶしゃぶ」で堪能するのが最高です。"
            }
          },
          {
            '@type': 'Question',
            'name': "吹屋ふるさと村の魅力と、美星町の冬の星空観測の楽しみ方は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "高梁市成羽町にある「吹屋（ふきや）ふるさと村」は、江戸時代から明治にかけて日本一の生産量を誇った赤色顔料「ベンガラ（酸化鉄）」の富によって築かれた鉱山町です。赤銅色の石州瓦とベンガラ色（赤褐色）の格子で統一された町並みは、国の重要伝統的建造物群保存地区に選定。冬の澄んだ青空と赤い町並みのコントラストは息をのむ美しさです。また井原市「美星町（びせいちょう）」は、アジアで初めて国際ダークスカイ協会から「星空保護区（コミュニティ部門）」に認定された聖地。冬は空気が乾燥して大気中の水蒸気が極限まで減るため、頭上一面に零れ落ちるような満天の星空や冬の大三角を鮮明に観測できます。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の高梁・新見・美星町を満喫するおすすめの1泊2日絶景モデルコースは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "1日目はJR備中高梁駅に到着後、城下町の武家屋敷通りを散策。午後は成羽町の「吹屋ふるさと村」へドライブし、ベンガラ染め体験や旧片山家住宅を見学。夕方に高梁市街または新見の宿へチェックイン。幻の千屋牛すき焼きに舌鼓を打ち、夜は美星町へナイトドライブして満天の冬星空を観測。2日目は早朝5時半に宿を出発し、「備中松山城雲海展望台」へ。夜明けの雲海に浮かぶ天空の山城を撮影した後、ふいご峠から本丸へ登城して猫城主さんじゅーろーと対面。下山後は高梁ご当地グルメのインディアントマト焼そばを味わい帰路へ着く、絶景尽くしの黄金プランです。"
            }
          }
        ]
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-amber-300" />
            11月・12月・1月冬の特選旅｜岡山・高梁＆備中松山城・美星町
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            雲海に浮かぶ天空の山城・備中松山城＆美星町満天星空！<br className="hidden sm:inline" />
            幻の千屋牛すき焼きを堪能する名宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            霧深き奥備中の山並みに突如現れる、白い雲海の上に孤高に浮かぶ現存天守「備中松山城」。11月から1月にかけての冬期は、放射冷却によって年間最高の雲海発生率を誇り、神話のような天空の城郭風景が広がります。ベンガラ色に染まる重伝建「吹屋ふるさと村」、アジア初・星空保護区「美星町」の降るような星空。そして日本最古の蔓牛の血統を引く幻の黒毛和牛「千屋牛」の極上すき焼き。息をのむ冬の奇跡と至高の美味に浸る厳選宿をご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-amber-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 岡山県高梁市・新見市・井原市美星町</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 見頃期：11月上旬〜1月中旬</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-amber-400" /> 天空の山城雲海＆満天の冬星空</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Phenomenon & History</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              日本唯一の現存山城天守が雲海に浮かぶ奇跡、赤銅の町並みと漆黒の星空
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              標高430mの臥牛山に宿る中世の威容と、幻の蔓牛が紡ぐ奥備中の贅沢
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              岡山県中西部に位置する高梁（たかはし）市。高瀬舟が往来した高梁川の清流と険しいカルスト地形に囲まれたこの城下町は、冬を迎えると神秘的な自然現象に包まれます。標高430メートルの臥牛山（がぎゅうざん）の頂にそびえる「備中松山城」は、江戸時代以前に建てられた天守が今も現存する全国12城のうち、唯一の山城です。天和3年（1683年）に修築された二層二階の天守や二重櫓は国の重要文化財。切り立った天然の断崖の上に石垣を築き上げたその姿は、中世の山城の要害性と近世城郭の美しさを完璧に今に伝えています。
            </p>
            <p>
              この備中松山城が一年で最もドラマチックな姿を見せるのが、11月から1月にかけての早朝です。高梁盆地特有の地形と、前日昼と早朝の寒暖差（放射冷却）によって大量の霧が発生。夜明け前、城の北東に位置する「雲海展望台」に立つと、足下一面に広がる純白の海原のような雲海から、臥牛山頂の天守と白壁の土塀がまるで浮かんでいるかのように顔を出します。朝日の光が差し込むにつれて霧が黄金色に輝き、陰影を帯びた天守がシルエットとなって浮かび上がる光景は、まさに現世を離れた神話の情景そのものです。現在では、人懐っこい元野良猫の「猫城主 さんじゅーろー」が登城客を出迎え、旅の温かな癒やしとなっています。
            </p>
            <p>
              高梁の冬の魅力は天空の城だけにとどまりません。成羽町には、江戸から明治にかけて赤色顔料「ベンガラ」の富で栄えた「吹屋ふるさと村」があります。赤銅色の石州瓦とベンガラ色の格子で統一された町並みは、冬の澄み渡る青空に鮮やかに映え、豪商たちの贅を尽くした豪壮な屋敷群が往時の栄華を伝えます。さらに南西の井原市美星町は、アジアで初めて国際ダークスカイ協会から「星空保護区」に認定された聖地。光害のない漆黒の夜空に、冬の大三角や天の川が零れ落ちるように輝きます。
            </p>
            <p>
              そして冬の冷えた身体を満たす極上の美味が、新見市千屋地区で育まれる幻の黒毛和牛「千屋牛（ちやぎゅう）」です。全国の和牛の基礎となった日本最古の蔓牛「竹の谷蔓」の血統を受け継ぐ千屋牛は、年間出荷数が数百頭と極めて少なく、幻の牛肉と称されます。きめ細やかなサシの融点は低く、舌の上でふわりととろけ、赤身の芳醇な旨味が広がります。甘辛い割り下で煮て地元の新鮮な卵を絡める「千屋牛すき焼き」や、熱々の高梁ご当地グルメ「インディアントマト焼そば」。冬の澄んだ空気と静けさの中で味わう美味は、忘れがたい冬旅の記憶を刻んでくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">天空の山城・備中松山城雲海</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                現存天守唯一の山城（標高430m）。冬の早朝、一面の雲海に浮かぶ奇跡の絶景と猫城主さんじゅーろーの出迎え。
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">吹屋ベンガラ格子＆美星町星空</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                赤銅色の石州瓦が連なる重伝建「吹屋ふるさと村」と、アジア初・星空保護区認定の美星町の澄み渡る満天星空。
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">幻の蔓牛「千屋牛」極上すき焼き</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日本最古の蔓牛の血統を引く希少な千屋牛。とろける霜降りと濃厚な旨味を味わう熱々すき焼きディナー。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-amber-400 pl-4">
            <span className="text-amber-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">雲海発生率ピークと吹屋の紅葉</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                寒暖差が最も大きくなり、年間で最も雲海の発生確率が高いトップシーズン。吹屋の紅葉とベンガラ色の街並みが美しく調和。早朝の展望台は氷点下近くまで冷え込むため厚手のダウンと手袋が必須です。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">美星町の冬星空と濃密な朝霧雲海</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                湿度が下がり大気の透明度が最高潮に。美星町では肉眼で無数の星が瞬く圧巻の夜空が広がります。最低気温は氷点下3〜5℃に達するため、防寒ブーツ、ネックウォーマー、カイロを完備しましょう。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">新春の天空城参拝と熱々千屋牛鍋</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                凛と張り詰めた寒気の中にそびえる新春の備中松山城。冷え切った身体に千屋牛すき焼きが至福の温もりをもたらします。路面凍結やうっすらとした降雪に備え、車移動時はスタッドレスタイヤを装着してください。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき高梁＆新見の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-amber-600" /> 備中松山城雲海展望台
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                臥牛山の北東約2kmに位置する絶景テラス。夜明け前から午前8時頃にかけて、深い霧の海に浮かぶ天守を真正面から捉えられます。朝日に照らされて黄金色に染まる雲海のグラデーションは必見です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR備中高梁駅より車で約20分。無料展望デッキ・駐車場完備。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-rose-600" /> 吹屋ふるさと村
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                赤銅色の石州瓦とベンガラ格子で統一された重要伝統的建造物群保存地区。豪商の屋敷「旧片山家住宅」や日本最古の木造校舎「旧吹屋小学校」、ベンガラ染め体験などタイムスリップしたような風情を満喫。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：高梁市街地より車で約40分。路線バス運行あり。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Sun className="w-5 h-5 text-indigo-600" /> 井原市 美星天文台＆星空保護区
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                国際ダークスカイ協会認定の星空の街。国内最大級の公開望遠鏡（口径101cm）を備える美星天文台では、澄み切った冬空に輝く星雲や惑星をリアルタイムに観測。街全体が星を守る光害対策を徹底。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：高梁市街より車で約30分。夜間観望会は金・土・日・月曜日開催。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の高梁＆新見を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              雲海展望台アクセス至近・本場千屋牛すき焼き・高原リゾート・美肌温泉名宿
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                          {h.special}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 text-xs">({h.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        {h.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {h.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5 text-amber-600" /> 客室・眺望の魅力
                          </strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-rose-600" /> 冬の美食ポイント
                          </strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-slate-700">
                        {h.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-500 block">宿泊料金の目安（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-amber-950">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-rose-700 text-white font-bold text-sm shadow hover:from-amber-700 hover:to-rose-800 transition-all"
                      >
                        <span>楽天トラベルでプランを見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Winter Itinerary Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の高梁＆新見を満喫する1泊2日天空の城・美星町星空モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              吹屋ふるさと村、美星町満天星空、早朝の雲海展望台と千屋牛すき焼きを味わい尽くす旅日程
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-600 text-white text-xs rounded-md font-bold">1日目</span>
                城下町高梁散策・吹屋ふるさと村見学と美星町ナイトスターハント
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">11:00 JR備中高梁駅に到着</strong>：高梁市複合施設・図書館で一息つき、城下町の武家屋敷通りを散策。</li>
                <li><strong className="text-slate-900">12:30 名物インディアントマト焼そばランチ</strong>：カレー風味と地元産完熟トマトの酸味が絶妙なご当地グルメを堪能。</li>
                <li><strong className="text-slate-900">14:00 吹屋ふるさと村へドライブ</strong>：赤銅色石州瓦とベンガラ格子の美しい町並みを歩き、旧片山家住宅を見学。</li>
                <li><strong className="text-slate-900">17:00 宿にチェックイン＆千屋牛ディナー</strong>：高梁または新見の宿へ。幻の黒毛和牛「千屋牛」の極上すき焼きに舌鼓。</li>
                <li><strong className="text-slate-900">20:00 美星町で冬の星空観測</strong>：国際ダークスカイ協会認定の美星天文台周辺へ。澄み切った漆黒の夜空に瞬く満天の天の川を鑑賞。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-slate-800 text-white text-xs rounded-md font-bold">2日目</span>
                備中松山城早朝雲海鑑賞と本丸登城・猫城主対面
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">06:00 宿を出発し雲海展望台へ</strong>：夜明け前の「備中松山城雲海展望台」へ。朝日に染まる純白の雲海に浮かぶ天空の城をじっくり観賞・撮影。</li>
                <li><strong className="text-slate-900">08:00 ふいご峠から本丸へ登城</strong>：山道を登り、国の重要文化財・現存天守へ。猫城主さんじゅーろーにご挨拶。</li>
                <li><strong className="text-slate-900">10:30 頼久寺庭園へ</strong>：小堀遠州作の国指定名勝・蓬莱式枯山水庭園を鑑賞し、冬の静寂の中で心を整える。</li>
                <li><strong className="text-slate-900">12:30 奥備中の手打ちそばランチ</strong>：香り高い地元産玄そば粉の手打ちそばと地酒を味わう。</li>
                <li><strong className="text-slate-900">14:30 備中高梁駅または新見駅より帰路へ</strong>：伯備線特急やくも号で岡山駅・倉敷駅方面へスムーズにアクセス。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Winter Driving Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Winter Driving</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              高梁＆新見への交通アクセスと冬道ドライブの注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-600" /> 電車・特急やくも号アクセス
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">岡山駅から</strong>：JR伯備線特急「やくも」で「備中高梁駅」まで約35分、「新見駅」まで約65分。普通列車でも約55分（高梁着）。</li>
                <li><strong className="text-slate-900">山陽新幹線接続</strong>：東京・新大阪・博多方面から岡山駅で新幹線から特急やくもへスムーズに対面乗り換え可能。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-rose-600" /> 車・レンタカー＆早朝凍結の注意
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">高速道路IC</strong>：岡山自動車道「賀陽IC」または「有漢IC」より高梁市街まで約15〜20分。中国自動車道「新見IC」直結。</li>
                <li><strong className="text-slate-900">雲海展望台＆峠道の凍結注意</strong>：早朝の雲海展望台周辺や吹屋ふるさと村への山道は、12月〜1月に路面凍結（ブラックアイスバーン）が発生しやすくなります。早朝ドライブにはスタッドレスタイヤの装着が必須です。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の高梁＆新見旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-amber-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Network */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600" />
            あわせて読みたい！近隣エリアの冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【倉敷美観地区】冬のライトアップ夜景と吉備津神社・千屋牛名宿
            </Link>
            <Link
              href="/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【湯原温泉・砂湯】冬の露天風呂番付西の横綱と蒜山和牛名宿
            </Link>
            <Link
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【三朝温泉】世界屈指のラジウム温泉と極上鳥取松葉がに名宿
            </Link>
            <Link
              href="/winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【尾道水道＆千光寺】冬の絶景夕景とオコゼ・尾道ラーメン名宿
            </Link>
            <Link
              href="/winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-amber-600 block"
            >
              【美作三湯・奥津＆湯郷】足踏み洗濯と美肌温泉・作州牛名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-amber-300 hover:shadow-xs transition-all text-sm font-bold text-amber-700 block text-center flex items-center justify-center gap-1"
            >
              <span>全国の冬旅特集一覧を見る</span>
              <Compass className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
