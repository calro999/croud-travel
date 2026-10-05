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
  title: "【11・12月越前三国温泉の解禁越前がにと東尋坊冬絶景】日本海パノラマ露天風呂・本場越前蟹フルコース＆若狭牛会席の宿5選",
  description: "11月6日のズワイガニ漁解禁とともに、福井県・三国港は全国の美食家が押し寄せる「越前がに」の最高潮シーズンを迎えます。三国港で水揚げされ黄色いタグが付けられた越前がには、皇室献上ガニとしても名高い冬の日本海の至宝。冬の荒波が打ち寄せる奇岩・東尋坊のダイナミックな景観、日本海に沈む夕日と水平線を望む三国温泉の展望露天風呂、職人が絶妙な塩加減で茹で上げる本場越前がに、花咲くカニ刺し、甲羅焼き味噌、福井の銘柄牛「若狭牛」のステーキを味わう、冬の贅を尽くした海辺の名宿5選を徹底解説。",
  keywords: '三国温泉 越前がに 宿泊, 越前三国 11月 12月, 東尋坊 冬 絶景, 越前がに 解禁 宿, 三国温泉 いそや, 三国オーシャンリゾート, 休暇村 越前三国, オーベルジュほまち 三國湊, 若狭牛 ステーキ, 福井 カニ 旅',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay/",
  },
  openGraph: {
    title: "【11・12月越前三国温泉の解禁越前がにと東尋坊冬絶景】日本海パノラマ露天風呂・本場越前蟹フルコース＆若狭牛会席の宿5選",
    description: "11月6日のズワイガニ漁解禁とともに、福井県・三国港は全国の美食家が押し寄せる「越前がに」の最高潮シーズンを迎えます。三国港で水揚げされ黄色いタグが付けられた越前がには、皇室献上ガニとしても名高い冬の日本海の至宝。冬の荒波が打ち寄せる奇岩・東尋坊のダイナミックな景観、日本海に沈む夕日と水平線を望む三国温泉の展望露天風呂、職人が絶妙な塩加減で茹で上げる本場越前がに、花咲くカニ刺し、甲羅焼き味噌、福井の銘柄牛「若狭牛」のステーキを味わう、冬の贅を尽くした海辺の名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月越前三国温泉の解禁越前がにと東尋坊冬絶景】日本海パノラマ露天風呂・本場越前蟹フルコース＆若狭牛会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月越前三国温泉の解禁越前がにと東尋坊冬絶景】日本海パノラマ露天風呂・本場越前蟹フルコース＆若狭牛会席の宿5選",
    description: "11月6日のズワイガニ漁解禁とともに、福井県・三国港は全国の美食家が押し寄せる「越前がに」の最高潮シーズンを迎えます。三国港で水揚げされ黄色いタグが付けられた越前がには、皇室献上ガニとしても名高い冬の日本海の至宝。冬の荒波が打ち寄せる奇岩・東尋坊のダイナミックな景観、日本海に沈む夕日と水平線を望む三国温泉の展望露天風呂、職人が絶妙な塩加減で茹で上げる本場越前がに、花咲くカニ刺し、甲羅焼き味噌、福井の銘柄牛「若狭牛」のステーキを味わう、冬の贅を尽くした海辺の名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "三国港の「越前がに」の漁解禁時期と、黄色いタグの意味は何ですか？",
    "a": "福井県の越前がに漁は、毎年11月6日に一斉に解禁され、翌年3月20日まで行われます（メスのセイコガニは12月末まで）。福井県内の港（三国港、越前港、敦賀港、小浜港）で水揚げされたオスのズワイガニには、本物の証として「黄色いプラスチック製のタグ」が脚に付けられます。中でも三国港は、皇室に献上される唯一の越前がに（献上品質）を扱う港として全国に知られ、近海の好漁場から日帰り操業で水揚げされるため鮮度と身の締まりが抜群です。"
  },
  {
    "q": "冬の東尋坊の観光の見どころと、気候や波の様子について教えてください。",
    "a": "東尋坊は国の天然記念物・名勝に指定された柱状節理の巨大な断崖絶壁です。11月〜12月になると日本海からの冷たい北西の季節風が吹き付け、激しい白波が岸壁に打ち砕かれるダイナミックな冬景色が広がります。強い風と荒波によって海水中のプランクトン粘液が泡立ち、まるで白い雪が舞い上がるように泡が風に舞う「波の花（なみのはな）」が見られることもあります。足元が濡れて滑りやすいため、スニーカーや滑り止め付きの靴を着用し、暴風対策のフード付きダウンが必須です。"
  },
  {
    "q": "三国温泉の泉質と入浴時の効果・特徴を教えてください。",
    "a": "三国温泉は、ナトリウム・カルシウム-塩化物温泉（中性〜弱アルカリ性）です。海水成分に似た塩分を豊富に含んでいるため、入浴すると塩分が肌の表面に微細な皮膜を形成し、汗の蒸発を防ぎます。そのため「熱の湯」「温まりの湯」と呼ばれ、冬の冷え性改善や関節痛、筋肉痛の緩和に絶大な効果があります。湯冷めしにくく、湯上がり後もポカポカとした温もりが長く持続するのが特徴です。"
  },
  {
    "q": "冬の三国エリアで越前がに以外に味わうべき福井グルメは何ですか？",
    "a": "冬の三国・福井で外せないのが、きめ細かな霜降りと上質な甘みを誇る「若狭牛（わかさぎゅう）」のステーキや陶板焼きです。また、冷たい日本海で身が引き締まり脂がたっぷり乗った「寒ブリ（かんぶり）」のお造りやブリしゃぶ、濃厚な甘みの「三国港産甘エビ」、高級魚「ノドグロ」の塩焼きも絶品。さらに、大根おろしのだし汁でさっぱりといただく福井名物「越前おろしそば」や、内子・外子が詰まった冬限定の「セイコガニ丼」は感動的な美味しさです。"
  },
  {
    "q": "北陸新幹線の延伸に伴う三国温泉へのアクセス方法はどうなりましたか？",
    "a": "2024年の北陸新幹線福井・敦賀延伸により、首都圏や関西からのアクセスが格段に向上しました。東京方面からは北陸新幹線「かがやき」「はくたか」で「芦原温泉（あわらおんせん）駅」まで直通約2時間15分。芦原温泉駅からは路線バス（京福バス）またはタクシー、宿の無料送迎バスを利用して約20〜25分で三国温泉・東尋坊へアクセスできます。また、福井駅から私鉄「えちぜん鉄道三国芦原線」に乗り換えて、のんびり田園風景を眺めながら終点の「三国港駅」へ向かうローカル旅も風情があります。"
  }
];

export default function FukuiMikuniWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay#article",
        "headline": "【11・12月越前三国温泉の解禁越前がにと東尋坊冬絶景】日本海パノラマ露天風呂・本場越前蟹フルコース＆若狭牛会席の宿5選",
        "description": "11月6日のズワイガニ漁解禁とともに、福井県・三国港は全国の美食家が押し寄せる「越前がに」の最高潮シーズンを迎えます。三国港で水揚げされ黄色いタグが付けられた越前がには、皇室献上ガニとしても名高い冬の日本海の至宝。冬の荒波が打ち寄せる奇岩・東尋坊のダイナミックな景観、日本海に沈む夕日と水平線を望む三国温泉の展望露天風呂、職人が絶妙な塩加減で茹で上げる本場越前がに、花咲くカニ刺し、甲羅焼き味噌、福井の銘柄牛「若狭牛」のステーキを味わう、冬の贅を尽くした海辺の名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay#faq",
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
              name: "三国温泉　料理民宿　いそや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32238/32238.jpg",
              rating: 4.35,
              reviews: 189,
              price: "¥9,000〜",
              access: "【北陸道】【金津IC】から東尋坊・雄島・越前松島方面へ２０分。【宿から東尋坊や芝政ワールドへは車で５分】",
              special: "三国港直送の新鮮魚介の地魚料理が自慢★越前松島と日本海一望の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32238%2F32238.html",
              story: "三国港の競り権を持つ宿主が毎夕自ら市場へ赴き、選び抜いた極上のタグ付き越前がにを振る舞う美食の料理民宿「三国温泉 料理民宿 いそや」。東尋坊から車で数分の好立地にあり、冬の味覚を心ゆくまで堪能したい蟹好きが毎年通い詰める名宿です。巨大な茹で釜で職人が絶妙の塩加減と時間で茹で上げる「茹で越前がに」は、脚の身離れが良く、甘みとみずみずしさが段違い。濃厚な内子と外子を持つメスのセイコガニ（香箱ガニ）や、香ばしい甲羅焼き味噌など、本場ならではの贅沢な蟹づくしに心酔できます。館内には三国温泉を引いた清潔なお風呂も備わり、温かなもてなしに心が和みます。",
              roomTip: "落ち着いた和室。窓を開けると日本海の潮風と波音が心地よく届き、蟹を心ゆくまで堪能したあとに畳の上でゴロゴロと手足を伸ばして寛げます。",
              gourmetTip: "本場タグ付き越前がにフルコース。花咲く透き通ったカニ刺し、炭火で香ばしく炙る焼きガニ、濃厚な蟹味噌甲羅焼き、茹でたての熱々越前がに、そして締めのかに雑炊まで、一切妥協のない本物の味。",
              highlights: [
                "三国港の競り権を持つ宿主が厳選する本場黄色いタグ付き越前がにフルコース" ,
                "職人が絶妙な塩加減で茹で上げる熱々越前がに＆香ばしい甲羅焼き味噌",
                "透き通るカニ刺しから濃厚雑炊まで余すところなく味わい尽くす至福の夜"
              ]
            },
            {
              id: 2,
              name: "東尋坊温泉　三国オーシャンリゾート＆ホテル（旧：三国観光ホテル）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4898/4898.jpg",
              rating: 4.19,
              reviews: 676,
              price: "¥8,000〜",
              access: "ＪＲ北陸新幹線・ハピライン芦原温泉下車　京福バス東尋坊経由　終点　龍翔博物館前下車",
              special: "全室オーシャンビュー！日本海に沈む美しい夕陽をお部屋から◆東尋坊まで車で10分＆“和畳の湯”も人気♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4898%2F4898.html",
              story: "名勝・東尋坊を望む高台に位置し、日本海の雄大なパノラマを一望できるリゾートホテル「東尋坊温泉 三国オーシャンリゾート＆ホテル（旧：三国観光ホテル）」。館内自慢の展望露天風呂は、夕暮れ時には茜色に染まる日本海と水平線に沈む夕日、夜には漆黒の海に煌めく漁火を眺めながらの名湯浴が楽しめます。東尋坊温泉のお湯は、身体を芯から温めるナトリウム・カルシウム-塩化物温泉。広々とした大浴場や露天風呂で波音に耳を傾けながら、日常の疲れをすっきりと解き放つことができます。",
              roomTip: "オーシャンビュー和洋室またはデラックスツイン。高台から見下ろす日本海の水平線パノラマが圧巻で、冬の日本海ならではのダイナミックな白波と夕日を部屋から優雅に鑑賞できます。",
              gourmetTip: "越前がにと若狭牛を組み合わせた特選ディナー会席。冬の日本海の王様・越前がに料理とともに、きめ細かなサシと深い甘みを誇る福井の誇るブランド黒毛和牛「若狭牛」の陶板ステーキを味わえます。",
              highlights: [
                "東尋坊を望む高台からの日本海パノラマ露天風呂＆夕日と漁火の絶景" ,
                "冬の日本海の味覚・越前がにと福井の銘柄牛「若狭牛」陶板焼きの豪華競演",
                "ナトリウム・カルシウム塩化物泉が身体を芯から温め湯冷めしにくい保温効果"
              ]
            },
            {
              id: 3,
              name: "休暇村　越前三国",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50199/50199.jpg",
              rating: 4.39,
              reviews: 439,
              price: "¥10,500〜",
              access: "北陸自動車道　金津ＩＣより車で約２５分",
              special: "どのお部屋からも日本海を望むオーシャンビュー。自慢の庭園露天温泉や旬の食材で仕上げる和食会席が自慢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50199%2F50199.html",
              story: "越前加賀海岸国定公園の美しい松林と海岸線に囲まれ、全室オーシャンビューの開放感を誇る国立公園リゾート「休暇村 越前三国」。目の前には雄大な日本海が広がり、館内の庭園露天風呂「荒磯の湯」からは潮騒の音と満天の星空が広がります。冬の宿泊プランでは、三国港直送の越前がにをメインにした豪華会席や、北陸の海の幸をふんだんに味わえるビュッフェが並び、ファミリーからシニアまで大人気。敷地内には散策路もあり、冬の爽快な海風を感じながらのウォーキングも楽しめます。",
              roomTip: "和洋室（日本海ビュー）。広々とした窓いっぱいに広がる日本海と松林のコントラストが美しく、時間とともに移ろいゆく海のグラデーションを静かに眺められます。",
              gourmetTip: "越前がに一杯付き会席または冬の北陸プレミアムビュッフェ。三国港直送の甘エビや寒ブリのお造り、ふっくら焼き上げたノドグロ、福井名物「ソースカツ」や越前おろしそばまで福井の美味が勢揃い。",
              highlights: [
                "越前加賀海岸国定公園の海と松林一望＆庭園露天風呂「荒磯の湯」" ,
                "三国港直送の寒ブリや甘エビ、ノドグロ、越前がにを味わう贅沢バイキング/会席",
                "全室オーシャンビュー客室から眺める冬の日本海のダイナミックな波景色"
              ]
            },
            {
              id: 4,
              name: "オーベルジュほまち　三國湊（ミシュランセレクテッド２０２５）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188978/188978.jpg",
              rating: 4.71,
              reviews: 33,
              price: "¥37,878〜",
              access: "えちぜん鉄道三国芦原線「三国」下車 徒歩約５分。/北陸新幹線東京⇔JR芦原温泉約３時間/金沢⇔JR芦原温泉・約25分",
              special: "Forbes JAPAN「The 30 Collection」選出★ミシュランシェフが贈るフレンチ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188978%2F188978.html",
              story: "北前船交易で栄えた歴史ある港町・三國湊（みくにみなと）の伝統的な町家や土蔵を現代的な洗練空間へと再生させた、分散型ラグジュアリーオーベルジュ「オーベルジュほまち 三國湊」。ミシュランセレクテッド2025にも選出された話題の宿で、町全体をひとつのホテルに見立て、歴史の面影を残す石畳の通りを散策しながら滞在します。客室は数寄屋大工の技と最新の快適性が融合。敷地内のフレンチレストランでは、三国港の越前がにや旬魚、福井の伝統野菜をフレンチの技法で昇華させた唯一無二のコース料理が堪能できます。",
              roomTip: "町家スイート。梁や柱に宿る歴史の趣を残しつつ、上質なベッドや家具を配した上質空間。坪庭を望む浴室でプライベートな静寂に浸れます。",
              gourmetTip: "「レストラン タテル ヨシノ 三國湊」でのフレンチディナー。世界的名シェフ吉野建氏が監修し、三国港の越前がにや若狭牛、地元冬野菜を繊細かつ力強いガストロノミーへと昇華させた感動のコース。",
              highlights: [
                "ミシュランセレクテッド2025・北前船の歴史町家を再生した最高峰オーベルジュ" ,
                "三国港の冬魚介と地元冬野菜を昇華させたタテルヨシノ監修フレンチディナー",
                "歴史ある町家スイートに泊まり三國湊の情緒ある石畳の街並みを暮らすように散策"
              ]
            },
            {
              id: 5,
              name: "三国温泉　漁師の宿　民宿なかじま",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14400/14400.jpg",
              rating: 4.45,
              reviews: 360,
              price: "¥5,500〜",
              access: "ＪＲ福井駅より京福電鉄「三国港駅」下車。北陸自動車道　金津ＩＣより東尋坊方向へ２５分。",
              special: "自船で獲った新鮮な日本海の幸が自慢の漁師宿です。　　11月6日から越前がに漁解禁です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14400%2F14400.html",
              story: "三国温泉街の静かな一角に佇み、現役の漁師である主人が自ら日本海の荒波へ船を出し、獲れたての鮮魚を惜しみなく振る舞う「三国温泉 漁師の宿 民宿なかじま」。豪華な設備はありませんが、飾らない人情味あふれる温かいもてなしと、驚くほどリーズナブルに本物の海の幸を堪能できることでリピーターが絶えません。冬は何と言っても三国港直送の越前がにと、朝獲れの寒ブリやヒラメ、甘エビの豪快な舟盛りが圧巻。三国温泉の天然温泉風呂で身体を温めたあとの宴は、まさに至福の時間です。",
              roomTip: "清潔感のある和室。畳の香りが心地よく、漁師町ならではの素朴で落ち着きのある空間で、ぐっすりと旅の疲れを癒やすことができます。",
              gourmetTip: "漁師宿ならではの豪快カニ＆海鮮会席。身がぎっしり詰まった越前がにの浜茹で、ぷりぷりの甘エビや寒ブリの刺身盛り合わせ、カニ雑炊まで、港町直結の圧倒的な鮮度とボリューム。",
              highlights: [
                "現役漁師直営ならではの圧倒的鮮度＆三国港直送越前がにと豪快舟盛り" ,
                "三国温泉の天然温泉で芯から温まるひととき＆アットホームな漁師町のもてなし",
                "手頃な価格で本物の越前がにを心ゆくまで堪能できる知る人ぞ知る名物宿"
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
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-orange-950 text-white overflow-hidden py-16 sm:py-24 border-b border-orange-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>11月・12月 冬の福井・越前三国特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月越前三国温泉の解禁越前がにと東尋坊冬絶景】日本海パノラマ露天風呂・本場越前蟹フルコース＆若狭牛会席の宿5選
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
            11月6日のズワイガニ漁解禁を迎えると、福井県北部の港町・三国は冬の味覚の王者「越前がに」を求める美食家で熱気に包まれます。三国港に水揚げされる黄色いタグ付き越前がには、皇室献上ガニとしても名高い日本海の至宝。冬の荒波が打ち寄せる奇勝・東尋坊のダイナミックな景観、水平線に沈む夕日と漁火を望む三国温泉の展望露天風呂、職人が絶妙な塩加減で茹で上げる熱々の蟹、甘みが弾けるカニ刺し、甲羅焼き味噌、そして極上銘柄牛「若狭牛」を堪能する、贅を尽くした冬の名宿を厳選してご紹介します。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 11月6日解禁〜12月が旬</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-orange-400" /> 東尋坊荒波＆日本海夕日露天</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-orange-400" /> 三国温泉・保温塩化物泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-orange-400" /> 黄色タグ越前がに・若狭牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">King of Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月6日解禁！三国港の「越前がに」が日本一と称される理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本海沿岸の冬の風物詩であるズワイガニ漁。その中でも、福井県で水揚げされるオスガニだけが名乗ることを許されるブランドが「越前がに」です。福井の海岸線は、岸からわずか十数キロで急激に深くなる独特の海底段丘を持ち、暖流と寒流が交差する豊かなプランクトン層が形成されています。この恵まれた漁場から三国港までは漁船でわずか数時間という近さのため、獲れたての蟹を生きたまま港へ持ち帰り、夕方の競りにかけられる圧倒的な鮮度こそが、三国港の越前がにの最大の強みです。
            </p>
            <p>
              明治43年（1910年）に三国町で獲れた越前がにが皇室へ献上されて以来、全国の蟹の産地で唯一「皇室献上」の栄誉を担い続けているのが三国港の越前がにです。職人の目利きによって厳選された蟹には、誇り高き「黄色いタグ」が結ばれます。大釜の熱湯に絶妙な塩を加え、一気に茹で上げられた越前がには、脚の身離れが良く、噛みしめると濃厚な甘みと上品な潮の香りが口いっぱいに広がります。甲羅の中には濃厚な味噌がぎっしりと詰まり、炭火で炙ると立ち上る香ばしさは筆舌に尽くしがたい美味です。
            </p>
            <p>
              冬の三国旅の醍醐味は、美食だけにとどまりません。国の天然記念物「東尋坊」に打ち寄せる激しい白波と風に舞う「波の花」、北前船の豪商たちが築いた三國湊の情緒ある町家や格子戸の街並み、そしてナトリウム・カルシウム-塩化物泉の温もりあふれる三国温泉。水平線に沈む黄金色の夕日を露天風呂から眺め、夜は茹でたての蟹と福井の銘酒「黒龍」や「一本義」に酔いしれる。これ以上ない冬の贅沢が三国に待っています。
            </p>
          </div>
        </section>

        {/* Section 2: Onsen & Gastronomy Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Ocean Thermal & Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                三国温泉の「熱の湯」効果と、越前がに＆若狭牛の黄金ペアリング
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-700" />
              <span>食塩とカルシウムが肌を包む「塩化物泉」の保温持続性と血行改善</span>
            </h3>
            <p>
              三国温泉の泉質は、塩分とカルシウムを主成分とする「ナトリウム・カルシウム-塩化物温泉（中性〜弱アルカリ性）」です。入浴すると、海水由来の塩分（塩化ナトリウム）が皮膚表面のタンパク質と結合して微細な皮膜（塩のベール）を形成し、毛穴からの水分の蒸発をブロックします。
            </p>
            <p>
              これにより身体の内部の熱が外気へ奪われにくくなり、入浴後も長時間にわたってポカポカとした温もりが持続することから、古くより漁師や湯治客に「熱の湯」「温まりの湯」として親しまれてきました。さらにカルシウム成分が鎮静・消炎作用をもたらし、荒れた冬肌をしっとりと整えます。東尋坊の冷たい海風に吹かれたあとに浸かる三国温泉の露天風呂は、血管を広げて旅の疲労や筋肉の緊張を芯からリセットしてくれます。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-orange-700" />
              <span>黄色タグの皇室献上越前がにと、若狭酒粕飼料で育つA5「若狭牛」の贅</span>
            </h3>
            <p>
              ディナーで蟹とともに味わいたい福井の最高峰食材が「若狭牛（わかさぎゅう）」です。若狭牛は、明治時代から続く伝統の黒毛和種で、若狭地方の清らかな水と澄んだ空気、地酒の酒粕を混ぜた栄養豊かな飼料で丹念に長期肥育されます。肉質等級4等級以上の厳格な基準を満たしたものだけが若狭牛と認定され、きめ細やかなサシ（霜降り）は融点が低く、口に入れた瞬間にとろけて上品な甘みが広がります。
            </p>
            <p>
              三国港直送の越前がにが放つ繊細な甘みとみずみずしい海の香り、そして若狭牛の芳醇な肉の旨味という二大主役の競演は、冬の北陸ならではの至福の饗宴です。花咲くカニ刺し、香ばしい焼きガニ、甲羅焼き味噌、そして若狭牛の陶板ステーキを、福井が誇る銘酒「黒龍」や「梵」の純米大吟醸とともに味わう時間は、まさに一生記憶に残る美食体験となります。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Elite Oceanfront Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              越前三国温泉の魅力を極める厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              競り権直営民宿、日本海パノラマホテル、国立公園オーシャンリゾート、ミシュラン町家オーベルジュ、現役漁師宿まで徹底比較。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-orange-300 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                      <span>{h.rating}</span>
                      <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-3 rounded-2xl text-white text-xs">
                      <p className="font-semibold line-clamp-1">{h.special}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-orange-50 text-orange-800 border border-orange-200">
                          第{h.id}位 越前三国厳選名宿
                        </span>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 block">参考宿泊料金（目安）</span>
                          <span className="text-lg font-bold text-orange-700">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {h.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-orange-700" />
                          <span>この宿の宿泊ハイライト</span>
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-600">
                          {h.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 mt-0.5 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-orange-700" /> 客室選びのコツ
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{h.roomTip}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-orange-700" /> 夕食の注目ポイント
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">{h.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-slate-500 flex items-center gap-1 self-start sm:self-center">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="line-clamp-1">{h.access}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm shadow-sm transition-colors duration-200"
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

        {/* Section 4: Model Itinerary */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Crab & Ocean Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月 越前がにと東尋坊絶景を満喫する1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-700 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：東尋坊の奇岩美と本場越前蟹の宴</span>
              </h3>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">11:30</span>
                  <span>北陸新幹線・芦原温泉駅に到着。レンタカーまたは路線バスで三国港・東尋坊方面へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">12:30</span>
                  <span>三国湊の歴史ある町家通りで、名物「越前おろしそば」や冬限定「セイコガニ丼」の昼食。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">14:00</span>
                  <span>「東尋坊」を散策。激しい日本海の白波が打ち砕かれる柱状節理の断崖絶壁と冬の雄大な自然を体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">15:30</span>
                  <span>三国温泉の宿にチェックイン。日本海に沈む夕日を眺めながら塩化物温泉の露天風呂で温まる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">18:30</span>
                  <span>待望の越前がにフルコース。カニ刺し、焼きガニ、甲羅味噌、茹でたての熱々蟹を心ゆくまで堪能。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-700 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：北前船の歴史散策と海鮮市場でお買い物</span>
              </h3>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">07:00</span>
                  <span>朝の日本海を望みながらの朝湯。塩分を含んだ名湯で身体を芯からシャキッと目覚めさせる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">08:00</span>
                  <span>宿の朝食。ハタハタの干物、蟹の味噌汁、福井県産コシヒカリの炊きたてご飯を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">10:00</span>
                  <span>チェックアウト後、三國湊きたまえ通りへ。「旧森田銀行本店」や北前船の歴史資料館を見学。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">11:30</span>
                  <span>「越前松島水族館」または越前松島の海岸遊歩道を散策し、冬の澄んだ日本海の景観を満喫。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-800 shrink-0">13:30</span>
                  <span>三国港の海鮮市場やお土産処で、茹でたての越前がにや干物、羽二重餅を購入し芦原温泉駅へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Practical Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Travel Checklist</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の三国旅行で知っておくべき重要アドバイス
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-orange-700" />
                <span>日本海特有の強風と防寒対策</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                冬の東尋坊や三国海岸は、強い北西風が吹き抜けるため体感温度が実際の気温より5℃以上低く感じられます。防風性のあるフード付きダウンジャケット、マフラー、手袋、耳当てを用意しましょう。雨や雪が突然降ることも多いため、撥水加工のアウターや折りたたみ傘が重宝します。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Footprints className="w-4 h-4 text-orange-700" />
                <span>越前がにの早期予約と冬期ドライブ</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月解禁直後から12月の越前がにシーズンは、全国から予約が殺到するため、人気宿の週末は数ヶ月前から満室になります。旅行計画は早めの確保が鉄則です。また、12月に入ると北陸自動車道や一般道で積雪・凍結が発生するため、車の場合は必ずスタッドレスタイヤを装着してください。
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
                越前三国冬旅のよくある質問（FAQ）
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
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Related Winter Seafood & Coastal Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北陸・日本海の冬名湯＆蟹・寒ブリ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の冬の味覚解禁と絶景露天を味わう、おすすめの温泉特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">福井・あわら温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">関西の奥座敷・74の自家源泉と越前がにフルコースの宿</h3>
            </Link>
            <Link 
              href="/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">富山・氷見温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">立山連峰雪景色と富山湾の寒ブリ尽くし・氷見牛の宿</h3>
            </Link>
            <Link 
              href="/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">石川・加賀山中温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">鶴仙渓雪景色と加能ガニ会席・開湯1300年の名湯宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">兵庫・城崎温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">七つの外湯めぐりと津居山港直送・本場松葉ガニの宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">鳥取・三朝温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">世界屈指のラジウム温泉と境港直送松葉ガニ・鳥取和牛の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
