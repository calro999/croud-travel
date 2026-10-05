import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sun, Sunset, Waves, Moon, Compass as CompassIcon, Palmtree, Building, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月沖縄】冬の石垣島・星空保護区の南十字星と川平湾エメラルドブルー・極上石垣牛焼肉＆旬の冬アーサを堪能する南国リゾート名宿5選",
  description: "11月から1月、本州の真冬の寒さを逃れて平均気温20度前後の穏やかな暖かさに包まれる八重山諸島の玄関口・石垣島。日本初の「星空保護区」に認定された西表石垣国立公園の夜空には、12月から日本国内で唯一「南十字星」が南の水平線上に輝き始め、ミシュラン三ツ星の名勝「川平湾」は冬の澄み渡る陽光を受けて息をのむエメラルドブルーの輝きを放ちます。冬に旬を迎える採れたて新海苔「アーサ（アオサ）」の磯の香り豊かな郷土料理や、最高峰ブランド黒毛和牛「石垣牛」の炭火焼肉。南国の心地よい島風と極上のホスピタリティに癒やされる厳選リゾート名宿5選と冬のモデルコースを詳しくお届けします。",
  keywords: '石垣島 冬 旅行, 石垣島 南十字星, 川平湾 グラスボート, ANAインターコンチネンタル石垣リゾート, フサキビーチリゾート, グランヴィリオリゾート石垣島, アートホテル石垣島, 石垣シーサイドホテル, 石垣牛 焼肉, アーサ汁, 星空保護区, 11月 12月 1月 沖縄旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay/"
  },
  openGraph: {
    title: "【11・12・1月沖縄】冬の石垣島・星空保護区の南十字星と川平湾エメラルドブルー・極上石垣牛焼肉＆旬の冬アーサを堪能する南国リゾート名宿5選",
    description: "11月から1月、本州の真冬の寒さを逃れて平均気温20度前後の穏やかな暖かさに包まれる八重山諸島の玄関口・石垣島。日本初の「星空保護区」に認定された西表石垣国立公園の夜空には、12月から日本国内で唯一「南十字星」が南の水平線上に輝き始め、ミシュラン三ツ星の名勝「川平湾」は冬の澄み渡る陽光を受けて息をのむエメラルドブルーの輝きを放ちます。冬に旬を迎える採れたて新海苔「アーサ（アオサ）」の磯の香り豊かな郷土料理や、最高峰ブランド黒毛和牛「石垣牛」の炭火焼肉。南国の心地よい島風と極上のホスピタリティに癒やされる厳選リゾート名宿5選と冬のモデルコースを詳しくお届けします。",
    url: 'https://croud-travel.com/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の沖縄石垣島川平湾のエメラルドブルーと南国リゾート'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月沖縄】冬の石垣島・星空保護区の南十字星と川平湾エメラルドブルー・極上石垣牛焼肉＆旬の冬アーサを堪能する南国リゾート名宿5選",
    description: "11月から1月、本州の真冬の寒さを逃れて平均気温20度前後の穏やかな暖かさに包まれる八重山諸島の玄関口・石垣島。日本初の「星空保護区」に認定された西表石垣国立公園の夜空には、12月から日本国内で唯一「南十字星」が南の水平線上に輝き始め、ミシュラン三ツ星の名勝「川平湾」は冬の澄み渡る陽光を受けて息をのむエメラルドブルーの輝きを放ちます。冬に旬を迎える採れたて新海苔「アーサ（アオサ）」の磯の香り豊かな郷土料理や、最高峰ブランド黒毛和牛「石垣牛」の炭火焼肉。南国の心地よい島風と極上のホスピタリティに癒やされる厳選リゾート名宿5選と冬のモデルコースを詳しくお届けします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function OkinawaIshigakiKabilabayWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月沖縄】冬の石垣島・星空保護区の南十字星と川平湾エメラルドブルー・極上石垣牛焼肉＆旬の冬アーサを堪能する南国リゾート名宿5選",
    description: "11月から1月、本州の真冬の寒さを逃れて平均気温20度前後の穏やかな暖かさに包まれる八重山諸島の玄関口・石垣島。日本初の「星空保護区」に認定された西表石垣国立公園の夜空には、12月から日本国内で唯一「南十字星」が南の水平線上に輝き始め、ミシュラン三ツ星の名勝「川平湾」は冬の澄み渡る陽光を受けて息をのむエメラルドブルーの輝きを放ちます。冬に旬を迎える採れたて新海苔「アーサ（アオサ）」の磯の香り豊かな郷土料理や、最高峰ブランド黒毛和牛「石垣牛」の炭火焼肉。南国の心地よい島風と極上のホスピタリティに癒やされる厳選リゾート名宿5選と冬のモデルコースを詳しくお届けします。",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
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
      '@id': 'https://croud-travel.com/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay'
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
        name: '石垣島・川平湾＆南十字星特集',
        item: 'https://croud-travel.com/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の石垣島の気候と気温、冬でも海やリゾートを満喫できる？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "石垣島の冬（11月〜1月）は、平均気温が18度〜22度前後と本州の5月上旬頃の暖かさで、厳しい寒さを避ける「避寒旅行」に最適な季節です。真冬でも日中天気が良ければ長袖シャツや薄手のパーカー1枚で快適に過ごせます。海での本格的な海水浴はシーズンオフ（水温22度前後）ですが、ウェットスーツを着用してのダイビングやシュノーケリング、川平湾のグラスボート遊覧、マングローブカヤックなどは通年快適に楽しめます。また、多くのリゾートホテルには温水インドアプールやスパが完備されています。"
        }
      },
      {
        '@type': 'Question',
        name: "日本初の「星空保護区」八重山諸島で、冬に「南十字星」が見られる時期と観測条件は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "石垣島を含む西表石垣国立公園は、国際ダークスカイ協会により日本で初めて「星空保護区（ダークスカイ・パーク）」に認定された世界屈指の美しい星空を誇る島です。全天88星座のうち84星座を観測でき、特に12月下旬から翌年6月上旬にかけては、南の水平線すれすれに輝く憧れの星座「南十字星（サザンクロス）」を日本国内で観測できます。晴れて月明かりが少ない夜、南の海が開けた場所（フサキビーチ周辺や川平地区、玉取崎展望台など）で、夜半過ぎから明け方にかけて南の空低くに浮かび上がります。"
        }
      },
      {
        '@type': 'Question',
        name: "ミシュラン三ツ星の名勝「川平湾（かびらわん）」の冬の魅力とグラスボート遊覧のコツは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "川平湾は、ミシュラン・グリーンガイド・ジャポンで最高峰の「三ツ星」を獲得した日本屈指の景勝地です。潮の満ち引きや光の加減によってエメラルドグリーンからコバルトブルーへと七色に変化する海の色が特徴です。冬は観光客が夏より落ち着いているため、ゆったりと絶景を鑑賞できます。湾内は潮流が速いため遊泳禁止ですが、底がガラス張りになった「グラスボート」に乗れば、色鮮やかなサンゴ礁の間を泳ぐカクレクマノミやウミガメの姿を濡れずに間近で観察できます。午前中の早い時間帯（9時〜10時頃）が光の入り方が美しくおすすめです。"
        }
      },
      {
        '@type': 'Question',
        name: "冬に旬を迎える石垣島の海の恵み「新海苔アーサ（アオサ）」と「石垣牛」の楽しみ方は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の12月から1月にかけて、石垣島の浅瀬の岩場一面に鮮やかな緑色の海藻「アーサ（アオサ）」が自生し、新海苔の収穫シーズンを迎えます。この時期の採れたてアーサは磯の香りが非常に高く、ミネラルと食物繊維が豊富。熱々の「アーサ汁」や「アーサそば」、サクサクの「アーサの天ぷら」は冬の八重山を代表する滋味です。また、潮風のミネラルを含んだ牧草でストレスなく肥育されるブランド黒毛和牛「石垣牛」は、人肌で溶ける上質な脂と赤身の深い旨味が特徴で、炭火焼肉や鉄板焼きステーキですだちや塩をつけて味わうのが最高の贅沢です。"
        }
      },
      {
        '@type': 'Question',
        name: "羽田・関西・各地から石垣島へのフライトアクセスと冬の持ち物・注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "南ぬ島（ぱいぬしま）石垣空港へは、羽田・成田・関西・中部・福岡など主要空港から直行便が毎日運航されており、羽田から約3時間30分、関西から約2時間45分で直行できます。那覇空港経由の乗り継ぎ便も1日数多く運航しています。冬の石垣島は北東からの季節風（ミーニシ）が強く吹き抜ける日があり、風が吹くと体感温度が下がります。日中は長袖Tシャツやシャツで過ごせますが、朝晩や海辺の散策用に風を通さないマウンテンパーカーやウインドブレーカーを必ず1着持参してください。島内移動にはレンタカーの事前予約が便利です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ＡＮＡインターコンチネンタル石垣リゾート　ｂｙ　ＩＨＧ　＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1973/1973.jpg",
              rating: 4.39,
              reviews: 1575,
              price: "¥15,710〜",
              access: "石垣空港からお車で約20分, 空港バスで約25分（ホテル前下車）",
              special: "豊かな自然と文化が根付いた島で、心の琴線に触れる出会いと発見に満ちた、ラグジュアリーリゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1973%2F1973.html",
              story: "マエサトビーチを目の前に抱く約9万坪の広大な敷地に、南国リゾートの優雅さを極めた日本屈指のラグジュアリーホテル「ＡＮＡインターコンチネンタル石垣リゾート」。通年利用できる温水インドアプールやタラソスパを完備し、本州が真冬の寒さに凍える11月〜1月でも快適なリゾートライフを満喫できます。夜には敷地内のプライベートガーデンから星空保護区の満天の星や、澄んだ冬空に輝く星座を鑑賞。館内には多彩な名レストランが揃い、目の前の鉄板で熟練のシェフが焼き上げる最高級A5ランク「石垣牛」のステーキディナーや、沖縄近海産の高級魚・三大高級魚アカマチを盛り込んだ琉球創作フレンチなど、極上のグルメ体験が贅沢な冬の休日を彩ります。",
              roomTip: "クラブインターコンチネンタル客室。専用ラウンジでのアフタヌーンティーやイブニングカクテルサービスが付いた最高峰の寛ぎを享受できます。",
              gourmetTip: "「鉄板焼 プレミアム石垣牛コース」。きめ細やかなサシが入った石垣牛サーロインとフィレの食べ比べや、島野菜のグリルを五感で堪能できます。",
              highlights: [
                "約9万坪の広大な敷地・温水インドアプールとクラブラウンジ付き最高峰ラグジュアリー",
                "熟練シェフが鉄板で焼き上げる最高級A5ランク石垣牛ステーキと琉球創作フレンチ",
                "冬でも気温20度の快適避寒ステイ・タラソスパや多彩なアクティビティが充実"
              ]
            },
            {
              id: 2,
              name: "フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38599/38599.jpg",
              rating: 4.59,
              reviews: 1629,
              price: "¥13,490〜",
              access: "石垣空港より　車で約35分。石垣港より車で約15分。空港・ホテル間の無料送迎バスもございます。",
              special: "【楽天トラベルアワード受賞】島内随一の天然ビーチとプールエリアで極上の休日を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38599%2F38599.html",
              story: "天然の白砂が広がるフサキビーチに沿って、赤瓦のヴィラやモダンなホテル棟が立ち並ぶアイランドリゾート「フサキビーチリゾート ホテル＆ヴィラズ」。石垣島西海岸に位置するため、冬の夕暮れ時には八重山の島影をシルエットに東シナ海へと沈みゆく黄金のサンセットを望む絶好のビューポイントです。敷地内の象徴「フサキエンジェルピア（桟橋）」からは、夜になると波音をBGMに満天の天の川や南十字星を眺める天然のプラネタリウム空間が広がります。夕食は石垣牛や近海魚の炭火BBQ、または郷土料理と世界各国の美食が並ぶ豪華ビュッフェ。琉球の伝統と洗練されたリゾート感が融合し、ファミリーやカップルから絶大な支持を集めています。",
              roomTip: "ガーデンヴィラスイート。赤瓦屋根の独立型コテージで、南国のプライベートガーデンを眺めながら島時間にゆったりと浸れます。",
              gourmetTip: "「琉球新天地の石垣牛会席」。地元契約農家から仕入れる石垣牛のローストや、旬の冬アーサを贅沢に使った海鮮蒸し料理が絶品です。",
              highlights: [
                "天然白砂フサキビーチ直結・フサキエンジェルピアから望む東シナ海サンセットと満天の星",
                "石垣牛炭火BBQや地産地消ビュッフェ・冬アーサを使った多彩な創作琉球料理",
                "赤瓦ヴィラコテージのプライベート感・カップルからファミリーまで大人気"
              ]
            },
            {
              id: 3,
              name: "グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/69360/69360.jpg",
              rating: 4.47,
              reviews: 1251,
              price: "¥8,760〜",
              access: "新石垣空港より車で40分",
              special: "オーシャンズウィングとヴィラガーデン　趣の異なる２つの宿泊エリアと充実の施設が魅力的な南国リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69360%2F69360.html",
              story: "竹富島を真正面に望むオーシャンフロントに広がる南国リゾート「グランヴィリオリゾート石垣島 Ｏｃｅａｎ’ｓ Ｗｉｎｇ ＆ Ｖｉｌｌａ Ｇａｒｄｅｎ」。広々とした館内には、石垣島では希少な露天風呂付き大浴場やサウナ、屋内温水プールを完備しており、海風を感じながら手足を伸ばしてリフレッシュできます。夜にはホテル屋上のスターダストテラスで星空ツアーが開催され、専門の星空ガイドとともに冬の南十字星やカノープスを探すロマンチックな時間を演出。レストランでは、炭火焼肉スタイルで極上石垣牛のカルビやロース、島豚あぐーを豪快に味わえる焼肉ダイニングが人気で、南国ならではの豊かな食と癒やしを余すところなく楽しめます。",
              roomTip: "オーシャンビュープレミアルーム。テラスからエメラルドグリーンの海と竹富島を一望し、朝は心地よい波音で目覚めることができます。",
              gourmetTip: "「炭火焼肉 琉華の特選石垣牛コース」。豊かな自然と潮風のミネラルを含んだ牧草で育った石垣牛の濃厚な赤身と甘い脂を炭火焼きで堪能できます。",
              highlights: [
                "竹富島を一望する絶景ビュー・露天風呂付大浴場と屋上スターダストテラスの星空観賞",
                "炭火焼肉ダイニングで味わう極上石垣牛カルビ＆ロースと島豚あぐーの贅沢盛り",
                "波音を聴きながらのんびり過ごす島時間・リーズナブルな価格設定で高満足度"
              ]
            },
            {
              id: 4,
              name: "アートホテル石垣島＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2770/2770.jpg",
              rating: 4.32,
              reviews: 1215,
              price: "¥5,210〜",
              access: "石垣空港より 車で約25分/石垣港より 車で約8分",
              special: "島の高台から空と海の絶景を望むアーバンリゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2770%2F2770.html",
              story: "石垣市街の高台にそびえ立ち、島内屈指のパノラマビューを誇る「アートホテル石垣島」。最上階のスカイラウンジからはエメラルドに輝く八重山諸島の海と市街地が一望できます。地下水を汲み上げた軟水の大浴場「にぃのふぁぶし」やサウナを完備し、冬の観光で歩き疲れた体を心地よく温めてくれます。館内1階のセレクトショップは八重山上布や伝統工芸品、地元のやちむん（陶器）が充実しておりお土産選びにも最適。夕食ビュッフェでは、冬に旬を迎える採れたて新海苔「アーサ」の天ぷらやアーサ汁、八重山そば、石垣牛のローストビーフなど、沖縄・八重山の郷土の美味をリーズナブルに味わえるのが大きな魅力です。",
              roomTip: "オーシャンビュースーペリアツイン。高台ならではの爽快な眺望が広がり、夜には市街地の明かりと遠くの海原の夜景を楽しめます。",
              gourmetTip: "「島イタリアン＆琉球ディナービュッフェ」。石垣牛と島豚のハンバーグや、冬アーサのペペロンチーノなど、創作島料理を存分に味わえます。",
              highlights: [
                "市街地高台のパノラマビュー・大浴場サウナ完備と充実の八重山セレクトショップ",
                "冬アーサの天ぷらや八重山そば・石垣牛ローストビーフの豪華島ビュッフェ",
                "ユーグレナモールや公設市場へのアクセス至便・島内観光のフットワーク抜群"
              ]
            },
            {
              id: 5,
              name: "石垣シーサイドホテル　＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70868/70868.jpg",
              rating: 4.31,
              reviews: 336,
              price: "¥5,708〜",
              access: "新石垣空港よりタクシーで約40分　美しい海とビーチがお待ちしています",
              special: "石垣島ならではの“エメラルドグリーン”の海が目の前に広がる至福のリゾートホテル♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70868%2F70868.html",
              story: "国の名勝「川平湾」まで車でわずか5分、底地（すくじ）ビーチの穏やかな白砂湾に面したオンザビーチホテル「石垣シーサイドホテル」。客室から水着のまま直接ビーチへ出られる抜群のロケーションにあり、周囲には人工の明かりがほとんどないため、夜になると夜空一面が天然の星空シアターへと姿を変えます。川平湾へのアクセスが至近なため、観光客が押し寄せる前の早朝にエメラルドグリーンの絶景を独占鑑賞できるのが最大の特権。冬の夕食には、地元の契約牧場から直送される石垣牛の陶板焼きやすき焼き、獲れたての島魚のお造りを味わう和食会席が振る舞われ、静かで長閑な石垣島本来の自然美に包まれた滞在が叶います。",
              roomTip: "かびらビレッジ（独立型コテージ）。全室にジェットバスを完備し、亜熱帯の森と海の気配を感じながらプライベートなリゾートタイムを過ごせます。",
              gourmetTip: "「石垣牛と八重山海の幸会席」。柔らかく旨味の濃い石垣牛ステーキと、近海で揚がるマグロやミーバイ（ハタ）のお造りを堪能できます。",
              highlights: [
                "名勝川平湾まで車5分・底地ビーチ直結コテージ＆満天の星空シアター",
                "地元契約牧場の石垣牛陶板焼きやすき焼きと近海活魚の本格和食膳",
                "人工の明かりがない抜群の星空観測環境・朝一番の川平湾観光に最高の立地"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の石垣島の気候と気温、冬でも海やリゾートを満喫できる？",
    "a": "石垣島の冬（11月〜1月）は、平均気温が18度〜22度前後と本州の5月上旬頃の暖かさで、厳しい寒さを避ける「避寒旅行」に最適な季節です。真冬でも日中天気が良ければ長袖シャツや薄手のパーカー1枚で快適に過ごせます。海での本格的な海水浴はシーズンオフ（水温22度前後）ですが、ウェットスーツを着用してのダイビングやシュノーケリング、川平湾のグラスボート遊覧、マングローブカヤックなどは通年快適に楽しめます。また、多くのリゾートホテルには温水インドアプールやスパが完備されています。"
  },
  {
    "q": "日本初の「星空保護区」八重山諸島で、冬に「南十字星」が見られる時期と観測条件は？",
    "a": "石垣島を含む西表石垣国立公園は、国際ダークスカイ協会により日本で初めて「星空保護区（ダークスカイ・パーク）」に認定された世界屈指の美しい星空を誇る島です。全天88星座のうち84星座を観測でき、特に12月下旬から翌年6月上旬にかけては、南の水平線すれすれに輝く憧れの星座「南十字星（サザンクロス）」を日本国内で観測できます。晴れて月明かりが少ない夜、南の海が開けた場所（フサキビーチ周辺や川平地区、玉取崎展望台など）で、夜半過ぎから明け方にかけて南の空低くに浮かび上がります。"
  },
  {
    "q": "ミシュラン三ツ星の名勝「川平湾（かびらわん）」の冬の魅力とグラスボート遊覧のコツは？",
    "a": "川平湾は、ミシュラン・グリーンガイド・ジャポンで最高峰の「三ツ星」を獲得した日本屈指の景勝地です。潮の満ち引きや光の加減によってエメラルドグリーンからコバルトブルーへと七色に変化する海の色が特徴です。冬は観光客が夏より落ち着いているため、ゆったりと絶景を鑑賞できます。湾内は潮流が速いため遊泳禁止ですが、底がガラス張りになった「グラスボート」に乗れば、色鮮やかなサンゴ礁の間を泳ぐカクレクマノミやウミガメの姿を濡れずに間近で観察できます。午前中の早い時間帯（9時〜10時頃）が光の入り方が美しくおすすめです。"
  },
  {
    "q": "冬に旬を迎える石垣島の海の恵み「新海苔アーサ（アオサ）」と「石垣牛」の楽しみ方は？",
    "a": "冬の12月から1月にかけて、石垣島の浅瀬の岩場一面に鮮やかな緑色の海藻「アーサ（アオサ）」が自生し、新海苔の収穫シーズンを迎えます。この時期の採れたてアーサは磯の香りが非常に高く、ミネラルと食物繊維が豊富。熱々の「アーサ汁」や「アーサそば」、サクサクの「アーサの天ぷら」は冬の八重山を代表する滋味です。また、潮風のミネラルを含んだ牧草でストレスなく肥育されるブランド黒毛和牛「石垣牛」は、人肌で溶ける上質な脂と赤身の深い旨味が特徴で、炭火焼肉や鉄板焼きステーキですだちや塩をつけて味わうのが最高の贅沢です。"
  },
  {
    "q": "羽田・関西・各地から石垣島へのフライトアクセスと冬の持ち物・注意点は？",
    "a": "南ぬ島（ぱいぬしま）石垣空港へは、羽田・成田・関西・中部・福岡など主要空港から直行便が毎日運航されており、羽田から約3時間30分、関西から約2時間45分で直行できます。那覇空港経由の乗り継ぎ便も1日数多く運航しています。冬の石垣島は北東からの季節風（ミーニシ）が強く吹き抜ける日があり、風が吹くと体感温度が下がります。日中は長袖Tシャツやシャツで過ごせますが、朝晩や海辺の散策用に風を通さないマウンテンパーカーやウインドブレーカーを必ず1着持参してください。島内移動にはレンタカーの事前予約が便利です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の沖縄石垣島川平湾のエメラルドブルーと南国リゾート" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-teal-900/80 backdrop-blur-md text-teal-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-teal-400/30">
            <Sparkles className="w-4 h-4 text-teal-300" />
            11月・12月・1月 冬の沖縄・石垣島南十字星＆川平湾エメラルドブルー特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月沖縄】冬の石垣島・星空保護区の南十字星と川平湾エメラルドブルー・極上石垣牛焼肉＆旬の冬アーサを堪能する南国リゾート名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            真冬の寒さを忘れる平均気温20度の快適な南国パラダイス・八重山諸島。世界が認めた「星空保護区」の澄んだ夜空には12月から日本国内で唯一「南十字星」が水平線上に姿を現し、ミシュラン三ツ星の名勝「川平湾」は冬の陽光に輝くエメラルドグリーンの絶景を湛えます。冬に旬を迎える香り高い新海苔「アーサ」の島料理と、世界に誇る黒毛和牛「石垣牛」の極上炭火焼肉。島時間に身を委ね、心身を解き放つ極上の避寒リゾート旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 最適時期：11月中旬〜1月下旬（快適避寒・南十字星シーズン開始・冬アーサ旬）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> エリア：沖縄県石垣市（川平湾・フサキビーチ・市街地高台）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> 名物：極上石垣牛炭火焼肉・新海苔冬アーサ汁・八重山そば・島野菜</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Island Escape</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の凍てつく寒さを抜け出し、南十字星とエメラルドの海に抱かれる至福
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本列島が雪と寒風に閉ざされる11月から1月。東京から直行便で約3時間半、南西へ約2,000キロメートル離れた北緯24度の南国・八重山諸島「石垣島」は、平均気温が約20度前後というまるで春のような心地よい気候に恵まれています。コートやダウンジャケットを脱ぎ捨て、薄手のシャツ1枚で飛行機を降り立った瞬間に肌を撫でる柔らかな島風と亜熱帯植物の青い香りは、日頃のストレスを一瞬で吹き飛ばしてくれます。
            </p>
            <p>
              冬の石垣島で最も感動的な体験のひとつが、満天の星空です。西表石垣国立公園は、夜空の暗さと美しさが国際基準で認められた「星空保護区（ダークスカイ・パーク）」に日本で初めて認定された聖地。全天88星座のうち実に84星座を見ることができ、21個ある一等星のすべてを観測できます。特に12月下旬から1月にかけては、南の地平線すれすれに「南十字星（サザンクロス）」が姿を現し始める特別な季節。静まり返った真夜中のビーチに寝そべり、波音を聴きながら水平線上にクロスを描く4つの星を肉眼で捉えた時の感動は、一生の記憶として心に刻まれます。
            </p>
            <p>
              昼のハイライトは、世界的旅行ガイドで三ツ星を獲得した景勝地「川平湾（かびらわん）」。夏のような厳しい日差しが和らぐ冬は、大気と海水の透明度が一段と高まり、緑豊かな小島が浮かぶ湾内は七色にグラデーションを描くエメラルドグリーンの奇蹟を見せてくれます。グラスボートに乗れば、ガラス越しに広がる巨大な枝サンゴの森や、愛らしいカクレクマノミ、ウミガメが優雅に泳ぎ回る海中世界を服を着たまま気軽に冒険できます。
            </p>
            <p>
              そして島旅を極上のものにしてくれるのが、八重山の滋味豊かな美食です。日本最高峰の黒毛和牛「石垣牛」は、潮風が運ぶミネラル豊富な牧草を食べて育ち、人肌で溶け出す良質な脂と芳醇な肉の甘みが特徴。炭火でじっくり焼き上げたカルビやステーキは、一度食べたら忘れられない美味です。さらに、冬の12月〜1月に磯で手摘みされる新海苔「アーサ（アオサ）」は、鮮烈な磯の香りと優しいとろみが格別。温かいアーサ汁やアーサそば、サクサクの天ぷらは、冬の旅人の五臓六腑を温かく満たしてくれます。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の石垣島で心震わせる3つの特別な島体験
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月のベストシーズンだからこそ出逢える、奇跡の夜空と南国の美味。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 星空保護区で観測する冬の「南十字星」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                日本国内で唯一、南の水平線上に輝く南十字星（12月下旬〜）。人工光が極めて少ない石垣島の夜空に広がる満天の星と天の川は息をのむ美しさです。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 川平湾の七色のエメラルドブルー遊覧
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                ミシュラン三ツ星の絶景・川平湾。冬の澄んだ光を受けて輝く海をグラスボートで巡り、カラフルな熱帯魚やウミガメが泳ぐ竜宮城のような世界を鑑賞できます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 極上石垣牛の炭火焼肉と旬の新海苔冬アーサ
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                ミネラル豊富な牧草で育つ極上黒毛和牛「石垣牛」の濃厚な赤身と甘い脂。冬に旬を迎える香り高い新海苔「アーサ」の熱々そばや天ぷらは冬旅の醍醐味です。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】川平湾・星空ナイトツアー・石垣牛を堪能する冬の南国リトリートコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              空港からレンタカーで島内を爽快に巡り、リゾートステイと南国の星空・グルメを満喫する王道プラン。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 南ぬ島石垣空港に到着 ➔ 八重山そばランチ＆川平湾グラスボート遊覧
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  空港でレンタカーをピックアップ。まずは地元の人気店で、豚骨とカツオの出汁が効いた名物「八重山そば」や、冬限定の「新アーサそば」で温かい昼食。その後、車で名勝「川平湾」へ向かい、グラスボートに乗船してサンゴ礁とカラフルな熱帯魚の海中観察を満喫します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 午後〜夕刻</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  15:00 「ミルミル本舗」でジェラート ➔ フサキビーチで感動のサンセット鑑賞
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  高台の「ミルミル本舗」に立ち寄り、名護湾を一望しながら搾りたてミルクや島バナナのジェラートを堪能。16時頃に宿へチェックイン。夕刻にはフサキビーチの桟橋へ向かい、八重山の島影の向こうに沈む黄金の夕日を眺めながら南国の穏やかな黄昏時に浸ります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  19:00 至福の「極上石垣牛炭火焼肉」ディナー＆泡盛で乾杯
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  夜はリゾート内のレストランまたは市街地の名店で、極上石垣牛の炭火焼肉。舌の上で甘い脂がとろける特上カルビや、噛むほどに旨味が溢れるランプやロース。八重山の名酒「八重泉」や「請福」を片手に、贅沢な島グルメに舌鼓を打ちます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 深夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  22:00 星空保護区のビーチへ ➔ 満天の星空シアター＆冬の星座観賞
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  明かりの少ないビーチやホテルのスターダストテラスへ。見上げれば視界を埋め尽くす無数の星々。オリオン座や冬の大三角が圧倒的な明るさで輝き、南の空には水平線上に南十字星の神秘的なきらめきを探します。自然のプラネタリウムに抱かれて眠りへ。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 南国モーニングビュッフェ ➔ 「ユーグレナモール」でお土産買い出し後空港へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  朝食は南国のフルーツや島野菜のスムージー、できたてオムレツのビュッフェ。チェックアウト後は日本最南端のアーケード商店街「ユーグレナモール」へ。石垣牛の加工品、冬アーサの乾燥海苔、八重山上布の小物、泡盛を購入し、温かい余韻に包まれて空港から帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Resorts</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の石垣島を満喫する厳選南国リゾート名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              世界水準の最高峰ラグジュアリーから、天然ビーチ直結ヴィラ、川平湾至近のコテージまで厳選。
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
                        <span className="text-xs font-bold text-teal-900 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
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
                        <Sparkles className="w-4 h-4 text-teal-600" />
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
                        <span className="text-xl sm:text-2xl font-black text-teal-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-800 to-slate-900 hover:from-teal-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
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

        {/* Local Gourmet Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Island Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              八重山の自然が育む至宝ブランド牛と冬の味覚
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-700" />
                世界のVIPを魅了する「石垣牛」の秘密
              </h3>
              <p>
                沖縄サミットの晩餐会でメインディッシュに選ばれ、一躍世界的な名声を獲得した「石垣牛」。温暖な気候のもと、澄んだ空気と豊富な湧水、ミネラルたっぷりの海風を浴びて育つため、脂身にしつこさがなく、肉本来の芳醇な旨味が際立ちます。冬の炭火焼肉では、サッと炙って島の雪塩やすだちを絞って味わうことで、肉汁の甘みと香ばしさが口いっぱいに広がります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-teal-700" />
                冬採り新海苔「アーサ」とおすすめの八重山土産
              </h3>
              <p>
                12月〜1月に岩場で収穫される冬の新海苔アーサは、八重山の冬の食卓に欠かせない味。乾燥アーサはお味噌汁に入れるだけで鮮やかな緑色と磯の香りが蘇り、お土産に大人気です。また、伝統の藍染めで織り上げられる「八重山上布」のコースターやしおり、石垣島のサトウキビから作られる純黒糖、石垣島限定のクラフトビールなど、南国の豊かな文化を感じられる上質な品々が揃っています。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-teal-50/60 rounded-3xl p-6 sm:p-10 border border-teal-200/60 space-y-6">
          <div className="border-b border-teal-200/80 pb-4">
            <span className="text-teal-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-teal-950">
              冬の石垣島・八重山諸島を快適に旅するためのアドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-teal-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                冬の服装と季節風対策
              </div>
              <p className="leading-relaxed text-stone-700">
                日中は20度前後で長袖シャツ1枚で過ごせますが、北東からの季節風が吹くと体感温度が下がります。風を通さないマウンテンパーカーやカーディガン、夜の星空観測用にストールや薄手の上着を持参すると安心です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-teal-700" />
                星空観測のアプリと時間帯
              </div>
              <p className="leading-relaxed text-stone-700">
                南十字星は水平線すれすれ（南の空低く）に短時間しか現れません。事前に星座表アプリや現地の星空予報で方角と時刻（1月は深夜3時〜5時頃など）を確認し、新月前後の月明かりが少ない夜を狙うのがベストです。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                離島フェリーとレンタカー
              </div>
              <p className="leading-relaxed text-stone-700">
                竹富島や西表島への離島フェリーはユーグレナ石垣港離島ターミナルから高頻度で運航されています。石垣島内の移動にはレンタカーが最も効率的ですが、年末年始や連休は予約が埋まりやすいため早めの手配がおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の石垣島・八重山旅行に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-teal-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Warm Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬の避寒・絶景リゾート特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">沖縄・恩納＆本部</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                冬のホエールウォッチングと美ら海水族館・あぐー豚しゃぶしゃぶ名宿
              </span>
            </Link>

            <Link 
              href="/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">鹿児島・指宿温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                天然砂むし温泉と開聞岳絶景・かごしま黒豚しゃぶしゃぶを味わう指宿名宿
              </span>
            </Link>

            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">宮崎・青島温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                冬の鬼の洗濯板と青島神社参拝・宮崎牛ステーキと日南伊勢海老名宿
              </span>
            </Link>

            <Link 
              href="/winter-chiba-kamogawa-seaworld-kominato-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">千葉・鴨川小湊</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                鴨川シーワールドと小湊鯛の浦温泉・外房寒金目鯛姿煮＆伊勢海老名宿
              </span>
            </Link>

            <Link 
              href="/winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">神奈川・三浦城ヶ島</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                城ヶ島30万本の水仙まつりと富士山絶景・名物三崎まぐろ尽くしと三浦名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-stone-100 border border-stone-200 hover:border-teal-400 transition-all group flex flex-col justify-center text-center"
            >
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors">
                冬の特集記事一覧をすべて見る ➔
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
