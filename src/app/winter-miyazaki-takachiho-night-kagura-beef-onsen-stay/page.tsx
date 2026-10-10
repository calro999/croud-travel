import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月宮崎：天岩戸神社初詣！名宿5選',
  description: '11月中旬から2月上旬、神話の里・宮崎県高千穂町では、国の重要無形民俗文化財に指定されている「高千穂の夜神楽（よかぐら）」が奉納される冬の神。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '高千穂 夜神楽 冬, 高千穂峡 真名井の滝, 高千穂牛 宿泊, 天岩戸神社 初詣, 天安河原, 旅館 神仙, 神隠れ 高千穂, ソレスト高千穂ホテル, ホテル高千穂, ホテル グレイトフル高千穂, 11月 12月 1月 宮崎旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyazaki-takachiho-night-kagura-beef-onsen-stay/"
  },
  openGraph: {
    title: '11・12・1月宮崎：天岩戸神社初詣！名宿5選',
    description: '11月中旬から2月上旬、神話の里・宮崎県高千穂町では、国の重要無形民俗文化財に指定されている「高千穂の夜神楽（よかぐら）」が奉納される冬の神。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-miyazaki-takachiho-night-kagura-beef-onsen-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の宮崎県高千穂峡真名井の滝と神話の風景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月宮崎：国の重要無形民俗文化財・高千穂の「夜神楽」と神秘の高千穂峡・最高峰「高千穂牛」＆天岩戸神社初詣を巡る神話の冬名宿5選",
    description: "11月中旬から2月上旬、神話の里・宮崎県高千穂町では、国の重要無形民俗文化財に指定されている「高千穂の夜神楽（よかぐら）」が奉納される冬の神聖なシーズンを迎えます。阿蘇の溶岩が削り出した柱状節理の渓谷美を誇る「高千穂峡・真名井の滝」、天照大神の岩戸隠れ伝説が息づく「天岩戸神社」や無数の積石が神秘的な「天安河原」での冬の初詣。そして内閣総理大臣賞を受賞した最高峰ブランド黒毛和牛「高千穂牛」の極上会席。日本発祥の神話と祈りに包まれる冬の名宿5選とモデルコースをお届けします。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function MiyazakiTakachihoNightKaguraWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月宮崎：国の重要無形民俗文化財・高千穂の「夜神楽」と神秘の高千穂峡・最高峰「高千穂牛」＆天岩戸神社初詣を巡る神話の冬名宿5選",
    description: "11月中旬から2月上旬、神話の里・宮崎県高千穂町では、国の重要無形民俗文化財に指定されている「高千穂の夜神楽（よかぐら）」が奉納される冬の神聖なシーズンを迎えます。阿蘇の溶岩が削り出した柱状節理の渓谷美を誇る「高千穂峡・真名井の滝」、天照大神の岩戸隠れ伝説が息づく「天岩戸神社」や無数の積石が神秘的な「天安河原」での冬の初詣。そして内閣総理大臣賞を受賞した最高峰ブランド黒毛和牛「高千穂牛」の極上会席。日本発祥の神話と祈りに包まれる冬の名宿5選とモデルコースをお届けします。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
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
      '@id': 'https://croud-travel.pages.dev/winter-miyazaki-takachiho-night-kagura-beef-onsen-stay'
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
        name: '高千穂夜神楽＆神話名宿特集',
        item: 'https://croud-travel.pages.dev/winter-miyazaki-takachiho-night-kagura-beef-onsen-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬の「高千穂の夜神楽」の開催期間・見どころと観光客が鑑賞する方法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "国の重要無形民俗文化財「高千穂の夜神楽」は、秋の収穫への感謝と翌年の豊作を祈る神事で、毎年11月中旬から翌年2月上旬にかけて町内の集落ごとに神楽宿（民家や公民館）を設けて夕方から翌朝まで三十三番の神楽が夜を徹して奉納されます。地域の伝統行事ですが、観光客向けには「高千穂神社」の神楽殿にて毎日20時より「高千穂神楽（観光神楽）」が開催されています（要予約・約1時間）。代表的な四番「手力雄の舞」「鈿女の舞」「戸取の舞」「御神体の舞」が上演され、天照大神の岩戸隠れ神話の迫力とユーモアを気軽に体感できます。冬の神楽殿は冷え込むため防寒着を持参してください。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の高千穂峡の魅力と貸しボートの運行状況について教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "阿蘇溶岩が冷え固まってできた柱状節理の断崖が続く「高千穂峡」（国指定名勝・天然記念物）。冬（11月〜1月）は水質が最も澄み渡る季節で、落差17mの「真名井の滝」が注ぎ込む水面は吸い込まれそうなエメラルドグリーンに輝きます。貸しボートは冬期も基本的に通年運航（増水時や点検時を除く）されています。完全事前予約制（ネット予約）となっており、冬の朝の澄み切った大気の中で見上げる滝の姿は圧巻です。また、峡谷沿いの遊歩道（約1km）を散策するだけでも、雪化粧した岩肌とエメラルドの水鏡が織りなす崇高な絶景を満喫できます。"
        }
      },
      {
        '@type': 'Question',
        name: "「天岩戸神社」と「天安河原」の冬の参拝・初詣の見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "天照大神が隠れこもった洞窟「天岩戸」をご神体として祀る天岩戸神社（西本宮）は、日本神話の最重要聖地の一つです。社務所で申し込むと神職の案内でお祓いを受け、遥拝所から谷を挟んだ御神体「天岩戸」を直接拝観できます。西本宮から岩戸川の清流沿いに徒歩約10分歩いた先にある「天安河原（あまのやすかわら）」は、八百万の神が集まって相談したとされる大洞窟（仰慕窟）。洞窟内外に参拝者が願いを込めて積んだ無数の小石の塔が立ち並び、冬の清澄な空気と相まって圧倒的な神秘的エネルギーを感じるパワースポットです。年末年始の初詣には県内外から多くの参拝者が訪れます。"
        }
      },
      {
        '@type': 'Question',
        name: "日本一の和牛「高千穂牛」の特徴とおすすめの食べ方は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "高千穂牛は、5年に一度開催され「和牛のオリンピック」と呼ばれる全国和牛能力共進会において最高賞の内閣総理大臣賞を受賞した最高峰の黒毛和牛です。高千穂の澄んだ空気と清らかな湧水、朝晩の寒暖差の中で丹精込めて育てられます。最大の特徴は、きめ細かく繊細に入った霜降り（サシ）と、口の中の体温でさらりと溶ける良質な不飽和脂肪酸。脂っこさが一切なく、芳醇な肉の香りと赤身の強い旨味が広がります。冬の宿でいただくステーキや陶板焼きのほか、地元で愛される特製割り下の「すき焼き」は、冬の寒さを忘れさせる贅沢な味わいです。"
        }
      },
      {
        '@type': 'Question',
        name: "冬に車で高千穂へ向かう際のアクセスルートと道路の積雪・凍結注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "高千穂町へは、熊本方面からは阿蘇くじゅう国立公園を経由して国道218号線、宮崎・延岡方面からは九州中央自動車道（無料区間）を利用してアクセスします。高千穂は九州にありながら九州山地の山間部に位置するため、12月〜1月は朝晩の気温が氷点下まで下がり、降雪や路面凍結（特にトンネル出入口や橋の上）が発生することがあります。車で訪れる場合は必ずスタッドレスタイヤを装着するかタイヤチェーンを携行してください。熊本空港からの特急バス「たかちほ号」や延岡駅からの路線バスを利用するのも快適で安心なアクセス手段です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "高千穂　旅館　神仙",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30082/30082.jpg",
              rating: 4.80,
              reviews: 245,
              price: "¥49,500〜",
              access: "高千穂バスセンターよりタクシーで５分／九州自動車道　松橋ＩＣより車で約１００分",
              special: "＜クチコミ総合4.8＞最高の心のおもてなしと至福のひと時",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30082%2F30082.html",
              story: "高千穂神社の参道近く、閑静な緑に包まれ全国の旅慣れた食通やVIPが絶賛する最高峰の料亭旅館「高千穂 旅館 神仙」。数寄屋造りの雅な館内には青畳とお香の香りが満ち、全室に趣の異なる専用庭園が備えられています。冬の澄んだ大気のもと、露天風呂から見上げる星空と静寂は格別の癒やし。最大の魅力は「全国和牛能力共進会」で内閣総理大臣賞に輝いた最高峰ブランド「高千穂牛」を贅沢に使った京風本格懐石。サシがきめ細かく融点が低い高千穂牛のステーキは、口に入れた瞬間にとろける極上の脂の甘みが広がります。夜には高千穂神社の夜神楽観賞への送迎も手厚く、贅を尽くした大人の冬旅が叶います。",
              roomTip: "庭園露天風呂付き離れ客室。凛とした冬の日本庭園を眺めながら、客室専用の総檜露天風呂で誰にも邪魔されない静謐なひとときを過ごせます。",
              gourmetTip: "「最高峰高千穂牛極み懐石」。A5ランク高千穂牛の炭火焼きステーキを中心に、宮崎の旬の山海の恵みを彩り豊かに仕立てた至高の料理。",
              highlights: [
                "数寄屋造りの贅を尽くした料亭旅館・全室日本庭園付き露天風呂と内閣総理大臣賞高千穂牛懐石",
                "夜神楽観賞への専用送迎やおもてなしの極み・クチコミ4.8を誇る憧れの最高級旅館",
                "記念日や人生の節目を彩る特別な滞在・五感が洗われる神話の里の最高峰ホスピタリティ"
              ]
            },
            {
              id: 2,
              name: "高千穂　離れの宿　神隠れ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/146124/146124.jpg",
              rating: 4.78,
              reviews: 233,
              price: "¥29,700〜",
              access: "延岡駅より車にて約5０分",
              special: "【総合★4.8】華鳥風月を映した和モダン客室と、高千穂の旬食材を堪能できる特別な宿で心安らぐ時間を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146124%2F146124.html",
              story: "高千穂の中心部に位置しながら、竹林に囲まれ隠れ里のような静寂をたたえる全室離れのデザイナーズ宿「高千穂 離れの宿 神隠れ」。かつて神々が遊んだとされる高千穂の自然に溶け込むモダン和風の建築美が人気を集めています。全8室の離れ客室にはそれぞれ専用の温泉内湯や露天風呂が完備され、肌にしっとりと染み渡る美肌の湯を源泉掛け流し感覚で24時間楽しめます。夕食には地元高千穂産の新鮮な冬野菜と、柔らかな高千穂牛のローストビーフや陶板焼きを取り入れた創作郷土懐石。プライベート感を最重視した滞在で、カップルやご夫婦の冬の記念日旅行に最高の選択肢です。",
              roomTip: "離れ和洋室。専用の半露天風呂を備え、竹林を吹き抜ける冬風の音に耳を傾けながら穏やかな時間に浸ることができます。",
              gourmetTip: "「高千穂牛創作美食懐石」。ジューシーな高千穂牛の陶板焼きとともに、山女魚の塩焼きや高千穂郷土の煮物など素材を生かした料理が並びます。",
              highlights: [
                "全室離れの静寂な隠れ宿・竹林に佇む専用半露天風呂と高千穂牛創作美食のプライベートステイ",
                "わずか8室の大人の隠れ家・肌に優しい美肌温泉風呂と手作りの郷土美食会席",
                "カップルやご夫婦旅に最適な静けさ・日常を離れて神話の世界に溶け込む贅沢な時間"
              ]
            },
            {
              id: 3,
              name: "ソレスト高千穂ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165619/165619.jpg",
              rating: 4.04,
              reviews: 312,
              price: "¥16,580〜",
              access: "■高千穂神社まで徒歩約5分。高千穂バスセンターより徒歩約8分。延岡駅よりお車にて約１時間",
              special: "高千穂の山々に囲まれた自然なエッセンスを取り入れお客様へ上質なくつろぎの空間をご提供致します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165619%2F165619.html",
              story: "高千穂神社まで徒歩約5分という抜群のロケーションに建ち、神話の里の情緒と現代的な機能美が心地よく調和するホテル「ソレスト高千穂ホテル」。白と木目を基調とした清潔感あふれる館内は、女性の一人旅からファミリーまで幅広い旅行者に愛されています。ロビーには高千穂の伝統文化を紹介するライブラリーや広々としたテラスがあり、夜には高千穂神社の「夜神楽」へ歩いて気軽に参拝できる立地が最大の強み。レストランでは宮崎県産の旬の食材をふんだんに使用したディナーコースを提供。高千穂牛のグリルや地鶏料理を洗練されたスタイルで堪能できます。",
              roomTip: "デラックスツインルーム。シモンズ社製ベッドと広々としたソファスペースを備え、散策の疲れをゆったりと癒やす快適な空間です。",
              gourmetTip: "「シェフ特製・宮崎牛＆高千穂牛ディナーコース。」。上質な赤身と脂のバランスが絶妙な牛ステーキを特製ソースと地元産岩塩でさっぱりと。",
              highlights: [
                "高千穂神社まで徒歩5分・夜神楽観賞に最適な好立地とモダンで快適なデザイナーズホテル",
                "シモンズ製ベッドの快適な眠りと清潔な館内・洗練されたディナーコースと地酒",
                "広々としたロビーラウンジとライブラリー・女性グループや一人旅にも大人気の快適空間"
              ]
            },
            {
              id: 4,
              name: "ホテル高千穂",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67935/67935.jpg",
              rating: 4.43,
              reviews: 809,
              price: "¥8,700〜",
              access: "熊本ICから南阿蘇経由で１時間半。阿蘇～高千穂周遊もおすすめ！延岡ICから４５分　高千穂峡から徒歩13分",
              special: "つい、大自然に声をかけたくなるホテル♪　ひとり旅の女性やお子様連れのご家族も安心して御宿泊できます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67935%2F67935.html",
              story: "高千穂峡まで車でわずか数分、高千穂の雄大な山並みを見渡す高台に位置し、大浴場や露天風呂を完備した観光拠点ホテル「ホテル高千穂」。自然光が差し込む広々とした大浴場では、冬の観光で冷えた手足を思い切り伸ばして温まることができます。サウナや水風呂も完備され、旅の疲労回復に最適。夕食には宮崎の誇る黒毛和牛のすき焼きや陶板焼き、清流山女魚の塩焼き、チキン南蛮など、宮崎・高千穂のご当地グルメを網羅した会席料理がテーブルを華やかに彩ります。高千穂峡ボート乗り場や高千穂神社へのアクセスもスムーズで、家族連れやグループ旅行にも大人気です。",
              roomTip: "リウンテンビュー和洋室。畳スペースとベッドを両立し、窓から朝霧に包まれる高千穂の山並みを眺めながら寛げます。",
              gourmetTip: "「高千穂牛すき焼き会席」。特製の割り下で甘辛く煮込んだ柔らかい高千穂牛を地元産の新鮮卵に絡めていただく、冬の贅沢鍋です。",
              highlights: [
                "高台から高千穂の山並みを望む展望・広々とした大浴場とサウナ＆高千穂牛すき焼き会席",
                "高千穂峡まで車ですぐの観光拠点・宮崎の郷土料理とチキン南蛮を味わえる充実の夕食",
                "家族連れや三世代旅行にも安心の和洋室・四季折々の自然美を愛でる開放的な湯処"
              ]
            },
            {
              id: 5,
              name: "ホテル　グレイトフル高千穂",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130077/130077.jpg",
              rating: 4.16,
              reviews: 769,
              price: "¥8,000〜",
              access: "高千穂バスセンターより徒歩にて10分◇延岡駅より車にて55分◇高千穂峡より車にて10分◇熊本空港より車にて1時間半",
              special: "観光、ビジネスに好立地！☆Wi-Fi完備☆★ファミリーマート(24h)あり★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130077%2F130077.html",
              story: "高千穂の町歩きや飲食店街に近い中心部に建ち、利便性とコストパフォーマンスの高さで高いクチコミ評価を集める機能的なホテル「ホテル グレイトフル高千穂」。1階にはコンビニエンスストアが直結しており、冬の早朝出発や夜間の買い出しにもこれ以上ない便利さを誇ります。シンプルながら隅々まで手入れの行き届いた清潔な客室は、ビジネスから一人旅、観光ドライブまで幅広く対応。ホテル周辺には高千穂牛の炭火焼肉店や郷土居酒屋が点在しており、夜は地元の人気店で自由に高千穂グルメを楽しみたいアクティブ派の旅人にも最適な拠点です。",
              roomTip: "スタンダードツインルーム。清潔感のあるベッドと使い勝手の良いデスクを備え、静かで快適な睡眠を約束してくれます。",
              gourmetTip: "「和洋バイキング朝食」。宮崎県産米の炊きたてご飯と、地元の新鮮野菜、郷土料理のお惣菜が揃うヘルシーで温かな朝食。",
              highlights: [
                "コンビニ直結で抜群の利便性・清潔で機能的な客室と町内の高千穂牛焼肉店散策に最適な拠点",
                "高千穂バスセンター至近で電車・バス旅にも安心・コストパフォーマンス抜群の宿泊体験",
                "ビジネスから観光まで柔軟に対応・地元の新鮮食材を味わえる朝食バイキング"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬の「高千穂の夜神楽」の開催期間・見どころと観光客が鑑賞する方法は？",
    "a": "国の重要無形民俗文化財「高千穂の夜神楽」は、秋の収穫への感謝と翌年の豊作を祈る神事で、毎年11月中旬から翌年2月上旬にかけて町内の集落ごとに神楽宿（民家や公民館）を設けて夕方から翌朝まで三十三番の神楽が夜を徹して奉納されます。地域の伝統行事ですが、観光客向けには「高千穂神社」の神楽殿にて毎日20時より「高千穂神楽（観光神楽）」が開催されています（要予約・約1時間）。代表的な四番「手力雄の舞」「鈿女の舞」「戸取の舞」「御神体の舞」が上演され、天照大神の岩戸隠れ神話の迫力とユーモアを気軽に体感できます。冬の神楽殿は冷え込むため防寒着を持参してください。"
  },
  {
    "q": "冬の高千穂峡の魅力と貸しボートの運行状況について教えてください。",
    "a": "阿蘇溶岩が冷え固まってできた柱状節理の断崖が続く「高千穂峡」（国指定名勝・天然記念物）。冬（11月〜1月）は水質が最も澄み渡る季節で、落差17mの「真名井の滝」が注ぎ込む水面は吸い込まれそうなエメラルドグリーンに輝きます。貸しボートは冬期も基本的に通年運航（増水時や点検時を除く）されています。完全事前予約制（ネット予約）となっており、冬の朝の澄み切った大気の中で見上げる滝の姿は圧巻です。また、峡谷沿いの遊歩道（約1km）を散策するだけでも、雪化粧した岩肌とエメラルドの水鏡が織りなす崇高な絶景を満喫できます。"
  },
  {
    "q": "「天岩戸神社」と「天安河原」の冬の参拝・初詣の見どころは？",
    "a": "天照大神が隠れこもった洞窟「天岩戸」をご神体として祀る天岩戸神社（西本宮）は、日本神話の最重要聖地の一つです。社務所で申し込むと神職の案内でお祓いを受け、遥拝所から谷を挟んだ御神体「天岩戸」を直接拝観できます。西本宮から岩戸川の清流沿いに徒歩約10分歩いた先にある「天安河原（あまのやすかわら）」は、八百万の神が集まって相談したとされる大洞窟（仰慕窟）。洞窟内外に参拝者が願いを込めて積んだ無数の小石の塔が立ち並び、冬の清澄な空気と相まって圧倒的な神秘的エネルギーを感じるパワースポットです。年末年始の初詣には県内外から多くの参拝者が訪れます。"
  },
  {
    "q": "日本一の和牛「高千穂牛」の特徴とおすすめの食べ方は？",
    "a": "高千穂牛は、5年に一度開催され「和牛のオリンピック」と呼ばれる全国和牛能力共進会において最高賞の内閣総理大臣賞を受賞した最高峰の黒毛和牛です。高千穂の澄んだ空気と清らかな湧水、朝晩の寒暖差の中で丹精込めて育てられます。最大の特徴は、きめ細かく繊細に入った霜降り（サシ）と、口の中の体温でさらりと溶ける良質な不飽和脂肪酸。脂っこさが一切なく、芳醇な肉の香りと赤身の強い旨味が広がります。冬の宿でいただくステーキや陶板焼きのほか、地元で愛される特製割り下の「すき焼き」は、冬の寒さを忘れさせる贅沢な味わいです。"
  },
  {
    "q": "冬に車で高千穂へ向かう際のアクセスルートと道路の積雪・凍結注意点は？",
    "a": "高千穂町へは、熊本方面からは阿蘇くじゅう国立公園を経由して国道218号線、宮崎・延岡方面からは九州中央自動車道（無料区間）を利用してアクセスします。高千穂は九州にありながら九州山地の山間部に位置するため、12月〜1月は朝晩の気温が氷点下まで下がり、降雪や路面凍結（特にトンネル出入口や橋の上）が発生することがあります。車で訪れる場合は必ずスタッドレスタイヤを装着するかタイヤチェーンを携行してください。熊本空港からの特急バス「たかちほ号」や延岡駅からの路線バスを利用するのも快適で安心なアクセス手段です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-100 selection:text-cyan-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の宮崎県高千穂峡真名井の滝と夜神楽の風景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-rose-900/80 backdrop-blur-md text-rose-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-rose-400/30">
            <Flame className="w-4 h-4 text-rose-300" />
            11月・12月・1月 冬の神話の里・国の重要無形民俗文化財「高千穂の夜神楽」＆最高峰高千穂牛特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月宮崎」国の重要無形民俗文化財・高千穂の「夜神楽」と神秘の高千穂峡・最高峰「高千穂牛」＆天岩戸神社初詣を巡る神話の冬名宿5選</h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            神々が降り立った「天孫降臨」の地として尊ばれる宮崎県高千穂町。冬の夜、集落の神楽宿や高千穂神社で夜を徹して奉納される国の重要無形民俗文化財「高千穂の夜神楽」は、笛と太鼓の音色とともに古代の神話を今に甦らせる魂の神事です。冬の水鏡がエメラルド色に輝く高千穂峡、天照大神がお隠れになった天岩戸神社と天安河原の冬の初詣、そして内閣総理大臣賞に輝く最高峰「高千穂牛」の美食。心身が研ぎ澄まされる冬の聖地巡礼の旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 最適時期：11月中旬〜1月下旬（夜神楽奉納期間・初詣・澄んだ水鏡）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア：宮崎県西臼杵郡高千穂町</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-rose-400" /> 名物：最高峰高千穂牛ステーキ・すき焼き・高千穂釜炒り茶・竹筒かっぽ酒・チキン南蛮</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              神代の記憶が静まり返る冬の渓谷と、夜空に響く神楽囃子の崇高な祈り
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              九州山地の険しい山々に抱かれ、日本神話の数々の舞台として知られる宮崎県高千穂町。阿蘇山の古代の大噴火による火砕流が急激に冷却してできた柱状節理の断崖が約7キロにわたって続く「高千穂峡」は、冬を迎えると息をのむほどの透明度と静寂に包まれます。
            </p>
            <p>
              11月から1月の冬期、落差17メートルの名瀑「真名井の滝」が注ぐ川面は、一年で最も澄み渡ったエメラルドグリーンに染まり、朝霧の立ち込める峡谷は神々の気配を漂わせる崇高な美しさを湛えます。断崖から垂れ下がる氷柱や、晴れた日の太陽光が水しぶきを虹色に染め抜く光景は、冬の高千穂を訪れた者だけが出逢える奇蹟の瞬間です。
            </p>
            <p>
              そして、高千穂の冬を語る上で欠かせないのが、国の重要無形民俗文化財に指定されている「高千穂の夜神楽」です。毎年11月中旬から2月上旬にかけて、町内各地の集落で夜を徹して三十三番の神楽が舞い継がれます。笛の哀愁を帯びた音色と勇壮な太鼓のリズムに乗せて、神々が降臨し、天照大神が岩戸から現れる神話の場面が目の前で繰り広げられます。高千穂神社の神楽殿でも毎晩「高千穂神楽」が公開され、旅人たちに神話の世界の真髄を伝えています。
            </p>
            <p>
              参拝の後には、神話の里が育んだ最高峰の美食が待っています。和牛の全国品評会で最高峰の内閣総理大臣賞に輝いた「高千穂牛」は、きめ細かな霜降りと口溶けの良い脂、力強い赤身の旨味が調和した極上の逸品。炭火焼きステーキや熱々のすき焼きで味わう幸福感は格別です。青竹の香りが移った地酒「かっぽ酒」を傾け、数寄屋造りの名宿や静寂の離れで過ごす冬の夜は、日々の喧騒を洗い流し、魂を深く満たしてくれます。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の高千穂で体感すべき3つのプレミアムな魅力
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月だからこそ出逢える、国の重要無形文化財の神楽と神聖な初詣、日本一の高千穂牛。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 国の重要無形民俗文化財「高千穂の夜神楽」の荘厳な舞
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                冬の夜に奉納される古代神話の三十三番の舞。高千穂神社神楽殿での毎夜公開や集落の神楽宿で、神々の躍動とユーモアが織りなす神秘の世界を体感。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 冬のエメラルドブルー輝く高千穂峡と天岩戸神社初詣
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                水が最も澄み切る冬の高千穂峡・真名井の滝。天照大神の洞窟を祀る天岩戸神社と無数の積石が並ぶ天安河原で、新年の開運を祈る厳かな初詣。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 内閣総理大臣賞受賞の最高峰「高千穂牛」極上会席
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                日本一の称号を持つ黒毛和牛。口溶けの良い繊細な霜降りと芳醇な香りを炭火焼きステーキやすき焼きで堪能。名宿の美食で贅沢な冬を過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-rose-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】高千穂峡ボートから天岩戸神社初詣・夜神楽を巡る冬の神話体感ルート
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              熊本空港または延岡ICを起点に、高千穂のパワースポットと夜神楽、極上高千穂牛を網羅する1泊2日旅。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-rose-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 高千穂到着 ➔ 高千穂牛の専門店で「高千穂牛ステーキ丼」ランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  高千穂町内のレストランへ。内閣総理大臣賞を受賞した高千穂牛のロースや赤身を香ばしく焼き上げたステーキ丼でランチ。噛み締めるほどに溢れ出す甘い肉汁と特製タレのハーモニーに感動し、神話の旅のエネルギーをチャージします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 天岩戸神社（西本宮）参拝 ➔ 天安河原の大洞窟で願掛け
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  車で約15分、天岩戸神社へ。神職の案内でお祓いを受け、御神体「天岩戸」を遥拝。さらに清流沿いを歩いて天安河原の巨大な洞窟「仰慕窟」へ。八百万の神が集まったとされる聖地で、小石を積み重ねて新年の成就を祈願します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:30 高千穂の名宿へチェックイン ➔ 「高千穂牛懐石」夕食 ➔ 高千穂神社で夜神楽鑑賞
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  宿にチェックインし、静寂の湯処でひと息。夕食は極上高千穂牛の炭火焼きや郷土料理に舌鼓。20時からは高千穂神社の神楽殿へ向かい、国の重要無形文化財「高千穂神楽」を鑑賞。太鼓と笛の音、神々の迫力ある舞に心を奪われます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 朝の澄み切った「高千穂峡」散策 ➔ 真名井の滝ボート乗船
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  朝の清澄な大気の中、高千穂峡へ。エメラルドグリーンに輝く水面を貸しボートで漕ぎ進み、真名井の滝の真下から見上げる柱状節理の巨岩美を体感。道の駅高千穂で名産の釜炒り茶や神楽面のお土産を選び、清々しい帰路へ就きます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の高千穂夜神楽と高千穂牛を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、神楽アクセス・美食・もてなしが高評価の宿。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-rose-900 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-rose-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-800 to-slate-900 hover:from-rose-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              神話の里に受け継がれる極上和牛の伝統と釜炒り茶の香り
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-rose-700" />
                内閣総理大臣賞に輝く「高千穂牛」の至高の肉質
              </h3>
              <p>
                「和牛のオリンピック」で日本一に選ばれた高千穂牛は、標高が高く澄んだ空気と清らかな地下水で丹精込めて肥育されます。赤身本来の濃厚な旨味と、体温で溶ける軽やかな脂の甘みが特徴。ステーキにすると外は香ばしく中はジューシーで、冬の冷えた体に贅沢な至福の満足感をもたらします。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-rose-700" />
                香ばしい「高千穂釜炒り茶」と伝統の「かっぽ酒」
              </h3>
              <p>
                高千穂の傾斜地で栽培される「釜炒り茶」は、蒸すのではなく直火の鉄釜で炒って製茶する日本古来の伝統茶。勾玉状の丸みを帯びた茶葉から立ち上る「釜香（かまか）」と呼ばれる香ばしさと、すっきりとした甘みが絶品です。また、竹筒に地酒を入れて温める「かっぽ酒」は、竹の清々しい香りと温もりが冬の夜神楽の余韻を優しく深めてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-rose-50/60 rounded-3xl p-6 sm:p-10 border border-rose-200/60 space-y-6">
          <div className="border-b border-rose-200/80 pb-4">
            <span className="text-rose-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-rose-950">
              冬の高千穂を快適・安全に旅するための装備とアドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-rose-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-rose-700" />
                夜神楽鑑賞時の徹底防寒対策
              </div>
              <p className="leading-relaxed text-stone-700">
                冬の高千穂神社神楽殿や集落の神楽宿は底冷えが厳しく、夜間は氷点下近くまで下がります。厚手のダウンコート、ひざ掛け、カイロ、厚手の靴下を持参して鑑賞に臨みましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-rose-700" />
                山間部の道路凍結と冬用タイヤ
              </div>
              <p className="leading-relaxed text-stone-700">
                12月中旬〜1月は阿蘇方面からの国道218号線や山間部で路面凍結が発生することがあります。マイカー利用の場合は必ずスタッドレスタイヤを装着し、日陰や橋の上では慎重な運転を。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-rose-700" />
                高千穂峡ボートの事前ネット予約
              </div>
              <p className="leading-relaxed text-stone-700">
                高千穂峡の貸しボートは完全事前予約制です。週末や年末年始は早期に予約枠が埋まるため、旅行日程が決まり次第、公式サイトから早めに予約を確保しておくことをおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の高千穂夜神楽＆観光に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-rose-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・神話・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-800 font-bold text-xs block mb-1">佐賀・太良＆嬉野</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-900 transition-colors line-clamp-2">
                冬の内子竹崎カニと祐徳稲荷初詣・日本三大美肌湯嬉野温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-800 font-bold text-xs block mb-1">徳島・祖谷渓谷＆大歩危</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-900 transition-colors line-clamp-2">
                日本三大秘境・冬の祖谷かずら橋雪景色とケーブルカー谷底露天風呂名宿
              </span>
            </Link>

            <Link 
              href="/winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-800 font-bold text-xs block mb-1">鳥取・境港＆皆生温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-900 transition-colors line-clamp-2">
                山陰松葉ガニ解禁！境港水産物市場と皆生温泉「塩の湯」名宿
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-800 font-bold text-xs block mb-1">静岡・下田＆爪木崎</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-900 transition-colors line-clamp-2">
                300万本の爪木崎水仙まつりと富士山絶景・一本釣り地金目鯛名宿
              </span>
            </Link>

            <Link 
              href="/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-800 font-bold text-xs block mb-1">沖縄・石垣島＆川平湾</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-900 transition-colors line-clamp-2">
                星空保護区の南十字星と川平湾ブルー・石垣牛炭火焼肉リゾート名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-gradient-to-br from-rose-900 to-slate-950 text-white hover:opacity-95 transition-all group block flex flex-col justify-between"
            >
              <div>
                <span className="text-rose-300 font-bold text-xs block mb-1">特集ポータル</span>
                <span className="font-bold group-hover:text-rose-200 transition-colors">
                  全国の季節旅・目的別おすすめ特集一覧を見る
                </span>
              </div>
              <span className="text-xs text-rose-300 mt-2 block font-medium">全特集をチェック ➔</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-miyazaki-takachiho-night-kagura-beef-onsen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
