import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Sunset
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月南知多温泉郷】天然とらふぐフルコース！名宿5選',
  description: '11月から12月にかけて愛知県・知多半島の最南端に位置する南知多温泉郷（内海・山海・師崎）は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '南知多温泉 宿泊, 南知多 とらふぐ 宿, 南知多 11月 12月 温泉, 源氏香, 花乃丸, 粛海風, THE BEACH KUROTAKE, 山海館, 知多牛 ステーキ 宿, 日間賀島 たこ, 伊勢湾 夕日 露天風呂',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay/"
  },
  openGraph: {
    title: '【11・12月南知多温泉郷】天然とらふぐフルコース！名宿5選',
    description: '11月から12月にかけて愛知県・知多半島の最南端に位置する南知多温泉郷（内海・山海・師崎）は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の南知多温泉郷と伊勢湾夕日絶景露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "南知多温泉郷の11月・12月の気候や気温は？冬の観光におすすめの服装は？",
    "a": "南知多半島は知多湾・三河湾・伊勢湾に囲まれた海洋性気候のため、内陸部に比べて冬でも比較的温暖で雪が降ることは極めて稀です。11月の最高気温は15〜18℃、12月でも10〜13℃前後と日中は日差しが心地よく感じられます。ただし海沿いのため、伊勢湾から吹き付ける冬の季節風（伊勢湾のからっ風）が吹く日は体感温度が下がります。風を通しにくい防風コートやウインドブレーカー、マフラーやストールを準備しておくと安心です。"
  },
  {
    "q": "愛知・南知多が「日本有数のとらふぐの本場」と呼ばれる理由は？旬の時期は？",
    "a": "愛知県・知多半島の先端に位置する日間賀島・篠島・師崎港周辺は、実は日本全国の天然とらふぐ漁獲量のトップクラスを占める大産地です。かつては水揚げされたとらふぐの多くが下関へ送られていましたが、現在では地元南知多で獲れたての本場天然とらふぐを堪能できる「ふぐの王国」として知られています。漁の解禁は10月で、11月から2月にかけてが最も身が締まり旨味が凝縮するベストシーズンです。"
  },
  {
    "q": "南知多名物「知多牛（ちたぎゅう）」とはどんなお肉ですか？",
    "a": "「知多牛」は、温暖な知多半島の豊かな自然と良質な伏流水で丹精込めて育てられた愛知県を代表する銘柄黒毛和牛（知多牛「響」など）です。きめ細やかなサシ（霜降り）と柔らかい肉質、融点の低い上質な脂の甘みが特徴で、くどさがなくあっさりと上品な味わいを楽しめます。南知多の宿では、冬のとらふぐ会席に知多牛のヒレステーキや石焼きを組み合わせた贅沢なコースが大人気です。"
  },
  {
    "q": "南知多温泉郷のお湯（泉質）の特徴と効能について教えてください。",
    "a": "南知多温泉郷（内海温泉・山海温泉など）の源泉は、太古の化石海水を豊富に含む「ナトリウム・カルシウム-塩化物強塩温泉」が中心です。塩分濃度が高いため、入浴すると皮膚に塩分が付着して汗の蒸発を防ぐ「塩のパック効果」が働き、湯上がり後も驚くほど身体の芯まで温かさが持続し湯冷めしません。「温まりの湯」「熱の湯」として親しまれ、冷え性改善、関節痛、疲労回復、美肌効果に優れています。"
  },
  {
    "q": "名古屋やセントレア（中部国際空港）からのアクセス時間はどれくらいですか？",
    "a": "南知多温泉郷は、名古屋市街地から車（名古屋高速・知多半島道路・南知多道路経由）で約50〜60分という抜群のアクセスの良さを誇ります。中部国際空港（セントレア）からも車で約30〜40分です。公共交通機関利用の場合も、名鉄名古屋駅から名鉄特急（内海行）で乗り換えなし約50分で内海駅に到着し、各宿の無料送迎バスや路線バスを利用できます。ドライブ旅行にも気軽な週末温泉旅にも最適です。"
  }
];

export default function MinamichitaOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay"
        },
        "headline": "【11・12月南知多温泉郷の伊勢湾パノラマ夕日露天と本場とらふぐ】天然とらふぐフルコース・知多牛ステーキ＆日間賀島たこ会席の海辺宿5選",
        "description": "11月から12月にかけて愛知県・知多半島の最南端に位置する南知多温泉郷（内海・山海・師崎）は、全国屈指の天然とらふぐ水揚げ高を誇る日間賀島・篠島・師崎港から、冬の味覚の王様「とらふぐ」が届く最高潮シーズンを迎えます。伊勢湾の水平線に沈む黄金色の夕日と満天の星を望む展望露天風呂、地下1,300mから湧き出る濃厚な塩化物強塩泉（熱の湯）、薄造りの透き通るてっさ、旨味あふれるてっちり（ふぐ鍋）、香ばしいふぐ唐揚げやひれ酒、愛知の誇る銘柄黒毛和牛「知多牛」のヒレ・サーロインステーキ、名物タコ料理を堪能する海辺の名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T04:00:00+09:00",
        "dateModified": "2026-09-28T04:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 温泉・冬旅取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "愛知・南知多温泉郷 伊勢湾夕日露天と本場とらふぐの宿",
            "item": "https://croud-travel.pages.dev/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "南知多温泉郷の11月・12月の気候や気温は？冬の観光におすすめの服装は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "南知多半島は知多湾・三河湾・伊勢湾に囲まれた海洋性気候のため、内陸部に比べて冬でも比較的温暖で雪が降ることは極めて稀です。11月の最高気温は15〜18℃、12月でも10〜13℃前後と日中は日差しが心地よく感じられます。ただし海沿いのため、伊勢湾から吹き付ける冬の季節風（伊勢湾のからっ風）が吹く日は体感温度が下がります。風を通しにくい防風コートやウインドブレーカー、マフラーやストールを準備しておくと安心です。"
            }
          },
          {
            "@type": "Question",
            "name": "愛知・南知多が「日本有数のとらふぐの本場」と呼ばれる理由は？旬の時期は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "愛知県・知多半島の先端に位置する日間賀島・篠島・師崎港周辺は、実は日本全国の天然とらふぐ漁獲量のトップクラスを占める大産地です。かつては水揚げされたとらふぐの多くが下関へ送られていましたが、現在では地元南知多で獲れたての本場天然とらふぐを堪能できる「ふぐの王国」として知られています。漁の解禁は10月で、11月から2月にかけてが最も身が締まり旨味が凝縮するベストシーズンです。"
            }
          },
          {
            "@type": "Question",
            "name": "南知多名物「知多牛（ちたぎゅう）」とはどんなお肉ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「知多牛」は、温暖な知多半島の豊かな自然と良質な伏流水で丹精込めて育てられた愛知県を代表する銘柄黒毛和牛（知多牛「響」など）です。きめ細やかなサシ（霜降り）と柔らかい肉質、融点の低い上質な脂の甘みが特徴で、くどさがなくあっさりと上品な味わいを楽しめます。南知多の宿では、冬のとらふぐ会席に知多牛のヒレステーキや石焼きを組み合わせた贅沢なコースが大人気です。"
            }
          },
          {
            "@type": "Question",
            "name": "南知多温泉郷のお湯（泉質）の特徴と効能について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "南知多温泉郷（内海温泉・山海温泉など）の源泉は、太古の化石海水を豊富に含む「ナトリウム・カルシウム-塩化物強塩温泉」が中心です。塩分濃度が高いため、入浴すると皮膚に塩分が付着して汗の蒸発を防ぐ「塩のパック効果」が働き、湯上がり後も驚くほど身体の芯まで温かさが持続し湯冷めしません。「温まりの湯」「熱の湯」として親しまれ、冷え性改善、関節痛、疲労回復、美肌効果に優れています。"
            }
          },
          {
            "@type": "Question",
            "name": "名古屋やセントレア（中部国際空港）からのアクセス時間はどれくらいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "南知多温泉郷は、名古屋市街地から車（名古屋高速・知多半島道路・南知多道路経由）で約50〜60分という抜群のアクセスの良さを誇ります。中部国際空港（セントレア）からも車で約30〜40分です。公共交通機関利用の場合も、名鉄名古屋駅から名鉄特急（内海行）で乗り換えなし約50分で内海駅に到着し、各宿の無料送訳バスや路線バスを利用できます。ドライブ旅行にも気軽な週末温泉旅にも最適です。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "南知多温泉郷　源氏香",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28124/28124.jpg",
              rating: 4.39,
              reviews: 672,
              price: "¥7,850〜",
              access: "名鉄河和駅／知多半島道路南知多ＩＣより国道２４７号経由で約１０分",
              special: "展望露天風呂。知多の味覚を半個室の食事処で堪能。波音に癒される全室オーシャンビュー客室で至福のひと時",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28124%2F28124.html",
              story: "「薫香」をテーマにした日本初の和風お香リゾート旅館「南知多温泉郷 源氏香（げんじこう）」。館内には白檀や伽羅の上品なお香の香りが漂い、平安時代の雅な雅叙を再現した優雅な空間が迎えてくれます。最上階の海抜数千尺を思わせる「雲上露天風呂」からは、遮るもののない伊勢湾の雄大な大海原が一望でき、夕暮れ時には海と空が黄金色から茜色へと染まる息をのむ絶景が広がります。地下から湧き出るナトリウム・塩化物強塩泉は身体を芯から温め、冬の湯冷めを防いでくれます。",
              roomTip: "最上階展望風呂付き客室または伊勢湾を一望するスーペリア和洋室。大きな窓やバルコニーから、行き交う大型船や冬の澄み切った海と夕日のパノラマを独占できます。",
              gourmetTip: "南知多名物の「とらふぐ会席」と極上「知多牛ステーキ」。職人技が光る大皿てっさ（ふぐ刺し）、熱々のてっちり鍋、香ばしいふぐの唐揚げやひれ酒、霜降り知多牛の鉄板焼きを贅沢に堪能。",
              highlights: [
                "日本初のお香をテーマにした和風旅館＆海抜数千尺を思わせる最上階雲上露天風呂",
                "職人技の大皿てっさと熱々てっちり鍋＆霜降り知多牛ステーキとひれ酒",
                "館内に漂う白檀や伽羅の上品なお香に包まれる優雅で雅な大人のリトリート"
              ]
            },
            {
              id: 2,
              name: "南知多温泉郷　水軍伝説の風薫る宿　花乃丸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18985/18985.jpg",
              rating: 4.23,
              reviews: 826,
              price: "¥10,230〜",
              access: "知多半島道路　豊丘ＩＣより車約１０分／名鉄河和駅より無料送迎あり（事前予約制、14：35発、15：35発、16：35発）",
              special: "豊浜漁港から車で５分。新鮮な海の幸をご提供。貸切露天風呂や岩盤浴、ワンワンホテルなど施設も充実です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18985%2F18985.html",
              story: "戦国時代に伊勢湾を治めた千賀水軍の歴史ロマンを受け継ぎ、和の温もりとモダンな快適さが融合した南知多の海辺宿「水軍伝説の風薫る宿 花乃丸」。館内には千賀水軍ゆかりの甲冑や調度品が配され、旅情を高めてくれます。自慢の展望大浴場や露天風呂、多彩な貸切露天風呂からは、初冬の静かな伊勢湾と三河湾の海景を一望。湯上がりには海風を感じられるテラスで心地よいクールダウンを楽しめます。",
              roomTip: "露天風呂付き和洋室「花風の棟」または海側プレミアム和室。客室の専用露天風呂から、刻一刻と表情を変える冬の海のグラデーションを好きな時間に眺められます。",
              gourmetTip: "「水軍会席」に冬の味覚を盛り込んだ豪華ディナー。師崎港直送の伊勢湾鮮魚舟盛り、南知多名物の茹で上げ日間賀島タコ、知多牛の石焼きステーキ、初冬のとらふぐ料理。",
              highlights: [
                "千賀水軍の歴史ロマン息づく海辺宿＆伊勢湾と三河湾を一望する展望大浴場と貸切露天",
                "師崎港直送の伊勢湾鮮魚舟盛り＆名物日間賀島タコと知多牛の石焼き会席",
                "花風の棟露天風呂付き客室で過ごすプライベートタイム＆家族旅行にも安心の設備"
              ]
            },
            {
              id: 3,
              name: "南知多　山海温泉　和風旅館　粛海風",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151298/151298.jpg",
              rating: 3.92,
              reviews: 391,
              price: "¥16,500〜",
              access: "名鉄　内海駅より送迎にて約１０分",
              special: "■名古屋から約１時間■　知多から伊勢湾を眺め、木の香漂う自慢の「天上の湯」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151298%2F151298.html",
              story: "伊勢湾に面した山海海岸の絶壁に建ち、全国の温泉ファンから絶賛される「日本屈指の絶景露天風呂」を誇る名宿「南知多 山海温泉 和風旅館 粛海風（しゅくかいふう）」。宿の象徴である最上階露天風呂「天上の湯」に身を沈めると、湯船の縁と海が完全に溶け合い、まるで大海原の上に浮かんでいるかのような神秘的な浮遊感を味わえます。すべての浴槽に満たされる自家源泉は、濃厚なミネラルを含む強塩泉。波の音を間近に聞きながら、至高の非日常を満喫できます。",
              roomTip: "オーシャンフロント純和室または露天風呂付き客室。全室から伊勢湾の水平線が一望でき、冬の澄んだ夜空には満天の星と対岸の三重・伊勢志摩の灯りが煌めきます。",
              gourmetTip: "本場南知多の「天然とらふぐフルコース」。職人が美しく菊の花のように引いた極上のてっさ、旨味が凝縮したてっちり鍋、ふぐ皮の湯引き、締めにとらふぐの出汁が染み渡るふぐ雑炊。",
              highlights: [
                "海と一体化する天空露天風呂「天上の湯」＆波打ち際の絶壁に佇む純和風老舗旅館",
                "本場南知多の天然とらふぐフルコース＆菊盛りてっさと極上ふぐ雑炊",
                "海上に浮かんでいるような圧倒的な開放感＆満天の星と伊勢志摩の灯りを望む夜湯"
              ]
            },
            {
              id: 4,
              name: "THE　BEACH　KUROTAKE（旧魚友）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108196/108196.jpg",
              rating: 3.75,
              reviews: 503,
              price: "¥15,400〜",
              access: "名鉄　内海駅から送迎車で約５分（要予約：宿泊日２日前まで）",
              special: "全室オーシャンフロント☆源泉掛け流し温泉と料理が大好評☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108196%2F108196.html",
              story: "全室が伊勢湾を望むオーシャンフロント、地下1,300mから湧き出る自家源泉を贅沢に掛け流す大人のデザイン温泉宿「THE BEACH KUROTAKE（旧 料理旅館 魚友）」。かつて昭和の名門料理旅館として名を馳せた歴史を受け継ぎ、料理の質と海辺のスタイリッシュな寛ぎが高次元で融合しています。波打ち際までわずか数メートルの大浴場と露天風呂からは、潮騒が心地よく耳に届き、日常の疲れを完全に洗い流してくれます。",
              roomTip: "源泉露天風呂付きモダン和洋室。プライベートデッキに設えられた湯船から、伊勢湾の水平線に沈む冬の夕日と星空を心ゆくまで堪能できる極上の空間です。",
              gourmetTip: "魚友伝統の「活魚と知多牛の特選会席」。目の前の海で獲れた伊勢湾の天然真鯛や車海老、冬のとらふぐ料理、きめ細やかなサシがとろけるA5知多牛のサーロインステーキ。",
              highlights: [
                "全室オーシャンフロント＆地下1,300m自家源泉掛け流しのスタイリッシュデザイン宿",
                "名門料理旅館魚友の伝統を受け継ぐ活魚料理＆A5知多牛サーロイン",
                "波音に癒やされるプライベートテラス露天風呂＆大人のための静謐なビーチステイ"
              ]
            },
            {
              id: 5,
              name: "潮騒の湯宿　山海館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51751/51751.jpg",
              rating: 4.17,
              reviews: 493,
              price: "¥7,300〜",
              access: "名鉄知多新線　内海駅からバスで15分、車で10分／知多半島道路　南知多ICから車で15分",
              special: "青い海と天然温泉。知多半島で叶う至福のひととき。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51751%2F51751.html",
              story: "南知多・山海海岸のすぐ目の前に位置し、全国でも極めて珍しい「天然砂風呂」と天然温泉の多彩な湯処を備えた癒やしの宿「潮騒の湯宿 山海館」。温かい天然砂に全身を埋めて汗を流す砂風呂は、デトックス効果と血行促進が抜群で、冬の冷え切った身体を内側から劇的に温めてくれます。ナトリウム・カルシウム塩化物強塩泉の温泉大浴場や露天風呂と組み合わせることで、極上のリフレッシュを実感できます。",
              roomTip: "海側和室またはリニューアル和モダン客室。伊勢湾の穏やかな波打ち際を眼下に見下ろし、朝陽と夕陽の光に包まれてゆったりとした島風を感じられます。",
              gourmetTip: "名物「日間賀島タコの姿茹で」と南知多海鮮会席。冬に旨味が乗る日間賀島産のプリプリのタコ、伊勢湾の旬魚の舟盛り、知多牛の陶板焼き、冬の小鍋料理など、海の幸満載の膳。",
              highlights: [
                "全国的にも珍しい名物「天然砂風呂」体験＆伊勢湾の潮騒を聞く展望露天風呂",
                "日間賀島タコの丸ごと姿茹で＆伊勢湾の冬の味覚をリーズナブルに味わう海鮮膳",
                "砂風呂と強塩泉のダブル温まり効果で冷え性を徹底解消＆アットホームなもてなし"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="冬の南知多温泉郷と伊勢湾夕日絶景露天風呂"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Sunset className="w-4 h-4" />
            11月・12月 冬の極上温泉特集｜愛知・知多半島
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月南知多温泉郷】<br className="hidden sm:inline" />
            伊勢湾パノラマ夕日露天と本場とらふぐフルコース・知多牛の海辺宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            日本有数の水揚げ高を誇る天然とらふぐの聖地。伊勢湾の水平線に沈む黄金の夕日を望む天空露天風呂で温まり、透き通るてっさと極上知多牛ステーキを堪能する知多半島の冬の極上旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Sunset Ocean View & Maritime Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                伊勢湾を染める黄金のサンセットと、知多半島の千賀水軍ロマン
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              名古屋市街地から知多半島道路を利用してわずか約50〜60分、伊勢湾と三河湾を両脇に抱く知多半島の最南端「南知多温泉郷（内海・山海・師崎）」は、温暖な海洋性気候に恵まれた愛知県随一のシーサイドリゾート温泉地です。11月から12月にかけての初冬、澄み切った冷気の中で伊勢湾の広大な水平線へと沈みゆく黄金色の夕日は、日本の夕日百選に選ばれる内海海岸・山海海岸をはじめ、息をのむ美しさを誇ります。
            </p>
            <p>
              夕暮れ時のマジックアワーには、海と空が琥珀色から茜色、深みのある藍色へとグラデーションを描き、対岸の三重県・伊勢志摩の灯台や山並みのシルエットがくっきりと浮かび上がります。また、南知多は戦国時代から江戸時代にかけて伊勢湾の海上警備と流通を司った「千賀水軍（尾張徳川家船奉行）」の本拠地でもあり、海運の歴史ロマンが息づく風情ある港町の佇まいが今なお残されています。
            </p>
            <p>
              白亜の姿が青い海と空に映える愛知県最古の洋式灯台「野間埼灯台」や、知多半島最南端の「羽豆岬（はずみさき）」を散策すれば、心地よい潮風が日常の喧騒を優しく吹き飛ばしてくれます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">伊勢湾の絶景サンセット</div>
              <div className="text-xs text-slate-600">夕日百選の内海・山海海岸。空と海が茜色に染まりゆくトワイライトタイム。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <ThermometerSun className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">濃厚な塩化物強塩温泉</div>
              <div className="text-xs text-slate-600">太古の海水を抱く名湯。塩のパック効果で湯冷めせず、身体の芯までぽかぽかに。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">本場天然とらふぐ＆知多牛</div>
              <div className="text-xs text-slate-600">日間賀島・師崎港直送のてっさ・てっちり・唐揚げと霜降り知多牛ステーキ。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Geology & Gastronomy Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Thermal Science & Coastal Bounty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                日本屈指の天然とらふぐ産地「南知多・日間賀島」の真実と知多牛の霜降り美
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-700" />
              <span>地下1,300mの古代化石海水「塩化物強塩泉」がもたらす熱の湯効果</span>
            </h3>
            <p>
              南知多温泉郷の地下深層（1,300m前後）には、何百万年も前の太古の海水が地層深くに閉じ込められた「化石海水」が豊富に眠っています。源泉は無色透明から淡黄色を帯びた「ナトリウム・カルシウム-塩化物強塩温泉」。塩分濃度が海水を上回るほど高いため、入浴すると塩分が皮膚表面の皮脂膜と結合して「塩の保護膜（ベール）」を形成します。
            </p>
            <p>
              この塩の膜が汗の過剰な蒸発を完全に遮断するため、湯上がり後も体温の放散が強力に抑えられ、「熱の湯」「温まりの湯」として抜群の保温持続力を誇ります。海風が冷たく吹き付ける冬の夕暮れや夜間であっても、湯冷めを一切起こさず、冷え性改善や神経痛、関節痛の緩和に絶大な効果を発揮します。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-teal-700" />
              <span>伊勢湾と三河湾の潮流が育む「本場天然とらふぐ」の弾力とアミノ酸</span>
            </h3>
            <p>
              南知多の冬の味覚を象徴するのが「天然とらふぐ」です。日間賀島や篠島、師崎港周辺は、太平洋の黒潮と伊勢湾・三河湾の激しい潮流が交差する絶好の漁場。激流に逆らって泳ぎ、豊富なエビや小魚を捕食して育つ天然とらふぐは、筋肉繊維が極限まで引き締まり、噛みしめるほどに凝縮されたグルタミン酸やイノシン酸の旨味が舌を満たします。
            </p>
            <p>
              10月の漁解禁を経て、11月から2月にかけて水温が低下するとともに皮下脂肪とコラーゲンが蓄えられ、旬の最高潮を迎えます。大皿に菊花のように引かれた透き通る「てっさ」を自家製ポン酢と紅葉おろしでいただく贅沢、骨周りの身から濃厚な出汁が溶け出す「てっちり鍋」、香ばしく揚げた唐揚げ、そして炙ったヒレを注いだ熱燗「ひれ酒」。さらに、温暖な気候のもと良質な飼料で丹精込めて肥育されるブランド黒毛和牛「知多牛」の上品なサーロインステーキや、タコ壺漁で知られる日間賀島名物タコの姿茹でまで、愛知・南知多ならではの豪快で繊細な海幸山幸を心ゆくまで堪能できます。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              南知多温泉郷・冬の滞在を彩る厳選海辺宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              楽天トラベル公式APIより最新の宿泊プラン・評価情報を取得。11月・12月の冬旅行に心からおすすめできる宿を徹底比較。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-800 text-white text-xs font-bold">
                          厳選第{h.id}位
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                          <Star className="w-4 h-4 fill-current" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 font-normal text-xs">({h.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-teal-800 transition">
                        <a href={h.url} target="_blank" rel="noopener noreferrer">
                          {h.name}
                        </a>
                      </h3>
                    </div>
                    <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center">
                      <span className="text-xs text-slate-500">1名あたり参考料金（税込）</span>
                      <span className="text-2xl font-black text-amber-600">{h.price}</span>
                    </div>
                  </div>

                  {/* Image & Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={h.img}
                        alt={h.name}
                        fill
                        className="object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {h.story}
                      </p>
                      <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                          <Utensils className="w-4 h-4 text-amber-700" />
                          <span>冬の絶品料理のこだわり</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                          <Landmark className="w-4 h-4 text-teal-800" />
                          <span>おすすめ客室・眺望のポイント</span>
                        </div>
                        <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      この宿の注目ポイント
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Access & Booking Button */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-2 text-xs text-slate-600 max-w-xl">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-slate-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                    >
                      <span>楽天トラベルでプラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">1泊2日 満喫ルート</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                南知多海岸ドライブ＆野間埼灯台と本場とらふぐ三昧モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：名古屋出発 〜 知多半島道路 〜 野間埼灯台 〜 宿チェックイン＆夕日露天ととらふぐフルコース</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                名古屋高速・知多半島道路を利用して南知多へドライブ（約50分）。白亜の姿が青い海に映える知多半島のシンボル「野間埼灯台」に立ち寄り、初冬の澄んだ海岸線を散策。午後は早めに南知多温泉の宿へチェックイン。伊勢湾に沈む黄金色の夕日を天空露天風呂から眺め、夕食には職人技が光る大皿てっさ、熱々てっちり、香ばしいふぐ唐揚げや知多牛ステーキ、ひれ酒を堪能。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：波音を聞く朝湯 〜 師崎港朝市 〜 魚太郎（海鮮市場・浜焼き） 〜 えびせんべいの里</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                清々しい朝の海を眺めながら塩化物強塩泉の朝湯でぽかぽかに温まり、美味しい和朝食をいただいて出発。知多半島最南端の「師崎港朝市」や美浜町の人気海鮮マーケット「魚太郎」を訪れ、獲れたての地魚や干物、冬の海産物を調達。最後に「えびせんべいの里 美浜本店」に立ち寄り、名物の海老せんべいやお土産を購入して名古屋方面へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Climate & Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Sunset className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Advisory</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の南知多 冬旅の注意点と服装・海風対策
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-800" />
                海洋性気候と伊勢湾のからっ風
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                積雪や凍結の心配はほとんどありませんが、海沿いのため冬期は強い西風・北西風（伊勢湾のからっ風）が吹き抜ける日があります。展望露天風呂や海岸散策を楽しむ際は、風を遮る防風性のアウターやストール、マフラーを1枚携行すると快適です。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-800" />
                日没時刻と夕日鑑賞のタイミング
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月・12月の知多半島の日没時刻は16時30分〜16時45分頃と非常に早くなります。チェックインを15時〜15時30分頃までに済ませ、客室や最上階の露天風呂から夕暮れ時の絶景グラデーションを余裕を持って楽しむスケジュールがおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                南知多温泉郷冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東海・伊勢志摩の冬名湯＆極上海の幸特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の冬の海絶景と、本場のとらふぐ・伊勢海老・牡蠣を味わう人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">三重・鳥羽温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">伊勢湾を望む絶景露天風呂と伊勢海老・的矢かき会席の宿</h3>
            </Link>
            <Link 
              href="/winter-iseshima-ujibashi-sunrise-matoya-oyster-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">三重・伊勢志摩</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">冬至の宇治橋鳥居日の出絶景と的矢牡蠣・松阪牛の宿</h3>
            </Link>
            <Link 
              href="/winter-fugu-pufferfish-gourmet-onsen-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">全国冬のふぐ特集</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の極上とらふぐフルコースと名湯露天風呂の宿まとめ</h3>
            </Link>
            <Link 
              href="/winter-mie-nabana-no-sato-illumination-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">三重・桑名</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">国内最大級なばなの里イルミネーションと長島温泉の宿</h3>
            </Link>
            <Link 
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">静岡・熱海温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">冬の熱海海上花火大会と金目鯛煮付け・相模湾海の幸の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-aichi-minamichita-onsen-torafugu-chita-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
