import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月玉造温泉の初冬美肌湯と松葉がに】出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉蟹＆しまね和牛の宿5選",
  description: "全国の八百万の神々が集う11月の出雲「神在月」。奈良時代の風土記に「神の湯」と記された日本最古の美肌温泉・玉造温泉で潤い、11月解禁の山陰松葉がに会席としまね和牛を堪能。玉湯川沿いの初冬風情と出雲大社参拝を叶える厳選名宿5選。",
  keywords: '玉造温泉 宿泊 11月 12月, 出雲大社 神在月 温泉宿, 玉造温泉 松葉がに, 佳翠苑 皆美, 白石家 玉造, 湯之助の宿 長楽園, ホテル玉泉, しまね和牛 美肌の湯',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay/",
  },
  openGraph: {
    title: "【11・12月玉造温泉の初冬美肌湯と松葉がに】出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉蟹＆しまね和牛の宿5選",
    description: "全国の八百万の神々が集う11月の出雲「神在月」。奈良時代の風土記に「神の湯」と記された日本最古の美肌温泉・玉造温泉で潤い、11月解禁の山陰松葉がに会席としまね和牛を堪能。玉湯川沿いの初冬風情と出雲大社参拝を叶える厳選名宿5選。",
    url: 'https://croud-travel.com/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月玉造温泉の初冬美肌湯と松葉がに】出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉蟹＆しまね和牛の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月玉造温泉の初冬美肌湯と松葉がに】出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉蟹＆しまね和牛の宿5選",
    description: "全国の八百万の神々が集う11月の出雲「神在月」。奈良時代の風土記に「神の湯」と記された日本最古の美肌温泉・玉造温泉で潤い、11月解禁の山陰松葉がに会席としまね和牛を堪能。玉湯川沿いの初冬風情と出雲大社参拝を叶える厳選名宿5選。",
  }
};

const faqList = [
  {
    "q": "出雲の『神在月（かみありづき）』とは何ですか？時期はいつ？",
    "a": "旧暦の10月（現在の11月頃）、日本全国の八百万（やおよろず）の神々が出雲大社に集まり、人々の縁結びや来年の収穫などを話し合う神事が行われます。全国的には神様が出払うため『神無月（かんなづき）』と呼びますが、出雲地方だけは神様をお迎えするため『神在月（かみありづき）』と呼びます。出雲大社では『神迎祭（かみむかえさい）』や『神在祭（かみありさい）』が斎行され、全国から多くの参拝者が訪れる年間最重要のスピリチュアルな季節です。"
  },
  {
    "q": "玉造温泉が『日本最古の美肌温泉』と呼ばれる理由は？",
    "a": "奈良時代初期に編纂された『出雲国風土記』（西暦733年）に、『一たび濯（あら）へば形容端正（かたちきらきら）しく、再び浴すれば万の病ことごとく除（い）ゆ』と記されており、古代から肌を美しく整える温泉として全国に知られていました。現代の製薬会社や肌科学研究所による科学分析でも、天然の保湿成分である『メタケイ酸』が1リットルあたり約130mg以上（温泉基準値の2倍以上）含まれ、さらに肌の水分量を高める硫酸塩泉と塩化物泉が理想的なバランスで混ざり合っていることが実証されています。"
  },
  {
    "q": "山陰の『松葉がに』の解禁日と旬はいつですか？",
    "a": "島根県や鳥取県などの山陰沖で水揚げされるオスのズワイガニは『松葉がに（まつばがに）』と呼ばれ、毎年11月6日に漁が解禁されます。11月から翌年3月までが漁期ですが、特に11月中旬から12月にかけては、出雲大社の神在月参拝と松葉がにの初競り・初冬の味覚が重なり、年間で最も贅沢なグルメシーズンとなります。"
  },
  {
    "q": "出雲大社から玉造温泉へのアクセス方法と所要時間は？",
    "a": "お車の場合は、山陰自動車道（松江玉造IC〜斐川IC経由）または国道9号線を利用して約40〜45分です。公共交通機関をご利用の場合は、JR山陰本線で玉造温泉駅から出雲市駅まで特急で約25分（普通で約40分）、出雲市駅から一畑バスまたは一畑電車に乗り換えて出雲大社まで約25分、合計約1時間〜1時間15分程度でスムーズに移動できます。"
  },
  {
    "q": "玉造温泉街の散策見どころや足湯スポットはありますか？",
    "a": "温泉街の中央を流れる玉湯川沿いには、誰でも無料で利用できる『川辺の足湯』が複数整備されています。また、境内の『願い石』に授与品の『叶い石』を重ねて祈願すると願いが叶うとされる『玉作湯神社（たまつくりゆじんじゃ）』や、良質な美肌源泉をそのままボトルに詰めて持ち帰れる『湯薬師広場（たらい湯）』など、徒歩で巡れる魅力的なパワースポットが凝縮しています。"
  }
];

export default function TamatsukuriWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay#article",
        "headline": "【11・12月玉造温泉の初冬美肌湯と松葉がに】出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉蟹＆しまね和牛の宿5選",
        "description": "全国の八百万の神々が集う11月の出雲「神在月」。奈良時代の風土記に「神の湯」と記された日本最古の美肌温泉・玉造温泉で潤い、11月解禁の山陰松葉がに会席としまね和牛を堪能。玉湯川沿いの初冬風情と出雲大社参拝を叶える厳選名宿5選。",
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
          "@id": "https://croud-travel.com/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "出雲の『神在月（かみありづき）』とは何ですか？時期はいつ？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "旧暦の10月（現在の11月頃）、日本全国の八百万（やおよろず）の神々が出雲大社に集まり、人々の縁結びや来年の収穫などを話し合う神事が行われます。全国的には神様が出払うため『神無月（かんなづき）』と呼びますが、出雲地方だけは神様をお迎えするため『神在月（かみありづき）』と呼びます。出雲大社では『神迎祭（かみむかえさい）』や『神在祭（かみありさい）』が斎行され、全国から多くの参拝者が訪れる年間最重要のスピリチュアルな季節です。"
            }
          },
          {
            "@type": "Question",
            "name": "玉造温泉が『日本最古の美肌温泉』と呼ばれる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "奈良時代初期に編纂された『出雲国風土記』（西暦733年）に、『一たび濯（あら）へば形容端正（かたちきらきら）しく、再び浴すれば万の病ことごとく除（い）ゆ』と記されており、古代から肌を美しく整える温泉として全国に知られていました。現代の製薬会社や肌科学研究所による科学分析でも、天然の保湿成分である『メタケイ酸』が1リットルあたり約130mg以上（温泉基準値の2倍以上）含まれ、さらに肌の水分量を高める硫酸塩泉と塩化物泉が理想的なバランスで混ざり合っていることが実証されています。"
            }
          },
          {
            "@type": "Question",
            "name": "山陰の『松葉がに』の解禁日と旬はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "島根県や鳥取県などの山陰沖で水揚げされるオスのズワイガニは『松葉がに（まつばがに）』と呼ばれ、毎年11月6日に漁が解禁されます。11月から翌年3月までが漁期ですが、特に11月中旬から12月にかけては、出雲大社の神在月参拝と松葉がにの初競り・初冬の味覚が重なり、年間で最も贅沢なグルメシーズンとなります。"
            }
          },
          {
            "@type": "Question",
            "name": "出雲大社から玉造温泉へのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "お車の場合は、山陰自動車道（松江玉造IC〜斐川IC経由）または国道9号線を利用して約40〜45分です。公共交通機関をご利用の場合は、JR山陰本線で玉造温泉駅から出雲市駅まで特急で約25分（普通で約40分）、出雲市駅から一畑バスまたは一畑電車に乗り換えて出雲大社まで約25分、合計約1時間〜1時間15分程度でスムーズに移動できます。"
            }
          },
          {
            "@type": "Question",
            "name": "玉造温泉街の散策見どころや足湯スポットはありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "温泉街の中央を流れる玉湯川沿いには、誰でも無料で利用できる『川辺の足湯』が複数整備されています。また、境内の『願い石』に授与品の『叶い石』を重ねて祈願すると願いが叶うとされる『玉作湯神社（たまつくりゆじんじゃ）』や、良質な美肌源泉をそのままボトルに詰めて持ち帰れる『湯薬師広場（たらい湯）』など、徒歩で巡れる魅力的なパワースポットが凝縮しています。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "玉造温泉　佳翠苑　皆美",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7798%2F7798.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "出雲・玉造温泉　白石家",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78179%2F78179.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "玉造温泉　湯之助の宿　長楽園",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12628%2F12628.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "玉造温泉　～曲水の庭～　ホテル玉泉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106267%2F106267.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "玉造温泉　玉造国際ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44944%2F44944.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "玉造温泉　佳翠苑　皆美",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7798/7798.jpg",
              rating: 4.66,
              reviews: 1490,
              price: "¥14,300〜",
              access: "米子自動車道　国道9号線で約50分。JR山陰本線　玉造温泉駅。",
              special: "旬を生かした伝統料理と4つのお風呂を満喫できる宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7798%2F7798.html",
              story: "創業百三十余年、名勝枯山水庭園と近代建築の美が調和する玉造屈指の高級老舗旅館「佳翠苑 皆美」。広大な敷地を彩る日本庭園は、枯山水と豊かな緑が四季折々の風情を醸し出し、11月・12月の初冬には凛とした静けさに包まれます。館内最上階に位置する展望大浴場「天遊の湯」や庭園露天風呂からは、玉造の温泉街と遠くの山並みを見晴らす贅沢な湯浴みが叶います。松江藩主の茶の湯文化を受け継ぐ伝統の「おもてなしの心」と、洗練された設えが大人の癒やしを深めてくれます。",
              roomTip: "客室専用の源泉風呂を備えた特別フロア「翠松館」や和モダン客室。初冬の澄み渡る空気を感じながら、プライベートな神の湯を心ゆくまで堪能できます。",
              gourmetTip: "山陰の冬の味覚を極めた豪華会席。境港直送の活松葉がにの姿茹でや香ばしい炭火焼き、旨味が凝縮した蟹すき鍋、とろける甘みのしまね和牛フィレ肉ステーキなど、代々伝わる秘伝の出汁と技で仕立てられます。",
              highlights: [
                "枯山水名園と最上階展望大浴場「天遊の湯」＆松江藩主ゆかりの洗練されたもてなし",
                "出雲風土記に記された「神の湯」を引く庭園露天風呂で叶える至高の美肌リトリート",
                "境港直送の活松葉がに姿茹で・甲羅炭火焼き＆とろけるしまね和牛フィレ会席"
              ]
            },
            {
              id: 2,
              name: "出雲・玉造温泉　白石家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/78179/78179.jpg",
              rating: 4.69,
              reviews: 4013,
              price: "¥12,500〜",
              access: "【山陰道】玉造インターから車で約１０分 ■出雲大社から車で約４０分の距離 ■ＪＲ玉造温泉駅より送迎有（事前連絡要）",
              special: "【ご縁に結ばれて創業300年】楽天トラベルアワード11年連続受賞施設！口コミ総数3,326件☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78179%2F78179.html",
              story: "創業三百年余の歴史を誇り、全館に生花が香り立つ純和風の宿「出雲・玉造温泉 白石家」。館内には毎日専任のスタッフが生ける季節の花々が約百ヶ所も飾られ、初冬の旅路をやさしく迎えてくれます。宿の自慢は、総檜造りの大浴場「白糸の湯」と、黒御影石を敷き詰めた露天風呂。化粧水と同じ成分バランスを持つと言われる玉造の柔らかな源泉が溢れる湯船で、しっとりとした極上の肌触りを実感できます。夜には出雲神話にまつわる「縁結びライブ」や伝統の安来節・どじょうすくい踊りが開催され、出雲の文化に触れる温かな夜を過ごせます。",
              roomTip: "木の温もりを感じる和室や、ベッドを配した快適なモダン和洋室。女性向けの色浴衣選びや細やかなアメニティも充実しています。",
              gourmetTip: "冬限定の「松葉がに会席」。山陰沖で獲れた新鮮な松葉がにを一人丸ごと一杯使った茹でがにや蟹刺し、島根県産ブランド黒毛和牛の陶板焼きなど、地元の旬食材が美しく並びます。",
              highlights: [
                "創業300年純和風宿＆毎日館内100カ所に生ける四季の花々と総檜大浴場「白糸の湯」",
                "夜毎開催される出雲神話ライブや伝統の安来節・どじょうすくい＆選べる華やか色浴衣",
                "松葉がに一人一杯付き会席＆島根県産黒毛和牛陶板焼きと日本海地魚のお造り"
              ]
            },
            {
              id: 3,
              name: "玉造温泉　湯之助の宿　長楽園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12628/12628.jpg",
              rating: 4.37,
              reviews: 1941,
              price: "¥18,700〜",
              access: "JR「玉造温泉駅」下車 ・タクシーで約10分/ 米子自動車道→山陰自動車道→松江・玉造ICより国道９号線経由",
              special: "★完成150年超★長楽園にしかない「混浴大露天風呂」は家族みんなで、恋人同士で、仲間同士で楽しもう♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12628%2F12628.html",
              story: "日本一の広さを誇る約百二十坪の混浴大野天風呂「龍宮の湯」で全国に名を馳せる「湯之助の宿 長楽園」。江戸時代初期、松江藩主の入浴を管理する「湯之助」を代々務めてきた由緒ある家柄で、日本庭園に囲まれた巨大な露天風呂には、一切の加水・加温を行わない100%自家源泉が滝のように注ぎ込んでいます。男女ともに専用の湯浴み着（ゆあみぎ）が用意されており、カップルやご夫婦で一緒に庭園の冬景色を眺めながら、日本屈指の美肌の湯にゆったりと浸かることができます。",
              roomTip: "一万坪もの広大な回遊式日本庭園に面した格式ある客室。広縁から眺める初冬の庭園の木々と池の風情は、まるで一幅の絵画のような静けさです。",
              gourmetTip: "出雲の山海の恵みを贅沢に織り交ぜた季節会席。冬の日本海で揚がった松葉がにの甲羅焼き、しまね和牛のすき焼き鍋、宍道湖産の大和しじみを使った香り豊かな汁物など、歴史ある宿ならではの深みある味わい。",
              highlights: [
                "日本一の広さ約120坪の混浴大露天風呂「龍宮の湯」＆代々藩主の湯守を務めた歴史宿",
                "湯浴み着で楽しむ夫婦・カップルの庭園露天風呂体験＆1万坪の回遊式日本庭園の静寂",
                "冬の山陰松葉がに甲羅焼き＆しまね和牛すき焼き鍋・宍道湖産大和しじみ汁"
              ]
            },
            {
              id: 4,
              name: "玉造温泉　～曲水の庭～　ホテル玉泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106267/106267.jpg",
              rating: 4.31,
              reviews: 1986,
              price: "¥8,240〜",
              access: "出雲大社から車で約40分■最寄バス停(温泉下)より徒歩3分■JR玉造温泉駅より送迎有（3日前迄に要連絡）",
              special: "2025年、76室を「畳にベッド」の上質な客室へと改修し、大浴場に「整いスペース」を新設しました！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106267%2F106267.html",
              story: "広大な敷地に広がる枯山水の巨大日本庭園と、毎夜開催される出雲神楽の公演が旅情を盛り上げる大型名宿「玉造温泉 ～曲水の庭～ ホテル玉泉」。吹き抜けのロビーガラス越しに広がる広大な日本庭園「曲水の庭」には初冬の灯籠や飛び石が配され、格調高い趣を漂わせます。大浴場「神戸の湯」は巨石を配した野趣あふれる巌風呂と、檜の香りに癒やされる露天風呂を備え、毎分数百リットル湧出する豊富な湯量を誇ります。夜のロビーラウンジで演じられる迫真の「石見神楽」は圧巻の一言です。",
              roomTip: "名園「曲水の庭」を眼下に見晴らす眺望和室や広々としたスーペリアツイン。夜の庭園ライトアップの幻想的な灯りを部屋から楽しめます。",
              gourmetTip: "冬の山陰味覚バイキングまたは個室松葉がに会席。茹で松葉がに、新鮮な日本海の寒ブリやサザエの刺身、目の前でシェフが焼き上げるしまね和牛ステーキ、仁多米コシヒカリの炊き立てご飯が並びます。",
              highlights: [
                "広大な枯山水庭園「曲水の庭」と夜の出雲神楽公演＆巨石露天風呂と松葉がにバイキング",
                "毎分数百リットルの豊富な湧出量を誇る大浴場＆初冬のライトアップが輝く日本庭園",
                "松葉がに＆しまね和牛ステーキ・仁多米コシヒカリを味わう豪華冬バイキング"
              ]
            },
            {
              id: 5,
              name: "玉造温泉　玉造国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44944/44944.jpg",
              rating: 3.49,
              reviews: 755,
              price: "¥6,600〜",
              access: "ＪＲ玉造温泉下車、タクシー５分（無料送迎有）／山陰自動車道松江玉造ＩＣより車で１０分／出雲空港からタクシー３０分",
              special: "宍道湖畔に佇む温泉宿です。１００％の天然かけ流し温泉と、旬の食材を充分お楽しみいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44944%2F44944.html",
              story: "玉造温泉街から少し離れ、宍道湖の湖畔に建つ唯一の温泉リゾート「玉造温泉 玉造国際ホテル」。全室レイクビューを誇り、宍道湖の雄大な水面と初冬の澄み渡る空、そして遠くの大山を望む絶景ロケーションが魅力です。展望大浴場「湖眺の湯」では、玉造の名湯に浸かりながら、夕暮れどきに空と湖面が茜色から深い藍色へと染まりゆく「宍道湖の夕日」を心ゆくまで鑑賞できます。静けさと眺望を重視する旅人から熱い支持を集めています。",
              roomTip: "宍道湖を一望するバルコニー付きのレイクビュー和洋室。朝には湖面を渡る野鳥の姿や朝霧の幻想的なグラデーションが眼前に広がります。",
              gourmetTip: "宍道湖七珍（しんじこしっちん）と冬の味覚を融合させた創作ディナー。山陰沖獲れの松葉がに料理、大粒の大和しじみ鍋、島根和牛のグリルなど、湖と海の恵みを一度に堪能できます。",
              highlights: [
                "宍道湖畔に佇む唯一の絶景レイクビュー温泉ホテル＆展望露天風呂から眺める夕日パノラマ",
                "朝霧と夕暮れが織りなす宍道湖の絶景パノラマ＆静寂に包まれた上質なリゾートステイ",
                "宍道湖七珍としじみ小鍋＆山陰沖松葉がにと島根和牛グリルの創作ディナー"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
          alt="出雲・玉造温泉の神の湯美肌露天風呂と冬の山陰松葉がに・神在月参拝"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 text-indigo-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-800/50">
            <Eye className="w-4 h-4 text-indigo-300" />
            <span>11月・12月限定 出雲大社神在月参拝と天然化粧水名湯＆松葉がに特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月玉造温泉の初冬美肌湯と松葉がに】<br className="hidden sm:inline" />
            出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉蟹＆しまね和牛の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            全国の神々が集う11月の出雲「神在月」。千三百年前に風土記で「神の湯」と讃えられた日本最古の美肌温泉・玉造温泉。11月解禁の山陰松葉がにと極上しまね和牛に舌鼓を打ち、心身の美と良縁を祈る至高の初冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 島根県松江市玉湯町玉造</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Izumo Kamiarizuki & Tamatsukuri Lore</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                八百万の神が降り立つ初冬の出雲。千三百年湧き続ける天然の化粧水
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            日本神話のふるさと、島根県出雲地方。旧暦の10月（現在の11月頃）になると、日本中の八百万の神々が出雲大社へと参集し、人々の運命や縁結びについて合議を行うと伝えられています。そのため全国では「神無月」と呼ばれるこの月を、出雲では敬意を込めて「神在月（かみありづき）」と呼び習わしてきました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            その出雲大社から車で約40分、玉湯川の清流沿いに広がるのが「玉造温泉（たまつくりおんせん）」です。奈良時代初期（西暦733年）に編纂された『出雲国風土記』には、「ひとたび濯（すす）げば形容端正（かたちきらきら）しく、ふたたび浴すれば万（よろず）の病ことごとく除（い）ゆ」と記録され、ひとたび湯に入れば肌が輝き美しくなり、二度入れば万病が癒えると称賛されました。現代の科学的分析でも、天然の美肌成分メタケイ酸が130mg/L以上と基準値の倍以上含まれ、まさに「天然の化粧水そのもの」であることが証明されています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに11月・12月の玉造温泉は、美食の面でも年間最高のクライマックスを迎えます。毎年11月6日に漁が解禁される山陰の冬の王者「松葉がに」。境港や大田港から直送される新鮮な活蟹が宿の厨房に届けられ、甘美な蟹刺し、香ばしい甲羅焼き、芳醇な蟹すき鍋として振る舞われます。神聖な神在月の空気に包まれ、美肌の湯に浸かり、極上の松葉がにとしまね和牛を味わう時間は、まさに一生ものの思い出となるはずです。
          </p>
          
          <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-indigo-700" />
                11月・12月玉造温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                出雲大社神在祭の厳かな特別参拝・メタケイ酸豊富な日本最古の美肌温泉・11月解禁の山陰活松葉がに会席・しまね和牛フィレ・玉湯川の足湯＆玉作湯神社祈願
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-indigo-800 hover:bg-indigo-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#kamiarizuki-feature" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>1. 神在月の出雲大社と玉造温泉：神話の地で叶える良縁と心身浄化</span>
            </a>
            <a href="#bihada-science" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>2. 科学が立証した「天然の化粧水」：メタケイ酸と保湿メカニズム</span>
            </a>
            <a href="#matsuba-crab" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>3. 11月解禁！山陰松葉がにの贅としまね和牛の美食饗宴</span>
            </a>
            <a href="#hotels" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい玉造温泉の厳選名宿5選</span>
            </a>
            <a href="#town-spots" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>5. 玉湯川の足湯・玉作湯神社・美肌ボトル散策スポット</span>
            </a>
            <a href="#itinerary" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 出雲大社参拝〜玉造温泉 王道モデルコース</span>
            </a>
            <a href="#faq" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬の参拝服装・アクセス</span>
            </a>
          </nav>
        </section>

        {/* Section 1: Kamiarizuki Feature */}
        <section id="kamiarizuki-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Spiritual Season</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                出雲大社の神在月と玉造温泉の深遠な結びつき
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            出雲大社において毎年旧暦10月10日の夜に行われる「神迎祭（かみむかえさい）」。稲佐の浜に篝火が焚かれ、全国から集う神々を神籬（ひもろぎ）にお迎えする光景は、日本人の精神性の原点を想起させる荘厳さに満ちています。続く一週間の「神在祭」の期間中、境内は一年で最も神聖な気で満たされます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            古代より玉造の地は、三種の神器のひとつである「八尺瓊勾玉（やさかにのまがたま）」の原産地として知られ、出雲大社に勾玉を献上してきた歴史を持ちます。出雲大社で良縁や幸福を祈願した後に玉造温泉へ向かい、神の湯で身を清める参拝ルートは、古来より「心願成就の特等席」として大切に受け継がれてきました。初冬の冷気の中、温泉街を流れる玉湯川の湯煙を眺めながら歩く時間は、日々の雑念を洗い流す特別なリトリートとなります。
          </p>
        </section>

        {/* Section 2: Bihada Science */}
        <section id="bihada-science" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Skincare Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                メタケイ酸含有量130mg超！科学が解明した美肌のメカニズム
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            玉造温泉の泉質は、ナトリウム・カルシウム-硫酸塩・塩化物温泉（低張性弱アルカリ性高温泉）。肌の古い角質を優しく軟化させて洗い流す弱アルカリ性の性質を持ちながら、硫酸塩成分が角質層に水分をたっぷりと送り込み、さらに塩化物成分が薄い塩のベールを形成して水分の蒸発を防ぎます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに特筆すべきは、コラーゲンの生成を助け肌のキメを整える天然の保湿成分「メタケイ酸」が1リットル中に130mg以上も溶け込んでいる点です。大手製薬メーカーの肌測定調査でも、「玉造温泉に一度浸かるだけで肌の角層水分量が通常の数倍に跳ね上がる」という客観的データが実証されています。入浴後は乳液やクリームがいらないほど肌がモチモチと潤い、翌朝の化粧のりの良さに驚く女性客が絶えません。
          </p>
        </section>

        {/* Section 3: Matsuba Crab */}
        <section id="matsuba-crab" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Winter King Crab</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                境港・大田港水揚げ！11月解禁の活松葉がにとしまね和牛
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山陰の初冬を告げる最大の風物詩が「松葉がに」です。山陰沖の深海で育ったオスのズワイガニは、太い脚にぎっしりと身が詰まり、噛みしめるほどに繊細な甘みが口いっぱいに広がります。境港や大田港の競りから直行で届けられる活松葉がには、鮮度抜群だからこそできる「蟹刺し」が絶品。氷水で花が咲いたように開いた身は、とろけるような食感と芳醇な甘みをもたらします。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、全国和牛能力共進会で最高賞を受賞した実績を持つ「しまね和牛」も、冬の玉造温泉で外せない美食。上質でサラリとした脂と濃厚な赤身のコクが際立ち、松葉がにの繊細な風味と見事なコントラストを描きます。出雲の地酒「王祿」や「李白」とのマリアージュも格別です。
          </p>
        </section>

        {/* Hotel List Section */}
        <section id="hotels" className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
              <span>Rakuten Travel Official API Verified</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11月・12月に泊まりたい玉造温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。神の湯と松葉がに会席で高評価を獲得している宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-xs font-bold">
                      厳選第 {hotel.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/50">
                          {hotel.special}
                        </span>
                        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-xs text-stone-400 font-normal">({hotel.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-600">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-stone-800 whitespace-nowrap">客室の魅力:</span>
                          <span>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-stone-800 whitespace-nowrap">冬の美食:</span>
                          <span>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="bg-stone-50 rounded-xl p-3 space-y-1.5 border border-stone-100">
                        <span className="text-[11px] font-bold text-stone-700 block">宿の注目ポイント</span>
                        <ul className="space-y-1 text-xs text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-extrabold text-stone-900">{hotel.price}</span>
                        <span className="text-[11px] text-stone-500 ml-1">（2名1室利用時）</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-800 hover:bg-indigo-900 text-white font-bold text-sm shadow-md transition-all duration-200 group"
                      >
                        <span>プラン一覧・空室確認</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Town Spots */}
        <section id="town-spots" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Town Walking & Shrines</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                玉湯川の足湯・玉作湯神社・美肌ボトル散策
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            玉造温泉街は、玉湯川を挟んで約2kmにわたり風情ある旅館やショップが連なる徒歩散策にぴったりの温泉街です。川辺には自然石を配した無料の「川辺の足湯」が点在し、散策の途中に足を浸して温まることができます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">玉作湯神社（たまつくりゆじんじゃ）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                境内に鎮座する「願い石」に、授与所でいただく「叶い石」を触れ合わせて祈願し、自分だけの御守りを作る人気のパワースポット。触れ合わせる瞬間に願いを込めると、強い御加護が授かるとされています。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">湯薬師広場の「美肌温泉ボトル」</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                源泉が湧き出る「たらい湯」では、専用のスプレーボトル（200円）を購入し、新鮮な神の湯をそのまま詰めて持ち帰ることができます。天然の化粧水としてお土産にも大人気です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Itinerary */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Suggested Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 出雲大社参拝〜玉造温泉 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-indigo-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-indigo-800 uppercase tracking-wider">【1日目】出雲大社神在祭参拝〜玉造温泉チェックイン</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                11:00 出雲縁結び空港到着 → 連絡バスで出雲大社へ参拝
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                勢溜の大鳥居をくぐり、松の参道を進んで拝殿・御本殿へ。神在月の清冽な空気に包まれて二礼四礼一礼の参拝。門前の出雲そばを堪能。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:30 玉造温泉へ移動 → 老舗旅館にチェックイン・美肌の湯入浴
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                メタケイ酸豊富な源泉露天風呂で旅の疲れを癒やし、角質を整えてもっちり素肌へ。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 山陰活松葉がに＆しまね和牛の豪華ディナー会席
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                甘美な蟹刺し、甲羅みそ焼き、茹でがにを地酒とともに味わい、贅沢な出雲の夜に浸る。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】玉作湯神社祈願〜松江城下町と宍道湖の冬景色</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:30 朝の露天風呂入浴 → 宍道湖しじみ汁付き朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                濃厚なしじみの旨味が身体に染み渡る朝食で活力をチャージ。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:00 玉作湯神社で「叶い石」祈願 ＆ 温泉街足湯散歩
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                願い石に叶い石を触れ合わせて縁結び祈願。美肌温泉ボトルにお湯を汲み、国宝松江城や宍道湖へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Traveler's FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                よくある質問（FAQ）と初冬の旅のアドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-indigo-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Guides */}
        <section className="bg-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい山陰・中国地方の冬・雪見・カニ温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              11月・12月ならではの旬の味覚や雪景色を堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-tottori-kaike-onsen-matsuba-crab-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">鳥取・皆生</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">皆生温泉 日本海一望オーシャンビュー露天と松葉ガニの宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">鳥取・三朝</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">三朝温泉 世界屈指のラドン温泉と鳥取松葉ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">山口・長門湯本</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">長門湯本温泉 音信川冬灯りと下関直送活本とらふぐの宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">兵庫・城崎</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">城崎温泉 七つの外湯巡りと本場松葉ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">福井・あわら</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">あわら温泉 庭園露天風呂と黄色いタグ付き越前がにの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
