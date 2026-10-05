import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart, Clock, Footprints, ShoppingBag
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月阿智村の日本一の星空ナイトツアー】昼神温泉の極上美肌湯と南信州冬の味覚宿5選",
  description: "環境省が認定した「日本一星が輝いて見える村」長野県阿智村。11月・12月は空気が最も澄み渡り、息をのむ満天の天の川と星座が広がるベストシーズン。「美肌の湯」として名高いpH9.7の昼神温泉と、信州プレミアム牛や炉端会席を堪能する感動の星空冬旅ガイド。",
  keywords: '阿智村 星空ツアー 宿泊 11月 12月, 昼神温泉 旅館 冬, 阿智村 ナイトツアー ホテル, 長野 星空 温泉, 昼神温泉 美肌湯, ヘブンスそのはら 冬, 昼神温泉 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-achimura-hirugami-starry-sky-stay/",
  },
  openGraph: {
    title: "【11・12月阿智村の日本一の星空ナイトツアー】昼神温泉の極上美肌湯と南信州冬の味覚宿5選",
    description: "環境省が認定した「日本一星が輝いて見える村」長野県阿智村。11月・12月は空気が最も澄み渡り、息をのむ満天の天の川と星座が広がるベストシーズン。「美肌の湯」として名高いpH9.7の昼神温泉と、信州プレミアム牛や炉端会席を堪能する感動の星空冬旅ガイド。",
    url: 'https://croud-travel.com/winter-nagano-achimura-hirugami-starry-sky-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月阿智村の日本一の星空ナイトツアー】昼神温泉の極上美肌湯と南信州冬の味覚宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月阿智村の日本一の星空ナイトツアー】昼神温泉の極上美肌湯と南信州冬の味覚宿5選",
    description: "環境省が認定した「日本一星が輝いて見える村」長野県阿智村。11月・12月は空気が最も澄み渡り、息をのむ満天の天の川と星座が広がるベストシーズン。「美肌の湯」として名高いpH9.7の昼神温泉と、信州プレミアム牛や炉端会席を堪能する感動の星空冬旅ガイド。",
  }
};

export default function HirugamiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-nagano-achimura-hirugami-starry-sky-stay#article",
        "headline": "【11・12月阿智村の日本一の星空ナイトツアー】昼神温泉の極上美肌湯と南信州冬の味覚宿5選",
        "description": "環境省が認定した「日本一星が輝いて見える村」長野県阿智村。11月・12月は空気が最も澄み渡り、息をのむ満天の天の川と星座が広がるベストシーズン。「美肌の湯」として名高いpH9.7の昼神温泉と、信州プレミアム牛や炉端会席を堪能する感動の星空冬旅ガイド。",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.com/winter-nagano-achimura-hirugami-starry-sky-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-nagano-achimura-hirugami-starry-sky-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "なぜ11月・12月の冬期が阿智村の星空観賞に最も適しているのですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬は夏に比べて大気中の水蒸気や塵が極めて少なく、空気が乾燥して澄み切っているため、光の透過率が年間で最高になります。さらに冬の夜空にはオリオン座をはじめとする1等星が多く輝き、肉眼でも満天の星空や天の川がくっきりと見渡せます。標高1400mの富士見台高原ヘブンスそのはらで開催される「ウインターナイトツアー」は息をのむ美しさです。"
            }
          },
          {
            "@type": "Question",
            "name": "昼神温泉の「美肌の湯」にはどのような特徴・泉質効果がありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "昼神温泉の泉質は単純硫黄温泉（アルカリ性低張性温泉）で、pH値が9.7という国内有数の強アルカリ性を誇ります。古い角質を落とし肌の新陳代謝を促す石鹸のようなクレンジング作用と、ナトリウムイオンによる保湿効果を兼ね備えており、入浴後は美容液を塗ったかのようにスベスベ・ツルツルの素肌へと整えてくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "星空ナイトツアー参加時の必須の服装や持ち物・防寒具は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山頂のヘブンスそのはらは標高約1400mに位置し、11月〜12月の夜間は気温が氷点下（マイナス5℃以下）に達します。スキーウェアや厚手のダウンコート、フリース、ヒートテックの重ね着に加え、ニット帽、厚手の手袋、ネックウォーマー、防寒ブーツ、貼るカイロが必須です。また、芝生や雪の上に寝転がって観賞するための防水レジャーシートやブランケットがあると重宝します。"
            }
          },
          {
            "@type": "Question",
            "name": "星空ツアーのチケット予約や宿からのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬期のウインターナイトツアーは事前日時指定予約制が基本です。昼神温泉の多くの宿泊施設では「ツアーチケット確約＋会場までの無料送迎バス付き宿泊プラン」を用意しているため、個人で手配するよりも宿の提携パックを利用するのが最も確実で移動も楽です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-nagano-achimura-hirugami-starry-sky-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "昼神温泉　湯元ホテル　阿智川",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39234%2F39234.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "昼神温泉　日長庵　桂月",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5624%2F5624.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "昼神温泉郷　懐石と炉ばたの宿　吉弥",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51693%2F51693.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "昼神温泉　信州公共の宿　鶴巻荘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153619%2F153619.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "昼神温泉　ひるがみの森",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5978%2F5978.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "昼神温泉　湯元ホテル　阿智川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39234/39234.jpg",
              rating: 4.09,
              reviews: 1114,
              price: "¥8,800〜",
              access: "ＪＲ飯田線　飯田駅下車より路線バスにて３０分／中央道　飯田ＩＣ／園原ＩＣ",
              special: "信玄ゆかりの湯として知られる名湯。南信州最大級の庭園露天風呂と洞窟風呂に大浴場で美人の湯を愉しむ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39234%2F39234.html",
              story: "昼神温泉郷の中心を流れる阿智川のほとりに佇む、地域屈指のスケールを誇る名門宿「湯元ホテル 阿智川」。敷地内に自前の源泉を有し、開放感あふれる日本庭園に囲まれた巨大な野天風呂「滝の湯」や、野趣あふれる洞窟風呂など多彩な湯処で湯浴み三昧を楽しめます。お湯はpH9.7の強アルカリ性単純温泉で、肌の汚れや角質を優しく落とし、驚くほどスベスベの感触に仕上がる美人の湯。星空ナイトツアーの会場（ヘブンスそのはら）への送迎バスやチケット付きプランも充実しており、極寒の山頂で満天の星を仰いだ後、熱々の温泉に身を沈めて手足を伸ばす瞬間の幸福感は格別です。",
              roomTip: "清流阿智川を望む広々とした和室がおすすめ。川のせせらぎが心地よいBGMとなり、夜には窓から南信州の澄んだ夜空を見上げることができます。",
              gourmetTip: "南信州の豊かな味覚を散りばめた季節会席。美しい霜降りの信州プレミアム牛肉の鉄板焼きや、清流で育った信州サーモンのお造り、香り高い信州蕎麦を堪能できます。",
              highlights: [
                "巨岩を配した巨大野天風呂＆滝の湯・洞窟風呂など湯処が充実",
                "星空ナイトツアー送迎バス＆チケット付き宿泊プランが充実",
                "信州プレミアム牛の鉄板焼きと信州サーモン・蕎麦の美食膳"
              ]
            },
            {
              id: 2,
              name: "昼神温泉　日長庵　桂月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5624/5624.jpg",
              rating: 4.24,
              reviews: 594,
              price: "¥14,300〜",
              access: "JR飯田駅より無料送迎（要事前予約最終17:00） 中央道飯田山本ICより10分。園原ICより10分。",
              special: "【楽天トラベルブロンズアワード2024受賞】歴史ある老舗料亭を姉妹館に持つ料理自慢の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5624%2F5624.html",
              story: "数寄屋造りの洗練された和の美意識が館内を満たす高級旅館「日長庵 桂月」。ほのかに漂う白檀の香りと、随所に飾られた野の花や掛け軸が、訪れる旅人の心を静かに和ませます。全室が阿智川の渓流に面しており、冬には雪化粧をまとった南信州の山々と澄んだ川の流れをプライベートに楽しめます。大浴場と庭園露天風呂には昼神の名湯が滔々と注がれ、湯船からは冬枯れの木々と満天の星空が望めます。夜には宿のテラスで天体望遠鏡による星空観察会が開催される日もあり、静寂の中で星の輝きに浸りたいご夫婦や記念日旅行に最高の選択肢です。",
              roomTip: "最上階の特別室や次の間付き和室は、開放的な広縁から阿智川の雪景色と星空を一望。贅沢な大人の隠れ家空間が広がります。",
              gourmetTip: "京都で修行を積んだ料理長が腕を振るう本格京風会席。信州のブランド肉や旬の根菜、自家製の手打ち蕎麦などを、目にも鮮やかな器で供してくれます。",
              highlights: [
                "数寄屋造りの格調高い佇まい＆全室阿智川ビューと星空テラス",
                "京都仕込みの本格京風会席と落ち着いた大人の隠れ家ステイ",
                "白檀の香り漂う静寂の館内と専任スタッフのきめ細やかなおもてなし"
              ]
            },
            {
              id: 3,
              name: "昼神温泉郷　懐石と炉ばたの宿　吉弥",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51693/51693.jpg",
              rating: 4.15,
              reviews: 572,
              price: "¥16,600〜",
              access: "中央道　名古屋方面から：園原ＩＣより約１０分　　東京方面から：飯田山本ＩＣより約１０分",
              special: "昼神温泉のとろりとした美肌の湯と炉ばた／懐石料理が自慢の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51693%2F51693.html",
              story: "南信州の古き良き伝統と炭火の温もりに包まれる「懐石と炉ばたの宿 吉弥」。この宿の真骨頂は、旅情をそそる囲炉裏端でいただく炭火焼き料理です。赤々と燃える炭火でじっくりと焼き上げられる名物の五平餅や、香ばしい岩魚の塩焼き、信州牛の串焼きなど、出来立て熱々の滋味が五感を刺激します。温泉はとろみのある昼神温泉の美肌泉を引いた大浴場と庭園露天風呂を完備。星空ナイトツアーのオフィシャル提携宿としても知られ、専用バス送迎や防寒グッズの貸し出しなど、冬の星空観賞をトータルでサポートしてくれる頼もしい湯宿です。",
              roomTip: "民芸調の落ち着いた純和室は畳の香りが心地よく、炭火の余韻に浸りながらぐっすりと旅の疲れを癒やすことができます。",
              gourmetTip: "なんといっても名物の炉ばた会席。香ばしい胡麻味噌のタレがたまらない自家製五平餅と、ジューシーな信州牛、季節の信州鍋が冷えた身体を芯から温めてくれます。",
              highlights: [
                "囲炉裏の炭火で焼く名物五平餅と岩魚＆星空ツアー公式提携宿",
                "防寒着貸し出しや送迎など冬の星空観賞サポートが万全",
                "香ばしい炭火の香りに包まれる夕食と昼神名湯の内湯・露天風呂"
              ]
            },
            {
              id: 4,
              name: "昼神温泉　信州公共の宿　鶴巻荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153619/153619.jpg",
              rating: 4.36,
              reviews: 294,
              price: "¥10,000〜",
              access: "天竜峡駅よりお車にて約３０分（車でお迎えあり）",
              special: "やわらかな畳敷きの浴場で和の粋と深いやさしさに包まれる、ツルツルの温泉と豊かな自然に囲まれた純和風宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153619%2F153619.html",
              story: "昼神温泉街のやや高台に位置し、温かなもてなしと良心的な価格設定でリピーターに愛される「信州公共の宿 鶴巻荘」。この宿最大の特色は、全国的にも極めて珍しい「飲泉許可」を取得した自家源泉を引いている点です。浴槽を満たす新鮮な強アルカリ性温泉は、浸かって美肌、飲んで胃腸の調子を整えるという内外からのダブルの効果が期待できます。館内は清潔で家庭的な温かさがあり、阿智村の星空ツアーへのアクセスも良好。冬の南信州を一人旅やグループで気軽に、かつ本物の温泉力で楽しみたい方に最適です。",
              roomTip: "明るい日差しの差し込む南向きの和室からは、遠く南アルプスの山並みが望め、朝の澄んだ空気とともに爽快な目覚めを迎えられます。",
              gourmetTip: "手作りにこだわった南信州の郷土料理膳。契約農家の朝採れ野菜や山菜、地元銘柄豚の陶板焼きなど、滋味深く飽きのこない家庭的な美味しさが並びます。",
              highlights: [
                "飲泉許可を持つ自家源泉＆浸かって飲んで整う高コスパな名宿",
                "家庭的な南信州郷土料理とpH9.7のとろとろ美人の湯",
                "昼神温泉街の散策や朝市へも徒歩圏内の便利なロケーション"
              ]
            },
            {
              id: 5,
              name: "昼神温泉　ひるがみの森",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5978/5978.jpg",
              rating: 4.39,
              reviews: 893,
              price: "¥7,700〜",
              access: "中央自動車道・園原ICより車にて10分(名古屋・関西方面)、中央自動車道・飯田山本ICより車にて10分(関東・長野方面)",
              special: "日本一の星空ナイトツアー：当日の天気次第でもチケットキャンセルが対応可な宿★彡",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5978%2F5978.html",
              story: "昼神温泉の高台に位置し、豊かな自然と南アルプスのパノラマビューが自慢の大型高原リゾート「ひるがみの森」。館内には通年利用できる屋内温水プール（ウォータースライダー付き）を備えており、三世代旅行やファミリーにも大人気です。温泉は高台ならではの爽快な眺望が広がる庭園大露天風呂で、夜には頭上に広がる天然のプラネタリウムのような満天の星空を眺めながらの入浴が叶います。星空ナイトツアー会場へのアクセスも良く、広々としたラウンジや売店も充実しており、冬のリゾート気分をアクティブに満喫できます。",
              roomTip: "最上階の高層階和洋室からは、遮るもののない南信州の山々と星空のパノラマが一望でき、リゾート感満点の滞在が約束されます。",
              gourmetTip: "信州牛のステーキかすき焼きを選べる会席プランが一番人気。信州そばや旬の山海の幸を彩り豊かに盛り込んだボリューム満点の夕食です。",
              highlights: [
                "高台から南アルプスと星空を一望する庭園露天風呂＆屋内温水プール",
                "ファミリー・三世代旅行に最適＆信州牛ステーキ付きプラン",
                "見晴らし抜群の高層階客室と南信州の澄み切ったパノラマ絶景"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
          alt="阿智村の冬の満天の星空・澄み渡る夜空に輝く無数の星屑と天の川"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/90 text-indigo-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-700/40">
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span>11月・12月限定 日本一の星空＆美肌湯特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月阿智村の日本一の星空ナイトツアー】<br className="hidden sm:inline" />
            昼神温泉の極上美肌湯と南信州冬の味覚宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            環境省が認定した「日本一星が輝いて見える場所」。空気が最も澄み切る初冬、標高1400mの山頂に広がる満天の星の海へ。冷えた体をpH9.7のとろとろ美肌温泉で解きほぐし、囲炉裏の炭火料理と信州牛に舌鼓を打つ極上の冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 長野県下伊那郡阿智村（昼神温泉郷）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Starry Sky & Silk Waters</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                手の届きそうな満天の星屑と、とろけるような強アルカリ美肌湯
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            長野県の南西端、南アルプスと中央アルプスに抱かれた山里・阿智村。環境省が実施する「全国星空継続観察」において「星が最も輝いて見える場所」第1位に認定されたこの地は、星空ファンの聖地として全国にその名を轟かせています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            特に11月から12月にかけての初冬は、1年の中で最も空気が乾燥して透明度が高まり、星空観賞に最高の黄金期を迎えます。ゴンドラに乗って標高1,400mの「ヘブンスそのはら」山頂へと上り、場内の照明が一斉に消灯されるカウントダウンの瞬間。視界を埋め尽くす無数の星屑と、銀の砂を撒き散らしたかのような天の川が目の前に飛び込んできます。冬の澄天にギラギラと輝くオリオン座やおおいぬ座のシリウス、冬の大三角。息を呑む静寂のなかで見上げる星空は、言葉を失うほどの感動をもたらします。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして、氷点下の山頂で冷え切った身体を迎えてくれるのが、阿智村が誇る名湯「昼神温泉」です。泉質はpH9.7という国内でも稀に見る強アルカリ性温泉。お湯に入った瞬間に肌がツルンと滑らかになり、古い角質を落としてみずみずしい潤いを与えてくれる「美人の湯」です。夕食には、囲炉裏の炭火でこんがりと香ばしく焼き上げる名物「五平餅」や信州プレミアム牛の鉄板焼き。満天の星と極上の温泉、温かな郷土の味が、冬の寒さを極上の癒やしへと変えてくれます。
          </p>
          <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-indigo-700" />
                星空ナイトツアーは宿の「送迎＆チケット付きプラン」が鉄則
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                夜間の山道運転やチケット完売の心配なし。昼神温泉の提携旅館なら宿から会場までの専用直行バスで安心・快適に楽しめます。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-indigo-800 hover:bg-indigo-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選の昼神名宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の冬の阿智村で体験したい3つの奇跡
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">標高1400mの満天プラネタリウム</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                ゴンドラで上がる山頂のウインターナイトツアー。一斉消灯で現れる冬のダイヤモンドと天の川の圧倒的な光量は息をのむ美しさです。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">pH9.7の強アルカリ性「絹肌の湯」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                まるでとろみのある美容液に浸かるような滑らかな肌触り。角質をやさしく落とし、湯上がりはしっとりモチモチの美肌が完成します。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">囲炉裏の五平餅と信州牛会席</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                炭火で香ばしく炙るくるみ味噌だれの五平餅と、柔らかく甘みのある信州プレミアム牛。南信州の滋味あふれる冬の味覚を心ゆくまで。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Recommended Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月に泊まりたい昼神温泉の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルの最新空室状況・宿泊プランと連携。星空ツアー提携宿から囲炉裏料理が自慢の湯宿までを厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel, index) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-stone-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs">
                          第{index + 1}選
                        </span>
                        <div className="flex items-center gap-1 text-indigo-500 text-xs font-bold">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-stone-400 block">宿泊料金の目安（1名あたり）</span>
                      <span className="text-2xl font-extrabold text-indigo-700">{hotel.price}</span>
                    </div>
                  </div>

                  {/* Image & Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                      <Image
                        src={hotel.img}
                        alt={hotel.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/70">
                          <h4 className="text-xs font-bold text-indigo-800 flex items-center gap-1.5 mb-1">
                            <Coffee className="w-3.5 h-3.5" /> 客室選びのポイント
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {hotel.roomTip}
                          </p>
                        </div>
                        <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/70">
                          <h4 className="text-xs font-bold text-rose-800 flex items-center gap-1.5 mb-1">
                            <Utensils className="w-3.5 h-3.5" /> 冬の料理・グルメのこだわり
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {hotel.gourmetTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="bg-indigo-50/50 rounded-2xl p-4 sm:p-5 border border-indigo-100/80 space-y-2.5">
                    <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      この宿のおすすめポイント
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {hotel.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <span className="text-indigo-600 font-bold">✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-stone-500 italic">
                      ※新月期や週末の星空ツアー付きプランは人気が高いため、早めの予約確保がおすすめです。
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-800 hover:bg-indigo-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
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

        {/* 1泊2日 星空ナイトツアー満喫モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の阿智村を満喫する「1泊2日 日本一の星空＆美肌湯モデルコース」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {/* Day 1 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-indigo-200">
                <span className="px-3 py-1 rounded-full bg-indigo-800 text-white font-bold text-xs">1日目</span>
                <h3 className="font-bold text-stone-900 text-base">美肌温泉で整い、標高1400mの星空の海へ</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">14:00</span>
                  <div>
                    <strong>昼神温泉郷に到着＆阿智川沿い散策</strong>
                    <p className="text-stone-500 text-xs mt-0.5">中央道・飯田山本ICから約10分。清流阿智川沿いの温泉街を歩き、足湯「ふれあいの湯」で足先からポカポカに。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">15:00</span>
                  <div>
                    <strong>チェックイン＆pH9.7の強アルカリ美肌湯</strong>
                    <p className="text-stone-500 text-xs mt-0.5">とろとろの美容液のような天然温泉に浸かり、長旅の疲れをリセット。夜の防寒に備えて体の芯まで温めます。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">17:30</span>
                  <div>
                    <strong>早めの夕食：囲炉裏料理または信州牛会席</strong>
                    <p className="text-stone-500 text-xs mt-0.5">香ばしい五平餅や信州プレミアム牛の鉄板焼きに舌鼓。夜のツアーに備えてお腹を満たし、完全防寒スタイルへ着替え。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">19:30</span>
                  <div>
                    <strong>宿の専用送迎バスでヘブンスそのはらへ出発</strong>
                    <p className="text-stone-500 text-xs mt-0.5">チケットの手配や雪道の運転の心配なく、提携送迎バスでゴンドラ山麓駅へスムーズにアクセス。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">20:30</span>
                  <div>
                    <strong>山頂ウインターナイトツアー・カウントダウン消灯</strong>
                    <p className="text-stone-500 text-xs mt-0.5">標高1400mの山頂で一斉に明かりが消えた瞬間、頭上に広がる満天の天の川と冬の大三角。息をのむ感動体験。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">22:00</span>
                  <div>
                    <strong>宿へ帰着＆極寒から極楽へ！夜の温泉入浴</strong>
                    <p className="text-stone-500 text-xs mt-0.5">氷点下の星空観賞から帰還後、熱々の温泉に身を沈める至福のひととき。冷え切った手足がじんわり解けて快眠へ。</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-indigo-200">
                <span className="px-3 py-1 rounded-full bg-indigo-800 text-white font-bold text-xs">2日目</span>
                <h3 className="font-bold text-stone-900 text-base">昼神朝市の温もりと名勝天竜峡パノラマ</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">07:00</span>
                  <div>
                    <strong>昼神温泉名物「朝市」散策</strong>
                    <p className="text-stone-500 text-xs mt-0.5">朝市広場には地元農家のりんごや市田柿、手作りの漬物が並びます。元気なお母さんたちとの会話も旅の醍醐味。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">08:00</span>
                  <div>
                    <strong>信州サーモンと郷土小鉢の朝食</strong>
                    <p className="text-stone-500 text-xs mt-0.5">清らかな伏流水で育った信州サーモンのお刺身や温かい郷土鍋、炊きたてご飯をしっかり味わう健康的な朝。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">09:30</span>
                  <div>
                    <strong>チェックアウト＆名勝「天竜峡」へ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">車で約20分。国の名勝に指定された天竜川のダイナミックな渓谷。冬の澄んだ水と奇岩の絶景散策路を歩きます。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">11:00</span>
                  <div>
                    <strong>天龍峡大橋「そらさんぽ天龍峡」から空中散歩</strong>
                    <p className="text-stone-500 text-xs mt-0.5">高さ約80mの橋桁下に設けられた歩道から、真下を流れるエメラルドグリーンの天竜川と冬の山並みを見下ろす大興奮のパノラマ。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-indigo-800 shrink-0">12:30</span>
                  <div>
                    <strong>南信州の手打ち蕎麦ランチとお土産購入</strong>
                    <p className="text-stone-500 text-xs mt-0.5">新そばの香り高い十割蕎麦を堪能し、高級干し柿「市田柿」や星空クッキーを購入して帰路へ。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 泉質・温泉科学＆スキンケア */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700">
              <Footprints className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Onsen Science & Beauty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                pH9.7の強アルカリ美肌泉！昼神温泉の泉質秘密と効果的な入浴法
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-indigo-600" />
                全国屈指の強アルカリ性（pH9.7）と硫黄成分
              </h3>
              <p>
                一般的なアルカリ性温泉がpH8.5前後であるのに対し、昼神温泉はpH9.7という驚異的な数値を誇ります。皮脂や角質を素早く分解・乳化して落とす石鹸のような強力なクレンジング効果があります。
              </p>
              <p>
                さらに微量に含まれる硫黄成分がメラニンの生成を抑える働きを持つとされ、古い角質オフと肌のトーンアップをダブルで実感できる「美肌の奇跡の湯」として親しまれています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                星空ツアー前後のダブル入浴メソッド
              </h3>
              <p>
                星空ナイトツアー前の入浴では、身体の芯まで熱を届けて体温を上げておくことで、山頂での耐寒性が大幅にアップします。
              </p>
              <p>
                山頂から戻った後の入浴では、冷え切った末端の血管が急激に拡張するため、まずはぬるめのシャワーや足湯から始め、徐々に全身浴へと移行するのが心臓に負担をかけない賢い入浴法です。
              </p>
            </div>
          </div>
        </section>

        {/* お土産・ご当地スイーツ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Souvenirs & Delights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の阿智村・昼神温泉で手に入れたい厳選名物土産＆冬スイーツ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-[11px]">冬の最高峰</span>
              <h3 className="font-bold text-stone-900">南信州特産「市田柿」</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                初冬に仕上がる南信州を代表する高級干し柿。表面に吹いた白い粉（天然のブドウ糖）と、羊羹のように上品でもっちりとした甘みが絶品です。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-[11px]">美肌コスメ</span>
              <h3 className="font-bold text-stone-900">昼神温泉ミスト化粧水</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                源泉100％の天然アルカリ温泉水をそのままボトリングした完全無添加ミスト。お風呂上がりや乾燥する冬の肌に吹きかけるだけでプルプルに。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-[11px]">限定スイーツ</span>
              <h3 className="font-bold text-stone-900">阿智村 星空クッキー＆ショコラ</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                日本一の星空をモチーフにした星型の焼き菓子。満天の夜空をイメージしたパッケージは阿智村旅行の記念やお配りギフトとして大人気。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Starry Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Star Watching Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の阿智村星空ナイトツアー 完全攻略ガイド
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-indigo-600" />
                標高1400mの極寒対策！万全の装備リスト
              </h3>
              <p>
                11月〜12月の山頂会場は氷点下（マイナス3℃〜マイナス8℃）まで冷え込みます。スキーウェアなどの防風・保温性の高いアウター、厚手のフリース、インナータイツ、防寒ブーツが必須です。
              </p>
              <p>
                芝生の上に寝転がって星を見上げるため、地面からの冷気を遮断するアルミマットや厚手レジャーシート、ひざ掛けブランケット、貼るカイロ（靴用・背中用）を持参すると快適度が格段に上がります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                新月カレンダーと天候の選び方
              </h3>
              <p>
                満天の星や淡い天の川をより濃密に楽しむなら、月明かりの影響が少ない「新月」の前後1週間がベストタイミングです。月明かりがある日でも、月のクレーター観測や明るい1等星の輝きを楽しめます。
              </p>
              <p>
                冬の中央道は恵那山トンネル周辺などで雪道規制がかかることがあります。車でアクセスする場合はスタッドレスタイヤを装着し、安全運転を心がけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の阿智村・昼神温泉旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-indigo-700 font-extrabold">Q.</span>
                冬の星空ナイトツアーは雨や雪、曇りの場合はどうなりますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                雨天や降雪、厚い雲で星が見えない場合でも、会場のドーム施設内にて最新鋭のプロジェクションマッピングや星空解説プログラムが開催される場合があります。ただしゴンドラが強風等で運行不能となった場合は中止となります。最新の運行情報は当日の公式発表をご確認ください。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-indigo-700 font-extrabold">Q.</span>
                昼神温泉の朝市は冬でも開催されていますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                昼神温泉の朝市広場では、冬期も毎朝6時半頃（12月〜3月は7時頃）から開催されています。地元の新鮮な野菜やりんご、手作りの漬物、加工品などが並び、地元農家のお母さんたちとの温かな触れ合いを楽しめます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-indigo-700 font-extrabold">Q.</span>
                名古屋や東京からのアクセス経路と所要時間は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                名古屋方面からは中央自動車道で約1時間30分（園原ICまたは飯田山本IC利用）。東京方面からは中央道で約3時間30分です。高速バス利用の場合は「昼神温泉」バス停直通便やJR飯田駅経由の路線バスが運行されています。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-indigo-700 font-extrabold">Q.</span>
                南信州名物の「五平餅」の特徴と美味しい食べ方は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                南信州の五平餅は、炊きたてのご飯を半搗き（はんごろし）にして串に刺し、胡桃（くるみ）や胡麻、落花生をたっぷり使った秘伝の味噌ダレを塗って香ばしく炭火で焼き上げます。外はカリッと中はモチモチで、香ばしい甘辛味噌がクセになる冬の郷土の味です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Related Guides & Areas</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の旅をさらに広げる関連特集＆エリア別ガイド
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              日本全国・旅宿クラウドが厳選する、11月・12月の冬旅行特集や近隣エリアの温泉宿ガイドをチェック。
            </p>
          </div>

          {/* 関連特集リンクカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/winter-starry-sky-astrophotography"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-indigo-50/60 border border-stone-200 hover:border-indigo-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-100/80 px-2 py-0.5 rounded">天体観測特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-indigo-900 transition-colors">
                満天の冬星空と天体撮影が楽しめる全国の絶景温泉宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                人工の光が届かない山頂リゾートや高原露天風呂で仰ぐ満天の天の川。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-jigokudani-snow-monkey-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-indigo-50/60 border border-stone-200 hover:border-indigo-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">信州冬特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                地獄谷スノーモンキーと湯田中渋温泉郷の九湯めぐり
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                雪の中で温泉に浸かる野生のニホンザルと情緒豊かな外湯めぐり街。
              </p>
            </Link>

            <Link 
              href="/winter-clear-air-fuji-view-hotels"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-indigo-50/60 border border-stone-200 hover:border-indigo-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">絶景パノラマ</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                冬の澄天に輝く白銀の富士山絶景ホテル・温泉宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                1年で最も美しい雪化粧の富士山を客室露天やラウンジから独占する旅。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              長野県および甲信越・中部エリアのおすすめ温泉宿一覧
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/nagano" className="px-3 py-1.5 bg-stone-100 hover:bg-indigo-100 text-stone-700 hover:text-indigo-900 rounded-lg transition-colors font-medium">長野県の宿一覧</Link>
              <Link href="/prefectures/yamanashi" className="px-3 py-1.5 bg-stone-100 hover:bg-indigo-100 text-stone-700 hover:text-indigo-900 rounded-lg transition-colors font-medium">山梨県の宿一覧</Link>
              <Link href="/prefectures/gifu" className="px-3 py-1.5 bg-stone-100 hover:bg-indigo-100 text-stone-700 hover:text-indigo-900 rounded-lg transition-colors font-medium">岐阜県の宿一覧</Link>
              <Link href="/prefectures/shizuoka" className="px-3 py-1.5 bg-stone-100 hover:bg-indigo-100 text-stone-700 hover:text-indigo-900 rounded-lg transition-colors font-medium">静岡県の宿一覧</Link>
              <Link href="/prefectures/aichi" className="px-3 py-1.5 bg-stone-100 hover:bg-indigo-100 text-stone-700 hover:text-indigo-900 rounded-lg transition-colors font-medium">愛知県の宿一覧</Link>
              <Link href="/prefectures/gunma" className="px-3 py-1.5 bg-stone-100 hover:bg-indigo-100 text-stone-700 hover:text-indigo-900 rounded-lg transition-colors font-medium">群馬県の宿一覧</Link>
            </div>
          </div>
        </section>

      </main>
    </article>
  );
}
