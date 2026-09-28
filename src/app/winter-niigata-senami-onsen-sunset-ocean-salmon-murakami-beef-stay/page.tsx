import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Sunset
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月新潟・瀬波温泉の初冬日本海夕日絶景露天と越後村上鮭三昧】名物塩引鮭・はらこ飯＆極上村上牛会席の海辺宿5選",
  description: "11月から12月にかけて、新潟県北部の日本海沿いに湧く「瀬波温泉」は、水平線に沈む茜色の夕日と荒波が織りなす息を呑むような初冬の絶景を迎えます。城下町・村上では、清流・三面川（みおもてがわ）の伝統鮭漁が最盛期を迎え、町屋の軒先に無数の塩引鮭が吊るされる初冬の風物詩が広がります。開湯120年超の「熱の湯」塩化物泉の展望露天風呂で温まり、脂の乗った塩引鮭やプチプチと弾ける醤油漬けいくらの「はらこ飯」、そして最高ランク「村上牛」の陶板ステーキを味わい尽くす海辺の厳選宿5選を徹底解説します。",
  keywords: '瀬波温泉 宿泊, 瀬波温泉 夕日 露天風呂, 越後村上 鮭 はらこ飯, 塩引鮭, 村上牛 ステーキ 11月 12月, 汐美荘, 大観荘せなみの湯, 磐舟, 静雲荘, 瀬波グランドホテルはぎのや',
  alternates: {
    canonical: 'https://croud-travel.com/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay'
  },
  openGraph: {
    title: "【11・12月新潟・瀬波温泉の初冬日本海夕日絶景露天と越後村上鮭三昧】名物塩引鮭・はらこ飯＆極上村上牛会席の海辺宿5選",
    description: "11月から12月にかけて、新潟県北部の日本海沿いに湧く「瀬波温泉」は、水平線に沈む茜色の夕日と荒波が織りなす息を呑むような初冬の絶景を迎えます。城下町・村上では、清流・三面川（みおもてがわ）の伝統鮭漁が最盛期を迎え、町屋の軒先に無数の塩引鮭が吊るされる初冬の風物詩が広がります。開湯120年超の「熱の湯」塩化物泉の展望露天風呂で温まり、脂の乗った塩引鮭やプチプチと弾ける醤油漬けいくらの「はらこ飯」、そして最高ランク「村上牛」の陶板ステーキを味わい尽くす海辺の厳選宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の日本海に沈む夕日と瀬波温泉の露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "瀬波温泉の泉質や効能、開湯の歴史について教えてください。",
    "a": "瀬波温泉は明治37年（1904年）、石油の掘削作業中に地下約260メートルから約95℃前後の高温の熱湯が突然噴出して開湯した、歴史ある名湯です。泉質は「ナトリウム-塩化物温泉（中性低張性高温泉）」で、豊富な塩分を含んでいるため「熱の湯」とも呼ばれます。塩分が肌の表面に膜を作って水分の蒸発を防ぐため、湯上がりの保温・保湿効果が極めて高く、冷え性や神経痛、疲労回復に抜群の効果を発揮します。また、ほのかに香る独特のアブラ臭（石油採掘地特有の香り）が温泉情緒を一層引き立てます。"
  },
  {
    "q": "11月・12月の瀬波温泉の気候や気温、日本海の冬景色は？",
    "a": "新潟県北部に位置する瀬波温泉の初冬は、日本海特有の冬の季節風が吹き始め、海が荒れて白波が立つ日が増えてきます。11月の最高気温は12〜15℃、最低気温は5〜8℃前後ですが、海風が吹くと体感温度は低くなります。12月に入ると最高気温は7〜10℃、最低気温は1〜4℃前後まで冷え込み、初雪が舞うこともあります。しかし、初冬の澄んだ晴れ間には、水平線全体を真っ赤に染め上げる息を呑むような夕日を見ることができ、荒々しい日本海の波音とともにダイナミックな景観を楽しめます。防風・防寒性に優れたコートやダウン、マフラー、手袋を必ずご用意ください。"
  },
  {
    "q": "村上名物「三面川の鮭」と「塩引鮭」「はらこ飯」とは？",
    "a": "越後村上は江戸時代、村上藩士・青砥武平治が世界で初めて鮭の自然増殖システム「種川の制」を考案した「鮭のまち」です。市内を流れる清流・三面川（みおもてがわ）では、11月から12月にかけて伝統の「居繰網漁（いぐりあみりょう）」が行われ、遡上する鮭で川が活気づきます。名物「塩引鮭」は、腹を完全に割かず一部を残す村上独特の「止め腹」で捌き、粗塩を擦り込んで初冬の寒風に晒して熟成させたもの。アミノ酸が増加し旨味が凝縮します。「はらこ飯」は、新米の岩船産コシヒカリの上に、特製醤油だれに漬け込んだ大粒の生いくら（はらこ）をたっぷりのせた贅沢な郷土の逸品です。"
  },
  {
    "q": "ブランド黒毛和牛「村上牛」の美味しさの特徴は？",
    "a": "村上牛は、新潟県村上市や関川村で肥育される黒毛和牛のうち、肉質等級がA4・A5ランクに格付けされた最高級ブランド牛です。新潟県特有の良質なコシヒカリの稲わらや澄んだ天然水でじっくり肥育されるため、鮮やかな赤身の中に繊細な霜降りが均一に入ります。その肉質は「ひとくち口に含むと芳醇な脂の甘みがとろける」と絶賛され、全国の肉牛共励会でも最高位の名誉賞を幾度も受賞しています。瀬波温泉の旅館では、陶板ステーキや石焼き、しゃぶしゃぶで至高の味を堪能できます。"
  },
  {
    "q": "新潟駅や東京方面から瀬波温泉へのアクセス方法は？",
    "a": "東京方面からは、JR上越新幹線で「新潟駅」まで約2時間（または長岡駅経由）。新潟駅よりJR特急「いなほ」に乗り換えて「村上駅」まで約45〜50分です。村上駅からは瀬波温泉各宿の無料送迎バス（要予約）または路線バス・タクシーで約8〜10分で温泉街に到着します。車の場合は、日本海東北自動車道「村上瀬波温泉IC」より約10〜12分です。初冬の新潟は山間部や降雪時に路面凍結のおそれがあるため、車の場合はスタッドレスタイヤを装着してください。"
  }
];

export default function NiigataSenamiWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay"
        },
        "headline": "【11・12月新潟・瀬波温泉の初冬日本海夕日絶景露天と越後村上鮭三昧】名物塩引鮭・はらこ飯＆極上村上牛会席の海辺宿5選",
        "description": "11月から12月にかけて、新潟県北部の日本海沿いに湧く「瀬波温泉」は、水平線に沈む茜色の夕日と荒波が織りなす息を呑むような初冬の絶景を迎えます。城下町・村上では、清流・三面川（みおもてがわ）の伝統鮭漁が最盛期を迎え、町屋の軒先に無数の塩引鮭が吊るされる初冬の風物詩が広がります。開湯120年超の「熱の湯」塩化物泉の展望露天風呂で温まり、脂の乗った塩引鮭やプチプチと弾ける醤油漬けいくらの「はらこ飯」、そして最高ランク「村上牛」の陶板ステーキを味わい尽くす海辺の厳選宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T12:00:00+09:00",
        "dateModified": "2026-09-28T12:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 越後・日本海美味紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "新潟・瀬波温泉 初冬日本海夕日絶景露天と越後村上鮭三昧の宿",
            "item": "https://croud-travel.com/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay#faq",
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
              name: "大江戸温泉物語Ｐｒｅｍｉｕｍ　汐美荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4896/4896.jpg",
              rating: 4.18,
              reviews: 1951,
              price: "¥16,200〜",
              access: "日本海東北自動車道　神林岩船港ＩＣから車で約１０分。",
              special: "開放感あふれるプレミアムラウンジと波音を感じる絶景露天風呂で思い思いの贅沢な時間をお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4896%2F4896.html",
              story: "「夕映えの宿」として全国に名を馳せ、日本海を真正面に捉える波打ち際の至高のロケーションに建つオーシャンフロントリゾート「大江戸温泉物語Premium 汐美荘（しおみそう）」。日本の夕陽百選にも選ばれた瀬波の海岸線に位置し、大浴場や露天風呂はまるで海と一体化したかのようなインフィニティ設計。初冬の澄み渡る茜空と日本海の白波を眺めながら入る塩化物泉は、身体の芯まで熱が染み渡る極上の湯浴み体験を約束します。夕食はプレミアムバイキング。村上名物の鮭料理コーナーをはじめ、目の前で焼き上げる村上牛ステーキ、日本海の新鮮な寒ブリや南蛮エビのお造り、炊きたての新潟県産新米岩船産コシヒカリと自家製いくらの贅沢なマリアージュを心ゆくまで堪能できます。",
              roomTip: "日本海を一望するオーシャンビュー客室または露天風呂付きモダン和洋室。夕刻には空と海が黄金色から深い紫へと移ろう奇跡のサンセットを部屋から独占。",
              gourmetTip: "「冬の越後プレミアムバイキング」。炭火で香ばしく焼く塩引鮭、プチプチのはらこ飯、シェフが鉄板で焼く村上牛サーロイン、日本海鮮魚の舟盛り。",
              highlights: [
                "日本の夕陽百選に輝く波打ち際インフィニティ露天風呂＆村上牛と鮭料理の豪華バイキング",
                "日本海に沈む初冬の夕日と水平線を望む圧倒的な開放感＆新米岩船コシヒカリと自家製いくら",
                "オーシャンビュー客室で過ごす贅沢なひととき＆ファミリーからカップルまで快適な施設"
              ]
            },
            {
              id: 2,
              name: "瀬波温泉　大観荘　せなみの湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15218/15218.jpg",
              rating: 4.52,
              reviews: 1845,
              price: "¥11,000〜",
              access: "JR村上駅下車タクシー10分、日本海東北自動車道神林岩船ICから国道345号線経由約10分",
              special: "どのお部屋からも日本海に沈む夕陽見られる波打ち際の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15218%2F15218.html",
              story: "瀬波海岸の広大な砂浜に面して建ち、和の粋を極めた洗練された佇まいと海景パノラマで皇族や各界の要人にも愛されてきた最高峰の名旅館「瀬波温泉 大観荘 せなみの湯」。館内の随所から日本海を見晴らせ、とりわけ海辺にせり出すように造られた大浴場「夕映えの湯」と露天風呂「波の音」は圧巻の開放感。波しぶきが届きそうな距離で、初冬の夕暮れ時の絶景グラデーションを眺めるひとときは贅沢の極みです。大観荘の料理は、村上の伝統と現代の技法が調和した特選日本料理会席。11月・12月には脂がのりきった三面川の鮭を使った伝統の塩引鮭焼きや鮭の粕汁、宝石のように輝くはらこ飯、そしてきめ細かなサシが入った極上村上牛の陶板焼きが雅やかな器に美しく盛られます。",
              roomTip: "海側に面した温泉露天風呂付き客室または貴賓室。波音をBGMにプライベート露天風呂で温まり、冬の澄んだ星空と漁火（いさりび）を鑑賞。",
              gourmetTip: "「料理長特選・冬の越後村上鮭三昧と村上牛会席」。名物塩引鮭の炭火焼き、特製醤油だれのはらこ飯、村上牛フィレステーキ、冬の日本海地魚姿造り。",
              highlights: [
                "皇族も逗留した瀬波最高峰の名旅館＆海辺せり出し露天「波の音」と伝統の鮭三昧会席",
                "三面川の旬鮭を使った本場塩引鮭とはらこ飯＆きめ細かなサシが入る極上村上牛の陶板焼き",
                "夜には漁火と満天の星が広がる静寂の海景＆洗練されたおもてなしが紡ぐ特別な休日"
              ]
            },
            {
              id: 3,
              name: "瀬波温泉　ゆ処そば処　磐舟",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108917/108917.jpg",
              rating: 4.22,
              reviews: 189,
              price: "¥6,550〜",
              access: "【新潟空港→瀬波温泉直行ライナー運行中】村上駅よりお車で１０分  :   日本海東北自動車道「神林岩船港ＩＣ」より１０分",
              special: "日本海を見下ろす眺望と上質な源泉の加水式掛流しの湯です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108917%2F108917.html",
              story: "瀬波温泉の高台に位置し、眼下に広がる日本海と瀬波の街並みを一望する絶景と、館主こだわりの本格手打ち蕎麦が評判の個性派温泉宿「瀬波温泉 ゆ処そば処 磐舟（ばんしゅう）」。敷地内に自家源泉を持ち、展望大浴場や露天風呂には95℃前後の高温で湧き出る新鮮な源泉が贅沢に掛け流されています。初冬の冷たい海風を感じながら、熱めの美肌湯に浸かる爽快感は格別。そして磐舟の最大の自慢は、職人が丹精込めて打つ喉越しの良い自家製十割蕎麦と、日本海直送の新鮮な海の幸。11月・12月には脂の乗った旬の寒魚のお造りや天ぷら、村上名物の鮭料理とともに、香り高い打ち立て蕎麦を味わう贅沢なひとときが待っています。手頃な価格帯で上質な湯と食を楽しめるコストパフォーマンス抜群の宿です。",
              roomTip: "日本海を見渡す展望和室。高台ならではのワイドな視野で初冬の海原を眺め、静かに流れる時間に身を委ねられる心地よい空間。",
              gourmetTip: "「名物手打ち蕎麦と日本海冬の海鮮御膳」。香り高い自家製十割蕎麦、冬の日本海地魚のお造り、塩引鮭の焼き物、村上牛の小鍋仕立て。",
              highlights: [
                "高台から日本海を見下ろす絶景展望風呂＆敷地内自家源泉掛け流しと職人手打ち十割蕎麦",
                "95℃の高温源泉が注ぐ熱の湯美肌風呂＆日本海の旬魚姿造りと手頃な価格の絶品ステイ",
                "気兼ねなく寛げるアットホームな滞在＆日本海の絶景と本格手打ち蕎麦の唯一無二の魅力"
              ]
            },
            {
              id: 4,
              name: "瀬波温泉　くつろぎの宿　旅館　静雲荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109406/109406.jpg",
              rating: 4.47,
              reviews: 2124,
              price: "¥19,999〜",
              access: "【新潟空港→瀬波温泉直行ライナー運行中】【車】村上・瀬波温泉ICより約５分　【電車】村上駅よりお車で約10分（送迎あり）",
              special: "お客様の声で5つ★獲得！日本海１人占めの静かなくつろぎ空間。大切な人と、また自分へのご褒美に",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109406%2F109406.html",
              story: "瀬波の波打ち際近くに静かに佇み、行き届いた細やかなおもてなしとプライベート感を重視した全館落ち着きあふれる純和風旅館「瀬波温泉 くつろぎの宿 旅館 静雲荘（せいうんそう）」。館内には趣の異なる客室露天風呂付き客室が充実しており、自分たちだけの贅沢な空間で源泉の湯浴みを満喫できます。大浴場や露天風呂からも日本海を間近に望み、初冬の荒波と夕日のドラマチックな光景が広がります。料理は日本海の活魚と村上牛を二大主役に据えた贅沢な美食会席。料理人が目の前で調理するプランもあり、村上名物の鮭料理をはじめ、冬の日本海で獲れたての活アワビやズワイガニ、霜降り村上牛の石焼きなど、贅を尽くした厳選素材の美味しさを心ゆくまで堪能できます。",
              roomTip: "日本海を望む源泉掛け流し露天風呂付き和洋室。水平線に沈む夕日を湯船から眺め、湯上がりにはテラスで冷たい海風を感じる至福の休日。",
              gourmetTip: "「越後冬の贅・村上牛と日本海海鮮極み会席」。極上村上牛サーロイン陶板焼き、活鮑の踊り焼き、塩引鮭とハラス焼き、炊きたて岩船米のはらこ飯。",
              highlights: [
                "落ち着いた大人の隠れ家純和風宿＆多彩な客室露天風呂と村上牛・日本海活魚会席",
                "全館に行き届く心温まるもてなし＆水平線に沈む夕日を湯船から眺めるプライベート空間",
                "記念日や夫婦の特別な旅行に選ばれる高い満足度＆日本海の活アワビやズワイガニの美味"
              ]
            },
            {
              id: 5,
              name: "瀬波温泉　瀬波グランドホテル　はぎのや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10690/10690.jpg",
              rating: 4.44,
              reviews: 3060,
              price: "¥8,800〜",
              access: "JR村上駅より車にて約10分（17時まで無料送迎有り：要予約）日本海東北自動車道　神林・岩船港ⅠＣより約１０分。",
              special: "明治41年創業　伝統に磨かれた細やかなサービスを心がける寛ぎの宿　露天風呂付客室",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10690%2F10690.html",
              story: "瀬波温泉街の高台に位置し、敷地内に高温の自家源泉を有する開湯草創期からの伝統を誇る名門老舗「瀬波温泉 瀬波グランドホテル はぎのや」。露天風呂付き客室や展望露天風呂、貸切風呂など館内に多彩な浴槽が揃い、豊富な湯量を誇る「熱の湯」を満喫できます。温泉の熱を利用した名物「温泉卵作り体験」も宿泊者に大人気。はぎのやの自慢は、越後村上の伝統食文化に敬意を払った豪華会席料理。11月・12月の冬期には、村上特有の気候風土で熟成された本場「塩引鮭」をはじめ、鮭の頭を軟らかく煮込んだ「氷頭（ひず）なます」、宝石のような「はらこ飯」、そしてサシの美しいA5ランク村上牛のステーキなど、城下町村上の歴史が育んだ美味の真髄を味わえます。",
              roomTip: "庭園または温泉街を見渡す露天風呂付き客室。自家源泉の滑らかな湯をプライベートに満喫し、静寂の中でゆったりと羽を休める寛ぎの時間。",
              gourmetTip: "「村上伝統鮭料理と村上牛ステーキの饗宴会席」。本場塩引鮭の炭火焼き、氷頭なます、自家製醤油漬けのはらこ飯、A5村上牛のステーキ陶板焼き。",
              highlights: [
                "開湯草創期の歴史誇る名門老舗＆自家源泉掛け流し湯と名物温泉卵体験・伝統塩引鮭会席",
                "豊富な湯量誇る熱の湯温泉巡り＆城下町村上の歴史が育んだ鮭百種料理とA5村上牛ステーキ",
                "温泉街の高台に佇む静かなロケーション＆村上城下町散策や酒蔵巡りの絶好の拠点"
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
          alt="初冬の日本海夕日と瀬波温泉の絶景"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-300 text-xs sm:text-sm font-semibold">
            <Sunset className="w-4 h-4" />
            11月・12月 日本海夕日露天＆越後村上鮭三昧特集｜新潟・瀬波温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬日本海夕日絶景露天と越後村上鮭三昧<br className="hidden sm:inline" />
            名物塩引鮭・はらこ飯＆極上村上牛会席の海辺宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            日本海の水平線に沈む茜色の夕日を望む熱の湯露天風呂。三面川で遡上する旬の鮭を使った伝統の塩引鮭やはらこ飯、A5村上牛の贅沢な美食に酔いしれる冬の越後旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-orange-400" /> 11月〜12月が伝統鮭漁の最盛期</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-orange-400" /> 保温力抜群の「熱の湯」塩化物泉</span>
            <span className="flex items-center gap-1"><Fish className="w-4 h-4 text-orange-400" /> 本場塩引鮭・はらこ飯＆村上牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Sunset & Salmon Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                日本海の夕映えと鮭の食文化｜11月・12月に瀬波温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              新潟県の最北部に位置し、城下町・村上の海岸線に広がる「瀬波温泉」。明治37年（1904年）の石油掘削中に熱湯が噴出して開湯したこの温泉は、日本の夕陽百選にも選ばれた日本海屈指のサンセットビューを誇る名湯です。初冬の11月から12月にかけて、澄み渡る大気の中で水平線が茜色から深紅へと染まりゆく夕暮れ時のグラデーションは、息を呑むほどの感動をもたらします。
            </p>
            <p>
              瀬波温泉の湯は、約95℃という驚異的な高温泉で湧き出る塩化物泉。塩分が肌に薄いヴェールを作って熱を閉じ込めるため「熱の湯」と呼ばれ、冬の冷たい日本海の浜風で冷えた身体の芯までぽかぽかに温めてくれます。波打ち際すれすれのインフィニティ露天風呂や高台の展望風呂から、ダイナミックな白波と夕日を眺めながらの湯浴みは至福のひとときです。
            </p>
            <p>
              そして11月・12月の村上を語る上で欠かせないのが「鮭（サケ）」の存在です。市内を流れる清流・三面川（みおもてがわ）では伝統の居繰網漁が行われ、町屋の軒下には無数の「塩引鮭」が初冬の寒風に揺れる壮観な光景が広がります。職人が丹精込めて熟成させた塩引鮭の香ばしい焼き物、新米の岩船産コシヒカリが見えないほど大粒のイクラを敷き詰めた「はらこ飯」、そして全国の品評会で最高賞を受賞した最高峰黒毛和牛「村上牛」の陶板ステーキ。冬の越後村上には、日本の食文化の頂点を極めるごちそうが待っています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-orange-900 text-sm">
                <Sunset className="w-4 h-4 text-orange-600" />
                日本の夕陽百選・日本海夕景
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                初冬の澄み渡る茜色の日本海パノラマ。波打ち際インフィニティ露天風呂から眺める感動的な夕暮れ。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-orange-900 text-sm">
                <Fish className="w-4 h-4 text-orange-600" />
                11・12月最盛期・村上鮭三昧
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                三面川伝統漁と軒下に吊るされる塩引鮭。旨味が凝縮した塩引鮭の炭火焼きと宝石のようなはらこ飯。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-orange-900 text-sm">
                <Utensils className="w-4 h-4 text-orange-600" />
                最高ランクA5村上牛ステーキ
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                全国屈指の肉質を誇る村上牛の霜降りサーロイン。とろける脂の甘みと岩船米コシヒカリの贅沢な味わい。
              </p>
            </div>
          </div>
        </section>

        {/* Section 1.5: Sea & Sunset Phenomena */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Sunset className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Sunset & Maritime Wonder</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                日本海の初冬季節風と茜色の水平線が魅せる劇的な黄昏時間
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              初冬の日本海は、北西からの季節風によって時に白波が立ち、力強い波音が海岸線に響き渡るダイナミックな景観を見せます。しかし夕刻、西の水平線に雲が切れると、空と海全体が黄金色から深紅、そして宵闇の藍色へと刻一刻と変化する劇的な「夕映え」が現れます。
            </p>
            <p>
              波打ち際に位置する瀬波温泉の露天風呂では、激しい波しぶきが舞い散る冷気と、約42℃に保たれた熱い塩化物泉との対比が、全身の感覚を呼び覚まします。日没とともに遥か沖合に点灯するイカ釣り漁船の「漁火（いさりび）」が、冬の闇夜に幻想的な光の帯をつくり出し、露天風呂に浸かりながら何時間でも眺めていられる至極の時間を演出します。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Selected Seaside Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【瀬波温泉】日本海夕日露天と越後村上鮭三昧を愉しむ厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              日本海の絶景オーシャンビュー露天、本場塩引鮭・はらこ飯、極上村上牛を味わえるおすすめの宿を詳しく紹介します。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-all flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    第{h.id}位
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-orange-50 text-orange-800 rounded-md">
                        {h.special}
                      </span>
                      <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-orange-700 transition-colors">
                      <a href={h.url} target="_blank" rel="noopener noreferrer">
                        {h.name}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100">
                        <span className="font-bold text-orange-900 block mb-1">【客室のこだわり】</span>
                        <p className="text-slate-600">{h.roomTip}</p>
                      </div>
                      <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
                        <span className="font-bold text-rose-900 block mb-1">【冬の味覚プラン】</span>
                        <p className="text-slate-600">{h.gourmetTip}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-slate-700 block">おすすめのハイライト：</span>
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（2名1室時・1名あたり）</span>
                      <div className="text-xl font-extrabold text-orange-700">{h.price}</div>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all"
                    >
                      楽天トラベルで空室・プランを見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: Gourmet & Hot Spring Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                三面川の鮭文化が生んだ塩引熟成の科学と村上牛の極上サシ
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              村上の「塩引鮭」が他地域の新巻鮭と決定的に異なるのは、初冬の寒風による「発酵と熟成」のプロセスです。日本海から吹き付ける湿り気を帯びた冷たい北風と、適度な湿度が鮭の身をゆっくりと乾燥させます。この過程で鮭自体の酵素が働き、タンパク質が旨味成分であるアミノ酸（グルタミン酸やイノシン酸）へと分解され、独特の深い芳香と凝縮された旨味が生まれます。一切れ焼くだけで立ち上る香ばしさは、白米の最高峰・岩船産コシヒカリと完璧に呼応します。
            </p>
            <p>
              また、瀬波温泉の宿泊で外せない「村上牛」は、コシヒカリの乾草を飼料として育ちます。不飽和脂肪酸の割合が高いため脂の融点が低く、口に入れた途端に体温でさらりと溶け出し、しつこさが全く残りません。塩化物泉の湯で温まった身体に、極上の村上牛陶板焼きと越後の辛口銘酒が染み渡る美食体験は、旅の満足度を最高潮へと導いてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の越後村上鮭三昧・日本海夕日露天と町屋散策の休日
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-orange-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-orange-600" />
                【1日目】城下町で塩引鮭吊るし見学と日本海インフィニティ露天
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">12:30</span>
                  <span><strong>JR村上駅到着＆はらこ飯ランチ：</strong>駅前の割烹料理店で、キラキラ輝くイクラが丼一面を覆う名物「はらこ飯」を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">14:00</span>
                  <span><strong>町屋通り「きっかわ」で千匹の鮭見学：</strong>天井から吊るされた無数の塩引鮭の壮観な光景を撮影し、伝統の鮭加工品を購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">15:30</span>
                  <span><strong>瀬波温泉へチェックイン＆夕映え露天：</strong>海辺の宿に到着。夕暮れ前に露天風呂へ入り、日本海に沈む夕日の絶景を眺望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>越後村上鮭三昧＆村上牛ステーキ会席：</strong>香ばしい塩引鮭焼き、村上牛陶板焼き、地魚のお造りを地酒「〆張鶴」とともに味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">20:30</span>
                  <span><strong>夜の海辺テラスで漁火鑑賞：</strong>暗闇に包まれた日本海の沖合に輝く漁火の灯りを眺め、波音を聞きながら静かに過ごす。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-orange-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-orange-600" />
                【2日目】イヨボヤ会館で鮭の生態観察と源泉広場の足湯
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">07:30</span>
                  <span><strong>朝の波打ち際散歩と朝食：</strong>澄んだ初冬の海風を感じながら砂浜を歩き、炊きたて岩船コシヒカリの朝食を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">09:30</span>
                  <span><strong>瀬波温泉源泉広場で温泉卵作り：</strong>高温の源泉で温泉卵を作り、足湯に浸かりながら出来立ての熱々を美味しくいただく。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">10:45</span>
                  <span><strong>三面川の「イヨボヤ会館」見学：</strong>地下観察室から三面川を泳ぐ生きた鮭の群れを観察し、村上の鮭文化の歴史に触れる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs shrink-0 mt-0.5">12:30</span>
                  <span><strong>酒蔵巡り＆村上駅へ：</strong>「大洋盛」や「〆張鶴」の販売店で利き酒とお土産を購入し、特急いなほで新潟方面へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Tips & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Travel Advice & Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の瀬波温泉旅行を満喫するための4大秘訣
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-orange-50/40 rounded-2xl p-5 border border-orange-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Sunset className="w-5 h-5 text-orange-600" />
                日没の30分前には温泉露天風呂へチェックイン
              </h3>
              <p className="leading-relaxed">
                11月・12月の新潟県村上の日の入り時刻は16時20分〜16時40分頃と早めです。茜色の夕日が水平線に沈み、空の色彩が最も美しくグラデーションを描くマジックアワーを逃さないよう、16時前には露天風呂に浸かれるスケジュールを組みましょう。
              </p>
            </div>

            <div className="bg-orange-50/40 rounded-2xl p-5 border border-orange-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Fish className="w-5 h-5 text-orange-600" />
                本場の塩引鮭は地方発送・お歳暮に大人気
              </h3>
              <p className="leading-relaxed">
                11月から12月にかけて仕込まれる塩引鮭は、お歳暮や冬の贈答品として全国から注文が殺到します。町屋通りの老舗店では一本丸ごとや切り身の真空パックを全国発送できるため、旅の記念や大切な方への冬のギフトに最適です。
              </p>
            </div>

            <div className="bg-orange-50/40 rounded-2xl p-5 border border-orange-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-orange-600" />
                日本海の強い浜風対策には防風アウターが必須
              </h3>
              <p className="leading-relaxed">
                瀬波海岸沿いは日本海からの冷たい北西風が直接吹き付けます。気温以上に体感温度が低く感じられるため、ウィンドブレーカーや防風仕様のダウンジャケット、フード付きコート、マフラーを着用して散策を楽しみましょう。
              </p>
            </div>

            <div className="bg-orange-50/40 rounded-2xl p-5 border border-orange-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-orange-600" />
                酒蔵直営店での限定生酒・新酒の利き酒
              </h3>
              <p className="leading-relaxed">
                11月・12月は新潟の酒蔵で新酒の仕込みと初しぼりが始まる時期です。村上市内の酒販店や蔵元では、一般には流通しない蔵出し生原酒や限定にごり酒が手に入ります。冬の鮭料理や村上牛と合わせることで、至高の晩酌が完成します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                瀬波温泉・越後村上の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-orange-800 font-extrabold shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links */}
        <section className="bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！新潟・北陸の冬海鮮＆名湯特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              新潟の冬情緒あふれる名湯や、北陸・富山の寒ブリ・のどぐろ特集もぜひあわせてチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">弥彦・岩室名物黒湯</span>
              <h3 className="font-bold text-white text-sm">弥彦＆岩室温泉・彌彦神社初冬参詣と寒ブリ・のどぐろ会席の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">開湯300年名物黒湯と越後一宮参拝、日本海の寒ブリ・のどぐろ。</p>
            </Link>

            <Link 
              href="/winter-niigata-tsukioka-onsen-emerald-bihada-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-green-500/40 text-green-200 font-bold text-[10px]">月岡・エメラルド美肌湯</span>
              <h3 className="font-bold text-white text-sm">月岡温泉・エメラルドグリーンの硫黄泉と越後美食の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">国内随一の硫黄含有量を誇る美肌湯と新潟銘酒・コシヒカリ。</p>
            </Link>

            <Link 
              href="/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-sky-500/40 text-sky-200 font-bold text-[10px]">氷見・本場寒ブリ</span>
              <h3 className="font-bold text-white text-sm">氷見温泉郷・富山湾寒ブリ宣言と立山連峰雪景色・氷見牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">富山湾越しに冠雪の立山連峰を望む絶景露天と本場氷見寒ブリ。</p>
            </Link>

            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">越後湯沢・雪国情緒</span>
              <h3 className="font-bold text-white text-sm">越後湯沢温泉・川端康成雪国の世界と日本酒・魚沼コシヒカリの宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">新幹線直結の白銀の温泉街で楽しむ越後地酒利き酒と名湯巡り。</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
