import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月栃木・塩原温泉の初冬箒川雪見露天と名湯十一湯巡り】極上とちぎ和牛会席＆旬の塩原高原大根を味わう老舗宿5選",
  description: "11月から12月にかけて、栃木県北部の那須連山山麓に広がる名湯「塩原温泉郷」は、箒川（ほうきがわ）沿いの渓谷が初雪に彩られ、静寂と白い湯けむりが立ち込める情緒豊かな初冬を迎えます。千二百年以上の歴史を誇る「塩原十一湯」は、乳白色の硫黄泉から炭酸水素塩泉、弱食塩泉まで多彩な名湯が揃い、雪見露天風呂の風情は格別。さらに初冬に寒暖差で甘みが極限まで凝縮する名物「塩原高原大根」や、とろける霜降り「とちぎ和牛」のすき焼き・ステーキ会席を堪能する至極の老舗旅館5選を詳しく解説します。",
  keywords: '塩原温泉 宿泊, 塩原温泉 老舗旅館, 塩原温泉 雪見露天, とちぎ和牛 すき焼き, 塩原大根 11月 12月, 湯守田中屋, 湯の花荘, 明賀屋本館, 四季味亭ふじや, 光雲荘',
  alternates: {
    canonical: 'https://croud-travel.com/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay'
  },
  openGraph: {
    title: "【11・12月栃木・塩原温泉の初冬箒川雪見露天と名湯十一湯巡り】極上とちぎ和牛会席＆旬の塩原高原大根を味わう老舗宿5選",
    description: "11月から12月にかけて、栃木県北部の那須連山山麓に広がる名湯「塩原温泉郷」は、箒川（ほうきがわ）沿いの渓谷が初雪に彩られ、静寂と白い湯けむりが立ち込める情緒豊かな初冬を迎えます。千二百年以上の歴史を誇る「塩原十一湯」は、乳白色の硫黄泉から炭酸水素塩泉、弱食塩泉まで多彩な名湯が揃い、雪見露天風呂の風情は格別。さらに初冬に寒暖差で甘みが極限まで凝縮する名物「塩原高原大根」や、とろける霜降り「とちぎ和牛」のすき焼き・ステーキ会席を堪能する至極の老舗旅館5選を詳しく解説します。",
    url: 'https://croud-travel.com/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の箒川渓谷と塩原温泉の雪見露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "塩原温泉の「塩原十一湯」とは何ですか？泉質や特徴について教えてください。",
    "a": "塩原温泉郷は開湯から約1200年の歴史を持ち、箒川沿いの約6キロメートルにわたって連なる11ヶ所の温泉地（大網、福渡、塩釜、塩の湯、畑下、門前、古町、中塩原、上塩原、新湯、元湯）の総称です。最大の魅力はその多様性で、白濁した濃厚な硫黄泉から、肌を滑らかにする炭酸水素塩泉、保温効果抜群の弱食塩泉、透明度の高い単純温泉まで、6系統以上もの異なる泉質が点在しています。「温泉の博物館」とも称され、宿ごとに源泉の色や肌触り、効能が異なるため、何度訪れても新しい発見があります。"
  },
  {
    "q": "11月・12月の塩原温泉の気候や気温、雪の降り始め時期は？",
    "a": "塩原温泉は標高約500〜900メートルの山間に位置するため、東京や宇都宮などの平野部よりも気温が5〜8℃ほど低くなります。11月の平均気温は日中で10〜14℃前後、朝晩は2〜5℃程度まで冷え込みます。11月下旬になると箒川沿いや山頂付近で初雪が観測され始めます。12月に入ると最高気温は5〜8℃、最低気温は氷点下（-2〜-5℃）まで下がり、本格的な雪見露天風呂のシーズンを迎えます。お出かけの際は、ダウンジャケットや裏起毛の防寒着、マフラー、手袋をご用意ください。車でお越しの場合は11月下旬以降スタッドレスタイヤの装着が必須です。"
  },
  {
    "q": "11月・12月の塩原温泉で味わえる「塩原高原大根」とは何ですか？",
    "a": "塩原高原大根は、標高の高い塩原温泉の高原地帯特有の激しい昼夜の寒暖差と火山灰土壌で育まれるブランド大根です。特に11月から12月上旬にかけて収穫される冬大根は、寒さから身を守るために糖分をたっぷりと蓄え、「梨のように甘くみずみずしい」と絶賛されます。筋が一切なく、生で食べても辛みがなく驚くほどフルーティー。温泉宿では、薄くスライスして出汁にくぐらせる「大根しゃぶしゃぶ」、じっくり出汁を煮含めた「風呂吹き大根」、大根おろしを雪に見立てた「みぞれ鍋」など、多彩な調理法で振る舞われます。"
  },
  {
    "q": "栃木の最高峰ブランド「とちぎ和牛」の魅力とは？",
    "a": "とちぎ和牛は、栃木県内の指定生産者が丹精込めて育て上げた黒毛和牛のうち、肉質等級が上位（A4・A5ランク）のものだけに許される全国屈指の銘柄牛です。自然豊かな環境と清らかな伏流水で育ち、きめ細やかなサシ（霜降り）が肉全体に均一に入っているのが特徴。融点が低いため、口に入れた瞬間にとろけるような柔らかさと、上品で芳醇な脂の甘みが広がります。塩原温泉の宿では、鉄板ステーキやすき焼き、陶板炙り焼きなど、肉本来の旨味を最大限に引き出す調理で贅沢に提供されます。"
  },
  {
    "q": "東京方面から塩原温泉へのアクセス方法・直通バスについて教えてください。",
    "a": "新幹線を利用する場合は、JR東北新幹線「那須塩原駅」西口よりJRバス関東（塩原温泉行き）に乗車し、約50〜60分で塩原温泉バスターミナルに到着します。また、高速バスを利用する場合は、バスタ新宿や東京駅八重洲口から塩原温泉直通の高速バス「もみじ号」が毎日運行されており、乗り換えなしで約3時間20分でアクセスできます。車の場合は、東北自動車道「西那須野塩原IC」より国道400号（塩原バレーライン）を経由して約20〜30分とアクセス良好です。"
  }
];

export default function TochigiShiobaraWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay"
        },
        "headline": "【11・12月栃木・塩原温泉の初冬箒川雪見露天と名湯十一湯巡り】極上とちぎ和牛会席＆旬の塩原高原大根を味わう老舗宿5選",
        "description": "11月から12月にかけて、栃木県北部の那須連山山麓に広がる名湯「塩原温泉郷」は、箒川（ほうきがわ）沿いの渓谷が初雪に彩られ、静寂と白い湯けむりが立ち込める情緒豊かな初冬を迎えます。千二百年以上の歴史を誇る「塩原十一湯」は、乳白色の硫黄泉から炭酸水素塩泉、弱食塩泉まで多彩な名湯が揃い、雪見露天風呂の風情は格別。さらに初冬に寒暖差で甘みが極限まで凝縮する名物「塩原高原大根」や、とろける霜降り「とちぎ和牛」のすき焼き・ステーキ会席を堪能する至極の老舗旅館5選を詳しく解説します。",
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
          "name": "Croud Travel 関東・歴史名湯取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay#breadcrumb",
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
            "name": "栃木・塩原温泉 初冬箒川雪見露天と名湯十一湯の宿",
            "item": "https://croud-travel.com/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay#faq",
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
              name: "塩原温泉　湯守田中屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31902/31902.jpg",
              rating: 4.36,
              reviews: 512,
              price: "¥12,100〜",
              access: "東北新幹線 那須塩原駅より送迎（事前予約制／有料1,100円）あり　西那須野塩原ICより車約15分",
              special: "創業明治17年。地元食材を豊富に使用した炉端料理と源泉掛け流し天然温泉100％が自慢の一軒宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31902%2F31902.html",
              story: "箒川の深い渓谷美を間近に感じられる渓谷美の特等席に位置し、創業から代々温泉を守り続けてきた歴史ある老舗「塩原温泉 湯守田中屋」。この宿の代名詞は、渓谷の断崖に造られた約300段の階段を下りた先に広がる名物「野天風呂」です。箒川の清流のせせらぎが耳元に響き、初冬の澄んだ冷気の中で川岸から立ち上る湯けむりに包まれる湯浴みは、まさに本物の秘湯体験。内湯の展望風呂からも四季折々の渓谷美が一望できます。料理は名物の「炉端料理」。囲炉裏の炭火でじっくり焼き上げる香ばしい箒川の岩魚の塩焼きや、特選とちぎ和牛の炙り焼き、高原野菜の炭火焼きなど、素朴でありながら極上の滋味あふれる里山のごちそうに心も身体も温まります。",
              roomTip: "箒川の渓谷を見下ろす渓流側客室または温泉付き特別室。窓を開ければ川のせせらぎと初冬の雪景色が広がり、日常の喧騒を完全に忘れさせてくれます。",
              gourmetTip: "「名物・炉端炭火焼き会席」。囲炉裏で焼き立てを味わう岩魚の塩焼き、甘みたっぷりの塩原大根の風呂吹き、とちぎ和牛サーロインの炭火炙り、とちぎ軍鶏の鍋仕立て。",
              highlights: [
                "箒川渓谷に下りる名物野天風呂＆囲炉裏で焼き上げる岩魚塩焼きと炉端料理",
                "初冬の冷気と川のせせらぎに包まれる秘境感あふれる野趣豊かな湯浴み体験",
                "炭火を囲んで語らう温かな夕食時間＆自然の地形を活かした絶景のロケーション"
              ]
            },
            {
              id: 2,
              name: "塩原温泉　割烹旅館　湯の花荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10893/10893.jpg",
              rating: 4.85,
              reviews: 221,
              price: "¥37,400〜",
              access: "東北自動車道　西那須野塩原ＩＣよりＲ４００で２０分。那須塩原駅よりＪＲバスにて50分、塩釜温泉下車。",
              special: "客室は全て渓流に面しており、源泉100％掛け流しの温泉と毎月変わりの季節料理をご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10893%2F10893.html",
              story: "箒川の静かな渓流沿いにひっそりと佇み、全室が箒川に面した贅沢な造りで美食家たちに愛される高級割烹旅館「塩原温泉 割烹旅館 湯の花荘」。館内は数寄屋造りの洗練された和の美学で統一され、大人のプライベートステイにふさわしい落ち着いた空間が広がります。自家源泉から湧き出る弱食塩泉は、大浴場や露天風呂、客室露天風呂に完全掛け流しで注がれ、肌にしっとりと馴染む上質な泉質。湯の花荘最大の魅力は、割烹旅館の名に恥じない料理長渾身の月替わり日本料理。11月・12月には、とろけるような極上とちぎ和牛のヒレ肉やロース肉、寒さで甘さを増した塩原高原大根のしゃぶしゃぶ、那須の朝採れ冬野菜など、器や盛り付けの一品一品に芸術的な美意識が光る美食を個室料亭で堪能できます。",
              roomTip: "箒川の清流を眼下に望む露天風呂付き離れ客室または和洋特別室。テラスの湯船に浸かりながら、初冬の静寂な渓谷美と星空を心ゆくまで独り占め。",
              gourmetTip: "「料理長特選・冬の極み割烹会席」。霜降り最高級とちぎ和牛の石焼きステーキ、塩原高原大根と寒鰤の粕汁仕立て、プレミアムヤシオマスの昆布締め、季節の土鍋ご飯。",
              highlights: [
                "全室箒川リバービューの高級割烹旅館＆料理長厳選のとちぎ和牛と美肌の名湯",
                "芸術品のような月替わり割烹会席＆旬の塩原高原大根とプレミアムヤシオマス",
                "プライベート露天風呂付き離れで過ごす贅沢な時間＆細やかな最高峰のおもてなし"
              ]
            },
            {
              id: 3,
              name: "塩原温泉　明賀屋（みょうがや）本館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20095/20095.jpg",
              rating: 3.88,
              reviews: 338,
              price: "¥9,350〜",
              access: "東北新幹線　那須塩原駅／東北自動車道　西那須野塩原ＩＣより国道４００号",
              special: "自然と歴史の中で、ごゆっくりとお過ごし頂けます。また、川岸露天風呂や貸切露天風呂で心も体も癒されます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20095%2F20095.html",
              story: "創業寛文14年（1674年）、350年以上の歴史を誇り、塩原温泉郷・塩の湯温泉を代表する名門秘湯宿「塩原温泉 明賀屋（みょうがや）本館」。塩原の名湯史にその名を轟かせるのが、鹿股川の渓流沿いに自然湧出する名物「川岸露天風呂」です。本館から約80段の階段を下りた川底すれすれの場所に岩を組んで造られた湯船は、手を伸ばせば清流に触れられるほどの臨場感。自然湧出の源泉がそのまま注がれる混浴露天（女性専用時間あり）や女性専用露天があり、白濁湯や珍しい「墨湯（黒い湯）」など複数の源泉掛け流しを楽しめます。夕食は地元の旬素材を大切にした山海会席料理。栃木の清流で育った川魚料理や滋味あふれるとちぎ和牛の陶板焼きなど、歴史ある湯治宿ならではの温かなもてなしが心に沁みます。",
              roomTip: "鹿股川の清流を望む川側和室。創業300余年の歴史ある木造建築の情緒を感じながら、川のせせらぎを子守唄に静かな夜を過ごせます。",
              gourmetTip: "「塩の湯名物・冬の山川会席」。とちぎ和牛の陶板焼き、名物川魚の塩焼きと山菜天ぷら、冬大根と根菜の郷土鍋、栃木県産コシヒカリの炊きたてご飯。",
              highlights: [
                "創業350年超の秘湯老舗＆川底すれすれに湧く名物「川岸露天風呂」の混浴野天と墨湯",
                "自然湧出の豊富な源泉＆歴史ロマン漂う木造の風情と素朴な山川会席",
                "全国の温泉ファンが憧れる本物の源泉掛け流し＆心安らぐ静かな川沿いステイ"
              ]
            },
            {
              id: 4,
              name: "塩原温泉　四季味亭ふじや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68477/68477.jpg",
              rating: 4.55,
              reviews: 658,
              price: "¥24,600〜",
              access: "上三依塩原温泉口駅よりバスで１０分／那須塩原駅よりバスで６０分",
              special: "【リピーターが足繁く通う美食宿】5つ星のお食事が魅力■楽天トラベルアワード2014受賞宿■",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68477%2F68477.html",
              story: "塩原温泉の奥座敷、塩の湯の閑静な高台に佇み、1日わずか6組のお客様のためだけに最上のおもてなしを提供する隠れ家美食旅館「塩原温泉 四季味亭ふじや」。館内は全館畳敷きの温もりあふれる空間で、落ち着いた大人の寛ぎを演出しています。自家源泉から引く天然温泉は、pH8.2の美肌の湯として知られる炭酸水素塩泉で、貸切露天風呂や大浴場で贅沢に掛け流されています。ふじやが全国の旅人を魅了してやまない理由は、館主兼料理長が腕を振るう「幻の山海炭火焼き料理」。全国各地の厳選高級食材と栃木の地場野菜を巧みに融合させ、11月・12月には塩原大根のスープ仕立て、最高ランクとちぎ和牛A5フィレステーキ、炭火で香ばしく焼き上げる旬の海鮮など、驚きと感動に満ちた創作料理の数々が振る舞われます。",
              roomTip: "源泉掛け流しの半露天風呂付きモダン和洋室。プライベートな空間で誰にも気兼ねなく名湯に浸かり、初冬の澄んだ山並みを眺める至高の休日。",
              gourmetTip: "「幻の厳選炭火焼き・冬の贅沢創作会席」。A5ランクとちぎ和牛の極上ステーキ、冬大根の風呂吹き雲丹のせ、伊勢海老の鬼殻焼き、季節の特製釜飯。",
              highlights: [
                "1日わずか6組限定の大人の隠れ家＆幻の炭火焼き料理と極上A5とちぎ和牛ステーキ",
                "全館畳敷きの心地よい和モダン空間＆美肌成分たっぷりの貸切露天風呂",
                "記念日や美食旅行に選ばれる高いリピート率＆一組一組に寄り添う丁寧な接客"
              ]
            },
            {
              id: 5,
              name: "塩原温泉　美肌の湯と寛ぎの宿　光雲荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108911/108911.jpg",
              rating: 4.53,
              reviews: 536,
              price: "¥16,500〜",
              access: "新幹線　那須塩原駅からＪＲバス乗車し約６０分、「畑下」下車し徒歩8分",
              special: "保湿成分たっぷりの源泉かけ流し、美肌の湯が自慢です。名物・石焼き樽と温かいサービスも。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108911%2F108911.html",
              story: "開湯の地として栄えた門前地区に位置し、毎分200リットル以上という驚異的な湯量を誇る自家源泉を贅沢に掛け流す老舗名旅館「塩原温泉 美肌の湯と寛ぎの宿 光雲荘（こううんそう）」。広々とした大浴場や開放的な庭園大露天風呂は、加水・加温一切なしの源泉100%掛け流し。豊富なメタケイ酸を含む美肌の湯は、湯上がりに肌が吸い付くように滑らかになると女性客からも大絶賛されています。光雲荘の名物といえば、塩原唯一の郷土名物「石焼温泉料理（火山灰料理）」。熱々に熱した約300℃の天然溶岩石を桶の中に入れ、目の前で豪快に沸騰させて仕上げる熱々の名物スープは圧巻の迫力です。さらに霜降りとちぎ和牛のすき焼きや旬の塩原高原大根料理など、出来立ての滋味を五感で楽しめます。",
              roomTip: "庭園を望む落ち着いた数寄屋風和室または温泉半露天付き客室。豊富な湯量の温泉を堪能したあと、畳の香る部屋で手足を伸ばしてのんびりと寛げます。",
              gourmetTip: "「光雲荘名物・石焼温泉料理ととちぎ和牛会席」。目の前で沸き立つ熱々石焼スープ、とちぎ和牛のすき焼き小鍋、塩原高原大根の含め煮、手打ち蕎麦。",
              highlights: [
                "毎分200L超の自家源泉100%掛け流し＆豪快に沸き立つ名物「石焼温泉料理」ととちぎ牛",
                "開放感あふれる庭園大露天風呂＆冬の乾燥肌をしっとりと潤すメタケイ酸の美肌湯",
                "塩原温泉街の中心に位置し観光の拠点に便利＆出来立て熱々の名物料理"
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
          alt="初冬の箒川渓谷と塩原温泉の雪見露天"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold">
            <Mountain className="w-4 h-4" />
            11月・12月 箒川雪見露天＆名物塩原大根特集｜栃木・塩原温泉郷
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬箒川雪見露天と名湯十一湯巡り<br className="hidden sm:inline" />
            極上とちぎ和牛会席＆旬の塩原高原大根を味わう老舗宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            開湯1200年の歴史が息づく塩原渓谷。川岸に湧く野天風呂で初冬の雪景色を愛で、寒暖差で甘さを極めた塩原高原大根ととろけるとちぎ和牛に舌鼓を打つ極上の旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-emerald-400" /> 11月下旬〜12月が雪見露天の始まり</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-emerald-400" /> 多彩な源泉が揃う塩原十一湯</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-emerald-400" /> 塩原高原大根＆極上とちぎ和牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Valley Snow & Historic Hot Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の箒川渓谷美と多彩な名湯｜11月・12月に塩原温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              栃木県北部に位置し、那須連山から流れ出る清流・箒川（ほうきがわ）の深い渓谷沿いに広がる「塩原温泉郷」。平安時代初期の大同元年（806年）開湯と伝わり、実に1200年以上の歴史を紡いできた関東屈指の古湯です。秋の燃えるような紅葉が落ち着く11月中旬以降、渓谷は静寂を取り戻し、11月下旬から12月にかけては山肌や巨岩に初雪がうっすらと降り積もる幻想的な初冬の雪景色へと姿を変えます。
            </p>
            <p>
              塩原温泉の最大の魅力は「塩原十一湯」と呼ばれる多彩な泉質の豊かさです。箒川沿いのわずか数キロの間に、乳白色の硫黄泉（新湯・元湯）、美肌効果の高い炭酸水素塩泉（塩釜・畑下）、保温力抜群の塩化物泉（福渡・塩の湯）など、多種多様な源泉が湧出しています。川岸すれすれに湧く名物露天風呂や渓谷を見渡す野天風呂では、凛とした初冬の冷気と舞い散る粉雪を感じながら、身体の芯まで温まる至福の湯浴みが叶います。
            </p>
            <p>
              そして初冬の塩原旅を彩るのが、この時期にしか味わえない絶品のご当地グルメ。高原特有の激しい昼夜の寒暖差によって甘みが極限まで凝縮した「塩原高原大根」は、梨のようにみずみずしく柔らか。さらに栃木県が誇る最高峰銘柄牛「とちぎ和牛」の極上サーロインやすき焼き、清流で育った岩魚やプレミアムヤシオマスなど、冬の味覚を心ゆくまで堪能できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                <Waves className="w-4 h-4 text-emerald-600" />
                開湯1200年・塩原十一湯
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                乳白色の硫黄泉から炭酸水素塩泉、弱食塩泉まで多彩な名湯が点在。宿ごとに異なる源泉の個性を愉しむ。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                <Snowflake className="w-4 h-4 text-emerald-600" />
                箒川渓谷の初冬雪見露天
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月下旬から初雪が舞う渓谷美。川のせせらぎと川岸から立ち上る湯けむりに包まれる至福の野天風呂。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                <Utensils className="w-4 h-4 text-emerald-600" />
                極上とちぎ和牛＆塩原大根
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                梨のように甘くみずみずしい冬の塩原高原大根と、口の中でとろける霜降り最高峰とちぎ和牛の贅沢会席。
              </p>
            </div>
          </div>
        </section>

        {/* Section 1.5: Gorge Landscape & Geological Features */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Valley Landscape & Geology</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                箒川の浸食がつくり出した奇岩渓谷と初冬の粉雪グラデーション
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              塩原温泉郷を貫く箒川は、高原山の火山活動によって形成された安山岩や凝灰岩の地層を数十万年かけて深く浸食し、落差数十メートルの断崖や奇岩、大小無数の滝が連続するダイナミックな渓谷をつくり出しました。初冬の11月下旬を迎えると、山々の針葉樹の深い緑と奇岩の灰褐色の上に、純白の初雪が粉砂糖をまぶしたように降り積もります。
            </p>
            <p>
              この険しい渓谷美こそが、塩原の温泉文化を形づくってきました。川底から湧き出る自然湧出の源泉に浸かる川岸露天風呂では、見上げるような断崖絶壁と清らかな箒川の激流、そして木立から舞い落ちる雪のひとひらが、五感を研ぎ澄ます静寂の湯浴みをもたらします。明治の文豪・尾崎紅葉が『金色夜叉』の執筆にあたり塩原に長逗留し、川のせせらぎに耳を澄ませた理由が肌身で実感できます。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Selected Historic Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【塩原温泉】初冬の雪見露天と極上美食を堪能する厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              箒川の絶景野天風呂、創業数百年の名湯老舗、極上とちぎ和牛を味わえるおすすめの宿を詳しく紹介します。
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
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    第{h.id}位
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md">
                        {h.special}
                      </span>
                      <div className="flex items-center gap-1 text-emerald-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                      <a href={h.url} target="_blank" rel="noopener noreferrer">
                        {h.name}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <span className="font-bold text-emerald-900 block mb-1">【客室のこだわり】</span>
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（2名1室時・1名あたり）</span>
                      <div className="text-xl font-extrabold text-emerald-700">{h.price}</div>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all"
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
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                塩原十一湯が誇る泉質多様性と寒冷高原が生む極甘大根の秘密
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              塩原十一湯の泉質は、温泉地学的に見ても奇跡的なバリエーションを誇ります。那須火山帯の地下深くに蓄えられたマグマ熱水が、断層や地層の成分と反応しながら異なるルートで地表へ噴出するため、中性〜弱アルカリ性の美肌炭酸水素塩泉から、pH2前後の強酸性緑礬泉、乳白色の硫黄泉まで実に6種類以上の泉質が数十メートルの距離で隣り合っています。宿ごとに泉質が全く異なるため、滞在中に「湯巡り」をすることで、角質ケアから保湿・保温まで完璧な温浴効果を享受できます。
            </p>
            <p>
              また、冬の名物「塩原高原大根」の美味しさの秘密は、標高600メートル前後の火山灰土壌（黒ボク土）と、昼夜の寒暖差にあります。初冬の夜間、氷点下近くまで冷え込むと、大根は自らの水分が凍結するのを防ぐために細胞内のデンプンを糖へと急速に分解します。そのため11月・12月の大根は糖度が8〜10度近くまで跳ね上がり、果物のような甘みとみずみずしさを獲得するのです。この極甘大根と、A5ランクとちぎ和牛の霜降り肉を合わせた鍋料理は、冬の塩原ならではの至高の滋味です。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の箒川雪見露天・塩原大根ととちぎ和牛を堪能する名湯旅
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-emerald-600" />
                【1日目】もみじ谷大吊橋絶景と名物野天風呂・とちぎ和牛会席
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">12:00</span>
                  <span><strong>那須塩原駅到着＆名物ランチ：</strong>塩原温泉へ向かい、ご当地名物「スープ入り焼きそば」の人気店「釜彦」で熱々を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">13:30</span>
                  <span><strong>もみじ谷大吊橋を空中散歩：</strong>箒川ダム湖に架かる大吊橋から、初雪をかぶった山並みとエメラルドの水面を観賞。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">15:00</span>
                  <span><strong>宿へチェックイン＆名物露天風呂：</strong>箒川沿いの老舗宿へ。川岸に湧く野天風呂で初冬の冷気と川のせせらぎを独占。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>極上とちぎ和牛＆塩原大根会席：</strong>とろけるとちぎ和牛のステーキ、甘みたっぷりの風呂吹き大根、岩魚塩焼きに舌鼓。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">20:30</span>
                  <span><strong>初冬の雪見月光浴：</strong>静寂に包まれた夜の露天風呂へ。ライトアップされた冬の木立ちと星空を眺めながら芯まで温まる。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-emerald-600" />
                【2日目】清々しい渓谷散策と温泉街足湯＆スイーツ巡り
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">07:30</span>
                  <span><strong>朝風呂と滋味あふれる朝食：</strong>朝陽が差し込む渓流風呂で目覚め、温泉粥や高原野菜の小鉢が並ぶ朝食を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">09:30</span>
                  <span><strong>塩原もの語り館＆古刹・妙雲寺散策：</strong>文豪ゆかりの資料を見学し、静まり返る妙雲寺境内で初冬の歴史情緒を感じる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">11:00</span>
                  <span><strong>温泉街で「とて焼」食べ歩き：</strong>名物スイーツ「とて焼」を片手に無料足湯に浸かり、出来立て温泉まんじゅうをお土産に購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs shrink-0 mt-0.5">12:30</span>
                  <span><strong>アグリパル塩原（道の駅）で高原大根調達：</strong>直売所で収穫したての新鮮な塩原高原大根を購入し、那須塩原駅へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Tips & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Travel Advice & Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の塩原温泉旅行を快適に楽しむための4大秘訣
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-emerald-600" />
                11月下旬以降の国道400号は冬用タイヤ必須
              </h3>
              <p className="leading-relaxed">
                西那須野塩原ICから塩原温泉へ向かう国道400号（塩原バレーライン）は、標高が上がるにつれて路面温度が下がります。11月下旬以降は日陰や橋の上で路面凍結が発生しやすいため、車でお越しの際は必ずスタッドレスタイヤを装着してください。
              </p>
            </div>

            <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-emerald-600" />
                渓谷の野天風呂は足元と湯冷めに注意
              </h3>
              <p className="leading-relaxed">
                湯守田中屋や明賀屋本館などの名物川岸露天風呂は、長い階段を下りて川底へと向かいます。初冬の階段は冷え込むため、宿備え付けの羽織や厚手のソックスを着用し、滑りにくい履物でゆっくり足元に注意して移動しましょう。
              </p>
            </div>

            <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Utensils className="w-5 h-5 text-emerald-600" />
                名物「とて焼」は個性豊かな10種類以上
              </h3>
              <p className="leading-relaxed">
                昔、トテ馬車のラッパに似せて名付けられた「とて焼」。どら焼き風のふんわり生地で包む具材は、あんこや生クリームのスイーツ系から、黒毛和牛焼き肉や焼きそばなどの食事系まで各店舗で全く異なります。食べ比べを楽しむのが塩原散策の醍醐味です。
              </p>
            </div>

            <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-emerald-600" />
                栃木の地酒「天鷹」「惣誉」とのマリアージュ
              </h3>
              <p className="leading-relaxed">
                那須山麓の清らかな伏流水で醸造される栃木の辛口地酒は、濃厚なとちぎ和牛の脂をすっきりと流し、甘みのある塩原大根や香ばしい川魚の塩焼きと見事な調和を生み出します。夕食時にはぜひ地酒の利き酒セットをお試しください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                塩原温泉の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-emerald-800 font-extrabold shrink-0">Q.</span>
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
        <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！北関東・日光那須の冬雪見温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              栃木・群馬の厳選された雪見名湯や極上和牛の特集記事もぜひチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-tochigi-kinugawa-onsen-valley-snow-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">鬼怒川・渓谷雪景色</span>
              <h3 className="font-bold text-white text-sm">鬼怒川温泉・鬼怒川渓谷の雪景色と名湯・とちぎ和牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">名峰を望むパノラマ露天と湯波料理、とちぎ和牛を堪能する名宿。</p>
            </Link>

            <Link 
              href="/winter-tochigi-nasu-onsen-shikanoyu-snow-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">那須・鹿の湯白濁</span>
              <h3 className="font-bold text-white text-sm">那須温泉・開湯千三百年鹿の湯と白濁硫黄泉・那須和牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">那須高原の冬景色と歴史ある白濁硫黄泉、那須黒毛和牛ステーキ。</p>
            </Link>

            <Link 
              href="/winter-gunma-minakami-onsen-tanigawa-yukimi-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-sky-500/40 text-sky-200 font-bold text-[10px]">水上・谷川岳雪見</span>
              <h3 className="font-bold text-white text-sm">水上温泉郷・谷川岳初冬雪見露天と上州牛・利根川渓谷の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">谷川岳を仰ぐ大露天風呂と清流利根川のせせらぎ、上州牛すき焼き。</p>
            </Link>

            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold text-[10px]">草津・湯畑ライトアップ</span>
              <h3 className="font-bold text-white text-sm">草津温泉・冬の湯畑幻想ライトアップと酸性名湯・上州牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">日本屈指の酸性泉掛け流しと冬の湯畑の幻想的な湯けむり景観。</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
