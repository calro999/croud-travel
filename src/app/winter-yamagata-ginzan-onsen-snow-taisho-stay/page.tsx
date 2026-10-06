import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart, Clock, Footprints, ShoppingBag
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月銀山温泉の初雪と大正浪漫】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿5選",
  description: "11月下旬の初雪から12月の白銀世界へと移ろう山形・銀山温泉。銀山川沿いに立ち並ぶ大正ロマンの木造多層建築と、黄昏時に灯る温かなガス灯。雪景色を眺めながらの名湯三昧と、最高峰の黒毛和牛「雪降り和牛尾花沢」を味わう極上の冬旅ガイド。",
  keywords: '銀山温泉 宿泊 11月 12月, 銀山温泉 雪景色 旅館, 尾花沢牛 温泉 宿, 銀山温泉 大正ロマン 冬, 山形 雪見温泉, 銀山温泉 ガス灯, 銀山温泉 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamagata-ginzan-onsen-snow-taisho-stay/",
  },
  openGraph: {
    title: "【11・12月銀山温泉の初雪と大正浪漫】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿5選",
    description: "11月下旬の初雪から12月の白銀世界へと移ろう山形・銀山温泉。銀山川沿いに立ち並ぶ大正ロマンの木造多層建築と、黄昏時に灯る温かなガス灯。雪景色を眺めながらの名湯三昧と、最高峰の黒毛和牛「雪降り和牛尾花沢」を味わう極上の冬旅ガイド。",
    url: 'https://croud-travel.pages.dev/winter-yamagata-ginzan-onsen-snow-taisho-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月銀山温泉の初雪と大正浪漫】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月銀山温泉の初雪と大正浪漫】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿5選",
    description: "11月下旬の初雪から12月の白銀世界へと移ろう山形・銀山温泉。銀山川沿いに立ち並ぶ大正ロマンの木造多層建築と、黄昏時に灯る温かなガス灯。雪景色を眺めながらの名湯三昧と、最高峰の黒毛和牛「雪降り和牛尾花沢」を味わう極上の冬旅ガイド。",
  }
};

export default function GinzanWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-ginzan-onsen-snow-taisho-stay#article",
        "headline": "【11・12月銀山温泉の初雪と大正浪漫】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿5選",
        "description": "11月下旬の初雪から12月の白銀世界へと移ろう山形・銀山温泉。銀山川沿いに立ち並ぶ大正ロマンの木造多層建築と、黄昏時に灯る温かなガス灯。雪景色を眺めながらの名湯三昧と、最高峰の黒毛和牛「雪降り和牛尾花沢」を味わう極上の冬旅ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-yamagata-ginzan-onsen-snow-taisho-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-ginzan-onsen-snow-taisho-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "銀山温泉の初雪と積雪の時期はいつ頃ですか？11月や12月の雪景色はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "銀山温泉では例年11月中旬から下旬にかけて初雪が観測されます。本格的に木造建築の屋根や道路に雪が積もり、白銀の絶景が広がるのは12月上旬から中旬以降です。12月下旬になると積雪が1メートル前後に達することもあり、水墨画のような完璧な雪景色とガス灯のコントラストが楽しめます。11月中旬〜下旬は晩秋の落ち葉と粉雪が混ざり合う風情ある情景に出会えます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の銀山温泉へのアクセス方法と雪道運転の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の銀山温泉周辺は豪雪地帯のため、自家用車やレンタカーでの通行にはスタッドレスタイヤの装着が絶対必須です。道路凍結や吹雪によるホワイトアウトも頻発するため、冬期はJR奥羽本線（山形新幹線）大石田駅から路線バス「銀山はながさ号」を利用するか、各宿泊旅館の無料送迎バス（事前予約制）を利用するのが最も安全で確実です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬期に銀山温泉に宿泊する最大のメリットは何ですか？日帰り観光との違いは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "銀山温泉では混雑緩和のため、冬期の夕方以降に日帰り観光客の入場規制やシャトルバス運行制限が実施される場合があります。温泉街の旅館に宿泊していれば、日帰り客が去った後の静寂な夜のガス灯景観や、翌朝の誰もいない白銀の街並みを心ゆくまで独占して散策・撮影できるという圧倒的な特権があります。"
            }
          },
          {
            "@type": "Question",
            "name": "名物グルメ「尾花沢牛（雪降り和牛尾花沢）」とはどのようなお肉ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "尾花沢牛は山形県尾花沢市の厳しい冬の寒暖差を乗り越えて育つ最高級黒毛和牛です。特に冬の寒さに耐えるために身にまとう極上の霜降りは「粉雪のようなサシ」と称され、融点が低いため口に含んだ瞬間に甘みと旨味がジュワッと広がります。すき焼き、しゃぶしゃぶ、ステーキなど、宿ごとのこだわりの調理法で供されます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-ginzan-onsen-snow-taisho-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "銀山温泉　古勢起屋別館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111235%2F111235.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "銀山温泉　伝統の宿　古山閣",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137447%2F137447.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "銀山温泉　仙峡の宿　銀山荘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111234%2F111234.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "銀山温泉　滝と蕎麦の宿　瀧見舘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135388%2F135388.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "銀山温泉　旅館松本",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52933%2F52933.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "銀山温泉　古勢起屋別館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/111235/111235.jpg",
              rating: 4.25,
              reviews: 315,
              price: "¥34,650〜",
              access: "国道１３号線尾花沢市内よりお車にて３０分。 ＪＲ利用のお客様は１５:４５の送迎あり（要予約）",
              special: "『2011年度・お客様が選んだ4つ星以上の人気宿』大正浪漫の雪景色・銀山荘の露天風呂もご利用可能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111235%2F111235.html",
              story: "銀山温泉街のほぼ中央、銀山川の流れを間近に臨む「古勢起屋別館」は、大正から昭和初期の面影を色濃く残す木造四層構造の老舗旅館です。玄関をくぐると、磨き上げられた黒光りする廊下や格子窓、アンティークなステンドグラスが旅人をタイムスリップしたかのような非日常へと誘います。館内にはステンドグラスが美しいレトロな内湯「ほっこりの湯」「地下岩風呂」があり、源泉かけ流しの柔らかな湯がじんわりと身体を温めます。さらに宿泊者は、姉妹館である「仙峡の宿 銀山荘」の大浴場や雪見露天風呂、寝湯も無料で湯めぐり可能。夜の帳が下りる頃、窓辺の格子越しに眺めるガス灯の灯火と雪の舞は、息をのむほどの美しさです。",
              roomTip: "銀山川に面した川側客室（大正モダン和室）が圧倒的人気。窓を開ければ雪化粧した対岸の木造旅館群と川のせせらぎが目の前に広がります。",
              gourmetTip: "夕食は山形の豊かな冬の恵みを凝縮した和食会席。メインにはきめ細やかなサシと芳醇な甘みが特徴の地元名産「尾花沢牛」のしゃぶしゃぶやすき焼きが登場。地元の旬菜とともに山形銘酒で味わえます。",
              highlights: [
                "大正浪漫漂う木造四層構造＆川側客室からの雪景色ガス灯ビュー",
                "姉妹館「銀山荘」の広大な露天風呂や寝湯も無料で湯めぐり可能",
                "最高峰ブランド「尾花沢牛」のしゃぶしゃぶやすき焼き会席"
              ]
            },
            {
              id: 2,
              name: "銀山温泉　伝統の宿　古山閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/137447/137447.jpg",
              rating: 4.56,
              reviews: 314,
              price: "¥23,100〜",
              access: "大石田駅より尾花沢経由銀山行バスにて35分。送迎についてはプラン詳細をご覧ください。",
              special: "木造４階建ての宿。昔の空気が今も流れている・・・そんな感覚を味わいに来てみてはいかがでしょうか。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137447%2F137447.html",
              story: "大正元年に建てられた木造三階建ての歴史を誇る「伝統の宿 古山閣」。建物の外壁2階部分には、左官職人の名工が手掛けた四季の鏝絵（こてえ）が今なお鮮やかに残り、銀山温泉を象徴する歴史的景観の一部となっています。館内には落ち着いた和の風情が漂い、随所に配された古民具や木の温もりが旅の緊張をほぐします。浴室はすべて源泉かけ流しで、館内には風情ある内湯のほか、空いていれば何度でも自由に鍵をかけて利用できる2つの無料貸切風呂を完備。しんしんと雪が降り積もる冬の夜、湯けむりの中で誰にも邪魔されずに名湯を堪能できます。新館「クラシコ」のイタリアンオーベルジュプランも近年高い注目を集めています。",
              roomTip: "銀山川を望む街並み側の客室指定プランがおすすめ。夕暮れ時にガス灯が灯り、川面がオレンジ色に照らされる瞬間を部屋の温もりの中から独占できます。",
              gourmetTip: "伝統の和会席では、山形が誇る極上肉「尾花沢牛の温泉湯砂蒸し」やローストビーフ、山菜やきのこなど地元の滋味あふれる料理が一膳一膳丁寧に供されます。",
              highlights: [
                "大正元年の鏝絵が残る象徴的建築＆2つの無料貸切風呂で源泉かけ流し",
                "銀山川沿いの中心街に位置し夕暮れ時のガス灯散策に最適な立地",
                "尾花沢牛の温泉湯砂蒸しや地酒と楽しむ本格和会席膳"
              ]
            },
            {
              id: 3,
              name: "銀山温泉　仙峡の宿　銀山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/111234/111234.jpg",
              rating: 4.44,
              reviews: 317,
              price: "¥24,778〜",
              access: "国道１３号線尾花沢市内よりお車にて３０分。 ＪＲ利用のお客様は１１：１０、１３：４０、１５:４５の送迎あり（要予約）",
              special: "古き良き大正ロマンの漂う銀山温泉。湖上の山々がおりなす四季の彩りをのんびり眺めながら入る露天風呂。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111234%2F111234.html",
              story: "銀山温泉街の入口、豊かな自然林を望む高台に位置する「仙峡の宿 銀山荘」。温泉街の木造密集地から少し離れているからこそ実現した、開放感あふれる広大な湯処が最大の自慢です。特に冬期に真価を発揮するのが、雪山と木々を一望する露天寝湯。湯船に横たわりながら見上げる冬の星空と、舞い落ちる粉雪が頬をかすめる心地よさは言葉を失う贅沢です。館内はバリアフリーにも配慮されたモダンで清潔感あふれる造りで、広々としたロビーやラウンジからも冬の銀世界がパノラマで広がります。歴史ある風情ある温泉街へは宿の専用玄関から徒歩5分ほどでアクセスでき、散策と快適なリゾートステイの双方を両立できます。",
              roomTip: "客室専用の半露天風呂を備えたお部屋なら、好きな時にいつでも雪景色を愛でながらプライベートな湯浴みを楽しめます。",
              gourmetTip: "夕食は厳選されたブランド黒毛和牛「雪降り和牛尾花沢」のステーキまたは陶板焼きをメインとした季節会席。冬限定の郷土鍋や山形のブランド米「つや姫」の炊きたてご飯も絶品です。",
              highlights: [
                "雪山パノラマの絶景露天寝湯＆広々とした清潔感あふれるモダン空間",
                "客室露天風呂付きプラン充実＆雪道でも安心の大型アクセスと送迎",
                "雪降り和牛尾花沢のステーキとつや姫の炊きたて銀シャリ"
              ]
            },
            {
              id: 4,
              name: "銀山温泉　滝と蕎麦の宿　瀧見舘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/135388/135388.jpg",
              rating: 5.00,
              reviews: 116,
              price: "¥20,000〜",
              access: "大石田駅から市営バスで約30分／送迎（３日前予約）",
              special: "四季の眺望パノラマ露天風呂と、自家製手打ち蕎麦の料理宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135388%2F135388.html",
              story: "銀山温泉街の奥、名所「白銀の滝」を見下ろす高台に佇む「瀧見舘」。温泉街の喧騒から一段上がった静寂のロケーションにあり、眼下に広がる雪景色の滝と渓谷のコントラストは圧巻です。自慢の展望露天風呂からは、水墨画のような冬の山肌と湯気の向こうに白銀の滝を遠望でき、清冽な滝音と冷涼な山の空気が火照った身体を心地よく包み込みます。もともと蕎麦屋から始まった宿という歴史を持ち、料理長自らが毎朝手打ちする十割の「尾花沢蕎麦」はコシと香りが抜群で、温泉ファンの間でも非常に高い評価を得ています。",
              roomTip: "山側の静かな客室からは純白に染まるブナや杉の雪景色が望め、夜には満天の星空が広がることも。都会の喧騒を完全に忘れて心身をリセットできます。",
              gourmetTip: "名物の手打ち十割蕎麦はもちろん、冬の山形ならではの尾花沢牛のすき焼き、鮎の塩焼き、山形芋煮など、郷土色豊かで素朴ながら洗練された逸品が並びます。",
              highlights: [
                "高台から白銀の滝を望む雪見露天＆職人手打ちの絶品尾花沢十割蕎麦",
                "白銀の滝を見下ろす静寂の環境と秘湯情緒あふれる山あいの絶景",
                "山形芋煮や季節の山菜・川魚と名物手打ち蕎麦の美食膳"
              ]
            },
            {
              id: 5,
              name: "銀山温泉　旅館松本",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52933/52933.jpg",
              rating: 3.99,
              reviews: 332,
              price: "¥17,600〜",
              access: "大石田駅より、バスで４０分（尾花沢経由）※大石田駅までの送迎をご希望の方は、ご予約時に「備考欄」に記載下さい。",
              special: "館内エレベータで移動楽々！ご夕食はお部屋食又は個室、お風呂は源泉かけ流し！全１０室の家庭的な宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52933%2F52933.html",
              story: "温泉街の入口近くに佇む、全10室の家庭的で温かなもてなしが魅力の湯宿「旅館松本」。大型旅館とは一線を画すアットホームな空気感が漂い、女将をはじめとするスタッフの親身な心配りが一人旅やカップルの心を解きほぐします。お風呂は銀山温泉の含硫黄名湯を100％源泉かけ流しで引いており、湯口から注がれる新鮮な源泉は体の芯までしっかりと熱を届け、入浴後も湯冷め知らずのポカポカ感が続きます。銀山川沿いの中心街へも徒歩2分と至近で、冬の夕暮れ時のガス灯散策や足湯めぐりの拠点として抜群のコストパフォーマンスと利便性を誇ります。",
              roomTip: "清潔に整えられた和室はどこか懐かしい落ち着きがあり、雪道の散策で冷えた身体をごろんと横たえて休める安らぎの空間です。",
              gourmetTip: "山形の郷土料理を中心とした手作りの会席膳。地元契約農家から仕入れる野菜やお米、山菜料理、地元産のお肉など、飾らない本物の田舎の美味しさを味わえます。",
              highlights: [
                "全10室の温かなおもてなし＆源泉かけ流し名湯と郷土手作り料理",
                "温泉街中心部まで徒歩2分の好立地で高コスパな冬の銀山滞在を実現",
                "地元食材をふんだんに使った女将手作りの温かな郷土料理"
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
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の銀山温泉・白銀の木造建築群と黄昏時に灯るガス灯"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-800/90 text-amber-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-600/40">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 冬の東北名湯特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月銀山温泉の初雪と大正浪漫】<br className="hidden sm:inline" />
            白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            しんしんと降り積もる初雪が、銀山川沿いの木造三層四層の旅館群を白く染め上げる。黄昏の藍色の空に灯るオレンジ色のガス灯、湯けむり立ち上る雪見露天、そしてとろける極上の尾花沢牛に酔いしれる至高の冬宵へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 山形県尾花沢市（銀山温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Winter Romance</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                まるで絵画の世界。雪とガス灯が紡ぎ出す大正浪漫の奇跡
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山形県尾花沢市の山懐に抱かれた銀山温泉。かつて江戸時代初期に大銀山として栄えた「延沢銀山」の歴史を今に伝えるこの湯の街は、11月下旬を迎えると初雪の便りが届き、12月に入ると瞬く間に純白の世界へと姿を変えます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            温泉街の中心を流れる銀山川の両岸には、大正末期から昭和初期にかけて建てられた木造三層・四層の重厚な楼閣建築が整然と立ち並びます。夕暮れ時、午後4時半を過ぎて空が濃紺のグラデーションを描くマジックアワーになると、橋や歩道に設置されたガス灯に温かなオレンジ色の炎が宿ります。白く化粧した屋根の軒先から立ち上る白い湯気、川面に揺らめく灯火の光、そして舞い落ちる結晶のような雪片。その光景は、訪れる旅人すべての息を止めるほどの幻想的な静謐さを放ちます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            冷えた体を優しく包み込んでくれるのは、開湯から500年以上もの歴史を誇るナトリウム―塩化物・硫酸塩温泉。ほんのりと漂う硫黄の香りと湯花が、本物の源泉である証です。肌に滑らかな湯は保温力に優れ、雪景色を眺めながら長湯を楽しんでも湯冷めすることがありません。湯上がりには、厳しい冬の寒さの中でじっくりと脂を乗せた山形が誇る至高の黒毛和牛「尾花沢牛」のすき焼きや温泉しゃぶしゃぶ、地酒「出羽桜」を部屋食で味わう至福の時間。11月・12月の銀山温泉でしか味わえない本物の冬旅がここにあります。
          </p>
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-700" />
                冬の銀山温泉は「宿泊者限定」の静寂を狙うべし
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                日帰り観光客の入場が規制される夕暮れ以降や早朝の時間帯こそ、銀山温泉が最も美しい瞬間。温泉街の宿を押さえてゆったりと滞在するのが鉄則です。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選の銀山名宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の冬の銀山温泉で体験したい3つの贅沢
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">黄昏のガス灯と雪景色の街並み</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                16時半頃、川沿いのガス灯に火が灯る瞬間は奇跡の美しさ。大正ロマンの木造建築に積もる雪と温かな光が織りなす情景は一生の記憶に残ります。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">最高級ブランド「尾花沢牛」の会席</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                寒暖差が生む極上のサシ「雪降り和牛尾花沢」。口に入れた瞬間に溶け出す甘い脂と深いコクを、すき焼きやしゃぶしゃぶで心ゆくまで堪能。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">湯けむり立ち上る雪見露天風呂</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                舞い散る粉雪を眺めながら浸かる源泉かけ流しの名湯。硫黄がほのかに香る弱アルカリ性のお湯は芯から身体を温め、肌をつるつるに整えます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Recommended Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月に泊まりたい銀山温泉の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルの最新空室状況・宿泊プランと連携。大正ロマンの木造老舗から絶景露天を備える名宿までを厳選。
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
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                          第{index + 1}選
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
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
                      <span className="text-2xl font-extrabold text-amber-700">{hotel.price}</span>
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
                          <h4 className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-1">
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
                  <div className="bg-amber-50/50 rounded-2xl p-4 sm:p-5 border border-amber-100/80 space-y-2.5">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      この宿のおすすめポイント
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {hotel.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <span className="text-amber-600 font-bold">✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-stone-500 italic">
                      ※冬期の銀山温泉は予約が早期に埋まりやすいため、早めの空室チェックが推奨されます。
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
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

        {/* 1泊2日 夢の冬銀山モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の銀山温泉を満喫する「1泊2日 夢の大正浪漫モデルコース」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {/* Day 1 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-200">
                <span className="px-3 py-1 rounded-full bg-amber-800 text-white font-bold text-xs">1日目</span>
                <h3 className="font-bold text-stone-900 text-base">雪景色へトリップ＆黄昏ガス灯の絶景</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">13:15</span>
                  <div>
                    <strong>山形新幹線「大石田駅」到着</strong>
                    <p className="text-stone-500 text-xs mt-0.5">大石田駅前から路線バス「銀山はながさ号」または宿の無料送迎バスに乗車。車窓は一面の白銀の世界へと変化。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">14:15</span>
                  <div>
                    <strong>銀山温泉街に到着＆食べ歩き散策</strong>
                    <p className="text-stone-500 text-xs mt-0.5">温泉街入口の足湯「和楽足（わらし）」で足を温めつつ、名物「はいからさんのカリーパン」や野川とうふ店の熱々立ち喰い豆腐を堪能。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">15:00</span>
                  <div>
                    <strong>チェックイン＆内湯で身体を温める</strong>
                    <p className="text-stone-500 text-xs mt-0.5">歴史ある木造客室に荷物を置き、源泉かけ流しの名湯へ。まずは長旅で冷えた足腰を芯から温めます。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">16:30</span>
                  <div>
                    <strong>黄昏のガス灯点灯・マジックアワー撮影</strong>
                    <p className="text-stone-500 text-xs mt-0.5">藍色の空とオレンジのガス灯、木造旅館のコントラストが最も美しい時間帯。宿泊者だからこそ焦らず特等席で撮影。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">18:30</span>
                  <div>
                    <strong>極上の尾花沢牛会席と山形の冬の地酒</strong>
                    <p className="text-stone-500 text-xs mt-0.5">とろける霜降り「雪降り和牛尾花沢」のすき焼きや陶板焼きに舌鼓。山形銘酒「出羽桜」や「初孫」と至高のペアリング。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">21:00</span>
                  <div>
                    <strong>静寂の雪見露天風呂＆夜の散策</strong>
                    <p className="text-stone-500 text-xs mt-0.5">日帰り客が完全に去った後の静かな温泉街を少し歩いた後、舞い散る粉雪を眺めながらの夜露天風呂。</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-200">
                <span className="px-3 py-1 rounded-full bg-amber-800 text-white font-bold text-xs">2日目</span>
                <h3 className="font-bold text-stone-900 text-base">清冽な朝の銀世界散策と地元土産</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">07:00</span>
                  <div>
                    <strong>早朝の銀山温泉街散策（誰もいない水墨画の世界）</strong>
                    <p className="text-stone-500 text-xs mt-0.5">観光客の足跡がない新雪を踏みしめ、温泉街の最奥にある「白銀の滝」へ。凍りつく滝と雪景色の美しさは早起き者だけの特権。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">08:00</span>
                  <div>
                    <strong>朝食：山形ブランド米「つや姫」と郷土の小鉢</strong>
                    <p className="text-stone-500 text-xs mt-0.5">炊きたてツヤツヤのつや姫ご飯に、山形名物のおみ漬けや温かい芋煮汁、温泉卵で元気な朝のエネルギーを補給。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">09:30</span>
                  <div>
                    <strong>出発前の朝風呂＆大正カフェタイム</strong>
                    <p className="text-stone-500 text-xs mt-0.5">最後にもう一度名湯に浸かり、温泉街のレトロカフェ「伊豆の華」で雪景色を眺めながら温かい珈琲や蕎麦ソフト。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">10:30</span>
                  <div>
                    <strong>チェックアウト＆地元銘菓のお土産選び</strong>
                    <p className="text-stone-500 text-xs mt-0.5">江戸時代からの伝統銘菓「くぢら餅」や地酒、木地玩具のこけしなどを購入。宿の送迎バスで大石田駅へ。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">12:00</span>
                  <div>
                    <strong>大石田駅周辺で名物「大石田そば街道」の板そばランチ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">大石田は全国有数の名蕎麦処。新そばの香りとコシがたまらない名物「板そば」を味わって帰路へ。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 泉質・温泉医学＆ヒートショック対策 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Footprints className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Onsen Science & Wellness</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                銀山温泉の泉質特徴と冬の安全な雪見入浴法
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                ナトリウム―塩化物・硫酸塩温泉の効能
              </h3>
              <p>
                銀山温泉の源泉は泉温が約60℃〜63℃と高く、湯量も豊富です。塩化物泉の成分（塩分）が皮膚の表面をコーティングして汗の蒸発を防ぐため、入浴後も非常に湯冷めしにくいのが最大の特徴です。
              </p>
              <p>
                さらに硫酸塩成分が肌にハリと潤いを与え、弱アルカリ性の性質が古い角質をやさしく洗い流します。冷え性、関節痛、神経痛、疲労回復に抜群の適応症を持ち、雪深い冬の東北旅において何よりの活力源となります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                冬の雪見露天風呂でのヒートショック予防
              </h3>
              <p>
                冬の銀山温泉は氷点下の外気と熱い温泉の温度差が40℃以上にも達します。急激な血圧変動による立ちくらみやヒートショックを防ぐため、露天風呂に向かう前に必ず内湯で身体を十分に温めましょう。
              </p>
              <p>
                足先から心臓に向かって念入りにかけ湯を行い、長湯しすぎず10分〜15分程度を目安に休憩を挟みながら入浴するのが、冬の温泉を安全かつ最高に気持ちよく楽しむ秘訣です。
              </p>
            </div>
          </div>
        </section>

        {/* お土産・ご当地スイーツ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Souvenirs & Delights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の銀山温泉で手に入れたい厳選名物土産＆冬スイーツ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">名物グルメ</span>
              <h3 className="font-bold text-stone-900">はいからさんのカリーパン</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                外はカリカリ、中はモチモチの生地にスパイシーな山形県産小麦カリーフィリングがぎっしり。雪道散策の手のひらを温める冬一番人気のテイクアウト。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">伝統銘菓</span>
              <h3 className="font-bold text-stone-900">尾花沢名物 くぢら餅</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                もち米、うるち米に黒砂糖や胡桃を練り込んで蒸し上げた山形伝統の保存食。冬の携帯食として愛され、素朴で奥深い甘みが緑茶によく合います。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">山形銘酒</span>
              <h3 className="font-bold text-stone-900">冬仕込みの山形地酒・初孫＆出羽桜</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                冬に新酒が仕込まれる山形の日本酒。華やかな吟醸香とキレのある辛口が、脂の乗った尾花沢牛や山菜料理の旨味を極限まで引き立てます。
              </p>
            </div>
          </div>
        </section>

        {/* Travel Guide / Area Map Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Practical Winter Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の銀山温泉 旅の実用アドバイスと散策心得
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-sky-600" />
                冬の服装と足元の装備について
              </h3>
              <p>
                11月中旬以降の銀山温泉は気温が氷点下近くまで下がり、12月には日中でも0℃前後の厳しい寒さとなります。ダウンコートやベンチコートなど風を通さない防寒着、ヒートテック、耳当て、手袋、マフラーが必須です。
              </p>
              <p>
                また、温泉街の石畳や橋の上は雪が踏み固められて滑りやすくなります。革靴やスニーカーは浸水して足先が凍えるため、防水性のある防寒スノーブーツや靴底に溝の深いトレッキングシューズの着用を強くおすすめします。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                冬のアクセス・交通機関の選び方
              </h3>
              <p>
                山形新幹線「大石田駅」から銀山温泉行きの路線バス（銀山はながさ号）が運行されています。多くの宿では大石田駅からの宿泊者専用送迎バスを運行しているため、宿泊予約時に送迎便の予約を済ませておくのが最もスムーズです。
              </p>
              <p>
                自家用車やレンタカーを利用する場合は、4WDスタッドレスタイヤが必須条件です。温泉街周辺は道路幅が狭く除雪車も頻繁に行き交うため、運転に不安がある方は新幹線とバスの組み合わせを推奨します。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の銀山温泉旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                初雪と本格的な雪景色の時期はいつ頃ですか？11月中に行っても雪は見られますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年、初雪が舞うのは11月中旬から下旬頃です。温泉街全体が白銀に包まれ、屋根にしっかりと雪が積もる光景を確実に楽しみたい場合は、12月上旬から中旬以降の予約が狙い目です。11月下旬は晩秋の落ち着いた静寂と初雪が重なる風情ある時期となります。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                冬期の銀山温泉で日帰り観光と宿泊の違いは何ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                近年、冬期の銀山温泉では混雑と安全確保のため夕方以降の日帰り観光客の入場規制が実施されることがあります。温泉街の旅館に宿泊していれば、観光客が引き揚げた後の静寂な夜のガス灯や早朝の雪景色を誰にも邪魔されずにゆったり散策・撮影できる特権があります。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                銀山温泉の泉質や温泉の特徴、効能について教えてください。
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                泉質は含硫黄―ナトリウム―塩化物・硫酸塩温泉で、無色透明ながらかすかな硫黄の香りと細かい湯花が特徴です。塩分と硫酸塩成分が肌を包み込んで熱を逃さないため、冷え性や疲労回復、筋肉痛に優れた効果を発揮します。冬の厳しい寒さのなかで入る雪見風呂は格別の心地よさです。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                名物「尾花沢牛（雪降り和牛尾花沢）」とはどんなお肉ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                山形県尾花沢市は夏と冬の寒暖差が激しい豪雪地帯です。この過酷な寒さに耐えるために身につけたきめ細やかな霜降り（サシ）が特徴で、融点が非常に低いため舌の上でサラリと溶けます。良質な不飽和脂肪酸が豊富で胃もたれしにくく、すき焼きや温泉しゃぶしゃぶで抜群の旨味を楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Related Guides & Areas</span>
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
              href="/winter-zao-snow-monster-ice-tree-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-sky-800 bg-sky-100/80 px-2 py-0.5 rounded">山形冬特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                蔵王樹氷スノーモンスターと強酸性硫黄泉の湯宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                世界的奇観のスノーモンスター樹氷ライトアップと名湯・蔵王温泉。
              </p>
            </Link>

            <Link 
              href="/winter-yamagata-onogawa-yonezawa-beef-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">山形グルメ温泉</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                米沢牛すき焼きと小野川温泉・小野小町ゆかりの美肌湯
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                米沢の奥座敷・小野川温泉とかまくら雪見風呂、極上A5米沢牛。
              </p>
            </Link>

            <Link 
              href="/winter-aomori-sukayu-hakkoda-yukimi-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">東北雪見秘湯</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                青森酸ヶ湯温泉の千人風呂と八甲田雪見ステイ
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                豪雪地帯のヒバ千人風呂と白濁した酸性硫黄泉、冬の八甲田樹氷。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              山形県および東北エリアのおすすめ温泉宿一覧
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/yamagata" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">山形県の宿一覧</Link>
              <Link href="/prefectures/akita" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">秋田県の宿一覧</Link>
              <Link href="/prefectures/miyagi" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">宮城県の宿一覧</Link>
              <Link href="/prefectures/fukushima" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">福島県の宿一覧</Link>
              <Link href="/prefectures/iwate" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">岩手県の宿一覧</Link>
              <Link href="/prefectures/aomori" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">青森県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-yamagata-ginzan-onsen-snow-taisho-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
