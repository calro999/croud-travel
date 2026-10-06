import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月高知】知恵の文殊「五台山 竹林寺」新春初詣！名宿5選',
  description: '黒潮洗う南国土佐の冬景色！11〜1月は澄み渡る青空と群青の太平洋が広がり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '桂浜 初日の出, 坂本龍馬像 桂浜, 竹林寺 初詣, 高知 鰹のタタキ, 戻り鰹 藁焼き, 土佐あかうし, 城西館, 三翠園, ひろめ市場, 高知 冬 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay'
  },
  openGraph: {
    title: '【11・12・1月高知】知恵の文殊「五台山 竹林寺」新春初詣！名宿5選',
    description: '黒潮洗う南国土佐の冬景色！11〜1月は澄み渡る青空と群青の太平洋が広がり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の桂浜 太平洋の水平線から昇る初日の出と坂本龍馬像'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月高知】太平洋望む名勝「桂浜」初日の出と坂本龍馬像！知恵の文殊「五台山 竹林寺」新春初詣・極上戻り鰹藁焼き塩タタキ＆土佐あかうし厳選名宿5選",
    description: "黒潮洗う南国土佐の冬景色！11〜1月は澄み渡る青空と群青の太平洋が広がり、名勝「桂浜」の弓状の渚からは水平線から昇る感動的な初日の出と威風堂々の坂本龍馬銅像を拝することができます。四国八十八ヶ所第31番札所「五台山 竹林寺」では国名勝庭園の静寂と文殊菩薩への新春初詣・合格学業祈願。冬に脂が乗る戻り鰹の豪快な藁焼き塩タタキや幻の和牛「土佐あかうし」のすき焼き・土佐皿鉢料理を堪能し、高知城下の天然温泉や老舗旅館など厳選名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function KochiKatsurahamaWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月高知】太平洋望む名勝「桂浜」初日の出と坂本龍馬像！知恵の文殊「五台山 竹林寺」新春初詣・極上戻り鰹藁焼き塩タタキ＆土佐あかうし厳選名宿5選",
    "description": "黒潮洗う南国土佐の冬景色！11〜1月は澄み渡る青空と群青の太平洋が広がり、名勝「桂浜」の弓状の渚からは水平線から昇る感動的な初日の出と威風堂々の坂本龍馬銅像を拝することができます。四国八十八ヶ所第31番札所「五台山 竹林寺」では国名勝庭園の静寂と文殊菩薩への新春初詣・合格学業祈願。冬に脂が乗る戻り鰹の豪快な藁焼き塩タタキや幻の和牛「土佐あかうし」のすき焼き・土佐皿鉢料理を堪能し、高知城下の天然温泉や老舗旅館など厳選名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T06:00:00+09:00",
    "dateModified": "2026-10-06T06:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.pages.dev/"
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
        "name": "高知・桂浜＆竹林寺 冬の初日の出と新春初詣",
        "item": "https://croud-travel.pages.dev/winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬の「桂浜」で初日の出や坂本龍馬像を鑑賞するベストな時間帯と防寒対策は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "桂浜からの初日の出（元旦は概ね午前7時05分〜7時10分頃）は、太平洋の水平線から真っ赤な太陽が昇り、白波が立つ砂浜と竜頭岬の龍王宮が朝日に染まる日本屈指の絶景です。元旦の早朝は駐車場が大変混雑するため、午前5時半〜6時頃までの到着をおすすめします。南国土佐とはいえ、冬の早朝の太平洋岸は強い潮風が吹き付けるため体感温度は氷点下近くまで下がります。防風性の高いダウンジャケットやマフラー、手袋、カイロをしっかりと準備してください。坂本龍馬銅像（高さ約13.5m）は、朝日に照らされる東向きの姿が最も勇壮でフォトジェニックです。"
        }
      },
      {
        "@type": "Question",
        "name": "四国霊場第31番「五台山 竹林寺」の新春初詣の見どころと御利益は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "竹林寺は行基菩薩が唐の五台山に見立てて開創したと伝わる名刹で、「日本三文殊」の一つに数えられる文殊菩薩を御本尊として祀っています。知恵の仏様として学業成就や合格祈願、仕事運向上の御利益が名高く、正月三が日は多くの受験生や家族連れで賑わいます。夢窓国師作と伝わる国名勝庭園は、冬の静寂の中に苔と石組みが凛とした美しさを放ちます。また、白銀の冬空に映える朱塗りの五重塔や、五台山展望台から見渡す高知市街と浦戸湾の冬のパノラマビューも必見です。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の高知で味わう「戻り鰹の藁焼きタタキ」と「土佐あかうし」の特徴は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋から冬にかけて三陸沖から南下してくる「戻り鰹（もどりガツオ）」は、初鰹に比べて脂の乗りが圧倒的で、マグロのトロにも匹敵する濃厚な旨味を持ちます。強火の藁の炎で一気に皮目を炙ることで、魚の生臭さを消しつつ香ばしい燻煙の風味をまとわせます。ポン酢ではなく粗塩とスライス生ニンニク、ワサビで食べる「塩タタキ」は、脂の甘みを最大限に引き出す本場ならではの醍醐味です。また、年間数百頭しか出荷されない幻の和牛「土佐あかうし（褐毛和種）」は、赤身の芳醇な旨味とキレの良い脂が特徴で、冬のすき焼きやステーキで至福の美味を堪能できます。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の高知市内観光と「ひろめ市場」を楽しむコツは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "高知城のふもとに位置する「ひろめ市場」は、約60軒の飲食店や鮮魚店が軒を連ねる巨大な屋台村。冬でも熱気にあふれ、昼間から地元客と観光客が相席で乾杯する土佐のおきゃく（宴会）文化を体験できます。「やいろ亭」や「明神丸」の焼き立て藁焼きタタキ、「安兵衛」のパリパリ屋台餃子、青さのりの天ぷらなどを買い集めてテーブルで楽しめます。混雑する夕方17時〜19時を避け、平日の昼下がりや早めの16時台に訪れると席を確保しやすく快適です。"
        }
      },
      {
        "@type": "Question",
        "name": "高知城下の「三翠園温泉」の歴史と泉質・効能は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "三翠園の敷地はかつて土佐藩十代藩主・山内豊策が造営した下屋敷の跡地であり、西郷隆盛と山内容堂の会見など幕末史の舞台となった由緒ある地です。1997年に高知市中心部で初めて湧出した自家源泉「三翠園温泉」は、ナトリウム-塩化物温泉（弱アルカリ性高温泉）。塩分が肌の表面に膜を作り、水分の蒸発を防ぐため抜群の保温・保湿効果を発揮します。「温まりの湯」「傷の湯」として親しまれ、冬の冷えた身体を芯からポカポカに温めてくれます。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "城西館（じょうせいかん）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8075/8075.jpg",
              rating: 4.64,
              reviews: 3667,
              price: "¥12,999〜",
              access: "路面電車上町1丁目電停目の前。ＪＲ高知駅よりお車で７分、高知ＩＣよりお車で２０分",
              special: "２０１９年４月リニューアルオープン！明治７年創業の老舗宿。展望露天風呂と鰹の藁焼きタタキ工房が自慢♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8075%2F8075.html",
              story: "明治7年（1874年）創業、皇族方や多くの文人墨客を迎えてきた土佐屈指の老舗旅館「城西館」。高知市街の中心に位置し、最上階の展望大浴場・露天風呂からは高知城天守閣や澄み渡る冬の南国の稜線を一望できます。館内には土佐の伝統美が息づき、細やかなおもてなしが旅人を温かく包み込みます。自慢の料理は、オープンキッチンで職人が炎高く焼き上げる本場・鰹の藁焼きタタキや、土佐あかうし・四万十ポークを散りばめた極上の土佐会席。桂浜や五台山への観光ドライブ拠点としても最高峰の格式を誇ります。",
              roomTip: "高知城ビュー和室または展望風呂付き客室。ライトアップされた冬の高知城天守閣を部屋から静かに愛でる贅沢な夜を演出。",
              gourmetTip: "名物「鰹の藁焼きタタキ」と土佐あかうし陶板焼き会席。皮目はパリッと香ばしく身はしっとりレア、粗塩と生ニンニクで味わう至福の瞬間。",
              highlights: [
                "明治創業の格式ある老舗旅館・最上階展望露天風呂から高知城天守閣と南国の街並みを一望" ,
                "実演オープンキッチンで焼き上げる藁焼きタタキ・極上土佐あかうし会席の美食体験" ,
                "細やかな伝統のおもてなし・特別な新春の旅行にふさわしい土佐屈指のフラッグシップ名宿"
              ]
            },
            {
              id: 2,
              name: "高知城下の天然温泉　三翠園（さんすいえん）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17777/17777.jpg",
              rating: 4.31,
              reviews: 2559,
              price: "¥6,700〜",
              access: "ＪＲ土讃線高知駅から車で１０分／高知自動車道高知ＩＣから１５分",
              special: "昭和24年創業。天然温泉の露天風呂と総料理長厳選の土佐の旬でおもてなし。高知城まで徒歩10分。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17777%2F17777.html",
              story: "土佐藩主山内家の下屋敷跡に佇む名門温泉旅館「高知城下の天然温泉 三翠園」。敷地内には国重要文化財の「旧山内家下屋敷長屋」が保存され、歴史情緒あふれる回遊式日本庭園が広がります。高知市中心部で初めて湧出した自家源泉「三翠園温泉」は、肌触りの良いナトリウム・塩化物泉。身体の芯から温まり、冬の太平洋の風を浴びた身体を優しく癒やします。高知城やひろめ市場へも徒歩圏内という圧倒的な立地の良さで、初詣と土佐の美食巡りを優雅に満喫できます。",
              roomTip: "日本庭園側和洋室または高知城天守を望む客室。窓の外に広がる歴史庭園の冬景色が旅情を深めます。",
              gourmetTip: "豪快な「土佐皿鉢（さわち）料理」と冬の旬魚会席。地元の酒蔵から届く辛口銘酒「司牡丹」「酔鯨」との極上のマリアージュ。",
              highlights: [
                "山内家下屋敷跡の歴史名宿・敷地内に重要文化財長屋と名園、天然温泉大浴場を完備" ,
                "高知城やひろめ市場へ徒歩数分・伝統の土佐皿鉢料理と土佐地酒のペアリングを満喫" ,
                "高知市中心部で希少な自家源泉天然温泉・塩化物泉の温もりで冬の旅情を贅沢に味わう"
              ]
            },
            {
              id: 3,
              name: "天然温泉　紺碧の湯　ドーミーイン高知（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165939/165939.jpg",
              rating: 4.43,
              reviews: 2236,
              price: "¥7,910〜",
              access: "JR「高知駅南口」より徒歩12分/とさでん交通「堀詰電停」より徒歩2分「蓮池町通り電停」より徒歩5分",
              special: "2名泊まれるセミダブル販売開始♪サウナ付天然温泉大浴場が夜通し利用可能♪アイスと乳酸菌飲料も無料！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165939%2F165939.html",
              story: "高知市最大の繁華街・帯屋町アーケード内に位置し、観光とグルメに抜群の機動性を誇る「天然温泉 紺碧の湯 ドーミーイン高知」。最上階には男女別の天然温泉大浴場と本格高温サウナ・強冷水風呂を完備しており、ビジネスから観光客まで圧倒的な支持を集めています。名物の夜鳴きそばサービスはもちろん、朝食バイキングでは目の前で炙る鰹のタタキやご当地グルメが並び、手軽に本格的な土佐の味を堪能できます。ひろめ市場へも徒歩数分でアクセス可能です。",
              roomTip: "クイーンルームまたはスーペリアツイン。サータ社製ベッドと個別空調で快眠をサポートし、冬の活動的な旅を支えます。",
              gourmetTip: "朝食バイキングの「豪快鰹のタタキ丼」と土佐ジロー卵の卵かけご飯。朝から活力をチャージする贅沢な朝食。",
              highlights: [
                "帯屋町アーケード内至近・最上階天然温泉＆高温サウナ完備、朝食の豪快鰹タタキが自慢" ,
                "夜鳴きそば無料サービス・ひろめ市場での飲み歩きや帯屋町商店街散策のベースに最適" ,
                "サータ社製快眠ベッド・早朝出発の桂浜初日の出鑑賞にも柔軟に対応できる最新設備"
              ]
            },
            {
              id: 4,
              name: "アパホテル〈高知〉（旧高知パレスホテル）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10808/10808.jpg",
              rating: 3.96,
              reviews: 3468,
              price: "¥4,800〜",
              access: "ＪＲ高知駅より徒歩７分。高知龍馬空港連絡バス30分、蓮池町乗り場徒歩3分・高知橋降り場徒歩3分。高知ICから車で10分。",
              special: "日曜市徒歩1分、繁華街中心の県内最大級ホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10808%2F10808.html",
              story: "JR高知駅から徒歩約5分、高知市中心部の廿代町に位置する「アパホテル〈高知〉（旧高知パレスホテル）」。清潔で機能的な客室と安定したサービスを提供し、コストパフォーマンスに優れた快適な滞在を実現します。館内にはレストランやコインランドリーを完備し、全室に大型液晶テレビと快眠ベッドを配備。桂浜行きの路線バスが発着する高知駅バスターミナルへも至近で、公共交通機関を利用して南国高知を巡る旅人に理想的な拠点です。",
              roomTip: "デラックスシングルまたはツインルーム。無駄のないレイアウトで手荷物やカメラ機材の整理もスムーズ。",
              gourmetTip: "ホテル至近の屋台街や老舗居酒屋で味わう「屋台餃子」と温かいおでん、高知の屋台文化を満喫する冬の夜。",
              highlights: [
                "高知駅徒歩5分の抜群の利便性・機能的な客室と快眠ベッドでアクティブな初詣旅をサポート" ,
                "清潔な客室空間と大型液晶テレビ・桂浜行きバス停へのアクセスも良好な実力派ホテル" ,
                "安心のアパホテルクオリティ・コストパフォーマンスに優れたスマートな滞在拠点"
              ]
            },
            {
              id: 5,
              name: "ホテル　港屋＜高知県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1516/1516.jpg",
              rating: 3.99,
              reviews: 2489,
              price: "¥3,220〜",
              access: "◎ＪＲ高知駅より徒歩3分◎高知ICより車で約10分◎高知空港より車で30分◎はりまや橋まで徒歩10分◎",
              special: "高知駅徒歩3分の好立地で『上質なベッド』・『大浴場』・『平面駐車場』が唯一揃う親切なホテルです♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1516%2F1516.html",
              story: "JR高知駅南口から徒歩3分の好立地に佇む「ホテル 港屋＜高知県＞」。家庭的で温かなおもてなしと良心的な価格設定が魅力のホテルです。大浴場（男性専用）を備えており、一日の観光の疲れをゆったりと癒やすことができます。無料朝食サービスやレンタサイクルの貸出など、宿泊者に寄り添ったサービスが充実。五台山竹林寺や桂浜へのアクセス拠点として、気兼ねなく気ままな一人旅や連泊旅行を楽しみたい旅人に選ばれ続けています。",
              roomTip: "スタンダード和室またはシングルルーム。畳敷きの和室は靴を脱いで足を伸ばし、寛ぎの時間を過ごせます。",
              gourmetTip: "高知駅前の名店で味わう「土佐巻き（鰹のタタキとニンニクを巻いた海苔巻き）」と温かい土佐うどん。",
              highlights: [
                "高知駅徒歩3分・大浴場完備と温かな家庭的もてなし、リーズナブルに楽しむ土佐の冬旅" ,
                "男性専用大浴場と無料朝食・気ままな一人旅や連泊でも快適に過ごせるアットホームな宿" ,
                "レンタサイクル貸出・駅前ならではのフットワークの軽さで五台山や高知城を軽快周遊"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬の「桂浜」で初日の出や坂本龍馬像を鑑賞するベストな時間帯と防寒対策は？",
    "a": "桂浜からの初日の出（元旦は概ね午前7時05分〜7時10分頃）は、太平洋の水平線から真っ赤な太陽が昇り、白波が立つ砂浜と竜頭岬の龍王宮が朝日に染まる日本屈指の絶景です。元旦の早朝は駐車場が大変混雑するため、午前5時半〜6時頃までの到着をおすすめします。南国土佐とはいえ、冬の早朝の太平洋岸は強い潮風が吹き付けるため体感温度は氷点下近くまで下がります。防風性の高いダウンジャケットやマフラー、手袋、カイロをしっかりと準備してください。坂本龍馬銅像（高さ約13.5m）は、朝日に照らされる東向きの姿が最も勇壮でフォトジェニックです。"
  },
  {
    "q": "四国霊場第31番「五台山 竹林寺」の新春初詣の見どころと御利益は？",
    "a": "竹林寺は行基菩薩が唐の五台山に見立てて開創したと伝わる名刹で、「日本三文殊」の一つに数えられる文殊菩薩を御本尊として祀っています。知恵の仏様として学業成就や合格祈願、仕事運向上の御利益が名高く、正月三が日は多くの受験生や家族連れで賑わいます。夢窓国師作と伝わる国名勝庭園は、冬の静寂の中に苔と石組みが凛とした美しさを放ちます。また、白銀の冬空に映える朱塗りの五重塔や、五台山展望台から見渡す高知市街と浦戸湾の冬のパノラマビューも必見です。"
  },
  {
    "q": "冬の高知で味わう「戻り鰹の藁焼きタタキ」と「土佐あかうし」の特徴は？",
    "a": "秋から冬にかけて三陸沖から南下してくる「戻り鰹（もどりガツオ）」は、初鰹に比べて脂の乗りが圧倒的で、マグロのトロにも匹敵する濃厚な旨味を持ちます。強火の藁の炎で一気に皮目を炙ることで、魚の生臭さを消しつつ香ばしい燻煙の風味をまとわせます。ポン酢ではなく粗塩とスライス生ニンニク、ワサビで食べる「塩タタキ」は、脂の甘みを最大限に引き出す本場ならではの醍醐味です。また、年間数百頭しか出荷されない幻の和牛「土佐あかうし（褐毛和種）」は、赤身の芳醇な旨味とキレの良い脂が特徴で、冬のすき焼きやステーキで至福の美味を堪能できます。"
  },
  {
    "q": "冬の高知市内観光と「ひろめ市場」を楽しむコツは？",
    "a": "高知城のふもとに位置する「ひろめ市場」は、約60軒の飲食店や鮮魚店が軒を連ねる巨大な屋台村。冬でも熱気にあふれ、昼間から地元客と観光客が相席で乾杯する土佐のおきゃく（宴会）文化を体験できます。「やいろ亭」や「明神丸」の焼き立て藁焼きタタキ、「安兵衛」のパリパリ屋台餃子、青さのりの天ぷらなどを買い集めてテーブルで楽しめます。混雑する夕方17時〜19時を避け、平日の昼下がりや早めの16時台に訪れると席を確保しやすく快適です。"
  },
  {
    "q": "高知城下の「三翠園温泉」の歴史と泉質・効能は？",
    "a": "三翠園の敷地はかつて土佐藩十代藩主・山内豊策が造営した下屋敷の跡地であり、西郷隆盛と山内容堂の会見など幕末史の舞台となった由緒ある地です。1997年に高知市中心部で初めて湧出した自家源泉「三翠園温泉」は、ナトリウム-塩化物温泉（弱アルカリ性高温泉）。塩分が肌の表面に膜を作り、水分の蒸発を防ぐため抜群の保温・保湿効果を発揮します。「温まりの湯」「傷の湯」として親しまれ、冬の冷えた身体を芯からポカポカに温めてくれます。"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-blue-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-blue-600 transition">特集一覧</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">高知・桂浜＆竹林寺 冬の初日の出と新春初詣</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sunrise className="w-4 h-4 text-blue-400" />
              11月・12月・1月冬の南国土佐探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【高知・桂浜＆五台山竹林寺】<br className="hidden sm:inline" />
              太平洋望む名勝「桂浜」初日の出と坂本龍馬像！<br />
              知恵の文殊「五台山 竹林寺」新春初詣・極上戻り鰹＆名宿
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              黒潮が躍る土佐湾の雄大な地平線。冬の澄んだ大気のもと、桂浜の弓状の渚から拝する感動の初日の出と、未来を見据える坂本龍馬の巨像。四国屈指の名刹「五台山 竹林寺」で授かる文殊菩薩の知恵と新春厄除祈願。皮目はパリッと香ばしく身は濃厚にトロける冬の戻り鰹・藁焼き塩タタキと、幻の和牛「土佐あかうし」。高知城下の天然温泉と伝統の老舗宿を巡る、心熱くなる冬の高知旅をお届けします。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-blue-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-blue-400" /> エリア: 高知県高知市・桂浜・五台山
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Waves className="w-4 h-4 text-blue-400" /> 温泉: 三翠園温泉（ナトリウム・塩化物泉）
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 桂浜の初日の出と坂本龍馬像 */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Pacific Sunrise & Historical Hero</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                黒潮寄せる白砂青松「桂浜」の感動初日の出と、太平洋を見据える坂本龍馬像
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                高知県を代表する景勝地「桂浜（かつらはま）」。浦戸半島の先端、龍頭岬（りゅうずみさき）と龍王岬（りゅうおうみさき）の間に美しい弓状に広がる海岸は、古くより「月の名所は桂浜」と『よさこい節』に唄われてきた名勝です。しかし、冬の早朝に訪れる桂浜の真骨頂は、漆黒の太平洋が白光へと染まりゆく劇的な日の出の瞬間にあります。
              </p>
              <p>
                11月から1月にかけての冬期は、大気中の湿度が下がり水蒸気が澄み切るため、視界を遮るもののない土佐湾の水平線がくっきりと弧を描きます。元旦の早朝、波打ち際に打ち寄せる豪快な白波の向こうから真っ赤な太陽が姿を現すと、空と海が一瞬にして黄金色に染まり、集まった参拝者から自然と感嘆の声が漏れます。龍王岬の突端に祀られた「海津見神社（龍王宮）」の朱色の鳥居が朝日に照らされる風景は、新年の始まりを寿ぐにふさわしい荘厳さをたたえています。海津見神社は海上安全と大漁追福の神として漁師たちの信仰を集めてきた古社で、断崖に立つ社殿からの見晴らしは太平洋の丸みを実感できるほどの迫力です。
              </p>
              <p>
                そして龍頭岬の高台に立つのが、高知の象徴「坂本龍馬銅像」。昭和3年（1928年）、高知県の青年たちが寄付金を募って建立したこの巨像は、台座を含めて高さ約13.5m。懐手にブーツ姿で、はるか太平洋の彼方、世界を見据える凛々しい表情が印象的です。澄んだ冬空を背に朝光を浴びる龍馬の姿は、新しい一年に向けて挑戦する勇気と強い志を与えてくれます。近年リニューアルされた桂浜公園の商業エリア「桂浜 竜宮の浜」では、温かい土佐茶や名物アイスクリン、龍馬ゆかりの工芸品が並び、早朝参拝後の心地よい休憩拠点として親しまれています。
              </p>
            </div>
          </section>

          {/* Section 2: 五台山 竹林寺の新春初詣 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Wisdom & Sacred Heritage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                四国霊場第31番「五台山 竹林寺」文殊菩薩の知恵授かりと名勝庭園の静謐
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                高知市街と浦戸湾を見下ろす緑豊かな五台山の山頂近くに鎮座する「竹林寺（ちくりんじ）」。神亀元年（724年）、聖武天皇の勅願により行基菩薩が唐の霊場・五台山に似たこの地に開創したと伝わる四国八十八ヶ所霊場第31番札所です。御本尊は「三人寄れば文殊の知恵」で知られる文殊菩薩（重要文化財）。知恵の仏様として、学問成就、受験合格、事業の成功を祈願する新春初詣客が後を絶ちません。弘法大師空海もこの地で修法し、学問修行を重ねたと伝わる四国屈指の文教の聖地です。
              </p>
              <p>
                石段を登り山門をくぐると、冬の清冽な木立の中に朱塗りの五重塔が凛として聳え立ちます。昭和55年に再建された総高約31mの五重塔は、冬の澄んだ青空とのコントラストが息を呑む美しさです。また、境内に広がる庭園は、鎌倉時代末期に高僧・夢窓国師によって作庭されたと伝わる国指定名勝庭園。中国の廬山を模したとされる石組みと柔らかな苔の上に、冬の木漏れ日が落ちる光景は、世俗の喧騒を忘れさせる深い静寂に満ちています。冬の朝一番、霜を踏みしめながら巡る本堂の回廊では、読経の朗々たる響きが心地よく心身を浄化してくれます。
              </p>
              <p>
                参拝後は、隣接する「五台山展望台」に立ち寄るのがおすすめコース。鏡川や江ノ口川が流れ込む高知市街地、威容を誇る高知城天守、そして南に広がる浦戸湾の冬のパノラマが一望のもとに広がり、土佐の雄大な自然と都市が調和した絶景を満喫できます。さらに五台山には、朝ドラで脚光を浴びた植物分類学の父・牧野富太郎博士を顕彰する「高知県立牧野植物園」が広がり、冬でも温室で熱帯植物の瑞々しい息吹を体感できる贅沢な文化探訪ルートが形成されています。
              </p>
            </div>
          </section>

          {/* Section 3: 土佐冬グルメ 戻り鰹藁焼き＆土佐あかうし */}
          <section className="mb-16">
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Gourmet Feast</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                炎が上がる「戻り鰹の藁焼き塩タタキ」と、幻の和牛「土佐あかうし」の至高の宴
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                高知の冬旅において、何よりの楽しみは黒潮と四国山地が育む豊かな食文化です。春の初鰹がさっぱりとした赤身の旨味を楽しむのに対し、秋から冬にかけて南下してくる「戻り鰹」は、たっぷりと脂を蓄えてトロのような濃厚なコクを誇ります。この戻り鰹を美味しく味わう最高の調理法が、伝統の「藁焼き（わらやき）」です。江戸時代、土佐藩主・山内一豊が魚の食中毒を懸念して鰹の生食を禁じた際、庶民が「表面を焼いたから生ではない」と言い張ってタタキにして食べたのが発祥とされる土佐人の知恵と意気地が詰まった名物です。
              </p>
              <p>
                乾燥させた稲藁に火を点けると、瞬間的に800度から1000度を超える猛烈な炎が立ち上ります。この強火で鰹の表面だけを一気に焼き上げることで、皮目はパリッと香ばしく、中は冷たいレアの絶妙な食感に仕上がります。さらに藁が燃える煙によって芳醇な燻煙香が魚全体を包み込み、生臭さが完全に消え去ります。焼き立ての温かいタタキに粗塩を振り、厚切りの生ニンニクや青ネギ、ミョウガとともに豪快に頬張る「塩タタキ」は、脂の甘みと旨味が口いっぱいに弾ける至高の郷土料理です。
              </p>
              <p>
                さらに冬のご馳走として見逃せないのが、高知県特産の和牛「土佐あかうし（褐毛和種高知系）」。日本の肉用牛の0.1%にも満たない希少な牛で、赤身肉の豊かな風味とアミノ酸の旨味、そして口どけの良い良質なサシが絶妙なバランスを保っています。冬の土佐あかうしのすき焼きや陶板焼きは、脂っこさがなく肉本来の深いコクを余すところなく味わい尽くせます。大皿に旬の魚介や巻物、甘味を盛り込んだ宴会料理「皿鉢（さわち）料理」とともに、地元の辛口純米酒「司牡丹」「酔鯨」「美丈夫」の熱燗を傾ければ、心も身体も芯から温まります。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-600 pl-4 mb-8">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】高知城下・桂浜周辺の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※リアルタイムAPIから取得した宿泊料金目安・レビュー評価・立地条件を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-blue-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">冬の美食:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] text-stone-400">
                        楽天トラベル公認宿泊プラン・即時予約対応
                      </span>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
                      >
                        楽天トラベルでプラン・空室を確認
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 冬の高知1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-stone-700 pl-4 mb-6">
              <span className="text-xs font-bold text-stone-600 tracking-wider uppercase">Model Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日】太平洋初日の出と知恵の文殊・土佐美食を満喫する高知モデルコース
              </h2>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-stone-800 text-white text-xs font-bold rounded">DAY 1</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    高知城下へ到着！五台山竹林寺で文殊初詣と老舗旅館の温泉・皿鉢料理
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">11:00</strong> 高知龍馬空港またはJR高知駅に到着。レンタカーまたは周遊バス「MY遊バス」を利用。
                  </li>
                  <li>
                    <strong className="text-stone-800">12:00</strong> 「ひろめ市場」で昼食。名物藁焼き鰹タタキや屋台餃子、青さのり天ぷらを味わう。
                  </li>
                  <li>
                    <strong className="text-stone-800">14:00</strong> 「五台山 竹林寺」へ。名勝庭園を愛で、文殊菩薩に新春祈願・知恵授かり。五台山展望台から浦戸湾を一望。
                  </li>
                  <li>
                    <strong className="text-stone-800">16:30</strong> 「城西館」または「三翠園」へチェックイン。
                  </li>
                  <li>
                    <strong className="text-stone-800">17:30</strong> 展望露天風呂や天然温泉に浸かり、冬の夕暮れにライトアップされる高知城天守を眺望。
                  </li>
                  <li>
                    <strong className="text-stone-800">19:00</strong> 戻り鰹の藁焼き塩タタキや土佐あかうし、新鮮な地魚を盛り込んだ土佐会席を堪能。
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded">DAY 2</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    早朝の桂浜へ！感動の太平洋初日の出と坂本龍馬像・土佐みやげ探訪
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">06:00</strong> 宿を出発し、車で約25分の「桂浜」へ。
                  </li>
                  <li>
                    <strong className="text-stone-800">06:45</strong> 龍王岬の海津見神社鳥居近くで待機。太平洋の水平線から昇る神々しい初日の出を拝礼。
                  </li>
                  <li>
                    <strong className="text-stone-800">07:45</strong> 朝日に輝く「坂本龍馬銅像」を見上げ、新年の大願成就と飛躍を誓う。
                  </li>
                  <li>
                    <strong className="text-stone-800">09:00</strong> 桂浜公園内の商業施設で温かいモーニングや柚子茶を味わい、宿へ戻ってチェックアウト。
                  </li>
                  <li>
                    <strong className="text-stone-800">11:00</strong> 高知城の追手門と天守閣を散策。追手門前で文旦や芋けんぴなど土佐銘菓を購入し帰路へ。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                冬の高知・桂浜旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">
              {faqList.map((f, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                    <span className="text-blue-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-blue-100">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク & 関連記事クロスナビゲーション */}
          <section className="border-t border-stone-200 pt-10">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-600" />
              RELATED WINTER FEATURES（冬の注目特集一覧）
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link 
                href="/winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【香川】琴平・金刀比羅宮＆善通寺</div>
                <p className="text-stone-500">785段石段の新春初詣と弘法大師誕生地・讃岐オリーブ牛＆こんぴら温泉名宿</p>
              </Link>
              <Link 
                href="/winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【徳島】大麻比古神社初詣＆阿波牛</div>
                <p className="text-stone-500">阿波国一宮の新春祈祷と鳴門鯛・阿波尾鶏・鳴門海峡冬景色名宿</p>
              </Link>
              <Link 
                href="/winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【宮崎】日向・馬ヶ背＆クルスの海</div>
                <p className="text-stone-500">断崖絶壁冬の太平洋パノラマと願い叶う海初詣・日向灘伊勢海老名宿</p>
              </Link>
              <Link 
                href="/winter-wakayama-kushimoto-shionomisaki-sunrise-hashiguiiwa-kindai-maguro-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【和歌山】串本・潮岬＆橋杭岩の初日の出</div>
                <p className="text-stone-500">本州最南端の水平線初日の出と奇岩朝焼け・近大マグロ＆串本温泉名宿</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
              >
                全国の冬特集・温泉宿泊ガイド一覧を見る →
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
