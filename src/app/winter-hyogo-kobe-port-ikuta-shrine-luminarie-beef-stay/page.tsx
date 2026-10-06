import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Anchor, Landmark, Castle, Mountain, TreePine, Snowflake, ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月神戸】生田神社新春開運初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿5選",
  description: "冬の港町・神戸は、澄み切った冷涼な空気が六甲山と神戸港の「1000万ドルの夜景」を最も眩しく煌めかせ、希望の光を紡ぐ「神戸ルミナリエ」が街を優しく照らす特別な季節。縁結びと厄除けの古社「生田神社」の新春初詣、南京町の湯気立つ本格点心、世界最高峰の肉質を誇る神戸牛ステーキや鉄板焼、そして海を望む極上の天然温泉「神戸みなと温泉」。楽天APIから最新取得した神戸港・元町・三宮の海風薫る特選宿5選を徹底特集します。",
  keywords: '神戸 ホテル, 生田神社 初詣 ホテル, 神戸ルミナリエ, メリケンパーク 夜景, 神戸みなと温泉 蓮, ホテルオークラ神戸, ホテルラスイート神戸, 神戸牛 ステーキ, 11月 12月 1月 神戸 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay/"
  },
  openGraph: {
    title: "【11・12・1月神戸】生田神社新春開運初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿5選",
    description: "冬の港町・神戸は、澄み切った冷涼な空気が六甲山と神戸港の「1000万ドルの夜景」を最も眩しく煌めかせ、希望の光を紡ぐ「神戸ルミナリエ」が街を優しく照らす特別な季節。縁結びと厄除けの古社「生田神社」の新春初詣、南京町の湯気立つ本格点心、世界最高峰の肉質を誇る神戸牛ステーキや鉄板焼、そして海を望む極上の天然温泉「神戸みなと温泉」。楽天APIから最新取得した神戸港・元町・三宮の海風薫る特選宿5選を徹底特集します。",
    url: 'https://croud-travel.pages.dev/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function HyogoKobePortWinterPage() {
  const hotels = [
            {
              id: 1,
              name: "神戸みなと温泉　蓮",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149298/149298.jpg",
              rating: 4.64,
              reviews: 1208,
              price: "¥11,770〜",
              access: "JR大阪駅より新快速で21分、各線三宮駅からシャトルバスで5分。",
              special: "270度海に囲まれた天然温泉旅館。60㎡以上の客室は全室テラス付オーシャンビュー。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149298%2F149298.html",
              story: "神戸港の突堤に建ち、270度を海に囲まれた都市型天然温泉旅館「神戸みなと温泉 蓮」。地下1,150mから湧き出る自家源泉のナトリウム塩化物泉は「温まりの湯」として知られ、冬の海風で冷えた体を芯からポカポカに温めてくれます。開放感あふれる展望露天風呂やオーシャンスパ、岩盤浴・溶岩浴など多彩な温浴施設が充実。客室は全室50平米以上のテラス付きオーシャンビューで、神戸港を行き交う船やメリケンパークの冬のイルミネーションを一望できます。夕食には日本海や瀬戸内の冬の旬魚、神戸牛を贅沢に盛り込んだ御膳や割烹ブッフェを堪能。都会の利便性と本格温泉旅館の寛ぎが見事に調和した最高峰の癒やし宿です。",
              roomTip: "ハーバースイート／シーサイドデラックス（全室テラス付・50平米以上）。テラスから冬の澄んだ神戸港の夜景を独占。広々とした和洋室。",
              gourmetTip: "「御食事処 ライブ割烹 万蓮」。職人が目の前で握る冬の寿司、揚げたて天ぷら、そして神戸牛のローストビーフを味わう至高のブッフェ。",
              highlights: [
                "全室テラス付50平米以上オーシャンビュー・地下1150m自家源泉の天然温泉・ライブ割烹万蓮ブッフェ",
                "展望露天風呂や岩盤浴・オーシャンスパ完備・神戸港の夜景を眺めながら温まる冬の極楽温泉",
                "宿泊者限定のラウンジや温泉プール・上質を極めた大人のリトリートステイに最適"
              ]
            },
            {
              id: 2,
              name: "ホテルオークラ神戸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1648/1648.jpg",
              rating: 4.55,
              reviews: 9050,
              price: "¥7,830〜",
              access: "ＪＲ神戸線・阪神線 元町駅から徒歩で10分。 新幹線 新神戸駅から 車で15分。",
              special: "神戸ポートタワーのとなり、35階建てホテル。夜景が自慢。ホテル～三宮間無料シャトルバス毎日運行",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1648%2F1648.html",
              story: "メリケンパークのウォーターフロントに優雅にそびえ立つ、地上35階建ての白亜の高層ランドマーク「ホテルオークラ神戸」。神戸ポートタワーやハーバーランド、六甲山の稜線を望む圧倒的な眺望が魅力です。館内にはオークラ伝統の「親切と和」のおもてなしが息づき、冬の洗練された港町ステイを上質に演出。3階フランス料理「エメラルド」や鉄板焼「さざんか」では、最高級神戸牛や冬のフォアグラ、旬の魚介を用いた珠玉の料理が振る舞われます。生田神社や南京町へも車や徒歩ですぐアクセスでき、冬の神戸観光を優雅に満喫する拠点として選ばれ続ける名門です。",
              roomTip: "オーセンティックフロア・デラックスツイン。窓一面にポートタワーとモザイク観覧車のきらめく夜景が広がるロマンチックな空間。",
              gourmetTip: "鉄板焼「さざんか」。熟練シェフが目の前の鉄板で焼き上げる極上A5ランク神戸ビーフのサーロイン。芳醇な脂の甘みと赤身の旨味が口いっぱいに広がる贅沢。",
              highlights: [
                "地上35階の白亜ランドマーク・オークラ伝統のおもてなし・ポートタワー正面の特等席ビュー",
                "鉄板焼さざんかの特選神戸牛ステーキ・生田神社や南京町へのアクセス至便なウォーターフロント",
                "優雅なロビーや日本庭園・伝統のフレンチや中国料理など多彩な美食が揃う最高級ホテル"
              ]
            },
            {
              id: 3,
              name: "神戸メリケンパークオリエンタルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8978/8978.jpg",
              rating: 4.49,
              reviews: 7305,
              price: "¥9,520〜",
              access: "JR三ノ宮間の送迎バス運行。大阪まで約20分、元町から徒歩約15分。",
              special: "神戸リゾートの時間へ、ようこそ。　全てのお部屋にバルコニーをご用意！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8978%2F8978.html",
              story: "波打ち際に位置し、客室のバルコニーから海を見渡す客船のような外観が印象的な「神戸メリケンパークオリエンタルホテル」。270度を海に囲まれた唯一無二のロケーションを誇り、全客室にオープンテラス（ウッドデッキバルコニー）が完備されています。冬の澄んだ夜気の中、バルコニーに出てホットドリンクを味わいながら見上げるポートタワーのライトアップや港の夜景は息を呑む美しさ。館内のテラスレストラン「サンタモニカの風」では、冬の海の幸をふんだんに取り入れたバイキングが楽しめ、潮風と汽笛の音に包まれるロマンチックな滞在が叶います。",
              roomTip: "サウスビュー・スーペリアツイン（バルコニー付）。遮るもののない大海原と神戸空港方面の水平線、冬の澄んだ星空を眺める開放感あふれる客室。",
              gourmetTip: "「テラスレストラン サンタモニカの風」。目の前で焼き上げるステーキや冬の海鮮ブイヤベース、パティシエ特製デザートが並ぶ贅沢バイキング。",
              highlights: [
                "波打ち際に建つ全室オープンテラス完備ホテル・270度海に囲まれた唯一無二の絶景リゾート",
                "バルコニーから楽しむ冬の港夜景・テラスレストランの和洋中冬期ディナーバイキング",
                "船旅気分を味わえる開放的な館内空間・メリケンパーク散策がそのままホテルの庭感覚"
              ]
            },
            {
              id: 4,
              name: "ホテル　ラ・スイート神戸ハーバーランド",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/104705/104705.jpg",
              rating: 4.75,
              reviews: 1829,
              price: "¥16,580〜",
              access: "JR「神戸駅」より徒歩約10分／地下鉄海岸線「みなと元町駅」より徒歩約4分／阪神高速3号神戸線「京橋出入口」より車約5分",
              special: "全64室が70㎡以上の大型ジャグジー＆テラス付オーシャンンビュールームのラグジュアリーホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104705%2F104705.html",
              story: "ハーバーランドの海辺に佇み、スモール・ラグジュアリー・ホテルズ・オブ・ザ・ワールド（SLH）に加盟する最高級ホテル「ホテル ラ・スイート神戸ハーバーランド」。全室70平米以上のスイート仕様で、すべての客室に大型ジャグジーバスとプライベートテラスを備えています。ジャグジーに身を委ねながら、窓越しにライトアップされたポートタワーや神戸海洋博物館の美しい夜景を眺める時間は、日常を完全に忘れさせる至福の体験。夕食はフレンチ「ル・クール神戸」で、兵庫五国の旬の恵みと神戸牛をエレガントなコースで味わい、女性の憧れを凝縮した贅沢なひとときを過ごせます。",
              roomTip: "エグゼクティブスーペリア（70平米）。大型ブロアバス（ジャグジー）から神戸港の夜景を一望。シモンズ社製最高級ベッドと上質なアメニティ完備。",
              gourmetTip: "レストラン「ル・クール神戸」。兵庫県産の地産地消にこだわった本格フレンチ。特選神戸牛フィレ肉のロティと冬トリュフの薫り高いソースが絶品。",
              highlights: [
                "全室70平米以上スイート・全室大型ジャグジーバス＆テラス完備・最高峰フレンチと極上神戸牛",
                "お風呂に入りながらポートタワー夜景を独占・特別な記念日やプロポーズに選ばれる名門",
                "スモールラグジュアリーホテルズ加盟・兵庫五国の厳選素材と極上のホスピタリティ"
              ]
            },
            {
              id: 5,
              name: "神戸ポートピアホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5521/5521.jpg",
              rating: 4.43,
              reviews: 8573,
              price: "¥5,530〜",
              access: "ポートライナー神戸空港・三宮から10分、市民広場駅下車1分　ホテルと三宮駅・新神戸駅を結ぶ無料送迎バスあり",
              special: "神戸三宮や神戸空港に近い、高層階からの港夜景が自慢のシティリゾート。楽天ラウンジ営業あり。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5521%2F5521.html",
              story: "ポートアイランドの中心に位置し、本館31階の高層タワーから神戸の海・街・山を360度の大パノラマで見渡せる「神戸ポートピアホテル」。三宮駅および新神戸駅から無料シャトルバスが高頻度で運行しており、アクセスも抜群です。本館最上階31階のフレンチレストラン「トランテアン」はミシュラン星付きレストランと提携した美食空間で、眼下に広がる「1000万ドルの夜景」とともに冬の特別ディナーを楽しめます。屋上には「ソラフネ神戸」と呼ばれる展望デッキがあり、冬の澄み渡る夜空と神戸のイルミネーションを遮るものなく見渡せる絶景体験が話題です。",
              roomTip: "本館スーペリアツイン（南向き／北向き）。南向きは広大な大阪湾と空港夜景、北向きは六甲山と三宮のきらめく街明かりを一望。",
              gourmetTip: "中国レストラン「聚景園（シュウケイエン）」。最上階の絶景を眺めながら味わう冬の本格広東料理。フカヒレ姿煮や北京ダックが彩る贅沢ディナーコース。",
              highlights: [
                "地上31階高層シティリゾート・三宮駅から無料シャトル運行・屋上展望デッキ「ソラフネ神戸」完備",
                "ミシュラン提携フレンチや本格広東料理・360度神戸の1000万ドル夜景を一望する客室",
                "高コスパから贅沢クラブルームまで多彩な部屋タイプ・冬のファミリー旅行や女子旅に好評"
              ]
            }
  ];

  const faqData = [
  {
    "q": "「神戸ルミナリエ」の開催時期・会場・見どころについて教えてください。",
    "a": "神戸ルミナリエは、阪神・淡路大震災の記憶を後世に語り継ぎ、神戸の希望を象徴する光の彫刻作品です。近年は開催時期が1月下旬（または12月〜1月）へと移行し、メリケンパーク、東遊園地、旧居留地の複数会場で分散開催されています。特にメリケンパーク会場では、海を背景に光の回廊「ガレリア」や光の壁掛け「スパッリエーラ」が壮大に輝き、冬の澄んだ夜空と港の水面に美しく映り込みます。冷涼な空気の中、荘厳な音楽とともに光のアートを歩く体験は心揺さぶる美しさです。"
  },
  {
    "q": "生田神社（いくたじんじゃ）の新春初詣（1月）の特徴や混雑を避ける参拝時間は？",
    "a": "生田神社は1800年以上の歴史を誇り、「神戸（かんべ）」の地名の起源となった由緒ある神社です。稚日女尊（わかひるめのみこと）を祀り、縁結び・恋愛成就・開運厄除け・健康長寿の神様として関西屈指の人気を誇ります。三が日には約150万人もの初詣参拝客が訪れます。元旦の0:00〜3:00、および三が日の11:00〜15:00は拝殿前に入場規制がかかるほど混雑するため、混雑を避けるなら「早朝6:30〜8:30」または「夕方17:00以降」が比較的スムーズにお参りできます。名物の「水みくじ」を生田の森の池に浮かべて新年の運勢を占うのも人気です。"
  },
  {
    "q": "冬の神戸で絶対に食べたい名物グルメ「神戸牛」の選び方や南京町のおすすめは？",
    "a": "神戸を訪れたら外せないのが世界に誇る「神戸牛（神戸ビーフ）」です。厳しい認定基準をクリアした但馬牛の最高峰で、細やかな霜降り（サシ）が人肌の温度で溶け出す極上の柔らかさが特徴。冬は鉄板焼きステーキやすき焼き、しゃぶしゃぶで味わうのが最高です。また、元町の「南京町（中華街）」では、冬になると老舗「老祥記」の元祖豚饅頭（ぶたまん）や、熱々の小籠包、北京ダックの屋台に長い湯気が立ち上り、活気あふれる冬の食べ歩きが楽しめます。"
  },
  {
    "q": "冬の六甲山・摩耶山からの「1000万ドルの夜景」鑑賞とアクセス・寒さ対策は？",
    "a": "日本三大夜景の一つに数えられる六甲山・摩耶山掬星台（きくせいだい）からの夜景は、冬が最も美しく輝きます。空気が澄み、大阪湾から関西国際空港、神戸市街地までのきらめきがパノラマで広がります。ただし、山頂は市街地より気温が5〜8度低く、冬は氷点下近くまで冷え込みます。風を通さない完全防寒ダウン、マフラー、手袋、カイロを必ず着用してください。三宮から市バスとまやビューライン（ケーブル・ロープウェー）または六甲ケーブルを利用してアクセスできます。"
  },
  {
    "q": "冬の神戸港（メリケンパーク・ハーバーランド）周辺の歩き方とおすすめ散策ルートは？",
    "a": "午後は三宮・北野異人館街のレトロな洋館やクリスマス装飾を散策し、生田神社へ参拝。夕方にかけて元町・南京町で熱々の点心をつまんだ後、メリケンパークへ南下するのが王道の散策コースです。リニューアルした「神戸ポートタワー」の展望台から夕暮れのトワイライトビューを眺め、ハーバーランド「モザイク」の大観覧車やイルミネーションを鑑賞。夜は海沿いのホテルで天然温泉に浸かり、神戸牛ディナーを味わう流れが完璧な冬の神戸ステイを叶えてくれます。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://croud-travel.pages.dev/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay#webpage",
        "url": "https://croud-travel.pages.dev/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay",
        "name": "【11・12・1月神戸】生田神社新春開運初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿5選",
        "description": "冬の港町・神戸は、澄み切った冷涼な空気が六甲山と神戸港の「1000万ドルの夜景」を最も眩しく煌めかせ、希望の光を紡ぐ「神戸ルミナリエ」が街を優しく照らす特別な季節。縁結びと厄除けの古社「生田神社」の新春初詣、南京町の湯気立つ本格点心、世界最高峰の肉質を誇る神戸牛ステーキや鉄板焼、そして海を望む極上の天然温泉「神戸みなと温泉」。楽天APIから最新取得した神戸港・元町・三宮の海風薫る特選宿5選を徹底特集します。",
        "inLanguage": "ja",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "url": "https://croud-travel.pages.dev/",
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
            "name": "神戸ルミナリエ＆生田神社初詣宿",
            "item": "https://croud-travel.pages.dev/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay"
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
        "name": "兵庫県神戸市中央区（神戸港・生田神社・メリケンパーク・南京町）",
        "description": "生田神社の新春縁結び初詣、神戸ルミナリエの光のアート、メリケンパークの冬夜景と本場神戸牛が彩る港町神戸。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "兵庫県",
          "addressLocality": "神戸市中央区",
          "addressCountry": "JP"
        }
      }
    ]
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月神戸】生田神社新春開運初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿5選",
    "description": "冬の港町・神戸は、澄み切った冷涼な空気が六甲山と神戸港の「1000万ドルの夜景」を最も眩しく煌めかせ、希望の光を紡ぐ「神戸ルミナリエ」が街を優しく照らす特別な季節。縁結びと厄除けの古社「生田神社」の新春初詣、南京町の湯気立つ本格点心、世界最高峰の肉質を誇る神戸牛ステーキや鉄板焼、そして海を望む極上の天然温泉「神戸みなと温泉」。楽天APIから最新取得した神戸港・元町・三宮の海風薫る特選宿5選を徹底特集します。",
    "url": "https://croud-travel.pages.dev/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月神戸】生田神社新春開運初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿5選", "item": "https://croud-travel.pages.dev/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Anchor className="w-4 h-4 text-rose-300 animate-pulse" />
            <span>11月・12月・1月冬の兵庫特選ガイド｜神戸市中央区港町・三宮・元町</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            生田神社新春開運初詣＆神戸ルミナリエ！<br className="hidden sm:inline" />
            メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿5選
          </h1>

          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            澄んだ海風と六甲山の稜線が際立つ、港町・神戸の年間最高峰のシーズン。1800年の歴史を誇る「生田神社」の新春縁結び・開運厄除け初詣、冬の街を優美な光で包み込む「神戸ルミナリエ」、ハーバーランドやメリケンパークの1000万ドルの冬夜景。熱々の南京町点心や本場神戸牛ステーキを味わい、海を望む極上ホテルと天然温泉で寛ぐ優雅な冬旅へ。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-4 h-4 text-sky-400" /> 生田神社・メリケンパーク・ハーバーランド・南京町
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Utensils className="w-4 h-4 text-amber-400" /> 神戸牛鉄板焼・南京町点心・割烹寿司・スイーツ
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-rose-400" /> 探訪期：11月上旬〜1月下旬
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-rose-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-rose-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">神戸ルミナリエ＆生田神社初詣宿</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Deep Dive Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1000万ドルの煌めきと希望の光のアート！冬の神戸が放つ唯一無二のエレガンス
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              海と山が織りなす冬夜景の極致、新春の厳かな社殿、世界が憧れる神戸牛の極上晩餐
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              六甲山系の急峻な山並みが北に迫り、南には穏やかな大阪湾と神戸港が広がる東西に細長い地形が生み出す、港町・神戸。冬の気圧配置が決まると空気が乾燥して抜群の透明度を誇り、高台やウォーターフロントから眺める夜景は「1000万ドルの輝き」と称される息を呑む絶景となります。港に浮かぶポートタワーの深紅のイルミネーション、モザイクの大観覧車の色彩、行き交うクルーズ船の光跡が水面に揺れる光景は、冬の神戸ならではの至高の情景です。
            </p>
            <p>
              初冬から新春にかけての神戸を語る上で欠かせないのが、希望の光を灯す「神戸ルミナリエ」です。荘厳なバロック建築を思わせる木製フレームに無数の電球が灯る光の彫刻作品は、ヨーロッパの伝統美と神戸の不屈の祈りが結晶化した芸術。メリケンパークの広大な夜空の下、冬の海風を感じながら光のトンネルをくぐる瞬間は、言葉を失うほどの感動をもたらします。
            </p>
            <p>
              そして新年を迎えると、神戸の中心・三宮に鎮座する「生田神社」が150万人もの初詣客で沸き立ちます。西暦201年創建と伝わる古社であり、良縁を結び災厄を祓う神様として全国から篤い崇敬を集めます。朱塗りの本殿前で手を合わせ、境内の奥に広がる「生田の森」の清らかな神気に触れるひとときは、新しい一年の力強い活力となるはずです。
            </p>
            <p>
              参拝後は、異国情緒あふれる南京町で熱々の豚まんや小籠包をつまみ、夜は世界最高峰の肉質を誇る本場「神戸牛」のディナーへ。きめ細やかなサシが舌の上でふわりととろけ、赤身の芳醇な旨味が広がるステーキやしゃぶしゃぶは、旅のハイライトにふさわしい至福の味わい。さらに、海辺のホテルに湧く天然温泉「神戸みなと温泉」で温まれば、身も心も完璧に解きほぐされる極上の旅が完成します。
            </p>
          </div>
        </section>

        {/* 5 Hotels Detail Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              神戸港・三宮・元町で冬を彩る極上名宿5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              楽天トラベル公式APIからリアルタイムに取得した高評価のホテル群。全室テラス付きのオーシャンビュー温泉宿から名門シティホテルまで特選しました。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition duration-300 flex flex-col lg:flex-row"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full bg-slate-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Building className="w-3.5 h-3.5 text-rose-400" />
                    <span>厳選宿 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-sm text-white p-3 rounded-2xl text-xs space-y-1 border border-white/10">
                    <p className="text-slate-300 line-clamp-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      {hotel.access}
                    </p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span className="font-bold text-sm ml-1 text-slate-800">{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">({hotel.reviews}件のクチコミ)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名）</span>
                        <span className="text-lg sm:text-xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-rose-600 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 group">
                          <span>{hotel.name}</span>
                          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 shrink-0" />
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        {hotel.special}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {hotel.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-100/60">
                        <span className="font-bold text-rose-800 block mb-1 flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-rose-600" /> おすすめ客室
                        </span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-800 block mb-1 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-600" /> 冬のグルメ体験
                        </span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">滞在の魅力ポイント</span>
                      {hotel.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 hover:from-rose-700 hover:to-indigo-800 text-white font-bold text-sm shadow-sm hover:shadow transition"
                    >
                      <span>楽天トラベルで空室・宿泊プランを確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日王道モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の神戸港・元町・三宮を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              生田神社初詣、南京町点心ランチ、神戸ルミナリエ鑑賞、極上神戸牛と天然温泉を巡る洗練プラン
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-rose-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 11:00】JR三ノ宮駅到着＆「生田神社」新春開運初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                JR三ノ宮駅または新神戸駅に到着し、生田ロードを抜けて生田神社へ。稚日女尊を祀る朱塗りの拝殿前で新春の良縁成就や厄除けを祈願。本殿裏の「生田の森」の清らかな神気に触れ、池の水に浸すと文字が浮かび上がる名物「水みくじ」で新年の運勢を占います。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 13:00】元町「南京町」で湯気立つ本格中華・点心ランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                トアロードを下り、活気あふれる南京町中華街へ。老祥記の行列に並んで肉汁あふれる元祖豚饅頭（ぶたまん）や、熱々の小籠包、焼き餃子、角煮バーガーを頬張る冬の食べ歩き。冬の寒空の下、立ち上る白い湯気と香ばしい中華スパイスの香りが食欲をそそります。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 15:30】厳選ホテルへチェックイン＆テラスで夕暮れ鑑賞</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                神戸みなと温泉 蓮やホテルオークラ神戸、神戸メリケンパークオリエンタルホテル等へ。客室のウッドデッキテラスから、夕陽に染まる神戸港の海面とリニューアルした神戸ポートタワーの優美なシルエットを鑑賞。天然温泉やジャグジーで散策の疲れをゆったりと癒やします。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 18:00】メリケンパーク「神戸ルミナリエ」光のアート鑑賞</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                メリケンパークや旧居留地へ移動し、冬の夜空に輝く「神戸ルミナリエ」へ。無数の電球で組み上げられた光の宮殿や光の回廊「ガレリア」が音楽とともに荘厳に輝き、海風の中に圧倒的な感動が広がります。モザイクの大観覧車やイルミネーションが煌めくハーバーランドの夜景も一望。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 09:30】海を望む朝食ビュッフェ＆北野異人館街の冬散歩</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                ホテル特製の和洋朝食や焼き立てパンを満喫後、シティループバスで北野異人館街へ。風見鶏の館やうろこの家など明治のレトロな洋館が立ち並ぶ坂道を散策し、異国情緒あふれるカフェで神戸スイーツと香り高い紅茶を味わい、優雅な冬の休日を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Experience Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Travel Strategy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の神戸港・元町・三宮完全攻略：ルミナリエ・生田神社・神戸牛の心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-500" />
                神戸ルミナリエの会場構成と快適な回り方
              </h3>
              <p className="leading-relaxed">
                神戸ルミナリエはメリケンパーク、旧居留地、東遊園地の3つのエリアで展開されます。メリケンパーク会場では有料エリア（チケット制）が設けられる場合があり、事前にWeb予約しておくと待ち時間なくスムーズに入場できます。海を背にした光の彫刻は開放感抜群で、港の夜景とともに撮影できるため、夕暮れ直後のトワイライトから完全な日没にかけての入場が最も美しい景観を楽しめます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-indigo-500" />
                生田神社新春初詣の混雑回避と縁結びスポット
              </h3>
              <p className="leading-relaxed">
                生田神社は三が日で約150万人が訪れるため、日中の生田ロードは参拝客で埋め尽くされます。落ち着いてお参りするなら、午前7:00〜8:30の早朝時間帯が狙い目です。参拝後は本殿奥にある「生田の森」へ。都会の真ん中とは思えない静謐な森の中に流れる小川に「水みくじ」を浮かべ、新年の吉凶を占うのが若い世代やカップルに大人気です。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                世界が憧れる「神戸牛」の選び方とおすすめスタイル
              </h3>
              <p className="leading-relaxed">
                本物の神戸牛（但馬牛の厳選規格）を味わうなら、熟練シェフが目の前で焼き上げる「鉄板焼ステーキ」が王道です。人肌の温度で溶け出す上質な不飽和脂肪酸が、重たさを感じさせない軽やかなコクと芳醇な香りを口いっぱいに広げます。あっさり味わいたい方には冬限定の「神戸牛しゃぶしゃぶ」やすき焼きも大好評。有名店は年末年始や週末に満席となるため、宿泊先ホテル内のレストランを宿泊予約と同時に確保するのが賢明です。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Waves className="w-5 h-5 text-teal-500" />
                海辺に湧く天然温泉「神戸みなと温泉」の温浴効果
              </h3>
              <p className="leading-relaxed">
                神戸港の新港突堤に湧く「神戸みなと温泉」は、地下1,150mから汲み上げる高濃度のナトリウム塩化物泉。湯上がりに肌がしっとり潤い、体の熱を逃がさない保温効果があるため、冬の寒風にさらされた後の入浴に最高です。露天風呂から神戸港を航行する客船の汽笛を聞きながら湯浴みを楽しむ時間は、都会にいながら極上のリゾート気分を味あわせてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Climate and Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Logistics</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬（11月・12月・1月）の神戸気候・海風防寒対策とスムーズアクセス術
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-rose-500" />
                六甲おろしと海風の防寒ポイント
              </h3>
              <p className="leading-relaxed">
                神戸の冬は北から吹き降ろす「六甲おろし」と、南の海から吹き込む冷たい海風が交錯します。特にメリケンパークやハーバーランドの海岸沿いは遮蔽物が少ないため、風を通さない防風ダウンやロングコート、手袋、マフラーが必須です。また、北野異人館街は急な坂道が多いため、ヒールではなく滑りにくい歩きやすいブーツやスニーカーを選びましょう。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-500" />
                無料シャトルバス＆シティループの使いこなし
              </h3>
              <p className="leading-relaxed">
                JR三ノ宮駅とメリケンパーク、ハーバーランド、ポートアイランドの各ホテル間は、各ホテルが運行する無料シャトルバスが高頻度で発着しており、寒い夜でも快適に移動できます。また、三宮・元町・南京町・メリケンパーク・北野異人館を巡る観光周遊バス「シティループ」を利用すれば、主要観光スポットを乗り換えなしで効率よく周遊できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs uppercase tracking-wider block">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の神戸港・生田神社・元町旅行 よくある質問
            </h2>
          </div>

          <div className="divide-y divide-slate-100 space-y-4">
            {faqData.map((item: any, idx: number) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="bg-rose-100 text-rose-700 text-xs px-2 py-0.5 rounded-md shrink-0 font-extrabold mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Feature Links Section */}
        <section className="bg-slate-100/80 rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-200">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-600" />
            あわせて読みたい関西・兵庫の冬特選特集記事
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            有馬温泉や姫路城、大阪・京都など近隣の魅力的な冬旅特集もぜひご覧ください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-rose-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">有馬温泉の金泉銀泉＆冬の極上神戸牛！日本最古の名湯宿</span>
              <span className="text-[11px] text-rose-600 font-medium mt-2 flex items-center gap-1">兵庫・有馬温泉特集を読む →</span>
            </Link>
            <Link 
              href="/winter-hyogo-himeji-castle-shoshasan-hatsumode-oyster-banshubee-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-rose-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">世界遺産姫路城冬景色＆書写山圓教寺初詣！播磨牡蠣の名宿</span>
              <span className="text-[11px] text-rose-600 font-medium mt-2 flex items-center gap-1">兵庫・姫路特集を読む →</span>
            </Link>
            <Link 
              href="/winter-osaka-castle-nakanoshima-illumination-tenmangu-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-rose-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">大阪城イルミナージュ＆大阪天満宮初詣！中之島水都夜景宿</span>
              <span className="text-[11px] text-rose-600 font-medium mt-2 flex items-center gap-1">大阪・大阪城特集を読む →</span>
            </Link>
            <Link 
              href="/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-rose-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">春日大社新春開運初詣＆東大寺冬景色！大和牛すき焼きの古都宿</span>
              <span className="text-[11px] text-rose-600 font-medium mt-2 flex items-center gap-1">奈良・奈良公園特集を読む →</span>
            </Link>
            <Link 
              href="/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-rose-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">伏見稲荷大社新春初詣＆宇治抹茶！冬の酒蔵めぐりと京会席宿</span>
              <span className="text-[11px] text-rose-600 font-medium mt-2 flex items-center gap-1">京都・伏見宇治特集を読む →</span>
            </Link>
            <Link 
              href="/features"
              className="bg-rose-50 p-3.5 rounded-2xl border border-rose-200 hover:bg-rose-100 transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-rose-900 line-clamp-2">全国の冬旅・新春初詣＆温泉特選特集一覧</span>
              <span className="text-[11px] text-rose-700 font-medium mt-2 flex items-center gap-1">全特集一覧へ戻る →</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay" />
</div>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center text-xs text-slate-400">
        <p>※掲載の宿泊料金目安・口コミ評価・イベント開催情報は最新のAPIおよび公式発表に基づきます。最新情報は各予約サイトをご確認ください。</p>
        <p className="mt-1">© 2026 くらうどトラベル All Rights Reserved.</p>
      </footer>
    </article>
  );
}
