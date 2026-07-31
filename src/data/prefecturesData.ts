import { Metadata } from "next";

export interface SpotInfo {
  name: string;
  description: string;
}

export interface HotelCardInfo {
  hotelName: string;
  areaName: string;
  image?: string;
  price?: number | string;
  rating?: number | string;
  affiliateUrl?: string;
  postId: string;
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
    name: "北海道",
    region: "北海道",
    highlights: ["函館・湯の川温泉名所", "北海道名物", "絶景温泉"],
    gourmet: ["北海道の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "北海道ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "函館・湯の川温泉",
        slug: "hakodate",
        description: "函館・湯の川温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "函館・湯の川温泉の歴史・伝統名所散策", description: "函館・湯の川温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "函館・湯の川温泉の絶景・ビュースポット", description: "函館・湯の川温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["北海道の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["北海道", "函館・湯の川温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ＨＡＫＯＤＡＴＥ　男爵倶楽部　ＨＯＴＥＬ＆ＲＥＳＯＲＴＳ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/56773/56773.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/56773/56773.html"
            },
            {
                        "hotelName": "ホテルエノエ函館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/192816/192816.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/192816/192816.html"
            },
            {
                        "hotelName": "Ｔａｂｉｓｔ　竹葉新葉亭　函館　湯の川温泉",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67479/67479.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/67479/67479.html"
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
    name: "青森県",
    region: "東北",
    highlights: ["青森・弘前周辺名所", "青森県名物", "絶景温泉"],
    gourmet: ["青森県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "青森県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "青森・弘前周辺",
        slug: "aomori-hirosaki",
        description: "青森・弘前周辺エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "青森・弘前周辺の歴史・伝統名所散策", description: "青森・弘前周辺で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "青森・弘前周辺の絶景・ビュースポット", description: "青森・弘前周辺ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["青森県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["青森県", "青森・弘前周辺"],
        subAreaHotels: [
            {
                        "hotelName": "天然温泉　岩木桜の湯　ドーミーイン弘前（ドーミーイン・御宿野乃　ホテルズグループ）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/70291/70291.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/70291/70291.html"
            },
            {
                        "hotelName": "スーパーホテル弘前",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/50632/50632.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/50632/50632.html"
            },
            {
                        "hotelName": "ホテルルートイン　弘前駅前",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/70297/70297.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/70297/70297.html"
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
    name: "岩手県",
    region: "東北",
    highlights: ["盛岡・花巻温泉周辺名所", "岩手県名物", "絶景温泉"],
    gourmet: ["岩手県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "岩手県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "盛岡・花巻温泉周辺",
        slug: "morioka-hanamaki",
        description: "盛岡・花巻温泉周辺エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "盛岡・花巻温泉周辺の歴史・伝統名所散策", description: "盛岡・花巻温泉周辺で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "盛岡・花巻温泉周辺の絶景・ビュースポット", description: "盛岡・花巻温泉周辺ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["岩手県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["岩手県", "盛岡・花巻温泉周辺"],
        subAreaHotels: [
            {
                        "hotelName": "盛岡・花巻温泉周辺 厳選ホテル",
                        "areaName": "盛岡・花巻温泉周辺",
                        "postId": "1017"
            },
            {
                        "hotelName": "盛岡・花巻温泉周辺 温泉旅館",
                        "areaName": "盛岡・花巻温泉周辺",
                        "postId": "1019"
            },
            {
                        "hotelName": "盛岡・花巻温泉周辺 和モダン宿",
                        "areaName": "盛岡・花巻温泉周辺",
                        "postId": "104526"
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
    name: "宮城県",
    region: "東北",
    highlights: ["仙台・松島・秋保温泉名所", "宮城県名物", "絶景温泉"],
    gourmet: ["宮城県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "宮城県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "仙台・松島・秋保温泉",
        slug: "sendai-matsushima",
        description: "仙台・松島・秋保温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "仙台・松島・秋保温泉の歴史・伝統名所散策", description: "仙台・松島・秋保温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "仙台・松島・秋保温泉の絶景・ビュースポット", description: "仙台・松島・秋保温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["宮城県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["宮城県", "仙台・松島・秋保温泉"],
        subAreaHotels: [
            {
                        "hotelName": "変なホテルプレミア仙台　国分町",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/182463/182463.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/182463/182463.html"
            },
            {
                        "hotelName": "ホテル京阪　仙台",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/177046/177046.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/177046/177046.html"
            },
            {
                        "hotelName": "リッチモンドホテル仙台",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4934/4934.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/4934/4934.html"
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
    name: "秋田県",
    region: "東北",
    highlights: ["秋田・角館・乳頭温泉名所", "秋田県名物", "絶景温泉"],
    gourmet: ["秋田県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "秋田県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "秋田・角館・乳頭温泉",
        slug: "akita-kakunodate",
        description: "秋田・角館・乳頭温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "秋田・角館・乳頭温泉の歴史・伝統名所散策", description: "秋田・角館・乳頭温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "秋田・角館・乳頭温泉の絶景・ビュースポット", description: "秋田・角館・乳頭温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["秋田県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["秋田県", "秋田・角館・乳頭温泉"],
        subAreaHotels: [
            {
                        "hotelName": "秋田・角館・乳頭温泉 厳選ホテル",
                        "areaName": "秋田・角館・乳頭温泉",
                        "postId": "1017"
            },
            {
                        "hotelName": "秋田・角館・乳頭温泉 温泉旅館",
                        "areaName": "秋田・角館・乳頭温泉",
                        "postId": "1019"
            },
            {
                        "hotelName": "秋田・角館・乳頭温泉 和モダン宿",
                        "areaName": "秋田・角館・乳頭温泉",
                        "postId": "104526"
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
    name: "山形県",
    region: "東北",
    highlights: ["山形・蔵王温泉・銀山温泉名所", "山形県名物", "絶景温泉"],
    gourmet: ["山形県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "山形県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "山形・蔵王温泉・銀山温泉",
        slug: "yamagata-zao",
        description: "山形・蔵王温泉・銀山温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "山形・蔵王温泉・銀山温泉の歴史・伝統名所散策", description: "山形・蔵王温泉・銀山温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "山形・蔵王温泉・銀山温泉の絶景・ビュースポット", description: "山形・蔵王温泉・銀山温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["山形県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["山形県", "山形・蔵王温泉・銀山温泉"],
        subAreaHotels: [
            {
                        "hotelName": "山形・蔵王温泉・銀山温泉 厳選ホテル",
                        "areaName": "山形・蔵王温泉・銀山温泉",
                        "postId": "1017"
            },
            {
                        "hotelName": "山形・蔵王温泉・銀山温泉 温泉旅館",
                        "areaName": "山形・蔵王温泉・銀山温泉",
                        "postId": "1019"
            },
            {
                        "hotelName": "山形・蔵王温泉・銀山温泉 和モダン宿",
                        "areaName": "山形・蔵王温泉・銀山温泉",
                        "postId": "104526"
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
    name: "福島県",
    region: "東北",
    highlights: ["会津若松・裏磐梯・東山温泉名所", "福島県名物", "絶景温泉"],
    gourmet: ["福島県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "福島県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "会津若松・裏磐梯・東山温泉",
        slug: "aizu-bandai",
        description: "会津若松・裏磐梯・東山温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "会津若松・裏磐梯・東山温泉の歴史・伝統名所散策", description: "会津若松・裏磐梯・東山温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "会津若松・裏磐梯・東山温泉の絶景・ビュースポット", description: "会津若松・裏磐梯・東山温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["福島県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["福島県", "会津若松・裏磐梯・東山温泉"],
        subAreaHotels: [
            {
                        "hotelName": "創作料理が自慢の宿　会津　喜多方　熱塩温泉　山形屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28624/28624.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/28624/28624.html"
            },
            {
                        "hotelName": "会津芦ノ牧温泉　大川荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/12682/12682.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/12682/12682.html"
            },
            {
                        "hotelName": "ホテルニューパレス",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4781/4781.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/4781/4781.html"
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
    name: "茨城県",
    region: "関東",
    highlights: ["水戸・大洗・ひたちなか名所", "茨城県名物", "絶景温泉"],
    gourmet: ["茨城県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "茨城県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "水戸・大洗・ひたちなか",
        slug: "mito-oarai",
        description: "水戸・大洗・ひたちなかエリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "水戸・大洗・ひたちなかの歴史・伝統名所散策", description: "水戸・大洗・ひたちなかで絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "水戸・大洗・ひたちなかの絶景・ビュースポット", description: "水戸・大洗・ひたちなかならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["茨城県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["茨城県", "水戸・大洗・ひたちなか"],
        subAreaHotels: [
            {
                        "hotelName": "ダイワロイネットホテル水戸",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/44177/44177.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/44177/44177.html"
            },
            {
                        "hotelName": "ホテルシーズン",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/2099/2099.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/2099/2099.html"
            },
            {
                        "hotelName": "天然温泉　梅里の湯　スーパーホテル水戸",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/80617/80617.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/80617/80617.html"
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
    name: "栃木県",
    region: "関東",
    highlights: ["日光・鬼怒川温泉名所", "栃木県名物", "絶景温泉"],
    gourmet: ["栃木県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "栃木県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "日光・鬼怒川温泉",
        slug: "nikko-kinugawa",
        description: "日光・鬼怒川温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "日光・鬼怒川温泉の歴史・伝統名所散策", description: "日光・鬼怒川温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "日光・鬼怒川温泉の絶景・ビュースポット", description: "日光・鬼怒川温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["栃木県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["栃木県", "日光・鬼怒川温泉"],
        subAreaHotels: [
            {
                        "hotelName": "グランピングリゾート　ブリリアントヴィレッジ日光",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/189179/189179.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/189179/189179.html"
            },
            {
                        "hotelName": "アンワインドホテル＆バー奥日光　※２０２６年８月開業",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/198852/198852.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/198852/198852.html"
            },
            {
                        "hotelName": "奥日光湯元温泉　湯元板屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108140/108140.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/108140/108140.html"
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
    name: "群馬県",
    region: "関東",
    highlights: ["草津温泉・伊香保温泉名所", "群馬県名物", "絶景温泉"],
    gourmet: ["群馬県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "群馬県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "草津温泉・伊香保温泉",
        slug: "kusatsu-ikaho",
        description: "草津温泉・伊香保温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "草津温泉・伊香保温泉の歴史・伝統名所散策", description: "草津温泉・伊香保温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "草津温泉・伊香保温泉の絶景・ビュースポット", description: "草津温泉・伊香保温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["群馬県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["群馬県", "草津温泉・伊香保温泉"],
        subAreaHotels: [
            {
                        "hotelName": "草津温泉　ホテルスパックス草津",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/2398/2398.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/2398/2398.html"
            },
            {
                        "hotelName": "草津温泉　ホテル櫻井",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/56137/56137.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/56137/56137.html"
            },
            {
                        "hotelName": "草津温泉　源泉一乃湯",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176541/176541.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/176541/176541.html"
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
    name: "埼玉県",
    region: "関東",
    highlights: ["川越・秩父・長瀞名所", "埼玉県名物", "絶景温泉"],
    gourmet: ["埼玉県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "埼玉県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "川越・秩父・長瀞",
        slug: "kawagoe-chichibu",
        description: "川越・秩父・長瀞エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "川越・秩父・長瀞の歴史・伝統名所散策", description: "川越・秩父・長瀞で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "川越・秩父・長瀞の絶景・ビュースポット", description: "川越・秩父・長瀞ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["埼玉県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["埼玉県", "川越・秩父・長瀞"],
        subAreaHotels: [
            {
                        "hotelName": "和銅鉱泉　薬師の湯　ゆの宿　和どう",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/6100/6100.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/6100/6100.html"
            },
            {
                        "hotelName": "長瀞温泉　花のおもてなし　長生館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9485/9485.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/9485/9485.html"
            },
            {
                        "hotelName": "小さなホテル　セラヴィ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68504/68504.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/68504/68504.html"
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
    name: "千葉県",
    region: "関東",
    highlights: ["浦安・舞浜・南房総名所", "千葉県名物", "絶景温泉"],
    gourmet: ["千葉県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "千葉県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "浦安・舞浜・南房総",
        slug: "urayasu-boso",
        description: "浦安・舞浜・南房総エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "浦安・舞浜・南房総の歴史・伝統名所散策", description: "浦安・舞浜・南房総で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "浦安・舞浜・南房総の絶景・ビュースポット", description: "浦安・舞浜・南房総ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["千葉県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["千葉県", "浦安・舞浜・南房総"],
        subAreaHotels: [
            {
                        "hotelName": "浦安・舞浜・南房総 厳選ホテル",
                        "areaName": "浦安・舞浜・南房総",
                        "postId": "1017"
            },
            {
                        "hotelName": "浦安・舞浜・南房総 温泉旅館",
                        "areaName": "浦安・舞浜・南房総",
                        "postId": "1019"
            },
            {
                        "hotelName": "浦安・舞浜・南房総 和モダン宿",
                        "areaName": "浦安・舞浜・南房総",
                        "postId": "104526"
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
    name: "東京都",
    region: "関東",
    highlights: ["新宿・銀座・東京駅名所", "東京都名物", "絶景温泉"],
    gourmet: ["東京都の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "東京都ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "新宿・銀座・東京駅",
        slug: "shinjuku-ginza",
        description: "新宿・銀座・東京駅エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "新宿・銀座・東京駅の歴史・伝統名所散策", description: "新宿・銀座・東京駅で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "新宿・銀座・東京駅の絶景・ビュースポット", description: "新宿・銀座・東京駅ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["東京都の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["東京都", "新宿・銀座・東京駅"],
        subAreaHotels: [
            {
                        "hotelName": "アワーズイン阪急",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/128577/128577.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/128577/128577.html"
            },
            {
                        "hotelName": "京急ＥＸイン　羽田イノベーションシティ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/179145/179145.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/179145/179145.html"
            },
            {
                        "hotelName": "ハートンホテル東品川（品川シーサイド）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/51870/51870.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/51870/51870.html"
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
    name: "神奈川県",
    region: "関東",
    highlights: ["箱根温泉・鎌倉・横浜名所", "神奈川県名物", "絶景温泉"],
    gourmet: ["神奈川県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "神奈川県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "箱根温泉・鎌倉・横浜",
        slug: "hakone-kamakura",
        description: "箱根温泉・鎌倉・横浜エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "箱根温泉・鎌倉・横浜の歴史・伝統名所散策", description: "箱根温泉・鎌倉・横浜で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "箱根温泉・鎌倉・横浜の絶景・ビュースポット", description: "箱根温泉・鎌倉・横浜ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["神奈川県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["神奈川県", "箱根温泉・鎌倉・横浜"],
        subAreaHotels: [
            {
                        "hotelName": "箱根強羅グアムドッグ本店",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/142874/142874.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/142874/142874.html"
            },
            {
                        "hotelName": "箱根芦ノ湖温泉　源泉100％の宿　ＨＯＴＥＬ　Ｒａ　Ｋｕｕｎ　(ホテルラクーン）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/10956/10956.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/10956/10956.html"
            },
            {
                        "hotelName": "箱根湯本温泉　箱根パークス吉野",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9669/9669.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/9669/9669.html"
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
    name: "新潟県",
    region: "甲信越・北陸",
    highlights: ["越後湯沢・苗場・佐渡名所", "新潟県名物", "絶景温泉"],
    gourmet: ["新潟県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "新潟県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "越後湯沢・苗場・佐渡",
        slug: "echigo-yuzawa",
        description: "越後湯沢・苗場・佐渡エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "越後湯沢・苗場・佐渡の歴史・伝統名所散策", description: "越後湯沢・苗場・佐渡で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "越後湯沢・苗場・佐渡の絶景・ビュースポット", description: "越後湯沢・苗場・佐渡ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["新潟県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["新潟県", "越後湯沢・苗場・佐渡"],
        subAreaHotels: [
            {
                        "hotelName": "湯沢温泉（自家源泉）　ＨＯＴＥＬシャーレゆざわ銀水",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7518/7518.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7518/7518.html"
            },
            {
                        "hotelName": "苗場プリンスホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/30694/30694.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/30694/30694.html"
            },
            {
                        "hotelName": "リブマックスリゾート越後湯沢",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/197415/197415.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/197415/197415.html"
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
    name: "富山県",
    region: "甲信越・北陸",
    highlights: ["富山・立山黒部・宇奈月温泉名所", "富山県名物", "絶景温泉"],
    gourmet: ["富山県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "富山県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "富山・立山黒部・宇奈月温泉",
        slug: "toyama-unazuki",
        description: "富山・立山黒部・宇奈月温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "富山・立山黒部・宇奈月温泉の歴史・伝統名所散策", description: "富山・立山黒部・宇奈月温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "富山・立山黒部・宇奈月温泉の絶景・ビュースポット", description: "富山・立山黒部・宇奈月温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["富山県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["富山県", "富山・立山黒部・宇奈月温泉"],
        subAreaHotels: [
            {
                        "hotelName": "富山・立山黒部・宇奈月温泉 厳選ホテル",
                        "areaName": "富山・立山黒部・宇奈月温泉",
                        "postId": "1017"
            },
            {
                        "hotelName": "富山・立山黒部・宇奈月温泉 温泉旅館",
                        "areaName": "富山・立山黒部・宇奈月温泉",
                        "postId": "1019"
            },
            {
                        "hotelName": "富山・立山黒部・宇奈月温泉 和モダン宿",
                        "areaName": "富山・立山黒部・宇奈月温泉",
                        "postId": "104526"
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
    name: "石川県",
    region: "甲信越・北陸",
    highlights: ["兼六園・金沢城公園", "ひがし茶屋街・近江町市場", "金沢21世紀美術館", "和倉温泉・加賀温泉郷"],
    gourmet: ["のどぐろ珍味・刺身", "金沢港直送 海鮮丼・金沢寿司", "近江町市場 食べ歩き", "金沢カレー・治部煮"],
    description: "加賀百万石の歴史と伝統美が息づく金沢を中心に、日本三名園の兼六園、ひがし茶屋街、近江町市場の絶品海鮮、名湯・温泉宿を愉しむ贅沢な旅のハブ。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
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
        gourmet: ["のどぐろ炙り丼", "金沢寿司ランチ", "近江町市場 食べ歩き", "金箔ソフトクリーム"],
        keywords: ["石川県", "金沢", "ひがし茶屋街", "兼六園", "近江町市場"],
        subAreaHotels: [
          {
            hotelName: "ホテルフォルツァ金沢",
            areaName: "金沢駅・近江町市場周辺",
            postId: "180290",
            image: "https://img.travel.rakuten.co.jp/share/HOTEL/180290/180290.jpg",
            price: 6500,
            rating: 4.5,
            affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/180290/180290.html"
          },
          {
            hotelName: "金沢白鳥路 ホテル山楽",
            areaName: "兼六園・金沢城前",
            postId: "8279",
            image: "https://img.travel.rakuten.co.jp/share/HOTEL/8279/8279.jpg",
            price: 12000,
            rating: 4.7,
            affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8279/8279.html"
          },
          {
            hotelName: "天然温泉 加賀の宝泉 御宿 野乃金沢",
            areaName: "近江町市場徒歩1分",
            postId: "181519",
            image: "https://img.travel.rakuten.co.jp/share/HOTEL/181519/181519.jpg",
            price: 9800,
            rating: 4.6,
            affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/181519/181519.html"
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
        type": "金沢老舗蔵・伝統純米",
        description: "金沢で最も古い歴史をもつ蔵元。しっかりとした米の旨味とキレがあり、金沢の海の幸やのどぐろと相性抜群。"
      },
      {
        name: "手取川（てどりがわ）ishikawa mon 純米吟醸",
        brewery: "吉田酒造店（白山市）",
        type": "フレッシュ吟醸",
        description: "石川県産酒米「石川門」を使用。フルーティーな香りと爽やかな酸味が女性や日本酒初心者にも大人気。"
      },
      {
        name: "菊姫（きくひめ）山廃仕込 純米酒",
        brewery: "菊姫合資会社（白山市）",
        type": "濃醇旨口・山廃仕込",
        description: "山廃仕込みのパイオニア。酸味とコクが調和した芳醇な味わいで、お燗にするとさらに旨味が引き立ちます。"
      }
    ]
  },
  {
    slug: "fukui",
    name: "福井県",
    region: "甲信越・北陸",
    highlights: ["あわら温泉・敦賀・若狭名所", "福井県名物", "絶景温泉"],
    gourmet: ["福井県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "福井県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "あわら温泉・敦賀・若狭",
        slug: "awara-tsuruga",
        description: "あわら温泉・敦賀・若狭エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "あわら温泉・敦賀・若狭の歴史・伝統名所散策", description: "あわら温泉・敦賀・若狭で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "あわら温泉・敦賀・若狭の絶景・ビュースポット", description: "あわら温泉・敦賀・若狭ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["福井県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["福井県", "あわら温泉・敦賀・若狭"],
        subAreaHotels: [
            {
                        "hotelName": "あわらの隠れ宿　ゆ楽　ＹＵＲＡＫＵ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/50242/50242.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/50242/50242.html"
            },
            {
                        "hotelName": "あわら温泉　政竜閣",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/27722/27722.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/27722/27722.html"
            },
            {
                        "hotelName": "あわら温泉　ぐらばあ亭　お月見露天の宿",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/50247/50247.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/50247/50247.html"
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
    name: "山梨県",
    region: "甲信越・北陸",
    highlights: ["富士五湖・河口湖・石和温泉名所", "山梨県名物", "絶景温泉"],
    gourmet: ["山梨県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "山梨県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "富士五湖・河口湖・石和温泉",
        slug: "fujigoko-isawa",
        description: "富士五湖・河口湖・石和温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "富士五湖・河口湖・石和温泉の歴史・伝統名所散策", description: "富士五湖・河口湖・石和温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "富士五湖・河口湖・石和温泉の絶景・ビュースポット", description: "富士五湖・河口湖・石和温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["山梨県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["山梨県", "富士五湖・河口湖・石和温泉"],
        subAreaHotels: [
            {
                        "hotelName": "貸別荘　プライベートリゾートパインツリー",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4862/4862.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/4862/4862.html"
            },
            {
                        "hotelName": "フジプレミアムリゾート",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/130481/130481.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/130481/130481.html"
            },
            {
                        "hotelName": "Ｄｏｔ　Ｇｌａｍｐｉｎｇ　富士山",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/180416/180416.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/180416/180416.html"
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
    name: "長野県",
    region: "甲信越・北陸",
    highlights: ["軽井沢・上高地・白馬名所", "長野県名物", "絶景温泉"],
    gourmet: ["長野県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "長野県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "軽井沢・上高地・白馬",
        slug: "karuizawa-kamikochi",
        description: "軽井沢・上高地・白馬エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "軽井沢・上高地・白馬の歴史・伝統名所散策", description: "軽井沢・上高地・白馬で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "軽井沢・上高地・白馬の絶景・ビュースポット", description: "軽井沢・上高地・白馬ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["長野県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["長野県", "軽井沢・上高地・白馬"],
        subAreaHotels: [
            {
                        "hotelName": "軽井沢・上高地・白馬 厳選ホテル",
                        "areaName": "軽井沢・上高地・白馬",
                        "postId": "1017"
            },
            {
                        "hotelName": "軽井沢・上高地・白馬 温泉旅館",
                        "areaName": "軽井沢・上高地・白馬",
                        "postId": "1019"
            },
            {
                        "hotelName": "軽井沢・上高地・白馬 和モダン宿",
                        "areaName": "軽井沢・上高地・白馬",
                        "postId": "104526"
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
    name: "岐阜県",
    region: "東海",
    highlights: ["飛騨高山・白川郷・下呂温泉名所", "岐阜県名物", "絶景温泉"],
    gourmet: ["岐阜県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "岐阜県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "飛騨高山・白川郷・下呂温泉",
        slug: "takayama-shirakawa",
        description: "飛騨高山・白川郷・下呂温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "飛騨高山・白川郷・下呂温泉の歴史・伝統名所散策", description: "飛騨高山・白川郷・下呂温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "飛騨高山・白川郷・下呂温泉の絶景・ビュースポット", description: "飛騨高山・白川郷・下呂温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["岐阜県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["岐阜県", "飛騨高山・白川郷・下呂温泉"],
        subAreaHotels: [
            {
                        "hotelName": "たびのホテルＢａｓｅ高山駅前",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/199118/199118.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/199118/199118.html"
            },
            {
                        "hotelName": "ワットホテル＆スパ飛騨高山",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/166277/166277.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/166277/166277.html"
            },
            {
                        "hotelName": "飛騨高山　本陣平野屋　光風館（旧：飛騨高山　本陣平野屋　別館）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8326/8326.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8326/8326.html"
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
    name: "静岡県",
    region: "東海",
    highlights: ["熱海・伊東・伊豆高原名所", "静岡県名物", "絶景温泉"],
    gourmet: ["静岡県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "静岡県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "熱海・伊東・伊豆高原",
        slug: "atami-ito",
        description: "熱海・伊東・伊豆高原エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "熱海・伊東・伊豆高原の歴史・伝統名所散策", description: "熱海・伊東・伊豆高原で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "熱海・伊東・伊豆高原の絶景・ビュースポット", description: "熱海・伊東・伊豆高原ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["静岡県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["静岡県", "熱海・伊東・伊豆高原"],
        subAreaHotels: [
            {
                        "hotelName": "熱海温泉ホテル　夢いろは",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/29878/29878.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/29878/29878.html"
            },
            {
                        "hotelName": "熱海温泉　味と湯の宿　ニューとみよし",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7616/7616.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7616/7616.html"
            },
            {
                        "hotelName": "熱海温泉　山木旅館",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/3044/3044.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/3044/3044.html"
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
    name: "愛知県",
    region: "東海",
    highlights: ["名古屋・知多半島名所", "愛知県名物", "絶景温泉"],
    gourmet: ["愛知県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "愛知県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "名古屋・知多半島",
        slug: "nagoya-chita",
        description: "名古屋・知多半島エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "名古屋・知多半島の歴史・伝統名所散策", description: "名古屋・知多半島で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "名古屋・知多半島の絶景・ビュースポット", description: "名古屋・知多半島ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["愛知県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["愛知県", "名古屋・知多半島"],
        subAreaHotels: [
            {
                        "hotelName": "名古屋・知多半島 厳選ホテル",
                        "areaName": "名古屋・知多半島",
                        "postId": "1017"
            },
            {
                        "hotelName": "名古屋・知多半島 温泉旅館",
                        "areaName": "名古屋・知多半島",
                        "postId": "1019"
            },
            {
                        "hotelName": "名古屋・知多半島 和モダン宿",
                        "areaName": "名古屋・知多半島",
                        "postId": "104526"
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
    name: "三重県",
    region: "東海",
    highlights: ["伊勢神宮・志摩・鳥羽名所", "三重県名物", "絶景温泉"],
    gourmet: ["三重県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "三重県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "伊勢神宮・志摩・鳥羽",
        slug: "ise-shima",
        description: "伊勢神宮・志摩・鳥羽エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "伊勢神宮・志摩・鳥羽の歴史・伝統名所散策", description: "伊勢神宮・志摩・鳥羽で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "伊勢神宮・志摩・鳥羽の絶景・ビュースポット", description: "伊勢神宮・志摩・鳥羽ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["三重県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["三重県", "伊勢神宮・志摩・鳥羽"],
        subAreaHotels: [
            {
                        "hotelName": "味の宿　みち潮",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5545/5545.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/5545/5545.html"
            },
            {
                        "hotelName": "はなしんすい　&#65293;芭新萃&#65293;",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/12598/12598.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/12598/12598.html"
            },
            {
                        "hotelName": "お宿行灯鳥羽（ＤＬＩＧＨＴ　ＬＩＦＥ　＆　ＨＯＴＥＬＳ）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188466/188466.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/188466/188466.html"
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
    name: "滋賀県",
    region: "近畿",
    highlights: ["琵琶湖・彦根・長浜名所", "滋賀県名物", "絶景温泉"],
    gourmet: ["滋賀県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "滋賀県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "琵琶湖・彦根・長浜",
        slug: "biwako-hikone",
        description: "琵琶湖・彦根・長浜エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "琵琶湖・彦根・長浜の歴史・伝統名所散策", description: "琵琶湖・彦根・長浜で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "琵琶湖・彦根・長浜の絶景・ビュースポット", description: "琵琶湖・彦根・長浜ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["滋賀県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["滋賀県", "琵琶湖・彦根・長浜"],
        subAreaHotels: [
            {
                        "hotelName": "琵琶湖・彦根・長浜 厳選ホテル",
                        "areaName": "琵琶湖・彦根・長浜",
                        "postId": "1017"
            },
            {
                        "hotelName": "琵琶湖・彦根・長浜 温泉旅館",
                        "areaName": "琵琶湖・彦根・長浜",
                        "postId": "1019"
            },
            {
                        "hotelName": "琵琶湖・彦根・長浜 和モダン宿",
                        "areaName": "琵琶湖・彦根・長浜",
                        "postId": "104526"
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
    name: "京都府",
    region: "近畿",
    highlights: ["嵐山・宇治・天橋立名所", "京都府名物", "絶景温泉"],
    gourmet: ["京都府の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "京都府ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "嵐山・宇治・天橋立",
        slug: "arashiyama-uji",
        description: "嵐山・宇治・天橋立エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "嵐山・宇治・天橋立の歴史・伝統名所散策", description: "嵐山・宇治・天橋立で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "嵐山・宇治・天橋立の絶景・ビュースポット", description: "嵐山・宇治・天橋立ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["京都府の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["京都府", "嵐山・宇治・天橋立"],
        subAreaHotels: [
            {
                        "hotelName": "嵐山・宇治・天橋立 厳選ホテル",
                        "areaName": "嵐山・宇治・天橋立",
                        "postId": "1017"
            },
            {
                        "hotelName": "嵐山・宇治・天橋立 温泉旅館",
                        "areaName": "嵐山・宇治・天橋立",
                        "postId": "1019"
            },
            {
                        "hotelName": "嵐山・宇治・天橋立 和モダン宿",
                        "areaName": "嵐山・宇治・天橋立",
                        "postId": "104526"
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
    name: "大阪府",
    region: "近畿",
    highlights: ["難波・梅田・ベイエリア名所", "大阪府名物", "絶景温泉"],
    gourmet: ["大阪府の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "大阪府ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "難波・梅田・ベイエリア",
        slug: "namba-umeda",
        description: "難波・梅田・ベイエリアエリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "難波・梅田・ベイエリアの歴史・伝統名所散策", description: "難波・梅田・ベイエリアで絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "難波・梅田・ベイエリアの絶景・ビュースポット", description: "難波・梅田・ベイエリアならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["大阪府の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["大阪府", "難波・梅田・ベイエリア"],
        subAreaHotels: [
            {
                        "hotelName": "難波・梅田・ベイエリア 厳選ホテル",
                        "areaName": "難波・梅田・ベイエリア",
                        "postId": "1017"
            },
            {
                        "hotelName": "難波・梅田・ベイエリア 温泉旅館",
                        "areaName": "難波・梅田・ベイエリア",
                        "postId": "1019"
            },
            {
                        "hotelName": "難波・梅田・ベイエリア 和モダン宿",
                        "areaName": "難波・梅田・ベイエリア",
                        "postId": "104526"
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
    name: "兵庫県",
    region: "近畿",
    highlights: ["有馬温泉・城崎温泉・神戸名所", "兵庫県名物", "絶景温泉"],
    gourmet: ["兵庫県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "兵庫県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "有馬温泉・城崎温泉・神戸",
        slug: "arima-kinosaki",
        description: "有馬温泉・城崎温泉・神戸エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "有馬温泉・城崎温泉・神戸の歴史・伝統名所散策", description: "有馬温泉・城崎温泉・神戸で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "有馬温泉・城崎温泉・神戸の絶景・ビュースポット", description: "有馬温泉・城崎温泉・神戸ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["兵庫県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["兵庫県", "有馬温泉・城崎温泉・神戸"],
        subAreaHotels: [
            {
                        "hotelName": "有馬温泉・城崎温泉・神戸 厳選ホテル",
                        "areaName": "有馬温泉・城崎温泉・神戸",
                        "postId": "1017"
            },
            {
                        "hotelName": "有馬温泉・城崎温泉・神戸 温泉旅館",
                        "areaName": "有馬温泉・城崎温泉・神戸",
                        "postId": "1019"
            },
            {
                        "hotelName": "有馬温泉・城崎温泉・神戸 和モダン宿",
                        "areaName": "有馬温泉・城崎温泉・神戸",
                        "postId": "104526"
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
    name: "奈良県",
    region: "近畿",
    highlights: ["奈良公園・吉野山名所", "奈良県名物", "絶景温泉"],
    gourmet: ["奈良県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "奈良県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "奈良公園・吉野山",
        slug: "nara-yoshino",
        description: "奈良公園・吉野山エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "奈良公園・吉野山の歴史・伝統名所散策", description: "奈良公園・吉野山で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "奈良公園・吉野山の絶景・ビュースポット", description: "奈良公園・吉野山ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["奈良県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["奈良県", "奈良公園・吉野山"],
        subAreaHotels: [
            {
                        "hotelName": "ＡＮＤＯ　ＨＯＴＥＬ　奈良若草山（ＤＬＩＧＨＴ　ＬＩＦＥ　＆　ＨＯＴＥＬＳ）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8045/8045.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8045/8045.html"
            },
            {
                        "hotelName": "翠門亭",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188878/188878.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/188878/188878.html"
            },
            {
                        "hotelName": "天然温泉　飛鳥の湯　スーパーホテルＰｒｅｍｉｅｒＪＲ奈良駅",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/76939/76939.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/76939/76939.html"
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
    name: "和歌山県",
    region: "近畿",
    highlights: ["白浜温泉・勝浦・高野山名所", "和歌山県名物", "絶景温泉"],
    gourmet: ["和歌山県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "和歌山県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "白浜温泉・勝浦・高野山",
        slug: "shirahama-katsuura",
        description: "白浜温泉・勝浦・高野山エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "白浜温泉・勝浦・高野山の歴史・伝統名所散策", description: "白浜温泉・勝浦・高野山で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "白浜温泉・勝浦・高野山の絶景・ビュースポット", description: "白浜温泉・勝浦・高野山ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["和歌山県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["和歌山県", "白浜温泉・勝浦・高野山"],
        subAreaHotels: [
            {
                        "hotelName": "白浜温泉　ホテル三楽荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8226/8226.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8226/8226.html"
            },
            {
                        "hotelName": "白浜温泉　家族とすごす白浜の宿　柳屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9133/9133.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/9133/9133.html"
            },
            {
                        "hotelName": "白浜温泉　民宿Ａコース",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8113/8113.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8113/8113.html"
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
    name: "鳥取県",
    region: "中国",
    highlights: ["鳥取砂丘・皆生温泉・三朝温泉名所", "鳥取県名物", "絶景温泉"],
    gourmet: ["鳥取県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "鳥取県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "鳥取砂丘・皆生温泉・三朝温泉",
        slug: "sakaiminato-misasa",
        description: "鳥取砂丘・皆生温泉・三朝温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "鳥取砂丘・皆生温泉・三朝温泉の歴史・伝統名所散策", description: "鳥取砂丘・皆生温泉・三朝温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "鳥取砂丘・皆生温泉・三朝温泉の絶景・ビュースポット", description: "鳥取砂丘・皆生温泉・三朝温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["鳥取県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["鳥取県", "鳥取砂丘・皆生温泉・三朝温泉"],
        subAreaHotels: [
            {
                        "hotelName": "鳥取砂丘・皆生温泉・三朝温泉 厳選ホテル",
                        "areaName": "鳥取砂丘・皆生温泉・三朝温泉",
                        "postId": "1017"
            },
            {
                        "hotelName": "鳥取砂丘・皆生温泉・三朝温泉 温泉旅館",
                        "areaName": "鳥取砂丘・皆生温泉・三朝温泉",
                        "postId": "1019"
            },
            {
                        "hotelName": "鳥取砂丘・皆生温泉・三朝温泉 和モダン宿",
                        "areaName": "鳥取砂丘・皆生温泉・三朝温泉",
                        "postId": "104526"
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
    name: "島根県",
    region: "中国",
    highlights: ["出雲大社・松江・玉造温泉名所", "島根県名物", "絶景温泉"],
    gourmet: ["島根県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "島根県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "出雲大社・松江・玉造温泉",
        slug: "izumo-matsue",
        description: "出雲大社・松江・玉造温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "出雲大社・松江・玉造温泉の歴史・伝統名所散策", description: "出雲大社・松江・玉造温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "出雲大社・松江・玉造温泉の絶景・ビュースポット", description: "出雲大社・松江・玉造温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["島根県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["島根県", "出雲大社・松江・玉造温泉"],
        subAreaHotels: [
            {
                        "hotelName": "出雲大社・松江・玉造温泉 厳選ホテル",
                        "areaName": "出雲大社・松江・玉造温泉",
                        "postId": "1017"
            },
            {
                        "hotelName": "出雲大社・松江・玉造温泉 温泉旅館",
                        "areaName": "出雲大社・松江・玉造温泉",
                        "postId": "1019"
            },
            {
                        "hotelName": "出雲大社・松江・玉造温泉 和モダン宿",
                        "areaName": "出雲大社・松江・玉造温泉",
                        "postId": "104526"
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
    name: "岡山県",
    region: "中国",
    highlights: ["倉敷美観地区・後楽園名所", "岡山県名物", "絶景温泉"],
    gourmet: ["岡山県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "岡山県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "倉敷美観地区・後楽園",
        slug: "kurashiki-korakuen",
        description: "倉敷美観地区・後楽園エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "倉敷美観地区・後楽園の歴史・伝統名所散策", description: "倉敷美観地区・後楽園で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "倉敷美観地区・後楽園の絶景・ビュースポット", description: "倉敷美観地区・後楽園ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["岡山県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["岡山県", "倉敷美観地区・後楽園"],
        subAreaHotels: [
            {
                        "hotelName": "倉敷ロイヤルアートホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147499/147499.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/147499/147499.html"
            },
            {
                        "hotelName": "ホテル　グラン・ココエ倉敷",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/182714/182714.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/182714/182714.html"
            },
            {
                        "hotelName": "倉敷シーサイドホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/799/799.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/799/799.html"
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
    name: "広島県",
    region: "中国",
    highlights: ["宮島・厳島神社・尾道名所", "広島県名物", "絶景温泉"],
    gourmet: ["広島県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "広島県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "宮島・厳島神社・尾道",
        slug: "miyajima-onomichi",
        description: "宮島・厳島神社・尾道エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "宮島・厳島神社・尾道の歴史・伝統名所散策", description: "宮島・厳島神社・尾道で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "宮島・厳島神社・尾道の絶景・ビュースポット", description: "宮島・厳島神社・尾道ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["広島県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["広島県", "宮島・厳島神社・尾道"],
        subAreaHotels: [
            {
                        "hotelName": "安芸グランドホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7754/7754.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7754/7754.html"
            },
            {
                        "hotelName": "サンホテル大竹",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188903/188903.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/188903/188903.html"
            },
            {
                        "hotelName": "グランヴィリオホテル宮島　和蔵　&#65293;ルートインホテルズ&#65293;",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/180527/180527.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/180527/180527.html"
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
    name: "山口県",
    region: "中国",
    highlights: ["角島・萩・長門湯本温泉名所", "山口県名物", "絶景温泉"],
    gourmet: ["山口県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "山口県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "角島・萩・長門湯本温泉",
        slug: "tsunoshima-hagi",
        description: "角島・萩・長門湯本温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "角島・萩・長門湯本温泉の歴史・伝統名所散策", description: "角島・萩・長門湯本温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "角島・萩・長門湯本温泉の絶景・ビュースポット", description: "角島・萩・長門湯本温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["山口県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["山口県", "角島・萩・長門湯本温泉"],
        subAreaHotels: [
            {
                        "hotelName": "萩温泉郷　海が奏でる癒しの宿　リゾートホテル美萩",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147160/147160.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/147160/147160.html"
            },
            {
                        "hotelName": "長門湯本温泉　湯本観光ホテル　西京",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7243/7243.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7243/7243.html"
            },
            {
                        "hotelName": "萩温泉郷　夕景の宿　海のゆりかご　萩小町",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/54096/54096.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/54096/54096.html"
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
    name: "徳島県",
    region: "四国",
    highlights: ["鳴門・祖谷渓温泉名所", "徳島県名物", "絶景温泉"],
    gourmet: ["徳島県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "徳島県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "鳴門・祖谷渓温泉",
        slug: "naruto-iya",
        description: "鳴門・祖谷渓温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "鳴門・祖谷渓温泉の歴史・伝統名所散策", description: "鳴門・祖谷渓温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "鳴門・祖谷渓温泉の絶景・ビュースポット", description: "鳴門・祖谷渓温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["徳島県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["徳島県", "鳴門・祖谷渓温泉"],
        subAreaHotels: [
            {
                        "hotelName": "鳴門・祖谷渓温泉 厳選ホテル",
                        "areaName": "鳴門・祖谷渓温泉",
                        "postId": "1017"
            },
            {
                        "hotelName": "鳴門・祖谷渓温泉 温泉旅館",
                        "areaName": "鳴門・祖谷渓温泉",
                        "postId": "1019"
            },
            {
                        "hotelName": "鳴門・祖谷渓温泉 和モダン宿",
                        "areaName": "鳴門・祖谷渓温泉",
                        "postId": "104526"
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
    name: "香川県",
    region: "四国",
    highlights: ["琴平・金刀比羅宮・小豆島名所", "香川県名物", "絶景温泉"],
    gourmet: ["香川県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "香川県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "琴平・金刀比羅宮・小豆島",
        slug: "kotohira-shodoshima",
        description: "琴平・金刀比羅宮・小豆島エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "琴平・金刀比羅宮・小豆島の歴史・伝統名所散策", description: "琴平・金刀比羅宮・小豆島で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "琴平・金刀比羅宮・小豆島の絶景・ビュースポット", description: "琴平・金刀比羅宮・小豆島ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["香川県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["香川県", "琴平・金刀比羅宮・小豆島"],
        subAreaHotels: [
            {
                        "hotelName": "御宿　敷島館（共立リゾート）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176626/176626.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/176626/176626.html"
            },
            {
                        "hotelName": "湯元こんぴら温泉華の湯　紅梅亭",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/5901/5901.html"
            },
            {
                        "hotelName": "こんぴら温泉　琴平グランドホテル　桜の抄",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5900/5900.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/5900/5900.html"
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
    name: "愛媛県",
    region: "四国",
    highlights: ["道後温泉・しまなみ海道名所", "愛媛県名物", "絶景温泉"],
    gourmet: ["愛媛県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "愛媛県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "道後温泉・しまなみ海道",
        slug: "dogo-shimanami",
        description: "道後温泉・しまなみ海道エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "道後温泉・しまなみ海道の歴史・伝統名所散策", description: "道後温泉・しまなみ海道で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "道後温泉・しまなみ海道の絶景・ビュースポット", description: "道後温泉・しまなみ海道ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["愛媛県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["愛媛県", "道後温泉・しまなみ海道"],
        subAreaHotels: [
            {
                        "hotelName": "道後温泉・しまなみ海道 厳選ホテル",
                        "areaName": "道後温泉・しまなみ海道",
                        "postId": "1017"
            },
            {
                        "hotelName": "道後温泉・しまなみ海道 温泉旅館",
                        "areaName": "道後温泉・しまなみ海道",
                        "postId": "1019"
            },
            {
                        "hotelName": "道後温泉・しまなみ海道 和モダン宿",
                        "areaName": "道後温泉・しまなみ海道",
                        "postId": "104526"
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
    name: "高知県",
    region: "四国",
    highlights: ["桂浜・四万十川名所", "高知県名物", "絶景温泉"],
    gourmet: ["高知県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "高知県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "桂浜・四万十川",
        slug: "katsurahama-shimanto",
        description: "桂浜・四万十川エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "桂浜・四万十川の歴史・伝統名所散策", description: "桂浜・四万十川で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "桂浜・四万十川の絶景・ビュースポット", description: "桂浜・四万十川ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["高知県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["高知県", "桂浜・四万十川"],
        subAreaHotels: [
            {
                        "hotelName": "ホテルアベスト高知",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1553/1553.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/1553/1553.html"
            },
            {
                        "hotelName": "セブンデイズホテルプラス",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/54659/54659.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/54659/54659.html"
            },
            {
                        "hotelName": "メルキュール高知土佐リゾート＆スパ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8724/8724.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8724/8724.html"
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
    name: "福岡県",
    region: "九州・沖縄",
    highlights: ["太宰府・糸島・柳川名所", "福岡県名物", "絶景温泉"],
    gourmet: ["福岡県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "福岡県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "太宰府・糸島・柳川",
        slug: "dazaifu-itoishima",
        description: "太宰府・糸島・柳川エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "太宰府・糸島・柳川の歴史・伝統名所散策", description: "太宰府・糸島・柳川で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "太宰府・糸島・柳川の絶景・ビュースポット", description: "太宰府・糸島・柳川ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["福岡県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["福岡県", "太宰府・糸島・柳川"],
        subAreaHotels: [
            {
                        "hotelName": "ホテルアクティブ！博多",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108259/108259.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/108259/108259.html"
            },
            {
                        "hotelName": "天然温泉　八百治の湯　八百治博多ホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5012/5012.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/5012/5012.html"
            },
            {
                        "hotelName": "ネストホテル博多駅前",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/165238/165238.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/165238/165238.html"
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
    name: "佐賀県",
    region: "九州・沖縄",
    highlights: ["嬉野温泉・武雄・唐津名所", "佐賀県名物", "絶景温泉"],
    gourmet: ["佐賀県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "佐賀県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "嬉野温泉・武雄・唐津",
        slug: "ureseno-karatsu",
        description: "嬉野温泉・武雄・唐津エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "嬉野温泉・武雄・唐津の歴史・伝統名所散策", description: "嬉野温泉・武雄・唐津で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "嬉野温泉・武雄・唐津の絶景・ビュースポット", description: "嬉野温泉・武雄・唐津ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["佐賀県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["佐賀県", "嬉野温泉・武雄・唐津"],
        subAreaHotels: [
            {
                        "hotelName": "セントラルホテル伊万里",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68081/68081.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/68081/68081.html"
            },
            {
                        "hotelName": "嬉野温泉　旅館　吉田屋",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40786/40786.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/40786/40786.html"
            },
            {
                        "hotelName": "嬉野温泉　和多屋別荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40527/40527.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/40527/40527.html"
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
    name: "長崎県",
    region: "九州・沖縄",
    highlights: ["ハウステンボス・雲仙温泉名所", "長崎県名物", "絶景温泉"],
    gourmet: ["長崎県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "長崎県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "ハウステンボス・雲仙温泉",
        slug: "huistenbosch-unzen",
        description: "ハウステンボス・雲仙温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "ハウステンボス・雲仙温泉の歴史・伝統名所散策", description: "ハウステンボス・雲仙温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "ハウステンボス・雲仙温泉の絶景・ビュースポット", description: "ハウステンボス・雲仙温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["長崎県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["長崎県", "ハウステンボス・雲仙温泉"],
        subAreaHotels: [
            {
                        "hotelName": "弓張の丘ホテル",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7808/7808.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7808/7808.html"
            },
            {
                        "hotelName": "ホテルアムステルダム　ハウステンボス",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/9157/9157.html"
            },
            {
                        "hotelName": "クインテッサホテル佐世保",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/53172/53172.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/53172/53172.html"
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
    name: "熊本県",
    region: "九州・沖縄",
    highlights: ["黒川温泉・阿蘇山名所", "熊本県名物", "絶景温泉"],
    gourmet: ["熊本県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "熊本県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "黒川温泉・阿蘇山",
        slug: "kurokawa-aso",
        description: "黒川温泉・阿蘇山エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "黒川温泉・阿蘇山の歴史・伝統名所散策", description: "黒川温泉・阿蘇山で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "黒川温泉・阿蘇山の絶景・ビュースポット", description: "黒川温泉・阿蘇山ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["熊本県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["熊本県", "黒川温泉・阿蘇山"],
        subAreaHotels: [
            {
                        "hotelName": "杖立渓流の宿大自然",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/27949/27949.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/27949/27949.html"
            },
            {
                        "hotelName": "黒川温泉　湯峡の響き　優彩",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/31796/31796.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/31796/31796.html"
            },
            {
                        "hotelName": "黒川温泉　山みず木別邸　深山山荘",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147706/147706.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/147706/147706.html"
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
    name: "大分県",
    region: "九州・沖縄",
    highlights: ["別府温泉・由布院温泉名所", "大分県名物", "絶景温泉"],
    gourmet: ["大分県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "大分県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "別府温泉・由布院温泉",
        slug: "beppu-yufuin",
        description: "別府温泉・由布院温泉エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "別府温泉・由布院温泉の歴史・伝統名所散策", description: "別府温泉・由布院温泉で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "別府温泉・由布院温泉の絶景・ビュースポット", description: "別府温泉・由布院温泉ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["大分県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["大分県", "別府温泉・由布院温泉"],
        subAreaHotels: [
            {
                        "hotelName": "エンゼルグランヴィラ由布院（旧ときリゾート由布院別邸）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/198983/198983.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/198983/198983.html"
            },
            {
                        "hotelName": "由布院温泉　草庵秋桜",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/139452/139452.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/139452/139452.html"
            },
            {
                        "hotelName": "湯布院温泉　御宿　由布乃庄",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/106080/106080.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/106080/106080.html"
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
    name: "宮崎県",
    region: "九州・沖縄",
    highlights: ["高千穂・青島・日南名所", "宮崎県名物", "絶景温泉"],
    gourmet: ["宮崎県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "宮崎県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "高千穂・青島・日南",
        slug: "takachiho-aoshima",
        description: "高千穂・青島・日南エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "高千穂・青島・日南の歴史・伝統名所散策", description: "高千穂・青島・日南で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "高千穂・青島・日南の絶景・ビュースポット", description: "高千穂・青島・日南ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["宮崎県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["宮崎県", "高千穂・青島・日南"],
        subAreaHotels: [
            {
                        "hotelName": "ＦＡＶ　ＬＵＸ　宮崎",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/199224/199224.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/199224/199224.html"
            },
            {
                        "hotelName": "ＡＮＡホリデイ・インリゾート宮崎　ｂｙ　ＩＨＧ",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8782/8782.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8782/8782.html"
            },
            {
                        "hotelName": "天然温泉　日向の湯　ドーミーイン宮崎（ドーミーイン・御宿野乃　ホテルズグループ）",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/162643/162643.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/162643/162643.html"
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
    name: "鹿児島県",
    region: "九州・沖縄",
    highlights: ["指宿温泉・霧島温泉・屋久島名所", "鹿児島県名物", "絶景温泉"],
    gourmet: ["鹿児島県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "鹿児島県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "指宿温泉・霧島温泉・屋久島",
        slug: "ibusuki-kirishima",
        description: "指宿温泉・霧島温泉・屋久島エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "指宿温泉・霧島温泉・屋久島の歴史・伝統名所散策", description: "指宿温泉・霧島温泉・屋久島で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "指宿温泉・霧島温泉・屋久島の絶景・ビュースポット", description: "指宿温泉・霧島温泉・屋久島ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["鹿児島県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["鹿児島県", "指宿温泉・霧島温泉・屋久島"],
        subAreaHotels: [
            {
                        "hotelName": "指宿温泉・霧島温泉・屋久島 厳選ホテル",
                        "areaName": "指宿温泉・霧島温泉・屋久島",
                        "postId": "1017"
            },
            {
                        "hotelName": "指宿温泉・霧島温泉・屋久島 温泉旅館",
                        "areaName": "指宿温泉・霧島温泉・屋久島",
                        "postId": "1019"
            },
            {
                        "hotelName": "指宿温泉・霧島温泉・屋久島 和モダン宿",
                        "areaName": "指宿温泉・霧島温泉・屋久島",
                        "postId": "104526"
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
    name: "沖縄県",
    region: "九州・沖縄",
    highlights: ["石垣島・宮古島・恩納村名所", "沖縄県名物", "絶景温泉"],
    gourmet: ["沖縄県の獲れたて海鮮・ご当地名物", "地場グルメ"],
    description: "沖縄県ならではの四季折々の自然美と豊かな歴史・食文化を心ゆくまで堪能する特別な旅のガイド。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "石垣島・宮古島・恩納村",
        slug: "ishigaki-miyako",
        description: "石垣島・宮古島・恩納村エリアを代表する観光名所や絶景、名物グルメが凝縮された大人気散策コース。",
        spots: [
          { name: "石垣島・宮古島・恩納村の歴史・伝統名所散策", description: "石垣島・宮古島・恩納村で絶対に訪れたい歴史ある名所と風情あふれる街並み。" },
          { name: "石垣島・宮古島・恩納村の絶景・ビュースポット", description: "石垣島・宮古島・恩納村ならではの四季折々の絶景と感動が広がる美しいロケーション。" },
        ],
        gourmet: ["沖縄県の獲れたて海鮮・ご当地名物", "老舗の味・名物グルメ"],
        keywords: ["沖縄県", "石垣島・宮古島・恩納村"],
        subAreaHotels: [
            {
                        "hotelName": "石垣島・宮古島・恩納村 厳選ホテル",
                        "areaName": "石垣島・宮古島・恩納村",
                        "postId": "1017"
            },
            {
                        "hotelName": "石垣島・宮古島・恩納村 温泉旅館",
                        "areaName": "石垣島・宮古島・恩納村",
                        "postId": "1019"
            },
            {
                        "hotelName": "石垣島・宮古島・恩納村 和モダン宿",
                        "areaName": "石垣島・宮古島・恩納村",
                        "postId": "104526"
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
