import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Mountain, Eye, Waves, Wine, ThermometerSun, Footprints, Sparkle, HeartHandshake, Trees
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月福岡・原鶴温泉の筑後川冬情緒と奇跡のW美肌の湯】博多和牛会席＆掛け流し展望露天の湯巡り宿5選",
  description: "11月から12月にかけて、福岡市内から高速で約60分、九州一の大河・筑後川のほとりに佇む「原鶴温泉（はらづるおんせん）」は、川面に初冬の朝霧が立ち込め、柿やすだちが実る筑後平野の豊かな風情に包まれます。原鶴温泉の最大の魅力は、角質を落とす「弱アルカリ性単純温泉」と、美白効果を高める「単純硫黄泉」という2つの美肌成分を併せ持つ全国的にも極めて希少な「W美肌の湯（ダブル美肌の湯）」。冬の冷えや乾燥で疲れた肌を驚くほど滑らかに潤す名湯と、福岡が誇る最高峰「博多和牛」のすき焼きや陶板焼き、朝倉の旬の冬野菜をふんだんに使った会席料理を堪能できる、厳選の名旅館・温泉ホテル5選を徹底解説します。",
  keywords: '原鶴温泉 宿泊, 福岡 温泉 11月 12月, 原鶴温泉 泰泉閣, 延命館, ホテルパーレンス小野屋, 原鶴グランドスカイホテル, 六峰舘, 博多和牛 宿, W美肌の湯, 筑後川 絶景露天',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay/"
  },
  openGraph: {
    title: "【11・12月福岡・原鶴温泉の筑後川冬情緒と奇跡のW美肌の湯】博多和牛会席＆掛け流し展望露天の湯巡り宿5選",
    description: "11月から12月にかけて、福岡市内から高速で約60分、九州一の大河・筑後川のほとりに佇む「原鶴温泉（はらづるおんせん）」は、川面に初冬の朝霧が立ち込め、柿やすだちが実る筑後平野の豊かな風情に包まれます。原鶴温泉の最大の魅力は、角質を落とす「弱アルカリ性単純温泉」と、美白効果を高める「単純硫黄泉」という2つの美肌成分を併せ持つ全国的にも極めて希少な「W美肌の湯（ダブル美肌の湯）」。冬の冷えや乾燥で疲れた肌を驚くほど滑らかに潤す名湯と、福岡が誇る最高峰「博多和牛」のすき焼きや陶板焼き、朝倉の旬の冬野菜をふんだんに使った会席料理を堪能できる、厳選の名旅館・温泉ホテル5選を徹底解説します。",
    url: 'https://croud-travel.pages.dev/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の筑後川と原鶴温泉の展望露天風呂からのパノラマ絶景'
      }
    ]
  }
};

const faqList = [
  {
    "q": "原鶴温泉の「W美肌の湯（ダブル美肌温泉）」とはどのような泉質・効能ですか？",
    "a": "原鶴温泉は、全国的にも非常に珍しい「2つの美肌泉質」を併せ持つ奇跡の温泉地です。一つ目は、古い角質や皮脂汚れを優しく落とすクレンジング作用のある「弱アルカリ性単純温泉（pH8.5前後）」。二つ目は、メラニンを分解し肌を軟化させて美白効果を促す「単純硫黄温泉」です。この2つの成分が相互に作用することで、入浴中は肌がつるつると滑らかになり、湯上がり後はしっとり吸い付くような潤い素肌を実感できます。冬の乾燥肌対策や冷え性改善に抜群の効果を発揮します。"
  },
  {
    "q": "福岡市内（博多・天神）や北九州からのアクセス方法と所要時間は？",
    "a": "原鶴温泉は福岡市内から非常にアクセスが良く、週末の気軽な温泉旅行に最適です。車の場合は、福岡都市高速・九州自動車道・大分自動車道を経由して「杷木（はき）IC」まで約50分。杷木ICから温泉街までは車でわずか約5分（合計約60分）で到着します。高速バスを利用する場合は、西鉄天神高速バスターミナルや博多バスターミナルから日田・湯布院方面行きの高速バスに乗り、「杷木バス停」まで約60〜70分。杷木バス停からは多くの旅館が無料送迎を行っています。電車の場合はJR久大本線「筑後吉井駅」からタクシーまたは送迎車で約10分です。"
  },
  {
    "q": "11月・12月の原鶴温泉の気候や見どころ、周辺観光スポットは？",
    "a": "初冬の原鶴温泉周辺は、筑後川から立ち上る幻想的な朝霧や、耳納連山（みのうれんざん）の穏やかな稜線が美しい季節です。11月の平均気温は13〜15℃前後、12月は8〜10℃前後で、厳寒の地域に比べると穏やかで過ごしやすい気候です。周辺の見どころとしては、白壁土蔵の町並みが美しい「吉井の白壁通り（筑後吉井）」の散策や、11月に収穫の最盛期を迎える全国ブランド「朝倉の富有柿（甘柿）」の直売所巡り、約1,000本もの鳥居が連なる絶景パワースポット「浮羽稲荷神社（うきはいなりじんじゃ）」などが車で10〜15分圏内に集まっています。"
  },
  {
    "q": "原鶴温泉で味わえる冬の名物グルメやブランド食材は？",
    "a": "福岡県が誇る黒毛和牛の最高峰「博多和牛」は必食です。米どころ・麦どころである福岡の良質な稲わらを食べて育った博多和牛は、柔らかくジューシーな肉質と上品な甘みのサシが特徴で、すき焼きや陶板焼きで至福の旨味を味わえます。また、冬が旬の「朝倉ねぎ」や甘みたっぷりの「富有柿」、朝倉の地鶏を使った「鶏鍋」、そして筑後川の清流で育ったアユやヤマメなど、山と川と平野の豊かな恵みが膳を華やかに彩ります。"
  },
  {
    "q": "日帰り入浴や温泉街の湯巡りは可能ですか？",
    "a": "原鶴温泉では多くの旅館・ホテルが日帰り入浴（立ち寄り湯）を受け付けており、気軽に湯巡りを楽しむことができます。「泰泉閣」の名物ジャングル風呂や、「ホテルパーレンス小野屋」の畳風呂、「六峰舘」の展望露天風呂など、各宿が個性豊かな大浴場を備えています。また、温泉街の中央には足湯スポットもあり、散策途中に気軽に立ち寄ることができます。宿泊客は宿の湯船をじっくり堪能しつつ、チェックイン前後で日帰り湯巡りを楽しむのもおすすめです。"
  }
];

export default function FukuokaHarazuruWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay"
        },
        "headline": "【11・12月福岡・原鶴温泉の筑後川冬情緒と奇跡のW美肌の湯】博多和牛会席＆掛け流し展望露天の湯巡り宿5選",
        "description": "11月から12月にかけて、福岡市内から高速で約60分、九州一の大河・筑後川のほとりに佇む「原鶴温泉（はらづるおんせん）」は、川面に初冬の朝霧が立ち込め、柿やすだちが実る筑後平野の豊かな風情に包まれます。原鶴温泉の最大の魅力は、角質を落とす「弱アルカリ性単純温泉」と、美白効果を高める「単純硫黄泉」という2つの美肌成分を併せ持つ全国的にも極めて希少な「W美肌の湯（ダブル美肌の湯）」。冬の冷えや乾燥で疲れた肌を驚くほど滑らかに潤す名湯と、福岡が誇る最高峰「博多和牛」のすき焼きや陶板焼き、朝倉の旬の冬野菜をふんだんに使った会席料理を堪能できる、厳選の名旅館・温泉ホテル5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T10:00:00+09:00",
        "dateModified": "2026-09-28T10:00:00+09:00",
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
          "name": "Croud Travel 九州名湯・美肌紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay#breadcrumb",
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
            "name": "福岡・原鶴温泉 筑後川冬情緒と奇跡のW美肌の湯・博多和牛会席の宿",
            "item": "https://croud-travel.pages.dev/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay#faq",
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
              name: "原鶴温泉　泰泉閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37876/37876.jpg",
              rating: 4.18,
              reviews: 1110,
              price: "¥7,040〜",
              access: "大分自動車道杷木インターより車で5分／ＪＲ筑後吉井駅より車で10分／日田行き高速バスで杷木下車、車で５分",
              special: "“ダブル美肌湯”と称される原鶴の良泉を宿名物ジャングル風呂などの個性あふれるお風呂でお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37876%2F37876.html",
              story: "昭和天皇・皇后両陛下をお迎えした歴史を誇り、原鶴温泉を代表する名門老舗旅館「原鶴温泉 泰泉閣（たいせんかく）」。この宿の代名詞とも言えるのが、熱帯植物が生い茂る巨大な温室ドーム風呂「ジャングル風呂」。すべり台や打たせ湯を備え、まるで南国の秘湯に迷い込んだかのような遊び心あふれる入浴体験が楽しめます。さらに男性専用の「千歳川」露天風呂や女性専用の「雅の湯」、無料の貸切露天風呂など多彩な湯処でW美肌の源泉を満喫。夕食は博多和牛や朝倉の地野菜を贅沢に取り入れた彩り豊かな会席料理。広大な回遊式日本庭園の冬景色を眺めながら、三世代家族からカップルまで心温まる贅沢なひとときを過ごせます。",
              roomTip: "日本庭園または筑後川を望む純和室・和洋室。畳の温もりに包まれながら、初冬の静かな庭園の風情や川のせせらぎをゆったり鑑賞。",
              gourmetTip: "「泰泉閣名物・博多和牛味くらべ会席」。肉質のきめ細やかな博多和牛の陶板焼きとしゃぶしゃぶ、朝倉産富有柿を使った前菜、旬魚の刺身。",
              highlights: [
                "名物巨大温室「ジャングル風呂」＆日本庭園を望む千歳川露天風呂など多彩な湯巡り",
                "昭和天皇もお泊まりになられた老舗の風格＆博多和牛味くらべと朝倉旬菜会席",
                "広大な回遊式日本庭園散策＆三世代家族からグループ旅行まで安心の大型設備"
              ]
            },
            {
              id: 2,
              name: "原鶴温泉　延命館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80410/80410.jpg",
              rating: 4.29,
              reviews: 156,
              price: "¥8,800〜",
              access: "大分道[杷木ＩＣ]より車で６分(送迎は要予約・3日前まで)　筑後吉井駅より送迎車にて１０分(送迎は要予約・3日前まで)　",
              special: "とろっとろのかけ流し美肌の湯と和洋のテイストを織り交ぜたお料理は特に女性客に好評！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80410%2F80410.html",
              story: "筑後川の堤防沿いに建ち、全客室および露天風呂から雄大な大河の流れをパノラマで望む家庭的な温泉旅館「原鶴温泉 延命館（えんめいかん）」。敷地内に自噴する自家源泉は、湯量豊富な掛け流しで、湯船には細かな気泡（炭酸・硫黄成分）がびっしりと肌にまとわりつく極上の湯触りが自慢です。加水も加温も一切行わない「純生温泉」の優しさは、敏感肌や冷え性の旅行者からも絶大な支持を獲得。愛犬と一緒に宿泊できる専用客室やドッグランも完備し、家族全員で冬の温泉旅行を楽しめます。夕食は筑後平野の採れたて野菜と地元の黒毛和牛を使った手作りの温もりあふれる会席膳が楽しめます。",
              roomTip: "筑後川のリバービュー和室。窓外に広がる雄大な河川敷と水鳥たちの羽ばたきを眺め、朝には幻想的な朝霧が川面を覆う絶景を堪能。",
              gourmetTip: "「地元朝倉の旬を味わう延命館特選会席」。とろける博多和牛のすき焼き小鍋、筑後川のアユの塩焼き、契約農家直送の冬野菜の炊き合わせ。",
              highlights: [
                "自噴する純生温泉を贅沢に完全掛け流し＆炭酸と硫黄の微細な気泡が肌を包む至極の湯",
                "全室筑後川リバービュー＆愛犬と一緒に泊まれる専用客室とドッグラン完備",
                "加水加温なしの「本物の源泉力」を実感＆家庭的で温かいおもてなしの心"
              ]
            },
            {
              id: 3,
              name: "原鶴温泉　ホテルパーレンス小野屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15772/15772.jpg",
              rating: 4.35,
              reviews: 1993,
              price: "¥8,415〜",
              access: "福岡市内から約60分！大分自動車道・杷木ＩＣより約5分！名跡『秋月城址』まで車で30分、太宰府まで車で50分",
              special: "【楽天トラベルアワード9年連続受賞】創業145年。優しさが詰った畳風呂と、心尽しの美食が人気の老舗宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15772%2F15772.html",
              story: "洗練された和モダンデザインと、全国的にも極めて珍しい「全面畳敷きの温泉大浴場」で名高いスタイリッシュな老舗リゾート「原鶴温泉 ホテルパーレンス小野屋」。大浴場の洗い場から湯船の縁まで防水畳が敷き詰められており、冬の浴室でも足元がひんやりと冷たくならず、滑りにくいためシニアや小さな子供連れでも安心して名湯を堪能できます。日本庭園に面した露天風呂のほか、中庭には足湯カフェも併設。夕食は西洋の技法を融合させた新感覚のモダン和会席で、福岡県産黒毛和牛のフィレステーキや近海鮮魚の創作料理を、間接照明が灯る落ち着いたダイニングで優雅に楽しめます。",
              roomTip: "日本庭園を見下ろすデザイナーズ和洋室または温泉付き特別室。モダンなインテリアとローベッドが配された上質な大人の隠れ家空間。",
              gourmetTip: "「小野屋創作・博多和牛と季節の旬菜ディナー」。厳選博多和牛のロースト、玄界灘直送の鮮魚のお造り、朝倉特産の果実を使った特製デザート。",
              highlights: [
                "全国でも希少な「全面畳敷き温泉大浴場」で冬も足元暖か＆中庭の足湯カフェ",
                "和モダンデザインの洗練されたデザイナーズ客室＆博多和牛と季節の創作ディナー",
                "女性やファミリーに大絶賛の安全設計＆福岡市内からわずか60分の好アクセス"
              ]
            },
            {
              id: 4,
              name: "原鶴温泉　原鶴グランドスカイホテル（BBHホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10978/10978.jpg",
              rating: 4.01,
              reviews: 2040,
              price: "¥9,000〜",
              access: "大分自動車道『杷木IC』より車で5分/JR久大本線『筑後吉井駅』",
              special: "福岡の奥座敷、耳納連山の麓に建つ、お料理自慢のリゾートマンション風湯宿♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10978%2F10978.html",
              story: "原鶴温泉街のランドマークとしてそびえ立ち、最上階の展望パノラマ大浴場から筑後川と雄大な耳納連山（みのうれんざん）の峰々を一望する「原鶴温泉 原鶴グランドスカイホテル」。BBHホテルグループならではの充実した無料サービス（ウェルカムドリンク、アイスクリーム、マッサージチェアなど）が魅力で、高いコストパフォーマンスを誇ります。展望風呂から望む初冬の夕暮れや朝日は格別の美しさで、ツルツルとした硫黄香る美肌温泉を心ゆくまで堪能。夕食は季節のバイキングまたは和食御膳プランから選べ、気兼ねなく温泉ステイを満喫したいグループやビジネス・一人旅にも最適です。",
              roomTip: "高層階のリバービュー和室または洋室。大きな窓から筑後平野の広大なパノラマと、冬の澄んだ夜空に広がる星空を見晴らす快適ステイ。",
              gourmetTip: "「冬の味覚満載バイキング＆和会席御膳」。揚げたて天ぷら、博多名物もつ鍋、ジューシーな牛肉ステーキ、季節の炊き込みご飯。",
              highlights: [
                "最上階展望大浴場から望む筑後川と耳納連山の大パノラマ＆充実の無料サービス",
                "手頃な宿泊料金で名湯を満喫できる高コスパ＆バイキングや和食御膳が選べる楽しさ",
                "無料平面駐車場完備でドライブ旅行に最適＆ビジネス滞在にも快適な客室設備"
              ]
            },
            {
              id: 5,
              name: "原鶴温泉　ほどあいの宿　六峰舘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/55914/55914.jpg",
              rating: 4.54,
              reviews: 508,
              price: "¥11,000〜",
              access: "ＪＲ久大線　筑後吉井駅より車で１０分送迎あり／高速バス「日田行」杷木バス停送迎あり/　大分自動車道杷木ＩＣより車で５分",
              special: "【15室の露付客室で極上stay】全室から雄大な筑後川と耳納連山を眺める『美食』に拘った癒しの宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F55914%2F55914.html",
              story: "筑後川を眼下に見下ろす特等席に位置し、洗練されたおもてなしと美食で大人のリピーターを魅了し続ける高級料理旅館「原鶴温泉 ほどあいの宿 六峰舘（ろっぽうかん）」。最上階にある展望露天風呂は、筑後川の雄大な川面とどこまでも広がる田園風景を独占できるインフィニティ設計で、湯船に浸かると川と一体になったかのような浮遊感が味わえます。湯上がりには足湯カフェで川風を感じながら至福のティータイム。夕食は料理長が素材を吟味した極上の創作会席。A5ランク博多和牛の炭火焼きや、朝倉の旬の根菜、玄界灘の冬魚介が美しく盛り付けられた料理は、旅のハイライトにふさわしい感動を届けます。",
              roomTip: "筑後川を一望する源泉半露天風呂付きモダン和洋室。ウッドデッキテラスのソファに座り、川のせせらぎと夕焼けの茜雲を眺める贅沢な休日。",
              gourmetTip: "「六峰舘特選・料理長おまかせ博多和牛会席」。炭火で香ばしく焼き上げるA5博多和牛ヒレステーキ、甘鯛のかぶら蒸し、朝倉産ブランド米の土鍋ご飯。",
              highlights: [
                "最上階インフィニティ展望露天風呂から筑後川を一望＆A5博多和牛炭火焼き会席",
                "川沿いの絶景テラスと足湯で過ごす優雅な時間＆記念日旅行に最適な半露天付き客室",
                "料理長が素材を吟味した本格創作和会席＆大人のリピーターが絶賛する上質なホスピタリティ"
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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="筑後川の雄大な流れと初冬の原鶴温泉街"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-400/30 text-violet-300 text-xs sm:text-sm font-semibold">
            <Sparkle className="w-4 h-4" />
            11月・12月 冬の美肌温泉＆筑後路美食特集｜福岡・原鶴温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            筑後川冬情緒と奇跡のW美肌の湯<br className="hidden sm:inline" />
            博多和牛会席＆掛け流し展望露天の湯巡り宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            博多から車で約60分。弱アルカリ性×単純硫黄泉が織りなす「奇跡のW美肌の湯」。朝霧が煙る筑後川の絶景と最高峰「博多和牛」を味わう至福の初冬旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-violet-400" /> 11月〜12月が朝霧と美食期</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-violet-400" /> 弱アルカリ×硫黄「W美肌泉」</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-violet-400" /> 博多和牛＆朝倉旬菜会席</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Double Beautifying Sanctuary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                大河のせせらぎと奇跡のW美肌の湯｜11月・12月の福岡原鶴温泉が選ばれる理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              福岡市内（天神・博多）から都市高速と大分道を経由して車でわずか約60分。九州第一の大河・筑後川のゆったりとした流れのほとりに広がる「原鶴温泉（はらづるおんせん）」は、開湯から130年以上の歴史を刻む福岡県屈指の名湯です。初冬を迎える11月から12月にかけては、周囲の耳納連山が優美な稜線を描き、筑後川の川面からは冷え込んだ朝に幻想的な「川霧」が立ち上る風情あふれる季節を迎えます。
            </p>
            <p>
              原鶴温泉が全国の温泉通や美肌を求める女性から絶賛される最大の理由が、「W美肌の湯（ダブル美肌温泉）」と呼ばれる奇跡的な泉質にあります。肌の古い角質を落としてつるつるに整える「弱アルカリ性単純温泉」と、角質を柔らかくしメラニンを分解する「単純硫黄温泉」という2つの異なる美肌泉質が絶妙に融合。入浴するだけで全身の肌が磨き上げられ、湯上がり後は吸い付くような潤いとしっとり感を実感できます。
            </p>
            <p>
              さらに、実りの秋から冬にかけての筑後平野は美食の宝庫。福岡県が誇る最高峰黒毛和牛「博多和牛」の陶板焼きやすき焼き、日本一の甘柿「朝倉の富有柿」、地元農家が丹精込めて育てた冬野菜など、滋味豊かな旬会席が並びます。冬の寒さを忘れさせてくれる極上の温泉旅館5選をご紹介します。
            </p>
          </div>
        </section>

        {/* Section 1.5: Detailed River Mist & Asakura Persimmon Culture */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Atmospheric River Mist</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                筑後川の幻想的な朝霧と朝倉の富有柿｜初冬の筑後路を彩る自然の風物詩
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              11月中旬から12月にかけての放射冷却が強まる朝、筑後川の水面と冷たい外気との温度差によって、川面一面に真っ白な霧が立ち込める「川霧（朝霧）」が発生します。対岸の耳納連山の麓までが白いヴェールに包まれ、朝日が差し込むと黄金色に輝く幻想的な光景は、リバービューの温泉旅館の客室や展望露天風呂からしか見られない特権です。
            </p>
            <p>
              また、原鶴温泉が位置する朝倉市杷木エリアは、全国屈指のブランド甘柿「富有柿（ふゆうがき）」の産地。秋から冬の直売所には、オレンジ色に完熟した大玉の富有柿が山積みになり、一口かじれば上品で濃厚な甘みと果汁が口いっぱいに広がります。温泉旅館の料理長たちも、この旬の柿を白和えや天ぷら、デザートに取り入れ、季節感あふれる逸品として提供しています。
            </p>
          </div>
        </section>

        {/* Section 1.8: Harazuru 2-Day 1-Night Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Harazuru Winter Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の原鶴温泉1泊2日満喫モデルコース｜白壁の町散策とW美肌の湯・博多和牛紀行
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目：博多から60分・吉井白壁通りとW美肌温泉チェックイン】</strong><br />
              博多・天神から大分自動車道を経由して車で約50分、「杷木IC」へ。まずは温泉街から車で約10分の「筑後吉井の白壁通り」を散策。江戸から明治期の蔵造りの町並みが残る風情ある通り沿いでおしゃれな古民家カフェランチを楽しみます。続いて山腹に約1,000基の赤い鳥居が連なる「浮羽稲荷神社」へ立ち寄り、筑後平野を一望する絶景ビューポイントで記念撮影。15時に原鶴温泉の宿へチェックイン。まずは名物のW美肌の湯へ。アルカリと硫黄のダブル効果で肌をつるつるに磨き上げます。夕食は柔らかくジューシーな博多和牛の陶板焼きやすき焼き、朝倉の旬野菜を使った料理長渾身の会席料理を堪能。
            </p>
            <p>
              <strong>【2日目：筑後川の朝霧・足湯カフェと完熟富有柿の直売所めぐり】</strong><br />
              朝は川沿いの遊歩道を散策しながら、川面に立ち込める幻想的な朝霧を鑑賞。宿の展望風呂で朝風呂を楽しんだ後は、地元の食材が並ぶ美味しい朝食を。チェックアウト後は、原鶴温泉街の「道の駅原鶴 ファームステーションバサロ」へ立ち寄り、名物の富有柿や朝採れ野菜、地酒をお土産に購入。福岡市内へも下道や高速で約1時間で戻れるため、週末の気軽なリフレッシュ旅に最適です。
            </p>
          </div>
        </section>

        {/* Section 2: Recommended Hotels List */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Selected Harazuru Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の原鶴温泉を満喫する厳選おすすめ宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              老舗の名物ジャングル風呂から、筑後川一望のインフィニティ露天、全面畳敷き大浴場まで、現地取材に基づき厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px] bg-slate-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <span className="inline-flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-md">
                            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                            {h.rating} ({h.reviews}件のクチコミ)
                          </span>
                          <span className="text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            福岡県朝倉市杷木志波
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-violet-800 font-medium bg-violet-50/70 px-3 py-1.5 rounded-lg border border-violet-100/80">
                          {h.special}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Detail Points */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-violet-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">客室の魅力：</strong>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <Utensils className="w-4 h-4 text-violet-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">冬の美食：</strong>{h.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="bg-slate-50 rounded-2xl p-4 space-y-2 text-xs text-slate-600">
                        <span className="font-bold text-slate-800 block text-xs uppercase tracking-wide">この宿の注目ポイント</span>
                        <ul className="space-y-1.5">
                          {h.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-400 block">参考宿泊料金（2名1室時・1名あたり）</span>
                        <span className="text-2xl font-extrabold text-violet-800">{h.price}</span>
                        <span className="text-xs text-slate-500 ml-1">※プラン・日程により変動</span>
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-700 hover:bg-violet-800 text-white font-bold text-sm shadow-md shadow-violet-900/10 transition duration-200 group"
                      >
                        <span>空室・宿泊プランを確認する</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Hakata Beef & Chikugo Gastronomy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Chikugo Gourmet Feast</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                最高峰ブランド「博多和牛」と実りの朝倉・筑後路冬グルメ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                きめ細やかなサシと芳醇な旨味「博多和牛」会席
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                福岡県内の指定生産農家が丹精込めて育てる博多和牛。良質な稲わらを豊富に食べて育つため、脂がしつこくなく、赤身に深いコクと旨味が凝縮しています。陶板焼きで表面を香ばしく炙って特製タレで味わうステーキや、甘辛い割り下で楽しむすき焼き鍋は、冬の温泉旅行の最高の満足感をもたらします。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-600" />
                富有柿の王様と朝倉の旬彩・地鶏鍋
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                朝倉市杷木地域は、全国有数の富有柿（ふゆうがき）の生産地。11月から12月にかけて糖度を極限まで高めた完熟富有柿は、デザートはもちろん前菜や白和えにも使われます。さらに朝倉のブランド地鶏を使った水炊きや地鶏鍋、採れたての冬野菜など、豊かな大地が育んだ優しい味わいが身体を芯から温めます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Hot Spring Qualities */}
        <section className="bg-gradient-to-br from-violet-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-900">
            <div className="p-2.5 rounded-2xl bg-violet-900/60 text-violet-300">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-300 uppercase tracking-widest">Miraculous Double Beautifying Spa</span>
              <h2 className="text-xl sm:text-2xl font-bold">
                弱アルカリ性×単純硫黄泉｜原鶴温泉「奇跡のW美肌泉」のメカニズム
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-violet-300 text-sm">弱アルカリ性（角質オフ）</h4>
              <p>
                pH8.5前後のアルカリ性が、肌表面の古い角質や毛穴の皮脂汚れを優しく乳化して落とし、湯上がりの肌をつるつるスベスベの状態に整えます。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-violet-300 text-sm">単純硫黄泉（美白・保湿）</h4>
              <p>
                ほのかな硫黄成分が肌のメラニン分解を助け、皮膚の角質を柔らかく保ちます。末梢血管を広げて血行を促し、身体の冷えを芯から解消します。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-violet-300 text-sm">筑後川の絶景展望露天</h4>
              <p>
                大河のせせらぎと耳納連山の山並みを望む開放的な露天風呂。初冬の朝霧や夕焼けのグラデーションに包まれながら、心身ともに解き放たれる極上の湯浴みが叶います。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Access & Travel Planning */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Travel Planning & Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                原鶴温泉へのアクセスと週末リフレッシュのモデルコース
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              原鶴温泉は<strong>福岡市内（天神・博多）から車・高速バスで約60分</strong>という抜群の近さが最大の魅力です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">車でのアクセス（最速）</span>
                <p className="text-slate-600">
                  福岡IC・太宰府ICから大分自動車道「杷木IC」まで約45分。ICを降りて一般道を約5分進むだけで温泉街へ直行できます。白壁の町・吉井や浮羽稲荷神社への立ち寄りにも便利。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">高速バス・電車でのアクセス</span>
                <p className="text-slate-600">
                  西鉄天神・博多バスターミナルから日田・由布院行きの高速バスで「杷木バス停」まで約60分（事前予約で各宿が無料送迎）。またはJR久大本線「筑後吉井駅」より送迎車で約10分。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                福岡・原鶴温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-violet-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Related Kyushu & Onsen Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい九州の冬名湯＆美肌温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の九州各地の冬の味覚、名湯めぐり、絶景露天風呂をめぐる厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-violet-300 font-semibold block mb-1">佐賀・嬉野温泉</span>
              <h3 className="text-sm font-bold group-hover:text-violet-200 transition">日本三大美肌の湯と名物温泉湯豆腐・佐賀牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-violet-300 font-semibold block mb-1">宮崎・青島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-violet-200 transition">南国温暖避寒と鬼の洗濯板絶景・最高峰宮崎牛＆伊勢海老の宿</h3>
            </Link>
            <Link 
              href="/winter-kumamoto-kurokawa-yuakari-illumination-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-violet-300 font-semibold block mb-1">熊本・黒川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-violet-200 transition">幻想の竹灯籠湯あかりと湯巡り手形・あか牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-violet-300 font-semibold block mb-1">山口・下関と川棚温泉</span>
              <h3 className="text-sm font-bold group-hover:text-violet-200 transition">本場とらふぐ解禁美食と元祖瓦そば・開湯八百年ラジウム泉の宿</h3>
            </Link>
            <Link 
              href="/winter-ibusuki-onsen-sand-bath-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-violet-300 font-semibold block mb-1">鹿児島・指宿温泉</span>
              <h3 className="text-sm font-bold group-hover:text-violet-200 transition">名物天然砂むし温泉と錦江湾絶景・南国避寒黒豚会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-violet-300 font-semibold block mb-1">鹿児島・霧島温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-violet-200 transition">白濁硫黄泉の湯けむりと黒豚しゃぶしゃぶ・龍馬ゆかりの名宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
