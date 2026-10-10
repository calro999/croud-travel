import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月あわら温泉】庭園露天風呂と黄色いタグ付き越前蟹！名宿5選',
  description: '11月6日の越前がに解禁で歓喜に沸く福井の名湯「あわら温泉」。明治の開湯以来、各宿が独自源泉を所有する贅沢な湯巡りと、三國港直送の黄色タグ付き越前がにフルコース、極上若狭牛を堪能。庭園露天風呂が彩る初冬の極上温泉宿5選を徹底解説。',
  keywords: 'あわら温泉 越前がに 宿泊, あわら温泉 11月 12月, 越前蟹 黄色タグ まつや千千, グランディア芳泉, つるや あわら, 清風荘, 若狭牛 芦原温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukui-awara-onsen-echizen-crab-stay/",
  },
  openGraph: {
    title: '【11・12月あわら温泉】庭園露天風呂と黄色いタグ付き越前蟹！名宿5選',
    description: '11月6日の越前がに解禁で歓喜に沸く福井の名湯「あわら温泉」。明治の開湯以来、各宿が独自源泉を所有する贅沢な湯巡りと、三國港直送の黄色タグ付き越前がにフルコース、極上若狭牛を堪能。庭園露天風呂が彩る初冬の極上温泉宿5選を徹底解説。',
    url: 'https://croud-travel.pages.dev/winter-fukui-awara-onsen-echizen-crab-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月あわら温泉の冬名湯と越前がに】関西の奥座敷・庭園露天風呂と黄色いタグ付き越前蟹＆若狭牛会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月あわら温泉の冬名湯と越前がに】関西の奥座敷・庭園露天風呂と黄色いタグ付き越前蟹＆若狭牛会席の宿5選",
    description: "11月6日の越前がに解禁で歓喜に沸く福井の名湯「あわら温泉」。明治の開湯以来、各宿が独自源泉を所有する贅沢な湯巡りと、三國港直送の黄色タグ付き越前がにフルコース、極上若狭牛を堪能。庭園露天風呂が彩る初冬の極上温泉宿5選を徹底解説。",
  }
};

const faqList = [
  {
    "q": "あわら温泉の越前がにの解禁時期と最も美味しい時期はいつですか？",
    "a": "福井県の越前がに（オスのズワイガニ）の漁期は、例年11月6日に解禁され、翌年3月20日まで続きます。特に初冬の11月中旬から12月にかけては、漁の開始とともに水揚げが本格化し、市場が最も活気に満ちるハイシーズンです。また、内子と外子をたっぷり抱えたメスのセイコガニ（香箱ガニ）は11月6日から12月末までの約2ヶ月間しか味わえない冬の超限定グルメ。11月・12月のあわら温泉は、オスとメスの両方のカニを同時に味わえる最も贅沢な季節となります。"
  },
  {
    "q": "越前がにの『黄色いタグ』にはどのような意味がありますか？",
    "a": "福井県内の漁港（三國港、越前港、敦賀港、小浜港）で水揚げされた正真正銘の越前がにには、その証として越前がにの脚にプラスチック製の『黄色いタグ』が取り付けられます。タグには水揚げされた港の名前や船名が刻印されており、厳しい品質基準を満たした本物のトップブランドである証明です。あわら温泉の格式ある旅館では、この黄色タグ付きの極上越前がにを仕入れ、タグが付いたまま目の前で茹で上げたり捌いたりして提供してくれます。"
  },
  {
    "q": "2024年の北陸新幹線延伸で、あわら温泉へのアクセスはどう変わりましたか？",
    "a": "2024年春の北陸新幹線金沢〜敦賀間延伸開業により、温泉街の玄関口である『芦原温泉駅（あわらおんせんえき）』に新幹線が直接停車するようになりました。東京駅からは乗り換えなしの直通新幹線『かがやき』『はくたか』で最速約2時間50分で到着します。また、関西・中京方面からも特急サンダーバードやしらさぎ号で敦賀駅へ向かい、新幹線に接続することで約2時間前後でスムーズにアクセス可能です。芦原温泉駅からは各旅館の無料送迎バスや路線バスで約10〜15分と非常に便利です。"
  },
  {
    "q": "あわら温泉の11月・12月の気候や雪は？車で行く際の注意点は？",
    "a": "11月上旬から中旬は東京や大阪よりやや肌寒い晩秋の気候で、薄手のコートやセーターが必要です。11月下旬になると北陸特有の『時雨（しぐれ）』の日が増え、みぞれや初雪が観測されることがあります。12月に入ると本格的な冬となり、雪が積もる日も出てきます。11月下旬以降にお車で訪れる場合は、北陸自動車道や一般道が積雪・路面凍結する恐れがあるため、必ずスタッドレスタイヤ（冬用タイヤ）の装着またはチェーンの携行を行ってください。"
  },
  {
    "q": "あわら温泉の特徴である『マイ源泉』とは何ですか？",
    "a": "多くの温泉街では自治体や組合が一括して源泉を管理し配湯していますが、あわら温泉は明治16年の開湯時より各旅館が敷地内に独自の井戸を掘削して温泉を引き当ててきました。温泉街全体で74本もの源泉井戸が存在し、旅館ごとに泉温、塩分濃度、微量ミネラル成分が微妙に異なります。そのため、あわら温泉の宿はそれぞれが独自の『マイ源泉』を持っており、宿を変えるたびに異なる泉触りや効能を体験できるのが最大の魅力です。"
  }
];

export default function AwaraWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-fukui-awara-onsen-echizen-crab-stay#article",
        "headline": "【11・12月あわら温泉の冬名湯と越前がに】関西の奥座敷・庭園露天風呂と黄色いタグ付き越前蟹＆若狭牛会席の宿5選",
        "description": "11月6日の越前がに解禁で歓喜に沸く福井の名湯「あわら温泉」。明治の開湯以来、各宿が独自源泉を所有する贅沢な湯巡りと、三國港直送の黄色タグ付き越前がにフルコース、極上若狭牛を堪能。庭園露天風呂が彩る初冬の極上温泉宿5選を徹底解説。",
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
          "@id": "https://croud-travel.pages.dev/winter-fukui-awara-onsen-echizen-crab-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-fukui-awara-onsen-echizen-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "あわら温泉の越前がにの解禁時期と最も美味しい時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "福井県の越前がに（オスのズワイガニ）の漁期は、例年11月6日に解禁され、翌年3月20日まで続きます。特に初冬の11月中旬から12月にかけては、漁の開始とともに水揚げが本格化し、市場が最も活気に満ちるハイシーズンです。また、内子と外子をたっぷり抱えたメスのセイコガニ（香箱ガニ）は11月6日から12月末までの約2ヶ月間しか味わえない冬の超限定グルメ。11月・12月のあわら温泉は、オスとメスの両方のカニを同時に味わえる最も贅沢な季節となります。"
            }
          },
          {
            "@type": "Question",
            "name": "越前がにの『黄色いタグ』にはどのような意味がありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "福井県内の漁港（三國港、越前港、敦賀港、小浜港）で水揚げされた正真正銘の越前がにには、その証として越前がにの脚にプラスチック製の『黄色いタグ』が取り付けられます。タグには水揚げされた港の名前や船名が刻印されており、厳しい品質基準を満たした本物のトップブランドである証明です。あわら温泉の格式ある旅館では、この黄色タグ付きの極上越前がにを仕入れ、タグが付いたまま目の前で茹で上げたり捌いたりして提供してくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "2024年の北陸新幹線延伸で、あわら温泉へのアクセスはどう変わりましたか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2024年春の北陸新幹線金沢〜敦賀間延伸開業により、温泉街の玄関口である『芦原温泉駅（あわらおんせんえき）』に新幹線が直接停車するようになりました。東京駅からは乗り換えなしの直通新幹線『かがやき』『はくたか』で最速約2時間50分で到着します。また、関西・中京方面からも特急サンダーバードやしらさぎ号で敦賀駅へ向かい、新幹線に接続することで約2時間前後でスムーズにアクセス可能です。芦原温泉駅からは各旅館の無料送迎バスや路線バスで約10〜15分と非常に便利です。"
            }
          },
          {
            "@type": "Question",
            "name": "あわら温泉の11月・12月の気候や雪は？車で行く際の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月上旬から中旬は東京や大阪よりやや肌寒い晩秋の気候で、薄手のコートやセーターが必要です。11月下旬になると北陸特有の『時雨（しぐれ）』の日が増え、みぞれや初雪が観測されることがあります。12月に入ると本格的な冬となり、雪が積もる日も出てきます。11月下旬以降にお車で訪れる場合は、北陸自動車道や一般道が積雪・路面凍結する恐れがあるため、必ずスタッドレスタイヤ（冬用タイヤ）の装着またはチェーンの携行を行ってください。"
            }
          },
          {
            "@type": "Question",
            "name": "あわら温泉の特徴である『マイ源泉』とは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "多くの温泉街では自治体や組合が一括して源泉を管理し配湯していますが、あわら温泉は明治16年の開湯時より各旅館が敷地内に独自の井戸を掘削して温泉を引き当ててきました。温泉街全体で74本もの源泉井戸が存在し、旅館ごとに泉温、塩分濃度、微量ミネラル成分が微妙に異なります。そのため、あわら温泉の宿はそれぞれが独自の『マイ源泉』を持っており、宿を変えるたびに異なる泉触りや効能を体験できるのが最大の魅力です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-fukui-awara-onsen-echizen-crab-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "北陸　あわら温泉　まつや千千",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84545%2F84545.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "あわら温泉　グランディア芳泉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16207%2F16207.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "越前あわら温泉　つるや",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84652%2F84652.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "北陸　福井　あわら温泉　清風荘（北陸最大級の庭園露天風呂の宿　清風荘）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19549%2F19549.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "越前あわら温泉　長谷川",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17657%2F17657.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "北陸　あわら温泉　まつや千千",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/84545/84545.jpg",
              rating: 4.62,
              reviews: 2019,
              price: "¥10,450〜",
              access: "■車：金津ＩＣより15分 ■ＪＲ：芦原温泉駅より送迎有（約10分）14時～18時（事前要予約）",
              special: "源泉大浴場・大露天風呂「千のこぼれ湯」北陸最大級スケール♪日本の宿の贅沢は、お風呂から始まります。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84545%2F84545.html",
              story: "北陸最大級の広さを誇る大浴場「千のこぼれ湯」を有し、あわら温泉を代表する名旅館として名高い「まつや千千」。自慢の大浴場には、木漏れ日を感じる開放的な大浴場、日本庭園に包まれた源泉露天風呂、つぼ湯、寝湯、ミストサウナなどが揃い、多彩な湯浴みを心ゆくまで楽しめます。11月から12月にかけては、宿の日本庭園に初冬の雪吊りが施され、風情ある北陸の初冬情緒を演出。館内には温泉たまご手作り体験コーナーや茶室があり、細やかなもてなしの心が旅人の心を温かく満たしてくれます。",
              roomTip: "露天風呂付き客室「時待ちの館」や、落ち着きある数寄屋造りの和洋室。庭園を眺めながらプライベートな源泉かけ流し温泉を満喫できるお部屋が人気です。",
              gourmetTip: "11月解禁の越前がにを贅沢に使った「越前かに会席」。三國港直送の茹でたて熱々の越前がに一杯付け、香ばしい焼きがに、甘みが際立つかに刺し、濃厚な若狭牛ステーキの共演を個室料亭で堪能できます。",
              highlights: [
                "北陸最大級の露天風呂「千のこぼれ湯」＆庭園の雪吊りと源泉つぼ湯・寝湯巡り",
                "あわら温泉特有の自家源泉から湧く塩化物泉で湯冷め知らずのポカポカ温浴体験",
                "三國港直送の黄色タグ付き越前がに姿茹で＆焼きがに・かに刺し・若狭牛ステーキ会席"
              ]
            },
            {
              id: 2,
              name: "あわら温泉　グランディア芳泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16207/16207.jpg",
              rating: 4.63,
              reviews: 2537,
              price: "¥20,240〜",
              access: "【車】北陸自動車道金津ICより約15分【電車】JR北陸本線芦原温泉駅より車で約10分【航空機】小松空港より車で約50分",
              special: "ラウンジ飲料は無料！5階天上のSPAは眺望随一★全33室庭園露天風呂付客室や和洋室タイプなど色々♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16207%2F16207.html",
              story: "広大な敷地に美しい日本庭園を抱き、現代数寄屋造りの風格ある空間で極上の非日常を演出する老舗旅館「グランディア芳泉」。宿の象徴である「天上のSPASHO-SU-TEI」では、庭園を見晴らす露天風呂や寝湯、サウナが完備され、あわら特有の塩化物泉に浸かりながら初冬の澄んだ空気を満喫できます。回廊を彩る生け花や間接照明の温もりが心地よく、皇族や各界の著名人にも愛されてきた格式とおもてなしの心が隅々まで行き届いています。",
              roomTip: "全室に源泉露天風呂を備えた別邸「個止恵座（ことえざ）」や「ゆとろぎ亭」。初冬の日本庭園の静寂に抱かれながら、誰にも邪魔されない至高の時間を過ごせます。",
              gourmetTip: "職人の技が光る創作越前懐石。冬の王様である越前がにの炭火焼きや甲羅みそ焼き、三國港水揚げの旬魚お造り、A5ランク若狭牛の陶板焼きなど、福井の贅を尽くした逸品が並びます。",
              highlights: [
                "展望SPA「月光の湯」＆全室源泉露天風呂付き別邸個止恵座の上質なプライベート空間",
                "皇族や著名人も逗留した格式ある日本庭園と回廊を彩る美しい生け花・和モダン空間",
                "越前がに炭火焼き・甲羅みそ焼き＆A5若狭牛陶板焼きと旬魚お造りの創作懐石"
              ]
            },
            {
              id: 3,
              name: "越前あわら温泉　つるや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/84652/84652.jpg",
              rating: 4.86,
              reviews: 387,
              price: "¥11,000〜",
              access: "JR芦原温泉駅より車で約10分（送迎有・要予約）/北陸自動車道金津ICより車で約15分/小松空港より車で約60分",
              special: "明治17年創業、あわら温泉と共に歩む－。洗練された大人の湯宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84652%2F84652.html",
              story: "明治十七年の創業以来、文人墨客や皇族に愛され続けてきたあわら温泉随一の老舗「つるや」。全二二室の木造純和風旅館で、敷地内に自家源泉を3本所有し、館内の全てのお風呂（大浴場・露天風呂・客室風呂）に源泉100%かけ流しの新鮮な名湯が贅沢に注ぎ込まれています。湯船から立ち上るほのかな硫黄と鉱物の香りが旅情をかき立て、肌にしっとりと吸い付くような柔らかな湯触りはまさに本物の温泉力。静けさに包まれた中庭と、数寄屋大工の匠の技が息づく佇まいは、大人の隠れ家温泉として最高の評価を得ています。",
              roomTip: "源泉かけ流しの檜風呂や陶器風呂を備えた数寄屋造り客室。障子越しに差し込む柔らかな光と木の香りに包まれ、歴史ある静寂を味わえます。",
              gourmetTip: "料理長が一品一品心を込めて仕立てる本格茶懐石。皇室献上級の三國港産越前がにの茹でがに、活がにの花咲く刺身、甘辛い特製出汁でいただく若狭牛のしゃぶしゃぶなど、素材本来の純粋な旨味を余すところなく引き出します。",
              highlights: [
                "明治17年創業の老舗純和風旅館＆敷地内自家源泉3本から引く100%源泉かけ流しの名湯",
                "全22室の落ち着いた隠れ宿＆数寄屋大工の技が息づく客室と歴史ある静寂",
                "皇室献上級の三國港越前がに茹でがに＆活がに刺し・若狭牛すき焼きの本格茶懐石"
              ]
            },
            {
              id: 4,
              name: "北陸　福井　あわら温泉　清風荘（北陸最大級の庭園露天風呂の宿　清風荘）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19549/19549.jpg",
              rating: 4.60,
              reviews: 3789,
              price: "¥19,541〜",
              access: "ＪＲ：芦原温泉駅より15分(迎えバス有り・要予約)/お車：北陸道金津ＩＣより20分",
              special: "北陸最大級の庭園露天風呂をはじめ多彩な浴槽、旬の地元食材や海鮮を劇場型ビュッフェや会席料理で堪能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19549%2F19549.html",
              story: "北陸最大級の露天風呂と多彩な湯船が自慢の「清風荘」。十万個の奇石を配した広大な庭園露天風呂「八連の湯」には、陶器風呂、歩行湯、寝湯、ミストサウナなど個性豊かな風呂が点在し、まさに温泉のテーマパークのような贅沢さを誇ります。あわら温泉特有の保温効果に優れた塩化物泉で身体の芯から温まり、湯上がり後もポカポカとした温もりが長く持続します。ファミリーからカップル、三世代旅行まで幅広い支持を集める北陸屈指の大型名宿です。",
              roomTip: "庭園を望む和モダン客室や、自家源泉を引いた展望半露天風呂付き客室。初冬の庭園ライトアップを眺めながら優雅な夜を過ごせます。",
              gourmetTip: "冬限定の豪華バイキングまたは個室会席。目の前で調理される越前がに料理、揚げたての天ぷら、福井県産ブランド若狭牛の鉄板焼き、郷土名物の越前おろしそばなど、圧倒的な品数と鮮度を誇ります。",
              highlights: [
                "10万個の奇石を配した庭園露天風呂「八連の湯」＆多彩な湯船で愉しむあわら名湯三昧",
                "ファミリーからカップルまで楽しめる充実の館内施設＆庭園を望む贅沢な和洋室",
                "越前がに料理＆若狭牛鉄板焼き・揚げたて天ぷら・越前おろしそばの豪華バイキング"
              ]
            },
            {
              id: 5,
              name: "越前あわら温泉　長谷川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17657/17657.jpg",
              rating: 4.39,
              reviews: 603,
              price: "¥6,600〜",
              access: "北陸自動車道金津ＩＣより車15分 　ＪＲでお越しの場合　芦原温泉駅より送迎有（約10分）15時～18時",
              special: "令和4年3月　和洋室　リニューアル！　全館Wi-Fi完備！　レトロでモダンな刻を過ごせる宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17657%2F17657.html",
              story: "アットホームな温もりと、細部まで手入れの行き届いた数寄屋造りの佇まいで根強いファンを持つ「越前あわら温泉 長谷川」。あわらの名湯を贅沢に注ぐ大浴場と庭園露天風呂では、四季折々の風情を愛でながら静かな湯浴みが楽しめます。気さくで温かい仲居さんのおもてなしと、女将の心配りが心地よく、気取らずに贅沢な北陸の初冬旅を満喫できる隠れた名宿です。",
              roomTip: "坪庭を望む落ち着いた純和室。初冬の冷気を感じながら温かいお茶と温泉まんじゅうをいただき、日常の喧騒を忘れられる安らぎの空間。",
              gourmetTip: "地元の漁港から毎朝仕入れる新鮮な魚介を主役にした手作り会席。冬の越前がに小鍋や焼きがに、福井名産の甘エビ、身の引き締まった寒ヒラメのお造り、柔らかな福井牛の陶板焼きをリーズナブルに堪能できます。",
              highlights: [
                "数寄屋造りの温もりと純和風庭園露天風呂＆女将の真心が伝わるアットホームなおもてなし",
                "三國港直送の新鮮な海の幸と旬の冬の味覚をリーズナブルに味わうアットホームな宿",
                "越前がに小鍋＆旬の地魚刺身盛り合わせ・若狭牛陶板焼きと福井地酒のペアリング"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="あわら温泉の日本庭園露天風呂と黄色いタグ付き越前がに・冬の名湯宿"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-800/50">
            <Eye className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 越前がに解禁と関西の奥座敷あわら温泉特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月あわら温泉の冬名湯と越前がに】<br className="hidden sm:inline" />
            関西の奥座敷・庭園露天風呂と黄色いタグ付き越前蟹＆若狭牛会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月6日の越前がに漁解禁とともに冬の黄金期を迎える福井の奥座敷「あわら温泉」。74本もの独自源泉が注ぐ庭園露天風呂で温まり、三國港直送の黄色いタグ付き極上越前がにと若狭牛を味わい尽くす至福の冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 福井県あわら市温泉</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月あわら温泉】庭園露天風呂と黄色いタグ付き越前蟹！名宿5選","item":"https://croud-travel.pages.dev/winter-fukui-awara-onsen-echizen-crab-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Awara Onsen Heritage & Echizen Crab</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                田園の井戸から湧き出た名湯と、黄色いタグが輝く冬の味覚王者
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            福井県の北端、坂井平野の穏やかな田園地帯に佇む「あわら温泉」。明治16年（1883年）、農夫が灌漑用の井戸を掘っていたところ、約80度の良質な温泉がこんこんと湧き出したことからその歴史が始まりました。京都や大阪の文化人、文豪たちが足繁く通い「関西の奥座敷」として愛されてきたこの地は、落ち着いた風情と細やかなおもてなしの精神が今も息づいています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            あわら温泉の最大の特徴は、街全体で源泉を一元管理するのではなく、各旅館が敷地内に独自の井戸を所有している点にあります。合計74本もの源泉井戸があり、宿ごとに泉温やミネラル含有量が微妙に異なる「マイ源泉」を誇ります。主たる泉質は含塩化土類食塩泉（ナトリウム・カルシウム-塩化物泉）。塩分が肌に保護膜を形成し、湯上がり後も熱を逃がさず身体の芯までポカポカが持続するため、冬の冷え込みが厳しい北陸の湯治に最適です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして11月から12月にかけて、あわら温泉は一年で最も華やぐ季節を迎えます。毎年11月6日に解禁される「越前がに」。福井県内の漁港で水揚げされた本物のオスのズワイガニには、ブランドの誇りを証明する「黄色いタグ」が誇らしげに付けられます。近海で獲れたての越前がにを宿の職人が絶妙な塩梅で茹で上げ、甲羅みそ焼きやかに入り刺身として供される味覚は、まさに冬の日本海の頂点。さらに福井が誇る銘柄黒毛和牛「若狭牛」の芳醇な旨味も加わり、贅沢を極めた北陸の宴が待っています。
          </p>
          
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                11月・12月あわら温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                11月6日越前がに漁解禁・三國港直送の黄色タグ付き姿茹で蟹・74本の独自源泉を巡る庭園露天風呂・とろけるA5若狭牛・北陸新幹線直通の快適アクセス
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#spring-feature" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>1. あわら温泉の魅力：74本の独自源泉と「関西の奥座敷」の風情</span>
            </a>
            <a href="#echizen-crab-guide" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>2. 11月6日解禁！黄色いタグ付き「越前がに」と冬の味覚</span>
            </a>
            <a href="#shinkansen-access" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>3. 北陸新幹線延伸で東京・関西からさらに身近になった名湯</span>
            </a>
            <a href="#hotels" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたいあわら温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>5. 福井の冬グルメ：越前がにフルコース＆極上若狭牛</span>
            </a>
            <a href="#itinerary" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 あわら温泉〜東尋坊・三國港 王道モデルコース</span>
            </a>
            <a href="#faq" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬の気候・服装ガイド</span>
            </a>
          </nav>
        </section>

        {/* Section 1: Spring Feature */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Natural Hot Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                宿ごとに異なる湯触りを楽しむ「マイ源泉」の贅沢
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            あわら温泉に足を踏み入れると、数寄屋造りの格調高い老舗旅館や、広大な日本庭園を抱える名宿が建ち並びます。多くの温泉地では集中管理された温泉が一律に配湯されますが、あわら温泉は源泉井戸の数が全国的にも極めて多く、現在も74本もの井戸が稼働しています。それぞれの宿が自らの敷地内で地下深くから汲み上げるため、湯温は33度から60度超まで幅広く、塩分やカルシウム、メタケイ酸の含有バランスも宿ごとに個性豊かです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            主な泉質であるナトリウム・カルシウム-塩化物泉は、無色透明でありながら湯に浸かると微かな塩分と鉱物の香りが漂います。塩分が汗の蒸発を防ぐベールとなって肌を覆うため、入浴中はもちろんのこと、湯から上がった後も手足の先まで温もりが持続します。初冬の冷たい北風が吹き抜ける日本庭園の露天風呂に浸かりながら、雪見や紅葉の名残を愛でるひとときは、日頃の疲労とストレスを根底から解きほぐしてくれる極上の時間です。
          </p>
        </section>

        {/* Section 2: Echizen Crab Guide */}
        <section id="echizen-crab-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Delicacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月6日解禁！黄色いタグ付き越前がにの真髄
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            冬の福井を代表する味覚の頂点「越前がに」。日本海の荒波と豊かな海底プランクトンに育まれたズワイガニは、肉厚な身の甘みと濃厚なカニ味噌が格別です。福井県内の漁港（三國港、越前港など）で水揚げされた正真正銘の越前がにには、その証として脚に「黄色いタグ」が結ばれます。皇室へも毎年献上される唯一のブランド蟹として、その名声は全国に鳴り響いています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">茹でがに（姿茹で）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                絶妙な塩加減の大釜で茹で上げた逸品。ホクホクの太い身と、甲羅にたっぷりと詰まった濃厚なカニ味噌のハーモニーは一度食べたら忘れられません。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">焼きがに＆甲羅焼き</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                炭火で香ばしく炙ることで水分が飛び、カニの旨味と甘みが凝縮。甲羅酒を注いで香ばしさを味わう大人の至福体験。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">セイコガニ（香箱ガニ）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                メスのズワイガニで11・12月限定の味覚。内子の濃厚なコクと外子のプチプチとした食感がたまらない冬の絶品。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Shinkansen Access */}
        <section id="shinkansen-access" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Enhanced Access</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                北陸新幹線「芦原温泉駅」直通で関東・関西からも快適旅
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            2024年春の北陸新幹線延伸開業によって、あわら温泉への旅情と利便性は飛躍的に向上しました。東京駅から最速の新幹線「かがやき」を利用すれば、乗り換えなしで「芦原温泉駅」まで約2時間50分。関西方面（大阪・京都）からも特急サンダーバードと北陸新幹線を敦賀駅で接続し、約1時間50分〜2時間程度で到着可能です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            芦原温泉駅からは各主要旅館の無料送迎バスが運行されており、新幹線を降りてから約10〜15分で宿の玄関へ。冬場の北陸は雪や悪天候が気になる季節ですが、新幹線を利用すればダイヤが乱れにくく、雪道運転の不安もなく快適に温泉旅行を満喫できます。
          </p>
        </section>

        {/* Hotel List Section */}
        <section id="hotels" className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Rakuten Travel Official API Verified</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11月・12月に泊まりたいあわら温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。越前がに会席と庭園露天風呂で高評価を獲得している宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-xs font-bold">
                      厳選第 {hotel.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/50">
                          {hotel.special}
                        </span>
                        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-xs text-stone-400 font-normal">({hotel.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-600">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-stone-800 whitespace-nowrap">客室の魅力:</span>
                          <span>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-stone-800 whitespace-nowrap">冬の美食:</span>
                          <span>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="bg-stone-50 rounded-xl p-3 space-y-1.5 border border-stone-100">
                        <span className="text-[11px] font-bold text-stone-700 block">宿の注目ポイント</span>
                        <ul className="space-y-1 text-xs text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-extrabold text-stone-900">{hotel.price}</span>
                        <span className="text-[11px] text-stone-500 ml-1">（2名1室利用時）</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md transition-all duration-200 group"
                      >
                        <span>プラン一覧・空室確認</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Gourmet */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Fukui Local Flavors</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                あわら温泉で堪能する冬の二大味覚：越前がに＆若狭牛
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            越前がにと並んで冬のあわら温泉で絶対に味わいたいのが、福井県のブランド黒毛和牛「若狭牛（わかさぎゅう）」です。明治時代から受け継がれる伝統的な血統管理と、豊かな自然環境、清らかな水で丹精込めて育てられた若狭牛は、きめ細やかなサシ（霜降り）ととろけるような舌触り、上品な脂の甘みが特徴です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            多くの名旅館では、贅沢にも越前がにと若狭牛をひとつの会席コースで味わえる「冬の二大味覚プラン」を用意しています。熱々の越前がにの茹でたてをほおばり、続く陶板焼きや網焼きで芳醇な若狭牛ステーキを地酒とともに味わうディナーは、まさに一生記憶に残る贅沢な夜を約束してくれます。
          </p>
        </section>

        {/* Section 6: Itinerary */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Suggested Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 あわら温泉〜東尋坊・三國港 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">【1日目】新幹線で芦原温泉へ〜東尋坊の冬波と名湯</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                13:00 北陸新幹線「芦原温泉駅」到着 → バスで名勝「東尋坊」へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                国の天然記念物・東尋坊の柱状節理の断崖絶壁を見学。冬の日本海が打ち寄せる迫力ある白波を鑑賞。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:30 あわら温泉の名宿にチェックイン → 庭園露天風呂で湯浴み
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                自家源泉の塩化物泉に浸かり、初冬の澄んだ空気と庭園の雪吊りを眺めながらゆったり温まる。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 越前がにフルコース＆若狭牛の豪華ディナー
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                黄色いタグ付き越前がにの姿茹で、甲羅みそ焼き、若狭牛ステーキを福井の地酒「黒龍」「梵」とともに堪能。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】あわら湯のまち散策〜三國湊レトロ通り</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂でリフレッシュ → 郷土料理朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                越前がにの出汁が効いた味噌汁や福井県産コシヒカリ、焼き魚の朝食で一日をスタート。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:00 あわら湯のまち駅「芦湯（総檜足湯）」＆三國湊レトロ通り散策
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                北前船で栄えた豪商の町・三國湊の格子戸が連なる風情ある町並みを散策し、お土産に越前がにや羽二重餅を購入。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-amber-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北陸・近畿の冬・雪見・カニ温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              11月・12月ならではの旬の味覚や雪景色を堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">石川・金沢</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">金沢 兼六園の雪吊りと加能ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">石川・加賀山代</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">加賀山代温泉 魯山人ゆかりの名湯と極上カニ尽くしの宿</h3>
            </Link>
            <Link 
              href="/winter-toyama-unazuki-onsen-kurobe-snow-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">富山・宇奈月</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">宇奈月温泉 黒部峡谷雪景色と富山湾寒ブリ・紅ズワイガニの宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">兵庫・城崎</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">城崎温泉 七つの外湯巡りと本場松葉ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">京都・天橋立</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">天橋立 日本三景の冬景色と幻の間人ガニ・松葉ガニの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-fukui-awara-onsen-echizen-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
