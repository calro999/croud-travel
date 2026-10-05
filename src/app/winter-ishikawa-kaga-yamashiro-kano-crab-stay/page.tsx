import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Palette, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月加賀温泉郷の冬の贅と加能ガニ解禁】山代・山中温泉の歴史名湯と九谷焼で味わう極上ズワイガニ会席の宿5選",
  description: "11月6日の北陸冬の風物詩・ズワイガニ漁解禁とともに美食の最盛期を迎える石川県・加賀温泉郷（山代温泉・山中温泉）。開湯1300年の歴史を誇る名湯巡りと、青いタグが輝く石川ブランド「加能ガニ」や内子・外子が濃厚な「香箱ガニ」。九谷焼や山中塗の絢爛な器で冬の日本海会席を味わう極上の大人旅ガイド。",
  keywords: '加賀温泉郷 宿泊 11月 12月, 山代温泉 カニ 旅館, 山中温泉 加能ガニ 香箱ガニ, あらや滔々庵 ゆのくに天祥, 加賀温泉 おすすめ 宿, 九谷焼 温泉 会席, 加賀 冬 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ishikawa-kaga-yamashiro-kano-crab-stay/",
  },
  openGraph: {
    title: "【11・12月加賀温泉郷の冬の贅と加能ガニ解禁】山代・山中温泉の歴史名湯と九谷焼で味わう極上ズワイガニ会席の宿5選",
    description: "11月6日の北陸冬の風物詩・ズワイガニ漁解禁とともに美食の最盛期を迎える石川県・加賀温泉郷（山代温泉・山中温泉）。開湯1300年の歴史を誇る名湯巡りと、青いタグが輝く石川ブランド「加能ガニ」や内子・外子が濃厚な「香箱ガニ」。九谷焼や山中塗の絢爛な器で冬の日本海会席を味わう極上の大人旅ガイド。",
    url: 'https://croud-travel.com/winter-ishikawa-kaga-yamashiro-kano-crab-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月加賀温泉郷の冬の贅と加能ガニ解禁】山代・山中温泉の歴史名湯と九谷焼で味わう極上ズワイガニ会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月加賀温泉郷の冬の贅と加能ガニ解禁】山代・山中温泉の歴史名湯と九谷焼で味わう極上ズワイガニ会席の宿5選",
    description: "11月6日の北陸冬の風物詩・ズワイガニ漁解禁とともに美食の最盛期を迎える石川県・加賀温泉郷（山代温泉・山中温泉）。開湯1300年の歴史を誇る名湯巡りと、青いタグが輝く石川ブランド「加能ガニ」や内子・外子が濃厚な「香箱ガニ」。九谷焼や山中塗の絢爛な器で冬の日本海会席を味わう極上の大人旅ガイド。",
  }
};

export default function KagaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-ishikawa-kaga-yamashiro-kano-crab-stay#article",
        "headline": "【11・12月加賀温泉郷の冬の贅と加能ガニ解禁】山代・山中温泉の歴史名湯と九谷焼で味わう極上ズワイガニ会席の宿5選",
        "description": "11月6日の北陸冬の風物詩・ズワイガニ漁解禁とともに美食の最盛期を迎える石川県・加賀温泉郷（山代温泉・山中温泉）。開湯1300年の歴史を誇る名湯巡りと、青いタグが輝く石川ブランド「加能ガニ」や内子・外子が濃厚な「香箱ガニ」。九谷焼や山中塗の絢爛な器で冬の日本海会席を味わう極上の大人旅ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.com/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-ishikawa-kaga-yamashiro-kano-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "北陸のズワイガニ漁解禁日はいつですか？「加能ガニ」と「香箱ガニ」の違いは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "石川県をはじめとする北陸のズワイガニ漁は毎年11月6日に一斉解禁されます。『加能ガニ（かのうがに）』は石川県内の漁港で水揚げされた雄のズワイガニのことで、青いタグが付けられます。太い脚にぎっしり詰まった甘い身と濃厚なカニ味噌が特徴です。一方、『香箱ガニ（こうばこがに）』は雌のズワイガニのことで、漁期が11月6日から12月末までの約2ヶ月間と極めて限定されています。小ぶりながら、お腹の外子（プチプチとした卵）と甲羅の中の内子（濃厚な未受精卵）、カニ味噌が凝縮された冬の珍味です。"
            }
          },
          {
            "@type": "Question",
            "name": "加賀温泉郷の11月・12月の気候と服装、雪への備えは必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "加賀温泉郷は11月中旬頃までは比較的穏やかですが、下旬から冷え込みが強まり、12月に入ると日本海特有の冬の気圧配置（雨やみぞれ、雪）が増えます。12月中旬以降は雪が積もることがあるため、お車の場合はスタッドレスタイヤが必須です。冬の北陸は湿り気を帯びた冷たい風が吹くため、防水・防寒性に優れたダウンジャケット、傘、滑りにくい靴を必ずご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "山代温泉と山中温泉の雰囲気の違いや見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "『山代温泉』は開湯1300年の歴史を持ち、共同浴場『総湯』『古総湯』を中心に紅殻格子の旅館が円状に連なる『湯の曲輪（ゆのがわ）』が象徴的。北大路魯山人ゆかりの地で、九谷焼の窯元巡りや町歩きが魅力です。一方、『山中温泉』は名勝・鶴仙渓の深い渓谷沿いに広がり、松尾芭蕉が愛した名湯。こおろぎ橋やあやとり橋を巡る渓谷美と、伝統工芸・山中漆器の職人技が息づく風光明媚な温泉地です。"
            }
          },
          {
            "@type": "Question",
            "name": "北陸新幹線加賀温泉駅からのアクセスは便利ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "北陸新幹線の敦賀延伸開業により、東京方面や関西・中京方面からのアクセスが飛躍的に向上しました。加賀温泉駅からは、各主要旅館の無料送迎バス（要予約）または路線バス『キャン・バス』が運行されており、山代温泉へは約10分、山中温泉へは約15〜20分でスムーズに到着できます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-ishikawa-kaga-yamashiro-kano-crab-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "山代温泉　ゆのくに天祥",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1616%2F1616.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "あらや滔々庵",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187584%2F187584.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "山代温泉　葉渡莉（はとり）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10624%2F10624.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "山中温泉　花紫",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67297%2F67297.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "山中温泉　かがり吉祥亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F68251.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "山代温泉　ゆのくに天祥",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1616/1616.jpg",
              rating: 4.50,
              reviews: 3744,
              price: "¥9,900〜",
              access: "【車】北陸自動車道加賀IC、片山津ICより約15分【電車】JR・IRいしかわ鉄道加賀温泉駅より無料送迎 予約制",
              special: "プロが選ぶホテル・旅館100選(全国総合4位)　楽天・日本の宿アワード2025　W受賞！風呂自慢の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1616%2F1616.html",
              story: "自家源泉100％の天然温泉と「一泊三湯十八ゆめぐり」という圧倒的な温泉スケールを誇る山代温泉屈指の大型名旅館「ゆのくに天祥」。「悠久の湯」「滝見の湯」「九谷の湯」という趣の異なる3つの大浴場に合計18もの多彩な湯船が揃い、男女時間入替によって宿泊中にすべての湯殿を満喫できます。特に「九谷の湯」では、加賀の伝統工芸である九谷焼のアートに囲まれながら贅沢な湯あみを体験。11月・12月の冬期は、雪見露天風呂の風情とともに、開湯以来の豊かな美肌の湯が冷えた体を芯まで温めてくれます。充実した館内施設と細やかなおもてなしは、家族旅行から夫婦旅まで幅広い層に愛されています。",
              roomTip: "プライベートな温泉露天風呂を備えた客室棟「天祥の館」特別室がおすすめ。誰にも気兼ねなく加賀の初冬の空気を感じながら自家源泉を心ゆくまで堪能できます。",
              gourmetTip: "11月解禁のブランドズワイガニ「加能ガニ」や「香箱ガニ」を盛り込んだ冬の特選蟹会席。焼きガニの香ばしい匂い、甘みがとろけるカニ刺し、濃厚な甲羅味噌焼き、能登牛の陶板焼きなど北陸の贅の極みです。",
              highlights: [
                "自家源泉100％「一泊三湯十八ゆめぐり」＆九谷焼アートの九谷の湯",
                "加賀屈指のスケールを誇る3つの大浴場＆雪見露天風呂の極上湯あみ",
                "青タグのブランド活加能ガニ・香箱ガニと能登牛を味わう特選蟹会席"
              ]
            },
            {
              id: 2,
              name: "あらや滔々庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187584/187584.jpg",
              rating: 4.90,
              reviews: 19,
              price: "¥35,700〜",
              access: "JR加賀温泉駅よりお車にて約10分",
              special: "藩政時代より十八代、滔々とあふれる源泉大浴場、伝統が育んだお料理とおもてなしにてお寛ぎください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187584%2F187584.html",
              story: "創業山代温泉開湯の祖・行基菩薩の時代から続く、実に800年・18代の歴史を刻む名門最高峰旅館「あらや滔々庵」。山代温泉のシンボル「湯の曲輪（ゆのがわ）」の筆頭に位置し、文人墨客や美食家・北大路魯山人が愛した宿としても知られます。宿の誇りは、山代随一の湧出量を誇る生源泉「滔々（とうとう）と湧き出る湯」。大浴場「瑠璃光殿」や風情ある半露天風呂には、一切の加水・加温・循環を行わない本物の純生源泉が常に掛け流されています。魯山人の書画やアンティークの九谷焼がさりげなく配された館内は、静寂と極上の美意識に包まれています。",
              roomTip: "数寄屋造りの美を極めた庭園付き客室や半露天風呂付き客室。雪化粧を始めた坪庭を眺めながら、歴史の重みと静けさに浸る贅沢な時間を過ごせます。",
              gourmetTip: "北大路魯山人の「器は料理の着物」の哲学を受け継ぐ究極の懐石料理。厳選された本活加能ガニを炭火で香ばしく焼き上げ、魯山人写しの器や古九谷の器でいただく冬の美食は一生の記憶に残る感動です。",
              highlights: [
                "創業18代・魯山人ゆかりの名門旅館＆山代随一の純生源泉完全かけ流し",
                "文豪・美食家を魅了し続ける静寂と美意識＆瑠璃光殿の掛け流し名湯",
                "炭火で香ばしく焼き上げる本活加能ガニ＆魯山人写しの器の芸術的饗宴"
              ]
            },
            {
              id: 3,
              name: "山代温泉　葉渡莉（はとり）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10624/10624.jpg",
              rating: 4.42,
              reviews: 1018,
              price: "¥8,470〜",
              access: "【ＪＲ】「加賀温泉駅」より無料送迎バス有（詳細は公式HP）【車】北陸道「加賀IC」or「片山津IC」より約20分",
              special: "自然と人の優しさ溢れる和の上質宿。加賀の旬のお料理と2種類の大浴場が自慢です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10624%2F10624.html",
              story: "山代温泉の「湯の曲輪」すぐそばに佇み、木の優しさと草花の温もりに包まれた純和風旅館「葉渡莉（はとり）」。館内には檜の香りが清々しい大浴場「九里九里の湯（くりくりのゆ）」と、自然石を豪快に組んだ露天風呂「お薬師の湯」があり、肌触りなめらかな名湯にゆったりと浸かれます。宿のコンセプトは「自然の温もりと素朴なおもてなし」。ロビーや廊下には季節の野花が可憐に生けられ、毎夜開催される伝統の「一向一揆太鼓」の迫力ある演奏など、加賀の歴史と人情を身近に感じられる温かい滞在が魅力です。",
              roomTip: "和モダンな琉球畳と快適なベッドを組み合わせた客室や、檜風呂付き客室が人気。温かみのある木の空間で、旅の疲れをのんびり癒やせます。",
              gourmetTip: "地産地消にこだわる加賀会席料理。冬は香箱ガニの甲羅盛り（面詰め）や加能ガニの釜茹で、郷土料理の鴨の治部煮、契約農家から届く加賀野菜の炊き合わせなど滋味あふれる皿が並びます。",
              highlights: [
                "湯の曲輪至近＆檜の大浴場「九里九里の湯」と自然石露天「お薬師の湯」",
                "野花と木の香りに癒される純和風空間＆迫力の加賀一向一揆太鼓演奏",
                "香箱ガニ甲羅盛りや鴨の治部煮・加賀野菜を堪能する地産地消会席"
              ]
            },
            {
              id: 4,
              name: "山中温泉　花紫",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67297/67297.jpg",
              rating: 5.00,
              reviews: 408,
              price: "¥20,000〜",
              access: "◆JR加賀温泉駅より送迎車にて約15分（要予約）◆北陸自動車道-加賀IC、片山津ICより約20分◆小松空港より約25分",
              special: "コンセプトは日本の文化サロン。アートやお茶に浸り、対話を深める宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67297%2F67297.html",
              story: "山中温泉の名勝・鶴仙渓（かくせんけい）の渓流沿いに静かに佇み、全客室から清流のせせらぎと四季の自然美を望む高級料理旅館「花紫」。山中塗の洗練された美意識が館内随所に息づき、最上階の展望露天風呂からは、初冬の寒風に揺れる渓谷の木々と澄んだ川面を見晴らせます。花紫の真骨頂は、全国的にも極めて珍しい「アラカルト懐石」。約50種類もの季節の特選メニューの中から、加能ガニ、香箱ガニ、能登牛、寒ブリ、のどぐろなど、ゲストが自らの好みに合わせて自由にコースを組み立てられる究極のパーソナル美食ステイが叶います。",
              roomTip: "鶴仙渓を眼下に見下ろすバルコニー付き特別室や、源泉かけ流し露天風呂付き客室。せせらぎの音を聞きながら、日常を忘れるプライベートな休日を過ごせます。",
              gourmetTip: "山中塗や特注の器で供されるアラカルト懐石。冬は水揚げされたばかりの活加能ガニを刺身、焼き、茹で、甲羅酒などお好みの調理法でリクエストできる贅沢極まるスタイルです。",
              highlights: [
                "鶴仙渓沿いの高級料理旅館＆約50種から選べる唯一無二の「アラカルト懐石」",
                "山中塗の器で供される極上料理＆最上階展望露天風呂から望む渓谷パノラマ",
                "加能ガニ・能登牛・寒ブリをお好みで選ぶパーソナル懐石の極み"
              ]
            },
            {
              id: 5,
              name: "山中温泉　かがり吉祥亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68251/68251.jpg",
              rating: 4.64,
              reviews: 1890,
              price: "¥14,500〜",
              access: "加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより16分。金沢・福井へは車で1時間",
              special: "≪全室リバービュー・夕食時飲み放題≫渓流沿いの露天風呂と旬の加賀料理を堪能。こおろぎ橋・ゆげ街道すぐ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F68251.html",
              story: "鶴仙渓のシンボル「こおろぎ橋」のすぐ袂に位置し、渓谷の絶景を目の前に望む風情あふれる温泉宿「かがり吉祥亭」。山中温泉の天然温泉を注ぐ大浴場や露天風呂からは、名勝鶴仙渓の奇岩と初冬の清流を間近に見下ろす圧巻のロケーションが広がります。館内では加賀伝統工芸体験や、夕方の加賀甘酒サービス、湯上がりの郷土スイーツなど、嬉しい無料のおもてなしが充実。11月・12月の澄み切った空気の中、渓流沿いの遊歩道を散策し、冷えた身体を名湯で温める贅沢な温泉旅に最適です。",
              roomTip: "鶴仙渓の渓流美を真正面に望む客室がおすすめ。窓を開ければ川のせせらぎが心地よく響き、初雪舞う渓谷美をパノラマで堪能できます。",
              gourmetTip: "オープンキッチンで揚げたてをいただく天ぷら食べ放題付きの加賀会席。冬はズワイガニの甲羅焼きやカニすき鍋、日本海の旬魚のお造り、能登豚のせいろ蒸しなどボリュームと美味しさを両立した豪華メニューです。",
              highlights: [
                "名勝こおろぎ橋すぐの絶景ロケーション＆渓流露天風呂と充実のおもてなし",
                "鶴仙渓を眼下に見下ろす絶景露天＆揚げたて天ぷらと地酒を楽しむ夕べ",
                "ズワイガニ甲羅焼きやカニすき鍋・日本海鮮魚を堪能する豪華加賀会席"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-red-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の加賀温泉郷・山代温泉古総湯の紅殻格子と湯けむり、解禁された極上の加能ガニ会席"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/90 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-red-800/50">
            <Utensils className="w-4 h-4 text-red-300" />
            <span>11月・12月限定 北陸名湯・加能ガニ解禁と九谷焼の美特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月加賀温泉郷の冬の贅と加能ガニ解禁】<br className="hidden sm:inline" />
            山代・山中温泉の歴史名湯と九谷焼で味わう極上ズワイガニ会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月6日のズワイガニ漁解禁。青いタグ光る石川の至宝「加能ガニ」と、12月末までの奇跡の味覚「香箱ガニ」。開湯1300年の名湯・山代温泉と鶴仙渓の渓谷美を誇る山中温泉。九谷焼や山中塗の絢爛たる器で味わう究極の冬の日本海グルメ旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> 石川県加賀市（山代温泉・山中温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Heritage, Art & Winter Delicacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月6日カニ漁解禁。魯山人も愛した加賀の美意識と北陸随一の名湯
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            霊峰白山を望む石川県南部に位置する加賀温泉郷。奈良時代の僧・行基が霊鳥カラスの傷を癒やしたことから始まったとされる「山代温泉」、そして平安の歌人や松尾芭蕉が『奥の細道』で「山中や 菊は手折らじ 湯の匂ひ」と激賞した「山中温泉」。加賀百万石の前田侯爵をはじめ、古今の文人墨客や美食家たちを惹きつけてやまない北陸最高峰の温泉文化が息づく地です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月を迎えると、加賀温泉郷は一年で最も華やぐ季節へと突入します。その合図が「11月6日の北陸ズワイガニ漁解禁」。荒れ狂う初冬の日本海から引き揚げられた雄ズワイガニには、石川県産であることを証明する青いタグが誇らしげに付けられ「加能ガニ」と呼ばれます。太く引き締まった脚に詰まる濃厚な甘みと、甲羅に溢れる芳醇なカニ味噌。さらに、11月6日から12月末までのわずか2ヶ月間しか味わえない雌のズワイガニ「香箱ガニ（こうばこがに）」は、プチプチと弾ける外子と、鮮やかな朱色に輝く濃厚な内子がぎっしり詰まった冬の宝物です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山代温泉の象徴である「湯の曲輪（ゆのがわ）」には、明治時代の共同浴場を復元したステンドグラスと九谷焼タイルの「古総湯」が鎮座し、初冬の冷気の中に立ち上る湯けむりがノスタルジックな旅情を醸し出します。北大路魯山人が逗留し「器は料理の着物」と説いたこの地では、豪快な焼きガニやカニ刺し、甲羅酒が、絢爛たる九谷焼や艶やかな山中塗の器に盛られて供されます。肌を優しく潤す硫酸塩・塩化物泉の湯に浸かり、器と料理が織りなす総合芸術に酔いしれる。北陸新幹線の延伸でさらに近くなった加賀で、人生最高の冬の贅を味わってください。
          </p>
          
          <div className="bg-red-50/70 rounded-2xl p-5 border border-red-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Utensils className="w-5 h-5 text-red-800" />
                <span>11月・12月限定「香箱ガニ」の旬を逃さない！</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                雌ガニ（香箱ガニ）の漁期は資源保護のため12月末まで。内子と外子を一度に味わえるのはこの時期だけの特権です。
              </p>
            </div>
            <div className="px-4 py-2 bg-red-800 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-sm">
              漁期: 11月6日〜12月29日頃
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-800 flex items-center justify-center font-black text-xl">
              1
            </div>
            <h3 className="font-bold text-stone-900 text-base">石川ブランド「加能ガニ」＆「香箱ガニ」</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              11月6日解禁。青タグの加能ガニの甘い身と濃厚カニ味噌、12月末までの限定美味・香箱ガニの内子と外子を味わい尽くす冬の贅。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-black text-xl">
              2
            </div>
            <h3 className="font-bold text-stone-900 text-base">開湯1300年の名湯と魯山人の美意識</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              山代の湯の曲輪・古総湯の風情、山中鶴仙渓の渓谷美。九谷焼や山中塗の絢爛たる伝統工芸が旅を格調高く彩る大人の空間。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center font-black text-xl">
              3
            </div>
            <h3 className="font-bold text-stone-900 text-base">北陸新幹線加賀温泉駅直結の快適旅</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              新幹線の延伸開業で首都圏・関西からのアクセスが格段に進化。駅から宿の無料送迎で、冬の雪道運転を気にせず優雅に直行可能。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-red-800 uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
              Selected 5 Ryokan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              【11・12月】加賀温泉郷で泊まりたい極上名旅館5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              楽天トラベル高評価の老舗名門から、一泊三湯十八ゆめぐりの温泉天国、鶴仙渓の絶景を望む高級宿まで、冬の加賀を満喫できる5軒をご紹介。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row group"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    厳選宿 #{hotel.id}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <span className="font-semibold block text-stone-200 mb-0.5">参考宿泊料金目安:</span>
                    <span className="text-lg font-black text-amber-300">{hotel.price}</span>
                    <span className="text-stone-300 text-[11px] ml-1">（2名1室利用時・1名あたり/消費税込）</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <span className="text-xs font-bold text-red-800 bg-red-50 px-2.5 py-1 rounded-lg">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1.5 text-stone-700 text-xs sm:text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-stone-900 font-extrabold text-base">{hotel.rating}</span>
                        <span className="text-stone-400 font-normal">（{hotel.reviews}件のクチコミ）</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-red-800 transition">
                      {hotel.name}
                    </h3>

                    <p className="text-stone-700 leading-relaxed text-sm">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70">
                        <span className="text-[11px] font-extrabold text-stone-500 uppercase tracking-wider block mb-1">
                          客室のこだわり
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>

                      <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/70">
                        <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block mb-1">
                          冬の美食会席
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-red-700" />
                      <span>楽天トラベル公式連携・最低価格保証プランあり</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-red-800 hover:bg-red-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <span>宿泊プラン・空室を確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】初冬の加賀温泉郷 湯の曲輪散策＆加能ガニ解禁満喫モデルコース
              </h2>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-red-200 space-y-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 13:00</span>
                <h3 className="text-base font-bold text-stone-900">北陸新幹線加賀温泉駅に到着＆山代温泉「湯の曲輪」へ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  加賀温泉駅から送迎バスで山代温泉へ。温泉街の中心「湯の曲輪」へ向かい、明治の共同浴場を復元したステンドグラス輝く「古総湯」の外観や、紅殻格子の町並みを散策。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 14:30</span>
                <h3 className="text-base font-bold text-stone-900">北大路魯山人寓居跡「いろは草庵」見学と九谷焼ギャラリー巡り</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  若き日の魯山人が逗留し看板や茶器を刻んだ「いろは草庵」を訪問。静かな庭園を愛でながら抹茶をいただき、近隣の九谷焼ギャラリーでお気に入りの器を探します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 15:30</span>
                <h3 className="text-base font-bold text-stone-900">宿へチェックイン・歴史ある名湯で芯から温まる</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宿にチェックインし、加賀の伝統工芸や自然石が配された大浴場へ。開湯1300年の名湯が肌を包み込み、冷えた身体がぽかぽかと温まります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 18:30</span>
                <h3 className="text-base font-bold text-stone-900">夕食・青タグ「加能ガニ」と「香箱ガニ」の極上会席</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  個室またはお部屋で夕食。炭火で香ばしく焼き上げる加能ガニの焼きガニ、甘みが広がるカニ刺し、甲羅味噌焼き、そして12月末までの香箱ガニ面詰め。九谷焼の美しい器で北陸の冬の至福を堪能。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">2日目 08:00</span>
                <h3 className="text-base font-bold text-stone-900">朝の雪見露天風呂＆加賀の滋味あふれる朝ごはん</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  初冬の清涼な朝、湯けむり立ち上る露天風呂へ。朝食には炊きたて石川県産米、温泉卵、日本海カレイの一夜干し、加賀野菜の煮物など心温まる郷土朝食をいただきます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">山中温泉・鶴仙渓「こおろぎ橋」「あやとり橋」散策</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  車またはバスで山中温泉へ移動。総檜造りの名橋「こおろぎ橋」からワインレッドの「あやとり橋」まで、初冬の鶴仙渓遊歩道を散策。ゆげ街道で山中漆器や温泉まんじゅうをお土産に購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Q & A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                加賀温泉郷の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>北陸のズワイガニ漁解禁日はいつですか？「加能ガニ」と「香箱ガニ」の違いは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                石川県をはじめとする北陸のズワイガニ漁は毎年11月6日に一斉解禁されます。『加能ガニ（かのうがに）』は石川県内の漁港で水揚げされた雄のズワイガニのことで、青いタグが付けられます。太い脚にぎっしり詰まった甘い身と濃厚なカニ味噌が特徴です。一方、『香箱ガニ（こうばこがに）』は雌のズワイガニのことで、漁期が11月6日から12月末までの約2ヶ月間と極めて限定されています。小ぶりながら、お腹の外子（プチプチとした卵）と甲羅の中の内子（濃厚な未受精卵）、カニ味噌が凝縮された冬の珍味です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>加賀温泉郷の11月・12月の気候と服装、雪への備えは必要ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                加賀温泉郷は11月中旬頃までは比較的穏やかですが、下旬から冷え込みが強まり、12月に入ると日本海特有の冬の気圧配置（雨やみぞれ、雪）が増えます。12月中旬以降は雪が積もることがあるため、お車の場合はスタッドレスタイヤが必須です。冬の北陸は湿り気を帯びた冷たい風が吹くため、防水・防寒性に優れたダウンジャケット、傘、滑りにくい靴を必ずご用意ください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>山代温泉と山中温泉の雰囲気の違いや見どころは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                『山代温泉』は開湯1300年の歴史を持ち、共同浴場『総湯』『古総湯』を中心に紅殻格子の旅館が円状に連なる『湯の曲輪（ゆのがわ）』が象徴的。北大路魯山人ゆかりの地で、九谷焼の窯元巡りや町歩きが魅力です。一方、『山中温泉』は名勝・鶴仙渓の深い渓谷沿いに広がり、松尾芭蕉が愛した名湯。こおろぎ橋やあやとり橋を巡る渓谷美と、伝統工芸・山中漆器の職人技が息づく風光明媚な温泉地です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>北陸新幹線加賀温泉駅からのアクセスは便利ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                北陸新幹線の敦賀延伸開業により、東京方面や関西・中京方面からのアクセスが飛躍的に向上しました。加賀温泉駅からは、各主要旅館の無料送迎バス（要予約）または路線バス『キャン・バス』が運行されており、山代温泉へは約10分、山中温泉へは約15〜20分でスムーズに到着できます。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-red-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆カニ・名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-crab-gourmet-luxury-inn-ranking"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">冬の味覚の王様</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【極上カニ宿ランキング】冬の味覚・本場活ガニをフルコースで味わう至高の温泉旅館
              </h3>
            </Link>

            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">山陰の松葉ガニ名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【城崎温泉】冬の松葉ガニ解禁と七田外湯めぐり・浴衣そぞろ歩き宿
              </h3>
            </Link>

            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">ラジウム名湯＆カニ</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【三朝温泉】世界屈指のラジウム泉と冬の極上松葉がにフルコース
              </h3>
            </Link>

            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">東海の美肌名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【下呂温泉】冬花火ミュージカルと日本三名泉美肌湯・飛騨牛会席
              </h3>
            </Link>

            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">京都の冬情緒</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【京都嵐山】渡月橋の初冬絶景と名物湯豆腐会席・静寂の名旅館
              </h3>
            </Link>

            <Link 
              href="/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">会津の初雪名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【会津東山温泉】雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿
              </h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
