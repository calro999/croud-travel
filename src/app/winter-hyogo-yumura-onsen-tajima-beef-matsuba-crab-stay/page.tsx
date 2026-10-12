import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Mountain, Eye, Waves, Wine, ThermometerSun, Footprints, Droplets, Egg
} from 'lucide-react';

export const metadata: Metadata = {
  title: '兵庫・湯村温泉で過ごす冬の旅（11・12月）！本場但馬牛すき焼き！名宿5選',
  description: '11月から12月にかけて、兵庫県北部の山懐に抱かれた山陰の名湯「湯村温泉（ゆむらおんせん）」は、日本海の冬の王様「松葉ガニ（ズワイガニ）」の漁解禁と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '湯村温泉 宿泊, 但馬 温泉 11月 12月, 佳泉郷 井づつや, 朝野家, 湯村温泉 とみや, 湧泉の宿 ゆあむ, 大江戸温泉物語 三好屋, 松葉ガニ 宿, 但馬牛 すき焼き, 荒湯 温泉卵',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay/"
  },
  openGraph: {
    title: '兵庫・湯村温泉で過ごす冬の旅（11・12月）！本場但馬牛すき焼き！名宿5選',
    description: '11月から12月にかけて、兵庫県北部の山懐に抱かれた山陰の名湯「湯村温泉（ゆむらおんせん）」は、日本海の冬の王様「松葉ガニ（ズワイガニ）」の漁解禁と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '湯村温泉の荒湯から立ち上る湯けむりと冬の風情ある温泉街'
      }
    ]
  }
};

const faqList = [
  {
    "q": "湯村温泉の11月・12月の気候や積雪状況、冬の服装・足元は？",
    "a": "兵庫県北部の美方郡新温泉町に位置する湯村温泉は、日本海側気候に属するため、初冬から冬にかけてぐっと冷え込みます。11月の平均気温は8〜13℃前後で、朝夕は5℃以下まで冷え込みます。12月中旬以降は雪が降ることが増え、年末には積雪が見られるようになります。観光の際は、保温性に優れたダウンコートや厚手のウールコート、マフラー、手袋、ヒートテック等の防寒インナーが欠かせません。また、温泉街散策や「荒湯」周辺の川沿いを歩く際は、滑りにくい防水・防滑仕様のスニーカーやすノーブーツが安心です。"
  },
  {
    "q": "11月に解禁される「松葉ガニ」の特徴と湯村温泉での楽しみ方は？",
    "a": "松葉ガニとは、山陰地方の日本海で水揚げされる雄のズワイガニの地域呼称です。毎年11月6日に漁が解禁され、翌年3月下旬までが最盛期となります。湯村温泉は日本屈指のホタルイカやズワイガニの水揚げを誇る「浜坂漁港」から車で約20分と至近距離にあるため、鮮度抜群のタグ付き活松葉ガニを贅沢に味わえます。花が咲いたように広がる透き通った「カニ刺し」、香ばしい香りが立ち上る「焼きガニ」、濃厚な甘みが引き立つ「茹でガニ」、そしてカニ味噌を溶かし込んだ絶品「カニすき・カニ雑炊」まで、カニ尽くし会席を堪能できます。"
  },
  {
    "q": "湯村温泉のシンボル「荒湯（あらゆ）」とは？観光の楽しみ方は？",
    "a": "「荒湯」は嘉祥元年（848年）に慈覚大師が開湯したと伝わる湯村温泉の元湯で、毎分約470リットルもの温泉が98度という日本屈指の高熱で自噴しています。立ち上る白い湯けむりは湯村温泉の象徴的な風景です。観光客には荒湯の湯つぼを利用した「温泉卵づくり」が大人気。周辺の商店でネット入りの生卵（約3個〜）を購入し、湯つぼに約10分〜12分浸けておくだけで、黄身までほんのり塩味が効いてとろとろの極上温泉卵が完成します。春来川沿いの足湯「ふれあいの湯」に浸かりながら出来立ての温泉卵を味わうのが定番の楽しみ方です。"
  },
  {
    "q": "湯村温泉の泉質や効能、美肌効果について教えてください。",
    "a": "湯村温泉の泉質は「ナトリウム-炭酸水素塩・塩化物・硫酸塩泉。」です。弱アルカリ性（pH7.29）で無色透明、さらりとした優しい肌触りが特徴。古い角質を落とし肌をなめらかに整える「重曹（炭酸水素塩）」成分と、肌の水分を保ち保湿する「塩化物」成分、肌にハリと弾力を与える「硫酸塩」成分がバランスよく含まれているため、三大美肌成分を一度に享受できる「美人の湯」として高く評価されています。また、保温効果が極めて高いため、入浴後も湯冷めしにくく、冷え性や神経痛、疲労回復に抜群の効能があります。"
  },
  {
    "q": "大阪・神戸・京都から湯村温泉へのアクセス方法・冬の移動手段は？",
    "a": "公共交通機関を利用する場合、JR特急「こうのとり」または「はまかぜ」で「八鹿（ようか）駅」または「浜坂（はまさか）駅」へ。そこから全但バス「湯村温泉行き」で約25〜50分で到着します。また、大阪（梅田・新大阪）および神戸（三宮）から湯村温泉直通の特急高速バス（全但バス）が毎日運行しており、乗り換えなしで約3時間半〜4時間でアクセスできるため非常に便利です。車の場合は北近畿豊岡道路「八鹿氷ノ山IC」から国道9号線経由で約45分ですが、12月以降は降雪・凍結の可能性があるため、スタッドレスタイヤの装着が必須となります。"
  }
];

export default function HyogoYumuraWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay"
        },
        "headline": "【11・12月兵庫・湯村温泉の荒湯源泉情緒と解禁松葉ガニ】本場但馬牛すき焼き＆美肌高温泉の隠れ家宿5選",
        "description": "11月から12月にかけて、兵庫県北部の山懐に抱かれた山陰の名湯「湯村温泉（ゆむらおんせん）」は、日本海の冬の王様「松葉ガニ（ズワイガニ）」の漁解禁と、もうもうと立ち上る荒湯の湯けむりが旅情をかきたてる至高の冬シーズンを迎えます。中心を流れる春来川沿いには、日本屈指の高温98度を誇る元湯「荒湯」が湧き、名物の温泉卵や練り菓子づくりを体験。全国の黒毛和牛の頂点に君臨する本場「但馬牛」のとろけるステーキやすき焼き、近隣の浜坂港から直送される獲れたての松葉ガニフルコース、そして肌をしっとり潤す弱アルカリ性の美肌高温泉を満喫できる、厳選の名旅館・温泉ホテル5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T10:00:00+09:00",
        "dateModified": "T10:00:00+09:00",
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
          "name": "Croud Travel 山陰名湯・冬の味覚取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay#breadcrumb",
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
            "name": "兵庫・但馬 湯村温泉 荒湯源泉情緒と解禁松葉ガニ・但馬牛会席の宿",
            "item": "https://croud-travel.pages.dev/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay#faq",
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
              name: "湯村温泉　佳泉郷　井づつや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19964/19964.jpg",
              rating: 4.58,
              reviews: 1587,
              price: "¥9,900〜",
              access: "北近畿自動車道八鹿氷ノ山ＩＣより車で50分／大阪・三宮より特急バス約3時間／JR江原駅無料送迎あり(3日前までに要予約)",
              special: "自家泉源の上質な天然温泉を使用した多彩なお風呂◆料理長厳選の料理と技を堪能◆鳥取砂丘まで車で約40分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19964%2F19964.html",
              story: "湯村温泉街の高台に威風堂々と佇み、皇族をはじめ多くのVIPをもてなしてきた山陰屈指の大型グランド旅館「湯村温泉 佳泉郷 井づつや」。地下と屋上それぞれに趣向を凝らした湯処を備え、巨岩を配した野趣あふれる露天風呂や木肌の温もりあふれる檜風呂、展望大浴場から冬の山里風景を一望できます。11月・12月の冬の献立はまさに圧巻。料理長が厳選した但馬牛のフィレステーキやしゃぶしゃぶ、そして11月解禁の山陰浜坂港産松葉ガニの茹で姿盛りや香ばしい炭火焼きガニが贅沢に並びます。細部まで行き届いたおもてなしの心と、館内の回遊式日本庭園の風情が特別な記念日や家族旅行を格調高く演出します。",
              roomTip: "山側の清閑な和洋室または数寄屋造りの純和室。窓外に広がる山並みの初冬の雪景色と、遠くに立ち上る湯けむりの情緒を静かに満喫。",
              gourmetTip: "「但馬牛と浜坂産松葉ガニの特選極み会席」。本場但馬牛の鉄板ステーキ、甘みたっぷりの活松葉ガニの刺身、濃厚なカニ味噌甲羅焼き。",
              highlights: [
                "皇族も宿泊された格式と回遊式日本庭園＆巨岩を配した野趣あふれる露天風呂と檜風呂",
                "11月解禁の浜坂港産松葉ガニと本場但馬牛の極み会席＆きめ細やかなもてなしの心",
                "山陰屈指の大型旅館ならではの充実した館内施設＆特別な記念日旅行に最適な設備"
              ]
            },
            {
              id: 2,
              name: "山陰湯村温泉　朝野家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10714/10714.jpg",
              rating: 4.55,
              reviews: 1204,
              price: "¥6,600〜",
              access: "北近畿豊岡道八鹿氷ノ山ＩＣより車で約50分／阪急大阪三番街より全但特急バスで約3時間",
              special: "98℃の湯量豊富な美肌の湯と、但馬牛や松葉蟹など旬の味覚を彩る創作会席が自慢のおもてなしの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10714%2F10714.html",
              story: "茶道・華道・香道の「三道のおもてなし」を館内の随所に散りばめた風流極まる純和風旅館「山陰湯村温泉 朝野家」。敷地内に4本の自家源泉を所有し、毎分大量に自噴する98度の高温泉を加水・加温を最小限に抑えて贅沢に掛け流しています。数寄屋造りの客室の蛇口からも天然温泉が出るという贅沢さで、大浴場や露天風呂「天寿の湯」では初冬の冷気を感じながら極上の美肌湯を堪能できます。料理は伝統の京風会席に山陰の冬の味覚を融合させた逸品。近隣漁港直送の松葉ガニ鍋や、肉の旨味が凝縮した但馬牛の陶板焼きを、お香のかすかな香りに包まれた個室食事処で優雅に味わえます。",
              roomTip: "客室風呂にも天然温泉が引かれた露天風呂付き客室または格調高い数寄屋風和室。プライベートな空間で気兼ねなく湯浴みを愉しむ大人旅。",
              gourmetTip: "「朝野家名物・松葉ガニづくし会席＆但馬牛」。香ばしく炭火で炙る焼きガニ、旨味の出汁が染み出すカニすき鍋、但馬牛の炙り握り。",
              highlights: [
                "敷地内に4本の高温泉自家源泉を所有＆全客室のお風呂にも天然温泉を引いた贅沢",
                "茶道・華道・香道の「三道」が織りなす和の美学＆香ばしい焼きガニと但馬牛陶板焼き",
                "お部屋食または個室食事処でゆったり美食堪能＆源泉98度の圧倒的な湯力を実感"
              ]
            },
            {
              id: 3,
              name: "湯村温泉　とみや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182670/182670.jpg",
              rating: 4.33,
              reviews: 625,
              price: "¥8,500〜",
              access: "JR浜坂駅よりお車にて約20分",
              special: "自家源泉から湧き出す美人の湯でゆったりと。水産会社直営の宿として、旬なお料理でおもてなし。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182670%2F182670.html",
              story: "源泉「荒湯」から徒歩わずか数分、春来川のせせらぎ沿いに佇み、創業以来のアットホームな温もりと確かな料理の腕前で常連客を魅了する「湯村温泉 とみや」。宿自慢の大浴場「福禄寿の湯」や石造りの露天風呂には、自家源泉から湧き出る新鮮な高温泉が満たされており、しっとりとした肌触りと抜群の保温効果が初冬の寒さを心地よく癒やしてくれます。夕食は但馬の恵みを熟知した料理長が腕を振るう地産地消の創作会席。浜坂港直送の松葉ガニを贅沢に使った焼きガニやカニ刺し、但馬牛のすき焼き鍋など、ボリューム・質ともに大満足の美食体験が手頃な料金で叶います。",
              roomTip: "春来川を望む落ち着いた純和室。川のせせらぎと川沿いから立ち上る白い湯けむりを眺めながら、どこか懐かしい温泉情緒に浸るひととき。",
              gourmetTip: "「冬の但馬海山会席プラン」。身がぎっしり詰まった茹で松葉ガニ半身、霜降り但馬牛の陶板焼き、地元農家直送のこしひかりとカニ雑炊。",
              highlights: [
                "源泉「荒湯」まで徒歩すぐの好立地＆自家源泉掛け流しの肌になじむ天然温泉大浴場",
                "地産地消の松葉ガニ会席と但馬牛すき焼き鍋＆川のせせらぎを聞く落ち着いた和室",
                "家庭的で温かいおもてなし＆荒湯での温泉卵作り散策のベースキャンプに最適"
              ]
            },
            {
              id: 4,
              name: "山陰湯村温泉　湧泉の宿　ゆあむ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10636/10636.jpg",
              rating: 4.46,
              reviews: 1533,
              price: "¥6,400〜",
              access: "近畿豊岡道日高神鍋高原ICより約35分/大阪梅田より阪急特急バス「湯村温泉行」1日1～2便",
              special: "【和モダンな温泉宿】2023年2月温泉付客室＜かわみ＞3タイプ誕生。全34室",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10636%2F10636.html",
              story: "「身体に優しい宿」をコンセプトに、スタイリッシュな和モダンデザインと温かな木のぬくもりでリニューアルされた女性やカップルに大人気の宿「山陰湯村温泉 湧泉の宿 ゆあむ」。館内は伝統工芸「但馬編木（へんぎ）」をモチーフにした現代的なインテリアで彩られ、洗練された心地よい空間が広がります。肌にやさしい弱アルカリ性の天然温泉に浸かった後は、エステや湯上がり処でリラックス。夕食は地元の旬野菜や発酵食材を巧みに取り入れ、但馬牛と松葉ガニをヘルシーかつ贅沢に仕立てた創作和会席。朝食のせいろ蒸し野菜や身体が温まる温泉粥も大好評です。",
              roomTip: "シモンズベッドを配した和モダンツインまたはスーペリア和洋室。素足で心地よいフローリングと間接照明が織りなす極上の安らぎ空間。",
              gourmetTip: "「ゆあむ創作・冬の但馬美食ディナー」。低温調理で柔らかく仕上げた但馬牛ロースト、鮮度抜群の松葉ガニ刺身、但馬野菜とカニのせいろ蒸し。",
              highlights: [
                "和モダン×但馬編木のスタイリッシュな空間＆身体に優しいこだわり創作ディナー",
                "シモンズベッド完備の快適な客室＆女性に大人気の美肌温泉と温泉粥モーニング",
                "カップルや女子旅、一人旅に大好評＆洗練されたデザインと癒やしのエステ"
              ]
            },
            {
              id: 5,
              name: "大江戸温泉物語　三好屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/137491/137491.jpg",
              rating: 3.70,
              reviews: 1088,
              price: "¥10,000〜",
              access: "ＪＲ山陰本線　浜坂駅よりバスにて３０分",
              special: "秘湯気分を味わえる緑に囲まれた森林露天風呂が自慢の温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137491%2F137491.html",
              story: "湯村温泉の高台、自然豊かな森に囲まれ、四季折々の景観を見渡す展望露天風呂が自慢の「大江戸温泉物語 三好屋」。最大の名物は、温泉街から少し離れた森の中に佇む野趣満点の露天風呂。初冬には木々に降る初雪を眺めながら、ゆったりと源泉掛け流しの湯を堪能できます。食事は大江戸温泉物語ならではの豪華バイキングスタイルで、冬の味覚フェアでは旬の海鮮や揚げたて天ぷら、ローストビーフ、郷土の鍋料理などがずらりと並びます。ファミリーからグループ、一人旅まで、気兼ねなくリーズナブルに名湯・湯村温泉を楽しめる高コスパ宿です。",
              roomTip: "窓から湯村温泉街の湯けむりや山並みを見晴らす和室または洋室。広々とした間取りで、グループや三世代での気兼ねない滞在に最適。",
              gourmetTip: "「冬の贅沢バイキング＆グルメフェア」。ライブキッチンで焼き上げるステーキ、旬魚の刺身・寿司食べ放題、熱々の冬鍋料理、手作りデザート。",
              highlights: [
                "森に囲まれた野趣満点の展望露天風呂＆ファミリーにも大満足の豪華冬バイキング",
                "リーズナブルな価格設定で湯村温泉を満喫＆ステーキや刺身が楽しめる食べ放題",
                "高台から見渡す湯村温泉街の湯けむりパノラマ＆広々としたロビーラウンジ"
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
          alt="湯村温泉の荒湯と立ち上る初冬の湯けむり"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold">
            <Flame className="w-4 h-4" />
            11月・12月 冬の極上味覚＆源泉湯けむり特集｜兵庫・湯村温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">荒湯源泉情緒と11月解禁松葉ガニ<br className="hidden sm:inline" /> 本場但馬牛すき焼き＆美肌高温泉の隠れ家宿5選</h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            開湯1200年、98度の元湯「荒湯」がもたらす極上の潤い。11月に解禁される本場松葉ガニと、至高の但馬牛が織りなす冬の贅沢を味わい尽くす旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-emerald-400" /> 11月6日松葉ガニ漁解禁</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-emerald-400" /> 98度自噴「美人の高温泉」</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-emerald-400" /> 浜坂松葉ガニ＆本場但馬牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Ancient High-Temperature Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                湯けむり立ち上る荒湯と冬の極上美食｜11月・12月の湯村温泉が旅情を誘う理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              兵庫県の最北部、鳥取県境に近い但馬の山間にひっそりと佇む「湯村温泉（ゆむらおんせん）」。平安時代の嘉祥元年（848年）、慈覚大師によって発見されたと伝わる古湯であり、温泉街の中心を流れる春来川沿いには、日本屈指の高温である98度の源泉が毎分約470リットルも自噴する元湯「荒湯（あらゆ）」が湯けむりを立ち上げています。
            </p>
            <p>
              湯村温泉が年間で最も輝くのが、11月から12月にかけての初冬シーズンです。毎年11月6日には山陰の日本海で「松葉ガニ（ズワイガニ）」の漁が一斉に解禁。湯村温泉は日本海有数の水揚げを誇る浜坂漁港から車でわずか20分という恵まれた立地にあり、朝獲れたばかりの活松葉ガニが夕方には温泉宿の膳を豪華に彩ります。
            </p>
            <p>
              さらに、神戸牛や松阪牛など全国の名だたる黒毛和牛のルーツである「但馬牛（たじまぎゅう）」の故郷でもあり、とろけるような極上肉のステーキやすき焼きを同時に味わえるのは湯村温泉ならではの贅沢。荒湯でほくほくの温泉卵を作り、川沿いの足湯に浸かりながら、弱アルカリ性の美肌温泉に癒やされる厳選宿5選をご紹介します。
            </p>
          </div>
        </section>

        {/* Section 1.5: Detailed Arayu Culture & Egg Boiled Experience */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Egg className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Arayu Boiling Culture</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                源泉98度の荒湯で楽しむ名物「湯がき体験」｜住民と旅人が集うぬくもりの文化
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              湯村温泉の生活の中心であり続けてきた「荒湯」。今でも地元の住民たちが野菜や山菜、豆腐などを持ち寄って湯がき、日常の調理に活用している光景が見られます。98度の弱アルカリ性源泉で茹でると、アクが抜け、素材の持つ自然な甘みが引き出されると言われています。
            </p>
            <p>
              観光客にとって欠かせない名物体験が、荒湯の湯つぼで作る「温泉卵」です。売店で買い求めたネット入りの生卵を湯つぼに沈めて待つこと約11分。硫黄の香りをほのかにまとったプルプルの半熟温泉卵は、割ると黄身がトロリと流れ出し、そのままでも濃厚なコクを感じられます。近年では荒湯の熱を利用して練乳缶を数時間茹でて作る「荒湯生キャラメル」もスイーツ好きの間で大人気です。
            </p>
          </div>
        </section>

        {/* Section 1.8: Yumura 2-Day 1-Night Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Yumura Winter Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の湯村温泉1泊2日満喫モデルコース｜荒湯散策と解禁松葉ガニ・但馬牛会席紀行
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目：特急バスで湯村へ・荒湯足湯と贅沢カニ会席】</strong><br />
              大阪駅（阪急三番街）または神戸三宮から全但特急バスに乗車。丹波・但馬の山里風景を眺めながら約3時間半で湯村温泉バスターミナルへ直行。まずは温泉街の食事処で、肉汁あふれる但馬牛の焼肉丼や牛すじうどんでランチ。午後は春来川沿いを散策し、NHKドラマ『夢千代日記』の舞台となった昭和レトロな街並みや夢千代館を見学。荒湯で温泉卵を仕込み、出来立て熱々の卵を川沿いの足湯「ふれあいの湯」に浸かりながら堪能します。15時に旅館へチェックイン。高温泉ならではの掛け流し露天風呂で冷えた身体を芯から温めます。夕食は11月に解禁されたばかりの浜坂港産活松葉ガニと但馬牛の極上会席料理に舌鼓。
            </p>
            <p>
              <strong>【2日目：山里の朝湯と浜坂港・海産物お買い物めぐり】</strong><br />
              初冬の澄んだ山気を感じながら、日本庭園や渓流を望む朝風呂で心地よく目覚め。朝食にはカニの出汁が効いた味噌汁や源泉粥を味わいます。チェックアウト後は、タクシーまたは路線バスで車で約20分の「浜坂漁港」や海鮮市場「渡辺水産」へ足を伸ばします。水揚げされたばかりのズワイガニや干物、ホタルイカの沖漬けなどのお土産を買い求め、大満足の帰路につきます。
            </p>
          </div>
        </section>

        {/* Section 2: Recommended Hotels List */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Selected Yumura Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の湯村温泉を満喫する厳選おすすめ宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              格式ある大型名旅館から、自家源泉掛け流しの数寄屋宿、洗練された和モダンホテルまで、現地取材に基づき厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-md transition duration-300"
              >
                <div className="flex flex-col">
                  {/* Image Column */}
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <span className="inline-flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-md">
                            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                            {h.rating} ({h.reviews}件のクチコミ)
                          </span>
                          <span className="text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            兵庫県美方郡新温泉町湯
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-800 font-medium bg-emerald-50/70 px-3 py-1.5 rounded-lg border border-emerald-100/80">
                          {h.special}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Detail Points */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">客室の魅力：</strong>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <Utensils className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">冬の美食：</strong>{h.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="bg-slate-50 rounded-2xl p-4 space-y-2 text-xs text-slate-600">
                        <span className="font-bold text-slate-800 block text-xs uppercase tracking-wide">この宿の注目ポイント</span>
                        <ul className="space-y-1.5">
                          {h.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
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
                        <span className="text-2xl font-extrabold text-emerald-800">{h.price}</span>
                        <span className="text-xs text-slate-500 ml-1">※プラン・日程により変動</span>
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-900/10 transition duration-200 group"
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

        {/* Section 3: Tajima Beef & Matsuba Crab */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Tajima Gourmet Heaven</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月解禁「浜坂産松葉ガニ」と最高峰「但馬牛」が競演する至高の冬会席
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Waves className="w-5 h-5 text-cyan-600" />
                近隣浜坂港直送・タグ付き活松葉ガニのフルコース
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                11月6日に解禁される山陰の松葉ガニ。湯村温泉では、浜坂漁港で競り落とされた鮮度抜群の活ガニが供されます。透き通る身の甘みが広がる「カニ刺し」、炭火で香ばしく焼き上げる「焼きガニ」、濃厚なカニ味噌をすする「甲羅焼き」、そして旨味たっぷりの「カニすき」まで、冬の味覚の王様を堪能できます。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                全国の銘柄和牛のルーツ「本場但馬牛」の霜降りステーキ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                松阪牛や神戸牛などの素牛として知られる純血種の但馬牛。人肌で溶ける上質な脂と赤身の深い旨味は、鉄板焼きステーキやすき焼きでその真価を発揮します。初冬の冷気の中で熱々のすき焼き鍋を囲み、地元の地酒とともに味わう時間は、まさに大人の贅沢旅行の極みです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Hot Spring Qualities */}
        <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-900">
            <div className="p-2.5 rounded-2xl bg-emerald-900/60 text-emerald-300">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Three-Fold Beautifying Water</span>
              <h2 className="text-xl sm:text-2xl font-bold">
                三大美肌成分を一度に補給｜湯村温泉の奇跡的な美肌効能
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-emerald-300 text-sm">炭酸水素塩泉（クレンジング）</h4>
              <p>
                「美人の湯」を象徴する重曹成分が、皮膚の古い角質や毛穴の汚れを優しく乳化して落とし、湯上がりの肌をつるつるスベスベに整えます。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-emerald-300 text-sm">塩化物泉（保温・保湿）</h4>
              <p>
                塩分が皮膚の表面をコーティングして水分の蒸発を防ぎ、しっとりとした潤いをキープ。身体の芯から温まり、冷え性を根本から改善します。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-emerald-300 text-sm">硫酸塩泉（ハリと弾力）</h4>
              <p>
                肌の弾力を高め、乾燥しがちな冬の素肌にしなやかなハリをもたらす「若返りの湯」の成分。湯上がり後は化粧水不要と言われるほどの潤い感を実感できます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Access & Travel Planning */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Travel Planning & Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                湯村温泉へのアクセスと冬旅を快適に楽しむポイント
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              冬期の湯村温泉への移動は、<strong>大阪・神戸からの直通特急バス</strong>または<strong>JR特急＋路線バス</strong>の利用が安全でおすすめです。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">特急高速バス（乗り換えなし推奨）</span>
                <p className="text-slate-600">
                  大阪（阪急梅田・新大阪）および神戸（三宮）から全但特急バスが毎日運行。約3時間半〜4時間で湯村温泉バスターミナルへ直行できます。冬道運転の不安がなく最も人気です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">JR特急＋路線バス</span>
                <p className="text-slate-600">
                  JR特急「こうのとり」または「はまかぜ」で八鹿駅または浜坂駅へ。駅前から全但バス「湯村温泉行き」で約25〜50分。雪景色を車窓から楽しむ風情ある鉄道旅です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                兵庫・但馬 湯村温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Related Kansai & Sanin Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい山陰・関西の冬名湯＆極上カニ・和牛会席特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の冬の味覚、松葉ガニやブランド和牛、歴史ある名湯をめぐる厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">兵庫・城崎温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">七田外湯めぐりと解禁松葉ガニ・冬の柳並木情緒の宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">鳥取・三朝温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">世界屈指のラドン温泉ととっとり松葉がに・鳥取和牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">京都・天橋立温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">日本三景雪景色と幻の間人ガニ・初冬の阿蘇海を望む宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">福井・あわら温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">本場越前がにの極みと庭園露天風呂・関西奥座敷の名宿</h3>
            </Link>
            <Link 
              href="/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">岡山・湯原温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">西の横綱砂湯とpH9.3アルカリ美肌泉・蒜山ジャージー牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">石川・山中温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">鶴仙渓の初冬静寂と解禁加能ガニ・芭蕉ゆかりの白濁名湯宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
