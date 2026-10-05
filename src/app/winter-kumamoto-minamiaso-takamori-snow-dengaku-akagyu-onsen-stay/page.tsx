import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月熊本】白銀の阿蘇五岳パノラマと冬の伝統「高森田楽」！美肌の南阿蘇温泉郷＆極上あか牛名宿5選",
  description: "世界最大級の阿蘇カルデラが白銀に染まる11〜1月の冬旅完全ガイド。澄み渡る冬空にそびえる阿蘇五岳（根子岳・高岳）の雄大な雪景色パノラマと、南阿蘇鉄道トロッコ列車や白川水源の静寂。囲炉裏を囲んで炭火でじっくり焼き上げる冬の郷土料理「高森田楽」の香ばしい味噌とやまめ、そして肉の旨味が凝縮した「阿蘇あか牛」のステーキ・すき焼き。絶景雪見露天と美肌温泉、満天の冬の星空を満喫できる南阿蘇・高森の厳選名宿5選を詳しくご紹介します。",
  keywords: '南阿蘇 温泉 旅館, 高森田楽 囲炉裏, 阿蘇あか牛 ステーキ, 南阿蘇ルナ天文台, 竹楽亭 露天風呂, 休暇村南阿蘇, 亀の井ホテル阿蘇, 阿蘇五岳 雪景色, 熊本 冬 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay/"
  },
  openGraph: {
    title: "【11・12・1月熊本】白銀の阿蘇五岳パノラマと冬の伝統「高森田楽」！美肌の南阿蘇温泉郷＆極上あか牛名宿5選",
    description: "世界最大級の阿蘇カルデラが白銀に染まる11〜1月の冬旅完全ガイド。澄み渡る冬空にそびえる阿蘇五岳（根子岳・高岳）の雄大な雪景色パノラマと、南阿蘇鉄道トロッコ列車や白川水源の静寂。囲炉裏を囲んで炭火でじっくり焼き上げる冬の郷土料理「高森田楽」の香ばしい味噌とやまめ、そして肉の旨味が凝縮した「阿蘇あか牛」のステーキ・すき焼き。絶景雪見露天と美肌温泉、満天の冬の星空を満喫できる南阿蘇・高森の厳選名宿5選を詳しくご紹介します。",
    url: 'https://croud-travel.com/winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の熊本・白銀の阿蘇五岳パノラマと南阿蘇温泉郷の露天風呂'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月熊本】白銀の阿蘇五岳パノラマと冬の伝統「高森田楽」！美肌の南阿蘇温泉郷＆極上あか牛名宿5選",
    description: "世界最大級の阿蘇カルデラが白銀に染まる11〜1月の冬旅完全ガイド。澄み渡る冬空にそびえる阿蘇五岳（根子岳・高岳）の雄大な雪景色パノラマと、南阿蘇鉄道トロッコ列車や白川水源の静寂。囲炉裏を囲んで炭火でじっくり焼き上げる冬の郷土料理「高森田楽」の香ばしい味噌とやまめ、そして肉の旨味が凝縮した「阿蘇あか牛」のステーキ・すき焼き。絶景雪見露天と美肌温泉、満天の冬の星空を満喫できる南阿蘇・高森の厳選名宿5選を詳しくご紹介します。",
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function KumamotoMinamiasoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月熊本】白銀の阿蘇五岳パノラマと冬の伝統「高森田楽」！美肌の南阿蘇温泉郷＆極上あか牛名宿5選",
        "description": "世界最大級の阿蘇カルデラが白銀に染まる11〜1月の冬旅完全ガイド。澄み渡る冬空にそびえる阿蘇五岳（根子岳・高岳）の雄大な雪景色パノラマと、南阿蘇鉄道トロッコ列車や白川水源の静寂。囲炉裏を囲んで炭火でじっくり焼き上げる冬の郷土料理「高森田楽」の香ばしい味噌とやまめ、そして肉の旨味が凝縮した「阿蘇あか牛」のステーキ・すき焼き。絶景雪見露天と美肌温泉、満天の冬の星空を満喫できる南阿蘇・高森の厳選名宿5選を詳しくご紹介します。",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-10-05T00:00:00+09:00",
        "dateModified": "2026-10-05T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "熊本・南阿蘇＆高森・阿蘇あか牛名宿",
            "item": "https://croud-travel.com/winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "南阿蘇・高森名物の「高森田楽（たかもりでんがく）」とはどんな料理ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "高森田楽は、阿蘇郡高森町に伝わる約800年の歴史を持つ伝統的な郷土料理です。室町時代に京都から伝わった田楽が、この地独自の風土と結びついて発展しました。囲炉裏を囲み、炭火の灰に串を立ててじっくり焼き上げます。主な具材は、地元の清流で育ったヤマメ、阿蘇特産の里芋「つるの子芋（粘り気と甘みが強い幻の里芋）」、堅豆腐（水分が少なく崩れにくい豆腐）、こんにゃく、季節の野菜など。これらに、山椒やゆず、胡麻を練り込んだ自家製の秘伝甘味噌をたっぷり塗り、炭火で香ばしく焦げ目をつけながら熱々をいただきます。寒い冬に炭火の温もりを感じながら味わう高森田楽は格別の情緒があります。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の阿蘇五岳の雪景色と「涅槃像（ねはんぞう）」とは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "阿蘇五岳（根子岳・高岳・中岳・烏帽子岳・杵島岳）は、遠くから眺めると、お釈迦様が仰向けに横たわっている姿に見えることから「阿蘇の涅槃像」と呼ばれています（根子岳が顔、高岳が胸、中岳がへそ、烏帽子岳・杵島岳が膝と足）。11月中旬から1月にかけては山頂付近に初冠雪が見られ、特に鋸の刃のようにギザギザとした岩峰を持つ根子岳（標高1,433m）が白銀に輝く姿は絵画のように壮麗です。南阿蘇側から見上げると、南斜面のため日当たりが良く、青空と白い雪稜のコントラストが最も美しく映えます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬に阿蘇を訪れる際の道路状況（チェーン・スタッドレスタイヤ）の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "阿蘇カルデラ内（南阿蘇村や阿蘇市街）の平野部は、温暖な熊本県にありながら標高が約400〜500mあるため、真冬の12月下旬〜1月には氷点下に冷え込みます。特に阿蘇山上（中岳火口方面）や外輪山を越えるミルクロード、国道57号北側復旧道路、やまなみハイウェイなどは積雪や路面凍結が頻繁に発生します。冬期にマイカーやレンタカーで阿蘇エリアを周遊する場合は、必ずスタッドレスタイヤ装着車の予約をおすすめします。高速道路や主要幹線道路でも冬用タイヤ規制が出ることがあるため、当日の道路交通情報を事前に確認しましょう。"
            }
          },
          {
            "@type": "Question",
            "name": "「阿蘇あか牛（褐毛和種）」の肉質の特徴と、冬のおすすめの食べ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "阿蘇あか牛は、阿蘇の大草原で放牧され清らかな湧水と牧草を食べて育った熊本の特産和牛です。黒毛和牛に比べて脂身（サシ）が適度で、タウリンや鉄分が豊富な良質の赤身肉が特徴。肉本来の力強い旨味と甘みがあり、たくさん食べても胃もたれしにくいヘルシーさが現代の旅行者に大人気です。冬は熱々の鉄板や陶板でさっと焼き上げるステーキをはじめ、すき焼き鍋やあか牛丼、しゃぶしゃぶで味わうと、肉汁が口いっぱいに広がり身体がぽかぽかと温まります。"
            }
          },
          {
            "@type": "Question",
            "name": "南阿蘇・高森を巡る1泊2日の冬の王道モデルコースを教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】熊本空港または熊本駅からレンタカーで出発 → 国道57号・新阿蘇大橋を渡り南阿蘇へ（絶景ビュースポット・ヨミュールで休憩） → 毎分60トンの水が湧き出る「白川水源」で名水汲み → 高森町へ移動し「高森田楽の里」または「高森田楽保存会」で囲炉裏炭火田楽のランチ → 高森湧水トンネル公園見学 → 南阿蘇温泉郷（竹楽亭やルナ天文台など）にチェックイン → 雪見露天風呂に浸かり阿蘇あか牛ディナー → 夜は満天の冬の星空観賞。【2日目】朝の清々しい空気の中、阿蘇パノラマラインを走り草千里ヶ浜へ（白銀の烏帽子岳と凍結した火口池の絶景） → 中岳火口を見学 → あそ望の郷くぎので阿蘇五岳のパノラマをバックにお土産購入 → 帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "オーベルジュ「森のアトリエ」　南阿蘇ルナ天文台",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18413/18413.jpg",
              rating: 4.58,
              reviews: 302,
              price: "¥16,500〜",
              access: "熊本ICより57号線経由車で約40分／熊本空港より206号線経由車で約60分／南阿蘇鉄道　高森駅よりタクシーで10分",
              special: "南阿蘇の自然を一望。星空のプロ【星のコンシェルジュ】による天体生解説。本格フレンチが楽しめます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18413%2F18413.html",
              story: "阿蘇カルデラの南麓、白川水源にほど近い静かな森の中に佇み、九州最大級の公開天文台を備えた唯一無二の滞在型リゾート「オーベルジュ 森のアトリエ 南阿蘇ルナ天文台」。冬（11〜1月）は湿度が一気に下がり、阿蘇の澄み切った夜空に満天の星々や天の川、冬の大三角が息を呑むほど鮮明に輝く天体観測のベストシーズンです。毎夜開催される星空解説ツアーでは、巨大な天体望遠鏡で星雲や土星の輪、月面のクレーターを専門スタッフのガイド付きで間近に観察できます。夕食は阿蘇の大自然が育んだ新鮮な有機野菜や肥後あか牛、ハーブを使った本格フレンチのフルコース。暖炉の火が揺らめく温かな館内で、天文学と美食に浸るロマンチックな冬の休日を過ごせます。",
              roomTip: "プラネタリウム付き客室またはメゾネットスイート。天井に広がる星空プロジェクションと木の温もりに包まれた贅沢な空間。",
              gourmetTip: "「阿蘇あか牛＆地野菜のフレンチフルコース」。じっくりと火入れしたあか牛フィレ肉のローストと、地元契約農家の冬根菜の一皿。",
              highlights: [
                "九州最大級の天文台完備・澄み渡る冬の満天星空ツアー毎夜開催" ,
                "暖炉が揺れるオーベルジュで味わう阿蘇あか牛＆創作フレンチ" ,
                "白川水源至近・冬の星空と天文学に心奪われる大人のリゾート"
              ]
            },
            {
              id: 2,
              name: "南阿蘇俵山温泉　旅館　竹楽亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31405/31405.jpg",
              rating: 4.48,
              reviews: 1376,
              price: "¥26,000〜",
              access: "阿蘇くまもと空港より（俵山トンネル経由）車で約30分・JR立野駅から車で約15分",
              special: "全室離れ・露天風呂付【2024年客室一部リニューアル】大浴場あり！お食事は夕食も朝食も個室！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31405%2F31405.html",
              story: "南阿蘇の俵山山麓、鬱蒼とした竹林と雑木林に囲まれた約五千坪の広大な敷地に、わずか十数棟の数寄屋造りの離れが点在する隠れ家「南阿蘇俵山温泉 旅館 竹楽亭」。すべての客室に加水なしの自家源泉を引いた専用露天風呂が備わり、誰にも邪魔されずに極上のプライベート温泉を満喫できます。泉質はナトリウム―炭酸水素塩温泉（重曹泉）。とろみのある湯が肌の角質を滑らかにし、湯上がりは驚くほどしっとりとした潤いが残ります。冬の凛とした冷気の中、竹林を吹き抜ける風の音を聞きながら浸かる露天風呂はまさに極楽。夕食は食事処の囲炉裏で提供され、肥後牛の炭火焼きやヤマメの塩焼き、旬の地物野菜の郷土料理を地酒とともに味わえます。",
              roomTip: "露天風呂付き離れ客室。窓の外に広がる冬の竹林庭園を眺めながら、いつでも好きな時に源泉掛け流しの湯を独り占め。",
              gourmetTip: "「囲炉裏炭火会席＆肥後牛サーロイン」。炭火で香ばしく炙った肥後牛と、皮はパリッと中はふっくら焼き上げた山女魚の塩焼き。",
              highlights: [
                "五千坪に全室離れ露天風呂付き・加水なし自家源泉重曹泉の美肌湯" ,
                "食事処の囲炉裏炭火で香ばしく焼き上げる肥後牛＆山女魚会席" ,
                "竹林の静寂に抱かれるプライベート空間・極上のおこもり湯治"
              ]
            },
            {
              id: 3,
              name: "休暇村南阿蘇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32117/32117.jpg",
              rating: 4.18,
              reviews: 493,
              price: "¥12,000〜",
              access: "阿蘇くまもと空港より車で約70分　熊本インターより車で約60分",
              special: "玄関前からすでに絶景！美人の湯と呼ばれる温泉「しきみの湯」と阿蘇の田楽と郷土料理が自慢のホテル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32117%2F32117.html",
              story: "阿蘇外輪山の南斜面、標高約650mの高台に位置し、阿蘇五岳（根子岳・高岳・中岳・烏帽子岳・杵島岳）の雄大な涅槃像パノラマを一望できる絶景リゾート「休暇村南阿蘇」。冬の晴れた朝には、カルデラ盆地を覆う雲海が広がり、雲の上に阿蘇五岳が島のように浮かび上がる神秘的な絶景に出会えることもあります。館内の温泉「しきみの湯」は、パノラマの山並みを望む露天風呂が自慢で、雪化粧をまとった根子岳を眺めながら手足を伸ばして入浴できます。夕食は熊本名物の「あか牛ステーキ会席」や、季節の郷土バイキング。広大な敷地内には遊歩道も整備されており、阿蘇の大自然を五感で体感できます。",
              roomTip: "阿蘇五岳ビューの和室または洋室。カーテンを開けると目の前に雄大な阿蘇五岳の冬景色がワイドに広がる特等席。",
              gourmetTip: "「あか牛ステーキ＆くまもと四季の味覚会席」。赤身肉の旨味が際立つあか牛ステーキと、辛子蓮根や馬刺しなど熊本名物の饗宴。",
              highlights: [
                "標高650mから阿蘇五岳の涅槃像パノラマ一望・絶景露天温泉" ,
                "熊本名物あか牛ステーキ会席と馬刺し・阿蘇郷土バイキング" ,
                "冬の晴れた朝にはカルデラを埋め尽くす神秘の雲海に出会えるチャンス"
              ]
            },
            {
              id: 4,
              name: "亀の井ホテル　阿蘇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41854/41854.jpg",
              rating: 4.39,
              reviews: 879,
              price: "¥10,630〜",
              access: "ＪＲ豊肥本線 宮地駅より車で5分／九州自動車道 熊本ＩＣから国道57号二重の峠トンネル経由約40分／熊本空港から約40分",
              special: "お部屋の随所で「くまモン」と出会えるくまモンルームがおすすめ◆阿蘇五岳を一望できる温泉リゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41854%2F41854.html",
              story: "阿蘇五岳を真正面に望む抜群のロケーションに建ち、多彩な温泉施設と充実のホテルサービスでファミリーからカップルまで幅広く親しまれる「亀の井ホテル 阿蘇」。館内には阿蘇五岳をパノラマで望む展望大浴場や露天風呂、寝湯など多彩な湯船が揃い、阿蘇の天然温泉を存分に湯巡りできます。冬期には雪景色を眺めながらの雪見露天風呂が格別の心地よさ。夕食は熊本の旬の味覚をふんだんに取り入れた豪華ビュッフェで、名物あか牛のローストや地魚の刺身、郷土料理が食べ放題。さらに夜には亀の井ホテル名物の無料「担々麺」サービスもあり、寒い冬の夜に温まる心憎いおもてなしが好評です。",
              roomTip: "阿蘇山ビューのデラックスツイン。広々としたバルコニーから雪化粧した阿蘇五岳の絶景を心ゆくまで堪能できます。",
              gourmetTip: "「あか牛＆旬菜ビュッフェと夜食担々麺」。ジューシーなあか牛料理と熊本の郷土料理を好きなだけ味わえる大満足の夕食。",
              highlights: [
                "阿蘇五岳フロントビュー・多彩な大浴場と夜食担々麺無料サービス" ,
                "豪華あか牛ビュッフェ食べ放題＆阿蘇観光ドライブの拠点" ,
                "ファミリーからグループまで快適・充実の施設と阿蘇絶景"
              ]
            },
            {
              id: 5,
              name: "阿蘇内牧温泉　阿蘇ホテル　一番館・二番館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52908/52908.jpg",
              rating: 4.13,
              reviews: 430,
              price: "¥12,100〜",
              access: "内牧温泉の中心。阿蘇駅／車で約10分・阿蘇くまもと空港／車で約45分・熊本IC／車で約55分・福岡空港／車で約2時間",
              special: "100％源泉掛け流し温泉！珍しい飲泉と阿蘇を一望する展望露天風呂。素泊～こだわり会席2食付プランあり",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52908%2F52908.html",
              story: "阿蘇カルデラ最大の内牧温泉に位置し、文豪・夏目漱石も愛した阿蘇の温泉情緒を色濃く残す老舗温泉宿「阿蘇内牧温泉 阿蘇ホテル 一番館・二番館」。敷地内から自噴する2本の自家源泉を保有し、加水・加温一切なしの100%源泉掛け流しで大浴場と展望露天風呂に供給されています。ナトリウム・マグネシウム・カルシウム―硫酸塩泉の湯は「傷の湯」「美肌の湯」として名高く、身体の芯までぽかぽかに温めて冷え性を改善してくれます。夕食は熊本県産あか牛の陶板焼きをメインに、阿蘇の清らかな伏流水で育った高原野菜や米を使った心温まる手作り会席料理。アットホームなもてなしと確かな名湯に心癒やされる冬の定宿です。",
              roomTip: "展望風呂付き客室または最上階和室。窓から内牧温泉街と外輪山の山並みを見渡し、清らかな山の空気に包まれます。",
              gourmetTip: "「あか牛の陶板焼き会席」。阿蘇の大自然で育ったあか牛の柔らかい赤身を熱々の陶板で焼き上げ、特製タレで味わう逸品。",
              highlights: [
                "100%源泉掛け流しの天然温泉・自家源泉を惜しみなく注ぐ展望露天風呂" ,
                "名物あか牛の陶板焼き会席と手作り郷土料理・アットホームな宿" ,
                "文豪も愛した内牧温泉の情緒・身体を芯から温める硫酸塩泉"
              ]
            }
  ];

  const faqs = [
    {
      q: "南阿蘇・高森名物の「高森田楽（たかもりでんがく）」とはどんな料理ですか？",
      a: "高森田楽は、阿蘇郡高森町に伝わる約800年の歴史を持つ伝統的な郷土料理です。室町時代に京都から伝わった田楽が、この地独自の風土と結びついて発展しました。囲炉裏を囲み、炭火の灰に串を立ててじっくり焼き上げます。主な具材は、地元の清流で育ったヤマメ、阿蘇特産の里芋「つるの子芋（粘り気と甘みが強い幻の里芋）」、堅豆腐（水分が少なく崩れにくい豆腐）、こんにゃく、季節の野菜など。これらに、山椒やゆず、胡麻を練り込んだ自家製の秘伝甘味噌をたっぷり塗り、炭火で香ばしく焦げ目をつけながら熱々をいただきます。寒い冬に炭火の温もりを感じながら味わう高森田楽は格別の情緒があります。"
    },
    {
      q: "冬の阿蘇五岳の雪景色と「涅槃像（ねはんぞう）」とは何ですか？",
      a: "阿蘇五岳（根子岳・高岳・中岳・烏帽子岳・杵島岳）は、遠くから眺めると、お釈迦様が仰向けに横たわっている姿に見えることから「阿蘇の涅槃像」と呼ばれています（根子岳が顔、高岳が胸、中岳がへそ、烏帽子岳・杵島岳が膝と足）。11月中旬から1月にかけては山頂付近に初冠雪が見られ、特に鋸の刃のようにギザギザとした岩峰を持つ根子岳（標高1,433m）が白銀に輝く姿は絵画のように壮麗です。南阿蘇側から見上げると、南斜面のため日当たりが良く、青空と白い雪稜のコントラストが最も美しく映えます。"
    },
    {
      q: "冬に阿蘇を訪れる際の道路状況（チェーン・スタッドレスタイヤ）の注意点は？",
      a: "阿蘇カルデラ内（南阿蘇村や阿蘇市街）の平野部は、温暖な熊本県にありながら標高が約400〜500mあるため、真冬の12月下旬〜1月には氷点下に冷え込みます。特に阿蘇山上（中岳火口方面）や外輪山を越えるミルクロード、国道57号北側復旧道路、やまなみハイウェイなどは積雪や路面凍結が頻繁に発生します。冬期にマイカーやレンタカーで阿蘇エリアを周遊する場合は、必ずスタッドレスタイヤ装着車の予約をおすすめします。高速道路や主要幹線道路でも冬用タイヤ規制が出ることがあるため、当日の道路交通情報を事前に確認しましょう。"
    },
    {
      q: "「阿蘇あか牛（褐毛和種）」の肉質の特徴と、冬のおすすめの食べ方は？",
      a: "阿蘇あか牛は、阿蘇の大草原で放牧され清らかな湧水と牧草を食べて育った熊本の特産和牛です。黒毛和牛に比べて脂身（サシ）が適度で、タウリンや鉄分が豊富な良質の赤身肉が特徴。肉本来の力強い旨味と甘みがあり、たくさん食べても胃もたれしにくいヘルシーさが現代の旅行者に大人気です。冬は熱々の鉄板や陶板でさっと焼き上げるステーキをはじめ、すき焼き鍋やあか牛丼、しゃぶしゃぶで味わうと、肉汁が口いっぱいに広がり身体がぽかぽかと温まります。"
    },
    {
      q: "南阿蘇・高森を巡る1泊2日の冬の王道モデルコースを教えてください。",
      a: "【1日目】熊本空港または熊本駅からレンタカーで出発 → 国道57号・新阿蘇大橋を渡り南阿蘇へ（絶景ビュースポット・ヨミュールで休憩） → 毎分60トンの水が湧き出る「白川水源」で名水汲み → 高森町へ移動し「高森田楽の里」または「高森田楽保存会」で囲炉裏炭火田楽のランチ → 高森湧水トンネル公園見学 → 南阿蘇温泉郷（竹楽亭やルナ天文台など）にチェックイン → 雪見露天風呂に浸かり阿蘇あか牛ディナー → 夜は満天の冬の星空観賞。【2日目】朝の清々しい空気の中、阿蘇パノラマラインを走り草千里ヶ浜へ（白銀の烏帽子岳と凍結した火口池の絶景） → 中岳火口を見学 → あそ望の郷くぎので阿蘇五岳のパノラマをバックにお土産購入 → 帰路へ。"
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
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-blue-600">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">熊本・南阿蘇＆高森・阿蘇あか牛名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/30 border border-emerald-300/40 text-emerald-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>11月・12月・1月冬の九州火の国旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              熊本・南阿蘇＆高森<br className="hidden sm:inline" />
              白銀の阿蘇五岳パノラマと冬の伝統「高森田楽」囲炉裏炭火！<br className="hidden sm:inline" />
              美肌の南阿蘇温泉郷＆極上あか牛名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-emerald-100 leading-relaxed drop-shadow">
              カルデラの澄んだ冬空に輝く阿蘇五岳の雄大な雪稜。八百年の歴史を誇る「高森田楽」の炭火が灯る温もりと、清流で育ったやまめ。満天の星空を仰ぐ露天風呂に浸かり、ヘルシーで旨味あふれる「阿蘇あか牛」に舌鼓を打つ冬の南阿蘇・高森紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の南阿蘇・高森旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-900 block mb-1">① 阿蘇五岳雪景色＆白川水源</span>
                釈迦の涅槃像に見立てられる阿蘇五岳の冠雪パノラマ。毎分60トンの名水が湧く白川水源と静寂のカルデラドライブ。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">② 高森田楽炭火焼き＆あか牛</span>
                800年の歴史を持つ郷土の味・高森田楽。囲炉裏で焼く山女魚とつるの子芋、そして赤身の旨味が極まる阿蘇あか牛。
              </div>
              <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-100">
                <span className="font-bold text-teal-900 block mb-1">③ 南阿蘇温泉郷＆冬の星空</span>
                ナトリウム炭酸水素塩泉の美肌湯と絶景雪見露天風呂。空気が澄み渡る冬ならではの九州最大級天文台での星空観察。
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Regional Editorial Section */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-600 pl-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">MINAMIASO & TAKAMORI WINTER ESSENCE</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                なぜ11〜1月の南阿蘇・高森なのか？雄大な雪景色と心温まる囲炉裏文化
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                九州の中央に位置する世界有数の巨大カルデラ・阿蘇。その南側の裾野に広がる南阿蘇村と高森町は、北側の観光地とは一線を画す、どこか穏やかで牧歌的な田園風景と雄大な自然が残る癒やしの郷です。11月から1月にかけての冬期は、大気の透明度が一年で最も高まり、標高1,000メートルを超える阿蘇五岳（根子岳・高岳・中岳・烏帽子岳・杵島岳）の雄大な山並みが、青く澄み切った空に圧倒的な存在感で聳え立ちます。
              </p>
              <p>
                阿蘇五岳は、その稜線がお釈迦様が仰向けに横たわる姿に似ていることから「涅槃像」と呼ばれますが、冬になると山頂に白銀の雪が積もり、白く輝く神々しい姿へと変貌します。特に高森側から望む「根子岳」の鋸歯状の峻険な岩肌に雪が張り付く姿は息を呑むほどの迫力です。カルデラ内には毎分60トンもの澄んだ湧水が年中絶えることなく湧き出る「白川水源」があり、冬の静寂の中で底から砂を巻き上げながら湧き出る水は、透明度抜群で神秘的なエメラルドグリーンに輝きます。
              </p>
              <p>
                阿蘇の冬は、文豪たちが愛した文学の舞台でもあります。夏目漱石が小説『二百十日』の着想を得た内牧温泉をはじめ、カルデラ内には古くから人々の心と体を癒やしてきた湯治場が点在しています。熊本地震からの奇跡の復興を遂げた南阿蘇鉄道の車窓からは、冬枯れの雄大なカルデラ盆地と、白川第一橋梁から見下ろす深い渓谷美が広がり、復興のシンボル「新阿蘇大橋」とともに旅人を温かく迎え入れます。
              </p>
              <p>
                そして南阿蘇の冬を語る上で欠かせないのが、身体と心を芯から温めてくれる「食と温泉」の文化覚醒です。高森町に伝わる「高森田楽」は、囲炉裏の灰に炭火をおこし、竹串に刺した山女魚や特産のつるの子芋、堅豆腐をじっくりと炙り、特製の山椒味噌を塗って焦げ目をつけて味わう冬の至高のご馳走。パチパチとはぜる炭火の音と芳ばしい味噌の香りが部屋いっぱいに満ちる時間は、旅の最高の思い出となります。さらに、広大な草原で育った健康的な「阿蘇あか牛」のステーキやすき焼き、そしてカルデラの地下から湧き出る炭酸水素塩泉の美肌温泉。冷涼な冬の夜空にはこぼれ落ちるような満天の星が瞬き、五感すべてが研ぎ澄まされる特別なひとときが訪れます。
              </p>
            </div>
          </section>

          {/* Section: Spots to visit */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-emerald-600" />
              <span>冬の南阿蘇・高森で絶対に巡りたい絶景と名所</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-emerald-900 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-emerald-600" />
                  <span>高森田楽の里＆高森田楽保存会</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  築200年を超える古民家で、囲炉裏を囲んで味わう800年の伝統料理。炭火の遠赤外線でじっくり焼かれたつるの子芋はねっとりと甘く、ヤマメは頭から丸ごと食べられる柔らかさ。素朴ながら贅沢な冬の食体験です。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-teal-900 flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-teal-600" />
                  <span>環境省名水百選・白川水源</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  毎分60トンの清冽な水が常温14度で湧き出る名水地。冬の澄んだ空気の中で見ると、池底の水草と澄み切った水が息を呑む美しさ。名水は自由に持ち帰ることができ、旅の合間の水分補給やお茶淹れにも最高です。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-amber-900 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-600" />
                  <span>阿蘇あか牛ステーキ＆あか牛丼</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  赤身の美味しさを追求した熊本自慢の和牛。南阿蘇や内牧にはあか牛の名店が点在し、ミディアムレアに焼いた肉厚なステーキや、温玉と特製ダレを絡めたあか牛丼は、冬の阿蘇ドライブの最高のエネルギー源です。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-cyan-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                  <span>南阿蘇ルナ天文台と冬の満天星空</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  街明かりが少なく空気が乾燥する冬の南阿蘇は、天体観測の聖地。九州屈指の望遠鏡で見る冬のオリオン大星雲やプレアデス星団（すばる）は、肉眼では見られない圧倒的な輝きを放ち、一生の思い出になります。
                </p>
              </div>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-emerald-600 pl-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">FEATURED ACCOMMODATIONS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                南阿蘇＆高森・阿蘇カルデラを満喫する厳選ホテル・宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室状況・料金・レビュー情報を取得して掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[240px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-700/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
                        className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
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
            <div className="border-l-4 border-emerald-600 pl-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！白銀の阿蘇五岳と高森田楽・星空温泉を満喫する冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-emerald-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-emerald-700 block mb-1">1日目 10:30 | 熊本空港から阿蘇へ</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">新阿蘇大橋を渡り南阿蘇へ・白川水源の清冽な名水を味わう</h4>
                <p className="text-slate-600 leading-relaxed">
                  阿蘇くまもと空港からレンタカーで南阿蘇へ。新阿蘇大橋の展望スペースから立野峡谷の絶景を望み、環境省名水百選の白川水源へ。水晶のように澄んだ冬の名水を味わい、心身を浄化。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-emerald-700 block mb-1">1日目 12:30 | 高森町で囲炉裏ランチ</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">名物「高森田楽」の炭火を囲みヤマメとつるの子芋を堪能</h4>
                <p className="text-slate-600 leading-relaxed">
                  高森町の古民家食事処へ。赤々と燃える囲炉裏の炭火で串刺しのヤマメや堅豆腐、つるの子芋を炙り、香ばしい甘味噌とともにいただく。身体が芯から温まる伝統の味。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-emerald-700 block mb-1">1日目 16:00 | 南阿蘇の温泉宿にチェックイン</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">白銀の阿蘇五岳を望む雪見露天風呂＆極上あか牛ディナー</h4>
                <p className="text-slate-600 leading-relaxed">
                  旅館（竹楽亭やルナ天文台など）にチェックイン。美肌の炭酸水素塩温泉に浸かり、夕暮れに染まる阿蘇五岳の山並みを眺める。夕食は肉の旨味が凝縮した阿蘇あか牛ステーキに舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-emerald-700 block mb-1">1日目 20:30 | 冬の夜空の天体観測</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">澄み切った阿蘇の夜空に瞬く満天の星々と冬の星座</h4>
                <p className="text-slate-600 leading-relaxed">
                  防寒具を着込み夜空を見上げると、こぼれ落ちそうな星の海。大型天体望遠鏡での星空観察ツアーに参加し、オリオン座や冬の天の川の神秘に触れる。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-emerald-700 block mb-1">2日目 09:30 | 阿蘇パノラマラインドライブ</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">草千里ヶ浜の白銀世界とあそ望の郷くぎのでお土産購入</h4>
                <p className="text-slate-600 leading-relaxed">
                  阿蘇山頂へ登るパノラマラインを走り、雪化粧の烏帽子岳と凍結した火口池が美しい草千里ヶ浜へ。「道の駅 あそ望の郷くぎの」で阿蘇あか牛の加工品や地酒を購入して帰路へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>冬（11・12・1月）の南阿蘇・高森旅行・お役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-950">
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・スタッドレスタイヤとチェーンの準備</strong>
                南阿蘇のカルデラ内平野部は普段雪が少ないですが、強い寒波の到来時や草千里・大観峰などの高所道路を通過する際は、道路が圧雪・凍結します。12月〜1月にレンタカーを借りる際は、必ずスタッドレスタイヤ装着車を指定してください。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・夜間の気温低下と防寒対策</strong>
                標高が高いため、冬の夜間や早朝は氷点下5度以下まで冷え込むことがあります。星空観察や早朝散策を予定している場合は、ロングダウンコート、ニット帽、手袋、厚手の靴下が必須です。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・高森田楽の営業時間と予約</strong>
                高森田楽の名店（高森田楽の里、高森田楽保存会など）は、囲炉裏の準備や仕込みがあるため、昼のピーク時は混雑します。事前に営業日や受付時間を確認し、可能であれば事前予約をしておくと安心です。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・南阿蘇鉄道「ゆうすげ号」の冬期運行</strong>
                全線復旧した南阿蘇鉄道のトロッコ列車「ゆうすげ号」は、冬期は運行日が土日祝日中心または運休期間となる場合があります。普通列車は毎日運行しており、白川橋梁からの渓谷美を楽しめます。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-600 pl-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                南阿蘇＆高森の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-emerald-600 font-black">Q.</span>
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
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>熊本および九州の冬の厳選温泉・絶景特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-miyazaki-miyakonojo-kobayashi-kirishima-wagyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 transition font-medium text-slate-700">
                🥩 都城＆小林・霧島連山と宮崎牛名宿
              </Link>
              <Link href="/winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 transition font-medium text-slate-700">
                ⛩️ 大分宇佐神宮初詣と豊後牛・海鮮名宿
              </Link>
              <Link href="/winter-kagoshima-izumi-crane-akune-kurobuta-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 transition font-medium text-slate-700">
                🦩 出水ツル渡来地と阿久根黒豚名宿
              </Link>
              <Link href="/winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 transition font-medium text-slate-700">
                ♨️ 島原温泉と名物具雑煮・島原城名宿
              </Link>
              <Link href="/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 transition font-medium text-slate-700">
                🦑 唐津・呼子イカ活造りと佐賀牛名宿
              </Link>
              <Link href="/features" className="p-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      
      <HubRelatedPosts currentSlug="winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay" />
</div>
    </>
  );
}
