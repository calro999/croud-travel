import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain, Droplets
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月山形・かみのやま温泉の初冬風情と開湯五百六十年美肌泉】干し柿暖簾・特選山形牛すき焼き＆蔵王雪見露天の宿5選",
  description: "11月から12月にかけて山形県上山市の奥座敷「かみのやま温泉」は、初冠雪を戴く蔵王連峰の雄大な稜線を背景に、古い武家屋敷や民家の軒先に鮮やかなオレンジ色の干し柿（つるし柿・紅柿）の暖簾が幾重にも吊るされる日本の原風景に包まれます。室町時代長禄2年（1558年）に月秀上人が傷を癒やす鶴を見つけて開湯したと伝わる「鶴の湯」は、ナトリウム・カルシウム-塩化物・硫酸塩泉で日本三大美肌の湯として名高い名泉。プロが選ぶ名旅館「日本の宿 古窯」や隠れ家旅館「名月荘」をはじめ、とろける脂が絶品の山形牛や米沢牛のすき焼き・ステーキ、山形名物芋煮を堪能する極上宿5選を徹底解説。",
  keywords: 'かみのやま温泉 宿泊, かみのやま温泉 11月 12月, 名月荘 かみのやま, 日本の宿 古窯, 葉山舘, 月岡ホテル, 月の池, 山形牛 すき焼き 宿, 紅柿 干し柿 山形, 蔵王 雪見露天風呂',
  alternates: {
    canonical: 'https://croud-travel.com/winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay'
  },
  openGraph: {
    title: "【11・12月山形・かみのやま温泉の初冬風情と開湯五百六十年美肌泉】干し柿暖簾・特選山形牛すき焼き＆蔵王雪見露天の宿5選",
    description: "11月から12月にかけて山形県上山市の奥座敷「かみのやま温泉」は、初冠雪を戴く蔵王連峰の雄大な稜線を背景に、古い武家屋敷や民家の軒先に鮮やかなオレンジ色の干し柿（つるし柿・紅柿）の暖簾が幾重にも吊るされる日本の原風景に包まれます。室町時代長禄2年（1558年）に月秀上人が傷を癒やす鶴を見つけて開湯したと伝わる「鶴の湯」は、ナトリウム・カルシウム-塩化物・硫酸塩泉で日本三大美肌の湯として名高い名泉。プロが選ぶ名旅館「日本の宿 古窯」や隠れ家旅館「名月荘」をはじめ、とろける脂が絶品の山形牛や米沢牛のすき焼き・ステーキ、山形名物芋煮を堪能する極上宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬のかみのやま温泉と蔵王連峰の雪景色'
      }
    ]
  }
};

const faqList = [
  {
    "q": "かみのやま温泉の11月・12月の気候や気温、積雪状況はどうですか？",
    "a": "山形盆地の南端に位置するかみのやま温泉は、盆地特有の内陸性気候のため11月に入ると寒暖差が非常に大きくなります。11月上旬から中旬の平均最高気温は12〜16℃ですが、朝晩は3〜6℃まで冷え込みます。11月下旬になると西風に乗って蔵王山頂から初雪の便りが届き、12月に入ると最高気温が4〜7℃、朝晩は氷点下（-1〜-4℃）まで下がります。12月中旬以降は平野部でも本格的な雪景色となり、例年10〜30cm前後の積雪が記録されます。お出かけの際は、厚手のダウンコート、機能性保温インナー、マフラー、手袋に加え、路面の凍結（ブラックアイスバーン）に対応できる防滑・防水スノーブーツをご用意ください。"
  },
  {
    "q": "かみのやま温泉の「鶴の湯」の由来と美肌泉質の効能は？",
    "a": "かみのやま温泉の開湯は室町時代の長禄2年（1558年）。諸国を巡錫していた肥前の僧・月秀上人が、湿地帯の湧き湯で一羽の傷ついた丹頂鶴が脛（すね）の傷を癒やし、数日後に元気に飛び去る姿を目撃したのが始まりと伝えられ、別名「鶴の湯」と呼ばれています。泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（弱アルカリ性低張性高温泉）」。塩化物泉の成分が皮膚に塩のベールを作って体温の発散を防ぎ、硫酸塩泉が角質を柔らかくして肌の再生を促します。さらにpH8前後の弱アルカリ性が皮脂汚れを優しく落とすため、「三大美肌の湯」として入浴後のしっとりスベスベ感が長く持続します。"
  },
  {
    "q": "上山名物の「紅柿のつるし柿（干し柿暖簾）」はいつ頃見られますか？",
    "a": "上山市の特産である「紅柿（べにかき）」のつるし柿は、毎年11月上旬から収穫が始まり、11月中旬から12月中旬にかけてが最も美しい見頃のピークを迎えます。蔵王連峰の山裾に位置する三吉（さんぎょう）地区をはじめとする山里の民家や蔵の軒下に、皮をむいた鮮やかな朱色の柿が幾千本も暖簾のように吊るされます。初冬の蔵王から吹き下ろす冷たく乾燥した風「蔵王颪（おろし）」によって水分が抜け、自然の糖分が凝縮して濃厚な羊羹のような甘みへと熟成します。白銀の雪山と鮮やかな柿すだれのコントラストは、山形の初冬を象徴する絶景です。"
  },
  {
    "q": "東京方面からのアクセス方法と冬道運転の注意点は？",
    "a": "新幹線でのアクセスが非常に快適です。JR東京駅から「山形新幹線つばさ」に乗車すれば、乗り換えなし約2時間30分で「かみのやま温泉駅」に直着します。駅から温泉街の各旅館へは車で約5〜10分で、多くの宿が無料送迎サービスを行っています。自家用車の場合は東北中央自動車道・山形上山ICより約10〜15分ですが、11月下旬以降は峠道や高速道路、一般道で路面凍結や積雪が発生します。11月中旬以降にお越しの際は、必ず冬用スタッドレスタイヤを装着し、チェーンを携行して急ブレーキ・急ハンドルを避けた安全運転を心がけてください。"
  },
  {
    "q": "かみのやま温泉で味わえる「山形牛」と「米沢牛」、名物芋煮の特徴は？",
    "a": "山形県南部は日本を代表する最高峰の黒毛和牛の産地です。「山形牛」は夏冬・昼夜の寒暖差が大きい風土で長期肥育され、きめ細やかなサシと芳醇な赤身のバランスが秀逸です。隣接する置賜地方の「米沢牛」とともに、初冬のすき焼きや陶板ステーキでとろけるような甘みを堪能できます。また、山形を代表するソウルフード「芋煮」は、内陸部（上山・山形市）では厳選牛肉と里芋、こんにゃく、ネギをベースに、隠し味の地酒と醤油で甘辛く煮込むのが伝統。肌寒い初冬の温泉街で味わう熱々の芋煮鍋は、身体の芯から温まる至福の郷土料理です。"
  }
];

export default function KaminoyamaOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay"
        },
        "headline": "【11・12月山形・かみのやま温泉の初冬風情と開湯五百六十年美肌泉】干し柿暖簾・特選山形牛すき焼き＆蔵王雪見露天の宿5選",
        "description": "11月から12月にかけて山形県上山市の奥座敷「かみのやま温泉」は、初冠雪を戴く蔵王連峰の雄大な稜線を背景に、古い武家屋敷や民家の軒先に鮮やかなオレンジ色の干し柿（つるし柿・紅柿）の暖簾が幾重にも吊るされる日本の原風景に包まれます。室町時代長禄2年（1558年）に月秀上人が傷を癒やす鶴を見つけて開湯したと伝わる「鶴の湯」は、ナトリウム・カルシウム-塩化物・硫酸塩泉で日本三大美肌の湯として名高い名泉。プロが選ぶ名旅館「日本の宿 古窯」や隠れ家旅館「名月荘」をはじめ、とろける脂が絶品の山形牛や米沢牛のすき焼き・ステーキ、山形名物芋煮を堪能する極上宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T07:00:00+09:00",
        "dateModified": "2026-09-28T07:00:00+09:00",
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
          "name": "Croud Travel 東北名湯・美肌紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay#breadcrumb",
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
            "name": "山形・かみのやま温泉 初冬の干し柿暖簾と美肌泉・山形牛の宿",
            "item": "https://croud-travel.com/winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "かみのやま温泉の11月・12月の気候や気温、積雪状況はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山形盆地の南端に位置するかみのやま温泉は、盆地特有の内陸性気候のため11月に入ると寒暖差が非常に大きくなります。11月上旬から中旬の平均最高気温は12〜16℃ですが、朝晩は3〜6℃まで冷え込みます。11月下旬になると西風に乗って蔵王山頂から初雪の便りが届き、12月に入ると最高気温が4〜7℃、朝晩は氷点下（-1〜-4℃）まで下がります。12月中旬以降は平野部でも本格的な雪景色となり、例年10〜30cm前後の積雪が記録されます。お出かけの際は、厚手のダウンコート、機能性保温インナー、マフラー、手袋に加え、路面の凍結（ブラックアイスバーン）に対応できる防滑・防水スノーブーツをご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "かみのやま温泉の「鶴の湯」の由来と美肌泉質の効能は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "かみのやま温泉の開湯は室町時代の長禄2年（1558年）。諸国を巡錫していた肥前の僧・月秀上人が、湿地帯の湧き湯で一羽の傷ついた丹頂鶴が脛（すね）の傷を癒やし、数日後に元気に飛び去る姿を目撃したのが始まりと伝えられ、別名「鶴の湯」と呼ばれています。泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（弱アルカリ性低張性高温泉）」。塩化物泉の成分が皮膚に塩のベールを作って体温の発散を防ぎ、硫酸塩泉が角質を柔らかくして肌の再生を促します。さらにpH8前後の弱アルカリ性が皮脂汚れを優しく落とすため、「三大美肌の湯」として入浴後のしっとりスベスベ感が長く持続します。"
            }
          },
          {
            "@type": "Question",
            "name": "上山名物の「紅柿のつるし柿（干し柿暖簾）」はいつ頃見られますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "上山市の特産である「紅柿（べにかき）」のつるし柿は、毎年11月上旬から収穫が始まり、11月中旬から12月中旬にかけてが最も美しい見頃のピークを迎えます。蔵王連峰の山裾に位置する三吉（さんぎょう）地区をはじめとする山里の民家や蔵の軒下に、皮をむいた鮮やかな朱色の柿が幾千本も暖簾のように吊るされます。初冬の蔵王から吹き下ろす冷たく乾燥した風「蔵王颪（おろし）」によって水分が抜け、自然の糖分が凝縮して濃厚な羊羹のような甘みへと熟成します。白銀の雪山と鮮やかな柿すだれのコントラストは、山形の初冬を象徴する絶景です。"
            }
          },
          {
            "@type": "Question",
            "name": "東京方面からのアクセス方法と冬道運転の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "新幹線でのアクセスが非常に快適です。JR東京駅から「山形新幹線つばさ」に乗車すれば、乗り換えなし約2時間30分で「かみのやま温泉駅」に直着します。駅から温泉街の各旅館へは車で約5〜10分で、多くの宿が無料送迎サービスを行っています。自家用車の場合は東北中央自動車道・山形上山ICより約10〜15分ですが、11月下旬以降は峠道や高速道路、一般道で路面凍結や積雪が発生します。11月中旬以降にお越しの際は、必ず冬用スタッドレスタイヤを装着し、チェーンを携行して急ブレーキ・急ハンドルを避けた安全運転を心がけてください。"
            }
          },
          {
            "@type": "Question",
            "name": "かみのやま温泉で味わえる「山形牛」と「米沢牛」、名物芋煮の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山形県南部は日本を代表する最高峰の黒毛和牛の産地です。「山形牛」は夏冬・昼夜の寒暖差が大きい風土で長期肥育され、きめ細やかなサシと芳醇な赤身のバランスが秀逸です。隣接する置賜地方の「米沢牛」とともに、初冬のすき焼きや陶板ステーキでとろけるような甘みを堪能できます。また、山形を代表するソウルフード「芋煮」は、内陸部（上山・山形市）では厳選牛肉と里芋、こんにゃく、ネギをベースに、隠し味の地酒と醤油で甘辛く煮込むのが伝統。肌寒い初冬の温泉街で味わう熱々の芋煮鍋は、身体の芯から温まる至福の郷土料理です。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "かみのやま温泉　名月荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67228/67228.jpg",
              rating: 5.00,
              reviews: 94,
              price: "¥26,400〜",
              access: "JRかみのやま温泉駅よりタクシーで5分（駅～名月荘タクシー代無料）／東北中央自動車道山形上山ICより15分",
              special: "四千坪の森に佇む大人の隠れ宿◆全20室テラス付・専用ダイニングで朝夕お部屋食｜貸切風呂2種無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67228%2F67228.html",
              story: "蔵王連峰の山裾、葉山の高台約4,000坪の広大な敷地にわずか20室の離れ風客室が点在する東北屈指の名旅館「かみのやま温泉 名月荘（めいげつそう）」。楽天トラベルでも最高峰評価5.0を維持し続ける大人のための隠れ宿です。館内は回廊で結ばれ、中庭の木々が晩秋の紅葉から初雪の銀世界へと衣替えする幽玄の風情を眺められます。蔵王の巨石をくり抜いた野趣あふれる貸切露天風呂や酒樽を模したユニークな露天風呂で美肌の源泉を満喫。夕食には山形牛や日本海の寒魚、山形の採れたて冬野菜を贅沢に使った本格懐石膳が供され、プライベートな寛ぎと極上の美食が日常を忘れさせてくれます。",
              roomTip: "テラスや月見台を備えた離れ客室。大きなガラス窓から初冬の蔵王連峰の山並みを望み、部屋にいながらにして静寂の山景に浸る至福のひととき。",
              gourmetTip: "「名月荘特選・冬の本格創作懐石」。口の中でとろける極上山形牛の炭火焼きステーキまたはすき焼き、山形県産つや姫の釜炊きご飯、冬の滋味あふれる先付の数々。",
              highlights: [
                "約4000坪の敷地にわずか20室の贅沢離れ＆楽天評価満点5.0を獲得する最高峰の隠れ宿",
                "蔵王の巨石露天風呂や酒樽貸切風呂で満喫する源泉掛け流し＆本格創作懐石の極み",
                "山形新幹線かみのやま温泉駅からの送迎＆静寂の中で心身を解きほぐす至高の休日"
              ]
            },
            {
              id: 2,
              name: "かみのやま温泉　日本の宿　古窯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27923/27923.jpg",
              rating: 4.65,
              reviews: 3218,
              price: "¥16,060〜",
              access: "ＪＲかみのやま温泉駅より車で６分(定期便送迎有）/山形自動車道 山形蔵王ＩＣより国道１３号線経由約２０分",
              special: "山形県上山の緑豊かな葉山高台に建つ。山形かみのやまの風土風味を伝える料理も自慢の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27923%2F27923.html",
              story: "「プロが選ぶ日本のホテル・旅館100選」の料理部門で長年全国トップクラスに選ばれ続ける、山形を代表する名門ホテル「かみのやま温泉 日本の宿 古窯（こよう）」。敷地内から奈良時代の窯跡が発掘された歴史に由来し、館内には国内外の著名人が筆をとった「楽焼絵付け皿」が数千枚も飾られる文化薫る宿です。最上階8階の展望大浴場「昇陽の湯」からは、初雪をかぶった蔵王連峰と上山城下町のパノラマを一望。紅花染めの風情漂う露天風呂で温まった後は、山形牛の品評会で最高賞を受賞した厳選牛のステーキやすき焼き、山形名物の醤油仕立て芋煮を堪能できます。",
              roomTip: "蔵王連峰パノラマビューの温泉露天風呂付き客室。初冬の冷たく澄んだ空気を肌に感じながら、好きな時に何度でも名湯を独り占めできる贅沢。",
              gourmetTip: "「古窯名物・山形牛と芋煮の贅沢会席」。きめ細かなサシが美しい山形牛の陶板ステーキと、里芋がとろける山形伝統の牛肉芋煮鍋が主役の極上ディナー。",
              highlights: [
                "プロが選ぶ旅館100選料理部門常連＆8階展望露天風呂から蔵王連峰と上山城下町を一望",
                "上山発祥の紅花染め露天風呂＆山形牛品評会最高賞の極上牛と伝統芋煮鍋の贅沢",
                "有名人が遺した楽焼絵付け皿ギャラリー＆三世代家族からカップルまで満足のおもてなし"
              ]
            },
            {
              id: 3,
              name: "かみのやま温泉　葉山舘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31208/31208.jpg",
              rating: 4.34,
              reviews: 722,
              price: "¥12,650〜",
              access: "ＪＲかみのやま温泉駅より車で５分　無料送迎あり（要予約）　東北中央道かみのやま温泉ＩＣより約１０分",
              special: "蔵王連峰を望む全室温泉内風呂付の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31208%2F31208.html",
              story: "かみのやま温泉の高台・葉山地区に位置し、洗練されたモダンな和の設えと温かなおもてなしでリピーターを惹きつける「かみのやま温泉 葉山舘（はやまかん）」。全客室のうち多くに源泉掛け流しの檜風呂や半露天風呂が備わり、プライベートな湯治ステイを叶えてくれます。館内大浴場「翠の湯」では、四季折々の表情を見せる庭園を眺めながら、肌に吸い付くような美肌の湯を堪能。個室ダイニング「四季亭」でいただく夕食は、山形牛をメインに契約農家から届く冬根菜や日本海の寒ビラメなど、山形の旬を余すところなく味わえます。",
              roomTip: "源泉掛け流し半露天風呂付き和洋室「華葉亭」。シモンズ社製ベッドで心地よい眠りを約束し、初冬の静かな夜に心ゆくまで客室温泉を堪能できます。",
              gourmetTip: "「山形牛食べ比べ会席」。上質な赤身の旨味が凝縮したモモ肉と、霜降りの甘みが際立つサーロインの絶品ステーキを特製山葵と地酒で味わう至高の体験。",
              highlights: [
                "源泉掛け流し半露天風呂付き客室が充実＆プライベート個室ダイニングで味わう山形牛会席",
                "大浴場「翠の湯」の庭園美と美肌温泉＆山形牛モモ肉とサーロインの食べ比べステーキ",
                "シモンズ製ベッドの快適な睡眠＆喧騒から離れた葉山高原の澄んだ空気に癒やされる滞在"
              ]
            },
            {
              id: 4,
              name: "季節のこだわりバイキングと美肌の湯の宿　仙渓園　月岡ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5323/5323.jpg",
              rating: 4.16,
              reviews: 1815,
              price: "¥9,900〜",
              access: "かみのやま温泉駅より徒歩約13分　山形蔵王ＩＣより約25分 リナワールド迄車10分　仙台駅前迄約90分 月岡神社徒歩6分",
              special: "＜正保元年創業歴史とおもてなしの宿＞こだわりのバイキングで山形の四季の味覚を心行くまでご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5323%2F5323.html",
              story: "創業寛永年間（1624〜1644年）、上山藩主の城下町として栄えた時代から380年余の歴史を刻み続ける由緒正しき老舗宿「仙渓園 月岡ホテル（せんけいえん つきおかほてる）」。上山城の外堀跡に位置し、美しい日本庭園を囲むように建つ館内には、城下町の伝統と風格が漂います。自慢の大浴場と庭園露天風呂には開湯560年の霊泉がこんこんと注がれ、庭の木々に積もる初雪を眺めながら心解き放たれる湯浴みが楽しめます。山形牛や手打ち山形そば、季節の揚げたて天ぷらが並ぶこだわりバイキングや会席膳が、幅広い世代から愛されています。",
              roomTip: "日本庭園を望む数寄屋風の落ち着いた和室。窓外に広がる雪吊りの松と庭石のコントラストを眺め、城下町ならではの静かな歴史情緒に浸れます。",
              gourmetTip: "「季節の郷土バイキング＆山形牛料理」。職人が目の前で焼き上げる山形牛ステーキ、アツアツの山形名物芋煮、手打ちそばなど山形の郷土の味が目白押し。",
              highlights: [
                "寛永年間創業380年余の歴史を誇る老舗宿＆上山城外堀跡に広がる雪景色庭園露天風呂",
                "手打ち山形そばと揚げたて天ぷら＆職人が鉄板で焼き上げる山形牛料理と郷土バイキング",
                "武家屋敷通りや上山城散策への抜群のロケーション＆伝統の温もり溢れるホスピタリティ"
              ]
            },
            {
              id: 5,
              name: "かみのやま温泉　花明りの宿　月の池",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67481/67481.jpg",
              rating: 4.68,
              reviews: 298,
              price: "¥16,500〜",
              access: "かみのやま温泉駅より徒歩１５分／山形蔵王IC～国道１３号線より国道４５８号線経由で３０分",
              special: "ダイニングリニューアル！　全てのお客様【ご夕食とご朝食・半個室】にてご用意いたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67481%2F67481.html",
              story: "館内に一歩足を踏み入れると、季節の野花が可憐に活けられ、柔らかな行灯の明かりが心を優しく包み込む情緒あふれる宿「かみのやま温泉 花明りの宿 月の池（つきのいけ）」。女性の旅人やご夫婦の記念日旅に絶大な支持を受ける和モダン旅館です。樹齢百年の檜で設えられた大浴場や、庭園の池に浮かぶように配置された露天風呂からは、初冬の夜空に浮かぶ澄んだ月と雪化粧した庭園美を愛でることができます。夕食は山形牛を中心とした彩り豊かな創作和食会席で、器使いや盛り付けの美しさにもため息がこぼれます。",
              roomTip: "ベッドを備えたモダン和洋室。畳の温もりと洗練されたインテリアが調和し、花明かりのほのかな光の中で静かに語らう大人の夜に最適。",
              gourmetTip: "「月替わり創作和食会席」。とろける山形牛のローストや陶板焼き、山形県産つや姫、季節のフルーツを取り入れた華やかで繊細なディナー。",
              highlights: [
                "可憐な山野草と行灯の灯りが彩る和モダン宿＆池に浮かぶ露天風呂と彩り豊かな創作会席",
                "檜香る大浴場と初冬の澄んだ月を愛でる風流な湯浴み＆女性の心を掴む繊細な美食ディナー",
                "全館に漂うお香と花々の芳香＆記念日や大人の女子旅を特別な思い出にする上質空間"
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
          alt="冬のかみのやま温泉と蔵王連峰の山並み"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上名湯特集｜山形・かみのやま温泉
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月山形・かみのやま温泉】<br className="hidden sm:inline" />
            初冬の干し柿暖簾と開湯五百六十年美肌泉・山形牛すき焼きの宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            蔵王連峰の初雪冠雪を望み、軒先をオレンジ色に染める伝統の紅柿すだれ。鶴が傷を癒やした室町開湯の美肌名湯と、とろける極上山形牛を味わう大人の初冬湯治。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Kaminoyama Winter Scenery & Tsuru no Yu</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                蔵王の初冠雪とオレンジ色に輝く紅柿暖簾｜城下町かみのやまの初冬詩
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              山形新幹線が停車する奥羽本線の要衝でありながら、蔵王連峰の雄大な裾野に抱かれ、江戸時代には上山藩三万石の城下町および羽州街道の宿場町として栄華を極めた「かみのやま温泉（上山温泉）」。11月から12月にかけてのこの街は、東北の他のどの温泉地とも異なる、心温まる日本の原風景に彩られます。
            </p>
            <p>
              その象徴が、上山特産の「紅柿（べにかき）」を使ったつるし柿です。11月中旬、晩秋の冷気とともに山里の民家や白壁の蔵の軒先に、鮮やかな朱色をした幾千本もの干し柿がまるで美しい暖簾やすだれのように吊るされます。西にそびえる蔵王連峰から吹き下ろす冷涼な寒風「蔵王颪」にさらされることで、渋柿は驚くほどの糖分を蓄え、冬の訪れとともに極上の天然スイーツへと仕上がっていきます。冠雪した白銀の山々と、太陽の光を受けて黄金色に輝く柿暖簾の対比は、旅人の旅情をどこまでも深く掻き立てます。
            </p>
            <p>
              温泉の歴史は室町時代の1458年（長禄2年）、肥前の月秀上人が傷ついた丹頂鶴が湧き出る湯に浸かって傷を癒やすのを見て発見したと伝わる「鶴の湯」。弱アルカリ性のまろやかな泉質は古くから美人の湯・温まりの湯として親しまれ、城下町特有の上品な街並みとともに、文人墨客や現代の旅人を魅了し続けています。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-amber-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">紅柿のつるし柿すだれ</div>
              <div className="text-xs text-slate-600">11月中旬〜12月中旬、軒先を埋め尽くす鮮やかなオレンジ色の暖簾絶景。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Droplets className="w-5 h-5 text-amber-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">開湯560年 鶴の湯霊泉</div>
              <div className="text-xs text-slate-600">塩化物泉と硫酸塩泉が融合した弱アルカリ性美肌泉。湯冷め知らずの温もり。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-amber-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">山形牛すき焼き＆牛肉芋煮</div>
              <div className="text-xs text-slate-600">寒暖差が育む極上山形牛のとろけるサシと、醤油ベースの伝統芋煮鍋。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Double Beautifying Healing Mechanism</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                「塩の保湿膜×硫酸塩の弾力」かみのやま温泉の泉質と美肌効能
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              かみのやま温泉の泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（低張性弱アルカリ性高温泉）」。無色透明でほのかな温泉香が漂い、肌あたりは羽二重のように滑らかです。
            </p>
            <p>
              この名湯が「三大美肌の湯」と称される最大の理由は、弱アルカリ性のクレンジング作用に加えて、塩化物泉と硫酸塩泉という2つの優れた泉質特性を併せ持つ「ダブル美肌効果」にあります。まず硫酸塩泉の成分が皮膚の古い角質を柔らかくほぐし、肌に潤いとハリを与えてキメを整えます。次に塩化物泉の主成分である塩分が肌の表面に薄い被膜を形成し、水分と温もりの蒸発をシャットアウト。そのため入浴後はまるで天然の化粧水と乳液を丹念に塗り重ねたかのような、みずみずしい保湿感が翌朝まで続きます。
            </p>
            <p>
              また、冷え性や末梢循環障害の改善にも優れており、厳しい寒さが訪れる東北の初冬においても、体の芯まで熱を行き渡らせて湯冷めを完全に防ぎます。リウマチ、神経痛、筋肉疲労の緩和にも卓効があり、歴史ある湯治場としての実力を今なお如実に物語っています。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Yamagata Winter Gourmet</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                山形の初冬を味わい尽くす｜特選山形牛・伝統牛肉芋煮・手打ち山形そば
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              山形県は四季の寒暖差が日本一激しい盆地気候を有し、それが農作物やブランド牛に類まれな濃厚な旨味をもたらします。その代表格が、きめ細やかな霜降りと赤身のコクを誇る「山形牛（黒毛和牛）」です。人肌の温度でとろけ出す上質な脂身はしつこさが一切なく、甘辛い特製割り下にくぐらせる冬のすき焼きや、熱々の陶板ステーキで口に運べば、肉汁の甘みと芳醇な香りが口いっぱいに広がります。
            </p>
            <p>
              さらに、山形県民のソウルフードである「芋煮」。庄内地方の味噌・豚肉に対し、ここ内陸のかみのやま地方では「醤油ベースの牛肉芋煮」が王道です。ホクホクとした大粒の里芋に山形牛の出汁がじっくりと染み渡り、隠し味の地酒とネギ、こんにゃくが調和した熱々の鍋は、冬の寒さを一瞬で忘れさせてくれる滋味の極み。また、寒さで甘みが増した山形特産の冬根菜、豊かな香りの手打ち山形そば、蔵王山麓のワイナリーが醸す上山産ワインなど、宿の食膳には山形の豊かな大地が育んだ贅沢な味覚が贅沢に並びます。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Historic Town Walk & Winter Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬のかみのやま散策モデルコース｜上山城下町・武家屋敷と紅柿街道
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              かみのやま温泉の初冬散策は、山形新幹線「かみのやま温泉駅」から始まります。駅前には源泉を注ぐ足湯が整備されており、旅の始まりに足先を温めることができます。温泉街を北へ進むと、羽州の名城と謳われた「上山城（月岡城）」が堂々たる姿を現します。城内天守閣からは、初雪を冠した蔵王連峰の雄大な峰々と、眼下に広がる上山市街地の大パノラマを一望できます。
            </p>
            <p>
              続いて城の北側に位置する「武家屋敷通り」へ。茅葺き屋根の重厚な長屋門や土塀が連なる通りには、江戸時代の武家文化が色濃く残されています。武家屋敷の門前や板塀の軒先にも鮮やかな干し柿が吊るされ、初冬の静けさと歴史情緒が溶け合う散策路は絶好のフォトスポットです。
            </p>
            <p>
              午後は、三吉地区などの柿の産地へ足を伸ばして壮大な「柿すだれ街道」を見学。その後、市内に点在するワイナリー（タケダワイナリーやウッディファームなど）で山形産ワインをテイスティングし、夕暮れに合わせて温泉宿へ。蔵王の雪景色を望む露天風呂と山形牛の会席料理が待つ、贅沢な冬の休日が完成します。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Selected Luxury & Historic Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              蔵王の絶景と名湯に抱かれる｜かみのやま温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高評価を獲得し、自家源泉や山形牛会席に強いこだわりを持つ本物の名宿だけを厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-amber-400 font-extrabold">#{h.id}</span>
                    <span>かみのやまの名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-amber-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-rose-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-rose-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Travel Tips & Access</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月のかみのやま冬旅｜寒暖差・服装と山形新幹線の利便性
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-800" />
                内陸盆地の初冬の寒さと防寒装備
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月のかみのやま温泉は日中穏やかな日差しがあっても、夕方以降は急激に冷え込み、12月に入ると氷点下まで下がります。散策には風を通さないダウンコートや厚手のアウター、手袋、マフラーが必須です。12月中旬以降は雪道となるため、靴底に深い溝がある防滑・防水スノーブーツでお越しください。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-800" />
                山形新幹線直着の便利さと冬用タイヤ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                東京駅から「山形新幹線つばさ」で約2時間30分、乗り換えなしで「かみのやま温泉駅」に到着できるため、冬の雪道運転が不安な方でも安心して訪れられます。車でお越しの場合は東北中央道・山形上山ICから約10分ですが、11月中旬以降は路面凍結のおそれがあるため必ずスタッドレスタイヤを装着してください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                山形かみのやま温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Winter Features & Tohoku Onsen</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東北・山形の冬名湯＆極上和牛特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、山形牛やすき焼き、歴史ある名湯をめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山形・蔵王温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">樹氷と日本屈指の強酸性硫黄泉・山形牛すき焼きの雪見宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-akayu-onsen-yonezawa-beef-wine-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山形・赤湯温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">開湯九百年赤湯温泉と本場米沢牛・山形ワインを味わう名宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山形・銀山温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">大正浪漫のガス灯と雪景色・尾花沢牛を味わう幻想の宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山形・天童温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">将棋の街と冬のラフランス・山形牛会席を堪能する名宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-onogawa-yonezawa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山形・小野川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">小野小町ゆかりの美肌硫黄泉と本場米沢牛すき焼きの隠れ宿</h3>
            </Link>
            <Link 
              href="/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">宮城・秋保温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">仙台の奥座敷と仙台牛・名物せり鍋を満喫する老舗温泉宿</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
