import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Mountain 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【12月開幕！野沢温泉パウダースノー】天然雪100%ゲレンデと名物13外湯めぐり＆信州牛美食宿5選",
  description: "12月上旬オープン！天然雪100%の極上パウダースノーと総滑走距離44kmを誇る「野沢温泉スキー場」！江戸時代から湯仲間が大切に守り継ぐ名物「13の外湯めぐり」と、冬の風物詩・野沢菜本漬け、信州牛会席に寛ぐ老舗温泉宿ステイ。",
  keywords: '野沢温泉 スキー, 野沢温泉 パウダースノー, 野沢温泉 外湯めぐり, 野沢温泉 旅館, 信州牛 温泉, 長野 12月 スキー場, ゲレンデ直結 温泉宿',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay/",
  },
  openGraph: {
    title: "【12月開幕！野沢温泉パウダースノー】天然雪100%ゲレンデと名物13外湯めぐり＆信州牛美食宿5選",
    description: "12月上旬オープン！天然雪100%の極上パウダースノーと総滑走距離44kmを誇る「野沢温泉スキー場」！江戸時代から湯仲間が大切に守り継ぐ名物「13の外湯めぐり」と、冬の風物詩・野沢菜本漬け、信州牛会席に寛ぐ老舗温泉宿ステイ。",
    url: 'https://croud-travel.pages.dev/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【12月開幕！野沢温泉パウダースノー】天然雪100%ゲレンデと名物13外湯めぐり＆信州牛美食宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12月開幕！野沢温泉パウダースノー】天然雪100%ゲレンデと名物13外湯めぐり＆信州牛美食宿5選",
    description: "12月上旬オープン！天然雪100%の極上パウダースノーと総滑走距離44kmを誇る「野沢温泉スキー場」！江戸時代から湯仲間が大切に守り継ぐ名物「13の外湯めぐり」と、冬の風物詩・野沢菜本漬け、信州牛会席に寛ぐ老舗温泉宿ステイ。",
  }
};

export default function NozawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay#article",
        "headline": "【12月開幕！野沢温泉パウダースノー】天然雪100%ゲレンデと名物13外湯めぐり＆信州牛美食宿5選",
        "description": "12月上旬オープン！天然雪100%の極上パウダースノーと総滑走距離44kmを誇る「野沢温泉スキー場」！江戸時代から湯仲間が大切に守り継ぐ名物「13の外湯めぐり」と、冬の風物詩・野沢菜本漬け、信州牛会席に寛ぐ老舗温泉宿ステイ。",
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
          "@id": "https://croud-travel.pages.dev/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "野沢温泉の外湯（共同浴場）めぐりの入浴方法とマナーは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "外湯は村の住民組織「湯仲間」が日々清掃・管理しています。観光客も無料で利用できますが、入口の賽銭箱に感謝の気持ちとして「寸志（100円〜数百円程度）」を納めるのがマナーです。源泉が非常に熱いため、湯もみ板でかき混ぜ、加水する場合は周囲の方に一声かけましょう。また石鹸やシャンプーは備え付けられていないため持参が必要です。"
            }
          },
          {
            "@type": "Question",
            "name": "12月の野沢温泉スキー場のオープン時期と雪質は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "例年11月下旬〜12月上旬にやまびこゲレンデなど山頂エリアから順次オープンします。標高1,650mの毛無山山頂付近は完全天然雪100%の上質なドライパウダースノーが降り積もり、12月中旬以降はベースエリアまで滑走可能となる日が多くなります。"
            }
          },
          {
            "@type": "Question",
            "name": "冬に車で向かう場合、スタッドレスタイヤやチェーンは必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "絶対に必須です。野沢温泉村は豪雪地帯に位置しており、12月に入ると路面凍結や圧雪路が日常的になります。必ず高性能なスタッドレスタイヤを装着し、念のためタイヤチェーンも携行してください。新幹線飯山駅から直通バス「野沢温泉ライナー（約25分）」の利用も大変便利でおすすめです。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の風物詩「野沢菜の本漬け」とは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月下旬に村人総出で麻釜（おがま）などの温泉で野沢菜を洗い、大きな桶に漬け込む伝統行事です。12月になると各旅館や食堂で漬けたての瑞々しくシャキシャキとした「本漬け」が振る舞われ、地酒「水尾」との相性は格別です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "野沢温泉　河一屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8186%2F8186.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "野沢温泉　旅館　さかや",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108127%2F108127.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "野沢温泉　朝日屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31573%2F31573.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "野沢温泉　常盤屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53402%2F53402.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "野沢温泉　中島屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38063%2F38063.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "野沢温泉　河一屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8186/8186.jpg",
              rating: 4.57,
              reviews: 825,
              price: "¥10,972〜",
              access: "豊田飯山IC⇒R117「野沢温泉」方面25分　新幹線飯山駅⇒野沢温泉行バス25分「野沢温泉」下車徒歩2分",
              special: "【新客室オープン】天下の名湯・真湯を贅沢に独り占めできます♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8186%2F8186.html",
              story: "野沢温泉の数ある源泉の中でも「天下の名湯」と称えられる希少な「真湯（しんゆ）」の自家源泉を引湯する屈指の人気宿。季節や天候によって透明から淡いエメラルドグリーン、そして白濁へと神秘的な湯色の変化を見せる含硫黄-ナトリウム・カルシウム-塩化物温泉は、肌をすべすべにし、体の芯までポカポカに温めてくれます。内湯の大浴場はもちろん、新設されたモダンな貸切風呂でもこの極上の濁り湯を独り占めできます。館内は和モダンなリノベーションが施され、全館畳敷きの心地よさ。夕食は信州プレミアム牛肉の石焼きステーキや、地元契約農家から届く根菜を使った彩り豊かな山里会席が並びます。",
              roomTip: "新設されたデザイナーズ客室は、シモンズ製ローベッドと広々としたリビングスペースを備え、雪景色を眺めながら静かに寛げる極上のプライベート空間です。",
              gourmetTip: "野沢温泉名物の野沢菜本漬けをはじめ、信州サーモンのカルパッチョや地元飯山産みゆきポークの角煮など、地産地消にこだわった滋味深い美食が堪能できます。",
              highlights: [
                "天下の名湯「真湯」の自家源泉を引湯！緑白色に濁る極上の硫黄泉を貸切風呂で独り占め",
                "信州プレミアム牛ステーキや地元契約農家の採れたて旬野菜が並ぶ会席料理",
                "新設のデザイナーズ客室やモダン和室で過ごす快適な冬のリゾート空間"
              ]
            },
            {
              id: 2,
              name: "野沢温泉　旅館　さかや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108127/108127.jpg",
              rating: 4.53,
              reviews: 383,
              price: "¥17,600〜",
              access: "北陸長野新幹線飯山駅下車→シャトルバス「野沢温泉ライナー」25分→野沢温泉下車→徒歩3分",
              special: "野沢温泉の憧れの老舗温泉旅館。自然湧出する自家源泉は贅沢に掛け流され、抜群の効能を誇っています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108127%2F108127.html",
              story: "創業明治時代、数多くの文人墨客やスキーの草分け達に愛されてきた野沢温泉を代表する憧れの老舗温泉旅館。敷地内に自然湧出する自家源泉「鷹の湯」は、宮大工が釘を一本も使わずに組み上げた伝統の湯屋建築の中に注がれ、湯船の底から立ち上る湯けむりと木の香りが荘厳な雰囲気を醸し出しています。湯の花が舞うエメラルドグリーンの源泉は完全かけ流し。客室は純和風の数寄屋造りで、手入れの行き届いた雪化粧の庭園を眺めながら、日本の伝統的な美意識と至高のおもてなしに浸ることができます。",
              roomTip: "庭園を望む数寄屋造りの和室や、露天風呂付き客室「千代の館」は特別な記念日旅行に最適。静寂の中で雪見風呂を贅沢に独占できます。",
              gourmetTip: "板前が腕を振るう本格信州会席は、信州牛のサーロインステーキ、信濃雪鱒のお造り、地元のきのこ鍋など、季節の味覚が優雅な器に盛り付けられた芸術品です。",
              highlights: [
                "創業100年以上の歴史を誇る野沢温泉随一の老舗宿！宮大工が手がけた伝統の湯屋建築「鷹の湯」",
                "自家源泉かけ流しの贅沢な湯浴みと、季節の彩り豊かな本格信州会席ディナー",
                "純和風の落ち着いた客室から眺める白銀の庭園と雪景色"
              ]
            },
            {
              id: 3,
              name: "野沢温泉　朝日屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31573/31573.jpg",
              rating: 4.05,
              reviews: 401,
              price: "¥8,855〜",
              access: "飯山駅より野沢温泉まで直通バス「野沢温泉ライナー」で25分",
              special: "【野沢温泉スキー場へ徒歩7分】【外湯の多くも徒歩5分以内】24時間源泉かけ流し温泉♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31573%2F31573.html",
              story: "野沢温泉スキー場の日影ゲレンデ連絡リフトまで徒歩7分、温泉街の中心・大湯通りへも徒歩5分という、スノースポーツと湯めぐりの両立に最も理想的な立地を誇る旅館。最上階に位置する展望大浴場「朝日の湯」は24時間源泉かけ流しで、窓の外に広がる北信州の山々と温泉街の白銀パノラマを一望できます。乾燥室やスキーロッカー、チューンナップスペースが完備されており、スキーヤーやスノーボーダーへのサポート体制は抜群。アットホームで温かい接客と、リーズナブルで充実した宿泊プランが幅広い世代に支持されています。",
              roomTip: "広々とした和室はゲレンデ側の客室がおすすめ。朝目覚めると窓一面に白銀のゲレンデが広がり、その日の雪質コンディションを部屋から確認できます。",
              gourmetTip: "夕食は冷えた体に染み渡る信州味噌仕立ての温かいお鍋や、郷土料理「笹寿司」、長野県産ポークの陶板焼きなど、ボリューム満点の手作り料理が楽しめます。",
              highlights: [
                "野沢温泉スキー場日影ゲレンデへ徒歩7分の好立地！24時間源泉かけ流し展望風呂完備",
                "外湯めぐりにも抜群のアクセスでスキーロッカー・乾燥室も完備",
                "スキーヤー・スノーボーダーに嬉しいリーズナブルな宿泊プランも充実"
              ]
            },
            {
              id: 4,
              name: "野沢温泉　常盤屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/53402/53402.jpg",
              rating: 4.64,
              reviews: 246,
              price: "¥6,655〜",
              access: "ＪＲ飯山駅より野沢ライナー25分バス停より徒歩4分／上信越自動車道　豊田飯山インターより車で30分",
              special: "寛永年間(江戸時代）創業380年「大湯」の隣に佇む老舗宿、源泉全てが自然湧出１００％かけ流し！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53402%2F53402.html",
              story: "寛永年間（江戸時代前期）創業、380年以上の歴史を誇る野沢温泉最古の老舗宿。温泉街の象徴である「大湯」の真隣という特等席に位置し、大正ロマンの情緒が漂うクラシカルな木造建築が旅情をそそります。宿の自家源泉「光明皇后の湯」は、自然湧出100%のかけ流し。大浴場には高温風呂と適温風呂が並び、外湯めぐりと合わせて歴史ある名湯の神髄を心ゆくまで堪能できます。館内には代々の歴史を伝える貴重な書画や骨董品が飾られ、まるで歴史の生きた博物館に滞在しているかのような深みのある時間を味わえます。",
              roomTip: "大湯通りに面した客室からは、下駄の音を響かせて外湯へ通う温泉街のノスタルジックな情景を見下ろすことができ、温泉情緒を存分に満喫できます。",
              gourmetTip: "信州プレミアム牛のすき焼きをはじめ、北信州の山の幸・川の幸をふんだんに取り入れた伝統の会席料理。創業当時から受け継がれる秘伝の出汁が絶品です。",
              highlights: [
                "創業380年！シンボル「大湯」の真隣に佇む歴史ある名宿。自然湧出100%の自家源泉「光明皇后の湯」",
                "大湯通りの真ん中に位置し、下駄を鳴らして温泉街そぞろ歩きを満喫",
                "温泉街のシンボル大湯を目の前に望む特等席のロケーション"
              ]
            },
            {
              id: 5,
              name: "野沢温泉　中島屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38063/38063.jpg",
              rating: 4.50,
              reviews: 168,
              price: "¥11,000〜",
              access: "JR飯山駅より直通バス「野沢温泉ライナー」で25分、上信越道　豊田飯山ICから車で30分",
              special: "山里ごはん＆源泉かけ流しの湯でココロとカラダの癒し旅を♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38063%2F38063.html",
              story: "温泉街のやや奥まった静かな高台、名物外湯「熊の手洗湯」のすぐそばに佇む、温もりあふれる温泉旅館。自家源泉かけ流しの天然温泉大浴場は、弱アルカリ性の柔らかな泉質で肌当たりが優しく、長時間の入浴でも疲れないのが特徴です。この宿の最大の自慢は「食の温もり」。毎朝ロビーで搗きあげられる熱々の「温泉餅（おろし餅・きなこ餅）」の無料サービスは名物で、宿泊客から大絶賛されています。手作りの郷土家庭料理と、女将の心温まる笑顔に癒やされ、まるで田舎の我が家に帰ってきたかのような安らぎに包まれます。",
              roomTip: "畳の温かみが心地よい清潔な和室は、静かな環境で読書をしたり、外湯めぐりの合間に昼寝をしたりと、ゆったりとした湯治滞在にぴったりです。",
              gourmetTip: "夕食は信州牛の陶板焼きや、信州サーモンの朴葉焼き、採れたて地野菜の天ぷらなど、一品一品手作りにこだわった滋味深い山里のご馳走が並びます。",
              highlights: [
                "アットホームな温もりに満ちた自家源泉の宿！毎朝つきたての温泉餅と手作り山里ごはんが大好評",
                "信州サーモンや郷土料理、女将特製の温かい煮物でもてなす贅沢なひととき",
                "温泉街散策や外湯「熊の手洗湯」至近の静かなロケーション"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="野沢温泉の雪景色と立ち上る温泉街の湯けむり"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-600/90 text-white text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-teal-400/30">
            <Snowflake className="w-4 h-4 text-cyan-200" />
            <span>12月シーズン開幕！天然雪100%＆名湯めぐり</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【12月開幕！野沢温泉パウダースノー】<br className="hidden sm:inline" />
            天然雪100%ゲレンデと名物13外湯めぐり＆信州牛美食宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            標高1,650mから降り積もる極上のサラサラ粉雪。滑走を楽しんだ後は、江戸時代から受け継がれる13の外湯を浴衣と下駄で巡り、信州牛ステーキと名物野沢菜に舌鼓を打つ日本最高峰のスノー＆温泉リトリート。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> 長野県（野沢温泉村・北信州）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-600">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Snow & Onsen Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                白銀のゲレンデと湯煙が立ち上る石畳。世界を魅了する冬の野沢温泉
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            長野県北部に位置する野沢温泉村は、冬になると世界中からスノースポーツ愛好家と温泉ファンが熱狂する「雪と名湯の聖地」です。12月上旬、標高1,650mの毛無山山頂から広がる「野沢温泉スキー場」がシーズンイン。標高差1,085m、最長滑走距離10,000m、全44コースのメガゲレンデには、人口降雪機を一切必要としない「天然雪100%」の極上シルキーパウダースノーが降り積もります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして野沢温泉の真髄は、滑走後の温泉街にあります。江戸時代から村人たちの自治組織「湯仲間（ゆなかま）」が清掃と管理を守り継いできた「13の外湯（共同浴場）」。シンボルである重厚な木造建築「大湯」をはじめ、エメラルドグリーンに輝く「真湯」、古くから傷を癒やした「熊の手洗湯」など、それぞれ源泉や効能、湯ざわりが異なる名湯が村内に点在しています。雪降る石畳を下駄の音を鳴らしながら歩き、熱々の源泉に浸かって冷えた体を解きほぐす時間は、日本古来の湯治文化の温もりに満ちています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            冬の味覚もまた格別です。11月下旬に天然記念物「麻釜（おがま）」の熱湯で洗われ、冬の寒さの中でじっくり漬け込まれた名物「野沢菜の本漬け」のシャキシャキとした食感と瑞々しい塩気。とろけるような肉質の「信州プレミアム牛肉」のすき焼きや陶板焼き、清流が育んだ「信州サーモン」、地酒「水尾」とともに味わう贅沢な山里会席。スキーと温泉文化が高次元で融合した、冬の野沢温泉の厳選宿をご紹介します。
          </p>
          <div className="bg-teal-50/60 rounded-2xl p-5 border border-teal-200/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-teal-600" />
                宿の内湯と13の外湯を組み合わせる「はしご湯」が醍醐味
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                旅館の快適な内湯・露天風呂で温まったあと、浴衣姿で近所の外湯へ出かけるのが伝統的な楽しみ方です。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Village Charms</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の野沢温泉で体験すべき3大ハイライト
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">天然雪100%！極上パウダースノー</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                標高1650mのやまびこゲレンデから広がる極上の雪質。新雪ツリーランから初心者向け緩斜面まで圧倒的なコーススケール。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">名物「13の外湯めぐり」と麻釜</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                江戸時代から続く共同浴場文化。大湯、真湯、熊の手洗湯など個性豊かな源泉を浴衣と下駄で巡る風情ある湯浴み。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">信州牛ステーキ＆野沢菜本漬け</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                とろける信州プレミアム牛と、冬に漬け上がったばかりのシャキシャキ野沢菜。地酒「水尾」とのペアリングは至福。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Selected Innn</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              パウダースノーと外湯めぐりを満喫する野沢温泉の厳選宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-2">
              楽天トラベル公式APIより取得した最新情報に基づき、自家源泉やゲレンデアクセス、料理評価に優れた名宿をご紹介。
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
                        <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                          野沢温泉村・源泉かけ流し
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
                          <Info className="w-4 h-4 text-teal-600" />
                          宿の魅力と自家源泉・信州会席レビュー
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {hotel.story}
                        </p>
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/60 text-xs text-stone-600 space-y-1">
                          <div><strong className="text-stone-800">お部屋選びのヒント:</strong> {hotel.roomTip}</div>
                          <div><strong className="text-stone-800">夕食＆朝食のこだわり:</strong> {hotel.gourmetTip}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                        <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">主な特徴・サービス</h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-400 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-teal-700">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02]"
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
                野沢温泉厳選5宿 自家源泉・ゲレンデ立地比較表
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                  <th className="py-3 px-4 font-bold">宿名</th>
                  <th className="py-3 px-4 font-bold">自家源泉・内湯特徴</th>
                  <th className="py-3 px-4 font-bold">スキー場・外湯立地</th>
                  <th className="py-3 px-4 font-bold">おすすめの滞在スタイル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">河一屋旅館</td>
                  <td className="py-3 px-4">真湯源泉（緑白濁硫黄泉）</td>
                  <td className="py-3 px-4">真湯・麻釜 徒歩すぐ</td>
                  <td className="py-3 px-4">にごり湯硫黄泉とモダン客室で贅沢に寛ぎたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">旅館 さかや</td>
                  <td className="py-3 px-4">自家源泉 鷹の湯（宮大工建築）</td>
                  <td className="py-3 px-4">大湯通り至近</td>
                  <td className="py-3 px-4">野沢屈指の老舗格調と最高峰の会席を堪能したい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">朝日屋旅館</td>
                  <td className="py-3 px-4">24時間展望大浴場</td>
                  <td className="py-3 px-4">日影ゲレンデ 徒歩7分</td>
                  <td className="py-3 px-4">スキー＆スノボを一日中滑り倒したいアクティブ派</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">常盤屋旅館</td>
                  <td className="py-3 px-4">自然湧出 光明皇后の湯</td>
                  <td className="py-3 px-4">大湯の真隣（徒歩0分）</td>
                  <td className="py-3 px-4">創業380年の歴史と外湯めぐりの中心で滞在したい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">中島屋旅館</td>
                  <td className="py-3 px-4">自家源泉かけ流し熊の手洗湯至近</td>
                  <td className="py-3 px-4">温泉街中ほど</td>
                  <td className="py-3 px-4">女将の手作り山里ごはんとお餅の温もりを味わいたい方</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expert Winter Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-600">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Local Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                野沢温泉スキー＆外湯めぐりを何倍も楽しむエキスパートTIPS
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-teal-600" />
                名物「集印めぐり（スタンプラリー）」で記念手ぬぐいをゲット
              </h3>
              <p>
                観光案内所や旅館で「集印帳（手ぬぐい）」を購入し、13の外湯や名所に設置された木版スタンプを押して巡るのが野沢温泉の王道の楽しみ方。10箇所以上集めると特製の記念岡本太郎デザインの記念品がもらえます。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-teal-600" />
                熱い外湯の入り方のコツ（かけ湯を念入りに）
              </h3>
              <p>
                野沢温泉の外湯は源泉温度が60度以上あり、浴槽も43〜46度とかなり熱めです。いきなり肩まで浸からず、足先から太もも、お腹へと20回以上かけ湯をして体を慣らしてから、静かに入浴するのが湯あたりを防ぐ秘訣です。
              </p>
            </div>
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-gradient-to-br from-teal-50/70 via-white to-stone-50 rounded-3xl p-6 sm:p-10 border border-teal-200/80 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Model Course</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              【1泊2日】極上パウダースノー滑走と名物外湯めぐり満喫コース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              初滑りパウダースノーの爽快感と、白銀の温泉街情景を味わい尽くす冬の理想プラン。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-teal-100">
                <span className="px-3 py-1 bg-teal-600 text-white font-bold text-xs rounded-full">DAY 1</span>
                <h3 className="font-bold text-stone-900 text-base">やまびこゲレンデ初滑りと外湯湯めぐり</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">10:00</strong>
                  <span>飯山駅から野沢温泉ライナーで温泉街到着。宿に荷物を預け、最新ゴンドラで毛無山山頂へ！</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">11:00</strong>
                  <span>天然雪100%のやまびこゲレンデでサラサラ粉雪クルージング。山頂レストハウスで名物ランチ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">15:00</strong>
                  <span>滑走終了後、旅館にチェックイン。宿の自家源泉内湯で滑走後の筋肉をじっくり温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">16:30</strong>
                  <span>浴衣と丹前を羽織り、雪の降る石畳へ。シンボル「大湯」と「真湯」の外湯めぐりを楽しむ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">18:30</strong>
                  <span>夕食は信州プレミアム牛ステーキと野沢菜本漬け、信州サーモン。地酒「水尾」で乾杯。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">21:00</strong>
                  <span>夜の大湯通りをそぞろ歩き、温泉街のクラフトビールバーやお土産屋を覗いて夜の温泉へ。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-100">
                <span className="px-3 py-1 bg-amber-600 text-white font-bold text-xs rounded-full">DAY 2</span>
                <h3 className="font-bold text-stone-900 text-base">朝湯・温泉卵と冬の麻釜散策</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">07:00</strong>
                  <span>清々しい朝の「熊の手洗湯」へ。ぬるめの源泉で目覚まし入浴。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">08:00</strong>
                  <span>宿の朝食。温泉卵、手作り豆腐、炊きたて長野県産米と熱々の味噌汁をいただく。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">09:30</strong>
                  <span>チェックアウト後、湯けむり立ち上る奇勝「麻釜（おがま）」を見学。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">11:00</strong>
                  <span>温泉街の蒸したて「野沢菜おやき」を食べ歩き。お土産用の樽漬け野沢菜や地酒を購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">12:30</strong>
                  <span>名物「富倉そば」の手打ち蕎麦ランチを堪能し、野沢温泉ライナーで飯山駅へ。帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-600">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の野沢温泉・スキー旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 野沢温泉の外湯（共同浴場）めぐりの入浴方法とマナーは？</span>
                <span className="text-teal-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                外湯は村の住民組織「湯仲間」が日々清掃・管理しています。観光客も無料で利用できますが、入口の賽銭箱に感謝の気持ちとして「寸志（100円〜数百円程度）」を納めるのがマナーです。源泉が非常に熱いため、湯もみ板でかき混ぜ、加水する場合は周囲の方に一声かけましょう。また石鹸やシャンプーは備え付けられていないため持参が必要です。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 12月の野沢温泉スキー場のオープン時期と雪質は？</span>
                <span className="text-teal-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                例年11月下旬〜12月上旬にやまびこゲレンデなど山頂エリアから順次オープンします。標高1,650mの毛無山山頂付近は完全天然雪100%の上質なドライパウダースノーが降り積もり、12月中旬以降はベースエリアまで滑走可能となる日が多くなります。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 冬に車で向かう場合、スタッドレスタイヤやチェーンは必要ですか？</span>
                <span className="text-teal-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                絶対に必須です。野沢温泉村は豪雪地帯に位置しており、12月に入ると路面凍結や圧雪路が日常的になります。必ず高性能なスタッドレスタイヤを装着し、念のためタイヤチェーンも携行してください。新幹線飯山駅から直通バス「野沢温泉ライナー（約25分）」の利用も大変便利でおすすめです。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 冬の風物詩「野沢菜の本漬け」とは何ですか？</span>
                <span className="text-teal-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月下旬に村人総出で麻釜（おがま）などの温泉で野沢菜を洗い、大きな桶に漬け込む伝統行事です。12月になると各旅館や食堂で漬けたての瑞々しくシャキシャキとした「本漬け」が振る舞われ、地酒「水尾」との相性は格別です。
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
                長野・甲信越の雪見温泉＆スキーリゾート特集を探す
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <Link 
              href="/prefectures/nagano" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-teal-50 hover:text-teal-700 transition font-medium border border-stone-100"
            >
              長野県の温泉宿・ホテル一覧 →
            </Link>
            <Link 
              href="/winter-hakuba-snow-resort-ski-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-teal-50 hover:text-teal-700 transition font-medium border border-stone-100"
            >
              白馬スノーリゾート特集 →
            </Link>
            <Link 
              href="/winter-nagano-jigokudani-snow-monkey-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-teal-50 hover:text-teal-700 transition font-medium border border-stone-100"
            >
              地獄谷スノーモンキー宿特集 →
            </Link>
            <Link 
              href="/winter-gunma-manza-snow-milky-hotspring-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-teal-50 hover:text-teal-700 transition font-medium border border-stone-100"
            >
              万座温泉 にごり湯特集 →
            </Link>
            <Link 
              href="/prefectures/niigata" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-teal-50 hover:text-teal-700 transition font-medium border border-stone-100"
            >
              新潟県（湯沢・妙高）の宿 →
            </Link>
            <Link 
              href="/prefectures/gunma" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-teal-50 hover:text-teal-700 transition font-medium border border-stone-100"
            >
              群馬県（草津・伊香保）の宿 →
            </Link>
            <Link 
              href="/winter-ski-snowboard-resort" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-teal-50 hover:text-teal-700 transition font-medium border border-stone-100"
            >
              全国スキー＆スノーボード宿特集 →
            </Link>
            <Link 
              href="/features" 
              className="p-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition font-bold text-center flex items-center justify-center gap-1"
            >
              <span>全国の特集一覧を見る</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
