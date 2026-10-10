import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Footprints, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月会津東山温泉】雪化粧の湯川渓谷露天と会津地鶏！名宿5選',
  description: '11月下旬の初雪から12月の白銀世界へと移ろう福島・会津の奥座敷「東山温泉」。開湯1300年、湯川の渓流沿いに佇む風情ある木造建築群と渓谷美。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '会津東山温泉 宿泊 11月 12月, 東山温泉 雪景色 旅館, 会津若松 温泉 宿, 会津 馬刺し 温泉 旅館, 東山温泉 向瀧 東鳳 瀧の湯, 会津地鶏 宿, 会津若松 モデルコース 冬',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukushima-aizu-higashiyama-snow-heritage-stay/",
  },
  openGraph: {
    title: '【11・12月会津東山温泉】雪化粧の湯川渓谷露天と会津地鶏！名宿5選',
    description: '11月下旬の初雪から12月の白銀世界へと移ろう福島・会津の奥座敷「東山温泉」。開湯1300年、湯川の渓流沿いに佇む風情ある木造建築群と渓谷美。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-fukushima-aizu-higashiyama-snow-heritage-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月会津東山温泉の初雪と武家文化】雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月会津東山温泉の初雪と武家文化】雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿5選",
    description: "11月下旬の初雪から12月の白銀世界へと移ろう福島・会津の奥座敷「東山温泉」。開湯1300年、湯川の渓流沿いに佇む風情ある木造建築群と渓谷美。雪化粧した山肌を望む雪見露天風呂と、会津漆器でいただく本場極上馬刺し・会津地鶏・郷土料理こづゆ、そして全国新酒鑑評会金賞の会津美酒を堪能する冬旅ガイド。",
  }
};

export default function HigashiyamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-fukushima-aizu-higashiyama-snow-heritage-stay#article",
        "headline": "【11・12月会津東山温泉の初雪と武家文化】雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿5選",
        "description": "11月下旬の初雪から12月の白銀世界へと移ろう福島・会津の奥座敷「東山温泉」。開湯1300年、湯川の渓流沿いに佇む風情ある木造建築群と渓谷美。雪化粧した山肌を望む雪見露天風呂と、会津漆器でいただく本場極上馬刺し・会津地鶏・郷土料理こづゆ、そして全国新酒鑑評会金賞の会津美酒を堪能する冬旅ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-fukushima-aizu-higashiyama-snow-heritage-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "会津東山温泉の初雪や積雪の時期はいつ頃ですか？11月や12月の気候は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "会津若松および東山温泉では、例年11月中旬から下旬にかけて初雪が降ります。本格的に温泉街や木造旅館の屋根に雪が積もり、雪見露天風呂のシーズンとなるのは12月上旬から中旬以降です。12月の平均気温は0〜3℃前後で、朝晩は氷点下に冷え込みます。ダウンコート、マフラー、手袋、滑り止め付きの暖かいスノーブーツが必須です。お車の場合は11月下旬以降スタッドレスタイヤが絶対不可欠です。"
            }
          },
          {
            "@type": "Question",
            "name": "会津東山温泉の泉質や効能、歴史的特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "東山温泉は約1300年前、名僧・行基によって発見されたと伝わる歴史ある古湯です。江戸時代には会津藩の湯治場として栄え、新選組の土方歳三が戊辰戦争の傷を癒やした湯としても知られます。泉質はカルシウム・ナトリウム―硫酸塩・塩化物温泉（低張性・弱アルカリ性・高温泉）。サラサラとした無色透明の柔らかな湯で、切り傷や冷え性、神経痛、疲労回復に優れた効能があります。"
            }
          },
          {
            "@type": "Question",
            "name": "会津の名物グルメ「馬刺し」の特徴と美味しい食べ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "会津の馬刺しは、サシ（霜降り）を重んじる熊本などとは異なり、鮮やかな赤身肉（モモやロース）を食べるのが最大の特徴です。脂っこさがなく肉本来の濃厚な旨味と甘みがあり、非常にヘルシー。これを醤油ではなく、すりおろした生ニンニクと唐辛子、味噌を練り合わせた特製の「辛子味噌（にんにく味噌）」を醤油に溶いて食べるのが会津伝統のスタイルです。"
            }
          },
          {
            "@type": "Question",
            "name": "会津若松駅から東山温泉へのアクセスや観光の移動手段は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JR磐越西線会津若松駅から東山温泉街までは、路線バスまたは観光周遊バス「あかべぇ」「ハイカラさん」で約15〜20分です。タクシーなら約10分（約1,500円〜2,000円）。鶴ヶ城や武家屋敷、飯盛山などの主要観光地を結ぶ周遊バスが約30分間隔で運行しているため、冬期でも雪道を運転することなく快適に観光地巡りが楽しめます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-fukushima-aizu-higashiyama-snow-heritage-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "会津東山温泉　向瀧",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67896%2F67896.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "会津・東山温泉　御宿　東鳳（オリックスホテルズ＆リゾーツ）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16298%2F16298.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "会津東山温泉　庄助の宿　瀧の湯",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5738%2F5738.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "会津東山温泉　原瀧（はらたき）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39376%2F39376.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "会津東山温泉　今昔亭（こんじゃくてい）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39377%2F39377.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "会津東山温泉　向瀧",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67896/67896.jpg",
              rating: 4.56,
              reviews: 157,
              price: "¥27,500〜",
              access: "会津若松駅より、まちなか周遊バス「ハイカラさん」「あかべぇ」利用で「東山温泉駅」下車、徒歩１分（送迎なし）",
              special: "会津藩から引き継いだ、源泉掛け流し認定。国の文化財の温泉宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67896%2F67896.html",
              story: "国の登録有形文化財建造物に登録第1号として選ばれた、東山温泉の象徴たる純和風旅館「向瀧（むかいたき）」。明治初期に会津藩の指定保養所を譲り受けて創業し、斜面に沿って建てられた見事な木造入母屋造りの楼閣建築は、息をのむ美しさを放ちます。冬の最大の見どころは、雪が降り積もる中庭に夕暮れ時になると灯される「雪見ろうそく」。竹筒の中に灯る百数十本のろうそくの炎が純白の雪を温かく照らし出す光景は、まさに一幅の水墨画のような幽玄の世界です。お風呂は加水・加温・循環・塩素消毒を一切行わない完全自然湧出の自家源泉「きつね湯」や「さるの湯」を完備。昔ながらの純粋な名湯が身も心も包み込みます。",
              roomTip: "中庭を見渡せる木造の文化財客室が格別。障子を開ければ、しんしんと降り積もる雪と夕暮れの雪見ろうそくの灯火を部屋のこたつから静かに眺められます。",
              gourmetTip: "会津の武家文化を伝える伝統の会津郷土会席。名物の鯉の甘煮や、赤身の旨味が凝縮した本場会津馬刺し、会津漆器で供される伝統の汁物「こづゆ」など、手間暇かけた本物の味が揃います。向瀧限定の純米吟醸酒「美酒方寸」との相性も抜群です。",
              highlights: [
                "国登録有形文化財第1号の木造建築＆中庭を照らす幻想的な雪見ろうそく",
                "完全自然湧出・加水加温一切なしの生源泉「きつね湯」＆本物の歴史浪漫",
                "会津漆器でいただく極上馬刺し・伝統こづゆ・名物鯉甘煮と限定美酒"
              ]
            },
            {
              id: 2,
              name: "会津・東山温泉　御宿　東鳳（オリックスホテルズ＆リゾーツ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16298/16298.jpg",
              rating: 4.34,
              reviews: 6699,
              price: "¥7,500〜",
              access: "会津若松ＩＣより車で20分☆鶴ヶ城まで車で10分",
              special: "2024楽天アワード受賞☆会津郷土料理ほか多彩なバイキングと展望露天風呂が自慢です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16298%2F16298.html",
              story: "東山温泉街の高台に位置し、会津若松市街地や会津盆地の大パノラマを一望する絶景リゾートホテル「御宿 東鳳（おんやど とうほう）」。宿の最大の自慢は、空に浮かんでいるかのような開放感を味わえる展望露天風呂「宙の湯（そらのゆ）」と段々畑状に湯船が連なる「棚雲の湯（たなぐものゆ）」。初冬の澄み渡る空気の中、白銀に染まり始めた会津の街並みや、夜に煌めく満天の星空と市街の夜景を眺めながらの湯浴みは圧巻の一言です。館内は開放感あふれるモダンな空間で、三世代の家族旅行からカップルまで誰もが快適に過ごせる設備が整っています。",
              roomTip: "会津盆地の夜景や雪化粧の山々を一望するタワー館の和洋室がおすすめ。シモンズ製ベッドを備え、冬の景色をパノラマウィンドウから一望できます。",
              gourmetTip: "オープンキッチンで料理人が腕を振るうビュッフェレストラン「あがらんしょ」が大好評。名物の馬刺しや揚げたての天ぷら、郷土料理こづゆ、喜多方ラーメン、会津産コシヒカリの炊きたてご飯など、会津の美味を好きなだけ堪能できます。",
              highlights: [
                "会津の街と星空を一望する展望露天「宙の湯・棚雲の湯」＆豪華バイキング",
                "会津若松市街の高台に位置する圧倒的パノラマビューと清潔な和モダン空間",
                "オープンキッチン出来立て馬刺し・天ぷら・喜多方ラーメンの極上ビュッフェ"
              ]
            },
            {
              id: 3,
              name: "会津東山温泉　庄助の宿　瀧の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5738/5738.jpg",
              rating: 4.41,
              reviews: 4212,
              price: "¥8,250〜",
              access: "【電車】ＪＲ磐越西線「会津若松駅」下車タクシー１０分【お車】「磐越自動車道」会津若松ＩＣより国道４９号線経由 約１５分",
              special: "【楽天トラベル ゴールドアワード2025】【楽天トラベル 日本の宿アワードTOP47 2024】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5738%2F5738.html",
              story: "東山温泉の発祥の地とされ、温泉街随一の名勝「伏見ヶ滝」を眼前に臨む絶景の湯宿「庄助の宿 瀧の湯」。民謡・会津磐梯山に登場する「小原庄助さん」ゆかりの宿として親しまれています。自慢の大浴場や渓流露天風呂「伏見の湯」からは、初冬の清冽な水飛沫を上げる滝と、雪化粧を始めた渓谷の岩肌が間近に迫り、迫力満点の自然美に包まれます。館内には能舞台を模したラウンジや、足湯・貸切風呂など多彩な施設が充実。夕暮れ時には滝のライトアップも行われ、幻想的な雪景色を眺めながらゆったりとした時間を過ごせます。",
              roomTip: "伏見ヶ滝を正面に見下ろす渓流側の客室が圧倒的人気。清らかな滝音をBGMに、窓一面に広がる水墨画のような渓谷美を独り占めできます。",
              gourmetTip: "会津の郷土料理と季節の旬菜を盛り込んだ創作会席。旨味たっぷりの「会津地鶏」の鍋物や炭火焼き、会津名物の新鮮な極上馬刺し、地元契約農家の冬野菜など、滋味豊かな山の幸・里の幸を会津漆器で味わえます。",
              highlights: [
                "名勝「伏見ヶ滝」を眼前に臨む絶景渓流露天風呂＆小原庄助ゆかりのもてなし",
                "伏見ヶ滝の夕暮れライトアップ＆能舞台ラウンジや足湯の充実施設",
                "旨味あふれる会津地鶏鍋・極上馬刺し・会津の山里の幸を味わう郷土会席"
              ]
            },
            {
              id: 4,
              name: "会津東山温泉　原瀧（はらたき）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39376/39376.jpg",
              rating: 4.19,
              reviews: 1146,
              price: "¥9,900〜",
              access: "ＪＲ磐越西線　会津若松駅からタクシーで１５分、バス（東山温泉行）で２０分／磐越自動車道　会津若松ＩＣから２０分",
              special: "自家源泉掛け流し　貸切展望風呂が◎　春～夏は水辺のダイニング川どこがオープン",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39376%2F39376.html",
              story: "湯川の渓流沿いに建ち、東山温泉でも数少ない独自の「自家源泉」を館内に保有する名湯旅館「原瀧（はらたき）」。毎分数百リットルの湯量を誇る源泉から、一切の加水を行わず適温の生源泉を浴槽へと注ぎ込んでいます。渓流にせり出すように造られた自家源泉かけ流しの露天風呂からは、湯川のせせらぎと対岸の原生林の雪景色を間近に感じることができ、清らかな冷気と温かい名湯のコントラストが旅情をかき立てます。趣の異なる4つの貸切展望風呂もあり、プライベートな雪見風呂も心ゆくまで楽しめます。",
              roomTip: "湯川のせせらぎが心地よい渓流沿いの和室が人気。窓外に広がる自然林の雪景色を眺めながら、静かに流れる時間に身を委ねられます。",
              gourmetTip: "ハーフビュッフェと会席が融合した「ダイニング滝川」での夕食が人気。メインには厳選牛の陶板焼きや会津地鶏の逸品が供され、おばんざいコーナーでは郷土のこづゆや会津そば、手作りスイーツを自由に楽しめます。",
              highlights: [
                "毎分湧出の自家源泉保有＆湯川の清流を間近に感じる雪見露天風呂",
                "自家源泉かけ流しの露天風呂＆趣異なる4つの貸切展望風呂で湯めぐり",
                "厳選牛陶板焼きや会津地鶏と郷土おばんざいを味わうハーフビュッフェ会席"
              ]
            },
            {
              id: 5,
              name: "会津東山温泉　今昔亭（こんじゃくてい）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39377/39377.jpg",
              rating: 4.35,
              reviews: 395,
              price: "¥12,100〜",
              access: "ＪＲ磐越西線　会津若松駅からタクシーで１５分／磐越自動車道　会津若松ＩＣから２０分☆送迎は要連絡☆",
              special: "美しき隠れ家「今昔亭」へようこそ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39377%2F39377.html",
              story: "自家源泉を持つ「原瀧」の別館として、静寂を愛する大人のために誂えられた隠れ宿「今昔亭（こんじゃくてい）」。湯川の清流のほとり、木々に囲まれた静閑なロケーションに佇み、全室が渓流に面しています。客室数はあえて少なく抑えられており、館内は静けさと洗練された落ち着きに包まれています。大浴場や露天風呂を満たすのは原瀧と同じ良質な自家源泉。湯上がりには本館「原瀧」の湯めぐりも自由に楽しめます。喧騒を離れて大切な人とゆっくり語り合いたい記念日旅行や大人のご夫婦旅に最適な一軒です。",
              roomTip: "渓流露天風呂を備えた客室なら、誰にも気兼ねすることなく雪見露天を独占。湯川のせせらぎを聞きながら名湯に浸かる贅沢はこの上ありません。",
              gourmetTip: "完全個室または専用ダイニングでいただく本格会席料理。会津のブランド牛や極上馬刺し、獲れたての岩魚、旬の冬根菜など、料理長が一品一品心を込めて仕立てる繊細な日本料理と会津銘酒のペアリングが絶妙です。",
              highlights: [
                "全室渓流沿いの静閑な隠れ宿＆客室露天風呂とプライベート個室会席",
                "大人のための落ち着きある空間＆原瀧の温泉施設も無料で相互利用可能",
                "個室で味わう厳選ブランド牛や極上馬刺しと会津金賞受賞蔵の美酒ペアリング"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-red-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の会津東山温泉・湯川渓谷の雪景色と歴史ある温泉街の灯り"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/90 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-red-700/50">
            <Sparkles className="w-4 h-4 text-red-300" />
            <span>11月・12月限定 会津の奥座敷・初雪と名湯特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月会津東山温泉の初雪と武家文化】<br className="hidden sm:inline" />
            雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            1300年の歴史を紡ぐ湯川渓谷の湯けむり。中庭を照らす温かな雪見ろうそく、白銀の山肌を望む雪見露天風呂に浸かり、会津漆器でいただく極上馬刺しと金賞受賞の会津美酒に酔いしれる至高の冬旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> 福島県会津若松市（東山温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月会津東山温泉】雪化粧の湯川渓谷露天と会津地鶏！名宿5選","item":"https://croud-travel.pages.dev/winter-fukushima-aizu-higashiyama-snow-heritage-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-red-100">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Samurai Heritage & Snow Hot Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                白銀の渓谷と登録文化財建築。会津武士と文豪が愛した1300年の奥座敷
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            福島県会津若松市の市街地から車でわずか10分。東の山あい、湯川（ゆがわ）の深い渓谷沿いに旅館が軒を連ねる「東山温泉」。天平年間（8世紀前半）、諸国を行脚していた名僧・行基が、霊鳥三足烏（みつあしがらす）の導きによって発見したと伝わる、東北屈指の古湯です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            江戸時代には会津藩主・松平家の保養湯治場として栄え、幕末には新選組副長・土方歳三が宇都宮の戦いで負った銃創を癒やした歴史を持ちます。明治以降も与謝野晶子、竹久夢二ら多くの文人墨客がこの渓谷美に魅了され、数々の詩や画を残しました。11月下旬になると山形や新潟の県境山脈から初雪が舞い降り、12月に入ると湯川の両岸に迫る杉やブナの原生林、木造旅館の屋根が一面純白の雪に包まれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            泉質はカルシウム・ナトリウム―硫酸塩・塩化物温泉。無色透明でさらりとした肌触りの湯は、湯冷めしにくく体の芯まで熱を行き渡らせます。雪化粧した渓谷の岩肌や滝を眺めながら入る露天風呂は、まるで水墨画の世界に入り込んだかのような圧倒的な静寂と美しさを誇ります。湯上がりの楽しみは、全国新酒鑑評会で金賞受賞数日本一を誇る福島・会津の美酒と、会津漆器で供される郷土料理。鮮やかな赤身の濃厚な旨味が広がる「会津馬刺し」を特製辛子味噌で味わい、噛むほどに旨味が溢れる「会津地鶏」の鍋で温まる冬の宵は、旅人の記憶に一生刻まれる体験となります。
          </p>
          
          <div className="bg-red-50/70 rounded-2xl p-5 border border-red-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-700" />
                <span>11月・12月 会津東山温泉の旅のハイライト</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                国の登録有形文化財宿と雪見ろうそく・湯川渓谷の雪見露天風呂・会津極上赤身馬刺し・会津地鶏と金賞受賞酒
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-red-900 text-white font-bold text-xs whitespace-nowrap shadow-sm">
              郡山駅から快速で約1時間＋バス15分
            </span>
          </div>
        </section>

        {/* Climate & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Travel Planning Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の会津 気候・防寒具・雪道運転のアドバイス
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-red-800 flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-red-700" /> 気温と本格的な防寒
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                盆地気候のため冬の寒さは厳格。11月平均気温約7℃、12月は約1℃まで下がり、夜間や早朝は氷点下が常態化します。ロングダウンコート、裏起毛パンツ、手袋、マフラー、ニット帽を必ず準備しましょう。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-red-800 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-red-700" /> 雪道歩きと足元対策
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                温泉街の坂道や石畳、鶴ヶ城の境内は凍結して滑りやすくなります。靴底にしっかり溝がある防水スノーブーツや防寒ブーツが必須。革靴やヒールでの散策は大変危険です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-red-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-700" /> スタッドレス装着必須
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                磐越道会津若松ICから約20分。11月下旬以降はお車の場合は必ず全輪スタッドレスタイヤを装着してください。積雪時は急ブレーキ・急ハンドルを避け、車間距離を十分確保しましょう。周遊バスの利用も安心です。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-red-800 uppercase tracking-widest bg-red-100/60 px-3.5 py-1 rounded-full">
              SELECTED HERITAGE HOTELS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900">
              【11・12月】会津東山温泉の初冬を満喫する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
              楽天トラベルで4.2以上の高評価を獲得している、登録有形文化財宿から絶景展望露天リゾート、自家源泉の隠れ宿まで、本物の会津の魅力が詰まった5軒を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-red-300 font-extrabold px-3 py-1.5 rounded-xl text-xs sm:text-sm shadow-md border border-red-500/30">
                    第{hotel.id}位 厳選名宿
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 font-bold block">楽天トラベル評価</span>
                      <div className="flex items-center gap-1.5 text-red-800 font-extrabold text-base">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-[11px] text-stone-400 font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 font-bold block">参考宿泊料金（1名）</span>
                      <span className="text-stone-900 font-black text-sm sm:text-base text-red-900">{hotel.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] text-red-800 font-bold tracking-wider uppercase block mb-1">
                        {hotel.special}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-red-700" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2.5 pt-2">
                      <div className="bg-red-50/60 rounded-xl p-3 border border-red-200/60 text-xs leading-relaxed text-stone-700">
                        <strong className="text-red-900 font-bold flex items-center gap-1 mb-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-700" /> おすすめ客室の選び方:
                        </strong>
                        {hotel.roomTip}
                      </div>
                      <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs leading-relaxed text-stone-700">
                        <strong className="text-stone-900 font-bold flex items-center gap-1 mb-0.5">
                          <Utensils className="w-3.5 h-3.5 text-red-700" /> 夕食・ご当地美食のこだわり:
                        </strong>
                        {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">この宿の注目ポイント</span>
                      <ul className="space-y-1">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="text-xs text-stone-600 flex items-start gap-1.5">
                            <span className="text-red-700 font-bold mt-0.5">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-500 hidden sm:inline">
                      ※空室状況・最新プランは楽天トラベル公式でご確認ください
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-800 to-stone-900 hover:from-red-900 hover:to-black text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
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

        {/* 1泊2日 理想のモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-800">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】初雪の東山温泉と城下町会津若松を巡る歴史旅
              </h2>
            </div>
          </div>

          <div className="relative border-l-2 border-red-300 ml-4 pl-6 space-y-8 my-6">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 12:00</span>
                <h3 className="text-base font-bold text-stone-900">七日町通りで元祖ソースカツ丼または喜多方ラーメンの昼食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  会津若松に到着。大正ロマンの洋館が連なる七日町通りへ。濃厚な自家製ソースが染みたサクサクの極厚豚カツがのった名物「会津ソースカツ丼」または煮干し出汁香る手揉みちぢれ麺のラーメンで腹ごしらえ。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 13:30</span>
                <h3 className="text-base font-bold text-stone-900">名城「鶴ヶ城」登閣・雪吊りと赤瓦天守の絶景</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  戊辰戦争の激戦を耐え抜いた難攻不落の名城・鶴ヶ城へ。日本で唯一の赤瓦を用いた白亜の天守閣が、初冬の青空と雪景色に凛々しく映えます。本丸庭園の松に施された見事な「雪吊り」の職人技を鑑賞します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 15:30</span>
                <h3 className="text-base font-bold text-stone-900">東山温泉へ到着＆渓谷雪見露天風呂で温まる</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  車または周遊バスで東山温泉へ移動しチェックイン。冷えた身体をそのまま湯川渓谷沿いの露天風呂へ。せせらぎの音と舞い散る粉雪を感じながら、体の芯までポカポカに温まります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 17:00</span>
                <h3 className="text-base font-bold text-stone-900">夕暮れの温泉街散策と幻想的な雪見ろうそくの灯火</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  夕暮れ時の温泉街へ。向瀧の中庭に灯る雪見ろうそくや、伏見ヶ滝のライトアップを鑑賞。冷涼な空気の中に浮かび上がる幻想的な光が旅情をそそります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">1日目 19:00</span>
                <h3 className="text-base font-bold text-stone-900">会津極上馬刺しと会津地鶏鍋・金賞美酒の饗宴</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宿でいただく贅沢な会津会席。鮮度抜群の赤身馬刺しを辛子味噌醤油で一口。コク深い会津地鶏の鍋と、会津漆器に盛られた温かいこづゆ。全国新酒鑑評会で金賞を受賞した銘酒「写楽」や「末廣」とともに至福の晩酌を楽しみます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">2日目 08:00</span>
                <h3 className="text-base font-bold text-stone-900">朝の雪見露天風呂と会津コシヒカリの健康朝食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  水墨画のような朝の雪山を眺めながらの朝風呂。朝食には炊きたての地元産会津コシヒカリ、手作り味噌の汁物、温泉卵をいただき、元気を満たします。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-red-700 ring-4 ring-red-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-red-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">会津武家屋敷と国の重要文化財「さざえ堂」参拝</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  チェックアウト後は東山温泉の入口にある会津武家屋敷を見学し、飯盛山へ。世界唯一の二重らせん木造建築「さざえ堂」を参拝し、会津藩の歴史と知恵に触れる充実の旅を締めくくります。
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
                会津東山温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>会津東山温泉の初雪や積雪の時期はいつ頃ですか？11月や12月の気候は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                会津若松および東山温泉では、例年11月中旬から下旬にかけて初雪が降ります。本格的に温泉街や木造旅館の屋根に雪が積もり、雪見露天風呂のシーズンとなるのは12月上旬から中旬以降です。12月の平均気温は0〜3℃前後で、朝晩は氷点下に冷え込みます。ダウンコート、マフラー、手袋、滑り止め付きの暖かいスノーブーツが必須です。お車の場合は11月下旬以降スタッドレスタイヤが絶対不可欠です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>会津東山温泉の泉質や効能、歴史的特徴は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                東山温泉は約1300年前、名僧・行基によって発見されたと伝わる歴史ある古湯です。江戸時代には会津藩の湯治場として栄え、新選組の土方歳三が戊辰戦争の傷を癒やした湯としても知られます。泉質はカルシウム・ナトリウム―硫酸塩・塩化物温泉（低張性・弱アルカリ性・高温泉）。サラサラとした無色透明の柔らかな湯で、切り傷や冷え性、神経痛、疲労回復に優れた効能があります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>会津の名物グルメ「馬刺し」の特徴と美味しい食べ方は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                会津の馬刺しは、サシ（霜降り）を重んじる熊本などとは異なり、鮮やかな赤身肉（モモやロース）を食べるのが最大の特徴です。脂っこさがなく肉本来の濃厚な旨味と甘みがあり、非常にヘルシー。これを醤油ではなく、すりおろした生ニンニクと唐辛子、味噌を練り合わせた特製の「辛子味噌（にんにく味噌）」を醤油に溶いて食べるのが会津伝統のスタイルです。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-red-800 font-extrabold">Q.</span>
                <span>会津若松駅から東山温泉へのアクセスや観光の移動手段は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                JR磐越西線会津若松駅から東山温泉街までは、路線バスまたは観光周遊バス「あかべぇ」「ハイカラさん」で約15〜20分です。タクシーなら約10分（約1,500円〜2,000円）。鶴ヶ城や武家屋敷、飯盛山などの主要観光地を結ぶ周遊バスが約30分間隔で運行しているため、冬期でも雪道を運転することなく快適に観光地巡りが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-red-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆東北・甲信越名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-yamagata-onogawa-yonezawa-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">山形の冬名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【小野川温泉】雪見露天風呂と最高峰米沢牛すき焼き・小野小町ゆかりの名湯宿
              </h3>
            </Link>

            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">東北の初雪</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【銀山温泉】白銀の木造建築に灯るガス灯と尾花沢牛会席・極上雪見宿
              </h3>
            </Link>

            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">秋田の秘湯雪見</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【乳頭温泉郷】ブナ原生林の雪見露天風呂と本場比内地鶏きりたんぽ鍋の宿
              </h3>
            </Link>

            <Link 
              href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">北関東の雪見</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【奥日光湯元温泉】乳白色のにごり湯と白銀の静寂・雪見露天宿
              </h3>
            </Link>

            <Link 
              href="/winter-zao-snow-monster-ice-tree-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">山形の樹氷絶景</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【蔵王温泉】スノーモンスター樹氷ライトアップと強酸性硫黄泉の老舗宿
              </h3>
            </Link>

            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-red-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-red-800 uppercase block mb-1">上州の名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-800 transition line-clamp-2">
                【伊香保温泉】365段の石段街と黄金の湯・上州牛会席を味わう名旅館
              </h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-fukushima-aizu-higashiyama-snow-heritage-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
