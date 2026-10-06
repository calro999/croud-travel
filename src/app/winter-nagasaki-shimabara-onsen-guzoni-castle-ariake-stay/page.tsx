import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Waves, ShieldCheck, Castle, Droplets, Sun, Flame, Coffee
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月長崎】冬の島原城初詣と名物「具雑煮」！名宿5選',
  description: '有明海と雲仙普賢岳に抱かれた水の都・長崎県島原市。11〜1月は白亜の島原城が澄んだ冬空に映え、年末年始の初詣や武家屋敷散策で賑わいます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '島原温泉 ホテル, 島原 ホテル南風楼, シーサイド島原, 島原城 初詣, 具雑煮 島原, 有明海 牡蠣, がんば料理 島原, 雲仙みかどホテル, 四明荘, 12月 1月 長崎 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay/"
  },
  openGraph: {
    title: '【11・12・1月長崎】冬の島原城初詣と名物「具雑煮」！名宿5選',
    description: '有明海と雲仙普賢岳に抱かれた水の都・長崎県島原市。11〜1月は白亜の島原城が澄んだ冬空に映え、年末年始の初詣や武家屋敷散策で賑わいます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/878/878.jpg",
      width: 1200,
      height: 630,
      alt: '有明海の海原と島原温泉の露天風呂から望む冬の朝日'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月長崎】島原温泉＆雲仙・有明海！冬の島原城初詣と名物「具雑煮」・有明海冬牡蠣＆海一望の美肌温泉名宿5選",
    description: "有明海と雲仙普賢岳に抱かれた水の都・長崎県島原市。11〜1月は白亜の島原城が澄んだ冬空に映え、年末年始の初詣や武家屋敷散策で賑わいます。島原の乱ゆかりの熱々郷土鍋「具雑煮」や有明海の冬牡蠣、幻のガンバ（ふぐ）料理、長崎和牛を堪能。対岸の有明海から昇る感動の朝日と美肌の島原温泉掛け流し露天風呂を満喫できる厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/878/878.jpg"]
  }
};

export default function NagasakiShimabaraAriakeWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "海のサウナ＆スパ　オールインクルーシブ　島原温泉ホテル南風楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/878/878.jpg",
              rating: 4.66,
              reviews: 2812,
              price: "¥11,550〜",
              access: "霊丘公園体育館駅約３Ｈ⇒徒歩約5分／長崎空港⇒約２Ｈ／熊本港～フェリーで島原港約３０分⇒車約５分　霊丘神社２分",
              special: "プール開放中！≪オールインクルーシブで大満喫◎毎日無料イベント開催≫",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F878%2F878.html",
              story: "有明海を目前に望む絶好のウォーターフロントに建ち、創業110余年の伝統と最新のラグジュアリーが融合したリゾート旅館「島原温泉 ホテル南風楼（なんぷうろう）」。広大な日本庭園の先には穏やかな有明海が広がり、冬の澄んだ早朝には熊本の山並みから昇る神々しい朝日を海抜ゼロメートルのインフィニティ露天風呂から拝むことができます。宿の自慢は、近年全国のサウナーから絶賛を浴びる「海のサウナ」。有明海を一望するセルフロウリュサウナや海風を感じる外気浴デッキが完備され、冬の極上の癒やしを約束します。夕食はオールインクルーシブで楽しむ長崎和牛の鉄板焼きや、冬が旬のトラフグ（ガンバ）、有明海で獲れた新鮮な鯛や車海老の会席料理。三世代家族からカップルまで誰もが心満たされる極上の滞在が叶います。",
              roomTip: "オーシャンビュー露天風呂付き客室「The Grand Ocean」。プライベートな温泉露天風呂から冬の海と満天の星空を眺め、波音に包まれて過ごす贅沢空間。",
              gourmetTip: "「長崎和牛と冬の有明海鮮会席」。きめ細やかなサシが入った長崎和牛フィレ肉と、島原名物のガンバ（ふぐ）刺し、有明海冬牡蠣の贅沢な競演。",
              highlights: [
                "有明海インフィニティ露天風呂・海のサウナ＆朝日を望む極上の外気浴",
                "長崎和牛鉄板焼き＆トラフグ（ガンバ）会席・オールインクルーシブの贅沢",
                "露天風呂付き客室あり・大切な記念日や家族旅行に選ばれ続ける老舗宿"
              ]
            },
            {
              id: 2,
              name: "ＨＯＴＥＬシーサイド島原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139921/139921.jpg",
              rating: 4.45,
              reviews: 513,
              price: "¥7,007〜",
              access: "【諫早ICより】約60分【長崎空港より】約80分【熊本より】約45分(フェリー)+約10分(徒歩)",
              special: "◆クーポン対象◆【国内屈指の高濃度炭酸泉】キッズルーム・トレーニングルーム宿泊者無料◇お子さま連れ◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139921%2F139921.html",
              story: "島原新港のすぐそばに位置し、有明海の大パノラマと良質な天然温泉を贅沢に味わえる「ＨＯＴＥＬシーサイド島原」。宿の最大の魅力は、島原半島随一の湧出量を誇る2種類の自家源泉。肌をしっとり滑らかにする「ナトリウム・マグネシウム―炭酸水素塩泉」と、血行を促進して体の芯まで温める「高濃度炭酸泉」が完備され、冬の冷えた体とお肌を究極に労わってくれます。大浴場の露天風呂からは、行き交うフェリーや飛び交うカモメの群れを眺めながら優雅な湯浴みが可能。料理は島原の郷土色豊かで、名物の熱々「具雑煮」をはじめ、冬の味覚である地魚のお造りや長崎ハーブ鶏の鍋料理など、素材の味を活かした滋味深い品々が旅情を深めます。",
              roomTip: "本館・新館オーシャンフロント客室。遮るもののない有明海の水平線が広がり、冬の静かな海原と朝日のグラデーションを一望できます。",
              gourmetTip: "「島原伝統の具雑煮と旬魚会席」。10種以上の具材から出汁が溶け出したアツアツの具雑煮は、冬の寒さを一瞬で忘れさせる優しい味わい。",
              highlights: [
                "島原随一の湧出量・美肌炭酸水素塩泉＆高濃度炭酸泉の贅沢なダブル湯浴み",
                "全室オーシャンフロント・フェリーが行き交う穏やかな冬の海原ビュー",
                "冷え性に効く高濃度炭酸泉・リピーター多数の清潔感あふれる設備"
              ]
            },
            {
              id: 3,
              name: "原城の宿　城",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14010/14010.jpg",
              rating: 4.52,
              reviews: 180,
              price: "¥6,820〜",
              access: "高速道路諫早ＩＣから２５１号線を走って約１時間",
              special: "リニューアル！世界文化遺産「原城跡」から徒歩5分の海がみえる宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14010%2F14010.html",
              story: "世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の構成資産である原城跡のすぐそばに佇む「原城の宿 城（じょう）」。島原半島の南端に位置し、三方を穏やかな有明海に囲まれた静寂のロケーションが魅力です。家庭的で温かなもてなしと、目の前の海で獲れたばかりの新鮮な魚介類を惜しみなく振る舞う料理自慢の隠れ宿。冬期は有明海名産の濃厚な冬牡蠣や、水揚げされたばかりのヒラメ、アオリイカ、車海老などをリーズナブルに味わえます。大浴場からも広大な海が見渡せ、歴史ロマンの息づく原城跡の雪景色や冬枯れの海岸線を散策した後の疲れを心地よく解きほぐしてくれます。",
              roomTip: "海側和室。窓を開ければ心地よい潮風が吹き抜け、世界遺産・原城跡の台地と有明海の美しいコントラストを眺望。",
              gourmetTip: "「南島原冬の地魚三昧コース」。有明海の新鮮な地魚の姿造りに加え、冬の焼き牡蠣や島原手延そうめんの温かいにゅうめんが付く贅沢膳。",
              highlights: [
                "世界文化遺産原城跡すぐ・有明海一望のロケーションと獲れたて冬牡蠣",
                "家庭的な温もり・南島原の新鮮地魚三昧と島原手延べそうめん",
                "歴史ロマンの散策拠点・静寂に包まれた海の隠れ家ステイ"
              ]
            },
            {
              id: 4,
              name: "島原温泉　旅館海望荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4733/4733.jpg",
              rating: 4.36,
              reviews: 182,
              price: "¥6,380〜",
              access: "島原港駅・島原港より徒歩５分。",
              special: "島原港の高台に位置し、有明海を一望！島原の自然の恵みを使った自慢の料理と温泉で癒しのひと時を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4733%2F4733.html",
              story: "島原外港から徒歩圏内に位置し、アットホームな温もりと展望露天風呂からの海景色が評判の「島原温泉 旅館海望荘（かいぼうそう）」。最上階の展望大浴場に浸かれば、有明海を行き交うフェリーや九十九島（つくもじま）の島々、対岸の熊本・天草の島影まで見渡すことができます。島原温泉の上質な弱アルカリ性泉は湯上がりに肌がつるつるになると好評。夕食には島原名物の「具雑煮」をはじめ、近海で獲れた地魚の煮付け、島原名物のかんざらし（白玉スイーツ）など、地元ならではの素朴で温かい味覚が並びます。島原城や武家屋敷、湧水巡りへの観光拠点としてもアクセス抜群で、一人旅から夫婦旅まで愛され続けています。",
              roomTip: "展望海側和室。落ち着いた畳の空間から、冬の朝日に照らされて輝く有明海を眺めながらゆったりとお茶を楽しめます。",
              gourmetTip: "「島原郷土料理づくしプラン」。素朴ながら出汁の旨味が効いた具雑煮と、甘辛く炊き上げた近海カレイの煮付けがご飯を進めます。",
              highlights: [
                "最上階展望露天風呂・九十九島を望むパノラマと伝統の手作り具雑煮",
                "島原港近くの好立地・島原城や湧水庭園四明荘へのアクセス良好",
                "リーズナブルな価格設定・温かい仲居さんのおもてなしに心和む旅"
              ]
            },
            {
              id: 5,
              name: "雲仙みかどホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72048/72048.jpg",
              rating: 4.21,
              reviews: 2330,
              price: "¥9,769〜",
              access: "JR諫早駅よりバスで１時間３０分。島原港、島原外港駅より車で15分。長崎自動車道諫早IC出口より90分。",
              special: "絶景の天然温泉と豪華ビュッフェが自慢の宿。旨味たっぷりの蟹、国産牛が食べ放題！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72048%2F72048.html",
              story: "樹齢数百年の銘木をふんだんに使った堂々たる佇まいと、広大な温泉露天風呂が自慢の「雲仙みかどホテル」。南島原の小高い丘に位置し、敷地内には巨木のアートや日本庭園が配され、非日常の圧倒的なスケール感に包まれます。自慢の露天風呂「天空の湯」からは有明海を一望でき、自家源泉の滑らかな湯が全身を温めてくれます。こちらの最大の目玉は、夕食の「豪華みかどビュッフェ」。冬期はジューシーな国産牛ステーキやズワイガニの食べ放題、新鮮な地魚のお造り、具雑煮など多彩なご馳走がずらりと並び、ファミリーやグループ旅行で最高の賑わいを満喫できます。雲仙地獄や島原城の中間に位置し、周遊の拠点に便利です。",
              roomTip: "銘木香る和洋室または露天風呂付き客室。木の温もりあふれる広々とした設計で、日常を離れて開放的なリフレッシュが叶います。",
              gourmetTip: "「冬の豪華ビュッフェ」。目の前で焼き上げる国産牛ステーキと山盛りのカニ、島原手延そうめんの熱々地獄炊きが食べ放題。",
              highlights: [
                "樹齢数百年銘木の壮大な建築美・露天風呂「天空の湯」とカニ＆牛ステーキビュッフェ",
                "国産牛ステーキ＆ズワイガニ食べ放題・ファミリーからグループまで大好評",
                "雲仙と島原の中間に位置・大自然のスケール感を味わうエンタメホテル"
              ]
            }
  ];

  const faqData = [
  {
    "q": "冬の島原名物「具雑煮（ぐぞうに）」の由来と味の特徴は？",
    "a": "具雑煮は1637年の「島原の乱」の際、一揆軍の総大将・天草四郎が集徒たちに餅を持ち寄らせ、山や海から集めた具材とともに煮込んで兵糧にしたことが起源と伝えられています。丸餅を中心に、地鶏、焼き穴子、ごぼう、椎茸、凍り豆腐、白菜、春菊など10種類以上の具材が土鍋にぎっしり入り、かつお節や昆布の出汁に素材の旨味が溶け出しています。冬の寒い時期にハフハフと頬張る熱々の具雑煮は、島原を訪れたら絶対に外せない滋味深い郷土料理です。"
  },
  {
    "q": "冬の島原城の見どころと年末年始の初詣の様子は？",
    "a": "白亜の五層天守閣を誇る島原城は、春の桜や秋の紅葉も美しいですが、冬の澄んだ青空や時折舞う雪の中にそびえ立つ姿は凛とした気品に満ちています。天守閣最上階からは有明海と雄大な雲仙普賢岳を360度見渡せます。元旦には島原城の濠沿いや近隣の神社、また島原城内での初日の出観賞や新春イベントが開催され、市民や観光客で賑わいます。また夜間にはライトアップも行われ、冬の夜空に浮かび上がる白亜の城郭が幻想的です。"
  },
  {
    "q": "島原温泉の泉質や効能、湯の特徴について教えてください。",
    "a": "島原温泉は「中性ナトリウム・マグネシウム―炭酸水素塩温泉」を主泉質とし、一部の宿では塩化物泉や高濃度炭酸泉も湧出しています。炭酸水素塩泉は肌の古い角質をやさしく洗い流す「清涼の湯」「美肌の湯」として知られ、湯上がりの肌がしっとりツルツルになります。また有明海沿岸から湧き出るため塩分も含み、熱を逃がさず保温効果が持続するため、冬の冷え性や神経痛の緩和にも最適です。"
  },
  {
    "q": "長崎空港や福岡・熊本方面からの島原へのアクセス方法は？",
    "a": "長崎空港からは空港連絡バスで諫早駅まで約30分、そこから島原鉄道（または島鉄バス）で約70分で島原駅に到着します。福岡・博多方面からは西九州新幹線または特急で諫早駅経由のルートが便利です。またユニークなルートとして、熊本港から「有明フェリー」または「九商フェリー」「オーシャンアロー」に乗れば、わずか30分〜60分で有明海を横断して島原外港に到着できます。冬はカモメが船を追って飛来するため、船上でのカモメの餌やりも冬の風物詩となっています。"
  },
  {
    "q": "島原の「水の都」と呼ばれる湧水スポットは冬でも楽しめますか？",
    "a": "島原市内には約60カ所もの湧水ポイントがあり、1日に20万トン以上の清らかな湧水が湧き出しています。特に名水百選に選ばれた「湧水庭園 四明荘（しめいそう）」は、座敷のすぐ足元に透明度抜群の池が広がり、色鮮やかな錦鯉がまるで宙に浮いているかのように泳ぐ絶景スポットです。冬でも水温は年間を通じて約15度前後と安定しているため、冬場はむしろ外気より温かく感じられます。冬の澄んだ光の中で楽しむ湧水巡りは心洗われる体験です。"
  },
  {
    "q": "冬の島原・有明海で味わうべき海の幸や特産品は何ですか？",
    "a": "冬の有明海といえば、プランクトンが豊富な干潟で育つ「小長井牡蠣（こながいがき）」をはじめとする冬牡蠣が最盛期を迎えます。身がふっくらと大粒で縮みにくく、濃厚なミルクのような甘みが特徴です。また島原ではふぐのことを「がんば」と呼び、ガンバの湯引き（がねだき）や唐揚げ、ふぐ刺しが名物です。さらに日本一の長さを誇る「島原手延そうめん」を熱々でいただく地獄炊きや、長崎和牛のすき焼きも冬の極上のご馳走です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay"
        },
        "headline": "【11・12・1月長崎】島原温泉＆雲仙・有明海！冬の島原城初詣と名物「具雑煮」・有明海冬牡蠣＆海一望の美肌温泉名宿5選",
        "description": "有明海と雲仙普賢岳に抱かれた水の都・長崎県島原市。11〜1月は白亜の島原城が澄んだ冬空に映え、年末年始の初詣や武家屋敷散策で賑わいます。島原の乱ゆかりの熱々郷土鍋「具雑煮」や有明海の冬牡蠣、幻のガンバ（ふぐ）料理、長崎和牛を堪能。対岸の有明海から昇る感動の朝日と美肌の島原温泉掛け流し露天風呂を満喫できる厳選名宿5選を徹底解説します。",
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.pages.dev"
        }
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "島原温泉＆有明海冬特集",
            "item": "https://croud-travel.pages.dev/winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium">
            <Castle className="w-4 h-4 text-emerald-300" />
            <span>11月・12月・1月冬の長崎・九州旅特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            島原温泉＆雲仙・有明海！<br className="hidden sm:inline" />
            冬の島原城初詣と名物「具雑煮」・有明海冬牡蠣＆海一望の美肌温泉名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            雲仙岳の山麓に広がり、有明海に面した歴史と水の都・長崎県島原。冬の澄み渡る青空に映える白亜の島原城天守閣、清らかな湧水が流れる武家屋敷通り、そして島原の乱ゆかりの熱々郷土鍋「具雑煮」。有明海から昇る神々しい冬の朝日を眺めながら、炭酸水素塩泉の美肌露天風呂に浸かり、冬に一番旨味が増す有明海冬牡蠣や長崎和牛、幻のガンバ（ふぐ）料理に舌鼓。心も体もポカポカに温まる島原の贅沢な冬旅をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>旬期：11月〜2月（冬牡蠣＆具雑煮）</span>
            </div>
            <div className="flex items-center gap-2">
              <Castle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>島原城の雪景色＆初詣</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>有明海の朝日インフィニティ温泉</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>具雑煮・有明海牡蠣・長崎和牛</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Overview</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-emerald-500 shrink-0" />
              歴史ロマンと清らかな名水が息づく城下町！冬の島原のぬくもりと魅力
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              長崎半島の東側に位置する島原市は、背後に雲仙天草国立公園の主峰・雲仙普賢岳を背負い、前面に穏やかな内海・有明海を臨む風光明媚な城下町です。市内の至る所から清らかな地下水が自噴する「水の都」として知られ、名水百選に選ばれた「四明荘」の庭園池には、冬の澄んだ水の中に鮮やかな錦鯉が優雅に泳ぎます。
            </p>
            <p>
              町のシンボルである「島原城」は、安土桃山様式の壮麗な白亜の天守閣が特徴。12月から1月にかけては、凛と澄み渡る冬空に白い天守閣が美しく映え、城郭を巡る堀端や武家屋敷通りには江戸時代の面影が色濃く残ります。年末年始には初詣客で賑わい、天守閣からは有明海を挟んで遠く熊本の金峰山や阿蘇の山並みまで一望できます。
            </p>
            <p>
              散策で冷えた体を待っているのが、島原温泉の極上のお湯です。海岸沿いに湧出する炭酸水素塩泉は肌をなめらかに包み込み、湯上がりの保温効果も抜群。そして食卓には、かつて島原の乱で天草四郎率いる一揆勢が籠城中に食べたという伝説を持つ熱々の「具雑煮」が登場。餅や地鶏、魚介の旨味が溶け出した黄金色の出汁をすすれば、芯から温まる幸福感に包まれます。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Selected Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-emerald-500 shrink-0" />
              島原温泉＆南島原で泊まりたい冬の厳選宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。海を望む絶景露天風呂、伝統の具雑煮会席、長崎和牛を堪能できる名宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <article key={h.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold">
                        第{h.id}位
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm">
                        <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                      </div>
                      <div className="text-slate-600 font-medium">
                        目安: <span className="text-slate-900 font-bold text-sm">{h.price}</span>/人
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        {h.access}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/60">
                        <strong className="text-emerald-800 block mb-0.5">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div className="text-xs text-slate-700 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/60">
                        <strong className="text-amber-800 block mb-0.5">冬の料理のこだわり:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">宿泊ハイライト</h4>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all gap-1.5"
                      >
                        <span>空室・宿泊プランを楽天トラベルで確認</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 冬の見どころスポット */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Sightseeing & Culture</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-emerald-500 shrink-0" />
              冬の島原・南島原を巡る！歴史と水のぬくもりを感じる必訪名所
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                1. 島原城の天守閣と初詣・城郭ライトアップ
              </h3>
              <p className="text-xs sm:text-sm">
                4万石の城下町として栄えた島原の誇り「島原城」。キリシタン史料館や民具資料館を併設し、冬の澄んだ空気の中で五層の天守閣が堂々とそびえ立ちます。年末年始には本丸広場での初日の出観賞や島原大神宮への初詣で賑わい、夜間には天守閣が白くライトアップされて幻想的な夜景を演出します。
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                2. 湧水庭園 四明荘（しめいそう）と鯉の泳ぐまち
              </h3>
              <p className="text-xs sm:text-sm">
                湧水池の上に張り出すように建てられた数寄屋造りの茶席「四明荘」。透き通る池水には色鮮やかな錦鯉がゆったりと泳ぎ、まるで水面に浮いているかのような静謐な時間を過ごせます。周辺の「鯉の泳ぐまち」では水路に清流が流れ、島原名物の白玉スイーツ「かんざらし」を味わいながらの散策が楽しめます。
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                3. 世界文化遺産「原城跡（はらじょうあと）」の冬景色
              </h3>
              <p className="text-xs sm:text-sm">
                南島原市に位置する原城跡は、1637年の島原・天草一揆の最後の舞台となった国指定史跡。有明海に突き出た断崖の要害からは、冬の澄んだ海の向こうに天草諸島を一望できます。十字架のモニュメントや天草四郎像が静かに佇み、冬の潮風の中で深い祈りと歴史の息吹を感じられる聖地です。
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                4. 有明海フェリーのカモメクルーズ
              </h3>
              <p className="text-xs sm:text-sm">
                島原外港または多比良港と対岸の熊本を結ぶ有明海フェリー。冬期にはシベリア方面から飛来した数千羽のカモメがフェリーを追って飛び交い、船上デッキからパンやお菓子を手渡しで餌やりできる体験が大人気。冬晴れの海とカモメの群れ、雪化粧した雲仙岳の眺望は旅の最高の思い出になります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 冬の美食 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gastronomy</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-emerald-500 shrink-0" />
              島原の冬を味わい尽くす！熱々「具雑煮」・有明海冬牡蠣・極上長崎和牛
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-emerald-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                伝統の熱々郷土鍋「具雑煮」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                島原の冬の食卓に欠かせない郷土鍋。餅に加えて地鶏、焼き穴子、ごぼう、椎茸、凍り豆腐など10種以上の贅沢な具材が土鍋で煮込まれ、上品な出汁と具材の旨味が溶け合います。栄養満点で、体の芯からポカポカ温まります。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-emerald-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                有明海の冬牡蠣＆ガンバ（ふぐ）
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                干潟の豊かな栄養で育つ有明海の冬牡蠣は、大粒でクリーミーな甘みが格別。炭火焼きや酒蒸しで味わえます。また島原名物のガンバ（ふぐ）は、湯引きや唐揚げ、てっちり鍋など、本場ならではの鮮度と価格で贅沢に楽しめます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-emerald-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                霜降りと赤身の調和「長崎和牛」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                全国和牛能力共進会で日本一に輝いた実績を持つ「長崎和牛」。肉本来の旨味を持つ赤身と、甘くまろやかな脂身のバランスが絶妙で、すき焼きや陶板焼きステーキで至福のとろける美味しさを堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 海に一番近い駅＆冬の絶景ドライブ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Scenic Spots & Photography</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-6 h-6 text-emerald-500 shrink-0" />
              日本一海に近い無人駅「大三東駅」と冬のシーサイドドライブ
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                1. 黄色いハンカチが風にたなびく「大三東駅（おおみさきえき）」
              </h3>
              <p className="text-xs sm:text-sm">
                島原鉄道の「大三東駅」は、ホームのすぐ真下が有明海という「日本一海に近い駅」として全国的に有名です。柵のない開放的なホームからは、干満差日本一を誇る有明海の雄大な干潟や満ち潮時のきらめく水面が眼前に広がります。冬の澄んだ青空の下、駅舎に設置された「幸せの黄色いハンカチ」に旅の願いを込めて結びつける体験は、SNSでも大人気。黄色い列車と青い海が織りなすコントラストは冬の絶景シャッターチャンスです。
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                2. 国道251号線「島原街道」と冬の雲仙岳パノラマ
              </h3>
              <p className="text-xs sm:text-sm">
                島原半島をぐるりと巡る国道251号線は、冬でも積雪が極めて少なく快適なドライブが楽しめる絶景ロード。左手に穏やかな有明海、右手に雪帽子をかぶった雲仙岳や平成新山を眺めながらの爽快なシーサイドクルージングが楽しめます。途中の道の駅「みずなし本陣ふかえ」では、雲仙普賢岳噴火災害の遺構である土石流被災家屋が保存展示されており、大自然の畏敬と復興の歩みに深く触れることができます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-emerald-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-emerald-400 shrink-0" />
              島原城初詣と有明海朝日・温泉を満喫する1泊2日モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-emerald-300 text-lg">
                <span className="bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>島原城・四明荘湧水巡りと海辺の温泉宿チェックイン</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 諫早方面から島原鉄道または車で島原へ。島原城前の食事処で名物の熱々「具雑煮」ランチ。
                </p>
                <p>
                  <strong>13:00</strong> 島原城天守閣を見学。歴史資料館を巡り、最上階から冬の有明海と雲仙岳のパノラマを望む。
                </p>
                <p>
                  <strong>14:30</strong> 「湧水庭園 四明荘」へ。澄みきった池水と泳ぐ錦鯉を眺めながら、名物のかんざらしとお茶で一息。
                </p>
                <p>
                  <strong>16:00</strong> 有明海沿いの島原温泉の名宿へチェックイン。
                </p>
                <p>
                  <strong>17:00</strong> 海と一体になれるインフィニティ露天風呂や海のサウナで、冬の海風を感じながら極上のリフレッシュ。
                </p>
                <p>
                  <strong>18:30</strong> 長崎和牛の陶板焼き、有明海の冬牡蠣、新鮮な地魚会席に舌鼓。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-emerald-300 text-lg">
                <span className="bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>有明海の朝日・世界遺産原城跡とカモメフェリークルーズ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>07:00</strong> 客室バルコニーまたは露天風呂から、有明海の水平線から昇る神々しい冬の朝日を拝む。
                </p>
                <p>
                  <strong>08:00</strong> 島原手延そうめんのにゅうめんや有明海産海苔を取り入れた和朝食をゆっくり堪能。
                </p>
                <p>
                  <strong>09:30</strong> 車で南島原へ移動。世界遺産の「原城跡」を散策し、歴史ロマンの丘から天草の海を望む。
                </p>
                <p>
                  <strong>11:30</strong> 道の駅「みずなし本陣ふかえ」で島原手延そうめんや雲仙・島原の特産品をお買い物。
                </p>
                <p>
                  <strong>13:00</strong> 島原外港から有明海フェリーに乗船。冬のカモメたちと触れ合いながら熊本方面へ渡るか、諫早方面へ帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の島原温泉・有明海旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-emerald-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！九州・西日本の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-muhyo-unzen-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-emerald-400 block mb-1">雲仙温泉冬特集</span>
              <span className="font-bold text-white block">雲仙温泉！冬の霧氷「花ぼうろ」と地獄の湯煙・雲仙牛名宿</span>
            </Link>

            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-emerald-400 block mb-1">嬉野温泉冬特集</span>
              <span className="font-bold text-white block">嬉野温泉！日本三大美肌の湯と名物とろける温泉湯豆腐名宿</span>
            </Link>

            <Link 
              href="/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-emerald-400 block mb-1">天草・下田温泉冬特集</span>
              <span className="font-bold text-white block">天草下田温泉！東シナ海の夕日露天と冬の伊勢海老・車海老名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay" />
</div>
  );
}
