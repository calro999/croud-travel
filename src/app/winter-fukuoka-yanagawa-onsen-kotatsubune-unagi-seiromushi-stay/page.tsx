import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月福岡・水郷柳川の冬の風物詩「こたつ舟」川下り】名物元祖うなぎのせいろ蒸し＆博多和牛会席を味わう城下町・掘割温泉名宿5選",
  description: "11月から12月にかけて、北原白秋の故郷として知られる水郷・福岡県柳川は、どんこ舟に温かい火鉢やこたつを乗せた冬の風物詩「こたつ舟」が運航を開始し、1年で最も情緒豊かな季節を迎えます。掘割沿いの柳並木やなまこ壁の白壁土塀をぬくぬく温まりながら巡る川下り、旧柳川藩主立花家別邸「御花」の美しい松涛園、そして冷えた身体を芯から解きほぐす天然温泉。湯気を上げる名物「元祖うなぎのせいろ蒸し」の香ばしいタレの香り、有明海の冬の珍味、極上の博多和牛会席を味わう城下町の厳選名宿5選を徹底解説します。",
  keywords: '柳川温泉 宿泊, 柳川藩主立花邸御花, 亀の井ホテル柳川, ホテルニューガイア柳川, 柳川白柳荘, 輝泉荘, こたつ舟 川下り, うなぎのせいろ蒸し, 11月 12月 柳川, 博多和牛',
  alternates: {
    canonical: 'https://croud-travel.com/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay'
  },
  openGraph: {
    title: "【11・12月福岡・水郷柳川の冬の風物詩「こたつ舟」川下り】名物元祖うなぎのせいろ蒸し＆博多和牛会席を味わう城下町・掘割温泉名宿5選",
    description: "11月から12月にかけて、北原白秋の故郷として知られる水郷・福岡県柳川は、どんこ舟に温かい火鉢やこたつを乗せた冬の風物詩「こたつ舟」が運航を開始し、1年で最も情緒豊かな季節を迎えます。掘割沿いの柳並木やなまこ壁の白壁土塀をぬくぬく温まりながら巡る川下り、旧柳川藩主立花家別邸「御花」の美しい松涛園、そして冷えた身体を芯から解きほぐす天然温泉。湯気を上げる名物「元祖うなぎのせいろ蒸し」の香ばしいタレの香り、有明海の冬の珍味、極上の博多和牛会席を味わう城下町の厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '水郷柳川のこたつ舟川下りと城下町温泉名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月福岡・水郷柳川の冬の風物詩「こたつ舟」川下り】名物元祖うなぎのせいろ蒸し＆博多和牛会席を味わう城下町・掘割温泉名宿5選",
    description: "11月から12月にかけて、北原白秋の故郷として知られる水郷・福岡県柳川は、どんこ舟に温かい火鉢やこたつを乗せた冬の風物詩「こたつ舟」が運航を開始し、1年で最も情緒豊かな季節を迎えます。掘割沿いの柳並木やなまこ壁の白壁土塀をぬくぬく温まりながら巡る川下り、旧柳川藩主立花家別邸「御花」の美しい松涛園、そして冷えた身体を芯から解きほぐす天然温泉。湯気を上げる名物「元祖うなぎのせいろ蒸し」の香ばしいタレの香り、有明海の冬の珍味、極上の博多和牛会席を味わう城下町の厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterFukuokaYanagawaPage() {
  const hotels = [
            {
              id: 1,
              name: "柳川藩主立花邸　御花",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29756/29756.jpg",
              rating: 4.85,
              reviews: 161,
              price: "¥26,015〜",
              access: "佐賀空港よりリムジンバスで30分／西鉄柳川駅よりタクシーで約１０分／九州自動車道みやま・柳川ＩＣより約25分",
              special: "柳川藩主の末裔が営む御屋敷で特別なひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29756%2F29756.html",
              story: "旧柳川藩主立花家の邸宅として約300年の歴史を刻み、国の名勝「松涛園（しょうとうえん）」を擁する柳川のシンボル的料亭旅館「柳川藩主立花邸 御花」。広大な敷地内には明治期の西洋館や大広間、手入れの行き届いた黒松の庭園が広がり、初冬の静けさの中で歴史の重厚な息吹が感じられます。宿泊者だけが味わえる最大の特権は、観光客が去った後の夜や早朝、美しくライトアップされた庭園の静寂を独占できること。食事は伝統の立花家伝来の料理を現代に受け継ぐ料亭「集景亭」でいただく極上の会席料理。創業当時から変わらぬ手法でじっくり焼き上げて蒸す名物「うなぎのせいろ蒸し」は、秘伝のタレが染み込んだ熱々のご飯とふっくら柔らかな鰻、黄金色の錦糸卵が絶妙の調和を奏でます。有明海産の旬の海鮮や九州銘柄牛を贅沢に盛り込んだ料理の数々を、庭園を望む個室で優雅に堪能できます。",
              roomTip: "松涛園ビュー和室（または離れ「松涛館」）。窓一面に国名勝・松涛園の緑と水面が広がり、大名屋敷の格式と現代の快適性が融合した至高のプライベート空間。",
              gourmetTip: "「立花家伝統・初冬の殿様会席」。秘伝ダレでふっくら蒸し上げた名物「うなぎのせいろ蒸し」、博多和牛の石焼きステーキ、有明海産タイラギ貝柱と地魚のお造り、季節の吸い物。",
              highlights: [
                "旧柳川藩主立花家300年の格式漂う歴史宿＆国名勝・松涛園の静寂を独占する贅沢",
                "料亭集景亭でいただく元祖うなぎのせいろ蒸し＆博多和牛石焼きステーキの極み",
                "夜間の松涛園ライトアップ＆明治の洋館と大広間を見学できる唯一無二の滞在体験"
              ]
            },
            {
              id: 2,
              name: "亀の井ホテル　柳川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41164/41164.jpg",
              rating: 4.09,
              reviews: 649,
              price: "¥10,510〜",
              access: "西鉄柳川駅西口から車で約15分／西鉄柳川駅西口から堀川バスで約15分／みやま柳川ICから約20分",
              special: "街並みを一望できる展望温泉は、とろみのある美肌の湯。川下りコースは目の前！情緒あふれる水郷柳川を満喫",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41164%2F41164.html",
              story: "柳川の掘割（クリーク）沿いに位置し、全室から水郷の風情ある川面を眺められるリバーサイドの温泉リゾート「亀の井ホテル 柳川（旧：かんぽの宿 柳川）」。宿の目の前をどんこ舟がのんびりと行き交い、初冬の澄んだ水面に映る柳並木や水鳥の姿に心が和みます。最上階の5階に設けられた展望天然温泉大浴場からは、広大な筑後平野と柳川の掘割が一望。注がれる温泉は肌触り柔らかな弱アルカリ性単純温泉で、冬の川下り散策で冷えた身体を芯からポカポカに温めてくれます。夕食は柳川名物のうなぎ料理をはじめ、福岡県産の旬の味覚を彩り豊かに揃えた和食会席。香ばしい鰻の蒲焼きやせいろ蒸し、博多名物のもつ鍋や水炊き小鍋など、幅広い世代に喜ばれる充実のメニューが揃っています。",
              roomTip: "リバービュー和洋室。大きな窓から柳川の掘割を見下ろし、行き交うこたつ舟を眺めながらゆったりと足を伸ばして寛げる居心地の良いお部屋。",
              gourmetTip: "「冬の水郷味覚会席」。熱々のうなぎのせいろ蒸し、博多和牛のすき焼き小鍋、有明海直送の旬魚刺身盛り合わせ、地元野菜の天ぷら、福岡県産あまおう苺のデザート。",
              highlights: [
                "掘割沿いの好立地リゾート＆最上階展望温泉大浴場から望む水郷パノラマ絶景",
                "香ばしいうなぎせいろ蒸しと博多すき焼き会席＆旬の有明海鮮とあまおうスイーツ",
                "全室リバービューでこたつ舟の往来を眺望＆ファミリーやグループ旅行にも安心"
              ]
            },
            {
              id: 3,
              name: "ホテルニューガイア　柳川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153338/153338.jpg",
              rating: 4.17,
              reviews: 296,
              price: "¥4,000〜",
              access: "西鉄大牟田線　柳川駅より徒歩にて約３分",
              special: "全館エアウィーヴ採用！宿泊者専用ラウンジでは、ドリンク類無料！スパークリングワインも大好評です！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153338%2F153338.html",
              story: "西鉄柳川駅から徒歩約3分という抜群のアクセスを誇り、観光やビジネス、一人旅の拠点として高い利便性を誇る近代的なホテル「ホテルニューガイア 柳川」。清潔感あふれる客室にはシモンズ社製ベッドが配され、旅の疲れを心地よく癒やす快適な睡眠環境が整えられています。宿泊者専用の大浴場には天然温泉が引かれており、足を伸ばして温かい湯船に浸かれるのが嬉しいポイント。朝食には地元福岡の食材をふんだんに取り入れた和洋バイキングが提供され、柳川名物の海苔や郷土の小鉢を味わえます。柳川の川下り乗船場や古い町並みへも徒歩や巡回バスで手軽にアクセスでき、気ままに水郷の城下町グルメや名所巡りを楽しみたいスマートな旅行者に最適な拠点です。",
              roomTip: "スーペリアダブル（またはツイン）。シモンズ社製高級ベッドと機能的なデスクを備え、静かな環境でゆったりとプライベートな時間を過ごせるお部屋。",
              gourmetTip: "「柳川老舗提携ディナープラン＆地元朝食」。近隣の老舗割烹で味わう熱々のうなぎのせいろ蒸し膳と、ホテル特製の有明海苔を添えた和洋バイキング朝食。",
              highlights: [
                "西鉄柳川駅徒歩3分の快適シティホテル＆シモンズ社製ベッドと天然温泉大浴場",
                "近隣老舗割烹との提携ディナー＆有明海苔を添えた地元食材の充実和洋バイキング朝食",
                "ビジネス・一人旅から観光までスマート対応＆観光乗船場へのアクセスも至便"
              ]
            },
            {
              id: 4,
              name: "柳川　白柳荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13813/13813.jpg",
              rating: 4.31,
              reviews: 430,
              price: "¥6,600〜",
              access: "ＪＲ筑後船小屋駅下車バスで20分又は西鉄柳川駅下車徒歩10分／九州縦貫自動車道みやま柳川ＩＣより車で15分",
              special: "有明海の珍味や柳川の郷土料理をお楽しみ下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13813%2F13813.html",
              story: "柳川の城下町風情が色濃く残る中心部に佇み、創業以来のおもてなしと地元食材を活かした郷土会席で親しまれる老舗旅館「柳川 白柳荘（はくりゅうそう）」。美しい日本庭園を囲むように配された純和風の客室は、畳の香りと木の温もりに満ち、どこか懐かしい安らぎを感じさせます。宿の自慢は大浴場に注がれる天然温泉。肌に優しいアルカリ性の湯は保温力が高く、冬の湯上がりも温もりが持続します。夕食は料理長が毎朝市場で厳選する有明海の海の幸や、滋味深い筑後平野の旬野菜を使った本格和会席。香ばしい香りが食欲をそそる元祖うなぎのせいろ蒸しはもちろん、冬に甘みを増す有明海の地魚や、柔らかな博多和牛の陶板焼きなど、伝統の味をゆったりと部屋食または個室で味わえる贅沢が魅力です。",
              roomTip: "庭園望む純和室。窓の外に広がる手入れの行き届いた日本庭園を眺め、静寂の中で畳に寝転びながら旅情に浸れる寛ぎの空間。",
              gourmetTip: "「初冬の白柳特選会席」。職人が焼き上げる特製うなぎのせいろ蒸し、博多和牛の陶板焼き、有明海産クチゾコ（舌平目）の煮付け、季節の前菜盛り合わせ。",
              highlights: [
                "城下町中心部に佇む純和風老舗旅館＆美しい日本庭園と美肌温泉で心解きほぐす休日",
                "熟練職人が焼き上げるうなぎせいろ蒸し＆博多和牛陶板焼きを個室や部屋食で満喫",
                "創業以来のおもてなしと温かい接客＆歴史散策や白秋生家めぐりの拠点に最適"
              ]
            },
            {
              id: 5,
              name: "柳川温泉ホテル　輝泉荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/73993/73993.jpg",
              rating: 4.36,
              reviews: 294,
              price: "¥6,600〜",
              access: "西鉄　柳川駅より車で５分/九州自動車道みやま柳川I..Cより車で15分、八女I..Cより20分",
              special: "柳川で数少ない天然温泉の宿。旬の食材を活かした料理と温泉を楽しみ、心ほどけるひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73993%2F73993.html",
              story: "柳川の奥座敷、のどかな田園と水路に囲まれた地に佇み、豊富に湧出する源泉掛け流しの天然温泉を誇る隠れた名宿「柳川温泉ホテル 輝泉荘（きせんそう）」。柳川エリアでは希少な自家源泉を有し、かすかに琥珀色を帯びたナトリウム-炭酸水素塩・塩化物泉は「美人の湯」「温まりの湯」として地元の人々にも深く愛されています。広々とした大浴場と露天風呂には新鮮な湯が贅沢に注がれ、湯船から立ち上る湯けむりと初冬の澄んだ夜空の星を眺めながら、心ゆくまで長湯を楽しめます。夕食は水郷柳川ならではの素朴で温かい郷土料理。ふっくらと蒸し上げられた名物うなぎのせいろ蒸しを中心に、有明海の珍味や旬魚のお造り、地元の契約農家から届く新鮮野菜をふんだんに使った手作り会席が、旅人の五臓六腑を温かく満たします。",
              roomTip: "和室10畳。窓から柳川ののどかな風景を望み、天然温泉の恵みを満喫した後にゴロリと寛げるアットホームな落ち着いたお部屋。",
              gourmetTip: "「源泉の宿・うなぎ満喫郷土会席」。出来立て熱々のうなぎのせいろ蒸し、有明海産海鮮のお造り、うなぎの肝吸い、旬の野菜の炊き合わせ、手作り和スイーツ。",
              highlights: [
                "自家源泉100%の琥珀色天然温泉＆のどかな水郷の奥座敷で味わう手作り郷土会席",
                "出来立て熱々のうなぎせいろ蒸しとうなぎ肝吸い＆有明海の冬の珍味を味わう素朴な美味",
                "地元に愛される源泉掛け流し美肌湯＆静かな環境で心身をリセットする湯治滞在"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬の柳川名物「こたつ舟」川下りの運航期間・料金・乗り場や予約方法は？",
    "a": "柳川の「こたつ舟」は、毎年12月1日から翌年2月末日まで運航される冬の風物詩です（11月中も天候や気温に応じて早めに運行される場合があります）。通常のどんこ舟に火鉢や豆炭を入れた温かい「こたつ」を設置し、足元をぬくぬく温めながら約4km・約60〜70分の掘割巡りを楽しめます。乗船料はお一人様大人1,800〜2,000円程度（運行会社により多少異なります）。西鉄柳川駅周辺に複数の乗船場（松月乗船場、城門観光、水郷柳川観光など）があり、定期便は事前予約なしでも順次乗船できますが、週末や休日は事前予約または午前中の早い時間の受付がスムーズです。"
  },
  {
    "q": "11月・12月の柳川の気候や気温、こたつ舟に乗る際のおすすめの服装・防寒対策は？",
    "a": "柳川の11月は最高気温16〜19℃、最低気温7〜10℃前後で、日中は過ごしやすい秋晴れの日が多いですが、12月に入ると最高気温11〜13℃、最低気温3〜5℃前後まで冷え込みます。こたつ舟は足元は豆炭こたつで大変暖かいものの、水面の上を進むため冷たい川風が吹き抜けます。上半身をしっかり防寒することが重要です。厚手のコートやダウンジャケット、首元を守るマフラー、手袋、ニット帽を着用しましょう。また、舟会社で膝掛け（ブランケット）を貸し出してくれることが多いですが、貼るカイロを用意しておくとさらに快適に楽しめます。"
  },
  {
    "q": "柳川名物「うなぎのせいろ蒸し」の特徴や由来、蒲焼きやうな重との違いは？",
    "a": "「うなぎのせいろ蒸し」は、柳川が発祥とされる江戸時代中期からの郷土料理です。一般的なうな重や蒲焼きとは異なり、秘伝のタレをまんべんなくまぶしたご飯の上に、香ばしく炭火焼きした鰻の蒲焼きと鮮やかな黄色の錦糸卵を乗せ、木製のせいろ（蒸籠）ごと蒸し上げます。蒸気でじっくり蒸されることで、鰻の身は驚くほどふっくら柔らかくなり、余分な脂が落ちてタレの旨味がご飯の芯まで均一に染み渡ります。最後まで熱々の状態でいただけるため、冬の寒い時期に最も美味しく感じられる極上の名物料理です。"
  },
  {
    "q": "福岡市内（天神・博多）から柳川温泉へのアクセス方法や所要時間は？",
    "a": "公共交通機関を利用する場合、西鉄福岡（天神）駅から西鉄天神大牟田線の「特急」に乗車すれば、乗り換えなし・わずか約48分で西鉄柳川駅に到着します。西鉄電車では、往復乗車券と川下り乗船券、名物せいろ蒸しの食事券がセットになったお得な観光きっぷ「太宰府・柳川観光きっぷ」「柳川特選うなぎきっぷ」なども発売されており大変人気です。車を利用する場合は、福岡都市高速から九州自動車道を経由し、「みやま柳川IC」を下りて一般道を約20分、福岡市内中心部から約1時間15分で到着します。"
  },
  {
    "q": "川下り以外に初冬の柳川観光で外せないおすすめスポットや散策ルートは？",
    "a": "まずは川下りの下船場近くに位置する「柳川藩主立花邸 御花」の見学が外せません。国名勝に指定された日本庭園「松涛園」や、明治43年に建てられた豪壮な西洋館、大名道具を展示する立花家史料館は見応え抜群です。続いて、詩人・北原白秋の生家であり造り酒屋の面影を残す「北原白秋生家・記念館」へ。白壁となまこ壁が美しい沖端（おきのはた）の古い町並みを散策し、柳川名物の「うなぎのせいろ蒸し」や有明海苔、銘菓「越後屋のあめ」などの食べ歩きやお土産選びを楽しめます。散策の後は、柳川温泉の足湯や大浴場で温まるのが最高のモデルコースです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.com/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.com/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.com/'
        },
        'headline': "【11・12月福岡・水郷柳川の冬の風物詩「こたつ舟」川下り】名物元祖うなぎのせいろ蒸し＆博多和牛会席を味わう城下町・掘割温泉名宿5選",
        'description': "11月から12月にかけて、北原白秋の故郷として知られる水郷・福岡県柳川は、どんこ舟に温かい火鉢やこたつを乗せた冬の風物詩「こたつ舟」が運航を開始し、1年で最も情緒豊かな季節を迎えます。掘割沿いの柳並木やなまこ壁の白壁土塀をぬくぬく温まりながら巡る川下り、旧柳川藩主立花家別邸「御花」の美しい松涛園、そして冷えた身体を芯から解きほぐす天然温泉。湯気を上げる名物「元祖うなぎのせいろ蒸し」の香ばしいタレの香り、有明海の冬の珍味、極上の博多和牛会席を味わう城下町の厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.com/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay',
        'datePublished': '2026-09-28T00:00:00+09:00',
        'dateModified': '2026-09-28T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.com/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.com/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay#destination',
        'name': '水郷柳川温泉',
        'description': '網の目のように掘割が巡る水郷の城下町。冬はどんこ舟にこたつを乗せた「こたつ舟」とうなぎのせいろ蒸しが名物。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 33.1633,
          'longitude': 130.4078
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.com/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      },
      {
        '@type': 'ItemList',
        '@id': 'https://croud-travel.com/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay#hotellist',
        'name': '福岡・水郷柳川温泉のおすすめ名宿5選',
        'itemListElement': hotels.map((h, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': h.name,
          'url': h.url
        }))
      }
    ]
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-teal-900 via-sky-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-teal-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">福岡・水郷柳川温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Flame className="w-4 h-4 text-amber-300" />
            11月・12月 冬のこたつ舟＆元祖うなぎせいろ蒸し特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月福岡・水郷柳川】冬の風物詩「こたつ舟」川下り
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              名物元祖うなぎのせいろ蒸し＆博多和牛会席を味わう城下町・掘割温泉名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、詩人・北原白秋の故郷として知られる水郷・福岡県柳川は、どんこ舟に温かい火鉢やこたつを乗せた冬の風物詩「こたつ舟」が運航を開始し、1年で最も情緒豊かな季節を迎えます。掘割沿いの柳並木やなまこ壁の白壁土塀をぬくぬく温まりながら巡る川下り、旧柳川藩主立花家別邸「御花」の美しい松涛園、そして冷えた身体を芯から解きほぐす天然温泉。湯気を上げる名物「元祖うなぎのせいろ蒸し」の香ばしいタレの香り、有明海の冬の珍味、極上の博多和牛会席を味わう城下町の厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-teal-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月下旬〜12月下旬（こたつ舟シーズン）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-teal-300" />
              <span>旬の味覚: 元祖うなぎのせいろ蒸し・博多和牛・有明海鮮</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>泉質: ナトリウム-炭酸水素塩・塩化物泉（美肌温まりの湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            水郷柳川の初冬の魅力
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-snug">
            ぬくもりのこたつ舟に揺られ、香ばしいうなぎの湯気に包まれる。冬の柳川だけの特別な旅情
          </h2>
          <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              福岡県南部に位置する水郷・柳川（やながわ）は、市内全域に全長約930kmにおよぶ網の目のような掘割（クリーク）が張り巡らされた日本屈指の水辺の城下町です。戦国大名・立花宗茂が築いた城下町の面影が今なお色濃く残り、白壁土塀や赤レンガ造りの並倉、水面に枝を垂らす柳並木が独特の情緒を醸し出します。春から秋の川下りも風情がありますが、柳川が最も温かな情緒に満たされるのは、肌寒さを感じる11月下旬から12月にかけての初冬の季節です。
            </p>
            <p>
              この時期の柳川を象徴するのが、冬の風物詩「こたつ舟」です。どんこ舟の船底に豆炭や火鉢を仕込んだ温かい「こたつ」を設置し、乗客は足元をぬくぬく温めながら、船頭さんが巧みに一本の竹竿で操る舟に揺られます。初冬の澄んだ水面を静かに滑り、時折船頭さんが口ずさむ北原白秋の童謡や舟歌が川面に響き渡るひとときは、まるで時が止まったかのような贅沢な安らぎを与えてくれます。
            </p>
            <p>
              川下りで水郷の風情を味わった後の楽しみは、江戸時代から受け継がれる柳川名物「うなぎのせいろ蒸し」です。タレを均一にまぶしたご飯の上に、炭火で香ばしく焼き上げた鰻の蒲焼きと黄金色の錦糸卵を敷き詰め、せいろごとふっくら蒸し上げた逸品。蓋を開けた瞬間に立ち上る甘辛く香ばしい湯気と、口の中でほろりと崩れる柔らかな鰻の旨味は、冷えた身体に染み渡る至福のご馳走です。散策の後は、肌をしっとり潤す柳川温泉の天然名湯に浸かり、城下町の温かいおもてなしに心癒やされる旅をお楽しみください。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              11月・12月の水郷柳川を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-slate-500">
              冬の城下町でしか体験できない、風情と美食の魅力
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                冬の風物詩「こたつ舟」どんこ舟川下り
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                豆炭こたつで足元ぬくぬく。初冬の静かな掘割、白壁土塀や赤レンガ並倉を船頭さんの舟歌とともに約70分巡る至福の舟遊び。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                熱々ふっくら元祖うなぎのせいろ蒸し
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                タレご飯と香ばしい蒲焼き、錦糸卵をせいろで蒸し上げる伝統の味。有明海の冬海鮮や極上博多和牛会席とともに堪能。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                水郷に湧く美肌の天然温泉＆大名屋敷
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                身体の芯まで温まる弱アルカリ性炭酸水素塩泉。国名勝「松涛園」の庭園ライトアップや白秋ゆかりの歴史散策を満喫。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-10">
          <div className="border-l-4 border-teal-800 pl-4 space-y-1">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-teal-800 uppercase">
              Selected Accommodations
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">
              福岡・水郷柳川温泉の城下町・掘割名宿厳選5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              楽天トラベル最新APIから取得した実在データに基づく、確かな評価と魅力を誇る厳選宿泊施設
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                id={'hotel-' + hotel.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-slate-100 overflow-hidden">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-teal-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      厳選名宿 第{hotel.id}位
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 text-white p-3 rounded-xl backdrop-blur-xs text-xs space-y-1">
                      <div className="flex items-center gap-1 text-teal-300 font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{hotel.access}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Information */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md">
                          {hotel.special}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-slate-400 text-xs font-normal">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                        <span className="font-bold text-teal-800 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-teal-600" />
                          おすすめの客室
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                        <span className="font-bold text-teal-800 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-teal-600" />
                          おすすめの料理プラン
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold text-slate-700 tracking-wider">
                        この宿の注目ポイント
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {hotel.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Booking Button */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-slate-400 block">参考宿泊料金（1名あたり / 税込）</span>
                        <span className="text-xl sm:text-2xl font-black text-slate-900">{hotel.price}</span>
                      </div>

                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                      >
                        <span>空室・料金プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Compass className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              初冬の水郷柳川を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-slate-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                西鉄電車で柳川へ＆冬の「こたつ舟」川下りと立花邸「御花」見学
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                西鉄福岡（天神）駅から特急電車で約48分、西鉄柳川駅に到着。駅前の観光案内所で「こたつ舟」の手続きを行い、松月乗船場からどんこ舟へ。温かい豆炭こたつに足を入れてぬくぬく温まりながら、船頭さんの巧みな竿さばきと舟歌を聴きつつ約70分の掘割巡り。白壁土塀や並倉を水面から眺めた後、沖端乗船場で下船。旧柳川藩主立花家別邸「御花」を見学し、国名勝・松涛園の冬景色を堪能します。夕方に宿へチェックインし、弱アルカリ天然温泉で温まった後、名物元祖うなぎのせいろ蒸しと博多和牛会席を味わいます。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                掘割の朝霧散策・北原白秋生家記念館と有明海苔のお土産選び
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                朝は掘割から立ち上る川霧を眺めながら朝風呂を満喫。有明海産の初摘み海苔や地元食材の朝食をいただいた後、10:00にチェックアウト。詩人・北原白秋の生家である造り酒屋の面影を残す記念館を訪れ、沖端のレトロな町並みを散策します。名物の柳川せんべいや有明海の珍味、出来立ての温かいうなぎ弁当をお土産に購入。午後は西鉄電車で太宰府天満宮へ立ち寄るか、福岡市内へ戻って博多グルメを堪能する充実の九州旅です。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              水郷柳川の初冬グルメ完全ガイド！うなぎ・有明海鮮・博多和牛
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-300" />
                元祖うなぎのせいろ蒸し
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                秘伝のタレを絡めたご飯の上に炭火蒲焼きと錦糸卵を敷き詰め、せいろごと蒸し上げる江戸時代からの郷土料理。余分な脂が落ち、ふっくら極上の柔らかさに仕上がった熱々の鰻は、冬にこそ味わいたい至高の逸品です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-orange-300" />
                有明海の冬海鮮＆タイラギ貝柱
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                日本一の干満差を誇る有明海から届く冬の海の幸。甘みたっぷりの高級タイラギ貝柱の刺身や塩焼き、クチゾコ（舌平目）の煮付け、香ばしいムツゴロウの蒲焼きなど、ここでしか出逢えない個性豊かな珍味が揃います。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-rose-300" />
                極上博多和牛＆八女茶・あまおう
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                福岡県が誇るブランド牛「博多和牛」の陶板ステーキかすき焼き小鍋。柔らかくジューシーな赤身と脂の甘みが絶品です。食後には近隣の銘茶「八女茶」や、初冬から旬を迎える「あまおう苺」のスイーツが華を添えます。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            11月・12月の水郷柳川温泉 交通アクセス＆散策のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-600" />
                福岡市内からのアクセス＆お得なきっぷ
              </h3>
              <p>
                西鉄福岡（天神）駅から西鉄天神大牟田線の特急電車に乗車すれば、乗り換えなし・約48分で西鉄柳川駅に到着します。電車往復割引券、川下り乗船券、せいろ蒸し食事券がセットになった「柳川特選うなぎきっぷ」が非常に便利でお得です。
              </p>
              <p>
                車の場合は、九州自動車道のみやま柳川ICから国道443号線バイパス経由で約20分。福岡空港や博多駅周辺からも高速利用で約1時間15分程度と好アクセスです。
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-600" />
                冬の川下りの防寒対策とおすすめ時間帯
              </h3>
              <p>
                12月の柳川は最高気温11〜13℃、最低気温3〜5℃前後です。こたつ舟は足元が温かいですが、川面の風が冷たいため、風を通さない厚手のダウンコート、手袋、マフラーを着用してください。
              </p>
              <p>
                川下りは日中の最も日差しが暖かい11:00〜14:00頃が特におすすめ。下船場（沖端地区）の近くには立花邸御花や老舗うなぎ店が集中しており、川下りの後に熱々のうなぎのせいろ蒸しを味わうルートが完璧な流れです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            初冬の水郷柳川温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-teal-700 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-teal-300" />
              あわせて読みたい九州の冬温泉・旬グルメ特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              冬の味覚や雪見露天、温泉街散策を満喫する九州各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">福岡・原鶴温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                原鶴温泉のダブル美肌の湯と博多和牛会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                筑後川の雄大な流れを望む名湯と、とろける博多和牛を堪能。
              </p>
            </Link>

            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">佐賀・武雄温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                武雄温泉の朱塗り楼門名湯と佐賀牛ステーキ会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                1300年の歴史を誇る美肌名湯と極上の佐賀牛を満喫。
              </p>
            </Link>

            <Link 
              href="/winter-kumamoto-hitoyoshi-onsen-kumagawa-mist-wagyu-ayu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">熊本・人吉温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                人吉温泉の球磨川朝霧絶景と落ち鮎・球磨牛会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                朝霧の都・人吉の幻想的な城下町風景と相良700年の名湯巡り。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
