import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sunrise, Waves, Sun, Flame, Landmark, Building, Fish, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月青森：蕪島神社初詣！名宿5選',
  description: '11月から1月、青森県八戸市は日本一脂が乗る「八戸前沖銀鯖」の最盛期を迎え、出汁の染みた熱々の「八戸せんべい汁」が極上の美味を放ちます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '八戸前沖さば, 銀鯖, 八戸せんべい汁, 八食センター, 七輪村, 蕪島神社 初詣, ドーミーイン本八戸, ダイワロイネットホテル八戸, グランドサンピア八戸, 八戸グランドホテル, コンフォートホテル八戸, みろく横丁, 11月 12月 1月 青森旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay/"
  },
  openGraph: {
    title: '11・12・1月青森：蕪島神社初詣！名宿5選',
    description: '11月から1月、青森県八戸市は日本一脂が乗る「八戸前沖銀鯖」の最盛期を迎え、出汁の染みた熱々の「八戸せんべい汁」が極上の美味を放ちます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の八戸港と太平洋の荒波・蕪島神社'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月青森：八戸前沖銀鯖と本場せんべい汁・八食センター七輪村買い出し＆蕪島神社初詣・太平洋一望の八戸名宿5選",
    description: "11月から1月、青森県八戸市は日本一脂が乗る「八戸前沖銀鯖」の最盛期を迎え、出汁の染みた熱々の「八戸せんべい汁」が極上の美味を放ちます。年末年始の活気あふれる八食センターでの買い出しと七輪村の炭火焼き、金運と株価上昇を願う蕪島神社の新春初詣、横丁文化が息づくみろく横丁。冬の八戸を心ゆくまで満喫する厳選名宿5選とモデルコースを徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function AomoriHachinoheKabushimaWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月青森：八戸前沖銀鯖と本場せんべい汁・八食センター七輪村買い出し＆蕪島神社初詣・太平洋一望の八戸名宿5選",
    description: "11月から1月、青森県八戸市は日本一脂が乗る「八戸前沖銀鯖」の最盛期を迎え、出汁の染みた熱々の「八戸せんべい汁」が極上の美味を放ちます。年末年始の活気あふれる八食センターでの買い出しと七輪村の炭火焼き、金運と株価上昇を願う蕪島神社の新春初詣、横丁文化が息づくみろく横丁。冬の八戸を心ゆくまで満喫する厳選名宿5選とモデルコースを徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay'
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
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '青森・八戸冬の銀鯖＆せんべい汁特集',
        item: 'https://croud-travel.pages.dev/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "八戸の冬の味覚「八戸前沖さば（銀鯖）」の特徴と旬の時期はいつですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "八戸前沖さばは、日本最北端のサバの主要漁場である三陸・青森県沖の冷涼な海水で育つブランド鯖です。水温が急激に低下する11月から12月にかけて、厳しい寒さに耐えるため魚体に良質な脂を大量に蓄え、粗脂肪分が20%〜30%を超えるものも現れます。その中でも特に大型で脂乗り抜群のものは「銀鯖（ぎんさば）」と呼ばれ、マグロのトロに匹敵する口どけと濃厚な甘みがあります。酢じめのシメサバ、焼き鯖、鯖しゃぶ、棒寿司など、冬にしか味わえない絶品の数々が揃います。"
        }
      },
      {
        '@type': 'Question',
        name: "本場の「八戸せんべい汁」の具材や出汁のこだわり、食べ方のポイントは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "八戸せんべい汁は、南部藩の伝統的な保存食文化から生まれた冬の郷土料理です。具材には南部地鶏やキジ肉、豚肉、ゴボウ、人参、長ネギ、キノコをたっぷり使い、醤油ベースの豊かな出汁で煮込みます。最大の特徴は、煮込んでも溶けにくい専用の「おつゆふせんべい（茅葺き煎餅）」を手で割って鍋に投入すること。出汁を吸い込みながらも中心部にモチモチとした独特の歯ごたえ（アルデンテ食感）が残る絶妙なタイミングでいただくのが本場の醍醐味で、体の芯からポカポカと温まります。"
        }
      },
      {
        '@type': 'Question',
        name: "「八食センター」の年末年始の営業状況と「七輪村」の利用方法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "八食センターは全長170メートルに約60店舗がひしめく巨大な市場で、年末年始（特に12月28日〜31日）は正月用の新巻鮭、毛ガニ、タラバガニ、マグロ、筋子を求める大勢の買い物客で早朝から熱気に包まれます。名物の「七輪村」は、館内の鮮魚店や精肉店で買ったばかりのホタテ、牡蠣、エビ、イカ、八戸前沖さば、倉石牛などを、炭火の七輪でその場で焼いて食べられる人気施設です。利用料（大人1名数百円）を支払い、トングやタレを受け取って焼きたての海の幸を豪快に味わえます。年末年始は混み合うため午前中の早めの利用がおすすめです。"
        }
      },
      {
        '@type': 'Question',
        name: "蕪島神社（かぶしまじんじゃ）の新春初詣の見どころとご利益は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "八戸市鮫町に位置する蕪島は、国の天然記念物に指定されているウミネコの繁殖地として有名です。島頂上に鎮座する蕪島神社は、弁財天を祀り、「蕪（かぶ）」の音が「株」に通じることから、商売繁盛、金運向上、株価上昇、開運招福のご利益があるとして、全国から投資家や企業経営者、初詣客が訪れます。11月から1月の冬期はウミネコは南へ渡っているため鳥はいませんが、雪化粧した石段と太平洋の荒波が打ち寄せる雄大な景観の中、厳かに新年の祈願を行うことができます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の八戸旅行での気候・積雪量と車や公共交通機関の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "八戸市は青森県内にありながら、太平洋側に位置するため津軽地方（青森市や弘前市）のような豪雪地帯ではなく、晴天の日が多いのが特徴です。ただし、降雪量は少ないものの、冬の朝晩は氷点下5度〜10度近くまで冷え込み、路面凍結（ブラックアイスバーン）が多発します。レンタカーを利用する場合はスタッドレスタイヤの装着が必須で、急ブレーキや急ハンドルを避けた慎重な運転が必要です。八戸駅から八食センターへは「100円バス（八食号）」が運行されており、公共交通機関でも便利に観光できます。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "天然温泉　南部の湯　ドーミーイン本八戸（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/166325/166325.jpg",
              rating: 4.47,
              reviews: 1594,
              price: "¥5,480〜",
              access: "ＪＲ八戸駅よりバスで20分（1番2番線）八日町で下車徒歩2分　本八戸駅南口より徒歩約11分。八戸繁華街まで徒歩1分！",
              special: "最上階天然温泉大浴場、高温サウナ完備！ご朝食は6時15分から営業",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166325%2F166325.html",
              story: "本八戸の中心市街地に位置し、ビジネスや観光の拠点として絶大な支持を集める「天然温泉 南部の湯 ドーミーイン本八戸」。最上階に備えられた天然温泉大浴場「南部の湯」は、内湯に加えて冷気を感じながら温まれる半露天風呂、本格的な高温ドライサウナと強冷水風呂を完備。冬の八戸の寒風で冷え切った体を芯から温め、旅の疲れを極上のととのいへと導きます。朝食ビュッフェでは、八戸の郷土料理である熱々の「せんべい汁」をはじめ、新鮮な海の幸を贅沢に盛り付けられる海鮮丼コーナーなど、ご当地グルメを朝から心ゆくまで堪能できるのが最大の魅力です。夜鳴きそばの無料サービスも冬の夜に嬉しいおもてなしです。",
              roomTip: "最上階フロアのダブルまたはクイーン客室。大浴場へのアクセスが良く、静かな環境で快適な睡眠環境が約束されます。",
              gourmetTip: "「ご当地逸品朝食バイキング」。南部地鶏の旨味が出たせんべい汁と、イクラやマグロを豪快に載せる勝手丼が朝から食べ放題。",
              highlights: [
                "最上階天然温泉「南部の湯」・露天風呂と本格高温サウナで極上のととのい体験",
                "朝食ビュッフェで名物せんべい汁と新鮮魚介の盛り放題勝手丼を贅沢に満喫",
                "夜間に嬉しい名物「夜鳴きそば」無料提供・清潔感あふれる快適ステイ"
              ]
            },
            {
              id: 2,
              name: "ダイワロイネットホテル八戸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76800/76800.jpg",
              rating: 4.28,
              reviews: 3852,
              price: "¥4,370〜",
              access: "JR八戸線「本八戸駅」から徒歩約10分／JR八戸駅より車で約20分／三沢空港よりバスで(約55分)八戸八日町下車徒歩すぐ",
              special: "◆2024年4月全客室リニューアル完了！八戸市中心街表通りでビジネス・観光の拠点におすすめの好立地！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76800%2F76800.html",
              story: "JR本八戸駅より徒歩圏内、八戸市街地メインストリートの角地に堂々と佇む「ダイワロイネットホテル八戸」。広々とした客室はモダンで落ち着いたインテリアで統一され、全室に加湿空気清浄機と充実したデスク環境を備えます。八戸名物の屋台街「みろく横丁」まで徒歩わずか3分という抜群の立地を誇り、冬の夜に赤提灯が灯る屋台巡りを楽しむにはこれ以上ない特等席。館内1階には地元でも評判のレストランが入り、厳選された八戸前沖さばの塩焼きや、郷土の味覚を取り入れた朝食が楽しめます。女性専用のアメニティやセキュリティもしっかりしており、カップルや一人旅にも安心のハイクラスホテルです。",
              roomTip: "コーナーツインルーム。2面採光の明るい窓から八戸市街の冬景色を一望でき、ゆったりとしたソファスペースで寛げます。",
              gourmetTip: "「和洋朝食ビュッフェ」。脂の乗った八戸前沖さばの焼き魚や、地元契約農家の冬野菜を使った温かい煮物料理が好評。",
              highlights: [
                "みろく横丁まで徒歩3分・八戸中心街の飲食街を遊び尽くせる抜群のロケーション",
                "広々とした客室に充実の設備・加湿空気清浄機完備で冬の乾燥対策も万全",
                "全室Wi-Fi完備と大型デスク・ビジネスから観光まで高い満足度を誇る安心品質"
              ]
            },
            {
              id: 3,
              name: "グランドサンピア八戸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29677/29677.jpg",
              rating: 4.23,
              reviews: 1436,
              price: "¥6,000〜",
              access: "300台収容の大駐車場無料！JR八戸駅よりお車で10分/八戸自動車道八戸ICから3分",
              special: "7種類の天然温泉＆ドライサウナ完備！八戸ICより約３分＆駐車場無料★Wi-Fi完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29677%2F29677.html",
              story: "八戸市街を見下ろす緑豊かな高台に建ち、太平洋の水平線から昇る朝日を望むリゾートホテル「グランドサンピア八戸」。敷地内からこんこんと湧き出る自家源泉「八戸温泉」大浴場は、ナトリウム-塩化物泉の温まりの湯。広々とした大浴槽や泡風呂、冬の澄んだ空気を感じる露天風呂で、贅沢な湯浴みを楽しめます。夕食は三陸沿岸で獲れた新鮮な魚介と青森県産牛、そして冬の八戸前沖銀鯖を職人が丁寧に仕立てる本格和食会席。館内にはスポーツ施設やリラクゼーションサロンも併設され、都会の喧騒を離れてゆったりとした時間を過ごしたい冬の家族旅行やご褒美旅に最適です。",
              roomTip: "オーシャンビュー高層階和洋室。朝の澄み切った大気の中、太平洋の水平線が黄金色に輝く夜明けのパノラマを独占できます。",
              gourmetTip: "「三陸冬の味覚・前沖銀鯖と青森牛会席」。とろけるような銀鯖の棒寿司と刺身、柔らかな県産牛の陶板焼きが競演する豪華会席。",
              highlights: [
                "八戸市街を見下ろす高台リゾート・自家源泉の天然温泉大浴場と太平洋の朝陽",
                "三陸冬の味覚・八戸前沖銀鯖と青森県産牛を堪能する極上会席コース",
                "広大な敷地と無料駐車場完備・冬の八戸ドライブやファミリー旅行に最適"
              ]
            },
            {
              id: 4,
              name: "八戸グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8663/8663.jpg",
              rating: 4.15,
              reviews: 1352,
              price: "¥2,640〜",
              access: "東北新幹線八戸駅より車で約15分／JR八戸線本八戸駅より徒歩12分／三沢空港より車で約40分/八戸ＩＣより１５分",
              special: "朝食に新メニュー登場、朝市みたいな朝食をご堪能ください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8663%2F8663.html",
              story: "昭和の文豪や国内外のVIPを迎え入れてきた伝統と格式を誇る老舗迎賓館「八戸グランドホテル」。八戸市街の中心、三八城（みやぎ）公園に隣接する閑静な立地にあり、クラシカルで品格ある空間が訪れる人々を温かく迎え入れます。最上階の展望レストランからは、雪化粧した八戸の街並みと遠く八戸港の工場夜景や太平洋の景観が広がり、冬の澄んだ夜空に輝く夜景ディナーは格別の美しさ。歴史あるホテルならではの洗練されたフレンチや伝統の日本料理では、八戸港水揚げの真鱈や銀鯖、冬野菜を贅沢に使用。落ち着いた大人の冬旅を上質に演出してくれます。",
              roomTip: "エグゼクティブツインルーム。上質なベッドリネンと重厚感ある調度品が配され、窓からは歴史ある三八城公園の緑と雪景色を望みます。",
              gourmetTip: "「展望メインダイニングの冬期特別ディナー」。八戸前沖さばのコンフィや三陸産平目のポワレなど、港町八戸の恵みを昇華させた逸品。",
              highlights: [
                "皇族も迎えた老舗迎賓館の品格・最上階展望レストランから望む雪景色と港の夜景",
                "地場食材を昇華させたクラシカルフレンチと八戸前沖さばの繊細な仕立て",
                "三八城公園の豊かな緑に寄り添う静寂の環境・記念日や大人の夫婦旅に相応しい空間"
              ]
            },
            {
              id: 5,
              name: "コンフォートホテル八戸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/78159/78159.jpg",
              rating: 4.19,
              reviews: 3261,
              price: "¥4,200〜",
              access: "■JR八戸駅東口より徒歩2分■八戸自動車道 八戸ICより約10分・八戸北ICより約15分■三沢空港より車で約45分",
              special: "リニューアル◆旅の合間にくつろげるライブラリーカフェ新設◆八戸の伝統を感じる空間",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78159%2F78159.html",
              story: "JR東北新幹線・八戸線の接続点である「八戸駅」東口を出て徒歩わずか2分の超好立地を誇る「コンフォートホテル八戸」。新幹線を降りて寒風に吹かれる間もなくチェックインできるアクセスの良さは、雪降る冬の青森旅行において何物にも代えがたい利便性です。全室禁煙のクリーンな客室には、快眠を追求したオリジナル寝具「チョイスピロー」を導入。無料の朝食サービスでは、日替わりのあったかスープや地元の味を取り入れたピラフ、焼きたてパンが提供されます。八戸駅を起点に八食センターへの直通バスやレンタカーを利用して蕪島・種差海岸へ向かう冬の観光拠点として圧倒的なコスパを誇ります。",
              roomTip: "ダブルエコノミー客室。機能的な動線と快適なデスクスペース、加湿器完備で、冬のフットワーク軽い旅に最適です。",
              gourmetTip: "「無料のあったか朝食ビュッフェ」。冬の朝に嬉しい熱々の季節野菜スープと挽きたてウェルカムコーヒーで体を内側から温めます。",
              highlights: [
                "JR八戸駅東口徒歩2分の圧倒的駅近・雪の日でも安心の軽快アクセスと無料朝食",
                "快眠ピロー導入で疲れを癒す快適客室・八食センターや蕪島への周遊拠点に最適",
                "コスパ抜群の宿泊料金・ウェルカムドリンクとあったかスープの無料朝食"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "八戸の冬の味覚「八戸前沖さば（銀鯖）」の特徴と旬の時期はいつですか？",
    "a": "八戸前沖さばは、日本最北端のサバの主要漁場である三陸・青森県沖の冷涼な海水で育つブランド鯖です。水温が急激に低下する11月から12月にかけて、厳しい寒さに耐えるため魚体に良質な脂を大量に蓄え、粗脂肪分が20%〜30%を超えるものも現れます。その中でも特に大型で脂乗り抜群のものは「銀鯖（ぎんさば）」と呼ばれ、マグロのトロに匹敵する口どけと濃厚な甘みがあります。酢じめのシメサバ、焼き鯖、鯖しゃぶ、棒寿司など、冬にしか味わえない絶品の数々が揃います。"
  },
  {
    "q": "本場の「八戸せんべい汁」の具材や出汁のこだわり、食べ方のポイントは？",
    "a": "八戸せんべい汁は、南部藩の伝統的な保存食文化から生まれた冬の郷土料理です。具材には南部地鶏やキジ肉、豚肉、ゴボウ、人参、長ネギ、キノコをたっぷり使い、醤油ベースの豊かな出汁で煮込みます。最大の特徴は、煮込んでも溶けにくい専用の「おつゆふせんべい（茅葺き煎餅）」を手で割って鍋に投入すること。出汁を吸い込みながらも中心部にモチモチとした独特の歯ごたえ（アルデンテ食感）が残る絶妙なタイミングでいただくのが本場の醍醐味で、体の芯からポカポカと温まります。"
  },
  {
    "q": "「八食センター」の年末年始の営業状況と「七輪村」の利用方法は？",
    "a": "八食センターは全長170メートルに約60店舗がひしめく巨大な市場で、年末年始（特に12月28日〜31日）は正月用の新巻鮭、毛ガニ、タラバガニ、マグロ、筋子を求める大勢の買い物客で早朝から熱気に包まれます。名物の「七輪村」は、館内の鮮魚店や精肉店で買ったばかりのホタテ、牡蠣、エビ、イカ、八戸前沖さば、倉石牛などを、炭火の七輪でその場で焼いて食べられる人気施設です。利用料（大人1名数百円）を支払い、トングやタレを受け取って焼きたての海の幸を豪快に味わえます。年末年始は混み合うため午前中の早めの利用がおすすめです。"
  },
  {
    "q": "蕪島神社（かぶしまじんじゃ）の新春初詣の見どころとご利益は？",
    "a": "八戸市鮫町に位置する蕪島は、国の天然記念物に指定されているウミネコの繁殖地として有名です。島頂上に鎮座する蕪島神社は、弁財天を祀り、「蕪（かぶ）」の音が「株」に通じることから、商売繁盛、金運向上、株価上昇、開運招福のご利益があるとして、全国から投資家や企業経営者、初詣客が訪れます。11月から1月の冬期はウミネコは南へ渡っているため鳥はいませんが、雪化粧した石段と太平洋の荒波が打ち寄せる雄大な景観の中、厳かに新年の祈願を行うことができます。"
  },
  {
    "q": "冬の八戸旅行での気候・積雪量と車や公共交通機関の注意点は？",
    "a": "八戸市は青森県内にありながら、太平洋側に位置するため津軽地方（青森市や弘前市）のような豪雪地帯ではなく、晴天の日が多いのが特徴です。ただし、降雪量は少ないものの、冬の朝晩は氷点下5度〜10度近くまで冷え込み、路面凍結（ブラックアイスバーン）が多発します。レンタカーを利用する場合はスタッドレスタイヤの装着が必須で、急ブレーキや急ハンドルを避けた慎重な運転が必要です。八戸駅から八食センターへは「100円バス（八食号）」が運行されており、公共交通機関でも便利に観光できます。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-sky-100 selection:text-sky-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の八戸港と太平洋の荒波・蕪島神社" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-sky-900/80 backdrop-blur-md text-sky-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-sky-400/30">
            <Fish className="w-4 h-4 text-sky-300" />
            11月・12月・1月 冬の青森・八戸前沖銀鯖＆せんべい汁特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月青森」八戸前沖銀鯖と本場せんべい汁・八食センター七輪村買い出し＆蕪島神社初詣・太平洋一望の八戸名宿5選</h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            北三陸の冷たい荒波が極上の脂を蓄えさせる日本一のブランド鯖「八戸前沖銀鯖」。南部地鶏の濃厚な出汁を吸ったモチモチの特製南部煎餅がたまらない冬の魂の鍋「八戸せんべい汁」。活気溢れる八食センターの年末年始買い出しと七輪村、金運と株価上昇を祈願する蕪島神社の新春初詣。北国の冬の滋味と熱気を体感する八戸の名宿ステイをご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-sky-400" /> 旬の時期：11月中旬〜1月下旬（銀鯖最盛期＆新春初詣）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-400" /> エリア：青森県八戸市（八食センター・蕪島・本八戸）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-sky-400" /> 旬グルメ：八戸前沖銀鯖・せんべい汁・七輪焼き・いちご煮</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              三陸の冷水が鍛え上げた日本一の脂乗りと、南部人の知恵が生んだ熱々郷土鍋
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              本州最北端の青森県において、太平洋側に位置する港町・八戸。津軽地方が深い豪雪に覆われる真冬、八戸は澄み渡る乾いた青空が広がり、太平洋から冷酷な浜風が吹き抜けます。この厳しい寒気と低水温こそが、八戸を全国に冠たる「魚の都」へと仕立て上げる最大の恵みです。11月から1月にかけての冬、三陸沖の海域は急激に水温が下がり、この海を回遊するサバは凍てつく海水から身を守るために極限まで脂を溜め込みます。これが、全国の料理人が「日本一脂が乗ったサバ」と絶賛する「八戸前沖さば（はちのへまえおきさば）」です。
            </p>
            <p>
              特に550グラム以上の大型で脂質含有量が20%〜30%を超える極上品は「銀鯖（ぎんさば）」の称号を与えられ、白く美しい霜降り状の身は口に含んだ瞬間に上質な脂が体温でとろけ出します。酢じめのシメサバはもちろん、炭火で滴る脂を焼き上げる塩焼き、出汁にくぐらせるサバしゃぶ、酢飯との相性が抜群の棒寿司など、冬の八戸で味わう銀鯖は従来の青魚の概念を根底から覆す感動をもたらします。
            </p>
            <p>
              そして、冷え切った旅人の体を内側から温めてくれるのが、南部藩の時代から受け継がれてきた名物「八戸せんべい汁」です。南部地鶏や季節の根菜から丁寧にとった醤油出汁に、煮込んでも型崩れしない専用の「おつゆふせんべい」をパキパキと手で割って投入。出汁の旨味を余すところなく吸い込みながら、中心にモチッとした絶妙な芯を残した煎餅の歯ごたえは、一度食べたら病みつきになる美味しさです。
            </p>
            <p>
              さらに、年末年始の八戸には特別な活気があります。全長170メートルに約60店舗が並ぶ巨大市場「八食センター」は、正月用の海産物を求める人々で熱気に満ち溢れ、買った魚介をその場で炭火焼きできる「七輪村」は大賑わい。また、太平洋の小島に建ち「株価が上がる・金運が上がる」として全国から参拝者が集まる「蕪島神社（かぶしまじんじゃ）」での新春初詣は、清々しい一年の始まりに相応しい厳かな祈りの場です。夜はレトロな赤提灯が並ぶ「みろく横丁」で地酒「陸奥八仙」を酌み交わす。冬の八戸には、心と胃袋を鷲掴みにする本物の旅の醍醐味が詰まっています。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の八戸を満喫する3つの絶対的ハイライト
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月の八戸だからこそ体験できる、極上の旬味と開運の絶景ポイント。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 脂乗り30%超の奇跡！極上「八戸前沖銀鯖」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                海水温が低下する11月〜12月に最盛期を迎える八戸前沖さば。特に大型の「銀鯖」は、マグロのトロを凌ぐ極上の甘みと舌触りを誇ります。炙り刺しや鯖しゃぶの贅沢な味わいは冬限定の至福です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 八食センター七輪村＆熱々せんべい汁
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                市場で買った活ホタテやカニをその場で七輪炭火焼きにする「七輪村」。そして南部地鶏の旨味出汁を吸ったモチモチ食感の「八戸せんべい汁」が、凍てつく冬の体を芯まで温めます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 「株が上がる」蕪島神社初詣＆横丁ハシゴ酒
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                太平洋の荒波を望む蕪島神社は、金運・商売繁盛・株価上昇の強力パワースポット。夜は八戸名物「みろく横丁」の屋台で、名酒「陸奥八仙」とともに地元の人情に触れる冬の夜長を過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Inns</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の八戸を味わい尽くす厳選ホテル＆温泉宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              天然温泉大浴場、みろく横丁至近の好立地、太平洋を望む絶景宿まで、楽天トラベル公式データに基づき厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col">
                  
                  {/* Hotel Image & Basic Badges */}
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-sky-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs">
                      厳選第 {hotel.id} 位
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl text-white text-xs flex justify-between items-center">
                      <div className="flex items-center gap-1 text-amber-300 font-bold">
                        <Star className="w-4 h-4 fill-amber-300" />
                        <span>{hotel.rating}</span>
                        <span className="text-slate-300 font-normal">({hotel.reviews}件)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-300 text-[10px] block">最安目安（1名/泊）</span>
                        <span className="text-sm font-black text-amber-300">{hotel.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Story & Details */}
                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                          {hotel.special}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                        {hotel.name}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-2 mb-4">
                        <span className="text-xs font-bold text-stone-700 block mb-1">宿の注目ポイント＆こだわり</span>
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Practical Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                        <div className="bg-sky-50/60 p-2.5 rounded-lg border border-sky-100">
                          <span className="font-bold text-sky-900 block mb-0.5">客室選びのヒント</span>
                          {hotel.roomTip}
                        </div>
                        <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">
                          <span className="font-bold text-amber-900 block mb-0.5">美食ポイント</span>
                          {hotel.gourmetTip}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-xs text-stone-500">
                        <MapPin className="w-3.5 h-3.5 inline mr-1 text-stone-400" />
                        {hotel.access}
                      </div>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-sm rounded-xl shadow-md transition-all shrink-0"
                      >
                        <span>空室・宿泊プランを確認する</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Course</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の八戸を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              銀鯖、せんべい汁、八食センターの買い出し、蕪島神社初詣、夜の横丁までを効率的に巡るタイムスケジュール。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-3 py-1 rounded-lg text-xs font-bold">
                1日目：八戸到着・八食センター七輪村＆みろく横丁
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 border-l-2 border-sky-200 pl-4">
                <li>
                  <span className="font-bold text-sky-900 block">11:30 JR八戸駅に到着・八食100円バスで移動</span>
                  新幹線で八戸駅に到着後、東口4番乗り場から運行されている「八食100円バス」に乗車し約15分で八食センターへ。
                </li>
                <li>
                  <span className="font-bold text-sky-900 block">12:00 八食センター「七輪村」で豪華炭火焼きランチ</span>
                  場内の鮮魚店で獲れたての活ホタテ、牡蠣、八戸前沖銀鯖、イカを購入し「七輪村」へ持ち込み。炭火でじっくり焼き上げて香ばしい海の幸を堪能。
                </li>
                <li>
                  <span className="font-bold text-sky-900 block">14:30 八食センターで年末年始の特産品買い出し</span>
                  新巻鮭、極上の筋子、南部煎餅、地酒「陸奥八仙」などのお土産を購入。地方発送カウンターも充実。
                </li>
                <li>
                  <span className="font-bold text-sky-900 block">16:30 ホテルにチェックイン・天然温泉で湯浴み</span>
                  本八戸市街または駅前のホテルへチェックイン。冬の冷えた体を大浴場で芯から温め、夜に備えてリフレッシュ。
                </li>
                <li>
                  <span className="font-bold text-sky-900 block">18:30 「みろく横丁」でハシゴ酒＆本場八戸せんべい汁</span>
                  昭和の風情が残る屋台街「みろく横丁」へ。地元の郷土料理屋で本場の「八戸せんべい汁」と「銀鯖の串焼き」を地酒とともに味わう。
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold">
                2日目：蕪島神社新春初詣＆種差海岸冬景色
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 border-l-2 border-amber-200 pl-4">
                <li>
                  <span className="font-bold text-amber-900 block">08:00 ホテルで郷土色豊かな朝食を堪能</span>
                  八戸せんべい汁や新鮮な魚介を盛り付けた勝手丼でエネルギーをチャージし、チェックアウト。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">09:30 JR八戸線で鮫駅へ・「蕪島神社」で新春初詣</span>
                  鮫駅から徒歩15分で蕪島へ。雪の石段を登り、太平洋を一望する蕪島神社で「株価上昇」「金運・開運」の祈願。名物の「かぶあがり御守」を拝受。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">11:30 「種差海岸（葦毛崎展望台）」で太平洋の荒波観賞</span>
                  八戸線またはワンコインバスうみねこ号で種差海岸エリアへ。白銀の雪と紺碧の太平洋が織りなす冬の絶景パノラマを堪能。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">13:00 種差海岸カフェまたは駅前食堂で「いちご煮」ランチ</span>
                  ウニとアワビの贅沢な潮汁「いちご煮」を炊き込んだいちご煮ご飯や、熱々の磯ラーメンで温まる。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">15:30 八戸駅へ帰着・お土産購入後、新幹線で帰路へ</span>
                  八戸駅ビル「ユートリー」でお土産を最終確認し、東北新幹線で心地よい余韻に浸りながら帰路へ。
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Travel Guide & Practical Tips */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の八戸旅行を快適に楽しむための実践ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4 text-sky-600" />
                気候と防寒対策
              </h3>
              <p>
                八戸の冬は降雪こそ比較的少ないものの、太平洋からの「やませ」などの浜風が非常に冷たく、体感温度は氷点下まで下がります。防風性の高いロングダウンジャケット、耳あて付きニット帽、手袋、マフラーが必須です。靴は滑り止め溝の深い防寒ブーツが安心です。
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-sky-600" />
                路面凍結と交通事情
              </h3>
              <p>
                雪が少ない分、夜間に濡れたアスファルトが凍結する「ブラックアイスバーン」が発生しやすくなります。レンタカーを運転する場合はスタッドレスタイヤ必須で、急減速・急ハンドルは厳禁。市内観光は「八食100円バス」やJR八戸線を上手に活用するのが賢明です。
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-600" />
                年末年始の買い出しと初詣
              </h3>
              <p>
                12月28日〜31日の八食センターは早朝から大変な賑わいを見せます。七輪村や人気鮮魚店を利用する場合は朝9時〜10時台の早い時間帯を目指しましょう。蕪島神社の元旦初詣は午前中が比較的スムーズに参拝でき、新春の御守授与も行われます。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい東北・北国の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-aomori-shimofuro-onsen-oma-maguro-ankou-tsugaru-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-sky-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded block w-fit mb-2">青森・下北半島</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-sky-600 line-clamp-2">
                  下風呂温泉と冬の大間マグロ・津軽海峡アンコウ鍋ステイ
                </h3>
              </div>
              <span className="text-xs text-sky-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-sky-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded block w-fit mb-2">青森・十和田八甲田</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-sky-600 line-clamp-2">
                  奥入瀬渓流の氷瀑ライトアップと八甲田雪見秘湯ステイ
                </h3>
              </div>
              <span className="text-xs text-sky-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-iwate-sanriku-kotatsu-train-kaisen-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-sky-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded block w-fit mb-2">岩手・三陸鉄道</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-sky-600 line-clamp-2">
                  三陸鉄道こたつ列車と冬の三陸海鮮・絶景パノラマステイ
                </h3>
              </div>
              <span className="text-xs text-sky-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-sky-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded block w-fit mb-2">岩手・花巻温泉郷</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-sky-600 line-clamp-2">
                  花巻温泉郷の雪見露天風呂と前沢牛・宮沢賢治の世界を巡る宿
                </h3>
              </div>
              <span className="text-xs text-sky-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の八戸旅行に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200 rounded-2xl p-5 hover:border-sky-200 transition-colors">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Editorial Note */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の北三陸・八戸で出会う、魂を揺さぶる極上の美味と人情
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            寒風吹き抜ける太平洋の海原、立ち上る七輪の煙と出汁の香り、そして屋台の暖簾の向こうで交わされる温かな笑顔。11月から1月の八戸は、寒冷な気候だからこそ人の温もりと海の恵みがひときわ輝く特別な季節です。本物の八戸前沖銀鯖とせんべい汁を味わう冬の旅へ、ぜひ出かけてみませんか。
          </p>
          <div className="pt-4">
            <Link 
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors text-sm"
            >
              <span>冬の特集一覧へ戻る</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
