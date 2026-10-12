import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ことひら温泉郷で過ごす冬の旅（11・12月）！初冬の金刀比羅宮門前名湯！名宿5選',
  description: '11月から12月にかけて香川県・琴平町は、空気が澄み渡り讃岐富士（飯野山）や讃岐平野の美しい冬景色が広がる。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: 'ことひら温泉 宿泊, 金刀比羅宮 11月 12月, こんぴら温泉 宿, 紅梅亭, 桜の抄, 敷島館, 湯元八千代, 琴参閣, 讃岐オリーブ牛, 讃岐うどん, 香川 温泉 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay/",
  },
  openGraph: {
    title: 'ことひら温泉郷で過ごす冬の旅（11・12月）！初冬の金刀比羅宮門前名湯！名宿5選',
    description: '11月から12月にかけて香川県・琴平町は、空気が澄み渡り讃岐富士（飯野山）や讃岐平野の美しい冬景色が広がる。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月ことひら温泉郷のこんぴら参りと讃岐富士冬絶景】初冬の金刀比羅宮門前名湯・讃岐オリーブ牛ステーキ＆本場手打ち讃岐うどん会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ことひら温泉郷のこんぴら参りと讃岐富士冬絶景で過ごす冬の旅（11・12月）！初冬の金刀比羅宮門前名湯・讃岐オリーブ牛ステーキ＆本場手打ち讃岐うどん会席の宿5選",
    description: "11月から12月にかけて香川県・琴平町は、空気が澄み渡り讃岐富士（飯野山）や讃岐平野の美しい冬景色が広がる、年間で最も快適に金刀比羅宮の石段（御本宮785段・奥社1368段）を登れる参拝のベストシーズンを迎えます。参拝後にじんわりと足の疲れを癒やす門前町の天然温泉露天風呂、初冬の澄んだ夜空を仰ぐ展望露天、小豆島のオリーブ粕で育った香川最高峰の黒毛和牛「讃岐オリーブ牛」の鉄板焼きや陶板ステーキ、伊吹島産いりこ出汁が香る本場手打ち讃岐うどん、瀬戸内の冬真鯛を堪能する名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "金刀比羅宮の11月・12月の気候と、参拝（石段登り）におすすめの時期や時間帯は？",
    "a": "香川県・琴平町は瀬戸内海特有の温暖少雨な気候で、冬でも晴天率が非常に高いのが特徴です。11月は最高気温16℃前後、12月は12℃前後と、真夏のように汗だくになることなく、涼しく爽やかな空気の中で快適に石段を登れるベストシーズンです。石段は御本宮まで785段、奥社まで行くと1368段あります。午前中の澄み切った時間帯（朝8時〜10時頃）に登ると、御本宮の展望台から讃岐富士（飯野山）や瀬戸大橋まで見渡せる絶景が広がります。歩きやすいスニーカーと、登ると体温が上がるため脱ぎ着しやすい上着を用意してください。"
  },
  {
    "q": "ことひら温泉郷の泉質や特徴は？参拝の疲れにどう効く？",
    "a": "ことひら温泉郷の主な泉質は「アルカリ性単純温泉」や「放射能泉（単純弱放射能冷鉱泉）」です。刺激が少なく肌あたりが非常に滑らかな美肌の湯で、筋肉痛、関節痛、疲労回復、冷え性に優れた効果を発揮します。金刀比羅宮の石段を往復して疲れた足腰を、湯上がりにじんわりとほぐしてくれるため、『こんぴら参り後の最高の癒やし』として江戸時代から参拝客に親しまれてきた門前町の温泉文化が今も息づいています。"
  },
  {
    "q": "冬の香川・琴平で味わうべきご当地グルメ『讃岐オリーブ牛』とは？",
    "a": "『讃岐オリーブ牛』とは、オリーブオイルの搾油後の果実粕を乾燥させて飼料として育てられた香川県オリジナルの最高峰ブランド黒毛和牛です。オリーブに含まれるオレイン酸や抗酸化成分により、脂身が驚くほどあっさりと上品で、口の中でとろけるような柔らかな赤身とコク深い甘みが特徴です。冬の温泉旅館では、陶板ステーキやしゃぶしゃぶ、すき焼きで提供され、全国の和牛ファンから絶大な支持を集めています。"
  },
  {
    "q": "本場の『讃岐うどん』を味わうポイントや伊吹島のいりこ出汁とは？",
    "a": "讃岐うどんの美味しさの真髄は、小麦粉と塩水だけで打つ強いコシと喉越し、そして瀬戸内海の伊吹島（いぶきじま）で獲れる最高級の『白口煮干し（いりこ）』から丁寧にとる黄金色の澄んだ出汁にあります。冬の朝や参拝後には、熱々の出汁をかけた『かけうどん』や、茹でたてのうどんに生卵と生醤油を絡める『釜玉うどん』が格別です。旅館の会席料理でも、〆に職人が打つ本格讃岐うどんが提供されるのが定番です。"
  },
  {
    "q": "高松空港やJR岡山駅・高松駅から琴平へのアクセス方法は？",
    "a": "アクセスは極めて便利です。本州方面からは、山陽新幹線が停車するJR岡山駅から特急『南風（なんぷう）』に乗車すれば、瀬戸大橋を渡って約55分で直通でJR琴平駅に到着します。高松空港からは琴平駅前行きの空港リムジンバスが運行されており、所要時間は約45分。高松駅からはJR予讃線・土讃線の特急で約30分、または高松琴平電鉄（ことでん琴平線）で約60分です。各旅館は琴平駅からの無料送迎を行っています。"
  }
];

export default function KotohiraOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay#article",
        "headline": "【11・12月ことひら温泉郷のこんぴら参りと讃岐富士冬絶景】初冬の金刀比羅宮門前名湯・讃岐オリーブ牛ステーキ＆本場手打ち讃岐うどん会席の宿5選",
        "description": "11月から12月にかけて香川県・琴平町は、空気が澄み渡り讃岐富士（飯野山）や讃岐平野の美しい冬景色が広がる、年間で最も快適に金刀比羅宮の石段（御本宮785段・奥社1368段）を登れる参拝のベストシーズンを迎えます。参拝後にじんわりと足の疲れを癒やす門前町の天然温泉露天風呂、初冬の澄んだ夜空を仰ぐ展望露天、小豆島のオリーブ粕で育った香川最高峰の黒毛和牛「讃岐オリーブ牛」の鉄板焼きや陶板ステーキ、伊吹島産いりこ出汁が香る本場手打ち讃岐うどん、瀬戸内の冬真鯛を堪能する名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay#faq",
        "mainEntity": faqList.map(item => ({
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

  const hotels = [
            {
              id: 1,
              name: "湯元こんぴら温泉華の湯　紅梅亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901.jpg",
              rating: 4.60,
              reviews: 1772,
              price: "¥12,100〜",
              access: "ＪＲ琴平駅下車、徒歩5分（無料送迎有・要予約）。車：道善通寺ＩＣ下車約15分。高松空港より約40分",
              special: "露天風呂付スイートOPEN◆2種の源泉を楽しむ＜3箇所15種類の湯処＞でのんびり湯巡り",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5901%2F5901.html",
              story: "金刀比羅宮の表参道にほど近い緑豊かな庭園に佇み、館内だけで15種類もの多彩な湯船で湯めぐりが楽しめる名門温泉旅館「湯元こんぴら温泉華の湯 紅梅亭」。初冬の澄んだ風が心地よい露天風呂「花すみか」や「花くらぶ」では、木々の合間から讃岐の山並みを眺めながら、肌を優しく潤す弱アルカリ性単純温泉の名湯を堪能できます。館内には割烹ダイニングやオープンキッチンが整い、料理人が目の前で腕を振るう華やかな食事処で、香川が誇る最高峰の味覚と贅沢なおもてなしを体験できます。",
              roomTip: "温泉露天風呂付き客室「花錦亭」または和洋デラックス室。専用の信楽焼や檜の露天風呂から初冬の庭園を眺め、参拝後の心地よい疲労感を贅沢に癒やすプライベートステイが叶います。",
              gourmetTip: "オープンキッチン「丸忠」でいただく季節の讃岐味覚会席。きめ細やかな肉質とオレイン酸の芳醇な旨味が広がる特選「讃岐オリーブ牛」の陶板ステーキや、瀬戸内海の冬真鯛・ハマチのお造り、本場讃岐うどん。",
              highlights: [
                "館内15種の多彩な湯めぐり＆緑豊かな庭園露天風呂「花すみか」「花くらぶ」",
                "オープンキッチン「丸忠」で繰り広げられる讃岐旬魚・オリーブ牛のライブ調理",
                "特選讃岐オリーブ牛の陶板ステーキや瀬戸内冬真鯛・手打ちうどんの贅沢膳"
              ]
            },
            {
              id: 2,
              name: "こんぴら温泉　琴平グランドホテル　桜の抄",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5900/5900.jpg",
              rating: 4.59,
              reviews: 2032,
              price: "¥10,450〜",
              access: "全室Wi-Fi無料/ＪＲ琴平駅下車、徒歩約15分（無料送迎有・要予約）。車/善通寺ＩＣより約15分　高松空港より約40分",
              special: "金刀比羅宮に続く参道まで徒歩1分で参拝に便利な温泉宿。和洋約50種類の朝食バイキング好評。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5900%2F5900.html",
              story: "金刀比羅宮へと続く参道22段目に位置し、こんぴら参りへの抜群のアクセスと讃岐富士（飯野山）を望む絶景展望露天風呂を誇る名旅館「こんぴら温泉 琴平グランドホテル 桜の抄。」。最上階の展望露天風呂「ゆすらうめ」からは、初冬の澄み渡る讃岐平野の彼方に優美な円錐形の讃岐富士がくっきりと見渡せ、朝焼けや夕景の美しさは息をのむほど。館内にはバラの花びらを浮かべた女性限定の「華風呂」など優雅な湯船が揃い、参拝の前後に心身ともにリフレッシュできます。",
              roomTip: "讃岐富士を望む展望客室「ゆらくや」または温泉露天風呂付き客室。初冬の朝日に照らされて黄金色に輝く讃岐富士のパノラマを客室から独占する贅沢な眺望が魅力。",
              gourmetTip: "割烹ダイニングでの讃岐旬彩会席。A5ランク讃岐オリーブ牛のすき焼きやサーロインステーキ、冬に脂が乗る瀬戸内海の鰆（サワラ）や鮑の踊り焼きなど、豪華な食材が目白押し。",
              highlights: [
                "参道22段目の好立地＆最上階展望露天風呂から望む讃岐富士（飯野山）の大絶景",
                "バラの花びらを贅沢に浮かべた女性限定「華風呂」＆参拝前後の安心拠点",
                "A5讃岐オリーブ牛すき焼きと瀬戸内鮮魚のお造りを味わう割烹会席"
              ]
            },
            {
              id: 3,
              name: "御宿　敷島館（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176626/176626.jpg",
              rating: 4.59,
              reviews: 1760,
              price: "¥13,700〜",
              access: "ＪＲ琴平駅より徒歩にて約８分◆お車ナビには目的地：香川県仲多度郡琴平町８５１ー１（駐車場）経由地：琴平小学校を設定下さい",
              special: "おかげさまで開業7周年★貸切風呂や夜食など無料のサービスが充実！近隣にペット預かり施設もあり★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176626%2F176626.html",
              story: "国の登録有形文化財に指定されていた旧敷島館の唐破風（からはふ）造りの歴史ある堂々たる建築美を復元し、共立リゾートの洗練されたおもてなしで蘇った名宿「御宿 敷島館」。参道沿いの賑わいの中にありながら、一歩館内に入ると木の温もりと大正ロマンの情緒が漂う静謐な空間が広がります。大浴場には岩露天風呂や檜風呂が備わり、さらに空いていれば何度でも無料で利用できる4つの趣異なる貸切風呂を完備。参拝後の足湯や、名物の無料夜鳴きそばサービスなど心温まるおもてなしが揃います。",
              roomTip: "参道側の露天風呂付き和洋室または高層階ツイン。クラシカルな格子戸と現代的なシモンズ製ベッドが調和し、門前町の情緒を眼下に感じながらゆったりと寛げます。",
              gourmetTip: "お食事処での和会席ディナー。厳選されたオリーブ牛のしゃぶしゃぶや陶板焼きをはじめ、讃岐コーチン、瀬戸内の新鮮魚介、〆には職人が打つ本格讃岐うどんを心ゆくまで堪能。",
              highlights: [
                "国の登録有形文化財旧敷島館の唐破風建築を復元＆4つの無料貸切風呂完備",
                "大正ロマン薫る木造空間と共立リゾート名物の無料夜鳴きそばサービス",
                "厳選オリーブ牛しゃぶしゃぶや讃岐コーチン・打ちたてうどんの和会席"
              ]
            },
            {
              id: 4,
              name: "こんぴら温泉湯元八千代",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8572/8572.jpg",
              rating: 3.18,
              reviews: 797,
              price: "¥6,600〜",
              access: "四国横断高速道・高松道「善通寺IC」よりR319号にて琴平へ約10分",
              special: "本館屋上に露天風呂とバレルサウナ。本館7階展望風呂付客室・貸切風呂が好評。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8572%2F8572.html",
              story: "ことひら温泉郷の発祥の地として知られ、自家源泉「神の湯」を引く由緒正しき元湯旅館「こんぴら温泉 湯元八千代」。参道まで徒歩わずか1分という好立地にあり、屋上に設けられた展望露天風呂からは、金刀比羅宮が鎮座する象頭山（琴平山）の冬木立と、反対側に広がる讃岐富士のパノラマを360度の大パノラマで見渡せます。肌に優しいアルカリ性単純温泉が滾々と注がれ、湯治情緒を残した素朴で温かいおもてなしが旅人の心をほっと和ませます。",
              roomTip: "最上階の讃岐富士ビュー和室または展望風呂付き客室。朝の光に照らされる讃岐富士を窓から眺め、静かに流れる門前町の時間に浸ることができます。",
              gourmetTip: "お部屋食または個室でいただく名物讃岐会席。讃岐オリーブ牛の陶板焼きやすき焼き、瀬戸内海の旬の地魚のお造り、いりこ出汁が効いた名物の手打ち讃岐うどん鍋など、素朴で温かい手作りの味。",
              highlights: [
                "ことひら温泉発祥の元湯自家源泉「神の湯」＆屋上展望露天からの360度パノラマ",
                "参道徒歩1分の抜群のロケーション＆手作りのおもてなしと名物料理",
                "讃岐オリーブ牛陶板焼きといりこ出汁うどん鍋を味わう伝統のお部屋食"
              ]
            },
            {
              id: 5,
              name: "ことひら温泉　琴参閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14833/14833.jpg",
              rating: 4.39,
              reviews: 3195,
              price: "¥9,900〜",
              access: "ＪＲ琴平駅より徒歩５分／善通寺ＩＣより車で１５分",
              special: "風雅な寛ぎと古き良き日本の心。男女６種の浴槽を持つ讃水館大浴場と飛天館宿泊者専用展望風呂を堪能下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14833%2F14833.html",
              story: "金倉川のほとりに佇み、四国最大級のスケールを誇る巨大な温泉大浴場が自慢の大型旅館「ことひら温泉 琴参閣」。讃岐の伝統美を取り入れた重厚な館内には、飛天館と讃水館の2棟があり、飛天館宿泊者専用の展望露天風呂「八十八の湯」からは初冬の琴平の町並みと讃岐富士の絶景を一望できます。大浴場にはバラエティ豊かな湯船や薬湯、サウナが完備され、旅の疲れを余すところなくリフレッシュ。団体から個人旅行、記念日旅行まで幅広く対応する充実の施設が魅力です。",
              roomTip: "飛天館の特別フロア和室または温泉露天風呂付き客室。上層階ならではの雄大な眺望と、ゆとりある数寄屋造りの空間で贅沢なプライベートタイムを過ごせます。",
              gourmetTip: "個室料亭またはお食事処で供される讃岐特選会席。香川県特産のオリーブ牛ステーキや、瀬戸内海直送の真鯛の兜煮、冬野菜の炊き合わせ、伊吹島産いりこを使った風味豊かな讃岐うどん。",
              highlights: [
                "四国最大級の温泉大浴場＆飛天館宿泊者専用の展望露天風呂「八十八の湯」",
                "金倉川のせせらぎを望む壮大なスケール＆サウナや多彩な湯船でリフレッシュ",
                "ブランド讃岐オリーブ牛と瀬戸内の旬魚・伊吹島いりこ出汁うどん会席"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white overflow-hidden py-16 sm:py-24 border-b border-orange-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Footprints className="w-4 h-4 text-orange-400" />
            <span>11月・12月 冬の香川・琴平 ことひら温泉郷特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">ことひら温泉郷のこんぴら参りと讃岐富士冬絶景で過ごす冬の旅（11・12月）！初冬の金刀比羅宮門前名湯・讃岐オリーブ牛ステーキ＆本場手打ち讃岐うどん会席の宿5選</h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
            11月から12月にかけて香川県・琴平町は、空気が澄み渡り讃岐富士（飯野山）や讃岐平野の美しい冬景色が広がる、年間で最も快適に金刀比羅宮の石段（御本宮785段・奥社1368段）を登れる参拝のベストシーズンを迎えます。参拝後にじんわりと足の疲れを癒やす門前町の天然温泉露天風呂、初冬の澄んだ夜空を仰ぐ展望露天、小豆島のオリーブ粕で育った香川最高峰の黒毛和牛「讃岐オリーブ牛」の鉄板焼きや陶板ステーキ、伊吹島産いりこ出汁が香る本場手打ち讃岐うどん、瀬戸内の冬真鯛を堪能する名宿を厳選してご紹介します。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 11月〜12月が参拝ベスト気候</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-orange-400" /> 讃岐富士＆金刀比羅宮展望</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-orange-400" /> アルカリ性単純温泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-orange-400" /> 讃岐オリーブ牛・讃岐うどん</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月ことひら温泉郷】初冬の金刀比羅宮門前名湯！名宿5選","item":"https://croud-travel.pages.dev/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"}]}) }}
      />

        {/* Section 1: Intro Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月のことひら温泉郷とこんぴら参りが選ばれる理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              「さぬきのこんぴらさん」として全国の人々から古くから信仰を集めてきた金刀比羅宮。海の神様・大物主神（おおものぬしのかみ）を祀るこの聖地は、御本宮まで785段、奥社の厳魂神社（いづたまじんじゃ）までは実に1,368段もの長い石段が続きます。真夏の猛暑では過酷を極める石段参りも、11月から12月にかけての初冬は気温が12℃〜16℃前後の爽やかな快晴日が多く、心地よい汗を流しながら清々しく登りきることができる年間最高の季節です。
            </p>
            <p>
              御本宮の拝殿横に設けられた展望台からは、初冬の澄み渡る空気の向こうに、優美な円錐形を描く「讃岐富士（飯野山）」や広大な讃岐平野、遠く瀬戸大橋や瀬戸内海の多島美までを一望できます。参拝を終えて門前町へ戻った後は、ことひら温泉郷の名湯が待っています。弱アルカリ性の柔らかな湯ざわりのお湯は、歩き疲れた足腰の筋肉を優しく包み込み、湯上がりには驚くほど身体が軽くなるのを感じられます。
            </p>
            <p>
              さらに、美食の王国・香川ならではの冬の味覚も旅の大きな魅力です。オリーブオイルの搾り粕を飼料にして育てられた最高峰ブランド牛「讃岐オリーブ牛」は、オレイン酸を豊富に含み、脂のくどさが一切なく、口の中でとろけるような赤身の旨味が際立ちます。また、瀬戸内海の伊吹島産最高級いりこ（煮干し）からとった黄金色の澄んだ出汁と、職人が手打ちするコシの強い本場讃岐うどん、冬に脂が乗った瀬戸内の真鯛や鰆の会席料理など、五感を満たす至福の美味が揃います。
            </p>
          </div>
        </section>

        {/* Section 2: Deep Dive into Onsen Chemistry & Gastronomy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Kotohira Wellness & Sanuki Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                参拝の疲労を瞬時に癒やす門前名湯と、讃岐オリーブ牛・いりこうどんの科学
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-700" />
              <span>弱アルカリ性単純温泉がもたらす乳酸分解と関節・筋肉疲労の回復作用</span>
            </h3>
            <p>
              金刀比羅宮の石段（御本宮往復1,570段、奥社往復2,736段）を登り終えた後の身体は、下半身の筋肉に乳酸が蓄積し、適度な疲労感に包まれています。これを瞬時にリセットしてくれるのが、ことひら温泉郷の「アルカリ性単純温泉」および「単純弱放射能冷鉱泉」です。
            </p>
            <p>
              pH8.0前後のマイルドなアルカリ性の湯は、運動によって酸性に傾いた皮膚表面を中和し、毛穴に詰まった皮脂汚れを優しく乳化して洗い流します。さらに、温浴効果による末梢血管の拡張が血流を飛躍的に促進し、筋肉に溜まった疲労物質（乳酸）の代謝と排出をスムーズに後押しします。湯船に浸かりながら足指やふくらはぎを優しく揉みほぐすことで、翌朝に筋肉痛を残さず、爽快な目覚めを迎えられます。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-orange-700" />
              <span>オレイン酸が生む奇跡の霜降り「讃岐オリーブ牛」と、伊吹島産いりこ出汁の深遠</span>
            </h3>
            <p>
              香川県が誇るプレミアム黒毛和牛「讃岐オリーブ牛」は、小豆島でオリーブオイルを搾った後の果実粕を独自の技術でじっくり乾燥・焙煎し、出荷前の肥育牛に一定期間給餌して育てられます。オリーブ果実に含まれる豊富なオレイン酸が牛の脂肪交雑（サシ）に移行することで、脂の融点が劇的に下がり、人肌程度の温度でさらりと溶ける極上の口どけを実現しています。抗酸化成分ポリフェノールも豊富で、脂っこさを感じさせない上品な後味が特徴です。
            </p>
            <p>
              そして、香川のソウルフードである讃岐うどんの命が「出汁（ダシ）」です。瀬戸内海の西端に位置する伊吹島沖で獲れるカタクチイワシは、水揚げ後30分以内に島内の加工場で煮沸・乾燥されるため、酸化が一切進んでいない最高級の「白口いりこ」に仕上がります。このいりこを一晩水出しし、弱火で丁寧に煮出した黄金色の出汁は、旨味成分イノシン酸が爆発的に溶け込み、雑味のない澄み切った芳醇な香りを放ちます。職人が手打ちしたコシのあるうどんと合わさることで、五臓六腑に染み渡る究極の温もりを届けてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-orange-700 text-orange-700" />
              <span>Rakuten Travel Verified Kotohira Stays</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月におすすめのことひら温泉郷・厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、金刀比羅宮へのアクセス、讃岐富士の展望露天風呂、讃岐オリーブ牛＆手打ちうどん料理の満足度が高い宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col group"
              >
                {/* Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{h.rating}</span>
                    <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8 w-full flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                        {h.name}
                      </h3>
                    </div>
                    <p className="text-xs text-orange-800 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                      <span>{h.special}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">おすすめの客室：</span>
                        <span>{h.roomTip}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">注目の冬グルメ：</span>
                        <span>{h.gourmetTip}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 gap-1.5 pt-1 text-xs text-slate-700">
                      {h.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-900">
                        {h.price}
                      </span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-700 to-orange-800 hover:from-orange-800 hover:to-slate-900 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all group/btn"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Winter Model Itinerary */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                こんぴら参りと讃岐富士絶景を満喫する1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-4 text-slate-700 text-sm sm:text-base">
            <div className="border-l-2 border-orange-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-orange-800 text-white px-2 py-0.5 rounded">1日目 午前〜午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">高松空港または岡山駅から琴平へ〜表参道うどんランチとチェックイン</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                特急列車や空港バスで琴平に到着。表参道のうどん専門店で、熱々のいりこ出汁かけうどんや釜揚げうどんを堪能。手荷物を宿に預けて、まずは門前町のレトロな商店街や日本最古の芝居小屋「旧金毘羅大芝居（金丸座）」を見学します。
              </p>
            </div>

            <div className="border-l-2 border-orange-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-orange-800 text-white px-2 py-0.5 rounded">1日目 夕方〜夜</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">讃岐富士を望む展望露天風呂〜讃岐オリーブ牛と瀬戸内旬魚会席</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                宿にチェックイン後は展望露天風呂へ。夕暮れの讃岐富士（飯野山）のシルエットを眺めながら、アルカリ性の柔らかな湯に浸かります。夕食には最高ランクの「讃岐オリーブ牛」陶板ステーキや、瀬戸内の冬真鯛、手打ちうどんを香川の銘酒「金陵」とともに味わう贅沢なひとときを。
              </p>
            </div>

            <div className="border-l-2 border-orange-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-orange-800 text-white px-2 py-0.5 rounded">2日目 早朝〜午前</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">爽快な朝のこんぴら参り（御本宮785段・奥社1368段）と絶景パノラマ</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝食後、澄んだ初冬の空気の中いよいよ金刀比羅宮の石段参りへ。大門をくぐり、重要文化財の旭社を経て785段の御本宮へ到達。展望台から朝日に輝く讃岐富士と瀬戸内海の絶景を拝み、さらに足を延ばして1368段の奥社まで登りきれば、格別の達成感とご利益に包まれます。
              </p>
            </div>

            <div className="border-l-2 border-orange-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-orange-800 text-white px-2 py-0.5 rounded">2日目 午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">参拝後の足湯＆灸まん・瓦せんべいお土産選び〜帰路へ</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                下山後は門前町の足湯で疲れた足を癒やし、琴平名物の銘菓「灸まん」や「灸まんうどん」、香川伝統の和三盆糖スイーツをお土産に買い求めます。琴平駅から特急列車に乗車し、心洗われる参拝の旅を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Preparation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・石段参拝の注意点
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-orange-700" />
                <span>気候と石段参拝時の服装</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                琴平の初冬は瀬戸内気候で日中は12℃〜16℃と穏やかですが、朝晩は5℃前後まで冷え込みます。石段を登る際は体温が急上昇して汗をかくため、吸汗速乾性のインナーの上に脱ぎ着しやすいウインドブレーカーやジップアップフリースを羽織る重ね着がベストです。足元は滑りにくいクッション性の高いスニーカーを必ず着用してください。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-700" />
                <span>参拝杖の活用と水分補給</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                表参道のお土産店や旅館では参拝用の木製杖を無料または安価で貸し出しています。杖があるだけで膝や腰への負担が大幅に軽減されます。冬でも石段登りは水分を消費するため、ボトル飲料を持参し、無理のないペースで小休止を挟みながら登りましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）とことひら温泉郷の冬旅アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-orange-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Related Shikoku & Winter Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい四国・西日本の冬名湯＆全国絶景特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの歴史ある名湯や冬の郷土会席を味わう全国の人気特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">愛媛・道後温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">日本最古の名湯本館と名物宇和島鯛めし・伊予牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">佐賀・武雄温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">辰野金吾楼門と極上佐賀牛すき焼き・御船山楽園の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">佐賀・嬉野温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">日本三大美肌の湯と名物温泉とろける湯豆腐・佐賀牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">大分・由布院温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">初冬の金鱗湖幻想朝霧と由布岳冠雪・極上豊後牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">鹿児島・指宿温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">天然砂むし温泉と開聞岳錦江湾露天・かごしま黒豚しゃぶしゃぶの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kagawa-kotohira-onsen-konpira-olive-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
