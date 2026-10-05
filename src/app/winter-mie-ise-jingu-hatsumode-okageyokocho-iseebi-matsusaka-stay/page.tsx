import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sunrise, Waves, Sun, Flame, Landmark, Building, Fish, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月三重】伊勢神宮新春初詣とおかげ横丁・五十鈴川の朝霧と神域参拝・冬の極上伊勢海老＆松阪牛会席を味わう伊勢名宿5選",
  description: "11月から1月、日本人の心の故郷・伊勢神宮（内宮・外宮）は凛とした神聖な冬の静寂に包まれます。五十鈴川に立ち込める幻想的な朝霧、宇治橋大鳥居から昇る冬至前後の神秘的な朝日、年末年始から新春にかけての初詣の賑わい、そして赤福ぜんざいや伊勢うどんが湯気を上げるおかげ横丁。冬に最盛期を迎える本場の伊勢海老や極上の松阪牛を堪能できる、伊勢神宮参拝に最適な厳選名宿5選と1泊2日の冬の王道参拝モデルコースを徹底解説します。",
  keywords: '伊勢神宮 初詣, 内宮 外宮, おかげ横丁 食べ歩き, 五十鈴川 朝霧, 冬至の日の出 宇治橋, いにしえの宿 伊久, 伊勢外宮参道 伊勢神泉, ホテルキャッスルイン伊勢夫婦岩, 三交イン伊勢市駅前, 伊勢シティホテル, 冬 伊勢海老, 松阪牛 すき焼き, 11月 12月 1月 三重旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay/"
  },
  openGraph: {
    title: "【11・12・1月三重】伊勢神宮新春初詣とおかげ横丁・五十鈴川の朝霧と神域参拝・冬の極上伊勢海老＆松阪牛会席を味わう伊勢名宿5選",
    description: "11月から1月、日本人の心の故郷・伊勢神宮（内宮・外宮）は凛とした神聖な冬の静寂に包まれます。五十鈴川に立ち込める幻想的な朝霧、宇治橋大鳥居から昇る冬至前後の神秘的な朝日、年末年始から新春にかけての初詣の賑わい、そして赤福ぜんざいや伊勢うどんが湯気を上げるおかげ横丁。冬に最盛期を迎える本場の伊勢海老や極上の松阪牛を堪能できる、伊勢神宮参拝に最適な厳選名宿5選と1泊2日の冬の王道参拝モデルコースを徹底解説します。",
    url: 'https://croud-travel.com/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の伊勢神宮内宮宇治橋と清らかな五十鈴川'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月三重】伊勢神宮新春初詣とおかげ横丁・五十鈴川の朝霧と神域参拝・冬の極上伊勢海老＆松阪牛会席を味わう伊勢名宿5選",
    description: "11月から1月、日本人の心の故郷・伊勢神宮（内宮・外宮）は凛とした神聖な冬の静寂に包まれます。五十鈴川に立ち込める幻想的な朝霧、宇治橋大鳥居から昇る冬至前後の神秘的な朝日、年末年始から新春にかけての初詣の賑わい、そして赤福ぜんざいや伊勢うどんが湯気を上げるおかげ横丁。冬に最盛期を迎える本場の伊勢海老や極上の松阪牛を堪能できる、伊勢神宮参拝に最適な厳選名宿5選と1泊2日の冬の王道参拝モデルコースを徹底解説します。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function MieIseJinguWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月三重】伊勢神宮新春初詣とおかげ横丁・五十鈴川の朝霧と神域参拝・冬の極上伊勢海老＆松阪牛会席を味わう伊勢名宿5選",
    description: "11月から1月、日本人の心の故郷・伊勢神宮（内宮・外宮）は凛とした神聖な冬の静寂に包まれます。五十鈴川に立ち込める幻想的な朝霧、宇治橋大鳥居から昇る冬至前後の神秘的な朝日、年末年始から新春にかけての初詣の賑わい、そして赤福ぜんざいや伊勢うどんが湯気を上げるおかげ横丁。冬に最盛期を迎える本場の伊勢海老や極上の松阪牛を堪能できる、伊勢神宮参拝に最適な厳選名宿5選と1泊2日の冬の王道参拝モデルコースを徹底解説します。",
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
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
      '@id': 'https://croud-travel.com/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay'
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
        name: '伊勢神宮初詣＆冬の伊勢海老・松阪牛特集',
        item: 'https://croud-travel.com/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の伊勢神宮参拝の見どころと、冬至前後の神秘的な日の出とは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の伊勢神宮は、大気が澄み渡り、凛とした静寂が杜全体を包み込みます。特に11月下旬から1月中旬にかけて、内宮の宇治橋大鳥居の中央から太陽が昇る神秘的な光景が見られます。冬至の日（12月22日頃）を中心とする約2ヶ月間、鳥居越しに朝日が射し込み、五十鈴川の水面が黄金色に輝く様子は息をのむ美しさです。また、朝晩の寒暖差によって五十鈴川に幻想的な川霧が立ち込める朝の参拝（早朝参拝）は、冬ならではの特別な神気を肌で感じられる最高の時間帯です。"
        }
      },
      {
        '@type': 'Question',
        name: "伊勢神宮の「外宮先参り」の正しい参拝順序と初詣の混雑回避のコツは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "古くからの習わしとして、伊勢神宮はまず「外宮（豊受大神宮）」を参拝し、その後に「内宮（皇大神宮）」を参拝する「外宮先参り」が正式な順序とされています。年末年始（大晦日〜正月三が日）および1月の土日祝日は全国から多くの初詣客が訪れ、内宮周辺やおかげ横丁は大変混雑します。混雑を避ける最大のポイントは「早朝参拝」です。内宮・外宮ともに冬期は午前5時から開門しており、早朝5時〜7時台は人影もまばらで清らかな静寂の中で参拝できます。宿を外宮・内宮至近に取り、朝一番で参拝するのが最も賢い方法です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の伊勢・志摩で旬を迎える「本場の伊勢海老」と「松阪牛」の楽しみ方は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "伊勢湾・熊野灘の伊勢海老漁は10月に解禁され、水温が下がる11月から1月にかけて身が引き締まり、濃厚な甘みと旨味が最高潮に達します。地元ではぷりぷりとした弾力のお造り（刺身）、殻ごと焼き上げて香ばしい味噌と絡める鬼殻焼き、頭から濃厚な出汁が出る具足煮や味噌汁で丸ごと味わいます。また、三重県が誇る世界の至宝「松阪牛」は、人肌で溶ける不飽和脂肪酸の上質な脂と芳醇な香りが特徴。冬はすき焼き、しゃぶしゃぶ、陶板ステーキなどで、伊勢海老との豪華共演を味わうのが冬の伊勢旅の醍醐味です。"
        }
      },
      {
        '@type': 'Question',
        name: "「おかげ横丁」「おはらい町」の冬の食べ歩き名物とおすすめグルメは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "内宮の鳥居前町であるおはらい町とおかげ横丁では、冬ならではの温かいグルメが大人気です。代表格は「赤福本店」の冬季限定メニュー「赤福ぜんざい」。ふっくら炊き上げた大納言小豆の温かいお汁粉に、香ばしく焼き上げた餅が入り、塩昆布が添えられた逸品です。また、極太の柔らかい麺に漆黒のたまり醤油タレを絡める熱々の「伊勢うどん」、ジューシーな「松阪牛コロッケ」や「松阪牛にぎり寿司」、具だくさんの「ひもの汁」など、冬の散策で冷えた体を幸せに満たす名物が目白押しです。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の伊勢旅行の気候・服装と、車や公共交通機関でのアクセスの注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "伊勢市は太平洋側に位置するため温暖で雪が積もることは稀ですが、伊勢湾からの冷たい海風が吹き抜け、朝晩は0度〜3度前後まで冷え込みます。特に早朝の神宮参拝や五十鈴川沿いは玉砂利から冷気が上がってくるため、風を通さない厚手のコートやダウンジャケット、マフラー、手袋、歩きやすい防寒ブーツやスニーカーが必須です。年末年始や新春の1月は伊勢西IC・伊勢IC周辺でパーク＆バスライドなどの大規模な交通規制が行われるため、近鉄特急を利用して伊勢市駅や宇治山田駅から路線バスを活用するのが最もスムーズです。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "いにしえの宿　伊久（共立リゾート）（２０２６年４月１日リニューアルオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/142809/142809.jpg",
              rating: 4.64,
              reviews: 1280,
              price: "¥27,390〜",
              access: "近鉄五十鈴川駅より送迎あり※詳しくは【よくある質問】Q.伊久までの送迎はありますか？をご覧ください。",
              special: "内宮までゆっくり歩いて15分の全室露天風呂付のお宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142809%2F142809.html",
              story: "内宮の宇治橋まで徒歩わずか15分、伊勢神宮内宮のお膝元に佇む風情あふれる温泉宿「いにしえの宿 伊久」。神域の森に抱かれた静寂な環境にあり、早朝参拝の拠点として全国の参拝客から絶大な人気を誇ります。早朝、まだ人影のない静謐な五十鈴川の朝霧を踏みしめながらの内宮参拝は、宿泊者だけに許された特別な体験。館内全館が畳敷きで素足のまま心地よく寛げ、大浴場「社（やしろ）の湯」と趣の異なる4つの無料貸切風呂で天然温泉の湯浴みを満喫できます。夕食には三重の誇る二大味覚「活伊勢海老」と「極上松阪牛」を贅沢に盛り込んだ会席料理が振る舞われ、身も心も清められる極上の伊勢ステイが叶います。",
              roomTip: "客室露天風呂付き和洋室。神宮の杜から吹き抜ける清らかな風を感じながら、プライベートな温泉浴を心ゆくまで堪能できます。",
              gourmetTip: "「伊勢の二大美味会席」。ぷりぷりとした甘みの伊勢海老のお造りや具足煮と、きめ細やかな霜降り松阪牛の陶板焼きを贅沢に味わえます。",
              highlights: [
                "内宮まで徒歩15分の好立地・早朝の神聖な五十鈴川の朝霧参拝を独占体験",
                "全館畳敷きの温もり・趣の異なる4つの無料貸切風呂と大浴場社（やしろ）の湯",
                "夕食に三重の二大味覚「活伊勢海老」と「霜降り松阪牛」を味わう豪華特選会席"
              ]
            },
            {
              id: 2,
              name: "伊勢外宮参道　伊勢神泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/142619/142619.jpg",
              rating: 4.57,
              reviews: 1427,
              price: "¥27,650〜",
              access: "ＪＲ参宮線・近鉄　伊勢市駅より徒歩1分（改札は外宮側のJR改札口をご利用ください）",
              special: "伊勢市駅前の神の恵みの温泉を湧出する旅荘。旅の疲れを癒し、ゆったりとした時の流れを感じてください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142619%2F142619.html",
              story: "JR・近鉄伊勢市駅の目の前、外宮参道に面した抜群のロケーションを誇るラグジュアリー旅館「伊勢外宮参道 伊勢神泉」。伊勢市駅周辺で唯一、全客室のテラスに自家源泉の天然温泉露天風呂を備えた贅沢な造りが自慢です。外宮までは参道をそぞろ歩いて徒歩わずか5分という至便さで、早朝の外宮参拝にも夕刻の散策にも最適。館内の日本料理レストラン「伊勢みやび」では、料理長が厳選した伊勢湾の活伊勢海老やあわび、極上の松阪牛など、神の恵みである旬の食材を五感で味わう本格日本料理を提供。駅近の利便性と老舗旅館のきめ細やかなもてなしが見事に調和した、大人の伊勢詣でにふさわしい名宿です。",
              roomTip: "テラス露天風呂付デラックスツイン。広々としたテラスで伊勢の澄んだ夜風を浴びながら、効能豊かな天然温泉にいつでも浸かる贅沢が約束されます。",
              gourmetTip: "「割烹 伊勢みやびの厳選会席」。冬の伊勢海老の黄金焼きや松阪牛のすき焼き仕立てなど、伝統と革新が融合した繊細な味覚が楽しめます。",
              highlights: [
                "外宮参道沿い＆全客室テラス露天風呂付・伊勢市駅前唯一の自家源泉天然温泉",
                "ミシュラン掲載の割烹「伊勢みやび」で味わう伊勢海老・松阪牛の最高峰日本料理",
                "外宮参拝の後に立ち寄れる参道カフェやショップが充実・贅沢な大人の休日"
              ]
            },
            {
              id: 3,
              name: "ホテルキャッスルイン伊勢夫婦岩（旧：ホテルリゾートイン二見）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40176/40176.jpg",
              rating: 3.92,
              reviews: 2274,
              price: "¥3,300〜",
              access: "ＪＲ参宮線 二見浦駅より徒歩10分／伊勢市駅より無料送迎あり(要予約)／伊勢神宮(内宮)よりお車で15分",
              special: "貸切風呂を無料で楽しめるリーズナブルなホテル。伊勢神宮（内宮・外宮）・おかげ横丁まで約15分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40176%2F40176.html",
              story: "伊勢神宮の内宮・外宮から車で約15分、伊勢湾を望む名勝「二見浦・夫婦岩」のすぐそばに佇む「ホテルキャッスルイン伊勢夫婦岩」。古くから伊勢参宮の前に身を清める「禊（みそぎ）の地」として知られる二見浦に位置し、冬の澄み渡る空気の中で夫婦岩の間に昇る神々しい朝日は感動の絶景です。館内には海を望む展望大浴場や露天風呂、さらに5つの趣異なる貸切風呂を完備しており、参拝後の心地よい疲れをじっくりと癒すことができます。伊勢志摩の豊かな海の幸をリーズナブルに味わえるプランも充実しており、家族旅行やグループでの伊勢詣でに圧倒的なコストパフォーマンスを発揮します。",
              roomTip: "オーシャンビュー和洋室。窓一面に伊勢湾の穏やかな冬景色が広がり、朝は水平線が赤く染まる雄大な日の出を部屋から拝むことができます。",
              gourmetTip: "「伊勢志摩の恵み御膳」。近海で獲れた新鮮な魚介のお造り盛り合わせや、伊勢名物の郷土料理を親しみやすいスタイルで味わえます。",
              highlights: [
                "禊の地「二見浦・夫婦岩」至近・伊勢湾の日の出を望む展望風呂と5種の無料貸切風呂",
                "伊勢志摩の海の幸をリーズナブルに堪能・家族旅行やグループ旅に圧倒的コスパ",
                "夫婦岩から昇る神々しい冬の朝日の拝観・静かな海辺の情緒ある湯浴み"
              ]
            },
            {
              id: 4,
              name: "三交イン伊勢市駅前「本館」～四季乃湯～・「別館」Grande",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/158426/158426.jpg",
              rating: 4.33,
              reviews: 2385,
              price: "¥8,800〜",
              access: "「本館」へは、近鉄・ＪＲ　伊勢市駅南口（ＪＲ側）から徒歩にて約２分",
              special: "朝食バイキングでは伊勢うどんなどのご当地メニューあり！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158426%2F158426.html",
              story: "近鉄・JR伊勢市駅JR側出口から徒歩わずか1分、外宮参拝の玄関口に堂々と建つ「三交イン伊勢市駅前 本館・別館Grande」。外宮まで徒歩約6分という好立地に加え、駅前でありながら館内に宿泊者専用の大浴場「四季乃湯」を完備。冬の参拝で冷えた体を大きな湯船で手足を伸ばして温められるのが何よりの魅力です。客室はシモンズ社製ベッドや加湿空気清浄機が完備され、ビジネスから一人旅、カップルまで清潔で機能的な滞在をサポート。さらに選べる枕バーやアメニティバーなど、細やかなおもてなしが行き届いています。外宮参道の飲食店巡りやおかげ横丁へのバスアクセスも抜群です。",
              roomTip: "Grandeフロアのコンフォートツイン。独立したバス・トイレとゆとりのあるリビングスペースで、冬の伊勢参宮を快適に寛げます。",
              gourmetTip: "「三重の郷土モーニングビュッフェ」。伊勢うどんや地元産ブランド米、あおさの味噌汁など、伊勢の朝を元気にスタートする朝食が好評です。",
              highlights: [
                "伊勢市駅徒歩1分の快適立地・館内大浴場「四季乃湯」とシモンズベッドで快眠",
                "外宮まで徒歩6分・朝食バイキングで名物伊勢うどんやあおさ汁をご当地満喫",
                "選べる枕バー完備・夜間のセキュリティも万全で女性の一人旅にも安心"
              ]
            },
            {
              id: 5,
              name: "伊勢シティホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/740/740.jpg",
              rating: 3.61,
              reviews: 3123,
              price: "¥3,850〜",
              access: "■近鉄「伊勢市駅」徒歩3分、「宇治山田駅」徒歩5分※JRでお越しの方は近鉄改札口をご利用下さい　■「伊勢西IC」8分",
              special: "2026年9月、朝食リニューアル!ご注文ごとに焼き上げる、出来たて熱々の陶板料理がおすすめです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F740%2F740.html",
              story: "近鉄・JR伊勢市駅近鉄側出口より徒歩約3分、閑静なビジネス・観光街に位置する「伊勢シティホテル」。伊勢神宮外宮まで徒歩圏内にあり、内宮へ向かうバス停も至近のアクセスの良さが魅力です。館内には老舗ステーキハウス「伊勢みやび」が併設されており、伊勢を訪れたなら一度は味わいたい極上のA5ランク松阪牛ステーキを職人の見事な手さばきとともに堪能できます。リーズナブルな宿泊価格ながら、丁寧な接客と清潔感ある客室、全室Wi-Fi完備で、伊勢参拝の活動拠点として一人旅やリピーターから長年親しまれている実力派ホテルです。",
              roomTip: "スーペリアダブルルーム。ゆったりとしたクイーンサイズベッドを備え、参拝で歩き疲れた体を心地よい眠りでしっかりとリフレッシュできます。",
              gourmetTip: "「松阪牛ステーキディナー」。熟練のシェフが鉄板で焼き上げる極上松阪牛のサーロインやフィレ。上品な脂の甘みと赤身の深いコクが口一杯に広がります。",
              highlights: [
                "駅近の便利な拠点・併設レストランで味わう本場A5ランク松阪牛ステーキディナー",
                "リーズナブルな宿泊料金と充実の機能性・一人旅から夫婦旅まで心温まるもてなし",
                "おかげ横丁や内宮への路線バス乗り場も至近・伊勢周遊観光のフットワーク抜群"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の伊勢神宮参拝の見どころと、冬至前後の神秘的な日の出とは？",
    "a": "冬の伊勢神宮は、大気が澄み渡り、凛とした静寂が杜全体を包み込みます。特に11月下旬から1月中旬にかけて、内宮の宇治橋大鳥居の中央から太陽が昇る神秘的な光景が見られます。冬至の日（12月22日頃）を中心とする約2ヶ月間、鳥居越しに朝日が射し込み、五十鈴川の水面が黄金色に輝く様子は息をのむ美しさです。また、朝晩の寒暖差によって五十鈴川に幻想的な川霧が立ち込める朝の参拝（早朝参拝）は、冬ならではの特別な神気を肌で感じられる最高の時間帯です。"
  },
  {
    "q": "伊勢神宮の「外宮先参り」の正しい参拝順序と初詣の混雑回避のコツは？",
    "a": "古くからの習わしとして、伊勢神宮はまず「外宮（豊受大神宮）」を参拝し、その後に「内宮（皇大神宮）」を参拝する「外宮先参り」が正式な順序とされています。年末年始（大晦日〜正月三が日）および1月の土日祝日は全国から多くの初詣客が訪れ、内宮周辺やおかげ横丁は大変混雑します。混雑を避ける最大のポイントは「早朝参拝」です。内宮・外宮ともに冬期は午前5時から開門しており、早朝5時〜7時台は人影もまばらで清らかな静寂の中で参拝できます。宿を外宮・内宮至近に取り、朝一番で参拝するのが最も賢い方法です。"
  },
  {
    "q": "冬の伊勢・志摩で旬を迎える「本場の伊勢海老」と「松阪牛」の楽しみ方は？",
    "a": "伊勢湾・熊野灘の伊勢海老漁は10月に解禁され、水温が下がる11月から1月にかけて身が引き締まり、濃厚な甘みと旨味が最高潮に達します。地元ではぷりぷりとした弾力のお造り（刺身）、殻ごと焼き上げて香ばしい味噌と絡める鬼殻焼き、頭から濃厚な出汁が出る具足煮や味噌汁で丸ごと味わいます。また、三重県が誇る世界の至宝「松阪牛」は、人肌で溶ける不飽和脂肪酸の上質な脂と芳醇な香りが特徴。冬はすき焼き、しゃぶしゃぶ、陶板ステーキなどで、伊勢海老との豪華共演を味わうのが冬の伊勢旅の醍醐味です。"
  },
  {
    "q": "「おかげ横丁」「おはらい町」の冬の食べ歩き名物とおすすめグルメは？",
    "a": "内宮の鳥居前町であるおはらい町とおかげ横丁では、冬ならではの温かいグルメが大人気です。代表格は「赤福本店」の冬季限定メニュー「赤福ぜんざい」。ふっくら炊き上げた大納言小豆の温かいお汁粉に、香ばしく焼き上げた餅が入り、塩昆布が添えられた逸品です。また、極太の柔らかい麺に漆黒のたまり醤油タレを絡める熱々の「伊勢うどん」、ジューシーな「松阪牛コロッケ」や「松阪牛にぎり寿司」、具だくさんの「ひもの汁」など、冬の散策で冷えた体を幸せに満たす名物が目白押しです。"
  },
  {
    "q": "冬の伊勢旅行の気候・服装と、車や公共交通機関でのアクセスの注意点は？",
    "a": "伊勢市は太平洋側に位置するため温暖で雪が積もることは稀ですが、伊勢湾からの冷たい海風が吹き抜け、朝晩は0度〜3度前後まで冷え込みます。特に早朝の神宮参拝や五十鈴川沿いは玉砂利から冷気が上がってくるため、風を通さない厚手のコートやダウンジャケット、マフラー、手袋、歩きやすい防寒ブーツやスニーカーが必須です。年末年始や新春の1月は伊勢西IC・伊勢IC周辺でパーク＆バスライドなどの大規模な交通規制が行われるため、近鉄特急を利用して伊勢市駅や宇治山田駅から路線バスを活用するのが最もスムーズです。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-stone-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の伊勢神宮内宮宇治橋と清らかな五十鈴川" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-900/80 backdrop-blur-md text-amber-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <Landmark className="w-4 h-4 text-amber-300" />
            11月・12月・1月 冬の三重・伊勢神宮初詣＆極上味覚特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月三重】伊勢神宮新春初詣とおかげ横丁・五十鈴川の朝霧と神域参拝・冬の極上伊勢海老＆松阪牛会席を味わう伊勢名宿5選
          </h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            神路山と島路山から湧き出る五十鈴川の清流に立ち込める朝霧、冬至前後に宇治橋大鳥居の真ん中から昇る黄金色の朝日、新春の願いを込める厳かな初詣。湯気立ちのぼるおかげ横丁で味わう熱々の赤福ぜんざいや伊勢うどん、そして冬に旨味が凝縮する伊勢海老と松阪牛の贅沢な饗宴。冬の伊勢神宮で心洗われる特別な参拝旅を叶える厳選の宿とモデルコースをご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 最適時期：11月中旬〜1月下旬（冬至の日の出・年末年始・新春初詣）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> エリア：三重県伊勢市（内宮・外宮・おかげ横丁・二見浦）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-amber-400" /> 名物：活伊勢海老・極上松阪牛・赤福ぜんざい・伊勢うどん</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              悠久の森が冬の静寂に染まる刻、日本人の原風景と至高の美味に出逢う伊勢詣で
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              二千年以上の長きにわたり、日本人の心の拠り所であり続けてきたお伊勢参り。四季折々の美しさを持つ伊勢神宮ですが、11月から1月にかけての冬こそ、神域の神聖さが最も際立つ特別な季節です。木々の葉を落とした神宮の杜には冬の柔らかな陽光がまっすぐに差し込み、玉砂利を踏みしめる音だけが静かに響き渡ります。冷たく張り詰めた大気の中、五十鈴川の御手洗場に手を浸すと、指先から全身へと清らかな神気が染み渡り、日常の雑念がすっと消え去っていくような清涼感を覚えます。
            </p>
            <p>
              冬の伊勢で決して見逃せないのが、内宮の宇治橋大鳥居から昇る冬至前後の日の出です。11月下旬から1月中旬にかけての早朝、大鳥居の真正面から神々しい朝日が昇り、宇治橋を渡る参拝者の影を長く伸ばしながら、五十鈴川の水面を黄金色に染め上げます。大鳥居越しに光が射し込むその光景は、太陽の神である天照大御神（あまてらすおおみかみ）の存在をまさに肌で実感する奇跡の瞬間として、古くから多くの人々を魅了してきました。
            </p>
            <p>
              そして、参拝を終えた後に足を運ぶ「おはらい町」と「おかげ横丁」の賑わいは、冬の寒さを一瞬で忘れさせてくれます。寒風の中で頬張る熱々の「赤福ぜんざい」は、焼き立てのお餅の香ばしさと優しい小豆の甘みが冷えた体に染み渡る冬の風物詩。濃厚なたまり醤油だれを絡めたふわふわの「伊勢うどん」や、食べ歩きの定番である松阪牛串・松阪牛コロッケが湯気を立て、新春の初詣で賑わう人々の笑顔で活気に満ち溢れます。
            </p>
            <p>
              さらに夜のお楽しみは、冬に最盛期を迎える海の王者「伊勢海老」と、肉の芸術品「松阪牛」の共演です。秋に解禁された伊勢海老は真冬の冷水で身が引き締まり、甘みと旨味が最高潮に達します。ぷりぷりのお造り、香ばしい鬼殻焼き、出汁が効いた濃厚な味噌汁。そして人肌の温度で脂がとろける霜降り松阪牛のすき焼きやステーキ。神宮のお膝元に宿を取り、早朝の静寂な参拝と夜の贅を尽くした会席料理に浸る冬の伊勢旅は、新しい一年のスタートを飾る最良のご褒美となります。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の伊勢神宮を深く味わう3つの特別な体験
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月だからこそ出逢える、神秘的な光景と冬限定の極上グルメ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Sunrise className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 宇治橋大鳥居の朝日と五十鈴川の朝霧
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                冬至前後（11月下旬〜1月中旬）の朝7時半頃、宇治橋大鳥居の中央から太陽が昇る神々しい絶景。五十鈴川に立ち込める幻想的な川霧の中を歩く早朝参拝は宿泊者だけの特権です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-700 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 冬のおかげ横丁「赤福ぜんざい」と食べ歩き
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                冬季限定で提供される赤福本店の「赤福ぜんざい」は、香ばしい焼き餅と上質な小豆汁がたまらない逸品。熱々の伊勢うどんや松阪牛にぎりなど、湯気立つ参道グルメが満喫できます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 冬が旬の二大贅沢「本場伊勢海老」＆「松阪牛」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                真冬の冷たい海で身が引き締まり甘みを増した伊勢海老のお造りや鬼殻焼き、そして極上の霜降りを誇る松阪牛のすき焼き。三重が世界に誇る冬の二大味覚を宿の会席で心ゆくまで味わえます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Course</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】外宮先参りと早朝の内宮参拝・冬の伊勢神宮満喫王道モデルコース
            </h2>
            <p className="text-stone-400 text-sm mt-1">
              混雑を避け、古来の正しい作法で外宮・内宮を巡り、冬の旬味とおかげ横丁を楽しみ尽くす旅の提案。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午前〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 近鉄伊勢市駅に到着 ➔ 外宮参道散策＆まずは「外宮（豊受大神宮）」へ参拝
                </h3>
                <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                  近鉄特急で伊勢市駅へ。まずは伝統に倣い「外宮先参り」からスタート。外宮参道をそぞろ歩き、食と産業の神様である豊受大御神をお祀りする外宮の正宮へ。樹齢数百年の杉並木に囲まれた参道を歩き、御幌（みとばり）が揺れる正宮で感謝の祈りを捧げます。多賀宮や土宮、風宮などの別宮もお参り。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 夕刻</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  15:30 禊の地「二見浦・夫婦岩」へ立ち寄り ➔ 伊勢名宿へチェックイン＆温泉
                </h3>
                <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                  バスまたは車で二見浦へ。夫婦岩と二見興玉神社をお参りし、冬の荒々しくも美しい伊勢湾の波音に耳を傾けます。16時半頃、宿泊する伊勢の宿へチェックイン。大浴場や客室露天風呂で冷えた体を芯まで温め、旅の疲れをほぐします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  18:30 冬の伊勢の至宝「活伊勢海老」と「極上松阪牛」を味わう豪華夕食会席
                </h3>
                <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                  宿のダイニングまたはお部屋で贅を尽くした夕食。引き締まった伊勢海老の透明感あふれるお造りと濃厚な味噌汁、そしてきめ細やかな霜降り松阪牛の陶板焼きやすき焼き。地元の銘酒「作（ざく）」や「伊勢嶋」とともに、至福の美食時間を堪能します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 2 早朝</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  06:45 五十鈴川の朝霧と宇治橋大鳥居の日の出 ➔ 人影のない「内宮（皇大神宮）」早朝参拝
                </h3>
                <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                  まだ観光客が押し寄せる前の清らかな早朝、内宮へ。冬至前後は大鳥居の中央から昇る黄金色の朝日を拝み、息をのむ美しさに感動。五十鈴川の御手洗場で心身を清め、玉砂利を踏みしめて正宮へ。朝露に濡れる神宮の杜で、誰にも邪魔されず凛とした空気の中で新年の祈願を行います。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 2 午前〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:30 「おかげ横丁・おはらい町」散策 ➔ 赤福ぜんざいと熱々伊勢うどんの食べ歩き
                </h3>
                <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                  参拝を終えた後は、開店直後のおかげ横丁へ。赤福本店で香ばしい焼き餅入りの「赤福ぜんざい」をいただき、名店「ふくすけ」でふわふわ熱々の「伊勢うどん」を堪能。おみやげに伊勢茶や伊勢木綿、真珠小物を買い求め、充実した気持ちで帰路の近鉄特急へ乗車します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の伊勢神宮参拝に最適な厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              早朝の内宮参拝に便利な神宮至近の湯宿から、外宮参道沿いの露天風呂付温泉旅館、駅前快適ホテルまで厳選。
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
                    <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
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
                        <Sparkles className="w-4 h-4 text-amber-600" />
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
                        <span className="text-xl sm:text-2xl font-black text-amber-900">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
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
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Gourmet & Souvenir Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の伊勢路で味わい尽くす郷土の至宝とおすすめ名物土産
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                冬の赤福ぜんざいと伊勢うどんの秘密
              </h3>
              <p>
                伊勢参りの名物として全国に知られる「赤福」。冬季限定で登場する「赤福ぜんざい」は、粒のそろった北海道産小豆を丁寧に炊き上げ、注文を受けてから炭火で香ばしく焼き上げる角餅を入れた絶品です。口直しに添えられる塩昆布とかり守（かりもり）の粕漬けが甘みを引き立てます。また、長時間茹で上げた極太の柔らかい麺に、カツオや煮干し、昆布の出汁を効かせたたまり醤油タレを絡めて食べる「伊勢うどん」は、長旅で疲れた参拝者の胃腸に優しく染み渡るよう工夫された歴史ある知恵の結晶です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-700" />
                伊勢海老の旨味と三重の伝統工芸品
              </h3>
              <p>
                真冬の伊勢志摩で味わう伊勢海老は、水温低下とともに身の水分が抜け、甘み成分であるグリシンやアルギニンが凝縮されています。お土産には、伊勢海老の濃厚なエキスを練り込んだ「伊勢海老せんべい」や、伊勢湾の良質な海藻を加工した「あおさ海苔」が定番。また、江戸時代からの伝統を継承する藍染めの「伊勢木綿」の手ぬぐいやがま口ポーチ、神宮の神聖な杉をあしらったお守り入れなど、旅の記憶をいつまでも温かく留めてくれる上質な品々が揃います。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Travel Practical Tips & Access Guide */}
        <section className="bg-amber-50/60 rounded-3xl p-6 sm:p-10 border border-amber-200/60 space-y-6">
          <div className="border-b border-amber-200/80 pb-4">
            <span className="text-amber-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Practical Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
              冬の伊勢参宮を安全・快適に楽しむための装備とアクセス注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-amber-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                防寒対策と足元の準備
              </div>
              <p className="leading-relaxed text-stone-700">
                伊勢の冬は太平洋側特有の空っ風が吹き抜けます。特に内宮の五十鈴川沿いや早朝の参拝は玉砂利の冷気が足元から伝わるため、厚手の靴下と歩きやすいスニーカーまたは防寒ブーツ、風を通さないロングコート、手袋、マフラーが欠かせません。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-amber-700" />
                年末年始の交通規制とアクセス
              </div>
              <p className="leading-relaxed text-stone-700">
                大晦日夜から正月三が日、1月の土日祝日は伊勢IC・伊勢西IC周辺で大規模な交通規制（パーク＆バスライド）が実施され、道路は大渋滞します。近鉄特急「しまかぜ」や「アーバンライナー」を利用して伊勢市駅にアクセスするのが圧倒的に快適です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                参拝のマナーと心構え
              </div>
              <p className="leading-relaxed text-stone-700">
                参拝の順序は「外宮から内宮へ」。正宮では個人的なお願い事をするのではなく、日々生かされていることへの感謝を捧げるのが古来の作法です。個人的な祈願や絵馬の奉納は、内宮の第一別宮である「荒祭宮（あらまつりのみや）」で行うとされています。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の伊勢神宮初詣・宿泊に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-amber-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Travels</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬特集・名湯宿ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">三重・鳥羽温泉郷</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                冬の鳥羽温泉郷・極上伊勢海老と的矢牡蠣を満喫する絶景オーシャンビュー宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">三重・志摩賢島</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                賢島温泉と冬の志摩・あのりふぐと伊勢海老・松阪牛を味わうラグジュアリーステイ
              </span>
            </Link>

            <Link 
              href="/winter-mie-nabana-no-sato-illumination-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">三重・なばなの里</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                国内最大級の輝き「なばなの里イルミネーション」と長島温泉の冬旅名宿
              </span>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">神奈川・箱根温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                冬の箱根温泉・雪化粧の富士山を望む絶景露天風呂と名旅館
              </span>
            </Link>

            <Link 
              href="/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">長野・軽井沢星野</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                冬の軽井沢・もみの木イルミネーションと星野温泉トンボの湯・信州牛ステイ
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-stone-100 border border-stone-200 hover:border-amber-400 transition-all group flex flex-col justify-center text-center"
            >
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors">
                冬の特集記事一覧をすべて見る ➔
              </span>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
