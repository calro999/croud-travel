import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Waves, Sun, Palmtree, Fish, Anchor, Building, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月沖縄】冬の楽園リゾート！12月下旬開幕「ホエールウォッチング」と美ら海水族館・冬のアグー豚しゃぶしゃぶ＆もとぶ牛・恩納村絶景スパリゾート5選",
  description: "11月から1月、沖縄本島（恩納村・本部・名護）は、平均気温20℃前後の快適な気候に恵まれ、喧騒を離れて大人の贅沢な時間を過ごせる冬の楽園となります。12月下旬からは野生のザトウクジラが来遊する感動の「ホエールウォッチング」が開幕。澄み切ったエメラルドグリーンの東シナ海、混雑なく優雅に巡る沖縄美ら海水族館や備瀬のフクギ並木。旨みあふれる「やんばる島豚あぐー」の熱々しゃぶしゃぶや極上もとぶ牛ステーキ。恩納村屈指のラグジュアリースパリゾートで心身を解き放つ厳選名宿5選を徹底解説します。",
  keywords: '沖縄 ホエールウォッチング, ハレクラニ沖縄, ハイアットリージェンシー瀬良垣, ルネッサンスリゾートオキナワ, ホテルモントレ沖縄, 美ら海水族館 冬, アグー豚 しゃぶしゃぶ, もとぶ牛 ステーキ, 11月 12月 1月 沖縄旅行, 恩納村 リゾートホテル',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay/"
  },
  openGraph: {
    title: "【11・12・1月沖縄】冬の楽園リゾート！12月下旬開幕「ホエールウォッチング」と美ら海水族館・冬のアグー豚しゃぶしゃぶ＆もとぶ牛・恩納村絶景スパリゾート5選",
    description: "11月から1月、沖縄本島（恩納村・本部・名護）は、平均気温20℃前後の快適な気候に恵まれ、喧騒を離れて大人の贅沢な時間を過ごせる冬の楽園となります。12月下旬からは野生のザトウクジラが来遊する感動の「ホエールウォッチング」が開幕。澄み切ったエメラルドグリーンの東シナ海、混雑なく優雅に巡る沖縄美ら海水族館や備瀬のフクギ並木。旨みあふれる「やんばる島豚あぐー」の熱々しゃぶしゃぶや極上もとぶ牛ステーキ。恩納村屈指のラグジュアリースパリゾートで心身を解き放つ厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.pages.dev/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の沖縄恩納村の海とホエールウォッチング'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月沖縄】冬の楽園リゾート！12月下旬開幕「ホエールウォッチング」と美ら海水族館・冬のアグー豚しゃぶしゃぶ＆もとぶ牛・恩納村絶景スパリゾート5選",
    description: "11月から1月、沖縄本島（恩納村・本部・名護）は、平均気温20℃前後の快適な気候に恵まれ、喧騒を離れて大人の贅沢な時間を過ごせる冬の楽園となります。12月下旬からは野生のザトウクジラが来遊する感動の「ホエールウォッチング」が開幕。澄み切ったエメラルドグリーンの東シナ海、混雑なく優雅に巡る沖縄美ら海水族館や備瀬のフクギ並木。旨みあふれる「やんばる島豚あぐー」の熱々しゃぶしゃぶや極上もとぶ牛ステーキ。恩納村屈指のラグジュアリースパリゾートで心身を解き放つ厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function OkinawaOnnaMotobuWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月沖縄】冬の楽園リゾート！12月下旬開幕「ホエールウォッチング」と美ら海水族館・冬のアグー豚しゃぶしゃぶ＆もとぶ牛・恩納村絶景スパリゾート5選",
    description: "11月から1月、沖縄本島（恩納村・本部・名護）は、平均気温20℃前後の快適な気候に恵まれ、喧騒を離れて大人の贅沢な時間を過ごせる冬の楽園となります。12月下旬からは野生のザトウクジラが来遊する感動の「ホエールウォッチング」が開幕。澄み切ったエメラルドグリーンの東シナ海、混雑なく優雅に巡る沖縄美ら海水族館や備瀬のフクギ並木。旨みあふれる「やんばる島豚あぐー」の熱々しゃぶしゃぶや極上もとぶ牛ステーキ。恩納村屈指のラグジュアリースパリゾートで心身を解き放つ厳選名宿5選を徹底解説します。",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
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
      '@id': 'https://croud-travel.pages.dev/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay'
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
        name: '沖縄・冬のホエールウォッチング＆恩納村スパリゾート特集',
        item: 'https://croud-travel.pages.dev/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "沖縄の冬（11月・12月・1月）の気温や気候は？泳げますか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "沖縄の冬は本土の春や初秋のような気候で、平均気温は約18℃〜22℃です。真冬の1月でも最高気温が20℃を超える日が多く、寒さを忘れて過ごせる「日本最高峰の避寒リゾート」です。海水浴（遊泳）は原則として10月末で終了しますが、多くのリゾートホテルでは冬でも快適に利用できる温水インドアプールやジャグジー、天然温泉施設が完備されています。マリンアクティビティではウェットスーツを着用してのダイビングやシュノーケリング、シーカヤック、そして冬限定のホエールウォッチングが盛んに行われています。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の目玉「ホエールウォッチング」のベストシーズンと遭遇率は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "沖縄のホエールウォッチングは、毎年「12月下旬から4月上旬」がシーズンです。北極圏の冷たい海から出産と子育てのために暖かい沖縄近海（慶良間諸島沖や本部町・伊江島沖）へとザトウクジラが回遊してきます。体長約15m、体重約30トンに及ぶ巨大なクジラがジャンプする「ブリーチング」や尾びれで海面を叩く姿は大迫力。沖縄のホエールウォッチング船の遭遇率は「98%以上」と世界有数の高さを誇り、多くのツアーでクジラに出会えない場合の全額返金保証（特定期間）が付くほど高確率で観察できます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の「沖縄美ら海水族館」観光のメリットや混雑状況は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "夏休みの混雑時期とは異なり、11月〜1月のオフシーズンは館内を非常にゆったりと鑑賞できます。「黒潮の海」大水槽の正面シートに座り、世界最大の魚類ジンベエザメやナンヨウマンタが悠然と泳ぐ姿を何時間でも静かに眺められるのは冬ならではの特権です。また、海洋博公園内のオキちゃん劇場（イルカショー）や熱帯ドリームセンター（冬のラン展）も快適に散策できます。美ら海水族館の近くにある「備瀬のフクギ並木」では、木漏れ日の中を水牛車に乗って巡る癒やしの冬散歩も大人気です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の沖縄で絶対に食べるべきご当地グルメは何ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の沖縄グルメの筆頭は、幻のブランド豚「やんばる島豚あぐー」の熱々しゃぶしゃぶです。アグー豚は一般的な豚肉と比べて旨み成分（グルタミン酸）が豊富でコレステロールが低く、脂身が驚くほど甘くさっぱりしています。昆布や鰹の和風出汁やシークヮーサーポン酢でいただくしゃぶしゃぶは冬の体に染み渡ります。さらに、本部町でビール粕を飼料に育つ最高級黒毛和牛「もとぶ牛」のステーキ、濃厚な沖縄そば、冬に旬を迎える養殖車海老の塩焼きも外せません。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の沖縄旅行の服装や持ち物のポイントは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "日中は長袖シャツや薄手のパーカーで快適に過ごせますが、沖縄の冬は北東からの海風が強く吹く日があります。風が吹くと体感温度がぐっと下がるため、風を通さないウィンドブレーカーやマウンテンパーカー、薄手のダウンジャケットを1枚持参すると安心です。ホエールウォッチングの船上は特に風と波しぶきを受けるため、防寒着に加えて滑りにくいスニーカー、船酔い止め薬の準備をおすすめします。冬でも紫外線が本土の数倍強いため、サングラスや日焼け止めも必携です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ハレクラニ沖縄",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172611/172611.jpg",
              rating: 4.82,
              reviews: 739,
              price: "¥44,623〜",
              access: "那覇空港よりお車にて約７５分",
              special: "ハワイで育まれたラグジュアリーリゾート「ハレクラニ」が沖縄に誕生",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172611%2F172611.html",
              story: "ハワイで100年以上の歴史を紡いできた名門「ハレクラニ」が、世界で2つ目のホテルとして恩納村の海岸線に創り上げた最高峰ラグジュアリーリゾート「ハレクラニ沖縄」。全室がエメラルドグリーンの東シナ海を望むオーシャンビュー。冬の澄み渡る空気の中、バルコニーから眺めるサンセットのグラデーションと満天の星空は息を呑む美しさです。冬でも快適な屋内温水プールや天然温泉を用いたスパハレクラニで極上の癒やしを体験。夕食はミシュランシェフ監修のイノベーティブフレンチ「SHIROUX（シルー）」や日本料理「青碧蒼」。冬の沖縄の厳選食材とやんばる島豚あぐー、もとぶ牛を昇華させた芸術的な一皿が、忘れられない冬の祝宴を演出します。",
              roomTip: "プレミアオーシャンビュールーム。白を基調としたハレクラニの「七色の白」に彩られた空間で、波の音を聴きながら冬の海景を堪能できます。",
              gourmetTip: "「SHIROUX冬のイノベーティブディナー」。沖縄の冬野菜ともとぶ牛のロースト、近海魚のポワレを極上ワインペアリングとともに。",
              highlights: [
                "世界最高峰ハレクラニの真髄・全室オーシャンフロント＆冬の温水プールと天然温泉スパ",
                "ミシュランシェフ監修フレンチ「SHIROUX」・もとぶ牛と冬の沖縄野菜が織りなす至高の美食",
                "静寂と波音に包まれる大人の冬避寒バカンス・館内アートと極上のホスピタリティ"
              ]
            },
            {
              id: 2,
              name: "ハイアットリージェンシー瀬良垣アイランド沖縄",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/166320/166320.jpg",
              rating: 4.62,
              reviews: 998,
              price: "¥21,600〜",
              access: "那覇空港より沖縄自動車道を北上～屋嘉IC～県道88号線（万座毛方面）～おんなサンセット海道（国道58号線）。約60分。　",
              special: "美しい海に360度囲まれた瀬良垣島と、沖縄本島が一本の橋で繋がりひとつのリゾートを構成するホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166320%2F166320.html",
              story: "恩納村の美しい海に囲まれた孤島全体がひとつのリゾートとなった「ハイアット リージェンシー 瀬良垣アイランド 沖縄」。瀬羅垣島と本島が一本の橋で結ばれ、360度どこを見渡しても青く輝く海が広がるドラマチックなロケーションです。冬の澄んだ陽光が差し込むインドアプールやスチームサウナで寛ぎ、心地よいリゾートタイムを満喫できます。レストラン「シラカチ」では、鉄板焼・日本料理・炉端焼きを提供。冬期にはやんばるの契約農家から届く島野菜とアグー豚のしゃぶしゃぶ小鍋、最高等級もとぶ牛サーロインの鉄板焼きなど、職人の技が目の前で繰り広げられる贅沢なディナーを堪能できます。",
              roomTip: "オーシャンビュースイートまたはプレミアムルーム。東シナ海に沈む夕陽を望む広々としたテラスが備わり、至福のプライベート時間を約束します。",
              gourmetTip: "「シラカチ・鉄板焼冬の極みコース」。とろけるもとぶ牛と活伊勢海老、焼きアグー豚の前菜をカウンター席でライブ感たっぷりに。",
              highlights: [
                "瀬良垣島全体がリゾート・360度青い海に包まれる孤島のプライベート＆本格鉄板焼",
                "レストランシラカチの鉄板焼・もとぶ牛サーロインとアグー豚しゃぶしゃぶの極み",
                "夕暮れの水平線を染めるサンセットラウンジ・美ら海水族館や万座毛への快適ドライブ"
              ]
            },
            {
              id: 3,
              name: "ルネッサンスリゾートオキナワ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54315/54315.jpg",
              rating: 4.66,
              reviews: 918,
              price: "¥17,300〜",
              access: "那覇空港より沖縄自動車道利用で車で約60分。",
              special: "イルカが暮らすプライベートリゾート！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54315%2F54315.html",
              story: "恩納村のプライベートビーチと天然の入り江に面し、イルカたちが暮らす体験型ネイチャーリゾート「ルネッサンス リゾート オキナワ」。全室バルコニー付きオーシャンビューで、冬でも温暖な海風が心地よく吹き抜けます。冬のアクティビティが非常に充実しており、12月下旬からは大迫力のホエールウォッチングクルーズへのアクセス拠点として最適です。夕食は海の上に浮かぶレストラン「コーラルシービュー」でのバーベキューや、フランス料理「フォーシーズン」での炭火焼き。冬はアグー豚や近海魚を煮込んだブイヤベース、沖縄県産黒毛和牛のステーキが人気で、ファミリーから大人の記念日旅行まで幅広く支持されています。",
              roomTip: "ルネッサンスフロア（最上階クラブフロア）。専用ラウンジでの朝食やカクテルタイムサービスが付いたワンランク上の滞在が叶います。",
              gourmetTip: "「フォーシーズン・冬のフレンチ＆グリル」。シェフが目の前でフランベするもとぶ牛フィレステーキと島野菜のソテーが絶品です。",
              highlights: [
                "イルカとふれあうネイチャーリゾート・全室バルコニー付き＆冬のホエールウォッチング",
                "海上レストランでのBBQ＆フレンチフォーシーズン・炎が舞うもとぶ牛ステーキディナー",
                "クラブラウンジでの優雅なカクテルタイム・冬でも楽しめる多彩なインドアアクティビティ"
              ]
            },
            {
              id: 4,
              name: "ホテルモントレ沖縄　スパ＆リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141596/141596.jpg",
              rating: 4.65,
              reviews: 849,
              price: "¥18,500〜",
              access: "（那覇空港より）リムジンバス利用にて約65分　エアポートシャトルにて約80分　路線バス 系統番号120番にて約110分",
              special: "沖縄有数のビーチ“タイガービーチ”に面して建つ全客室オーシャンビューのホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141596%2F141596.html",
              story: "沖縄屈指の天然白砂ビーチ「タイガービーチ」に面して建つ、全室オーシャンビューの欧風リゾートホテル「ホテルモントレ沖縄 スパ＆リゾート」。アールデコ調の優雅な英国貴族の洋館を思わせるクラシカルな館内には、天然温泉を取り入れたスパ施設「ブルーリーフ」を完備し、天然温泉風呂・屋内ウェイブプール・サウナで冬の体を芯から温めることができます。夕食は本格フレンチ、日本料理、鉄板焼からセレクト可能。冬限定の会席では、名物のあぐー豚と旬の島野菜を特製出汁でくぐらせるしゃぶしゃぶや、沖縄近海で獲れた冬魚の薄造りが並び、上質な美食のひとときを約束します。",
              roomTip: "デラックスオーシャンルーム。波打ち際が間近に見える広々としたバルコニーで、波音をBGMに贅沢な読書やティータイムを楽しめます。",
              gourmetTip: "「冬の和洋会席・島恵み」。やんばる島豚あぐーの出汁しゃぶしゃぶと、県産黒毛和牛のロースト、新鮮海ぶどうと地魚の盛り合わせ。",
              highlights: [
                "タイガービーチ直結・英国調クラシックホテル＆天然温泉ブルーリーフと波の出るプール",
                "やんばる島豚あぐー出汁しゃぶしゃぶと新鮮地魚薄造り・冬の特選和洋会席コース",
                "天然温泉風呂とサウナで心身を解きほぐす冬のスパリゾート体験・海辺の散策路"
              ]
            },
            {
              id: 5,
              name: "オリエンタルホテル　沖縄リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182630/182630.jpg",
              rating: 4.48,
              reviews: 909,
              price: "¥24,220〜",
              access: "那覇空港より最短で約70分。沖縄美ら海水族館まで60分、ジャングリア沖縄まで40分と沖縄観光に最適なホテルです。",
              special: "2024年4月23日客室リニューアル。世界自然遺産「やんばる」を体験する旅の拠点にふさわしいホテルへ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182630%2F182630.html",
              story: "名護市喜瀬の高台に位置し、やんばるの豊かな森とエメラルドグリーンの名護湾を一望する丘の上のリゾート「オリエンタルホテル 沖縄リゾート＆スパ」。緑豊かな森と碧い海に囲まれた開放感あふれるロケーションで、冬の森を吹き抜ける澄んだ空気に心洗われます。館内には沖縄県内最大級の温水クアプールやジャグジー、展望サウナを備え、冬でもリゾートプールを満喫可能。夕食のブッフェ＆グリル「クワッチー」では、アグー豚のローストポークや冬の沖縄郷土料理、鉄板で焼き上げるビーフステーキが食べ放題。美ら海水族館や今帰仁城跡、古宇利大橋へのアクセス拠点としても抜群です。",
              roomTip: "クラブプレミアムルーム。高台ならではの名護湾パノラマビューと専用クラブラウンジでの上質なおもてなしを堪能できます。",
              gourmetTip: "「冬のやんばるディナーブッフェ」。低温調理したアグー豚のローストやもとぶ牛入り特製カレー、搾りたて紅芋モンブランが評判です。",
              highlights: [
                "やんばるの森と海を見下ろす高台・県内屈指の温水クアプールと充実のディナーブッフェ",
                "シェフが切り分けるアグー豚ローストポークや冬の沖縄郷土料理・搾りたてスイーツ",
                "美ら海水族館や古宇利島への観光拠点・森林浴とオーシャンビューを同時に楽しむ休日"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "沖縄の冬（11月・12月・1月）の気温や気候は？泳げますか？",
    "a": "沖縄の冬は本土の春や初秋のような気候で、平均気温は約18℃〜22℃です。真冬の1月でも最高気温が20℃を超える日が多く、寒さを忘れて過ごせる「日本最高峰の避寒リゾート」です。海水浴（遊泳）は原則として10月末で終了しますが、多くのリゾートホテルでは冬でも快適に利用できる温水インドアプールやジャグジー、天然温泉施設が完備されています。マリンアクティビティではウェットスーツを着用してのダイビングやシュノーケリング、シーカヤック、そして冬限定のホエールウォッチングが盛んに行われています。"
  },
  {
    "q": "冬の目玉「ホエールウォッチング」のベストシーズンと遭遇率は？",
    "a": "沖縄のホエールウォッチングは、毎年「12月下旬から4月上旬」がシーズンです。北極圏の冷たい海から出産と子育てのために暖かい沖縄近海（慶良間諸島沖や本部町・伊江島沖）へとザトウクジラが回遊してきます。体長約15m、体重約30トンに及ぶ巨大なクジラがジャンプする「ブリーチング」や尾びれで海面を叩く姿は大迫力。沖縄のホエールウォッチング船の遭遇率は「98%以上」と世界有数の高さを誇り、多くのツアーでクジラに出会えない場合の全額返金保証（特定期間）が付くほど高確率で観察できます。"
  },
  {
    "q": "冬の「沖縄美ら海水族館」観光のメリットや混雑状況は？",
    "a": "夏休みの混雑時期とは異なり、11月〜1月のオフシーズンは館内を非常にゆったりと鑑賞できます。「黒潮の海」大水槽の正面シートに座り、世界最大の魚類ジンベエザメやナンヨウマンタが悠然と泳ぐ姿を何時間でも静かに眺められるのは冬ならではの特権です。また、海洋博公園内のオキちゃん劇場（イルカショー）や熱帯ドリームセンター（冬のラン展）も快適に散策できます。美ら海水族館の近くにある「備瀬のフクギ並木」では、木漏れ日の中を水牛車に乗って巡る癒やしの冬散歩も大人気です。"
  },
  {
    "q": "冬の沖縄で絶対に食べるべきご当地グルメは何ですか？",
    "a": "冬の沖縄グルメの筆頭は、幻のブランド豚「やんばる島豚あぐー」の熱々しゃぶしゃぶです。アグー豚は一般的な豚肉と比べて旨み成分（グルタミン酸）が豊富でコレステロールが低く、脂身が驚くほど甘くさっぱりしています。昆布や鰹の和風出汁やシークヮーサーポン酢でいただくしゃぶしゃぶは冬の体に染み渡ります。さらに、本部町でビール粕を飼料に育つ最高級黒毛和牛「もとぶ牛」のステーキ、濃厚な沖縄そば、冬に旬を迎える養殖車海老の塩焼きも外せません。"
  },
  {
    "q": "冬の沖縄旅行の服装や持ち物のポイントは？",
    "a": "日中は長袖シャツや薄手のパーカーで快適に過ごせますが、沖縄の冬は北東からの海風が強く吹く日があります。風が吹くと体感温度がぐっと下がるため、風を通さないウィンドブレーカーやマウンテンパーカー、薄手のダウンジャケットを1枚持参すると安心です。ホエールウォッチングの船上は特に風と波しぶきを受けるため、防寒着に加えて滑りにくいスニーカー、船酔い止め薬の準備をおすすめします。冬でも紫外線が本土の数倍強いため、サングラスや日焼け止めも必携です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬のエメラルドグリーンの沖縄恩納村の海" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-teal-900/80 backdrop-blur-md text-teal-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-teal-400/30">
            <Calendar className="w-4 h-4 text-teal-300" />
            11月・12月・1月 冬の沖縄・ホエールウォッチング＆恩納村スパリゾート特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月沖縄】冬の楽園リゾート！12月下旬開幕「ホエールウォッチング」と美ら海水族館・冬のアグー豚しゃぶしゃぶ＆もとぶ牛・恩納村絶景スパリゾート5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            真冬の寒さを忘れさせる平均20℃の南国パラダイス。12月下旬からは大迫力のザトウクジラが来遊する感動のホエールウォッチングが開幕。澄み渡る美ら海水族館の静かな鑑賞、やんばる島豚あぐーの出汁しゃぶしゃぶと極上もとぶ牛。恩納村の最高峰ラグジュアリースパで過ごす至高の冬旅をお届けします。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 旬の時期：11月〜1月（クジラは12月下旬〜）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> エリア：沖縄県国頭郡恩納村・本部町・名護市</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> 旬グルメ：あぐー豚しゃぶしゃぶ・もとぶ牛・車海老・沖縄そば</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬こそが最高の大人の沖縄：平均20℃の静寂避寒と野生クジラが紡ぐ奇跡
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本列島が厳しい寒波と大雪に包まれる11月から1月、沖縄本島は日中の平均気温が約18℃〜22℃という快適な気候に恵まれます。夏のような蒸し暑さや台風の心配がなく、抜けるような青空と心地よい潮風が吹き抜けるこの季節は、旅慣れた大人たちがこぞって訪れる「日本最高峰の避寒リゾートシーズン」です。夏のピーク時の喧騒が落ち着き、最高級ホテルのプールサイドやオーシャンビューテラスで、波の音をBGMに贅沢な読書やスパトリートメントを堪能できます。
            </p>
            <p>
              冬の沖縄の最大のハイライトは、毎年12月下旬から開幕する「ホエールウォッチング」です。極北の海から暖かい沖縄近海（慶良間諸島沖や本部町沖）へと、出産と子育てのために回遊してくる野生のザトウクジラ。体長約15メートルの巨体が水面を突き破ってジャンプする「ブリーチング」や、母クジラが子クジラに寄り添って泳ぐ微笑ましい姿は、息を呑む感動を与えてくれます。遭遇率は驚異の98%以上を誇り、世界中からナチュラリストが集まります。
            </p>
            <p>
              さらに冬の沖縄は食の魅力も最高潮。肌寒い夜にいただく「やんばる島豚あぐー」の熱々出汁しゃぶしゃぶは、脂身の融点が低く、口の中でとろける甘みと上品な旨みが格別です。オリオンビールの粕を飼料に育つ最高級黒毛和牛「もとぶ牛」のステーキ、冬に旬を迎える大粒の車海老など、心も体も温まる美食が待っています。恩納村のラグジュアリーホテルに滞在し、温水インドアプールや天然温泉スパで寛ぐ至福の冬のリトリートをご案内します。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
                <Anchor className="w-4 h-4 text-teal-700" />
                12月開幕ホエールウォッチング
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                慶良間・本部沖で遭遇率98%以上。野生ザトウクジラの大迫力ジャンプと生命のドラマを体感。
              </p>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
                <Sun className="w-4 h-4 text-teal-700" />
                平均20℃の静寂避寒リゾート
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                混雑のない大人のラグジュアリーステイ。温水インドアプールや天然温泉スパで癒やしの時間。
              </p>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
                <Utensils className="w-4 h-4 text-teal-700" />
                あぐー豚しゃぶしゃぶ＆もとぶ牛
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                とろける甘みのアグー豚出汁しゃぶしゃぶと、霜降りが芳醇なもとぶ牛の極上鉄板焼きディナー。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-teal-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              ホエールウォッチングと冬美食を満喫する恩納村リゾート5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期や宿泊プランにより変動します。
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
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
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
                        <MapPin className="w-3.5 h-3.5 text-teal-700" />
                        {hotel.access}
                      </span>
                      <span className="text-teal-800 font-extrabold text-base sm:text-lg">
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
                          <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-teal-50/40 p-3 rounded-xl border border-teal-100/60">
                        <span className="font-bold text-teal-950 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-950 block mb-1">【冬の味覚おすすめ】</span>
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
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-800 to-slate-900 hover:from-teal-900 hover:to-black text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
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
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の沖縄本島・恩納村＆本部 2泊3日王道モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-teal-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-teal-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：那覇空港到着・沖縄そばランチと万座毛夕陽＆恩納村スパリゾート
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                那覇空港に到着後、レンタカーで沖縄自動車道を北上。途中、名護や恩納村の老舗店で熱々のソーキそばをランチに堪能。象の鼻の奇岩で知られる景勝地「万座毛」へ立ち寄り、冬の澄んだ東シナ海の波濤と夕陽パノラマを展望。夕方に恩納村のラグジュアリーリゾートへチェックイン。温水インドアプールやスパでリフレッシュした後、ディナーはやんばる島豚あぐーの出汁しゃぶしゃぶコースを堪能します。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-teal-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-teal-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：本部沖ホエールウォッチングクルーズと美ら海水族館＆もとぶ牛鉄板焼き
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午前中は本部港または恩納村マリーナからホエールウォッチング船に乗船。ザトウクジラの巨大なブロウやジャンプを間近に観察する感動の海洋体験。午後は混雑のない「沖縄美ら海水族館」へ。「黒潮の海」大水槽でジンベエザメが悠然と泳ぐ姿をゆったり観賞し、備瀬のフクギ並木を水牛車でのんびり散策。夜はリゾートのレストランで、最高等級もとぶ牛の鉄板焼きステーキとワインを楽しみます。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-teal-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-teal-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：やちむんの里工芸めぐり・古民家カフェと首里城初詣＆お土産調達
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                読谷村の「やちむんの里」へ立ち寄り、登り窯の赤瓦と緑に囲まれた工房で沖縄伝統の陶器（やちむん）の器を吟味。午後は那覇へ戻り、復興が進む首里城公園を散策して新年の安寧を祈願。那覇空港でお土産（冬の完熟タンカン、黒糖カヌレ、限定泡盛）を購入し帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-teal-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-teal-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の沖縄を快適に満喫するための気候・服装・ホエールウォッチング準備
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200 leading-relaxed pt-2">
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【気候と服装：北風対策のマウンテンパーカー】</span>
              <p>
                沖縄の冬は日中の気温が20℃前後でも、北東からの海風が吹くと体感温度は13〜15℃程度まで冷え込みます。薄手のインナーの上に、風を遮断できるウィンドブレーカーやマウンテンパーカー、フリースジャケットを重ね着するのが鉄則です。足元は歩きやすいスニーカーを選びましょう。
              </p>
            </div>
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【船上アドバイス：ホエールウォッチングの酔い止めと防寒】</span>
              <p>
                外洋に出るホエールウォッチングクルーズは約2〜3時間の航海となります。冬の東シナ海は波が立ちやすいため、普段船酔いしない方でも乗船30分前に酔い止め薬を服用することをおすすめします。船上は水しぶきと強風を受けるため、防水防寒着と滑りにくい靴底の靴をご用意ください。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-teal-800" />
              沖縄・恩納村＆やんばるの冬名物＆厳選おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              南国の太陽と豊かな森が育む冬の特産品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                冬の柑橘の王様「やんばるタンカン」＆島らっきょう
              </h3>
              <p>
                12月下旬から1月にかけて旬を迎える「タンカン」は、温州みかんの甘みとオレンジの濃厚な香りを併せ持つ沖縄の冬の代表果実。果汁が非常に多く、濃厚な甘酸っぱさが旅の疲れを癒やします。また、冬から春に収穫が始まるシャキシャキの「島らっきょう」の塩漬けは、ビールや泡盛のアテに最高のお土産です。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                やちむん（伝統陶器）の器＆熟成古酒泡盛
              </h3>
              <p>
                ぽってりとした厚みと鮮やかなコバルトブルー・唐草模様が美しい「やちむん」。日々の食卓を華やかに彩るマグカップや平皿は旅の思い出にぴったり。さらに冬の静かな夜にじっくり味わいたい長期熟成の「古酒（クース）泡盛」は、バニラのような芳醇な香りとまろやかな口当たりが魅力です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-teal-800" />
              沖縄自然文化ディープダイブ
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ沖縄近海が世界屈指のクジラの揺りかごと呼ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Anchor className="w-4 h-4 text-teal-700" />
                慶良間・本部沖の穏やかなサンゴ礁と冬の適温海水
              </h3>
              <p>
                ザトウクジラは体長15mにもなる大型哺乳類ですが、生まれたばかりの赤ちゃんクジラは皮下脂肪が薄く、冷たい極北の海では体温を維持できません。沖縄周辺の海は冬でも水温が約21〜23℃と温かく、サンゴ礁や島々に囲まれた浅瀬は外洋の荒波や天敵（シャチ）から母子を守る理想的な「産院・保育所」となります。春先までの約3ヶ月間、母クジラは飲まず食わずで授乳し、子どもに泳ぎや呼吸を教え込みます。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-700" />
                幻の在来豚アグーの復活劇：琉球王朝から続く食の誇り
              </h3>
              <p>
                約600年前に中国から導入されたとされる在来豚「アグー」。戦後の混乱期に絶滅の危機に瀕し、わずか18頭まで激減しましたが、関係者の執念の交配努力によって奇跡の復活を遂げました。一般的な豚肉の何倍もの旨み成分とコラーゲンを含み、コレステロール値が低いアグー豚は、医食同源（クスイムン）を尊ぶ沖縄の人々の魂の味として今も愛されています。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-teal-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の沖縄・恩納村旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-teal-800" />
            あわせて読みたい南国避寒＆絶景リゾート特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-warm-island-escape" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">南国アイランド避寒</span>
              <p className="font-bold text-stone-800 line-clamp-2">真冬の寒さを忘れる南国アイランドリゾート＆極上ビーチステイ</p>
            </Link>
            <Link 
              href="/traditional-okinawa-ishigaki-beef-yaeyama-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">沖縄・八重山諸島</span>
              <p className="font-bold text-stone-800 line-clamp-2">極上石垣牛とエメラルドブルーの海・離島リゾートを満喫する名宿</p>
            </Link>
            <Link 
              href="/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">鹿児島・指宿温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">天然砂むし温泉と黒豚しゃぶしゃぶ・錦江湾の絶景海辺リゾート</p>
            </Link>
            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">宮崎・青島温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">鬼の洗濯板と日南海岸の冬陽・極上宮崎牛と伊勢海老リゾート宿</p>
            </Link>
            <Link 
              href="/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">高知・高知城＆土佐</span>
              <p className="font-bold text-stone-800 line-clamp-2">幻の天然クエ鍋と戻り鰹藁焼き・高知城ライトアップと天然温泉宿</p>
            </Link>
            <Link 
              href="/winter-scenic-illumination-luxury-resort" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">冬のイルミネーション</span>
              <p className="font-bold text-stone-800 line-clamp-2">全国の幻想的な光の絶景と贅沢ステイを楽しむ極上リゾート特集</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-okinawa-onna-motobu-whalewatching-agu-resort-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
