import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月冬の嵐山と静寂の名刹】嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選",
  description: "11月下旬の紅葉から12月の澄み切った冬景色へと表情を変える京都・嵐山と嵯峨野。渡月橋の幻想的な朝霧や竹林の小径の静寂を歩き、冷えた身体を嵐山温泉の湯けむりで癒やす。職人仕込みの嵯峨湯豆腐と京懐石に舌鼓を打つ珠玉の冬旅ガイド。",
  keywords: '嵐山 温泉 旅館, 京都 嵐山 宿泊, 嵯峨野 湯豆腐 宿, 渡月橋 温泉 ホテル, 京都 11月 12月 旅行, 冬の京都 温泉, 嵐山 冬景色',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-arashiyama-onsen-yudofu-stay/",
  },
  openGraph: {
    title: "【11・12月冬の嵐山と静寂の名刹】嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選",
    description: "11月下旬の紅葉から12月の澄み切った冬景色へと表情を変える京都・嵐山と嵯峨野。渡月橋の幻想的な朝霧や竹林の小径の静寂を歩き、冷えた身体を嵐山温泉の湯けむりで癒やす。職人仕込みの嵯峨湯豆腐と京懐石に舌鼓を打つ珠玉の冬旅ガイド。",
    url: 'https://croud-travel.pages.dev/winter-kyoto-arashiyama-onsen-yudofu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月冬の嵐山と静寂の名刹】嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月冬の嵐山と静寂の名刹】嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選",
    description: "11月下旬の紅葉から12月の澄み切った冬景色へと表情を変える京都・嵐山と嵯峨野。渡月橋の幻想的な朝霧や竹林の小径の静寂を歩き、冷えた身体を嵐山温泉の湯けむりで癒やす。職人仕込みの嵯峨湯豆腐と京懐石に舌鼓を打つ珠玉の冬旅ガイド。",
  }
};

export default function ArashiyamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-arashiyama-onsen-yudofu-stay#article",
        "headline": "【11・12月冬の嵐山と静寂の名刹】嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選",
        "description": "11月下旬の紅葉から12月の澄み切った冬景色へと表情を変える京都・嵐山と嵯峨野。渡月橋の幻想的な朝霧や竹林の小径の静寂を歩き、冷えた身体を嵐山温泉の湯けむりで癒やす。職人仕込みの嵯峨湯豆腐と京懐石に舌鼓を打つ珠玉の冬旅ガイド。",
        "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-kyoto-arashiyama-onsen-yudofu-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-arashiyama-onsen-yudofu-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "11月下旬から12月の嵐山の紅葉と冬の混雑状況は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月中旬から下旬は紅葉の最盛期で国内外から多くの観光客で賑わいます。12月に入ると紅葉は終盤を迎え、木々が葉を落として落ち着いた冬の静寂が戻ってきます。特に朝8時前後の竹林の小径や渡月橋は観光客が非常に少なく、冬ならではの澄み切った空気と静謐な風情を心ゆくまで堪能できる絶好のタイミングです。"
            }
          },
          {
            "@type": "Question",
            "name": "嵐山温泉の泉質や特徴、効能について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "嵐山温泉は2004年に開湯した比較的新しい天然温泉で、泉質は単純温泉（低張性・弱アルカリ性・温泉）です。微かに白濁したまろやかなお湯はお肌に優しく刺激が少ないため「美肌の湯」として親しまれています。神経痛や筋肉痛、冷え性の改善に効果があり、冬の底冷えする京都散策で冷えた体を芯から温めてくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の嵐山名物「湯豆腐」のおすすめの食べ方や名店は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "嵯峨野の湧水で作られる木綿豆腐（特に名店・森嘉の嵯峨豆腐）は、大豆の豊かな風味と滑らかな舌触りが特徴です。利尻昆布を敷いた土鍋で温め、熱々を特製の出汁醤油や薬味（生姜、葱、七味）でいただくのが王道。宿の会席料理で供される自家製豆乳の出来立て湯豆腐も格別の味わいです。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の嵐山・嵯峨野観光の服装と寒さ対策は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "京都の冬は「京の底冷え」と呼ばれる独特の厳しい寒さがあります。愛宕山からの吹き下ろしの風や川沿いの冷え込みが強いため、厚手のウールコートやダウンジャケット、マフラー、手袋、ヒートテックなどの防寒インナーが欠かせません。名刹の寺院拝観では靴を脱いで本堂の板の間を歩くことが多いため、厚手の靴下やカイロを持参すると安心です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-arashiyama-onsen-yudofu-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "京都　嵐山温泉　花伝抄（共立リゾート）（リニューアルオープン）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130702%2F130702.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "嵐山温泉彩四季の宿　花筏",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "京都　嵐山温泉　渡月亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8838%2F8838.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "旅亭　嵐月",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68098%2F68098.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "嵐山温泉　嵐山辨慶",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30095%2F30095.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "京都　嵐山温泉　花伝抄（共立リゾート）（リニューアルオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130702/130702.jpg",
              rating: 4.44,
              reviews: 1970,
              price: "¥12,900〜",
              access: "阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。",
              special: "渡月橋まで徒歩約5分！目の前の阪急嵐山駅より京都の中心街まですぐ！天然温泉と5つの貸切風呂が無料！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130702%2F130702.html",
              story: "阪急嵐山駅から徒歩わずか1分、渡月橋へも歩いてすぐの好立地に佇む共立リゾートの和の湯宿。館内は全館畳敷きとなっており、玄関で靴を脱いだ瞬間から素足に心地よい温もりが伝わります。大浴場「平安の湯」では広々とした石造りの内湯で嵐山温泉の肌に吸い付くような柔らかな湯浴みを満喫でき、さらに京都風情あふれる5つの無料貸切風呂（檜・陶器・岩風呂など）が予約不要で何度でも利用可能。湯上がりには夜間に無料の「夜鳴きそば」やアイスキャンディーが振る舞われ、冬の京都観光で冷え切った身体を温かくもてなしてくれます。",
              roomTip: "客室は和モダンなツインやダブルが中心で、京都の伝統美を感じさせる障子や格子が印象的。シモンズ製ベッドが旅の疲れをぐっすりと解きほぐします。",
              gourmetTip: "夕食は旬の京都食材をふんだんに取り入れた会席料理に加え、揚げたて天ぷらと季節のおばんざいが心ゆくまで選べるオーダービュッフェスタイル。冬の京野菜や熱々の小鍋仕立てを堪能できます。",
              highlights: [
                "全館畳敷きの和情緒＆5つの無料貸切風呂と名物夜鳴きそば",
                "阪急嵐山駅徒歩1分の好立地で竹林や渡月橋の早朝散策に最適",
                "夕食オーダービュッフェで揚げたて天ぷらと京野菜が食べ放題"
              ]
            },
            {
              id: 2,
              name: "嵐山温泉彩四季の宿　花筏",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg",
              rating: 4.18,
              reviews: 311,
              price: "¥24,035〜",
              access: "阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分",
              special: "嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html",
              story: "渡月橋の南詰、嵐山の中腹にひっそりと佇む彩四季の宿「花筏」。宿の屋上に設けられた展望露天風呂「大堰川の湯」からは、眼下に流れる大堰川の清らかな水面と、渡月橋、そして雪化粧をまとった愛宕山や嵐山のパノラマ絶景が一望できます。嵐山温泉の源泉を引き込んだ弱アルカリ性単純温泉は、湯冷めしにくくお肌がつるつるになると女性客にも評判。早朝の澄んだ空気のなか、湯けむりの向こうに広がる水墨画のような嵐山の朝景色を独り占めできるのは宿泊者だけの特権です。",
              roomTip: "川側の客室からは四季折々の嵐山景観を正面に眺めることができ、冬の静けさに包まれた特別な風情を心静かに味わえます。",
              gourmetTip: "名物は自家製の豆乳を用いた手作り湯豆腐会席。目の前のにがりでふんわりと固まる極上の寄せ豆腐や、旬の京野菜、丹波牛の石焼きなど、職人の技が光る繊細な京料理が並びます。",
              highlights: [
                "屋上展望露天風呂から渡月橋と愛宕山を一望＆自家製湯豆腐会席",
                "嵐山中腹に佇む静寂の環境＆弱アルカリ性単純温泉の美肌湯",
                "川側客室からの雪見情景と朝の静けさに包まれる朝食膳"
              ]
            },
            {
              id: 3,
              name: "京都　嵐山温泉　渡月亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg",
              rating: 3.82,
              reviews: 253,
              price: "¥23,400〜",
              access: "京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分",
              special: "【料亭旅館】嵐山・嵯峨野散策に最適な京都・嵐山温泉の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8838%2F8838.html",
              story: "明治30年創業、渡月橋南詰に構える老舗名門旅館。嵐山の景勝地に寄り添い、120年以上の長きにわたり文人墨客や旅人に愛され続けてきました。館内は「碧川閣」「秀山閣」など趣の異なる棟に分かれ、数寄屋造りの格調高い佇まいが旅人を迎えます。男女別の大浴場には嵐山温泉の天然温泉が注がれ、木の香ただよう槙の木風呂や御影石の浴槽で芯からリラックス。渡月橋や中之島公園まで徒歩数分という抜群の立地ながら、館内に一歩入れば川のせせらぎが聞こえる静寂の別世界が広がります。",
              roomTip: "温泉露天風呂付きの特別室なら、誰にも邪魔されずに嵐山温泉の名湯をいつでも好きな時に独占。坪庭を眺めながら極上のプライベート時間を過ごせます。",
              gourmetTip: "老舗ならではの真骨頂である京懐石料理。冬場は嵯峨の老舗「森嘉（もりか）」の嵯峨豆腐を用いた熱々の湯豆腐や、ぐじ（甘鯛）、聖護院かぶら、京菊菜など伝統の冬野菜を織り交ぜた伝統の味が部屋食で楽しめます。",
              highlights: [
                "創業120年の歴史を誇る名門宿＆森嘉の嵯峨豆腐を使った本場京料理",
                "数寄屋造りの落ち着いた和室と天然嵐山温泉の大浴場・槙風呂",
                "部屋食プランが充実し記念日やご夫婦水入らずの滞在に最適"
              ]
            },
            {
              id: 4,
              name: "旅亭　嵐月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68098/68098.jpg",
              rating: 4.00,
              reviews: 75,
              price: "¥44,000〜",
              access: "JR嵯峨野線「嵯峨嵐山駅」より徒歩15分／京福「嵐山駅」より徒歩7分／阪急嵐山線「嵐山駅」より徒歩10分",
              special: "嵐山・大堰川畔に立地し、とても閑静。季節感を生かした鮮やかな彩りの会席料理をご用意しています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68098%2F68098.html",
              story: "保津川の清流が目の前を流れる絶景の地に佇む、全15室の贅を尽くした隠れ家旅館「旅亭 嵐月」。館内のいたるところから保津川の渓谷美と嵐山の稜線を望むことができ、11月下旬の名残の紅葉や12月の初雪の情景が目の前に広がります。敷地内に湧出する地下深層水を沸かした大浴場や露天風呂には、嵐山温泉の天然温泉成分がブレンドされ、滑らかな肌触りで疲労回復効果も抜群。客室数を限定しているからこそ行き届いた細やかなおもてなしと、喧騒から切り離された静けさが大人の一人旅やご夫婦旅に深く愛されています。",
              roomTip: "露天風呂付き客室からは、川向こうの嵐山の山並みを遮るものなく一望。冬の張り詰めた空気の中、湯船から立ち上る湯気を眺めながらの一杯は格別です。",
              gourmetTip: "料理長が自ら吟味した旬の食材で仕立てる月替わりの懐石コース。冬の寒ブリや近江牛、京都特産の海老芋など、一椀一皿に冬の京都の美学が凝縮されています。",
              highlights: [
                "全15室の大人の隠れ家＆保津川の清流を望む客室露天風呂",
                "プライベート感を極めた贅沢空間と選び抜かれた旬の近江牛会席",
                "保津川のせせらぎに癒やされる静寂の夜と細やかなおもてなし"
              ]
            },
            {
              id: 5,
              name: "嵐山温泉　嵐山辨慶",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30095/30095.jpg",
              rating: 4.35,
              reviews: 18,
              price: "¥18,000〜",
              access: "阪急嵐山線「嵐山駅」徒歩10分、名神高速京都南IC、国道1号線経由インターより40分、JR京都駅30分、阪急梅田駅50分",
              special: "嵐山の真向いに居を構える嵐山温泉　嵐山辨慶。美しい四季の移ろいと京料理・嵐山温泉をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30095%2F30095.html",
              story: "保津川のほとり、渡月橋を眼前に望む抜群のロケーションに位置する格式高き割烹温泉旅館。伝統的な数寄屋造りの建物と手入れの行き届いた日本庭園が迎えてくれます。自慢の天然温泉大浴場に加え、嵐山を借景にした檜の貸切露天風呂を完備。湯船に浸かりながら冬の澄み渡る嵐山の山肌を仰ぎ見る時間は、まさに極上のひとときです。料亭旅館として創業した歴史を持ち、お料理に対するこだわりは京都随一。冬の京都を五感で味わい尽くす贅沢な滞在が叶います。",
              roomTip: "川沿いの広々とした和室からは、渡月橋を渡る人々の情緒や保津川の冬景色が一望でき、朝夕の光の移ろいを絵画のように楽しめます。",
              gourmetTip: "料亭の技を極めた本格京料理。出汁の旨味が際立つ椀物に始まり、嵯峨名物の湯豆腐、焼きガニや河豚、丹波牛など、冬ならではの極上素材を熟練の職人が一品一品丁寧に仕上げます。",
              highlights: [
                "渡月橋前の特等席＆数寄屋造りの料亭旅館で味わう冬の極上懐石",
                "嵐山を望む絶景貸切風呂と老舗割烹ならではの極上の出汁文化",
                "伝統の京野菜と厳選された冬の味覚を部屋食で堪能できる至高の宿"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85"
          alt="冬の京都嵐山・渡月橋と山並みに立ち込める幻想的な朝霧"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-800/90 text-amber-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-600/40">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 冬の京都名所選</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月冬の嵐山と静寂の名刹】<br className="hidden sm:inline" />
            嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            晩秋の深紅の紅葉が去り、研ぎ澄まされた静寂が訪れる初冬の嵐山・嵯峨野。渡月橋にかかる幻想的な朝霧を歩き、嵐山温泉のまろやかな湯に寛ぎ、老舗の熱々湯豆腐に舌鼓を打つ極上の冬旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 京都府京都市（嵐山・嵯峨野・渡月橋）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月冬の嵐山と静寂の名刹】嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選","item":"https://croud-travel.pages.dev/winter-kyoto-arashiyama-onsen-yudofu-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Atmosphere & Spirit</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                観光の喧騒が消え、古都本来の祈りと静寂が宿る初冬の嵐山
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            秋の紅葉シーズンに日本中から観光客が押し寄せた嵐山も、11月下旬を過ぎると徐々に落ち着きを取り戻し、12月には凛とした静謐な空気に包まれます。保津川から立ち上る川霧が渡月橋を白く包み込み、嵐山の山肌にうっすらと初雪が降りかかる情景は、まさに山水画そのものの美しさです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            冬の嵯峨野散策の最大の醍醐味は、早朝の「竹林の小径」にあります。日中は多くの人々で賑わうあの小径も、朝7時台に訪れれば人の気配はほとんどなく、サワサワと風にそよぐ笹の葉の擦れ合う音と、冬鳥の澄んださえずりだけが耳に届きます。天龍寺の庭園に広がる曹源池（そうげんち）の水面に映る冬枯れの木々と借景の山並みは、華やかな紅葉の季節以上に見る者の心を静かに整えてくれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冷え切った身体を温めてくれるのが、知る人ぞ知る名湯「嵐山温泉」です。弱アルカリ性の柔らかな湯ざわりは肌を滑らかに包み、散策で冷えた足先から全身へとじんわりと温もりが染み渡ります。夕暮れどき、宿の障子の向こうに揺れる行灯の明かりを眺めながらいただく、名物「嵯峨豆腐の熱々湯豆腐」と出汁の効いた冬の京懐石。これこそが、大人が冬の京都に旅する最大の理由です。
          </p>
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-700" />
                冬の嵐山温泉ステイを120%楽しむ極意
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                嵐山に宿泊すれば、観光客が押し寄せる前の「静寂の早朝嵯峨野」を独占できます。宿での温泉と部屋食を組み合わせれば最高の贅沢に。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選の嵐山宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の冬の嵐山で味わうべき3つの情景
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">朝霧の渡月橋と静寂の竹林</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冬の朝、保津川から立ち上る幻想的な朝霧が渡月橋を包みます。観光客のいない早朝の竹林の小径は、静寂と青竹の香りに満ちた別世界です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">熱々！嵯峨豆腐の名物湯豆腐</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                嵯峨野の名水が生んだ極上木綿豆腐を、利尻昆布の出汁でコトコトと。生姜と特製醤油で頬張れば、底冷えする京都の寒さが幸福へと変わります。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">美肌を育む名湯「嵐山温泉」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                弱アルカリ性のまろやかな泉質が肌をしっとりと潤します。愛宕山や保津川の冬景色を露天風呂から眺めながら、極上の湯浴みを満喫。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の嵐山温泉と極上会席を堪能する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルで高評価を獲得している嵐山・嵯峨野の厳選宿。露天風呂の眺望、湯豆腐や京料理の質、立地の良さにこだわって選び抜きました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 hover:border-amber-400 transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>厳選 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <p className="font-semibold flex items-center gap-1 text-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      評価 {hotel.rating} / 5.0
                    </p>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{hotel.access}</p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        {hotel.special}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        宿泊目安: <strong className="text-stone-900 text-sm">{hotel.price}</strong> /名
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug hover:text-amber-800 transition-colors">
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        {hotel.name}
                      </a>
                    </h3>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-amber-900 flex items-center gap-1 font-bold">
                          <Coffee className="w-3.5 h-3.5 text-amber-700" /> 客室・滞在のポイント
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-amber-900 flex items-center gap-1 font-bold">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" /> 冬の美食・料理の魅力
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Highlights Badges */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-stone-500 text-center sm:text-left">
                      ※ 11・12月は紅葉・年末年始需要で早期満室となる場合があります。
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日おすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              【1泊2日】冬の嵐山・嵯峨野を満喫する大人の静寂旅モデルコース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              混雑を巧みに回避しながら、名刹の冬景色、湯豆腐ランチ、早朝の竹林散策をゆったり味わう理想のスケジュール。
            </p>
          </div>

          <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-8">
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">1日目 13:00</span>
              <h3 className="text-base font-bold text-stone-900">嵐山到着 〜 渡月橋から冬の保津川を眺望</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                阪急嵐山駅またはJR嵯峨嵐山駅に到着。まずは渡月橋を渡り、冬枯れの木々と保津川の清流を眺めます。川沿いのカフェで温かい抹茶ラテをテイクアウトして川辺をそぞろ歩き。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">1日目 14:30</span>
              <h3 className="text-base font-bold text-stone-900">天龍寺参拝 〜 曹源池庭園の冬景色</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                世界遺産・天龍寺へ。方丈の大広間から眺める曹源池庭園は、初冬の静けさの中で水面が鏡のように澄み渡り、借景の嵐山との調和が息を呑む美しさです。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">1日目 16:30</span>
              <h3 className="text-base font-bold text-stone-900">宿にチェックイン 〜 嵐山温泉で冷えた身体を解きほぐす</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                早めに宿へチェックイン。露天風呂に浸かり、冷え切った身体を弱アルカリ性の柔らかな温泉で温めます。夕暮れに染まる山並みを眺めながらの湯浴みは至福。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">1日目 18:30</span>
              <h3 className="text-base font-bold text-stone-900">夕食：熱々湯豆腐と冬の京懐石に舌鼓</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                嵯峨名物の湯豆腐、寒ブリ、海老芋、丹波牛など、冬の味覚を散りばめた極上の京懐石。京都の地酒「松竹梅」「玉乃光」とともにゆったり味わいます。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">2日目 07:30</span>
              <h3 className="text-base font-bold text-stone-900">早朝散策：誰もいない「竹林の小径」と野宮神社</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                宿泊者だけの特権！観光客がいない朝一番の竹林の小径へ。風に揺れる青竹の音と澄み渡る朝の冷気に包まれ、神秘的な野宮神社で良縁・健康を祈願します。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">2日目 09:00</span>
              <h3 className="text-base font-bold text-stone-900">宿の朝食 〜 チェックアウト後に奥嵯峨・祇王寺へ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                炊きたてのご飯と京漬物、出汁巻き玉子の朝食を堪能。宿を出発し、苔庭に霜が降りる奥嵯峨の名刹「祇王寺」や「常寂光寺」へ足を延ばします。
              </p>
            </div>
          </div>
        </section>

        {/* 旬の冬グルメと名産品ガイド */}
        <section className="bg-stone-100/70 rounded-3xl p-6 sm:p-10 border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-800 text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Local Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月に嵐山で味わうべき冬の京都グルメ4選
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-700">●</span> 嵯峨名物・森嘉の嵯峨豆腐
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                安政年間創業の老舗「森嘉」。国産大豆と良質な地下水で作られる豆腐は、滑らかな口当たりと豊かなコクが別格。湯豆腐にするととろけるような食感になります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-700">●</span> 伝統冬野菜・聖護院かぶらの「千枚漬け」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冬の訪れとともに旬を迎える聖護院かぶら。昆布とともに薄く漬け込まれた千枚漬けは、上品な甘みと酸味、パリッとした食感がお土産にも大人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-700">●</span> 濃厚な出汁が香る「鰊（にしん）そば」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                甘辛く炊き上げた身欠きニシンを、熱々の上品な利尻昆布出汁の蕎麦にのせた京都発祥の名物。冬の冷え切った身体に熱々のスープが染み渡ります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-amber-700">●</span> 丹波栗と小豆の温かい「嵐山ぜんざい」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                大粒の丹波栗と香ばしく焼き上げられたお餅が入ったぜんざい。竹林散策の途中に甘味処で立ち寄り、温かいほうじ茶とともにいただく時間は至福のひとときです。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Q&A Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の嵐山温泉旅行 よくある質問と解決アドバイス
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                11月下旬〜12月の嵐山の紅葉の残り具合と混雑状況は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年11月下旬までが紅葉のピークで、12月上旬には名残の紅葉（敷きもみじ）へと移り変わります。12月中旬以降は木々の葉が落ち、観光客が一段落するため、静かに古都の風情を楽しみたい方には1年で最もおすすめの季節です。特に朝8時前の竹林の小径は人影もまばらで写真撮影にも最適です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                嵐山温泉の泉質や特徴は？冷え性に効果はありますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                嵐山温泉は低張性弱アルカリ性温泉（単純温泉）で、刺激が少なく肌あたりが非常にまろやかです。湯上がり後もポカポカとした温感が長く持続するため、京都特有の底冷えによる冷え性や神経痛、関節痛の緩和に高い効果を発揮します。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                冬の嵐山散策に必要な持ち物や防寒対策は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                京都の冬は足元から冷え込みます。寺院の拝観では靴を脱いで冷たい板の間を歩くため、厚手の靴下やカイロを持参しましょう。保津川沿いは風が抜けるため、マフラーや手袋、ニット帽などの防寒小物が大いに役立ちます。歩きやすいスニーカーや防寒ブーツでの散策をおすすめします。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                車なし（電車・バス）でも嵐山温泉旅行は快適に楽しめますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                嵐山はJR嵯峨野線（京都駅から快速で約11分）、阪急嵐山線、京福電鉄（嵐電）の3路線が乗り入れており、車がなくても非常に快適に移動できます。冬の京都は市内の道路混雑や駐車場の満車も多いため、公共交通機関でのアクセスを強くおすすめします。今回ご紹介した宿はいずれも駅から徒歩圏内または送迎対応があります。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Related Guides & Areas</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の旅をさらに広げる関連特集＆エリア別ガイド
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              日本全国・旅宿クラウドが厳選する、11月・12月の冬旅行特集や近隣エリアの温泉宿ガイドをチェック。
            </p>
          </div>

          {/* 関連特集リンクカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">11・12月北陸</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                金沢兼六園の雪吊りと加賀百万石美食宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                11月1日開幕の伝統の雪吊りと近江町市場のカニ・のどぐろ、山代温泉。
              </p>
            </Link>

            <Link 
              href="/winter-kobe-luminarie-illumination-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded">関西イルミネーション</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-rose-900 transition-colors">
                神戸ルミナリエと有馬温泉・神戸牛ステイ
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                光の芸術作品と日本三名泉・有馬温泉の金湯銀湯、極上神戸ビーフ。
              </p>
            </Link>

            <Link 
              href="/winter-crab-gourmet-luxury-inn-ranking"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">冬の味覚ランキング</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                全国の活カニ・カニ尽くし名宿ランキング
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                松葉ガニ、越前ガニ、ズワイガニのフルコースを味わう極上の冬旅。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              近隣・全国の都道府県別おすすめ宿
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/kyoto" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">京都府の宿一覧</Link>
              <Link href="/prefectures/osaka" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">大阪府の宿一覧</Link>
              <Link href="/prefectures/hyogo" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">兵庫県の宿一覧</Link>
              <Link href="/prefectures/nara" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">奈良県の宿一覧</Link>
              <Link href="/prefectures/shiga" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">滋賀県の宿一覧</Link>
              <Link href="/prefectures/ishikawa" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">石川県の宿一覧</Link>
              <Link href="/prefectures/fukui" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">福井県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-kyoto-arashiyama-onsen-yudofu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
