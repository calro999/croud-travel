export interface SpotInfo {
  name: string;
  description: string;
}

export interface SubAreaInfo {
  areaName: string;
  slug: string;
  description: string;
  spots: SpotInfo[];
  gourmet: string[];
  keywords: string[]; // 宿とのマッチング用キーワード
}

export interface CafeInfo {
  name: string;
  type: string;
  description: string;
  recommend: string;
}

export interface SouvenirInfo {
  name: string;
  category: string;
  description: string;
}

export interface SakeInfo {
  name: string;
  brewery: string;
  type: string;
  description: string;
}

export interface PrefectureInfo {
  slug: string;
  name: string;
  region: string;
  highlights: string[];
  gourmet: string[];
  description: string;
  bannerImage: string;
  subAreas: SubAreaInfo[];
  cafes: CafeInfo[];
  souvenirs: SouvenirInfo[];
  sakes: SakeInfo[];
}

export const REGIONS_MAP: Record<string, string[]> = {
  "北海道": ["北海道"],
  "東北": ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
  "関東": ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"],
  "甲信越・北陸": ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県"],
  "東海": ["岐阜県", "静岡県", "愛知県", "三重県"],
  "近畿": ["滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
  "中国": ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
  "四国": ["徳島県", "香川県", "愛媛県", "高知県"],
  "九州・沖縄": ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"]
};

export const PREFECTURES_DATA: PrefectureInfo[] = [
  // 石川県（超詳細細分化）
  {
    slug: "ishikawa",
    name: "石川県",
    region: "甲信越・北陸",
    highlights: ["兼六園", "金沢ひがし茶屋街", "輪島白米千枚田", "和倉温泉", "加賀温泉郷", "白山比咩神社"],
    gourmet: ["加賀料理", "金沢カレー", "ズワイガニ（加能ガニ）", "のどぐろ", "金沢おでん"],
    description: "加賀百万石の優雅な城下町金沢、加賀温泉郷、神秘的な能登の自然。伝統工芸と絶品美食が心を惹きつける国内屈指の絶景エリア。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "金沢城・兼六園・広坂エリア",
        slug: "kanazawa-kenrokuen",
        description: "日本三名園・兼六園と金沢城公園、金沢21世紀美術館が集結する金沢観光の最重要シンボル地区。",
        spots: [
          { name: "兼六園", description: "加賀藩主によって作られた回遊式庭園。冬の風物詩「雪吊り」と四季折々の美景が見事。" },
          { name: "金沢21世紀美術館", description: "ガラス張りの円形建物と「スイミング・プール」で有名な世界的人気現代美術館。" },
          { name: "金沢城公園", description: "菱櫓や五十間長屋、河北門が復元された加賀百万石の威風堂々たる城郭公園。" }
        ],
        gourmet: ["兼六園名物団子", "金箔ソフトクリーム", "加賀会席料理"],
        keywords: ["兼六園", "金沢城", "広坂", "21世紀美術館"]
      },
      {
        areaName: "ひがし茶屋街・主計町茶屋街エリア",
        slug: "higashi-chaya",
        description: "出格子がある江戸時代の茶屋建築が残る木造の街並み。着物散策や和スイーツ、金箔体験が楽しめる伝統の街。",
        spots: [
          { name: "ひがし茶屋街", description: "重要伝統的建造物群保存地区。石畳と木造出格子の情緒ある風景が広がります。" },
          { name: "主計町（かずえまち）茶屋街", description: "浅野川沿いに佇む隠れ家的な茶屋街。暗がり坂やあかり坂の情緒溢れる風景。" }
        ],
        gourmet: ["金箔パンケーキ", "金沢和菓子セット", "町家カフェ珈琲"],
        keywords: ["ひがし茶屋", "主計町", "浅野川", "橋場町"]
      },
      {
        areaName: "近江町市場・香林坊・長町武家屋敷エリア",
        slug: "ohmicho-korinbo",
        description: "「金沢の台所」近江町市場のフレッシュな海鮮と、土塀が続く武家屋敷跡、香林坊のショッピングエリア。",
        spots: [
          { name: "近江町市場", description: "約300年の歴史を持つ市場。活気あふれる店並みで獲れたての海鮮丼や焼き立て魚介を堪能。" },
          { name: "長町武家屋敷跡", description: "加賀藩士が暮らした屋敷跡。土塀や用水路、野村家など当時の面影を色濃く残します。" }
        ],
        gourmet: ["近江町海鮮丼", "のどぐろ炙り重", "金沢カレー", "金沢おでん"],
        keywords: ["近江町", "香林坊", "長町", "武家屋敷", "片町"]
      },
      {
        areaName: "輪島・白米千枚田・奥能登エリア",
        slug: "wajima-senmaida",
        description: "白米千枚田の壮大な棚田と朝市の活気、能登半島の荒々しくも美しい海岸美に出会える奥能登ルート。",
        spots: [
          { name: "白米千枚田", description: "日本海に面した急斜面に小さな田が1,004枚重なる棚田の絶景。ライトアップあぜのきらめきが幻想的。" },
          { name: "輪島朝市", description: "千年以上の歴史を誇る名物朝市。鮮魚や干物、輪島塗の露店と活気ある会話を満喫。" }
        ],
        gourmet: ["輪島ふぐ", "能登丼", "輪島塗お祝い膳"],
        keywords: ["輪島", "千枚田", "奥能登", "珠洲", "禄剛崎"]
      },
      {
        areaName: "和倉温泉・七尾・能登島エリア",
        slug: "wakura-nanao",
        description: "七尾湾を望む開湯1200年の名湯・和倉温泉と、イルカが泳ぐ自然豊かな能登島リゾート。",
        spots: [
          { name: "和倉温泉 総湯・湯めぐり", description: "海の恵みが豊富な高温泉。高級旅館加賀屋をはじめ極上の温泉もてなしが魅力。" },
          { name: "能登島ガラス美術館・能登島大橋", description: "海の上を渡る絶景の橋と、世界中の現代ガラス工芸を集めた人気の美術館。" }
        ],
        gourmet: ["能登牛ステーキ", "七尾港鮮魚寿司", "能登ミルク"],
        keywords: ["和倉", "七尾", "能登島", "穴水"]
      },
      {
        areaName: "山代・山中・片山津（加賀温泉郷）エリア",
        slug: "kaga-three-onsen",
        description: "山代・山中・片山津の個性溢れる3大温泉街。鶴仙渓の絶景散策と九谷焼・山中漆器の伝統文化。",
        spots: [
          { name: "山中温泉 鶴仙渓・あやとりはし", description: "渓谷美を誇る散策路。斬新なデザインのあやとりはしや川床でのひと休みが人気。" },
          { name: "山代温泉 古総湯", description: "ステンドグラスと九谷焼のタイルの壁画がレトロ美しい、明治時代の温泉文化を伝える浴室。" }
        ],
        gourmet: ["加賀カニごはん", "山中温泉コロッケ", "加賀棒茶ソフト"],
        keywords: ["加賀", "山代", "山中", "片山津", "粟津"]
      },
      {
        areaName: "白山・小松・松任エリア",
        slug: "hakusan-komatsu",
        description: "霊峰白山の自然信仰と手取峡谷の迫力ある渓谷美、歌舞伎のまち小松の歴史散策ルート。",
        spots: [
          { name: "白山比咩神社（しらやまひめじんじゃ）", description: "全国白山神社の総本宮。杉並木が美しい北陸有数のパワースポット。" },
          { name: "手取峡谷・綿ヶ滝", description: "高さ20mの断崖が続く壮大な峡谷。ダイナミックな綿ヶ滝の水しぶきが爽快。" }
        ],
        gourmet: ["小松うどん", "堅豆腐料理", "白山高山植物ハーブティー"],
        keywords: ["白山", "小松", "松任", "手取 Canyon"]
      }
    ],
    cafes: [
      {
        name: "茶房 素心（ひがし茶屋街）",
        type: "町家和モダンカフェ",
        description: "ひがし茶屋街のメイン通りに佇む町家カフェ。自家焙煎珈琲と和菓子の贅沢セットが人気。",
        recommend: "自家焙煎珈琲＆上生菓子セット"
      },
      {
        name: "石川県立美術館内 パティシエ 辻口博啓「LE MUSEE DE H」",
        type: "パティスリーカフェ",
        description: "兼六園に隣接する美術館内のサロン。地元食材を活かした世界基準の極上スイーツをガラス越しのお庭と鑑賞。",
        recommend: "セラヴィ・加賀棒茶ロール"
      },
      {
        name: "山中温泉 鶴仙渓 川床カフェ",
        type: "絶景渓谷テラスカフェ",
        description: "川のせせらぎを聞きながら、道場六三郎氏レシピの川床スイーツを楽しめる期間限定の絶景テラス。",
        recommend: "川床ロール＆加賀棒茶"
      }
    ],
    souvenirs: [
      {
        name: "烏鶏庵（うけいあん）烏骨鶏かすていら",
        category: "伝統銘菓・スイーツ",
        description: "自社農場で育てた烏骨鶏の濃厚な卵をたっぷり使用した、しっとり贅沢な最高級カステラ。"
      },
      {
        name: "中浦食品・輪島塗・九谷焼小皿",
        category: "伝統工芸雑貨",
        description: "加賀百万石の彩りを生活に添える、モダンで可愛い九谷焼豆皿や輪島塗のお箸。"
      },
      {
        name: "あいの風 のどぐろ煎餅・干物セット",
        category: "海鮮特産品",
        description: "高級魚のどぐろの脂の乗った旨味を贅沢に味わえる煎餅や急速冷凍の真空パック干物。"
      }
    ],
    sakes: [
      {
        name: "菊姫（きくひめ）",
        brewery: "菊姫合資会社（白山市）",
        type: "極上清酒・吟醸酒",
        description: "山田錦の極上品にこだわり、濃醇で圧倒的な旨味とコクを持つ加賀の最高峰日本酒。"
      },
      {
        name: "手取川（てどりがわ）",
        brewery: "吉田酒造店（白山市）",
        type: "大吟醸・生酒",
        description: "霊峰白山の伏流水で醸す、フレッシュでフルーティーな香りと綺麗な後味が魅力の逸品。"
      },
      {
        name: "宗玄（そうげん）",
        brewery: "宗玄酒造（珠洲市）",
        type: "奥能登銘酒",
        description: "奥能登最古の蔵元。能登杜氏の技が光る、旨味が強く料理に寄り添う辛口純米酒。"
      }
    ]
  },

  // 北海道（超詳細細分化）
  {
    slug: "hokkaido",
    name: "北海道",
    region: "北海道",
    highlights: ["函館夜景", "富良野ラベンダー畑", "知床世界遺産", "小樽運河", "阿寒湖"],
    gourmet: ["海鮮丼", "ジンギスカン", "スープカレー", "みそラーメン"],
    description: "大自然の雄大なパノラマと、極上の温泉・絶品海鮮グルメが魅力の日本最北の旅情溢れるエリアです。",
    bannerImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "札幌・大通・すすきのエリア",
        slug: "sapporo-central",
        description: "時計台や大通公園、夜の賑わいを見せるすすきの。北海道の都市文化と味噌ラーメン・スープカレーの発祥地。",
        spots: [
          { name: "札幌大通公園・テレビ塔", description: "四季折々のイベントと花壇が美しい都市のオアシス。" },
          { name: "札幌ラーメン横丁", description: "元祖味噌ラーメンの名店が集結するラーメン聖地。" }
        ],
        gourmet: ["札幌味噌ラーメン", "元祖スープカレー", "ジンギスカン"],
        keywords: ["札幌", "大通", "すすきの", "中島公園"]
      },
      {
        areaName: "小樽・余市・積丹エリア",
        slug: "otaru-yoichi",
        description: "大正ロマン漂う小樽運河とガラス工芸、ウイスキーの郷余市、積丹ブルーの海とウニ丼。",
        spots: [
          { name: "小樽運河", description: "夕暮れ時にガス灯が灯る歴史的運河散策。" },
          { name: "ニッカウヰスキー余市蒸溜所", description: "竹鶴政孝が創業した日本のウイスキー聖地。" }
        ],
        gourmet: ["小樽握り寿司", "積丹生ウニ丼", "ルタオドゥーブルフロマージュ"],
        keywords: ["小樽", "余市", "積丹", "朝里"]
      },
      {
        areaName: "函館・湯の川・五稜郭エリア",
        slug: "hakodate-central",
        description: "世界屈指の函館山夜景、星形要塞五稜郭、名物朝市と湯の川温泉の魅力あふれる港町。",
        spots: [
          { name: "函館山山頂展望台", description: "両側の海に挟まれた100万ドルの夜景。" },
          { name: "五稜郭タワー", description: "タワー上部から綺麗な星形の城郭を一望。" }
        ],
        gourmet: ["函館朝市海鮮丼", "塩ラーメン", "ラッキーピエロチャイニーズチキンバーガー"],
        keywords: ["函館", "五稜郭", "湯の川", "恵山"]
      },
      {
        areaName: "富良野・美瑛エリア",
        slug: "furano-biei",
        description: "広大なラベンダー畑とパッチワークの丘。四季のパノラマ絶景が広がるロマンチックエリア。",
        spots: [
          { name: "ファーム富田", description: "紫色のラベンダーとカラフルな花畑の絨毯。" },
          { name: "美瑛の青い池", description: "コバルトブルーの水面と枯れ木が織りなす神秘の世界。" }
        ],
        gourmet: ["富良野オムカレー", "美瑛和牛", "ふらのメロンソフト"],
        keywords: ["富良野", "美瑛", "上富良野", "中富良野"]
      },
      {
        areaName: "登別・洞爺湖・定山渓エリア",
        slug: "noboribetsu-toya",
        description: "日本有数の湯量を誇る登別温泉地獄谷と、カルデラ湖洞爺湖の絶景温泉リゾート。",
        spots: [
          { name: "登別温泉 地獄谷", description: "毎分3000Lの源泉が湧き出る迫力の火山遺構。" },
          { name: "洞爺湖中島遊覧船", description: "美しいカルデラ湖と羊諦山を望む絶景クルーズ。" }
        ],
        gourmet: ["登別閻魔焼きそば", "噴火湾ホタテ料理"],
        keywords: ["登別", "洞爺", "定山渓", "支笏湖"]
      }
    ],
    cafes: [
      {
        name: "小樽 LeTAO（ルタオ）本店カフェ",
        type: "洋菓子スイーツカフェ",
        description: "小樽メルヘン交差点に位置する名店。限定の生ドゥーブルフロマージュが味わえます。",
        recommend: "生ドゥーブルフロマージュ＆紅茶セット"
      },
      {
        name: "六花亭 札幌本店ガーデンカフェ",
        type: "帯広和洋菓子カフェ",
        description: "緑豊かなガーデンを眺めながら、賞味期限3時間のマルセイアイスサンドを満喫。",
        recommend: "マルセイアイスサンド・サクサクパイ"
      }
    ],
    souvenirs: [
      {
        name: "白い恋人（石屋製菓）",
        category: "定番銘菓",
        description: "サクサクのラングドシャクッキーでホワイトチョコレートを挟んだ、北海道お土産の王様。"
      },
      {
        name: "じゃがポックル（カルビー）",
        category: "北海道スナック",
        description: "北海道産100%の皮付きじゃがいもを使用した、旨味溢れるサクサク食感のポテトスナック。"
      }
    ],
    sakes: [
      {
        name: "男山（おとこやま）",
        brewery: "男山株式会社（旭川市）",
        type: "辛口純米酒",
        description: "大雪山の清冽な伏流水で醸す、すっきりキリッとした淡麗辛口の北海道を代表する銘酒。"
      },
      {
        name: "国稀（くにまれ）",
        brewery: "国稀酒造（増毛町）",
        type: "最北の地酒",
        description: "日本最北の酒蔵。南部杜氏の技を受け継ぎ、すっきりとした口当たりと米の旨味が活きる酒。"
      }
    ]
  },

  // 東京都（超詳細細分化）
  {
    slug: "tokyo",
    name: "東京都",
    region: "関東",
    highlights: ["浅草寺", "東京スカイツリー", "お台場", "高尾山", "伊豆大島"],
    gourmet: ["江戸前寿司", "もんじゃ焼き", "深川めし"],
    description: "伝統の和と最先端のトレンドが融合する日本の中枢。高級ラグジュアリーホテルと洗練された美食が楽しめます。",
    bannerImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "浅草・雷門・押上スカイツリーエリア",
        slug: "asakusa-skytree-tokyo",
        description: "下町情緒を残す浅草寺や仲見世通りと、世界一高いタワー・東京スカイツリーが共存する人気エリア。",
        spots: [
          { name: "浅草寺・雷門", description: "都内最古の寺院。大きな赤提灯と賑やかな仲見世散策。" },
          { name: "東京スカイツリータウン", description: "地上450mの天望回廊とプラネタリウム、ソラマチのショップ群。" }
        ],
        gourmet: ["浅草天丼", "もんじゃ焼き", "舟和の芋ようかん"],
        keywords: ["浅草", "押上", "スカイツリー", "本所"]
      },
      {
        areaName: "新宿・原宿・表参道・渋谷エリア",
        slug: "shinjuku-shibuya-tokyo",
        description: "ファッション、ポップカルチャー、スクランブル交差点。常にトレンドを発信し続けるエネルギッシュな街。",
        spots: [
          { name: "SHIBUYA SKY", description: "渋谷スクランブルスクエア屋上からの360度超高層オープンエアパノラマ。" },
          { name: "明治神宮", description: "都会の真ん中に広がる広大な鎮守の森。初詣参拝客数日本一。" }
        ],
        gourmet: ["ミシュラン掲載ラーメン", "インスタ映えスイーツ", "熟成牛ステーキ"],
        keywords: ["新宿", "渋谷", "原宿", "表参道"]
      },
      {
        areaName: "銀座・丸の内・東京駅エリア",
        slug: "ginza-tokyo-station",
        description: "一流ブランドショップや伝統老舗が集う銀座と、レトロモダンな赤レンガ東京駅丸ノ内エリア。",
        spots: [
          { name: "東京駅丸ノ内駅舎", description: "大正時代の創建時の美しさを完全復原したクラシック建築。" },
          { name: "銀座中央通り", description: "伝統と革新が共存する日本最高峰のショッピング街。" }
        ],
        gourmet: ["江戸前寿司", "老舗洋食", "グランスタ限定スイーツ"],
        keywords: ["銀座", "東京駅", "丸の内", "日本橋"]
      }
    ],
    cafes: [
      {
        name: "表参道 Café Kitsuné（カフェ キツネ）",
        type: "モダンパリ風カフェ",
        description: "和と洋がスタイリッシュに融合した竹林の入口を持つエスプレッソバー＆スイーツカフェ。",
        recommend: "キツネサブレ＆カフェラテ"
      },
      {
        name: "浅草 抹茶スイーツ処「茶々工房」",
        type: "老舗和風日本茶カフェ",
        description: "高級宇治抹茶を贅沢に使った濃厚抹茶濃厚濃縮アイスやパフェが味わえる行列店。",
        recommend: "濃厚抹茶パフェ"
      }
    ],
    souvenirs: [
      {
        name: "東京ばな奈「見ぃつけたっ」",
        category: "定番人気お土産",
        description: "ふんわり柔らかいスポンジケーキの中に、バナナカスタードクリームがたっぷり詰まったロングセラー。"
      },
      {
        name: "Press Butter Sand（プレスバターサンド）",
        category: "トレンドバターサンド",
        description: "濃厚なバタークリームとバターキャラメルをはさみ焼きのサクサククッキーで挟んだ洗練されたお土産。"
      }
    ],
    sakes: [
      {
        name: "澤乃井（さわのい）",
        brewery: "小澤酒造（青梅市）",
        type: "東京清流名酒",
        description: "奥多摩の美しい自然と名水で醸す、すっきり清々しい味わいの東京を代表する歴史ある銘酒。"
      }
    ]
  },

  // 京都府（超詳細細分化）
  {
    slug: "kyoto",
    name: "京都府",
    region: "近畿",
    highlights: ["清水寺", "金閣寺", "嵐山竹林の小径", "天橋立"],
    gourmet: ["京懐石", "湯豆腐", "宇治抹茶スイーツ", "ハモ料理"],
    description: "千年の都の趣と美意識が息づく歴史の街。洗練された伝統旅館や和風高級ホテルで過ごす特別なひととき。",
    bannerImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "清水・祇園・高台寺エリア",
        slug: "kiyomizu-gion",
        description: "「清水の舞台」で知られる清水寺や産寧坂、舞妓さんが行き交う石畳の祇園など京都情緒の象徴。",
        spots: [
          { name: "清水寺", description: "崖に張り出した木造舞台からの京都市内の大絶景。音羽の滝の霊水も有名。" },
          { name: "花見小路通・祇園", description: "格子戸の茶屋様式建築が並ぶ京都で最も風情ある石畳の通り。" }
        ],
        gourmet: ["京湯豆腐", "宇治抹茶スイーツ", "祇園京料理"],
        keywords: ["清水", "祇園", "高台寺", "八坂"]
      },
      {
        areaName: "嵐山・嵯峨野・太秦エリア",
        slug: "arashiyama-sagano-kyoto",
        description: "渡月橋と竹林の小径、四季折々の嵐山の山並みが織りなす平安貴族も愛した景勝地。",
        spots: [
          { name: "竹林の小径", description: "天高く伸びる青竹の静寂と風の音が心地よい幻想的散策路。" },
          { name: "渡月橋", description: "桂川にかかる木造風の美しい橋。春の桜と秋の紅葉は必見。" }
        ],
        gourmet: ["湯葉会席", "抹茶ソフト", "トロッコ弁当"],
        keywords: ["嵐山", "嵯峨野", "渡月橋"]
      }
    ],
    cafes: [
      {
        name: "％ ARABICA Kyoto Arashiyama（アラビカ京都嵐山）",
        type: "絶景コーヒースタンド",
        description: "渡月橋と桂川の絶景を目の前に臨む世界的人気のエスプレッソコーヒースタンド。",
        recommend: "カフェラテ（カフェアート）"
      },
      {
        name: "マールブランシュ 加賀・京都北山 本店カフェ",
        type: "京都洋菓子サロン",
        description: "「お濃茶ラングドシャ 茶の菓」で知られる名店。限定の濃茶パフェやモンブランが極上。",
        recommend: "お濃茶パフェ"
      }
    ],
    souvenirs: [
      {
        name: "マールブランシュ「茶の菓」",
        category: "京都お濃茶スイーツ",
        description: "宇治の厳選お濃茶を使用したラングドシャでホワイトチョコレートをサンドした最高峰の京都土産。"
      },
      {
        name: "聖護院八ッ橋・生八ッ橋",
        category: "伝統和菓子",
        description: "ニッキや抹茶の香りと、もちもちの生地でつぶあんを包んだ京都伝統の銘菓。"
      }
    ],
    sakes: [
      {
        name: "伏見の清酒 月桂冠・玉乃光",
        brewery: "伏見酒蔵群（京都市伏見区）",
        type: "京都伏見名醸酒",
        description: "名水「伏水」で醸される、まろやかで上品な旨味と口当たりの良さが特徴の京の酒。"
      }
    ]
  }
];

// 不足している都道府県データを自動補完生成する高度ヘルパー
export function getPrefectureBySlug(slug: string): PrefectureInfo | undefined {
  const found = PREFECTURES_DATA.find(p => p.slug === slug);
  if (found) return found;

  const nameMap: Record<string, string> = {
    "aomori": "青森県", "iwate": "岩手県", "miyagi": "宮城県", "akita": "秋田県", "yamagata": "山形県", "fukushima": "福島県",
    "ibaraki": "茨城県", "tochigi": "栃木県", "gunma": "群馬県", "saitama": "埼玉県", "chiba": "千葉県", "kanagawa": "神奈川県",
    "niigata": "新潟県", "toyama": "富山県", "fukui": "福井県", "yamanashi": "山梨県", "nagano": "長野県",
    "gifu": "岐阜県", "shizuoka": "静岡県", "aichi": "愛知県", "mie": "三重県",
    "shiga": "滋賀県", "osaka": "大阪府", "hyogo": "兵庫県", "nara": "奈良県", "wakayama": "和歌山県",
    "tottori": "鳥取県", "shimane": "島根県", "okayama": "岡山県", "hiroshima": "広島県", "yamaguchi": "山口県",
    "tokushima": "徳島県", "kagawa": "香川県", "ehime": "愛媛県", "kochi": "高知県",
    "saga": "佐賀県", "nagasaki": "長崎県", "kumamoto": "熊本県", "oita": "大分県", "miyazaki": "宮崎県", "kagoshima": "鹿児島県"
  };

  const name = nameMap[slug];
  if (!name) return undefined;

  const cleanName = name.replace(/(県|府|東京都)$/, "");

  return {
    slug,
    name,
    region: "日本全国",
    highlights: [`${cleanName}名所`, `${cleanName}観光`, "絶景・名湯"],
    gourmet: [`${cleanName}ご当地グルメ`, "地場特産品"],
    description: `${name}の雄大な自然美、歴史ある街並み、名湯温泉、絶品グルメを満喫できる人気観光ポータルです。`,
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: `${cleanName}中心・城下町エリア`,
        slug: `${slug}-center`,
        description: `${name}の歴史を感じる城郭や古い街並み、名物グルメが立ち並ぶ中心観光ルート。`,
        spots: [
          { name: `${cleanName}代表観光名所`, description: `${name}に訪れたら必ず足を運びたい人気No.1景勝地。` }
        ],
        gourmet: [`${cleanName}名物料理`],
        keywords: [cleanName]
      },
      {
        areaName: `${cleanName}温泉・自然リゾートエリア`,
        slug: `${slug}-resort`,
        description: `豊かな自然環境と源泉掛け流しの名湯温泉、四季折々の絶景が広がる癒やしのエリア。`,
        spots: [
          { name: `${cleanName}名湯温泉街`, description: `歴史ある温泉街の散策と極上のお湯で旅の疲れをほぐせます。` }
        ],
        gourmet: [`${cleanName}温泉会席料理`],
        keywords: [cleanName, "温泉", "リゾート"]
      }
    ],
    cafes: [
      {
        name: `${cleanName} 和モダン古民家カフェ`,
        type: "レトロ喫茶・スイーツ",
        description: `風情ある空間で地元食材を使った手作り和スイーツと自家焙煎珈琲を楽しめます。`,
        recommend: `${cleanName}限定スイーツセット`
      }
    ],
    souvenirs: [
      {
        name: `${cleanName} 銘菓名物お土産セット`,
        category: "伝統銘菓",
        description: `${name}のお土産として長年愛される伝統銘菓と最新トレンド手土産。`
      }
    ],
    sakes: [
      {
        name: `${cleanName} 代表名醸地酒`,
        type: "純米大吟醸",
        brewery: `${cleanName}歴史蔵元`,
        description: `地元の名水と厳選された酒米で丁寧に仕込まれた、フルーティーで味わい深い銘酒。`
      }
    ]
  };
}

export function getPrefectureByName(name: string): PrefectureInfo | undefined {
  const cleanName = name.replace(/(県|府|東京都)$/, "");
  return PREFECTURES_DATA.find(p => p.name === name || p.name.replace(/(県|府|東京都)$/, "") === cleanName);
}
