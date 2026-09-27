import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Sun, Flame, Info, Camera 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月伊勢神宮の冬至・年越し参拝】宇治橋の朝日絶景と伊勢志摩の冬の至宝・的矢かき＆伊勢海老宿5選",
  description: "冬至前後に伊勢神宮・宇治橋大鳥居の中央から昇る神々しい朝日！1年間の感謝を捧げる年越し・お礼参りと、11月から旬を迎える「的矢かき」「活伊勢海老」「松阪牛」、鳥羽湾を望む絶景名湯露天風呂に癒やされる冬の伊勢志摩ステイ。",
  keywords: '伊勢神宮 冬至 日の出, 宇治橋 朝日, 的矢かき 旅館, 伊勢海老 温泉, 鳥羽温泉 旅館, お礼参り 伊勢志摩, 11月 12月 冬旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay',
  },
  openGraph: {
    title: "【11・12月伊勢神宮の冬至・年越し参拝】宇治橋の朝日絶景と伊勢志摩の冬の至宝・的矢かき＆伊勢海老宿5選",
    description: "冬至前後に伊勢神宮・宇治橋大鳥居の中央から昇る神々しい朝日！1年間の感謝を捧げる年越し・お礼参りと、11月から旬を迎える「的矢かき」「活伊勢海老」「松阪牛」、鳥羽湾を望む絶景名湯露天風呂に癒やされる冬の伊勢志摩ステイ。",
    url: 'https://croud-travel.com/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月伊勢神宮の冬至・年越し参拝】宇治橋の朝日絶景と伊勢志摩の冬の至宝・的矢かき＆伊勢海老宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月伊勢神宮の冬至・年越し参拝】宇治橋の朝日絶景と伊勢志摩の冬の至宝・的矢かき＆伊勢海老宿5選",
    description: "冬至前後に伊勢神宮・宇治橋大鳥居の中央から昇る神々しい朝日！1年間の感謝を捧げる年越し・お礼参りと、11月から旬を迎える「的矢かき」「活伊勢海老」「松阪牛」、鳥羽湾を望む絶景名湯露天風呂に癒やされる冬の伊勢志摩ステイ。",
  }
};

export default function IseshimaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay#article",
        "headline": "【11・12月伊勢神宮の冬至・年越し参拝】宇治橋の朝日絶景と伊勢志摩の冬の至宝・的矢かき＆伊勢海老宿5選",
        "description": "冬至前後に伊勢神宮・宇治橋大鳥居の中央から昇る神々しい朝日！1年間の感謝を捧げる年越し・お礼参りと、11月から旬を迎える「的矢かき」「活伊勢海老」「松阪牛」、鳥羽湾を望む絶景名湯露天風呂に癒やされる冬の伊勢志摩ステイ。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "宇治橋の大鳥居から昇る日の出が見られる時期と時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月下旬から1月下旬にかけて、特に冬至（例年12月22日頃）の前後約1ヶ月間がベストシーズンです。午前7時30分頃、五十鈴川にかかる宇治橋大鳥居のちょうど真ん中から神々しい朝日が昇り、鳥居が黄金色に輝く奇跡の瞬間を目撃できます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬のお伊勢参り（おかげ参り・年越し参拝）の参拝順序は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "古くからの習わし通り、まず衣食住の神様を祀る「外宮（豊受大神宮）」を参拝し、その後に日本の総氏神である天照大御神を祀る「内宮（皇大神宮）」へ参拝するのが正式な順序です。年末に訪れる際は1年間の無事を感謝する「お礼参り」として祈りを捧げるのが風情です。"
            }
          },
          {
            "@type": "Question",
            "name": "「的矢かき（まとやかき）」の特徴と旬の時期は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "志摩市的矢湾で紫外線殺菌浄化技術を用いて育てられるブランド牡蠣で、11月から3月頃が最も身が肥えて甘みが増す旬です。えぐみが少なく非常にまろやかで、生牡蠣はもちろん、炭火焼き、カキフライ、カキ鍋など様々な調理法で美味しく召し上がれます。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の混雑状況とおすすめの参拝時間帯は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日中の10:00〜14:00頃はおはらい町・おかげ横丁を中心に大変賑わいます。人混みを避けて厳かな空気を味わうには、早朝参拝（午前6:00〜7:30頃）が最もおすすめです。澄み切った朝の静寂の神域は息をのむ美しさです。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "鳥羽本浦温泉　サン浦島　悠季の里",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8647%2F8647.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "伊勢志摩国立公園　／　鳥羽温泉郷　戸田家",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4761%2F4761.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "大江戸温泉物語Ｐｒｅｍｉｕｍ　鳥羽彩朝楽",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108905%2F108905.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "榊原温泉　鳥羽・相差　海女の宿　ひょうすけ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27735%2F27735.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "鳥羽小浜温泉　ホテル浜離宮",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75395%2F75395.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "鳥羽本浦温泉　サン浦島　悠季の里",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8647/8647.jpg",
              rating: 4.64,
              reviews: 1030,
              price: "¥19,662〜",
              access: "伊勢自動車道→伊勢二見鳥羽ライン→直進約２５分/近鉄鳥羽駅1番出口より無料送迎バス約20分（要予約）15時16時17時",
              special: "【口コミ4.8】伊勢志摩の旬の味覚、2種の源泉と趣の異なる湯めぐりで、”心あたたまる”海辺の温泉旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8647%2F8647.html",
              story: "波静かな生浦湾（おおのうらわん）の畔に佇み、楽天トラベルアワードや高いクチコミ評価を誇る鳥羽屈指の高級和風旅館。最大の魅力は、敷地内に湧出する2つの自家源泉「珠光の湯」と「新珠光の湯」です。pH9.0を超える高アルカリ性のトロトロとした美肌湯は、湯上がりの肌が驚くほど滑らかになると評判。広大な庭園露天風呂や檜の内湯、さらには露天風呂付き客室で、穏やかな入江を眺めながら極上の湯浴みが叶います。夕食は11月から最盛期を迎える「的矢かき」の創作料理や、ぷりっぷりの活伊勢海老、最高級松阪牛ステーキが並ぶ豪快会席。おもてなしの心が行き届いた至高のひとときを過ごせます。",
              roomTip: "海側に面した和洋室や露天風呂付き客室からは、穏やかな生浦湾の牡蠣筏が浮かぶ情緒あふれる風景を一望でき、朝夕の静寂に癒やされます。",
              gourmetTip: "料理長自慢の「的矢かき会席」では、生牡蠣・焼き牡蠣はもちろん、香ばしいカキの朴葉味噌焼きや牡蠣御飯など、カキ好きにはたまらないフルコースを堪能できます。",
              highlights: [
                "【クチコミ高評価4.6超】本浦温泉の2種の自家源泉「珠光の湯」「新珠光の湯」で心温まる湯めぐり",
                "旬の的矢かきや活伊勢海老、鮑、松阪牛を取り入れた極上美食会席",
                "生浦湾（おおのうらわん）の静寂な海景を望む落ち着いた和の設え"
              ]
            },
            {
              id: 2,
              name: "伊勢志摩国立公園　／　鳥羽温泉郷　戸田家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4761/4761.jpg",
              rating: 4.44,
              reviews: 2273,
              price: "¥9,240〜",
              access: "【電車】近鉄・JR鳥羽駅より徒歩3分（送迎有）【お車】伊勢道伊勢ICより伊勢二見鳥羽ライン経由約15分",
              special: "【鳥羽駅徒歩圏内の温泉旅館】鳥羽湾一望の客室と13の湯めぐり、地魚解体ショーが人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4761%2F4761.html",
              story: "近鉄・JR鳥羽駅から徒歩わずか3分、鳥羽湾の特等席に位置する創業180余年の名門旅館。広大な敷地内には、海を見晴らす野天風呂をはじめ、趣の異なる「13の湯めぐり」施設が点在。貸切露天風呂や足湯も充実しており、館内だけで贅沢な温泉三昧が楽しめます。毎夕開催される名物「地魚解体ショー」では、伊勢志摩の荒波で育った新鮮な大魚を熟練の板前が豪快に捌き、その場でお造りとして振る舞われます。鳥羽水族館やミキモト真珠島へも徒歩圏内で、翌朝の宇治橋日の出参拝へのアクセス拠点としても申し分ない利便性を誇ります。",
              roomTip: "最上階の高層客室「嬉春亭」からは、行き交う観光船や島々が織りなすパノラマ鳥羽湾ビューを一望。特別な記念日旅行に最高のロケーションです。",
              gourmetTip: "伊勢海老の黄金焼きや鮑の踊り焼き、近海で水揚げされた寒平目の姿造りなど、伊勢志摩を代表する高級海の幸が勢揃いする豪華会席が自慢です。",
              highlights: [
                "鳥羽駅徒歩3分の好立地！鳥羽湾一望の絶景客室と「13の湯めぐり」＆地魚解体ショー",
                "露天風呂付き客室や貸切風呂など多彩な温浴施設で家族・カップルに大好評",
                "伊勢神宮（内宮・外宮）への参拝拠点としても抜群の利便性"
              ]
            },
            {
              id: 3,
              name: "大江戸温泉物語Ｐｒｅｍｉｕｍ　鳥羽彩朝楽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108905/108905.jpg",
              rating: 3.86,
              reviews: 1216,
              price: "¥11,800〜",
              access: "近鉄　鳥羽駅より送迎車で10分",
              special: "青い海に島々が浮かぶ鳥羽湾の眺望は圧巻。インフィニティ露天風呂とラウンジで景色をご堪能ください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108905%2F108905.html",
              story: "鳥羽湾を見下ろす高台の絶景ロケーションに建つ大江戸温泉物語のプレミアムリゾート。ロビーに足を踏み入れると、目の前に広がる青い海と空のパノラマに心を奪われます。自慢は海と空と湯船が一体になったかのような感覚を味わえる「インフィニティ展望露天風呂」。冷えた冬の潮風を感じながら、温かい湯船に身を委ねる開放感は唯一無二です。さらに宿泊者専用のプレミアムラウンジでは、ビールやワイン、挽きたてコーヒー、アイスキャンディーが無料で自由に楽しめるオールインクルーシブスタイル。ゆったりと大人の休日を満喫できます。",
              roomTip: "モダン和洋室はシモンズ社製ベッドを備え、海を見渡す窓辺のソファスペースで、ラウンジから持ち寄ったドリンク片手にくつろぐ贅沢な時間を過ごせます。",
              gourmetTip: "夕食プレミアムビュッフェでは、揚げたて天ぷらや目の前で焼く牛ステーキ、伊勢志摩名物のてこね寿司や魚介鍋など、多彩なご馳走を好きなだけ味わえます。",
              highlights: [
                "鳥羽湾を見下ろす高台に建つインフィニティ展望露天風呂と無料プレミアムラウンジ",
                "伊勢志摩の豊かな海の幸を味わうプレミアムバイキングディナー",
                "海と一体になるような開放感あふれる絶景露天風呂での湯浴み"
              ]
            },
            {
              id: 4,
              name: "榊原温泉　鳥羽・相差　海女の宿　ひょうすけ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27735/27735.jpg",
              rating: 3.67,
              reviews: 70,
              price: "¥15,150〜",
              access: "近鉄・ＪＲ「鳥羽駅」～お車で約３０分／パールロード相差ＩＣ～約７分",
              special: "現役２代海女がおもてなし★名物料理「大漁焼き」と貸切風呂（無料）が人気です♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27735%2F27735.html",
              story: "鳥羽の相差（おおさつ）地区、現役の二代海女が営む温もりあふれる温泉宿。相差は日本で最も海女が多く暮らす漁師町として知られ、宿の主人が自ら海に潜って獲ってきた新鮮な海の幸が食卓に並びます。夕食の名物「大漁焼き」では、囲炉裏の炭火で獲れたての伊勢海老、サザエ、大粒の牡蠣、アワビを目の前で香ばしく焼き上げ、磯の香りとジューシーな旨味が口いっぱいに広がります。温泉は名湯「榊原温泉」から毎日直送される美肌の湯で、無料で利用できる貸切露天風呂も完備。漁師町の温かな人情に触れるアットホームな滞在が旅人を魅了します。",
              roomTip: "全室落ち着きのある和室で、畳の香りに包まれながら波の音を遠くに聞き、どこか懐かしいおばあちゃんの家に帰ってきたような安心感に浸れます。",
              gourmetTip: "冬限定の「海女鍋」や、伊勢海老のお造り、船盛りの鮮魚はボリューム満点。都会の料亭では考えられない鮮度とコストパフォーマンスに驚かされます。",
              highlights: [
                "現役の二代海女がおもてなし！炭火で豪快に焼き上げる名物「大漁焼き」と無料貸切風呂",
                "獲れたて伊勢海老・アワビ・牡蠣を目の前で香ばしく焼く贅沢な海女小屋体験",
                "アットホームな温もりに満ちた素朴で贅沢な漁師町の宿"
              ]
            },
            {
              id: 5,
              name: "鳥羽小浜温泉　ホテル浜離宮",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/75395/75395.jpg",
              rating: 3.95,
              reviews: 875,
              price: "¥5,200〜",
              access: "電車：近鉄鳥羽駅より徒歩６分※車：伊勢ＩＣより伊勢二見鳥羽ライン経由約１０分",
              special: "鳥羽駅徒歩6分｜自家源泉は伊勢志摩で最も高温の療養高温泉｜グループ＆ファミリー歓迎！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75395%2F75395.html",
              story: "近鉄鳥羽駅から徒歩6分、鳥羽小浜温泉に佇む自家源泉の隠れ家ホテル。伊勢志摩エリアでは極めて珍しい「摂氏50度を超える高温の良質な自噴療養泉」を有し、加温なしの源泉かけ流しで楽しめるのが温泉通から高く評価されています。塩化物泉特有の塩分が肌に膜を作り、冬の寒さでも湯冷めせず、体の奥底からポカポカと温まりが持続します。お伊勢参りの前泊・後泊として使い勝手がよく、リーズナブルな宿泊料金ながら清潔感あふれる客室と心のこもったサービスが好評です。",
              roomTip: "窓から鳥羽湾の穏やかな入江を望む客室は、グループや家族旅行にも使いやすい広々とした和室や和洋室が揃っています。",
              gourmetTip: "伊勢志摩の旬魚を盛り込んだおまかせ会席膳は、板前が心を込めて仕上げる温かい郷土の味。冬は牡蠣の味噌鍋や地魚の煮付けが冷えた体を温めてくれます。",
              highlights: [
                "鳥羽駅徒歩6分！伊勢志摩エリア屈指の高温療養泉を誇る自家源泉の温もり名湯",
                "観光拠点として抜群のアクセスとリーズナブルに楽しむ良質な温泉滞在",
                "伊勢二見鳥羽ライン経由で夫婦岩や伊勢神宮への周遊がスムーズ"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
          alt="冬至の伊勢神宮宇治橋から望む黄金色の朝日と五十鈴川の清流"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/90 text-white text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-400/30">
            <Sun className="w-4 h-4 text-amber-200" />
            <span>冬至・年末限定 神域の絶景と冬の味覚</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月伊勢神宮の冬至・年越し参拝】<br className="hidden sm:inline" />
            宇治橋の朝日絶景と伊勢志摩の冬の至宝・的矢かき＆伊勢海老宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            1年で最も昼が短い冬至の前後、大鳥居の中央から黄金色の光が差し込む神秘の光景。1年間の感謝を捧げるお礼参りと、旬を迎えた的矢かき・伊勢海老に舌鼓を打ち、鳥羽の絶景名湯に心洗われる旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 三重県（伊勢神宮・鳥羽温泉郷・志摩）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Sacred Winter</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬至の朝、神域に差し込む一条の光。心洗われる伊勢志摩の冬参り
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            清らかな五十鈴川のせせらぎと、初冬の凛とした冷気が神路山を包み込む11月・12月の伊勢神宮。この時期、全国から多くの参拝者が訪れる最大の理由が、冬至（12月22日頃）の前後約2ヶ月間だけ見られる「宇治橋大鳥居からの日の出」です。午前7時30分頃、大鳥居の真ん中から顔を出した太陽が橋と川面を黄金色に染め上げる瞬間は、言葉を失うほどの神々しさに満ちています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            新年の初詣の賑わいとは異なり、年末の伊勢参りは「おかげ参り」や「お礼参り」と呼ばれ、この1年を無事に過ごせたことへの感謝を神様に捧げる特別な参拝として古くから親しまれてきました。五十鈴川の御手洗場で手を清め、巨木がそびえる玉砂利を踏みしめて正宮へ向かう時間は、慌ただしい年の瀬に心身をリセットする最高のひとときとなります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして参拝の後は、車や電車で20〜30分の鳥羽温泉郷や志摩エリアへ。11月に解禁となる海のミルク「的矢かき（まとやかき）」の濃厚な甘み、秋から冬にかけて身が引き締まり甘みを増す「活伊勢海老」の残酷焼きやお造り、そしてとろける「松阪牛」のすき焼き。鳥羽湾の穏やかな海を望む露天風呂に浸かりながら、五臓六腑に染み渡る美食と名湯をご堪能ください。
          </p>
          <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-600" />
                早朝の宇治橋日の出拝観と温泉宿の組み合わせがベスト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                前夜に鳥羽の温泉旅館に宿泊し、翌朝7時に宇治橋へ向かうプランが最もスムーズで快適です。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Divine Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              初冬の伊勢志摩で体験すべき3大ハイライト
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">冬至の宇治橋「奇跡の日の出」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月下旬〜1月に現れる大鳥居の中央から昇る黄金色の朝日。1年の感謝を伝える年末のお礼参りにふさわしい絶景です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">冬の味覚！的矢かき＆伊勢海老</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月から旬を迎える志摩・的矢湾のブランド牡蠣と、甘みあふれる活伊勢海老。現役海女の手焼きや会席料理で贅沢に。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">鳥羽湾の絶景海見露天風呂</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                島々が浮かぶ青い海を望む展望露天風呂やインフィニティ温泉。湯冷めしにくい良質な塩化物泉やアルカリ単純泉でリラックス。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Selected Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              冬至参拝と的矢かき・伊勢海老を堪能する鳥羽・伊勢志摩の厳選宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-2">
              楽天トラベル公式APIより取得した最新データに基づき、おもてなし・温泉・料理評価が卓越した5宿をご紹介。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-auto min-h-[300px] bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>厳選 NO.{hotel.id}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                          鳥羽温泉郷・伊勢志摩
                        </span>
                        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 font-normal text-xs">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 mt-2 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      {/* Detailed Story & Deep Dive Review */}
                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-3">
                        <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Info className="w-4 h-4 text-amber-600" />
                          宿の魅力と温泉・お食事体験レビュー
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {hotel.story}
                        </p>
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/60 text-xs text-stone-600 space-y-1">
                          <div><strong className="text-stone-800">おすすめの客室:</strong> {hotel.roomTip}</div>
                          <div><strong className="text-stone-800">冬グルメの推し:</strong> {hotel.gourmetTip}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                        <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">主な特徴・サービス</h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-400 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-amber-600">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02]"
                      >
                        <span>楽天トラベルでプラン・空室を見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Comparison</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                伊勢志摩・鳥羽の厳選5宿 特徴・温泉・お料理比較
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                  <th className="py-3 px-4 font-bold">宿名</th>
                  <th className="py-3 px-4 font-bold">温泉・泉質</th>
                  <th className="py-3 px-4 font-bold">冬の看板料理</th>
                  <th className="py-3 px-4 font-bold">おすすめの滞在スタイル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">サン浦島 悠季の里</td>
                  <td className="py-3 px-4">本浦温泉 2種の自家源泉</td>
                  <td className="py-3 px-4">的矢かき・活伊勢海老・松阪牛会席</td>
                  <td className="py-3 px-4">夫婦・カップルで最高峰の料理と名湯を堪能したい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">鳥羽温泉郷 戸田家</td>
                  <td className="py-3 px-4">13の湯めぐり・野天風呂</td>
                  <td className="py-3 px-4">地魚解体ショー＆海鮮会席</td>
                  <td className="py-3 px-4">鳥羽駅徒歩3分！三世代ファミリーや電車旅の方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">大江戸温泉Premium 鳥羽彩朝楽</td>
                  <td className="py-3 px-4">鳥羽湾展望インフィニティ風呂</td>
                  <td className="py-3 px-4">海の幸プレミアムビュッフェ</td>
                  <td className="py-3 px-4">絶景オーシャンビューとフリーラウンジを楽しみたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">海女の宿 ひょうすけ</td>
                  <td className="py-3 px-4">榊原温泉直送 無料貸切風呂</td>
                  <td className="py-3 px-4">現役海女が焼く名物「大漁焼き」</td>
                  <td className="py-3 px-4">獲れたて魚介を炭火焼きで豪快に味わいたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ホテル浜離宮</td>
                  <td className="py-3 px-4">伊勢志摩屈指の療養高温泉</td>
                  <td className="py-3 px-4">季節の和食膳・旬魚料理</td>
                  <td className="py-3 px-4">駅チカで良質な自家源泉を気軽に満喫したい方</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expert Winter Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Worship Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                宇治橋の冬至日の出撮影＆参拝を成功させるエキスパートTIPS
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-600" />
                宇治橋前でのベスト立ち位置と撮影時間
              </h3>
              <p>
                大鳥居の中央から朝日が顔を出す瞬間を撮影するには、宇治橋手前の広場中央よりやや左手側が絶好のポジション。太陽が顔を出すのは午前7:30〜7:40頃ですが、良い位置を確保するためには朝7:00前には到着しておくのが理想的です。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                早朝参拝後の「赤福ぜんざい」で極楽の温もり
              </h3>
              <p>
                早朝参拝で冷え切った体には、おはらい町にある赤福本店（または五十鈴川店）の冬季限定「赤福ぜんざい」が最高のご褒美。炭火でこんがり焼いたお餅と上品な甘さの小豆汁が、冷えた体を芯から温めてくれます。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                冬のおかげ横丁・あったか食べ歩き名物4選
              </h3>
              <p>
                冬至参拝の行き帰りに立ち寄りたいのが、熱々の「伊勢うどん」、香ばしい「松阪牛ミンチカツ」、炭火で焼く「檜扇貝やアワビの串焼き」、そしてふかし立ての「豚捨のコロッケ」。冷たい空気の中で頬張るご馳走は格別です。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Coffee className="w-4 h-4 text-amber-600" />
                内宮参拝のマナーと五十鈴川御手洗場
              </h3>
              <p>
                手水舎で清めた後、ぜひ五十鈴川の「御手洗場（みたらし）」へ降りてみてください。元禄時代に徳川綱吉の生母・桂昌院が寄進した石畳から、清らかな清流に手を浸して身心を清めるのが古くからの正式な作法です。
              </p>
            </div>
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-gradient-to-br from-amber-50/70 via-white to-stone-50 rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Model Course</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              【1泊2日】宇治橋冬至日の出参拝と的矢かき・名湯満喫コース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              外宮・内宮の正式参拝と、冬至の朝日絶景、伊勢志摩の至高の海の幸を網羅するタイムスケジュール。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-100">
                <span className="px-3 py-1 bg-amber-600 text-white font-bold text-xs rounded-full">DAY 1</span>
                <h3 className="font-bold text-stone-900 text-base">外宮参拝・おはらい町散策と鳥羽名湯宿</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">11:30</strong>
                  <span>伊勢市駅到着。まずは衣食住の神様「外宮（豊受大神宮）」へ参拝。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">13:00</strong>
                  <span>おはらい町・おかげ横丁へ。名物「伊勢うどん」や冬季限定の「赤福ぜんざい」で温まる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">15:30</strong>
                  <span>鳥羽へ移動し旅館へチェックイン。夕暮れの鳥羽湾を望む絶景露天風呂で旅の疲れを癒やす。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">18:30</strong>
                  <span>夕食会席。解禁直後の「的矢かき」、活きのいい「伊勢海老」のお造りや鬼殻焼き、松阪牛に舌鼓。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">21:30</strong>
                  <span>澄んだ星空を仰ぐ夜の露天風呂に入り、翌朝の早起きに備えて早めの就寝。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-teal-100">
                <span className="px-3 py-1 bg-teal-600 text-white font-bold text-xs rounded-full">DAY 2</span>
                <h3 className="font-bold text-stone-900 text-base">宇治橋日の出拝観と内宮早朝お礼参り</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">06:45</strong>
                  <span>宿を出発し、伊勢神宮内宮の宇治橋前へ移動。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">07:30</strong>
                  <span>【奇跡の絶景】宇治橋大鳥居の中央から昇る黄金色の朝日を拝み、深い感動に包まれる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">08:00</strong>
                  <span>静寂に包まれた朝の内宮（皇大神宮）へ特別参拝。この1年の無事を感謝するお礼参り。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">09:30</strong>
                  <span>宿へ戻り、熱々の伊勢海老の味噌汁と炊きたてご飯の朝食を堪能後チェックアウト。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">11:30</strong>
                  <span>鳥羽水族館またはミキモト真珠島を観光。焼き牡蠣の昼食とお土産選びを楽しんで帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の伊勢志摩・宇治橋日の出参拝 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 宇治橋の大鳥居から昇る日の出が見られる時期と時間は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月下旬から1月下旬にかけて、特に冬至（例年12月22日頃）の前後約1ヶ月間がベストシーズンです。午前7時30分頃、五十鈴川にかかる宇治橋大鳥居のちょうど真ん中から神々しい朝日が昇り、鳥居が黄金色に輝く奇跡の瞬間を目撃できます。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 冬のお伊勢参り（おかげ参り・年越し参拝）の参拝順序は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                古くからの習わし通り、まず衣食住の神様を祀る「外宮（豊受大神宮）」を参拝し、その後に日本の総氏神である天照大御神を祀る「内宮（皇大神宮）」へ参拝するのが正式な順序です。年末に訪れる際は1年間の無事を感謝する「お礼参り」として祈りを捧げるのが風情です。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 「的矢かき（まとやかき）」の特徴と旬の時期は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                志摩市的矢湾で紫外線殺菌浄化技術を用いて育てられるブランド牡蠣で、11月から3月頃が最も身が肥えて甘みが増す旬です。えぐみが少なく非常にまろやかで、生牡蠣はもちろん、炭火焼き、カキフライ、カキ鍋など様々な調理法で美味しく召し上がれます。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 11月・12月の混雑状況とおすすめの参拝時間帯は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                日中の10:00〜14:00頃はおはらい町・おかげ横丁を中心に大変賑わいます。人混みを避けて厳かな空気を味わうには、早朝参拝（午前6:00〜7:30頃）が最もおすすめです。澄み切った朝の静寂の神域は息をのむ美しさです。
              </p>
            </details>
          </div>
        </section>

        {/* GEO & Internal Link Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Internal Links</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                三重・東海・近畿エリアの温泉＆旬の美食特集
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <Link 
              href="/prefectures/mie" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-700 transition font-medium border border-stone-100"
            >
              三重県の温泉宿・ホテル一覧 →
            </Link>
            <Link 
              href="/winter-mie-nabana-no-sato-illumination-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-700 transition font-medium border border-stone-100"
            >
              なばなの里 イルミネーション特集 →
            </Link>
            <Link 
              href="/winter-ise-ebi-lobster-luxury-gourmet-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-700 transition font-medium border border-stone-100"
            >
              冬の伊勢海老グルメ宿特集 →
            </Link>
            <Link 
              href="/prefectures/aichi" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-700 transition font-medium border border-stone-100"
            >
              愛知県（知多・蒲郡）の宿 →
            </Link>
            <Link 
              href="/prefectures/kyoto" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-700 transition font-medium border border-stone-100"
            >
              京都府の旅館・名宿一覧 →
            </Link>
            <Link 
              href="/prefectures/shiga" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-700 transition font-medium border border-stone-100"
            >
              滋賀県（おごと温泉等）の宿 →
            </Link>
            <Link 
              href="/winter-oyster-seafood-gourmet" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-amber-50 hover:text-amber-700 transition font-medium border border-stone-100"
            >
              冬の絶品牡蠣グルメ宿特集 →
            </Link>
            <Link 
              href="/features" 
              className="p-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition font-bold text-center flex items-center justify-center gap-1"
            >
              <span>全国の特集一覧を見る</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
