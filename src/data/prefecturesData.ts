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

export interface PrefectureInfo {
  slug: string;
  name: string;
  region: string;
  highlights: string[];
  gourmet: string[];
  description: string;
  bannerImage: string;
  subAreas: SubAreaInfo[];
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
  // 北海道
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
        areaName: "札幌・小樽エリア",
        slug: "sapporo-otaru",
        description: "時計台や大通公園が彩る都市文化と、ノスタルジックな小樽運河の情緒を楽しむ北海道観光の王道ルート。",
        spots: [
          { name: "小樽運河", description: "大正時代に完成した歴史的運河。夕暮れ時にはガス灯が灯りロマンチックな雰囲気に包まれます。" },
          { name: "札幌大通公園・時計台", description: "札幌の中心に位置する緑豊かなオアシス。季節ごとのイベントや歴史感じる時計台が見所。" }
        ],
        gourmet: ["札幌味噌ラーメン", "スープカレー", "小樽握り寿司"],
        keywords: ["札幌", "小樽", "定山渓"]
      },
      {
        areaName: "函館・道南エリア",
        slug: "hakodate-donan",
        description: "世界三大夜景と称される極上の夜景と、異国情緒あふれる洋館・赤レンガ倉庫が立ち並ぶ浪漫の港町。",
        spots: [
          { name: "函館山山頂展望台", description: "両側を海に挟まれた美しいくびれが生み出す、世界屈指の100万ドルの夜景絶景スポット。" },
          { name: "五稜郭公園", description: "日本初の西洋式星形要塞。春には約1,500本の桜が咲き誇る歴史の名所。" }
        ],
        gourmet: ["函館朝市海鮮丼", "塩ラーメン", "ラッキーピエロ"],
        keywords: ["函館", "湯の川"]
      },
      {
        areaName: "富良野・美瑛・旭川エリア",
        slug: "furano-biei",
        description: "見渡す限りの紫色のラベンダー畑とパッチワークの丘。絵画のような田園風景と動物園で人気のエリア。",
        spots: [
          { name: "ファーム富田", description: "一面に広がるラベンダー畑とカラフルな花々の絨毯。爽やかな香りに癒やされる最高の景勝地。" },
          { name: "美瑛の青い池", description: "コバルトブルーの水面と立ち枯れたカラマツが織りなす幻想的で神秘的な人気絶景スポット。" }
        ],
        gourmet: ["富良野オムカレー", "旭川醤油ラーメン", "ふらのメロン"],
        keywords: ["富良野", "美瑛", "旭川", "層雲峡"]
      },
      {
        areaName: "道東・知床・阿寒エリア",
        slug: "dotou-shiretoko",
        description: "世界自然遺産知床の原生林と、マリモが育む神秘の阿寒湖・摩周湖を巡る大自然探訪ルート。",
        spots: [
          { name: "知床五湖", description: "原生林に囲まれた5つの神秘的な湖。木道から知床連山と湖面の美しいコントラストを望めます。" },
          { name: "摩周湖", description: "「摩周ブルー」と称される世界有数の透明度を誇る神秘の霧の湖。" }
        ],
        gourmet: ["花咲ガニ", "豚丼", "釧路勝手丼"],
        keywords: ["知床", "網走", "阿寒", "川湯", "釧路", "帯広"]
      }
    ]
  },

  // 石川県
  {
    slug: "ishikawa",
    name: "石川県",
    region: "甲信越・北陸",
    highlights: ["兼六園", "金沢ひがし茶屋街", "加賀温泉郷", "能登半島", "白山比咩神社"],
    gourmet: ["加賀料理", "金沢カレー", "ズワイガニ（加能ガニ）", "のどぐろ"],
    description: "加賀百万石の優雅な城下町金沢と加賀温泉郷、神秘的な能登の自然。伝統工芸と美食が心を惹きつける風情ある地域です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "金沢エリア",
        slug: "kanazawa",
        description: "兼六園や城下町の風情残る茶屋街、現代アートが集う、加賀百万石の歴史と文化の中心的観光地。",
        spots: [
          { name: "兼六園", description: "日本三名園の一つ。四季折々の庭園美と冬の風物詩「雪吊り」の立派な姿に感動します。" },
          { name: "ひがし茶屋街", description: "出格子がある美しい木造の茶屋建築が立ち並び、金箔スイーツや和雑貨めぐりが楽しめます。" },
          { name: "金沢21世紀美術館", description: "「スイミング・プール」をはじめ、触れて体感できる斬新な現代アートが集まる超人気美術館。" }
        ],
        gourmet: ["金沢おでん", "ハントンライス", "のどぐろ炙り丼", "金箔ソフトクリーム"],
        keywords: ["金沢", "浅野川", "犀川"]
      },
      {
        areaName: "能登・輪島・七尾エリア",
        slug: "noto-wajima",
        description: "日本海の絶景と白米千枚田、輪島朝市の活気が自慢。能登の優しさと豊かな海の幸に出会える地域。",
        spots: [
          { name: "白米千枚田", description: "日本海に面した急斜面に小さな田が1,004枚重なる棚田の絶景。黄金色の稲穂やイルミネーションが絶品。" },
          { name: "輪島朝市", description: "千年の歴史を持つ朝市。獲れたての海産物や能登塗の工芸品、地元のお母さんとの会話が楽しめます。" },
          { name: "和倉温泉・七尾湾", description: "七尾湾を望む名湯・和倉温泉。海の景色と良質な温泉で極上のリフレッシュが叶います。" }
        ],
        gourmet: ["能登牛", "能登丼", "輪島ふぐ", "香箱ガニ"],
        keywords: ["能登", "輪島", "和倉", "七尾", "珠洲"]
      },
      {
        areaName: "加賀温泉郷エリア（山代・山中・片山津）",
        slug: "kaga-onsen",
        description: "山代・山中・片山津・粟津の4つの個性豊かな名湯が点在する、関西・北陸屈指の温泉天国。",
        spots: [
          { name: "山中温泉 鶴仙渓", description: "北陸随一の渓谷美。あやとりはしや川床でのひと休み、緑豊かな散策路が心癒やします。" },
          { name: "山代温泉 総湯・古総湯", description: "明治時代の総湯を復元したレトロな風呂。九谷焼のタイルの壁画と源泉掛け流しが自慢。" }
        ],
        gourmet: ["加賀カニごはん", "山中温泉コロッケ", "温泉たまごスイーツ"],
        keywords: ["加賀", "山代", "山中", "片山津", "粟津"]
      },
      {
        areaName: "白山・小松・かほくエリア",
        slug: "hakusan-komatsu",
        description: "霊峰白山の自然信仰と手取峡谷の迫力ある渓谷美、歌舞伎のまち小松が彩る魅力あふれるエリア。",
        spots: [
          { name: "白山比咩神社（しらやまひめじんじゃ）", description: "全国の白山神社の総本宮。樹齢数百年の杉並木に囲まれた神秘的な境内は北陸最強のパワースポット。" },
          { name: "手取峡谷", description: "手取川の清流が創り出した高さ20mの崖が続くダイナミックな峡谷。綿ヶ滝の迫力は必見。" }
        ],
        gourmet: ["小松うどん", "堅豆腐料理", "白山高山植物スイーツ"],
        keywords: ["白山", "小松", "辰口", "かほく"]
      }
    ]
  },

  // 東京都
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
        areaName: "浅草・上野・スカイツリーエリア",
        slug: "asakusa-skytree",
        description: "江戸情緒が残る雷門や上野恩賜公園、高さ634mの東京スカイツリーが共存する新旧の文化エリア。",
        spots: [
          { name: "浅草寺・仲見世通り", description: "都内最古の寺院。大きな赤提灯の雷門と、人形焼きやせんべいが味わえる仲見世散策が人気。" },
          { name: "東京スカイツリー", description: "地上450mの天望回廊から関東平野を一望する、東京を代表する新ランドマーク。" }
        ],
        gourmet: ["浅草天丼", "もんじゃ焼き", "上野鰻重"],
        keywords: ["浅草", "上野", "押上", "錦糸町"]
      },
      {
        areaName: "新宿・渋谷・原宿エリア",
        slug: "shinjuku-shibuya",
        description: "世界最大級のターミナルとスクランブル交差点、最先端のファッション＆エンタメが溢れる眠らない街。",
        spots: [
          { name: "SHIBUYA SKY（シブヤスカイ）", description: "渋谷スクランブルスクエア屋上からの超高層パノラマ絶景景観。" },
          { name: "新宿御苑", description: "都会の喧騒を忘れる広大な庭園。四季の自然と西洋庭園・日本庭園が美しく調和。" }
        ],
        gourmet: ["話題のカフェスイーツ", "ミシュランラーメン", "スタイリッシュディナー"],
        keywords: ["新宿", "渋谷", "原宿", "恵比寿"]
      },
      {
        areaName: "銀座・東京駅・日本橋エリア",
        slug: "ginza-tokyostation",
        description: "歴史ある老舗百貨店や高級ブランドショップ、赤レンガの東京駅丸ノ内駅舎が魅せる一流の大人エリア。",
        spots: [
          { name: "東京駅丸ノ内駅舎", description: "大正時代の創建当時の姿に復原された美しい赤レンガ建築。夜間のライトアップも壮麗。" },
          { name: "銀座中央通り", description: "世界有数の高級ショッピング街。休日には歩行者天国となり優雅に散策を楽しめます。" }
        ],
        gourmet: ["江戸前寿司", "高級西洋料理", "老舗洋菓子"],
        keywords: ["銀座", "東京駅", "丸の内", "日本橋"]
      },
      {
        areaName: "多摩・高尾山・離島エリア",
        slug: "tama-takao",
        description: "ミシュラン三ツ星の自然の宝庫・高尾山や、豊かな水と緑が広がる奥多摩・伊豆諸島の大自然リゾート。",
        spots: [
          { name: "高尾山", description: "都心から約1時間でアクセスできる自然の宝庫。ケーブルカーや薬王院参拝、ハイキングに最適。" },
          { name: "奥多摩湖・日原鍾乳洞", description: "四季折々の湖畔風景と、神秘的な地底探検が楽しめる大自然スポット。" }
        ],
        gourmet: ["高尾山とろろそば", "天狗焼き", "わさび料理"],
        keywords: ["高尾山", "奥多摩", "八王子", "立川"]
      }
    ]
  },

  // 京都府
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
        areaName: "東山・清水寺・祇園エリア",
        slug: "higashiyama-gion",
        description: "「清水の舞台」で有名な清水寺や八坂神社、舞妓さんが行き交う石畳の祇園など京都情緒のシンボル。",
        spots: [
          { name: "清水寺", description: "国宝の本堂舞台からの京都市内の眺望は絶景。音羽の滝や産寧坂の散策も魅力。" },
          { name: "祇園・花見小路通", description: "伝統的な茶屋様式の家々が連なる石畳の通り。京情緒を最も濃く感じられる風情ある散策路。" }
        ],
        gourmet: ["京湯豆腐", "抹茶パフェ", "京懐石ディナー"],
        keywords: ["清水", "祇園", "東山", "四条"]
      },
      {
        areaName: "嵐山・嵯峨野エリア",
        slug: "arashiyama-sagano",
        description: "渡月橋と竹林の小径、四季折々の嵐山の山並みが織りなす万葉の時代からの景勝地。",
        spots: [
          { name: "竹林の小径", description: "高く伸びた青竹が頭上を覆う幻想的な散策路。風に揺れる竹の音が心地よい癒やし空間。" },
          { name: "渡月橋", description: "桂川に架かる木造風の風情ある橋。春の桜、秋の紅葉と山肌のコントラストが見事。" }
        ],
        gourmet: ["湯葉料理", "竹林和スイーツ", "トロッコ列車弁当"],
        keywords: ["嵐山", "嵯峨野", "高雄"]
      },
      {
        areaName: "京都駅・烏丸・河原町エリア",
        slug: "kyotostation-kawaramachi",
        description: "近未来的な京都駅ビルと、鴨川の川床や繁華街河原町、二条城が位置する京都観光の拠点。",
        spots: [
          { name: "元離宮二条城", description: "徳川家康が造営した世界遺産。大政奉還の舞台となった大広間や「うぐいす張り」の廊下が見所。" },
          { name: "伏見稲荷大社", description: "全国の稲荷神社の総本宮。山頂まで延々と続く千本鳥居の朱色のトンネルは圧巻。" }
        ],
        gourmet: ["京都ラーメン", "鴨川納涼床料理", "京漬物茶漬け"],
        keywords: ["京都駅", "河原町", "烏丸", "伏見"]
      },
      {
        areaName: "海の京都（天橋立・伊根エリア）",
        slug: "umi-no-kyoto",
        description: "日本三景・天橋立と舟屋が立ち並ぶ伊根の町並み。日本海の美しい景色と最高の海の幸が迎えます。",
        spots: [
          { name: "天橋立（あまのはしだて）", description: "約5,000本の松林が続く神秘の砂州。「股のぞき」で天に架かる橋のような絶景を楽しめます。" },
          { name: "伊根の舟屋", description: "海の上に浮かぶように建つ約230軒の舟屋群。どこか懐かしく美しい日本の原風景。" }
        ],
        gourmet: ["宮津松葉ガニ", "伊根ブリしゃぶ", "丹後丹波牛"],
        keywords: ["天橋立", "宮津", "伊根", "舞鶴"]
      }
    ]
  },

  // 福岡県
  {
    slug: "fukuoka",
    name: "福岡県",
    region: "九州・沖縄",
    highlights: ["太宰府天満宮", "博多屋台街", "糸島海岸"],
    gourmet: ["博多ラーメン", "もつ鍋", "水炊き", "明太子"],
    description: "九州の玄関口博多！天神・中洲の賑やかな屋台文化と学問の神様太宰府、至高のうまかグルメ天国。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "博多・天神・中洲エリア",
        slug: "hakata-tenjin",
        description: "中洲の川沿いに並ぶ屋台街と最新ショッピング街天神。九州一番のエネルギーが溢れる絶品グルメの宝庫。",
        spots: [
          { name: "中洲屋台街", description: "博多川沿いに赤い提灯が灯る屋台がずらりと並ぶ。ラーメン、焼き鳥、おでんを活気の中で楽しめます。" },
          { name: "キャナルシティ博多", description: "運河が流れる複合エンターテインメント施設。ダイナミックな噴水ショーや買い物が魅力。" }
        ],
        gourmet: ["長浜豚骨ラーメン", "博多もつ鍋", "水炊き", "一口餃子"],
        keywords: ["博多", "天神", "中洲", "薬院"]
      },
      {
        areaName: "太宰府・筑紫野エリア",
        slug: "dazaifu-chikushino",
        description: "学問の神様・菅原道真公を祀る太宰府天満宮と、万葉の時代から続く歴史の名湯・二日市温泉のエリア。",
        spots: [
          { name: "太宰府天満宮", description: "全国の天満宮の総本宮。飛梅伝説や参道の梅ヶ枝餅、隈研吾デザインのモダンなスターバックスが見所。" },
          { name: "九州国立博物館", description: "「日本文化の形成をアジア史的観点から捉える」をコンセプトとしたスケール豊かな博物館。" }
        ],
        gourmet: ["梅ヶ枝餅（うめがえもち）", "太宰府八ちゃんラーメン"],
        keywords: ["太宰府", "二日市", "筑紫野"]
      },
      {
        areaName: "糸島・西福岡エリア",
        slug: "itoshima",
        description: "美しい海岸線と白い鳥居、ヤシの木ブランコやクラフトショップが立ち並ぶ大人気のドライブスポット。",
        spots: [
          { name: "桜井二見ヶ浦・夫婦岩", description: "青い海と白い鳥居、仲良く並ぶ夫婦岩のコントラストが美しい日本の夕陽百選の名所。" },
          { name: "糸島リゾートカフェ街", description: "海を見渡す絶景テラス席で旬の地元食材を使ったスイーツやランチを楽しめます。" }
        ],
        gourmet: ["糸島牡蠣小屋", "糸島豚", "海鮮丼"],
        keywords: ["糸島", "姪浜", "今宿"]
      },
      {
        areaName: "北九州・門司港エリア",
        slug: "kitakyushu-mojiko",
        description: "大正ロマンあふれる洋風建築が残る門司港レトロと、小倉城の歴史、関門海峡のダイナミックな景観。",
        spots: [
          { name: "門司港レトロ地区", description: "旧門司税関や旧大阪商船などレンガ造りのモダンな洋風建築が立ち並ぶレトロな港町。" },
          { name: "小倉城", description: "細川忠興公によって築城された名城。春の桜と歴史体験ができる天守閣が魅力。" }
        ],
        gourmet: ["門司港焼きカレー", "小倉鉄なべ餃子", "関門フグ"],
        keywords: ["門司", "小倉", "北九州"]
      }
    ]
  },

  // 沖縄県
  {
    slug: "okinawa",
    name: "沖縄県",
    region: "九州・沖縄",
    highlights: ["沖縄美ら海水族館", "首里城公園", "古宇利島", "万座毛"],
    gourmet: ["沖縄そば", "ゴーヤーチャンプルー", "タコライス", "アグー豚"],
    description: "エメラルドグリーンの美ら海と南国の風。高級ビーチリゾートホテルで過ごす究極のアジアンバカンス。",
    bannerImage: "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "那覇・首里エリア",
        slug: "naha-shuri",
        description: "国際通りのお土産店や市場の熱気、琉球王国の栄華を伝える世界遺産・首里城が位置する沖縄の中心地。",
        spots: [
          { name: "那覇・国際通り", description: "約1.6kmにわたって飲食店やお土産店、泡盛専門店がひしめく沖縄一賑やかなメインストリート。" },
          { name: "首里城公園", description: "琉球王国の歴史と文化の象徴。朱塗りの守礼門や復元作業が進む洗練された城郭美。" }
        ],
        gourmet: ["沖縄そば", "サーターアンダギー", "ステーキ"],
        keywords: ["那覇", "首里", "国際通り", "小禄"]
      },
      {
        areaName: "西海岸リゾート・恩納村エリア",
        slug: "onna-westcoast",
        description: "透明度抜群のエメラルドグリーンの海とラグジュアリーなリゾートホテルが連なる極上ビーチリゾートエリア。",
        spots: [
          { name: "万座毛（まんざもう）", description: "象の鼻に似た隆起サンゴ礁の断崖絶壁。眼下に広がる青い海と夕陽の絶景が見事。" },
          { name: "青の洞窟（真栄田岬）", description: "太陽光が差し込み水面が美しい青色に輝く、シュノーケリング＆ダイビングの聖地。" }
        ],
        gourmet: ["アグー豚しゃぶしゃぶ", "海鮮トロピカルBBQ", "ブルーシールアイス"],
        keywords: ["恩納", "名護", "読谷", "北谷"]
      },
      {
        areaName: "本部・今帰仁・古宇利島エリア",
        slug: "motobu-nakijin",
        description: "ジンベエザメが泳ぐ巨大水族館と、古宇利大橋を渡ってアクセスする「恋の島」古宇利島の絶景スポット。",
        spots: [
          { name: "沖縄美ら海水族館", description: "世界最大級のアクリルパネル大水槽「黒潮の海」で巨大なジンベエザメやマンタが泳ぐ大迫力水族館。" },
          { name: "古宇利島・古宇利大橋", description: "エメラルドグリーンの海の上をまっすぐ渡る約2kmの絶景ドライブ橋。ハートロックも見所。" }
        ],
        gourmet: ["本部牛ステーキ", "沖縄海鮮丼", "海ぶどう"],
        keywords: ["本部", "美ら海", "古宇利", "今帰仁"]
      },
      {
        areaName: "石垣島・宮古島・離島エリア",
        slug: "ishigaki-miyako",
        description: "「宮古ブルー」と称される世界最高峰の海と川平湾の景観。手つかずの豊かな自然が残る癒やしの離島群。",
        spots: [
          { name: "川平湾（石垣島）", description: "日本百景にも選ばれたミシュラン三ツ星の景勝地。七色に変化する海の色とグラスボートが魅力。" },
          { name: "与那覇前浜ビーチ（宮古島）", description: "東洋一の美しさと称されるパウダーホワイトの砂浜と透き通る宮古ブルーの海。" }
        ],
        gourmet: ["石垣牛ハンバーグ", "宮古まもる君スイーツ", "八重山そば"],
        keywords: ["石垣", "宮古", "竹富", "西表"]
      }
    ]
  }
];

// 残りの都道府県のデフォルト生成用ヘルパー（不足している都道府県があれば自動補完）
const DEFAULT_PREFECTURES_TEMPLATES: Record<string, { region: string; highlights: string[]; gourmet: string[]; description: string; subAreas: SubAreaInfo[] }> = {
  "青森県": {
    region: "東北",
    highlights: ["奥入瀬渓流", "弘前城", "十和田湖", "青森ねぶた祭"],
    gourmet: ["大間まぐろ", "青森りんご", "せんべい汁"],
    description: "神秘的な自然美と歴史深い名湯、新鮮な銘産海鮮が出迎えてくれる自然豊かな北の絶景地です。",
    subAreas: [
      {
        areaName: "青森・十和田・奥入瀬エリア",
        slug: "aomori-towada",
        description: "千変万化の渓流美を見せる奥入瀬渓流と、神秘的な十和田湖、ねぶたの熱気あふれる青森市エリア。",
        spots: [
          { name: "奥入瀬渓流", description: "約14kmにわたる清流と滝、深いブナの森が織りなす日本屈指の景勝地。散策に最適。" },
          { name: "十和田湖", description: "二重カルデラ湖の神秘的な青い水面。遊覧船からの景色は息をのむ美しさ。" }
        ],
        gourmet: ["青森のっけ丼", "十和田バラ焼き"],
        keywords: ["青森", "十和田", "奥入瀬", "八甲田"]
      },
      {
        areaName: "弘前・津軽・下北エリア",
        slug: "hirosaki-tsugaru",
        description: "桜の名所弘前城と太宰治ゆかりの津軽平野、マグロの聖地大間を抱く歴史とロマンの地域。",
        spots: [
          { name: "弘前公園・弘前城", description: "日本屈指の桜の名所。天守と岩木山、お堀を埋め尽くす花筏（はないかだ）が絶品。" },
          { name: "大間崎", description: "本州最北端の地。津軽海峡を挟んで北海道を望み、一本釣りマグロのモニュメントが鎮座。" }
        ],
        gourmet: ["大間まぐろ握り", "津軽ラーメン", "アップルパイ"],
        keywords: ["弘前", "津軽", "大間", "むつ"]
      }
    ]
  },
  "岩手県": {
    region: "東北",
    highlights: ["世界遺産・平泉中尊寺", "浄土ヶ浜", "小岩井農場"],
    gourmet: ["わんこそば", "盛岡冷麺", "前沢牛"],
    description: "世界遺産平泉の歴史遺産とリアス海岸の美しい絶景、伝統の麺文化を満喫できる名所です。",
    subAreas: [
      {
        areaName: "盛岡・小岩井・八幡平エリア",
        slug: "morioka-kowai",
        description: "盛岡三大麺の食べ比べや小岩井農場の大自然、八幡平のドライブコースが人気のアクティブエリア。",
        spots: [
          { name: "小岩井農場まきば園", description: "岩手山を背景に広がる雄大な農場。一本桜やフレッシュな乳製品スイーツが魅力。" },
          { name: "盛岡城跡公園", description: "美しい石垣が残る歴史公園。四季折々の花々と盛岡の街並みが一望できます。" }
        ],
        gourmet: ["盛岡冷麺", "わんこそば", "盛岡じゃじゃ麺"],
        keywords: ["盛岡", "小岩井", "八幡平", "雫石"]
      },
      {
        areaName: "平泉・花巻・三陸エリア",
        slug: "hiraizumi-sanriku",
        description: "金色堂が輝く世界遺産平泉、宮沢賢治ゆかりの花巻温泉郷、浄土ヶ浜の美しいリアス式海岸。",
        spots: [
          { name: "中尊寺・金色堂", description: "平安時代の堂コンクリート保護閣内に輝く皆金色のお堂。藤原三代の歴史のロマン。" },
          { name: "浄土ヶ浜", description: "白い流紋岩と青い海のコントラストがまるで極楽浄土のような美しさを見せる名勝。" }
        ],
        gourmet: ["前沢牛ステーキ", "花巻わんこそば", "三陸瓶丼"],
        keywords: ["平泉", "花巻", "宮古", "釜石"]
      }
    ]
  },
  "宮城県": {
    region: "東北",
    highlights: ["日本三景・松島", "仙台城跡", "秋保温泉", "蔵王御釜"],
    gourmet: ["牛タン焼", "ずんだ餅", "笹かまぼこ", "牡蠣"],
    description: "伊達政宗ゆかりの歴史名所と風光明媚な松島、仙台の極上絶品美食を堪能できる東北の中心地です。",
    subAreas: [
      {
        areaName: "仙台・秋保・作並エリア",
        slug: "sendai-akiu",
        description: "杜の都仙台の賑わいと伊達政宗公の歴史、奥座敷として親しまれる秋保温泉・作並温泉の名湯エリア。",
        spots: [
          { name: "仙台城跡（青葉城）", description: "伊達政宗公の騎馬像が仙台市内を見下ろす高台。夜景スポットとしても大人気。" },
          { name: "秋保大滝", description: "日本の滝百選の一つ。幅6m、落差55mのダイナミックな滝からマイナスイオンを浴びられます。" }
        ],
        gourmet: ["仙台牛タン焼き", "ずんだシェイク", "秋保おはぎ"],
        keywords: ["仙台", "秋保", "作並", "青葉"]
      },
      {
        areaName: "松島・塩竈・気仙沼エリア",
        slug: "matsushima-shiogama",
        description: "日本三景松島の島々巡り遊覧船と、寿司の街塩竈、新鮮なマグロやカツオが揚がる気仙沼港。",
        spots: [
          { name: "松島湾遊覧船", description: "260余りの島々が浮かぶ美景を船上から鑑賞。瑞巌寺や五大堂の歴史散策とセットで。" },
          { name: "塩竈神社", description: "陸奥国一宮。安産や航海安全の神様として親しまれ、境内の塩竈ザクラも有名。" }
        ],
        gourmet: ["松島焼き牡蠣", "塩竈海鮮寿司", "気仙沼フカヒレ"],
        keywords: ["松島", "塩竈", "気仙沼", "石巻"]
      }
    ]
  }
};

// 不足している都道府県データを補完取得する関数
export function getPrefectureBySlug(slug: string): PrefectureInfo | undefined {
  const found = PREFECTURES_DATA.find(p => p.slug === slug);
  if (found) return found;

  // もしPREFECTURES_DATAに定義がなくても、基本データから自動構成
  const nameMap: Record<string, string> = {
    "akita": "秋田県", "yamagata": "山形県", "fukushima": "福島県",
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

  const defaultTemplate = DEFAULT_PREFECTURES_TEMPLATES[name] || {
    region: "日本全国",
    highlights: [`${name}名所`, `${name}観光`, "温泉・絶景"],
    gourmet: [`${name}名物`, "地場素材"],
    description: `${name}の自然、歴史、温泉、絶品グルメを満喫できる人気観光地です。`,
    subAreas: [
      {
        areaName: `${name}中心・観光エリア`,
        slug: `${slug}-central`,
        description: `${name}を代表する定番の観光名所や歴史スポット、賑やかな繁華街が集結する中心エリア。`,
        spots: [
          { name: `${name}象徴スポット`, description: `${name}に訪れたら外せない代表的観光名所。季節ごとの美しい景色が広がります。` }
        ],
        gourmet: [`${name}地産グルメ`],
        keywords: [name.replace(/(県|府|東京都)$/, "")]
      },
      {
        areaName: `${name}温泉・リゾートエリア`,
        slug: `${slug}-resort`,
        description: `豊かな自然に囲まれた名湯温泉街や絶景ロケーションが魅力のリフレッシュエリア。`,
        spots: [
          { name: `${name}名湯温泉郷`, description: `旅の疲れを心地よく癒やす絶品温泉と四季折々の山海の景観。` }
        ],
        gourmet: [`${name}温泉会席`],
        keywords: [name.replace(/(県|府|東京都)$/, ""), "温泉", "リゾート"]
      }
    ]
  };

  return {
    slug,
    name,
    region: defaultTemplate.region,
    highlights: defaultTemplate.highlights,
    gourmet: defaultTemplate.gourmet,
    description: defaultTemplate.description,
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: defaultTemplate.subAreas
  };
}

export function getPrefectureByName(name: string): PrefectureInfo | undefined {
  const cleanName = name.replace(/(県|府|東京都)$/, "");
  return PREFECTURES_DATA.find(p => p.name === name || p.name.replace(/(県|府|東京都)$/, "") === cleanName);
}
