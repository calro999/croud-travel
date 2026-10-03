import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月静岡清水】冬の久能山東照宮新春初詣＆日本平富士山パノラマ絶景！清水港冬マグロ・由比桜えびと名宿5選",
  description: "冬の静岡・清水エリアは、大気澄み渡る冬晴れの空に純白の雪を抱いた富士山が駿河湾の青に映え、国宝・久能山東照宮が新春開運の初詣祈願で賑わう絶景と歴史の宝庫。日本平夢テラスからの360度大パノラマ、清水港の日本一の冷凍マグロ水揚げが誇る極上本マグロや由比の冬桜えび、出汁の染みた名物静岡おでんに舌鼓を打ち、天然温泉や富士展望宿で寛ぐ大人の冬旅。楽天APIから最新取得した静岡・日本平・清水の信頼の名宿5選を徹底特集します。",
  keywords: '静岡 ホテル, 清水 ホテル, 久能山東照宮 初詣, 日本平ホテル, 日本平夢テラス 富士山, 清水港 マグロ, 由比 桜えび, ホテルオーレイン静岡, 11月 12月 1月 静岡 観光',
  alternates: {
    canonical: 'https://croud-travel.com/winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay'
  },
  openGraph: {
    title: "【11・12・1月静岡清水】冬の久能山東照宮新春初詣＆日本平富士山パノラマ絶景！清水港冬マグロ・由比桜えびと名宿5選",
    description: "冬の静岡・清水エリアは、大気澄み渡る冬晴れの空に純白の雪を抱いた富士山が駿河湾の青に映え、国宝・久能山東照宮が新春開運の初詣祈願で賑わう絶景と歴史の宝庫。日本平夢テラスからの360度大パノラマ、清水港の日本一の冷凍マグロ水揚げが誇る極上本マグロや由比の冬桜えび、出汁の染みた名物静岡おでんに舌鼓を打ち、天然温泉や富士展望宿で寛ぐ大人の冬旅。楽天APIから最新取得した静岡・日本平・清水の信頼の名宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function ShizuokaCityWinterPage() {
  const hotels = [
            {
              id: 1,
              name: "日本平ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13913/13913.jpg",
              rating: 4.73,
              reviews: 1091,
              price: "¥8,100〜",
              access: "ＪＲ静岡駅よりバス４０分・タクシー25分（駅からシャトルバス有り）／静岡・清水ＩＣより車で25分",
              special: "日本平が日本夜景遺産に認定★三保の松原を眼下に富士山を望む絶景を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13913%2F13913.html",
              story: "標高307mの日本平山頂に位置し、「風景美術館」と称される国内屈指の絶景リゾート「日本平ホテル」。エントランスを抜けると、ガラス一面に雄大な冠雪富士山と青く輝く駿河湾、三保松原を見下ろす圧倒的なパノラマが広がります。全客室のテラスやバルコニーからも刻々と表情を変える富士山の朝夕の絶景を独占。国宝・久能山東照宮へは日本平ロープウェイでわずか5分でアクセスでき、新春初詣の拠点として最高峰の贅沢を誇ります。夕食は地元の旬素材と清水港の鮮魚を取り入れた極上フレンチや日本料理会席を、富士山を望むダイニングで堪能できます。",
              roomTip: "富士山ビュー・スーペリアツイン。バルコニー付きの広々とした間取り。冬の澄んだ夜明け、紅富士に染まる山頂を温かいベッドから眺める至福の時間。",
              gourmetTip: "「オールデイダイニング・ザ・テラス」の冬期ディナー。清水港直送のマグロや近海地魚、静岡そだち牛を贅沢に仕立てたシェフ渾身のフルコース。",
              highlights: [
                "日本平山頂の風景美術館・客室テラスから冠雪富士山と駿河湾大パノラマ・ロープウェイ直結",
                "久能山東照宮新春初詣に絶好の立地・清水港鮮魚と静岡そだち牛を堪能する極上フレンチ",
                "日本夜景遺産認定の夜景と朝焼けの紅富士・大人の特別な記念日ステイに最適"
              ]
            },
            {
              id: 2,
              name: "ホテルアソシア静岡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7277/7277.jpg",
              rating: 4.42,
              reviews: 3518,
              price: "¥7,100〜",
              access: "ＪＲ静岡駅北口より徒歩１分　国道１号線沿い　東名静岡ＩＣより１５分 新東名新静岡ＩＣより約３０分",
              special: "JR静岡駅から徒歩１分。ビジネスに、レジャーに、アクセス抜群のホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7277%2F7277.html",
              story: "JR静岡駅北口直結という抜群の機動力を誇る都市型グランドホテル「ホテルアソシア静岡」。新幹線改札から雨や風に濡れることなくスムーズにチェックインでき、日本平や久能山東照宮、清水港方面への観光バスや電車の発着拠点として絶大な利便性を発揮します。館内は格式ある落ち着いたインテリアで統一され、ゆとりある客室にはシモンズ社製ベッドと加湿空気清浄機を完備。日本料理「京都 つる家」や中国料理、鉄板焼など多彩な本格レストランを備え、冬の静岡の味覚を心ゆくまで堪能できます。",
              roomTip: "エグゼクティブツイン。上層階に位置し、天気の良い冬の朝には遠く富士山や静岡市街地の美しい朝景を望む洗練された空間。",
              gourmetTip: "「京都 つる家」の冬の駿河会席。清水港の脂の乗った本マグロや由比の桜えび真丈、季節の煮物椀など職人技が光る伝統の日本料理。",
              highlights: [
                "JR静岡駅北口直結のランドマーク・新幹線アクセス抜群・多彩な本格レストラン完備",
                "シモンズ社製ベッド完備・京都つる家の冬会席で味わう本マグロと由比桜えび",
                "駅ビル近接でお土産購入やグルメ散策に極めて便利・老舗ホテルならではの洗練接客"
              ]
            },
            {
              id: 3,
              name: "ホテルクエスト清水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9188/9188.jpg",
              rating: 4.45,
              reviews: 2525,
              price: "¥4,050〜",
              access: "◆JR清水駅西口徒歩１分◆東名清水ICから車で１０分（Ｐ有）◆コンビニ・スーパー徒歩1分◆24時間チェックインOK",
              special: "◆楽天トラベルシルバーアワード2021受賞◆JR清水駅1分◆清水モダン客室◆朝カレー＆アスリート豚汁",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9188%2F9188.html",
              story: "JR清水駅西口から徒歩わずか1分、清水港やエスパルスドリームプラザへの観光にも至便な立地を誇る「ホテルクエスト清水」。館内レストラン「ラ・ソネット」では、公認メディシェフが手掛ける健康と美食を両立させたオリジナル料理が全国的な注目を集めています。朝食ビュッフェでは清水港直送の新鮮なマグロや、駿河湾のしらす、桜えび、地場野菜をふんだんに使った滋味あふれるメニューがずらりと並び、冬の観光前に活力をしっかりチャージできます。",
              roomTip: "デラックスツイン。清潔感あふれる明るいインテリアに快適なワークスペースと上質なベッドを備え、冬の観光後も快適に寛げる仕様。",
              gourmetTip: "「清水港まぐろと駿河湾の恵み朝食バイキング」。新鮮なマグロの漬けや刺身、桜えびの香ばしいかき揚げ、名物朝カレーが揃う大満足の朝ごはん。",
              highlights: [
                "JR清水駅徒歩1分・清水港や河岸の市至近・メディシェフ監修の健康美食とマグロ朝食",
                "清水港直送マグロの漬けや駿河湾しらすが味わえる朝食ビュッフェ・快適客室",
                "エスパルスドリームプラザや三保松原への周遊拠点に最高・温かなおもてなし"
              ]
            },
            {
              id: 4,
              name: "ホテルオーレイン（静岡）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179192/179192.jpg",
              rating: 4.59,
              reviews: 3065,
              price: "¥6,400〜",
              access: "ＪＲ　静岡駅より徒歩にて約１０分",
              special: "快適で満ち足りた時間、想像以上。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179192%2F179192.html",
              story: "静岡駅北口から徒歩約10分、静岡随一の繁華街・呉服町や青葉おでん街にもほど近い好立地に佇む「ホテルオーレイン（静岡）」。ホテル最上階13階には、宿泊者専用の男女別天然温泉大浴場と露天風呂、本格的なフィンランドサウナを完備しています。地下から汲み上げる天然温泉は冬の冷えた体を芯からじんわりと温め、旅の疲労を爽快にリフレッシュ。焼き立てパンと地産地消の和洋料理が並ぶ朝食バイキングでは、静岡名物の黒はんぺんや静岡おでんも楽しめ、コストパフォーマンスの高さで圧倒的な人気を誇ります。",
              roomTip: "コンフォートダブル。個別空調と加湿空気清浄機を完備。天然木を生かしたナチュラルな色調で、一人旅からカップルまでリラックスできます。",
              gourmetTip: "「手作り朝食ビュッフェ」。毎朝ホテル内で焼き上げるサクサクのクロワッサンや静岡おでん、具沢山の味噌汁が宿泊者無料で味わえる贅沢。",
              highlights: [
                "静岡駅徒歩10分・最上階13階に天然温泉大浴場＆露天風呂・サウナ・朝食静岡おでん無料",
                "天然温泉で芯から温まる極上の湯浴み・焼き立てクロワッサン・青葉おでん街徒歩圏",
                "夜鳴きカレーなど宿泊者特典が充実・口コミ高評価4.59の圧倒的人気ホテル"
              ]
            },
            {
              id: 5,
              name: "静鉄ホテルプレジオ　静岡駅北",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70230/70230.jpg",
              rating: 4.01,
              reviews: 2717,
              price: "¥3,673〜",
              access: "静岡駅北口より地下道経由で徒歩３分の好立地（雨天時も安心）コンビニ徒歩1分♪",
              special: "【お得な宿クーポン配布中！】★駅から地下道通ってすぐ★免震構造&amp;Wi-Fi完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70230%2F70230.html",
              story: "JR静岡駅北口から徒歩約3分、繁華街へのアクセスも抜群の免震構造プレミアムビジネスホテル「静鉄ホテルプレジオ 静岡駅北」。全室にシモンズ社製ポケットコイルベッドと加湿機能付きプラズマクラスター空気清浄機を完備し、静寂性と清潔感を徹底追求。セキュリティエレベーターを備えており、女性一人旅でも安心して滞在できます。朝食会場では静岡県産の食材を中心とした和洋折衷ビュッフェが用意され、冬の久能山東照宮初詣や三保松原観光へスマートに出発できます。",
              roomTip: "スーペリアシングル・ツイン。広々としたライティングデスクと快適なベッド。高い遮音性で静穏な冬の夜を快適に過ごせます。",
              gourmetTip: "「静岡の味覚を彩る和洋モーニング」。名物の黒はんぺんフライや炊きたてのご飯、季節のおかずが並び、手軽に静岡の郷土色を体感。",
              highlights: [
                "静岡駅北口徒歩3分・免震構造の安心ステイ・シモンズベッド＆加湿空気清浄機完備",
                "女性一人旅にも安心のカードキーセキュリティ・ビジネスから初詣観光まで高コスパ",
                "清潔感あふれるモダン空間・市内各所へのフットワーク良好・ストレスフリー"
              ]
            }
  ];

  const faqData = [
  {
    "q": "久能山東照宮の新春初詣（1月）の見どころや日本平ロープウェイの運行について教えてください。",
    "a": "久能山東照宮は、徳川家康公をご遺命により埋葬した全国の東照宮の総本社です。日光東照宮より前に建てられた社殿は極彩色豊かな国宝で、新春の初詣では平和開運・出世祈願の参拝者で賑わいます。参拝ルートは主に2つあり、日本平山頂から「日本平ロープウェイ（所要約5分）」に乗って屏風谷の絶景を眼下に見下ろしながらアクセスする方法と、久能海岸側から1159段の石段（いちいちごくろうさん）を登る方法があります。冬の初詣観光には景色が素晴らしく歩行の負担が少ない日本平ロープウェイの利用がおすすめです。元旦は早朝運行も実施されます。"
  },
  {
    "q": "冬の「日本平夢テラス」からの富士山鑑賞のベストな時間帯や魅力は？",
    "a": "日本平夢テラスは隈研吾建築都市設計事務所が手掛けた美しい展望施設で、3階の展望回廊（1周約200m）からは360度の大パノラマが広がります。冬（11月〜1月）は一年の中で最も空気が乾燥して澄み渡るため、冠雪した富士山が青い駿河湾や三保松原、遠く伊豆半島とともにくっきりと望めます。ベストな時間帯は「早朝8時〜10時頃（逆光にならず鮮やかな順光で富士山が白く輝く）」、および「夕暮れ16時〜17時頃（富士山と駿河湾が茜色から紫色のグラデーションに染まるマジックアワー）」です。"
  },
  {
    "q": "清水港の「冬マグロ」がなぜ日本一と言われるのか、おすすめの食べ処は？",
    "a": "清水港は、遠洋マグロ漁船の基地として日本国内で消費される冷凍マグロの約半分を水揚げする「日本一のマグロの港」です。冬の清水港では、極寒の海で育ち濃厚な脂を蓄えた本マグロ（クロマグロ）やミナミマグロ（インドマグロ）が冷凍技術の粋を集めて極上の鮮度で提供されます。清水駅東口すぐの「清水魚市場 河岸の市（いちば館・まぐろ館）」では、山盛りの本マグロ丼や中トロ・大トロ尽くしの舟盛りを驚きのリーズナブルな価格で味わうことができます。"
  },
  {
    "q": "由比の桜えびや静岡おでんなど、冬に味わうべき静岡グルメの魅力は？",
    "a": "駿河湾の特産品である「桜えび」は、日本国内で駿河湾（由比港・大井川港）だけで水揚げされる貴重な海の宝石です。秋漁（10月下旬〜12月下旬）の冬期には、獲れたての桜えびをサクッと揚げた「桜えびのかき揚げ」の香ばしい甘みが絶品です。また、冬の夜に外せないのが「静岡おでん」。牛すじや黒はんぺんを真っ黒な特製スープで煮込み、青海苔と魚粉（だし粉）をたっぷりかけて味わう名物料理で、静岡駅近くの「青葉横丁」や「青葉おでん街」の赤提灯をくぐれば、温かい人情と熱々のおでんに癒やされます。"
  },
  {
    "q": "冬（11月〜1月）の静岡市・日本平の気候や服装・交通アクセスのポイントは？",
    "a": "静岡市は南向きの駿河湾に面し、北側の山々が冷たい風を遮るため、本州の中でも非常に温暖で冬の晴天率が極めて高いエリアです。日中は10〜15℃前後まで上がり日差しがあれば暖かく感じられますが、朝晩や日本平山頂の展望台では海風が強く冷え込みます。脱ぎ着しやすいニットに防風性のあるジャケットやコート、マフラーを用意しましょう。静岡駅からは日本平線バス（静鉄ジャストライン）で約35分で日本平山頂へアクセス可能です。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://croud-travel.com/winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay#webpage",
        "url": "https://croud-travel.com/winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay",
        "name": "【11・12・1月静岡清水】冬の久能山東照宮新春初詣＆日本平富士山パノラマ絶景！清水港冬マグロ・由比桜えびと名宿5選",
        "description": "冬の静岡・清水エリアは、大気澄み渡る冬晴れの空に純白の雪を抱いた富士山が駿河湾の青に映え、国宝・久能山東照宮が新春開運の初詣祈願で賑わう絶景と歴史の宝庫。日本平夢テラスからの360度大パノラマ、清水港の日本一の冷凍マグロ水揚げが誇る極上本マグロや由比の冬桜えび、出汁の染みた名物静岡おでんに舌鼓を打ち、天然温泉や富士展望宿で寛ぐ大人の冬旅。楽天APIから最新取得した静岡・日本平・清水の信頼の名宿5選を徹底特集します。",
        "inLanguage": "ja",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "url": "https://croud-travel.com/",
          "name": "くらうどトラベル"
        }
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "久能山東照宮初詣＆富士山展望宿",
            "item": "https://croud-travel.com/winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "静岡県静岡市・清水区（日本平・久能山東照宮・清水港）",
        "description": "日本平夢テラスからの白銀冠雪富士山大パノラマ、国宝・久能山東照宮の新春開運初詣、清水港の日本一の本マグロや由比桜えびを堪能する冬の静岡。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "静岡県",
          "addressLocality": "静岡市清水区",
          "addressCountry": "JP"
        }
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Mountain className="w-4 h-4 text-teal-300 animate-pulse" />
            <span>11月・12月・1月冬の東海特選ガイド｜静岡・清水・日本平</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            冬の久能山東照宮新春初詣＆日本平富士山パノラマ絶景！<br className="hidden sm:inline" />
            清水港冬マグロ・由比桜えびと名宿5選
          </h1>

          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            澄み切った青空に輝く純白の冠雪富士と駿河湾のパノラマ。徳川家康公を祀る国宝・久能山東照宮の新春開運祈願、清水港の日本一の極上本マグロと由比の桜えび、名物静岡おでんに舌鼓を打ち、絶景ホテルや天然温泉に寛ぐ極上の冬旅へご案内します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-4 h-4 text-teal-400" /> 静岡駅・日本平・久能山・清水港
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Utensils className="w-4 h-4 text-amber-400" /> 清水港本マグロ・由比桜えび・静岡おでん
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月中旬〜1月下旬
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-teal-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-teal-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の静岡・日本平富士山＆久能山東照宮特集</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Deep Dive Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              駿河湾に浮かぶ冠雪富士と東照宮の極彩色！冬の静岡に満ちる開運の光
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              霊峰富士を望む日本平の絶景回廊、徳川家康公の眠る国宝聖地、そして日本一のマグロ港
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              冬の静岡を訪れる最大の歓びは、大気の透明度が年間を通じて最高潮を迎え、冠雪した霊峰富士が完璧な姿を現すことです。南向きの駿河湾に面し、北側を赤石山脈（南アルプス）に守られた静岡市は、本州でも有数の温暖な気候と冬の高い晴天率を誇ります。標高307mの有度山山頂に広がる「日本平」に立てば、手前に広がる駿河湾の深い藍色、世界遺産・三保松原の緑の松林、そして冬空へ白く輝く富士山の優美な稜線が一体となった、日本を代表する絶景パノラマが眼前に広がります。
            </p>
            <p>
              日本平山頂から深い渓谷を越えて日本平ロープウェイでわずか5分。海に面した断崖に鎮座するのが、江戸幕府を開き260年に及ぶ泰平の世を築いた徳川家康公をご遺命によって埋葬した「国宝・久能山東照宮」です。日光東照宮の手本となった権現造りの社殿は、江戸初期の名工・中井正清が手掛けた極彩色と精緻な彫刻に彩られ、新春の初詣では平和開運や出世成就を祈願する人々で賑わいます。社殿から駿河湾を見下ろす景色は清々しく、冬の柔らかな日差しが境内を黄金色に包み込みます。
            </p>
            <p>
              そして静岡の冬の食を語る上で欠かせないのが、駿河湾の海の幸と港町の活気です。清水港は、遠洋マグロ漁船の基地として日本国内で消費される冷凍マグロの約半分を水揚げする「日本一のマグロの港」。冬の冷たい荒波で鍛え抜かれ濃厚な脂を蓄えた本マグロ（クロマグロ）やミナミマグロ（インドマグロ）は、赤身の芳醇な旨味から大トロのとろける甘みまで、まさに至高の美味。清水港の「河岸の市」やまぐろ館では、鮮度抜群のマグロ丼や舟盛りが驚きのボリュームで楽しめます。
            </p>
            <p>
              さらに駿河湾特産の「桜えび」は、日本国内で由比港と大井川港だけで水揚げされる海の至宝。10月下旬から12月下旬にかけての秋・冬漁で水揚げされた新鮮な桜えびをサクッと揚げた「桜えびのかき揚げ」は、香ばしさと甘みが口いっぱいに弾けます。夜には静岡駅近くの「青葉おでん街」「青葉横丁」の赤提灯へ。黒はんぺんや牛すじを煮込んだ真っ黒な出汁の湯気、だし粉と青海苔の香り、地元銘酒「磯自慢」や「初亀」の熱燗を合わせれば、冬の寒さは至福のぬくもりへと昇華します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-teal-700 block mb-1">日本平夢テラス＆冠雪富士</span>
              <p className="text-slate-600">360度の展望回廊から望む純白富士山と駿河湾。朝焼けの紅富士と夜景遺産の煌めき。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-teal-700 block mb-1">国宝・久能山東照宮初詣</span>
              <p className="text-slate-600">徳川家康公を祀る総本社の新春開運参拝。ロープウェイ空中散歩と極彩色の絢爛社殿。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-teal-700 block mb-1">清水港本マグロ＆由比桜えび</span>
              <p className="text-slate-600">日本一の冷凍マグロ水揚げが誇る極上本マグロ丼。サクサク香ばしい由比桜えびかき揚げと静岡おでん。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Handpicked Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の静岡・日本平・清水を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルAPIから最新取得した、富士山絶景パノラマ・駅直結・最上階天然温泉完備の信頼宿
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-300 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-teal-800 bg-teal-50 px-3 py-1 rounded-lg w-fit">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900">客室の魅力：</span> {hotel.roomTip}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">冬の食体験：</span> {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-2xl font-extrabold text-teal-600">{hotel.price}</span>
                    </div>

                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-sm shadow-md hover:from-teal-500 hover:to-cyan-500 hover:shadow-lg transition-all"
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

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の静岡・清水を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              日本平富士山絶景、久能山東照宮初詣、清水港本マグロ、青葉おでん街を巡る爽快プラン
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-teal-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 10:00】静岡駅到着＆バスで「日本平夢テラス」へ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                東海道新幹線で静岡駅に到着。北口から日本平線バスに乗車し、約35分で日本平山頂へ。隈研吾氏設計の「日本平夢テラス」展望回廊から、冬晴れの青空に白く輝く冠雪富士山と駿河湾、三保松原の360度大パノラマを堪能します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 11:30】日本平ロープウェイで国宝「久能山東照宮」新春初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                日本平山頂からロープウェイに乗車し、深い渓谷を眼下に見下ろしながら久能山東照宮へ。徳川家康公を祀る極彩色の国宝社殿で新春開運祈願を行い、家康公の神廟を参拝。駿河湾を見下ろす高台で清らかな風を感じます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 14:00】清水港「河岸の市」で本場極上マグロ丼ランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                日本平から清水駅方面へ移動し、清水魚市場「河岸の市」のまぐろ館へ。日本一の冷凍マグロ水揚げを誇る港町ならではの、本マグロ中トロ・赤身が山盛りの海鮮丼を賞味。とろけるような脂の甘みと濃厚なコクを満喫します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 16:30】世界遺産「三保松原」の夕景富士散策＆宿チェックイン</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                三保松原へ足を伸ばし、羽衣の松と波打ち際から茜色に染まる夕暮れの富士山を鑑賞。その後、日本平ホテルや静岡市内の天然温泉宿へチェックイン。最上階大浴場や露天風呂で冷えた体をじっくり温めます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 19:00】「青葉おでん街」で熱々静岡おでんと地酒ナイト</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                夜は静岡駅近くのレトロな赤提灯が灯る「青葉おでん街」または「青葉横丁」へ。黒はんぺんや牛すじを煮込んだ真っ黒な出汁にだし粉と青海苔をたっぷりかけた静岡おでんを頬張り、静岡の銘酒「磯自慢」の熱燗で温まる大人の夜を過ごします。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 10:00】由比港で旬の桜えびかき揚げ賞味＆駿府城公園散策</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                2日目は東海道本線で由比へ。冬漁で獲れた新鮮な桜えびをサクサクに揚げたかき揚げ丼を堪能。静岡駅へ戻り徳川家康公の晩年の居城「駿府城公園」を散策し、駅ビルでお茶や黒はんぺんをお土産に購入して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Experience Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Travel Strategy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の静岡・清水完全攻略：富士山鑑賞・初詣・港グルメの極意
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Mountain className="w-5 h-5 text-teal-500" />
                日本平夢テラスでの富士山撮影ベストアングル
              </h3>
              <p className="leading-relaxed">
                夢テラスの3階展望回廊からは、駿河湾越しに富士山山頂まで遮るもののない大パノラマが広がります。午前8時〜10時は太陽光が富士山の前面を綺麗に照らすため、純白の雪肌がくっきりと写る絶好の撮影タイム。夕暮れ時は茜色に染まる紅富士と湾内の漁火が幻想的です。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-500" />
                国宝・久能山東照宮の新春初詣とロープウェイ
              </h3>
              <p className="leading-relaxed">
                日本平山頂からロープウェイでアクセスすれば、深い渓谷を渡りながら空中散歩を楽しめます。東照宮境内では家康公の神廟や極彩色の本殿へ参拝。元旦〜三が日は初詣で賑わいますが、午前9時前の早い便を利用することで、混雑を避けて厳かな空気の中で祈りを捧げることができます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-500" />
                清水港河岸の市での冬マグロ食べ比べ
              </h3>
              <p className="leading-relaxed">
                清水港は日本一の冷凍マグロ水揚げ拠点。「河岸の市」のまぐろ館には専門店が並び、本マグロの大トロ・中トロ・赤身が贅沢に乗った海鮮丼を堪能できます。冬は脂の甘みが際立ち、一口ごとに濃厚な旨味が広がります。週末の昼時は混み合うため、11時前の早め訪問がおすすめです。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                青葉おでん街の静岡おでんと地酒の夜
              </h3>
              <p className="leading-relaxed">
                夜は静岡駅近くの「青葉横丁」「青葉おでん街」へ。提灯が連なるレトロな長屋に小さなおでん屋が並び、黒はんぺんや牛すじを煮込んだ真っ黒な出汁の香りが漂います。出汁粉と青海苔を振りかけて頬張り、静岡の地酒「磯自慢」や「初亀」の熱燗を合わせる時間は冬旅の醍醐味です。
              </p>
            </div>
          </div>
        </section>

        {/* Climate and Access */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の静岡・清水：気候・服装・移動のアドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-500" />
                温暖な気候と山頂の風対策
              </h4>
              <p>
                静岡市内は冬でも晴天が多く温暖ですが、日本平山頂や久能山東照宮は海からの強い風が吹き付けます。脱ぎ着しやすい防風コートやマフラー、手袋を持参し、体温調節を行いましょう。
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-indigo-500" />
                新幹線と路線バス・レンタカーの使い分け
              </h4>
              <p>
                静岡駅へは東海道新幹線ひかり号で東京から約1時間。駅からは日本平山頂直行バスが運行しています。三保松原や由比港まで足を伸ばす場合は、駅前でレンタカーを借りるのも効率的です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ & Local Insights</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の静岡・日本平・清水観光・グルメ よくある質問
            </h2>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <div key={index} className="pt-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-teal-600 font-black">Q{index + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク関連特集 */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            合わせて読みたい冬の厳選温泉・初詣特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-teal-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【静岡・三島沼津】三嶋大社新春初詣＆富士山スカイウォーク名宿</span>
              <span className="text-xs text-slate-500">駿河湾深海魚タカアシガニと沼津港寒魚、富士山展望温泉</span>
            </Link>
            <Link 
              href="/winter-shizuoka-yaizu-onsen-fuji-view-minami-maguro-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-teal-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【静岡・焼津温泉】駿河湾越し富士山絶景＆南まぐろ尽くし名宿</span>
              <span className="text-xs text-slate-500">高濃度塩化物泉の極上美肌湯と本場ミナミマグロの贅</span>
            </Link>
            <Link 
              href="/winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-teal-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【富士宮】富士山本宮浅間大社新春初詣＆湧水グルメ名宿</span>
              <span className="text-xs text-slate-500">富士山総本宮での開運参拝と富士宮やきそば・厳選和牛</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-teal-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
