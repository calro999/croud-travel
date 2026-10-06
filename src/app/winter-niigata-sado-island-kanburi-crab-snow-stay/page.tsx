import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Ship
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月佐渡】冬の王者「佐渡寒ブリ」と活本ズワイガニ！名宿5選',
  description: '11月から1月、日本海に浮かぶ新潟県・佐渡島は、冬の味覚の王者が勢揃いする一年で最も贅沢なグルメシーズンを迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '佐渡寒ブリ 宿泊, 佐渡島 冬旅行, 佐渡金山 世界遺産 冬, 八幡館 佐渡, 吉田家 加茂湖, 佐渡温泉 かけ流し, 本ズワイガニ 佐渡, 11月 12月 1月 新潟旅行, 波の花 佐渡',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-niigata-sado-island-kanburi-crab-snow-stay/"
  },
  openGraph: {
    title: '【11・12・1月佐渡】冬の王者「佐渡寒ブリ」と活本ズワイガニ！名宿5選',
    description: '11月から1月、日本海に浮かぶ新潟県・佐渡島は、冬の味覚の王者が勢揃いする一年で最も贅沢なグルメシーズンを迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-niigata-sado-island-kanburi-crab-snow-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の佐渡島寒ブリと雪化粧の佐渡金山'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月佐渡】冬の王者「佐渡寒ブリ」と活本ズワイガニ・雪化粧の佐渡金山＆日本海絶景の佐渡温泉を堪能する名宿5選",
    description: "11月から1月、日本海に浮かぶ新潟県・佐渡島は、冬の味覚の王者が勢揃いする一年で最も贅沢なグルメシーズンを迎えます。11月中旬に発令される名物「佐渡寒ブリ宣言」を皮切りに、荒海を南下して丸々と太った天然寒ブリが水揚げされ、とろけるような脂の乗りを誇る寒ブリ刺身や極上の寒ブリしゃぶしゃぶが食卓へ。さらに冬の日本海の荒波が育む活本ズワイガニや南蛮エビ、幻のブランド牛「佐渡牛」が贅を極めます。2024年に世界文化遺産に登録された「佐渡島の金山」や北沢浮遊選鉱場跡は、しんしんと降る雪をまとって幽玄の美を放ち、海岸線では冬の風物詩「波の花」が舞い散る情景も。両津湾や加茂湖、日本海の絶景を望む掛け流しの佐渡温泉と美食に酔いしれる厳選5宿を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function NiigataSadoIslandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-niigata-sado-island-kanburi-crab-snow-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev"
        },
        "headline": "【11・12・1月佐渡】冬の王者「佐渡寒ブリ」と活本ズワイガニ・雪化粧の佐渡金山＆日本海絶景の佐渡温泉を堪能する名宿5選",
        "description": "11月から1月、日本海に浮かぶ新潟県・佐渡島は、冬の味覚の王者が勢揃いする一年で最も贅沢なグルメシーズンを迎えます。11月中旬に発令される名物「佐渡寒ブリ宣言」を皮切りに、荒海を南下して丸々と太った天然寒ブリが水揚げされ、とろけるような脂の乗りを誇る寒ブリ刺身や極上の寒ブリしゃぶしゃぶが食卓へ。さらに冬の日本海の荒波が育む活本ズワイガニや南蛮エビ、幻のブランド牛「佐渡牛」が贅を極めます。2024年に世界文化遺産に登録された「佐渡島の金山」や北沢浮遊選鉱場跡は、しんしんと降る雪をまとって幽玄の美を放ち、海岸線では冬の風物詩「波の花」が舞い散る情景も。両津湾や加茂湖、日本海の絶景を望む掛け流しの佐渡温泉と美食に酔いしれる厳選5宿を徹底ガイドします。",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-10-01T00:00:00+09:00",
        "dateModified": "2026-10-01T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "クラドトラベル編集部"
        },
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-niigata-sado-island-kanburi-crab-snow-stay"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-niigata-sado-island-kanburi-crab-snow-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev"
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
            "name": "佐渡島の冬寒ブリと金山絶景温泉特集",
            "item": "https://croud-travel.pages.dev/winter-niigata-sado-island-kanburi-crab-snow-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-niigata-sado-island-kanburi-crab-snow-stay#faq",
        "mainEntity": [{"@type":"Question","name":"「佐渡寒ブリ宣言」とは何ですか？旬の時期や味の特徴は？","acceptedAnswer":{"@type":"Answer","text":"「佐渡寒ブリ宣言」は、佐渡魚市場が毎年11月中旬から下旬頃、佐渡沖の定置網で1本8kg〜10kg以上の丸々と太った良質な天然ブリがまとまって水揚げされた際に発令する公式宣言です。北海道でたっぷりとエサを食べて南下してきた寒ブリは、佐渡沖の激しい荒波と冷たい海水で引き締まり、全身に霜降り状のきめ細かな脂を蓄えています。12月から1月が最も脂の乗りが最高潮となり、包丁を入れると脂で白く曇るほどの濃厚な旨味を持ちながら、くどさが全くない極上の後味が特徴。刺身はもちろん、サッと出汁にくぐらせる「ブリしゃぶ」や、味がしっかり染みた「ブリ大根」は冬の佐渡でしか味わえない至宝です。"}},{"@type":"Question","name":"冬（11月〜1月）の佐渡島へのアクセスは？フェリーは欠航しませんか？","acceptedAnswer":{"@type":"Answer","text":"佐渡島へは、新潟港から両津港を結ぶ「佐渡汽船」の大型カーフェリー（所要約2時間30分）およびジェットフォイル（高速船・所要約1時間7分）が通年運航しています。冬の日本海は波が高くなりやすいですが、総トン数約5,000トン以上の大型カーフェリーは高い耐波性を備えており、冬期でも就航率は約90%以上と極めて安定しています。一方、ジェットフォイルは高波時に欠航することがあるため、冬の旅行ではカーフェリーの利用が安心です。新潟港まではJR新潟駅から路線バスで約15分と接続も抜群です。"}},{"@type":"Question","name":"世界遺産に登録された「佐渡島の金山」は冬も見学できますか？雪の様子は？","acceptedAnswer":{"@type":"Answer","text":"2024年に世界文化遺産に登録された「佐渡島の金山（相川鶴子金銀山）」は、冬期（11月〜1月）も無休で営業しており見学可能です（坑道内は年間を通じて約10℃前後に保たれているため、冬は外気よりも暖かく感じられます）。手掘りの江戸幕府直轄坑道「宗太夫坑」や、明治以降の近代化遺産「道遊坑」をじっくり探索できます。また、巨大な割れ目が印象的な「道遊の割戸」や近代産業遺産「北沢浮遊選鉱場跡」に雪が降り積もる冬景色は、まるでジブリ映画の廃墟のような幽玄の美しさを醸し出します。"}},{"@type":"Question","name":"冬の佐渡島の気候や道路の積雪状況はどうですか？車で観光できますか？","acceptedAnswer":{"@type":"Answer","text":"佐渡島は日本海に位置しますが、沖合を流れる対馬暖流の影響を受けるため、新潟本土の内陸部（魚沼や湯沢など）と比べると積雪量は格段に少なく、冬でも比較的温暖です。ただし、大佐渡スカイラインなど山間部の観光道路は冬期通行止めとなり、寒波が襲来した際は道路の積雪や路面凍結が発生します。レンタカーやマイカーを利用する場合は必ずスタッドレスタイヤを装着してください。平野部や主要国道（両津〜佐和田〜相川など）は消雪パイプや除雪車が稼働しており、安全運転を心がければレンタカーでの周遊も十分に可能です。"}},{"@type":"Question","name":"冬の佐渡海岸で見られる「波の花（なみのはな）」とは何ですか？","acceptedAnswer":{"@type":"Answer","text":"「波の花」とは、冬の日本海の荒波が海岸の岩肌に激しく打ち寄せる際、海水中の植物プランクトンの粘液（粘着質のタンパク質）が泡立ち、無数の白い泡の塊となって海岸を埋め尽くす冬の自然現象です。強い冬の季節風が吹くと、泡がちぎれて雪のように宙を舞い散る幻想的な情景が見られます。佐渡島北部の外海府海岸や夫婦岩周辺、尖閣湾などで11月下旬から1月の強風時に頻繁に観察され、冬の佐渡の厳しくも美しい風物詩として知られています。"}}]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "佐渡随一の源泉かけ流し八幡温泉　八幡館＜佐渡島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6196/6196.jpg",
              rating: 4.23,
              reviews: 540,
              price: "¥7,650〜",
              access: "お車で約35分、国道350号線からお入りください。両津港、小木港から路線バスにて約50分、八幡温泉前下車で目の前です",
              special: "佐渡の中央にあり観光にもビジネスにも便利。佐渡屈指の名湯「八幡温泉」とゆとりある客室が自慢♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6196%2F6196.html",
              story: "昭和天皇・皇后両陛下をはじめ数多くの皇族方がご宿泊された佐渡屈指の名門格式宿「八幡館」。広大な敷地内には手入れの行き届いた日本庭園が広がり、冬になると松の木に施された雪吊りと白銀の庭が美しい調和を見せます。館内には佐渡随一を誇る地下深層から自噴する自家源泉が引き込まれ、弱アルカリ性の柔らかな食塩泉が湯量豊富に掛け流されています。湯冷めしにくく肌をしっとりと包み込む名湯で温まった後は、佐渡の冬の美食が並ぶ贅沢な会席料理。定置網で獲れたてを直送した佐渡寒ブリの薄造りやブリ大根、本ズワイガニ、そして佐渡牛の陶板焼きなど、島の恵みを極上のサービスとともに味わえます。",
              roomTip: "日本庭園を一望する本館和室。雪吊りの美しい松林と手入れされた庭園を縁側から静かに眺め、優雅な大人の休息を過ごせます。",
              gourmetTip: "「佐渡寒ブリ三昧＆活本ズワイガニ極上会席」。とろけるような寒ブリの刺身と、黄金色の出汁にくぐらせる寒ブリしゃぶしゃぶの甘みが絶品です。",
              highlights: [
                "皇族ゆかりの由緒ある名門旅館＆佐渡随一の源泉かけ流し八幡温泉の極上湯浴み",
                "佐渡寒ブリ宣言発令の極上寒ブリ薄造り＆本ズワイガニと佐渡牛の豪華共演",
                "冬の雪吊りが美しい広大な日本庭園散策＆世界遺産佐渡金山へのアクセス良好"
              ]
            },
            {
              id: 2,
              name: "湖畔の宿　吉田家　＜佐渡島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10682/10682.jpg",
              rating: 4.21,
              reviews: 480,
              price: "¥9,680〜",
              access: "佐渡汽船　両津港よりお車にて５分。無料送迎バス有り（要予約）",
              special: "両津港よりお車にて５分。（到着時電話にてお向かいあり、翌日も定期的に佐渡汽船まで送りあり）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10682%2F10682.html",
              story: "佐渡最大の湖・加茂湖のほとりに建ち、創業百六十余年の伝統を誇る老舗旅館「湖畔の宿 吉田家」。最上階の展望大浴場や露天風呂からは、穏やかな加茂湖の水面と遠くに連なる大佐渡山地の雪景色を一望。夜には対岸の両津港の灯りが湖面に揺らめき、旅情をかき立てます。天然温泉「加茂湖温泉」はナトリウム-炭酸水素塩・塩化物泉で、美肌効果抜群のつるつる湯。夕食は加茂湖名物の冬牡蠣（加茂湖オイスター）や脂が乗った佐渡寒ブリ、紅ズワイガニ、日本海の鮮魚など、港町・両津ならではの鮮度抜群の海の幸がテーブルを華やかに彩ります。",
              roomTip: "加茂湖ビュー和洋室。朝霧が立ち込める静かな湖面と雪の山並みをベッドからパノラマで望む贅沢な目覚めを体験できます。",
              gourmetTip: "「加茂湖産冬牡蠣陶板焼きと佐渡寒ブリしゃぶしゃぶ膳」。濃厚なミルクのような牡蠣の旨味と、脂の乗った寒ブリの贅沢な競演です。",
              highlights: [
                "加茂湖畔に佇む創業百六十余年の老舗＆最上階展望風呂から望む冬の湖面パノラマ",
                "加茂湖産冬牡蠣陶板焼きと寒ブリしゃぶしゃぶ＆両津港直送の鮮魚会席",
                "両津港フェリーターミナルから車で5分＆観光やビジネスにも便利な好立地"
              ]
            },
            {
              id: 3,
              name: "椎崎温泉　夕日と湖の宿　あおきや　＜佐渡島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7031/7031.jpg",
              rating: 3.59,
              reviews: 290,
              price: "¥6,600〜",
              access: "両津港から車で5分／送迎有(旅館組合駐車場　要事前連絡 )、新潟港から高速船で67分／フェリーで2時間半◆",
              special: "加茂湖畔の高台に建ち全客室より加茂湖を眺望。肌に良い温泉と佐渡の美味しい海の幸をお召し上がり下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7031%2F7031.html",
              story: "加茂湖を見下ろす高台・椎崎温泉に位置し、息を呑むような夕日と湖のパノラマビューが自慢の「夕日と湖の宿 あおきや」。全客室から加茂湖と両津湾の絶景を望むことができ、夕暮れ時には茜色から紫色のグラデーションに染まる空と雪景色の湖が息を呑む美しさです。最上階の展望パノラマ大浴場では、琥珀色のナトリウム-炭酸水素塩・塩化物温泉に浸かりながら、まるで空に浮かんでいるかのような開放感を満喫。料理は冬の佐渡の味覚を凝縮した浜会席で、寒ブリ刺身、茹で本ズワイガニ、佐渡産コシヒカリの炊きたて釜飯など、心温まる手作りのおもてなしが光ります。",
              roomTip: "加茂湖一望の展望和室。静寂に包まれた冬の湖畔の夕暮れから満天の星空へと移り変わる情景をプライベートに独占できます。",
              gourmetTip: "「冬の日本海・本ズワイガニ一杯付き寒ブリ会席」。甘み豊かなカニ身と濃厚なカニ味噌、そして香ばしい佐渡寒ブリの照り焼きが美味です。",
              highlights: [
                "加茂湖を見下ろす椎崎温泉の高台＆夕暮れ時に茜色に染まる絶景ビュー",
                "本ズワイガニ一杯付き寒ブリ会席＆佐渡産コシヒカリの炊きたて釜飯",
                "全室加茂湖ビューの静寂なロケーション＆冬の湖畔の夕景に癒やされる滞在"
              ]
            },
            {
              id: 4,
              name: "ホテルニュー桂　＜佐渡島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15276/15276.jpg",
              rating: 4.09,
              reviews: 310,
              price: "¥6,350〜",
              access: "佐渡汽船両津港より車で5分",
              special: "両津港より車で5分、無料送迎あります☆湖と両津湾に挟まれた高台の温泉で眺望良好　露天風呂も好評です！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15276%2F15276.html",
              story: "椎崎温泉の高台、豊かな自然林に囲まれて静かに佇む「ホテルニュー桂」。館内には佐渡の伝統芸能「能」の舞台があり、歴史と文化が色濃く薫る落ち着いた空間です。展望露天風呂からは加茂湖の雄大な冬景色を見下ろし、澄んだ冬の風を感じながら源泉掛け流しの湯にゆったりと浸かることができます。夕食は佐渡の海の幸と山の幸をバランスよく取り入れた創作和食会席。佐渡寒ブリのしゃぶしゃぶやすき焼き、日本海の南蛮エビ、サザエの壺焼きなど、厳選された島の食材を佐渡の銘酒「北雪」や「真野鶴」とともに楽しめます。",
              roomTip: "湖側和室。窓辺のこたつに足を入れながら、加茂湖を行き交う牡蠣養殖の小舟と白銀の風景を眺めてのんびり寛げます。",
              gourmetTip: "「佐渡牛陶板焼きと旬魚寒ブリ会席」。肉質のきめ細かな佐渡牛の芳醇な旨味と、獲れたて寒ブリの刺身が贅沢に揃います。",
              highlights: [
                "館内に本格的な能舞台を備える雅な空間＆加茂湖を望む展望露天風呂",
                "佐渡牛陶板焼きと寒ブリしゃぶしゃぶ＆佐渡銘酒「北雪」とのペアリング",
                "静寂な自然林に囲まれた大人の隠れ家＆伝統の佐渡文化に浸る贅沢な時間"
              ]
            },
            {
              id: 5,
              name: "小木温泉　旅館かもめ荘　＜佐渡島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31586/31586.jpg",
              rating: 3.91,
              reviews: 160,
              price: "¥7,150〜",
              access: "JR新潟駅→佐渡汽船新潟港～佐渡両津港→車で６０分。JR北陸本線直江津駅→佐渡汽船直江津港～小木港より徒歩１０分",
              special: "100％源泉かけ流し天然温泉×新鮮な魚介類を堪能♪港近くの静かな住宅地に建つペンション風の平屋建て。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31586%2F31586.html",
              story: "佐渡南部の歴史ある港町・小木港近くに位置する「小木温泉 旅館かもめ荘」。名物の「たらい舟」体験や宿根木の古い町並み散策の拠点として最適な立地です。地下深くから湧き出す自家源泉「小木温泉」は、佐渡では珍しいph9.2を誇る純度100%のアルカリ性単純温泉。まるで美容液のような驚異的なとろみがあり、「奇跡の美肌湯」として温泉通を唸らせています。料理は小木港直送の新鮮な魚介が中心。冬の荒波で引き締まった寒ブリ、アワビ、サザエ、そして家庭的な温かさあふれる島の手作り料理がリーズナブルに味わえます。",
              roomTip: "素朴で清潔な和室。窓を開ければ心地よい潮騒が聞こえ、港町の風情に包まれながら心安らぐ静かな夜を過ごせます。",
              gourmetTip: "「小木港直送・地魚寒ブリ刺身と海鮮浜鍋膳」。地元の漁師から直接仕入れる新鮮な寒ブリと、魚介の出汁がたっぷり出た熱々鍋が格別です。",
              highlights: [
                "pH9.2のトロトロ純生アルカリ性自家源泉＆名物たらい舟の小木港至近",
                "小木港水揚げの獲れたて寒ブリ刺身と海鮮浜鍋＆家庭的な温かさあふれる島料理",
                "奇跡の美肌湯として評判の源泉100%温泉＆宿根木のレトロ町並み散策に最適"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "「佐渡寒ブリ宣言」とは何ですか？旬の時期や味の特徴は？",
    "a": "「佐渡寒ブリ宣言」は、佐渡魚市場が毎年11月中旬から下旬頃、佐渡沖の定置網で1本8kg〜10kg以上の丸々と太った良質な天然ブリがまとまって水揚げされた際に発令する公式宣言です。北海道でたっぷりとエサを食べて南下してきた寒ブリは、佐渡沖の激しい荒波と冷たい海水で引き締まり、全身に霜降り状のきめ細かな脂を蓄えています。12月から1月が最も脂の乗りが最高潮となり、包丁を入れると脂で白く曇るほどの濃厚な旨味を持ちながら、くどさが全くない極上の後味が特徴。刺身はもちろん、サッと出汁にくぐらせる「ブリしゃぶ」や、味がしっかり染みた「ブリ大根」は冬の佐渡でしか味わえない至宝です。"
  },
  {
    "q": "冬（11月〜1月）の佐渡島へのアクセスは？フェリーは欠航しませんか？",
    "a": "佐渡島へは、新潟港から両津港を結ぶ「佐渡汽船」の大型カーフェリー（所要約2時間30分）およびジェットフォイル（高速船・所要約1時間7分）が通年運航しています。冬の日本海は波が高くなりやすいですが、総トン数約5,000トン以上の大型カーフェリーは高い耐波性を備えており、冬期でも就航率は約90%以上と極めて安定しています。一方、ジェットフォイルは高波時に欠航することがあるため、冬の旅行ではカーフェリーの利用が安心です。新潟港まではJR新潟駅から路線バスで約15分と接続も抜群です。"
  },
  {
    "q": "世界遺産に登録された「佐渡島の金山」は冬も見学できますか？雪の様子は？",
    "a": "2024年に世界文化遺産に登録された「佐渡島の金山（相川鶴子金銀山）」は、冬期（11月〜1月）も無休で営業しており見学可能です（坑道内は年間を通じて約10℃前後に保たれているため、冬は外気よりも暖かく感じられます）。手掘りの江戸幕府直轄坑道「宗太夫坑」や、明治以降の近代化遺産「道遊坑」をじっくり探索できます。また、巨大な割れ目が印象的な「道遊の割戸」や近代産業遺産「北沢浮遊選鉱場跡」に雪が降り積もる冬景色は、まるでジブリ映画の廃墟のような幽玄の美しさを醸し出します。"
  },
  {
    "q": "冬の佐渡島の気候や道路の積雪状況はどうですか？車で観光できますか？",
    "a": "佐渡島は日本海に位置しますが、沖合を流れる対馬暖流の影響を受けるため、新潟本土の内陸部（魚沼や湯沢など）と比べると積雪量は格段に少なく、冬でも比較的温暖です。ただし、大佐渡スカイラインなど山間部の観光道路は冬期通行止めとなり、寒波が襲来した際は道路の積雪や路面凍結が発生します。レンタカーやマイカーを利用する場合は必ずスタッドレスタイヤを装着してください。平野部や主要国道（両津〜佐和田〜相川など）は消雪パイプや除雪車が稼働しており、安全運転を心がければレンタカーでの周遊も十分に可能です。"
  },
  {
    "q": "冬の佐渡海岸で見られる「波の花（なみのはな）」とは何ですか？",
    "a": "「波の花」とは、冬の日本海の荒波が海岸の岩肌に激しく打ち寄せる際、海水中の植物プランクトンの粘液（粘着質のタンパク質）が泡立ち、無数の白い泡の塊となって海岸を埋め尽くす冬の自然現象です。強い冬の季節風が吹くと、泡がちぎれて雪のように宙を舞い散る幻想的な情景が見られます。佐渡島北部の外海府海岸や夫婦岩周辺、尖閣湾などで11月下旬から1月の強風時に頻繁に観察され、冬の佐渡の厳しくも美しい風物詩として知られています。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50/50 pb-20 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" 
            alt="冬の佐渡島と日本海の荒波背景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30">
            <Snowflake className="w-3.5 h-3.5" />
            11月・12月・1月限定 佐渡寒ブリ＆世界遺産金山特集
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            【新潟・佐渡島】冬の王者「佐渡寒ブリ」と活本ズワイガニ・雪化粧の佐渡金山＆日本海絶景の佐渡温泉を堪能する名宿5選
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed pt-2">
            11月に発令される「佐渡寒ブリ宣言」。日本海の荒波が生んだ極上寒ブリの刺身とブリしゃぶ、活本ズワイガニ、そして雪化粧した世界遺産・佐渡金山。源泉かけ流しの美肌温泉とともに味わう冬の離島美食旅へ。
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-2 border-t border-stone-700/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2026年10月最新取材</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 新潟県佐渡市（両津・八幡・椎崎・小木）</span>
            <span className="flex items-center gap-1.5"><Ship className="w-3.5 h-3.5" /> 佐渡汽船カーフェリー＆ジェットフォイル</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">

        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-teal-800" />
              初冬・真冬の佐渡島が日本屈指の美食パラダイスである理由
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              日本海の荒海が育てる極上寒ブリと本ズワイガニ・世界遺産を彩る白銀の静寂
            </h2>
          </div>

          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              日本海最大の離島・佐渡島。冬になると強い北西の季節風が吹き荒れ、日本海の荒波が岩肌を叩く厳しくも力強い情景が広がります。しかし、この厳しい寒さと激しい海流こそが、全国の食通を熱狂させる冬の極上食材を生み出す最大の恵みなのです。
            </p>
            <p>
              その頂点に君臨するのが、11月中旬に「佐渡寒ブリ宣言」が出される天然寒ブリ。北海道から対馬暖流に乗って南下してきた丸々と肥えたブリが、佐渡両津湾の大型定置網で水揚げされます。冷たい海水に揉まれた身は霜降りの極上脂をまとい、一口食べれば舌の上で甘やかに溶けていく至高の味わい。さらに、同じく旬を迎える活本ズワイガニや南蛮エビ、佐渡の豊かな大地が育てた希少な「佐渡牛」など、冬の佐渡はまさに「食材の宝庫」です。
            </p>
            <p>
              2024年に世界文化遺産に登録された「佐渡島の金山」や、産業遺産の傑作「北沢浮遊選鉱場跡」は、冬になると白い粉雪をまとって静謐な美しさを湛えます。観光客が落ち着いた冬の島で、加茂湖や日本海を望む源泉かけ流しの温泉に浸かり、地酒「北雪」とともに極上寒ブリを味わう贅沢。心震える佐渡の名宿5選をご案内します。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              <ShieldCheck className="w-4 h-4" />
              厳選宿泊施設ガイド
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              佐渡寒ブリと絶景温泉に浸る名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              全宿楽天トラベル公式APIより最新宿泊プラン＆空室情報をリアルタイム取得中
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((h: any) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200/80 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      第{h.id}位
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-teal-600 text-xs font-bold mb-1">
                        <Waves className="w-3.5 h-3.5" />
                        佐渡温泉＆極上寒ブリ美食宿
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-xs text-stone-500">
                        <span className="flex items-center gap-1 text-amber-600 font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {h.rating}
                        </span>
                        <span>({h.reviews}件のクチコミ)</span>
                        <span className="font-bold text-stone-800">{h.price}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-3">
                        {h.story}
                      </p>

                      <div className="bg-stone-50 rounded-xl p-3 mt-3 border border-stone-100 space-y-1.5 text-xs text-stone-600">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">お部屋のポイント:</span>
                          <span>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">冬の味覚:</span>
                          <span>{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-1 text-xs text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div className="text-[11px] text-stone-500 truncate max-w-[200px]">
                        {h.access}
                      </div>
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-teal-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              佐渡汽船で行く冬の寒ブリ三昧と世界遺産佐渡金山巡り
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【1日目】新潟港から佐渡へ・世界遺産金山と寒ブリ会席
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>09:20 新潟港から佐渡汽船カーフェリー出航：</strong>ウミネコが舞う冬の日本海を眺めながらゆったりクルーズ（約2時間30分）。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>11:50 両津港に到着・レンタカー出発：</strong>港近くで名物「佐渡天然ブリカツ丼」のランチで腹ごしらえ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>13:30 世界文化遺産「佐渡島の金山」見学：</strong>宗太夫坑や道遊坑を歩き、雪化粧した道遊の割戸の絶景を仰ぐ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>15:00 北沢浮遊選鉱場跡の見学：</strong>古代遺跡のような神秘的な廃墟美に降る粉雪の情景を撮影。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>16:30 八幡温泉または椎崎温泉の宿へチェックイン：</strong>源泉掛け流しの大浴場で冷えた体を温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>18:30 佐渡寒ブリづくし＆本ズワイガニの極上夕食：</strong>刺身、しゃぶしゃぶ、ブリ大根と佐渡銘酒「北雪」の熱燗を満喫。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【2日目】冬の加茂湖畔と小木たらい舟体験・おみやげ購入
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>07:30 湖畔の朝風呂と島野菜・魚介の朝食：</strong>佐渡産コシヒカリと熱々のあら汁、郷土の漬物で元気をチャージ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>09:00 加茂湖の牡蠣養殖場を眺めながらドライブ：</strong>冬の湖面に浮かぶ牡蠣筏と静寂の風景を愛でる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>10:30 小木港で冬の「たらい舟」体験：</strong>女性船頭さんが巧みに操るたらい舟に乗り、澄み切った海の透明度を実感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>11:30 宿根木（しゅくねぎ）の町並み散策：</strong>千石船で栄えた船大工が建てた板壁のノスタルジックな路地を歩く。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>13:30 両津港に戻りフェリー乗船・帰路へ：</strong>佐渡バターや寒ブリ粕漬けを購入し、新潟港へ向けて出航。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-teal-800" />
              佐渡島の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              島旅の記憶を持ち帰る佐渡の極上銘品と冬のおすすめ立ち寄り処
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                佐渡の蔵元銘酒「北雪」「真野鶴」＆佐渡バター
              </h3>
              <p>
                佐渡の寒冷な冬気と超軟水の清らかな水で醸される地酒は全国屈指の完成度。世界最高峰のレストランでも愛される「北雪」の大吟醸や、女性杜氏が醸す華やかな「真野鶴」は冬の寒ブリと最高の相性です。また、伝統の木製チャーンで作られる幻の「佐渡バター」も手に入れば絶対買いの逸品。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-teal-700" />
                佐渡寒ブリ粕漬け＆伝統銘菓「おけさ柿のあんぽ柿」
              </h3>
              <p>
                旬の寒ブリを地酒の酒粕にじっくり漬け込んだ「寒ブリ粕漬け」は、自宅で焼くだけで芳醇な香りと脂の旨味が蘇る至高の逸品。また、種なしで上品な甘みを誇るブランド柿「おけさ柿」を冬の寒風で干し上げた「あんぽ柿」は、トロリとした羊羹のような自然の甘みが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-teal-800" />
              佐渡寒ブリの海洋メカニズムと金山文化の深層解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月・1月の佐渡沖は「寒ブリの奇跡の海域」なのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-teal-700" />
              北の栄養豊かな海から南下するブリを迎え撃つ「両津湾の巨大定置網」
            </h3>
            <p>
              ブリは夏の間、オホーツク海や北海道沿岸でイワシやイカなどを大量に捕食し、秋の深まりとともに産卵のために九州方面へと南下を開始します。そのルートのちょうど中間地点に位置するのが佐渡島です。佐渡の両津湾は水深が急激に深くなるすり鉢状の地形をしており、南下してきた巨大なブリの群れが湾内に自然と誘い込まれます。冬の荒海で筋肉が引き締まり、なおかつ極限まで脂を蓄えた状態で水揚げされるため、佐渡の寒ブリは「味・脂の乗り・身の締まり」の三拍子が奇跡的に揃うのです。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-teal-700" />
              400年の歴史が息づく世界遺産「佐渡島の金山」と冬の幽玄美
            </h3>
            <p>
              1601年の開山以来、江戸幕府の財政を支え続け、最盛期には世界最大の産出量を誇った佐渡金山。手掘りで掘り進められた全長400kmにも及ぶ坑道網（宗太夫坑など）は、当時の高度な測量・採掘技術を今に伝えています。山頂がV字型に割れた「道遊の割戸」は、露頭を人力で掘り進めた結果生まれた巨大な遺構。冬の白い雪が岩肌に降り積もる姿は、400年にわたる鉱夫たちの祈りと歴史の重みを静かに語りかけてきます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Flame className="w-4 h-4 text-teal-700" />
              地質学的奇跡・離島に湧き出る多彩な高温泉と美肌泉質
            </h3>
            <p>
              離島でありながら、佐渡島には地下深層のプレート境界に起因する活発な温泉脈が数多く存在します。八幡温泉のように地下1,000m以上から自噴する弱アルカリ性高温泉や、加茂湖温泉の炭酸水素塩泉、小木温泉のpH9.2を誇る強アルカリ性美肌泉など、エリアごとに泉質が全く異なるのも特徴です。海水成分を含んだ塩化物泉は「温まりの湯」として冬の冷えを劇的に解消し、炭酸水素塩成分が肌をツルツルに磨き上げます。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-teal-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の佐渡島旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-teal-800" />
            あわせて読みたい北陸・新潟の冬温泉＆美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">新潟・岩室＆弥彦温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">越後一宮弥彦神社の雪景色と日本海寒ブリ・極上のどぐろを味わう名宿</p>
            </Link>
            <Link 
              href="/winter-toyama-himi-kanburi-luxury-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">富山・氷見温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">富山湾越しに望む白銀の立山連峰と最高峰の氷見寒ブリづくし名宿</p>
            </Link>
            <Link 
              href="/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">新潟・瀬波温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">日本海の夕日絶景露天風呂と村上伝統鮭料理・極上村上牛を味わう名宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-niigata-sado-island-kanburi-crab-snow-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
