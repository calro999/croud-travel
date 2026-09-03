export interface TransitGuideLink {
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  fromTo: string;
  priceNote: string;
  relatedPrefSlugs: string[]; // 出発地または目的地の都道府県slug
  isTourOrCruise?: boolean;
}

export const TRANSIT_GUIDE_LINKS: TransitGuideLink[] = [
  {
    slug: 'tokyo-kanazawa-bus-vs-shinkansen-guide',
    title: '【東京〜金沢】安く行く方法徹底比較！新幹線 vs 高速バスの料金・所要時間・1泊2日モデルコース',
    shortLabel: '東京〜金沢 交通比較＆1泊2日モデルコース',
    description: '新幹線（約14,380円）vs 高速バス（約3,500円〜）。差額1万円で近江町市場海鮮丼＆駅前温泉。',
    fromTo: '東京 ⇄ 石川（金沢）',
    priceNote: '高速バス片道 ¥3,500〜 / 新幹線片道 ¥14,380',
    relatedPrefSlugs: ['tokyo', 'ishikawa', 'kanagawa', 'saitama', 'chiba']
  },
  {
    slug: 'osaka-kanazawa-highway-bus-model-course',
    title: '【大阪・京都〜金沢】高速バスで行く1泊2日モデルコース！新幹線・特急との料金比較＆コスパ旅',
    shortLabel: '大阪・京都〜金沢 高速バスで行く1泊2日モデルコース',
    description: 'サンダーバード敦賀乗換不要！直行バス片道約2,800円〜で21世紀美術館＆茶屋街を満喫。',
    fromTo: '大阪・京都 ⇄ 石川（金沢）',
    priceNote: '高速バス片道 ¥2,800〜 / 特急＋新幹線片道 ¥9,410',
    relatedPrefSlugs: ['osaka', 'kyoto', 'ishikawa', 'hyogo', 'shiga']
  },
  {
    slug: 'nagoya-kanazawa-bus-vs-train-guide',
    title: '【名古屋〜金沢】安く行く方法！特急しらさぎ vs 高速バス徹底比較＆1泊2日モデルコース',
    shortLabel: '名古屋〜金沢 しらさぎvs高速バス比較',
    description: '特急しらさぎ敦賀乗換の手間解消！直行バスで乗り換えゼロ＆ひがし茶屋街食べ歩き。',
    fromTo: '愛知（名古屋） ⇄ 石川（金沢）',
    priceNote: '高速バス片道 ¥3,000〜 / しらさぎ＋新幹線片道 ¥8,010',
    relatedPrefSlugs: ['aichi', 'ishikawa', 'gifu', 'mie']
  },
  {
    slug: 'tokyo-kusatsu-onsen-highway-bus-guide',
    title: '【東京・新宿〜草津温泉】乗り換えなし直行バスが超快適！電車との料金・時間比較＆1泊2日名湯モデルコース',
    shortLabel: '東京〜草津温泉 直行バス「ゆめぐり号」ガイド',
    description: '湯畑徒歩5分のバスターミナルへ完全直行！乗換・荷物ストレスゼロの極上名湯旅。',
    fromTo: '東京・新宿 ⇄ 群馬（草津温泉）',
    priceNote: '直行バス片道 ¥3,600〜 / 特急＋路線バス片道 ¥6,100',
    relatedPrefSlugs: ['tokyo', 'gunma', 'saitama', 'kanagawa']
  },
  {
    slug: 'tokyo-nagano-karuizawa-bus-vs-shinkansen',
    title: '【東京〜長野・軽井沢】新幹線 vs 高速バス徹底比較！料金半額以下のバス旅＆週末モデルコース',
    shortLabel: '東京〜長野・軽井沢 新幹線vs高速バス比較',
    description: '新幹線の半額以下！軽井沢片道1,500円〜、善光寺参拝と小布施栗スイーツ食べ歩き。',
    fromTo: '東京 ⇄ 長野（軽井沢・長野市）',
    priceNote: '軽井沢バス片道 ¥1,500〜 / 新幹線片道 ¥5,940',
    relatedPrefSlugs: ['tokyo', 'nagano', 'gunma', 'saitama']
  },
  {
    slug: 'tokyo-matsumoto-kamikochi-bus-vs-train-guide',
    title: '【東京・新宿〜松本・上高地】特急あずさ vs 直行高速バス徹底比較！片道2,500円〜行く国宝松本城＆上高地1泊2日モデルコース',
    shortLabel: '東京〜松本・上高地 特急あずさvs直行バス比較',
    description: '特急あずさの半額！国宝松本城＆さわやか信州号で行く上高地トレッキング。',
    fromTo: '東京・新宿 ⇄ 長野（松本・上高地）',
    priceNote: '高速バス片道 ¥2,500〜 / 特急あずさ片道 ¥6,620',
    relatedPrefSlugs: ['tokyo', 'nagano', 'yamanashi']
  },
  {
    slug: 'tokyo-takayama-shirakawago-highway-bus-guide',
    title: '【東京・新宿〜飛騨高山・白川郷】直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース',
    shortLabel: '東京〜飛騨高山・白川郷 直行バスで行く世界遺産旅',
    description: '電車乗換2回（約1.6万円）vs バスタ新宿直行（約6,500円〜）。世界遺産白川郷＆飛騨牛。',
    fromTo: '東京・新宿 ⇄ 岐阜（飛騨高山・白川郷）',
    priceNote: '直行バス片道 ¥6,500〜 / JR特急乗継片道 ¥15,500〜',
    relatedPrefSlugs: ['tokyo', 'gifu', 'aichi', 'nagano']
  },
  {
    slug: 'tokyo-fujikawaguchiko-highway-bus-guide',
    title: '【東京・新宿〜富士急・河口湖】直行高速バスが超便利！電車との料金・時間比較＆富士絶景1泊2日モデルコース',
    shortLabel: '東京〜富士急・河口湖 直行高速バス比較ガイド',
    description: '特急富士回遊の半額！富士急ハイランド直着＆忍野八海・逆さ富士露天風呂。',
    fromTo: '東京・新宿 ⇄ 山梨（富士吉田・河口湖）',
    priceNote: '直行バス片道 ¥2,000〜 / 特急富士回遊片道 ¥4,130',
    relatedPrefSlugs: ['tokyo', 'yamanashi', 'kanagawa', 'shizuoka']
  },
  {
    slug: 'tokyo-izu-atami-bus-vs-train-guide',
    title: '【東京〜熱海・伊豆】安く行く方法徹底比較！新幹線・特急踊り子 vs 高速バス・普通電車の料金・時間＆温泉1泊2日モデルコース',
    shortLabel: '東京〜熱海・伊豆 新幹線・踊り子・普通列車比較',
    description: '新幹線vs踊り子vs普通列車グリーン車。片道2,000円台で行く熱海プリン＆相模湾一望露天。',
    fromTo: '東京 ⇄ 静岡（熱海・伊豆）',
    priceNote: '普通列車片道 ¥1,980 / 新幹線片道 ¥4,270',
    relatedPrefSlugs: ['tokyo', 'shizuoka', 'kanagawa']
  },
  {
    slug: 'tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide',
    title: '【東京〜静岡・浜松】新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース',
    shortLabel: '東京〜静岡・浜松 こだまvs東名高速バス比較',
    description: '新幹線こだまvs東名バス（片道約1,800円〜）。本場浜松うな重特上＆舘山寺温泉。',
    fromTo: '東京 ⇄ 静岡（静岡市・浜松市）',
    priceNote: '東名バス片道 ¥1,800〜 / 新幹線片道 ¥8,450',
    relatedPrefSlugs: ['tokyo', 'shizuoka', 'kanagawa', 'aichi']
  },
  {
    slug: 'tokyo-osaka-bus-vs-shinkansen-guide',
    title: '【東京〜大阪】安く行く方法！新幹線 vs 夜行高速バスの料金・所要時間比較＆USJ・道頓堀1泊2日モデルコース',
    shortLabel: '東京〜大阪 新幹線vs夜行高速バス比較',
    description: '新幹線（約1.5万）vs 夜行バス（約2,500円〜）。差額2万円でUSJ開園待ち＆道頓堀たこ焼き爆食。',
    fromTo: '東京 ⇄ 大阪（梅田・難波・USJ）',
    priceNote: '夜行バス片道 ¥2,500〜 / のぞみ指定席片道 ¥14,920',
    relatedPrefSlugs: ['tokyo', 'osaka', 'kanagawa', 'hyogo', 'kyoto']
  },
  {
    slug: 'tokyo-kyoto-bus-vs-shinkansen-guide',
    title: '【東京〜京都】安く行く方法！新幹線 vs 夜行高速バスの料金・時間比較＆古都1泊2日満喫モデルコース',
    shortLabel: '東京〜京都 新幹線vs夜行バス比較＆モデルコース',
    description: '早朝6時着夜行バスで人混みゼロの清水寺・嵐山竹林独占。浮いた2万円で極上町家ステイ。',
    fromTo: '東京 ⇄ 京都（京都駅・烏丸）',
    priceNote: '夜行バス片道 ¥3,000〜 / のぞみ指定席片道 ¥14,170',
    relatedPrefSlugs: ['tokyo', 'kyoto', 'kanagawa', 'shiga', 'osaka']
  },
  {
    slug: 'tokyo-nagoya-bus-vs-shinkansen-guide',
    title: '【東京〜名古屋】新幹線 vs 高速バス徹底比較！片道2,000円〜行く名古屋めし爆食1泊2日モデルコース',
    shortLabel: '東京〜名古屋 新幹線vs高速バス比較',
    description: '新幹線の半額以下（片道2,000円台〜）！ひつまぶし・手羽先・モーニング爆食1泊2日。',
    fromTo: '東京 ⇄ 愛知（名古屋）',
    priceNote: '高速バス片道 ¥2,000〜 / のぞみ指定席片道 ¥11,300',
    relatedPrefSlugs: ['tokyo', 'aichi', 'kanagawa', 'shizuoka', 'gifu']
  },
  {
    slug: 'nagoya-kyoto-bus-vs-shinkansen-guide',
    title: '【名古屋〜京都】新幹線 vs 近鉄特急 vs 名神ハイウェイバス徹底比較！片道1,500円〜行く古都日帰り＆1泊2日モデルコース',
    shortLabel: '名古屋〜京都 新幹線vs名神高速バス比較',
    description: '新幹線の4分の1（片道約1,500円〜）！伏見稲荷千本鳥居＆宇治抹茶パフェ巡り。',
    fromTo: '愛知（名古屋） ⇄ 京都（京都駅）',
    priceNote: '高速バス片道 ¥1,500〜 / 新幹線片道 ¥5,940',
    relatedPrefSlugs: ['aichi', 'kyoto', 'shiga', 'gifu', 'mie']
  },
  {
    slug: 'tokyo-niigata-bus-vs-shinkansen-guide',
    title: '【東京〜新潟】新幹線 vs 高速バス徹底比較！片道2,500円〜行く日本酒・極上寿司・ぽんしゅ館1泊2日モデルコース',
    shortLabel: '東京〜新潟 上越新幹線vs高速バス比較',
    description: '万代バスセンターのカレー＆ぽんしゅ館全酒蔵利き酒体験。浮いたお金で日本海ノドグロ握り。',
    fromTo: '東京・池袋 ⇄ 新潟（新潟市・万代）',
    priceNote: '高速バス片道 ¥2,500〜 / とき指定席片道 ¥10,760',
    relatedPrefSlugs: ['tokyo', 'niigata', 'gunma', 'saitama']
  },
  {
    slug: 'tokyo-sendai-bus-vs-shinkansen-guide',
    title: '【東京〜仙台】新幹線 vs 高速バスどっちがお得？料金・時間比較＆牛たん・松島1泊2日モデルコース',
    shortLabel: '東京〜仙台 はやぶさvs高速バス比較',
    description: '新幹線の4分の1以下！往復1.5万円節約で本場極厚牛たん＆松島湾遊覧船。',
    fromTo: '東京 ⇄ 宮城（仙台・松島）',
    priceNote: '高速バス片道 ¥2,500〜 / はやぶさ片道 ¥11,410',
    relatedPrefSlugs: ['tokyo', 'miyagi', 'fukushima', 'iwate']
  },
  {
    slug: 'tokyo-yamagata-zao-bus-vs-shinkansen-guide',
    title: '【東京〜山形・蔵王温泉】山形新幹線 vs 夜行高速バス徹底比較！片道3,500円〜行く蔵王露天風呂＆山形牛1泊2日モデルコース',
    shortLabel: '東京〜山形・蔵王 つばさvs高速バス比較',
    description: '山形新幹線の半額以下！山寺1015段の絶景＆蔵王大露天風呂と極上山形牛。',
    fromTo: '東京 ⇄ 山形（山形市・蔵王温泉）',
    priceNote: '夜行バス片道 ¥3,500〜 / つばさ指定席片道 ¥11,550',
    relatedPrefSlugs: ['tokyo', 'yamagata', 'miyagi', 'fukushima']
  },
  {
    slug: 'tokyo-iwate-morioka-bus-vs-shinkansen-guide',
    title: '【東京〜盛岡・花巻】新幹線はやぶさ vs 夜行バス徹底比較！片道3,500円〜行く三大麺爆食＆花巻温泉郷1泊2日モデルコース',
    shortLabel: '東京〜盛岡・花巻 はやぶさvs夜行バス比較',
    description: 'はやぶさ（約1.5万）vs 夜行バス（約3,500円〜）。盛岡三大麺＆花巻温泉郷の名旅館。',
    fromTo: '東京 ⇄ 岩手（盛岡・花巻）',
    priceNote: '夜行バス片道 ¥3,500〜 / はやぶさ片道 ¥15,010',
    relatedPrefSlugs: ['tokyo', 'iwate', 'miyagi', 'aomori']
  },
  {
    slug: 'tokyo-aomori-bus-vs-shinkansen-guide',
    title: '【東京〜青森・弘前】新幹線はやぶさ vs 夜行バス徹底比較！料金半額以下の夜行旅＆奥入瀬渓流・弘前城1泊2日モデルコース',
    shortLabel: '東京〜青森・弘前 はやぶさvs夜行バス比較',
    description: '浮いた2万円で市場のっけ丼＆弘前アップルパイ・奥入瀬渓流トレッキング。',
    fromTo: '東京 ⇄ 青森（青森市・弘前）',
    priceNote: '夜行バス片道 ¥4,500〜 / はやぶさ片道 ¥17,870',
    relatedPrefSlugs: ['tokyo', 'aomori', 'iwate', 'akita']
  },
  {
    slug: 'tokyo-hiroshima-bus-vs-shinkansen-guide',
    title: '【東京〜広島】新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース',
    shortLabel: '東京〜広島 新幹線vs夜行バス比較',
    description: '新幹線（約2万）vs 夜行バス（約5,500円〜）。朝イチで厳島神社大鳥居＆本場お好み焼き。',
    fromTo: '東京 ⇄ 広島（広島市・宮島）',
    priceNote: '夜行バス片道 ¥5,500〜 / のぞみ指定席片道 ¥19,760',
    relatedPrefSlugs: ['tokyo', 'hiroshima', 'okayama', 'yamaguchi']
  },
  {
    slug: 'tokyo-shikoku-takamatsu-bus-vs-shinkansen-guide',
    title: '【東京〜高松・香川】寝台特急サンライズ vs 新幹線 vs 夜行バス徹底比較！片道5,000円〜行く本場讃岐うどん爆食1泊2日モデルコース',
    shortLabel: '東京〜高松 サンライズvs新幹線vs夜行バス比較',
    description: '朝6時着の夜行バスで本場讃岐うどん3軒はしご＆特別名勝栗林公園・こんぴらさん。',
    fromTo: '東京 ⇄ 香川（高松・琴平）',
    priceNote: '夜行バス片道 ¥5,000〜 / 新幹線＋特急片道 ¥18,300',
    relatedPrefSlugs: ['tokyo', 'kagawa', 'okayama', 'tokushima', 'ehime']
  },
  {
    slug: 'tokyo-mie-ise-shima-bus-vs-train-guide',
    title: '【東京〜伊勢神宮・鳥羽】新幹線＋近鉄特急 vs 直行夜行バス徹底比較！片道4,000円〜行くお伊勢参り＆おかげ横丁1泊2日モデルコース',
    shortLabel: '東京〜伊勢神宮・鳥羽 直行夜行バス比較ガイド',
    description: '乗換不要の直行夜行バス！早朝の外宮・内宮参拝＆おかげ横丁・鳥羽海女小屋。',
    fromTo: '東京 ⇄ 三重（伊勢神宮・鳥羽）',
    priceNote: '直行バス片道 ¥4,000〜 / 新幹線＋近鉄特急片道 ¥14,500',
    relatedPrefSlugs: ['tokyo', 'mie', 'aichi', 'kanagawa']
  },
  {
    slug: 'osaka-tokushima-naruto-bus-vs-car-guide',
    title: '【大阪・神戸〜徳島・鳴門】高速バスが圧倒的に便利！料金・時間比較＆大塚国際美術館・鳴門の渦潮1泊2日モデルコース',
    shortLabel: '大阪・神戸〜徳島・鳴門 直行バス比較ガイド',
    description: '明石海峡大橋を直通！大塚国際美術館前直着＆鳴門鯛会席・うずしお観潮船。',
    fromTo: '大阪・神戸 ⇄ 徳島（鳴門・徳島市）',
    priceNote: '高速バス片道 ¥2,500〜 / 電車乗換片道 ¥10,500',
    relatedPrefSlugs: ['osaka', 'hyogo', 'tokushima', 'kagawa']
  },
  {
    slug: 'osaka-tottori-matsue-bus-vs-train-guide',
    title: '【大阪・神戸〜鳥取・松江・出雲】高速バス vs 特急スーパーはくと徹底比較！料金半額＆縁結び出雲大社・鳥取砂丘1泊2日モデルコース',
    shortLabel: '大阪・神戸〜鳥取・出雲 高速バスvs特急比較',
    description: '特急やくもの半額！鳥取砂丘＆縁結び出雲大社・玉造美肌温泉。',
    fromTo: '大阪・神戸 ⇄ 鳥取・島根（出雲）',
    priceNote: '高速バス片道 ¥3,200〜 / やくも乗継片道 ¥11,300',
    relatedPrefSlugs: ['osaka', 'hyogo', 'tottori', 'shimane', 'okayama']
  },
  {
    slug: 'osaka-kochi-bus-vs-train-guide',
    title: '【大阪・神戸〜高知】高速バス「よさこい号」vs 特急南風徹底比較！片道3,500円〜行くカツオのタタキ＆ひろめ市場1泊2日モデルコース',
    shortLabel: '大阪・神戸〜高知 よさこい号vs特急南風比較',
    description: '電車の半額以下！ひろめ市場で藁焼きカツオ塩タタキ昼飲み＆桂浜龍馬像。',
    fromTo: '大阪・神戸 ⇄ 高知（高知市・桂浜）',
    priceNote: '高速バス片道 ¥3,500〜 / 新幹線＋南風片道 ¥11,500',
    relatedPrefSlugs: ['osaka', 'hyogo', 'kochi', 'tokushima', 'ehime']
  },
  {
    slug: 'tokyo-shirahama-kumano-bus-vs-train-guide',
    title: '【東京・大阪〜南紀白浜・熊野古道】夜行バス vs 特急くろしお徹底比較！白良浜ビーチ＆世界遺産熊野古道1泊2日モデルコース',
    shortLabel: '東京・大阪〜南紀白浜 直行バス比較ガイド',
    description: '白良浜の砂浜まで徒歩1分直着！崎の湯の海辺露天風呂＆とれとれ市場。',
    fromTo: '東京・大阪 ⇄ 和歌山（南紀白浜）',
    priceNote: '大阪発バス片道 ¥3,000〜 / 東京発夜行バス片道 ¥8,500〜',
    relatedPrefSlugs: ['tokyo', 'osaka', 'wakayama', 'kanagawa', 'hyogo']
  },
  {
    slug: 'osaka-fukuoka-bus-vs-shinkansen-guide',
    title: '【大阪〜福岡・博多】新幹線 vs 夜行バス徹底比較！片道3,000円〜行く博多屋台＆もつ鍋1泊2日モデルコース',
    shortLabel: '大阪〜福岡・博多 山陽新幹線vs夜行バス比較',
    description: '片道3,000円〜で中洲屋台はしご酒・もつ鍋・太宰府天満宮満喫の週末旅。',
    fromTo: '大阪・兵庫 ⇄ 福岡（博多・天神）',
    priceNote: '夜行バス片道 ¥3,000〜 / 山陽新幹線片道 ¥15,600',
    relatedPrefSlugs: ['osaka', 'hyogo', 'fukuoka', 'saga', 'kumamoto']
  },
  {
    slug: 'fukuoka-kumamoto-bus-vs-shinkansen-guide',
    title: '【福岡・博多〜熊本】新幹線 vs 高速バス「ひのくに号」徹底比較！料金半額＆熊本城・あか牛1泊2日モデルコース',
    shortLabel: '福岡〜熊本 九州新幹線vsひのくに号比較',
    description: 'ひのくに号（約2,500円）で桜町・熊本城前直着！名物あか牛丼と馬刺し。',
    fromTo: '福岡（博多・天神） ⇄ 熊本（熊本市・桜町）',
    priceNote: '高速バス片道 ¥2,500 / 九州新幹線片道 ¥5,230',
    relatedPrefSlugs: ['fukuoka', 'kumamoto', 'saga', 'oita']
  },
  {
    slug: 'fukuoka-beppu-yufuin-bus-vs-train-guide',
    title: '【福岡・博多〜別府・由布院】特急ゆふいんの森 vs 高速バス徹底比較！料金半額＆湯布院・別府地獄めぐり1泊2日モデルコース',
    shortLabel: '福岡〜別府・由布院 ゆふいん号vs特急比較',
    description: 'JR特急の半額！湯布院金鱗湖散策＆別府地獄めぐり・とり天ランチ。',
    fromTo: '福岡（博多・天神） ⇄ 大分（由布院・別府）',
    priceNote: '高速バス片道 ¥2,800〜 / ゆふいんの森片道 ¥5,000〜',
    relatedPrefSlugs: ['fukuoka', 'oita', 'kumamoto', 'saga']
  },
  {
    slug: 'fukuoka-kagoshima-bus-vs-shinkansen-guide',
    title: '【福岡・博多〜鹿児島】九州新幹線 vs 高速バス「桜島号」徹底比較！料金半額＆桜島・黒豚・天文館1泊2日モデルコース',
    shortLabel: '福岡〜鹿児島 九州新幹線vs桜島号比較',
    description: '九州新幹線の半額！繁華街「天文館」直着＆黒豚しゃぶしゃぶ・仙巌園。',
    fromTo: '福岡（博多・天神） ⇄ 鹿児島（天文館・鹿児島中央）',
    priceNote: '高速バス片道 ¥3,000〜 / 九州新幹線片道 ¥10,640',
    relatedPrefSlugs: ['fukuoka', 'kagoshima', 'kumamoto', 'miyazaki']
  }
];

export function getTransitGuidesForPrefecture(prefSlug: string, limit = 4): TransitGuideLink[] {
  const matches = TRANSIT_GUIDE_LINKS.filter(link => link.relatedPrefSlugs.includes(prefSlug));
  if (matches.length >= limit) {
    return matches.slice(0, limit);
  }
  // マッチが少ない場合は主要な人気路線を追加
  const popularSlugs = [
    'tokyo-kanazawa-bus-vs-shinkansen-guide',
    'tokyo-osaka-bus-vs-shinkansen-guide',
    'tokyo-kyoto-bus-vs-shinkansen-guide',
    'osaka-fukuoka-bus-vs-shinkansen-guide'
  ];
  for (const slug of popularSlugs) {
    if (!matches.some(m => m.slug === slug)) {
      const item = TRANSIT_GUIDE_LINKS.find(l => l.slug === slug);
      if (item) matches.push(item);
    }
    if (matches.length >= limit) break;
  }
  return matches.slice(0, limit);
}
