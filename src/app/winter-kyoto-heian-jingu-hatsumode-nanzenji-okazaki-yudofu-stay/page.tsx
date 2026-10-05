import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Trees
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月京都】平安神宮＆南禅寺・岡崎！初詣と神苑雪景色・水路閣の冬情趣と名物湯豆腐・京懐石の名宿5選",
  description: "11月中旬から1月にかけて、京都・岡崎から南禅寺・蹴上にかけての東山山麓は、観光客で賑わう秋の紅葉から一転、古都本来の奥深い静寂と凛とした冬の美しさに包まれます。朱塗りの大鳥居が白雪に映える平安神宮の初詣と名勝神苑の雪化粧、赤レンガの水路閣や威風堂々たる三門が冬木立に佇む南禅寺。冷え切った身体に染み渡る発祥の地・南禅寺の名物熱々湯豆腐や冬の京懐石（かぶら蒸し・聖護院大根）。天然温泉や名庭園を備えた至高の隠れ宿。楽天APIから最新取得した実力宿5選を徹底特集します。",
  keywords: '平安神宮 初詣, 南禅寺 水路閣 雪景色, 南禅寺 湯豆腐, ウェスティン都ホテル京都 温泉, ふふ 京都, 京都トラベラーズイン, 岡崎 宿泊, 11月 12月 1月 京都 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay/"
  },
  openGraph: {
    title: "【11・12・1月京都】平安神宮＆南禅寺・岡崎！初詣と神苑雪景色・水路閣の冬情趣と名物湯豆腐・京懐石の名宿5選",
    description: "11月中旬から1月にかけて、京都・岡崎から南禅寺・蹴上にかけての東山山麓は、観光客で賑わう秋の紅葉から一転、古都本来の奥深い静寂と凛とした冬の美しさに包まれます。朱塗りの大鳥居が白雪に映える平安神宮の初詣と名勝神苑の雪化粧、赤レンガの水路閣や威風堂々たる三門が冬木立に佇む南禅寺。冷え切った身体に染み渡る発祥の地・南禅寺の名物熱々湯豆腐や冬の京懐石（かぶら蒸し・聖護院大根）。天然温泉や名庭園を備えた至高の隠れ宿。楽天APIから最新取得した実力宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/1167/1167.jpg",
      width: 1200,
      height: 630,
      alt: '冬の京都平安神宮大鳥居と南禅寺水路閣の雪情趣'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月京都】平安神宮＆南禅寺・岡崎！初詣と神苑雪景色・水路閣の冬情趣と名物湯豆腐・京懐石の名宿5選",
    description: "11月中旬から1月にかけて、京都・岡崎から南禅寺・蹴上にかけての東山山麓は、観光客で賑わう秋の紅葉から一転、古都本来の奥深い静寂と凛とした冬の美しさに包まれます。朱塗りの大鳥居が白雪に映える平安神宮の初詣と名勝神苑の雪化粧、赤レンガの水路閣や威風堂々たる三門が冬木立に佇む南禅寺。冷え切った身体に染み渡る発祥の地・南禅寺の名物熱々湯豆腐や冬の京懐石（かぶら蒸し・聖護院大根）。天然温泉や名庭園を備えた至高の隠れ宿。楽天APIから最新取得した実力宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/1167/1167.jpg"]
  }
};

export default function KyotoHeianJinguWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "ウェスティン都ホテル京都",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1167/1167.jpg",
              rating: 4.72,
              reviews: 2965,
              price: "¥39,831〜",
              access: "京都駅八条口より無料送迎バスあり / 地下鉄東西線＜蹴上駅＞から徒歩2分 / 南禅寺・哲学の道まですぐ",
              special: "心地よいという新しいラグジュアリー。★魅惑なグルメの世界と天然温泉SPAでお寛ぎいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1167%2F1167.html",
              story: "東山・蹴上の高台に130余年の歴史を刻み、「都ホテル」の伝統を誇るラグジュアリーホテル「ウェスティン都ホテル京都」。当ホテルの冬の逗留を決定づけるのが、敷地内から湧出する天然温泉を贅沢に使用した総面積約2,100平米のスパ施設「SPA 華頂（かちょう）」。琵琶湖疏水の水路閣をモチーフにした優美なアーチ型デザインが施され、冷たい冬風が吹き抜ける京都の街を歩いた後、広々とした半露天風呂とサウナで極上の温もりと静寂に浸ることができます。客室は東山の稜線や京都市街を見晴らす洗練されたモダンラグジュアリー。メインダイニング「ドミニク・ブシェ キョート」やビュッフェレストラン「洛空」では、冬の京野菜や黒毛和牛を使った贅沢なフレンチ＆京料理を堪能できます。",
              roomTip: "ジュニアスイート、または平安京ビュー客室。窓から広がる古都の冬景色と東山の雪化粧を眺め、天然温泉スパへの専用アクセスで至福の逗留。",
              gourmetTip: "レストラン「洛空（らくう）」。シェフが目の前で仕上げる鉄板焼きや揚げたて天ぷら、冬の京都の出汁を活かした温かいおばんざい朝食を満喫。",
              highlights: [
                "総面積2100平米天然温泉SPA「華頂」・水路閣モチーフの半露天風呂・創業130余年名門",
                "平安京ビュー客室・フレンチ「ドミニク・ブシェ」＆ビュッフェ「洛空」・東山高台",
                "地下鉄東西線蹴上駅直結感覚・南禅寺水路閣へ徒歩散策・極上の癒やしスパステイ"
              ]
            },
            {
              id: 2,
              name: "ふふ　京都",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182642/182642.jpg",
              rating: 4.83,
              reviews: 106,
              price: "¥45,950〜",
              access: "地下鉄蹴上駅より徒歩7分、京都駅よりタクシーで約20分",
              special: "京都南禅寺にほど近く国の史跡に指定されている琵琶湖疏水のほとり。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182642%2F182642.html",
              story: "南禅寺の門前、琵琶湖疏水が静かにせせらぐ岡崎の地に佇むスモールラグジュアリーリゾート「ふふ 京都」。わずか40室の客室すべてに、ヒノキの香りが漂う自家源泉の天然温泉客室風呂が完備されています。敷地内には四季折々の表情を見せる日本庭園と、日本の伝統工芸の粋を集めた離れが配され、冬の雪が苔や飛び石に降り積もる様をプライベートに愛でることができます。夕食は庵のようなプライベート空間でいただく炭火焼き懐石。料理人が炭火で香ばしく焼き上げる旬の魚介や京鴨、聖護院かぶらを使ったかぶら蒸しなど、日本の冬の美意識が凝縮された一皿ひと皿が心に染み入ります。",
              roomTip: "プレステージスイート（温泉風呂付）。ゆったりとしたソファから雪化粧の庭園や疏水の冬木立を眺め、好きな時に何度でも天然温泉に浸かる贅沢。",
              gourmetTip: "食事処「庵都（いほと）」。冬の京野菜や厳選和牛を目の前の炭火で丁寧に焼き上げる炭火会席。朝食の特製「庵都汁」も絶品。",
              highlights: [
                "全室ヒノキ天然温泉風呂完備・琵琶湖疏水沿いの雅な庵・炭火焼き懐石「庵都」",
                "四季の日本庭園雪景色・厳選京野菜と京鴨の炭火会席・南禅寺徒歩圏の隠れ家",
                "心温まるきめ細やかなバトラーサービス・大人の記念日やご褒美旅行に最適"
              ]
            },
            {
              id: 3,
              name: "京都トラベラーズ・イン",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4852/4852.jpg",
              rating: 4.11,
              reviews: 1343,
              price: "¥5,500〜",
              access: "地下鉄東西線東山駅徒歩７分。市バスでは京都駅より５番で岡崎公園美術館平安神宮前下車徒歩2分",
              special: "エレベーター無し。全室禁煙、Free Wi-Fi、駐車場￥1650",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4852%2F4852.html",
              story: "平安神宮の大鳥居を正面に望む岡崎公園のすぐそば、京都市美術館やロームシアター京都に隣接する絶好の立地に位置する「京都トラベラーズ・イン」。平安神宮や青蓮院門跡、南禅寺まで徒歩圏という抜群のフットワークを誇りながら、アットホームで心温まるおもてなしで長年親しまれています。館内にはゆったりと手足を伸ばして温まれる大浴場を完備し、冬の寺社巡りや初詣で冷え切った体をリフレッシュ。客室は清潔感ある和室と洋室が揃い、一人旅からグループ旅行まで柔軟に対応します。ホテル内のカフェレストラン「Cafe & Restaurant Green」では、京都の旬の食材を用いた温かい朝食や冬の定食が良心的な価格で提供されます。",
              roomTip: "和室（岡崎公園側）。畳敷きの落ち着いた空間で靴を脱いで寛げ、平安神宮の初詣へも徒歩ですぐに出かけられる気軽さが魅力。",
              gourmetTip: "カフェレストラン「Green」。京都の豆腐や旬の焼き魚、温かい具だくさん味噌汁が並ぶ和朝食で、冬の京都散策へ元気に出発。",
              highlights: [
                "平安神宮大鳥居徒歩すぐ・手足伸ばせる大浴場完備・抜群のコスパと立地",
                "岡崎公園・京都市美術館正面・清潔感ある和室＆洋室・冬の初詣散策の最高拠点",
                "カフェレストラン「Green」での温かい和朝食・一人旅からグループまで安心"
              ]
            },
            {
              id: 4,
              name: "南禅寺参道　菊水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184464/184464.jpg",
              rating: 4.80,
              reviews: 2,
              price: "¥42,000〜",
              access: "京都市営地下鉄東西線　蹴上駅　より徒歩７分",
              special: "趣のあるデザインをしつらえた贅沢な客室で癒しのひと時。伝統とモダンが交差する唯一無二の空間です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184464%2F184464.html",
              story: "南禅寺参道の入口、近代日本庭園の先駆者として名高い「作庭家・七代目小川治兵衛（植治）」が手がけた約820坪の国名勝指定級の庭園を抱く老舗料理旅館「南禅寺参道 菊水」。数寄屋造りの名建築と池泉回遊式庭園が冬の雪をまとった佇まいは、まさに一幅の山水画のような息を呑む幽玄の美を醸し出します。客室は全5室のみに限定され、すべてのお部屋から名庭の借景を独占。食事は名庭を望むダイニングで、名物である南禅寺の湯豆腐をはじめ、ミシュラン星付きシェフが監修した和洋融合のモダン会席を味わえます。冬の澄んだ静寂の中、水音と雪景色に包まれる時間は、京都旅の究極の贅沢です。",
              roomTip: "ガーデンビュースイート。窓のすぐ外に広がる名匠・植治の庭園雪景色を眺めながら、洗練された木漏れ日と静寂に浸る唯一無二の空間。",
              gourmetTip: "テラス＆ダイニング「菊水」。伝統の昆布出汁で温める極上湯豆腐や、冬の京野菜と黒毛和牛の炭火焼きを名庭園とともに味わう会席ディナー。",
              highlights: [
                "名匠「植治」の820坪庭園・全5室の贅沢離れ・名物南禅寺湯豆腐と和洋会席",
                "数寄屋造り名建築・ミシュラン星付きシェフ監修料理・池泉回遊式庭園の雪景色",
                "南禅寺参道沿いの最高立地・水音と雪景色に包まれる幽玄のプライベートタイム"
              ]
            },
            {
              id: 5,
              name: "ホテルオークラ京都　岡崎別邸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183379/183379.jpg",
              rating: 4.68,
              reviews: 73,
              price: "¥23,300〜",
              access: "京都駅よりお車にて約25分・京都市バス「岡崎神社前」 徒歩１分・京都市営地下鉄東西線「蹴上」駅より徒歩約14分",
              special: "静謐な空間と現代的な京の美に癒される、全60室のスモールラグジュアリーホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183379%2F183379.html",
              story: "平安神宮からほど近い岡崎の閑静な住宅街、丸太町通沿いに佇み、京都の伝統美とオークラの上質なホスピタリティが融合した大人の隠れ家「ホテルオークラ京都 岡崎別邸」。全60室のスモールラグジュアリーホテルで、館内には京都の伝統工芸プロジェクト「GO ON（ゴオン）」の後継者たちが手がけた西陣織や竹工芸、金工などのアートワークが随所に配されています。客室のバルコニーからは隣接する善氣山の冬木立や東本願寺岡崎別院の境内の雪景色を一望。メインダイニング「ヌーヴェル・エポック」では、京の旬食材とフランス料理の伝統技法が昇華した繊細なフレンチコースを提供し、洗練された冬の美食体験を届けてくれます。",
              roomTip: "ガーデンバルコニーキング。プライベートバルコニーから別院の庭園や東山の冬景色を望み、西陣織のアートに囲まれる静寂の逗留。",
              gourmetTip: "レストラン「ヌーヴェル・エポック」。窓外の庭園を眺めながら、冬の聖護院かぶらのムースや京都産黒毛和牛を味わう革新的フレンチ。",
              highlights: [
                "全60室スモールラグジュアリー・伝統工芸GO ONアート・ヌーヴェルエポックの美食フレンチ",
                "全室バルコニー付・京都産黒毛和牛と聖護院かぶらの冬フレンチ・静寂の岡崎逗留",
                "オークラ伝統のホスピタリティ・洗練された大人の隠れ家リゾート"
              ]
            }
  ];

  const faqData = [
  {
    "q": "平安神宮の初詣の混雑状況と見どころは？",
    "a": "平安神宮は京都を代表する初詣スポットで、三が日で約40万人以上の参拝者が訪れます。大晦日の終夜開門から元旦、および三が日の昼間（10:00〜15:00）は賑わいますが、境内が非常に広大（白砂の中庭）なため、他の密集した寺社に比べて比較的ゆったりとお参りできます。見どころは高さ24メートルの壮麗な朱塗りの大鳥居、應天門、そして雪が降った際に息を呑む美しさを見せる名勝「神苑」の池泉回遊式庭園の雪景色です。"
  },
  {
    "q": "冬の南禅寺（三門・水路閣）の雪景色を楽しむベストなタイミングは？",
    "a": "京都の冬は毎日は雪が積もりませんが、寒波が訪れた朝にはうっすらと白銀の雪化粧をまといます。特に南禅寺の赤レンガ造りの水路閣（琵琶湖疏水）や、日本三大門の一つである巨大な木造の三門は、白い雪と渋い木肌・赤レンガのコントラストが素晴らしく、早朝（8:30〜9:30頃）の人の少ない時間帯に訪れると、静寂に満ちた幻想的な冬の京都を独占できます。"
  },
  {
    "q": "南禅寺名物の「湯豆腐」はなぜ冬に人気なのですか？おすすめの食べ方は？",
    "a": "南禅寺周辺は古くから良質な地下水に恵まれ、精進料理として豆腐文化が発展しました。利尻昆布を敷いた土鍋で熱々に温めたなめらかな木綿豆腐を、特製の出汁醤油と薬味（生姜、ネギ、柚子、鰹節）でいただく湯豆腐は、冬の底冷えする京都で芯から身体を温めてくれます。「南禅寺 順正」や「総本家 ゆどうふ 奥丹」などの歴史ある老舗で、庭園を眺めながら味わうのが王道です。"
  },
  {
    "q": "冬の京都観光における「底冷え」対策と服装の注意点は？",
    "a": "京都の盆地特有の冬の寒さは「底冷え（足元からシンシンと冷える寒さ）」と呼ばれます。特に寺社仏閣の拝観では、靴を脱いで冷たい板の間の廊下を歩く機会が多いため、厚手のウール靴下や厚底ルームソックス、脱ぎ履きしやすい防寒ブーツの着用が必須です。また、カイロを足裏や腰に貼り、風を通さないコートやマフラー、手袋でしっかり防寒対策を整えてください。"
  },
  {
    "q": "岡崎・南禅寺エリアに宿泊する最大の魅力は何ですか？",
    "a": "祇園や河原町の繁華街の喧騒から適度に離れ、琵琶湖疏水や東山の豊かな自然に囲まれた「大人の静寂」が保たれている点です。早朝の澄んだ空気の中で平安神宮や南禅寺を散策できる特権があるほか、ウェスティン都ホテルの天然温泉スパ「華頂」や、ふふ京都の客室天然温泉など、冬の京都で最高峰の温もりと美食に包まれる上質な隠れ家宿が揃っていることが最大の魅力です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay"
        },
        "headline": "【11・12・1月京都】平安神宮＆南禅寺・岡崎！初詣と神苑雪景色・水路閣の冬情趣と名物湯豆腐・京懐石の名宿5選",
        "description": "11月中旬から1月にかけて、京都・岡崎から南禅寺・蹴上にかけての東山山麓は、観光客で賑わう秋の紅葉から一転、古都本来の奥深い静寂と凛とした冬の美しさに包まれます。朱塗りの大鳥居が白雪に映える平安神宮の初詣と名勝神苑の雪化粧、赤レンガの水路閣や威風堂々たる三門が冬木立に佇む南禅寺。冷え切った身体に染み渡る発祥の地・南禅寺の名物熱々湯豆腐や冬の京懐石（かぶら蒸し・聖護院大根）。天然温泉や名庭園を備えた至高の隠れ宿。楽天APIから最新取得した実力宿5選を徹底特集します。",
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com"
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
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "京都・平安神宮＆南禅寺・岡崎冬特集",
            "item": "https://croud-travel.com/winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay"
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
      <header className="relative bg-gradient-to-br from-red-950 via-slate-900 to-stone-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs sm:text-sm font-medium">
            <Landmark className="w-4 h-4 text-red-300" />
            <span>11月・12月・1月冬の京都古都初詣＆東山静寂名湯特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            平安神宮＆南禅寺・岡崎！<br className="hidden sm:inline" />
            初詣と神苑雪景色・水路閣の冬情趣と名物湯豆腐・京懐石の名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            壮大な朱塗りの大鳥居が雪に映える平安神宮の初詣、赤レンガの水路閣や威風堂々たる三門が冬の静寂に佇む南禅寺。底冷えする京都の旅を温める名物熱々湯豆腐やかぶら蒸し、そして東山の麓に湧く極上の天然温泉スパと名庭園。秋の賑わいから一転、古都本来の澄んだ気品に浸る冬の京都逗留をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-400 shrink-0" />
              <span>期間：11月中旬〜1月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-red-400 shrink-0" />
              <span>平安神宮初詣＆神苑雪景色</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-red-400 shrink-0" />
              <span>東山山麓天然温泉SPA</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-red-400 shrink-0" />
              <span>発祥の地・南禅寺湯豆腐</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-red-500 shrink-0" />
              冬の岡崎＆南禅寺が魅せる「千年の祈りと静寂」の美意識
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              秋の燃えるような紅葉シーズンが幕を閉じると、京都の東山山麓に位置する岡崎・南禅寺エリアは、一年の中で最も静謐で美しい季節を迎えます。冷たく澄み渡った大気が東山の山並みをくっきりと浮かび上がらせ、歴史ある社寺の境内には本来の厳かな静けさが戻ってきます。
            </p>
            <p>
              新春を迎えると、平安神宮の白砂の境内は初詣に訪れる参拝者の祈りに包まれます。高さ24mを誇る朱塗りの大鳥居や應天門が、時に降る白い淡雪と見事なコントラストを描き出し、新年の清々しい旅立ちを祝福します。小川治兵衛が作庭した名勝「神苑」では、池の水面に映る冬枯れの木々と雪吊りが、わびさびの美の極致を教えてくれます。
            </p>
            <p>
              平安神宮から琵琶湖疏水沿いを歩き、南禅寺へ。堂々たる「天下竜門」三門をくぐり奥へと進めば、赤レンガのアーチが連なる近代化遺産「水路閣」が現れます。冬の枯れ木に囲まれた水路閣の佇まいは、ノスタルジーと古都の歴史が調和した絶好のフォトスポットです。さらに小堀遠州作とされる方丈庭園「虎の子渡しの庭」では、白砂に雪が舞い散る幽玄の枯山水が訪れる者の心を静かに洗います。
            </p>
            <p>
              京都の冬の散策に欠かせないのが「南禅寺湯豆腐」です。利尻昆布の出汁でじっくり温められた出来立ての豆腐に特製醤油をかけて口に運べば、大豆の豊かな甘みと温もりが身体の隅々にまで染み渡ります。さらに、東山山麓から湧き出る天然温泉の湯船に身を委ね、名庭を眺めながら冬の京懐石を味わう。これこそが、知る人ぞ知る大人の京都冬旅の醍醐味です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-red-50/60 rounded-xl p-5 border border-red-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-red-600" />
                <span>平安神宮初詣＆神苑雪景色</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                広大な白砂の境内と朱塗り大鳥居。雪の日に現れる名勝神苑の幽玄な雪景色。
              </p>
            </div>
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>名物南禅寺湯豆腐＆京懐石</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                利尻昆布出汁で温める熱々湯豆腐と冬のかぶら蒸し。底冷えする京都を芯から温める美味。
              </p>
            </div>
            <div className="bg-stone-50/60 rounded-xl p-5 border border-stone-200">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Waves className="w-5 h-5 text-stone-600" />
                <span>東山名湯と名庭の隠れ家</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ウェスティン都ホテルの天然温泉SPA「華頂」や「ふふ京都」の客室温泉で極上の癒やし。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Verified Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の平安神宮＆南禅寺・岡崎を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              楽天APIより最新の客室情報・レビュー評価を取得。平安神宮や南禅寺へのアクセス至便、天然温泉スパ、名匠の庭園美や冬の美食を誇る至高の名宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <article key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                          <span className="font-extrabold text-base text-slate-900">{h.rating}</span>
                          <span className="text-xs text-slate-500">（{h.reviews.toLocaleString()}件）</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 block">参考宿泊料金（1名）</span>
                          <span className="text-base sm:text-lg font-extrabold text-red-600">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{h.access}</span>
                      </p>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <div className="bg-red-50/50 rounded-xl p-3.5 border border-red-100/60 text-xs sm:text-sm space-y-1.5">
                        <div className="font-bold text-red-950 flex items-center gap-1.5">
                          <Building className="w-4 h-4 text-red-600 shrink-0" />
                          <span>宿泊のこだわり＆客室の選び方</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>

                      <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-100/60 text-xs sm:text-sm space-y-1.5">
                        <div className="font-bold text-amber-950 flex items-center gap-1.5">
                          <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>冬の美食＆朝食ダイニング</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        {h.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-sm shadow-sm hover:shadow transition-all text-center"
                      >
                        <span>楽天トラベルで空室・宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・月別服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Kyoto Winter Climate</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-red-500 shrink-0" />
              11月・12月・1月の気温推移と京都東山・岡崎の冬底冷え対策＆拝観マナー
            </h2>
          </div>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              京都の冬は三方を山に囲まれた盆地特有の「底冷え」があり、数字上の気温以上に足元から冷たさが上がってきます。特に社寺の板の間拝観や白砂の境内散策に備えた足元防寒が不可欠です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-red-950 text-base flex items-center justify-between">
                <span>11月中旬〜下旬</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">平均 12℃ / 最低 7℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                東山の山々が紅葉のフィナーレを迎え、冬の凛とした空気に入れ替わる時期。日中は歩きやすい秋コートで十分ですが、朝夕の東山山麓は急激に冷え込むため、首元を温めるストールやショールを携行しましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-red-950 text-base flex items-center justify-between">
                <span>12月（師走の静寂）</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">平均 7℃ / 最低 3℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                観光客が落ち着き、最も静かに南禅寺や水路閣を巡ることができる季節。寺院の板の間拝観では足裏が氷のように冷えるため、厚手のウール靴下や厚底ルームソックスを持参するのが京都通の知恵です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-red-950 text-base flex items-center justify-between">
                <span>1月（新春初詣〜雪の古都）</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">平均 4℃ / 最低 1℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                平安神宮の初詣で広大な白砂の境内を歩く際は、底冷え防止の貼るカイロや防寒ブーツが必須です。寒波到来時にはうっすらと雪化粧した南禅寺や神苑の絶景に出会えるため、歩きやすい防滑シューズで訪れましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 冬の美食ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Kyoto Winter Culinary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-red-500 shrink-0" />
              冬の京都を代表する滋味：発祥の地・南禅寺湯豆腐とかぶら蒸し・京会席
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              冬の京都を訪れたなら、必ず味わいたいのが発祥の地・南禅寺の門前でいただく「熱々湯豆腐」です。良質な東山の地下水と厳選国産大豆で作られたなめらかな木綿豆腐を、利尻昆布の豊かな出汁でじんわり温め、特製醤油と生姜・柚子・青ネギの薬味で味わう一口は、身体の芯から寒さをほどいてくれます。
            </p>
            <p>
              さらに、冬の京料理の花形である「かぶら蒸し」。甘みの増した伝統の聖護院かぶらをすりおろし、白身魚（甘鯛・ぐじ）や穴子、百合根、銀杏を包んで蒸し上げ、熱々の銀餡とおろし山葵をかけた逸品は、冬の京都でしか味わえない至高の芸術品です。静寂に包まれた宿で味わう京懐石が、冬の古都の旅を極上の思い出へと昇華させてくれます。
            </p>
            <p>
              新春の京都ならではの味覚として、こっくりと甘く濃厚な「白味噌仕立ての丸餅雑煮」や、甘辛く煮付けた身欠きニシンが出汁と蕎麦に溶け合う「にしんそば」も格別。門前の老舗甘味処でいただく熱々の粟ぜんざいや抹茶パフェとともに、五感すべてで京都の冬を味わい尽くすことができます。
            </p>
          </div>
        </section>

        {/* Section 5: モデルコース */}
        <section className="bg-gradient-to-br from-red-950 via-slate-900 to-stone-950 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-red-800 pb-4">
            <span className="text-red-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              【1泊2日モデルコース】平安神宮初詣と南禅寺水路閣＆極上湯豆腐の旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 space-y-4">
              <div className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>平安神宮の初詣から南禅寺水路閣＆熱々湯豆腐</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 京都駅から地下鉄東西線で東山・蹴上へ。宿に荷物を預け、平安神宮へ。
                </p>
                <p>
                  <strong>12:30</strong> 平安神宮で初詣。大鳥居と白砂の境内を参拝後、名勝神苑で冬枯れの美しい庭園美を鑑賞。
                </p>
                <p>
                  <strong>14:30</strong> 南禅寺へ移動。雄大な三門を仰ぎ、赤レンガの水路閣の冬情趣を静かに散策。
                </p>
                <p>
                  <strong>17:30</strong> 老舗「南禅寺 順正」または宿の食事処で、利尻昆布出汁が香る熱々の名物湯豆腐と京懐石に舌鼓。
                </p>
                <p>
                  <strong>20:00</strong> ホテルの天然温泉スパ「華頂」や客室温泉風呂で、冷えた体を芯から温めて至福の眠りへ。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 space-y-4">
              <div className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span className="bg-stone-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>静寂の岡崎疏水朝散歩から京都国立近代美術館＆老舗甘味処</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:00</strong> 出汁が染み入る温かい京のおばんざいや特製朝食御膳をゆったり味わう。
                </p>
                <p>
                  <strong>09:30</strong> 琵琶湖疏水沿いを朝散歩。冬の澄んだ水面に映る冬木立を眺めながら岡崎文化ゾーンへ。
                </p>
                <p>
                  <strong>11:00</strong> 京都市京セラ美術館や京都国立近代美術館で冬の特別展や日本画を鑑賞。
                </p>
                <p>
                  <strong>13:30</strong> 岡崎の老舗茶房で温かい京ぜんざいや抹茶を味わい、京都駅より新幹線で帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の平安神宮＆南禅寺旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-red-600 font-extrabold shrink-0">Q.</span>
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
            <span className="text-red-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！冬の京都＆人気初詣名所特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-red-400 block mb-1">祇園・東山冬特集</span>
              <span className="font-bold text-white block">八坂神社初詣＆清水寺冬景色と老舗京懐石の名宿</span>
            </Link>

            <Link 
              href="/winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-red-400 block mb-1">貴船・鞍馬冬特集</span>
              <span className="font-bold text-white block">雪の貴船神社積雪日限定ライトアップ＆名物ぼたん鍋名宿</span>
            </Link>

            <Link 
              href="/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-red-400 block mb-1">伏見・宇治冬特集</span>
              <span className="font-bold text-white block">伏見稲荷大社初詣＆千本鳥居雪景色と宇治抹茶・酒蔵名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay" />
</div>
  );
}
