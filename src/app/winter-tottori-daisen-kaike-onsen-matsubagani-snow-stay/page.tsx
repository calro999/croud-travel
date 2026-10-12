import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Mountain, Waves, ShieldCheck, Snowflake, Footprints, Coffee, Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月鳥取：冬旬の松葉ガニ！名宿5選',
  description: '中国地方最高峰・伯耆大山が白銀に輝く11〜1月。ブナの原生林を巡るスノーシューや大神山神社奥宮への雪の初詣。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '伯耆大山 冬 観光, 皆生温泉 ホテル, 皆生温泉 旅館, 松葉ガニ 皆生温泉, 大神山神社 初詣, 大山 スノーシュー, 皆生游月, 華水亭, 鳥取和牛 オレイン55, 12月 1月 鳥取 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay/"
  },
  openGraph: {
    title: '11・12・1月鳥取：冬旬の松葉ガニ！名宿5選',
    description: '中国地方最高峰・伯耆大山が白銀に輝く11〜1月。ブナの原生林を巡るスノーシューや大神山神社奥宮への雪の初詣。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg",
      width: 1200,
      height: 630,
      alt: '冬の伯耆大山の白銀の嶺と皆生温泉の日本海波打ち際'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月鳥取：伯耆大山＆皆生温泉！白銀の「伯耆富士」絶景と大神山神社初詣・日本海の塩湯露天＆冬旬の松葉ガニ名宿5選",
    description: "中国地方最高峰・伯耆大山が白銀に輝く11〜1月。ブナの原生林を巡るスノーシューや大神山神社奥宮への雪の初詣、そして日本海の海中から湧く美肌の「塩湯」皆生温泉。境港直送のブランドタグ付き松葉ガニのフルコースや鳥取和牛オレイン55、大山どりの極上グルメを堪能できる厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg"]
  }
};

export default function TottoriDaisenKaikeWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "皆生游月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg",
              rating: 4.74,
              reviews: 1640,
              price: "¥17,600〜",
              access: "お車で米子自動車道米子ICより車10分。JR米子駅より公共バス・タクシー利用で15分、米子空港よりタクシー利用で20分。",
              special: "絶景インフィニティ天空露天風呂が大人気！全室《温泉》露天風呂付",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168732%2F168732.html",
              story: "日本海を一望する海岸線に凛と佇み、全室にテラス付きの源泉露天風呂を備えたラグジュアリー旅館「皆生游月（かいけ ゆうげつ）」。冬の凛とした空気の中、客室バルコニーの信楽焼湯船に身を沈めれば、日本海の白い波頭と水平線が溶け合うダイナミックな冬の海原が目の前に広がります。宿の象徴である7階最上階の「インフィニティ天空露天風呂」は、海抜約30メートルの高さから見下ろす海と空が一体となり、まるで海に浮かんでいるかのような圧倒的な浮遊感を味わえる名湯。冬期は境港から直接仕入れる獲れたての活松葉ガニを贅沢に使った特選会席が提供され、炭火で香ばしく焼き上げる焼きガニや甘みたっぷりのカニ刺し、濃厚な甲羅味噌まで心ゆくまで堪能できます。洗練されたモダンな和のデザインと、細やかなコンシェルジュのおもてなしが特別な冬の休日を演出します。",
              roomTip: "オーシャンビュー露天風呂付和洋室（高層階）。波の音を間近に聞きながら、冬の澄んだ星空と朝焼けの日本海を独り占めできる特等席。シモンズ社製ベッドで極上の睡眠。",
              gourmetTip: "「活松葉ガニ極み会席」。境港直送の身がぎっしり詰まったタグ付き松葉ガニを丸ごと味わい、〆のカニ雑炊まで至福の味わい。地酒ペアリングもおすすめ。",
              highlights: [
                "全室テラス付き露天風呂・最上階インフィニティ天空露天からの冬の日本海一望",
                "境港直送の特大活松葉ガニ会席・焼きガニと濃厚甲羅味噌の極み",
                "モダン和の上質空間・カップルや記念日ステイに選ばれ続ける最高峰"
              ]
            },
            {
              id: 2,
              name: "皆生温泉　皆生つるや　四季を奏でるさらさの宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12537/12537.jpg",
              rating: 4.44,
              reviews: 1185,
              price: "¥7,260〜",
              access: "ICより431号直進15分、空港から車、タクシー20分。米子駅から車で15分、バス25分。勝田神社まで車15分",
              special: "大山と日本海を遠望できる東館、庭園を眺める風情ある南館など多彩な客室を有する、料理自慢の温泉宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12537%2F12537.html",
              story: "創業昭和の歴史を受け継ぎ、数寄屋造りの格調高い日本の美を今に伝える名門料理旅館「皆生つるや 四季を奏でるさらさの宿」。館内に一歩足を踏み入れると、静かな滝が流れる日本庭園と、季節の野花が飾られた落ち着きある和の空間が旅人を包み込みます。自慢の大浴場には、皆生温泉の源泉が豊富に注がれ、海由来の塩化物泉が体の芯まで熱を届けてポカポカ感が長く持続します。冬の料理は料理長が腕を振るう本格会席で、冬の日本海で獲れる脂の乗った寒ブリ、幻のモサエビ、そして鳥取和牛のすき焼きや松葉ガニの小鍋など、山陰の旬の恵みが器の上に美しく咲き誇ります。きめ細やかな仲居さんの温かなもてなしに心ほどける、大人のための湯宿です。",
              roomTip: "庭園を望む数寄屋風次の間付き客室。職人の匠の技が息づく格天井や障子の陰影が心地よく、静謐なひとときを過ごせます。純和風の落ち着きが旅の疲れを癒やします。",
              gourmetTip: "「山陰冬の味覚会席」。甘みが強いモサエビの造りと鳥取和牛の陶板焼き、冬の旬魚の煮付けなど素材の持ち味を引き出した絶品揃い。",
              highlights: [
                "創業昭和の数寄屋造り・滝流れる風情ある日本庭園と自家源泉の温もり",
                "幻のモサエビと鳥取和牛すき焼き・細やかなおもてなしの格式",
                "静寂を愛する大人の隠れ家・保温効果抜群の美肌塩化物泉"
              ]
            },
            {
              id: 3,
              name: "皆生温泉　華水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038.jpg",
              rating: 4.59,
              reviews: 949,
              price: "¥8,800〜",
              access: "ＪＲ米子駅より車で１５分、米子空港より車で２０分、米子自動車道米子ＩＣより車で１０分",
              special: "お食事処リニューアルオープン♪日本海の眺望と季節の会席が愉しめる自家源泉の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2038%2F2038.html",
              story: "美保湾の雄大なパノラマを目前に望み、皆生温泉随一の広大な敷地と風格を誇る「皆生温泉 華水亭（かすいてい）」。宿の自家源泉「宝生の泉」から湧き出る湯は、ミネラル豊富で保温・保湿効果に優れた極上の塩化物泉。冬の冷たい海風を感じながら浸かる波打ち際の露天風呂は、日頃の喧騒を忘れさせてくれる贅沢な癒やしの時間です。夕食には、冬の山陰の主役である松葉ガニをふんだんに盛り込んだ贅沢な会席料理を用意。茹でたてのホクホクした身の甘み、炭火で香ばしく炙った焼きガニの香気、そして濃厚なカニ味噌を地酒「千代むすび」とともに味わう瞬間はまさに至福。大山の雪景色ドライブと組み合わせた冬の温泉旅に最適の格式ある宿です。",
              roomTip: "海側スーペリア客室。ワイドな窓ガラス越しに美保湾の波打ち際と弓ヶ浜の弧を描く海岸線が一望でき、冬の朝日の美しさは圧巻。贅沢な広さでゆったり寛げます。",
              gourmetTip: "「松葉ガニづくし会席」。一杯まるごとの姿茹で松葉ガニに加え、鳥取県産黒毛和牛のフィレステーキも選べる豪華な冬の饗宴。",
              highlights: [
                "自家源泉「宝生の泉」・波打ち際の絶景露天風呂と最高級松葉ガニづくし会席",
                "美保湾パノラマ・大山ドライブ拠点に最適な弓ヶ浜海岸沿いの特等席",
                "千代むすびなど山陰の銘酒地酒ペアリング・ゆったり寛ぐ贅沢な客室"
              ]
            },
            {
              id: 4,
              name: "皆生温泉　湯喜望　白扇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13895/13895.jpg",
              rating: 4.28,
              reviews: 1947,
              price: "¥6,050〜",
              access: "米子自動車道『米子IC』より15分／岡山駅より特急やくもで約2時間『米子駅』からバスで15分／バス停より約500ｍ",
              special: "【絶景オーシャンビュー】皆生の老舗旅館で心安らぐひとときをお過ごしください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13895%2F13895.html",
              story: "「日本の渚百選」に選ばれた弓ヶ浜の白砂青松ビーチが目の前に広がる全室海側展望の宿「皆生温泉 湯喜望 白扇（ゆきぼう はくせん）。」。全館畳敷きの温かみのある館内は、素足で歩く心地よさがあり、冬でも足元から安らぎを感じられます。すべての客室に展望ジャグジーや露天風呂が備え付けられており、窓の外に広がる冬の日本海の荒波と白砂のコントラストを眺めながらプライベートな湯浴みが可能です。料理は地産地消にこだわり、境港で揚がる旬の白身魚やベニズワイガニ、松葉ガニ、そして鳥取県産の大山どりや特産野菜を活かした創作和食会席。海と一体になったような開放感と家庭的な温もりが心地よく響く隠れ家的な人気宿です。",
              roomTip: "海側展望風呂付き和室。檜や信楽焼の湯船から冬の日本海を見渡し、潮騒をBGMに贅沢な読書や湯浴みを楽しめます。畳敷きで足元が冷えません。",
              gourmetTip: "「境港水揚げ旬魚と紅ズワイガニ会席」。手頃な価格帯ながら本場のカニの旨味をしっかり堪能できる、満足度の高いお料理コース。",
              highlights: [
                "全館素足で歩ける畳敷き・全室展望風呂付き＆境港直送の新鮮魚介",
                "日本の渚百選の絶景・家庭的な温もりと手頃で贅沢なカニ料理コース",
                "畳の香りに包まれる落ち着き・朝夕お部屋食または個室風ダイニング"
              ]
            },
            {
              id: 5,
              name: "皆生温泉　皆生グランドホテル天水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2039/2039.jpg",
              rating: 3.99,
              reviews: 1123,
              price: "¥6,050〜",
              access: "ＪＲ米子駅より車で１５分、米子空港より車で２０分、米子自動車道米子ＩＣより車で１０分",
              special: "7月18日レストランリニューアルオープン♪鳥取砂丘・出雲大社へ好アクセス♪山陰周遊の拠点に♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2039%2F2039.html",
              story: "皆生海岸の突端に位置し、海との距離が最も近い圧倒的なロケーションを誇る「皆生温泉 皆生グランドホテル天水（てんすい）。」。潮風を肌で感じる露天風呂「潮風」は、まさに波打ち際すれすれに設けられ、冬の日本海のダイナミックな波しぶきと潮の香りに包まれる唯一無二の入浴体験が叶います。自家源泉の塩化物泉は肌をヴェールのように包み込み、湯上がり後も温かさが途切れません。館内には広々としたラウンジや温水プール、エステサロンなど充実したパブリックスペースが揃い、三世代の家族旅行からカップルまで快適に滞在できます。夕食ビュッフェや会席では、山陰の旬の幸やカニ料理、鳥取牛のローストが並び、活気あふれる冬の旅を盛り上げます。",
              roomTip: "海側スタンダード和洋室。水平線から昇る朝日や、夜の沖合に点々と浮かぶ漁火の幻想的な光を眺めながらゆったり寛げます。ベッドと畳が調和した快適空間。",
              gourmetTip: "「冬の山陰味めぐり会席」。熱々のカニすき鍋と鳥取牛の陶板焼きをダブルで味わえる、ボリュームと旨味が自慢のプラン。",
              highlights: [
                "波打ち際すれすれの露天風呂「潮風」・自家源泉掛け流しと充実のパブリック施設",
                "朝日と漁火のパノラマ・三世代ファミリーからカップルまで大満足",
                "大山の雪山スキーや神社初詣と組み合わせたアクティブな冬温泉旅"
              ]
            }
  ];

  const faqData = [
  {
    "q": "冬の大山・皆生温泉観光のベストシーズンと道路の雪道対策は？",
    "a": "11月上旬から大山山頂付近で初冠雪が観測され、12月中旬から1月にかけてはスキー場やスノーシュートレッキングの最盛期を迎えます。大山山麓や神社周辺を車で訪れる場合は、冬用スタッドレスタイヤの装着またはタイヤチェーンの携行が必須です。一方、海岸沿いの皆生温泉街は平野部のため大山山頂に比べて積雪量は少なめですが、日本海側特有の冬の寒風と時折の吹雪・路面凍結があるため、冬用装備での運転を強く推奨します。"
  },
  {
    "q": "大山寺や大神山神社奥宮への雪の初詣の見どころと参拝時の注意点は？",
    "a": "大神山神社奥宮へと続く約700メートルの参道は、自然石の石畳としては日本最長を誇り、冬は両脇のブナ原生林や杉木立に純白の雪が積もり息を呑むほど神聖な雰囲気に包まれます。本殿は日本最大級の壮大な権現造りで、冬の初詣スポットとして中国地方随一の人気を誇ります。参道は雪や凍結で滑りやすくなるため、スノーブーツや防滑性の高い靴、防水手袋、ダウンジャケットなど万全の防寒装備で訪れてください。"
  },
  {
    "q": "冬の皆生温泉で味わうべき「松葉ガニ」と「鳥取和牛」の特徴は？",
    "a": "11月上旬に漁が解禁される「松葉ガニ」は山陰の冬の味覚の王様です。皆生温泉に隣接する境港は全国屈指の水揚げ量を誇り、身の繊維が細かく甘みたっぷりの脚肉、濃厚で香ばしい甲羅の蟹味噌は格別です。また、鳥取県が誇るブランド黒毛和牛「鳥取和牛オレイン55」は、オリーブオイルの主成分であるオレイン酸を55%以上含み、口に入れた瞬間にとろける極上の脂の甘みが特徴で、すき焼きやステーキで至福の美味を堪能できます。"
  },
  {
    "q": "皆生温泉の泉質や効能、歴史について教えてください。",
    "a": "皆生温泉は1900年（明治33年）、地元の漁師が海中に湧き出す泡を発見したことから始まった「海から湧く温泉」です。泉質は「ナトリウム・カルシウム―塩化物泉（等張性・中性・高温泉）。」で、海水に近い塩分を含んでいるため、入浴すると皮膚に塩の被膜が形成されて熱の放散を防ぎ、湯冷めしにくいのが最大の特徴です。また「美肌の湯」としても知られ、冬の冷えた体と乾燥した肌をしっとり健やかに整えてくれます。"
  },
  {
    "q": "米子駅や米子鬼太郎空港からのアクセス方法は？",
    "a": "JR米子駅からは路線バス（日ノ丸バス）の「皆生温泉行き」が約20〜30分間隔で運行しており、所要時間は約20分と非常に便利です。飛行機をご利用の場合、米子鬼太郎空港から皆生温泉までは直行連絡バスで約30分、またはタクシーで約25分です。大山方面へ向かう場合は、米子駅前または皆生温泉から大山寺行きの路線バスや冬季観光ループバスが運行されています。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay"
        },
        "headline": "【11・12・1月鳥取】伯耆大山＆皆生温泉！白銀の「伯耆富士」絶景と大神山神社初詣・日本海の塩湯露天＆冬旬の松葉ガニ名宿5選",
        "description": "中国地方最高峰・伯耆大山が白銀に輝く11〜1月。ブナの原生林を巡るスノーシューや大神山神社奥宮への雪の初詣、そして日本海の海中から湧く美肌の「塩湯」皆生温泉。境港直送のブランドタグ付き松葉ガニのフルコースや鳥取和牛オレイン55、大山どりの極上グルメを堪能できる厳選名宿5選を徹底解説します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
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
            "name": "伯耆大山＆皆生温泉冬特集",
            "item": "https://croud-travel.pages.dev/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay"
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
      <header className="relative bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>11月・12月・1月冬の中国地方旅特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">伯耆大山＆皆生温泉！<br className="hidden sm:inline" /> 白銀の「伯耆富士」絶景と大神山神社初詣・日本海の塩湯露天＆冬旬の松葉ガニ名宿5選</h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            中国地方最高峰（標高1,729m）を誇る霊峰・伯耆大山。厳冬期には純白の雪衣を纏い、別名「伯耆富士」と讃えられる荘厳な姿を現します。ブナの原生林を歩くスノートレッキングや、千三百年の歴史を誇る大神山神社奥宮への雪の初詣。そして麓の日本海から湧き出す名湯「皆生温泉」は、海由来のミネラル豊かな塩湯で体の芯までポカポカに。境港直送のブランド松葉ガニと鳥取和牛オレイン55を贅沢に味わう、冬の極上リトリートへご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>旬期：11月〜2月（松葉ガニ解禁）</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>伯耆大山の白銀パノラマ</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>皆生温泉海中湧出の塩湯</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>境港松葉ガニ＆鳥取和牛</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Overview</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-cyan-500 shrink-0" />
              白銀の秀峰と荒波寄せる日本海！海と山が隣り合う鳥取の冬の醍醐味
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              日本海に突き出た弓ヶ浜半島から仰ぎ見る冬の「大山（だいせん）」は、西側から見ると端正な円錐形を描くことから「伯耆富士（ほうきふじ）」と呼ばれ、北側・南側からは荒々しい断崖絶壁を見せる劇的な名峰です。西日本最大級のブナの原生林が純白の雪で覆われる12月から1月にかけては、スノーシューを履いて森の静寂に身を委ねるガイドツアーや、大山ホワイトリゾートでのパウダースノースキーが国内外から熱い注目を集めます。
            </p>
            <p>
              山麓に佇む「大山寺」と「大神山神社奥宮」は、山岳信仰の聖地として1300年以上の歴史を刻むパワースポット。雪に覆われた日本一長い自然石の参道を歩き、荘厳な権現造りの社殿で手を合わせる冬の初詣は、清浄な空気が魂を洗い流してくれるような神秘的な体験となります。
            </p>
            <p>
              そして山から車でわずか30分、弓ヶ浜の海岸沿いに広がるのが「皆生温泉（かいけおんせん）」です。1900年に浅瀬の海中から湧き出す湯が発見された珍しい生い立ちを持ち、ナトリウムやカルシウムを多量に含む高張性の塩化物泉は「温まりの湯」「美肌の湯」として知られます。冬の日本海の荒波が砕け散る白砂青松の景色を湯船から眺め、湯上がりには境港で水揚げされたばかりのズワイガニの王様「松葉ガニ」に舌鼓を打つ。海と山が劇的に近接する鳥取・米子ならではの極上の冬旅がここにあります。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Selected Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-cyan-500 shrink-0" />
              伯耆大山＆皆生温泉で泊まりたい冬の厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。海辺の絶景露天風呂、極上松葉ガニ会席、心温まるもてなしを誇る名宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <article key={h.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col p-5 sm:p-7 md:p-8 gap-5">
                  <div className="w-full space-y-3">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold">
                        厳選 {h.id}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1 text-cyan-600 font-bold text-sm">
                        <Star className="w-4 h-4 fill-cyan-500 text-cyan-500" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                      </div>
                      <div className="text-slate-600 font-medium">
                        目安: <span className="text-slate-900 font-bold text-sm">{h.price}</span>/人
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-cyan-600 transition-colors">
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
                      <div className="text-xs text-slate-700 bg-cyan-50/50 p-2.5 rounded-lg border border-cyan-100/60">
                        <strong className="text-cyan-800 block mb-0.5">客室の魅力:</strong>
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
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
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all gap-1.5"
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

        {/* Section 3: 冬の美食＆海の幸 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gastronomy</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-cyan-500 shrink-0" />
              冬の鳥取を味わう三大美味！境港の松葉ガニ・鳥取和牛オレイン55・大山どり
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                境港水揚げ「松葉ガニ」フルコース
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                日本海で育まれたズワイガニの雄「松葉ガニ」。境港は水揚げ日本一の規模を誇り、鮮度抜群の活ガニが届きます。繊細な甘みのカニ刺し、香ばしい焼きガニ、濃厚な旨味が凝縮した茹でガニ、そして甲羅味噌の甲羅焼きまで、冬の贅沢の頂点を堪能できます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                とろける脂の甘み「鳥取和牛オレイン55」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                江戸時代からの歴史を持つ鳥取の黒毛和牛。オリーブオイルと同じ良質なオレイン酸を55%以上含む個体のみが認定される「オレイン55」は、人肌の温度でサッと溶け、口いっぱいに上品な香りと甘みが広がります。すき焼きやステーキで至福の余韻を味わえます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                大山山麓が育む「大山どり」と地酒
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                名峰・大山の清らかな伏流水と澄んだ空気の中で育まれた銘柄鶏「大山どり」。脂乗りが良くジューシーで、旨味成分が豊富な肉質は冬の鍋料理や炭火焼きに最適です。千代むすびや大山などの山陰の辛口銘酒とともに味わえば、体の芯から温まります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 冬の見どころ＆アクティビティ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Sightseeing & Snow Activities</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-cyan-500 shrink-0" />
              白銀の大自然を五感で体感！冬の大山＆米子周辺の必訪スポット
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="border-l-4 border-cyan-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                1. 大山ホワイトリゾート＆ブナ原生林のスノーシュートレッキング
              </h3>
              <p className="text-xs sm:text-sm">
                海の見えるスキー場として全国的な知名度を誇る「大山ホワイトリゾート」。ゲレンデ上部からは、眼下に青く輝く日本海と白銀の弓ヶ浜半島を望みながらの爽快なクルージングが楽しめます。またスキーをしない方でも、西日本随一の広さを誇るブナの原生林を巡るスノーシューツアーが大人気。雪の上に残るウサギやキツネの足跡、静寂の中で枝から落ちる雪の音など、冬にしか出会えない自然の息吹に触れられます。
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                2. 日本最大級のフラワーパーク「とっとり花回廊」の冬イルミネーション
              </h3>
              <p className="text-xs sm:text-sm">
                秀峰大山を一望する広大な園内が、約100万球の幻想的な光で包まれる山陰屈指の冬の風物詩「フラワーイルミネーション（11月中旬〜1月上旬開催）。」。直径50mの巨大なガラス温室「フラワードーム」や日本屈指の展望回廊が光のアートに彩られ、冬の夜空に大輪の花を咲かせる花火イベントも開催されます。皆生温泉からも車で約30分とアクセス良好で、夕食前後のナイトトリップに最適です。
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                3. 大山寺参道商店街のあったかグルメ＆大神山神社奥宮の雪景色
              </h3>
              <p className="text-xs sm:text-sm">
                参拝前の散策に楽しい大山寺参道商店街では、大山山麓の清らかな水で打った名物「大山そば」や、ホクホクの大山おこわ、大山豚を使った温かい豚汁が冷えた体を温めてくれます。参道から大神山神社奥宮へと続く自然石の石畳は、冬には両脇の巨木に雪の花が咲き、モノトーンの幽玄な美しさが際立ちます。雪煙が舞う静寂の中での参拝は、心洗われる格別の思い出になります。
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                4. 皆生海浜公園の潮風足湯＆冬の日本海に沈む夕日
              </h3>
              <p className="text-xs sm:text-sm">
                皆生温泉街の海岸沿いに整備された「皆生海浜公園」には、誰でも無料で利用できる源泉足湯「潮風の足湯」が設置されています。足元からポカポカ温まりながら、冬の日本海に押し寄せる白い怒濤と、夕暮れ時に茜色から群青色へと刻一刻と変化する空のグラデーションを眺める時間は、温泉街散策の最高のハイライトです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 雪道運転＆防寒ガイド */}
        <section className="bg-cyan-50/60 rounded-2xl p-6 sm:p-10 border border-cyan-100 space-y-6">
          <div className="border-b border-cyan-200/60 pb-4">
            <span className="text-cyan-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Travel Tips</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-cyan-600 shrink-0" />
              冬の大山・皆生温泉旅行を快適に楽しむ防寒装備＆雪道運転の心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="bg-white p-5 rounded-xl border border-cyan-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-cyan-600" />
                服装と足元の防寒対策
              </h3>
              <p>
                大山山麓は平野部より気温が5〜8度低く、厳冬期の体感温度は氷点下になります。防水・防風仕様の厚手ダウンジャケット、ヒートテック等の機能性インナー、フリースなどの重ね着（レイヤリング）が基本です。また、大山寺参道や神社参拝は雪や凍結で滑りやすいため、底に溝の深いスノーブーツや滑り止め（簡易アイゼン）の着用が欠かせません。耳当て付きニット帽や防水手袋もお忘れなく。
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-cyan-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-600" />
                レンタカー選びと雪道運転の注意点
              </h3>
              <p>
                米子駅や米子空港でレンタカーを借りる際は、必ず「4WD（四輪駆動）＋スタッドレスタイヤ」指定で予約してください。米子道や大山環状道路ではチェーン規制や冬用タイヤ規制が敷かれる日があります。急発進・急ブレーキ・急ハンドルを避け、車間距離を通常の2〜3倍確保するのが鉄則です。大山寺行きの冬季シャトルバス「大山るーぷバス」を活用するのも安心でおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-cyan-400 shrink-0" />
              伯耆大山雪景色と皆生温泉松葉ガニを満喫する1泊2日モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-lg">
                <span className="bg-cyan-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>白銀の霊峰大山・大神山神社奥宮参拝と皆生温泉の塩湯</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:00</strong> 米子駅または米子鬼太郎空港からレンタカーまたはバスで大山へ。大山寺参道で名物の大山そばランチ。
                </p>
                <p>
                  <strong>12:30</strong> 大山寺・大神山神社奥宮へ。雪に覆われた自然石の参道を歩き、荘厳な社殿で新年の厄除けと家内安全を祈願。
                </p>
                <p>
                  <strong>14:30</strong> 「大山まきばみるくの里」周辺から白銀に輝く大山南壁のパノラマを遠望し、濃厚な特製ソフトクリームを堪能。
                </p>
                <p>
                  <strong>16:00</strong> 日本海の海岸沿いに位置する皆生温泉の名宿へチェックイン。
                </p>
                <p>
                  <strong>17:00</strong> 海から湧くミネラル豊富な「塩湯」露天風呂に浸かり、冬の日本海に沈む夕日と荒波を眺める。
                </p>
                <p>
                  <strong>18:30</strong> 境港直送のブランドタグ付き松葉ガニフルコースや鳥取和牛オレイン55に舌鼓。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-lg">
                <span className="bg-cyan-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>弓ヶ浜の朝焼け・境港水木しげるロードとお魚市場買い出し</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>07:00</strong> 宿のテラスや露天風呂から、日本海の水平線から昇る神々しい朝焼けを拝む。
                </p>
                <p>
                  <strong>08:00</strong> 宍道湖のしじみ汁や日本海の干物を取り入れた山陰の和朝食をゆっくり楽しむ。
                </p>
                <p>
                  <strong>09:30</strong> 車で約25分の境港へ移動。「水木しげるロード」を散策し、ブロンズ像や妖怪神社を巡る。
                </p>
                <p>
                  <strong>11:30</strong> 「境港水産物直売センター」へ。茹でたての松葉ガニや紅ズワイガニ、干物などのお土産を購入してクール便発送。
                </p>
                <p>
                  <strong>13:00</strong> 境港の海鮮丼専門店で、冬の寒ブリやノドグロ、カニがたっぷりのった海鮮丼のランチ。
                </p>
                <p>
                  <strong>14:30</strong> 米子鬼太郎空港または米子駅へ向かい、帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の大山＆皆生温泉旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！山陰・中国地方の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">三朝温泉冬特集</span>
              <span className="font-bold text-white block">三朝温泉！世界屈指のラジウム泉と冬旬の松葉ガニ名宿</span>
            </Link>

            <Link 
              href="/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">松江・宍道湖冬特集</span>
              <span className="font-bold text-white block">松江しんじ湖温泉！夕日絶景と松葉ガニ・寒シジミ名宿</span>
            </Link>

            <Link 
              href="/winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">出雲大社冬特集</span>
              <span className="font-bold text-white block">出雲大社！神在月・初詣と島根和牛・日本海海の幸名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay" />
</div>
  );
}
