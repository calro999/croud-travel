import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月弥彦】越後一宮彌彦神社参詣！名宿5選',
  description: '11月から12月にかけて、新潟県の日本海沿いに連なる弥彦山麓の弥彦温泉と岩室（いわむろ）温泉は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '岩室温泉 宿泊, 弥彦温泉 宿泊, 新潟 温泉 11月 12月, 穂々, ゆもとや, 四季の宿 みのや, 富士屋, 櫻家, 彌彦神社 参詣, 日本海 寒ブリ, のどぐろ 塩焼き, 岩室温泉 黒湯',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay/"
  },
  openGraph: {
    title: '【11・12月弥彦】越後一宮彌彦神社参詣！名宿5選',
    description: '11月から12月にかけて、新潟県の日本海沿いに連なる弥彦山麓の弥彦温泉と岩室（いわむろ）温泉は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の越後一宮彌彦神社と岩室温泉の名湯露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "弥彦・岩室温泉の11月・12月の気候や雪の状況、冬の服装・靴は？",
    "a": "新潟県中越地方の海沿いに位置する弥彦・岩室温泉は、山間部のような豪雪地帯ではありませんが、11月下旬から12月にかけて初雪を観測することがあります。11月の平均気温は8〜12℃前後で日中は過ごしやすいですが、朝晩は5℃以下まで冷え込みます。12月に入ると最高気温が5〜8℃、最低気温は0〜2℃程度となり、冷たい日本海からの季節風（雨やみぞれ混じり）が吹く日が増えます。観光の際は、防風・防水性のあるダウンコートやウールコート、マフラー、手袋が必要です。また、参道や温泉街を歩く際は濡れた路面や凍結に備え、滑り止めの付いた防水ブーツやスニーカーの着用をおすすめします。"
  },
  {
    "q": "岩室温泉の名物「黒湯」とはどのような温泉ですか？",
    "a": "岩室温泉は江戸時代の正徳3年（1713年）、白鷺が傷を癒やしていたことから発見されたと伝わる「白鷺の湯」としても知られています。その最大の特徴が「黒湯」と呼ばれる独特のにごり湯です。泉質は含硫黄-ナトリウム・カルシウム-塩化物温泉で、地下深くの源泉に含まれる微細な硫化鉄と天然の硫黄成分が空気に触れることで、墨を流したような独特の淡い黒色〜灰緑色に変化します。硫黄の香りと豊富な塩分が血行を促進し、湯上がり後もポカポカとした温もりが長く続くため「美肌の湯」「温まりの湯」として親しまれています。"
  },
  {
    "q": "11月・12月に味わえる新潟の冬グルメ「寒ブリ」「のどぐろ」「新米」の魅力は？",
    "a": "冬の日本海は、寒風と荒波に揉まれることで魚介が極上の脂を蓄える最高の季節です。11月から12月にかけて佐渡沖や寺泊沖で水揚げされる「寒ブリ」は、身が引き締まりながらもトロのようにとろける脂が乗り、刺身はもちろん、熱い出汁にくぐらせる「ブリしゃぶ」で味わうと絶品です。また、「白身のトロ」と称される高級魚「のどぐろ（アカムツ）」は、塩焼きにすると皮目から上質な脂がじゅわっと溢れ出します。さらにこの時期は、秋に収穫されたばかりの越後産コシヒカリ（新米）が最も美味しく、新潟の銘酒との相性も抜群です。"
  },
  {
    "q": "新潟駅や東京方面から弥彦・岩室温泉へのアクセス・冬の移動注意点は？",
    "a": "東京方面からは上越新幹線で「燕三条駅」まで約1時間40分。燕三条駅からJR弥彦線に乗り換えて「弥彦駅」まで約30分、岩室温泉へはタクシーまたは事前予約の乗り合いタクシー等で約15〜20分です。新潟駅からは越後線で「岩室駅」または「吉田駅」経由でアクセス可能です。車の場合は北陸自動車道「巻潟東IC」から約20分ですが、12月以降は日本海沿岸の高速道路や一般道で突然の降雪や凍結の恐れがあるため、スタッドレスタイヤの装着が必須となります。運転が不安な方は電車とタクシーの利用が安心です。"
  },
  {
    "q": "初冬の弥彦・岩室周辺で立ち寄るべき見どころや観光スポットは？",
    "a": "まずは「越後一宮 彌彦神社」への参拝です。樹齢数百年の杉並木に囲まれた荘厳な境内は、初冬の澄んだ冷気の中でひときわ厳かな雰囲気に包まれます。11月上旬から下旬にかけては全国的に有名な「弥彦菊まつり」が開催され、華やかな菊花の数々が境内を彩ります。また、神社裏手から「弥彦山ロープウェイ」に乗れば、山頂から越後平野と白波寄せる日本海、佐渡島のパノラマを一望できます。車で15分ほど走れば、新鮮な魚介が並ぶ「魚の市場通り（寺泊魚の市場通り）」があり、お土産の買い出しや焼き魚の食べ歩きも楽しめます。"
  }
];

export default function NiigataIwamuroYahikoWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay"
        },
        "headline": "【11・12月新潟・弥彦＆岩室温泉の初冬情緒と日本海寒ブリ・のどぐろ会席】越後一宮彌彦神社参詣＆開湯300年名物黒湯の宿5選",
        "description": "11月から12月にかけて、新潟県の日本海沿いに連なる弥彦山麓の弥彦温泉と岩室（いわむろ）温泉は、越後平野の黄金色の実りから初雪の白銀へと季節が移ろう風情豊かな初冬を迎えます。越後一宮「彌彦神社」の初冬の厳かな空気に包まれ、開湯300年の歴史を誇る岩室の名物「黒湯」で冷えた身体をじっくり温める至福のひととき。そして11月に水揚げが本格化する荒波の日本海直送「寒ブリ」や脂の乗った「のどぐろ塩焼き」、新米コシヒカリと越後の銘酒に酔いしれる厳選温泉宿5選を詳しく解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T11:00:00+09:00",
        "dateModified": "2026-09-28T11:00:00+09:00",
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
          "name": "Croud Travel 越後雪国・日本海美食取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay#breadcrumb",
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
            "name": "新潟・弥彦＆岩室温泉 寒ブリ・のどぐろ会席と名物黒湯の宿",
            "item": "https://croud-travel.pages.dev/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay#faq",
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
              name: "越後平野と弥彦連山一望の宿　穂々　―ｈｏｈｏ―",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29686/29686.jpg",
              rating: 4.41,
              reviews: 1413,
              price: "¥7,000〜",
              access: "北陸道、巻潟東ICから車で15分、三条燕ICから30分、 新潟市内から40～50分、弥彦神社から5分、寺泊から20分",
              special: "楽天トラベルアワード受賞！新潟を代表する絶景と美食と泉質自慢の宿★源泉かけ流し貸切風呂あり！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29686%2F29686.html",
              story: "広大な越後平野と弥彦連山の雄大な稜線を一望する高台に佇み、岩室温泉の歴史を受け継ぎながらモダンな癒やしのリゾートへと生まれ変わった「越後平野と弥彦連山一望の宿 穂々 ―hoho―（旧・ほてる大橋 館の山）」。館内には開放的なオープンテラスや足湯ラウンジが整備され、初冬の澄み切った冷気を感じながら刻一刻と表情を変える越後平野の田園風景を堪能できます。大浴場には岩室温泉の名物である「黒湯」が満たされ、微細な硫化鉄と天然硫黄成分が溶け込んだ独特のにごり湯が、冷え性や乾燥肌を優しくケアしてくれます。夕食は新潟の旬の食材をふんだんに取り入れた和モダン会席。日本海から届く新鮮なお造りや新潟県産牛のグリルを地酒とともに味わえます。",
              roomTip: "越後平野側の展望和洋室またはバルコニー付きモダン客室。朝には平野に立ち込める幻想的な初冬の朝霧、夕暮れには茜色のグラデーションを一望できます。",
              gourmetTip: "「越後冬の恵み会席」。荒波の日本海で獲れた寒ブリの薄造り、のどぐろの塩焼き、新潟県産牛の陶板焼き、炊きたての岩船産コシヒカリ。",
              highlights: [
                "越後平野と弥彦連山を見晴らす開放的な足湯テラス＆岩室名物「黒湯」のにごり湯大浴場",
                "日本海の寒ブリ造りとのどぐろ塩焼き＆新潟の地酒と米を味わう和モダン創作会席",
                "リニューアルされた洗練の館内デザイン＆ファミリーから一人旅まで心地よい滞在"
              ]
            },
            {
              id: 2,
              name: "岩室温泉　ゆもとや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72078/72078.jpg",
              rating: 4.13,
              reviews: 778,
              price: "¥14,300〜",
              access: "巻潟東ICよりお車で約15分。岩室駅、弥彦駅より車で約10分・17時迄お迎え可。(3日前までに要予約)　※当日予約不可",
              special: "館内は五層吹き抜けのつくりとなっており、広々とした開放的な空間が広がります。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72078%2F72078.html",
              story: "明治13年創業、140年以上の長きにわたり文人墨客や多くの旅人に愛されてきた岩室温泉屈指の老舗旅館「岩室温泉 ゆもとや」。数寄屋造りの風格漂う純和風建築の館内には、優美な日本庭園が広がり、初冬の静けさの中で情緒あるひとときを過ごせます。自家源泉を引く大浴場「夢殿」や露天風呂では、硫黄の香る良質な湯が掛け流されており、肌にしっとりと馴染む極上の温まり感を実感できます。ゆもとやの誇りは熟練の板前が仕立てる本格会席料理。11月・12月には、丸々と太った日本海の寒ブリを刺身やしゃぶしゃぶで味わう贅沢プランや、香ばしいのどぐろ姿焼きが並び、新潟の米と酒の底力を存分に体感できます。",
              roomTip: "日本庭園を望む数寄屋造りの純和室または専用露天風呂付き特別室。静寂に包まれた庭園の木々に初雪が舞う風情を眺めながら過ごす贅沢な時間。",
              gourmetTip: "「名物・日本海寒ブリしゃぶしゃぶ＆極上のどぐろ姿焼き会席」。出汁にくぐらせて余分な脂を落とし旨味を凝縮させた寒ブリと、脂が滴るのどぐろ塩焼き。",
              highlights: [
                "創業140余年の歴史を誇る風格ある数寄屋造り＆自家源泉から引く硫黄香る名湯露天風呂",
                "脂が乗った寒ブリしゃぶしゃぶ鍋＆寺泊直送の新鮮魚介と南蛮エビを贅沢に盛り込んだ膳",
                "初冬の静寂に包まれる情緒豊かな日本庭園＆細やかな心配りが行き届いた老舗の安心感"
              ]
            },
            {
              id: 3,
              name: "弥彦温泉　四季の宿　みのや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5284/5284.jpg",
              rating: 4.39,
              reviews: 1435,
              price: "¥9,900〜",
              access: "■JR燕三条駅→（弥彦線）→ＪＲ弥彦駅下車■弥彦駅より徒歩10分■三条燕ＩＣより車で25分■高速バス有■弥彦神社徒歩1分",
              special: "▽越後一の宮彌彦神社門前の宿★最上階にある展望風呂からは弥彦山を一望できる",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5284%2F5284.html",
              story: "越後一宮・彌彦神社の門前すぐ、徒歩1分という抜群の立地に建ち、300年以上の歴史を紡ぐ老舗温泉宿「弥彦温泉 四季の宿 みのや」。宿の最上階に位置する展望露天風呂や大浴場からは、彌彦神社の広大な杜や弥彦山の雄姿を目の前に仰ぎ見ることができ、初冬の凛とした空気の中で神域のパワーを肌で感じる特別な湯浴みが楽しめます。お湯は肌触りの柔らかなアルカリ性単純温泉で、長湯しても疲れにくい優しい泉質。夕食はお部屋食または個室食事処にて、料理長が腕を振るう越後割烹会席。寺泊港直送のズワイガニや脂の乗った日本海の冬魚、地元西蒲原の冬野菜をふんだんに取り入れた繊細な料理が並びます。",
              roomTip: "弥彦山と神社の杜を望むマウントビュー客室または最上階の和モダンツイン。朝一番の清々しい神社の鐘の音に耳を傾けながら心洗われる目覚め。",
              gourmetTip: "「寺泊港直送・冬の越後海鮮づくし会席」。旬の寒ブリ刺身、茹でたての日本海産紅ズワイガニ、のどぐろ煮付け、弥彦名物の枝豆を使った手作り真丈。",
              highlights: [
                "彌彦神社まで徒歩1分の好立地＆最上階展望露天風呂から見上げる弥彦山と神社の杜",
                "寺泊港直送の紅ズワイガニと寒ブリ＆お部屋食や個室で寛げる気兼ねない夕食タイム",
                "肌に優しいアルカリ性単純温泉＆弥彦山ロープウェイや門前散策のベースキャンプに最適"
              ]
            },
            {
              id: 4,
              name: "新潟　岩室温泉　自家源泉の宿　富士屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38824/38824.jpg",
              rating: 4.46,
              reviews: 743,
              price: "¥10,752〜",
              access: "北陸自動車道　巻潟東ＩＣより２０分／ＪＲ越後線　岩室駅よりタクシーで１０分",
              special: "2012年自家源泉で開湯!!　地元野菜と新潟山海の幸が自慢の老舗旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38824%2F38824.html",
              story: "岩室温泉の中でも珍しく敷地内から滾々と湧き出る「自家源泉」を贅沢に有する名湯宿「新潟 岩室温泉 自家源泉の宿 富士屋」。加水・加温を最小限に抑えた新鮮な源泉は、淡い緑褐色から黒色へと光の加減で変化する豊かな泉質で、豊富な硫黄分と塩分が身体の芯まで熱を届けます。庭園を望む大浴場や木造りの露天風呂、檜の内湯など、多彩な湯船で源泉の魅力をじっくり体感できます。夕食は新潟の旬の美味を極めた月替わりの創作会席料理。冬の味覚である寒ブリ大根や、表面はパリッと中はふっくら焼き上げたのどぐろ、新潟名物の南蛮エビや村上牛のすき焼きなど、一品一品に職人の技が光る美食の宿です。",
              roomTip: "庭園側の落ち着いた純和室またはリニューアルされたローベッド付き和モダン客室。広縁から冬枯れの情緒ある中庭を眺めながら静かに読書や休息を。",
              gourmetTip: "「自家源泉の宿特選・冬の日本海会席」。職人が絶妙な火加減で焼き上げる高級魚のどぐろ、南蛮エビのトロリとした甘み、村上牛と冬根菜の小鍋仕立て。",
              highlights: [
                "敷地内から滾々と湧く貴重な自家源泉＆光で色を変える上質な硫黄泉を木造り露天で満喫",
                "絶妙の火加減で焼き上げるのどぐろ姿焼き＆村上牛と冬野菜の温まる特製小鍋料理",
                "高い美肌効果と保温性を誇る名湯＆落ち着いた和の風情に癒やされる大人の隠れ宿"
              ]
            },
            {
              id: 5,
              name: "弥彦温泉　割烹の宿　櫻家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/69313/69313.jpg",
              rating: 4.26,
              reviews: 291,
              price: "¥16,300〜",
              access: "新潟市～車で約1時間/東京～北陸自動車道で約3時間半/三条・燕IC～車で約40分/JR弥彦駅徒歩1分 /弥彦神社車で3分",
              special: "館内素足で歩けるお子様に優しい宿。源泉豊富で広い湯舟の貸切風呂はご家族様に人気です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69313%2F69313.html",
              story: "彌彦神社の表参道沿いに佇み、料理自慢の割烹旅館として多くの食通から高い支持を集める隠れ宿「弥彦温泉 割烹の宿 櫻家」。わずか十数室の落ち着いた純和風の宿だからこそ叶う、きめ細やかで温かなもてなしと静謐な空間が魅力です。大浴場には弥彦の清らかな湯が満たされ、旅の疲れを優しく解きほぐしてくれます。夕食は創業以来の割烹の伝統を受け継ぐ本格日本料理。11月・12月には、市場で目利きされた極上の寒ブリ、まるまる肥えたのどぐろ、新潟の郷土料理である「のっぺ」や季節の真丈など、出汁の香りが際立つ本物の和食を、個室で新潟の銘酒とともに心ゆくまで堪能できます。",
              roomTip: "静けさに包まれた純和風客室。過度な装飾のない凛とした畳の空間で、表参道の落ち着いた風情を感じながらプライベートな時間を満喫。",
              gourmetTip: "「割烹櫻家名物・越後旬魚と銘酒会席」。寒ブリの重ね造り、一本釣りのどぐろの塩焼き、新潟名物「のっぺ汁」、羽釜で炊き上げる契約農家直送コシヒカリ。",
              highlights: [
                "参道沿いの静かな割烹旅館＆職人が腕を振るう出汁自慢の本格越後会席を個室で堪能",
                "市場で厳選した極上寒ブリの重ね造り＆契約農家から届く羽釜炊き新米コシヒカリ",
                "わずか十数室のプライベート感あふれる空間＆静かに食と温泉を愛でる大人のご褒美旅"
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
          alt="越後平野と初冬の弥彦山・岩室温泉"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 越後一宮参詣＆日本海冬美食特集｜新潟・弥彦＆岩室温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬情緒と日本海寒ブリ・のどぐろ会席<br className="hidden sm:inline" />
            越後一宮彌彦神社参詣＆開湯300年名物黒湯の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            神域の杉並木に漂う初冬の凛とした静寂。開湯300年を誇る岩室の名物「黒湯」で温まり、荒波の日本海で脂を蓄えた極上の寒ブリとのどぐろ、炊きたて新米コシヒカリに酔いしれる贅沢旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-indigo-400" /> 11月〜12月が寒ブリ・のどぐろ旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-indigo-400" /> 硫黄香る名物「黒湯」</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-indigo-400" /> 寒ブリしゃぶ＆のどぐろ塩焼き</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Sacred Heritage & Winter Bounty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                越後随一の霊峰と開湯300年の黒湯｜11月・12月に弥彦＆岩室温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本海と広大な越後平野を隔てるようにそびえる霊峰・弥彦山。その東麓に位置する「弥彦温泉」と「岩室温泉」は、新潟県内でも屈指の歴史と格式を誇る名湯地です。弥彦温泉のシンボルである越後一宮「彌彦神社」は、2400年以上の歴史を誇る古社であり、天香山命（あめのかごやまのみこと）を祀る越後開拓の祖神。11月には全国屈指の規模を誇る「弥彦菊まつり」で賑わい、12月に入ると観光客の喧騒が引いて、初雪のちらつく厳かで静謐な神域の空気が広がります。初冬の冷気の中で行う早朝参拝は、一年の締めくくりや新年に向けた心のリセットに格別の清々しさを与えてくれます。
            </p>
            <p>
              そして弥彦のすぐ北隣に位置する「岩室温泉」は、江戸時代の正徳年間に開湯した由緒ある湯治場。北国街道の宿場町として栄え、名立たる文人や芸妓文化が花開いたこの地には、全国的にも極めて珍しい名物「黒湯」が湧き出ています。微細な硫化鉄と天然の硫黄成分が混ざり合うことで、湯面が淡い墨色や灰緑色に濁る独特の泉質で、高い塩分濃度が身体を芯まで温め、初冬の冷えや乾燥した肌を優しく潤してくれます。
            </p>
            <p>
              旅の最大の楽しみである冬の味覚も、11月・12月はまさに極上。冷たい荒波が打ち寄せる日本海・寺泊港や佐渡沖から届く「寒ブリ」は、脂の乗りが最高潮に達し、刺身の切り口が美しく輝きます。さらに「白身のトロ」として名高い「のどぐろ」の香ばしい塩焼き、身がぎっしり詰まった紅ズワイガニ、そして収穫されたばかりの契約農家直送コシヒカリの新米。越後杜氏が丹精込めて仕込んだ新酒のしぼりたて地酒とともに味わう冬の宴は、訪れた者の心とお腹を至福で満たしてくれます。
            </p>
          </div>
        </section>

        {/* Section 1.5: Detailed Winter Landscape & Heritage */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Winter Scenery & Sacred Atmosphere</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初雪の弥彦連山と白波寄せる日本海｜冬の越後路が醸す幽玄の美
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              越後平野の西端にそそり立つ弥彦山（標高634m）は、古来より人々の信仰を集めてきた霊山。11月下旬になると山頂付近から初雪が降り始め、麓の杉並木にうっすらと雪が積もる光景は、水墨画のような幽玄な世界を作り出します。弥彦山ロープウェイで山頂展望台に登ると、東には白銀の冠雪を戴く越後山脈と広大な田園風景、西には日本海の荒波と沖合に浮かぶ佐渡島のシルエットが360度の大パノラマで迫ります。
            </p>
            <p>
              弥彦の門前町から岩室温泉へと続く旧北国街道沿いは、昔ながらの格子戸や白壁の土蔵が残り、初冬の夕暮れ時には軒先に灯る行灯が石畳を柔らかく照らし出します。日本海の海風が運ぶ潮の香りと、温泉街から立ち上る硫黄の湯けむりが溶け合う独特の旅情。豪雪地帯の内陸とは異なり、積雪が比較的穏やかな初冬のこの時期は、歴史散策や寺社巡りを落ち着いて楽しむのに最も適した隠れシーズンです。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Selected Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月厳選】弥彦＆岩室温泉の美食と名湯に浸る名旅館5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              彌彦神社参拝に最適な門前宿から、自家源泉の黒湯や割烹料理を誇る老舗旅館まで、旅のスタイルに合わせて選べる5軒を厳選。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {h.rating} ({h.reviews}件)
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold">
                    No.{h.id} おすすめ宿
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {h.name}
                      </h3>
                      <span className="text-lg sm:text-xl font-extrabold text-indigo-800">
                        {h.price} <span className="text-xs font-normal text-slate-500">/人〜</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                      {h.access}
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-indigo-50/60 rounded-2xl p-4 border border-indigo-100/80 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-slate-700">
                        <Eye className="w-4 h-4 text-indigo-800 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">客室の選び方：</strong>{h.roomTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <Utensils className="w-4 h-4 text-indigo-800 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">冬の極上グルメ：</strong>{h.gourmetTip}</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-medium">
                      ※表示料金は楽天トラベルの最新目安料金です
                    </span>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-sm shadow-md hover:from-indigo-700 hover:to-indigo-800 transition-all"
                    >
                      楽天トラベルでプランを見る
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
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                日本海の荒波が育む極上寒ブリと岩室「黒湯」の温浴メカニズム
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              初冬の日本海・佐渡海峡は、北西の季節風によって激しい荒波が立ちます。冷たい海水温に耐えるため、北上していたブリは一気に南下を開始し、全身に上質な脂を蓄えます。これが「寒ブリ」です。新潟近海で水揚げされる寒ブリは、マグロのとろにも匹敵する脂の甘みと、荒波で鍛えられた身のコリコリとした歯ごたえが共存。薄切りの身を昆布出汁にサッとくぐらせる「寒ブリしゃぶしゃぶ」は、余分な脂が落ちて魚本来の旨味が引き立ち、自家製ポン酢や薬味と絡み合って至福の味わいを生み出します。
            </p>
            <p>
              一方、岩室温泉の名物「黒湯」は、含硫黄-ナトリウム・カルシウム-塩化物温泉。地下の源泉に含まれる微細な硫化鉄微粒子がコロイド状に浮遊することで、黒褐色から灰緑色のにごりを呈します。硫黄成分が末梢血管を広げて血流を促すとともに、塩化物成分が皮膚表面に保温膜を形成。さらに弱アルカリ性の性質が古い角質を落とすため、一度の入浴で「血行促進・保温・角質ケア」の三重の美肌効果を享受できます。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の弥彦神社参詣と岩室黒湯・日本海冬海鮮を巡る癒やし旅
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-indigo-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-indigo-600" />
                【1日目】越後一宮参拝と門前散策・岩室温泉の名物黒湯へ
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">11:30</span>
                  <span><strong>JR燕三条駅到着＆弥彦へ：</strong>駅近で名物の燕三条背脂ラーメンまたは割烹で郷土料理の昼食。弥彦線で弥彦駅へ移動。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">13:30</span>
                  <span><strong>越後一宮 彌彦神社参拝：</strong>荘厳な杉並木の一の鳥居をくぐり、清々しい神域を参拝。門前の和菓子処で名物「玉兎」をお土産に。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">15:30</span>
                  <span><strong>岩室温泉宿へチェックイン：</strong>開湯300年の名物「黒湯」の露天風呂へ。微細な硫化鉄と硫黄が混ざるにごり湯で芯から温まる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>豪華越後会席：</strong>脂が乗った佐渡沖寒ブリの刺身やしゃぶしゃぶ、香ばしいのどぐろ塩焼き、炊きたて新米コシヒカリを堪能。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-indigo-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-indigo-600" />
                【2日目】弥彦山絶景ロープウェイと寺泊魚の市場通り
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">08:00</span>
                  <span><strong>朝風呂＆新米コシヒカリ朝食：</strong>静かな冬の庭園を眺めながら朝湯。つやつやの新米コシヒカリと郷土料理「のっぺ」に舌鼓。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">09:45</span>
                  <span><strong>弥彦山ロープウェイ：</strong>山麓駅から約5分の空中散歩で山頂へ。冠雪した初冬の越後連峰と白波寄せる日本海、佐渡島を一望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">11:30</span>
                  <span><strong>寺泊魚の市場通り（魚のアメ横）：</strong>車で約20分。軒先に並ぶ獲れたての紅ズワイガニ、寒ブリ、名物の浜焼きを堪能＆直送手配。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">14:00</span>
                  <span><strong>越後の酒蔵見学または燕三条金属加工直売所：</strong>上質な新潟の地酒やクラフト金物を買い求め、燕三条駅より新幹線で帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Seasonal Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Local Travel Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の弥彦＆岩室温泉旅行をさらに深める3つのポイント
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="bg-indigo-50/40 rounded-2xl p-5 border border-indigo-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Landmark className="w-5 h-5 text-indigo-600" />
                清々しい早朝の神社参拝
              </h3>
              <p className="leading-relaxed">
                初冬の彌彦神社は、観光客が訪れる前の朝7時〜8時台が最も神聖な空気に満ちています。吐く息の白さと木漏れ日、凛とした冷気の中で行う参拝は格別のご利益を感じられます。
              </p>
            </div>

            <div className="bg-indigo-50/40 rounded-2xl p-5 border border-indigo-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Snowflake className="w-5 h-5 text-indigo-600" />
                日本海の時化と冬魚の旨味
              </h3>
              <p className="leading-relaxed">
                11月下旬以降、日本海は冬の季節風で海が荒れる日が増えますが、荒波を乗り越えた寒ブリやのどぐろは身が引き締まり脂が最高の状態に。時化の合間の水揚げは至高の美味です。
              </p>
            </div>

            <div className="bg-indigo-50/40 rounded-2xl p-5 border border-indigo-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-indigo-600" />
                新酒しぼりたて地酒の解禁
              </h3>
              <p className="leading-relaxed">
                新潟県内各地の酒蔵では11月から12月にかけて新米で醸された「しぼりたて新酒」が次々と出荷されます。フレッシュでフルーティーな新酒生酒と濃厚な寒ブリの組み合わせは絶品です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                弥彦＆岩室温泉の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-indigo-800 font-extrabold shrink-0">Q.</span>
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
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！新潟・北陸の冬美食＆雪見温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              日本海沿岸の極上蟹・寒ブリ・名湯を巡る、厳選特集記事もぜひチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-niigata-tsukioka-onsen-emerald-bihada-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">新潟・エメラルド美肌湯</span>
              <h3 className="font-bold text-white text-sm">月岡温泉・エメラルドグリーンの硫黄泉と村上牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">国内随一の硫黄含有量を誇る美肌湯と越後美食。</p>
            </Link>

            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-sky-500/40 text-sky-200 font-bold text-[10px]">越後湯沢・雪国日本酒</span>
              <h3 className="font-bold text-white text-sm">越後湯沢温泉・ぽんしゅ館の地酒巡りと雪見露天の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">新幹線直結の白銀リゾートと南魚沼産コシヒカリ。</p>
            </Link>

            <Link 
              href="/winter-toyama-himi-kanburi-luxury-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">富山・氷見寒ぶり</span>
              <h3 className="font-bold text-white text-sm">富山氷見温泉・本場ひみ寒ぶり尽くしと立山連峰絶景の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">富山湾越しに白銀の立山連峰を望む絶景と氷見寒ぶり。</p>
            </Link>

            <Link 
              href="/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold text-[10px]">福井・越前がに</span>
              <h3 className="font-bold text-white text-sm">三国温泉・黄色いタグの越前がにフルコースと東尋坊夕陽の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">11月解禁の本場越前がにと日本海に沈む夕日のパノラマ。</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
