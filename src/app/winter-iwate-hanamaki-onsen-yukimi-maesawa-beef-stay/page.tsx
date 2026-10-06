import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Feather, Trees
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月花巻温泉郷の白銀雪見露天と宮沢賢治の世界】奥羽山脈の名湯巡り・極上前沢牛＆白金豚しゃぶしゃぶの宿5選",
  description: "童話作家・宮沢賢治が愛した理想郷「イーハトーブ」の地・岩手県花巻温泉郷。11月下旬の初雪から12月の白銀世界へと移ろう初冬、赤松林に囲まれた美肌の湯や日本一深い自噴立ち湯で愉しむ雪見露天風呂。霜降り極上の前沢牛すき焼きとブランド豚「白金豚」のしゃぶしゃぶ、南部杜氏が醸す寒造り地酒を堪能する名宿ガイド。",
  keywords: '花巻温泉郷 宿泊 11月 12月, 花巻温泉 佳松園 予約, 鉛温泉 藤三旅館 白猿の湯, 前沢牛 白金豚 旅館, 花巻温泉 雪見露天風呂, 宮沢賢治 イーハトーブ 花巻, 花巻温泉郷 冬 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay/",
  },
  openGraph: {
    title: "【11・12月花巻温泉郷の白銀雪見露天と宮沢賢治の世界】奥羽山脈の名湯巡り・極上前沢牛＆白金豚しゃぶしゃぶの宿5選",
    description: "童話作家・宮沢賢治が愛した理想郷「イーハトーブ」の地・岩手県花巻温泉郷。11月下旬の初雪から12月の白銀世界へと移ろう初冬、赤松林に囲まれた美肌の湯や日本一深い自噴立ち湯で愉しむ雪見露天風呂。霜降り極上の前沢牛すき焼きとブランド豚「白金豚」のしゃぶしゃぶ、南部杜氏が醸す寒造り地酒を堪能する名宿ガイド。",
    url: 'https://croud-travel.pages.dev/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月花巻温泉郷の白銀雪見露天と宮沢賢治の世界】奥羽山脈の名湯巡り・極上前沢牛＆白金豚しゃぶしゃぶの宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月花巻温泉郷の白銀雪見露天と宮沢賢治の世界】奥羽山脈の名湯巡り・極上前沢牛＆白金豚しゃぶしゃぶの宿5選",
    description: "童話作家・宮沢賢治が愛した理想郷「イーハトーブ」の地・岩手県花巻温泉郷。11月下旬の初雪から12月の白銀世界へと移ろう初冬、赤松林に囲まれた美肌の湯や日本一深い自噴立ち湯で愉しむ雪見露天風呂。霜降り極上の前沢牛すき焼きとブランド豚「白金豚」のしゃぶしゃぶ、南部杜氏が醸す寒造り地酒を堪能する名宿ガイド。",
  }
};

export default function HanamakiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay#article",
        "headline": "【11・12月花巻温泉郷の白銀雪見露天と宮沢賢治の世界】奥羽山脈の名湯巡り・極上前沢牛＆白金豚しゃぶしゃぶの宿5選",
        "description": "童話作家・宮沢賢治が愛した理想郷「イーハトーブ」の地・岩手県花巻温泉郷。11月下旬の初雪から12月の白銀世界へと移ろう初冬、赤松林に囲まれた美肌の湯や日本一深い自噴立ち湯で愉しむ雪見露天風呂。霜降り極上の前沢牛すき焼きとブランド豚「白金豚」のしゃぶしゃぶ、南部杜氏が醸す寒造り地酒を堪能する名宿ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "花巻温泉郷の11月・12月の降雪時期と雪景色の見頃は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "岩手県花巻市は東北の内陸部に位置し、例年11月中旬に奥羽山脈の山々が初冠雪を迎えます。温泉街周辺では11月下旬頃に初雪が降り、12月に入ると本格的な積雪となって美しい白銀世界が広がります。赤松林の枝に雪が積もり、渓流沿いの露天風呂から雪景色を眺められる『雪見露天風呂』は12月上旬から3月上旬にかけてベストシーズンとなります。お車の場合はスタッドレスタイヤの装着が必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "花巻温泉郷（花巻・台・鉛・新鉛など）の温泉の違いと特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "花巻温泉郷は豊沢川や台川沿いに連なる十数箇所の個性豊かな温泉の総称です。代表的な『花巻温泉』は広大な赤松林に囲まれ、pH9.0のとろみある美肌アルカリ性単純温泉が特徴。『台温泉』は開湯600年の歴史を持つ湯治場風情の天然硫黄泉。『鉛温泉（藤三旅館）』は深さ1.25mの天然岩底から自噴する立ち湯『白猿の湯』で日本全国に知られます。それぞれ泉質・効能・風情が異なり、湯めぐりの醍醐味を存分に味わえます。"
            }
          },
          {
            "@type": "Question",
            "name": "新幹線や飛行機でのアクセスと無料送迎バスの運行は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "東北新幹線『新花巻駅』から花巻温泉郷の各宿へは、宿泊者専用の無料送迎バスや路線バスが運行しており、約20〜30分で到着します。東京駅からは東北新幹線『はやぶさ』『やまびこ』で約2時間30分〜3時間です。また『いわて花巻空港』からもタクシーや連絡バスで約15〜20分と至近。雪道の運転を避けたい冬の旅行でも、公共交通機関だけで快適かつ安全にアクセスできます。"
            }
          },
          {
            "@type": "Question",
            "name": "花巻温泉郷で絶対に味わいたい冬の美食は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "岩手県が世界に誇る最高級黒毛和牛『前沢牛（まえさわぎゅう）』の霜降りステーキやすき焼きは圧巻の美味しさです。また、花巻の澄んだ伏流水と非遺伝子組換え飼料で育てられる特産ブランド豚『白金豚（プラチナポーク）』は、きめ細やかな肉質と甘い脂がしゃぶしゃぶで絶品です。さらに南部鉄器の小鍋で仕立てる郷土の味『ひっつみ汁』や、南部杜氏の里・岩手が誇る寒造りの銘酒（南部美人、月の輪など）が冬の膳を彩ります。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "花巻温泉　佳松園",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13482%2F13482.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "花巻温泉　ホテル紅葉館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13483%2F13483.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "鉛温泉「藤三旅館・別邸」心の刻　十三月",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147774%2F147774.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "囲炉裏懐石と天然温泉を楽しむ　秘境の隠れ家　やまゆりの宿",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28738%2F28738.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "花巻温泉　ホテル千秋閣",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13484%2F13484.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "花巻温泉　佳松園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13482/13482.jpg",
              rating: 4.69,
              reviews: 1108,
              price: "¥20,900〜",
              access: "花巻IC：右折後直進4km（5分）、JR新花巻駅・JR花巻駅：無料送迎バス20分（定時運行・完全予約制）",
              special: "とろとろの湯と心に残るおもてなし。特別な日を佳松園で過ごす愉しみ。花巻ICよりわずか5分の別世界。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13482%2F13482.html",
              story: "花巻温泉の奥座敷、静かな南部赤松林に抱かれた最高峰の純和風旅館「佳松園（かしょうえん）」。皇室ゆかりの宿としても知られ、中庭のかがり火や数寄屋造りの格調高い建築美が、初冬の凛とした静寂の中に浮かび上がります。宿の最大の自慢は、とろりとした美容液のような極上の肌ざわりを誇る自家源泉「pH9.0の低張性アルカリ性単純温泉」。ヒノキの香る広々とした大浴殿と、赤松の雪景色を望む露天風呂に浸かれば、角質をやさしく洗い流して湯上がりは驚くほどすべすべの美肌に生まれ変わります。客室や廊下の至る所に生けられた季節の花々、専任仲居による細やかで温かなもてなしが、旅人を優雅な非日常へと誘います。",
              roomTip: "赤松の庭園を見下ろす広々とした数寄屋和室やリビング付き客室。雪化粧した松の木々と中庭の灯りを眺めながら、静謐な冬の時間を過ごせます。",
              gourmetTip: "熟練の料理人が技を尽くす季節の京風会席。岩手県が誇る最高峰の黒毛和牛「前沢牛」のサーロインステーキやすき焼きをはじめ、三陸から届く冬の真鱈やホタテ、南部鉄器の小鍋で味わう郷土の味が食卓を華やかに彩ります。",
              highlights: [
                "皇室ゆかりの最高峰純和風旅館＆pH9.0のとろみある美肌自家源泉大浴場",
                "南部赤松林に囲まれた静寂の雪景色＆専任仲居による伝統の心づくしのおもてなし",
                "最高峰ブランド前沢牛サーロインステーキやすき焼き＆三陸冬魚介の京風会席"
              ]
            },
            {
              id: 2,
              name: "花巻温泉　ホテル紅葉館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13483/13483.jpg",
              rating: 4.32,
              reviews: 3756,
              price: "¥9,405〜",
              access: "花巻IC：右折後直進4km（5分）、JR新花巻駅・JR花巻駅：無料送迎バス20分（定時運行・完全予約制）",
              special: "日本の宿アワード TOP47＆ブロンズアワード受賞！かに＆牛ステーキと天ぷら＆釜めしフェア開催中",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13483%2F13483.html",
              story: "広大な花巻温泉リゾート内に位置し、活気と寛ぎが融合した人気の大型ホテル「ホテル紅葉館」。館内の連絡通路を通じて隣接する「ホテル花巻」「ホテル千秋閣」の3館すべての大浴殿・露天風呂を自由に巡ることができる「湯めぐり」が最大の魅力です。紅葉館自慢の露天風呂は、四季折々の渓流美と赤松林を目の前に望む岩風呂。11月・12月には雪が舞い散る中、湯けむりとともに幻想的な雪見風呂を楽しめます。夕食はお祭り広場での郷土芸能（鹿踊りや津軽三味線ライブ等）を鑑賞しながら楽しむバイキングや特選和食会席。三世代の家族旅行や友人同士の冬旅にも笑顔があふれる賑やかな滞在が叶います。",
              roomTip: "開放感ある上層階の和室や和洋室。窓の外に広がる奥羽山脈の山並みや雪化粧した松林を一望できます。",
              gourmetTip: "バイキングでは前沢牛のローストビーフや花巻名物「白金豚」のしゃぶしゃぶ、揚げたての天ぷら、握り寿司が食べ放題。和食会席プランなら落ち着いた個室で前沢牛ステーキをじっくり堪能できます。",
              highlights: [
                "連絡通路で3館の広大な大浴殿・雪見露天風呂を湯めぐり自由＆お祭り広場",
                "渓流と赤松を間近に望む大岩露天風呂＆ファミリーにも嬉しい充実施設",
                "前沢牛ローストビーフ＆花巻名物白金豚しゃぶしゃぶの贅沢ディナー"
              ]
            },
            {
              id: 3,
              name: "鉛温泉「藤三旅館・別邸」心の刻　十三月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147774/147774.jpg",
              rating: 4.50,
              reviews: 203,
              price: "¥18,340〜",
              access: "ＪＲ　花巻駅よりお車にて約２０分,（送迎バスあり、協力金：片道100円、予約必須）",
              special: "全14室の露天風呂付き客室で、新日本百名湯の名湯と豊沢川を一望",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147774%2F147774.html",
              story: "花巻温泉郷の最奥部、清流・豊沢川の渓谷沿いに佇む「鉛温泉 藤三旅館・別邸 心の刻 十三月（じゅうさんがつ）」。本館である藤三旅館は新日本百名湯にも選ばれる開湯600年の名湯で、その代名詞が深さ約1.25mの天然自噴岩風呂「白猿の湯（日本一深い自噴立ち湯）」。湯底の天然岩からポコポコと温泉が自噴し、立ったまま入浴することで全身に水圧がかかり血行を促します。その別邸「十三月」は、全14室すべてに源泉かけ流しの露天風呂を備えた大人のための贅沢なラグジュアリーリゾート。初冬の渓谷美と雪景色をプライベートなテラス露天風呂から眺め、名湯とモダンデザインが調和した至極の時間を過ごせます。",
              roomTip: "全室リバービューのスイートルーム仕様。テラスに備えられた客室露天風呂からは、雪化粧した豊沢川の渓流と雪景色を完全に独り占めできます。",
              gourmetTip: "モダンなダイニングでいただくモダン会席。前沢牛や岩手産黒毛和牛のグリルをメインに、三陸の冬魚介、地元野菜を美しく仕立てたフレンチと和のフュージョンコースです。",
              highlights: [
                "全室源泉かけ流し露天風呂付き客室＆日本一深い自噴立ち湯「白猿の湯」",
                "清流豊沢川の雪渓谷を望むモダンラグジュアリー＆完全なプライベート空間",
                "前沢牛グリルと三陸魚介が織りなす和とフレンチの極上モダン会席"
              ]
            },
            {
              id: 4,
              name: "囲炉裏懐石と天然温泉を楽しむ　秘境の隠れ家　やまゆりの宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28738/28738.jpg",
              rating: 4.54,
              reviews: 592,
              price: "¥8,130〜",
              access: "新花巻駅より車で２０分／東北自動車道花巻ＩＣより車で１０分／花巻空港より車で１５分",
              special: "前沢牛と新鮮三陸魚介、地元食材による囲炉裏会席が好評！敷地内で自噴する温泉は効能豊かな源泉かけ流し！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28738%2F28738.html",
              story: "花巻温泉の奥に位置する開湯600余年の古湯・台温泉（だいおんせん）。その静かな山あいにひっそりと佇む隠れ家旅館「やまゆりの宿」。古民家の古材を活かした館内には囲炉裏の炭火が灯り、どこか懐かしい日本の原風景が広がります。宿の自慢は、木造の温もりあふれる大浴場と庭園露天風呂。台温泉の熱めの天然硫黄泉（含硫黄-ナトリウム-硫酸塩・塩化物泉）が惜しみなく注がれ、湯の花が漂う本物の名湯が冷えた体を芯から温めてくれます。名物は、夕食時に食事処の囲炉裏で焼き上げる本格的な「囲炉裏炭火懐石」。初冬の静かな雪あかりの中、炭火のパチパチとはぜる音と香ばしい匂いに包まれる時間は至福の癒やしです。",
              roomTip: "囲炉裏や月見台を備えた趣ある純和風客室や露天風呂付き客室。自然の静寂に耳を澄まし、日常を離れた隠れ家ステイを楽しめます。",
              gourmetTip: "個室の囲炉裏端でいただく炭火焼き懐石。最高級前沢牛の炭火炙り、三陸産アワビの踊り焼き、季節の岩魚の串焼き、花巻特産白金豚の鍋など、炭火ならではの香ばしさと旨味が凝縮された絶品料理です。",
              highlights: [
                "古民家の風情漂う隠れ家宿＆個室の囲炉裏端でいただく本格炭火懐石料理",
                "台温泉の濃厚な天然硫黄泉掛け流し＆炭火がはぜる温かな和のぬくもり",
                "囲炉裏で炙る前沢牛・アワビ踊り焼き＆岩魚串焼きと地酒の炭火懐石"
              ]
            },
            {
              id: 5,
              name: "花巻温泉　ホテル千秋閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13484/13484.jpg",
              rating: 4.22,
              reviews: 2152,
              price: "¥9,405〜",
              access: "花巻IC：右折後直進4km（5分）、JR新花巻駅・JR花巻駅：無料送迎バス20分（定時運行・完全予約制）",
              special: "【かに＆牛ステーキと揚げたて天ぷら＆釜めしフェア開催中】一人旅からグループまであらゆるニーズに◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13484%2F13484.html",
              story: "バラ園や花巻温泉の自然に囲まれたランドマークホテル「花巻温泉 ホテル千秋閣（せんしゅうかく）」。女性専用のバラ風呂や広々とした大浴場を備え、連絡通路でホテル紅葉館・ホテル花巻の大浴場や露天風呂にも湯めぐりできる利便性が抜群です。初冬の花巻温泉郷は、11月下旬から木々に雪が積もり始め、12月には幻想的な白銀のリゾートへと姿を変えます。館内には多彩なエステやリラクゼーション施設、地元岩手のお土産がずらりと並ぶ広大な売店も完備。新花巻駅からの無料送迎バスも定期運行されており、雪道運転の心配なく手軽に冬の温泉リゾートを満喫できるのが大きな魅力です。",
              roomTip: "広々とした和室やツインベッドルーム。窓からは手入れの行き届いた松林や遠くの山並みを見晴らせます。",
              gourmetTip: "旬の食材をふんだんに取り入れた季節の和食会席またはディナーバイキング。花巻特産の「白金豚」の豆乳鍋やステーキ、南部鉄器で炊き上げる岩手県産ひとめぼれのご飯が評判です。",
              highlights: [
                "女性限定の優雅なバラ風呂＆新花巻駅からの無料送迎バス運行でアクセス至便",
                "ホテル3館の多彩な温泉を満喫＆南部鉄器や銘菓が揃う充実の大型売店",
                "花巻特産白金豚の豆乳鍋＆南部鉄器で炊く岩手産ひとめぼれの季節和食膳"
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
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の花巻温泉郷・雪化粧した南部赤松林と湯けむり立ち上る雪見露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 text-indigo-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-800/50">
            <Feather className="w-4 h-4 text-indigo-300" />
            <span>11月・12月限定 イーハトーブの白銀世界と前沢牛・白金豚会席特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月花巻温泉郷の白銀雪見露天と宮沢賢治の世界】<br className="hidden sm:inline" />
            奥羽山脈の名湯巡り・極上前沢牛＆白金豚しゃぶしゃぶの宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            宮沢賢治が愛したイーハトーブの森と奥羽山脈の名湯。11月下旬の初雪から12月の白銀世界へ。とろみある美肌源泉や日本一深い自噴立ち湯で愉しむ雪見露天。最高峰前沢牛と白金豚、南部杜氏の地酒に心温まる北東北の贅沢旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 岩手県花巻市（花巻温泉・台温泉・鉛温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Ihatov Literary Spring Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                詩人・宮沢賢治が心を通わせた北国の理想郷。白銀の奥羽山脈と名湯のぬくもり
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            岩手県の中央部、西に奥羽山脈の秀峰を仰ぎ、東に北上川が滔々と流れる花巻市。童話作家・詩人として『銀河鉄道の夜』や『注文の多い料理店』を生み出した宮沢賢治の生誕地であり、彼が心の中で描き愛した理想郷「イーハトーブ」の中心地です。市街地から西の山あいへと続く豊沢川や台川の渓谷沿いには、それぞれ異なる開湯伝説と泉質を持つ温泉地が連なり、総称して「花巻温泉郷」と呼ばれています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬、奥羽山脈から舞い降りる初雪が南部赤松の林や渓谷の岩肌を白く染め上げると、温泉郷は息をのむほど美しい静寂の白銀世界へと包まれます。赤松の木々に囲まれた「佳松園」のpH9.0を誇るトロトロのアルカリ性美肌泉、開湯600年の湯治情緒を残す「台温泉」の天然硫黄泉、そして「鉛温泉・藤三旅館」が誇る深さ約1.25mの天然自噴立ち湯「白猿の湯」。冬の冷たい外気の中で、岩の間からこんこんと湧き上がる熱々の天然名湯に浸かる時間は、心と体の芯までじんわりと解き放ってくれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の北東北の寒さを忘れさせてくれるのが、岩手の大地が育んだ極上の味覚です。きめ細やかなサシがとろける最高峰ブランド黒毛和牛「前沢牛」、清らかな伏流水で育つ花巻特産の「白金豚（プラチナポーク）」のしゃぶしゃぶ、南部鉄器の小鍋で味わう熱々の郷土料理「ひっつみ汁」。南部杜氏発祥の地ならではの寒造り新酒とともに味わう贅沢な晩餐が、冬の旅を格別の思い出にしてくれます。
          </p>
          
          <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-indigo-700" />
                11月・12月花巻温泉郷 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                宮沢賢治イーハトーブの白銀世界・日本一深い自噴立ち湯＆pH9.0美肌温泉・極上前沢牛＆白金豚会席
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#springs-variety" className="hover:text-indigo-700 hover:underline flex items-center gap-1.5">
              <span>1. 多彩な花巻温泉郷：赤松の美肌泉から自噴立ち湯まで</span>
            </a>
            <a href="#climate" className="hover:text-indigo-700 hover:underline flex items-center gap-1.5">
              <span>2. 11月・12月の気候と新幹線・無料送迎アクセスガイド</span>
            </a>
            <a href="#hotels" className="hover:text-indigo-700 hover:underline flex items-center gap-1.5">
              <span>3. 花巻温泉郷 11・12月に泊まりたい名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-indigo-700 hover:underline flex items-center gap-1.5">
              <span>4. 岩手の二大美食：最高峰前沢牛と極上白金豚の贅</span>
            </a>
            <a href="#itinerary" className="hover:text-indigo-700 hover:underline flex items-center gap-1.5">
              <span>5. 1泊2日 王道モデルコース（賢治記念館と名湯巡り）</span>
            </a>
            <a href="#faq" className="hover:text-indigo-700 hover:underline flex items-center gap-1.5">
              <span>6. よくある質問（FAQ）とアクセス情報</span>
            </a>
          </nav>
        </section>

        {/* Springs Variety Section */}
        <section id="springs-variety" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Trees className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              個性あふれる花巻温泉郷の湯処：美肌の湯・古湯・奇跡の自噴立ち湯
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                花巻温泉（赤松林の美肌泉）
              </h3>
              <p className="text-stone-600 leading-relaxed">
                赤松の県立自然公園内に広がる東北屈指の大型温泉リゾート。佳松園のpH9.0のとろみある自家源泉や、ホテル3館をつなぐ連絡通路での多彩な湯めぐりが人気です。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <Flame className="w-4 h-4 text-indigo-600" />
                台温泉（開湯600年の湯治場）
              </h3>
              <p className="text-stone-600 leading-relaxed">
                坂上田村麻呂が発見したとも伝わる歴史ある古湯。山あいの小路に木造宿が立ち並び、湯の花が舞う天然硫黄泉がこんこんと湧き出す秘湯情緒が魅力です。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                <Landmark className="w-4 h-4 text-indigo-600" />
                鉛温泉（自噴立ち湯 白猿の湯）
              </h3>
              <p className="text-stone-600 leading-relaxed">
                深さ約1.25mの天然岩風呂底から湧出する日本一深い自噴立ち湯。立ったまま入ることで全身に心地よい水圧がかかり、血行促進と関節痛の緩和に抜群の効能を誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access */}
        <section id="climate" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              11月・12月の気候と新幹線・無料送迎バスアクセス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-600" />
                初雪から白銀世界への移ろい
              </h3>
              <p className="leading-relaxed">
                花巻温泉郷は11月中旬から朝晩の冷え込みが零度近くまで下がり、11月下旬には初雪が舞います。12月に入るとまとまった降雪があり、赤松林や渓谷の岩肌に雪が積もる本格的な雪景色となります。日中の気温は11月で8〜12度、12月は2〜5度前後。ダウンジャケット、手袋、マフラーなどの防寒具をお持ちください。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                新花巻駅・花巻空港からの快適アクセス
              </h3>
              <p className="leading-relaxed">
                JR新花巻駅（東北新幹線）からは各宿への無料送迎バスや路線バスが運行（約20〜30分）。いわて花巻空港からも車で約15〜20分と極めて好立地。冬の雪道運転が不安な方でも、新幹線や航空機を利用すればノーマルタイヤの心配なく手軽に雪見露天風呂を満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section id="hotels" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rakuten Travel Verified Ihatov Inns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              11・12月花巻温泉郷 泊まりたい名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              美肌の泉質、雪見露天の風情、前沢牛・白金豚の料理の質、そしておもてなしの評価が高い名宿を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelList.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] bg-stone-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      厳選第{h.id}位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold text-stone-900">{h.rating}</span>
                          <span className="text-xs text-stone-400">（{h.reviews}件のクチコミ）</span>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg">
                          目安: {h.price} / 泊
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {h.access}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50/80 p-3.5 rounded-xl border border-stone-100">
                        {h.special}
                      </p>

                      <div className="pt-2 space-y-2">
                        <h4 className="text-xs font-bold text-stone-900 tracking-wider uppercase flex items-center gap-1.5 text-indigo-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                          宿の魅力と客室・温泉・美食のこだわり
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {h.story}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                        <div className="p-2.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-indigo-950">
                          <span className="font-bold block text-indigo-800 mb-0.5">客室の選び方：</span>
                          {h.roomTip}
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-100 text-amber-950">
                          <span className="font-bold block text-amber-800 mb-0.5">料理長のこだわり：</span>
                          {h.gourmetTip}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {h.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-stone-400">
                        ※最新の空室状況・限定プランは楽天トラベル公式でご確認ください
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <span>空室・料金プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gourmet Section */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              岩手が誇る冬の二大ブランド肉：極上前沢牛とプラチナポーク「白金豚」
            </h2>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              広大な大地と清冽な水に恵まれた岩手県は、全国屈指のブランド肉の宝庫です。花巻温泉郷の宿では、日本最高峰の黒毛和牛と名高い「前沢牛」や、地元花巻が誇る「白金豚」をメインとした豪華会席が供されます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-indigo-600" />
                  とろける極上サシ「前沢牛」のステーキ・すき焼き
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  岩手県奥州市前沢で肥育される黒毛和牛「前沢牛」。鮮やかな霜降りと融点の低い上質な脂が特徴で、口に運んだ瞬間に甘い香りを残してすっととろけます。陶板ステーキでシンプルに塩やワサビで味わうもよし、南部鉄器の鍋で割り下とともに煮込むすき焼きも格別の味わいです。
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  きめ細やかな旨味「白金豚」と南部杜氏の寒造り地酒
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  奥羽山脈の湧水と安心な飼料で丹精込めて育てられる花巻のブランド豚「白金豚（プラチナポーク）」。臭みが一切なく、きめ細やかな肉質と甘い脂身はしゃぶしゃぶや角煮で本領を発揮します。南部杜氏発祥の地が誇る銘酒「南部美人」や「月の輪」の熱燗が料理をさらに引き立てます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              1泊2日 理想の冬のモデルコース：宮沢賢治記念館と雪見露天・前沢牛会席
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-indigo-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs rounded-md">
                  1日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  東北新幹線で新花巻へ・宮沢賢治記念館見学と名湯雪見風呂
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>11:30 東北新幹線・新花巻駅到着：</strong>東京駅から新幹線やまびこ・はやぶさで新花巻駅へ。タクシーまたは路線バスで「宮沢賢治記念館」へ。</li>
                <li><strong>12:00 宮沢賢治童話村＆山猫軒ランチ：</strong>宮沢賢治の世界観を体感できる施設を見学。『注文の多い料理店』をモチーフにした「山猫軒」で名物の白金豚カツカレーやすぴりっと定食を味わう。</li>
                <li><strong>15:00 宿の無料送迎バスで花巻温泉郷へ：</strong>新花巻駅から送迎バスに乗車し宿へチェックイン。</li>
                <li><strong>16:00 初冬の雪見露天風呂：</strong>赤松林に舞う雪を眺めながら、pH9.0のトロトロ美肌温泉で心身を解きほぐす。</li>
                <li><strong>18:30 前沢牛＆白金豚ディナー：</strong>最高峰前沢牛のステーキやすき焼き、白金豚のしゃぶしゃぶと南部杜氏の地酒を心ゆくまで堪能。</li>
              </ul>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs rounded-md">
                  2日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  鉛温泉の自噴立ち湯体験＆花巻名物「わんこそば」と花巻空港・新幹線へ
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>08:00 爽快な朝風呂＆南部郷土朝食：</strong>朝露天風呂でリフレッシュ。南部鉄器で炊いたご飯やひっつみ汁を味わう。</li>
                <li><strong>09:30 鉛温泉・藤三旅館の白猿の湯へ：</strong>タクシーで鉛温泉へ立ち寄り。深さ1.25mの天然自噴立ち湯で奇跡の名湯体験。</li>
                <li><strong>12:00 花巻市街で名物「わんこそば」ランチ：</strong>創業大正12年の老舗「嘉司屋」や「やぶ屋」で名物のわんこそばや花巻そばを堪能。</li>
                <li><strong>14:00 花巻特産品とお土産探し：</strong>南部鉄器の急須や「かもめの玉子」、南部杜氏の限定新酒を購入。</li>
                <li><strong>15:30 新花巻駅または花巻空港より帰路へ：</strong>新幹線または航空便で快適に帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-700" />
              あわせて読みたい東北の冬温泉・美食特集
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              冬の味覚、名湯露天風呂、雪景色を楽しむ日本全国の厳選特集記事。旅の目的に合わせてぜひご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
            <Link
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-indigo-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-indigo-700 mb-1">
                秋田・乳頭温泉郷の雪見露天ときりたんぽ鍋
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                秘湯の中の秘湯・乳頭温泉郷。白濁の雪見風呂と比内地鶏の極上きりたんぽ鍋。
              </p>
            </Link>

            <Link
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-indigo-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-indigo-700 mb-1">
                山形・銀山温泉の大正ロマン雪景色特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                ガス灯揺らめく木造楼閣と銀世界。尾花沢牛と冬の極上湯あみガイド。
              </p>
            </Link>

            <Link
              href="/winter-zao-snow-monster-ice-tree-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-indigo-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-indigo-700 mb-1">
                山形・蔵王温泉の樹氷スノーモンスター特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                大自然の奇跡・ライトアップ樹氷と強酸性にごり湯露天風呂を満喫。
              </p>
            </Link>

            <Link
              href="/winter-aomori-sukayu-hakkoda-yukimi-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-indigo-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-indigo-700 mb-1">
                青森・酸ヶ湯温泉の千人風呂と八甲田雪景色
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                豪雪地帯のヒバ千人風呂。白濁の酸性硫黄泉と八甲田の樹氷スノーリゾート。
              </p>
            </Link>

            <Link
              href="/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-indigo-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-indigo-700 mb-1">
                福島・会津東山温泉の雪景色と城下町歴史巡り
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                湯川渓谷沿いの歴史名湯・東山温泉。鶴ヶ城の雪景色と会津郷土料理・馬刺し。
              </p>
            </Link>

            <Link
              href="/features"
              className="p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-200 hover:bg-indigo-100/70 transition-all flex flex-col justify-center items-center text-center group"
            >
              <div className="font-bold text-indigo-900 mb-1">
                全国の旅・特集記事一覧へ →
              </div>
              <p className="text-xs text-indigo-700">
                春夏秋冬の旬の旅、美食・絶景・名湯の厳選ガイドをチェック
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
