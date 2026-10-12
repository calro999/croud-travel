import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Building2, Fish
} from 'lucide-react';

export const metadata: Metadata = {
  title: '山口・萩温泉郷で過ごす冬の旅（11・12月）！長州黒毛和牛！名宿5選',
  description: '11月から12月にかけて世界遺産の城下町・山口県萩市は、白壁の武家屋敷通りに初冬の柔らかな日差しが差し込み。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '萩温泉 宿泊, 萩温泉郷 11月 12月, 北門屋敷 萩, 萩一輪, 萩小町, 常茂恵 萩, 萩本陣, 天然とらふぐ 萩 宿, 萩 甘鯛 温泉, 萩城下町 世界遺産 宿泊',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay/"
  },
  openGraph: {
    title: '山口・萩温泉郷で過ごす冬の旅（11・12月）！長州黒毛和牛！名宿5選',
    description: '11月から12月にかけて世界遺産の城下町・山口県萩市は、白壁の武家屋敷通りに初冬の柔らかな日差しが差し込み。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の萩城下町と菊ヶ浜の夕景'
      }
    ]
  }
};

const faqList = [
  {
    "q": "萩温泉郷の11月・12月の気候や気温、日本海側の風はどうですか？",
    "a": "本州最西端の日本海側に位置する山口県萩市は、11月に入ると秋晴れの穏やかな日から、日本海からの季節風が吹き始める初冬の気候へと移り変わります。11月上旬から中旬の最高気温は16〜19℃、最低気温は8〜11℃前後で、日中は白壁の城下町散策に最も適した過ごしやすい季節です。11月下旬から12月に入ると最高気温が11〜14℃、朝晩は3〜6℃まで下がり、日本海からの冷たい北西の風が強まる日が増えます。降雪や積雪は平野部では稀ですが、菊ヶ浜や笠山などの海岸沿いでは潮風で体感温度がぐっと下がります。防風性のあるコートやダウンジャケット、ストール、歩きやすいスニーカーをご準備ください。"
  },
  {
    "q": "下関と並ぶ本場山口の「萩のとらふぐ（ふく）」の旬と特徴は？",
    "a": "山口県では古くから福を呼ぶ魚として「ふく」と親しまれています。日本海・響灘や北長門海岸に面した萩は、下関の南風泊市場へと出荷される天然とらふぐの有数の水揚げ地であり、地元萩の宿でも産地ならではの鮮度と価格で最高峰のふぐ料理が楽しめます。ふぐの旬は「秋の彼岸から春の彼岸まで」と言われますが、特に水温が下がる11月から12月は身がぎゅっと締まり、脂と旨味が最高潮に達します。熟練の板前が引く透明な「てっさ（薄造り）」のコリコリとした歯ごたえ、ゼラチン質たっぷりの「てっちり（ふぐちり鍋）」、香ばしく炙ったヒレを熱燗に浸す「ヒレ酒」は冬の山口旅の最高の贅沢です。"
  },
  {
    "q": "萩特産の高級魚「萩の甘鯛（金太郎・アマダイ）」とは？",
    "a": "萩沖の日本海は対馬海流と深海冷水が交わる豊かな漁場であり、ここで延縄漁などで丁寧に釣り上げられる「アマダイ（赤アマダイ）」は、京都や東京の高級料亭で最高値で取引される全国屈指のブランド魚です。萩では昔から親しみを込めて「金太郎」とも呼ばれます。特に冬の甘鯛は上品な脂が乗り、皮目に熱い油をかけて鱗を逆立ててサクサクに揚げる「松笠揚げ」や、昆布締め、塩焼きで絶品の美味しさを誇ります。淡白でありながら奥深い甘みと旨味は、ふぐと並ぶ冬の萩の代表的な美食です。"
  },
  {
    "q": "萩城下町（世界遺産）の散策ルートと所要時間は？",
    "a": "平成27年（2015年）に「明治日本の産業革命遺産」として世界遺産に登録された萩の城下町は、江戸時代の町割りが今なおそのまま残る生きた博物館です。王道の散策ルートは、木戸孝允旧宅や青木周弼旧宅が並ぶ「江戸屋横町」、白壁となまこ壁が美しい「菊屋横町」からスタート。外敵の侵入を防ぐために道を直角に曲げた「鍵曲（かいまがり）」を歩き、吉田松陰が教えを説いた「松下村塾」と「松陰神社」を巡るルートが定番です。所要時間は徒歩で約2〜3時間、レンタサイクルを利用すれば約1時間30分〜2時間で主要スポットを効率よく巡ることができます。"
  },
  {
    "q": "新山口駅や空港からのアクセス方法と冬道運転の状況は？",
    "a": "山陽新幹線の「新山口駅」から直行の特急バス「はぎ号」（防長交通・中国JRバス）が運行しており、約60分〜70分で萩バスセンター・東萩駅に到着します。飛行機をご利用の場合は「山口宇部空港」から萩市内直行の乗合タクシー（事前予約制）で約70分です。自家用車やレンタカーの場合は中国自動車道・美祢東JCTから無料の小郡萩道路を経由して絵堂ICより約20分。全線高規格道路で整備されており、平野部が中心のため11月・12月でも大雪で通行止めになることは極めて稀ですが、冷え込んだ日の早朝や夜間は日陰の凍結に注意して慎重に運転してください。"
  }
];

export default function HagiOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay"
        },
        "headline": "【11・12月山口・萩温泉郷の維新城下町と初冬解禁本場天然とらふぐ】萩甘鯛・長州黒毛和牛＆日本海夕景露天の宿5選",
        "description": "11月から12月にかけて世界遺産の城下町・山口県萩市は、白壁の武家屋敷通りに初冬の柔らかな日差しが差し込み、日本海の荒波が育む極上の冬の味覚シーズンへと突入します。下関と並ぶ本場山口の「天然とらふぐ（ふく料理）」が本格解禁を迎え、透き通るような薄造り（てっさ）、熱々のふぐちり鍋（てっちり）、香ばしいヒレ酒が膳を彩ります。さらに萩港特産の高級魚「萩の甘鯛（アマダイ）」の松笠揚げや、きめ細かな肉質の「長州藤光牛・長州黒かしわ」を堪能。開湯20余年ながら塩分を含み体の芯まで温める萩温泉の露天風呂から日本海と菊ヶ浜の夕景を望む厳選名旅館5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T07:00:00+09:00",
        "dateModified": "T07:00:00+09:00",
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
          "name": "Croud Travel 山陰名湯・維新美食紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay#breadcrumb",
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
            "name": "山口・萩温泉郷 維新城下町と本場天然とらふぐ・日本海夕景露天の宿",
            "item": "https://croud-travel.pages.dev/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "萩温泉郷の11月・12月の気候や気温、日本海側の風はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "本州最西端の日本海側に位置する山口県萩市は、11月に入ると秋晴れの穏やかな日から、日本海からの季節風が吹き始める初冬の気候へと移り変わります。11月上旬から中旬の最高気温は16〜19℃、最低気温は8〜11℃前後で、日中は白壁の城下町散策に最も適した過ごしやすい季節です。11月下旬から12月に入ると最高気温が11〜14℃、朝晩は3〜6℃まで下がり、日本海からの冷たい北西の風が強まる日が増えます。降雪や積雪は平野部では稀ですが、菊ヶ浜や笠山などの海岸沿いでは潮風で体感温度がぐっと下がります。防風性のあるコートやダウンジャケット、ストール、歩きやすいスニーカーをご準備ください。"
            }
          },
          {
            "@type": "Question",
            "name": "下関と並ぶ本場山口の「萩のとらふぐ（ふく）」の旬と特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山口県では古くから福を呼ぶ魚として「ふく」と親しまれています。日本海・響灘や北長門海岸に面した萩は、下関の南風泊市場へと出荷される天然とらふぐの有数の水揚げ地であり、地元萩の宿でも産地ならではの鮮度と価格で最高峰のふぐ料理が楽しめます。ふぐの旬は「秋の彼岸から春の彼岸まで」と言われますが、特に水温が下がる11月から12月は身がぎゅっと締まり、脂と旨味が最高潮に達します。熟練の板前が引く透明な「てっさ（薄造り）」のコリコリとした歯ごたえ、ゼラチン質たっぷりの「てっちり（ふぐちり鍋）」、香ばしく炙ったヒレを熱燗に浸す「ヒレ酒」は冬の山口旅の最高の贅沢です。"
            }
          },
          {
            "@type": "Question",
            "name": "萩特産の高級魚「萩の甘鯛（金太郎・アマダイ）」とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "萩沖の日本海は対馬海流と深海冷水が交わる豊かな漁場であり、ここで延縄漁などで丁寧に釣り上げられる「アマダイ（赤アマダイ）」は、京都や東京の高級料亭で最高値で取引される全国屈指のブランド魚です。萩では昔から親しみを込めて「金太郎」とも呼ばれます。特に冬の甘鯛は上品な脂が乗り、皮目に熱い油をかけて鱗を逆立ててサクサクに揚げる「松笠揚げ」や、昆布締め、塩焼きで絶品の美味しさを誇ります。淡白でありながら奥深い甘みと旨味は、ふぐと並ぶ冬の萩の代表的な美食です。"
            }
          },
          {
            "@type": "Question",
            "name": "萩城下町（世界遺産）の散策ルートと所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "平成27年（2015年）に「明治日本の産業革命遺産」として世界遺産に登録された萩の城下町は、江戸時代の町割りが今なおそのまま残る生きた博物館です。王道の散策ルートは、木戸孝允旧宅や青木周弼旧宅が並ぶ「江戸屋横町」、白壁となまこ壁が美しい「菊屋横町」からスタート。外敵の侵入を防ぐために道を直角に曲げた「鍵曲（かいまがり）」を歩き、吉田松陰が教えを説いた「松下村塾」と「松陰神社」を巡るルートが定番です。所要時間は徒歩で約2〜3時間、レンタサイクルを利用すれば約1時間30分〜2時間で主要スポットを効率よく巡ることができます。"
            }
          },
          {
            "@type": "Question",
            "name": "新山口駅や空港からのアクセス方法と冬道運転の状況は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山陽新幹線の「新山口駅」から直行の特急バス「はぎ号」（防長交通・中国JRバス）が運行しており、約60分〜70分で萩バスセンター・東萩駅に到着します。飛行機をご利用の場合は「山口宇部空港」から萩市内直行の乗合タクシー（事前予約制）で約70分です。自家用車やレンタカーの場合は中国自動車道・美祢東JCTから無料の小郡萩道路を経由して絵堂ICより約20分。全線高規格道路で整備されており、平野部が中心のため11月・12月でも大雪で通行止めになることは極めて稀ですが、冷え込んだ日の早朝や夜間は日陰の凍結に注意して慎重に運転してください。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "萩温泉郷　萩城三の丸　北門屋敷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28353/28353.jpg",
              rating: 4.55,
              reviews: 620,
              price: "¥24,310〜",
              access: "JR東萩駅から車で約8分／世界遺産「萩城下町」の立地。城下町、萩城跡までも徒歩圏内／小郡萩道路絵堂ICから車で約25分",
              special: "【世界遺産＜萩城下町＞に佇む宿】和と洋が融合した非日常な空間で特別なひと時を♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28353%2F28353.html",
              story: "萩城跡に隣接し、かつて毛利藩の重臣たちが居を構えた城内・三の丸の屋敷跡に佇む格式高き名旅館「萩温泉郷 萩城三の丸 北門屋敷（ほくもんやしき）。」。武家屋敷の重厚な長屋門をくぐると、丹精込めて手入れされたイングリッシュガーデンと伝統的な和の美学が調和した格調高い空間が広がります。館内大浴場「旅人の湯」には、肌に優しい弱アルカリ性の萩温泉が注がれ、庭園の緑を望みながらの湯浴みは至福のひととき。夕食には11月に旬を迎えた天然とらふぐの刺身やふぐちり鍋、長州黒毛和牛のフィレステーキなど、山口の海山の恵みを贅を尽くして仕立てた本格和洋会席が供されます。",
              roomTip: "イングリッシュガーデンまたは日本庭園を望む数寄屋風和室または露天風呂付き特別室。萩の歴史の息吹を感じながら、静かに流れる贅沢な時間を堪能。",
              gourmetTip: "「冬の特選ふく懐石＆長州牛ディナー」。熟練のふぐ職人が引く美しい菊花盛りのとらふぐ刺し、芳ばしい焼きふぐ、長州黒毛和牛の炭火焼きステーキ。",
              highlights: [
                "毛利藩家老屋敷跡に佇む格調高き名館＆美しい洋風庭園と和の風情が織りなす極上ステイ",
                "本場天然とらふぐ刺しや長州黒毛和牛フィレステーキ＆城内三の丸の静寂に浸る贅沢",
                "世界遺産・萩城跡や指月公園散策への抜群のロケーション＆伝統と洗練のおもてなし"
              ]
            },
            {
              id: 2,
              name: "萩温泉郷　宵待ちの宿　萩一輪",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15156/15156.jpg",
              rating: 4.42,
              reviews: 2206,
              price: "¥13,200〜",
              access: "小郡萩道路絵堂ICより車で約25分／萩循環まぁーるバス西回りで約10分（東萩駅前から乗車→菊ヶ浜入口・萩一輪前で下車）",
              special: "目の前は日本海！足湯×貸切露天風呂×生ビール×客室露天風呂で非日常感を味わえる癒しのひと時を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15156%2F15156.html",
              story: "「日本の夕陽百選」に選ばれた白砂青松の名勝・菊ヶ浜海岸が目の前に広がる絶景のオーシャンフロント旅館「萩温泉郷 宵待ちの宿 萩一輪（はぎいちりん）。」。客室の多くに日本海を望む温泉露天風呂や展望風呂が完備されており、茜色に染まる夕景から星空きらめく夜の波音まで、プライベートな海景湯浴みを満喫できます。冬のハイライトは、本場山口ならではの「とらふぐフルコース」。菊ヶ浜の静かな波音をBGMに、ふぐ刺し、唐揚げ、ふぐちり鍋、そして旨味が凝縮したふぐ雑炊まで、本物のふぐ料理を心ゆくまで味わい尽くせます。",
              roomTip: "菊ヶ浜展望露天風呂付き和洋室。水平線に沈む初冬の夕日を湯船の中から眺める、息をのむほどロマンチックなプライベート空間。",
              gourmetTip: "「天然とらふぐづくし会席」。本場山口の天然とらふぐ刺し、ふっくら香ばしい唐揚げ、身が締まったてっちり鍋、香ばしいひれ酒の贅沢コース。",
              highlights: [
                "菊ヶ浜海岸が目の前・日本の夕陽百選フロントシート＆客室露天風呂で味わう日本海夕景",
                "冬の味覚の王様・天然とらふぐフルコース（刺し・唐揚げ・ちり鍋・雑炊）＆ひれ酒の美味",
                "東萩駅からの無料送迎バス運行＆大切な人と記念日を過ごすオーシャンフロント温泉旅"
              ]
            },
            {
              id: 3,
              name: "萩温泉郷　夕景の宿　海のゆりかご　萩小町",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54096/54096.jpg",
              rating: 4.35,
              reviews: 5247,
              price: "¥11,000〜",
              access: "「JR東萩駅」より車で10分／世界遺産「松下村塾」より車で10分／無料送迎サービスも有り！詳細はお気軽に問合せ下さい。",
              special: "【楽天トラベルアワード　10年連続受賞】～日本海の絶景が楽しめる・癒し＆遊びが盛り沢山の宿～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54096%2F54096.html",
              story: "萩の北東に突き出た笠山半島の波打ち際、寄せては返す日本海の白波を真下に見下ろす絶壁に建つ絶景自慢の宿「萩温泉郷 夕景の宿 海のゆりかご 萩小町（はぎこまち）。」。まるで豪華客船の甲板に立っているかのようなダイナミックな海景色が広がり、展望露天風呂「波の音」では、潮騒を全身で浴びながら海抜ゼロメートル感覚の湯浴みが楽しめます。萩港から毎朝水揚げされる新鮮な魚介を豪快に盛り込んだ海鮮料理が自慢で、冬の甘鯛（萩の金太郎）やとらふぐ、サザエの壺焼きなど、萩の海の豊かさを実感できます。",
              roomTip: "オーシャンフロントの絶景和室。大きな窓一面に広がる日本海の大海原と、夜には水平線に揺れるイカ釣り船の漁火を望む幻想的な夜。",
              gourmetTip: "「萩港直送・冬の海鮮舟盛りとふぐ会席」。高級魚アマダイの松笠揚げ、脂の乗った寒ブリ、新鮮なふぐ刺しを萩焼の器で楽しむ豪快ディナー。",
              highlights: [
                "笠山半島の断崖に建つ海抜ゼロメートル感覚の宿＆潮騒を全身で浴びる大パノラマ展望露天",
                "萩港直送のアマダイ松笠揚げや寒ブリの舟盛り会席＆夜の日本海を照らす漁火のロマン",
                "波打ち際の足湯や多彩な館内設備＆気取らず海の絶景と海の幸を堪能できる海辺の隠れ宿"
              ]
            },
            {
              id: 4,
              name: "萩温泉郷　萩の宿・常茂恵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29841/29841.jpg",
              rating: 4.69,
              reviews: 494,
              price: "¥21,000〜",
              access: "「JR東萩駅」より車で約3分／世界遺産「松下村塾」より車で約7分／「美祢東JCT」経由「絵堂IC」より車で約20分",
              special: "＜大正14年創業＞文化と歴史の薫る「萩」の迎賓館で癒しのひと時をお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29841%2F29841.html",
              story: "大正14年（1925年）創業、萩の迎賓館として皇族や各界の要人をもてなしてきた名門老舗旅館「萩温泉郷 萩の宿・常茂恵（ともえ）」。楽天トラベルでも評価4.69という極めて高い評価を誇ります。美しい名石と老松が配された日本庭園を囲む純和風数奇屋造りの館内には、大正浪漫の気品と静謐が漂います。宿の真骨頂は、熟練の総料理長が腕を振るう本格日本料理。器には萩焼の名工による逸品が用いられ、天然とらふぐや長州黒毛和牛、萩甘鯛など最高級の山陰の食材が、目にも鮮やかな芸術的会席へと昇華されます。",
              roomTip: "名園を望む落ち着いた数奇屋和室。磨き抜かれた床柱や障子越しに差し込む柔らかな光に癒やされ、本物の日本の美に浸る滞在。",
              gourmetTip: "「板長渾身・冬のふく懐石」。厳選された天然とらふぐの薄造り、ふぐ白子の茶碗蒸し、極上長州牛の陶板焼きなど、伝統の技が冴え渡る至高の逸品揃い。",
              highlights: [
                "大正14年創業・迎賓館の歴史を誇る老舗数奇屋旅館（楽天評価4.69）＆萩焼で彩る本格ふく懐石",
                "熟練の総料理長が引き出す山陰の海の幸＆名石と老松の日本庭園を眺める優雅なひととき",
                "皇族や文人墨客に愛された細やかなおもてなし＆静寂と格式を重んじる大人のための隠れ宿"
              ]
            },
            {
              id: 5,
              name: "萩温泉郷　源泉の宿　萩本陣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15700/15700.jpg",
              rating: 4.63,
              reviews: 2500,
              price: "¥16,500〜",
              access: "「JR東萩駅」より車で5分／世界遺産「松下村塾」より車で5分／無料送迎バスも運行中！詳細はお気軽に問合せ下さい。",
              special: "【★湯巡りができる温泉宿ランキング全国10位★】＜さぁ、温泉のテーマパークへ＞14種の湯船巡りが自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15700%2F15700.html",
              story: "萩の城下町を一望する吾妻山の高台に建ち、地下2,000mから湧き出る自家源泉を活かした多彩な湯船が自慢の温泉リゾート「萩温泉郷 源泉の宿 萩本陣（はぎほんじん）。」。宿の名物「湯の丸」には、内湯、露天風呂、立ち湯、歩行湯、寝湯など14種類もの多彩な浴槽が揃い、城下町の風情を模した庭園の中で贅沢な湯めぐりが楽しめます。塩分を豊富に含む自家源泉は保温効果抜群。夕食は長州藤光牛のステーキと冬の味覚ふぐ料理の饗宴で、ファミリーからご夫婦まで大満足の温泉旅を提供しています。",
              roomTip: "展望フロアの和モダン客室または露天風呂付き客室。高台から萩の城下町と日本海のパノラマを見晴らす開放的な眺望が魅力。",
              gourmetTip: "「長州牛とふぐの味覚会席」。とろける長州藤光牛の陶板焼きと、冬の味覚ふぐ刺し・ふぐちり鍋を一度に味わえる贅沢な組み合わせ。",
              highlights: [
                "地下2000m湧出の自家源泉＆14種類の多彩な湯めぐりが楽しめる名物大浴場「湯の丸」",
                "長州藤光牛ステーキとふぐ料理の豪華饗宴＆高台から萩城下町と海を見渡す絶景パノラマ",
                "城下町風情を再現した湯めぐり回廊＆ファミリーからグループまで楽しめる充実のリゾート"
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
          alt="冬の萩城下町と菊ヶ浜海岸の夕景"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-semibold">
            <Landmark className="w-4 h-4" />
            11月・12月 維新歴史と美食特集｜山口・萩温泉郷
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">山口・萩温泉郷で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 維新城下町と11月解禁本場天然とらふぐ・日本海夕景露天の宿5選</h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            世界遺産の白壁武家屋敷に初冬の日差しが注ぐ維新のふるさと。本場山口の「天然とらふぐ」と高級魚「萩の甘鯛」、長州黒毛和牛を堪能し、菊ヶ浜夕景露天に癒やされる大人の歴史旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">World Heritage Samurai Town & Fugu Season</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                白壁となまこ壁に映える初冬の陽光｜幕末の情熱息づく城下町萩
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              本州最西端、日本海に面した山口県萩市。毛利輝元が慶長9年（1604年）に築城して以来、長州藩三十六万石の拠点として、そして吉田松陰や高杉晋作、木戸孝允、伊藤博文といった明治維新の先覚者たちを数多く輩出した歴史の舞台です。11月から12月にかけての萩は、喧騒が落ち着き、白壁の武家屋敷通りやなまこ壁の土塀に初冬の柔らかな日差しが差し込む、一年で最も風情豊かな散策シーズンを迎えます。
            </p>
            <p>
              そして何より、初冬は日本海が育む美食の最高峰「天然とらふぐ（ふく料理）」の最盛期です。下関へと出荷される天然ふぐの主要水揚げ基地である萩では、熟練の職人が引く美しい「てっさ」や、アツアツの「てっちり鍋」、香ばしい「ひれ酒」を、本場ならではの鮮度とボリュームで堪能できます。さらに「萩の金太郎」として愛される甘鯛の松笠揚げや、山口が誇るブランド牛「長州黒毛和牛」が膳を華やかに彩ります。
            </p>
            <p>
              平成に入って開湯した萩温泉郷は、カルシウム・ナトリウムを含んだ弱アルカリ性の塩化物泉。海風で冷えた身体を芯まで温め、湯冷めしにくい良泉です。「日本の夕陽百選」に輝く菊ヶ浜の落日や、笠山半島の荒波を見晴らす絶景露天風呂に浸かりながら、幕末の志士たちが見上げた夕空に思いを馳せる時間は、この上なく贅沢な大人の休日の過ごし方です。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Fish className="w-5 h-5 text-indigo-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">11月解禁 天然とらふぐ</div>
              <div className="text-xs text-slate-600">下関と並ぶ本場山口のふく料理。身が締まり脂が乗ったてっさとてっちり鍋。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Landmark className="w-5 h-5 text-indigo-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">世界遺産・萩城下町散策</div>
              <div className="text-xs text-slate-600">松下村塾、木戸孝允旧宅、鍵曲。江戸時代の町割りがそのまま残る生きた博物館。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-indigo-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">菊ヶ浜の夕日＆萩温泉</div>
              <div className="text-xs text-slate-600">日本の夕陽百選・菊ヶ浜の絶景と、海水のミネラルを含んだポカポカ温まりの湯。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Thermal Mineral Relaxation Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                「塩分が温もりを包み込む」萩温泉郷の泉質と癒やしの効能
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              萩温泉郷の泉質は「含弱放射能-カルシウム・ナトリウム-塩化物温泉（中性高張性高温泉など、各源泉により微差あり）。」。太古の海水や地下深くの地層由来のミネラルを豊富に含み、湧出温度は約40〜44℃の良泉です。
            </p>
            <p>
              塩化物泉の特性として、湯に入ると皮膚に薄い塩分の皮膜が作られます。これが体温の発散を防ぐ天然のジャケットの役割を果たし、日本海からの冷たい海風にさらされた身体を奥深くまで温め、入浴後も湯冷めすることなくポカポカとした心地よい温もりを持続させます。
            </p>
            <p>
              また、微量のラドン成分を含む弱放射能泉の特性を持つ源泉もあり、新陳代謝の促進や免疫力の向上、自律神経の安定に優れた効果を発揮。神経痛、関節痛、疲労回復はもちろん、乾燥しがちな初冬の肌に潤いを与えて滑らかに整える美肌作用も兼ね備えています。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Choshu Winter Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                山口・萩の冬の美食極まる｜天然とらふぐ・萩甘鯛・長州黒毛和牛
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              冬の萩の食卓を飾る最大の主役は、何といっても「天然とらふぐ（福を呼ぶふく料理）」です。萩沖の厳しい潮流で育まれたとらふぐは身の締まりが抜群で、熟練の包丁技で透けるほど薄く引かれた「てっさ」を特製ポン酢と安岡ネギ、もみじおろしで味わえば、噛み締めるほどに上品で力強い旨味が広がります。ふぐのアラから濃厚な出汁が出る「てっちり鍋」や、香ばしく炙ったヒレを注いだ熱燗「ヒレ酒」、ふぐ雑炊は冬の寒さを一瞬で幸福感へと変えてくれます。
            </p>
            <p>
              さらに、萩港に揚がる高級魚「アマダイ（萩の金太郎）」。繊細な白身の甘みとサクサクの鱗の食感が絶妙な「松笠揚げ」は、京都の割烹でも珍重される極上の逸品。加えて、きめ細かなサシと柔らかな肉質が自慢の「長州藤光牛・長州黒毛和牛」の陶板焼きステーキや、伝統の地鶏「長州黒かしわ」など、山陰の豊かな大地と海の恵みが萩焼の美しい器に盛られ、至福のディナーを彩ります。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Historic Town Walk & Coastal Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の萩散策モデルコース｜松下村塾・城下町横町と菊ヶ浜夕景
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              初冬の萩散策は、明治維新の精神的源流となった「松陰神社」と「松下村塾」からスタート。わずか8畳の小さな塾舎で、吉田松陰が日本の未来を憂い志士たちを育てた熱い息吹が今なお感じられます。境内には吉田松陰歴史館も併設され、激動の歴史を分かりやすく学べます。
            </p>
            <p>
              続いて、世界遺産の中心地である「萩城下町」へ。日本の道100選にも選ばれた「菊屋横町」では、白壁となまこ壁が幾重にも連なり、高杉晋作誕生地や木戸孝允旧宅を見学。直角に折れ曲がった「鍵曲（かいまがり）」を歩けば、まるで江戸時代にタイムスリップしたかのような静けさが迎えてくれます。散策の途中、伝統の「萩焼窯元」に立ち寄り、お気に入りの湯呑みや抹茶茶碗を探すのも旅の大きな醍醐味です。
            </p>
            <p>
              夕方前には「菊ヶ浜海岸」へ移動。松原の向こうに広がる日本海に夕日がゆっくりと沈み、空と海が黄金色に染まる光景は言葉を失う美しさです。黄昏時に合わせて萩温泉の宿へチェックインし、露天風呂に浸かってから本場天然とらふぐの会席料理を味わうのが、萩の王道モデルコースです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Featured Historic & Oceanview Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              維新の歴史と日本海夕景に抱かれる｜萩温泉郷の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高評価を獲得し、自家源泉や本場とらふぐ会席に強いこだわりを持つ本物の名旅館だけを厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-indigo-400 font-extrabold">#{h.id}</span>
                    <span>萩の名宿</span>
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
                      <div className="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-indigo-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-indigo-700" />
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
                        <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-indigo-700 flex-shrink-0 mt-0.5" />
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
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
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Winter Travel Tips & Access</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の萩冬旅｜日本海の海風対策と新山口駅からの快適アクセス
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-indigo-800" />
                日本海からの季節風と防風装備
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月下旬以降の萩は、日本海からの北西の季節風が吹く日が増え、実際の気温以上に肌寒さを感じます。菊ヶ浜の散策や城下町歩きには、風を通さない防風コートやウインドブレーカー、厚手のストール、手袋をご用意ください。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-indigo-800" />
                新山口駅直行バスと小郡萩道路のドライブ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                山陽新幹線・新山口駅から直行特急バス「はぎ号」で約60分と、首都圏や関西からのアクセスが極めて快適です。車でお越しの場合は無料の小郡萩道路を経由して約20分。大雪に見舞われることは稀ですが、朝晩の路面凍結にはご注意ください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                山口萩温泉郷冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-indigo-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Related Winter Features & Chugoku Region</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい山陰・中国地方の冬名湯＆極上海鮮グルメ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月のとらふぐ、松葉ガニ、美肌温泉をめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">山口・長門湯本温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">音信川の清流と立ち寄り湯恩湯・冬のとらふぐ会席を満喫する名宿</h3>
            </Link>
            <Link 
              href="/winter-shimonoseki-fugu-torafugu-luxury-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">山口・下関</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">本場下関の天然とらふぐフルコースと関門海峡絶景ビューの高級旅館</h3>
            </Link>
            <Link 
              href="/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">島根・玉造温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">神在月の出雲大社参拝と美肌日本一の名湯・冬の松葉ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">鳥取・三朝温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">世界屈指の高濃度ラジウム泉と11月解禁鳥取松葉ガニを満喫する宿</h3>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">愛媛・道後温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">日本最古の名湯道後温泉本館と冬の鯛めし・伊予牛を堪能する名宿</h3>
            </Link>
            <Link 
              href="/winter-tokushima-iya-valley-onsen-hikyo-awa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">徳島・祖谷温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">日本三大秘境初雪渓谷美とケーブルカー谷底露天・特選阿波牛の宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
