import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Castle, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月愛媛】大洲城の冬霧とミシュラン名園「臥龍山荘」！名宿5選',
  description: '肱川の清流と歴史情緒が息づく伊予の小京都、愛媛・大洲＆内子の11〜1月冬旅特集。江戸の古図面をもとに完全木造復元された名城「大洲城」と肱川あ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '大洲城 木造天守, 臥龍山荘 不老庵, 内子 町並み保存地区, 大洲 いもたき, 内子豚, NIPPONIA 大洲, オーベルジュ内子, 肱川あらし, 愛媛 冬 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay/"
  },
  openGraph: {
    title: '【11・12・1月愛媛】大洲城の冬霧とミシュラン名園「臥龍山荘」！名宿5選',
    description: '肱川の清流と歴史情緒が息づく伊予の小京都、愛媛・大洲＆内子の11〜1月冬旅特集。江戸の古図面をもとに完全木造復元された名城「大洲城」と肱川あ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の愛媛・木造復元の大洲城と臥龍山荘・内子の白壁町並み'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月愛媛】大洲城の冬霧とミシュラン名園「臥龍山荘」！白壁の内子町並み散策＆名物いもたき・内子豚名宿5選",
    description: "肱川の清流と歴史情緒が息づく伊予の小京都、愛媛・大洲＆内子の11〜1月冬旅特集。江戸の古図面をもとに完全木造復元された名城「大洲城」と肱川あらしの冬絶景、崖上に建つ数寄屋建築の至宝「臥龍山荘」、木蝋と白壁の町並みが美しい国の重伝建地区「内子八日市・護国」、愛媛の冬を代表する郷土鍋「大洲のいもたき」、柔らかく甘み豊かな「内子豚」。大洲・内子の歴史滞在に最適な厳選ホテル・名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function EhimeOzuUchikoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月愛媛】大洲城の冬霧とミシュラン名園「臥龍山荘」！白壁の内子町並み散策＆名物いもたき・内子豚名宿5選",
        "description": "肱川の清流と歴史情緒が息づく伊予の小京都、愛媛・大洲＆内子の11〜1月冬旅特集。江戸の古図面をもとに完全木造復元された名城「大洲城」と肱川あらしの冬絶景、崖上に建つ数寄屋建築の至宝「臥龍山荘」、木蝋と白壁の町並みが美しい国の重伝建地区「内子八日市・護国」、愛媛の冬を代表する郷土鍋「大洲のいもたき」、柔らかく甘み豊かな「内子豚」。大洲・内子の歴史滞在に最適な厳選ホテル・名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay"
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
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "愛媛・大洲＆内子名宿",
            "item": "https://croud-travel.pages.dev/winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "伊予の小京都「大洲城」とミシュラン名園「臥龍山荘」の冬の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大洲城は、明治期に解体された天守を、江戸時代の棟梁が残した木組み模型や古写真・古図面をもとに、伝統工法のみを用いて2004年に完全木造復元した日本初の城です。冬は木造建築ならではのヒノキの香りが凛とした空気の中に満ち、最上階からは澄んだ冬の肱川と大洲盆地を見渡せます。また、肱川の景勝地・臥龍の淵に建つ「臥龍山荘」は、ミシュラン・グリーンガイド・ジャポンで1つ星を獲得した名園です。特に断崖上に張り出すように建てられた懸造（かけづくり）の「不老庵」は、真冬の澄んだ水面が反射して天井の網代を照らす「水かがみ」の光景が美しく、日本の侘び寂び建築の頂点を体感できます。"
            }
          },
          {
            "@type": "Question",
            "name": "大洲の冬の自然現象「肱川あらし（ひじかわあらし）」とは？鑑賞のポイントは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「肱川あらし」とは、10月頃から翌年1月頃にかけての大洲盆地で発生する世界でも極めて珍しい局地気象現象です。内陸の大洲盆地で夜間に冷やされた大量の霧が、早朝になると冷気とともに肱川沿いを一気に駆け下り、伊予灘（瀬戸内海）の河口へ向かって白い霧の帯となって吹き出します。晴天で放射冷却が強く、朝夕の寒暖差が大きい日の朝7時〜9時頃が最も発生しやすいタイミングです。長浜大橋（赤橋）付近の河口海岸や「肱川あらし展望公園」から眺めると、うねる白い龍のような圧巻の自然美を目撃できます。"
            }
          },
          {
            "@type": "Question",
            "name": "内子町の「八日市・護国町並み保存地区」と「内子座」の魅力は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "内子は、江戸時代後期から明治時代にかけて、ハゼの実から採れる「木蝋（もくろう）」と「和紙」の生産で世界的な富を築いた町です。約600メートルにわたって続く「八日市・護国町並み保存地区」には、木蝋の豪商・本芳我家や上芳我家をはじめとする白壁や黄土色の漆喰壁、なまこ壁、出格子が並び、国の重要伝統的建造物群保存地区に選定されています。冬は観光客が落ち着き、静寂の中で歴史の重みを実感できます。また、大正5年に創建された現役の木造芝居小屋「内子座」では、廻り舞台や奈落（舞台下）など、当時の職人技の結晶を内部見学できます。"
            }
          },
          {
            "@type": "Question",
            "name": "愛媛の冬の伝統郷土料理「大洲のいもたき」とブランド肉「内子豚」とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「大洲のいもたき」は、大洲の肥沃な土壌で育つねっとりと甘い里芋を主役に、鶏肉、こんにゃく、椎茸、ゴボウなどを特製の醤油出汁でじっくり煮込んだ300年以上の歴史を誇る郷土鍋です。秋の河原でのいもたき会が有名ですが、冬は旅館や割烹で熱々の土鍋で提供され、冷えた身体を芯から温めてくれます。また、「内子豚（うちこぶた）」は、内子の澄んだ空気と山水、大麦を中心とした良質な飼料で育てられる銘柄豚です。きめ細やかな肉質と甘みのある脂身が特徴で、冬はローストポークや豚しゃぶ、角煮で極上の旨味を堪能できます。"
            }
          },
          {
            "@type": "Question",
            "name": "松山空港発着で大洲・内子を巡る1泊2日の冬の王道モデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】松山空港またはJR松山駅に到着 → 特急宇和海または車で内子へ（約40分） → 「八日市・護国町並み保存地区」を散策＆「内子座」見学 → 木蝋資料館上芳我邸の豪商建築に感嘆 → 古民家カフェで内子豚ランチ → 車またはJRで大洲へ移動（約15分） → 「大洲城」へ登城し木造復元天守の壮大さを体感 → 大洲または内子の名宿にチェックイン → 夕食は大洲のいもたきや内子豚会席に舌鼓。【2日目】早朝、肱川あらし展望公園へ足を延ばし冬の霧景色を見学 → 朝の澄んだ光に包まれる名園「臥龍山荘」の不老庵をじっくり鑑賞 → 「おおず赤煉瓦館」やポコペン横丁を散策 → 特産品直売所「たいきの郷」で大洲の銘菓「志ぐれ」や柑橘を購入して帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "ＮＩＰＰＯＮＩＡ　ＨＯＴＥＬ　大洲　城下町",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179179/179179.jpg",
              rating: 4.67,
              reviews: 130,
              price: "¥29,891〜",
              access: "JR伊予大洲駅より車で約6分（JR伊予大洲駅へのお迎えあり【15:10/16:10/17:10発】※前日までの要予約）",
              special: "【松山から約1時間】大洲城下町をまるごとひとつのホテルに見立てた分散型ホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179179%2F179179.html",
              story: "伊予の小京都・大洲の城下町全体を一つのホテルに見立て、築100年以上の歴史的古民家や蔵、邸宅を贅沢に改修した分散型ブティックホテル「NIPPONIA HOTEL 大洲 城下町。」。大洲城の城山を望む登録有形文化財の屋敷に滞在し、江戸・明治の豪商や武士の暮らしにタイムスリップしたかのような非日常感を味わえます。客室は梁や柱の歴史美を残しながらも、極上の寝具や床暖房、ヒノキ風呂を備え、冬の寒さを一切感じさせない快適空間を実現。夕食はかつて大洲藩主が愛でた名園・臥龍山荘の美意識を受け継ぎ、ミシュラン星付きレストラン出身のシェフが手掛ける極上フレンチ。地元大洲産の里芋や内子豚、愛媛の冬真鯛など旬の恵みを繊細に昇華させた料理は、一生忘れられない食体験となります。",
              roomTip: "蔵スイートまたは城下町ビューのデラックス和洋室。歴史的な梁組と現代の上質な調度品が調和する特別な空間。",
              gourmetTip: "「城下町フレンチコース」。香ばしくグリルした内子豚と大洲の根菜、愛媛柑橘のソースが織りなす絶妙なハーモニー。",
              highlights: [
                "城下町全体がホテル・国の登録有形文化財古民家滞在とミシュラン星シェフの極上フレンチ" ,
                "大洲城を望む客室や床暖房・檜風呂完備で真冬でも極めて暖かく優雅な時間" ,
                "名園「臥龍山荘」の侘び寂びと肱川あらしを体感する歴史文化の最高峰ステイ"
              ]
            },
            {
              id: 2,
              name: "スーパーホテル愛媛・大洲インター　天然温泉「朝霧の湯」",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/166558/166558.jpg",
              rating: 4.32,
              reviews: 875,
              price: "¥4,400〜",
              access: "JR伊予大洲駅よりお車で約８分　松山自動車道大洲IC出口よりお車で約2分",
              special: "男女別天然温泉＆無料の平面駐車場完備♪日替わり健康朝食ビュッフェで元気にご出発！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166558%2F166558.html",
              story: "松山自動車道大洲ICから車で約3分、国道56号線沿いに位置し、館内に本格的な天然温泉「朝霧の湯」を完備した「スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」」。大洲の冬の風物詩である「肱川あらし」の霧にちなんで名付けられた天然温泉は、疲労回復や美肌に効果的な弱アルカリ性泉。大洲城や内子の観光で歩き回った身体を手足を伸ばして芯からポカポカに温めることができます。客室は全室に高反発マットレス、加湿空気清浄機、選べる快眠枕を導入。毎朝無料で提供される健康朝食ビュッフェでは、有機野菜サラダや焼きたてパン、愛媛の郷土料理が並び、元気に冬の観光へと出発できます。無料駐車場も完備し、車での南予ドライブ観光に抜群の利便性を誇ります。",
              roomTip: "エクストラダブルまたはシアタールーム。大型プロジェクターでリラックスしながら冬の夜長を過ごせる機能的なお部屋。",
              gourmetTip: "「無料健康朝食ビュッフェ」。温かい具だくさんのお味噌汁と地元産のお米、出来立てのお惣菜で朝の活力をチャージ。",
              highlights: [
                "天然温泉「朝霧の湯」大浴場完備・大洲IC車3分で無料駐車場＆健康朝食無料" ,
                "弱アルカリ性の美肌天然温泉で冷えた身体を芯から解きほぐす快適な癒やし" ,
                "高反発マットレス＆選べる快眠枕・南予周遊ドライブのハイコスパ拠点"
              ]
            },
            {
              id: 3,
              name: "ホテル　オータ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19200/19200.jpg",
              rating: 4.20,
              reviews: 424,
              price: "¥4,235〜",
              access: "ＪＲ四国：伊予大洲駅より徒歩7分／松山道大洲ＩＣより車で５分",
              special: "4月の春旅行に★★割引クーポン配布中★★ 春の伊予路をお得にお楽しみください！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19200%2F19200.html",
              story: "JR伊予大洲駅から徒歩約7分、大洲市街の観光名所や飲食店街へアクセス至便な立地に佇む「ホテル オータ」。長年地元で親しまれてきたアットホームなおもてなしと、清潔感あふれる快適な客室空間が魅力のシティホテルです。全室に無料Wi-Fi、個別空調、快適なベッドを備え、冬の寒さを気にせず落ち着いて滞在できます。ホテル周辺には大洲名物の「いもたき」や伊予牛のすき焼き、肱川の寒魚料理を味わえる老舗割烹や郷土料理店が徒歩圏内に点在。大洲城の登城口やおおず赤煉瓦館へも散策がてら徒歩で向かうことができ、大洲の素朴で温かな歴史情緒を身近に感じられる拠点として高い支持を集めています。",
              roomTip: "スタンダードツインまたはシングル。ゆったりとした広さがあり、一人旅から夫婦・カップルの冬旅まで快適に対応。",
              gourmetTip: "「周辺郷土料理店で味わう大洲のいもたき」。鶏出汁にねっとりとした里芋、こんにゃく、椎茸が煮込まれた熱々の冬鍋。",
              highlights: [
                "JR伊予大洲駅徒歩7分・大洲城やお赤煉瓦館へ徒歩圏内で周辺ローカル割烹散策に便利" ,
                "アットホームなおもてなしと清潔な客室・冬の大洲名物「いもたき」満喫の拠点" ,
                "大洲名物志ぐれや地酒の買い出しにも便利・出張から一人旅まで安心の宿"
              ]
            },
            {
              id: 4,
              name: "オーベルジュ内子",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181810/181810.jpg",
              rating: 5.00,
              reviews: 19,
              price: "¥48,300〜",
              access: "■松山ICより…45分（降り口：内子五十崎IC） ■松山空港より…45分（車） ■松山空港より…90分（電車）",
              special: "歴史ある街並み・四季折々の自然が美しい「内子町」で、何もしない贅沢を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181810%2F181810.html",
              story: "内子町の豊かな里山に広がる静寂の地に建ち、全室に源泉掛け流しの露天風呂を備えた大人のための隠れ家リゾート「オーベルジュ内子」。全5室の離れ形式の客室は、内子産の木材や土壁、手漉き和紙など自然素材で丁寧に設えられ、窓からは冬枯れの里山と澄み渡る星空が広がります。客室露天風呂に注がれる内子温泉の湯は、肌をすべすべにする美肌の湯。湯けむりに包まれながら冬の清冽な大気を吸い込む時間は、至高の贅沢です。夕食は内子の豊かな自然が育んだ新鮮な冬野菜、柔らかな内子豚、愛媛の黒毛和牛を用いた創作和フレンチ。地元の契約農家から届く食材本来の生命力あふれる味わいを、上質なワインや愛媛の銘酒とともに心ゆくまで堪能できます。",
              roomTip: "離れ和洋室（客室露天風呂付き）。誰にも邪魔されずプライベートな空間で源泉掛け流しの名湯と星空を満喫。",
              gourmetTip: "「里山ガストロノミーディナー」。じっくり低温調理された内子豚のローストと、旬の冬根菜のポタージュが格別の美味。",
              highlights: [
                "全室離れ・源泉掛け流し客室露天風呂完備の極上オーベルジュで味わう里山フレンチ" ,
                "里山の静寂と満天の冬星空・内子豚と厳選冬野菜のマリアージュディナー" ,
                "一日数組限定の完全プライベート空間・記念日やご褒美旅行に絶大な人気"
              ]
            },
            {
              id: 5,
              name: "内子の宿　織",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167010/167010.jpg",
              rating: 3.00,
              reviews: 10,
              price: "¥14,400〜",
              access: "電車：JR予讃線「内子駅」より徒歩10分／お車：松山自動車道「内子五十崎IC」より5分",
              special: "【大人も胸がときめく、自由とアートが詰まった憧れの家】大正時代建築、モダンな風情と遊び心あふれる空間",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167010%2F167010.html",
              story: "国の重要伝統的建造物群保存地区「内子八日市・護国」の町並み保存地区内に位置し、歴史ある古民家を現代の快適性を兼ね備えた一棟貸しスタイルの宿へと再生した「内子の宿 織」。白壁と木蝋の豪商たちが築いた本物の町屋に暮らすように滞在できるのが最大の醍醐味です。重厚な梁や格子戸、畳の温もりを残しつつ、最新のシステムキッチンや床暖房、ゆったりとした檜風呂を完備。冬の夕暮れ、観光客が去った後の静寂な町並みを独り占めできる贅沢は、この宿に泊まる者だけの特権です。地元の仕出し割烹による郷土料理のお届けや、町内の古民家レストランでの夕食手配も可能で、内子の歴史文化の真髄に深く浸ることができます。",
              roomTip: "町家一棟貸切。グループやご家族で、歴史ある空間を完全プライベートに贅沢に満喫できます。",
              gourmetTip: "「内子の郷土仕出し会席」。地元のお母さんたちが手作りする郷土の煮物や、内子豚の角煮、ちらし寿司を部屋でゆっくり堪能。",
              highlights: [
                "内子八日市重伝建地区内・白壁の歴史ある町家を一棟貸し切りで暮らすように滞在" ,
                "重厚な梁や格子戸の伝統美と最新床暖房設備が調和・観光客が去った静寂の町並み" ,
                "内子座や木蝋資料館上芳我邸へ徒歩すぐ・暮らすように味わう内子の歴史"
              ]
            }
  ];

  const faqs = [
    {
      q: "伊予の小京都「大洲城」とミシュラン名園「臥龍山荘」の冬の見どころは？",
      a: "大洲城は、明治期に解体された天守を、江戸時代の棟梁が残した木組み模型や古写真・古図面をもとに、伝統工法のみを用いて2004年に完全木造復元した日本初の城です。冬は木造建築ならではのヒノキの香りが凛とした空気の中に満ち、最上階からは澄んだ冬の肱川と大洲盆地を見渡せます。また、肱川の景勝地・臥龍の淵に建つ「臥龍山荘」は、ミシュラン・グリーンガイド・ジャポンで1つ星を獲得した名園です。特に断崖上に張り出すように建てられた懸造（かけづくり）の「不老庵」は、真冬の澄んだ水面が反射して天井の網代を照らす「水かがみ」の光景が美しく、日本の侘び寂び建築の頂点を体感できます。"
    },
    {
      q: "大洲の冬の自然現象「肱川あらし（ひじかわあらし）」とは？鑑賞のポイントは？",
      a: "「肱川あらし」とは、10月頃から翌年1月頃にかけての大洲盆地で発生する世界でも極めて珍しい局地気象現象です。内陸の大洲盆地で夜間に冷やされた大量の霧が、早朝になると冷気とともに肱川沿いを一気に駆け下り、伊予灘（瀬戸内海）の河口へ向かって白い霧の帯となって吹き出します。晴天で放射冷却が強く、朝夕の寒暖差が大きい日の朝7時〜9時頃が最も発生しやすいタイミングです。長浜大橋（赤橋）付近の河口海岸や「肱川あらし展望公園」から眺めると、うねる白い龍のような圧巻の自然美を目撃できます。"
    },
    {
      q: "内子町の「八日市・護国町並み保存地区」と「内子座」の魅力は？",
      a: "内子は、江戸時代後期から明治時代にかけて、ハゼの実から採れる「木蝋（もくろう）」と「和紙」の生産で世界的な富を築いた町です。約600メートルにわたって続く「八日市・護国町並み保存地区」には、木蝋の豪商・本芳我家や上芳我家をはじめとする白壁や黄土色の漆喰壁、なまこ壁、出格子が並び、国の重要伝統的建造物群保存地区に選定されています。冬は観光客が落ち着き、静寂の中で歴史の重みを実感できます。また、大正5年に創建された現役の木造芝居小屋「内子座」では、廻り舞台や奈落（舞台下）など、当時の職人技の結晶を内部見学できます。"
    },
    {
      q: "愛媛の冬の伝統郷土料理「大洲のいもたき」とブランド肉「内子豚」とは？",
      a: "「大洲のいもたき」は、大洲の肥沃な土壌で育つねっとりと甘い里芋を主役に、鶏肉、こんにゃく、椎茸、ゴボウなどを特製の醤油出汁でじっくり煮込んだ300年以上の歴史を誇る郷土鍋です。秋の河原でのいもたき会が有名ですが、冬は旅館や割烹で熱々の土鍋で提供され、冷えた身体を芯から温めてくれます。また、「内子豚（うちこぶた）」は、内子の澄んだ空気と山水、大麦を中心とした良質な飼料で育てられる銘柄豚です。きめ細やかな肉質と甘みのある脂身が特徴で、冬はローストポークや豚しゃぶ、角煮で極上の旨味を堪能できます。"
    },
    {
      q: "松山空港発着で大洲・内子を巡る1泊2日の冬の王道モデルコースは？",
      a: "【1日目】松山空港またはJR松山駅に到着 → 特急宇和海または車で内子へ（約40分） → 「八日市・護国町並み保存地区」を散策＆「内子座」見学 → 木蝋資料館上芳我邸の豪商建築に感嘆 → 古民家カフェで内子豚ランチ → 車またはJRで大洲へ移動（約15分） → 「大洲城」へ登城し木造復元天守の壮大さを体感 → 大洲または内子の名宿にチェックイン → 夕食は大洲のいもたきや内子豚会席に舌鼓。【2日目】早朝、肱川あらし展望公園へ足を延ばし冬の霧景色を見学 → 朝の澄んだ光に包まれる名園「臥龍山荘」の不老庵をじっくり鑑賞 → 「おおず赤煉瓦館」やポコペン横丁を散策 → 特産品直売所「たいきの郷」で大洲の銘菓「志ぐれ」や柑橘を購入して帰路へ。"
    }
  ];


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Breadcrumb Navigation */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 text-xs md:text-sm text-slate-600 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-amber-700">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-amber-700">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">愛媛・大洲＆内子名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-stone-900 via-amber-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/30 border border-amber-300/40 text-amber-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の伊予小京都＆白壁町並み特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              愛媛・大洲＆内子<br className="hidden sm:inline" />
              大洲城の冬霧とミシュラン名園「臥龍山荘」！<br className="hidden sm:inline" />
              白壁の内子町並み散策＆名物いもたき・内子豚名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-amber-100 leading-relaxed drop-shadow">
              肱川の清流に浮かぶ木造完全復元の名城・大洲城と、懸造の不老庵が静まり返るミシュラン名園・臥龍山荘。木蝋と和紙の豪商屋敷が連なる内子八日市の白壁散策。熱々出汁の郷土鍋「大洲のいもたき」と極上「内子豚」に心まで温まる冬の南予紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の大洲・内子旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">① 木造復元の大洲城＆名園臥龍山荘</span>
                日本初・完全木造復元天守のヒノキの香り。ミシュラン1つ星「臥龍山荘」不老庵の水かがみと、冬朝の自然現象「肱川あらし」。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">② 内子八日市重伝建＆内子座</span>
                木蝋貿易で栄えた江戸・明治の豪商屋敷群となまこ壁。大正浪漫が息づく現役の木造芝居小屋「内子座」の廻り舞台見学。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">③ 郷土鍋「いもたき」＆銘柄「内子豚」</span>
                甘くねっとりした里芋と鶏出汁が身体に染みる300年の伝統鍋「大洲のいもたき」。甘みある脂と柔らかな赤身が絶品の内子豚。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          {/* Section 1 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">OZU CASTLE & GARYU SANSO IN WINTER</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                肱川の冬霧にそびえる木造復元天守「大洲城」と数寄屋の至宝「臥龍山荘」
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                愛媛県南部、肱川の豊かな流れに育まれた城下町・大洲。「伊予の小京都」と称されるこの町の中央、標高約40メートルの城山に堂々とそびえるのが「大洲城」です。1888年に惜しくも天守が解体されたものの、江戸時代の棟梁が残した緻密な木組み模型（縮尺10分の1）や古図面が奇跡的に発見されたことで、2004年に戦後初となる完全木造による四層四階天守の復元が達成されました。
              </p>
              <p>
                真冬の大洲城へ登城すると、冷たく澄み切った大気の中に樹齢数百年のヒノキの香りが満ち、職人たちが釘を使わずに組み上げた巨大な梁組の迫力に圧倒されます。最上階の窓からは、冬枯れの肱川と大洲盆地、そして四方の山並みが360度見渡せます。さらに肱川の下流、断崖の淵に建つ「臥龍山荘」へ足を延ばせば、明治の名大工が10年の歳月をかけて築いた数寄屋建築の美が待っています。崖上に迫り出す不老庵の天井には、冬の澄んだ水面からの陽光が揺らめき（水かがみ）、静寂の中で侘び寂びの真髄に心洗われます。
              </p>
              <p>
                城下町の旧武家屋敷街やおはなはん通りには、白壁土蔵や石畳が往時のたたずまいを留め、冬の柔らかな日差しの中で散策する旅人に江戸の風情を伝えています。大洲藩主加藤家の祈願所であった古刹・如法寺（にょほうじ）の仏殿（重要文化財）へと足を運べば、鬱蒼とした杉木立の参道と枯山水庭園が冬の静寂に包まれ、南予の精神文化の深さに触れることができます。早朝に発生する「肱川あらし」の霧の海が大洲城を包み込み、雲海の上に天守が浮かび上がる幻想的な光景は、冬の大洲を訪れた者だけが出会える至高の絶景です。
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">UCHIKO HISTORIC PRESERVATION DISTRICT</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                木蝋の富が築いた白壁の町並み！「内子八日市・護国」と大正浪漫「内子座」
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                大洲から北へ車で約15分、山あいの盆地に開けた内子町は、江戸後期から明治期にかけてハゼの実から精製する「木蝋（もくろう）」と良質な「和紙」の生産地として世界に名を馳せました。パリ万博にも出品された芳我一族の木蝋は欧米へも輸出され、町には巨万の富がもたらされました。その繁栄を今に伝えるのが、国の重要伝統的建造物群保存地区に選定されている「八日市・護国町並み保存地区」です。
              </p>
              <p>
                約600メートル続く緩やかな坂道沿いには、黄土色の漆喰壁や重厚ななまこ壁、出格子を備えた豪商の屋敷がずらりと連なり、冬の静寂の中に凛とした美しさを放っています。木蝋資料館上芳我邸では、広大な屋敷の意匠とともに当時の製蝋工程を見学可能。さらに町外れには、大正天皇の即位を記念して大正5年に町衆の熱意で建てられた木造芝居小屋「内子座」が佇みます。冬の柔らかな光が差し込む枡席や花道、奈落の仕組みを見学すれば、往時の熱気と文化の薫りが生き生きと蘇ります。
              </p>
              <p>
                内子の町並みには現在も手漉き和紙の工房や木蝋和ろうそくの専門店が暖簾を掲げており、冬の寒さの中で職人が一本一本丁寧に手作業で仕上げる和ろうそくの灯りは、温かな癒やしを与えてくれます。ハゼノキの実から抽出された純植物性の蝋は油煙が少なく、冬の夜長を優しく照らします。町内の古民家カフェでは、手漉き和紙の灯籠に明かりが灯り、地元の柑橘を使ったホットドリンクや焼き菓子を味わいながら、緩やかに流れる里山の時間に身を委ねることができます。
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">LOCAL WINTER DISHES: IMOTAKI & UCHIKOBUTA</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                身体の芯まで染み渡る！伝統鍋「大洲のいもたき」と極上甘み「内子豚」
              </h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                冬の大洲・内子を旅する最大の贅沢が、寒さを忘れさせてくれるあたたかな郷土の美食です。大洲の冬の代名詞である「大洲のいもたき」は、肱川の肥沃な土壌で育まれたねっとりと甘い里芋をメインに、地鶏、干し椎茸、ごぼう、油揚げ、こんにゃくなどを特製の甘辛い醤油出汁でことことと炊き上げた鍋料理です。里芋のきめ細やかな舌触りと出汁を含んだ根菜の深い旨味は、冬の冷えた五臓六腑に優しく染み渡り、箸が止まらなくなる美味しさです。
              </p>
              <p>
                一方、内子町の山あいで澄んだ湧き水と清浄な空気、大麦を中心とした厳選飼料で丹精込めて育てられるのがブランド豚「内子豚（うちこぶた）」です。内子豚は肉の繊維が非常に柔らかく、脂身には上品な甘みとコクがあり、豚肉特有のクセが一切ありません。冬の旅館やオーベルジュでは、内子豚の香ばしいステーキや熱々の角煮、地元の冬野菜とのポトフ風鍋など多彩な料理で供され、愛媛の銘酒とともに旅情溢れる夕饷を華やかに彩ります。
              </p>
              <p>
                大洲の甘味として江戸時代から愛されてきた銘菓「志ぐれ（しぐれ）」も見逃せません。小豆、米粉、餅粉を絶妙な配合で練り上げ、せいろで蒸し上げた志ぐれは、羊羹ともういろうとも異なる独特のもっちりとした弾力と上品な甘みが特徴です。冬の寒い日に淹れたての温かい緑茶とともにいただく出来立ての志ぐれは、旅人の疲れた身体に優しい安らぎをもたらします。さらに内子の酒蔵・亀泉酒造の地酒など、南予の豊かな伏流水が育んだ銘酒が冬の食卓に彩りを添えます。
              </p>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">VERIFIED RECOMMENDED HOTELS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                大洲＆内子の歴史と美食を満喫する厳選名宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室・料金・口コミ情報をリアルタイム連携
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel: any) => (
                <div 
                  key={hotel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col md:flex-row"
                >
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-amber-800/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">（口コミ {hotel.reviews}件）</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                        {hotel.story}
                      </p>
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700 block">おすすめ客室:</span>
                        {hotel.roomTip}
                      </div>
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
                      >
                        <span>プラン詳細・予約</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Model Course Section */}
          <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！大洲城と臥龍山荘・内子白壁町並みを巡る冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">1日目 10:30 | 内子駅に到着</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">八日市・護国町並み保存地区散策＆大正の芝居小屋「内子座」見学</h4>
                <p className="text-slate-600 leading-relaxed">
                  JR内子駅または内子五十崎ICから内子へ。白壁となまこ壁が続く美しい坂道を歩き上芳我邸の木蝋豪商屋敷を見学。大正浪漫あふれる内子座で舞台や奈落の職人技を体感します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">1日目 13:00 | 内子豚ランチ＆大洲へ移動</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">古民家カフェで内子豚ランチ後、車で大洲へ移動し「大洲城」登城</h4>
                <p className="text-slate-600 leading-relaxed">
                  内子の古民家で柔らかな内子豚ローストランチ。車で南下し大洲へ。完全木造復元された大洲城天守に登り、ヒノキの香りに包まれながら冬の肱川と城下町パノラマを一望。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">1日目 18:00 | 名宿チェックイン＆冬の美食</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">文化財古民家または温泉宿で寛ぎ、熱々の「大洲いもたき」を満喫</h4>
                <p className="text-slate-600 leading-relaxed">
                  NIPPONIA HOTEL大洲城下町や温泉宿にチェックイン。夕食には大洲名物・熱々出汁のいもたきや極上内子豚の炭火焼きを愛媛の純米地酒とともに味わい、冬の夜長を優雅に過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">2日目 08:00 | 冬の早朝絶景</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">「肱川あらし展望公園」から冬霧鑑賞＆ミシュラン名園「臥龍山荘」</h4>
                <p className="text-slate-600 leading-relaxed">
                  朝、展望公園へ立ち寄り肱川あらしの霧の帯を見学。その後、開門直後の臥龍山荘へ。不老庵の崖舞台から冬の清らかな淵を眺め、水かがみの反射光に息を呑みます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-800 block mb-1">2日目 12:30 | おおず赤煉瓦館とお土産調達</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">明治の洋館「おおず赤煉瓦館」見学＆大洲銘菓「志ぐれ」購入</h4>
                <p className="text-slate-600 leading-relaxed">
                  城下町のレトロな赤煉瓦館や明治の町並みを散策。もちもちとした小豆の銘菓「志ぐれ」や内子の和紙クラフトをお土産に購入し、松山方面へ快適な帰路へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <span>冬（11・12・1月）の大洲・内子旅行・知っておきたいお役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-950">
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・肱川あらし鑑賞時の服装と時間帯</strong>
                肱川あらしの発生は早朝7時〜9時頃です。河口の長浜大橋周辺は冷たい強風が吹き抜けるため、防風・防寒性の高いダウンや手袋、ニット帽の完全防寒で向かいましょう。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・大洲城・臥龍山荘見学時の足元</strong>
                大洲城天守内および臥龍山荘の各庵は、靴を脱いで上がります。板張りの床は冬場非常に冷え込むため、厚手の靴下を持参すると快適に見学できます。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・高速道路の冬用タイヤ規制</strong>
                松山自動車道の山間部（犬寄峠付近や内子〜大洲間）は、真冬の寒波襲来時にチェーン規制や冬タイヤ規制が出ることがあります。レンタカーはスタッドレス指定が安心です。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・内子八日市散策の歩きやすい靴</strong>
                内子の町並み保存地区は石畳と緩やかな坂道が続きます。ヒールを避け、スニーカーなど歩きやすい履物での散策をおすすめします。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                大洲＆内子の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq: any, idx: number) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-amber-700 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span>四国・愛媛および冬の目的別おすすめ特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🏯 宇和島城現存天守と本場鯛めし・八幡浜名宿
              </Link>
              <Link href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                ♨️ 道後温泉本館と伊予牛・鯛めし名宿
              </Link>
              <Link href="/winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🌉 今治＆しまなみ海道・大三島大山祇神社名宿
              </Link>
              <Link href="/winter-kochi-sukumo-daruma-sunset-shimanto-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🌅 宿毛だるま夕日と四万十寒ブリ名宿
              </Link>
              <Link href="/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                ❄️ 祖谷渓かずら橋雪景色＆秘境温泉名宿
              </Link>
              <Link href="/features" className="p-3 bg-amber-800 text-white rounded-xl font-bold hover:bg-amber-900 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      
      <HubRelatedPosts currentSlug="winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay" />
</div>
    </>
  );
}
