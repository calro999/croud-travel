import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Anchor, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月静岡・下田南伊豆温泉郷の初冬海絶景と極上地金目鯛】水揚げ日本一の金目鯛姿煮＆伊勢海老会席を満喫する絶景宿5選",
  description: "11月から12月にかけて、伊豆半島南端の下田・南伊豆エリアは、水揚げ日本一を誇る名物「下田の地金目鯛」が最も脂を蓄える最高の旬を迎えます。初冬でも太平洋の黒潮に洗われ温暖な気候が広がり、水平線が茜色に染まる夕暮れや満天の星を望む海辺の絶景露天風呂は格別の心地よさ。12月中旬には爪木崎の水仙まつりが開幕し、エメラルドグリーンの海と白い水仙のコントラストが旅人を魅了します。肉厚でとろける金目鯛の姿煮やしゃぶしゃぶ、伊勢海老、下田温泉・奥下田美肌源泉を心ゆくまで堪能する厳選名宿5選を徹底解説します。",
  keywords: '下田温泉 宿泊, 南伊豆 温泉 ホテル, 下田 金目鯛 姿煮, 下田温泉 露天風呂 絶景, 爪木崎 水仙 12月, 下田東急ホテル, 下田大和館, 黒船ホテル, ホテル山田屋, 観音温泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay'
  },
  openGraph: {
    title: "【11・12月静岡・下田南伊豆温泉郷の初冬海絶景と極上地金目鯛】水揚げ日本一の金目鯛姿煮＆伊勢海老会席を満喫する絶景宿5選",
    description: "11月から12月にかけて、伊豆半島南端の下田・南伊豆エリアは、水揚げ日本一を誇る名物「下田の地金目鯛」が最も脂を蓄える最高の旬を迎えます。初冬でも太平洋の黒潮に洗われ温暖な気候が広がり、水平線が茜色に染まる夕暮れや満天の星を望む海辺の絶景露天風呂は格別の心地よさ。12月中旬には爪木崎の水仙まつりが開幕し、エメラルドグリーンの海と白い水仙のコントラストが旅人を魅了します。肉厚でとろける金目鯛の姿煮やしゃぶしゃぶ、伊勢海老、下田温泉・奥下田美肌源泉を心ゆくまで堪能する厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の下田南伊豆の青い海と絶景露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "11月・12月の下田・南伊豆エリアで「金目鯛」が旬と言われる理由は？",
    "a": "下田港は金目鯛の水揚げ量が日本一を誇り、特に初冬から真冬にかけての11月〜2月は海水温の低下とともに金目鯛がたっぷりと脂を蓄え、身が最も引き締まって甘みが増す最高の旬を迎えます。特に日帰り漁で一本釣りされる近海の「地金目鯛（ジキンメ）」は、鮮度抜群で身がふっくらと柔らかく、口の中でとろけるような上質な脂が特徴です。甘辛い秘伝のタレでふっくら煮付けた「姿煮」や、熱い特製出汁にサッとくぐらせる「金目鯛しゃぶしゃぶ」、皮目を香ばしく炙った「炙り刺身」など、冬ならではの極上の味わいを楽しめます。"
  },
  {
    "q": "11月・12月の下田・南伊豆の気候や気温、おすすめの服装は？",
    "a": "伊豆半島の最南端に位置する下田・南伊豆は、南側を流れる黒潮の影響を強く受けるため、本州の中でも非常に温暖な海洋性気候です。11月の平均最高気温は17〜19℃、最低気温は10〜12℃前後で、日中は日差しがあれば薄手のジャケットやセーターで心地よく過ごせます。12月に入っても最高気温は13〜15℃前後あり、都心や北関東に比べると格段に暖かく過ごしやすいのが魅力です。ただし、海沿いは冬の北東風や西風が強く吹く日があるため、風を通さないウィンドブレーカーや防風コート、ストールを用意しておくと朝晩の露天風呂や海岸散策も安心です。"
  },
  {
    "q": "初冬の南伊豆・下田で見逃せない観光名所やイベントは？",
    "a": "一番の見どころは、須崎半島の先端に位置する「爪木崎（つめきざき）」の水仙です。例年12月中旬から1月にかけて約300万本もの野生の野水仙が咲き誇り、「水仙まつり」が開催されます。紺碧のエメラルドブルーの太平洋と白亜の爪木崎灯台、そして甘い香りを放つ白い水仙のコントラストは息を呑む絶景です。また、ペリー提督が歩いた石畳と柳並木、なまこ壁の町並みが残る「ペリーロード」の散策や、寝姿山ロープウェイからの下田港一望パノラマ、南伊豆の石廊崎（いろうざき）オーシャンパークの断崖絶景も初冬の澄んだ大気の中で格別の美しさを誇ります。"
  },
  {
    "q": "下田温泉や奥下田温泉の泉質と美肌効果の特徴は？",
    "a": "下田エリアには、下田市街地周辺の「下田温泉」や蓮台寺温泉、そして山間部に湧く「奥下田・観音温泉」など多彩な湯源があります。下田温泉の多くは単純温泉や弱アルカリ性単純泉、ナトリウム-塩化物泉で、無色透明で癖がなく、肌当たりが柔らかいのが特徴です。塩分を含む温泉は入浴後に肌に塩のベールを形成し、冬の乾燥を防いでポカポカ感が長く持続します。また、奥下田の観音温泉はpH9.5という全国屈指の強アルカリ性・超軟水源泉で、石鹸のように肌の角質をやさしく落とし、湯上がり後は絹のように滑らかな肌に導くことから「天然の化粧水」「奇跡の美肌湯」として高く評価されています。"
  },
  {
    "q": "東京方面・名古屋方面から下田へのアクセス方法は？冬期の路面凍結の心配は？",
    "a": "鉄道を利用する場合、東京駅からJR特急「サフィール踊り子」「踊り子」号で乗り換えなしで直通約2時間30分〜2時間45分で伊豆急下田駅に到着します。車の場合、東名高速道路・新東名高速道路から伊豆縦貫自動車道を経由し、天城峠・河津を経由して下田へアクセスできます（沼津ICから約90分〜120分）。下田や南伊豆の沿岸部は冬期でも降雪や路面凍結は極めて稀ですが、車で中伊豆の天城峠（国道414号）を越えるルートを利用する場合は、12月中旬以降の寒波襲来時に峠周辺で積雪や夜間早朝の路面凍結が発生することがあるため、事前に気象・道路情報を確認するか、熱海・伊東沿いの海岸線ルート（国道135号）を利用するのが安心です。"
  }
];

export default function ShizuokaShimodaWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay"
        },
        "headline": "【11・12月静岡・下田南伊豆温泉郷の初冬海絶景と極上地金目鯛】水揚げ日本一の金目鯛姿煮＆伊勢海老会席を満喫する絶景宿5選",
        "description": "11月から12月にかけて、伊豆半島南端の下田・南伊豆エリアは、水揚げ日本一を誇る名物「下田の地金目鯛」が最も脂を蓄える最高の旬を迎えます。初冬でも太平洋の黒潮に洗われ温暖な気候が広がり、水平線が茜色に染まる夕暮れや満天の星を望む海辺の絶景露天風呂は格別の心地よさ。12月中旬には爪木崎の水仙まつりが開幕し、エメラルドグリーンの海と白い水仙のコントラストが旅人を魅了します。肉厚でとろける金目鯛の姿煮やしゃぶしゃぶ、伊勢海老、下田温泉・奥下田美肌源泉を心ゆくまで堪能する厳選名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T13:00:00+09:00",
        "dateModified": "2026-09-28T13:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 伊豆・南国紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay#breadcrumb",
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
            "name": "静岡・下田南伊豆温泉郷 初冬海絶景と地金目鯛の宿",
            "item": "https://croud-travel.com/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay#faq",
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
              name: "下田東急ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4615/4615.jpg",
              rating: 4.46,
              reviews: 1034,
              price: "¥8,266〜",
              access: "伊豆急下田駅より車で６分。（無料シャトルバス定時運行 ）　※カーナビで最短距離（LAWSON左折）の道順は狭いので要注意",
              special: "海を一望！伊豆の南の豊かな自然の恵みを、温泉と食で満喫する格式と伝統の本格的リゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4615%2F4615.html",
              story: "伊豆急下田駅から車で約6分、大浦湾の高台に建つ南国情緒と洗練されたリゾート感が融合した老舗名門ホテル「下田東急ホテル」。正面ロビーや客室のプライベートテラスからは、エメラルドグリーンに輝く大浦海岸と雄大な太平洋、伊豆七島の島影が一望のもとに広がります。館内の温泉大浴場および海風が通り抜ける露天風呂には、弱アルカリ性のやわらかな下田温泉が引き湯され、初冬の澄み渡る潮風を肌に浴びながらの湯浴みは開放感抜群。夕食はフレンチと和食の技法が響き合う贅沢なディナーコース。冬に脂が最も乗り切る下田港水揚げの地金目鯛を中心とした魚介料理、伊豆の旬野菜、厳選牛フィレ肉が鮮やかにテーブルを彩ります。夕暮れ時に海一面が茜色から紫紺へと染まるマジックアワーの眺望は圧巻です。",
              roomTip: "オーシャンビューのバルコニー付きデラックスツイン。朝陽が昇る太平洋の水平線と伊豆諸島の大パノラマを、淹れたての珈琲とともにゆったり眺める優雅な滞在。",
              gourmetTip: "「冬の伊豆美食ディナー」。下田港直送・地金目鯛のブレゼまたはロースト、旬の伊勢海老のポワレ、天城産本わさびと特選牛フィレ肉のグリル。",
              highlights: [
                "大浦湾の高台から太平洋を一望する老舗リゾート＆潮風薫る露天風呂と絶景テラス",
                "フレンチと和食が融合する洗練ディナー＆水揚げ日本一の地金目鯛と伊勢海老",
                "ペリーロードや爪木崎水仙群生地への観光拠点に最適＆上質なホスピタリティ"
              ]
            },
            {
              id: 2,
              name: "下田温泉　下田大和館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8265/8265.jpg",
              rating: 4.53,
              reviews: 1814,
              price: "¥9,900〜",
              access: "車：新東名長泉沼津IC～伊豆縦貫道～R414～下田駅通過後R136を南下約2.6ｋm　電車：伊豆急下田駅(送迎有)",
              special: "すべての客室を全面禁煙とさせていただきます。館内の喫煙所をご利用くださいませ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8265%2F8265.html",
              story: "白砂青松の美しい多々戸浜（たたどはま）海水浴場の目の前、小高い丘の斜面に沿って建てられた全室オーシャンビューの和風リゾート旅館「下田温泉 下田大和館」。どの客室からもエメラルドブルーの海原と打ち寄せる白波を間近に望み、心地よい波音に耳を傾ける非日常のひとときを約束します。最上階に位置する展望露天風呂や、趣の異なる貸切露天風呂「スパ・ヴィラ」からは、遮るもののない180度の大海原を一望。弱アルカリ性単純温泉の湯は肌触りが滑らかで、体の芯から温まります。夕食は名物の炭火ダイニング海または個室ダイニングでいただく海鮮炭火会席。脂の乗り切った下田産金目鯛の丸ごと姿煮、炭火で香ばしく焼き上げる伊勢海老やアワビが贅沢に並びます。",
              roomTip: "露天風呂付き客室「潮彩（しおさい）」または最上階プレミアム客室。客室のウッドデッキに設えられた露天風呂から、多々戸浜の白波と満天の冬星を独占。",
              gourmetTip: "「下田名物・金目鯛の姿煮と伊勢海老炭火焼き会席」。創業以来受け継がれる秘伝の濃厚タレで煮付けた金目鯛は絶品。香ばしい伊勢海老鬼殻焼きとともに舌鼓。",
              highlights: [
                "多々戸浜の白波が眼下に広がる全室オーシャンビュー＆波音に包まれる絶景展望露天",
                "名物炭火焼きダイニングで味わう香ばしい伊勢海老・アワビと秘伝タレの金目鯛姿煮",
                "朝陽に輝くエメラルドグリーンの砂浜を散策＆冬でも穏やかな南伊豆の海辺ステイ"
              ]
            },
            {
              id: 3,
              name: "下田温泉　黒船ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1307/1307.jpg",
              rating: 4.23,
              reviews: 2300,
              price: "¥9,165〜",
              access: "伊豆急線「伊豆急下田駅」から徒歩13分、タクシーで3分。 車で沼津から当館まで伊豆縦貫道で90分。",
              special: "【全室オーシャンビュー】離れや客室露天風呂、プールをご堪能。伊豆・下田温泉の味覚に舌鼓。ペット可！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1307%2F1307.html",
              story: "幕末開国の歴史舞台となった下田港のウォーターフロントに位置し、港を行き交う遊覧船や初冬の穏やかな入江を一望する人気旅館「下田温泉 黒船ホテル」。全室が下田港に面したハーバービューとなっており、歴史ロマンあふれる港町の旅情に包まれます。自慢の大浴場や展望露天風呂からは、初冬の澄んだ空気の下、下田港を染め上げる夕陽や港の夜景を眺めながらの湯浴みが愉しめます。露天風呂付き客室のバリエーションも多彩で、カップルから三世代ファミリーまで幅広い旅のスタイルに対応。夕食は水揚げ日本一の金目鯛を主役にした豪華海鮮会席。金目鯛のしゃぶしゃぶ、姿煮、地魚のお造り盛り合わせなど、伊豆の海の幸が惜しみなく振る舞われます。",
              roomTip: "客室専用露天風呂付き和洋室。下田港の行き交う船や朝霧に霞む入江をプライベートな温泉に浸かりながら眺める、贅沢なプライベートステイ。",
              gourmetTip: "「金目鯛づくし極み会席」。ふっくら炊き上げた金目鯛の姿煮、黄金出汁にくぐらせる金目鯛しゃぶしゃぶ、獲れたて地魚姿造り、静岡そだち和牛の陶板焼き。",
              highlights: [
                "下田港ウォーターフロントの好立地＆全室ハーバービューと露天風呂付き客室の充実",
                "金目鯛しゃぶしゃぶ・姿煮・刺身が並ぶ海鮮づくし＆港を行き交う遊覧船の情景",
                "下田ロープウェイや開国史跡巡りに至便＆ファミリーやグループ旅行にも快適"
              ]
            },
            {
              id: 4,
              name: "下田港を一望する絶景の宿　ホテル山田屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13611/13611.jpg",
              rating: 4.31,
              reviews: 344,
              price: "¥9,900〜",
              access: "小田原・厚木道路石橋ＩＣより約９５km　☆当館最寄りの初詣スポット☆下田八幡神社　お車で５分位",
              special: "全室オーシャンビュー◆下田港を望む絶景露天風呂と貸切風呂＆伊豆の海の幸を満喫する温泉旅",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13611%2F13611.html",
              story: "下田市街地を見下ろす小高い丘の上に佇み、下田港の全景と寝姿山をパノラマで望む美食の隠れ宿「下田港を一望する絶景の宿 ホテル山田屋」。全館数寄屋造りの温もりあふれる館内は、落ち着いた大人の寛ぎに満ちています。宿の最大の魅力は、割烹旅館の伝統を受け継ぐ極上の料理と、下田随一の眺望を誇る展望露天風呂。初冬の澄んだ夜空の下、ライトアップされた下田港の夜景を見下ろしながら入る天然温泉は格別です。料理は料理長が毎朝市場で厳選する下田港直送の「地金目鯛」をはじめ、伊勢海老、サザエ、旬の寒ヒラメなどを一品一品丁寧に仕上げます。金目鯛の旨味を最大限に引き出した濃口醤油の姿煮は、遠方からこれを目当てに訪れるリピーターが後を絶ちません。",
              roomTip: "下田港パノラマビューの数寄屋風和室。障子を開けると眼下に下田港の絶景が広がり、夕暮れから夜にかけての街の灯りを静かに眺めながら過ごせます。",
              gourmetTip: "「料理長特選・下田地金目鯛と伊勢海老会席」。脂乗り抜群の特大金目鯛姿煮、伊勢海老のお造り、金目鯛のアラ汁、天城産山葵でいただく地魚三種盛り。",
              highlights: [
                "下田港の夜景を見下ろす数寄屋風割烹宿＆料理長自慢の秘伝タレ金目鯛姿煮",
                "毎朝市場仕入れの新鮮な魚介会席＆少人数で静かに過ごせる大人の隠れ家空間",
                "下田港を見下ろす展望風呂で朝夕の絶景鑑賞＆リピーター絶賛の心温まるおもてなし"
              ]
            },
            {
              id: 5,
              name: "伊豆奥下田　飲泉・自家源泉かけ流しの秘湯　観音温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/71958/71958.jpg",
              rating: 4.52,
              reviews: 39,
              price: "¥22,150〜",
              access: "伊豆急行線　下田駅よりお車にて２５ 分",
              special: "湯量豊富な自家源泉から湧く源泉かけ流し100％の美肌の湯。奥下田の大自然の中で至福の時をお過し下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F71958%2F71958.html",
              story: "伊豆下田の山懐、豊かな原生林に抱かれた奥下田に湧く奇跡の美肌源泉宿「飲泉・自家源泉かけ流しの秘湯 観音温泉」。地下1,000メートルから自噴する自家源泉は、pH9.5という驚異的な強アルカリ性を誇る超軟水。とろりと美容液のような肌触りで「奇跡の美肌湯」と称され、飲むこともできる名湯として全国から温泉通が集まります。広大な敷地内には本館・ピグマリオン・本館離れなど洗練された客室が点在し、全客室に源泉掛け流しの檜風呂や陶器風呂を完備。大浴場「星名館」の露天風呂では、初冬の静まり返る奥下田の森と満天の星空を眺めながらの極上湯浴みが叶います。夕食は観音温泉の温泉水を使って炊き上げた料理や、伊豆の厳選食材を用いた体に優しい創作会席が心と体を癒やします。",
              roomTip: "客室専用の源泉掛け流し露天風呂付き特別室。pH9.5のフレッシュな美肌湯をいつでも好きな時に注ぎ、誰にも邪魔されない至福の湯治ステイ。",
              gourmetTip: "「観音温泉水仕込みの薬膳創作会席」。超軟水温泉水で引き出した金目鯛のしゃぶしゃぶ、温泉水で炊き上げた伊豆米のご飯、天城軍鶏の滋味あふれる小鍋。",
              highlights: [
                "pH9.5の驚異の強アルカリ美肌源泉＆全室源泉掛け流し風呂と温泉水薬膳会席",
                "飲める奇跡の超軟水温泉＆初冬の澄んだ森と満天の星空に抱かれる奥下田の秘湯",
                "体の内と外からデトックスする温泉療養体験＆都会の喧騒を忘れる静寂の森"
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
          alt="初冬の下田南伊豆の海絶景と露天風呂"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold">
            <Anchor className="w-4 h-4" />
            11月・12月 冬の伊豆美食＆絶景温泉特集｜静岡・下田・南伊豆温泉郷
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬の海絶景と極上地金目鯛<br className="hidden sm:inline" />
            水揚げ日本一の金目鯛姿煮＆伊勢海老会席を満喫する絶景宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            黒潮が運ぶ温暖な潮風とエメラルドグリーンの大海原。脂が最も乗り切る下田の地金目鯛と伊勢海老、水平線を望むオーシャンビュー露天風呂で温まる、冬の伊豆の至福ステイ。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-cyan-400" /> 11月〜12月が地金目鯛の極上旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-cyan-400" /> 太平洋一望の絶景露天＆美肌湯</span>
            <span className="flex items-center gap-1"><Fish className="w-4 h-4 text-cyan-400" /> 秘伝タレ金目鯛姿煮＆伊勢海老</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Warm Coastal Winter & Kinmedai</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                黒潮がもたらす温暖な冬と黄金の味覚｜11月・12月に下田・南伊豆を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本列島に冬の足音が近づく11月から12月。冷たい木枯らしが吹く都心を離れ、南へ下ると広がるのが伊豆半島最南端、下田・南伊豆エリアの別天地です。太平洋を洗う暖流・黒潮の恩恵を受けるこの地は、本州屈指の温暖な気候を誇り、真冬でも日中は15℃前後のポカポカとした小春日和に恵まれる日が多くあります。透き通るようなコバルトブルーの海と白い砂浜、南国情緒漂うフェニックスの並木が、訪れる旅人の心をふわりと解きほぐします。
            </p>
            <p>
              そして何より、初冬の下田を旅する最大の目的は「食の最高峰」にあります。下田港は金目鯛の水揚げ量で日本一を誇る金目鯛の聖地。海水温が下がり始める11月から12月にかけて、深海を回遊する金目鯛は寒さに備えてたっぷりと上質な脂を蓄え、身の締まりと旨味が年間で最高のピークに達します。特に日帰り小型船で一本釣りされる近海の「地金目鯛」は、鮮やかで艶やかな真紅の鱗とふくよかな身、とろけるような脂の甘みが格別。地元で百年以上受け継がれる溜まり醤油と酒、みりんの黄金比で照りよく煮付けた「金目鯛の丸ごと姿煮」は、一口運ぶだけで濃厚なコクと繊細な旨味が口いっぱいに広がります。
            </p>
            <p>
              さらに、秋から冬にかけて解禁を迎えている活伊勢海老や、甘みが凝縮したアワビ、サザエ、脂の乗った寒ヒラメなど、伊豆の豊かな海の幸が一度にテーブルへ集結します。海辺の高台から朝陽や茜色の夕日を望むオーシャンビュー露天風呂に浸かり、美肌の湯で体を温めた後に味わう海鮮フルコースは、まさに冬の贅沢の極み。12月中旬からは須崎半島の爪木崎で300万本もの野生水仙が甘い香りを漂わせながら咲き乱れ、白い花々と青い海のコントラストが初冬の伊豆旅に華やかな彩りを添えてくれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-900 text-sm">
                <Fish className="w-4 h-4 text-cyan-600" />
                水揚げ日本一・極上地金目鯛
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                初冬の海水温低下で脂が乗り切る下田の地金目鯛。濃厚な秘伝タレ姿煮や熱々しゃぶしゃぶで至高の美味を堪能。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-900 text-sm">
                <Waves className="w-4 h-4 text-cyan-600" />
                黒潮オーシャンビュー露天風呂
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                温暖な潮風とエメラルドグリーンの大海原を一望。弱アルカリ性単純泉や奥下田の超軟水美肌湯で体の芯まで温まる。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-900 text-sm">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                爪木崎300万本の初冬水仙
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                12月中旬から開幕する爪木崎の水仙まつり。紺碧の太平洋と甘い香りを放つ純白の野水仙が織りなす南伊豆の絶景。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Deep Dive Geography & Terroir */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Marine Ecology & Heritage Culture</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                黒潮の恩恵と歴史の港町｜下田・南伊豆が誇る豊かな自然風土と温泉テロワール
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              下田・南伊豆エリアの独特な自然風土を形作っているのは、何といっても沖合を激しく流れる世界最大規模の暖流「黒潮（日本海流）」です。水温の高い黒潮が沿岸に直接接するため、初冬の11月から12月であっても最低気温が氷点下になることはほぼ皆無で、真冬でも霜や雪が降ることは極めて珍しいという、奇跡的な温暖海洋性気候が保たれています。この豊かな黒潮の海流と急峻に落ち込む駿河湾・相模トラフの深海が交錯する海底地形こそが、金目鯛や伊勢海老をはじめとする高級魚介類の国内随一の好漁場を生み出しています。
            </p>
            <p>
              深海200〜800メートルの暗黒世界に棲む金目鯛は、太陽光の届かない冷たい深層水に適応するため、自ら良質な脂をたっぷりと蓄えます。特に下田港へ水揚げされるものは、新島沖や神津島沖の海溝へ日帰りで往復する小型沿岸漁船が一本釣りで釣り上げ、船上で丁寧に氷締めされるため、身割れや鮮度劣化が一切ありません。市場に出回る冷凍の沖合金目鯛とは一線を画す、みずみずしい真紅の輝きとシルクのように繊細な肉質は、この地のテロワールだからこそ実現できる本物の味わいです。
            </p>
            <p>
              また、下田は嘉永7年（1854年）にマシュー・ペリー提督率いるアメリカ黒船艦隊が来航し、日米和親条約によって日本で最初の開港地となった歴史の舞台。現在でもペリーロードの石畳沿いには幕末・明治期のなまこ壁の町家や伊豆石造りの建造物が大切に残され、初冬の静かな空気の中でそぞろ歩きを楽しむことができます。青い海、咲き誇る冬水仙、温暖な気候、歴史のロマン、そして極上の温泉と美食が完璧に揃った下田は、大人が心から羽を伸ばせる理想の冬旅先です。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Carefully Selected Ocean View Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月の下田・南伊豆を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              水揚げ日本一の極上地金目鯛の姿煮・しゃぶしゃぶと、初冬の太平洋を一望する絶景露天風呂を誇る、楽天トラベル高評価の特選宿をご紹介します。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-400">({hotel.reviews.toLocaleString()}件)</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-cyan-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    第{hotel.id}選
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-cyan-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（2名1室時1名）</span>
                        <span className="text-xl font-extrabold text-cyan-800">{hotel.price}</span>
                      </div>
                    </div>

                    <p className="text-xs text-cyan-800 font-semibold bg-cyan-50 px-3 py-1.5 rounded-xl inline-block">
                      {hotel.special}
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-cyan-700" /> おすすめ客室・眺望
                        </span>
                        <p className="text-xs text-slate-600 leading-normal">
                          {hotel.roomTip}
                        </p>
                      </div>
                      <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100/80 space-y-1">
                        <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" /> 冬の特選グルメ
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights Points */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {hotel.highlights.map((hl: string, idx: number) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hotel.access}
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition duration-200"
                    >
                      <span>空室状況・プラン詳細（楽天トラベル）</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 1泊2日のおすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【11月・12月】下田・南伊豆の初冬絶景と金目鯛を極める1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-cyan-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-cyan-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold">1日目</span>
                都心から特急踊り子で下田へ・開国情緒散策とオーシャンビュー露天風呂
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前10時頃、東京駅から特急「サフィール踊り子」または「踊り子」に乗車。相模湾沿いの車窓風景を眺めながら正午過ぎに伊豆急下田駅に到着。まずは駅前の地魚料理店で、下田名物の金目鯛炙り丼や海鮮ランチを堪能。午後はなまこ壁と柳並木が美しい「ペリーロード」を散策し、レトロな古民家カフェでティータイム。続いて下田ロープウェイで「寝姿山展望台」へ登り、初冬の澄み渡る空気の中で下田港と伊豆七島を見渡す大パノラマを満喫します。15時半頃に宿へチェックイン。夕暮れ時に茜色に染まる太平洋を眺めながら絶景露天風呂で温まり、夜は水揚げ日本一の地金目鯛の姿煮と伊勢海老の豪華海鮮会席に舌鼓を打ちます。
              </p>
            </div>
            <div className="border-l-2 border-cyan-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-cyan-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold">2日目</span>
                朝の白波鑑賞・爪木崎水仙まつりと南伊豆オーシャンパノラマ
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                早朝、水平線から昇る朝日を客室や朝風呂から眺めて爽快に目覚めたら、新鮮な魚介と天城の卵を使った朝食をいただきます。10時にチェックアウト後、車またはバスで須崎半島の先端「爪木崎」へ（12月中旬以降は300万本の水仙まつり開催）。エメラルドブルーの海と白亜の灯台、甘い香りを放つ白い水仙の群生の中をゆっくりトレッキング。続いて南伊豆の先端「石廊崎オーシャンパーク」へ向かい、断崖絶壁に建つ石室神社や太平洋の荒波が渦巻くダイナミックな景観を体感。道の駅開国下田みなとで、獲れたての干物や金目鯛の燻製、甘酸っぱい伊豆みかんをお土産に買い求め、夕方の特急で帰路へ着きます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips */}
        <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-800">
            <Compass className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold">
              11月・12月の下田・南伊豆旅行を満喫する実践ガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-cyan-300 flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4" /> 気候・防寒対策
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                本州の中でも温暖で日中は15℃を超える小春日和もありますが、海沿いは冬の海風が冷たく体感温度を下げます。風を通さないアウターやストール、重ね着しやすい服装を準備しておくと、夕景観賞や夜の露天風呂も快適です。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-cyan-300 flex items-center gap-1.5">
                <Footprints className="w-4 h-4" /> 爪木崎水仙と史跡散策
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                12月中旬から開幕する爪木崎の水仙まつりは必見。青い海と300万本の水仙のコントラストは初冬の南伊豆を象徴する絶景です。また、下田市街のペリーロードや了仙寺など開国の歴史散策も風情豊かで楽しめます。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-cyan-300 flex items-center gap-1.5">
                <Fish className="w-4 h-4" /> 地金目鯛の選び方・予約
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                金目鯛プランを選ぶ際は「地金目鯛」または「下田港一本釣り」と明記されたプランが断然おすすめ。身のふっくら感と脂の上品さが格別です。人気宿の露天風呂付き客室や金目鯛特選プランは週末を中心に早期満室となります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の下田・南伊豆温泉旅行 よくある質問
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-cyan-700 font-extrabold flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Related Links / Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <Compass className="w-6 h-6 text-cyan-800" />
            <h2 className="text-xl font-bold text-slate-900">
              あわせて読みたい！冬の温泉・美食旅行特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-cyan-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100/60 px-2 py-0.5 rounded-full inline-block">静岡・熱海</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-cyan-800 transition line-clamp-2">
                初冬の熱海海上花火大会と金目鯛会席を愉しむ温泉宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                夜空を彩る冬花火と相模湾の海の幸を特等席で満喫。
              </p>
            </Link>
            <Link 
              href="/winter-shizuoka-inatori-onsen-kinmedai-oceanview-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-cyan-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100/60 px-2 py-0.5 rounded-full inline-block">東伊豆・稲取</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-cyan-800 transition line-clamp-2">
                稲取温泉の初冬海一望露天と伝統稲取金目鯛の姿煮宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                発祥の地で味わう濃厚な金目鯛の煮付けと絶景オーシャンビュー。
              </p>
            </Link>
            <Link 
              href="/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-cyan-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100/60 px-2 py-0.5 rounded-full inline-block">中伊豆・修善寺</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-cyan-800 transition line-clamp-2">
                修善寺温泉の名残紅葉と竹林の小径・伊豆の美食宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                伊豆の小京都で過ごす静かな初冬の風情と名湯の寛ぎ。
              </p>
            </Link>
            <Link 
              href="/winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-cyan-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100/60 px-2 py-0.5 rounded-full inline-block">三重・鳥羽</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-cyan-800 transition line-clamp-2">
                鳥羽温泉郷の初冬伊勢海老＆的矢かき会席と海の絶景宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                伊勢志摩の豊かな海の恵みと波静かな鳥羽湾を望む名旅館。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
