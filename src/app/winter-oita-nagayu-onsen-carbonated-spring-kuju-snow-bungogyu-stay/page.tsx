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
  title: '大分・竹田長湯温泉で過ごす冬の旅（11・12月）！名物清流エノハ料理！名宿5選',
  description: '11月から12月にかけて、大分県竹田市の芹川沿いに広がる長湯温泉は、初雪を冠した雄大なくじゅう連山のパノラマと。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '長湯温泉 宿泊, 大丸旅館, 丸長旅館, かじか庵, 紅葉館, クアパーク長湯, 天然炭酸泉, ラムネ温泉館, エノハ料理, 豊後牛, 11月 12月 長湯温泉, くじゅう連山',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay/"
  },
  openGraph: {
    title: '大分・竹田長湯温泉で過ごす冬の旅（11・12月）！名物清流エノハ料理！名宿5選',
    description: '11月から12月にかけて、大分県竹田市の芹川沿いに広がる長湯温泉は、初雪を冠した雄大なくじゅう連山のパノラマと。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '大分・竹田長湯温泉の天然炭酸泉とくじゅう連山雪景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "大分・竹田長湯温泉の世界屈指の天然炭酸泉とくじゅう初雪絶景で過ごす冬の旅（11・12月）！名物清流エノハ料理＆極上豊後牛会席を堪能する秘湯治名宿5選",
    description: "11月から12月にかけて、大分県竹田市の芹川沿いに広がる長湯温泉は、初雪を冠した雄大なくじゅう連山のパノラマと、世界屈指の湧出量・高濃度を誇る「奇跡の天然炭酸泉」が旅人を魅了します。ぬるめの湯に浸かると全身が銀色の炭酸泡に包まれ、血行促進と芯からのポカポカ感が持続する日本有数の名湯。「飲んで効き 浴ちて効く」長湯の名湯巡りやラムネ温泉館を堪能した後は、芹川の清流が育んだ「清流の女王エノハ（ヤマメ）」の塩焼きや骨酒、極上のおおいた豊後牛会席に舌鼓。初冬の静寂と滋味あふれる名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterOitaNagayuPage() {
  const hotels = [
            {
              id: 1,
              name: "長湯温泉　大丸旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108788/108788.jpg",
              rating: 4.37,
              reviews: 199,
              price: "¥19,800〜",
              access: "JR豊肥本線・豊後竹田駅よりお車にて25分。（駅から路線バスもあります。長湯行き約40分、長湯下車。）",
              special: "長湯温泉の老舗宿。全室・芹川に面し温泉街散策にも便利。泡付き炭酸泉「ラムネ温泉館」入浴無料。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108788%2F108788.html",
              story: "創業大正6年、清流・芹川のほとりに佇み、数々の文人墨客や温泉通に愛されてきた長湯温泉屈指の老舗純和風旅館「長湯温泉 大丸旅館」。文豪・川端康成が逗留したことでも知られ、館内には落ち着いた木造建築の温もりと日本の伝統美が息づいています。宿の自慢は、芹川のせせらぎを間近に感じる大浴場と露天風呂。さらに宿泊者は、宿が運営する全国的に有名な名湯「ラムネ温泉館」の内湯や露天炭酸泉にも入浴可能。銀色の無数の気泡が全身にびっしりと付着するぬるめの炭酸泉と温かい濁り湯の内湯を交互に愉しむ温冷交互浴は、初冬の冷えた身体の血行を極限まで高めてくれます。夕食は創業以来の伝統を受け継ぐ洗練された郷土会席。芹川で育まれた新鮮な「エノハ（ヤマメ）」のお造りや香ばしい塩焼き、とろけるような肉質の極上おおいた和牛（豊後牛）の陶板焼きなど、一品一品に職人の真心が込められた料理が並びます。",
              roomTip: "芹川清流沿い和室（本館または別館「藤花楼」）。窓を開ければ芹川の清らかなせせらぎが心地よく響き、初冬の静寂の中で読書や湯治のひとときに没頭できるお部屋。",
              gourmetTip: "「初冬の大丸特選会席」。清流エノハ（ヤマメ）の姿造りと炭火塩焼き、おおいた豊後牛のサーロイン陶板ステーキ、地元野菜の炊き合わせ、名物エノハ骨酒。",
              highlights: [
                "大正6年創業の歴史と川端康成逗留の風格漂う老舗宿＆名湯ラムネ温泉館にも無料入浴",
                "清流エノハ姿造りと炭火塩焼き＆極上おおいた豊後牛サーロイン陶板焼きの贅沢",
                "芹川の清流を望む純和風客室＆温冷交互浴で初冬の冷え性を芯から改善する湯治"
              ]
            },
            {
              id: 2,
              name: "長湯温泉　丸長旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40731/40731.jpg",
              rating: 4.85,
              reviews: 54,
              price: "¥17,100〜",
              access: "◆湯布院IC国道210号を湯平温泉経由で広域農道50分◆ＪＲ豊肥本線　豊後竹田駅から車（タクシー）で３０分",
              special: "長湯温泉「ガニ湯」を一望できる純和風旅館。小さくてもいい宝石のような宿を目指しおもてなし致します♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40731%2F40731.html",
              story: "長湯温泉の温泉街中心部に位置し、わずか全6室という贅沢なプライベート感と、一切の妥協を排したこだわりの会席料理で圧倒的なリピート率を誇る名門小宿「長湯温泉 丸長旅館」。館内は民芸調の落ち着いた調度品と生け花に彩られ、静かに心と身体を休める大人の隠れ家です。宿の天然温泉は、敷地内の源泉からそのまま注がれる新鮮な炭酸水素塩泉。初冬の冷気の中で湯船に浸かると、細やかな気泡が肌を包み込み、じんわりと身体の奥底から温もりが広がっていきます。この宿の最大の魅力は何と言っても料理。料理長が一品一品手間を惜しまず仕立てる創作和食は、県内外の食通を唸らせる完成度を誇ります。旬のエノハ料理はもちろん、豊後牛の繊細な火入れ、自家製の胡麻豆腐、地元の旬野菜を使った前菜の数々が、美しい器とともに五感を満たします。",
              roomTip: "民芸調和室。畳の香りと手作りの温もりに包まれ、1日限定6組の静寂の中で大切な人と贅沢な語らいの時間を過ごせる上質空間。",
              gourmetTip: "「丸長特製・初冬の創作美味会席」。極上おおいた和牛の低温ロースト、エノハの香草焼きまたは塩焼き、季節の小鉢盛り合わせ、土鍋で炊く大分県産新米。",
              highlights: [
                "1日限定6組の静謐な大人の隠れ家宿＆敷地内自家源泉100%の極上炭酸泉と感動の美味会席",
                "食通絶賛の創作和食コース＆豊後牛の繊細な火入れと地場野菜の美しい共演",
                "細やかな気泡が肌を包む至極の湯ざわり＆夫婦や一人旅の記念旅行に最高峰の満足度"
              ]
            },
            {
              id: 3,
              name: "長湯温泉　かじか庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29175/29175.jpg",
              rating: 4.24,
              reviews: 465,
              price: "¥8,500〜",
              access: "熊本空港より車で約2時間弱/湯布院ICより約45分/豊肥線豊後竹田駅より車で25分",
              special: "豊富な“湯の花”が自慢の炭酸泉♪１泊２食プランには、岩盤浴か家族湯無料！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29175%2F29175.html",
              story: "長湯温泉の自然に囲まれた高台に佇み、自家源泉から湧出する豊富な湯量を誇る多彩な浴槽と、湯治宿ならではの温かいおもてなしが魅力の温泉宿「長湯温泉 かじか庵」。宿の自慢は、開放感あふれる岩造りの露天風呂やサウナ、大浴場など計6種類の多彩な湯舟。長湯ならではの炭酸ガスをたっぷり含んだ源泉が贅沢に注がれ、日々の疲れや冷え性を優しく解きほぐしてくれます。館内のお食事処「芹川」でいただく夕食は、竹田の大自然の恵みがぎっしり詰まったボリューム満点の郷土会席。芹川の清流で育ったエノハの唐揚げや塩焼き、地元大分県産のジューシーな豊後牛ステーキ、竹田名物の手作りからあげなど、気取らずに本物の美味しさを堪能できる料理が旅人を笑顔にします。手頃な宿泊料金で本物の名湯を満喫できるコストパフォーマンスの高さも抜群です。",
              roomTip: "和モダン客室（または露天風呂付き客室）。清潔感あふれる和洋の心地よさが調和し、湯巡りの合間にゆったりと寛げる快適なお部屋。",
              gourmetTip: "「初冬のかじか庵満喫膳」。骨までサクサク食べられるエノハの唐揚げ、大分県産豊後牛の陶板焼き、名物とり天、竹田産しいたけの天ぷら、自家製デザート。",
              highlights: [
                "計6種の多彩な炭酸泉風呂とサウナ完備＆エノハ唐揚げと豊後牛を満喫する高コスパ宿",
                "サクサク香ばしいエノハ唐揚げ＆ジューシーな豊後牛ステーキと竹田名物とり天",
                "露天風呂付き客室も完備＆くじゅう連山登山や阿蘇・竹田観光の拠点に最適"
              ]
            },
            {
              id: 4,
              name: "長湯温泉　紅葉館＜大分県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37846/37846.jpg",
              rating: 3.82,
              reviews: 148,
              price: "¥7,150〜",
              access: "ＪＲ豊肥本線　豊後竹田駅より車で２０分",
              special: "長湯名物カニ湯は目の前！温泉情緒あふれる老舗で心落ち着く静かな時間を♪自慢のチャンコ鍋はボリューム◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37846%2F37846.html",
              story: "芹川の清流にかかる赤い太鼓橋のたもとに建ち、昭和の文豪が愛したノスタルジックな湯治場の風情を今に伝える家庭的な老舗旅館「長湯温泉 紅葉館＜大分県＞」。川のせせらぎが間近に迫る絶好のロケーションにあり、どこか懐かしい昭和レトロな雰囲気が旅人の心をほっと和ませます。宿の温泉は、湯船の縁に炭酸泉特有の析出物がびっしりと固着した、成分の濃さを物語る本格的な源泉掛け流し。湯温は適温に保たれ、初冬の冷え込んだ夕暮れ時にも、身体の芯までじっくりと温まることができます。夕食は女将と料理人が心を込めて手作りする滋味あふれる田舎会席。芹川で獲れた新鮮なエノハの塩焼きや、竹田の山里で採れた旬の根菜料理、地鶏の小鍋仕立てなど、素朴ながらも素材本来の旨味が際立つ温かい料理の数々に心まで温まります。",
              roomTip: "芹川ビュー純和室。窓のすぐ下を流れる芹川の水音と紅葉・雪景色のコントラストを眺め、のんびりと湯治気分に浸れる情緒あるお部屋。",
              gourmetTip: "「初冬の山里郷土膳」。香ばしく焼き上げた清流エノハの塩焼き、大分ハーブ鶏と冬野菜の小鍋、手作りこんにゃくの刺身、地元竹田米のご飯と田舎味噌汁。",
              highlights: [
                "芹川にかかる太鼓橋のたもとに建つ昭和レトロな老舗湯治宿＆濃厚な析出物が物語る本格名湯",
                "女将手作りの滋味あふれる田舎会席＆香ばしいエノハ塩焼きと地鶏鍋の温もり",
                "素朴で温かいおもてなしと良心的な価格設定＆昔ながらの湯治場風情を愛する旅人に最適"
              ]
            },
            {
              id: 5,
              name: "クアパーク長湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176716/176716.jpg",
              rating: 3.90,
              reviews: 88,
              price: "¥18,700〜",
              access: "JR豊後竹田駅よりお車にて約２０分",
              special: "クチコミ評価4.42★希少な自然炭酸泉と景観を楽しむ往復100mの「水着で入れる歩行湯」が自慢です◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176716%2F176716.html",
              story: "世界的建築家・坂茂氏が設計を手掛け、木造アーチの美しい現代建築と温泉療養が融合した最先端のクアオルト（療養型リゾート）「クアパーク長湯」。水着を着用して歩行浴やジャグジーを楽しめる運動浴プール棟と、男女別の内湯・露天風呂を備えた重炭酸温泉棟からなり、自然光が差し込む開放的な空間で本格的な炭酸泉浴を体感できます。芹川沿いに建つ宿泊棟（コテージ）は、木の香りが清々しいメゾネットやフラットタイプで、初冬の澄んだ空気と星空を満喫できるプライベートな空間。館内レストランでは、地元竹田の有機野菜やハーブ、豊後牛を健康的に美味しく仕立てたナチュラルフレンチ＆和洋創作料理を提供。現代のライフスタイルに合わせた新しい湯治文化を体験したい感度の高い旅行者に圧倒的な支持を集めています。",
              roomTip: "コテージツイン（ロフト付きまたはフラット）。坂茂氏デザインの木製家具と高い天井が心地よく、芹川の自然と一体になれるスタイリッシュな空間。",
              gourmetTip: "「クアパーク・健幸ディナーコース」。竹田産有機冬野菜の前菜プレート、おおいた豊後牛のグリル・季節のソース、地元産野菜のポタージュ、自家製パンとデザート。",
              highlights: [
                "世界的建築家・坂茂氏設計の木造モダンコテージ＆温泉運動浴とナチュラルフレンチの融合",
                "有機野菜と豊後牛グリルの健幸コースディナー＆芹川の自然美に包まれる朝食",
                "水着で楽しむ本格クアオルト療養＆現代のスマートヘルスツーリズムを体験"
              ]
            }
  ];

  const faqList = [
  {
    "q": "長湯温泉の「天然炭酸泉」の特徴や効能、銀色の気泡が付く理由と入浴法は？",
    "a": "長湯温泉は、炭酸ガス（二酸化炭素）の含有量が1,000mg/kg以上という、日本国内でも極めて希少な高濃度天然炭酸泉です。通常、炭酸泉は湯温が上がると炭酸ガスが空気中に抜けてしまいますが、長湯温泉は湯温が高く保たれながらも豊富な炭酸成分が溶け込んでいる世界でも類を見ない奇跡の泉質です。湯船に入ると、皮膚から二酸化炭素が吸収されて毛細血管が拡張し、ぬるめの湯（32〜38℃前後）でも短時間で血流が大幅に促進され、身体の芯からポカポカと温まります。入浴時は強く肌をこすらず、静かに浸かって銀色の泡が身体を包み込むのを味わい、温かい内湯と交互に入る「温冷交互浴」を行うと、自律神経が整い高いリフレッシュ効果が得られます。"
  },
  {
    "q": "11月・12月の長湯温泉・くじゅう山麓の気候や気温、スタッドレスタイヤは必要？",
    "a": "長湯温泉は標高約400〜500mの久住山麓の高原に位置するため、平地と比べて気温が約4〜6℃低くなります。11月は最高気温13〜16℃、最低気温2〜5℃ですが、12月に入ると最高気温7〜10℃、最低気温は-2〜1℃前後の氷点下に達する本格的な冬となります。服装は厚手のダウンジャケット、ニット帽、手袋、マフラーなどの完全防寒が必須です。また、車でアクセスする場合、12月中旬以降はやまなみハイウェイ（瀬の本高原や牧ノ戸峠）や久住高原周辺の道路で積雪・路面凍結が発生します。長湯温泉へ車で向かう際は、必ずスタッドレスタイヤを装着するか、チェーンを携行してください。"
  },
  {
    "q": "長湯名物の「清流の女王エノハ」とはどのような魚ですか？おすすめの食べ方は？",
    "a": "「エノハ」とは、大分県や九州地方の方言で、サケ科の淡水魚「ヤマメ（またはアマゴ）」のことを指します。水温が低く極めて清らかな芹川の源流域や久住の湧水でしか生息できないため「清流の女王」と称されます。臭みが一切なく、身は繊細で上品な甘みと適度な脂が乗っているのが特徴です。おすすめの食べ方は、炭火でじっくり遠火焼きにした「塩焼き」（頭から骨まで丸ごと食べられます）、新鮮だからこそ味わえる透き通った「姿造り（刺身）」、骨まで香ばしく揚がった「唐揚げ」です。さらに、こんがり焼いたエノハに熱々の地酒を注ぐ「エノハ骨酒」は、香ばしい出汁が酒に溶け出し、冬の夜の最高の一杯となります。"
  },
  {
    "q": "有名な外湯「ラムネ温泉館」や「ガニ湯」への日帰り立ち寄り入浴はできますか？",
    "a": "はい、長湯温泉には魅力的な共同浴場や立ち寄り湯が点在しています。特に有名な「ラムネ温泉館」は、世界的建築家・藤森照信氏が設計した焼杉と漆喰の可愛らしい建物が目印で、銀色の泡がびっしり付く32℃の露天炭酸泉と42℃の炭酸水素塩泉の内湯があり、大人500円で利用できます。また、芹川の川原にある石組みの混浴露天風呂「ガニ湯（蟹湯）」は、長湯温泉のシンボルとして24時間無料で開放されています（水着着用可、簡易脱衣所あり）。宿の温泉だけでなく、温泉街の風情を感じながら外湯めぐりを楽しむのも長湯の醍醐味です。"
  },
  {
    "q": "大分空港・福岡・熊本方面から長湯温泉への主なアクセスルートと所要時間は？",
    "a": "車を利用する場合、大分空港からは大分自動車道（湯布院IC経由）で約1時間20分。熊本空港からはミルクロード・国道57号線・やまなみハイウェイ経由で約1時間20分〜1時間30分です。福岡市内からは九州自動車道・大分自動車道を経由し、湯布院ICまたは日田ICより約2時間15分。公共交通機関を利用する場合は、JR豊肥本線の「豊後竹田駅」が最寄り駅となります。豊後竹田駅から長湯温泉までは、大野竹田バス（久住・長湯行き）で約25分、またはタクシーで約20分です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月大分・竹田長湯温泉の世界屈指の天然炭酸泉とくじゅう初雪絶景】名物清流エノハ料理＆極上豊後牛会席を堪能する秘湯治名宿5選",
        'description': "11月から12月にかけて、大分県竹田市の芹川沿いに広がる長湯温泉は、初雪を冠した雄大なくじゅう連山のパノラマと、世界屈指の湧出量・高濃度を誇る「奇跡の天然炭酸泉」が旅人を魅了します。ぬるめの湯に浸かると全身が銀色の炭酸泡に包まれ、血行促進と芯からのポカポカ感が持続する日本有数の名湯。「飲んで効き 浴ちて効く」長湯の名湯巡りやラムネ温泉館を堪能した後は、芹川の清流が育んだ「清流の女王エノハ（ヤマメ）」の塩焼きや骨酒、極上のおおいた豊後牛会席に舌鼓。初冬の静寂と滋味あふれる名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay',
        'datePublished': 'T00:00:00+09:00',
        'dateModified': 'T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay#destination',
        'name': '大分・竹田長湯温泉',
        'description': 'くじゅう連山の東麓に位置し、世界屈指の高濃度天然炭酸泉を誇る名湯治場。冬は初雪景色と清流エノハ料理、極上豊後牛が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 33.0883,
          'longitude': 131.3789
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay#hotellist',
        'name': '大分・竹田長湯温泉のおすすめ名宿5選',
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
            <span className="text-white font-medium">大分・竹田長湯温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkle className="w-4 h-4 text-sky-300" />
            11月・12月 奇跡の天然炭酸泉＆くじゅう初雪特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">大分・竹田長湯温泉で過ごす冬の旅（11・12月）！世界屈指の天然炭酸泉とくじゅう初雪絶景 <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal"> 名物清流エノハ料理＆極上豊後牛会席を堪能する秘湯治名宿5選 </span></h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、大分県竹田市の芹川沿いに広がる長湯温泉は、初雪を冠した雄大なくじゅう連山のパノラマと、世界屈指の湧出量・高濃度を誇る「奇跡の天然炭酸泉」が旅人を魅了します。ぬるめの湯に浸かると全身が銀色の炭酸泡に包まれ、血行促進と芯からのポカポカ感が持続する日本有数の名湯。「飲んで効き 浴ちて効く」長湯の名湯巡りやラムネ温泉館を堪能した後は、芹川の清流が育んだ「清流の女王エノハ（ヤマメ）」の塩焼きや骨酒、極上のおおいた豊後牛会席に舌鼓。初冬の静寂と滋味あふれる名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-teal-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬（初雪と温冷交互浴）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Fish className="w-4 h-4 text-teal-300" />
              <span>旬の味覚: 清流エノハ（ヤマメ）料理・極上豊後牛・骨酒</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>泉質: マグネシウム・ナトリウム-炭酸水素塩泉（奇跡の高濃度炭酸泉）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月大分・竹田長湯温泉】名物清流エノハ料理！名宿5選","item":"https://croud-travel.pages.dev/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            長湯温泉の初冬の魅力
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-snug">
            銀色の泡が全身を包み、身体の芯から温もる。世界に誇る炭酸泉と山里の美食に出逢う冬の旅
          </h2>
          <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              大分県西部に位置する竹田市・長湯（ながゆ）温泉は、阿蘇くじゅう国立公園の東麓、のどかな芹川の渓流沿いに開けた日本屈指の温泉地です。ドイツの温泉保養地バートクロイツィンゲンとも姉妹都市盟約を結び、湧出量・炭酸ガス濃度ともに世界屈指と称される「高濃度天然炭酸泉」が自噴しています。古くは江戸時代、岡藩主・中川公が湯治場として整備し、大正から昭和にかけては文豪・川端康成や野上弥生子ら多くの文化人がこの名湯を愛しました。
            </p>
            <p>
              長湯温泉が最も魅力を放つのは、高原の冷涼な空気が張り詰める11月から12月にかけての初冬です。遠く望むくじゅう連山がうっすらと雪化粧をまとい、湯けむりが芹川の川面に立ち上る景色は、まさに日本の原風景。炭酸泉の湯船に身を沈めると、数分と経たないうちに全身に無数の銀色の微小気泡が付着します。皮膚を通して吸収された炭酸ガスが血管を拡張させ、32〜38度前後のぬる湯でありながら、入浴後には身体の内側から汗がにじむほどの強烈な温浴効果を体感できます。
            </p>
            <p>
              湯上がりの身体を満たすのは、長湯の清らかな水と豊かな大地が育んだ極上の山里グルメです。阿蘇やくじゅうの伏流水が湧き出る芹川で育った「清流の女王エノハ（ヤマメ）」は、初冬の冷水で身が引き締まり、炭火で香ばしく焼き上げた塩焼きや骨酒は一度味わうと忘れられない美味。さらに、きめ細やかなサシと濃厚な赤身のコクを誇る大分ブランド牛「豊後牛（おおいた和牛）」の陶板焼きやすき焼きなど、素朴で力強い郷土の味覚が心と身体を温かく解きほぐしてくれます。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              11月・12月の長湯温泉を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-slate-500">
              世界屈指の名湯と大自然の恵みを心ゆくまで堪能
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Sparkle className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                世界屈指の高濃度天然炭酸泉
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                全身に銀色の気泡が付着する奇跡の炭酸泉。血流を劇的に促進し、冬の冷え性を芯から改善する極上の温冷交互浴を体感。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                清流の女王エノハ＆極上豊後牛
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                芹川で育まれたエノハ（ヤマメ）の炭火塩焼き・姿造り・香ばしい骨酒と、とろける霜降りの大分豊後牛会席を贅沢に満喫。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                初雪のくじゅう連山と芹川雪見露天
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                白雪を戴く雄大なくじゅう連山のパノラマ絶景。清流のせせらぎを聴きながら入る芹川沿いの名湯露天風呂と外湯めぐり。
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
              大分・竹田長湯温泉の秘湯治名宿厳選5選
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
              初冬の長湯温泉を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-slate-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                久住連山初雪ドライブ＆ラムネ温泉館の炭酸泡体験とエノハ骨酒
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                大分空港や由布院駅よりレンタカーを出発させ、やまなみハイウェイや久住高原を抜けながら、初雪を戴く雄大なくじゅう連山のパノラマを堪能。長湯温泉街に到着後、まずは名湯「ラムネ温泉館」へ。32℃の銀色の泡が全身を覆う炭酸泉と温かい内湯の温冷交互浴で旅の疲れを一気に解消。夕方に宿へチェックインし、芹川のせせらぎを聴く雪見露天風呂へ。夕食には清流の女王エノハの姿造りや炭火塩焼き、おおいた豊後牛ステーキとともに、香ばしいエノハ骨酒に酔いしれます。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                芹川朝霧風呂と飲泉・国史跡「岡城跡」の壮大な石垣散策
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                朝は川面に立ち上る湯けむりを眺めながら朝風呂を満喫し、温泉街の飲泉所で新鮮な炭酸泉を試飲。地鶏卵や地元野菜の和朝食を味わった後、10:00にチェックアウト。芹川原のシンボル「ガニ湯」やクアパーク長湯の建築美を見学した後、車で約25分の竹田城下町へ。滝廉太郎『荒城の月』の舞台となった国史跡「岡城跡」に登り、断崖に築かれた壮大な石垣と白雪の山並みの絶景を見渡します。昼は名物「竹田丸福からあげ」を味わって帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              竹田・長湯温泉の初冬グルメ完全ガイド！清流エノハと豊後牛
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-amber-300" />
                清流の女王エノハ（ヤマメ）料理
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                芹川の冷涼な伏流水で育つエノハは、臭みがなく身が繊細で甘み豊か。炭火でじっくり焼き上げた「塩焼き」は頭から尻尾まで食べられ、骨まで香ばしい「唐揚げ」、熱燗を注いだ「エノハ骨酒」は長湯の夜の最高の贅沢です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                極上おおいた豊後牛ステーキ
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                大分の雄大な大地が育む最高峰の黒毛和牛「おおいた和牛（豊後牛）」。美しい霜降りと芳醇な肉汁が特徴で、陶板ステーキかすき焼き小鍋でいただくと、口の中でとろけるような至福の旨味が広がります。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-rose-300" />
                竹田丸福からあげ＆名物とり天
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                竹田市民のソウルフード「丸福のからあげ」や、サクサクの衣にポン酢とからしをつけていただく大分名物「とり天」。地元産原木しいたけの天ぷらやかぼすを添えた郷土料理が、温泉宿の膳をさらに滋味深く彩ります。
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
            11月・12月の長湯温泉 交通アクセス＆冬道ドライブのアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-600" />
                アクセス方法と冬道運転の注意点
              </h3>
              <p>
                車の場合は、大分道湯布院ICより約50分、熊本空港より阿蘇ミルクロード経由で約1時間20分です。標高が高いため、12月中旬以降はやまなみハイウェイや久住高原周辺で降雪や路面凍結が発生します。12月以降に車で訪れる場合は必ずスタッドレスタイヤを装着してください。
              </p>
              <p>
                公共交通機関の場合は、JR豊肥本線豊後竹田駅より大野竹田バス（長湯温泉行き）で約25分。または大分駅や由布院駅よりレンタカー（冬用タイヤ指定）を利用するルートも便利です。
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-600" />
                気候と服装・炭酸泉入浴のコツ
              </h3>
              <p>
                12月の長湯温泉は朝晩氷点下まで冷え込みます。厚手ダウンジャケット、ヒートテック、マフラー、手袋などの完全防寒をご準備ください。
              </p>
              <p>
                長湯の炭酸泉は32〜38度前後のぬる湯が多いため、まずは温かい内湯で身体を温めてから露天の炭酸泉に入り、最後に再び温かい湯に入る「温冷交互浴」が最も効果的です。飲泉所では新鮮な炭酸泉を少量ずつ飲むことで胃腸の調子を整えることができます。
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
            初冬の大分・竹田長湯温泉旅行 FAQ
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
              あわせて読みたい九州の冬温泉・名湯特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              冬の味覚や雪見露天、温泉街散策を満喫する九州各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">大分・由布院</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                由布院温泉の金鱗湖朝霧絶景と豊後牛ステーキ会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                幻想的な金鱗湖の冬朝霧と由布岳を望む贅沢な温泉リゾート。
              </p>
            </Link>

            <Link 
              href="/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">熊本・阿蘇内牧</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                阿蘇内牧温泉のカルデラ初雪パノラマと阿蘇あか牛会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                雄大な阿蘇五岳の初雪と、ヘルシーな赤身が旨いあか牛を満喫。
              </p>
            </Link>

            <Link 
              href="/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">大分・別府鉄輪</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                別府鉄輪温泉の湯けむり展望と地獄蒸し＆豊後牛会席宿
              </h4>
              <p className="text-[11px] text-teal-100 line-clamp-2">
                立ち上る湯けむり景観と地熱を利用した名物地獄蒸し料理。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
