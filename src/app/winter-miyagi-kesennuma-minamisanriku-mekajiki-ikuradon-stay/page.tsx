import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月宮城】冬の三陸の至宝・極上戻りメカジキ「冬木廻」＆南三陸キラキラいくら丼と気仙沼深層天然温泉を満喫する絶景名宿5選",
  description: "11月から1月、黒潮と親潮が交差する三陸沖は、脂の乗りが最高潮を迎える冬の味覚シーズン。気仙沼港に水揚げされる幻の極上メカジキ「冬木廻（ふゆきまわり）」のとろけるような脂と旨味、南三陸さんさん商店街を彩る宝石のような「南三陸キラキラいくら丼」、冬の牡蠣・アワビ・気仙沼フカヒレ。太平洋の荒波が削り出した唐桑半島・巨釜半造の雪化粧と、地下深くから湧く高濃度塩化物泉「気仙沼深層天然温泉」。冬の三陸海岸の豊かな恵みと絶景露天風呂を堪能する名宿5選をお届けします。",
  keywords: '気仙沼 メカジキ 冬木廻, 南三陸 キラキラいくら丼, 気仙沼温泉 宿泊, サンマリン気仙沼ホテル観洋, 気仙沼プラザホテル, 南三陸 ホテル観洋, 網元の宿 磯村, フカヒレ 気仙沼, 唐桑半島 巨釜半造, 11月 12月 1月 宮城旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyagi-kesennuma-minamisanriku-mekajiki-ikuradon-stay/"
  },
  openGraph: {
    title: "【11・12・1月宮城】冬の三陸の至宝・極上戻りメカジキ「冬木廻」＆南三陸キラキラいくら丼と気仙沼深層天然温泉を満喫する絶景名宿5選",
    description: "11月から1月、黒潮と親潮が交差する三陸沖は、脂の乗りが最高潮を迎える冬の味覚シーズン。気仙沼港に水揚げされる幻の極上メカジキ「冬木廻（ふゆきまわり）」のとろけるような脂と旨味、南三陸さんさん商店街を彩る宝石のような「南三陸キラキラいくら丼」、冬の牡蠣・アワビ・気仙沼フカヒレ。太平洋の荒波が削り出した唐桑半島・巨釜半造の雪化粧と、地下深くから湧く高濃度塩化物泉「気仙沼深層天然温泉」。冬の三陸海岸の豊かな恵みと絶景露天風呂を堪能する名宿5選をお届けします。",
    url: 'https://croud-travel.com/winter-miyagi-kesennuma-minamisanriku-mekajiki-ikuradon-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の三陸海岸・気仙沼湾と南三陸志津川湾の絶景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月宮城】冬の三陸の至宝・極上戻りメカジキ「冬木廻」＆南三陸キラキラいくら丼と気仙沼深層天然温泉を満喫する絶景名宿5選",
    description: "11月から1月、黒潮と親潮が交差する三陸沖は、脂の乗りが最高潮を迎える冬の味覚シーズン。気仙沼港に水揚げされる幻の極上メカジキ「冬木廻（ふゆきまわり）」のとろけるような脂と旨味、南三陸さんさん商店街を彩る宝石のような「南三陸キラキラいくら丼」、冬の牡蠣・アワビ・気仙沼フカヒレ。太平洋の荒波が削り出した唐桑半島・巨釜半造の雪化粧と、地下深くから湧く高濃度塩化物泉「気仙沼深層天然温泉」。冬の三陸海岸の豊かな恵みと絶景露天風呂を堪能する名宿5選をお届けします。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function MiyagiKesennumaMinamisanrikuWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月宮城】冬の三陸の至宝・極上戻りメカジキ「冬木廻」＆南三陸キラキラいくら丼と気仙沼深層天然温泉を満喫する絶景名宿5選",
    description: "11月から1月、黒潮と親潮が交差する三陸沖は、脂の乗りが最高潮を迎える冬の味覚シーズン。気仙沼港に水揚げされる幻の極上メカジキ「冬木廻（ふゆきまわり）」のとろけるような脂と旨味、南三陸さんさん商店街を彩る宝石のような「南三陸キラキラいくら丼」、冬の牡蠣・アワビ・気仙沼フカヒレ。太平洋の荒波が削り出した唐桑半島・巨釜半造の雪化粧と、地下深くから湧く高濃度塩化物泉「気仙沼深層天然温泉」。冬の三陸海岸の豊かな恵みと絶景露天風呂を堪能する名宿5選をお届けします。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
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
      url: 'https://croud-travel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-miyagi-kesennuma-minamisanriku-mekajiki-ikuradon-stay'
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
        item: 'https://croud-travel.com/'
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
        name: '気仙沼＆南三陸 冬のメカジキ・いくら丼と温泉名宿',
        item: 'https://croud-travel.com/winter-miyagi-kesennuma-minamisanriku-mekajiki-ikuradon-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬の気仙沼名物「メカジキ（冬木廻 / ふゆきまわり）」とはどのような魚ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "気仙沼港は生鮮メカジキの水揚げ日本一を誇ります。特に10月下旬から翌年2月にかけて三陸沖で漁獲される冬のメカジキは、地元で古くから「冬木廻（ふゆきまわり）」と呼ばれ、冬の寒冷な海で豊富な餌を食べて蓄えた脂が魚体全体にきめ細かく回り、マグロの大トロをも凌ぐ濃厚な甘みと滑らかな舌触りを持つ至高の逸品です。刺身はもちろん、サッと出汁にくぐらせる「ねぎま鍋」や「しゃぶしゃぶ」、香ばしい「メカジキのステーキ」は、冬に気仙沼を訪れる最大の理由となっています。"
        }
      },
      {
        '@type': 'Question',
        name: "「南三陸キラキラいくら丼」の提供期間と特徴について教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "南三陸町のご当地グルメ「南三陸キラキラ丼」シリーズの中でも、冬（11月1日〜翌年2月28日頃）に提供されるのが「南三陸キラキラいくら丼」です。地元志津川湾などで水揚げされた大粒の秋鮭の筋子を、職人が秘伝のタレで丁寧に漬け込んだ自家製イクラを丼一面に贅沢に敷き詰めた華やかな名物。ひと口噛むとプチプチと弾けて濃厚な旨味が口いっぱいに広がります。南三陸さんさん商店街の各飲食店や旅館ごとに独自の味付けや小鉢の工夫が凝らされており、冬の三陸ドライブのハイライトとして大人気を博しています。"
        }
      },
      {
        '@type': 'Question',
        name: "「気仙沼深層天然温泉」の泉質と冬の効能について教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "気仙沼深層天然温泉は、地下約1800メートルの深層から湧出するナトリウム・カルシウム-塩化物強塩温泉です。海水とほぼ同じ高濃度の塩分を含んでいるのが特徴で、入浴すると皮膚に塩分が付着して汗の蒸発を防ぐため、高い保温効果を発揮し「温まりの湯」「熱の湯」として親しまれています。真冬の三陸の冷たい海風で冷え切った身体の芯までポカポカと温まり、神経痛や筋肉痛、冷え性の改善、美肌効果が期待できます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の三陸（気仙沼・南三陸・唐桑半島）の見どころと観光ルートは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "代表的な景勝地として、太平洋の荒波が打ち寄せるリアス式海岸の絶景「唐桑半島・巨釜半造（おおがまはんぞう）」があります。高さ16mの石柱「折石」が海上にそびえ立つ姿は冬の澄んだ大気のもとで息を呑む迫力です。また、建築家・隈研吾氏設計の「南三陸さんさん商店街」での食べ歩きや買い物、気仙沼の「海の市・シャークミュージアム」「みならいっと」での生鮮魚介のお土産探し、震災遺構・伝承館での学びなど、歴史と自然とグルメが調和した充実のルートが楽しめます。"
        }
      },
      {
        '@type': 'Question',
        name: "11月〜1月の気仙沼・南三陸エリアの気候と道路の積雪・凍結状況は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "三陸沿岸部は東北地方の中では比較的温暖で、雪が降る日は山形や秋田などの日本海側と比べて大幅に少なく、積雪も年数回程度です。ただし、真冬の太平洋からの冷たい海風「やませ」や朝晩の冷え込みにより、気温は氷点下まで下がります。特に日陰や橋の上、トンネル出入口などでは路面が凍結することがあるため、12月〜1月に車で訪れる場合は必ずスタッドレスタイヤを装着してください。三陸沿岸道路（復興道路）は仙台方面から無料で直結しておりアクセスは非常に快適です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "サンマリン気仙沼ホテル観洋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15784/15784.jpg",
              rating: 4.28,
              reviews: 1232,
              price: "¥6,600〜",
              access: "ＪＲ気仙沼駅よりタクシーで１０分",
              special: "気仙沼湾を見渡す高台に建ち、地下1800Mから湧き出す「気仙沼温泉」と三陸の海鮮料理をご堪能ください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15784%2F15784.html",
              story: "気仙沼湾を見下ろす高台に建ち、太平洋の雄大なパノラマと地下1800メートルから湧出する高濃度天然温泉を誇る老舗宿「サンマリン気仙沼ホテル観洋」。気仙沼温泉は海水と同じ濃度の塩分を含み、身体の芯まで熱が染み渡り湯冷めしにくい保温美肌の湯。冬の澄み切った朝、露天風呂から昇る神々しい朝日は息を呑む絶景です。夕食には三陸前浜で獲れた冬メカジキの刺身やしゃぶしゃぶ、気仙沼名物の肉厚なフカヒレ姿煮、冬の焼き牡蠣など、港町の底力を五感で味わう豪華会席が並びます。海を望む広々としたラウンジや、気仙沼の海産物を豊富に取り揃えた売店も充実しており、三世代旅行から記念日旅行まで幅広く愛されています。",
              roomTip: "オーシャンビュー和洋室。大きなピクチャーウィンドウから気仙沼湾を行き交う漁船とリアス海岸の美しい稜線を一望できます。",
              gourmetTip: "「三陸冬の味覚極み膳」。脂が乗った旬のメカジキのお造りとフカヒレ姿煮、濃厚なウニ・アワビを贅沢に盛り込んだ特選会席。",
              highlights: [
                "地下1800mから湧く気仙沼深層天然温泉・高濃度塩化物泉で冬でも湯冷めしない保温力",
                "冬の三陸メカジキ刺身＆しゃぶしゃぶ・気仙沼フカヒレ姿煮が並ぶ豪華会席",
                "太平洋を一望するオーシャンビュー客室・全館Wi-Fi完備で快適なリゾート滞在"
              ]
            },
            {
              id: 2,
              name: "気仙沼プラザホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56166/56166.jpg",
              rating: 4.26,
              reviews: 1424,
              price: "¥7,700〜",
              access: "ＪＲ気仙沼駅よりタクシーで１０分",
              special: "◆地下1800Mから湧き出す深層天然温泉「気仙沼温泉」と三陸の海の幸”獲れたて”をお届け！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56166%2F56166.html",
              story: "気仙沼の魚市場を見下ろす絶好のロケーションに位置し、港町の活気と風情を存分に体感できるリゾートホテル「気仙沼プラザホテル」。館内には地下深くから汲み上げた「気仙沼温泉」の大浴場と、港を往来する船を眺めながら湯浴みを楽しめる浮遊感あふれる露天風呂を完備。夕食は市場直送の魚介類が主役で、真冬に脂が乗ったメカジキのステーキや握り寿司、冬の三陸産殻付き牡蠣、熱々のフカヒレスープがテーブルいっぱいに供されます。隣接する観光商業施設「海の市」やシャークミュージアムへの専用エレベーターも備え、朝の魚市場見学やお土産探しにも抜群の利便性を誇ります。",
              roomTip: "港一望のデラックスツイン。夜には気仙沼港の灯りと漁船のいさり火が水面に揺らめくロマンチックな夜景を楽しめます。",
              gourmetTip: "「冬のメカジキ＆フカヒレ味覚プラン」。きめ細やかなサシが入ったメカジキの陶板焼きと、気仙沼伝統の濃厚フカヒレ姿煮の競演。",
              highlights: [
                "気仙沼魚市場を見下ろす絶好のパノラマ・港の夜景を望む展望大浴場と露天風呂",
                "市場直送の新鮮魚介と三陸牡蠣・冬メカジキステーキを味わう美食体験",
                "お魚いちばや観光商業施設へ徒歩圏内・朝の市場散策にも最適な拠点立地"
              ]
            },
            {
              id: 3,
              name: "南三陸　ホテル観洋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19228/19228.jpg",
              rating: 4.49,
              reviews: 5553,
              price: "¥9,350〜",
              access: "三陸自動車道：桃生津山Ｉ.Ｃ→R45で25分。/仙台空港より90分/仙台駅東口より送迎あり（要予約）",
              special: "海と一つになる絶景インフィニティ温泉と三陸海鮮を味わう宮城の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19228%2F19228.html",
              story: "南三陸のリアス式海岸・志津川湾の断崖にせり出すように建ち、全室オーシャンビューを誇る名門温泉ホテル「南三陸 ホテル観洋」。海に突き出たインフィニティ露天風呂「かもめ湯」からは、朝日に染まる太平洋の大海原とウミネコの群れが広がり、まるで海の上に浮かんでいるかのような圧倒的な開放感に包まれます。冬の名物は、地元志津川湾で水揚げされた新鮮なイクラを惜しみなく敷き詰めた「南三陸キラキラいくら丼」と、ぷりぷりに育った真牡蠣の酒蒸しや鮑の踊り焼き。南三陸の豊かな海の生命力を全身で体感でき、毎朝語り部バスの運行など震災復興の歩みにも触れられる温かい宿です。",
              roomTip: "東館オーシャンビュー和室。水平線から昇る初日の出や朝焼けを畳の上から真正面に拝むことができる特等席です。",
              gourmetTip: "「南三陸キラキラいくら丼＆鮑踊り焼き会席」。冬のプチプチと弾ける極上イクラ丼と、磯の香り豊かなアワビステーキを同時に堪能。",
              highlights: [
                "志津川湾を望む圧巻のインフィニティ露天風呂・太平洋から昇る神々しい朝日",
                "南三陸名物「キラキラいくら丼」とアワビの踊り焼き・冬の贅沢海鮮ビュッフェ",
                "広々とした館内施設と充実のキッズスペース・三世代旅行にも大人気の大型リゾート"
              ]
            },
            {
              id: 4,
              name: "網元の宿　磯村",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167386/167386.jpg",
              rating: 4.59,
              reviews: 466,
              price: "¥8,000〜",
              access: "気仙沼駅よりお車にて約１０分",
              special: "「7年越しの新築オープン！」気仙沼の晩餐を楽しむ宿　～和風ホテル磯村～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167386%2F167386.html",
              story: "気仙沼港の目の前、網元直営ならではの圧倒的な目利きと仕入れ力を誇る美食宿「網元の宿 磯村」。料理長が毎朝気仙沼魚市場に足を運び、その日一番の鮮魚を厳選して仕入れる料理は、全国の食通を唸らせるクオリティ。冬には「冬木廻」と呼ばれる極上メカジキの背トロ・ハラスの刺身や、低温調理でしっとりと仕上げた魚介料理、気仙沼産毛ガニなど、素材本来の旨味を最大限に引き出した創作和会席が提供されます。洗練されたモダン和風の客室と細やかなホスピタリティも高く評価され、静かに上質な時間を楽しみたい大人の旅人に絶大な支持を得ています。",
              roomTip: "和モダンツインルーム。無垢材の温もりと間接照明が心地よい落ち着いた空間で、大人の三陸旅に最適です。",
              gourmetTip: "「網元特選・冬の三陸魚介尽くし会席」。冬メカジキの食べ比べ刺身、気仙沼フカヒレ、旬の白身魚を地元の銘酒「水鳥記」とともに。",
              highlights: [
                "網元直営ならではの目利き・気仙沼魚市場直送の冬メカジキ刺身と創作会席",
                "モダン和風の洗練された客室空間・宮城の銘酒とともに味わう大人の三陸ステイ",
                "少人数限定の静謐な滞在・細やかなサービスと高いクチコミ評価を誇る料理旅館"
              ]
            },
            {
              id: 5,
              name: "フカヒレ三昧　気仙沼ホテル一景閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30025/30025.jpg",
              rating: 4.35,
              reviews: 882,
              price: "¥7,200〜",
              access: "気仙沼港ICより5分！",
              special: "気仙沼港ICより車で5分！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30025%2F30025.html",
              story: "創業百有余年、気仙沼の食文化とともに歩んできた歴史ある老舗宿「フカヒレ三昧 気仙沼ホテル一景閣」。国の登録有形文化財にも指定された伝統的な佇まいを残しつつ、現代的な快適性を融合させた館内はどこか懐かしく温かな空気が流れます。宿の代名詞であるフカヒレ料理は、気仙沼伝統の技法でじっくりと時間をかけて煮込まれた極上の逸品。繊維一本一本に芳醇なスープが染み渡り、口の中でとろける極上の食感を楽しめます。冬のメカジキ料理や三陸の郷土料理も充実しており、気仙沼の歴史と人情に深く浸れる港町の宿です。",
              roomTip: "スーペリア和洋室。落ち着いたトーンの内装と快適なベッドを備え、街歩きや市場散策の拠点として快適にくつろげます。",
              gourmetTip: "「伝統の極上フカヒレ姿煮＆三陸冬魚膳」。肉厚なヨシキリザメのフカヒレ姿煮と、冬の三陸港直送鮮魚の贅沢な組み合わせ。",
              highlights: [
                "創業百有余年の歴史・気仙沼伝統の技法で煮込んだ肉厚フカヒレ姿煮",
                "国の登録有形文化財の趣を残す館内・気仙沼港の歴史と人情に触れる温かなおもてなし",
                "気仙沼駅や中心街へのアクセス良好・冬の三陸ドライブ旅行の拠点に最適"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬の気仙沼名物「メカジキ（冬木廻 / ふゆきまわり）」とはどのような魚ですか？",
    "a": "気仙沼港は生鮮メカジキの水揚げ日本一を誇ります。特に10月下旬から翌年2月にかけて三陸沖で漁獲される冬のメカジキは、地元で古くから「冬木廻（ふゆきまわり）」と呼ばれ、冬の寒冷な海で豊富な餌を食べて蓄えた脂が魚体全体にきめ細かく回り、マグロの大トロをも凌ぐ濃厚な甘みと滑らかな舌触りを持つ至高の逸品です。刺身はもちろん、サッと出汁にくぐらせる「ねぎま鍋」や「しゃぶしゃぶ」、香ばしい「メカジキのステーキ」は、冬に気仙沼を訪れる最大の理由となっています。"
  },
  {
    "q": "「南三陸キラキラいくら丼」の提供期間と特徴について教えてください。",
    "a": "南三陸町のご当地グルメ「南三陸キラキラ丼」シリーズの中でも、冬（11月1日〜翌年2月28日頃）に提供されるのが「南三陸キラキラいくら丼」です。地元志津川湾などで水揚げされた大粒の秋鮭の筋子を、職人が秘伝のタレで丁寧に漬け込んだ自家製イクラを丼一面に贅沢に敷き詰めた華やかな名物。ひと口噛むとプチプチと弾けて濃厚な旨味が口いっぱいに広がります。南三陸さんさん商店街の各飲食店や旅館ごとに独自の味付けや小鉢の工夫が凝らされており、冬の三陸ドライブのハイライトとして大人気を博しています。"
  },
  {
    "q": "「気仙沼深層天然温泉」の泉質と冬の効能について教えてください。",
    "a": "気仙沼深層天然温泉は、地下約1800メートルの深層から湧出するナトリウム・カルシウム-塩化物強塩温泉です。海水とほぼ同じ高濃度の塩分を含んでいるのが特徴で、入浴すると皮膚に塩分が付着して汗の蒸発を防ぐため、高い保温効果を発揮し「温まりの湯」「熱の湯」として親しまれています。真冬の三陸の冷たい海風で冷え切った身体の芯までポカポカと温まり、神経痛や筋肉痛、冷え性の改善、美肌効果が期待できます。"
  },
  {
    "q": "冬の三陸（気仙沼・南三陸・唐桑半島）の見どころと観光ルートは？",
    "a": "代表的な景勝地として、太平洋の荒波が打ち寄せるリアス式海岸の絶景「唐桑半島・巨釜半造（おおがまはんぞう）」があります。高さ16mの石柱「折石」が海上にそびえ立つ姿は冬の澄んだ大気のもとで息を呑む迫力です。また、建築家・隈研吾氏設計の「南三陸さんさん商店街」での食べ歩きや買い物、気仙沼の「海の市・シャークミュージアム」「みならいっと」での生鮮魚介のお土産探し、震災遺構・伝承館での学びなど、歴史と自然とグルメが調和した充実のルートが楽しめます。"
  },
  {
    "q": "11月〜1月の気仙沼・南三陸エリアの気候と道路の積雪・凍結状況は？",
    "a": "三陸沿岸部は東北地方の中では比較的温暖で、雪が降る日は山形や秋田などの日本海側と比べて大幅に少なく、積雪も年数回程度です。ただし、真冬の太平洋からの冷たい海風「やませ」や朝晩の冷え込みにより、気温は氷点下まで下がります。特に日陰や橋の上、トンネル出入口などでは路面が凍結することがあるため、12月〜1月に車で訪れる場合は必ずスタッドレスタイヤを装着してください。三陸沿岸道路（復興道路）は仙台方面から無料で直結しておりアクセスは非常に快適です。"
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
            alt="冬の三陸海岸・気仙沼湾と太平洋の絶景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-cyan-900/80 backdrop-blur-md text-cyan-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-cyan-400/30">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            11月・12月・1月 冬の三陸海岸・極上戻りメカジキ＆南三陸キラキラいくら丼特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月宮城】冬の三陸の至宝・極上戻りメカジキ「冬木廻」＆南三陸キラキラいくら丼と気仙沼深層天然温泉を満喫する絶景名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            親潮と黒潮がぶつかり合う世界有数の好漁場・三陸沖。11月から1月、海水温が下がる冬期に水揚げされるメカジキは「冬木廻（ふゆきまわり）」と呼ばれ、全身にきめ細かな霜降りの脂をまとった海の芸術品。さらに南三陸の冬の風物詩「キラキラいくら丼」、気仙沼名物の黄金色に輝くフカヒレ姿煮、そして地下1800mから湧き出る高濃度塩分でポカポカ温まる深層天然温泉。荒々しくも雄大なリアス式海岸を望む冬の美食旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 最適時期：11月中旬〜1月下旬（冬メカジキ旬・イクラ丼最盛期）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> エリア：宮城県気仙沼市・南三陸町</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-cyan-400" /> 名物：冬木廻メカジキ・南三陸キラキラいくら丼・気仙沼フカヒレ・三陸牡蠣</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の三陸沖がもたらす奇跡の脂乗り・メカジキ「冬木廻」と溢れるイクラの饗宴
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              宮城県の北東端、太平洋に突き出たリアス式海岸が連なる気仙沼と南三陸。年間を通じて豊かな海の幸に恵まれるこの地ですが、真冬の11月から1月にかけて訪れる美食の迫力は別格です。北の冷たい親潮と南の黒潮が激しく混ざり合う三陸沖では、プランクトンが爆発的に発生し、それを食べた魚たちが丸々と太って回遊してきます。
            </p>
            <p>
              その頂点に立つのが、日本一の水揚げ高を誇る気仙沼の「メカジキ」です。特に冬の時期に獲れるメカジキは、古くから漁師や仲買人の間で「冬木廻（ふゆきまわり）」と尊称されてきました。木の年輪が冬を迎えるように、魚体の隅々までびっしりと上質な脂が行き渡っていることから名付けられたこの魚は、一口食べれば一般的な白身魚の概念を覆します。マグロの大トロのようにとろけながらも、後味はどこまでも上品で澄んだ甘みが広がります。刺身はもちろん、特製出汁にくぐらせるしゃぶしゃぶや、熱々のねぎま鍋は、冬の寒さを一瞬で忘れさせる贅沢です。
            </p>
            <p>
              さらに南三陸町へと足を伸ばせば、冬の風物詩「南三陸キラキラいくら丼」が待っています。三陸の清流へ遡上する直前の成熟した秋鮭から取り出した大粒の筋子を、職人が秘伝の醤油ダレで手漬け。丼いっぱいに輝くイクラは、まるで宝石を散りばめたかのよう。口に含めば弾ける皮の中から濃厚な旨味が溢れ出します。
            </p>
            <p>
              そして旅の冷えた身体を包み込んでくれるのが、太平洋を望む高台に湧き出る「気仙沼深層天然温泉」です。地下1800メートルの太古の地層から湧くお湯は、海水と同じ濃度の塩分を含んだ強塩泉。入浴後も肌に塩のベールが残り、熱を逃がさないため、湯上がり後も何時間も身体の芯がぽかぽかと温まり続けます。水平線から昇る神々しい朝日を露天風呂から拝み、三陸の至高の魚介に舌鼓を打つ冬旅は、旅人の五感を深く満たしてくれます。
            </p>
          </div>
        </section>

        {/* 3 Major Winter Highlights */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の気仙沼・南三陸を満喫する3大感動体験
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 幻のメカジキ「冬木廻」と気仙沼フカヒレ姿煮
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                マグロのトロを超える濃厚な旨味を持つ冬の生鮮メカジキ。刺身・炙り・しゃぶしゃぶの食べ比べに加え、全国シェアの大半を占める気仙沼伝統の肉厚フカヒレ姿煮を味わう至高の贅沢。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-amber-200 flex items-center justify-center text-amber-700">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 宝石のような「南三陸キラキラいくら丼」
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                11月から2月限定、南三陸さんさん商店街の各店舗で提供される冬の主役。弾ける大粒イクラが丼を覆い尽くし、旬の真牡蠣やアワビとともに三陸の海の恵みを存分に味わえます。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 気仙沼深層天然温泉＆太平洋の朝日露天
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                地下1800mから湧く高濃度塩化物泉の保温美肌湯。志津川湾や気仙沼湾を眼下に望む露天風呂から、水平線を黄金色に染め上げる冬の日の出を眺める特別なひとときを過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】気仙沼冬メカジキと南三陸キラキラいくら丼・絶景露天を巡る黄金モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              仙台駅または仙台空港を起点に、三陸沿岸道路（無料区間）を利用して冬の三陸の味覚と絶景をスムーズに巡るドライブプラン。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 南三陸さんさん商店街到着 ➔ 名物「南三陸キラキラいくら丼」と真牡蠣ランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  仙台方面から三陸道で南三陸志津川ICへ。隈研吾氏設計の杉の温もりあふれる商店街で、大粒イクラがこぼれんばかりに盛られた名物丼を味わいます。冬に旬を迎える志津川湾の真牡蠣焼きやアワビも一緒に楽しめます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  14:00 唐桑半島・巨釜半造（おおがまはんぞう）散策 ➔ 折石のリアス海岸冬景色
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  気仙沼の北東端、唐桑半島へ。太平洋の激しい荒波が削り出した高さ16mの大石柱「折石」をはじめとする奇岩連なるリアス海岸を散策。冬の澄んだ大気と紺碧の海が織りなす荘厳な自然美に息を呑みます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:30 気仙沼温泉の名宿チェックイン ➔ 深層温泉露天風呂＆極上「冬木廻メカジキ会席」
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  港を見下ろす宿に到着。地下1800mから湧く強塩温泉で身体の芯まで温まった後は、お待ちかねの夕食へ。トロのようにとろける冬メカジキの刺身、しゃぶしゃぶ、気仙沼フカヒレ姿煮に地酒「水鳥記」を合わせて至福の夜を過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  07:00 太平洋の神聖な朝日鑑賞 ➔ 気仙沼魚市場・海の市で海産物ショッピング
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  露天風呂や客室から水平線から昇る朝日を拝み、朝食後は気仙沼の観光拠点「海の市」へ。活気あふれる市場でお土産用のフカヒレスープやメカジキの燻製、塩ウニを購入し、内湾エリアのおしゃれなカフェで休憩して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              三陸・気仙沼が育んだ世界屈指の魚文化と冬の伝統美味
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-cyan-700" />
                日本一のフカヒレ加工技術とヨシキリザメの恵み
              </h3>
              <p>
                気仙沼はサメの水揚げ日本一を誇り、江戸時代から受け継がれてきた高度な天日干しと加工技術により、全国の高級中華料理店へ最高品質のフカヒレを供給しています。特に大型のヨシキリザメやモウカザメのヒレは肉厚で繊維が太く、出汁を含ませて煮込むと金糸のように美しく輝きます。冬の宿で提供される熱々のフカヒレ姿煮は、濃厚なコラーゲンと鶏ガラ白湯スープが調和した気仙沼ならではの芸術的な美味です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-cyan-700" />
                海の男たちが愛した宮城の銘酒「水鳥記」「男山本店」
              </h3>
              <p>
                気仙沼の老舗酒蔵である角星（「水鳥記」）や男山本店（「気仙沼男山」「蒼天伝」）が醸す日本酒は、三陸の新鮮な魚介と寄り添うように作られた淡麗にしてキレのある辛口酒。冬の戻りメカジキの濃厚な脂をきりりと流し込み、牡蠣やアワビの繊細な旨味を引き立てます。冬期には新酒のしぼりたて生酒も登場し、港町の夜宴を華やかに彩ってくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Selected Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の三陸メカジキ・いくら丼と名湯を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、料理・絶景風呂・立地が高評価の宿。
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
                        <span className="text-xs font-bold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
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
                        <Sparkles className="w-4 h-4 text-cyan-600" />
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

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-black text-cyan-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-colors"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-cyan-50/60 rounded-3xl p-6 sm:p-10 border border-cyan-200/60 space-y-6">
          <div className="border-b border-cyan-200/80 pb-4">
            <span className="text-cyan-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-950">
              冬の気仙沼・南三陸を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-cyan-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-cyan-700" />
                強い海風への防寒対策
              </div>
              <p className="leading-relaxed text-stone-700">
                三陸沿岸部は雪は少なめですが、太平洋からの冷たい海風が強く吹き付けます。体感温度が氷点下まで下がることがあるため、風を通さない厚手のダウンコートや防風ジャケット、マフラー、手袋を必ず着用してください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-cyan-700" />
                三陸沿岸道路とスタッドレスタイヤ
              </div>
              <p className="leading-relaxed text-stone-700">
                三陸沿岸道路はほぼ全線無料で快適にアクセスできます。沿岸部は降雪が少ないものの、12月中旬〜1月は朝晩の橋の上やトンネル出入口が凍結する日があります。安全のため必ずスタッドレスタイヤを装着して運転しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-700" />
                イクラ丼とメカジキの事前確認
              </div>
              <p className="leading-relaxed text-stone-700">
                南三陸キラキラいくら丼は店舗によって仕込み数量に限りがあり、週末の昼時は完売することがあります。お目当ての店がある場合は事前の予約または開店直後の来店がおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の気仙沼メカジキ＆南三陸いくら丼に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-cyan-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・味覚・温泉特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">宮城・松島</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                日本三景・冬の松島湾雪景色と旬の焼き牡蠣・松島温泉パノラマ名宿
              </span>
            </Link>

            <Link 
              href="/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">宮城・秋保温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                仙台の奥座敷・冬の磊々峡雪景色と極上仙台牛＆仙台せり鍋名宿
              </span>
            </Link>

            <Link 
              href="/winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">青森・奥入瀬＆八甲田</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                奥入瀬渓流の幻想的な氷瀑ライトアップと八甲田樹氷・雪見秘湯名宿
              </span>
            </Link>

            <Link 
              href="/winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">鳥取・境港＆皆生温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                山陰松葉ガニ解禁！境港水産物直売センター＆皆生温泉「塩の湯」名宿
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">静岡・下田＆爪木崎</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                300万本の爪木崎水仙まつりと一本釣り極上「地金目鯛」姿煮名宿
              </span>
            </Link>

            <Link 
              href="/winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">佐賀・太良町＆嬉野温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                冬の有明海名物「内子たっぷり竹崎カニ」と祐徳稲荷神社初詣名宿
              </span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
