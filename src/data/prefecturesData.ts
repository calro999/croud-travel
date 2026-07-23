export interface PrefectureInfo {
  slug: string;
  name: string;
  region: string;
  highlights: string[];
  gourmet: string[];
  description: string;
  bannerImage: string;
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
    bannerImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop"
  },
  // 東北
  {
    slug: "aomori",
    name: "青森県",
    region: "東北",
    highlights: ["奥入瀬渓流", "弘前城", "十和田湖", "青森ねぶた祭"],
    gourmet: ["大間まぐろ", "青森りんご", "せんべい汁"],
    description: "神秘的な自然美と歴史深い名湯、新鮮な銘産海鮮が出迎えてくれる自然豊かな北の絶景地です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "iwate",
    name: "岩手県",
    region: "東北",
    highlights: ["世界遺産・平泉中尊寺", "浄土ヶ浜", "小岩井農場"],
    gourmet: ["わんこそば", "盛岡冷麺", "前沢牛"],
    description: "世界遺産平泉の歴史遺産とリアス海岸の美しい絶景、伝統の麺文化を満喫できる名所です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "miyagi",
    name: "宮城県",
    region: "東北",
    highlights: ["日本三景・松島", "仙台城跡", "秋保温泉", "蔵王御釜"],
    gourmet: ["牛タン焼", "ずんだ餅", "笹かまぼこ", "牡蠣"],
    description: "伊達政宗ゆかりの歴史名所と風光明媚な松島、仙台の極上絶品美食を堪能できる東北の中心地です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "akita",
    name: "秋田県",
    region: "東北",
    highlights: ["乳頭温泉郷", "角館武家屋敷", "田沢湖"],
    gourmet: ["きりたんぽ鍋", "稲庭うどん", "比内地鶏"],
    description: "日本屈指の名湯・秘湯めぐりと風情溢れる武家屋敷の町並み、伝統の郷土料理が心を癒やす地です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "yamagata",
    name: "山形県",
    region: "東北",
    highlights: ["銀山温泉", "立石寺（山寺）", "蔵王樹氷"],
    gourmet: ["米沢牛", "さくらんぼ", "芋煮"],
    description: "大正ロマン漂う温泉街と四季折々の絶景、フルーツや高級和牛の至高のグルメが魅力です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "fukushima",
    name: "福島県",
    region: "東北",
    highlights: ["大内宿", "会津若松城（鶴ヶ城）", "裏磐梯五色沼"],
    gourmet: ["喜多方ラーメン", "会津ソースカツ丼", "白桃"],
    description: "江戸時代の面影を残す宿場町と磐梯山の自然美、蔵の街の極上ラーメンを堪能する旅を満喫できます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  // 関東
  {
    slug: "ibaraki",
    name: "茨城県",
    region: "関東",
    highlights: ["国営ひたち海浜公園", "偕楽園", "袋田の滝"],
    gourmet: ["水戸納豆", "あんこう鍋", "常陸牛"],
    description: "広大なネモフィラの花畑や日本三名園、名瀑と豊かな常陸の恵みを楽しむ旅を満喫できます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "tochigi",
    name: "栃木県",
    region: "関東",
    highlights: ["日光東照宮", "日光中禅寺湖", "鬼怒川温泉", "那須高原"],
    gourmet: ["宇都宮餃子", "日光湯波", "とちおとめ（いちご）"],
    description: "世界遺産日光の社寺と関東有数の名湯リゾート・那須高原、名物グルメを楽しむ大人気エリアです。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "gunma",
    name: "群馬県",
    region: "関東",
    highlights: ["草津温泉（湯畑）", "伊香保温泉", "水上温泉", "富岡製糸場"],
    gourmet: ["水沢うどん", "おきりこみ", "上州牛"],
    description: "日本を代表する名湯・草津温泉をはじめ温泉王国群馬の風情ある湯街散策と山のごちそうを満喫できます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "saitama",
    name: "埼玉県",
    region: "関東",
    highlights: ["川越小江戸", "秩父長瀞ライン下り", "鉄道博物館"],
    gourmet: ["川越うなぎ", "草加せんべい", "深谷ねぎ"],
    description: "蔵づくりの街並みが残る川越や美しい自然溢れる秩父長瀞、レジャー満載の魅力的なエリアです。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "chiba",
    name: "千葉県",
    region: "関東",
    highlights: ["鴨川シーワールド", "成田山新勝寺", "房総半島海岸", "マザー牧場"],
    gourmet: ["勝浦タンタンメン", "伊勢海老", "なめろう", "落花生"],
    description: "海と緑に囲まれた開放感溢れる房総リゾートと、新鮮な海の幸＆エンターテインメントが満載です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "tokyo",
    name: "東京都",
    region: "関東",
    highlights: ["浅草寺", "東京スカイツリー", "お台場", "高尾山", "伊豆大島"],
    gourmet: ["江戸前寿司", "もんじゃ焼き", "深川めし"],
    description: "伝統の和と最先端のトレンドが融合する日本の中枢。高級ラグジュアリーホテルと洗練された美食が楽しめます。",
    bannerImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "kanagawa",
    name: "神奈川県",
    region: "関東",
    highlights: ["箱根温泉", "鎌倉古都散策", "横浜中華街", "江の島"],
    gourmet: ["小田原かまぼこ", "鎌倉しらす丼", "横浜中華コース"],
    description: "箱根の上質な温泉宿と鎌倉の歴史散歩、港町横浜のエキゾチックな景色が織りなす上質な観光地です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  // 甲信越・北陸
  {
    slug: "niigata",
    name: "新潟県",
    region: "甲信越・北陸",
    highlights: ["越後湯沢温泉", "清津峡渓谷トンネル", "佐渡島"],
    gourmet: ["越後コシヒカリ", "日本酒", "へぎそば", "のどぐろ"],
    description: "日本有数の米所・地酒の郷。雪国情緒漂う温泉リゾートと日本海の極上海鮮が味わえます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "toyama",
    name: "富山県",
    region: "甲信越・北陸",
    highlights: ["立山黒部アルペンルート", "黒部ダム", "五箇山合掌集落"],
    gourmet: ["白エビ", "ホタルイカ", "マス寿司", "富山ブラック"],
    description: "雄大な立山連峰の絶景と富山湾の「天然の生け簀」が育む鮮度抜群の贅沢海鮮を満喫できます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "ishikawa",
    name: "石川県",
    region: "甲信越・北陸",
    highlights: ["兼六園", "金沢ひがし茶屋街", "加賀温泉郷", "能登半島"],
    gourmet: ["加賀料理", "金沢カレー", "ズワイガニ（加能ガニ）"],
    description: "加賀百万石の優雅な城下町金沢と加賀温泉郷。伝統工芸と美食が心を惹きつける風情ある地域です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "fukui",
    name: "福井県",
    region: "甲信越・北陸",
    highlights: ["福井県立恐竜博物館", "東尋坊", "大本山永平寺"],
    gourmet: ["越前ガニ", "ソースカツ丼", "越前おろしそば"],
    description: "壮大な断崖絶壁東尋坊と太古のロマン溢れる恐竜博物館、冬の王者・越前ガニを愉しめる名所です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "yamanashi",
    name: "山梨県",
    region: "甲信越・北陸",
    highlights: ["富士山", "富士五湖（河口湖など）", "富士急ハイランド"],
    gourmet: ["ほうとう", "信玄餅", "甲州ワイン", "ぶどう・桃"],
    description: "富士山の絶景を仰ぐ最高のロケーション。絶品ワインと果実、癒やしの富士山ビュー温泉がそろっています。",
    bannerImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "nagano",
    name: "長野県",
    region: "甲信越・北陸",
    highlights: ["上高地", "軽井沢", "善光寺", "松本城"],
    gourmet: ["信州そば", "おやき", "野沢菜漬け", "信州牛"],
    description: "雄大な日本アルプスに抱かれた日本屈指のマウンテンリゾート。爽やかな高原と歴史の名湯を堪能できます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  // 東海
  {
    slug: "gifu",
    name: "岐阜県",
    region: "東海",
    highlights: ["白川郷合掌造り集落", "飛騨高山", "下呂温泉"],
    gourmet: ["飛騨牛", "朴葉味噌", "鮎料理"],
    description: "世界遺産白川郷と古い町並みが残る飛騨高山、日本三名泉の下呂温泉で心温まる和の贅沢を体感できます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "shizuoka",
    name: "静岡県",
    region: "東海",
    highlights: ["熱海温泉", "伊豆半島", "富士山ビュー", "浜名湖"],
    gourmet: ["静岡茶", "浜松餃子", "桜えび", "うなぎ"],
    description: "熱海・伊豆の伝統ある温泉郷と富士山を望む温暖な絶景スポット、海の幸・陸の幸が集結する人気リゾートです。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "aichi",
    name: "愛知県",
    region: "東海",
    highlights: ["名古屋城", "犬山城", "熱田神宮", "ジブリパーク"],
    gourmet: ["ひつまぶし", "味噌カツ", "手羽先", "台湾ラーメン"],
    description: "独自の名古屋めしグルメカルチャーと織田・豊臣・徳川ゆかりの歴史名所、最新エンターテインメントスポットです。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "mie",
    name: "三重県",
    region: "東海",
    highlights: ["伊勢神宮", "おかげ横丁", "志摩リゾート", "熊野古道"],
    gourmet: ["松阪牛", "伊勢海老", "赤福", "伊勢うどん"],
    description: "日本人の心のふるさと伊勢神宮と美し国三重の贅なる松阪牛・伊勢海老、志摩の英虞湾リゾートが広がります。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  // 近畿
  {
    slug: "shiga",
    name: "滋賀県",
    region: "近畿",
    highlights: ["琵琶湖", "国宝・彦根城", "比叡山延暦寺"],
    gourmet: ["近江牛", "鮒ずし", "近江ちゃんぽん"],
    description: "日本最大の湖・琵琶湖を包み込む自然と歴史ロマン。近江牛を味わう湖畔リゾートの旅が楽しめます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "kyoto",
    name: "京都府",
    region: "近畿",
    highlights: ["清水寺", "金閣寺", "嵐山竹林の小径", "天橋立"],
    gourmet: ["京懐石", "湯豆腐", "宇治抹茶スイーツ", "ハモ料理"],
    description: "千年の都の趣と美意識が息づく歴史の街。洗練された伝統旅館や和風高級ホテルで過ごす特別なひととき。",
    bannerImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "osaka",
    name: "大阪府",
    region: "近畿",
    highlights: ["道頓堀・心斎橋", "大阪城", "USJ（ユニバーサル・スタジオ・ジャパン）"],
    gourmet: ["たこ焼き", "お好み焼き", "串カツ", "てっちり"],
    description: "天下の台所・食い倒れの街！活気あふれる繁華街とエンターテインメント、話題の最新スタイリッシュホテル。",
    bannerImage: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "hyogo",
    name: "兵庫県",
    region: "近畿",
    highlights: ["世界遺産・姫路城", "有馬温泉", "神戸港（ハーバーランド）", "城崎温泉"],
    gourmet: ["神戸牛", "明石焼き", "丹波黒豆"],
    description: "日本最古の湯・有馬温泉や志賀直哉ゆかりの城崎温泉、異国情緒漂う港町神戸と白鷺城の優美さを満喫。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "nara",
    name: "奈良県",
    region: "近畿",
    highlights: ["東大寺大仏殿", "奈良公園の鹿", "春日大社", "吉野山"],
    gourmet: ["柿の葉寿司", "三輪そうめん", "吉野葛"],
    description: "シルクロードの終着点、古都奈良。世界最古の木造建築や国宝の数々、四季咲き誇る吉野の千本桜が迎えます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "wakayama",
    name: "和歌山県",
    region: "近畿",
    highlights: ["白浜温泉", "熊野古道", "高野山奥之院", "アドベンチャーワールド"],
    gourmet: ["和歌山ラーメン", "紀州南高梅", "クエ料理", "マグロ"],
    description: "世界遺産熊野古道と聖地高野山、南紀白浜のエメラルドグリーンの海と源泉掛け流し温泉が癒やしを与えます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  // 中国
  {
    slug: "tottori",
    name: "鳥取県",
    region: "中国",
    highlights: ["鳥取砂丘", "水木しげるロード", "大山"],
    gourmet: ["松葉ガニ", "二十世紀梨", "牛骨ラーメン"],
    description: "風が織りなす神秘の鳥取砂丘と鬼太郎に会える町、冬の味覚の王者・松葉ガニを満喫する日本海ドライブ旅。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "shimane",
    name: "島根県",
    region: "中国",
    highlights: ["出雲大社", "国宝・松江城", "宍道湖の夕日", "玉造温泉"],
    gourmet: ["出雲そば", "宍道湖しじみ", "のどぐろ"],
    description: "縁結びの聖地・出雲大社と美肌の湯・玉造温泉。神話の歴史と宍道湖の夕景に心が洗われる時間を過ごせます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "okayama",
    name: "岡山県",
    region: "中国",
    highlights: ["倉敷美観地区", "岡山後楽園", "備中松山城"],
    gourmet: ["清水白桃", "マスカット", "デミカツ丼", "ひるぜん焼きそば"],
    description: "白壁の美しい蔵並みが続く倉敷美観地区と日本三名園後楽園。晴れの国が誇る極上フルーツ王国です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "hiroshima",
    name: "広島県",
    region: "中国",
    highlights: ["世界遺産・厳島神社（宮島）", "原爆ドーム", "尾道千光寺"],
    gourmet: ["広島風お好み焼き", "宮島牡蠣", "もみじまんじゅう"],
    description: "海に浮かぶ赤い鳥居宮島と感動の歴史、しまなみ海道のサイクリングと香ばしいお好み焼きが待っています。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "yamaguchi",
    name: "山口県",
    region: "中国",
    highlights: ["角島大橋", "元乃隅神社", "秋芳洞・秋吉台", "錦帯橋"],
    gourmet: ["下関ふく（ふぐ）", "瓦そば", "獺祭（日本酒）"],
    description: "コバルトブルーの海を渡る角島大橋と神秘の鍾乳洞秋芳洞、下関が誇る絶品ふぐ料理が楽しめる絶景エリアです。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  // 四国
  {
    slug: "tokushima",
    name: "徳島県",
    region: "四国",
    highlights: ["鳴門の渦潮", "阿波おどり会館", "祖谷のかずら橋"],
    gourmet: ["徳島ラーメン", "すだち料理", "阿波尾鶏"],
    description: "世界最大級の鳴門の渦潮と秘境・祖谷の吊り橋。阿波の情熱と徳島ラーメンの深い旨味に魅了されます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "kagawa",
    name: "香川県",
    region: "四国",
    highlights: ["金刀比羅宮（こんぴらさん）", "栗林公園", "小豆島オリーブ公園"],
    gourmet: ["讃岐うどん", "骨付鳥", "小豆島オリーブオイル"],
    description: "うどん県香川！一生に一度は参りたいこんぴらさんと瀬戸内海に浮かぶアートとオリーブの島小豆島へ。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "ehime",
    name: "愛媛県",
    region: "四国",
    highlights: ["道後温泉本館", "松山城", "しまなみ海道"],
    gourmet: ["愛媛みかん", "宇和島鯛めし", "じゃこ天"],
    description: "日本最古の湯・道後温泉の滑らかな温泉と木造天守松山城。瀬戸内の風を感じる癒やしの旅をお届け。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "kochi",
    name: "高知県",
    region: "四国",
    highlights: ["四万十川", "桂浜（坂本龍馬像）", "ひろめ市場"],
    gourmet: ["カツオのたたき", "ゆずドリンク", "屋台餃子"],
    description: "日本最後の清流四万十川と太平洋を望む桂浜。ひろめ市場で味わう豪快なカツオのわら焼きは絶品です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  // 九州・沖縄
  {
    slug: "fukuoka",
    name: "福岡県",
    region: "九州・沖縄",
    highlights: ["太宰府天満宮", "博多屋台街", "糸島海岸"],
    gourmet: ["博多ラーメン", "もつ鍋", "水炊き", "明太子"],
    description: "九州の玄関口博多！天神・中洲の賑やかな屋台文化と学問の神様太宰府、至高のうまかグルメ天国。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "saga",
    name: "佐賀県",
    region: "九州・沖縄",
    highlights: ["吉野ヶ里歴史公園", "武雄温泉", "嬉野温泉", "有田焼の里"],
    gourmet: ["呼子のイカ生造り", "佐賀牛", "嬉野温泉湯どうふ"],
    description: "透き通る新鮮な呼子のイカと極上の佐賀牛、日本三大美肌の湯・嬉野温泉で最高の癒やしを体験いただけます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "nagasaki",
    name: "長崎県",
    region: "九州・沖縄",
    highlights: ["ハウステンボス", "グラバー園", "稲佐山世界新三大夜景", "軍艦島"],
    gourmet: ["長崎ちゃんぽん", "カステラ", "佐世保バーガー", "トルコライス"],
    description: "異国情緒溢れる港町の街並みと1000万ドルの稲佐山夜景、広大なハウステンボスリゾートが楽しめます。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "kumamoto",
    name: "熊本県",
    region: "九州・沖縄",
    highlights: ["熊本城", "阿蘇山・草千里ヶ浜", "黒川温泉"],
    gourmet: ["馬刺し", "あか牛丼", "熊本ラーメン", "からし蓮根"],
    description: "雄大な大自然阿蘇カルデラと名城熊本城。隠れ家感溢れる黒川温泉の露天風呂めぐりが大人気です。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "oita",
    name: "大分県",
    region: "九州・沖縄",
    highlights: ["別府温泉地獄めぐり", "由布院温泉", "金鱗湖"],
    gourmet: ["とり天", "関あじ・関さば", "地獄蒸し料理"],
    description: "湧出量日本一のおんせん県大分！温泉アミューズメント別府とスタイリッシュな高級温泉街由布院へ。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "miyazaki",
    name: "宮崎県",
    region: "九州・沖縄",
    highlights: ["高千穂峡", "青島神社（鬼の洗濯板）", "サンメッセ日南"],
    gourmet: ["チキン南蛮", "宮崎牛", "マンゴー"],
    description: "神話の故郷高千穂峡の神秘的な滝と南国ムード漂う日南海岸、完熟マンゴーと極上宮崎牛を堪能。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "kagoshima",
    name: "鹿児島県",
    region: "九州・沖縄",
    highlights: ["桜島", "指宿温泉砂むし", "知覧武家屋敷", "屋久島"],
    gourmet: ["黒豚しゃぶしゃぶ", "白くまかき氷", "芋焼酎", "さつま揚げ"],
    description: "雄大な活火山桜島と世界遺産屋久島。指宿の砂むし温泉と黒豚しゃぶしゃぶで心身ともに温まります。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "okinawa",
    name: "沖縄県",
    region: "九州・沖縄",
    highlights: ["沖縄美ら海水族館", "首里城公園", "古宇利島", "万座毛"],
    gourmet: ["沖縄そば", "ゴーヤーチャンプルー", "タコライス", "アグー豚"],
    description: "エメラルドグリーンの美ら海と南国の風。高級ビーチリゾートホテルで過ごす究極のアジアンバカンス。",
    bannerImage: "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1200&auto=format&fit=crop"
  }
];

export function getPrefectureBySlug(slug: string): PrefectureInfo | undefined {
  return PREFECTURES_DATA.find(p => p.slug === slug);
}

export function getPrefectureByName(name: string): PrefectureInfo | undefined {
  return PREFECTURES_DATA.find(p => p.name === name || p.name.replace(/(県|府|東京都)$/, "") === name.replace(/(県|府|東京都)$/, ""));
}
