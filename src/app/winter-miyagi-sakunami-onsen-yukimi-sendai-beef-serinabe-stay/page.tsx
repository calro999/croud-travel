import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月作並温泉】極上A5仙台牛ステーキ！名宿5選',
  description: '11月から12月にかけて、杜の都・仙台の奥座敷として古くから親しまれる作並温泉および秋保温泉エリアは、広瀬川や名取川の深い渓谷が初雪に彩られ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '作並温泉 宿泊, 作並温泉 一の坊, 岩松旅館, 仙台せり鍋, A5仙台牛, 美女づくりの湯, 作並温泉 雪見露天風呂, 秋保温泉 緑水亭, 11月 12月 宮城 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay/"
  },
  openGraph: {
    title: '【11・12月作並温泉】極上A5仙台牛ステーキ！名宿5選',
    description: '11月から12月にかけて、杜の都・仙台の奥座敷として古くから親しまれる作並温泉および秋保温泉エリアは、広瀬川や名取川の深い渓谷が初雪に彩られ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の作並温泉・広瀬川渓谷と雪見岩風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "作並温泉が「美女づくりの湯」と呼ばれる理由や泉質・効能は？",
    "a": "作並温泉は、奈良時代の高僧・行基菩薩が発見したと伝えられ、江戸時代には仙台藩の御仮湯（湯治場）として歴代藩主や武士に重用された名湯です。泉質は無色透明の「弱アルカリ性単純温泉」や「ナトリウム・カルシウム-硫酸塩・塩化物泉」。肌の角質をやさしく落として古い皮脂を洗い流す弱アルカリ性のクレンジング作用と、硫酸塩・塩化物による高い保湿・保温ベール効果を兼ね備えています。湯上がりの肌がまるで化粧水をつけた後のようにしっとりツルツルになることから、古くより「美女づくりの湯」と称えられ、冷え性や疲労回復、筋肉痛にも優れた効能があります。"
  },
  {
    "q": "11月・12月の宮城・作並温泉の気候や気温、雪の降り始めはいつ頃？",
    "a": "作並温泉は仙台市内に位置しますが、奥羽山脈に近い山間部にあるため、仙台市街地よりも気温が2〜3℃低くなります。11月の平均最高気温は10〜14℃、最低気温は2〜5℃前後で、晩秋から初冬への寒暖差が大きくなります。例年11月下旬から12月上旬にかけて初雪が舞い始め、12月中旬以降は本格的な雪景色や積雪となる日が増えます。12月の最高気温は5〜8℃、最低気温は-2〜-4℃近くまで冷え込みます。冬期にお車でアクセスする場合は、11月下旬以降はスタッドレスタイヤ（冬用タイヤ）の装着が必須です。服装は厚手の防寒コート、手袋、マフラーをご用意ください。"
  },
  {
    "q": "冬の宮城名物「仙台せり鍋」の特徴と美味しい食べ方は？",
    "a": "「仙台せり鍋」は、冬の宮城を代表する大人気のご当地鍋料理です。宮城名産の伝統野菜「仙台セリ」は、冬に寒さが増すほど甘みと香りが凝縮します。最大の魅力は、新鮮なセリの「根っこ（ひげ根）」まで丸ごと食べること。丁寧に泥を洗い落とした真っ白な根は、シャキシャキとした抜群の歯ごたえと強い甘み・独特の清々しい香りを誇ります。鶏肉や鴨肉の出汁が効いた醤油ベースのスープに、サッと数秒〜十数秒くぐらせて少ししんなりした瞬間が一番の食べ頃。地元の銘酒・宮城の純米酒と合わせると格別の美味です。"
  },
  {
    "q": "作並温泉周辺で冬におすすめの観光スポットはありますか？",
    "a": "作並温泉のすぐ近くにある「ニッカウヰスキー宮城峡蒸溜所」は必見です。竹鶴政孝がウイスキー造りに最適な清流と冷涼な気候を求めて拓いた蒸溜所で、赤レンガの蒸溜棟と初雪を纏った木々のコントラストが美しく、見学ツアーや試飲（事前予約推奨）が楽しめます。また、縁結びや安産で信仰を集める「定義如来 西方寺（じょうぎにょらい）」では、名物の揚げたて「三角定義あぶらあげ」を味わうのが観光の定番コースです。仙台駅周辺の「SENDAI光のページェント」（12月開催）と組み合わせた旅行プランも大変人気です。"
  },
  {
    "q": "仙台駅や仙台空港から作並温泉へのアクセス方法は？",
    "a": "公共交通機関を利用する場合、JR仙台駅からJR仙山線（山形方面行き）の快速または普通列車で約35分〜40分の「作並駅」で下車。駅からは各主要ホテルの無料送迎バス（要予約または到着時連絡）で約5分です。また、一部のホテルでは仙台駅東口または西口から直行無料送迎バスを運行しています。車の場合、東北自動車道の仙台宮城ICより国道48号線（作並街道）を山形方面へ直進して約25〜30分とアクセス良好です。山形方面からは山形道・山形北ICより国道48号経由で約40分です。"
  }
];

export default function MiyagiSakunamiWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay"
        },
        "headline": "【11・12月宮城・作並温泉＆仙台奥座敷の初冬広瀬川雪見露天と美女づくりの湯】極上A5仙台牛ステーキ＆名物仙台せり鍋会席を味わう老舗宿5選",
        "description": "11月から12月にかけて、杜の都・仙台の奥座敷として古くから親しまれる作並温泉および秋保温泉エリアは、広瀬川や名取川の深い渓谷が初雪に彩られ、湯けむりが白く立ち上る情緒豊かな初冬の温泉情緒に包まれます。奈良時代に行基菩薩が発見し、歴代仙台藩主も湯治に訪れた作並温泉は、肌をしっとりと包み込む弱アルカリ性の「美女づくりの湯」。夕食には見事なサシが入った最高級A5仙台牛の陶板ステーキやしゃぶしゃぶ、そして冬の宮城を代表する風物詩・根っこまでシャキシャキと甘い名物「仙台せり鍋」を地酒とともに味わう厳選名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T13:00:00+09:00",
        "dateModified": "2026-09-28T13:00:00+09:00",
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
          "name": "Croud Travel 杜の都・みちのく名湯紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay#breadcrumb",
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
            "name": "宮城・作並温泉＆仙台奥座敷 初冬雪見露天と仙台牛の宿",
            "item": "https://croud-travel.pages.dev/winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay#faq",
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "仙台・作並温泉　ゆづくしＳａｌｏｎ一の坊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28670/28670.jpg",
              rating: 4.60,
              reviews: 1841,
              price: "¥29,355〜",
              access: "最寄駅／ＪＲ仙山線「作並駅」無料送迎あり【要事前予約】　仙台駅～作並駅（快速約30分）作並駅～一の坊（送迎車で約5分）",
              special: "【新客室“Seyryu”2023年4月OPEN】オールインクルーシブで過ごす、里山リトリートステイ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28670%2F28670.html",
              story: "広瀬川の清流を望む山あいに佇み、「理想の日常の休息」をテーマに最高峰のオールインクルーシブ体験を提供する名門リゾート「仙台・作並温泉 ゆづくしSalon一の坊」。館内の暖炉ラウンジでは、挽きたての珈琲や生ビール、ワイン、季節のスイーツやおつまみが自由に楽しめ、何もしない贅沢を心ゆくまで満喫できます。自慢の温泉は、広瀬川のせせらぎが間近に迫る「広瀬川源流露天風呂」をはじめ、立ち湯や深湯など3つの趣異なる大浴場。初冬の冷気の中で湯気を上げる温泉に浸かり、初雪が舞い散る渓谷を眺める時間は格別です。夕食は宮城の旬の厳選食材を料理人が目の前で調理するオーダービュッフェ。A5仙台牛のステーキ、三陸産の寒平目やホタテ、地酒とのペアリングが旅を華やかに彩ります。",
              roomTip: "広瀬川の清流を見下ろすリバービュー和洋室。初冬の静まり返る渓谷美を窓一面のパノラマで眺め、ラウンジから持ち帰ったドリンクとともに寛ぐ至福のひととき。",
              gourmetTip: "「冬の宮城テロワール・オーダーメイドディナー」。料理人が焼き上げるA5ランク仙台牛の鉄板焼き、名物仙台せり鍋、三陸直送の旬魚お造り。",
              highlights: [
                "広瀬川源流雪見露天＆暖炉ラウンジでドリンク自由に楽しむ贅沢オールインクルーシブ",
                "料理人が目の前で焼き上げるA5仙台牛＆名物仙台せり鍋と宮城地酒のペアリング",
                "ニッカウヰスキー宮城峡蒸溜所への観光に最適＆日常を忘れ心身を満たすリトリート"
              ]
            },
            {
              id: 2,
              name: "大江戸温泉物語Ｐｒｅｍｉｕｍ　仙台作並（旧：作並温泉　鷹泉閣岩松旅館）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38433/38433.jpg",
              rating: 3.99,
              reviews: 2808,
              price: "¥11,900〜",
              access: "JR作並駅より車で約5分。東北自動車道 仙台宮城ICより約25分。",
              special: "４つの天然岩風呂で館内湯めぐりをお楽しみください。広瀬川に溶け込む贅沢な時間をお過ごしいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38433%2F38433.html",
              story: "寛政8年（1796年）創業、作並温泉の開湯の歴史を刻む温泉街最古のシンボル旅館「大江戸温泉物語Premium 仙台作並（旧：作並温泉 鷹泉閣岩松旅館）」。宿の最大の誇りは、宿の地下へ88段の木造階段を下りた広瀬川の川底に湧き出る開湯当時の「天然岩風呂」。川のせせらぎと一体になった4つの混浴・女性専用の岩風呂には、岩盤の割れ目から自噴するフレッシュな源泉が掛け流しで注がれ、初冬の雪景色と奇岩が織りなす水墨画のような絶景の中で名湯を堪能できます。大江戸温泉物語Premiumとしてリニューアルされた館内は、プレミアムラウンジや快適な和モダン客室が完備。夕食は仙台牛料理や旬の味覚が並ぶ豪華プレミアムバイキングが楽しめます。",
              roomTip: "広瀬川渓谷を望む和モダンツインまたは展望和室。創業二百三十年の歴史の重みを感じつつ、快適なベッドと清潔な空間で過ごす寛ぎの時間。",
              gourmetTip: "「冬のプレミアムバイキング／仙台名物会席」。オープンキッチンで焼き上げる牛タンやステーキ、根セリたっぷりの仙台せり鍋、三陸の冬海鮮。",
              highlights: [
                "創業寛政8年の温泉街最古宿＆88段の階段を下りた広瀬川川底の天然岩風呂自噴泉",
                "広瀬川の渓谷美と初雪が織りなす水墨画絶景＆大江戸温泉Premiumバイキング",
                "混浴・女性専用の歴史ある岩風呂巡り＆カップルからシニアまで高い支持"
              ]
            },
            {
              id: 3,
              name: "Ｌａ楽リゾートホテルグリーングリーン",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/193147/193147.jpg",
              rating: 3.33,
              reviews: 294,
              price: "¥8,250〜",
              access: "JR仙山線　作並駅より車で5分",
              special: "美しき広瀬川渓流・四季折々の景観と雄大な自然に抱かれたくつろぎのリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193147%2F193147.html",
              story: "広瀬川沿いの高台に堂々と佇み、エメラルドグリーンの外観が初冬の山々に映える作並温泉の大型リゾート「La楽リゾートホテルグリーングリーン」。広々とした館内には、吹き抜けの開放的なアトリウムロビーや、ファミリーやグループで楽しめる充実したアミューズメント施設が揃っています。温泉大浴場「白樺の湯」や庭園露天風呂には、作並のやわらかな弱アルカリ性源泉がたっぷりと注がれ、初雪を冠した木々を眺めながらのんびりと手足を伸ばせます。夕食はライブ感あふれるディナーバイキング。シェフが目の前で豪快に焼き上げる牛ステーキや揚げたて天ぷら、握り寿司、宮城の郷土料理が食べ放題で楽しめ、子供からシニアまで笑顔が広がります。",
              roomTip: "高層階のパノラマビュー和洋室。作並の山々と広瀬川渓谷を一望し、朝陽にきらめく雪景色を眺めながら三世代でゆったり過ごせる広々空間。",
              gourmetTip: "「ファミリー＆グループ大満足ディナーバイキング」。鉄板牛ステーキ、揚げたてサクサク天ぷら、冬のあったか具だくさん鍋、季節のデザート。",
              highlights: [
                "作並の高台から山々を一望する大型スパリゾート＆白樺の湯と充実バイキング",
                "シェフ実演の牛ステーキや揚げたて天ぷら＆ファミリーで楽しめるアミューズメント",
                "三世代旅行でもゆったり寛げる広々和洋室＆仙台駅からのアクセス至便"
              ]
            },
            {
              id: 4,
              name: "作並温泉　湯の原ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30663/30663.jpg",
              rating: 4.42,
              reviews: 757,
              price: "¥11,000〜",
              access: "JR仙山線　作並駅（駅からの無料送迎あり）／東北自動車道　仙台宮城ICより３０分",
              special: "食事クチコミ４．７５と高評価／源泉貸切風呂と「朝夕個室の美食宿」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30663%2F30663.html",
              story: "作並温泉の温泉街中心部に位置し、大正ロマンの情緒と細やかな家庭的なおもてなしでリピーターを魅了する純和風の美食宿「作並温泉 湯の原ホテル」。館内にはステンドグラスやアンティーク家具が配され、どこか懐かしく温かな空気が漂います。名物の大浴場は、香り高い古代檜を贅沢に使用した「総檜風呂」と、初冬の澄んだ夜空を見上げる露天風呂。弱アルカリ性の肌にやさしい源泉が体を芯から温めてくれます。料理自慢の宿として知られ、夕食は料理長が一品一品心を込めて仕立てる創作和食膳。A5ランクの霜降り仙台牛をメインに、宮城の冬名物である「仙台せり鍋」や三陸の冬魚など、手作りの温もりが伝わる美味が並びます。",
              roomTip: "大正モダン風情の落ち着いた和室。畳の温もりと静かな作並の空気に包まれ、喧騒を離れて大切な人と語り合う心温まるステイ。",
              gourmetTip: "「料理長特選・仙台牛と仙台せり鍋の創作会席」。口の中でとろけるA5仙台牛の陶板焼き、シャキシャキの根セリが香る本場せり鍋、旬の小鉢。",
              highlights: [
                "大正ロマン漂うステンドグラスの純和風宿＆総檜風呂と手作り創作仙台牛会席",
                "シャキシャキの根セリが香る本場仙台せり鍋＆アットホームで細やかな心遣い",
                "古代檜の香りに包まれる極上湯浴み＆静かに語り合いたい大人の隠れ家"
              ]
            },
            {
              id: 5,
              name: "秋保温泉　篝火の湯　緑水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15989/15989.jpg",
              rating: 4.26,
              reviews: 1460,
              price: "¥10,450〜",
              access: "東北自動車道仙台南ICから約15分。仙台中心部まで車で約30分。JR仙台駅東口より無料シャトルバス毎日運行（※要予約）",
              special: "仙台駅から車で約30分。秋保温泉の高台に佇む一軒宿！篝火を灯す幻想的な露天風呂が人気です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15989%2F15989.html",
              story: "作並温泉と同じく仙台の奥座敷として名高い秋保温泉の高台に位置し、広大な日本庭園と夕暮れ時に幻想的な炎が揺らめく名物露天風呂で知られる名門旅館「秋保温泉 篝火の湯 緑水亭」。敷地内に広がる日本庭園は四季折々の美しさを誇り、11月下旬から12月にかけては初雪に白く染まる木々の風情が格別です。夕暮れとともに庭園露天風呂の篝火に火が灯され、パチパチとはぜる炎と湯けむり、雪化粧の庭園が織りなす幽玄の世界に息を呑みます。夕食は仙台名産の極上A5仙台牛のステーキまたはしゃぶしゃぶをメインに、石巻港や気仙沼港から届く冬の海の幸を盛り込んだ華やかな会席料理。東北随一の格式と上質なおもてなしを堪能できます。",
              roomTip: "広大な日本庭園を一望する東館・緑水館和室。雪化粧した庭園の木々と池の鯉を静かに見下ろす、優雅で落ち着いた和のプライベート空間。",
              gourmetTip: "「冬の緑水亭特選会席」。とろけるA5仙台牛のサーロイン陶板焼き、三陸産寒ヒラメと鮑のお造り、冬の滋味あふれる郷土小鍋。",
              highlights: [
                "夕暮れに炎揺らめく名物「篝火の湯」庭園露天風呂＆極上A5仙台牛と三陸冬海鮮",
                "広大な日本庭園の初雪パノラマ＆仙台奥座敷・秋保温泉の格式ある名門ステイ",
                "篝火の幻想的な光に包まれる特別な夜＆記念日やご褒美旅行にぴったりの名旅館"
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
          alt="作並温泉の広瀬川雪景色と天然雪見岩風呂"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold">
            <Sparkle className="w-4 h-4" />
            11月・12月 広瀬川渓谷雪見＆仙台美食特集｜宮城・作並温泉＆仙台奥座敷
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬の広瀬川雪見露天と美女づくりの湯<br className="hidden sm:inline" />
            極上A5仙台牛ステーキ＆名物仙台せり鍋会席を味わう老舗宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            杜の都・仙台の奥座敷に湧く名湯「美女づくりの湯」。広瀬川の清流と初雪が織りなす渓谷美を天然岩風呂で愛で、シャキシャキの仙台せり鍋とA5仙台牛に舌鼓を打つ冬の贅沢。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-rose-400" /> 11月下旬〜12月が初雪とせり鍋の旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-rose-400" /> 広瀬川川底の天然岩風呂＆弱アルカリ美肌湯</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-rose-400" /> 極上A5仙台牛＆名物仙台せり鍋</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Sendai Okuzashiki & Winter Serinabe</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                広瀬川の雪渓と湯けむり旅情｜11月・12月に作並温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              仙台駅からJR仙山線に揺られて約40分。仙台市街の喧騒を抜けて奥羽山脈の山懐へと分け入ると、広瀬川の上流に拓けた静寂な温泉地「作並温泉」が姿を現します。伊達政宗公が開いた城下町・仙台の「奥座敷」として四百年以上にわたり文人や湯治客に愛されてきたこの地は、11月下旬から12月にかけて、広瀬川の急峻な渓谷が白く初雪を纏い、湯けむりが渓谷を漂う息を呑むような初冬の風情を迎えます。
            </p>
            <p>
              初冬の作並温泉の最大の魅力は、大自然の息吹をダイレクトに感じる湯浴み体験にあります。特に名門旅館の川底露天風呂では、川のすぐ際まで下りていき、目の前を流れる清流のせせらぎと川霧、岸壁に積もる純白の雪を間近に眺めながら温かい名湯に浸かることができます。水墨画のように静まり返った渓谷と、体の芯まで染み渡るまろやかな温泉の温もりが、旅人の心と体を深い安らぎで包み込みます。
            </p>
            <p>
              そして冬のみちのく旅で絶対に外せないのが、冬の宮城が全国に誇る二大美食「仙台牛」と「仙台せり鍋」です。宮城の大自然と清らかな水で丹精込めて育てられた「仙台牛」は、最高ランクのA5・B5のみに許される日本屈指のブランド和牛。きめ細かな霜降りと芳醇な香りは、陶板焼きやしゃぶしゃぶで口に入れた瞬間にとろける極上の感動を与えてくれます。さらに、初冬に最も香りと甘みが増す宮城特産の伝統野菜「セリ」を根っこごと丸ごと味わう「仙台せり鍋」は、シャキシャキとした根の食感と鶏出汁の旨味が染み渡る至高のご当地鍋。宮城の銘酒・地酒とともに味わえば、冬の寒さも心地よい贅沢へと変わります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Waves className="w-4 h-4 text-rose-600" />
                広瀬川の川底天然岩風呂
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                広瀬川の川底から自噴する開湯の湯。初雪に染まる渓谷の奇岩を眺めながら入る源泉掛け流し湯は圧巻の風情。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Utensils className="w-4 h-4 text-rose-600" />
                名物仙台せり鍋＆A5仙台牛
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                根っこまで甘い旬の仙台セリと地鶏出汁の鍋。さらにサシが見事な最高ランクA5仙台牛ステーキを地酒とともに。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Wine className="w-4 h-4 text-rose-600" />
                宮城峡蒸溜所と奥座敷散策
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                作並駅から車で5分のニッカウヰスキー宮城峡蒸溜所。赤レンガと雪景色、定義如来の油あげ巡りも大人気。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Deep Dive Geography & Terroir */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Sendai Okuzashiki Terroir & Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                奥羽山脈の伏流水が生んだ美肌泉と仙台セリ・A5仙台牛の品質基準
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              作並温泉が位置する広瀬川上流域は、奥羽山脈の船形連峰から流れ出る清らかな伏流水が豊富に湧き出す名水の郷です。ニッカウヰスキーの創業者・竹鶴政孝が北海道・余市に次ぐ第二の蒸溜所としてこの地を選んだのも、広瀬川と新川（にっかがわ）という二つの清流が合流し、冷涼でウイスキー熟成に適した霧が発生する奇跡の環境に惚れ込んだためでした。この清冽な水脈こそが、作並の弱アルカリ性源泉の純度の高さを支えています。
            </p>
            <p>
              また、冬の宮城を代表する味覚「仙台セリ」は、名取川流域や名取市下増田地区などの伏流水が豊かな湿地で数百年以上にわたり栽培されてきた伝統野菜です。秋から冬にかけて寒さが厳しくなるほど、セリは凍結を防ぐために自ら糖分を蓄え、茎のみならず「根っこ」に強い甘みと豊かな芳香を凝縮させます。宮城の料理人が丹念に泥を洗い流し、真っ白に仕上げた根セリを出汁にくぐらせる瞬間、部屋いっぱいに広がる清々しい香りは、冬の仙台旅でしか味わえない唯一無二の感動です。
            </p>
            <p>
              さらに、主役となる「仙台牛」は、全国の銘柄牛の中でも最も格付け基準が厳しいことで有名です。日本食肉格付協会の規格において、最高ランクの「A5」または「B5」に格付けされたものだけしか「仙台牛」を名乗ることが許されません（それ以外は「仙台黒毛和牛」等に分類）。良質なササニシキやひとめぼれの稲わらを食べて育った仙台牛は、脂の融点が低く、口内の温度ですっと溶け、赤身の濃厚な旨味と甘やかな脂が絶妙のハーモニーを奏でます。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Selected Luxury & Heritage Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月の作並温泉＆仙台奥座敷を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              極上A5仙台牛ステーキと名物仙台せり鍋、広瀬川渓谷を望む雪見露天風呂を誇る、楽天トラベル高評価の特選宿をご紹介します。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-400">({hotel.reviews.toLocaleString()}件)</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-rose-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    第{hotel.id}選
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-rose-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（2名1室時1名）</span>
                        <span className="text-xl font-extrabold text-rose-800">{hotel.price}</span>
                      </div>
                    </div>

                    <p className="text-xs text-rose-800 font-semibold bg-rose-50 px-3 py-1.5 rounded-xl inline-block">
                      {hotel.special}
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-rose-700" /> おすすめ客室・眺望
                        </span>
                        <p className="text-xs text-slate-600 leading-normal">
                          {hotel.roomTip}
                        </p>
                      </div>
                      <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100/80 space-y-1">
                        <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" /> 冬の特選グルメ
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights Points */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {hotel.highlights.map((hl: string, idx: number) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hotel.access}
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition duration-200"
                    >
                      <span>空室状況・プラン詳細（楽天トラベル）</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 1泊2日のおすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【11月・12月】仙台奥座敷の雪見露天と仙台せり鍋を極める1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-rose-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-rose-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">1日目</span>
                仙台駅から仙山線で宮城峡へ・蒸溜所見学と広瀬川の雪見岩風呂
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前中に東北新幹線でJR仙台駅へ到着。仙台駅構内で名物牛たん定食のランチをいただいた後、12時台のJR仙山線に乗車して約35分で作並駅へ。まずは無料シャトルバスで「ニッカウヰスキー宮城峡蒸溜所」を訪問。赤レンガの美しい蒸溜棟と初雪を纏った木々を眺めながら見学ツアーとウイスキーのテイスティングを楽しみます。15時半頃に作並温泉の宿へチェックイン。広瀬川の清流が間近に迫る川底の天然岩風呂や雪見露天風呂に浸かり、弱アルカリ性の美肌湯で体を芯まで温めます。夕食は最高級A5ランク仙台牛のステーキと、根っこまで香ばしく甘い名物「仙台せり鍋」の特選会席を宮城の銘酒とともに堪能します。
              </p>
            </div>
            <div className="border-l-2 border-rose-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-rose-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">2日目</span>
                静かな雪渓の朝風呂・定義如来西方寺参拝と仙台光のページェント
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                朝、水墨画のように澄み渡る広瀬川の雪景色を眺めながら朝湯を満喫し、地元米ひとめぼれの炊きたてご飯と焼き魚の和朝食をいただきます。10時にチェックアウト後、車または路線バスで山間の霊峰「定義如来 西方寺」へ。国登録有形文化財の五重塔を参拝し、門前町で名物の揚げたて熱々「三角定義あぶらあげ」に七味と醤油をかけて頬張ります。午後は仙山線で仙台駅へ戻り、12月であれば夕暮れから定禅寺通で開催される「SENDAI光のページェント」（数十万球のLEDがケヤキ並木を照らす東北屈指のイルミネーション）を鑑賞し、冬の旅情に浸りながら新幹線で帰路へ着きます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips */}
        <section className="bg-gradient-to-br from-rose-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-800">
            <Compass className="w-6 h-6 text-rose-400" />
            <h2 className="text-xl sm:text-2xl font-bold">
              11月・12月の作並温泉旅行を満喫する実践ガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-rose-300 flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4" /> 気候・冬用タイヤの準備
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                奥羽山脈の麓に位置するため仙台中心部より冷え込みます。11月下旬以降は降雪や夜間早朝の路面凍結があるため、マイカーやレンタカーはスタッドレスタイヤ必須です。防寒コートやマフラーも忘れずに。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-rose-300 flex items-center gap-1.5">
                <Footprints className="w-4 h-4" /> 宮城峡蒸溜所と定義如来
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                ニッカウヰスキー宮城峡蒸溜所は作並駅から車で約5分。赤レンガの蒸溜棟と雪景色が美しく見学と試飲が楽しめます。また定義如来の揚げたて「三角油あげ」も初冬のドライブ立ち寄りに絶好です。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-rose-300 flex items-center gap-1.5">
                <Utensils className="w-4 h-4" /> 根セリとA5仙台牛の旬
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                11月〜12月は名物「仙台せり鍋」の最も美味しいシーズン。シャキシャキとした根っこの甘みが絶品です。A5ランク仙台牛のステーキやすき焼きとともに地酒と楽しむプランが一番人気です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の作並温泉・仙台奥座敷旅行 よくある質問
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-rose-700 font-extrabold flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Related Links / Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <Compass className="w-6 h-6 text-rose-800" />
            <h2 className="text-xl font-bold text-slate-900">
              あわせて読みたい！冬の温泉・美食旅行特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded-full inline-block">宮城・秋保</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-rose-800 transition line-clamp-2">
                秋保温泉の初冬磊々峡雪景色と仙台牛・せり鍋会席宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                名取川の渓谷美と名門宿の至福の温泉で温まる仙台の休日。
              </p>
            </Link>
            <Link 
              href="/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded-full inline-block">宮城・松島</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-rose-800 transition line-clamp-2">
                松島温泉の初冬松島湾絶景と名物松島牡蠣・三陸海鮮宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                日本三景・松島湾の絶景露天風呂とぷりぷりの冬牡蠣を堪能。
              </p>
            </Link>
            <Link 
              href="/winter-yamagata-akayu-onsen-yonezawa-beef-wine-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded-full inline-block">山形・赤湯</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-rose-800 transition line-clamp-2">
                赤湯温泉の初冬ワイナリー巡りと米沢牛すき焼き宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                置賜盆地の名湯と極上の米沢牛、地ワインを味わう文化旅。
              </p>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-700 bg-rose-100/60 px-2 py-0.5 rounded-full inline-block">山形・銀山</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-rose-800 transition line-clamp-2">
                銀山温泉の大正ロマン初冬ガス灯雪景色と尾花沢牛宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                銀世界にガス灯が灯る奇跡の温泉街と雪見露天風呂の風情。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
