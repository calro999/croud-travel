import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月兵庫・香住温泉の初冬日本海と最高峰ブランド蟹】本場柴山ガニ＆香住松葉ガニ・但馬牛ステーキ＆海辺露天の宿5選",
  description: "11月6日のカニ漁解禁を迎えると、兵庫県但馬地方の日本海に面した香住海岸（香住港・柴山港）は、一年で最も活気あふれる松葉ガニの最高峰シーズンを迎えます。厳しい選別基準で「ピンクタグ」が付けられるブランド蟹の頂点「柴山がに」、香住港に水揚げされる新鮮な「香住松葉がに」、濃厚な内子と外子を味わう親ガニ「セコガニ」、そして最高峰黒毛和牛「但馬牛」の贅沢な饗宴。海辺に湧く塩化物温泉で潮風を感じながら身体の芯まで温まり、荒波打ち寄せる山陰海岸ジオパークの雄大な冬景色と極上のカニフルコースを満喫する至高の宿5選を徹底解説。",
  keywords: '香住温泉 宿泊, 柴山温泉 カニ, 柴山がに 宿, 香住 松葉ガニ 11月 12月, さだ助, さどや, やまや 香住, 癒しの宿こえもん, 翠湖, 但馬牛 香住, 余部橋梁 冬',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay/"
  },
  openGraph: {
    title: "【11・12月兵庫・香住温泉の初冬日本海と最高峰ブランド蟹】本場柴山ガニ＆香住松葉ガニ・但馬牛ステーキ＆海辺露天の宿5選",
    description: "11月6日のカニ漁解禁を迎えると、兵庫県但馬地方の日本海に面した香住海岸（香住港・柴山港）は、一年で最も活気あふれる松葉ガニの最高峰シーズンを迎えます。厳しい選別基準で「ピンクタグ」が付けられるブランド蟹の頂点「柴山がに」、香住港に水揚げされる新鮮な「香住松葉がに」、濃厚な内子と外子を味わう親ガニ「セコガニ」、そして最高峰黒毛和牛「但馬牛」の贅沢な饗宴。海辺に湧く塩化物温泉で潮風を感じながら身体の芯まで温まり、荒波打ち寄せる山陰海岸ジオパークの雄大な冬景色と極上のカニフルコースを満喫する至高の宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の香住海岸と日本海の名湯'
      }
    ]
  }
};

const faqList = [
  {
    "q": "香住温泉・柴山港の松葉ガニ漁の解禁日と最も美味しい時期はいつですか？",
    "a": "山陰地方（兵庫県但馬地方）の松葉ガニ（雄のズワイガニ）漁は、毎年11月6日に一斉に解禁されます。11月中旬から12月にかけては、脱皮を終えて甲羅が硬くなり、身の詰まりとカニ味噌の濃厚さが格段に増すベストシーズンです。また、11月6日から12月末頃までの期間限定で漁が行われる雌のズワイガニ「セコガニ（親ガニ・コッペガニ）」も味わうことができ、プチプチとした外子と濃厚な内子の絶品珍味を同時に堪能できる最高のタイミングです。"
  },
  {
    "q": "「柴山がに」と一般的な「松葉ガニ」や「香住ガニ」との違いは何ですか？",
    "a": "「松葉ガニ」は山陰沖で水揚げされる雄ズワイガニの総称です。その中でも「柴山がに」は柴山港に水揚げされるズワイガニで、重さ・身入り・指の欠損・色艶・甲羅の硬さなどを100以上もの厳格なランクに細分化して選別されます。厳しい基準をクリアした最高峰の柴山がにには信頼の証である「ピンク色のタグ」が付けられ、日本屈指のトップブランドとして市場で高値で取引されます。一方、「香住ガニ」は香住港で水揚げされる紅ズワイガニ（深海に生息）で、甘みが強くみずみずしい特徴があります。11月・12月の香住では、最高峰の松葉ガニ・柴山がにと、紅ズワイガニの食べ比べも楽しめます。"
  },
  {
    "q": "香住温泉・柴山温泉の泉質と冬の入浴効果について教えてください。",
    "a": "香住温泉郷（香住温泉・柴山温泉・矢田川温泉など）の泉質は主に「アルカリ性単純温泉」や「ナトリウム・カルシウム-塩化物泉」です。弱アルカリ性のお湯は肌の古い角質を落としてつるつるにする美肌効果があり、塩化物泉は肌の表面に塩分の皮膜を形成して汗の蒸発を防ぐため、湯冷めしにくく「熱の湯」とも呼ばれます。冬の日本海からの冷たい潮風で冷えた身体の芯までぽかぽかに温まり、神経痛や筋肉痛、冷え性を和らげてくれます。"
  },
  {
    "q": "11月・12月の香住エリアの天候と車でのアクセス注意点は？スタッドレスタイヤは必要？",
    "a": "香住海岸は日本海側に位置するため、11月下旬以降は「うらにし」と呼ばれる日本海特有の時雨や突風が多くなります。11月中旬頃までは積雪の心配は少ないですが、11月下旬から12月に入ると寒波の襲来とともに山間部（北近畿豊岡自動車道の和田山〜日高神鍋高原周辺や国道9号線の峠越え）で路面凍結や積雪が発生しやすくなります。12月に車で訪れる場合は必ずスタッドレスタイヤを装着してください。電車の場合はJR山陰本線の特急「こうのとり」や「はまかぜ」で香住駅まで直通で安全にアクセスできます。"
  },
  {
    "q": "香住周辺で冬に見逃せない観光スポットや見どころはどこですか？",
    "a": "香住は「山陰海岸ユネスコ世界ジオパーク」の中核に位置し、荒波が削り出した迫力満点の断崖絶壁や奇岩が見どころです。近代土木遺産として名高い「余部橋梁（空の駅）」からは、高さ約40mの展望デッキから日本海の冬の白波と山陰本線のパノラマを一望できます。また、円山応挙とその一門の障壁画（国の重要文化財）を多数所蔵する「大乗寺（応挙寺）」、香住漁港の活気あふれるセリ風景や直売所でのセコガニ・干物の買い物も冬旅の大きな醍醐味です。"
  }
];

export default function KasumiOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay"
        },
        "headline": "【11・12月兵庫・香住温泉の初冬日本海と最高峰ブランド蟹】本場柴山ガニ＆香住松葉ガニ・但馬牛ステーキ＆海辺露天の宿5選",
        "description": "11月6日のカニ漁解禁を迎えると、兵庫県但馬地方の日本海に面した香住海岸（香住港・柴山港）は、一年で最も活気あふれる松葉ガニの最高峰シーズンを迎えます。厳しい選別基準で「ピンクタグ」が付けられるブランド蟹の頂点「柴山がに」、香住港に水揚げされる新鮮な「香住松葉がに」、濃厚な内子と外子を味わう親ガニ「セコガニ」、そして最高峰黒毛和牛「但馬牛」の贅沢な饗宴。海辺に湧く塩化物温泉で潮風を感じながら身体の芯まで温まり、荒波打ち寄せる山陰海岸ジオパークの雄大な冬景色と極上のカニフルコースを満喫する至高の宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T05:00:00+09:00",
        "dateModified": "2026-09-28T05:00:00+09:00",
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
          "name": "Croud Travel 冬の美食・温泉取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay#breadcrumb",
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
            "name": "兵庫・香住温泉 最高峰柴山ガニと松葉ガニの宿",
            "item": "https://croud-travel.com/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "香住温泉・柴山港の松葉ガニ漁の解禁日と最も美味しい時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山陰地方（兵庫県但馬地方）の松葉ガニ（雄のズワイガニ）漁は、毎年11月6日に一斉に解禁されます。11月中旬から12月にかけては、脱皮を終えて甲羅が硬くなり、身の詰まりとカニ味噌の濃厚さが格段に増すベストシーズンです。また、11月6日から12月末頃までの期間限定で漁が行われる雌のズワイガニ「セコガニ（親ガニ・コッペガニ）」も味わうことができ、プチプチとした外子と濃厚な内子の絶品珍味を同時に堪能できる最高のタイミングです。"
            }
          },
          {
            "@type": "Question",
            "name": "「柴山がに」と一般的な「松葉ガニ」や「香住ガニ」との違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「松葉ガニ」は山陰沖で水揚げされる雄ズワイガニの総称です。その中でも「柴山がに」は柴山港に水揚げされるズワイガニで、重さ・身入り・指の欠損・色艶・甲羅の硬さなどを100以上もの厳格なランクに細分化して選別されます。厳しい基準をクリアした最高峰の柴山がにには信頼の証である「ピンク色のタグ」が付けられ、日本屈指のトップブランドとして市場で高値で取引されます。一方、「香住ガニ」は香住港で水揚げされる紅ズワイガニ（深海に生息）で、甘みが強くみずみずしい特徴があります。11月・12月の香住では、最高峰の松葉ガニ・柴山がにと、紅ズワイガニの食べ比べも楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "香住温泉・柴山温泉の泉質と冬の入浴効果について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "香住温泉郷（香住温泉・柴山温泉・矢田川温泉など）の泉質は主に「アルカリ性単純温泉」や「ナトリウム・カルシウム-塩化物泉」です。弱アルカリ性のお湯は肌の古い角質を落としてつるつるにする美肌効果があり、塩化物泉は肌の表面に塩分の皮膜を形成して汗の蒸発を防ぐため、湯冷めしにくく「熱の湯」とも呼ばれます。冬の日本海からの冷たい潮風で冷えた身体の芯までぽかぽかに温まり、神経痛や筋肉痛、冷え性を和らげてくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の香住エリアの天候と車でのアクセス注意点は？スタッドレスタイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "香住海岸は日本海側に位置するため、11月下旬以降は「うらにし」と呼ばれる日本海特有の時雨や突風が多くなります。11月中旬頃までは積雪の心配は少ないですが、11月下旬から12月に入ると寒波の襲来とともに山間部（北近畿豊岡自動車道の和田山〜日高神鍋高原周辺や国道9号線の峠越え）で路面凍結や積雪が発生しやすくなります。12月に車で訪れる場合は必ずスタッドレスタイヤを装着してください。電車の場合はJR山陰本線の特急「こうのとり」や「はまかぜ」で香住駅まで直通で安全にアクセスできます。"
            }
          },
          {
            "@type": "Question",
            "name": "香住周辺で冬に見逃せない観光スポットや見どころはどこですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "香住は「山陰海岸ユネスコ世界ジオパーク」の中核に位置し、荒波が削り出した迫力満点の断崖絶壁や奇岩が見どころです。近代土木遺産として名高い「余部橋梁（空の駅）」からは、高さ約40mの展望デッキから日本海の冬の白波と山陰本線のパノラマを一望できます。また、円山応挙とその一門の障壁画（国の重要文化財）を多数所蔵する「大乗寺（応挙寺）」、香住漁港の活気あふれるセリ風景や直売所でのセコガニ・干物の買い物も冬旅の大きな醍醐味です。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "なごみの香風の宿　さだ助",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67455/67455.jpg",
              rating: 4.61,
              reviews: 412,
              price: "¥19,800〜",
              access: "車－北近畿自動車道【豊岡出石IC】より178号線経由で約40分。JR－山陰本線【香住駅】から約2km。駅から送迎無料",
              special: "仲買人社長厳選の旬の魚介と香住温泉の宿　9月から香住ガニが解禁",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67455%2F67455.html",
              story: "香住の海辺に佇み、カニのプロである宿主自らが柴山港・香住港のセリに足を運んで極上ガニを厳選して競り落とす料理自慢の名宿「なごみの香風の宿 さだ助」。自家製の干物や加工品を手がける水産加工所「マルサ水産」も直営し、カニの鮮度と目利きには絶対の自信を持っています。11月解禁直後の活松葉ガニや柴山がには、生簀から揚げたてを捌いて炭火焼き、刺身、茹で、甲羅みそ焼きへと仕立てられ、カニ本来の甘みと旨味が口いっぱいに広がります。天然香住温泉の内湯や露天風呂で潮風を感じながら湯浴みを楽しめるのも魅力です。",
              roomTip: "和モダンベッドルームまたは庭園を望む落ち着いた和室。畳の清々しい香りと温かみある木目が調和し、カニ三昧の夕食後もゆったりと心安らぐ静寂の時間を過ごせます。",
              gourmetTip: "「活柴山がに・松葉がにフルコース」。花が咲くように透き通るカニ刺し、炭火で芳ばしく炙る焼きガニ、濃厚なカニ味噌を絡めてすする甲羅酒、但馬牛の鉄板焼き、締めのかに雑炊まで至福の連続。",
              highlights: [
                "宿主自らセリで厳選する極上柴山がに＆直営マルサ水産の鮮度抜群カニフルコース",
                "透き通るカニ刺し・炭火焼き・濃厚甲羅酒＆最高峰ブランド但馬牛ステーキ",
                "香住温泉のやわらかな湯と洗練された和モダン客室で過ごす大人の休日"
              ]
            },
            {
              id: 2,
              name: "香住温泉　旅籠　さどや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40536/40536.jpg",
              rating: 4.00,
              reviews: 49,
              price: "¥22,500〜",
              access: "ＪＲ山陰本線　香住駅より車で約５分／北近畿豊岡道　豊岡・出石ICより車で約３５分",
              special: "香住最大級の大露天風呂でのんびりリフレッシュ。宿の主人は香住漁港の仲買人！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40536%2F40536.html",
              story: "創業百余年の歴史を刻み、一日わずか数組の宿泊客のために最高の素材と真心のもてなしを尽くす隠れ家割烹旅館「香住温泉 旅籠 さどや」。香住港・柴山港の競り権を持つ宿だからこそ実現できる、最高ランクの活ズワイガニの贅を尽くした料理が食通たちを唸らせます。湯船には肌をなめらかに包み込む弱アルカリ性の香住温泉が満たされ、冬の冷えた身体をじんわりと芯から解きほぐします。静かな港町の路地に佇む純和風の風情が、大人の冬の美食旅にふさわしい上質な時間をもたらします。",
              roomTip: "格子戸や床の間が配された数寄屋風の純和室。窓外に広がる静穏な港町の町並みを感じながら、プライベート感あふれる部屋食や専用個室で寛げます。",
              gourmetTip: "職人が手際よく捌く「極上活ズワイガニ会席」。甘み極まる活ガニ刺しや香ばしい炭火焼きガニ、旨味の凝縮したカニすき鍋、最高峰の但馬牛ヒレ肉の陶板焼きを贅沢に味わえます。",
              highlights: [
                "創業百余年の隠れ家割烹＆一日数組限定で味わう最高ランク活ズワイガニの贅",
                "数寄屋風の落ち着いた和室での寛ぎ＆肌を滑らかにする天然香住温泉の湯浴み",
                "香住港・柴山港ダブルの競り権を持つからこその至極の仕入れと板前の技"
              ]
            },
            {
              id: 3,
              name: "網元かにの宿　やまや＜兵庫県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14230/14230.jpg",
              rating: 4.00,
              reviews: 26,
              price: "¥19,800〜",
              access: "北近畿豊岡道日高神鍋高原IC下車45分・香住駅より車で5分",
              special: "網元ならではのお宿。懐古の時間に寛いでみませんか・・・。２４時間温泉可！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14230%2F14230.html",
              story: "香住の海を望む網元が直営し、鮮度抜群の活ガニと豪快なボリュームで圧倒的な満足度を誇る「網元かにの宿 やまや」。自社船や契約船から届く新鮮そのものの松葉ガニや香住ガニを、網元ならではの惜しみないボリュームで提供してくれます。冬の冷え込みに嬉しい香住温泉の大浴場では、ミネラル豊富な塩化物泉が身体をぽかぽかに温め、保温効果も抜群。飾らない温かいおもてなしと、本場但馬のカニを心ゆくまで食べ尽くす贅沢がここにあります。",
              roomTip: "オーシャンビューの和室。日本海の冬の白波や夕暮れの水平線を眺めながら、波音を子守唄にゆったりと寛げる心地よい空間です。",
              gourmetTip: "「網元特選・活松葉ガニづくし」。カニ刺し、焼きガニ、茹でガニ姿一杯、カニ天ぷら、カニちり鍋、カニ雑炊と、カニ何杯分ものボリュームに但馬牛ステーキまで付く豪勢なプラン。",
              highlights: [
                "網元直営ならではの圧倒的ボリューム＆本場松葉ガニと但馬牛の贅沢会席",
                "オーシャンビュー客室から望む日本海の白波＆保温効果の高い塩化物泉大浴場",
                "自社船仕込みの豪快カニ料理＆家族やグループでも大満足のボリューム感"
              ]
            },
            {
              id: 4,
              name: "柴山温泉　癒しの宿こえもん",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41112/41112.jpg",
              rating: 3.93,
              reviews: 283,
              price: "¥9,900〜",
              access: "JR山陰本線柴山駅（城崎温泉駅より３駅、香住駅より1駅）歩3分。車・北近畿豊岡道但馬空港IC下車40分",
              special: "お料理★4.48！質にこだわる料理長が振る舞う自慢の料理と柴山の天然温泉。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41112%2F41112.html",
              story: "松葉ガニ水揚げの聖地として全国に名を轟かす柴山港の入り江に面し、わずか数室の細やかなもてなしと港町の情緒が心に沁みる「柴山温泉 癒しの宿こえもん」。日本一選別が厳しいと言われる柴山港の競りで、極上のピンクタグ付き柴山がにを直接仕入れています。港のすぐそばに湧く柴山温泉は、弱アルカリ性の柔らかな美肌の湯。窓の外に広がる静かな柴山湾の入江や漁船の篝火を眺めながら、極上のカニ料理に舌鼓を打つ至福のひとときが待っています。",
              roomTip: "柴山湾を一望する和室。入り江を行き交う漁船の情景や、朝日に輝く波間を静かに見下ろすことができ、港町ならではの情緒を満喫できます。",
              gourmetTip: "「柴山がにフルコース」。厳しい100以上のランク分けを勝ち抜いた柴山がにの刺身、炭火焼き、茹でガニ、濃厚な甲羅味噌焼き、但馬牛の陶板焼きが織りなす究極の味覚体験。",
              highlights: [
                "ピンクタグ柴山がにの本場・柴山港正面の好立地＆細やかなもてなしの隠れ宿",
                "厳格な選別を勝ち抜いた柴山がにの刺身・炭火焼き・カニ味噌甲羅焼きの至福",
                "柴山湾の静寂な夜景と漁火を眺めながら過ごす贅沢な冬のプライベートタイム"
              ]
            },
            {
              id: 5,
              name: "柴山温泉　ホテル翠湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/53752/53752.jpg",
              rating: 4.00,
              reviews: 57,
              price: "¥7,700〜",
              access: "ＪＲ　加賀温泉駅から車で１５分",
              special: "霊峰白山を柴山潟の湖面におとし、湖畔情緒に味わい、心和ませる時間をお過ごしいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53752%2F53752.html",
              story: "波静かな柴山湾のほとりに佇み、四季折々の海景色とアットホームな居心地の良さでリピーターに愛される「柴山温泉 ホテル翠湖（すいこ）」。柴山港で揚がった鮮度抜群のカニ料理を良心的な価格で堪能できる、コストパフォーマンスに優れた名宿です。自家源泉の柴山温泉は、湯上がり後も温かさが長く持続する塩化物泉。冬の澄んだ夜空の下、穏やかな波音を聴きながら入る温泉と、冬の日本海の滋味豊かな海鮮料理が旅人の心を芯から温めてくれます。",
              roomTip: "柴山湾を望むレイクビューならぬベイビューの和室。穏やかな入江の水面を眺めながら、のんびりと寛げるアットホームな客室です。",
              gourmetTip: "「柴山港直送・冬のカニ会席」。焼きガニの香ばしい匂いとふっくらとした身の甘み、アツアツのカニ鍋、サクサクのカニ天ぷらに地元但馬の地酒を合わせて満喫。",
              highlights: [
                "柴山湾の穏やかな入り江を望む絶景＆抜群のコスパで楽しむ冬のカニ会席",
                "自家源泉柴山温泉のポカポカ温まり湯＆アットホームな港町情緒に癒やされる旅",
                "JR柴山駅や香住駅からの好アクセス＆気軽に楽しめる本場但馬のカニ旅"
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
          alt="冬の日本海と香住海岸の美景"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上美食特集｜兵庫・但馬香住
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月兵庫・香住温泉】<br className="hidden sm:inline" />
            最高峰ブランド柴山ガニ＆香住松葉ガニ・但馬牛と海辺露天の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            11月6日の解禁とともに湧き立つ山陰の蟹王国。ピンクタグの頂点「柴山がに」と獲れたて活松葉ガニ、但馬牛の極上饗宴に酔いしれ、海辺の天然温泉で身体の芯から温まる冬の至福旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Gourmet Kingdom of Matsuba Crab</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月6日解禁！山陰海岸ジオパークの荒波が育む「冬の味覚の王者」
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              兵庫県北部の但馬地方に位置する香美町香住区は、古くから北前船の寄港地として栄え、現代においては日本屈指の水揚げ高と品質を誇るカニの町としてその名を全国に轟かせています。毎年11月6日午前0時、日本海の荒海へと一斉に漁船が漕ぎ出し、カニ漁の解禁の号砲が鳴り響きます。港に帰港した船から水揚げされる活ズワイガニの雄は「松葉ガニ」と呼ばれ、11月中旬から12月にかけては甲羅の脱皮を終えて身がぎっしりと詰まり、上品な甘みと旨味が凝縮した最高のコンディションへと到達します。
            </p>
            <p>
              なかでも香住のお隣、天然の良港である柴山港で水揚げされる「柴山がに」は、選別の厳しさにおいて日本一と称されます。大きさや重さ、身入り、脚の揃い具合、甲羅の硬さなどを100以上もの段階に細分化して選定。その過酷な審査を突破した最高ランクの個体だけに誇り高き「ピンク色のタグ」が取り付けられます。繊細な繊維が織りなす極上の甘み、花咲くカニ刺しの透明感、香ばしい炭火焼きの香気、そして甲羅の中で黄金色に輝く濃厚なカニ味噌は、一度味わえば生涯忘れられない感動を約束してくれます。
            </p>
            <p>
              さらに11月から12月末にかけてのわずか2ヶ月間しか味わえない雌ガニ「セコガニ（親ガニ）」は、甲羅の内側に詰まった朱色の濃厚な内子と、お腹に抱えたプチプチと弾ける外子の食感が絶妙な冬の至宝。世界的な銘柄牛の素牛である「但馬牛」のステーキとともに、香住温泉の海辺の湯船に浸かりながら冬の贅沢を味わい尽くす旅は、まさに大人の冬旅の到達点と言えるでしょう。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-amber-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">ピンクタグの頂点「柴山がに」</div>
              <div className="text-xs text-slate-600">日本一厳しい100以上のランク分け。極上の身入りと至高のカニ味噌。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-amber-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">11・12月限定のセコガニ＆但馬牛</div>
              <div className="text-xs text-slate-600">濃厚な内子・外子の絶品珍味と、世界が絶賛する最高峰但馬牛の鉄板焼き。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Waves className="w-5 h-5 text-amber-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">ポカポカ持続の塩化物温泉</div>
              <div className="text-xs text-slate-600">塩分が肌を包み込み冷えを防ぐ熱の湯。潮騒を聴く海辺の露天風呂。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen & Geography */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Natural Thermal Springs & Coastline</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                山陰海岸ジオパークの潮風に抱かれる香住・柴山温泉の泉質と癒やし
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              香住温泉郷は、昭和54年（1979年）に湧出した比較的新しい温泉地でありながら、山陰海岸の美景と新鮮な海の幸が相まって一躍全国区の人気温泉地へと発展しました。香住海岸沿いに点在する香住温泉、柴山湾の静かな入江に佇む柴山温泉、矢田川沿いの矢田川温泉など、複数の源泉が存在します。
            </p>
            <p>
              主な泉質は「アルカリ性単純温泉」および「ナトリウム・カルシウム-塩化物低張性中性温泉」。アルカリ性のお湯は肌の古い角質を落としてつるつるにする美肌効果に優れ、塩化物泉は入浴後に肌表面の塩分が汗の蒸発を防ぐため、抜群の保温・保湿効果を発揮します。冬の日本海から吹き付ける冷たい風にさらされた身体も、湯船に浸かれば瞬く間に芯から温まり、夜も湯冷めすることなく心地よい眠りへと誘われます。
            </p>
            <p>
              また、宿の露天風呂からは、荒々しい冬の白波が打ち寄せる岩礁や、静まり返った柴山湾の入江、夜の海に浮かぶイカ釣り船の漁火を眺めることができます。冬の澄んだ夜空に瞬く満天の星とともに、自然の雄大さと温泉のぬくもりに抱かれる至福の時間が流れます。
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
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Gastronomy & Craft Sake</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月に香住で味わう至高のカニ会席と但馬の冬グルメ
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              香住の宿で供されるカニ料理の醍醐味は、その圧倒的な鮮度と調理法の多彩さにあります。宿の厨房に備えられた大型生簀から直前に取り出された活ガニは、まず「カニ刺し」として供されます。冷水にサッと放つと氷水の中で繊維がパッと花開くように広がり、口に含めば濃厚な甘みとみずみずしい食感が舌の上でとろけます。
            </p>
            <p>
              続いて登場する「炭火焼きガニ」は、炭火の遠赤外線で甲羅ごと香ばしく炙られることで、カニの芳醇なアミノ酸の香りが部屋中に立ち上ります。ふっくらと焼き上がった身にすだちを一絞りして頬張る瞬間は、まさに至福の境地。さらに、甲羅に残ったカニ味噌を炭火でフツフツと温め、身をディップして食す贅沢、そして香ばしく熱した地酒を注ぎ入れる「甲羅酒」は、呑兵衛ならずとも息をのむ大人の極道味です。
            </p>
            <p>
              カニ鍋（カニすき・カニちり）では、白菜や春菊、但馬産ネギとともに煮込まれた出汁にカニのエキスが溶け出し、最後の一滴まで旨味を吸い尽くした「カニ雑炊」で締めくくります。また、香美町香住の酒蔵「香住鶴」の生酛・山廃仕込みの純米酒や冬のしぼりたて原酒は、芳醇なカニ料理や脂の乗った但馬牛ステーキと抜群の相性を誇ります。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course & Sightseeing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Travel Route & Scenic Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                山陰海岸ジオパークの絶景を巡る初冬の香住・余部おすすめ散策ルート
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              香住温泉での滞在をより深く楽しむなら、カニ料理だけでなく世界ジオパークに認定された海岸美や歴史遺産を巡るのがおすすめです。車や山陰本線で香住駅からわずか15分の「余部（あまるべ）橋梁・空の駅」は必見スポット。かつて東洋一のトレッスル橋として親しまれた旧鉄橋の一部が展望施設として保存され、地上約40mのエレベーター「余部クリスタルタワー」で上がると、日本海の荒波が打ち寄せるパノラマと初冬の鉛色の空が織りなすドラマチックな冬景色を眼下に見下ろせます。
            </p>
            <p>
              また、江戸時代の天才絵師・円山応挙とその弟子たちが描いた165点もの障壁画（すべて国の重要文化財）を所蔵する「大乗寺（応挙寺）」では、立体的な空間構成と繊細な筆致による日本美術の極致を静寂の中で鑑賞できます。チェックアウト後は香住漁港や柴山港の海産物直売所「かすみ水産」「かにや」などに立ち寄り、獲れたてのセコガニや香住ガニの干物、特産のエテガレイをお土産に選ぶのが冬の香住旅の鉄板ルートです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Ryokans */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Handpicked 5 Elite Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              香住温泉・柴山温泉で冬のカニを極める厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              競り権を持つ老舗割烹から網元直営の豪快宿、柴山港一望の隠れ宿まで、楽天APIから最新情報と評価を厳選した5軒をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{h.rating}</span>
                    <span className="text-slate-300 text-[10px]">({h.reviews}件)</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-amber-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg">
                    {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>兵庫県美方郡香美町香住区</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-800 flex-shrink-0">客室の魅力:</span>
                        <span className="text-slate-600">{h.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-800 flex-shrink-0">冬の美食:</span>
                        <span className="text-slate-600">{h.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">宿泊のハイライト</div>
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
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
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Travel Guide & Packing Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の香住冬旅の気候・服装と雪道運転のアドバイス
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-800" />
                防風・防水と重ね着対策
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                初冬の日本海沿岸は「うらにし」と呼ばれる急な通り雨や冷たい海風が頻繁に吹きます。気温は11月で平均10〜14℃前後、12月に入ると最高気温でも5〜8℃、朝晩は0℃近くまで冷え込みます。防風性のあるフード付きダウンジャケットやウインドブレーカー、厚手のストール、撥水性のある靴を用意しましょう。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-800" />
                峠越えの雪道対策・スタッドレスタイヤ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                海岸部の平地では11月に大雪になることは稀ですが、阪神・京阪神方面から北上する際の山間部（北近畿豊岡道や国道9号線の春日〜和田山〜八鹿周辺）では、11月下旬以降に夜間凍結や初雪が見られます。12月の車移動はスタッドレスタイヤ必須です。運転に不安のある方は特急はまかぜ・こうのとり利用が安心です。
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
                香住温泉・柴山がに冬旅のよくある質問（FAQ）
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
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい関西・日本海の冬名湯＆極上カニ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の味覚の王様・カニ料理や、歴史ある名湯を巡る人気特集もぜひチェックしてください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">兵庫・城崎温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">7つの外湯めぐりと冬の松葉ガニ・但馬牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">京都・天橋立</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">日本三景の雪景色と幻の間人ガニ・宮津湾の寒ブリの宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">福井・三国温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">皇室献上越前ガニと東尋坊夕日・日本海絶景露天の宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">鳥取・三朝温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">世界屈指のラジウム温泉と鳥取松葉ガニ・鳥取和牛の宿</h3>
            </Link>
            <Link 
              href="/winter-toyama-shogawa-onsen-snow-cruise-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">富山・庄川温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">雪見庄川峡遊覧船と富山湾紅ズワイガニ・寒ブリ・白えびの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
