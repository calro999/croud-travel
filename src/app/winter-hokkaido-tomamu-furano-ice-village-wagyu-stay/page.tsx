import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Coffee
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月北海道】氷の街トマム「アイスヴィレッジ」と白銀の富良野・極上富良野和牛＆濃厚ふらのチーズフォンデュを堪能する冬リゾート名宿5選",
  description: "11月下旬から1月、北海道の中央に位置するトマムと富良野は、氷点下20度〜30度にも達する極寒が生み出す世界屈指のパウダースノーと、奇跡の氷の幻想世界に包まれます。星野リゾートトマムに期間限定で出現する氷の街「アイスヴィレッジ」では、氷の教会や氷のBar、氷の滑り台が青い光に輝き、ゴンドラで向かう標高1,088mの「霧氷テラス」では木々がまとう純白の氷結晶と日高山脈の壮大な冬パノラマに息を呑みます。白銀に染まる富良野の森に優しい灯りが灯る「ニングルテラス」の散策、寒さを忘れさせる最高峰の「富良野和牛」ステーキやすき焼き、地元産生乳から作られる濃厚な「ふらのチーズフォンデュ」。極上の冬リゾートと天然温泉を満喫する厳選5宿を紹介します。",
  keywords: 'トマム アイスヴィレッジ 冬, 霧氷テラス 星野リゾート, 富良野和牛 ステーキ, 富良野 チーズフォンデュ, リゾナーレトマム, トマムザタワー, 新富良野プリンスホテル, ラビスタ富良野ヒルズ, 11月 12月 1月 北海道旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-hokkaido-tomamu-furano-ice-village-wagyu-stay'
  },
  openGraph: {
    title: "【11・12・1月北海道】氷の街トマム「アイスヴィレッジ」と白銀の富良野・極上富良野和牛＆濃厚ふらのチーズフォンデュを堪能する冬リゾート名宿5選",
    description: "11月下旬から1月、北海道の中央に位置するトマムと富良野は、氷点下20度〜30度にも達する極寒が生み出す世界屈指のパウダースノーと、奇跡の氷の幻想世界に包まれます。星野リゾートトマムに期間限定で出現する氷の街「アイスヴィレッジ」では、氷の教会や氷のBar、氷の滑り台が青い光に輝き、ゴンドラで向かう標高1,088mの「霧氷テラス」では木々がまとう純白の氷結晶と日高山脈の壮大な冬パノラマに息を呑みます。白銀に染まる富良野の森に優しい灯りが灯る「ニングルテラス」の散策、寒さを忘れさせる最高峰の「富良野和牛」ステーキやすき焼き、地元産生乳から作られる濃厚な「ふらのチーズフォンデュ」。極上の冬リゾートと天然温泉を満喫する厳選5宿を紹介します。",
    url: 'https://croud-travel.com/winter-hokkaido-tomamu-furano-ice-village-wagyu-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '白銀の北海道トマム霧氷テラスと氷の街'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月北海道】氷の街トマム「アイスヴィレッジ」と白銀の富良野・極上富良野和牛＆濃厚ふらのチーズフォンデュを堪能する冬リゾート名宿5選",
    description: "11月下旬から1月、北海道の中央に位置するトマムと富良野は、氷点下20度〜30度にも達する極寒が生み出す世界屈指のパウダースノーと、奇跡の氷の幻想世界に包まれます。星野リゾートトマムに期間限定で出現する氷の街「アイスヴィレッジ」では、氷の教会や氷のBar、氷の滑り台が青い光に輝き、ゴンドラで向かう標高1,088mの「霧氷テラス」では木々がまとう純白の氷結晶と日高山脈の壮大な冬パノラマに息を呑みます。白銀に染まる富良野の森に優しい灯りが灯る「ニングルテラス」の散策、寒さを忘れさせる最高峰の「富良野和牛」ステーキやすき焼き、地元産生乳から作られる濃厚な「ふらのチーズフォンデュ」。極上の冬リゾートと天然温泉を満喫する厳選5宿を紹介します。",
    images: ['https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function HokkaidoTomamuFuranoWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月北海道】氷の街トマム「アイスヴィレッジ」と白銀の富良野・極上富良野和牛＆濃厚ふらのチーズフォンデュを堪能する冬リゾート名宿5選",
    description: "11月下旬から1月、北海道の中央に位置するトマムと富良野は、氷点下20度〜30度にも達する極寒が生み出す世界屈指のパウダースノーと、奇跡の氷の幻想世界に包まれます。星野リゾートトマムに期間限定で出現する氷の街「アイスヴィレッジ」では、氷の教会や氷のBar、氷の滑り台が青い光に輝き、ゴンドラで向かう標高1,088mの「霧氷テラス」では木々がまとう純白の氷結晶と日高山脈の壮大な冬パノラマに息を呑みます。白銀に染まる富良野の森に優しい灯りが灯る「ニングルテラス」の散策、寒さを忘れさせる最高峰の「富良野和牛」ステーキやすき焼き、地元産生乳から作られる濃厚な「ふらのチーズフォンデュ」。極上の冬リゾートと天然温泉を満喫する厳選5宿を紹介します。",
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-01',
    dateModified: '2026-10-01',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-hokkaido-tomamu-furano-ice-village-wagyu-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'トマム氷の街と富良野雪景色・富良野和牛リゾート名宿',
        item: 'https://croud-travel.com/winter-hokkaido-tomamu-furano-ice-village-wagyu-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "星野リゾート トマムの「アイスヴィレッジ」はいつから開催されますか？入場方法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "星野リゾート トマムの冬のシンボル「アイスヴィレッジ」は、例年12月10日前後から翌年3月中旬まで開催されます（気温や天候により多少前後します）。営業時間は夕方17:00〜22:00（最終入場21:30）。トマムの最低気温が氷点下20度〜30度近くまで冷え込むからこそ作れる幻想的な氷の街で、氷の教会、氷のBar（氷のグラスでカクテルを提供）、氷のスイーツショップ、氷の滑り台などがドーム状に立ち並びます。トマム ザ・タワーおよびリゾナーレトマムの宿泊者は無料で入場可能（日帰り利用の場合は入場料が必要）です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬のトマム「霧氷テラス」へのアクセスや見られる時間帯・確率を教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「霧氷テラス（むひょうテラス）」は、リゾートセンターから雲海ゴンドラに乗車して約13分、標高1,088mの山頂駅付近に広がる展望デッキです。例年12月上旬から翌年3月下旬までオープンしています。氷点下の過冷却された霧や水蒸気が樹木に吹き付けられて凍りつき、まるで白い花が咲いたようになる「霧氷」は、気温が最も低い早朝から午前中にかけて高い確率で見られます。テラスに併設されたカフェでは、霧氷をイメージした温かいフォンダンショコラやホットマシュマロドリンクを味わいながら、日高山脈の雄大な雪景色を一望できます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬（11月〜1月）のトマム・富良野の寒さ・気温と必要な防寒装備は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "トマムや富良野は内陸盆地気候のため、北海道内でも最も寒さが厳しい地域の一つです。11月下旬で最高気温3℃前後、最低気温マイナス5℃前後。12月〜1月の真冬期は、日中でも最高気温がマイナス5℃〜マイナス8℃にしかならず、朝晩や夜のアイスヴィレッジではマイナス15℃〜マイナス30℃近くまで急降下します。肌が露出していると凍傷の危険があるため、極地仕様の厚手ダウンジャケット（防風・耐水）、厚手の防寒スノーパンツ、耳が完全に隠れるニット帽、ネックウォーマー、防寒・防水スノーグローブ、厚手メリノウール靴下、靴底が厚く滑り止めが効いたスノーブーツ（保温インナー付き）が絶対必須です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の富良野で絶対に食べたい名物グルメは何ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "厳しい寒さを乗り越える冬の富良野グルメの王道は「富良野和牛（ふらの和牛）」です。北海道の厳しい寒暖差の中で育てられた黒毛和牛で、融点が低い上質な脂の甘みと濃厚な赤身の旨味が特徴。すき焼きや炭火ステーキで食すと格別です。また、富良野の新鮮な生乳から作られる「ふらのチーズ」を使った濃厚な「チーズフォンデュ」は、地元の温野菜やバゲットを絡めて熱々をいただく冬の定番。さらに、玉ねぎとスパイスのコクが効いた「富良野オムカレー」や、ふらのワイン、濃厚な富良野牛乳のスイーツも必食です。"
        }
      },
      {
        '@type': 'Question',
        name: "新千歳空港や旭川空港からトマム・富良野への冬のアクセス方法は？レンタカーは危険？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の北海道内陸部はホワイトアウトやアイスバーン、豪雪による視界不良が頻発するため、雪道運転に慣れていない方の冬のレンタカー利用は極めてハイリスクです。最も安全・確実なのは公共交通機関とリゾート専用バスの利用です。トマムへは新千歳空港からJR快速エアポートと特急おおぞら・とかちを乗り継ぎ「JRトマム駅」まで約90分（駅からは各ホテル無料送迎バス接続）。また新千歳空港や旭川空港からトマム・富良野直行のリゾートバス（北海道リゾートライナー等）も運行されています。富良野へは旭川空港から路線バス「ラベンダー号」で約60分で直通アクセス可能です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "トマム　ザ・タワー　ｂｙ　星野リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30110/30110.jpg",
              rating: 4.13,
              reviews: 1607,
              price: "¥14,960〜",
              access: "新千歳空港から車100分、札幌から特急100分、トマム駅から無料送迎バス5分。",
              special: "北海道随一のリゾート地でアクティブステイ。新千歳・札幌から楽々アクセス＆トマム駅無料送迎あり",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30110%2F30110.html",
              story: "星野リゾート トマムの中心にそびえ立ち、緑と茶のツインタワーが象徴的なランドマークリゾート「トマム ザ・タワー ｂｙ 星野リゾート」。ゲレンデ直結の利便性と充実したアクティビティが魅力で、冬期限定でオープンする氷の街「アイスヴィレッジ」や霧氷テラスへのアクセスも抜群です。敷地内には日本最大級のインドアウエーブプール「ミナミナビーチ」や、雪景色を望む露天風呂「木林の湯（きりんのゆ）」を完備。夕食はエリア内の個性豊かなレストラン街「ホタルストリート」やビュッフェダイニングで、北海道産牛のグリルや新鮮な海の幸、熱々のラーメンなど多彩な冬グルメを堪能できます。",
              roomTip: "ファミリールームまたはスタンダードツイン。高層階の窓からは見渡す限りの白銀のゲレンデと山並みが広がり、朝には雪山のパノラマを客室から楽しめます。",
              gourmetTip: "「森のレストラン ニニヌプリの肉ビュッフェ」。北海道を代表する牛・豚・鶏・羊の肉料理をライブキッチンで焼き立てで味わう豪快なディナーです。",
              highlights: [
                "氷の街アイスヴィレッジや霧氷テラスへ直結＆インドア波のプールミナミナビーチ完備",
                "森のレストランニニヌプリの肉ビュッフェ＆ホタルストリートの多彩なグルメ",
                "極上ドライパウダースノーの広大なゲレンデ＆多彩な冬のアクティビティ充実"
              ]
            },
            {
              id: 2,
              name: "リゾナーレトマム",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153196/153196.jpg",
              rating: 4.50,
              reviews: 187,
              price: "¥22,990〜",
              access: "新千歳空港から車100分、札幌から特急100分、トマム駅から無料送迎バス5分。",
              special: "北海道の大自然を満喫できる滞在型リゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153196%2F153196.html",
              story: "針葉樹の森に囲まれた高台に佇み、1フロアわずか4室、全室100平米以上のオールスイートを誇る星野リゾートの最高峰ホテル「リゾナーレトマム」。すべての客室に白銀の針葉樹林を見下ろす展望ジェットバスとプライベートサウナが完備されており、極上のプライベートリゾート体験を約束してくれます。アイスヴィレッジでの氷の体験や霧氷テラスを満喫した後は、部屋のサウナとジェットバスで芯から体を温める贅沢。メインダイニング「OTTO SETTE TOMAMU」では、北海道の冬の恵みをイタリア各地の郷土料理の技法で昇華させたフルコースとワインペアリングを堪能できます。",
              roomTip: "デザインスイート客室。展望ジェットバスの大きな窓から雪化粧したトマムの森を一望でき、プライベートサウナで極上のととのい時間を過ごせます。",
              gourmetTip: "「OTTO SETTE TOMAMUのイタリア料理フルコース」。富良野和牛やエゾシカ、冬のタラバガニを贅沢に使った芸術的な料理と極上ワインのペアリングです。",
              highlights: [
                "全室100平米以上オールスイート＆白銀の森を望む展望ジェットバス・サウナ完備",
                "OTTO SETTE TOMAMUで味わう北海道冬食材の至高イタリア料理コース",
                "ワンフロアわずか4室の圧倒的プライベート空間＆記念日や特別な冬籠もりに最適"
              ]
            },
            {
              id: 3,
              name: "新富良野プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30804/30804.jpg",
              rating: 4.37,
              reviews: 1619,
              price: "¥5,412〜",
              access: "ＪＲ富良野駅タクシー10分／道央自動車道 三笠ＩＣより車で約60分／旭川空港・新千歳空港から路線バスあり（終点当ホテル）",
              special: "冬の富良野を満喫するチャンス！期間限定タイムセール開催中。今だけ使えるクーポン配布中！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30804%2F30804.html",
              story: "富良野の雄大な自然に抱かれ、富良野スキー場（北の峰・富良野ゾーン）に直結した本格リゾート「新富良野プリンスホテル」。ホテルのすぐ目の前には、白銀の静かな森の中に15棟のログハウスが並び、工芸作家の温かな作品が並ぶ「ニングルテラス」が隣接。冬の夕暮れには雪の小径に優しい灯りが灯り、おとぎ話のような世界が広がります。館内には地下1010mから湧き出る天然温泉「富良野温泉 紫彩の湯（しさいのゆ）」があり、雪見露天風呂で冷えた体をじっくりほぐせます。夕食は富良野和牛のすき焼きやローストビーフ、濃厚なふらのチーズフォンデュを味わえます。",
              roomTip: "十勝岳連峰側客室。早朝には朝陽に照らされてピンク色に染まる白銀の十勝岳連峰の山並みを窓から一望できる息を呑む絶景ルームです。",
              gourmetTip: "「富良野和牛ステーキと濃厚チーズフォンデュディナー」。旨味の強い富良野和牛と、地元富良野産チーズをふんだんに使ったとろけるフォンデュの共演です。",
              highlights: [
                "富良野スキー場直結＆妖精の森ニングルテラス隣接・富良野温泉紫彩の湯完備",
                "富良野和牛ステーキと濃厚ふらのチーズフォンデュ＆北海道海の幸ビュッフェ",
                "十勝岳連峰の白銀パノラマを一望＆おとぎの森ニングルテラスの夜の温かな光"
              ]
            },
            {
              id: 4,
              name: "天然温泉　紫雲の湯　ラビスタ富良野ヒルズ（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176997/176997.jpg",
              rating: 4.44,
              reviews: 755,
              price: "¥7,740〜",
              access: "ＪＲ富良野駅より徒歩3分・旭川空港からバスで約1時間・新千歳空港からお車で約2時間10分・札幌市内からお車で約2時間",
              special: "富良野市内一望できる最上階天然温泉大浴場・貸切風呂完備♪ファミリーにも安心なお子様アメニティも充実！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176997%2F176997.html",
              story: "JR富良野駅から徒歩約3分という絶好のロケーションに建ち、ビジネスから観光まで高い人気を誇る和風ホテル「天然温泉 紫雲の湯 ラビスタ富良野ヒルズ（ドーミーイン・御宿野乃グループ）」。最上階（9階）には、富良野市内唯一の自家源泉天然温泉大浴場「紫雲の湯」があり、十勝岳連峰の雪景色を望む露天風呂と高温ドライサウナ、3種類の無料貸切風呂を完備。名物の夜鳴きそばの無料サービスも大好評。朝食は全国屈指の評価を誇る北国ビュッフェで、いくらかけ放題の海鮮丼や富良野オムカレー、新鮮なふらの牛乳を朝から心ゆくまで堪能できます。",
              roomTip: "ハリウッドツインまたは和洋室。木の温もりを取り入れた落ち着いた空間設計で、観光やスキーの後の疲れた体を優しく癒やしてくれます。",
              gourmetTip: "「豪華朝食バイキング・いくら盛り放題海鮮丼」。いくら、サーモン、甘海老を贅沢に乗せるオリジナル丼と、朝焼きのパンや富良野オムレツが並びます。",
              highlights: [
                "富良野駅徒歩3分の好立地＆最上階天然温泉紫雲の湯といくらかけ放題の朝食",
                "朝食バイキングで味わう名物いくら海鮮丼・富良野オムカレー・ふらの牛乳",
                "3種類の無料貸切風呂と高温サウナ完備＆観光やスキーの拠点として抜群の機能性"
              ]
            },
            {
              id: 5,
              name: "ＦＵＲＡＮＯ　ＮＡＴＵＬＵＸ　ＨＯＴＥＬ（富良野　ナチュラクス　ホテル）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67066/67066.jpg",
              rating: 4.05,
              reviews: 1081,
              price: "¥5,850〜",
              access: "ＪＲ富良野駅より徒歩1分・札幌市よりお車で約2.5時間・旭川よりお車で約1時間/旭川空港～富良野駅直通バスあり",
              special: "≪ミシュラン掲載≫【楽天アワード５年連続受賞】－ＪＲ富良野駅より徒歩1分の癒しと寛ぎの空間－",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67066%2F67066.html",
              story: "JR富良野駅の真向かいに位置し、「ナチュラル＆リラックス」をコンセプトにした洗練のデザイナーズホテル「ＦＵＲＡＮＯ ＮＡＴＵＬＵＸ ＨＯＴＥＬ（富良野 ナチュラクス ホテル）」。石と木、ガラスを基調としたモダンな館内には心地よいアロマの香りが漂い、女性や大人のカップルに圧倒的な支持を得ています。館内には岩盤浴を備えた男女別大浴場があり、冬の寒さで強張った筋肉をじっくりと緩めることができます。メインダイニングでは、富良野産食材を贅沢に使った創作ディナーや、富良野和牛の赤ワイン煮込み、地元野菜のグリルなど、身体に優しい滋味あふれる料理が提供されます。",
              roomTip: "ナチュラルツインまたはシアタールーム。無駄のないミニマルなデザインと上質なアメニティが揃い、静かで知的な冬のリゾート時間を演出します。",
              gourmetTip: "「富良野和牛の赤ワイン煮込みと地産地消ディナー」。じっくり煮込んでスプーンでほぐれるほど柔らかい和牛と、ふらのワインのマリアージュが秀逸です。",
              highlights: [
                "富良野駅前の洗練されたデザイナーズホテル＆岩盤浴付き大浴場と富良野フレンチ",
                "スプーンでほぐれる富良野和牛の赤ワイン煮込み＆地元ワイナリーの銘酒",
                "アロマ香る落ち着いたモダン空間＆一人旅からカップルまで心地よい大人の隠れ家"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "星野リゾート トマムの「アイスヴィレッジ」はいつから開催されますか？入場方法は？",
    "a": "星野リゾート トマムの冬のシンボル「アイスヴィレッジ」は、例年12月10日前後から翌年3月中旬まで開催されます（気温や天候により多少前後します）。営業時間は夕方17:00〜22:00（最終入場21:30）。トマムの最低気温が氷点下20度〜30度近くまで冷え込むからこそ作れる幻想的な氷の街で、氷の教会、氷のBar（氷のグラスでカクテルを提供）、氷のスイーツショップ、氷の滑り台などがドーム状に立ち並びます。トマム ザ・タワーおよびリゾナーレトマムの宿泊者は無料で入場可能（日帰り利用の場合は入場料が必要）です。"
  },
  {
    "q": "冬のトマム「霧氷テラス」へのアクセスや見られる時間帯・確率を教えてください。",
    "a": "「霧氷テラス（むひょうテラス）」は、リゾートセンターから雲海ゴンドラに乗車して約13分、標高1,088mの山頂駅付近に広がる展望デッキです。例年12月上旬から翌年3月下旬までオープンしています。氷点下の過冷却された霧や水蒸気が樹木に吹き付けられて凍りつき、まるで白い花が咲いたようになる「霧氷」は、気温が最も低い早朝から午前中にかけて高い確率で見られます。テラスに併設されたカフェでは、霧氷をイメージした温かいフォンダンショコラやホットマシュマロドリンクを味わいながら、日高山脈の雄大な雪景色を一望できます。"
  },
  {
    "q": "冬（11月〜1月）のトマム・富良野の寒さ・気温と必要な防寒装備は？",
    "a": "トマムや富良野は内陸盆地気候のため、北海道内でも最も寒さが厳しい地域の一つです。11月下旬で最高気温3℃前後、最低気温マイナス5℃前後。12月〜1月の真冬期は、日中でも最高気温がマイナス5℃〜マイナス8℃にしかならず、朝晩や夜のアイスヴィレッジではマイナス15℃〜マイナス30℃近くまで急降下します。肌が露出していると凍傷の危険があるため、極地仕様の厚手ダウンジャケット（防風・耐水）、厚手の防寒スノーパンツ、耳が完全に隠れるニット帽、ネックウォーマー、防寒・防水スノーグローブ、厚手メリノウール靴下、靴底が厚く滑り止めが効いたスノーブーツ（保温インナー付き）が絶対必須です。"
  },
  {
    "q": "冬の富良野で絶対に食べたい名物グルメは何ですか？",
    "a": "厳しい寒さを乗り越える冬の富良野グルメの王道は「富良野和牛（ふらの和牛）」です。北海道の厳しい寒暖差の中で育てられた黒毛和牛で、融点が低い上質な脂の甘みと濃厚な赤身の旨味が特徴。すき焼きや炭火ステーキで食すと格別です。また、富良野の新鮮な生乳から作られる「ふらのチーズ」を使った濃厚な「チーズフォンデュ」は、地元の温野菜やバゲットを絡めて熱々をいただく冬の定番。さらに、玉ねぎとスパイスのコクが効いた「富良野オムカレー」や、ふらのワイン、濃厚な富良野牛乳のスイーツも必食です。"
  },
  {
    "q": "新千歳空港や旭川空港からトマム・富良野への冬のアクセス方法は？レンタカーは危険？",
    "a": "冬の北海道内陸部はホワイトアウトやアイスバーン、豪雪による視界不良が頻発するため、雪道運転に慣れていない方の冬のレンタカー利用は極めてハイリスクです。最も安全・確実なのは公共交通機関とリゾート専用バスの利用です。トマムへは新千歳空港からJR快速エアポートと特急おおぞら・とかちを乗り継ぎ「JRトマム駅」まで約90分（駅からは各ホテル無料送迎バス接続）。また新千歳空港や旭川空港からトマム・富良野直行のリゾートバス（北海道リゾートライナー等）も運行されています。富良野へは旭川空港から路線バス「ラベンダー号」で約60分で直通アクセス可能です。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-stone-900 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80" 
            alt="白銀の北海道トマムと雪山" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-indigo-900/80 backdrop-blur-md text-indigo-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-indigo-400/30">
            <Snowflake className="w-4 h-4 text-indigo-200" />
            11月・12月・1月 北海道・氷の街アイスヴィレッジ＆白銀パウダースノー特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月北海道】氷の街トマム「アイスヴィレッジ」と白銀の富良野・極上富良野和牛＆濃厚ふらのチーズフォンデュを堪能する冬リゾート名宿5選
          </h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            氷点下30度の極寒が生み出す青く輝く奇跡の氷の街「アイスヴィレッジ」、山頂に現れる白銀の花「霧氷テラス」。雪の森に優しい灯りがともる富良野ニングルテラスと、旨味あふれる極上富良野和牛、濃厚ふらのチーズフォンデュ。冬の北海道の最高峰を満喫する厳選リゾート宿をご紹介します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 旬の時期：11月下旬〜1月下旬（アイスヴィレッジは12月〜）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> エリア：北海道占冠村トマム・富良野市・南富良野</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-indigo-400" /> 旬グルメ：富良野和牛・ふらのチーズフォンデュ・ワイン</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              極寒が創り出す奇跡の青い氷の街と、白銀の富良野で味わう至高の肉とチーズ
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              北海道の中央部、大雪山系と日高山脈に抱かれたトマムと富良野。内陸特有の気候により、冬の寒さは時に氷点下20度から30度近くまで冷え込みます。しかし、この過酷な寒さこそが、世界中のスキーヤーや旅行者を熱狂させる「シルキースノー（極上の超ドライパウダースノー）」と、奇跡の氷の絶景を生み出す原動力です。
            </p>
            <p>
              その象徴が、星野リゾート トマムに12月から出現する幻想的な氷の街「アイスヴィレッジ」です。継ぎ目のない一枚の氷で作られた「氷の教会」、氷のカウンターで特別なカクテルを味わう「氷のBar」、滑らかな氷の上を滑り降りる「氷の滑り台」など、青い光にライトアップされた街並みはまるで童話の氷の王国そのもの。さらに、ゴンドラでアクセスする標高1,088mの「霧氷テラス」では、水蒸気が樹木に結晶化して咲いた純白の霧氷と、白銀に輝く日高山脈の大パノラマが眼前に広がります。
            </p>
            <p>
              一方、車や列車で約60分の富良野では、倉本聰氏プロデュースのクラフト工房街「ニングルテラス」が白銀の森の中に佇み、夕暮れ時から灯る温かな電球の光が冬の旅情を誘います。そして寒さで引き締まった体を内側から温めてくれるのが、北海道が誇る極上グルメ。厳しい寒暖差が肉質を引き締めた「富良野和牛」のステーキやすき焼き、地元産生乳を丹念に熟成させた「ふらのチーズ」をとろりと溶かした本格チーズフォンデュ、そして富良野盆地特有の天然温泉が、至福の冬のリゾートステイを演出してくれます。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <Snowflake className="w-4 h-4 text-indigo-700" />
                幻想の氷の街「アイスヴィレッジ」
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                氷点下30度の寒さが生む氷の教会や氷のBar。青い光に輝くドーム群とおとぎの氷体験。
              </p>
            </div>
            <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <Mountain className="w-4 h-4 text-indigo-700" />
                標高1088m「霧氷テラス」
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                ゴンドラで雲の上へ。白銀の結晶をまとった木々と日高山脈の雄大な冬パノラマを一望。
              </p>
            </div>
            <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <Utensils className="w-4 h-4 text-indigo-700" />
                富良野和牛＆濃厚チーズ
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                極上A5富良野和牛のステーキと、とろける熱々ふらのチーズフォンデュで温まるディナー。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-indigo-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              トマムの氷の絶景と富良野雪景色・富良野和牛を満喫する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期やプランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="md:w-2/5 relative min-h-[260px] md:min-h-full bg-stone-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-indigo-700" />
                        {hotel.access}
                      </span>
                      <span className="text-indigo-800 font-extrabold text-base sm:text-lg">
                        {hotel.price} <span className="text-xs font-normal text-stone-500">（税込目安）</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                      {hotel.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-indigo-50/40 p-3 rounded-xl border border-indigo-100/60">
                        <span className="font-bold text-indigo-900 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-900 block mb-1">【冬の味覚おすすめ】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <a 
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-800 hover:to-indigo-950 text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
                    >
                      <span>楽天トラベルで空室・冬限定プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Day Winter Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬のトマム氷の街と白銀の富良野 2泊3日白銀リゾートモデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-indigo-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：トマム到着と夕暮れのアイスヴィレッジ幻想体験
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                新千歳空港からJR特急またはリゾートバスで星野リゾート トマムへ到着。チェックイン後、まずは雪景色を望む露天風呂「木林の湯」で旅の疲れを癒やします。夕方17時、氷点下に冷え込む中、青い光に輝く「アイスヴィレッジ」へ。一枚氷のドームが並ぶ氷の街を歩き、氷のBarで氷グラスのカクテルを一杯。氷の滑り台を楽しんだ後、ホタルストリートのレストランで北海道産牛のグリルディナーを味わいます。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-indigo-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：山頂の「霧氷テラス」絶景と白銀の富良野・ニングルテラス
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝、雲海ゴンドラに乗車して標高1,088mの「霧氷テラス」へ。氷点下の空気の中で純白の霧氷をまとった木々と日高山脈の壮大な山並みを鑑賞。展望カフェで温かいスイーツを楽しんだ後、JRまたはリゾートライナーで富良野へ移動。新富良野プリンスホテルにチェックインし、夕暮れには雪の森に優しい灯りが灯る「ニングルテラス」のログハウスを散策。夜は富良野温泉「紫彩の湯」に浸かり、富良野和牛ステーキと濃厚ふらのチーズフォンデュに舌鼓。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-indigo-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：富良野の美景と北国の味覚・チーズ工房巡り
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                最終日は十勝岳連峰の雄大な雪景色を眺めながら「富良野チーズ工房」へ。本格チーズの製造工程を見学し、焼きたてのピッツァを堪能。市街地で名物「富良野オムカレー」を味わい、ふらのワインやチーズをお土産に購入。旭川空港または新千歳空港へ向かい、感動の北国冬リゾート旅行を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-indigo-950 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-indigo-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            氷点下30度のトマム・富良野を快適に楽しむ極寒対策とスマホの防寒
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-indigo-100 leading-relaxed pt-2">
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-indigo-800/60">
              <span className="font-bold text-white block">【スマホ・カメラの急速バッテリー消費対策】</span>
              <p>
                氷点下10度〜20度以下の極寒環境では、スマートフォンのリチウムイオンバッテリーが急激に電圧低下を起こし、残量があっても突然電源が落ちることが頻発します。スマホは外気に晒し続けず、衣服の内ポケット（体温に近い場所）や貼らないカイロと一緒に保温ケースに入れて携帯してください。モバイルバッテリーも必携です。
              </p>
            </div>
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-indigo-800/60">
              <span className="font-bold text-white block">【肌を露出させない完全防寒】</span>
              <p>
                夜のアイスヴィレッジや山頂の霧氷テラスでは、わずか数分間の肌の露出でも凍傷や激しい痛みの原因になります。耳当てやバラクラバ（目出し帽）、ネックウォーマーで顔全体を覆い、防風・防水のしっかりした厚手グローブを着用してください。靴下は綿を避け、保温性と吸湿性に優れた厚手のメリノウール製が必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-indigo-800" />
              トマム・富良野の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              北の大地の恵みが凝縮された富良野チーズとクラフト名品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-700" />
                富良野チーズ工房の「ワインチェダー」＆ふらのワイン「羆の撃」
              </h3>
              <p>
                富良野チーズ工房で作られる日本で唯一の「ワインチェダー」は、赤ワインをチーズの表面に練り込んだ美しい大理石模様と芳醇なアロマが特徴。冬の晩酌に最適で、地元産のぶどうだけで醸造される本格熟成赤ワイン「ふらのワイン 羆の撃（ひぐまのげき）」とともに購入すれば、北海道のテロワールを自宅でもじっくり楽しめます。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-700" />
                ニングルテラスの雪結晶クラフト＆フラノデリスの「ドゥーブルフロマージュ」
              </h3>
              <p>
                新富良野プリンスホテル敷地内の「ニングルテラス」では、「森のろうそく屋」の木漏れ日を模したアロマキャンドルや、本物の雪の結晶を閉じ込めたガラスアクセサリーが女性に大人気。スイーツでは、菓子工房フラノデリスの瓶入り「ふらの牛乳プリン」や、とろける2層のチーズケーキ「ドゥーブルフロマージュ」が冬の北海道を代表する絶品スイーツです。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-indigo-800" />
              北海道内陸の極寒環境・ディープダイブ解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              氷点下30度が生み出す「シルキースノー」と青い氷のドーム建築の秘密
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-indigo-700" />
                日本屈指の内陸性放射冷却と「水分含有率5%」の奇跡の粉雪
              </h3>
              <p>
                トマムと富良野は四方を日高山脈と十勝岳連峰に囲まれた盆地状の地形です。冬は海からの湿った風が山脈で遮られるため、日本海側やオホーツク海側と比べて湿度が非常に低く、放射冷却によって夜間に地表の熱が急激に宇宙へ逃げます。このマイナス20度を下回る極度の乾燥と冷気の中で降る雪は、水分含有率がわずか5%程度しかない「シルキースノー」となり、握っても固まらないサラサラの雪煙を巻き上げます。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Mountain className="w-4 h-4 text-indigo-700" />
                一枚氷で造り上げる「アイスヴィレッジ」の特殊特殊工法
              </h3>
              <p>
                アイスヴィレッジのドーム型氷建造物は、巨大な空気膜（風船のようなバルーン）を膨らませ、その上からトマムの極冷水を何日もかけて幾層にも吹き付けて凍らせ、氷の厚みが数十センチに達した後に内部のバルーンを抜くという特殊な工法で作られています。継ぎ目のない一体成型の氷だからこそ高い強度と透明度を誇り、日光や照明が当たると氷に含まれる微細な気泡が光を散乱させて神秘的なコバルトブルーに輝きます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-indigo-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期のトマム・富良野旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-indigo-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-indigo-800" />
            あわせて読みたい北海道の冬温泉＆スキーリゾート特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-niseko-powder-snow-ski-resort-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-indigo-700 font-bold block text-[10px]">北海道・ニセコ</span>
              <p className="font-bold text-stone-800 line-clamp-2">世界最高峰パウダースノーと羊蹄山雪景色・ラグジュアリースキーリゾート</p>
            </Link>
            <Link 
              href="/winter-hokkaido-toyako-onsen-lakeview-illumination-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-indigo-700 font-bold block text-[10px]">北海道・洞爺湖温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">洞爺湖イルミネーショントンネルとレイクビュー絶景温泉・冬の北海道牛</p>
            </Link>
            <Link 
              href="/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-indigo-700 font-bold block text-[10px]">北海道・函館湯の川温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">函館山雪夜景と津軽海峡の漁火を望む湯の川温泉・活イカ＆戸井マグロ</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
