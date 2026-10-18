import { Metadata } from "next";

export interface SpotInfo {
  name: string;
  description: string;
}

export interface HotelCardInfo {
  hotelName: string;
  areaName?: string;
  image?: string;
  price?: number | string;
  rating?: number | string;
  affiliateUrl?: string;
  postId?: string;
}

export interface SubAreaInfo {
  areaName: string;
  slug: string;
  description: string;
  spots: SpotInfo[];
  gourmet: string[];
  keywords: string[];
  subAreaHotels: HotelCardInfo[];
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
  famousSpots?: SpotInfo[];
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
  {
    slug: "hokkaido",
    famousSpots: [
        {
                "name": "函館山（夜景）",
                "description": "世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。"
        },
        {
                "name": "富良野 ファーム富田",
                "description": "一面に広がる鮮やかな紫色のラベンダー畑と、虹色に彩られた花畑が織りなすパノラマロード。富良野の雄大な自然と爽やかな香りに包まれる絶好の観光名所です。"
        },
        {
                "name": "小樽運河",
                "description": "大正時代に造られたノスタルジックな石造り倉庫群が立ち並ぶ小樽のシンボル。夕暮れ時にはガス灯が灯り、幻想的な雰囲気の中で散策やナイトクルーズを楽しめます。"
        },
        {
                "name": "旭川市旭山動物園",
                "description": "行動展示で全国的に有名な日本最北の動物園。水中でダイナミックに泳ぐホッキョクグマや、円柱水槽を行き来するアザラシなど、生き生きとした動物たちの姿を間近で観察できます。"
        },
        {
                "name": "知床国立公園",
                "description": "世界自然遺産にも登録されている日本屈指の原生地域。知床五湖の木道散策や観光船からの断崖絶壁・野生ヒグマ観察など、スケールの大きな手つかずの自然を体感できます。"
        }
],
    name: "北海道",
    region: "北海道",
    highlights: ["函館山（夜景）", "富良野 ファーム富田", "小樽運河", "登別・名湯ステイ"],
    gourmet: ["海鮮丼・ウニ・イクラ", "ジンギスカン", "札幌味噌ラーメン", "毛ガニ・タラバガニ"],
    description: "函館山（夜景）や富良野 ファーム富田などの王道観光名所から、海鮮丼・ウニ・イクラ・ジンギスカンなどの名物ご当地グルメ、登別・定山渓・湯の川・洞爺湖・十勝川温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ北海道の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/28031/28031.jpg",
    subAreas: [
      {
        areaName: "函館・湯の川温泉",
        slug: "hakodate",
        description: "函館・湯の川温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "函館・湯の川温泉の歴史・伝統名所散策", description: "函館・湯の川温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "函館・湯の川温泉の絶景・ビュースポット", description: "函館・湯の川温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["海鮮丼・ウニ・イクラ", "ジンギスカン", "札幌味噌ラーメン", "毛ガニ・タラバガニ"],
        keywords: ["北海道", "函館・湯の川温泉"],
        subAreaHotels: [
            {
                        "hotelName": "旅館　美国観光ハウス",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28031/28031.jpg",
                        "price": 36905,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28031%2F28031.html"
            },
            {
                        "hotelName": "阿寒湖温泉　あかん鶴雅別荘鄙の座",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/37362/37362.jpg",
                        "price": 48279,
                        "rating": 4.9,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37362%2F37362.html"
            },
            {
                        "hotelName": "運河の宿　おたる　ふる川",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1734/1734.jpg",
                        "price": 12100,
                        "rating": 4.8,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1734%2F1734.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "六花亭 札幌本店 喫茶室",
                "type": "和洋菓子・サロン",
                "description": "帯広発祥の老舗。注文後に仕上げるマルセイアイスサンドや出来立てサクサクパイが名物。",
                "recommend": "マルセイアイスサンド・新カフェ生ロール"
        },
        {
                "name": "小樽 LeTAO（ルタオ）本店カフェ",
                "type": "洋菓子・スイーツ喫茶",
                "description": "小樽メルヘン交差点のシンボル。限定の生ドゥーブルフロマージュを優雅な空間で楽しめます。",
                "recommend": "奇跡の口どけセット（生ドゥーブル＆紅茶）"
        },
        {
                "name": "サッポロ珈琲館 時計台前店",
                "type": "レトロ自家焙煎珈琲",
                "description": "札幌時計台すぐそば。炭火焙煎の芳醇な珈琲と手作りケーキが地元ファンに愛される老舗。",
                "recommend": "炭火自家焙煎珈琲＆手作りシフォン"
        }
],
    souvenirs: [
        {
                "name": "白い恋人（石屋製菓）",
                "category": "定番銘菓",
                "description": "サクサクのラングドシャクッキーで極上ホワイトチョコを挟んだ北海道お土産の金字塔。"
        },
        {
                "name": "マルセイバターサンド（六花亭）",
                "category": "伝統銘菓",
                "description": "北海道産バターとレーズン、ホワイトチョコをサンドした芳醇で濃厚な極上ビスケット。"
        },
        {
                "name": "じゃがポックル（カルビー）",
                "category": "スナック・名産",
                "description": "北海道産皮付きじゃがいもを100%使用。サクサク食感とオホーツクの塩味がやみつきに。"
        }
],
    sakes: [
        {
                "name": "男山（おとこやま）純米大吟醸",
                "brewery": "男山株式会社（旭川市）",
                "type": "淡麗辛口",
                "description": "大雪山の伏流水で仕込む。海外のコンクールでも金賞を受賞し続ける北海道を代表する最高峰。"
        },
        {
                "name": "国稀（くにまれ）特別純米",
                "brewery": "国稀酒造（増毛町）",
                "type": "芳醇辛口",
                "description": "日本最北の酒蔵。暑寒別岳の雪解け水で醸す、すっきりキリッとした喉越しが自慢。"
        },
        {
                "name": "千歳鶴（ちとせつる）純米吟醸",
                "brewery": "日本清酒（札幌市）",
                "type": "爽快吟醸",
                "description": "豊平川の伏流水を使用。札幌の地で100年以上愛される、爽やかな香りと深いコク。"
        }
]
  },
  {
    slug: "aomori",
    famousSpots: [
        {
                "name": "弘前公園（弘前城）",
                "description": "日本屈指の桜の名所として知られる城郭公園。春には約2,600本の桜が咲き誇り、お堀を埋め尽くす「花いかだ」の幻想的な景色は世界中から絶賛されています。"
        },
        {
                "name": "奥入瀬渓流",
                "description": "十和田湖から流れる約14kmの美しい清流。豊かな樹木と苔むした岩々、無数の滝が織りなすせせらぎに沿って遊歩道が整備されており、極上のネイチャーウォークを楽しめます。"
        },
        {
                "name": "ねぶたの家 ワ・ラッセ",
                "description": "青森夏の風物詩「青森ねぶた祭」の歴史と魅力を一年中体感できる大型展示施設。実際に祭りで運行された大型ねぶたの迫力を間近で鑑賞できます。"
        },
        {
                "name": "仏ヶ浦（ほとけがうら）",
                "description": "下北半島にある、白緑色の奇岩群が約2kmにわたって続く国の名勝。巨大な如来や観音に見立てられた壮大な自然の彫刻と、澄み渡る陸奥湾の青さが圧巻です。"
        }
],
    name: "青森県",
    region: "東北",
    highlights: ["弘前公園（弘前城）", "奥入瀬渓流", "ねぶたの家 ワ・ラッセ", "酸ヶ湯・名湯ステイ"],
    gourmet: ["大間の本マグロ", "八戸せんべい汁", "十和田バラ焼き", "弘前アップルパイ"],
    description: "弘前公園（弘前城）や奥入瀬渓流などの王道観光名所から、大間の本マグロ・八戸せんべい汁などの名物ご当地グルメ、酸ヶ湯・浅虫・十和田湖・奥入瀬渓流・大鰐温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ青森県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg",
    subAreas: [
      {
        areaName: "青森・弘前周辺",
        slug: "aomori-hirosaki",
        description: "青森・弘前周辺エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "青森・弘前周辺の歴史・伝統名所散策", description: "青森・弘前周辺で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "青森・弘前周辺の絶景・ビュースポット", description: "青森・弘前周辺ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["大間の本マグロ", "八戸せんべい汁", "十和田バラ焼き", "弘前アップルパイ"],
        keywords: ["青森県", "青森・弘前周辺"],
        subAreaHotels: [
            {
                        "hotelName": "蔦温泉旅館－足元から源泉湧出の自噴温泉－",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg",
                        "price": 21300,
                        "rating": 4.78,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142919%2F142919.html"
            },
            {
                        "hotelName": "割烹旅館　さつき",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/79403/79403.jpg",
                        "price": 20000,
                        "rating": 4.67,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79403%2F79403.html"
            },
            {
                        "hotelName": "浅虫温泉　南部屋・海扇閣（なんぶや・かいせんかく）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4962/4962.jpg",
                        "price": 16900,
                        "rating": 4.62,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4962%2F4962.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "サロン・ド・カフェ アンジュ（弘前市）",
                "type": "洋館レトロカフェ",
                "description": "旧東奥義塾外国人教師館内。明治の面影残す空間で弘前名物アップルパイを食べ比べ。",
                "recommend": "栄光堂アップルパイ＆紅茶セット"
        },
        {
                "name": "赤い屋根の喫茶店 駅舎（五所川原市）",
                "type": "太宰治ゆかり喫茶",
                "description": "津軽鉄道芦野公園駅の旧駅舎を利用。太宰治が通った昭和ノスタルジー溢れる空間。",
                "recommend": "激走カツカレー＆昭和のブレンドコーヒー"
        },
        {
                "name": "A-FACTORY カフェ（青森市）",
                "type": "ウォーターフロントカフェ",
                "description": "青森港前のシードル工房併設カフェ。出来立ての自家製アオモリシードルとスイーツを。",
                "recommend": "自家製シードルフライト＆ガレット"
        }
],
    souvenirs: [
        {
                "name": "パティシエのりんごぴあ（ラグノオ）",
                "category": "銘菓スイーツ",
                "description": "青森産シャキシャキりんごをスポンジと一緒にパイ生地で包み込んだロングセラー。"
        },
        {
                "name": "気になるリンゴ（ラグノオ）",
                "category": "贅沢りんごスイーツ",
                "description": "青森県産シロップ漬けりんごを丸ごと1個贅沢にパイで包み込んだ迫力のお土産。"
        },
        {
                "name": "朝の八甲田 Cheese Cake",
                "category": "洋菓子スイーツ",
                "description": "八甲田の新鮮なおたまごと牛乳を使用。まるで淡雪のようにとろける極上チーズケーキ。"
        }
],
    sakes: [
        {
                "name": "田酒（でんしゅ）特別純米",
                "brewery": "西田酒造店（青森市）",
                "type": "純米酒の金字塔",
                "description": "醸造用糖類・アルコールを一切使わず、手造りの米本来の旨味を追求した全国的幻の銘酒。"
        },
        {
                "name": "陸奥八仙（むつはっせん）特別純米",
                "brewery": "八戸酒造（八戸市）",
                "type": "フルーティー辛口",
                "description": "華やかな香りとフレッシュでジューシーな味わい。若い世代や女性にも大人気。"
        },
        {
                "name": "豊盃（ほうはい）純米吟醸",
                "brewery": "三浦酒造（弘前市）",
                "type": "芳醇吟醸",
                "description": "自社契約栽培米「豊盃米」を使用。膨らみのある柔らかな旨味と心地よい余韻。"
        }
]
  },
  {
    slug: "iwate",
    famousSpots: [
        {
                "name": "中尊寺金色堂（平泉）",
                "description": "世界遺産・平泉の象徴であり、奥州藤原氏の栄華を今に伝える極楽浄土の建築。堂全体が金箔で覆われ、螺鈿細工や象牙の装飾が施された国宝の美しさは言葉を失うほどです。"
        },
        {
                "name": "浄土ヶ浜",
                "description": "三陸復興国立公園を代表する三陸海岸の景勝地。白い鋭利な岩肌と青松、穏やかで透明度の高いエメラルドグリーンの入江が「まるで極楽浄土のよう」と称えられています。"
        },
        {
                "name": "龍泉洞",
                "description": "日本三大鍾乳洞の一つで、国の天然記念物。洞内に湧き出る地底湖は世界有数の透明度を誇り、「ドラゴンブルー」と呼ばれる神秘的な青い輝きに吸い込まれそうになります。"
        },
        {
                "name": "小岩井農場",
                "description": "岩手山の雄大な山麓に広がる日本最大級の民間総合農場。美しい一本桜や歴史あるレンガサイロ、搾りたての牛乳を使った絶品アイスクリームなどが楽しめます。"
        }
],
    name: "岩手県",
    region: "東北",
    highlights: ["中尊寺金色堂（平泉）", "浄土ヶ浜", "龍泉洞", "花巻・名湯ステイ"],
    gourmet: ["前沢牛・いわて短角牛", "盛岡冷麺・じゃじゃ麺", "わんこそば", "三陸産カキ・ウニ"],
    description: "中尊寺金色堂（平泉）や浄土ヶ浜などの王道観光名所から、前沢牛・いわて短角牛・盛岡冷麺・じゃじゃ麺などの名物ご当地グルメ、花巻・つなぎ・鶯宿・夏油・安比高原温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ岩手県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/84786/84786.jpg",
    subAreas: [
      {
        areaName: "盛岡・花巻温泉周辺",
        slug: "morioka-hanamaki",
        description: "盛岡・花巻温泉周辺エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "盛岡・花巻温泉周辺の歴史・伝統名所散策", description: "盛岡・花巻温泉周辺で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "盛岡・花巻温泉周辺の絶景・ビュースポット", description: "盛岡・花巻温泉周辺ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["前沢牛・いわて短角牛", "盛岡冷麺・じゃじゃ麺", "わんこそば", "三陸産カキ・ウニ"],
        keywords: ["岩手県", "盛岡・花巻温泉周辺"],
        subAreaHotels: [
            {
                        "hotelName": "岩手の名湯　侍の湯　おぼない",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/84786/84786.jpg",
                        "price": 17800,
                        "rating": 4.79,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84786%2F84786.html"
            },
            {
                        "hotelName": "花巻温泉　佳松園",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13482/13482.jpg",
                        "price": 18700,
                        "rating": 4.69,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13482%2F13482.html"
            },
            {
                        "hotelName": "湯川温泉　山人－ｙａｍａｄｏ－",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/129427/129427.jpg",
                        "price": 30764,
                        "rating": 4.67,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129427%2F129427.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "クラムボン（盛岡市）",
                "type": "自家焙煎ジャズ喫茶",
                "description": "宮沢賢治の童話から名付けられた老舗。自家焙煎珈琲の香りとジャズの音色に包まれる空間。",
                "recommend": "クラムボンブレンド＆自家製プリン"
        },
        {
                "name": "光原社 可曲（盛岡市）",
                "type": "民芸レトロ喫茶",
                "description": "宮沢賢治『注文の多い料理店』を初出版した光原社内。重厚な木製家具と美しいステンドグラス。",
                "recommend": "くるみクッキー＆水出しアイスコーヒー"
        },
        {
                "name": "小岩井農場 まきば園カフェ",
                "type": "農場直営カフェ",
                "description": "岩手山の雄大なパノラマをバックに、小岩井農場産の新鮮生乳で作る極上ソフトクリーム。",
                "recommend": "小岩井農場まきばソフトクリーム"
        }
],
    souvenirs: [
        {
                "name": "かもめの玉子（さいとう製菓）",
                "category": "伝統銘菓",
                "description": "しっとりほくほくの黄味あんをカステラ生地とホワイトチョコで包んだ三陸名物。"
        },
        {
                "name": "南部せんべい 乃し梅・落花生（小松製菓）",
                "category": "伝統煎餅",
                "description": "香ばしい胡麻や落花生の風味。職人が伝統の焼き加減で仕上げる岩手のソウルフード。"
        },
        {
                "name": "福田パン コンビーフ・ジャムバター",
                "category": "ご当地パン・名物",
                "description": "盛岡市民の胃袋を支えるコッペパン。ふんわり柔らかな生地にお好きな具材を贅沢サンド。"
        }
],
    sakes: [
        {
                "name": "南部美人（なんぶびじん）特別純米",
                "brewery": "株式会社南部美人（二戸市）",
                "type": "芳醇旨口",
                "description": "海外の日本酒コンクールで世界一を獲得。華やかな香りと美しく綺麗な後味が絶品。"
        },
        {
                "name": "赤武 AKABU（あかぶ）純米酒",
                "brewery": "赤武酒造（盛岡市）",
                "type": "フレッシュモダン",
                "description": "若き杜氏が醸す大人気銘柄。清涼感あふれる吟醸香とみずみずしい米の旨味が魅力。"
        },
        {
                "name": "あさ開（あさびらき）純米大吟醸",
                "brewery": "株式会社あさ開（盛岡市）",
                "type": "大吟醸",
                "description": "全国新酒鑑評会で金賞常連。名峰岩手山の伏流水で仕込む最高級の品格とキレ。"
        }
]
  },
  {
    slug: "miyagi",
    famousSpots: [
        {
                "name": "松島（日本三景）",
                "description": "松島湾に浮かぶ260余りの島々が描く、日本三景の一つに数えられる美景。瑞巌寺や五大堂といった歴史的建造物と、遊覧船からの島々の眺望が訪れる者を魅了します。"
        },
        {
                "name": "仙台城跡（青葉城）",
                "description": "伊達政宗公が築城した仙台藩の拠点。本丸跡に立つ政宗公の騎馬像越しに仙台市街を一望でき、日暮れには眼下に広がる輝く夜景スポットとしても大人気です。"
        },
        {
                "name": "蔵王の御釜",
                "description": "蔵王連峰の標高高台に位置する、エメラルドグリーンの神秘的なカルデラ湖。光の当たり方で色合いが変化することから「五色沼」とも呼ばれる圧巻の火山絶景です。"
        },
        {
                "name": "瑞鳳殿",
                "description": "仙台藩祖・伊達政宗公の霊屋。桃山文化の華麗な建築様式を今に伝える絢欄豪華な装飾と、周囲の静寂な杉木立が見事な対比を見せています。"
        }
],
    name: "宮城県",
    region: "東北",
    highlights: ["松島（日本三景）", "仙台城跡（青葉城）", "蔵王の御釜", "秋保・名湯ステイ"],
    gourmet: ["熟成厚切り仙台牛タン", "三陸の寿司・海鮮丼", "ずんだ餅・ずんだシェイク", "仙台せり鍋・はらこ飯"],
    description: "松島（日本三景）や仙台城跡（青葉城）などの王道観光名所から、熟成厚切り仙台牛タン・三陸の寿司・海鮮丼などの名物ご当地グルメ、秋保・松島・鳴子・作並・遠刈田温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ宮城県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/38345/38345.jpg",
    subAreas: [
      {
        areaName: "仙台・松島・秋保温泉",
        slug: "sendai-matsushima",
        description: "仙台・松島・秋保温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "仙台・松島・秋保温泉の歴史・伝統名所散策", description: "仙台・松島・秋保温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "仙台・松島・秋保温泉の絶景・ビュースポット", description: "仙台・松島・秋保温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["熟成厚切り仙台牛タン", "三陸の寿司・海鮮丼", "ずんだ餅・ずんだシェイク", "仙台せり鍋・はらこ飯"],
        keywords: ["宮城県", "仙台・松島・秋保温泉"],
        subAreaHotels: [
            {
                        "hotelName": "秋保温泉　茶寮宗園",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38345/38345.jpg",
                        "price": 49500,
                        "rating": 4.91,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38345%2F38345.html"
            },
            {
                        "hotelName": "温泉山荘だいこんの花",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67859/67859.jpg",
                        "price": 62445,
                        "rating": 4.85,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67859%2F67859.html"
            },
            {
                        "hotelName": "遠刈田温泉　旬菜湯宿　旅舘大忠",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4742/4742.jpg",
                        "price": 25300,
                        "rating": 4.76,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4742%2F4742.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "村上屋餅店（仙台市）",
                "type": "老舗和菓子・甘味処",
                "description": "創業明治初期。仙台名物「ずんだ餅」の発祥と伝わる老舗。ずんだの風味が濃厚。",
                "recommend": "づんだ餅・三色餅セット"
        },
        {
                "name": "ホシヤマ珈琲店 本店（仙台市）",
                "type": "高級レトロ喫茶",
                "description": "1000客もの高級カップの中から客人の雰囲気に合わせて珈琲を提供。究極のおもてなし。",
                "recommend": "ロイヤルブレンド＆自家製チーズケーキ"
        },
        {
                "name": "松島 松華堂菓子店（松島町）",
                "type": "絶景和モダンカフェ",
                "description": "日本三名園・松島湾を2階窓から一望できる特等席。焼きたてのカステラとプリンが絶品。",
                "recommend": "松華堂手焼きカステラ＆セット珈琲"
        }
],
    souvenirs: [
        {
                "name": "萩の月（菓匠三全）",
                "category": "伝統銘菓",
                "description": "ふんわりカステラ生地の中にまろやかなカスタードクリームをたっぷり満たした仙台銘菓。"
        },
        {
                "name": "極上笹かまぼこ（阿部蒲鉾店）",
                "category": "名産練り物",
                "description": "上質な白身魚の旨味をプリッとした食感と香ばしい焼き目の中に閉じ込めた名物。"
        },
        {
                "name": "陣中 仙台牛タン仙台煮・牛タンオイル漬け",
                "category": "お取り寄せグルメ",
                "description": "じっくり煮込んだ仙台牛タンの旨味が凝縮。ご飯のお供や酒の肴に最高なお土産。"
        }
],
    sakes: [
        {
                "name": "伯楽星（はくらくせい）特別純米",
                "brewery": "新澤醸造店（大崎市）",
                "type": "究極の食中酒",
                "description": "「究極の食中酒」をコンセプトに醸される銘柄。料理の邪魔をせず引き立たせる圧倒的キレ。"
        },
        {
                "name": "浦霞（うらかすみ）純米辛口",
                "brewery": "佐浦（塩竈市）",
                "type": "淡麗辛口",
                "description": "塩竈の歴史蔵。ほのかな米の旨味とすっきり冴え渡る切れ味が特徴の全国的人気酒。"
        },
        {
                "name": "一ノ蔵（いちのくら）無鑑査本醸造 超辛口",
                "brewery": "一ノ蔵（大崎市）",
                "type": "超辛口",
                "description": "伝統の手造り蔵。凛とした辛口の中にすっきりとした飲みやすさがあり毎晩の晩酌に最高。"
        }
]
  },
  {
    slug: "akita",
    famousSpots: [
        {
                "name": "乳頭温泉郷",
                "description": "十和田八幡平国立公園のブナ原生林に点在する7つの秘湯温泉郷。独自のお湯と茅葺き屋根の木造旅籠が醸し出すノスタルジーは、全国の温泉ファン憧れの聖地です。"
        },
        {
                "name": "角館の武家屋敷通り",
                "description": "「みちのくの小京都」と称される歴史情緒あふれる城下町。黒板塀が続く静かな通りと、春には塀越しに垂れ下がる垂れ桜、秋には紅葉のコントラストが実に映えます。"
        },
        {
                "name": "田沢湖",
                "description": "日本一の水深（423.4m）を誇る円形の淡水湖。水深ゆえの深い瑠璃色の水面と、金色の辰子姫像が神秘的な美しさを漂わせています。"
        },
        {
                "name": "男鹿半島・入道崎",
                "description": "日本海の絶壁と緑の芝生がコントラストを成す男鹿半島の最北端。北緯40度線上に位置し、白黒ラインの入道崎灯台から眺める夕日は日本の灯台50選に選ばれています。"
        }
],
    name: "秋田県",
    region: "東北",
    highlights: ["乳頭温泉郷", "角館の武家屋敷通り", "田沢湖", "乳頭温泉郷・名湯ステイ"],
    gourmet: ["本場きりたんぽ鍋", "比内地鶏の親子丼", "佐藤養助の稲庭うどん", "男鹿の石焼料理・ハタハタ"],
    description: "乳頭温泉郷や角館の武家屋敷通りなどの王道観光名所から、本場きりたんぽ鍋・比内地鶏の親子丼などの名物ご当地グルメ、乳頭温泉郷・玉川・男鹿・田沢湖・十和田大湯温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ秋田県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/176789/176789.jpg",
    subAreas: [
      {
        areaName: "秋田・角館・乳頭温泉",
        slug: "akita-kakunodate",
        description: "秋田・角館・乳頭温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "秋田・角館・乳頭温泉の歴史・伝統名所散策", description: "秋田・角館・乳頭温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "秋田・角館・乳頭温泉の絶景・ビュースポット", description: "秋田・角館・乳頭温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["本場きりたんぽ鍋", "比内地鶏の親子丼", "佐藤養助の稲庭うどん", "男鹿の石焼料理・ハタハタ"],
        keywords: ["秋田県", "秋田・角館・乳頭温泉"],
        subAreaHotels: [
            {
                        "hotelName": "秋の宮温泉郷　湯けむりの宿　稲住温泉（共立リゾート）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176789/176789.jpg",
                        "price": 28710,
                        "rating": 4.67,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176789%2F176789.html"
            },
            {
                        "hotelName": "後生掛温泉",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38467/38467.jpg",
                        "price": 18900,
                        "rating": 4.66,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38467%2F38467.html"
            },
            {
                        "hotelName": "駒ヶ岳温泉",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/79394/79394.jpg",
                        "price": 11000,
                        "rating": 4.65,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79394%2F79394.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "秋田県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "秋田県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "秋田県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "秋田県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "秋田県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "秋田県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "秋田県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "秋田県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "秋田県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "秋田県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "秋田県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "秋田県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "秋田県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "秋田県 至高の純米大吟醸",
                "brewery": "秋田県名門蔵元",
                "type": "純米大吟醸",
                "description": "秋田県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "秋田県 伝統伝承の特別純米",
                "brewery": "秋田県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "秋田県 蔵元直伝の生原酒",
                "brewery": "秋田県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "yamagata",
    famousSpots: [
        {
                "name": "宝珠山 立石寺（山寺）",
                "description": "松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだことで名高い名刹。1015段の石段を登りきった五大堂からは、山形の大自然と里山を一望する壮大な絶景が広がります。"
        },
        {
                "name": "銀山温泉",
                "description": "銀山川の両岸に木造多層の温泉旅館が立ち並ぶ、大正ロマンあふれる温泉街。夕暮れ時にガス灯の温かな光が雪景色や大正建築を照らし出す風景は感動的です。"
        },
        {
                "name": "蔵王の樹氷",
                "description": "冬の蔵王連峰で見られる自然の芸術「アイスモンスター」。アオモリトドマツに雪と氷が吹き付けられて巨大化した樹氷群を、ロープウェイやナイターライトアップで楽しめます。"
        },
        {
                "name": "羽黒山 三重塔",
                "description": "出羽三山神社への参道杉木立の中に佇む、東北最古の国宝木造塔。樹齢数百年の巨大な老杉に囲まれた静寂な空間は、強いパワースポットとして知られています。"
        }
],
    name: "山形県",
    region: "東北",
    highlights: ["宝珠山 立石寺（山寺）", "銀山温泉", "蔵王の樹氷", "銀山・名湯ステイ"],
    gourmet: ["極上米沢牛すき焼き", "山形名物いも煮", "板そば・冷たい肉そば", "庄内浜の地魚・だだちゃ豆"],
    description: "宝珠山 立石寺（山寺）や銀山温泉などの王道観光名所から、極上米沢牛すき焼き・山形名物いも煮などの名物ご当地グルメ、銀山・蔵王・かみのやま・あつみ・天童温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ山形県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/67228/67228.jpg",
    subAreas: [
      {
        areaName: "山形・蔵王温泉・銀山温泉",
        slug: "yamagata-zao",
        description: "山形・蔵王温泉・銀山温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "山形・蔵王温泉・銀山温泉の歴史・伝統名所散策", description: "山形・蔵王温泉・銀山温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "山形・蔵王温泉・銀山温泉の絶景・ビュースポット", description: "山形・蔵王温泉・銀山温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["極上米沢牛すき焼き", "山形名物いも煮", "板そば・冷たい肉そば", "庄内浜の地魚・だだちゃ豆"],
        keywords: ["山形県", "山形・蔵王温泉・銀山温泉"],
        subAreaHotels: [
            {
                        "hotelName": "かみのやま温泉　名月荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67228/67228.jpg",
                        "price": 26400,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67228%2F67228.html"
            },
            {
                        "hotelName": "蔵王温泉　蔵王・和歌（うた）の宿　わかまつや",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/12587/12587.jpg",
                        "price": 14850,
                        "rating": 4.73,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12587%2F12587.html"
            },
            {
                        "hotelName": "肘折温泉　丸屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/109376/109376.jpg",
                        "price": 26570,
                        "rating": 4.73,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109376%2F109376.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "山形県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "山形県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "山形県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "山形県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "山形県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "山形県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "山形県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "山形県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "山形県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "山形県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "山形県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "山形県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "山形県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "山形県 至高の純米大吟醸",
                "brewery": "山形県名門蔵元",
                "type": "純米大吟醸",
                "description": "山形県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "山形県 伝統伝承の特別純米",
                "brewery": "山形県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "山形県 蔵元直伝の生原酒",
                "brewery": "山形県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "fukushima",
    famousSpots: [
        {
                "name": "大内宿",
                "description": "江戸時代の宿場町の面影をそのまま残す国の重要伝統的建造物群保存地区。茅葺き屋根の民家が街道沿いに並び、名物の「高遠そば（一本ねぎそば）」を味わえます。"
        },
        {
                "name": "鶴ヶ城（会津若松城）",
                "description": "戊辰戦争の激戦に耐え抜いた難攻不落の名城。赤瓦を纏った天守閣は日本唯一であり、内部の歴史資料館や最上階からの城下町一望が見どころです。"
        },
        {
                "name": "五色沼湖沼群（裏磐梯）",
                "description": "磐梯山の噴火によって形成された無数の神秘的な沼群。水に含まれる鉱物や気象条件により、エメラルドグリーンやコバルトブルーに色彩が変わるハイキングコースです。"
        },
        {
                "name": "猪苗代湖",
                "description": "「天鏡湖」とも称される日本第4位の面積を誇る美しい湖。雄大な磐梯山を水面に映し出し、冬には飛来するハクチョウやしぶき氷の絶景が見られます。"
        }
],
    name: "福島県",
    region: "東北",
    highlights: ["大内宿", "鶴ヶ城（会津若松城）", "五色沼湖沼群（裏磐梯）", "会津東山・名湯ステイ"],
    gourmet: ["喜多方ラーメン", "会津の馬刺し・ソースカツ丼", "輪箱飯（わっぱめし）", "常磐ものあんこう鍋"],
    description: "大内宿や鶴ヶ城（会津若松城）などの王道観光名所から、喜多方ラーメン・会津の馬刺し・ソースカツ丼などの名物ご当地グルメ、会津東山・芦ノ牧・飯坂・磐梯熱海・いわき湯本温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ福島県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/104667/104667.jpg",
    subAreas: [
      {
        areaName: "会津若松・裏磐梯・東山温泉",
        slug: "aizu-bandai",
        description: "会津若松・裏磐梯・東山温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "会津若松・裏磐梯・東山温泉の歴史・伝統名所散策", description: "会津若松・裏磐梯・東山温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "会津若松・裏磐梯・東山温泉の絶景・ビュースポット", description: "会津若松・裏磐梯・東山温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["喜多方ラーメン", "会津の馬刺し・ソースカツ丼", "輪箱飯（わっぱめし）", "常磐ものあんこう鍋"],
        keywords: ["福島県", "会津若松・裏磐梯・東山温泉"],
        subAreaHotels: [
            {
                        "hotelName": "磐梯熱海温泉　離れの隠れ宿　オーベルジュ鈴鐘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/104667/104667.jpg",
                        "price": 24200,
                        "rating": 4.92,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104667%2F104667.html"
            },
            {
                        "hotelName": "磐梯熱海温泉　離れの宿　よもぎ埜",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9687/9687.jpg",
                        "price": 31900,
                        "rating": 4.81,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9687%2F9687.html"
            },
            {
                        "hotelName": "磐梯熱海温泉　ＡＳＡＫＡＳＯ　〜五の香を感じる宿　浅香荘〜",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176762/176762.jpg",
                        "price": 20900,
                        "rating": 4.76,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176762%2F176762.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "福島県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "福島県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "福島県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "福島県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "福島県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "福島県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "福島県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "福島県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "福島県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "福島県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "福島県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "福島県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "福島県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "福島県 至高の純米大吟醸",
                "brewery": "福島県名門蔵元",
                "type": "純米大吟醸",
                "description": "福島県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "福島県 伝統伝承の特別純米",
                "brewery": "福島県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "福島県 蔵元直伝の生原酒",
                "brewery": "福島県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "ibaraki",
    famousSpots: [
        {
                "name": "国営ひたち海浜公園",
                "description": "春のネモフィラ、秋のコキアをはじめ、四季折々の広大な花畑が美しい国営公園。みはらしの丘一面が青や赤に染まる光景は世界中から絶賛される絶景です。"
        },
        {
                "name": "水戸偕楽園",
                "description": "金沢兼六園・岡山後楽園と並ぶ日本三名園の一つ。徳川斉昭公によって造園され、春には約100品種3,000本の梅が咲き誇る歴史ある回遊式庭園です。"
        },
        {
                "name": "袋田の滝",
                "description": "日本三名瀑に数えられる高さ120m・幅73mのダイナミックな4段の滝。四季ごとに全く異なる表情を見せ、冬には滝全体が凍結する「氷瀑」が見事です。"
        },
        {
                "name": "筑波山",
                "description": "「西の富士、東の筑波」と称される紫峰。男体山と女体山の2峰からなり、ケーブルカーやロープウェイで気軽に山頂へ登れ、関東平野の一望を楽しめます。"
        }
],
    name: "茨城県",
    region: "関東",
    highlights: ["国営ひたち海浜公園", "水戸偕楽園", "袋田の滝", "大洗・名湯ステイ"],
    gourmet: ["大洗の本場あんこう鍋", "A5常陸牛ステーキ", "常陸秋そば", "那珂湊の海鮮丼"],
    description: "国営ひたち海浜公園や水戸偕楽園などの王道観光名所から、大洗の本場あんこう鍋・A5常陸牛ステーキなどの名物ご当地グルメ、大洗・袋田・筑波山・五浦・ひたちなか温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ茨城県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/17752/17752.jpg",
    subAreas: [
      {
        areaName: "水戸・大洗・ひたちなか",
        slug: "mito-oarai",
        description: "水戸・大洗・ひたちなかエリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "水戸・大洗・ひたちなかの歴史・伝統名所散策", description: "水戸・大洗・ひたちなかで絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "水戸・大洗・ひたちなかの絶景・ビュースポット", description: "水戸・大洗・ひたちなかならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["大洗の本場あんこう鍋", "A5常陸牛ステーキ", "常陸秋そば", "那珂湊の海鮮丼"],
        keywords: ["茨城県", "水戸・大洗・ひたちなか"],
        subAreaHotels: [
            {
                        "hotelName": "としまや月浜の湯",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/17752/17752.jpg",
                        "price": 22000,
                        "rating": 4.47,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17752%2F17752.html"
            },
            {
                        "hotelName": "大子温泉　やみぞ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/142195/142195.jpg",
                        "price": 16500,
                        "rating": 4.4,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142195%2F142195.html"
            },
            {
                        "hotelName": "筑波山温泉　筑波山ホテル　青木屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13479/13479.jpg",
                        "price": 13310,
                        "rating": 4.3,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13479%2F13479.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "茨城県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "茨城県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "茨城県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "茨城県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "茨城県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "茨城県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "茨城県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "茨城県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "茨城県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "茨城県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "茨城県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "茨城県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "茨城県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "茨城県 至高の純米大吟醸",
                "brewery": "茨城県名門蔵元",
                "type": "純米大吟醸",
                "description": "茨城県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "茨城県 伝統伝承の特別純米",
                "brewery": "茨城県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "茨城県 蔵元直伝の生原酒",
                "brewery": "茨城県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "tochigi",
    famousSpots: [
        {
                "name": "日光東照宮",
                "description": "徳川家康公を祀る世界遺産「日光の社寺」の代表格。陽明門の豪華絢爛な彫刻や「三猿」「眠り猫」など、日本の伝統美と歴史の深さを実感できます。"
        },
        {
                "name": "華厳の滝",
                "description": "中禅寺湖の水が高さ97mの断崖を一気に落下する日本三大名瀑の一つ。観瀑エレベーターで滝つぼ近くまで下りると、水煙と爆音の圧倒的なスケールに圧倒されます。"
        },
        {
                "name": "あしかがフラワーパーク",
                "description": "樹齢150年を超える大藤棚や長さ80mの白藤のトンネルが有名な花のテーマパーク。CNN「世界のアメイジングな旅行先10選」にも選ばれた幻想的な美しさです。"
        },
        {
                "name": "那須高原",
                "description": "那須岳の裾野に広がる日本有数のロイヤルリゾート。おしゃれなカフェや美術館、温泉、アミューズメント施設が点在し、爽やかな高原ドライブに最適です。"
        }
],
    name: "栃木県",
    region: "関東",
    highlights: ["日光東照宮", "華厳の滝", "あしかがフラワーパーク", "鬼怒川・名湯ステイ"],
    gourmet: ["宇都宮餃子", "とちぎ和牛・那須和牛", "日光生ゆば懐石", "佐野ラーメン"],
    description: "日光東照宮や華厳の滝などの王道観光名所から、宇都宮餃子・とちぎ和牛・那須和牛などの名物ご当地グルメ、鬼怒川・日光湯元・那須・塩原・川治温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ栃木県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/8819/8819.jpg",
    subAreas: [
      {
        areaName: "日光・鬼怒川温泉",
        slug: "nikko-kinugawa",
        description: "日光・鬼怒川温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "日光・鬼怒川温泉の歴史・伝統名所散策", description: "日光・鬼怒川温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "日光・鬼怒川温泉の絶景・ビュースポット", description: "日光・鬼怒川温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["宇都宮餃子", "とちぎ和牛・那須和牛", "日光生ゆば懐石", "佐野ラーメン"],
        keywords: ["栃木県", "日光・鬼怒川温泉"],
        subAreaHotels: [
            {
                        "hotelName": "日光湯元温泉　ゆ宿　美や川",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8819/8819.jpg",
                        "price": 28600,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8819%2F8819.html"
            },
            {
                        "hotelName": "グランピングリゾート　ブリリアントヴィレッジ日光",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/189179/189179.jpg",
                        "price": 20100,
                        "rating": 4.91,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189179%2F189179.html"
            },
            {
                        "hotelName": "塩原温泉　割烹旅館　湯の花荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/10893/10893.jpg",
                        "price": 37400,
                        "rating": 4.85,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10893%2F10893.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "栃木県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "栃木県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "栃木県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "栃木県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "栃木県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "栃木県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "栃木県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "栃木県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "栃木県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "栃木県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "栃木県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "栃木県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "栃木県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "栃木県 至高の純米大吟醸",
                "brewery": "栃木県名門蔵元",
                "type": "純米大吟醸",
                "description": "栃木県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "栃木県 伝統伝承の特別純米",
                "brewery": "栃木県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "栃木県 蔵元直伝の生原酒",
                "brewery": "栃木県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "gunma",
    famousSpots: [
        {
                "name": "草津温泉（湯畑）",
                "description": "日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。"
        },
        {
                "name": "伊香保温泉（石段街）",
                "description": "365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。"
        },
        {
                "name": "富岡製糸場",
                "description": "明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。"
        },
        {
                "name": "吹割の滝（ふきわれのたき）",
                "description": "「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。"
        }
],
    name: "群馬県",
    region: "関東",
    highlights: ["草津温泉（湯畑）", "伊香保温泉（石段街）", "富岡製糸場", "草津・名湯ステイ"],
    gourmet: ["上州牛すき焼き", "日本三大うどん・水沢うどん", "上州名物おっきりこみ", "焼きまんじゅう"],
    description: "草津温泉（湯畑）や伊香保温泉（石段街）などの王道観光名所から、上州牛すき焼き・日本三大うどん・水沢うどんなどの名物ご当地グルメ、草津・伊香保・万座・四万・みなかみ温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ群馬県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/2497/2497.jpg",
    subAreas: [
      {
        areaName: "草津温泉・伊香保温泉",
        slug: "kusatsu-ikaho",
        description: "草津温泉・伊香保温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "草津温泉・伊香保温泉の歴史・伝統名所散策", description: "草津温泉・伊香保温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "草津温泉・伊香保温泉の絶景・ビュースポット", description: "草津温泉・伊香保温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["上州牛すき焼き", "日本三大うどん・水沢うどん", "上州名物おっきりこみ", "焼きまんじゅう"],
        keywords: ["群馬県", "草津温泉・伊香保温泉"],
        subAreaHotels: [
            {
                        "hotelName": "水上温泉　ペンション　朝ねぼう",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/2497/2497.jpg",
                        "price": 12540,
                        "rating": 4.86,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2497%2F2497.html"
            },
            {
                        "hotelName": "四万温泉　春木亭　なかざわ旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13630/13630.jpg",
                        "price": 13650,
                        "rating": 4.83,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13630%2F13630.html"
            },
            {
                        "hotelName": "草津温泉　中村屋旅館＜群馬県＞",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/31675/31675.jpg",
                        "price": 11900,
                        "rating": 4.8,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31675%2F31675.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "群馬県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "群馬県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "群馬県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "群馬県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "群馬県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "群馬県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "群馬県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "群馬県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "群馬県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "群馬県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "群馬県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "群馬県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "群馬県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "群馬県 至高の純米大吟醸",
                "brewery": "群馬県名門蔵元",
                "type": "純米大吟醸",
                "description": "群馬県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "群馬県 伝統伝承の特別純米",
                "brewery": "群馬県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "群馬県 蔵元直伝の生原酒",
                "brewery": "群馬県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "saitama",
    famousSpots: [
        {
                "name": "川越 小江戸（時の鐘）",
                "description": "蔵造りの商家が並ぶ江戸の情緒を色濃く残す街並み。町のシンボル「時の鐘」や駄菓子屋横丁、縁結びで有名な川越氷川神社など見どころが満載です。"
        },
        {
                "name": "長瀞渓谷（ラインくだり）",
                "description": "荒川の流れる美しい岩畳と新緑・紅葉の絶景が広がる国指定の名勝・天然記念物。木造の船で急流や静流を下る長瀞ラインくだりはスリルと爽快感にあふれています。"
        },
        {
                "name": "鉄道博物館（てっぱく）",
                "description": "JR東日本創立20周年事業として作られた実物車両30両以上を展示する巨大博物館。迫力のジオラマや運転シミュレータなど大人から子供まで楽しめます。"
        },
        {
                "name": "羊山公園（芝桜の丘）",
                "description": "秩父市街を一望する高台に位置し、春にはピンクや白、紫など9種類40万株以上の芝桜がデザインされた一面のパッチワーク模様を描き出します。"
        }
],
    name: "埼玉県",
    region: "関東",
    highlights: ["川越 小江戸（時の鐘）", "長瀞渓谷（ラインくだり）", "鉄道博物館（てっぱく）", "秩父・名湯ステイ"],
    gourmet: ["秩父わらじカツ丼・豚みそ丼", "小江戸川越の老舗うなぎ", "武蔵野うどん", "深谷ねぎ料理"],
    description: "川越 小江戸（時の鐘）や長瀞渓谷（ラインくだり）などの王道観光名所から、秩父わらじカツ丼・豚みそ丼・小江戸川越の老舗うなぎなどの名物ご当地グルメ、秩父・長瀞・小鹿野・和銅鉱泉・大宮温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ埼玉県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/178289/178289.jpg",
    subAreas: [
      {
        areaName: "川越・秩父・長瀞",
        slug: "kawagoe-chichibu",
        description: "川越・秩父・長瀞エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "川越・秩父・長瀞の歴史・伝統名所散策", description: "川越・秩父・長瀞で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "川越・秩父・長瀞の絶景・ビュースポット", description: "川越・秩父・長瀞ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["秩父わらじカツ丼・豚みそ丼", "小江戸川越の老舗うなぎ", "武蔵野うどん", "深谷ねぎ料理"],
        keywords: ["埼玉県", "川越・秩父・長瀞"],
        subAreaHotels: [
            {
                        "hotelName": "秩父長瀞温泉　大人の隠れ癒し宿　花湯別邸",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/178289/178289.jpg",
                        "price": 18000,
                        "rating": 4.63,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178289%2F178289.html"
            },
            {
                        "hotelName": "長瀞温泉　花のおもてなし　長生館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9485/9485.jpg",
                        "price": 11500,
                        "rating": 4.47,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9485%2F9485.html"
            },
            {
                        "hotelName": "ちちぶ温泉　はなのや",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147685/147685.jpg",
                        "price": 16500,
                        "rating": 4.38,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147685%2F147685.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "埼玉県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "埼玉県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "埼玉県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "埼玉県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "埼玉県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "埼玉県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "埼玉県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "埼玉県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "埼玉県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "埼玉県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "埼玉県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "埼玉県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "埼玉県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "埼玉県 至高の純米大吟醸",
                "brewery": "埼玉県名門蔵元",
                "type": "純米大吟醸",
                "description": "埼玉県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "埼玉県 伝統伝承の特別純米",
                "brewery": "埼玉県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "埼玉県 蔵元直伝の生原酒",
                "brewery": "埼玉県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "chiba",
    famousSpots: [
        {
                "name": "東京ディズニーリゾート",
                "description": "夢と魔法の王国「東京ディズニーランド」と冒険とイマジネーションの海「東京ディズニーシー」からなる日本最高峰のテーマパークリゾート。"
        },
        {
                "name": "鴨川シーワールド",
                "description": "太平洋をバックに繰り広げられる豪快なシャチのパフォーマンスが有名な総合海洋レジャーセンター。イルカやベルーガのショーも見応え抜群です。"
        },
        {
                "name": "成田山新勝寺",
                "description": "千年以上の日数を数える全国屈指の大本山。参道には老舗のうなぎ店や土産物屋がひしめき、正月や節分には大勢の参拝客で賑わいます。"
        },
        {
                "name": "鋸山（日本寺・地獄のぞき）",
                "description": "房総半島からの絶景が広がる山。山頂近くの断崖絶壁から突き出した「地獄のぞき」からのスリル満点の眺望や日本一の大きさを誇る石仏の大仏様が有名です。"
        }
],
    name: "千葉県",
    region: "関東",
    highlights: ["東京ディズニーリゾート", "鴨川シーワールド", "成田山新勝寺", "鴨川・名湯ステイ"],
    gourmet: ["房総伊勢海老・アワビ", "金目鯛の姿煮", "なめろう・さんが焼き", "勝浦タンタンメン"],
    description: "東京ディズニーリゾートや鴨川シーワールドなどの王道観光名所から、房総伊勢海老・アワビ・金目鯛の姿煮などの名物ご当地グルメ、鴨川・勝浦・南房総白浜・館山・養老渓谷温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ千葉県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/183493/183493.jpg",
    subAreas: [
      {
        areaName: "浦安・舞浜・南房総",
        slug: "urayasu-boso",
        description: "浦安・舞浜・南房総エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "浦安・舞浜・南房総の歴史・伝統名所散策", description: "浦安・舞浜・南房総で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "浦安・舞浜・南房総の絶景・ビュースポット", description: "浦安・舞浜・南房総ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["房総伊勢海老・アワビ", "金目鯛の姿煮", "なめろう・さんが焼き", "勝浦タンタンメン"],
        keywords: ["千葉県", "浦安・舞浜・南房総"],
        subAreaHotels: [
            {
                        "hotelName": "東京ディズニーリゾート・トイ・ストーリー（Ｒ）ホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/183493/183493.jpg",
                        "price": 12150,
                        "rating": 4.7,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183493%2F183493.html"
            },
            {
                        "hotelName": "房総鴨川温泉　是空　－ＺＥＫＵＵ－",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/16522/16522.jpg",
                        "price": 27800,
                        "rating": 4.68,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16522%2F16522.html"
            },
            {
                        "hotelName": "蓬莱屋旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40649/40649.jpg",
                        "price": 19855,
                        "rating": 4.68,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40649%2F40649.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "千葉県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "千葉県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "千葉県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "千葉県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "千葉県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "千葉県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "千葉県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "千葉県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "千葉県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "千葉県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "千葉県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "千葉県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "千葉県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "千葉県 至高の純米大吟醸",
                "brewery": "千葉県名門蔵元",
                "type": "純米大吟醸",
                "description": "千葉県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "千葉県 伝統伝承の特別純米",
                "brewery": "千葉県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "千葉県 蔵元直伝の生原酒",
                "brewery": "千葉県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "tokyo",
    famousSpots: [
        {
                "name": "浅草寺・雷門",
                "description": "都内最古の寺院であり、巨大な大提灯が吊り下げられた「雷門」が東京観光の顔。仲見世通りには名物の人形焼きや煎餅店が立ち並び江戸風情を色濃く残します。"
        },
        {
                "name": "東京タワー",
                "description": "昭和33年に開業した高さ333mの赤と白の総合電波塔。メインデッキやトップデッキからの都心のナイトビューと季節ごとのライトアップが人気です。"
        },
        {
                "name": "東京スカイツリー",
                "description": "高さ634mを誇る世界一高い自立式電波塔。地上350m・450mの展望台からは関東一円を見渡せる超パノラマ絶景が広がり、商業施設ソラマチも隣接しています。"
        },
        {
                "name": "明治神宮",
                "description": "明治天皇と昭憲皇太后をお祀りする神社。都会の真ん中にありながら約70ヘクタールの豊かな人工林に囲まれた清らかな癒やしとパワーのスポットです。"
        }
],
    name: "東京都",
    region: "関東",
    highlights: ["浅草寺・雷門", "東京タワー", "東京スカイツリー", "奥多摩・名湯ステイ"],
    gourmet: ["豊洲直送・江戸前寿司", "月島もんじゃ焼き", "浅草の老舗すき焼き・天ぷら", "深川めし・東京ラーメン"],
    description: "浅草寺・雷門や東京タワーなどの王道観光名所から、豊洲直送・江戸前寿司・月島もんじゃ焼きなどの名物ご当地グルメ、奥多摩・豊洲・有明・浅草・大森の天然温泉ホテルの人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ東京都の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/183390/183390.jpg",
    subAreas: [
      {
        areaName: "新宿・銀座・東京駅",
        slug: "shinjuku-ginza",
        description: "新宿・銀座・東京駅エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "新宿・銀座・東京駅の歴史・伝統名所散策", description: "新宿・銀座・東京駅で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "新宿・銀座・東京駅の絶景・ビュースポット", description: "新宿・銀座・東京駅ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["豊洲直送・江戸前寿司", "月島もんじゃ焼き", "浅草の老舗すき焼き・天ぷら", "深川めし・東京ラーメン"],
        keywords: ["東京都", "新宿・銀座・東京駅"],
        subAreaHotels: [
            {
                        "hotelName": "ラビスタ東京ベイ（共立リゾート）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/183390/183390.jpg",
                        "price": 14260,
                        "rating": 4.58,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183390%2F183390.html"
            },
            {
                        "hotelName": "兜家旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/72893/72893.jpg",
                        "price": 19800,
                        "rating": 4.47,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72893%2F72893.html"
            },
            {
                        "hotelName": "東京　奥多摩温泉　おくたま路　（２０２６年７月リニューアルオープン）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/134902/134902.jpg",
                        "price": 19950,
                        "rating": 4.42,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F134902%2F134902.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "カヤバ珈琲（台東区谷中）",
                "type": "大正ロマン古民家喫茶",
                "description": "大正5年築の町家をリノベーション。谷中のシンボルとして愛されるたまごサンドが名物。",
                "recommend": "名物たまごサンド＆ルシアン（珈琲×ココア）"
        },
        {
                "name": "名曲喫茶ライオン（渋谷区道玄坂）",
                "type": "昭和レトロ昭和喫茶",
                "description": "昭和元年に創業。立体音響の大型スピーカーからクラシック音楽が流れる静寂の老舗。",
                "recommend": "ライオンブレンドコーヒー"
        },
        {
                "name": "銀座 トリコロール 本店（中央区銀座）",
                "type": "銀座老舗喫茶サロン",
                "description": "昭和6年創業。赤レンガの外観と回転扉が優雅。目の前で淹れてくれるアイスカフェオレ。",
                "recommend": "手作りアップルパイ＆アイスカフェオレ"
        }
],
    souvenirs: [
        {
                "name": "東京ばな奈「見ぃつけたっ」（グレープストーン）",
                "category": "人気銘菓",
                "description": "しっとりスポンジケーキの中にバナナカスタードクリームがたっぷり詰まった東京お土産定番。"
        },
        {
                "name": "資生堂パーラー 花椿ビスケット",
                "category": "銀座伝統洋菓子",
                "description": "昭和初期から変わらぬ素朴で優しい味わい。レトロ可愛い缶に入った銀座の上品手土産。"
        },
        {
                "name": "東京たまご ごまたまご（銀のぶどう）",
                "category": "モダン銘菓",
                "description": "黒ごまペーストと黒ごま餡をホワイトチョコレートでコーティングしたコロンと可愛い銘菓。"
        }
],
    sakes: [
        {
                "name": "澤乃井（さわのい）純米吟醸 蒼天",
                "brewery": "小澤酒造（青梅市）",
                "type": "奥多摩名醸酒",
                "description": "奥多摩の御岳渓谷の名水で仕込む。豊かな香りと澄み切った味が特徴の東京代表日本酒。"
        },
        {
                "name": "屋守（おくのかみ）純米無濾過生原酒",
                "brewery": "豊島屋酒造（東村山市）",
                "type": "ジューシー芳醇",
                "description": "都内の隠れた名蔵。メロンのような芳醇な甘みとみずみずしいジューシーさが全国のファンを魅了。"
        },
        {
                "name": "江戸開城（えどかいじょう）All Tokyo",
                "brewery": "東京港醸造（港区芝）",
                "type": "都市型マイクロブルワリー",
                "description": "港区芝のビル内で仕込まれる完全東京産日本酒。モダンでクリアな新感覚の味わい。"
        }
]
  },
  {
    slug: "kanagawa",
    famousSpots: [
        {
                "name": "横浜みなとみらい21",
                "description": "ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。"
        },
        {
                "name": "鎌倉大仏（高徳院）",
                "description": "高さ約11.3mを誇る鎌倉のシンボル的な国宝銅造阿弥陀如来坐像。四季折々の花々や歴史ある古刹巡り、小町通りの食べ歩きとともに鎌倉散策の定番です。"
        },
        {
                "name": "箱根 芦ノ湖・大涌谷",
                "description": "富士山を望む箱根海賊船クルーズが人気の芦ノ湖と、現在も硫黄煙が噴き出す火山地帯・大涌谷。名物の「黒たまご」を食べると寿命が延びると伝えられます。"
        },
        {
                "name": "江の島",
                "description": "湘南海岸に浮かぶ美しい島。江島神社への参道散策やシーキャンドル（展望灯台）からの太平洋の絶景、新鮮な生しらす丼など魅力が詰まっています。"
        }
],
    name: "神奈川県",
    region: "関東",
    highlights: ["横浜みなとみらい21", "鎌倉大仏（高徳院）", "箱根 芦ノ湖・大涌谷", "箱根湯本・名湯ステイ"],
    gourmet: ["横浜中華街の本格点心", "三崎マグロ・湘南しらす丼", "葉山牛・足柄牛ステーキ", "箱根の自然薯そば"],
    description: "横浜みなとみらい21や鎌倉大仏（高徳院）などの王道観光名所から、横浜中華街の本格点心・三崎マグロ・湘南しらす丼などの名物ご当地グルメ、箱根湯本・強羅・仙石原・芦ノ湖・湯河原温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ神奈川県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/28275/28275.jpg",
    subAreas: [
      {
        areaName: "箱根温泉・鎌倉・横浜",
        slug: "hakone-kamakura",
        description: "箱根温泉・鎌倉・横浜エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "箱根温泉・鎌倉・横浜の歴史・伝統名所散策", description: "箱根温泉・鎌倉・横浜で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "箱根温泉・鎌倉・横浜の絶景・ビュースポット", description: "箱根温泉・鎌倉・横浜ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["横浜中華街の本格点心", "三崎マグロ・湘南しらす丼", "葉山牛・足柄牛ステーキ", "箱根の自然薯そば"],
        keywords: ["神奈川県", "箱根温泉・鎌倉・横浜"],
        subAreaHotels: [
            {
                        "hotelName": "箱根芦ノ湖温泉　和心亭　豊月",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28275/28275.jpg",
                        "price": 32300,
                        "rating": 4.91,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28275%2F28275.html"
            },
            {
                        "hotelName": "オーベルジュ　箱根フォンテーヌブロー仙石亭",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/49387/49387.jpg",
                        "price": 19800,
                        "rating": 4.85,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49387%2F49387.html"
            },
            {
                        "hotelName": "湯河原温泉　島崎藤村ゆかりの宿　伊藤屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/19405/19405.jpg",
                        "price": 24750,
                        "rating": 4.81,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19405%2F19405.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "神奈川県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "神奈川県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "神奈川県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "神奈川県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "神奈川県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "神奈川県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "神奈川県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "神奈川県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "神奈川県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "神奈川県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "神奈川県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "神奈川県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "神奈川県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "神奈川県 至高の純米大吟醸",
                "brewery": "神奈川県名門蔵元",
                "type": "純米大吟醸",
                "description": "神奈川県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "神奈川県 伝統伝承の特別純米",
                "brewery": "神奈川県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "神奈川県 蔵元直伝の生原酒",
                "brewery": "神奈川県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "niigata",
    famousSpots: [
        {
                "name": "清津峡渓谷トンネル（Tunnel of Light）",
                "description": "日本三大峡谷の一つ・清津峡の絶景を楽しめるアートトンネル。終点のパノラマステーションでは水鏡に渓谷のダイナミックな景観が映り込む映えスポットです。"
        },
        {
                "name": "佐渡金山",
                "description": "江戸時代から平成まで400年にわたって採掘が続いた日本最大の金銀山。手掘りの坑道跡や巨大な金山遺構「北沢浮遊選鉱場」のノスタルジーが感動的です。"
        },
        {
                "name": "苗場山・越後湯沢温泉",
                "description": "四季を通じてアウトドアやリゾートが楽しめる一大リゾート地。冬は上質なパウダースノーのスキー場、秋はドラゴンドラからの日本一長い紅葉空中散歩が自慢です。"
        },
        {
                "name": "萬代橋（ばんだいばし）",
                "description": "信濃川にかかる6連アーチが美しい新潟市のシンボルであり国指定重要文化財。重厚な石造りの橋脚と美しい川辺の遊歩道が市民や観光客に親しまれています。"
        }
],
    name: "新潟県",
    region: "甲信越・北陸",
    highlights: ["清津峡渓谷トンネル（Tunnel of Light）", "佐渡金山", "苗場山・越後湯沢温泉", "越後湯沢・名湯ステイ"],
    gourmet: ["日本海のノドグロ塩焼き", "越後ズワイガニ", "布海苔つなぎのへぎそば", "南魚沼産コシヒカリ釜飯"],
    description: "清津峡渓谷トンネル（Tunnel of Light）や佐渡金山などの王道観光名所から、日本海のノドグロ塩焼き・越後ズワイガニなどの名物ご当地グルメ、越後湯沢・月岡・瀬波・赤倉・弥彦温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ新潟県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/31845/31845.jpg",
    subAreas: [
      {
        areaName: "越後湯沢・苗場・佐渡",
        slug: "echigo-yuzawa",
        description: "越後湯沢・苗場・佐渡エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "越後湯沢・苗場・佐渡の歴史・伝統名所散策", description: "越後湯沢・苗場・佐渡で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "越後湯沢・苗場・佐渡の絶景・ビュースポット", description: "越後湯沢・苗場・佐渡ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["日本海のノドグロ塩焼き", "越後ズワイガニ", "布海苔つなぎのへぎそば", "南魚沼産コシヒカリ釜飯"],
        keywords: ["新潟県", "越後湯沢・苗場・佐渡"],
        subAreaHotels: [
            {
                        "hotelName": "赤倉温泉　ホテル太閤",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/31845/31845.jpg",
                        "price": 16300,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31845%2F31845.html"
            },
            {
                        "hotelName": "岩室温泉　著莪の里　ゆめや",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38795/38795.jpg",
                        "price": 33649,
                        "rating": 4.86,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38795%2F38795.html"
            },
            {
                        "hotelName": "赤倉温泉　赤倉観光ホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/32250/32250.jpg",
                        "price": 38500,
                        "rating": 4.79,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32250%2F32250.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "新潟県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "新潟県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "新潟県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "新潟県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "新潟県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "新潟県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "新潟県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "新潟県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "新潟県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "新潟県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "新潟県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "新潟県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "新潟県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "新潟県 至高の純米大吟醸",
                "brewery": "新潟県名門蔵元",
                "type": "純米大吟醸",
                "description": "新潟県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "新潟県 伝統伝承の特別純米",
                "brewery": "新潟県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "新潟県 蔵元直伝の生原酒",
                "brewery": "新潟県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "toyama",
    famousSpots: [
        {
                "name": "立山黒部アルペンルート（雪の大谷）",
                "description": "標高3,000m級の立山連峰を貫く世界有数の山岳観光ルート。春には積雪を吹き破って開通する高さ20mに迫る巨大な「雪の大谷」の壁の中を歩けます。"
        },
        {
                "name": "黒部ダム",
                "description": "高さ186mを誇る日本一のアーチ式コンクリートダム。毎秒10トン以上の水が激しく吹き出す毎夏の観光放水は息をのむ大迫力です。"
        },
        {
                "name": "雨晴海岸（あまはらしかいがん）",
                "description": "富山湾越しに標高3,000m級の立山連峰を望む奇跡の絶景スポット。女岩と冠雪した立山連峰のシルエットは世界でも類を見ない美しさです。"
        },
        {
                "name": "五箇山 合掌造り集落",
                "description": "世界文化遺産に登録されている相倉・菅沼の合掌造り集落。急傾斜の茅葺き屋根と昔ながらの日本の原風景が山深い静寂の中にひっそりと息づいています。"
        }
],
    name: "富山県",
    region: "甲信越・北陸",
    highlights: ["立山黒部アルペンルート（雪の大谷）", "黒部ダム", "雨晴海岸（あまはらしかいがん）", "宇奈月・名湯ステイ"],
    gourmet: ["氷見の寒ブリしゃぶしゃぶ", "富山湾の宝石・白えび料理", "ホタルイカ沖漬け・釜揚げ", "ますのすし・富山ブラック"],
    description: "立山黒部アルペンルート（雪の大谷）や黒部ダムなどの王道観光名所から、氷見の寒ブリしゃぶしゃぶ・富山湾の宝石・白えび料理などの名物ご当地グルメ、宇奈月・氷見・庄川・春日・立山山麓温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ富山県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/39383/39383.jpg",
    subAreas: [
      {
        areaName: "富山・立山黒部・宇奈月温泉",
        slug: "toyama-unazuki",
        description: "富山・立山黒部・宇奈月温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "富山・立山黒部・宇奈月温泉の歴史・伝統名所散策", description: "富山・立山黒部・宇奈月温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "富山・立山黒部・宇奈月温泉の絶景・ビュースポット", description: "富山・立山黒部・宇奈月温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["氷見の寒ブリしゃぶしゃぶ", "富山湾の宝石・白えび料理", "ホタルイカ沖漬け・釜揚げ", "ますのすし・富山ブラック"],
        keywords: ["富山県", "富山・立山黒部・宇奈月温泉"],
        subAreaHotels: [
            {
                        "hotelName": "人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/39383/39383.jpg",
                        "price": 22300,
                        "rating": 4.7,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39383%2F39383.html"
            },
            {
                        "hotelName": "宇奈月温泉　延楽",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/10719/10719.jpg",
                        "price": 31900,
                        "rating": 4.56,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10719%2F10719.html"
            },
            {
                        "hotelName": "ブリと氷見牛の宿　ひみ栄和温泉元湯　民宿　叶",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108620/108620.jpg",
                        "price": 15180,
                        "rating": 4.53,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108620%2F108620.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "富山県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "富山県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "富山県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "富山県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "富山県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "富山県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "富山県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "富山県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "富山県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "富山県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "富山県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "富山県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "富山県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "富山県 至高の純米大吟醸",
                "brewery": "富山県名門蔵元",
                "type": "純米大吟醸",
                "description": "富山県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "富山県 伝統伝承の特別純米",
                "brewery": "富山県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "富山県 蔵元直伝の生原酒",
                "brewery": "富山県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "ishikawa",
    famousSpots: [
        {
                "name": "兼六園",
                "description": "水戸偕楽園・岡山後楽園と並ぶ日本三名園の一つ。四季折々の庭園美が見事で、冬には雪の重みから枝を守る「雪吊り」が金沢の冬の風物詩として知られています。"
        },
        {
                "name": "金沢21世紀美術館",
                "description": "「まちに開かれた公園のような美術館」をコンセプトとした現代アートの殿堂。レアンドロ・エルリッヒの「スイミング・プール」など体感型アートが世界的人気です。"
        },
        {
                "name": "ひがし茶屋街",
                "description": "キムスコ（細い格子）と呼ばれる出格子がある美しい木造茶屋建築が並ぶ重要伝統的建造物群保存地区。金箔体験やカフェ巡りを着物姿で楽しめます。"
        },
        {
                "name": "白米千枚田（しろよねせんまいだ）",
                "description": "日本海に面した急斜面に1,004枚の小さな田んぼが重なり合う棚田の絶景。黄金色に輝く稲穂やイルミネーションイベント「あぜのきらめき」が幻想的です。"
        }
],
    name: "石川県",
    region: "甲信越・北陸",
    highlights: ["兼六園", "金沢21世紀美術館", "ひがし茶屋街", "和倉・名湯ステイ"],
    gourmet: ["加能ガニ（ズワイガニ）", "極上のどぐろ炙り", "金沢おでん・治部煮", "能登牛ステーキ"],
    description: "兼六園や金沢21世紀美術館などの王道観光名所から、加能ガニ（ズワイガニ）・極上のどぐろ炙りなどの名物ご当地グルメ、和倉・加賀山代・山中・片山津・粟津温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ石川県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124.jpg",
    subAreas: [
      {
        areaName: "金沢・ひがし茶屋街・兼六園周辺",
        slug: "higashi-chaya",
        description: "金沢駅からのアクセス抜群！兼六園・近江町市場・21世紀美術館・ひがし茶屋街など金沢観光の主要スポットが集結した大人気エリア。",
        spots: [
          { name: "兼六園（所要時間：約1〜1.5時間）", description: "日本三名園の一つ。四季折々の庭園美と雪吊りの景色が幻想的な金沢一番の観光名所。" },
          { name: "近江町市場（食べ歩き＆海鮮丼）", description: "金沢の台所。日本海の獲れたて新鮮な海鮮丼やのどぐろ、寿司、生牡蠣の食べ歩きが名物。" },
          { name: "ひがし茶屋街（徒歩散策＆和カフェ）", description: "出格子がある古い街並みが続く風情あふれる茶屋街。金箔ソフトクリームや抹茶スイーツを堪能。" },
          { name: "金沢21世紀美術館", description: "「スイミング・プール」をはじめ現代アートを体験できる、若者やカップルに大人気のスポット。" }
        ],
        gourmet: ["加能ガニ（ズワイガニ）", "極上のどぐろ炙り", "金沢おでん・治部煮", "能登牛ステーキ"],
        keywords: ["石川県", "金沢", "ひがし茶屋街", "兼六園", "近江町市場"],
        subAreaHotels: [
            {
                        "hotelName": "山中温泉　吉祥やまなか",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124.jpg",
                        "price": 16500,
                        "rating": 4.73,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67124%2F67124.html"
            },
            {
                        "hotelName": "山代温泉　たちばな四季亭",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28350/28350.jpg",
                        "price": 19245,
                        "rating": 4.71,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28350%2F28350.html"
            },
            {
                        "hotelName": "金沢湯涌温泉　百楽荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/153452/153452.jpg",
                        "price": 22066,
                        "rating": 4.7,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153452%2F153452.html"
            }
]
      }
    ],
    cafes: [
      {
        name: "茶房 素心（金沢市ひがし茶屋街）",
        type: "町家リノベーション和カフェ",
        description: "ひがし茶屋街のメイン通りに佇む風情ある和カフェ。淹れたての自家焙煎珈琲と濃厚な和スイーツが人気。",
        recommend: "自家製抹茶パフェ＆自家焙煎珈琲"
      },
      {
        name: "箔一 ひがし茶屋街店",
        type: "金箔体験＆スイーツサロン",
        description: "金沢名物「金箔ソフトクリーム」の発祥店。輝く金箔が丸ごと一滴贅沢にかかったインパクト抜群のスイーツ。",
        recommend: "金箔かがやきソフトクリーム"
      },
      {
        name: "つぼみ（金沢市21世紀美術館近く）",
        type: "老舗料亭直営 甘味処",
        description: "ミシュラン料亭「柿の木畠 浅田屋」プロデュース。吉野本葛を使用したできたての生くずきりと抹茶。",
        recommend: "名物 できたて生くずきり＆加賀棒茶"
      }
    ],
    souvenirs: [
      {
        name: "あんころ餅（圓八）",
        category: "伝統和菓子",
        description: "竹の皮に包まれた創業元禄年間の超老舗あんころ餅。竹の香りと竹皮に包まれたなめらかなこしあんが絶品。"
      },
      {
        name: "加賀棒茶（竹のまごころ・箔一/上林金沢茶舗）",
        category: "特産お茶",
        description: "茎を浅く煎り上げた金沢独特の芳ばしい香りとすっきりした甘みが特徴の棒ほうじ茶。"
      },
      {
        name: "烏骨鶏かすていら（烏鶏庵）",
        category: "高級手土産スイーツ",
        description: "希少な烏骨鶏の濃厚な卵を贅沢に使用。しっとりとした深い味わいが贈答品にも大人気。"
      }
    ],
    sakes: [
      {
        name: "黒帯（くろおび）堂々 純米",
        brewery: "株式会社福光屋（金沢市）",
        "type": "金沢老舗蔵・伝統純米",
        description: "金沢で最も古い歴史をもつ蔵元。しっかりとした米の旨味とキレがあり、金沢の海の幸やのどぐろと相性抜群。"
      },
      {
        name: "手取川（てどりがわ）ishikawa mon 純米吟醸",
        brewery: "吉田酒造店（白山市）",
        "type": "フレッシュ吟醸",
        description: "石川県産酒米「石川門」を使用。フルーティーな香りと爽やかな酸味が女性や日本酒初心者にも大人気。"
      },
      {
        name: "菊姫（きくひめ）山廃仕込 純米酒",
        brewery: "菊姫合資会社（白山市）",
        "type": "濃醇旨口・山廃仕込",
        description: "山廃仕込みのパイオニア。酸味とコクが調和した芳醇な味わいで、お燗にするとさらに旨味が引き立ちます。"
      }
    ]
  },
  {
    slug: "fukui",
    famousSpots: [
        {
                "name": "福井県立恐竜博物館",
                "description": "世界三大恐竜博物館の一つに数えられる世界最大級の恐竜専門博物館。44体もの恐竜全身骨格や迫力満点の動く実物大恐竜ロボットが展示されています。"
        },
        {
                "name": "東尋坊",
                "description": "日本海の荒波によって削られた断崖絶壁が約1km続く国の天然記念物。柱状節理という世界的に珍しい奇岩の崖の上から見下ろす波はスリル満点です。"
        },
        {
                "name": "大本山 永平寺",
                "description": "道元禅師によって開かれた曹洞宗の大本山。樹齢数百年の老杉に囲まれた静寂な境内に大小70余りの堂宇が廊下で結ばれ、厳かな修行の息吹が漂います。"
        },
        {
                "name": "三方五湖（レインボーライン）",
                "description": "淡水・半塩水・海水と水質や水深が異なる5つの湖。山頂公園へ向かうレインボーライン山頂公園からは「五色の湖」と日本海の360度パノラマを楽しめます。"
        }
],
    name: "福井県",
    region: "甲信越・北陸",
    highlights: ["福井県立恐竜博物館", "東尋坊", "大本山 永平寺", "あわら・名湯ステイ"],
    gourmet: ["皇室献上・越前ガニ", "若狭ふぐ（てっさ・てっちり）", "越前おろしそば", "福井ソースカツ丼"],
    description: "福井県立恐竜博物館や東尋坊などの王道観光名所から、皇室献上・越前ガニ・若狭ふぐ（てっさ・てっちり）などの名物ご当地グルメ、あわら・三国・越前海岸・永平寺・若狭温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ福井県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/84652/84652.jpg",
    subAreas: [
      {
        areaName: "あわら温泉・敦賀・若狭",
        slug: "awara-tsuruga",
        description: "あわら温泉・敦賀・若狭エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "あわら温泉・敦賀・若狭の歴史・伝統名所散策", description: "あわら温泉・敦賀・若狭で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "あわら温泉・敦賀・若狭の絶景・ビュースポット", description: "あわら温泉・敦賀・若狭ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["皇室献上・越前ガニ", "若狭ふぐ（てっさ・てっちり）", "越前おろしそば", "福井ソースカツ丼"],
        keywords: ["福井県", "あわら温泉・敦賀・若狭"],
        subAreaHotels: [
            {
                        "hotelName": "越前あわら温泉　つるや",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/84652/84652.jpg",
                        "price": 11000,
                        "rating": 4.86,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84652%2F84652.html"
            },
            {
                        "hotelName": "あわら温泉　光風湯圃　べにや",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28319/28319.jpg",
                        "price": 47300,
                        "rating": 4.81,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28319%2F28319.html"
            },
            {
                        "hotelName": "天然温泉　岡三屋　彩かさね",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/128282/128282.jpg",
                        "price": 17500,
                        "rating": 4.79,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128282%2F128282.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "福井県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "福井県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "福井県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "福井県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "福井県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "福井県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "福井県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "福井県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "福井県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "福井県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "福井県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "福井県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "福井県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "福井県 至高の純米大吟醸",
                "brewery": "福井県名門蔵元",
                "type": "純米大吟醸",
                "description": "福井県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "福井県 伝統伝承の特別純米",
                "brewery": "福井県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "福井県 蔵元直伝の生原酒",
                "brewery": "福井県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "yamanashi",
    famousSpots: [
        {
                "name": "富士山（吉田ルート/五合目）",
                "description": "日本の最高峰であり世界文化遺産の象徴。富士スバルラインで行く五合目は観光施設が充実し、眼下に雲海を望む圧巻のスタート地点です。"
        },
        {
                "name": "新倉山浅間公園（忠霊塔）",
                "description": "五重塔（忠霊塔）越しに雄大な富士山と満開の桜を一望できる、世界中の観光客が熱望する「これぞ日本」という究極のアジアンビジュアルスポット。"
        },
        {
                "name": "富士五湖（河口湖）",
                "description": "富士山の北麓に位置する静かな湖畔リゾート。四季折々の富士山が水面に映る「逆さ富士」や、大石公園のコキア・ラベンダー越しのアングルが人気です。"
        },
        {
                "name": "勝沼ぶどうの丘",
                "description": "日本有数のワイン産地・勝沼の高台に立つ総合ワインリゾート。タパスとともに100種類以上の甲州ワインを試飲できる地下ワインカーヴが魅力です。"
        }
],
    name: "山梨県",
    region: "甲信越・北陸",
    highlights: ["富士山（吉田ルート/五合目）", "新倉山浅間公園（忠霊塔）", "富士五湖（河口湖）", "河口湖・名湯ステイ"],
    gourmet: ["甲州牛・甲州ワインビーフ", "具だくさん黄金ほうとう", "鳥もつ煮・富士桜ポーク", "甲州ワイン＆旬のぶどう・桃"],
    description: "富士山（吉田ルート/五合目）や新倉山浅間公園（忠霊塔）などの王道観光名所から、甲州牛・甲州ワインビーフ・具だくさん黄金ほうとうなどの名物ご当地グルメ、河口湖・富士五湖・石和・下部・信玄の湯湯村温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ山梨県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/70790/70790.jpg",
    subAreas: [
      {
        areaName: "富士五湖・河口湖・石和温泉",
        slug: "fujigoko-isawa",
        description: "富士五湖・河口湖・石和温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "富士五湖・河口湖・石和温泉の歴史・伝統名所散策", description: "富士五湖・河口湖・石和温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "富士五湖・河口湖・石和温泉の絶景・ビュースポット", description: "富士五湖・河口湖・石和温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["甲州牛・甲州ワインビーフ", "具だくさん黄金ほうとう", "鳥もつ煮・富士桜ポーク", "甲州ワイン＆旬のぶどう・桃"],
        keywords: ["山梨県", "富士五湖・河口湖・石和温泉"],
        subAreaHotels: [
            {
                        "hotelName": "河口湖温泉寺　露天風呂の宿　夢殿",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/70790/70790.jpg",
                        "price": 45100,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70790%2F70790.html"
            },
            {
                        "hotelName": "富士山の見える全室個室サウナ付旅館　しずく",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/31683/31683.jpg",
                        "price": 26000,
                        "rating": 4.88,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31683%2F31683.html"
            },
            {
                        "hotelName": "全室富士山ビュー　ビジョングランピングリゾート山中湖",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/184648/184648.jpg",
                        "price": 22520,
                        "rating": 4.84,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184648%2F184648.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "山梨県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "山梨県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "山梨県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "山梨県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "山梨県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "山梨県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "山梨県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "山梨県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "山梨県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "山梨県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "山梨県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "山梨県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "山梨県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "山梨県 至高の純米大吟醸",
                "brewery": "山梨県名門蔵元",
                "type": "純米大吟醸",
                "description": "山梨県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "山梨県 伝統伝承の特別純米",
                "brewery": "山梨県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "山梨県 蔵元直伝の生原酒",
                "brewery": "山梨県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "nagano",
    famousSpots: [
        {
                "name": "上高地（河童橋）",
                "description": "北アルプスの雄大な自然に抱かれた日本を代表する山岳景勝地。梓川に架かる木造の河童橋と、穂高連峰・焼岳の雄姿が織りなす清涼な風景は格別です。"
        },
        {
                "name": "国宝 松本城",
                "description": "現存する五重六階の天守の中で最古の歴史を誇る国宝名城。漆黒の壁と北アルプスの雪山を背にした佇まいから「烏城（からすじょう）」と親しまれています。"
        },
        {
                "name": "善光寺",
                "description": "「一生に一度は善光寺参り」と称される無宗派の古刹。国宝の本堂や床下の暗闇を進む「お戒壇めぐり」、長層の仲見世通りの門前街散策が見どころです。"
        },
        {
                "name": "軽井沢プリンスショッピングプラザ",
                "description": "浅間山を望む爽やかな高原リゾート地・軽井沢駅前に広がる日本最大級のアウトレットモール。豊かな自然景観の中で贅沢な買い物を楽しめます。"
        }
],
    name: "長野県",
    region: "甲信越・北陸",
    highlights: ["上高地（河童橋）", "国宝 松本城", "善光寺", "白骨・名湯ステイ"],
    gourmet: ["戸隠・信州手打ちそば", "信州プレミアム牛肉", "松本山賊焼き・信州サーモン", "焼き立ておやき・五平餅"],
    description: "上高地（河童橋）や国宝 松本城などの王道観光名所から、戸隠・信州手打ちそば・信州プレミアム牛肉などの名物ご当地グルメ、白骨・別所・渋・野沢・昼神・上諏訪・軽井沢温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ長野県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/3093/3093.jpg",
    subAreas: [
      {
        areaName: "軽井沢・上高地・白馬",
        slug: "karuizawa-kamikochi",
        description: "軽井沢・上高地・白馬エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "軽井沢・上高地・白馬の歴史・伝統名所散策", description: "軽井沢・上高地・白馬で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "軽井沢・上高地・白馬の絶景・ビュースポット", description: "軽井沢・上高地・白馬ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["戸隠・信州手打ちそば", "信州プレミアム牛肉", "松本山賊焼き・信州サーモン", "焼き立ておやき・五平餅"],
        keywords: ["長野県", "軽井沢・上高地・白馬"],
        subAreaHotels: [
            {
                        "hotelName": "白馬アルパインホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/3093/3093.jpg",
                        "price": 10290,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3093%2F3093.html"
            },
            {
                        "hotelName": "露天風呂のオーベルジュ　つつじとかえで",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/37958/37958.jpg",
                        "price": 18500,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37958%2F37958.html"
            },
            {
                        "hotelName": "蓼科温泉　１日３組のおもてなし　たてしな　麓八",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/178456/178456.jpg",
                        "price": 25000,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178456%2F178456.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "長野県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "長野県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "長野県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "長野県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "長野県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "長野県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "長野県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "長野県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "長野県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "長野県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "長野県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "長野県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "長野県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "長野県 至高の純米大吟醸",
                "brewery": "長野県名門蔵元",
                "type": "純米大吟醸",
                "description": "長野県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "長野県 伝統伝承の特別純米",
                "brewery": "長野県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "長野県 蔵元直伝の生原酒",
                "brewery": "長野県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "gifu",
    famousSpots: [
        {
                "name": "白川郷 合掌造り集落",
                "description": "豪雪地帯ならではの急勾配の茅葺き屋根が立ち並ぶ世界文化遺産の村。春の新緑、秋の紅葉、冬の幻想的な雪景色ライトアップと日本の原風景が広がります。"
        },
        {
                "name": "飛騨高山（古い町並み）",
                "description": "江戸時代の出格子と用水路が流れる景観が保存された「飛騨の小京都」。名物の飛騨牛串焼きや地酒の酒蔵巡り、朝市散策が全国の旅人に大人気です。"
        },
        {
                "name": "岐阜城・長良川鵜飼",
                "description": "金華山頂に聳え立つ織田信長公ゆかりの岐阜城と、1300年以上の歴史を誇る長良川の伝統鵜飼。篝火の明かりが川面を照らす幽玄の世界は必見です。"
        },
        {
                "name": "下呂温泉",
                "description": "草津・有馬と並ぶ日本三名泉の一つ。滑らかな肌触りの「美人の湯」で知られ、飛騨川のせせらぎを聞きながら足湯巡りや温泉街のグルメを堪能できます。"
        }
],
    name: "岐阜県",
    region: "東海",
    highlights: ["白川郷 合掌造り集落", "飛騨高山（古い町並み）", "岐阜城・長良川鵜飼", "下呂・名湯ステイ"],
    gourmet: ["A5飛騨牛の朴葉味噌焼き", "飛騨牛にぎり寿司", "清流長良川の天然鮎塩焼き", "鶏ちゃん・高山ラーメン"],
    description: "白川郷 合掌造り集落や飛騨高山（古い町並み）などの王道観光名所から、A5飛騨牛の朴葉味噌焼き・飛騨牛にぎり寿司などの名物ご当地グルメ、下呂・奥飛騨（平湯・福地）・飛騨高山・長良川温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ岐阜県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/4711/4711.jpg",
    subAreas: [
      {
        areaName: "飛騨高山・白川郷・下呂温泉",
        slug: "takayama-shirakawa",
        description: "飛騨高山・白川郷・下呂温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "飛騨高山・白川郷・下呂温泉の歴史・伝統名所散策", description: "飛騨高山・白川郷・下呂温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "飛騨高山・白川郷・下呂温泉の絶景・ビュースポット", description: "飛騨高山・白川郷・下呂温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["A5飛騨牛の朴葉味噌焼き", "飛騨牛にぎり寿司", "清流長良川の天然鮎塩焼き", "鶏ちゃん・高山ラーメン"],
        keywords: ["岐阜県", "飛騨高山・白川郷・下呂温泉"],
        subAreaHotels: [
            {
                        "hotelName": "飛騨亭　花扇",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4711/4711.jpg",
                        "price": 29700,
                        "rating": 4.86,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4711%2F4711.html"
            },
            {
                        "hotelName": "料理旅館　奥飛騨山草庵　饗家（きょうや）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/20688/20688.jpg",
                        "price": 26343,
                        "rating": 4.77,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20688%2F20688.html"
            },
            {
                        "hotelName": "槍見の湯　槍見館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/109100/109100.jpg",
                        "price": 19800,
                        "rating": 4.67,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109100%2F109100.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "岐阜県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "岐阜県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "岐阜県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "岐阜県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "岐阜県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "岐阜県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "岐阜県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "岐阜県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "岐阜県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "岐阜県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "岐阜県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "岐阜県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "岐阜県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "岐阜県 至高の純米大吟醸",
                "brewery": "岐阜県名門蔵元",
                "type": "純米大吟醸",
                "description": "岐阜県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "岐阜県 伝統伝承の特別純米",
                "brewery": "岐阜県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "岐阜県 蔵元直伝の生原酒",
                "brewery": "岐阜県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "shizuoka",
    famousSpots: [
        {
                "name": "三島スカイウォーク",
                "description": "日本一長い歩行者専用吊り橋（全長400m）。富士山と駿河湾のパノラマ絶景を空中散歩感覚で楽しめ、ジップラインなどのアクティビティも充実しています。"
        },
        {
                "name": "熱海温泉・サンビーチ",
                "description": "都心からのアクセスが抜群な海辺の温泉リゾート。地中海リゾートを彷彿とさせるサンビーチや年間を通して開催される熱海海上花火大会が人気です。"
        },
        {
                "name": "伊豆シャボテン動物公園",
                "description": "1,500種類のサボテンと世界中の動物たちが暮らすテーマパーク。冬限定の「元祖カピバラの露天風呂」の癒やされる姿は全国的に有名です。"
        },
        {
                "name": "白糸の滝",
                "description": "富士山の湧水が幅150mの湾曲した絶壁から千本の絹糸のように流れ落ちる国指定の名勝・天然記念物。清涼なマイナスイオンと富士の恵みを体感できます。"
        }
],
    name: "静岡県",
    region: "東海",
    highlights: ["三島スカイウォーク", "熱海温泉・サンビーチ", "伊豆シャボテン動物公園", "熱海・名湯ステイ"],
    gourmet: ["伊豆稲取の金目鯛煮付け", "駿河湾の生桜えび・生しらす", "浜松うなぎ蒲焼", "炭焼きレストランさわやか"],
    description: "三島スカイウォークや熱海温泉・サンビーチなどの王道観光名所から、伊豆稲取の金目鯛煮付け・駿河湾の生桜えび・生しらすなどの名物ご当地グルメ、熱海・伊東・修善寺・熱川・稲取・堂ヶ島・浜名湖温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ静岡県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/108565/108565.jpg",
    subAreas: [
      {
        areaName: "熱海・伊東・伊豆高原",
        slug: "atami-ito",
        description: "熱海・伊東・伊豆高原エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "熱海・伊東・伊豆高原の歴史・伝統名所散策", description: "熱海・伊東・伊豆高原で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "熱海・伊東・伊豆高原の絶景・ビュースポット", description: "熱海・伊東・伊豆高原ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["伊豆稲取の金目鯛煮付け", "駿河湾の生桜えび・生しらす", "浜松うなぎ蒲焼", "炭焼きレストランさわやか"],
        keywords: ["静岡県", "熱海・伊東・伊豆高原"],
        subAreaHotels: [
            {
                        "hotelName": "伊豆長岡温泉　三養荘（プリンスホテルズ＆リゾーツ）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108565/108565.jpg",
                        "price": 41953,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108565%2F108565.html"
            },
            {
                        "hotelName": "梅ヶ島温泉　おもいでの宿　湯の島館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/39312/39312.jpg",
                        "price": 25300,
                        "rating": 4.93,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39312%2F39312.html"
            },
            {
                        "hotelName": "伊豆高原温泉　客室露天風呂付リゾートホテル　コルテラルゴ伊豆高原",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38761/38761.jpg",
                        "price": 21360,
                        "rating": 4.87,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38761%2F38761.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "静岡県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "静岡県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "静岡県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "静岡県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "静岡県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "静岡県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "静岡県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "静岡県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "静岡県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "静岡県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "静岡県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "静岡県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "静岡県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "静岡県 至高の純米大吟醸",
                "brewery": "静岡県名門蔵元",
                "type": "純米大吟醸",
                "description": "静岡県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "静岡県 伝統伝承の特別純米",
                "brewery": "静岡県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "静岡県 蔵元直伝の生原酒",
                "brewery": "静岡県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "aichi",
    famousSpots: [
        {
                "name": "名古屋城",
                "description": "徳川家康公が築城した城塞。天守閣に輝く「金のしゃちほこ」と、本瓦葺きや漆塗りの極美を現代に復元した絢欄豪華な「本丸御殿」が見どころです。"
        },
        {
                "name": "国宝 犬山城",
                "description": "木曽川沿いの小高い山の上に建つ、現存する日本最古の木造天守（国宝）。最上階の廻縁からの木曽川と城下町の絶景パノラマは一見の価値があります。"
        },
        {
                "name": "熱田神宮",
                "description": "三種の神器の一つ「草薙神剣」をお祀りする伊勢神宮に次ぐ尊貴な大社。都会の喧騒を忘れさせる樹齢千年の大楠と静寂な森に強いパワーが満ちています。"
        },
        {
                "name": "オアシス21・中日ビル",
                "description": "栄の中心に佇む立体型公園「水の宇宙船」。ガラスの大屋根の上を水が流れる未来的なデザインで、夜間には栄の夜景と名古屋テレビタワーが幻想的に映えます。"
        }
],
    name: "愛知県",
    region: "東海",
    highlights: ["名古屋城", "国宝 犬山城", "熱田神宮", "南知多・名湯ステイ"],
    gourmet: ["備長炭焼き・名古屋ひつまぶし", "八丁味噌の味噌カツ・味噌煮込み", "名古屋コーチン親子丼・手羽先", "三河一色産うなぎ・知多ふぐ"],
    description: "名古屋城や国宝 犬山城などの王道観光名所から、備長炭焼き・名古屋ひつまぶし・八丁味噌の味噌カツ・味噌煮込みなどの名物ご当地グルメ、南知多・蒲郡（三谷・西浦）・犬山・湯谷・伊良湖温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ愛知県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/7144/7144.jpg",
    subAreas: [
      {
        areaName: "名古屋・知多半島",
        slug: "nagoya-chita",
        description: "名古屋・知多半島エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "名古屋・知多半島の歴史・伝統名所散策", description: "名古屋・知多半島で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "名古屋・知多半島の絶景・ビュースポット", description: "名古屋・知多半島ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["備長炭焼き・名古屋ひつまぶし", "八丁味噌の味噌カツ・味噌煮込み", "名古屋コーチン親子丼・手羽先", "三河一色産うなぎ・知多ふぐ"],
        keywords: ["愛知県", "名古屋・知多半島"],
        subAreaHotels: [
            {
                        "hotelName": "しあわせ隠れ里　猿投温泉　癒しの宿　金泉閣",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7144/7144.jpg",
                        "price": 17600,
                        "rating": 4.59,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7144%2F7144.html"
            },
            {
                        "hotelName": "伊良湖温泉　和味の宿　角上楼",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/50838/50838.jpg",
                        "price": 17050,
                        "rating": 4.46,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50838%2F50838.html"
            },
            {
                        "hotelName": "西浦温泉　旬景浪漫　銀波荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1194/1194.jpg",
                        "price": 19360,
                        "rating": 4.43,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1194%2F1194.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "愛知県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "愛知県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "愛知県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "愛知県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "愛知県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "愛知県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "愛知県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "愛知県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "愛知県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "愛知県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "愛知県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "愛知県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "愛知県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "愛知県 至高の純米大吟醸",
                "brewery": "愛知県名門蔵元",
                "type": "純米大吟醸",
                "description": "愛知県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "愛知県 伝統伝承の特別純米",
                "brewery": "愛知県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "愛知県 蔵元直伝の生原酒",
                "brewery": "愛知県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "mie",
    famousSpots: [
        {
                "name": "伊勢神宮（内宮・外宮）",
                "description": "「お伊勢さん」と親しまれる日本人の心のふるさと。五十鈴川の清流を渡り、樹齢数百年の杉木立に囲まれた内宮・正宮でお参りする体験は特別です。"
        },
        {
                "name": "ナガシマスパーランド",
                "description": "アジア最大級のアトラクション数を誇るハイブリッドテーマパーク。世界級ローラーコースター「スチールドラゴン2000」や夏の大海水プールが人気です。"
        },
        {
                "name": "おかげ横丁・おはらい町",
                "description": "伊勢神宮内宮の門前町。江戸から明治期の伊勢路の建造物を移築・再現した町並みで名物の赤福餅や伊勢うどん、松阪牛グルメの食べ歩きが楽しめます。"
        },
        {
                "name": "熊野古道（伊勢路）",
                "description": "世界遺産に登録された聖地熊野への参詣道。苔むした石畳と静かな竹林・杉林が続く馬越峠やツヅラト峠など歴史と自然に浸るトレッキングルートです。"
        }
],
    name: "三重県",
    region: "東海",
    highlights: ["伊勢神宮（内宮・外宮）", "ナガシマスパーランド", "おかげ横丁・おはらい町", "鳥羽・名湯ステイ"],
    gourmet: ["特産松阪牛のすき焼き", "伊勢志摩の活伊勢海老・あわび", "的矢かき・浦村かき", "伊勢うどん・てこね寿司"],
    description: "伊勢神宮（内宮・外宮）やナガシマスパーランドなどの王道観光名所から、特産松阪牛のすき焼き・伊勢志摩の活伊勢海老・あわびなどの名物ご当地グルメ、鳥羽・伊勢志摩・賢島・湯の山・榊原・長島温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ三重県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/5838/5838.jpg",
    subAreas: [
      {
        areaName: "伊勢神宮・志摩・鳥羽",
        slug: "ise-shima",
        description: "伊勢神宮・志摩・鳥羽エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "伊勢神宮・志摩・鳥羽の歴史・伝統名所散策", description: "伊勢神宮・志摩・鳥羽で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "伊勢神宮・志摩・鳥羽の絶景・ビュースポット", description: "伊勢神宮・志摩・鳥羽ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["特産松阪牛のすき焼き", "伊勢志摩の活伊勢海老・あわび", "的矢かき・浦村かき", "伊勢うどん・てこね寿司"],
        keywords: ["三重県", "伊勢神宮・志摩・鳥羽"],
        subAreaHotels: [
            {
                        "hotelName": "伊勢志摩　二見浦　夫婦岩前　旅館　大石屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5838/5838.jpg",
                        "price": 23000,
                        "rating": 4.7,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5838%2F5838.html"
            },
            {
                        "hotelName": "伊勢志摩　ＴＥＰＰＡＮオーベルジュ　ＣａｒｏＣａｒｏ　鳥羽浦別邸（旧　あじ蔵ＣａｒｏＣａｒｏ）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13855/13855.jpg",
                        "price": 23856,
                        "rating": 4.68,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13855%2F13855.html"
            },
            {
                        "hotelName": "鳥羽本浦温泉　サン浦島　悠季の里",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8647/8647.jpg",
                        "price": 19662,
                        "rating": 4.64,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8647%2F8647.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "三重県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "三重県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "三重県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "三重県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "三重県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "三重県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "三重県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "三重県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "三重県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "三重県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "三重県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "三重県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "三重県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "三重県 至高の純米大吟醸",
                "brewery": "三重県名門蔵元",
                "type": "純米大吟醸",
                "description": "三重県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "三重県 伝統伝承の特別純米",
                "brewery": "三重県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "三重県 蔵元直伝の生原酒",
                "brewery": "三重県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "shiga",
    famousSpots: [
        {
                "name": "琵琶湖（白髭神社・竹生島）",
                "description": "日本最大の面積と貯水量を誇る湖。湖中に朱色の鳥居が立つ「近江の厳島」白髭神社や、神の宿るパワースポット竹生島へのクルージングが人気です。"
        },
        {
                "name": "国宝 彦根城",
                "description": "琵琶湖を見下ろす高台に佇む国宝天守。当時の姿を留める堀や石垣、城下町の風情と人気キャラクター「ひこにゃん」の登場が訪れる人を笑顔にします。"
        },
        {
                "name": "比叡山 延暦寺",
                "description": "最澄によって開かれた日本仏教の母山であり世界文化遺産。比叡山の山頂に広がる東塔・西塔・横川の各エリアに千二百年の不滅の法灯が灯り続けます。"
        },
        {
                "name": "近江八幡の水郷めぐり",
                "description": "豊臣秀次が築いた城下町の堀割を手漕ぎ和舟でゆったり巡る風情ある体験。四季折々のヨシ原や白壁の土蔵が並ぶ町並みがノスタルジックです。"
        }
],
    name: "滋賀県",
    region: "近畿",
    highlights: ["琵琶湖（白髭神社・竹生島）", "国宝 彦根城", "比叡山 延暦寺", "おごと（雄琴）・名湯ステイ"],
    gourmet: ["日本三大和牛・近江牛すき焼き", "琵琶湖固有種ビワマスのお造り", "長浜名物・鴨すき（鴨鍋）", "近江ちゃんぽん・焼き鯖そうめん"],
    description: "琵琶湖（白髭神社・竹生島）や国宝 彦根城などの王道観光名所から、日本三大和牛・近江牛すき焼き・琵琶湖固有種ビワマスのお造りなどの名物ご当地グルメ、おごと（雄琴）・長浜太閤・彦根・蒼の湖邸ビワフロント温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ滋賀県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/137456/137456.jpg",
    subAreas: [
      {
        areaName: "琵琶湖・彦根・長浜",
        slug: "biwako-hikone",
        description: "琵琶湖・彦根・長浜エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "琵琶湖・彦根・長浜の歴史・伝統名所散策", description: "琵琶湖・彦根・長浜で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "琵琶湖・彦根・長浜の絶景・ビュースポット", description: "琵琶湖・彦根・長浜ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["日本三大和牛・近江牛すき焼き", "琵琶湖固有種ビワマスのお造り", "長浜名物・鴨すき（鴨鍋）", "近江ちゃんぽん・焼き鯖そうめん"],
        keywords: ["滋賀県", "琵琶湖・彦根・長浜"],
        subAreaHotels: [
            {
                        "hotelName": "尾上　旅館　うをよし",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/137456/137456.jpg",
                        "price": 16000,
                        "rating": 4.8,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137456%2F137456.html"
            },
            {
                        "hotelName": "びわ湖畔　おいしい湯の宿　長浜太閤温泉　浜湖月",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13910/13910.jpg",
                        "price": 16500,
                        "rating": 4.78,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13910%2F13910.html"
            },
            {
                        "hotelName": "おごと温泉　暖灯館　きくのや",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8165/8165.jpg",
                        "price": 13282,
                        "rating": 4.68,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8165%2F8165.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "滋賀県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "滋賀県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "滋賀県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "滋賀県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "滋賀県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "滋賀県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "滋賀県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "滋賀県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "滋賀県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "滋賀県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "滋賀県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "滋賀県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "滋賀県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "滋賀県 至高の純米大吟醸",
                "brewery": "滋賀県名門蔵元",
                "type": "純米大吟醸",
                "description": "滋賀県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "滋賀県 伝統伝承の特別純米",
                "brewery": "滋賀県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "滋賀県 蔵元直伝の生原酒",
                "brewery": "滋賀県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "kyoto",
    famousSpots: [
        {
                "name": "清水寺",
                "description": "「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。"
        },
        {
                "name": "金閣寺（鹿苑寺）",
                "description": "鏡湖池に黄金の輝きを映し出す室町文化の傑作。層ごとに建築様式が異なる三層構造の金閣と繊細に手入れされた庭園美が世界中の人々を魅了します。"
        },
        {
                "name": "伏見稲荷大社",
                "description": "全国に約3万社ある稲荷神社の総本宮。朱塗りの鳥居がどこまでも続く「千本鳥居」は幻想的な雰囲気に満ち、トリップアドバイザー外国人に人気のスポット1位の常連です。"
        },
        {
                "name": "嵐山 竹林の小径",
                "description": "渡月橋から野宮神社を経て大河内山荘へ続く、数万本の竹が天を覆う清涼な小道。風が吹くたびに竹同士が触れ合う笹の葉の音が優しく響き渡ります。"
        },
        {
                "name": "天橋立（日本三景）",
                "description": "宮津湾を南北に隔てる約3.6kmの松林砂州。「股のぞき」をすると天に架かる橋のように見える奇跡の造形美が日本三景の一つに数えられます。"
        }
],
    name: "京都府",
    region: "近畿",
    highlights: ["清水寺", "金閣寺（鹿苑寺）", "伏見稲荷大社", "嵐山・名湯ステイ"],
    gourmet: ["四季の京懐石・川床料理", "南禅寺・嵐山の湯豆腐", "丹後ぐじ（甘鯛）・間人ガニ", "宇治抹茶パフェ・京漬物"],
    description: "清水寺や金閣寺（鹿苑寺）などの王道観光名所から、四季の京懐石・川床料理・南禅寺・嵐山の湯豆腐などの名物ご当地グルメ、嵐山・天橋立・夕日ヶ浦・湯の花・京都駅周辺の温泉宿の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ京都府の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/129556/129556.jpg",
    subAreas: [
      {
        areaName: "嵐山・宇治・天橋立",
        slug: "arashiyama-uji",
        description: "嵐山・宇治・天橋立エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "嵐山・宇治・天橋立の歴史・伝統名所散策", description: "嵐山・宇治・天橋立で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "嵐山・宇治・天橋立の絶景・ビュースポット", description: "嵐山・宇治・天橋立ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["四季の京懐石・川床料理", "南禅寺・嵐山の湯豆腐", "丹後ぐじ（甘鯛）・間人ガニ", "宇治抹茶パフェ・京漬物"],
        keywords: ["京都府", "嵐山・宇治・天橋立"],
        subAreaHotels: [
            {
                        "hotelName": "京都北白川天然ラジウム温泉　えいせん京",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/129556/129556.jpg",
                        "price": 34800,
                        "rating": 4.86,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129556%2F129556.html"
            },
            {
                        "hotelName": "夕日ヶ浦温泉　旅亭　櫂‐ＫＡＩ‐",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/151160/151160.jpg",
                        "price": 20000,
                        "rating": 4.82,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151160%2F151160.html"
            },
            {
                        "hotelName": "京都祇園　柚子屋旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/79386/79386.jpg",
                        "price": 30250,
                        "rating": 4.8,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79386%2F79386.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "スマート珈琲店（京都市中京区）",
                "type": "昭和初期創業老舗喫茶",
                "description": "昭和7年創業。自家焙煎の珈琲と、ふんわり分厚いフレンチトースト、ホットケーキが絶品。",
                "recommend": "自家製フレンチトースト＆オリジナル珈琲"
        },
        {
                "name": "鍵善良房 四条本店（京都市東山区）",
                "type": "老舗和菓子・甘味処",
                "description": "祇園の伝統和菓子店。氷水に浮かんだ透明感あふれる「くずきり」を黒蜜でいただく贅沢。",
                "recommend": "名物 くずきり（黒蜜）"
        },
        {
                "name": "カフェ・ド・ガモン / 茂庵（京都市左京区）",
                "type": "吉田山絶景森カフェ",
                "description": "吉田山の山頂に佇む大正時代の茶室をリノベーション。窓越しに京都の市街地を一望。",
                "recommend": "月替わりピタパンランチ＆抹茶シフォン"
        }
],
    souvenirs: [
        {
                "name": "夕子 生八ッ橋（井筒八ッ橋本舗）",
                "category": "伝統銘菓",
                "description": "ニッキと抹茶の柔らかな皮でもちもちのつぶあんを包んだ京都お土産の代表格。"
        },
        {
                "name": "阿闍梨餅（京菓子司 満月）",
                "category": "人気和菓子",
                "description": "もち米をベースにした独特のしっとりもちもち皮で丹波大納言小豆の餡を包んだ銘菓。"
        },
        {
                "name": "茶の菓（京都北山 マールブランシュ）",
                "category": "宇治抹茶ラングドシャ",
                "description": "厳選宇治抹茶を贅沢に使用した濃厚お濃茶ラングドシャでホワイトチョコを挟んだ絶品。"
        }
],
    sakes: [
        {
                "name": "まつもと 守破離（しゅはり）純米",
                "brewery": "松本酒造（京都市伏見区）",
                "type": "伏見伝統×モダン",
                "description": "歴史ある伏見の酒蔵。微炭酸の爽やかさと米本来の旨味が調和した最高峰食中酒。"
        },
        {
                "name": "月の桂（つきのよくら）抱腹絶倒",
                "brewery": "増田徳兵衛商店（伏見区）",
                "type": "低アルコール純米酒",
                "description": "甘酸っぱくフルーティーでフルーティーな新感覚の日本酒。スパークリングも大好評。"
        },
        {
                "name": "玉川（たまがわ）Time Machine",
                "brewery": "木下酒造（京丹後市）",
                "type": "江戸伝統仕込み",
                "description": "イギリス人杜氏フィリップ・ハーパー氏が醸す。江戸時代のレシピを再現した超濃厚旨口酒。"
        }
]
  },
  {
    slug: "osaka",
    famousSpots: [
        {
                "name": "大阪城公園（大阪城天守閣）",
                "description": "豊臣秀吉公が築城した天下の名城。黄金の飾りが映える重厚な天守閣と、壮大な石垣・巨石、春には桜が咲き誇る広大な都会のオアシスです。"
        },
        {
                "name": "道頓堀・グリコサイン",
                "description": "食い倒れの街・大阪を象徴するネオン街。グリコの巨大看板前での記念撮影や、道頓堀川沿いでのたこ焼き・串カツ食べ歩きで活気にあふれています。"
        },
        {
                "name": "ユニバーサル・スタジオ・ジャパン（USJ）",
                "description": "「ウィザーディング・ワールド・オブ・ハリー・ポッター」や「スーパー・ニンテンドー・ワールド」など世界最高峰のエンターテインメントが体験できる世界級テーマパーク。"
        },
        {
                "name": "通天閣・新世界",
                "description": "なにわのシンボルタワー「通天閣」と、昭和レトロな雰囲気が色濃く残る新世界。幸運の神様「ビリケンさん」の足の裏を撫でて幸運を祈願できます。"
        }
],
    name: "大阪府",
    region: "近畿",
    highlights: ["大阪城公園（大阪城天守閣）", "道頓堀・グリコサイン", "ユニバーサル・スタジオ・ジャパン（USJ）", "犬鳴山・名湯ステイ"],
    gourmet: ["本場道頓堀のたこ焼き・お好み焼き", "新世界の揚げたて串カツ", "冬の名物てっちり（とらふぐ鍋）", "黒門市場の海鮮・かすうどん"],
    description: "大阪城公園（大阪城天守閣）や道頓堀・グリコサインなどの王道観光名所から、本場道頓堀のたこ焼き・お好み焼き・新世界の揚げたて串カツなどの名物ご当地グルメ、犬鳴山・伏尾・箕面・牛滝・大阪ベイエリア天然温泉ホテルの人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ大阪府の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/142575/142575.jpg",
    subAreas: [
      {
        areaName: "難波・梅田・ベイエリア",
        slug: "namba-umeda",
        description: "難波・梅田・ベイエリアエリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "難波・梅田・ベイエリアの歴史・伝統名所散策", description: "難波・梅田・ベイエリアで絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "難波・梅田・ベイエリアの絶景・ビュースポット", description: "難波・梅田・ベイエリアならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["本場道頓堀のたこ焼き・お好み焼き", "新世界の揚げたて串カツ", "冬の名物てっちり（とらふぐ鍋）", "黒門市場の海鮮・かすうどん"],
        keywords: ["大阪府", "難波・梅田・ベイエリア"],
        subAreaHotels: [
            {
                        "hotelName": "山辺離宮",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/142575/142575.jpg",
                        "price": 14250,
                        "rating": 4.7,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142575%2F142575.html"
            },
            {
                        "hotelName": "伏尾温泉　不死王閣",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4791/4791.jpg",
                        "price": 11550,
                        "rating": 4.3,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4791%2F4791.html"
            },
            {
                        "hotelName": "大江戸温泉物語Ｐｒｅｍｉｕｍ　箕面観光ホテル（２０２６年１０月１日リニューアルオープン）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/29844/29844.jpg",
                        "price": 16800,
                        "rating": 3.91,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29844%2F29844.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "大阪府 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "大阪府の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "大阪府特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "大阪府 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "大阪府の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "大阪府四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "大阪府 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "大阪府 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "大阪府で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "大阪府 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "大阪府産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "大阪府 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "大阪府の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "大阪府 至高の純米大吟醸",
                "brewery": "大阪府名門蔵元",
                "type": "純米大吟醸",
                "description": "大阪府の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "大阪府 伝統伝承の特別純米",
                "brewery": "大阪府歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "大阪府 蔵元直伝の生原酒",
                "brewery": "大阪府伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "hyogo",
    famousSpots: [
        {
                "name": "国宝 姫路城（白鷺城）",
                "description": "鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。"
        },
        {
                "name": "神戸ポートタワー・ハーバーランド",
                "description": "神戸港のウォーターフロントエリア。赤いつづみの形をしたポートタワーやメリケンパークの夜景、海辺のショッピングモールがロマンチックです。"
        },
        {
                "name": "城崎温泉（外湯めぐり）",
                "description": "大谷川沿いに柳並木と木造旅館が並ぶ、1300年の歴史を持つ名湯。「一の湯」「御所の湯」など7つの個性豊かな外湯を浴衣姿で巡る街歩きが魅力です。"
        },
        {
                "name": "竹田城跡（天空の城）",
                "description": "標高353mの古城山山頂に築かれた山城遺跡。秋の早朝には雲海に包まれ、まるで空に浮かんでいるかのような幻想的な景色から「天空の城」と呼ばれます。"
        }
],
    name: "兵庫県",
    region: "近畿",
    highlights: ["国宝 姫路城（白鷺城）", "神戸ポートタワー・ハーバーランド", "城崎温泉（外湯めぐり）", "有馬・名湯ステイ"],
    gourmet: ["世界に誇る神戸ビーフ鉄板焼", "城崎・但馬の松葉ガニ", "淡路島3年とらふぐ・鱧すき", "本場明石焼き（玉子焼）"],
    description: "国宝 姫路城（白鷺城）や神戸ポートタワー・ハーバーランドなどの王道観光名所から、世界に誇る神戸ビーフ鉄板焼・城崎・但馬の松葉ガニなどの名物ご当地グルメ、有馬・城崎・洲本（淡路島）・赤穂・湯村温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ兵庫県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/8509/8509.jpg",
    subAreas: [
      {
        areaName: "有馬温泉・城崎温泉・神戸",
        slug: "arima-kinosaki",
        description: "有馬温泉・城崎温泉・神戸エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "有馬温泉・城崎温泉・神戸の歴史・伝統名所散策", description: "有馬温泉・城崎温泉・神戸で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "有馬温泉・城崎温泉・神戸の絶景・ビュースポット", description: "有馬温泉・城崎温泉・神戸ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["世界に誇る神戸ビーフ鉄板焼", "城崎・但馬の松葉ガニ", "淡路島3年とらふぐ・鱧すき", "本場明石焼き（玉子焼）"],
        keywords: ["兵庫県", "有馬温泉・城崎温泉・神戸"],
        subAreaHotels: [
            {
                        "hotelName": "城崎温泉　小林屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8509/8509.jpg",
                        "price": 16500,
                        "rating": 4.91,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8509%2F8509.html"
            },
            {
                        "hotelName": "城崎温泉　料理旅館　よしはる",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/79381/79381.jpg",
                        "price": 17930,
                        "rating": 4.85,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79381%2F79381.html"
            },
            {
                        "hotelName": "有馬温泉　天地の宿　奥の細道",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67088/67088.jpg",
                        "price": 36000,
                        "rating": 4.84,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67088%2F67088.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "兵庫県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "兵庫県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "兵庫県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "兵庫県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "兵庫県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "兵庫県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "兵庫県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "兵庫県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "兵庫県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "兵庫県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "兵庫県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "兵庫県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "兵庫県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "兵庫県 至高の純米大吟醸",
                "brewery": "兵庫県名門蔵元",
                "type": "純米大吟醸",
                "description": "兵庫県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "兵庫県 伝統伝承の特別純米",
                "brewery": "兵庫県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "兵庫県 蔵元直伝の生原酒",
                "brewery": "兵庫県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "nara",
    famousSpots: [
        {
                "name": "東大寺（大仏殿）",
                "description": "聖武天皇の発願によって建てられた大和の象徴。世界最大級の木造建築である大仏殿の中に「奈良の大仏様（盧舎那仏）」が鎮座する圧巻のスケールです。"
        },
        {
                "name": "奈良公園（鹿）",
                "description": "東大寺・興福寺・春日大社を包み込む広大な風致公園。国の天然記念物である約1,300頭の野生の鹿たちが人間と共生しており「鹿せんべい」をあげられます。"
        },
        {
                "name": "法隆寺",
                "description": "推古天皇と聖徳太子によって建てられた世界最古の木造建築群であり日本初の世界遺産。五重塔や金堂、玉虫厨子など古代の歴史と文化財が凝縮されています。"
        },
        {
                "name": "吉野山（千本桜）",
                "description": "山全体が桜で覆われる日本一の桜の名所。下千本から奥千本へと標高差に従って順に咲き昇り、「一目に千本見える」と言われる圧巻の花絵巻が広がります。"
        }
],
    name: "奈良県",
    region: "近畿",
    highlights: ["東大寺（大仏殿）", "奈良公園（鹿）", "法隆寺", "十津川・名湯ステイ"],
    gourmet: ["鎌倉時代からの銘牛・大和牛", "三輪のにゅうめん・葛うどん", "吉野の柿の葉寿司", "大和伝統野菜の茶粥懐石"],
    description: "東大寺（大仏殿）や奈良公園（鹿）などの王道観光名所から、鎌倉時代からの銘牛・大和牛・三輪のにゅうめん・葛うどんなどの名物ご当地グルメ、十津川・洞川・吉野・奈良公園周辺の天然温泉宿の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ奈良県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/8661/8661.jpg",
    subAreas: [
      {
        areaName: "奈良公園・吉野山",
        slug: "nara-yoshino",
        description: "奈良公園・吉野山エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "奈良公園・吉野山の歴史・伝統名所散策", description: "奈良公園・吉野山で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "奈良公園・吉野山の絶景・ビュースポット", description: "奈良公園・吉野山ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["鎌倉時代からの銘牛・大和牛", "三輪のにゅうめん・葛うどん", "吉野の柿の葉寿司", "大和伝統野菜の茶粥懐石"],
        keywords: ["奈良県", "奈良公園・吉野山"],
        subAreaHotels: [
            {
                        "hotelName": "洞川温泉　光緑園西清",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8661/8661.jpg",
                        "price": 17900,
                        "rating": 4.79,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8661%2F8661.html"
            },
            {
                        "hotelName": "吉野温泉元湯",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/56233/56233.jpg",
                        "price": 19250,
                        "rating": 4.71,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56233%2F56233.html"
            },
            {
                        "hotelName": "洞川温泉　行者の宿　角甚",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9273/9273.jpg",
                        "price": 23000,
                        "rating": 4.7,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9273%2F9273.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "奈良県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "奈良県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "奈良県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "奈良県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "奈良県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "奈良県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "奈良県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "奈良県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "奈良県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "奈良県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "奈良県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "奈良県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "奈良県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "奈良県 至高の純米大吟醸",
                "brewery": "奈良県名門蔵元",
                "type": "純米大吟醸",
                "description": "奈良県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "奈良県 伝統伝承の特別純米",
                "brewery": "奈良県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "奈良県 蔵元直伝の生原酒",
                "brewery": "奈良県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "wakayama",
    famousSpots: [
        {
                "name": "高野山（奥の院・壇上伽藍）",
                "description": "弘法大師空海がひらいた真言密教の聖地であり世界遺産。樹齢数百年の杉木立の中に弘法大師の御廟が佇む「奥の院」は神聖な気が満ちています。"
        },
        {
                "name": "熊野那智大社・那智の滝",
                "description": "熊野三山の一つであり、日本一の落差（133m）を誇る神体「那智の滝」。朱塗りの三重塔越しに直下する滝の景観は熊野古道を象徴する一枚です。"
        },
        {
                "name": "南紀白浜・千畳敷・三段壁",
                "description": "真っ白なサラサラの砂が広がる白良浜リゾートと、太平洋の荒波が削り出した巨大な岩盤「千畳敷」「三段壁」。温泉と海の絶景を満喫できます。"
        },
        {
                "name": "和歌山城",
                "description": "紀州徳川家55万石の居城。緑豊かな虎伏山に建ち、白亜の天守閣からは和歌山市街と紀の川のゆったりとした流れを一望できます。"
        }
],
    name: "和歌山県",
    region: "近畿",
    highlights: ["高野山（奥の院・壇上伽藍）", "熊野那智大社・那智の滝", "南紀白浜・千畳敷・三段壁", "南紀白浜・名湯ステイ"],
    gourmet: ["幻の高級魚・本クエ鍋", "南紀勝浦の生マグロづくし", "熊野牛ステーキ・紀州梅どり", "和歌山中華そば・めはり寿司"],
    description: "高野山（奥の院・壇上伽藍）や熊野那智大社・那智の滝などの王道観光名所から、幻の高級魚・本クエ鍋・南紀勝浦の生マグロづくしなどの名物ご当地グルメ、南紀白浜・南紀勝浦・川湯・湯の峰・龍神温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ和歌山県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/172303/172303.jpg",
    subAreas: [
      {
        areaName: "白浜温泉・勝浦・高野山",
        slug: "shirahama-katsuura",
        description: "白浜温泉・勝浦・高野山エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "白浜温泉・勝浦・高野山の歴史・伝統名所散策", description: "白浜温泉・勝浦・高野山で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "白浜温泉・勝浦・高野山の絶景・ビュースポット", description: "白浜温泉・勝浦・高野山ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["幻の高級魚・本クエ鍋", "南紀勝浦の生マグロづくし", "熊野牛ステーキ・紀州梅どり", "和歌山中華そば・めはり寿司"],
        keywords: ["和歌山県", "白浜温泉・勝浦・高野山"],
        subAreaHotels: [
            {
                        "hotelName": "くどやま旅館　玉川亭",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/172303/172303.jpg",
                        "price": 10580,
                        "rating": 4.75,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172303%2F172303.html"
            },
            {
                        "hotelName": "わたらせ温泉　ホテルささゆり",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/18768/18768.jpg",
                        "price": 20350,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18768%2F18768.html"
            },
            {
                        "hotelName": "南紀白浜　和みの湯　花鳥風月",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/183409/183409.jpg",
                        "price": 15400,
                        "rating": 4.59,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183409%2F183409.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "和歌山県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "和歌山県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "和歌山県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "和歌山県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "和歌山県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "和歌山県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "和歌山県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "和歌山県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "和歌山県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "和歌山県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "和歌山県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "和歌山県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "和歌山県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "和歌山県 至高の純米大吟醸",
                "brewery": "和歌山県名門蔵元",
                "type": "純米大吟醸",
                "description": "和歌山県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "和歌山県 伝統伝承の特別純米",
                "brewery": "和歌山県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "和歌山県 蔵元直伝の生原酒",
                "brewery": "和歌山県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "tottori",
    famousSpots: [
        {
                "name": "鳥取砂丘",
                "description": "日本最大級の海岸砂丘。風が織りなす美風紋や馬の背からの壮大な日本海の眺望が素晴らしく、ラクダ乗り体験やパラグライダーが人気です。"
        },
        {
                "name": "水木しげるロード（境港）",
                "description": "漫画『ゲゲゲの鬼太郎』の作者・水木しげる先生の故郷。境港駅から続く約800mの通りに170体以上のブロンズ像が並び、ブロンズ妖怪探訪を楽しめます。"
        },
        {
                "name": "大山（伯耆富士）",
                "description": "中国地方最高峰（標高1,729m）を誇る名峰。その雄姿から「伯耆富士」と称され、鍵掛峠からのブナ原生林とダイナミックな南壁の紅葉が見事です。"
        },
        {
                "name": "浦富海岸（うらどみかいがん）",
                "description": "「山陰の松島」と称される透明度抜群の澄み切った海と断崖・洞門の絶景。グラスボートでの島めぐりやシーカヤックで洞窟探検を楽しめます。"
        }
],
    name: "鳥取県",
    region: "中国",
    highlights: ["鳥取砂丘", "水木しげるロード（境港）", "大山（伯耆富士）", "皆生・名湯ステイ"],
    gourmet: ["冬の味覚の王者・松葉ガニ", "鳥取和牛オレイン55", "境港の白いか（剣先イカ）姿造り", "鳥取牛骨ラーメン・猛者エビ"],
    description: "鳥取砂丘や水木しげるロード（境港）などの王道観光名所から、冬の味覚の王者・松葉ガニ・鳥取和牛オレイン55などの名物ご当地グルメ、皆生・三朝・はわい・吉岡・岩井温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ鳥取県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg",
    subAreas: [
      {
        areaName: "鳥取砂丘・皆生温泉・三朝温泉",
        slug: "sakaiminato-misasa",
        description: "鳥取砂丘・皆生温泉・三朝温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "鳥取砂丘・皆生温泉・三朝温泉の歴史・伝統名所散策", description: "鳥取砂丘・皆生温泉・三朝温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "鳥取砂丘・皆生温泉・三朝温泉の絶景・ビュースポット", description: "鳥取砂丘・皆生温泉・三朝温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["冬の味覚の王者・松葉ガニ", "鳥取和牛オレイン55", "境港の白いか（剣先イカ）姿造り", "鳥取牛骨ラーメン・猛者エビ"],
        keywords: ["鳥取県", "鳥取砂丘・皆生温泉・三朝温泉"],
        subAreaHotels: [
            {
                        "hotelName": "皆生游月",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg",
                        "price": 17600,
                        "rating": 4.74,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168732%2F168732.html"
            },
            {
                        "hotelName": "はわい温泉　望湖楼",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/14991/14991.jpg",
                        "price": 11000,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14991%2F14991.html"
            },
            {
                        "hotelName": "三朝温泉　三朝館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1939/1939.jpg",
                        "price": 13860,
                        "rating": 4.47,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1939%2F1939.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "鳥取県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "鳥取県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "鳥取県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "鳥取県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "鳥取県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "鳥取県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "鳥取県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "鳥取県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "鳥取県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "鳥取県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "鳥取県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "鳥取県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "鳥取県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "鳥取県 至高の純米大吟醸",
                "brewery": "鳥取県名門蔵元",
                "type": "純米大吟醸",
                "description": "鳥取県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "鳥取県 伝統伝承の特別純米",
                "brewery": "鳥取県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "鳥取県 蔵元直伝の生原酒",
                "brewery": "鳥取県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "shimane",
    famousSpots: [
        {
                "name": "出雲大社（いづもたいしゃ）",
                "description": "日本最古の歴史を誇る「縁結びの神様」大国主大神をお祀りする大社。神楽殿の巨大な大注連縄（長さ13.6m、重さ5.2トン）は圧巻の一言です。"
        },
        {
                "name": "国宝 松江城",
                "description": "全国に現存する12天守の一つであり国宝。黒塗りの重厚な天守（千鳥城）と、堀を屋根付き小船で巡る「堀川めぐり」で水の都・松江の風情を満喫できます。"
        },
        {
                "name": "足立美術館",
                "description": "アメリカの日本庭園専門誌で20年以上連続「日本一の庭園」に選ばれている名園。横山大観らの日本画コレクションと生の額縁絵のような庭園美が極上です。"
        },
        {
                "name": "石見銀山遺跡（大森の町並み）",
                "description": "かつて世界の銀の約3分の1を産出したとされる世界産業遺産。緑豊かな山々に残る坑道跡（間歩）や江戸時代の情緒が残る大森の町並みを自転車で散策できます。"
        },
        {
                "name": "玉造温泉",
                "description": "『出雲国風土記』に「一度浸かれば容姿端麗になり、再び浸かれば万病が治る」と記された日本最古の美肌の湯。玉湯川沿いの足湯や温泉街歩きが楽しめます。"
        }
],
    name: "島根県",
    region: "中国",
    highlights: ["出雲大社（いづもたいしゃ）", "国宝 松江城", "足立美術館", "玉造・名湯ステイ"],
    gourmet: ["日本三大そば・出雲割子そば", "宍道湖の朝獲れ大和しじみ汁", "隠岐のブランド岩ガキ・松葉ガニ", "しまね和牛・のどぐろ煮付け"],
    description: "出雲大社（いづもたいしゃ）や国宝 松江城などの王道観光名所から、日本三大そば・出雲割子そば・宍道湖の朝獲れ大和しじみ汁などの名物ご当地グルメ、玉造・松江しんじ湖・有福・温泉津・出雲大社周辺温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ島根県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/7799/7799.jpg",
    subAreas: [
      {
        areaName: "出雲大社・松江・玉造温泉",
        slug: "izumo-matsue",
        description: "出雲大社・松江・玉造温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "出雲大社・松江・玉造温泉の歴史・伝統名所散策", description: "出雲大社・松江・玉造温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "出雲大社・松江・玉造温泉の絶景・ビュースポット", description: "出雲大社・松江・玉造温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["日本三大そば・出雲割子そば", "宍道湖の朝獲れ大和しじみ汁", "隠岐のブランド岩ガキ・松葉ガニ", "しまね和牛・のどぐろ煮付け"],
        keywords: ["島根県", "出雲大社・松江・玉造温泉"],
        subAreaHotels: [
            {
                        "hotelName": "松江しんじ湖温泉　皆美館（みなみかん）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7799/7799.jpg",
                        "price": 21340,
                        "rating": 4.86,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7799%2F7799.html"
            },
            {
                        "hotelName": "さぎの湯温泉　さぎの湯荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/17912/17912.jpg",
                        "price": 23100,
                        "rating": 4.76,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17912%2F17912.html"
            },
            {
                        "hotelName": "松江しんじ湖温泉　なにわ一水",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/52116/52116.jpg",
                        "price": 13850,
                        "rating": 4.7,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52116%2F52116.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "島根県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "島根県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "島根県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "島根県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "島根県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "島根県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "島根県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "島根県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "島根県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "島根県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "島根県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "島根県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "島根県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "島根県 至高の純米大吟醸",
                "brewery": "島根県名門蔵元",
                "type": "純米大吟醸",
                "description": "島根県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "島根県 伝統伝承の特別純米",
                "brewery": "島根県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "島根県 蔵元直伝の生原酒",
                "brewery": "島根県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "okayama",
    famousSpots: [
        {
                "name": "倉敷美観地区",
                "description": "白壁の土蔵や柳並木が倉敷川沿いに続く歴史情緒あふれる美景地区。倉敷川での川舟流しや古民家カフェ、大原美術館の近代絵画鑑賞が魅力です。"
        },
        {
                "name": "岡山後楽園",
                "description": "水戸偕楽園・金沢兼六園と並ぶ日本三名園。岡山藩主・池田綱政公が造営した回遊式大名庭園で、広い芝生と池、岡山城を背にした景観が優美です。"
        },
        {
                "name": "国宝 岡山城（烏城）",
                "description": "黒い板張りの外観から「烏城（うじょう）」と呼ばれる名城。令和の大改修を経て美しく生まれ変わり、旭川越しに見る黄金のシャチホコと漆黒のコントラストが秀逸です。"
        },
        {
                "name": "瀬戸大橋（鷲羽山）",
                "description": "本州と四国を結ぶ世界最大級の二本構成橋梁。鷲羽山（わしうざん）展望台からは瀬戸内海に浮かぶ多島美と橋が織りなす壮大なパノラマを一望できます。"
        }
],
    name: "岡山県",
    region: "中国",
    highlights: ["倉敷美観地区", "岡山後楽園", "国宝 岡山城（烏城）", "湯原・名湯ステイ"],
    gourmet: ["和牛のルーツ・千屋牛ステーキ", "瀬戸内のままかり寿司・さわら刺身", "日生カキオコ（牡蠣お好み焼き）", "岡山ばら寿司・蒜山焼そば"],
    description: "倉敷美観地区や岡山後楽園などの王道観光名所から、和牛のルーツ・千屋牛ステーキ・瀬戸内のままかり寿司・さわら刺身などの名物ご当地グルメ、湯原・湯郷・奥津・鷲羽山吹上・倉敷周辺の温泉宿の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ岡山県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991.jpg",
    subAreas: [
      {
        areaName: "倉敷美観地区・後楽園",
        slug: "kurashiki-korakuen",
        description: "倉敷美観地区・後楽園エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "倉敷美観地区・後楽園の歴史・伝統名所散策", description: "倉敷美観地区・後楽園で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "倉敷美観地区・後楽園の絶景・ビュースポット", description: "倉敷美観地区・後楽園ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["和牛のルーツ・千屋牛ステーキ", "瀬戸内のままかり寿司・さわら刺身", "日生カキオコ（牡蠣お好み焼き）", "岡山ばら寿司・蒜山焼そば"],
        keywords: ["岡山県", "倉敷美観地区・後楽園"],
        subAreaHotels: [
            {
                        "hotelName": "料理旅館　鶴形",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991.jpg",
                        "price": 23050,
                        "rating": 4.9,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108991%2F108991.html"
            },
            {
                        "hotelName": "美作三湯　湯郷温泉　季譜の里",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/17492/17492.jpg",
                        "price": 14784,
                        "rating": 4.67,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17492%2F17492.html"
            },
            {
                        "hotelName": "ゆのごう温泉　ホテル湯の杜（旧：ホテル湯の杜美春閣）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67099/67099.jpg",
                        "price": 11300,
                        "rating": 4.66,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67099%2F67099.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "岡山県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "岡山県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "岡山県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "岡山県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "岡山県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "岡山県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "岡山県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "岡山県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "岡山県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "岡山県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "岡山県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "岡山県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "岡山県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "岡山県 至高の純米大吟醸",
                "brewery": "岡山県名門蔵元",
                "type": "純米大吟醸",
                "description": "岡山県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "岡山県 伝統伝承の特別純米",
                "brewery": "岡山県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "岡山県 蔵元直伝の生原酒",
                "brewery": "岡山県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "hiroshima",
    famousSpots: [
        {
                "name": "厳島神社（宮島）",
                "description": "世界文化遺産に登録された安芸の宮島。海上に浮かぶ鮮やかな朱塗りの大鳥居と社殿は潮の満ち引きで表情を変え、日本三景に相応しい神秘の美しさです。"
        },
        {
                "name": "原爆ドーム・平和記念公園",
                "description": "世界へ恒久平和を訴え続ける負の遺産・世界文化遺産。元産業奨励館の被爆した姿が今も残され、平和記念資料館には世界中から多くの人が訪れます。"
        },
        {
                "name": "尾道（千光寺公園）",
                "description": "坂と猫と映画の街として愛される港町。千光寺山の山頂からロープウェイで登れば、尾道水道と造船所、瀬戸内海の島々を一望するノスタルジックな風景が広がります。"
        },
        {
                "name": "呉・大和ミュージアム",
                "description": "かつて東洋一の軍港・造船の街として栄えた呉の歴史を伝える博物館。館内中央に鎮座する10分の1スケールの戦艦「大和」の精巧な復元モデルは圧巻です。"
        }
],
    name: "広島県",
    region: "中国",
    highlights: ["厳島神社（宮島）", "原爆ドーム・平和記念公園", "尾道（千光寺公園）", "宮島・名湯ステイ"],
    gourmet: ["広島風お好み焼き", "宮島名物・焼きあなごめし", "瀬戸内広島の極大カキ料理", "尾道ラーメン・呉海自カレー"],
    description: "厳島神社（宮島）や原爆ドーム・平和記念公園などの王道観光名所から、広島風お好み焼き・宮島名物・焼きあなごめしなどの名物ご当地グルメ、宮島・宮浜・鞆の浦・湯来・東広島の温泉宿の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ広島県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/182130/182130.jpg",
    subAreas: [
      {
        areaName: "宮島・厳島神社・尾道",
        slug: "miyajima-onomichi",
        description: "宮島・厳島神社・尾道エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "宮島・厳島神社・尾道の歴史・伝統名所散策", description: "宮島・厳島神社・尾道で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "宮島・厳島神社・尾道の絶景・ビュースポット", description: "宮島・厳島神社・尾道ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["広島風お好み焼き", "宮島名物・焼きあなごめし", "瀬戸内広島の極大カキ料理", "尾道ラーメン・呉海自カレー"],
        keywords: ["広島県", "宮島・厳島神社・尾道"],
        subAreaHotels: [
            {
                        "hotelName": "えたじま温泉　江田島荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/182130/182130.jpg",
                        "price": 17350,
                        "rating": 4.76,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182130%2F182130.html"
            },
            {
                        "hotelName": "宮島潮湯温泉　錦水館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/6271/6271.jpg",
                        "price": 29700,
                        "rating": 4.69,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6271%2F6271.html"
            },
            {
                        "hotelName": "宮島　離れの宿　ＩＢＵＫＵ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/167694/167694.jpg",
                        "price": 18150,
                        "rating": 4.69,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167694%2F167694.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "広島県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "広島県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "広島県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "広島県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "広島県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "広島県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "広島県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "広島県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "広島県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "広島県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "広島県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "広島県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "広島県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "広島県 至高の純米大吟醸",
                "brewery": "広島県名門蔵元",
                "type": "純米大吟醸",
                "description": "広島県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "広島県 伝統伝承の特別純米",
                "brewery": "広島県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "広島県 蔵元直伝の生原酒",
                "brewery": "広島県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "yamaguchi",
    famousSpots: [
        {
                "name": "角島大橋（つのしまおおはし）",
                "description": "コバルトブルーの澄み切った海を跨ぐ全長1,780mの離島架橋。まるで海の上を飛んでいるかのような爽快なドライブが楽しめるSNS大人気の絶景スポットです。"
        },
        {
                "name": "元乃隅神社（もとのすみじんじゃ）",
                "description": "断崖に向かって123基の朱塗りの鳥居が龍のように連なる絶景神社。アメリカCNN「日本の最も美しい場所31選」にも選ばれた圧倒的なビジュアルです。"
        },
        {
                "name": "秋吉台・秋芳洞（あきよしだい・あきよしどう）",
                "description": "日本最大級のカルスト台地・秋吉台と、その地下100mに広がる巨大大鍾乳洞・秋芳洞。「百枚皿」や「黄金柱」など地球の神秘を感じる大自然のアートです。"
        },
        {
                "name": "錦帯橋（きんたいきょう）",
                "description": "清流錦川に架かる木造5連のアーチ橋。釘を一本も使わずに組み上げられた独自の木造構造技術は日本三名橋に数えられ、春の桜とのコラボレーションが見事です。"
        }
],
    name: "山口県",
    region: "中国",
    highlights: ["角島大橋（つのしまおおはし）", "元乃隅神社（もとのすみじんじゃ）", "秋吉台・秋芳洞（あきよしだい・あきよしどう）", "長門湯本・名湯ステイ"],
    gourmet: ["下関の本場とらふぐ（ふくフルコース）", "川棚名物・熱々瓦そば", "萩の見蘭牛・長州どり", "仙崎イカ・岩国寿司"],
    description: "角島大橋（つのしまおおはし）や元乃隅神社（もとのすみじんじゃ）などの王道観光名所から、下関の本場とらふぐ（ふくフルコース）・川棚名物・熱々瓦そばなどの名物ご当地グルメ、長門湯本・川棚・湯田・萩・下関つくの温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ山口県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178.jpg",
    subAreas: [
      {
        areaName: "角島・萩・長門湯本温泉",
        slug: "tsunoshima-hagi",
        description: "角島・萩・長門湯本温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "角島・萩・長門湯本温泉の歴史・伝統名所散策", description: "角島・萩・長門湯本温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "角島・萩・長門湯本温泉の絶景・ビュースポット", description: "角島・萩・長門湯本温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["下関の本場とらふぐ（ふくフルコース）", "川棚名物・熱々瓦そば", "萩の見蘭牛・長州どり", "仙崎イカ・岩国寿司"],
        keywords: ["山口県", "角島・萩・長門湯本温泉"],
        subAreaHotels: [
            {
                        "hotelName": "山口県　長門湯本温泉　大谷山荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178.jpg",
                        "price": 23100,
                        "rating": 4.76,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8178%2F8178.html"
            },
            {
                        "hotelName": "下関温泉　風の海",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/165855/165855.jpg",
                        "price": 17050,
                        "rating": 4.76,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165855%2F165855.html"
            },
            {
                        "hotelName": "川棚温泉　小天狗さんろじ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/76381/76381.jpg",
                        "price": 17000,
                        "rating": 4.73,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76381%2F76381.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "山口県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "山口県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "山口県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "山口県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "山口県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "山口県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "山口県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "山口県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "山口県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "山口県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "山口県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "山口県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "山口県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "山口県 至高の純米大吟醸",
                "brewery": "山口県名門蔵元",
                "type": "純米大吟醸",
                "description": "山口県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "山口県 伝統伝承の特別純米",
                "brewery": "山口県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "山口県 蔵元直伝の生原酒",
                "brewery": "山口県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "tokushima",
    famousSpots: [
        {
                "name": "鳴門の渦潮（大鳴門橋）",
                "description": "播磨灘と紀伊水道の干満差によって発生する世界最大級の渦潮。「渦の道」の海上遊歩道ガラス床から見下ろす激しい潮流と渦巻きは大迫力です。"
        },
        {
                "name": "祖谷のかずら橋（秘境・祖谷）",
                "description": "日本三大秘境・祖谷渓谷に架かるシラクチカズラで作られたスリル満点の吊り橋。一歩踏みだすたびにギシギシと揺れ、足下の隙間から見える吉野川が爽快です。"
        },
        {
                "name": "大塚国際美術館",
                "description": "世界初の陶板名画美術館。レオナルド・ダ・ヴィンチの『最後の晩餐』やフェルメールの『真珠の耳飾りの少女』など1,000点以上の西洋名画が原寸大で完全再現されています。"
        },
        {
                "name": "眉山（びざん）",
                "description": "徳島市街の中心に位置し「眉の如く雲居に見ゆる」と万葉集にも詠まれた徳島のシンボル。ロープウェイで登る山頂からは吉野川と徳島平野を一望できます。"
        }
],
    name: "徳島県",
    region: "四国",
    highlights: ["鳴門の渦潮（大鳴門橋）", "祖谷のかずら橋（秘境・祖谷）", "大塚国際美術館", "大歩危・名湯ステイ"],
    gourmet: ["地鶏の王様・阿波尾鶏の炭火焼", "A5阿波牛のすき焼き", "鳴門鯛のしゃぶしゃぶ・鯛めし", "徳島ラーメン・祖谷そば"],
    description: "鳴門の渦潮（大鳴門橋）や祖谷のかずら橋（秘境・祖谷）などの王道観光名所から、地鶏の王様・阿波尾鶏の炭火焼・A5阿波牛のすき焼きなどの名物ご当地グルメ、大歩危・祖谷・鳴門・神山・宍喰温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ徳島県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/56704/56704.jpg",
    subAreas: [
      {
        areaName: "鳴門・祖谷渓温泉",
        slug: "naruto-iya",
        description: "鳴門・祖谷渓温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "鳴門・祖谷渓温泉の歴史・伝統名所散策", description: "鳴門・祖谷渓温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "鳴門・祖谷渓温泉の絶景・ビュースポット", description: "鳴門・祖谷渓温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["地鶏の王様・阿波尾鶏の炭火焼", "A5阿波牛のすき焼き", "鳴門鯛のしゃぶしゃぶ・鯛めし", "徳島ラーメン・祖谷そば"],
        keywords: ["徳島県", "鳴門・祖谷渓温泉"],
        subAreaHotels: [
            {
                        "hotelName": "渓谷の隠れ宿　祖谷美人",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/56704/56704.jpg",
                        "price": 17955,
                        "rating": 4.83,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56704%2F56704.html"
            },
            {
                        "hotelName": "新祖谷温泉　ホテルかずら橋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/20228/20228.jpg",
                        "price": 21450,
                        "rating": 4.68,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20228%2F20228.html"
            },
            {
                        "hotelName": "リゾートホテル　モアナコースト",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7769/7769.jpg",
                        "price": 18040,
                        "rating": 4.65,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7769%2F7769.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "徳島県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "徳島県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "徳島県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "徳島県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "徳島県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "徳島県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "徳島県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "徳島県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "徳島県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "徳島県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "徳島県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "徳島県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "徳島県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "徳島県 至高の純米大吟醸",
                "brewery": "徳島県名門蔵元",
                "type": "純米大吟醸",
                "description": "徳島県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "徳島県 伝統伝承の特別純米",
                "brewery": "徳島県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "徳島県 蔵元直伝の生原酒",
                "brewery": "徳島県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "kagawa",
    famousSpots: [
        {
                "name": "栗林公園（りつりんこうえん）",
                "description": "「一歩一景」と称される特別名勝の大名庭園。紫雲山を背景に6つの池と13の築山が配置され、手入れの行き届いた1,400本の松の緑が美しく広がります。"
        },
        {
                "name": "金刀比羅宮（こんぴらさん）",
                "description": "「さぬきのこんぴらさん」として親しまれる海の守護神。御本宮まで785段、奥社まで1,368段の石段参道を登る参拝と門前の讃岐うどん巡りが人気です。"
        },
        {
                "name": "小豆島（エンジェルロード・オリーブ公園）",
                "description": "瀬戸内海に浮かぶオリーブの島。引き潮の時にだけ海の中から現れる砂の道「エンジェルロード」や、ギリシャ風車が映えるオリーブ公園がロマンチックです。"
        },
        {
                "name": "直島（現代アートの島）",
                "description": "草間彌生氏の「赤かぼちゃ」「黄かぼちゃ」や地中美術館など、自然と現代アートが融和した世界的に有名なアートの聖地。自転車で島内散策が楽しめます。"
        }
],
    name: "香川県",
    region: "四国",
    highlights: ["栗林公園（りつりんこうえん）", "金刀比羅宮（こんぴらさん）", "小豆島（エンジェルロード・オリーブ公園）", "こんぴら（琴平）・名湯ステイ"],
    gourmet: ["本場さぬきの手打ち讃岐うどん", "小豆島オリーブ牛ステーキ", "丸亀名物・スパイシー骨付鳥", "瀬戸内のオリーブハマチ・鯛料理"],
    description: "栗林公園（りつりんこうえん）や金刀比羅宮（こんぴらさん）などの王道観光名所から、本場さぬきの手打ち讃岐うどん・小豆島オリーブ牛ステーキなどの名物ご当地グルメ、こんぴら（琴平）・小豆島・高松・塩江・庵治温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ香川県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/5900/5900.jpg",
    subAreas: [
      {
        areaName: "琴平・金刀比羅宮・小豆島",
        slug: "kotohira-shodoshima",
        description: "琴平・金刀比羅宮・小豆島エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "琴平・金刀比羅宮・小豆島の歴史・伝統名所散策", description: "琴平・金刀比羅宮・小豆島で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "琴平・金刀比羅宮・小豆島の絶景・ビュースポット", description: "琴平・金刀比羅宮・小豆島ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["本場さぬきの手打ち讃岐うどん", "小豆島オリーブ牛ステーキ", "丸亀名物・スパイシー骨付鳥", "瀬戸内のオリーブハマチ・鯛料理"],
        keywords: ["香川県", "琴平・金刀比羅宮・小豆島"],
        subAreaHotels: [
            {
                        "hotelName": "こんぴら温泉　琴平グランドホテル　桜の抄",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5900/5900.jpg",
                        "price": 10450,
                        "rating": 4.59,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5900%2F5900.html"
            },
            {
                        "hotelName": "御宿　敷島館（共立リゾート）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176626/176626.jpg",
                        "price": 13700,
                        "rating": 4.59,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176626%2F176626.html"
            },
            {
                        "hotelName": "夕凪の湯　ＨＯＴＥＬ花樹海",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/41416/41416.jpg",
                        "price": 13750,
                        "rating": 4.55,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41416%2F41416.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "香川県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "香川県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "香川県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "香川県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "香川県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "香川県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "香川県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "香川県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "香川県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "香川県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "香川県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "香川県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "香川県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "香川県 至高の純米大吟醸",
                "brewery": "香川県名門蔵元",
                "type": "純米大吟醸",
                "description": "香川県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "香川県 伝統伝承の特別純米",
                "brewery": "香川県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "香川県 蔵元直伝の生原酒",
                "brewery": "香川県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "ehime",
    famousSpots: [
        {
                "name": "道後温泉本館",
                "description": "日本最古の温泉の一つとされる道後温泉のシンボル。木造三層楼の重厚な和風建築は国指定重要文化財であり、『千と千尋の神隠し』のモデルとも言われています。"
        },
        {
                "name": "松山城",
                "description": "松山市の中心・勝山山頂に建つ現存12天守の一つ。ロープウェイやリフトで登ることができ、天守からは瀬戸内海と松山平野の360度パノラマが見渡せます。"
        },
        {
                "name": "しまなみ海道（来島海峡大橋）",
                "description": "愛媛県今治市と広島県尾道市を結ぶ海上架橋ルート。「サイクリストの聖地」として世界中から絶賛され、世界初の3連吊橋から瀬戸内海の多島美を一望できます。"
        },
        {
                "name": "佐田岬（さだみさき）",
                "description": "日本一細長い佐田岬半島。風力発電の風車が並ぶドライブコースを抜け、岬の先端の白い灯台からは豊予海峡を挟んで九州・大分県を望むダイナミックな景色です。"
        }
],
    name: "愛媛県",
    region: "四国",
    highlights: ["道後温泉本館", "松山城", "しまなみ海道（来島海峡大橋）", "道後・名湯ステイ"],
    gourmet: ["宇和島鯛めし（生卵ダレ）＆松山鯛めし", "伊予牛「絹の味」ステーキ", "宇和海じゃこ天・八幡浜ちゃんぽん", "今治焼豚玉子飯・道後ビール"],
    description: "道後温泉本館や松山城などの王道観光名所から、宇和島鯛めし（生卵ダレ）＆松山鯛めし・伊予牛「絹の味」ステーキなどの名物ご当地グルメ、道後・奥道後・鈍川・今治湯ノ浦・別子温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ愛媛県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/165194/165194.jpg",
    subAreas: [
      {
        areaName: "道後温泉・しまなみ海道",
        slug: "dogo-shimanami",
        description: "道後温泉・しまなみ海道エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "道後温泉・しまなみ海道の歴史・伝統名所散策", description: "道後温泉・しまなみ海道で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "道後温泉・しまなみ海道の絶景・ビュースポット", description: "道後温泉・しまなみ海道ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["宇和島鯛めし（生卵ダレ）＆松山鯛めし", "伊予牛「絹の味」ステーキ", "宇和海じゃこ天・八幡浜ちゃんぽん", "今治焼豚玉子飯・道後ビール"],
        keywords: ["愛媛県", "道後温泉・しまなみ海道"],
        subAreaHotels: [
            {
                        "hotelName": "道後御湯",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/165194/165194.jpg",
                        "price": 26410,
                        "rating": 4.94,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165194%2F165194.html"
            },
            {
                        "hotelName": "道後温泉　八千代",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/166206/166206.jpg",
                        "price": 23100,
                        "rating": 4.79,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166206%2F166206.html"
            },
            {
                        "hotelName": "山の手別邸葉隠れ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/184795/184795.jpg",
                        "price": 23650,
                        "rating": 4.78,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184795%2F184795.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "愛媛県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "愛媛県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "愛媛県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "愛媛県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "愛媛県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "愛媛県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "愛媛県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "愛媛県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "愛媛県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "愛媛県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "愛媛県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "愛媛県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "愛媛県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "愛媛県 至高の純米大吟醸",
                "brewery": "愛媛県名門蔵元",
                "type": "純米大吟醸",
                "description": "愛媛県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "愛媛県 伝統伝承の特別純米",
                "brewery": "愛媛県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "愛媛県 蔵元直伝の生原酒",
                "brewery": "愛媛県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "kochi",
    famousSpots: [
        {
                "name": "桂浜（坂本龍馬像）",
                "description": "土佐民謡『よさこい節』にも詠まれた月の名所。太平洋を望む高台に立つ全高13.5mの幕末の志士・坂本龍馬の銅像と青い海、弓状の砂浜が美しい景勝地です。"
        },
        {
                "name": "高知城",
                "description": "南海の名城と称され、日本で唯一天守と本丸御殿の両方が現存する極めて貴重な城郭。追手門から天守閣が一枚の写真に収まる絶好の撮影スポットです。"
        },
        {
                "name": "四万十川（沈下橋）",
                "description": "「日本最後の清流」と呼ばれる全長196kmの清流。増水時に川に沈む設計の「沈下橋」が点在し、屋形船での川下りやカヌー体験で大自然を満喫できます。"
        },
        {
                "name": "柏島（かしわじま）",
                "description": "船が宙に浮いて見えるほどの圧倒的な透明度を誇る「柏島ブルー」の海。熱帯魚やサンゴ礁が生息し、ダイビングやシュノーケリングのパラダイスです。"
        }
],
    name: "高知県",
    region: "四国",
    highlights: ["桂浜（坂本龍馬像）", "高知城", "四万十川（沈下橋）", "足摺・名湯ステイ"],
    gourmet: ["豪快な藁焼きカツオのたたき", "幻の褐毛和牛・土佐あかうし", "四万十川の天然うなぎ・川エビ", "土佐の皿鉢（さわち）料理・ウツボ"],
    description: "桂浜（坂本龍馬像）や高知城などの王道観光名所から、豪快な藁焼きカツオのたたき・幻の褐毛和牛・土佐あかうしなどの名物ご当地グルメ、足摺・三翠園（高知城下）・松葉川・馬路・よさこい温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ高知県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/13810/13810.jpg",
    subAreas: [
      {
        areaName: "桂浜・四万十川",
        slug: "katsurahama-shimanto",
        description: "桂浜・四万十川エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "桂浜・四万十川の歴史・伝統名所散策", description: "桂浜・四万十川で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "桂浜・四万十川の絶景・ビュースポット", description: "桂浜・四万十川ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["豪快な藁焼きカツオのたたき", "幻の褐毛和牛・土佐あかうし", "四万十川の天然うなぎ・川エビ", "土佐の皿鉢（さわち）料理・ウツボ"],
        keywords: ["高知県", "桂浜・四万十川"],
        subAreaHotels: [
            {
                        "hotelName": "癒しの湯宿　龍河温泉",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13810/13810.jpg",
                        "price": 14300,
                        "rating": 4.67,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13810%2F13810.html"
            },
            {
                        "hotelName": "新安並温泉　なごみ宿　安住庵",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/10838/10838.jpg",
                        "price": 15000,
                        "rating": 4.57,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10838%2F10838.html"
            },
            {
                        "hotelName": "宿毛リゾート椰子の湯（旧：国民宿舎椰子）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/153227/153227.jpg",
                        "price": 14520,
                        "rating": 4.45,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153227%2F153227.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "高知県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "高知県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "高知県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "高知県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "高知県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "高知県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "高知県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "高知県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "高知県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "高知県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "高知県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "高知県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "高知県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "高知県 至高の純米大吟醸",
                "brewery": "高知県名門蔵元",
                "type": "純米大吟醸",
                "description": "高知県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "高知県 伝統伝承の特別純米",
                "brewery": "高知県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "高知県 蔵元直伝の生原酒",
                "brewery": "高知県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "fukuoka",
    famousSpots: [
        {
                "name": "太宰府天満宮",
                "description": "学問の神様・菅原道真公をお祀りする全国天満宮の総本社。境内の「飛梅」や参道の「名物梅ヶ枝餅」、建築家・隈研吾氏デザインのスターバックスが見所です。"
        },
        {
                "name": "糸島（桜井二見ヶ浦）",
                "description": "福岡市から車で約40分のおしゃれな海岸リゾート。海中に佇む白い鳥居と夫婦岩が並ぶ「桜井二見ヶ浦」の夕日や海沿いのカフェテラスが大人気です。"
        },
        {
                "name": "門司港レトロ",
                "description": "明治から大正にかけて国際貿易港として栄えたノスタルジックな港町。木造の旧門司三井倶楽部や門司港駅舎、焼きカレーの名店が立ち並びます。"
        },
        {
                "name": "中洲の屋台街",
                "description": "那珂川沿いに夕暮れとともに赤提灯が灯る博多名物の屋台街。とんこつラーメンや焼きラーメン、一口餃子を求めて夜な夜な観光客と地元客が集います。"
        }
],
    name: "福岡県",
    region: "九州・沖縄",
    highlights: ["太宰府天満宮", "糸島（桜井二見ヶ浦）", "門司港レトロ", "原鶴・名湯ステイ"],
    gourmet: ["博多もつ鍋・博多水炊き", "長浜・博多とんこつラーメン", "玄界灘の活イカ姿造り・ごまさば", "辛子明太子・柳川うなぎせいろ蒸し"],
    description: "太宰府天満宮や糸島（桜井二見ヶ浦）などの王道観光名所から、博多もつ鍋・博多水炊き・長浜・博多とんこつラーメンなどの名物ご当地グルメ、原鶴・筑後川・二日市・脇田・門司港＆博多天然温泉宿の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ福岡県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/38630/38630.jpg",
    subAreas: [
      {
        areaName: "太宰府・糸島・柳川",
        slug: "dazaifu-itoishima",
        description: "太宰府・糸島・柳川エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "太宰府・糸島・柳川の歴史・伝統名所散策", description: "太宰府・糸島・柳川で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "太宰府・糸島・柳川の絶景・ビュースポット", description: "太宰府・糸島・柳川ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["博多もつ鍋・博多水炊き", "長浜・博多とんこつラーメン", "玄界灘の活イカ姿造り・ごまさば", "辛子明太子・柳川うなぎせいろ蒸し"],
        keywords: ["福岡県", "太宰府・糸島・柳川"],
        subAreaHotels: [
            {
                        "hotelName": "二日市温泉　大丸別荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38630/38630.jpg",
                        "price": 13348,
                        "rating": 4.62,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38630%2F38630.html"
            },
            {
                        "hotelName": "ホテルマリノアリゾート福岡",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/144978/144978.jpg",
                        "price": 16183,
                        "rating": 4.62,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144978%2F144978.html"
            },
            {
                        "hotelName": "原鶴温泉　ほどあいの宿　六峰舘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/55914/55914.jpg",
                        "price": 11000,
                        "rating": 4.54,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F55914%2F55914.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "珈琲美身（カフェ ビミ）（福岡市中央区）",
                "type": "ネルドリップ自家焙煎",
                "description": "大濠公園そば。伝説の珈琲職人が淹れる極上のネルドリップ珈琲と手作りフルーツケーキ。",
                "recommend": "ネルドリップブレンド＆フルーツケーキ"
        },
        {
                "name": "白金茶房（福岡市中央区白金）",
                "type": "パンケーキサロンカフェ",
                "description": "緑豊かな中庭と満開の書棚。職人が手焼きする美しく丸いクラシックパンケーキ。",
                "recommend": "白金茶房クラシックパンケーキ"
        },
        {
                "name": "カフェ ファソン 糸島（糸島市）",
                "type": "海絶景テラスカフェ",
                "description": "糸島の海を一望するロケーション。波の音を聞きながらいただく自家焙煎スペシャルティ珈琲。",
                "recommend": "糸島塩キャラメルラテ＆バスクチーズケーキ"
        }
],
    souvenirs: [
        {
                "name": "博多通りもん（明月堂）",
                "category": "伝統和洋銘菓",
                "description": "柔らかい白餡の中にバターとミルクのコクを練り込んだ、口の中でとろける博多名物。"
        },
        {
                "name": "めんべい（福太郎）",
                "category": "明太子せんべい",
                "description": "博多名物辛子明太子とイカ・タコの海鮮の旨味がギュッと詰まったパリパリピリ辛煎餅。"
        },
        {
                "name": "かば田 無着色昆布漬辛子明太子",
                "category": "名産グルメ",
                "description": "仕込みに北海道産昆布を贅沢に使用。旨味がじっくり染み込んだ極上の辛子明太子。"
        }
],
    sakes: [
        {
                "name": "田中六五（たなかろくじゅうご）糸島産山田錦",
                "brewery": "白糸酒造（糸島市）",
                "type": "糸島純米酒",
                "description": "糸島産山田錦を65%磨き、ハネ木搾りで丁寧に醸す。みずみずしい葡萄のような透明感。"
        },
        {
                "name": "繁桝（しげます）クラシック特別純米",
                "brewery": "高橋商店（八女市）",
                "type": "八女の伝統酒",
                "description": "八女の豊かな風土で醸す。ふくらみのある米の旨味とキレの良い後味が料理に寄り添う。"
        },
        {
                "name": "庭のうぐいす（にわのうぐいす）鶯 de voix",
                "brewery": "山口酒造場（久留米市）",
                "type": "フルーティー純米",
                "description": "筑後川の恵みで育まれた爽やかな味わい。フレッシュな酸味と米の甘みが心地よい。"
        }
]
  },
  {
    slug: "saga",
    famousSpots: [
        {
                "name": "吉野ヶ里歴史公園",
                "description": "弥生時代の日本最大の環濠集落遺跡。物見櫓や竪穴住居、巨大な墳丘墓が広大な敷地に復元され、縄文から弥生への古代のロマンを体感できます。"
        },
        {
                "name": "御船山楽園（武雄温泉）",
                "description": "武雄領主・鍋島茂義公が造営した15万坪の庭園。切り立った御船山を背に、春のツツジや秋の紅葉ライトアップ、チームラボのアート展覧会が圧巻です。"
        },
        {
                "name": "呼子の朝市・七ツ釜",
                "description": "日本三大朝市の一つ「呼子の朝市」での活気溢れる鮮魚・干物買い出しと、玄界灘の荒波が造った玄武岩の奇岩洞窟「七ツ釜」の遊覧船クルーズが楽しめます。"
        },
        {
                "name": "有田ポーセリンパーク",
                "description": "有田焼の歴史と美を伝える磁器のテーマパーク。ツヴィンガー宮殿をリアルに再現した絢欄豪華な建築と有田焼の作品展示、作陶体験が体験できます。"
        }
],
    name: "佐賀県",
    region: "九州・沖縄",
    highlights: ["吉野ヶ里歴史公園", "御船山楽園（武雄温泉）", "呼子の朝市・七ツ釜", "嬉野・名湯ステイ"],
    gourmet: ["最高峰A5ランク・佐賀牛", "呼子の活イカ造り", "有明海の竹崎カニ", "とろける嬉野温泉湯どうふ"],
    description: "吉野ヶ里歴史公園や御船山楽園（武雄温泉）などの王道観光名所から、最高峰A5ランク・佐賀牛・呼子の活イカ造りなどの名物ご当地グルメ、嬉野・武雄・古湯・たら竹崎・唐津温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ佐賀県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/184266/184266.jpg",
    subAreas: [
      {
        areaName: "嬉野温泉・武雄・唐津",
        slug: "ureseno-karatsu",
        description: "嬉野温泉・武雄・唐津エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "嬉野温泉・武雄・唐津の歴史・伝統名所散策", description: "嬉野温泉・武雄・唐津で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "嬉野温泉・武雄・唐津の絶景・ビュースポット", description: "嬉野温泉・武雄・唐津ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["最高峰A5ランク・佐賀牛", "呼子の活イカ造り", "有明海の竹崎カニ", "とろける嬉野温泉湯どうふ"],
        keywords: ["佐賀県", "嬉野温泉・武雄・唐津"],
        subAreaHotels: [
            {
                        "hotelName": "奥武雄温泉　風の森",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/184266/184266.jpg",
                        "price": 33880,
                        "rating": 4.87,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184266%2F184266.html"
            },
            {
                        "hotelName": "日本料理　水野旅館＜唐津＞",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28966/28966.jpg",
                        "price": 20350,
                        "rating": 4.86,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28966%2F28966.html"
            },
            {
                        "hotelName": "武雄温泉　懐石宿　扇屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68087/68087.jpg",
                        "price": 24800,
                        "rating": 4.78,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68087%2F68087.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "佐賀県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "佐賀県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "佐賀県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "佐賀県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "佐賀県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "佐賀県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "佐賀県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "佐賀県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "佐賀県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "佐賀県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "佐賀県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "佐賀県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "佐賀県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "佐賀県 至高の純米大吟醸",
                "brewery": "佐賀県名門蔵元",
                "type": "純米大吟醸",
                "description": "佐賀県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "佐賀県 伝統伝承の特別純米",
                "brewery": "佐賀県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "佐賀県 蔵元直伝の生原酒",
                "brewery": "佐賀県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "nagasaki",
    famousSpots: [
        {
                "name": "ハウステンボス",
                "description": "オランダの街並みを忠実に再現した日本最大級のテーマパーク。四季折々の花々とヨーロッパ風建築、日本最大級のイルミネーションが年間を通じて輝きます。"
        },
        {
                "name": "長崎原爆資料館・平和公園",
                "description": "1945年8月9日の被爆の惨状と核兵器廃絶の願いを世界に伝える静聖な場所。天を指す高さ9.7mの平和祈念像の前で平和を祈念します。"
        },
        {
                "name": "グラバー園・大浦天主堂",
                "description": "長崎港を見下ろす南山手の丘に立つ世界遺産。旧グラバー住宅をはじめとする幕末の西洋館と、現存する日本最古の木造教会「大浦天主堂」が異国情緒を醸します。"
        },
        {
                "name": "軍艦島（端島）",
                "description": "かつて海底炭鉱の島として世界一の人口密度を誇った廃墟の離島・世界文化遺産。高層鉄筋コンクリートアパートがひしめく独特の遺構を上陸クルーズで見学できます。"
        }
],
    name: "長崎県",
    region: "九州・沖縄",
    highlights: ["ハウステンボス", "長崎原爆資料館・平和公園", "グラバー園・大浦天主堂", "雲仙・名湯ステイ"],
    gourmet: ["長崎ちゃんぽん・皿うどん", "A5長崎和牛・壱岐牛", "佐世保バーガー・トルコライス", "五島うどん・九十九島カキ・卓袱料理"],
    description: "ハウステンボスや長崎原爆資料館・平和公園などの王道観光名所から、長崎ちゃんぽん・皿うどん・A5長崎和牛・壱岐牛などの名物ご当地グルメ、雲仙・小浜・島原・平戸・壱岐・稲佐山温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ長崎県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/38550/38550.jpg",
    subAreas: [
      {
        areaName: "ハウステンボス・雲仙温泉",
        slug: "huistenbosch-unzen",
        description: "ハウステンボス・雲仙温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "ハウステンボス・雲仙温泉の歴史・伝統名所散策", description: "ハウステンボス・雲仙温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "ハウステンボス・雲仙温泉の絶景・ビュースポット", description: "ハウステンボス・雲仙温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["長崎ちゃんぽん・皿うどん", "A5長崎和牛・壱岐牛", "佐世保バーガー・トルコライス", "五島うどん・九十九島カキ・卓袱料理"],
        keywords: ["長崎県", "ハウステンボス・雲仙温泉"],
        subAreaHotels: [
            {
                        "hotelName": "小浜温泉　旅館　富士屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38550/38550.jpg",
                        "price": 10000,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38550%2F38550.html"
            },
            {
                        "hotelName": "雲仙温泉　雲仙宮崎旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28126/28126.jpg",
                        "price": 31328,
                        "rating": 4.92,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28126%2F28126.html"
            },
            {
                        "hotelName": "五島列島リゾートホテル　マルゲリータ　＜五島・中通島＞",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/137433/137433.jpg",
                        "price": 15690,
                        "rating": 4.8,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137433%2F137433.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "長崎県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "長崎県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "長崎県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "長崎県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "長崎県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "長崎県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "長崎県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "長崎県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "長崎県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "長崎県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "長崎県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "長崎県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "長崎県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "長崎県 至高の純米大吟醸",
                "brewery": "長崎県名門蔵元",
                "type": "純米大吟醸",
                "description": "長崎県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "長崎県 伝統伝承の特別純米",
                "brewery": "長崎県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "長崎県 蔵元直伝の生原酒",
                "brewery": "長崎県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "kumamoto",
    famousSpots: [
        {
                "name": "日本三名城 熊本城",
                "description": "加藤清正公が築城した難攻不落の城郭。「武者返し」と呼ばれる美しい曲線を描く石垣や、復元された豪華な「本丸御殿」、漆黒の大天守・小天守が堂々たる佇まいです。"
        },
        {
                "name": "阿蘇山（草千里ヶ浜・中岳火口）",
                "description": "世界最大級のカルデラを誇る阿蘇。大草原が広がる草千里ヶ浜での乗馬体験や、白い煙を上げる中岳火口のダイナミックな火山景観が広がります。"
        },
        {
                "name": "黒川温泉",
                "description": "筑後川の源流・田の原川沿いの閑静な山あいに佇む名湯。「入湯手形」を利用して露天風呂めぐりを楽しみ、杉木立と茅葺き屋根の情緒を満喫できます。"
        },
        {
                "name": "天草五橋（あまくさごきょう）",
                "description": "九州本土と天草諸島を結ぶ5つの美しい橋梁ルート。イルカウォッチングや新鮮な海鮮丼、夕日が染める瀬戸の風景が訪れる人々を魅了します。"
        }
],
    name: "熊本県",
    region: "九州・沖縄",
    highlights: ["日本三名城 熊本城", "阿蘇山（草千里ヶ浜・中岳火口）", "黒川温泉", "黒川・名湯ステイ"],
    gourmet: ["本場熊本の極上霜降り馬刺し", "阿蘇の絶品あか牛丼", "天草の活車海老・ウニ・海鮮", "熊本ラーメン・揚げたてからし蓮根"],
    description: "日本三名城 熊本城や阿蘇山（草千里ヶ浜・中岳火口）などの王道観光名所から、本場熊本の極上霜降り馬刺し・阿蘇の絶品あか牛丼などの名物ご当地グルメ、黒川・阿蘇内牧・杖立・人吉・山鹿・天草松島温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ熊本県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/128469/128469.jpg",
    subAreas: [
      {
        areaName: "黒川温泉・阿蘇山",
        slug: "kurokawa-aso",
        description: "黒川温泉・阿蘇山エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "黒川温泉・阿蘇山の歴史・伝統名所散策", description: "黒川温泉・阿蘇山で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "黒川温泉・阿蘇山の絶景・ビュースポット", description: "黒川温泉・阿蘇山ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["本場熊本の極上霜降り馬刺し", "阿蘇の絶品あか牛丼", "天草の活車海老・ウニ・海鮮", "熊本ラーメン・揚げたてからし蓮根"],
        keywords: ["熊本県", "黒川温泉・阿蘇山"],
        subAreaHotels: [
            {
                        "hotelName": "白川温泉　華匠庵＜熊本県＞",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/128469/128469.jpg",
                        "price": 15400,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128469%2F128469.html"
            },
            {
                        "hotelName": "黒川温泉　歴史の宿　御客屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/80591/80591.jpg",
                        "price": 15400,
                        "rating": 4.91,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80591%2F80591.html"
            },
            {
                        "hotelName": "人吉温泉　しらさぎ荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/151254/151254.jpg",
                        "price": 16000,
                        "rating": 4.89,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151254%2F151254.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "熊本県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "熊本県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "熊本県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "熊本県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "熊本県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "熊本県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "熊本県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "熊本県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "熊本県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "熊本県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "熊本県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "熊本県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "熊本県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "熊本県 至高の純米大吟醸",
                "brewery": "熊本県名門蔵元",
                "type": "純米大吟醸",
                "description": "熊本県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "熊本県 伝統伝承の特別純米",
                "brewery": "熊本県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "熊本県 蔵元直伝の生原酒",
                "brewery": "熊本県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "oita",
    famousSpots: [
        {
                "name": "別府地獄めぐり",
                "description": "源泉数・湧出量日本一を誇る別府温泉の代表的観光コース。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」、噴気で蒸す地獄蒸し料理が楽しめます。"
        },
        {
                "name": "由布院（金鱗湖・辻馬車）",
                "description": "由布岳の麓に広がる全国屈指のおしゃれな温泉リゾート。清水と温泉が湧き出て朝霧が立ち込める「金鱗湖」や湯の坪街道のスイーツ巡りが女性に大人気です。"
        },
        {
                "name": "九重“夢”大吊橋",
                "description": "水面からの高さ173m、全長390mを誇る日本一高い歩行者専用吊り橋。橋の上からは「日本の滝百選」の震動の滝や九酔渓の壮大なパノラマを見渡せます。"
        },
        {
                "name": "宇佐神宮",
                "description": "全国に40,000社以上ある八幡社の総本宮。豊かな原生林に包まれた広大な敷地に朱塗りの本殿が建ち、伊勢神宮に並ぶ二拝四拍手一拝の参拝様式が特徴です。"
        }
],
    name: "大分県",
    region: "九州・沖縄",
    highlights: ["別府地獄めぐり", "由布院（金鱗湖・辻馬車）", "九重“夢”大吊橋", "別府八湯・名湯ステイ"],
    gourmet: ["佐賀関の関アジ・関サバ姿造り", "おおいた和牛・豊後牛ステーキ", "別府地獄蒸し料理・とり天", "中津からあげ・日田まぶし"],
    description: "別府地獄めぐりや由布院（金鱗湖・辻馬車）などの王道観光名所から、佐賀関の関アジ・関サバ姿造り・おおいた和牛・豊後牛ステーキなどの名物ご当地グルメ、別府八湯・由布院・天ヶ瀬・長湯・筋湯温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ大分県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/30707/30707.jpg",
    subAreas: [
      {
        areaName: "別府温泉・由布院温泉",
        slug: "beppu-yufuin",
        description: "別府温泉・由布院温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "別府温泉・由布院温泉の歴史・伝統名所散策", description: "別府温泉・由布院温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "別府温泉・由布院温泉の絶景・ビュースポット", description: "別府温泉・由布院温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["佐賀関の関アジ・関サバ姿造り", "おおいた和牛・豊後牛ステーキ", "別府地獄蒸し料理・とり天", "中津からあげ・日田まぶし"],
        keywords: ["大分県", "別府温泉・由布院温泉"],
        subAreaHotels: [
            {
                        "hotelName": "由布院温泉　日の春旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/30707/30707.jpg",
                        "price": 20900,
                        "rating": 5,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30707%2F30707.html"
            },
            {
                        "hotelName": "長湯温泉　丸長旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40731/40731.jpg",
                        "price": 17100,
                        "rating": 4.85,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40731%2F40731.html"
            },
            {
                        "hotelName": "湯平温泉　癒しの宿　鷹勝",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/144993/144993.jpg",
                        "price": 25000,
                        "rating": 4.85,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144993%2F144993.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "大分県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "大分県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "大分県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "大分県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "大分県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "大分県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "大分県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "大分県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "大分県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "大分県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "大分県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "大分県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "大分県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "大分県 至高の純米大吟醸",
                "brewery": "大分県名門蔵元",
                "type": "純米大吟醸",
                "description": "大分県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "大分県 伝統伝承の特別純米",
                "brewery": "大分県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "大分県 蔵元直伝の生原酒",
                "brewery": "大分県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "miyazaki",
    famousSpots: [
        {
                "name": "高千穂峡（真名井の滝）",
                "description": "阿蘇山の火砕流が侵食されてできた高さ80m〜100mの断崖が続く渓谷。日本の滝百選「真名井の滝」のすぐ脇を貸しボートで進む神秘的な体験が魅力です。"
        },
        {
                "name": "サンメッセ日南（モアイ像）",
                "description": "太平洋の青い海を見下ろす丘に世界で唯一イースター島の許可を得て完全復元された7体のモアイ像。南国情緒溢れる映えスポットとして人気を博しています。"
        },
        {
                "name": "青島神社・鬼の洗濯板",
                "description": "波状の岩肌が島を囲む奇観「鬼の洗濯板」の中心に鎮座する亜熱帯植物に囲まれた神社。縁結びのご利益で知られ、真っ赤な社殿と南国樹木の対比が見事です。"
        },
        {
                "name": "鵜戸神宮（うどじんぐう）",
                "description": "日向灘の断崖絶壁にある天然の洞窟の中に朱塗りの本殿が鎮座する異色の神社。崖下の亀岩の穴に「運玉」を投げ入れる願掛けが名物です。"
        }
],
    name: "宮崎県",
    region: "九州・沖縄",
    highlights: ["高千穂峡（真名井の滝）", "サンメッセ日南（モアイ像）", "青島神社・鬼の洗濯板", "青島・名湯ステイ"],
    gourmet: ["日本一4連覇・宮崎牛ステーキ", "みやざき地頭鶏の炭火焼き", "本場のチキン南蛮", "宮崎名物・冷や汁＆完熟マンゴー"],
    description: "高千穂峡（真名井の滝）やサンメッセ日南（モアイ像）などの王道観光名所から、日本一4連覇・宮崎牛ステーキ・みやざき地頭鶏の炭火焼きなどの名物ご当地グルメ、青島・フェニックスシーガイア・北郷・高千穂・京町温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ宮崎県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/30082/30082.jpg",
    subAreas: [
      {
        areaName: "高千穂・青島・日南",
        slug: "takachiho-aoshima",
        description: "高千穂・青島・日南エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "高千穂・青島・日南の歴史・伝統名所散策", description: "高千穂・青島・日南で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "高千穂・青島・日南の絶景・ビュースポット", description: "高千穂・青島・日南ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["日本一4連覇・宮崎牛ステーキ", "みやざき地頭鶏の炭火焼き", "本場のチキン南蛮", "宮崎名物・冷や汁＆完熟マンゴー"],
        keywords: ["宮崎県", "高千穂・青島・日南"],
        subAreaHotels: [
            {
                        "hotelName": "高千穂　旅館　神仙",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/30082/30082.jpg",
                        "price": 49500,
                        "rating": 4.8,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30082%2F30082.html"
            },
            {
                        "hotelName": "極楽温泉　匠の宿",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/30940/30940.jpg",
                        "price": 12100,
                        "rating": 4.67,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30940%2F30940.html"
            },
            {
                        "hotelName": "天然温泉ひなたの宿日南宮崎",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg",
                        "price": 10000,
                        "rating": 4.47,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187408%2F187408.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "宮崎県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "宮崎県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "宮崎県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "宮崎県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "宮崎県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "宮崎県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "宮崎県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "宮崎県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "宮崎県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "宮崎県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "宮崎県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "宮崎県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "宮崎県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "宮崎県 至高の純米大吟醸",
                "brewery": "宮崎県名門蔵元",
                "type": "純米大吟醸",
                "description": "宮崎県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "宮崎県 伝統伝承の特別純米",
                "brewery": "宮崎県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "宮崎県 蔵元直伝の生原酒",
                "brewery": "宮崎県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "kagoshima",
    famousSpots: [
        {
                "name": "桜島（有村溶岩展望所）",
                "description": "錦江湾に浮かぶ鹿児島県のシンボルであり現在も活発な活動を続ける活火山。有村溶岩展望所からは溶岩原と噴煙を上げる大迫力の姿を間近で観察できます。"
        },
        {
                "name": "指宿温泉（砂むし温泉）",
                "description": "世界でも大変珍しい天然の海岸砂むし風呂。温かい温泉熱を含んだ砂の中に埋まり、海鳴りを聞きながら汗を流すデトックス体験は至福のひとときです。"
        },
        {
                "name": "屋久島（縄文杉）",
                "description": "樹齢7,000年とも言われる世界自然遺産・屋久島の象徴「縄文杉」。白谷雲水峡の美しい苔むす森や数千年の時を生き抜いた巨大な屋久杉群が感動を呼びます。"
        },
        {
                "name": "仙厳園（磯庭園）",
                "description": "島津家第19代当主・光久によって造営された大名庭園。桜島を築山に、錦江湾を池に見立てた雄大な借景庭園で、隣接する世界遺産「尚古集成館」も見どころです。"
        }
],
    name: "鹿児島県",
    region: "九州・沖縄",
    highlights: ["桜島（有村溶岩展望所）", "指宿温泉（砂むし温泉）", "屋久島（縄文杉）", "指宿・名湯ステイ"],
    gourmet: ["かごしま黒豚の出汁しゃぶしゃぶ", "鹿児島黒牛A5ステーキ", "錦江湾のきびなご刺身・さつま揚げ", "奄美の鶏飯（けいはん）・うなぎ"],
    description: "桜島（有村溶岩展望所）や指宿温泉（砂むし温泉）などの王道観光名所から、かごしま黒豚の出汁しゃぶしゃぶ・鹿児島黒牛A5ステーキなどの名物ご当地グルメ、指宿・霧島・妙見・城山（鹿児島市内）・桜島温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ鹿児島県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/44946/44946.jpg",
    subAreas: [
      {
        areaName: "指宿温泉・霧島温泉・屋久島",
        slug: "ibusuki-kirishima",
        description: "指宿温泉・霧島温泉・屋久島エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "指宿温泉・霧島温泉・屋久島の歴史・伝統名所散策", description: "指宿温泉・霧島温泉・屋久島で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "指宿温泉・霧島温泉・屋久島の絶景・ビュースポット", description: "指宿温泉・霧島温泉・屋久島ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["かごしま黒豚の出汁しゃぶしゃぶ", "鹿児島黒牛A5ステーキ", "錦江湾のきびなご刺身・さつま揚げ", "奄美の鶏飯（けいはん）・うなぎ"],
        keywords: ["鹿児島県", "指宿温泉・霧島温泉・屋久島"],
        subAreaHotels: [
            {
                        "hotelName": "ｓａｍａｎａ　ｈｏｔｅｌ　Ｙａｋｕｓｈｉｍａ（旧・ホテル屋久島）＜屋久島＞",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/44946/44946.jpg",
                        "price": 18060,
                        "rating": 4.92,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44946%2F44946.html"
            },
            {
                        "hotelName": "霧島温泉　摘み草の宿　こまつ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/151207/151207.jpg",
                        "price": 27500,
                        "rating": 4.83,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151207%2F151207.html"
            },
            {
                        "hotelName": "霧島温泉郷　鳥遊ぶ森の宿　ふたり静",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/51737/51737.jpg",
                        "price": 37405,
                        "rating": 4.81,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51737%2F51737.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "鹿児島県 伝統古民家喫茶「茶房 華」",
                "type": "和モダン喫茶",
                "description": "鹿児島県の町家をモダンリノベーション。季節の手作り和菓子と自家焙煎珈琲のセットが人気。",
                "recommend": "鹿児島県特製抹茶パフェ＆珈琲セット"
        },
        {
                "name": "鹿児島県 絶景ロケーションカフェ",
                "type": "絶景テラスカフェ",
                "description": "鹿児島県の豊かな大自然と美しい風景を一望。開放的なテラス席でいただく手作りタルト。",
                "recommend": "鹿児島県四季のフルーツタルト＆ハーブティー"
        },
        {
                "name": "鹿児島県 昭和レトロ喫茶サロン",
                "type": "昭和レトロ喫茶",
                "description": "重厚な木製家具とアンティークランプが飾る静寂の空間。サイフォンで淹れる本格珈琲。",
                "recommend": "サイフォン珈琲＆手作りプリン"
        }
],
    souvenirs: [
        {
                "name": "鹿児島県 伝統銘菓「特製和菓子」",
                "category": "伝統銘菓",
                "description": "鹿児島県で長年愛される伝統銘菓。しっとりした上品な甘みと職人技が光る極上手土産。"
        },
        {
                "name": "鹿児島県 トレンド高級ラングドシャ",
                "category": "洋菓子・和モダン",
                "description": "鹿児島県産厳選素材をたっぷり使用。サクサク食感ととろけるチョコレートが絶品。"
        },
        {
                "name": "鹿児島県 ご当地名産グルメセット",
                "category": "名産グルメ",
                "description": "鹿児島県の豊かな海・山の恵みをそのまま詰めたご飯のお供＆お酒の最高のアテ。"
        }
],
    sakes: [
        {
                "name": "鹿児島県 至高の純米大吟醸",
                "brewery": "鹿児島県名門蔵元",
                "type": "純米大吟醸",
                "description": "鹿児島県の名水と極上酒米で醸す。フルーティーな吟醸香とキレのある余韻が広がる最高峰。"
        },
        {
                "name": "鹿児島県 伝統伝承の特別純米",
                "brewery": "鹿児島県歴史蔵",
                "type": "特別純米・辛口",
                "description": "米本来のふくよかな旨味とすっきりした喉越し。地場の名物料理を引き立てる逸品。"
        },
        {
                "name": "鹿児島県 蔵元直伝の生原酒",
                "brewery": "鹿児島県伝統酒造",
                "type": "無濾過生原酒",
                "description": "フレッシュでジューシーなみずみずしさ。酒通も唸る豊かな味わいが自慢。"
        }
]
  },
  {
    slug: "okinawa",
    famousSpots: [
        {
                "name": "沖縄美ら海水族館",
                "description": "本部半島の国営沖縄記念公園内にある世界最大級の水族館。巨大アクリルパネル越しに大水槽「黒潮の海」を泳ぐジンベエザメやナンヨウマンタのダイナミックな姿は必見です。"
        },
        {
                "name": "首里城公園",
                "description": "かつて琉球王国の政治・外交・文化の中心であった世界遺産。朱塗りの守礼門や守礼の邦の精神、琉球独自のアジアと日本の融合した建築美を感じられます。"
        },
        {
                "name": "古宇利島（古宇利大橋）",
                "description": "エメラルドグリーンの透き通る海の上に架かる全長1,960mの直線の橋。「恋の島」とも呼ばれ、古宇利オーシャンタワーやハートロックが人気を呼んでいます。"
        },
        {
                "name": "万座毛（まんざも）",
                "description": "「万人が座するに足る毛（草原）」が由来の景勝地。隆起サンゴ礁が侵食された象の鼻のような形状の断崖絶壁と、そこに打ち寄せる東シナ海の青い波が壮観です。"
        },
        {
                "name": "石垣島・川平湾",
                "description": "日本最高峰の透明度を誇りミシュラン・グリーンガイド三ツ星を獲得した石垣島の美景スポット。グラスボートに乗って色鮮やかなサンゴと熱帯魚を観賞できます。"
        }
],
    name: "沖縄県",
    region: "九州・沖縄",
    highlights: ["沖縄美ら海水族館", "首里城公園", "古宇利島（古宇利大橋）", "恩納村・名湯ステイ"],
    gourmet: ["特選石垣牛・もとぶ牛ステーキ", "やんばる島豚あぐーのしゃぶしゃぶ", "沖縄そば（ソーキそば）・タコライス", "海ぶどう・ジーマーミ豆腐・グルクン"],
    description: "沖縄美ら海水族館や首里城公園などの王道観光名所から、特選石垣牛・もとぶ牛ステーキ・やんばる島豚あぐーのしゃぶしゃぶなどの名物ご当地グルメ、恩納村・瀬長島琉球温泉・宮古島シギラ黄金温泉・北谷温泉の人気宿泊施設まで徹底網羅。2026年秋冬の紅葉・味覚旅や年末年始ステイにも役立つ沖縄県の完全観光ガイドです。",
    bannerImage: "https://img.travel.rakuten.co.jp/share/HOTEL/197827/197827.jpg",
    subAreas: [
      {
        areaName: "石垣島・宮古島・恩納村",
        slug: "ishigaki-miyako",
        description: "石垣島・宮古島・恩納村エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "石垣島・宮古島・恩納村の歴史・伝統名所散策", description: "石垣島・宮古島・恩納村で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "石垣島・宮古島・恩納村の絶景・ビュースポット", description: "石垣島・宮古島・恩納村ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["特選石垣牛・もとぶ牛ステーキ", "やんばる島豚あぐーのしゃぶしゃぶ", "沖縄そば（ソーキそば）・タコライス", "海ぶどう・ジーマーミ豆腐・グルクン"],
        keywords: ["沖縄県", "石垣島・宮古島・恩納村"],
        subAreaHotels: [
            {
                        "hotelName": "ＰＧＭホテルリゾート沖縄（２０２６年７月ＧＲＡＮＤ　ＯＰＥＮ）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/197827/197827.jpg",
                        "price": 18400,
                        "rating": 4.85,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197827%2F197827.html"
            },
            {
                        "hotelName": "グランディスタイル　沖縄　読谷　ホテル＆リゾート",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/172439/172439.jpg",
                        "price": 19600,
                        "rating": 4.75,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172439%2F172439.html"
            },
            {
                        "hotelName": "ＨＩＹＯＲＩオーシャンリゾート沖縄",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/180687/180687.jpg",
                        "price": 11988,
                        "rating": 4.74,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180687%2F180687.html"
            }
]
      }
    ],
    cafes: [
        {
                "name": "浜辺の茶屋（南城市）",
                "type": "海絶景窓辺カフェ",
                "description": "満潮時には窓のすぐ下に波が寄せるオーシャンフロント。沖縄の風と波音を感じる特等席。",
                "recommend": "沖縄海ブドウピザ＆ブーゲンビリアティー"
        },
        {
                "name": "カフェくるくま（南城市）",
                "type": "高台太平洋パノラマ",
                "description": "太平洋を180度見渡す絶景高台テラス。本格タイカレーとハーブティーが大人気。",
                "recommend": "くるくまスペシャルカレー＆ハーブティー"
        },
        {
                "name": "港川ステイツサイドタウン oacafé（浦添市）",
                "type": "外人住宅リノベカフェ",
                "description": "米軍ハウスのおしゃれな街並み。アンティーク家具に囲まれた映え空間でタルトを堪能。",
                "recommend": "沖縄季節のフルーツタルト＆黒糖ラテ"
        }
],
    souvenirs: [
        {
                "name": "元祖紅いもタルト（御菓子御殿）",
                "category": "定番銘菓",
                "description": "沖縄県産紅いも100%ペーストの自然な甘みと香ばしいタルト生地がベストマッチ。"
        },
        {
                "name": "ちんすこう（新垣ちんすこう）",
                "category": "琉球伝統菓子",
                "description": "琉球王朝時代から伝わる伝統菓子。サクサクした食感と優しいラードの甘みが特徴。"
        },
        {
                "name": "ジミー（Jimmy's）スーキーパイ・アップルパイ",
                "category": "アメリカン洋菓子",
                "description": "沖縄で長く愛されるアメリカンスタイルのベーカリー。シナモン香るゴロゴロりんごパイ。"
        }
],
    sakes: [
        {
                "name": "泡盛 菊之露 VIPゴールド",
                "brewery": "菊之露酒造（宮古島市）",
                "type": "宮古島古酒（クース）",
                "description": "8年古酒をベースにブレンド。熟成された甘い香りとまろやかな味わいが広がる名泡盛。"
        },
        {
                "name": "泡盛 殘波（ざんぱ）ブラック 30度",
                "brewery": "比嘉酒造（読谷村）",
                "type": "読谷名醸泡盛",
                "description": "「ザンクロ」の愛称で親しまれるロングセラー。芳醇な香りとしっかりとしたコク。"
        },
        {
                "name": "オリオン ザ・ドラフト（オリオンビール）",
                "brewery": "オリオンビール（名護市）",
                "type": "沖縄クラフト生ビール",
                "description": "沖縄の澄み切った気候にぴったりの爽快な喉越し。伊江島産大麦使用のプレミアム生。"
        }
]
  },
];

export function getPrefectureBySlug(slug: string): PrefectureInfo | undefined {
  const found = PREFECTURES_DATA.find(p => p.slug === slug);
  if (found) return found;
  return undefined;
}

export function getPrefectureByName(name: string): PrefectureInfo | undefined {
  const cleanName = name.replace(/(県|府|東京都)$/, "");
  return PREFECTURES_DATA.find(p => p.name === name || p.name.replace(/(県|府|東京都)$/, "") === cleanName);
}
