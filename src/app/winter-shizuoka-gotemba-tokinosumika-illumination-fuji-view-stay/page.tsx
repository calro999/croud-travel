import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Mountain, ShoppingBag
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月静岡】御殿場＆裾野！時之栖イルミ＆アウトレットと冬の富士山展望露天風呂名宿5選",
  description: "11月から1月にかけて、富士山麓の御殿場・裾野エリアは日本屈指の光と冬富士の絶景リゾートへと輝きを増します。約550万球の光が夜空を埋め尽くす御殿場高原 時之栖の「ひかりのすみか」や大迫力の噴水レーザーショー、日本最大級の御殿場プレミアム・アウトレットでの冬のショッピング。そして空気が最も澄み渡る冬ならではの冠雪富士山を湯船から一望する展望露天風呂。名物みくりやそばや静岡そだち和牛とともに満喫する冬の富士山麓滞在。楽天APIから最新取得した実力宿5選を徹底特集します。",
  keywords: '御殿場 ホテル, 時之栖 イルミネーション, 御殿場プレミアムアウトレット, HOTEL CLAD, レンブラントプレミアム 富士御殿場, ドーミーイン 富士山御殿場, 富士山 温泉 露天風呂, 11月 12月 1月 静岡 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay/"
  },
  openGraph: {
    title: "【11・12・1月静岡】御殿場＆裾野！時之栖イルミ＆アウトレットと冬の富士山展望露天風呂名宿5選",
    description: "11月から1月にかけて、富士山麓の御殿場・裾野エリアは日本屈指の光と冬富士の絶景リゾートへと輝きを増します。約550万球の光が夜空を埋め尽くす御殿場高原 時之栖の「ひかりのすみか」や大迫力の噴水レーザーショー、日本最大級の御殿場プレミアム・アウトレットでの冬のショッピング。そして空気が最も澄み渡る冬ならではの冠雪富士山を湯船から一望する展望露天風呂。名物みくりやそばや静岡そだち和牛とともに満喫する冬の富士山麓滞在。楽天APIから最新取得した実力宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/176577/176577.jpg",
      width: 1200,
      height: 630,
      alt: '冬の御殿場高原時之栖イルミネーションと富士山展望露天風呂'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月静岡】御殿場＆裾野！時之栖イルミ＆アウトレットと冬の富士山展望露天風呂名宿5選",
    description: "11月から1月にかけて、富士山麓の御殿場・裾野エリアは日本屈指の光と冬富士の絶景リゾートへと輝きを増します。約550万球の光が夜空を埋め尽くす御殿場高原 時之栖の「ひかりのすみか」や大迫力の噴水レーザーショー、日本最大級の御殿場プレミアム・アウトレットでの冬のショッピング。そして空気が最も澄み渡る冬ならではの冠雪富士山を湯船から一望する展望露天風呂。名物みくりやそばや静岡そだち和牛とともに満喫する冬の富士山麓滞在。楽天APIから最新取得した実力宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/176577/176577.jpg"]
  }
};

export default function ShizuokaGotembaWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "ＨＯＴＥＬ　ＣＬＡＤ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176577/176577.jpg",
              rating: 4.39,
              reviews: 896,
              price: "¥13,970〜",
              access: "東名高速道路「御殿場IC」から約2km。",
              special: "御殿場プレミアムアウトレットエリア内。富士山の絶景と自家源泉が楽しめます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176577%2F176577.html",
              story: "御殿場プレミアム・アウトレット敷地内の高台に佇み、全客室の半数以上および併設の立ち寄り温泉「木の花の湯」から富士山を一望できる最高のロケーションを誇る「HOTEL CLAD（ホテル クラッド）」。館内は和モダンを基調とした洗練された空間で、アウトレットでのショッピング後に重い荷物を持たずにそのままチェックインできる利便性は唯一無二です。宿泊者が無料で利用できる「木の花の湯」では、自家源泉の露天風呂に浸かりながら、夕暮れの茜色に染まる冬の富士山や、朝の澄み切った青空にそびえる白銀の稜線を大パノラマで満喫できます。夕食には和食ダイニング「花衣」で、駿河湾の新鮮な海の幸や地元静岡の厳選食材を使った御膳料理をゆったりと味わえます。",
              roomTip: "富士山ビューツイン、またはデラックスルーム。客室の窓いっぱいに広がる大迫力の冠雪富士山をベッドから独り占めできる至福の空間。",
              gourmetTip: "ダイニング「花衣（はなごろも）」。開放的な窓から富士山を望みながら、静岡県産銘柄豚のしゃぶしゃぶや旬の小鉢が並ぶ朝食・夕食膳を堪能。",
              highlights: [
                "御殿場プレミアム・アウトレット敷地内・木の花の湯無料利用・客室から富士山一望",
                "和食ダイニング「花衣」での静岡御膳・ショッピングの疲労を温泉で極上リフレッシュ",
                "東名足柄スマートIC至近・冬のセールと夕暮れ富士山の絶景を両立する特等席"
              ]
            },
            {
              id: 2,
              name: "レンブラントプレミアム富士御殿場",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106186/106186.jpg",
              rating: 4.61,
              reviews: 579,
              price: "¥7,560〜",
              access: "御殿場駅より小田急箱根高速バス又はお車にて１０分",
              special: "２０１９年１０月大浴場リニューアルオープン。夕食はレジェンドシェフ山本秀正氏プロデュースのフレンチ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106186%2F106186.html",
              story: "御殿場の豊かな森に抱かれた高台に位置し、世界遺産・富士山と御殿場市街の夜景を見晴らす大人の隠れ家リゾート「レンブラントプレミアム富士御殿場」。客室やロビー、レストランの全面ガラス窓の向こうには、遮るもののない雄大な富士山のパノラマが広がります。天然温泉の大浴場と露天風呂からも富士山を望むことができ、冬の澄んだ夜空に輝く満天の星と市街地のイルミネーション夜景が旅人を優しく包み込みます。当ホテルの真骨頂はフレンチジャポネをコンセプトにしたメインダイニング。地元契約農家の冬野菜やブランド牛「静岡そだち」、近海で獲れた金目鯛などを巧みに組み合わせた極上のフレンチコースを堪能できます。",
              roomTip: "富士山ビュー・プレミアルーム。バルコニー付きの広々とした客室で、朝日に照らされる「紅富士（赤富士）」のドラマチックな瞬間を鑑賞。",
              gourmetTip: "フレンチジャポネ「ガストロノミー」。ソムリエ厳選のワインとともに、冬の駿河湾の海の幸と静岡牛フィレ肉を繊細なソースで味わうフルコース。",
              highlights: [
                "世界遺産富士山と御殿場夜景のパノラマ・天然温泉展望露天風呂・静寂の森リゾート",
                "フレンチジャポネ「ガストロノミー」での極上ディナー・ソムリエ厳選ワイン",
                "バルコニーから拝む冬の紅富士（赤富士）・上質を極めた大人のプライベート空間"
              ]
            },
            {
              id: 3,
              name: "御殿場高原　時之栖(ときのすみか)",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67487/67487.jpg",
              rating: 4.07,
              reviews: 4728,
              price: "¥3,500〜",
              access: "ＪＲ御殿場線岩波駅から車で５分／新幹線三島駅より車で３5分◇三島駅⇔時之栖シャトルバス／御殿場駅⇔時之栖無料シャトルバス",
              special: "＜県東部No.１の広さを誇る高原リゾート＞多数の温泉施設・レストランなど充実の施設が大集合！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67487%2F67487.html",
              story: "御殿場高原の広大な敷地に、温泉、ホテル、地ビール醸造所、レストランが一体となった総合リゾート「御殿場高原 時之栖（ときのすみか）」。冬の滞在における最大の魅力は、園内全域で開催される名物イルミネーション「ひかりのすみか」。約300mに及ぶ光のトンネルや、最高到達点150mを誇る大迫力の噴水レーザーショー「ヴェルサイユの光」が冬の夜を熱狂の光で包みます。宿泊者専用の温泉をはじめ、14種類のお風呂が揃う「天然温泉 気楽坊」では、富士山を望む炭酸泉や死海の原塩風呂などで身体の芯から温まる湯浴みを満喫。夕食は本場仕込みの御殿場高原ビールとともに、バイキングや本格和食、炭火焼肉など多彩なスタイルから選べます。",
              roomTip: "御殿場高原ホテル高層階客室、またはホテル時之栖。イルミネーション会場へ徒歩すぐで、夜遅くまで光の祭典を楽しんだ後もスムーズに休息可能。",
              gourmetTip: "レストラン「グランテーブル」。出来立ての無濾過クラフトビール（ピルスナー・ヴァイツェン）とともに、熱々のスペアリブや石窯ピッツァを豪快に。",
              highlights: [
                "時之栖イルミネーション「ひかりのすみか」会場内・天然温泉気楽坊・14種のお風呂",
                "御殿場高原ビール醸造所直営レストラン・約300m光のトンネル・噴水レーザーショー",
                "多彩な宿泊タイプ完備・地ビール飲み放題プラン・ファミリーやグループ旅行に最適"
              ]
            },
            {
              id: 4,
              name: "ホテルリゾート&レストラン　マースガーデンウッド御殿場",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/128483/128483.jpg",
              rating: 4.63,
              reviews: 974,
              price: "¥14,100〜",
              access: "◇東名御殿場ICから徒歩5分◇ＪＲ御殿場駅から車で5分■東京国際空港から当館最寄りの御殿場ICまで高速バスで120分",
              special: "地下1,500ｍから汲み上げる天然温泉の大浴場、2つのレストランにて四季折々の味が楽しめる料理が自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128483%2F128483.html",
              story: "東名御殿場インターから車でわずか5分、約2,000坪の広大な日本庭園と噴水ショー、天然温泉を備えた高級アーバンリゾート「ホテルリゾート&レストラン マースガーデンウッド御殿場」。洗練された館内はシティホテルの快適さと温泉リゾートの寛ぎが見事に調和しています。庭園の中央にある池では、毎夜幻想的な光と水の噴水ショーが開催され、冬の夜の散策を優雅に演出。天然温泉「別邸熱海」から引湯された温泉大浴場では、肌を滑らかにする美肌の湯とサウナで極上のリフレッシュが叶います。食事は庭園を望む鉄板焼「銀明翠」での特選黒毛和牛ステーキや、旬の京会席など、美食の贅を尽くしたディナーが特別な冬の夜を約束します。",
              roomTip: "別館デラックスツイン（富士山ビュー）。広々としたバルコニーと上質なインテリアを備え、ゆったりと冬富士の稜線を眺めるラグジュアリーステイ。",
              gourmetTip: "鉄板焼「銀明翠（ぎんめいすい）」。シェフが目の前の鉄板で焼き上げる極上の特選黒毛和牛ステーキやフォアグラ、駿河湾の海の幸に舌鼓。",
              highlights: [
                "約2000坪の日本庭園＆噴水ショー・鉄板焼「銀明翠」で静岡牛・天然温泉大浴場",
                "東名御殿場IC車5分の好アクセス・広々バルコニー客室・大人の贅沢ステイ",
                "専属シェフの華麗な鉄板手さばき・記念日や特別なご褒美旅行に選ばれる名宿"
              ]
            },
            {
              id: 5,
              name: "天然温泉　富士桜の湯　ドーミーインＥＸＰＲＥＳＳ富士山御殿場（ドーミーイン・御宿野乃グループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182462/182462.jpg",
              rating: 4.59,
              reviews: 789,
              price: "¥7,612〜",
              access: "東名高速道路　御殿場ICから車で3分",
              special: "2022年2月23日OPEN　セルフロウリュサウナ完備！屋上テラスから富士山を望む足湯は必見！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182462%2F182462.html",
              story: "東名御殿場インターからすぐ、富士山の絶景と上質な天然温泉、極上のサウナ体験で圧倒的な人気を誇る「天然温泉 富士桜の湯 ドーミーインEXPRESS富士山御殿場」。屋上には富士山展望足湯が設けられ、冬の澄みきった青空にそびえる雪化粧の富士山を足元から温まりながら眺めることができます。大浴場「富士桜の湯」では自家源泉の内湯に加え、冬の冷気を感じながら浸かる露天風呂や、セルフロウリュ完備の本格ドライサウナ、強冷水風呂で極上の「ととのい」体験が可能。共立リゾート名物の夜鳴きそば無料サービスも完備。朝食ビュッフェでは名物「みくりやそば」をはじめ、富士山の恵みを受けた郷土料理がずらりと並びます。",
              roomTip: "富士山ビュールーム。窓から富士山を望む機能的で清潔な客室。シモンズ社製ベッドでぐっすり眠れる快適な滞在環境。",
              gourmetTip: "朝食ビュッフェ。御殿場の伝統郷土料理「みくりやそば」や、小鉢横丁の手作り和惣菜、出来立てのオムレツで朝の活力をチャージ。",
              highlights: [
                "屋上富士山展望足湯・セルフロウリュ本格サウナ＆富士桜の湯・名物夜鳴きそば無料",
                "御殿場郷土料理「みくりやそば」朝食・シモンズ社製ベッド・抜群のコスパ",
                "東名御殿場IC至近・ビジネスから観光まで大満足のサウナ＆天然温泉"
              ]
            }
  ];

  const faqData = [
  {
    "q": "御殿場高原 時之栖イルミネーション「ひかりのすみか」の開催期間と見どころは？",
    "a": "例年10月上旬から翌年3月中旬まで長期開催されます。見どころは、約300メートルにわたる光のトンネル、参加型のアート演出、そして有料エリア「王宮の丘」で開催される最高到達点150mの日本一の噴水レーザーショー「ヴェルサイユの光」です。水と光と音が完全にシンクロする大迫力のショーは圧巻で、冬の澄んだ夜空に鮮やかに映え渡ります。"
  },
  {
    "q": "冬の御殿場から富士山が最も綺麗に見える時間帯やポイントは？",
    "a": "冬の富士山は空気が最も乾燥して澄んでいるため、日中のくっきりとした雪化粧はもちろん、特に「日の出直後（早朝6:30〜7:00頃）」の太陽光を浴びて山肌が赤く染まる「紅富士（赤富士）」と、「日没直後（16:30〜17:00頃）」の夕焼け空に浮かび上がる黒いシルエットと群青のグラデーションが格別に美しいです。HOTEL CLADやレンブラントプレミアムの客室・露天風呂が最高のビューポイントです。"
  },
  {
    "q": "御殿場プレミアム・アウトレットの冬のバーゲン時期と混雑回避法は？",
    "a": "例年11月上旬〜中旬に「ウインターセール」、元旦から1月上旬に「ニューイヤーズセール」、1月中旬〜下旬に半期に一度の「プレミアム・アウトレット バーゲン」が開催されます。土日祝日は東名高速や駐車場が大変混雑するため、朝の開店時間（10:00）より30分以上早めに到着するか、敷地内のHOTEL CLADに前泊して朝一番でショッピングに向かうのが最もスマートな攻略法です。"
  },
  {
    "q": "冬の御殿場を訪れる際、車（レンタカー）の冬用タイヤは必要ですか？",
    "a": "御殿場市街やアウトレット、時之栖周辺は普段は積雪が多くないものの、標高が400m〜500m前後あるため、真冬の早朝や夜間は気温が氷点下まで下がり、路面凍結（ブラックアイスバーン）が発生することがあります。また、南岸低気圧が通過すると突然の大雪となる場合があるため、12月〜1月に車で訪れる際はスタッドレスタイヤ装着車、またはタイヤチェーンの携行を強く推奨します。"
  },
  {
    "q": "冬の御殿場で必ず味わいたい名物グルメは何ですか？",
    "a": "御殿場の伝統的な郷土料理で、鶏肉の出汁と山芋をつなぎに使った手打ち麺が特徴の「みくりやそば（御厨そば）」、富士山の伏流水で醸造される新鮮な「御殿場高原ビール」、きめ細かな霜降りが自慢のブランド和牛「静岡そだち」のステーキ、そして駿河湾から届く獲れたての地魚や桜えびのかき揚げが定番の冬の美味です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay"
        },
        "headline": "【11・12・1月静岡】御殿場＆裾野！時之栖イルミ＆アウトレットと冬の富士山展望露天風呂名宿5選",
        "description": "11月から1月にかけて、富士山麓の御殿場・裾野エリアは日本屈指の光と冬富士の絶景リゾートへと輝きを増します。約550万球の光が夜空を埋め尽くす御殿場高原 時之栖の「ひかりのすみか」や大迫力の噴水レーザーショー、日本最大級の御殿場プレミアム・アウトレットでの冬のショッピング。そして空気が最も澄み渡る冬ならではの冠雪富士山を湯船から一望する展望露天風呂。名物みくりやそばや静岡そだち和牛とともに満喫する冬の富士山麓滞在。楽天APIから最新取得した実力宿5選を徹底特集します。",
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
            "name": "御殿場＆裾野冬特集",
            "item": "https://croud-travel.com/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay"
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
      <header className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium">
            <Mountain className="w-4 h-4 text-blue-300" />
            <span>11月・12月・1月冬の富士山麓イルミネーション＆絶景温泉特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            御殿場＆裾野！<br className="hidden sm:inline" />
            時之栖イルミ＆アウトレットと冬の富士山展望露天風呂名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            約550万球が夜空を埋め尽くす時之栖の光の祭典「ひかりのすみか」、大迫力の噴水レーザーショー、そして日本最大級の御殿場プレミアム・アウトレット。空気が最も澄み渡る冬だからこそ出会える、冠雪の富士山を湯船から見晴らす至高の展望露天風呂と静岡美食に癒やされる冬旅をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>期間：10月上旬〜3月中旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>時之栖550万球イルミ</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-blue-400 shrink-0" />
              <span>富士山展望天然温泉</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-blue-400 shrink-0" />
              <span>アウトレット冬セール</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-blue-500 shrink-0" />
              冬の御殿場＆裾野が選ばれる理由：富士山・光・温泉の黄金トライアングル
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              東名高速道路や新東名を利用して都心から約90分。富士山の東麓に広がる御殿場・裾野エリアは、冬こそが年間で最も魅力を増すプレミアムシーズンです。冬の澄み渡る乾いた大気は空気中の塵を払い、白銀の雪帽子をかぶった富士山の輪郭を驚くほどシャープに描き出します。朝日に染まる紅富士から、夕暮れのグラデーションに浮かぶシルエットまで、一瞬ごとに息を呑む絶景が展開します。
            </p>
            <p>
              そして夜の主役となるのが、「御殿場高原 時之栖（ときのすみか）」の冬の風物詩「ひかりのすみか」です。園内を貫く約300メートルの光のトンネルを抜けると、最高到達点150メートルの大迫力を誇る日本屈指の噴水レーザーショーが夜空を焦がします。約550万球のLEDが灯る広大なイルミネーションは、大人から子どもまで誰もが心を奪われる光のテーマパークです。
            </p>
            <p>
              日中は日本最大級の面積と店舗数を誇る「御殿場プレミアム・アウトレット」で冬のファッションやブランドショッピングを満喫。約290のショップが立ち並ぶオープンエアのモールからは、買い物の合間にふと見上げると大迫力の富士山が視界いっぱいに広がり、日本屈指の景観型ショッピングを体感できます。
            </p>
            <p>
              一日中アクティブに楽しんだ後は、富士山の伏流水を地下深層から汲み上げた自家源泉の天然温泉へ。湯船に肩まで浸かり、冬の冷たい夜風を感じながら見上げる富士山の神々しい姿は、言葉を失うほどの感動をもたらします。熱々の名物みくりやそばや、静岡が誇る特選黒毛和牛「静岡そだち」、醸造所直送のクラフトビールが、旅の夜を最高潮へと導いてくれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>時之栖550万球イルミ</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                光のトンネルと日本一の噴水レーザーショー。冬の夜を煌びやかに彩る国内屈指の祭典。
              </p>
            </div>
            <div className="bg-cyan-50/60 rounded-xl p-5 border border-cyan-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Mountain className="w-5 h-5 text-cyan-600" />
                <span>冬富士を望む展望露天風呂</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                湯船から眺める冠雪富士山と朝の紅富士。天然温泉とサウナで極上のリフレッシュ。
              </p>
            </div>
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-amber-600" />
                <span>アウトレット冬のセール</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                国内最大級のモールで冬のバーゲン。富士山を借景にした至福のショッピングリゾート。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Verified Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の御殿場＆裾野を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              楽天APIより最新の客室情報・レビュー評価を取得。時之栖イルミやアウトレットへのアクセス至便、富士山ビュー展望露天風呂、静岡美食を誇る実力宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <article key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                          <span className="font-extrabold text-base text-slate-900">{h.rating}</span>
                          <span className="text-xs text-slate-500">（{h.reviews.toLocaleString()}件）</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 block">参考宿泊料金（1名）</span>
                          <span className="text-base sm:text-lg font-extrabold text-blue-600">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{h.access}</span>
                      </p>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <div className="bg-blue-50/50 rounded-xl p-3.5 border border-blue-100/60 text-xs sm:text-sm space-y-1.5">
                        <div className="font-bold text-blue-950 flex items-center gap-1.5">
                          <Building className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>宿泊のこだわり＆客室の選び方</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>

                      <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-100/60 text-xs sm:text-sm space-y-1.5">
                        <div className="font-bold text-amber-950 flex items-center gap-1.5">
                          <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>冬の美食＆朝食ダイニング</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        {h.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-sm hover:shadow transition-all text-center"
                      >
                        <span>楽天トラベルで空室・宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・月別服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Highland Winter Climate</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-blue-500 shrink-0" />
              11月・12月・1月の気温推移と富士山麓・御殿場の冬防寒・ドライブ対策
            </h2>
          </div>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              標高約400〜500mに位置する御殿場高原は、東京や静岡市中心部に比べて気温が3〜5度低く、朝晩の冷え込みが厳しい高原性気候です。アウトレットのオープンエア空間や時之栖の夜間イルミネーションに対応した万全の防寒対策が求められます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-blue-900 text-base flex items-center justify-between">
                <span>11月中旬〜下旬</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">平均 10℃ / 最低 5℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                富士山の冠雪が鮮やかになり、時之栖のイルミネーションが点灯する季節。日中はセーターや軽めのアウターで過ごせますが、日没後は急激に気温が一桁台まで下がるため、厚手のマフラーやフリースを用意しておきましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-blue-900 text-base flex items-center justify-between">
                <span>12月（イルミ最盛期）</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">平均 6℃ / 最低 1℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本格的な真冬の寒波が到来。夜間の噴水レーザーショー観覧時は体感温度が氷点下に達します。厚手のロングダウン、裏起毛パンツ、手袋、ニット帽、靴下用カイロを着用し、屋外での鑑賞に備えてください。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-blue-900 text-base flex items-center justify-between">
                <span>1月（新春セール〜厳冬期）</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">平均 3℃ / 最低 -3℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                年間で最も空気が澄み、朝の「紅富士」が美しく輝く季節。早朝の路面凍結（ブラックアイスバーン）に備え、車で訪れる際はスタッドレスタイヤの装着を推奨します。ホテル屋上の足湯や展望露天風呂で温まりながら絶景を楽しみましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 冬の美食ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Mt.Fuji Local Gastronomy</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-blue-500 shrink-0" />
              富士山の恵みと駿河湾の美味：みくりやそば・静岡そだち・地ビール
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              冬の御殿場で必ず味わいたい郷土料理が、古くから冠婚葬祭の席で振る舞われてきた「みくりやそば（御厨そば）」です。富士山の伏流水で練り上げたそば粉に、つなぎとして自然薯（山芋）を使い、鶏肉と椎茸の出汁が効いた熱々のつゆでいただく一杯は、冷えた胃袋にじんわりと染み渡る素朴で力強い美味しさです。
            </p>
            <p>
              さらに、富士山麓の澄んだ空気と清流で育つブランド黒毛和牛「静岡そだち」のサーロインステーキや網焼き、そして時之栖醸造所直送の新鮮な「御殿場高原ビール（無濾過ピルスナーや芳醇なヴァイツェン）」も旅の夜を贅沢に演出。駿河湾近海で獲れた金目鯛の煮付けや桜えびのかき揚げとともに、富士の幸を余すところなく味わえます。
            </p>
            <p>
              また、冷涼な気候と富士の清流が育んだ「御殿場コシヒカリ」は、炊き立てのツヤと上品な甘みで名高いブランド米。時之栖の手作りハム・ソーセージ工房で職人が仕上げる本格ボロニアソーセージや粗挽きフランクをグリルで頬張りながら楽しむ地ビールは、冬の高原リゾートの格別な醍醐味です。
            </p>
          </div>
        </section>

        {/* Section 5: モデルコース */}
        <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-blue-800 pb-4">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              【1泊2日モデルコース】時之栖イルミ鑑賞とアウトレット＆富士山展望露天風呂の旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 space-y-4">
              <div className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>アウトレットでショッピングから時之栖550万球イルミ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:00</strong> 御殿場プレミアム・アウトレットに到着。冬富士を眺めながら冬物ショッピング＆名物ランチ。
                </p>
                <p>
                  <strong>15:30</strong> 宿へチェックイン。客室や露天風呂から夕暮れに染まる富士山のシルエットを鑑賞。
                </p>
                <p>
                  <strong>17:30</strong> 御殿場高原 時之栖へ移動。「ひかりのすみか」の光のトンネルと大迫力の噴水レーザーショーを体感。
                </p>
                <p>
                  <strong>20:00</strong> 地ビール醸造所の出来立てクラフトビールとともに、静岡そだち和牛や熱々のスペアリブを堪能。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 space-y-4">
              <div className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span className="bg-indigo-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>朝の紅富士展望露天風呂から箱根・三島周遊へ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>07:00</strong> 展望露天風呂で朝一番の湯浴み。朝日を浴びて山肌がピンク色に輝く「紅富士」に息を呑む。
                </p>
                <p>
                  <strong>08:30</strong> 地元名物「みくりやそば」や駿河湾の干物が並ぶ贅沢な和洋朝食ビュッフェを満喫。
                </p>
                <p>
                  <strong>10:30</strong> 乙女峠や長尾峠を経由して箱根芦ノ湖、または三島スカイウォークへ足を伸ばし、さらに絶景を満喫。
                </p>
                <p>
                  <strong>14:00</strong> 沼津港で冬の新鮮な地魚海鮮丼を味わい、東名高速にて帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の御殿場＆裾野旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-blue-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！冬の富士山ビュー＆名湯温泉特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">箱根冬特集</span>
              <span className="font-bold text-white block">箱根神社初詣＆芦ノ湖冬富士と湯本老舗温泉宿</span>
            </Link>

            <Link 
              href="/winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">三島・沼津冬特集</span>
              <span className="font-bold text-white block">三嶋大社初詣＆駿河湾深海魚・富士パノラマ名宿</span>
            </Link>

            <Link 
              href="/winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">富士宮冬特集</span>
              <span className="font-bold text-white block">富士山本宮浅間大社初詣＆湧玉池と富士山ビュー名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay" />
</div>
  );
}
