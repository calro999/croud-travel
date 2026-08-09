export interface FamousSpotDetail {
  slug: string;
  prefSlug: string;
  prefName: string;
  citySlug: string;
  cityName: string;
  name: string;
  titleHook: string; // 検索結果で切れない全角32文字以内の濃縮タイトル
  subtitle: string;
  description: string;
  highlights: string[];
  access: string;
  recommendedDuration: string;
  nearbySpotSlugs: string[];
  hotelKeywords: string[];
}

export const SPOTS_DATA: FamousSpotDetail[] = [
  // 石川県・金沢
  {
    slug: "kanazawa-21st-century-museum",
    prefSlug: "ishikawa",
    prefName: "石川県",
    citySlug: "kanazawa",
    cityName: "金沢市",
    name: "金沢21世紀美術館",
    titleHook: "【金沢21世紀美術館】絶対外せない映え＆有名MVロケ地！プールと近くの宿",
    subtitle: "有名MVロケ地＆絶大な人気！現代美術の集大成＆レアンドロのプールを体感せよ",
    description: "「現代美術の集大成」とも称される金沢21世紀美術館。実は大人気ロックバンド L'Arc〜en〜Ciel（ラルク アン シエル）の名曲『Link』（アニメ映画『鋼の錬金術師 シャンバラを征く者』オープニングテーマ）のミュージックビデオ（MV）撮影ロケ地としても世界的に有名な聖地です！メンバーが佇んだガラス張りの円形回廊や、レアンドロ・エルリッヒ作の『スイミング・プール』はファンならずとも鳥肌ものの感動体験。見る・触れる・体験できるアートと、金沢ならではのおしゃれな和洋空間が融合した、石川に行くなら絶対に外せないカルチャースポットです。",
    highlights: [
      "🎤 祝・L'Arc〜en〜Ciel『Link』MVロケ地！メンバーが疾走・歌唱したガラス回廊＆レアンドロのプールでの聖地巡礼撮影",
      "💧 水底と地上で人が見つめ合う奇跡の体験型アート・レアンドロ・エルリッヒ作『スイミング・プール』",
      "🎨 全方位ガラス張りの円形建築（妹島和世＋西沢立衛 / SANAA設計）と緑の芝生に浮かぶ野外現代アート群"
    ],
    access: "JR金沢駅バスターミナルより路線バス（城下まち金沢周遊バス等）で約10〜15分「広坂・21世紀美術館」下車すぐ。兼六園真弓坂口より徒歩約3分。",
    recommendedDuration: "約1時間半〜2時間半",
    nearbySpotSlugs: ["kenrokuen", "higashi-chaya"],
    hotelKeywords: ["金沢", "金沢21世紀美術館", "兼六園", "片町", "香林坊"]
  },
  {
    slug: "kenrokuen",
    prefSlug: "ishikawa",
    prefName: "石川県",
    citySlug: "kanazawa",
    cityName: "金沢市",
    name: "兼六園",
    titleHook: "【金沢】兼六園の美しさが凄すぎる！水と緑＆雪吊りの絶景と早朝ルート",
    subtitle: "加賀百万石の威光！どこを切り取っても絵になる究極の日本庭園美",
    description: "加賀百万石の伝統と文化が凝縮された、日本三名園の筆頭・兼六園。徽軫灯籠（ことじとうろう）や霞ヶ池、日本最古とされる噴水など、一歩歩くごとに万華鏡のように風景が変わる「回遊式大名庭園」の最高峰です。春の桜並木、新緑の青松、秋の紅葉、そして冬の雪の重みから樹木を守る職人技「雪吊り」の幻想的な美しさは一生に一度は見たい絶景です。",
    highlights: [
      "二本脚の脚が特徴的な兼六園のシンボル「徽軫灯籠（ことじとうろう）」と霞ヶ池アングル",
      "金沢の冬の風物詩！幾何学模様の縄が美しい職人技の最高峰「雪吊り」",
      "早朝の無料開園時間で味わう静寂の庭園散策と老舗茶屋の団子＆お抹茶"
    ],
    access: "JR金沢駅よりバスで約15分「兼六園下・金沢城」下車徒歩2分。金沢21世紀美術館より徒歩約3分。",
    recommendedDuration: "約1時間〜1時間半",
    nearbySpotSlugs: ["kanazawa-21st-century-museum", "higashi-chaya"],
    hotelKeywords: ["金沢", "兼六園", "金沢城", "金沢白鳥路"]
  },
  {
    slug: "higashi-chaya",
    prefSlug: "ishikawa",
    prefName: "石川県",
    citySlug: "kanazawa",
    cityName: "金沢市",
    name: "ひがし茶屋街",
    titleHook: "【金沢映えNO.1】ひがし茶屋街！金箔ソフト＆和カフェ巡り完全ガイド",
    subtitle: "金箔を一枚丸ごとペロリ！伝統とトレンドが交差する金沢一のフォトジェニック通り",
    description: "木造二階建ての「キムスコ（細い格子）」がある出格子建築が美しく並ぶ、重要伝統的建造物群保存地区。着物をレンタルして石畳を散策する旅行者が絶えない金沢一番の人気エリアです。SNSで大話題の「箔一」の一枚黄金金箔ソフトクリームをはじめ、金箔体験、町家をリノベーションした贅沢な和カフェ、伝統の工芸品店がひしめいています。",
    highlights: [
      "豪華絢爛！本物の金箔を一枚丸ごと乗せた名物「箔一」の金箔ソフトクリーム",
      "江戸時代のお茶屋建築の面影を残す国指定重要文化財「志摩」の見学",
      "情緒あふれる石畳の路地と、古い町家をモダンに改装した隠れ家カフェ巡り"
    ],
    access: "JR金沢駅よりバスで約10〜15分「橋場町」下車徒歩約5分。",
    recommendedDuration: "約1時間〜2時間",
    nearbySpotSlugs: ["kenrokuen", "kanazawa-21st-century-museum"],
    hotelKeywords: ["金沢", "ひがし茶屋街", "浅野川", "金沢駅"]
  },

  // 島根県・出雲
  {
    slug: "izumo-taisha",
    prefSlug: "shimane",
    prefName: "島根県",
    citySlug: "izumo",
    cityName: "出雲市",
    name: "出雲大社（いづもたいしゃ）",
    titleHook: "【出雲大社】人生変わる最強縁結び！巨大注連縄と参拝作法を徹底解説",
    subtitle: "神々が集う奇跡の社！日本一の巨大注連縄と出雲割子そばの満喫ガイド",
    description: "福の神・縁結びの神様として圧倒的な信仰を集める大国主大神のお膝元。旧暦10月（神在月）には全国から八百万の神々が参集する日本最古の聖地です。神楽殿の頭上に架かる長さ13.6m・重さ5.2トンの巨大大注連縄は息をのむ大迫力！一般的な二礼二拍手一礼とは異なる『二礼四拍手一礼』の参拝作法をマスターして、良縁を祈願しましょう。",
    highlights: [
      "大迫力のスケール！神楽殿に架かる日本一の巨大大注連縄（重さ5.2トン）",
      "国宝の本殿と、境内に隠された愛くるしい無数のうさぎの石像",
      "参拝後に門前町で味わう伝統の「出雲割子そば」と「出雲ぜんざい」"
    ],
    access: "一畑電車「出雲大社前駅」より徒歩約7分。JR出雲市駅より路線バスで約25分「正門前」または「出雲大社」下車。",
    recommendedDuration: "約1時間半〜2時間",
    nearbySpotSlugs: ["inasa-no-hama"],
    hotelKeywords: ["出雲", "出雲大社", "佳雲", "月夜のうさぎ", "玉造温泉"]
  },
  {
    slug: "inasa-no-hama",
    prefSlug: "shimane",
    prefName: "島根県",
    citySlug: "izumo",
    cityName: "出雲市",
    name: "稲佐の浜（いなさのはま）",
    titleHook: "【出雲】稲佐の浜！弁天島と沈む夕日の絶景＆お清めの砂参拝ルート",
    subtitle: "神話『国譲り』の舞台！日本海に沈む夕日と弁天島の幻想的アングル",
    description: "出雲大社から徒歩わずか15分。旧暦10月10日の「神迎祭」において、全国の八百万の神々が上陸される神聖な海岸です。白い砂浜にぽつんと浮かぶ「弁天島」と、水平線に没する夕日の美しさは「日本の夕陽百選」にも選ばれる奇跡の絶景。浜の砂を採取して出雲大社の素鵞社にお納めし、代わりの御砂をいただく参拝文化も人気です。",
    highlights: [
      "神迎えの神話が今も息づく弁天島と朱色の鳥居が織りなす神聖なアングル",
      "「日本の渚百選」「日本の夕陽百選」に選ばれた感動的な夕景フォトスポット",
      "稲佐の浜で砂を採取し出雲大社で清めの御砂と交換する通の参拝文化"
    ],
    access: "出雲大社正門より西へ徒歩約15分。出雲大社バスターミナルよりバスで約5分「稲佐の浜」下車。",
    recommendedDuration: "約30分〜1時間",
    nearbySpotSlugs: ["izumo-taisha"],
    hotelKeywords: ["出雲", "稲佐の浜", "出雲大社", "佳雲"]
  },

  // 茨城県・鹿嶋
  {
    slug: "kashima-jingu",
    prefSlug: "ibaraki",
    prefName: "茨城県",
    citySlug: "kashima",
    cityName: "鹿嶋市",
    name: "鹿島神宮",
    titleHook: "【鹿島神宮】勝負運の聖地！要石＆澄み切った御手洗池の神秘を解剖",
    subtitle: "関東最古の神社！1日40万L湧き出るエメラルドグリーンの池と要石の神秘",
    description: "武道の神「武甕槌大神」をお祀りする東国三社筆頭の大神社。勝負運・決断力・開運のご利益で知られ、古くは源頼朝や徳川家康も戦勝を祈願しました。鬱蒼とした老杉が連なる奥参道を抜けると、地震を抑える伝説が残る「要石」や、透き通るエメラルドグリーンの水面が幻想的な「御手洗池」が姿を現します。",
    highlights: [
      "1日40万リットル以上の清水が湧き出る透明度抜群の「御手洗池（みたらしいけ）」",
      "地中深くに埋まり地震を抑え込むと伝えられる伝説の「要石（かなめいし）」",
      "樹齢数百年の杉並木がどこまでも続く清らかで強力なパワーの「奥参道」"
    ],
    access: "JR鹿島線「鹿島神宮駅」より徒歩約10分。東京駅高速バスターミナルよりかしま号で約90分「鹿島神宮」下車徒歩5分。",
    recommendedDuration: "約1時間〜1時間半",
    nearbySpotSlugs: [],
    hotelKeywords: ["鹿嶋", "スーパーホテル鹿嶋", "鹿島神宮", "水戸"]
  },

  // 新潟県・越後湯沢
  {
    slug: "ponshukan-yuzawa",
    prefSlug: "niigata",
    prefName: "新潟県",
    citySlug: "yuzawa",
    cityName: "湯沢町（越後湯沢）",
    name: "ぽんしゅ館 越後湯沢店",
    titleHook: "【新潟】越後湯沢ぽんしゅ館！全90蔵の利き酒＆爆弾おにぎり天国",
    subtitle: "500円でコイン5枚！駅ナカで日本酒飲み比べ＆酒風呂温泉のテーマパーク",
    description: "JR越後湯沢駅改札を出てすぐ！新潟県内全90蔵以上の日本酒がずらりと並ぶ酒好きのパラダイスです。500円でコイン5枚とおちょこを受け取り、壁一面のサーバーから好きな地酒を選んで利き酒体験。さらに魚沼産コシヒカリ1合分を使った名物『爆弾おにぎり』や、ほのかに麹の香りが漂う駅ナカ天然温泉『酒風呂』も楽しめます。",
    highlights: [
      "500円でコイン5枚！新潟全90蔵の日本酒や梅酒・焼酎を飲み比べる利き酒壁",
      "南魚沼産コシヒカリを豪快に1合炊いた名物『爆弾おにぎり・大爆発おにぎり』",
      "お酒の成分で肌がスベスベになる駅ナカの本格天然温泉『酒風呂 湯の沢』"
    ],
    access: "JR越後湯沢駅構内（CoCoLo湯沢がんぎ通り内）。改札口を出てすぐ。",
    recommendedDuration: "約45分〜1時間半",
    nearbySpotSlugs: [],
    hotelKeywords: ["越後湯沢", "リブマックスリゾート越後湯沢", "湯沢温泉", "苗場"]
  },

  // 愛知県・名古屋
  {
    slug: "nagoya-castle",
    prefSlug: "aichi",
    prefName: "愛知県",
    citySlug: "nagoya",
    cityName: "名古屋市",
    name: "名古屋城",
    titleHook: "【名古屋城】金しゃち＆金箔煌めく本丸御殿の圧巻美を徹底レポ",
    subtitle: "尾張名古屋は城でもつ！復元された本丸御殿の金碧障壁画と金鯱の輝き",
    description: "徳川家康公が天下普請で築いた城郭建築の金字塔。天守閣に輝く「金のしゃちほこ（金鯱）」は名古屋の誇りです。10年以上の歳月をかけて完全復元された『本丸御殿』は、まばゆいばかりの金箔が施された竹林豹虎図などの障壁画や、格式高い上段の間など、当時の大名文化の贅を尽くした空間を余すところなく体験できます。",
    highlights: [
      "天守閣の頂で輝きを放つ名古屋のシンボル「金のしゃちほこ（金鯱）」",
      "漆塗りと金箔の伝統工芸技術を集約して完全復元された豪華絢爛な「本丸御殿」",
      "金シャチ横丁で味わう名古屋名物のひつまぶし・味噌カツ・手羽先グルメ"
    ],
    access: "地下鉄名城線「名古屋城駅」7番出口より徒歩5分。名鉄瀬戸線「栄町駅」よりバスで約10分。",
    recommendedDuration: "約1時間半〜2時間",
    nearbySpotSlugs: [],
    hotelKeywords: ["名古屋", "名古屋観光ホテル", "名古屋城", "栄", "伏見"]
  },

  // 京都府・京都
  {
    slug: "kiyomizu-dera",
    prefSlug: "kyoto",
    prefName: "京都府",
    citySlug: "kyoto-city",
    cityName: "京都市",
    name: "清水寺",
    titleHook: "【京都】清水寺の舞台からの絶景！音羽の滝と和スイーツ食べ歩き",
    subtitle: "「清水の舞台」から京都市街を一望！四季の絶景と門前街の和スイーツ食べ歩き",
    description: "「清水の舞台から飛び下りる」の語源となった、崖に張り出す巨大な木造舞台で有名な世界遺産。釘を一本も使わずに組み上げられた懸造り構造は、日本の伝統建築の最高峰です。舞台から見下ろす桜や紅葉の絨毯と京都市街の景観は息をのむ美しさ。境内の「音羽の滝」での祈願や、情緒あふれる産寧坂・二寧坂での和スイーツ食べ歩きも魅力です。",
    highlights: [
      "139本の立柱で支えられた釘を使わない伝統構造「清水の舞台」からの大パノラマ",
      "学問・恋愛・健康のご利益が流れる「音羽の滝」での霊水体験",
      "産寧坂・二寧坂の石畳に並ぶ八ツ橋・抹茶パフェ・和雑貨の食べ歩き散策"
    ],
    access: "JR京都駅より市バスで約15分「清水道」または「五条坂」下車徒歩約10分。",
    recommendedDuration: "約1時間半〜2時間",
    nearbySpotSlugs: [],
    hotelKeywords: ["京都", "清水寺", "祇園", "河原町", "京都駅"]
  },

  // 福岡県・脇田温泉
  {
    slug: "wakita-yunos eko",
    prefSlug: "fukuoka",
    prefName: "福岡県",
    citySlug: "miyawaka",
    cityName: "宮若市（脇田温泉）",
    name: "脇田温泉 湯のせこ（湯巡り露天風呂）",
    titleHook: "【福岡の奥座敷】脇田温泉 湯のせこ！10種の露天風呂とツルツル美肌湯",
    subtitle: "博多から45分の温泉パラダイス！清流犬鳴川のせせらぎに包まれる至福の湯浴み",
    description: "博多・天神から車でわずか45分！犬鳴川沿いの深い緑に抱かれた脇田温泉の名物日帰り湯施設「湯のせこ」。広い敷地内に寝湯、釜風呂、歩行湯、大露天風呂など10種類以上の趣異なる露天風呂が点在。弱アルカリ性の柔らかい温泉は「お肌がツルツルになる美肌の湯」として大絶賛されています。",
    highlights: [
      "犬鳴川のせせらぎと爽やかな風を感じながら巡る10通りの多彩な露天風呂",
      "お肌に優しく浸透する弱アルカリ性・単純温泉のなめらかな泉質",
      "隣接する名門老舗旅館「楠水閣」での絶品創作懐石ディナー"
    ],
    access: "博多駅・福岡空港よりお車で約45分（九州自動車道・若宮ICより約15分）。JR博多駅よりJR九州バス直方行きで「脇田温泉」下車すぐ。",
    recommendedDuration: "約1時間半〜2時間半",
    nearbySpotSlugs: [],
    hotelKeywords: ["脇田温泉", "楠水閣", "ルートイングランティア", "宮若"]
  },

  // 北海道・キロロ
  {
    slug: "yu-kiroro-resort",
    prefSlug: "hokkaido",
    prefName: "北海道",
    citySlug: "otaru",
    cityName: "赤井川・キロロ",
    name: "Yu Kiroro（ユキロロ）＆ キロロリゾート",
    titleHook: "【北海道】Yu Kiroro！ゲレンデ直結＆自家源泉天然温泉の極上宿",
    subtitle: "世界最高峰のパウダースノー＆夏休みの高原避暑地！全室キッチン完備の高級スイート",
    description: "北海道・キロロの大自然の中に佇む最高級プレミアムコンドミニアム「Yu Kiroro」。扉を出れば目の前がゲレンデというスキーイン・スキーアウトの贅沢な環境と、全室にフルキッチンや洗濯乾燥機を完備した洗練されたスイート客室が自慢です。地下水脈から湧き出る自家源泉の天然温泉大浴場や露天風呂、夏休みの爽やかな避暑アクティビティも満喫できます。",
    highlights: [
      "扉を出れば即ゲレンデ！世界中のスキーヤーが熱望する世界最高峰のパウダースノー",
      "全室フルキッチン＆洗濯乾燥機完備の広々とした北欧風高級プライベートスイート",
      "キロロの大自然に包まれる自家源泉の天然温泉大浴場＆星空満天の露天風呂"
    ],
    access: "JR小樽駅より車・タクシーで約40分。新千歳空港よりリゾートバスまたはレンタカーで約90分〜120分。",
    recommendedDuration: "1泊〜長期滞在",
    nearbySpotSlugs: ["otaru"],
    hotelKeywords: ["yukiroro", "Yu Kiroro", "キロロ", "小樽", "北海道リゾート"]
  }
];

export function getSpotBySlug(slug: string): FamousSpotDetail | undefined {
  return SPOTS_DATA.find(s => s.slug === slug);
}

export function getSpotsByPrefectures(prefSlug: string): FamousSpotDetail[] {
  return SPOTS_DATA.filter(s => s.prefSlug === prefSlug);
}
