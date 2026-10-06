import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月庄内あつみ温泉】名物寒鱈汁！名宿5選',
  description: '11月から12月にかけて、山形県庄内地方の南端に位置する「あつみ温泉（温海温泉）」は、日本海の潮風と出羽の山並みが交錯する渓谷に位置し。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: 'あつみ温泉 宿泊, 温海温泉 萬国屋, たちばなや, 高見屋別邸 久遠, 東屋旅館, かしわや旅館, 寒鱈汁, 庄内牛, 紅ズワイガニ, 温海川 雪見露天, 11月 12月 山形旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay/"
  },
  openGraph: {
    title: '【11・12月庄内あつみ温泉】名物寒鱈汁！名宿5選',
    description: '11月から12月にかけて、山形県庄内地方の南端に位置する「あつみ温泉（温海温泉）」は、日本海の潮風と出羽の山並みが交錯する渓谷に位置し。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '山形庄内あつみ温泉の雪景色と名湯老舗旅館'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月山形・庄内あつみ温泉の開湯1200年名湯と冬の日本海味覚】名物寒鱈汁＆紅ズワイガニ・極上庄内牛・温海川雪景色を愛でる老舗名宿5選",
    description: "11月から12月にかけて、山形県庄内地方の南端に位置する「あつみ温泉（温海温泉）」は、日本海の潮風と出羽の山並みが交錯する渓谷に位置し、初雪の静寂とともに冬の味覚の真髄が幕を開けます。開湯約1200年の歴史を誇り、温海川の清流沿いに風情ある木造建築や名旅館が立ち並ぶ温泉街。初冬の日本海・庄内浜で水揚げされる脂の乗った「寒鱈（かんだら）」のどんがら汁、甘み濃厚な紅ズワイガニ、きめ細やかな霜降りの「庄内牛」、赤紫色の伝統野菜「温海かぶ」。塩化物・硫酸塩泉のまろやかな湯が芯まで身体を温め、湯冷めを防ぎます。日本庭園や露天風呂に舞い落ちる雪を眺めながら極上の郷土料理に舌鼓を打つ、厳選の名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterYamagataAtsumiPage() {
  const hotels = [
            {
              id: 1,
              name: "温海温泉　萬国屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12577/12577.jpg",
              rating: 4.58,
              reviews: 2683,
              price: "¥11,000〜",
              access: "日本海東北自動車道 あつみ温泉ICから車5分/ＪＲ羽越本線 あつみ温泉駅からタクシー５分/庄内空港から車40分",
              special: "山里のどこか懐かしい風情とおもてなしの心に癒される老舗旅館。所々に飾られた生花が心を和ませてくれます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12577%2F12577.html",
              story: "創業三百有余年の歴史を紡ぎ、「プロが選ぶ日本のホテル・旅館100選」において常に上位に名を連ねる東北屈指の老舗純和風旅館「萬国屋（ばんこくや）」。温海川の畔に佇む館内は、数寄屋造りの贅を尽くした空間美と、東北の素朴で温かなおもてなしの心が隅々まで行き届いています。自慢の大浴場「桃里の湯」や庭園露天風呂「野天風呂」には、開湯1200年の名湯が豊富に注がれ、肌に吸い付くような柔らかな湯ざわりと檜の香りが旅の疲れを解きほぐします。初雪が舞う11月下旬から12月には、露天風呂の木立や岩肌が白く染まり、湯煙の向こうに幻想的な雪見風呂が広がります。夕食は食の都・庄内が誇る極上の旬素材を惜しみなく使った会席料理。初冬の日本海から直送される鮮魚のお造り、とろける甘みの庄内牛ステーキ、そして旨味を凝縮させた郷土の鍋料理。洗練された伝統の技と美空間が、忘れがたい冬の贅沢を叶えてくれます。",
              roomTip: "東館または本館の温海川を望む純和風客室。大きな窓越しに雪化粧をまとった温海川の渓流と対岸の山並みが一望でき、川のせせらぎを聞きながら静寂の時間を過ごせます。",
              gourmetTip: "「冬の庄内美食会席」。庄内浜直送の寒平目や紅ズワイガニの旬刺身、庄内牛の陶板焼き、冬限定の寒鱈どんがら鍋仕立て、温海かぶの甘酢漬け。",
              highlights: [
                "創業300余年の格式とプロ百選常連のおもてなし＆庭園野天風呂で愉しむ雪見風呂",
                "庄内浜直送寒平目や紅ズワイガニ＆きめ細やかな霜降り庄内牛ステーキの贅沢会席",
                "純和風数寄屋造りの贅沢な空間＆記念日や三世代旅行に選ばれ続ける東北屈指の名宿"
              ]
            },
            {
              id: 2,
              name: "温海温泉　たちばなや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13821/13821.jpg",
              rating: 4.44,
              reviews: 1200,
              price: "¥5,280〜",
              access: "日本海東北自動車道中条ＩＣから約100分　ＪＲあつみ温泉駅からタクシ－で約５分",
              special: "創業370年の歴史が織りなす「たちばなや」雅な日本庭園と庄内の旬の美食が、心に残る特別な時間をお約束",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13821%2F13821.html",
              story: "温海川のせせらぎに寄り添うように広がる三千坪の池泉回遊式日本庭園を抱く、創業三百七十余年の名門旅館「たちばなや」。宿の象徴である見事な庭園には色鮮やかな錦鯉が優雅に泳ぎ、11月から12月にかけては紅葉の残照から白銀の初雪へと移ろう幽玄な庭園絵巻が窓一面に広がります。開放感あふれる大浴場と露天風呂は、庭園の緑と池を間近に臨む設計となっており、雪見露天の情緒は息をのむ美しさ。さらりとしていながら湯上がり後もポカポカとした温もりが長く持続するナトリウム・カルシウム-塩化物・硫酸塩泉の泉質は、冷え込む冬の庄内旅に最高の癒やしをもたらします。料理は庄内の旬の恵みを五感で味わう本格和会席。寒鱈や紅ズワイガニ、日本海の旬魚はもちろん、上質な脂と赤身の旨味が際立つ庄内牛のしゃぶしゃぶやすき焼きなど、一品一品に料理人の繊細な技巧が光ります。",
              roomTip: "庭園側に面した露天風呂付き客室「風の杜」または和洋モダン室。目の前に雪の日本庭園が広がり、誰にも邪魔されずに客室の湯舟から雪景色を独占できます。",
              gourmetTip: "「たちばなや冬の極み膳」。脂の乗った日本海の鮮魚盛り合わせ、極上庄内牛の出汁しゃぶしゃぶ、庄内浜産紅ズワイガニの蒸し物、香り高い山形県産つや姫の釜炊きご飯。",
              highlights: [
                "3000坪の池泉回遊式庭園の初雪絵巻＆庭園を一望する開放感あふれる雪見露天風呂",
                "冬の寒鱈や紅ズワイガニの旬味覚＆庄内牛出汁しゃぶしゃぶとつや姫の釜炊きご飯",
                "優雅な錦鯉が泳ぐ雪化粧の日本庭園＆大切な人との温泉旅や大人のご褒美旅行に最適"
              ]
            },
            {
              id: 3,
              name: "高見屋別邸　久遠　－ＫＵＯＮ－",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/135915/135915.jpg",
              rating: 3.91,
              reviews: 1301,
              price: "¥10,890〜",
              access: "あつみ温泉駅からお車又は送迎　※送迎希望の場合は事前に宿に連絡が必要となります",
              special: "～名湯一門　高見屋～和の質感とモダン空間が広がるデザイナーズ旅館。食材豊富な庄内の食を堪能。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135915%2F135915.html",
              story: "山形の老舗名門「高見屋グループ」がプロデュースし、モダンな和のデザインと伝統旅館の寛ぎを融合させたスタイリッシュな温泉リゾート「高見屋別邸 久遠（くおん）」。館内は落ち着いた木目と間接照明が織りなす大人の隠れ家空間が広がり、あつみ温泉の新たな魅力を発信しています。大浴場や開放的な庭園露天風呂には、あつみ温泉の源泉が掛け流しで注がれ、初冬の冷気の中で湯煙に包まれながら贅沢な湯浴みが堪能できます。浴槽の縁に積もる初雪と湯のコントラストが旅情を一層高めます。料理はオープンキッチンのあるダイニングなどで提供される創作和食会席。伝統的な庄内料理の真髄を受け継ぎつつ、現代的な盛り付けと工夫を加えた料理は見た目にも華やか。日本海直送の旬の地魚やブランド和牛のグリルなど、山形・庄内の食の豊かさを存分に体感できる宿です。",
              roomTip: "スーペリア和洋室またはモダンベッドルーム。シモンズ社製ベッドを備え、和の落ち着きと現代的な快適性を両立させた寛ぎのプライベート空間。",
              gourmetTip: "「久遠特製・冬の庄内味覚創作会席」。庄内浜の旬魚お造り、庄内牛の石焼きステーキ、季節の野菜の天ぷら、地酒とのペアリングを楽しめる前菜盛り合わせ。",
              highlights: [
                "高見屋グループのモダン和リゾート＆源泉掛け流しの湯とオープンキッチン創作会席",
                "日本海旬魚のお造り盛り合わせ＆庄内牛石焼きステーキと厳選地酒ペアリング",
                "シモンズベッド完備の快適な和洋室＆カップルや女子旅に人気の洗練された空間"
              ]
            },
            {
              id: 4,
              name: "温海温泉　川端の宿　東屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31241/31241.jpg",
              rating: 4.27,
              reviews: 96,
              price: "¥8,800〜",
              access: "JR羽越線　あつみ温泉駅よりタクシーで約５分・バスで約８分／国道７号線　あつみ温泉入り口より約５分／庄内空港より５０分",
              special: "地元の素材を大切にした御料理と家庭的な雰囲気でおもてなしいたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31241%2F31241.html",
              story: "温海川の川畔に佇み、木の温もりと家庭的な温かなもてなしが旅人の心を芯から和ませる純和風宿「川端の宿 東屋旅館（あずまやりょかん）」。全十数室の落ち着いた規模感だからこそ行き届く細やかな気配りと、気取らない居心地の良さが多くのリピーターに愛され続けています。宿自慢の天然温泉は、敷地内の自家源泉から引く新鮮な湯を贅沢に掛け流しで使用。湯口から注がれる無色透明の澄んだ湯は、肌あたりが非常に柔らかく、身体の芯までじっくりと温めてくれます。冬の冷え切った身体を温海の名湯で解き放つ至福のひととき。夕食は庄内浜の定置網や底引き網で上がったばかりの獲れたて日本海鮮魚を中心とした手作りの郷土会席。冬本番を迎える寒鱈の煮付けや汁物、地元の契約農家が丹精込めて育てた旬野菜など、素朴でありながら滋味深い本物の庄内の家庭料理の贅を堪能できます。",
              roomTip: "温海川に面した純和風客室。静けさの中に川のせせらぎが響き、雪が舞う温泉街の川沿いの情景を眺めながらどこか懐かしい安らぎに包まれます。",
              gourmetTip: "「東屋特製・庄内浜地魚と郷土膳」。庄内浜獲れたて地魚の刺身盛り合わせ、冬の寒鱈汁、庄内産豚や和牛の小鍋立て、温海かぶの自家製漬物。",
              highlights: [
                "温海川の川畔に佇む全十数室の落ち着き＆自家源泉掛け流しと素朴な庄内手作り郷土膳",
                "水揚げされたばかりの寒鱈鍋仕立て＆獲れたて旬魚刺身と温海かぶの自家製漬物",
                "家族経営ならではの温かなもてなし＆静かに川のせせらぎに浸る癒やしの湯治滞在"
              ]
            },
            {
              id: 5,
              name: "温海温泉　かしわや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54267/54267.jpg",
              rating: 4.20,
              reviews: 167,
              price: "¥7,500〜",
              access: "羽越本線　あつみ温泉駅から車で６分",
              special: "素材が良いから料理が美味しい。庄内浜直送の新鮮な魚介類を使用してます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54267%2F54267.html",
              story: "温海温泉街の中心、歴史ある温泉街の面影を色濃く残す木造三階建ての風格ある佇まいが目を引く隠れ家旅館「かしわや旅館」。昔ながらの湯治場情緒と心温まるもてなしが息づくこの宿は、どこか昭和の時代にタイムスリップしたかのような郷愁を誘います。館内のお風呂には良質なあつみ温泉の源泉が常に満たされ、加水なしの贅沢な湯浴みが楽しめます。湯舟から立ち上る湯煙とともに、塩化物泉特有の保湿効果が肌をしっとりと包み込み、湯上がり後もポカポカとした暖かさが長時間持続します。夕食は庄内浜でその日に競り落とされたばかりの新鮮な海の幸をふんだんに盛り込んだ海鮮郷土料理。派手な演出こそありませんが、素材本来の旨味を最大限に引き出した煮魚や焼き魚、カニ料理は魚好きの舌を唸らせます。一人旅や静かに温泉を満喫したい大人の冬旅に最適な一軒です。",
              roomTip: "昔ながらの趣を残す純和風客室。畳の香りと木の温もりに包まれ、温泉街の落ち着いた情緒を感じながら読書や湯治気分でゆったりと過ごせます。",
              gourmetTip: "「庄内地魚三昧・冬の港町膳」。日本海の寒魚姿造り、冬の寒鱈鍋、紅ズワイガニ、旬の焼き魚、地元庄内米の炊きたてご飯と郷土の味噌汁。",
              highlights: [
                "木造三階建ての風格ある湯治風情＆加水なし天然温泉と庄内浜直送の寒魚手料理",
                "脂の乗った日本海寒魚姿造り＆郷土の温もりあふれる寒鱈どんがら鍋と地魚料理",
                "昭和レトロな湯治情緒が漂う空間＆気兼ねなく楽しめる一人旅や温泉ファンにおすすめ"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月のあつみ温泉の気候や積雪状況、初雪の時期はいつ頃ですか？",
    "a": "あつみ温泉は山形県沿岸の庄内地方南部に位置し、日本海側気候の影響を受けます。11月上旬から中旬は晩秋の肌寒さ（最高気温12〜16℃、最低気温4〜8℃）ですが、日本海からの強い季節風が吹き始めます。例年11月下旬から12月上旬にかけて初雪が観測され、12月中旬以降は本格的な積雪期に入ります。12月の気温は最高5〜8℃、最低-2〜3℃程度まで冷え込みます。海沿いのため豪雪地帯の内陸山間部（肘折や月山）ほどの大雪にはなりにくいものの、雪が舞う日本海特有の風情が広がります。厚手の防寒コート、滑り止め付きの防水冬靴、マフラーや手袋の携行が必須です。"
  },
  {
    "q": "冬のあつみ温泉へのアクセス方法と雪道運転の注意点は？スタッドレスタイヤは必要ですか？",
    "a": "車を利用する場合、日本海東北自動車道の「あつみ温泉IC」から県道経由で約5分と高速道路からのアクセスは非常に良好です。ただし、11月下旬以降は路面凍結や積雪が発生するため、スタッドレスタイヤの装着が絶対に不可欠です。特に新潟・鶴岡方面からの国道7号線は海風による横風や吹雪で視界が悪化することがあるため、スピードを控えて車間距離を十分に確保してください。電車利用の場合はJR羽越本線「あつみ温泉駅」が最寄りとなり、特急いなほ号が停車します。駅からは旅館街まで路線バスまたはタクシーで約5分、多くの旅館が無料送迎（事前予約制）を行っているため冬道運転が不安な方には特急列車の利用が最も安心です。"
  },
  {
    "q": "あつみ温泉で11月・12月に絶対に味わいたい冬の名物グルメは何ですか？",
    "a": "冬のあつみ温泉・庄内地方を代表する最大の味覚は「寒鱈（かんだら）」です。初冬の荒波の日本海で獲れる真鱈は産卵前で脂が乗り切り、身だけでなく濃厚な肝（アブラ）や白子（タダミ）、アラまで余すところなく味噌仕立ての汁で豪快に煮込む伝統の「寒鱈汁（どんがら汁）」は絶品です。さらに、庄内浜の底引き網で水揚げされる甘みの強い「紅ズワイガニ」、きめ細かな肉質と上質な脂が特徴の銘柄牛「庄内牛」、鶴岡市一霞（ひとかすみ）地区の焼畑農法で育つ伝統野菜「温海かぶ」の甘酢漬け、山形県産米「つや姫」や庄内の銘酒（出羽桜、初孫、大山など）が揃い、冬の美食旅に最高の食体験を提供します。"
  },
  {
    "q": "あつみ温泉の泉質や効能、開湯の歴史について教えてください。",
    "a": "あつみ温泉は、平安時代の弘法大師（空海）が夢のお告げによって発見した、あるいは傷を負った一羽の鶴が葦の茂る温泉で傷を癒やしていたところを木こりが見つけたという伝説が残る、開湯約1200年の古湯です。泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（弱アルカリ性・高温泉）」で、毎分千リットルを超える豊かな湧出量を誇ります。塩分成分が肌に薄いヴェールを作って水分の蒸発を防ぐため抜群の保湿・保温効果があり、「温まりの湯」「美肌の湯」として古くから親しまれています。切り傷、やけど、慢性皮膚病、冷え性、関節痛などに優れた効能を発揮します。"
  },
  {
    "q": "あつみ温泉周辺の初冬の見どころや散策スポットはありますか？",
    "a": "温泉街の中央を流れる温海川沿いには風情ある遊歩道が整備されており、3箇所の足湯（あんべ湯、もっけ湯など）や共同浴場（正面湯など）が点在し、湯けむりを感じながらの散策が楽しめます。また、朝6時頃から開かれる「あつみ温泉朝市」では、地元のおばあちゃんたちが持ち寄る自家製温海かぶの甘酢漬けや干物、栃餅などが並び、温かな交流が魅力です。少し足を延ばせば、クラゲの展示種類数世界一を誇る「鶴岡市立加茂水族館（クラゲドリーム館）」や、ミシュラン・グリーンガイド三つ星に輝く出羽三山神社・羽黒山の杉並木があり、初冬の澄み切った空気の中で神秘的な東北の文化と自然を満喫できます。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月山形・庄内あつみ温泉の開湯1200年名湯と冬の日本海味覚】名物寒鱈汁＆紅ズワイガニ・極上庄内牛・温海川雪景色を愛でる老舗名宿5選",
        'description': "11月から12月にかけて、山形県庄内地方の南端に位置する「あつみ温泉（温海温泉）」は、日本海の潮風と出羽の山並みが交錯する渓谷に位置し、初雪の静寂とともに冬の味覚の真髄が幕を開けます。開湯約1200年の歴史を誇り、温海川の清流沿いに風情ある木造建築や名旅館が立ち並ぶ温泉街。初冬の日本海・庄内浜で水揚げされる脂の乗った「寒鱈（かんだら）」のどんがら汁、甘み濃厚な紅ズワイガニ、きめ細やかな霜降りの「庄内牛」、赤紫色の伝統野菜「温海かぶ」。塩化物・硫酸塩泉のまろやかな湯が芯まで身体を温め、湯冷めを防ぎます。日本庭園や露天風呂に舞い落ちる雪を眺めながら極上の郷土料理に舌鼓を打つ、厳選の名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay',
        'datePublished': '2026-09-29T00:00:00+09:00',
        'dateModified': '2026-09-29T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay#destination',
        'name': '庄内・あつみ温泉（温海温泉）',
        'description': '山形県鶴岡市に位置する開湯約1200年の名湯。温海川沿いの雪景色と日本海の寒鱈、紅ズワイガニ、庄内牛が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 38.6214,
          'longitude': 139.5992
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay#hotellist',
        'name': '山形あつみ温泉のおすすめ名宿5選',
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
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-slate-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-900 via-stone-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-sky-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">山形・あつみ温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-sky-300" />
            11月・12月 冬の日本海味覚＆開湯1200年名湯特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月山形・庄内あつみ温泉】開湯1200年名湯と冬の日本海味覚
            <span className="block text-sky-300 text-lg sm:text-2xl mt-3 font-normal">
              名物寒鱈汁＆紅ズワイガニ・極上庄内牛・温海川雪景色を愛でる老舗名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、山形県庄内地方の南端に位置する「あつみ温泉（温海温泉）」は、日本海の潮風と出羽の山並みが交錯する渓谷に位置し、初雪の静寂とともに冬の味覚の真髄が幕を開けます。開湯約1200年の歴史を誇り、温海川の清流沿いに風情ある木造建築や名旅館が立ち並ぶ温泉街。初冬の日本海・庄内浜で水揚げされる脂の乗った「寒鱈（かんだら）」のどんがら汁、甘み濃厚な紅ズワイガニ、きめ細やかな霜降りの「庄内牛」、赤紫色の伝統野菜「温海かぶ」。塩化物・硫酸塩泉のまろやかな湯が芯まで身体を温め、湯冷めを防ぎます。日本庭園や露天風呂に舞い落ちる雪を眺めながら極上の郷土料理に舌鼓を打つ、厳選の名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-sky-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（寒鱈解禁と雪見露天の始まり）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-sky-300" />
              <span>旬の味覚: 庄内浜寒鱈どんがら汁・紅ズワイガニ・庄内牛・温海かぶ</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>泉質: ナトリウム・カルシウム-塩化物・硫酸塩泉（保温持続・美肌の湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-700 text-sm font-bold bg-sky-50 px-3 py-1 rounded-full">
            <Waves className="w-4 h-4" />
            初冬の庄内あつみ温泉の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
            白銀の温海川渓谷と湯けむり、日本海の荒波がもたらす冬の至高の恵み
          </h2>
          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              日本海沿岸の羽越本線に揺られ、あつみ温泉駅に降り立つと、潮の香りと澄んだ山奥の冷気が心地よく頬を撫でます。駅から車で約5分、温海川に沿って開けたあつみ温泉街は、山懐に抱かれた静寂な温泉地。春は川沿いの桜並木、夏は鮎釣り、秋は鮭の遡上で賑わいますが、11月から12月にかけて訪れる「初冬」こそが、温泉好きと美食家を最も虜にする季節です。
            </p>
            <p>
              11月下旬になると、日本海から吹き寄せる季節風とともに初雪が舞い降り、老舗旅館の瓦屋根や温海川の渓流岩をうっすらと白く染め上げます。川面からは湯けむりとともに川霧が立ち上り、水墨画のような幽玄な世界が現出します。あつみ温泉の湯は、約1200年前に弘法大師が開いたとされる塩化物・硫酸塩泉。湯船に身を沈めると、肌にじんわりと染み渡るような豊かな熱量が全身を包み込み、出た後も湯冷め知らずの心地よいポカポカ感が続きます。
            </p>
            <p>
              そして夕暮れ時、宿の膳を飾るのは「食の都・庄内」の真骨頂。初冬の荒海で育ち丸々と太った「寒鱈（真鱈）」の肝と白子を煮込んだ熱々の寒鱈汁、庄内浜で水揚げされる紅ズワイガニの繊細な甘み、そして出羽の豊かな大地で育まれた庄内牛の芳醇な霜降り。雪見の露天風呂で温まり、滋味深い日本海の冬味覚を地酒とともに味わう贅沢は、日々の喧騒を忘れさせてくれる至福のひとときです。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月のあつみ温泉を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-stone-500">
              日本海の寒魚と開湯1200年の名湯、雪景色を五感で楽しむ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                冬の庄内浜味覚「寒鱈汁＆紅ズワイガニ」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                初冬の荒海で獲れた真鱈の身、白子、肝を豪快に煮込む名物どんがら汁。甘み濃厚な紅ズワイガニやきめ細やかな霜降り庄内牛の贅沢会席。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                開湯1200年の温まり名湯と雪見露天
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                弘法大師が開いたと伝わる良質な塩化物・硫酸塩泉。塩分ヴェールが熱を逃がさず、温海川渓谷に舞う初雪を眺める至福の雪見風呂。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Footprints className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                川沿い足湯散策＆あつみ温泉朝市
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                温海川沿いの遊歩道に点在する無料足湯。毎朝開かれる歴史ある朝市で地元のおばあちゃん手作りの温海かぶ甘酢漬けや栃餅との出会い。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              あつみ温泉で11月・12月に泊まりたい名湯宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              楽天トラベルAPIより最新の宿データ・宿泊プラン・評価情報を取得して掲載しています
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-stone-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-sky-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
                      <span>第{h.id}選</span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-amber-500 font-bold text-sm bg-amber-50 px-2.5 py-1 rounded-md">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            {h.rating}
                          </span>
                          <span className="text-xs text-stone-500">
                            ({h.reviews.toLocaleString()}件のクチコミ)
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-stone-400 block">参考宿泊料金（1名）</span>
                          <span className="text-base sm:text-lg font-bold text-sky-900">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-stone-900 hover:text-sky-800 transition">
                        <a href={h.url} target="_blank" rel="noopener noreferrer">
                          {h.name}
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Sparkle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-stone-800">おすすめの客室・滞在スタイル: </span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-stone-800">冬の極上グルメ体験: </span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-stone-700">宿の注目ポイント:</div>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-stone-600">
                        {h.highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 w-full sm:w-auto">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{h.access.slice(0, 38)}…</span>
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-800 hover:bg-sky-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-xs hover:shadow-md shrink-0"
                      >
                        <span>空室・料金プランを見る</span>
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
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <Compass className="w-6 h-6 text-sky-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              初冬の庄内あつみ温泉を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-stone-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">1日目</span>
                羽越本線特急で日本海冬景色＆温海川散策と名物寒鱈汁・雪見露天
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                新潟駅または酒田・鶴岡駅からJR羽越本線特急「いなほ」に乗車。車窓右手に広がる荒々しくも美しい日本海の白波を眺めながら、あつみ温泉駅へ。駅前から送迎バスまたはタクシーで約5分の温泉街へ向かいます。まずは温海川沿いの遊歩道を散策し、川沿いの足湯「あんべ湯」で川霧を眺めながら手足を温めます。15:00に老舗旅館へチェックイン。開湯1200年の塩化物泉に浸かり、初雪に彩られた日本庭園や渓谷の岩肌を眺める雪見露天を満喫します。夜は庄内浜の冬の王様「寒鱈どんがら汁」をはじめ、甘みたっぷりの紅ズワイガニ、霜降り庄内牛ステーキを、山形の銘酒「初孫」や「出羽桜」とともに贅沢に味わいます。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">2日目</span>
                あつみ温泉名物朝市・加茂水族館クラゲ鑑賞と鶴岡の食文化探訪
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                早朝は温海川沿いで毎朝開催される「あつみ温泉朝市」へ。地元のおばあちゃん手作りの温海かぶ甘酢漬けや素朴な栃餅、干物をお土産に購入します。宿に戻ってつや姫の炊きたてご飯と朝風呂を楽しみ、10:00にチェックアウト。路線バスまたは車で鶴岡方面へ北上し、世界屈指のクラゲ展示を誇る「鶴岡市立加茂水族館」へ。幻想的なクラゲドリームシアターを鑑賞した後は、庄内観光物産館で寒鱈や日本海の海の幸を堪能し、鶴岡駅より特急列車で充実した帰路に就きます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Gourmet Section */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Fish className="w-4 h-4" />
            庄内あつみ温泉 冬の味覚図鑑
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            日本海の荒波が育む「寒鱈」「紅ズワイガニ」と「庄内牛」の美食世界
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-stone-200 text-xs sm:text-sm leading-relaxed">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-sky-400" />
                庄内名物「寒鱈どんがら汁」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                12月に水揚げの最盛期を迎える日本海の寒鱈（真鱈）。頭から骨、内臓（どんがら）まで豪快に鍋に放り込み、濃厚な白子（タダミ）や肝（アブラ）を溶かした味噌仕立ての汁は、初冬の寒風で冷えた身体を底から温める庄内伝統のソウルフードです。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Waves className="w-4 h-4 text-sky-400" />
                庄内浜直送「紅ズワイガニ」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                水深数百メートルの深海から水揚げされる庄内浜の紅ズワイガニ。みずみずしく繊細な身肉には上品な甘みが凝縮されており、甲羅に詰まった濃厚な蟹味噌とともに地元の旅館で茹でたて・蒸したてを味わうのは冬ならではの至福です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-sky-400" />
                出羽三山の名水が育む「庄内牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                鳥海山や月山など出羽連峰の清らかな伏流水と良質な牧草で手塩にかけて肥育されるブランド黒毛和牛「庄内牛」。融点の低い上質なサシと赤身の深いコクが調和し、ステーキや陶板焼き、出汁しゃぶしゃぶで口に運ぶと上品にとろけます。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-800 text-sm font-bold bg-sky-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月のあつみ温泉 交通アクセス＆冬道運転のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-700" />
                車・電車でのアクセス方法
              </h3>
              <p>
                車の場合は、日本海東北自動車道あつみ温泉ICより県道経由で約5分です。11月下旬以降は朝晩の路面凍結や積雪が発生するため、スタッドレスタイヤの装着が必須となります。
              </p>
              <p>
                鉄道利用の場合は、JR羽越本線あつみ温泉駅より路線バスまたはタクシーで約5分。各旅館の無料送迎バス（事前予約制）を利用すれば、雪道運転の心配なく安全快適に到着できます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-sky-700" />
                気候と防寒・散策時の注意事項
              </h3>
              <p>
                12月のあつみ温泉は日本海からの強い季節風が吹き、体感温度は氷点下近くまで下がります。防風・防水性のあるダウンジャケット、マフラー、手袋をご用意ください。
              </p>
              <p>
                温海川沿いの遊歩道や温泉街の石畳は日陰に雪や凍結が残りやすいため、滑りにくい冬用ブーツでの散策を推奨します。足湯巡りを楽しむ際は足を拭くタオルの持参が便利です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-800 text-sm font-bold bg-sky-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の山形庄内あつみ温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-sky-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-sky-300" />
              あわせて読みたい東北・山形の雪見温泉・冬グルメ特集
            </h3>
            <p className="text-xs sm:text-sm text-sky-200">
              冬の雪景色や名湯、極上和牛を堪能する山形・東北各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-sky-300 bg-sky-400/20 px-2 py-0.5 rounded-full inline-block">山形・銀山温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-sky-200 transition line-clamp-2">
                銀山温泉の大正ロマン雪景色とガス灯の情景
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                銀世界に包まれる木造多層建築と名湯、尾花沢牛を味わう冬の憧れ滞在。
              </p>
            </Link>

            <Link 
              href="/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-sky-300 bg-sky-400/20 px-2 py-0.5 rounded-full inline-block">山形・天童温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-sky-200 transition line-clamp-2">
                天童温泉の初冬ラ・フランス会席と山形牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                将棋の街の風情と果樹王国の冬の味覚、広々とした美肌温泉を満喫。
              </p>
            </Link>

            <Link 
              href="/winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-sky-300 bg-sky-400/20 px-2 py-0.5 rounded-full inline-block">山形・蔵王温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-sky-200 transition line-clamp-2">
                蔵王温泉の強酸性白濁硫黄泉と樹氷ライトアップ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                白銀のスノーモンスターと日本屈指の強酸性泉、山形牛すき焼きの極楽旅。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
