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
    highlights: ["函館山夜景", "五稜郭", "湯の川温泉"],
    gourmet: ["イカ刺し", "海鮮丼", "塩ラーメン"],
    description: "100万ドルの夜景と情緒ある街並み、豊かな名湯が彩る北海道の代表的ロマンエリア。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "函館・湯の川温泉",
        slug: "hakodate",
        description: "北海道を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "函館山夜景", description: "北海道旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "五稜郭", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["イカ刺し", "海鮮丼", "塩ラーメン"],
        keywords: ["北海道", "函館・湯の川温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "函館・湯の川温泉",
                        "postId": "56773",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/56773/56773.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/56773/56773.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "函館・湯の川温泉",
                        "postId": "192816",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/192816/192816.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/192816/192816.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "函館・湯の川温泉",
                        "postId": "67479",
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
        name: "北海道 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "北海道限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "北海道 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "北海道のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "北海道 代表銘醸地酒",
        brewery: "北海道名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "aomori",
    name: "青森県",
    region: "東北",
    highlights: ["弘前城", "奥入瀬渓流", "ねぶたの家ワ・ラッセ"],
    gourmet: ["大間マグロ", "青森りんご", "煎餅汁"],
    description: "四季の色彩と伝統あるお祭り、奥入瀬の清流が息づく北東北の絶景エリア。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "青森・弘前周辺",
        slug: "aomori-hirosaki",
        description: "青森県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "弘前城", description: "青森県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "奥入瀬渓流", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["大間マグロ", "青森りんご", "煎餅汁"],
        keywords: ["青森県", "青森・弘前周辺"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "青森・弘前周辺",
                        "postId": "70291",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/70291/70291.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/70291/70291.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "青森・弘前周辺",
                        "postId": "50632",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/50632/50632.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/50632/50632.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "青森・弘前周辺",
                        "postId": "70297",
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
        name: "青森県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "青森県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "青森県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "青森県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "青森県 代表銘醸地酒",
        brewery: "青森県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "iwate",
    name: "岩手県",
    region: "東北",
    highlights: ["中尊寺金色堂", "花巻温泉郷", "小岩井農場"],
    gourmet: ["わんこそば", "盛岡冷麺", "前沢牛"],
    description: "世界遺産平泉と宮沢賢治ゆかりの花巻、豊かな自然と美食が広がるみちのくの郷。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "盛岡・花巻温泉周辺",
        slug: "morioka-hanamaki",
        description: "岩手県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "中尊寺金色堂", description: "岩手県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "花巻温泉郷", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["わんこそば", "盛岡冷麺", "前沢牛"],
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
        name: "岩手県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "岩手県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "岩手県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "岩手県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "岩手県 代表銘醸地酒",
        brewery: "岩手県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "miyagi",
    name: "宮城県",
    region: "東北",
    highlights: ["日本三景松島", "仙台城跡", "秋保温泉"],
    gourmet: ["牛タン焼き", "ずんだ餅", "笹かまぼこ"],
    description: "杜の都仙台と日本三景松島、奥州の名湯に恵まれた東北最高の観光ハブ。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "仙台・松島・秋保温泉",
        slug: "sendai-matsushima",
        description: "宮城県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "日本三景松島", description: "宮城県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "仙台城跡", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["牛タン焼き", "ずんだ餅", "笹かまぼこ"],
        keywords: ["宮城県", "仙台・松島・秋保温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "仙台・松島・秋保温泉",
                        "postId": "182463",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/182463/182463.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/182463/182463.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "仙台・松島・秋保温泉",
                        "postId": "177046",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/177046/177046.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/177046/177046.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "仙台・松島・秋保温泉",
                        "postId": "4934",
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
        name: "宮城県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "宮城県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "宮城県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "宮城県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "宮城県 代表銘醸地酒",
        brewery: "宮城県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "akita",
    name: "秋田県",
    region: "東北",
    highlights: ["角館武家屋敷", "乳頭温泉郷", "田沢湖"],
    gourmet: ["きりたんぽ鍋", "稲庭うどん", "比内地鶏"],
    description: "みちのくの小京都角館と秘湯乳頭温泉、深い歴史と雪国の情景が広がる憧れの地。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "秋田・角館・乳頭温泉",
        slug: "akita-kakunodate",
        description: "秋田県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "角館武家屋敷", description: "秋田県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "乳頭温泉郷", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["きりたんぽ鍋", "稲庭うどん", "比内地鶏"],
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
        name: "秋田県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "秋田県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "秋田県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "秋田県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "秋田県 代表銘醸地酒",
        brewery: "秋田県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "yamagata",
    name: "山形県",
    region: "東北",
    highlights: ["銀山温泉", "蔵王樹氷", "立石寺（山寺）"],
    gourmet: ["米沢牛", "山形芋煮", "サクランボ"],
    description: "ノスタルジックな銀山温泉の街並みと樹氷のパノラマ、四季の美食が心を満たす絶景の地。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "山形・蔵王温泉・銀山温泉",
        slug: "yamagata-zao",
        description: "山形県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "銀山温泉", description: "山形県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "蔵王樹氷", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["米沢牛", "山形芋煮", "サクランボ"],
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
        name: "山形県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "山形県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "山形県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "山形県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "山形県 代表銘醸地酒",
        brewery: "山形県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "fukushima",
    name: "福島県",
    region: "東北",
    highlights: ["鶴ヶ城", "大内宿", "裏磐梯五色沼"],
    gourmet: ["喜多方ラーメン", "会津ソースカツ丼", "馬刺し"],
    description: "幕末の歴史が残る城下町と大自然の五色沼、名湯が心をほぐす彩り豊かなエリア。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "会津若松・裏磐梯・東山温泉",
        slug: "aizu-bandai",
        description: "福島県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "鶴ヶ城", description: "福島県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "大内宿", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["喜多方ラーメン", "会津ソースカツ丼", "馬刺し"],
        keywords: ["福島県", "会津若松・裏磐梯・東山温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "会津若松・裏磐梯・東山温泉",
                        "postId": "28624",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/28624/28624.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/28624/28624.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "会津若松・裏磐梯・東山温泉",
                        "postId": "12682",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/12682/12682.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/12682/12682.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "会津若松・裏磐梯・東山温泉",
                        "postId": "4781",
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
        name: "福島県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "福島県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "福島県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "福島県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "福島県 代表銘醸地酒",
        brewery: "福島県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "ibaraki",
    name: "茨城県",
    region: "関東",
    highlights: ["国営ひたち海浜公園", "偕楽園", "大洗磯前神社"],
    gourmet: ["常陸牛", "水戸納豆", "あんこう鍋"],
    description: "ネモフィラのブルー絨毯と歴史ある水戸藩の文化、絶品海鮮が迎える風光明媚な地。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "水戸・大洗・ひたちなか",
        slug: "mito-oarai",
        description: "茨城県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "国営ひたち海浜公園", description: "茨城県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "偕楽園", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["常陸牛", "水戸納豆", "あんこう鍋"],
        keywords: ["茨城県", "水戸・大洗・ひたちなか"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "水戸・大洗・ひたちなか",
                        "postId": "44177",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/44177/44177.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/44177/44177.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "水戸・大洗・ひたちなか",
                        "postId": "2099",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/2099/2099.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/2099/2099.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "水戸・大洗・ひたちなか",
                        "postId": "80617",
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
        name: "茨城県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "茨城県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "茨城県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "茨城県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "茨城県 代表銘醸地酒",
        brewery: "茨城県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "tochigi",
    name: "栃木県",
    region: "関東",
    highlights: ["日光東照宮", "華厳の滝", "鬼怒川温泉"],
    gourmet: ["宇都宮餃子", "日光湯波", "とちおとめ"],
    description: "世界遺産日光の荘厳な社寺群と渓谷美を望む名湯リゾートが広がる関東屈指の観光地。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "日光・鬼怒川温泉",
        slug: "nikko-kinugawa",
        description: "栃木県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "日光東照宮", description: "栃木県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "華厳の滝", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["宇都宮餃子", "日光湯波", "とちおとめ"],
        keywords: ["栃木県", "日光・鬼怒川温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "日光・鬼怒川温泉",
                        "postId": "189179",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/189179/189179.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/189179/189179.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "日光・鬼怒川温泉",
                        "postId": "198852",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/198852/198852.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/198852/198852.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "日光・鬼怒川温泉",
                        "postId": "108140",
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
        name: "栃木県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "栃木県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "栃木県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "栃木県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "栃木県 代表銘醸地酒",
        brewery: "栃木県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "gunma",
    name: "群馬県",
    region: "関東",
    highlights: ["草津温泉湯畑", "伊香保石段街", "富岡製糸場"],
    gourmet: ["水沢うどん", "上州牛", "焼きまんじゅう"],
    description: "日本屈指の湯量を誇る草津と情緒溢れる石段街の伊香保、名湯めぐりの最高峰。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "草津温泉・伊香保温泉",
        slug: "kusatsu-ikaho",
        description: "群馬県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "草津温泉湯畑", description: "群馬県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "伊香保石段街", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["水沢うどん", "上州牛", "焼きまんじゅう"],
        keywords: ["群馬県", "草津温泉・伊香保温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "草津温泉・伊香保温泉",
                        "postId": "2398",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/2398/2398.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/2398/2398.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "草津温泉・伊香保温泉",
                        "postId": "56137",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/56137/56137.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/56137/56137.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "草津温泉・伊香保温泉",
                        "postId": "176541",
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
        name: "群馬県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "群馬県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "群馬県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "群馬県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "群馬県 代表銘醸地酒",
        brewery: "群馬県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "saitama",
    name: "埼玉県",
    region: "関東",
    highlights: ["川越蔵造りの街並み", "秩父神社", "長瀞ラインくだり"],
    gourmet: ["川越うなぎ", "草加せんべい", "秩父みそポテト"],
    description: "小江戸川越のレトロな雰囲気と秩父・長瀞の大自然アクティビティが魅力のエリア。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "川越・秩父・長瀞",
        slug: "kawagoe-chichibu",
        description: "埼玉県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "川越蔵造りの街並み", description: "埼玉県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "秩父神社", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["川越うなぎ", "草加せんべい", "秩父みそポテト"],
        keywords: ["埼玉県", "川越・秩父・長瀞"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "川越・秩父・長瀞",
                        "postId": "6100",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/6100/6100.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/6100/6100.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "川越・秩父・長瀞",
                        "postId": "9485",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9485/9485.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/9485/9485.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "川越・秩父・長瀞",
                        "postId": "68504",
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
        name: "埼玉県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "埼玉県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "埼玉県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "埼玉県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "埼玉県 代表銘醸地酒",
        brewery: "埼玉県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "chiba",
    name: "千葉県",
    region: "関東",
    highlights: ["東京ディズニーリゾート", "鴨川シーワールド", "成田山新勝寺"],
    gourmet: ["勝浦タンタンメン", "房総なめろう", "伊勢海老"],
    description: "世界的人気テーマパークと温暖な房総半島の海鮮グルメ、リゾートリフレッシュの地。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "浦安・舞浜・南房総",
        slug: "urayasu-boso",
        description: "千葉県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "東京ディズニーリゾート", description: "千葉県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "鴨川シーワールド", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["勝浦タンタンメン", "房総なめろう", "伊勢海老"],
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
        name: "千葉県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "千葉県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "千葉県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "千葉県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "千葉県 代表銘醸地酒",
        brewery: "千葉県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "tokyo",
    name: "東京都",
    region: "関東",
    highlights: ["浅草寺", "東京タワー", "東京スカイツリー"],
    gourmet: ["江戸前寿司", "もんじゃ焼き", "深川めし"],
    description: "伝統と最先端が交錯する世界最高峰のメトロポリス。グルメ・お買い物・名所が目白押し。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "新宿・銀座・東京駅",
        slug: "shinjuku-ginza",
        description: "東京都を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "浅草寺", description: "東京都旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "東京タワー", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["江戸前寿司", "もんじゃ焼き", "深川めし"],
        keywords: ["東京都", "新宿・銀座・東京駅"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "新宿・銀座・東京駅",
                        "postId": "128577",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/128577/128577.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/128577/128577.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "新宿・銀座・東京駅",
                        "postId": "179145",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/179145/179145.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/179145/179145.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "新宿・銀座・東京駅",
                        "postId": "51870",
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
        name: "東京都 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "東京都限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "東京都 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "東京都のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "東京都 代表銘醸地酒",
        brewery: "東京都名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "kanagawa",
    name: "神奈川県",
    region: "関東",
    highlights: ["箱根芦ノ湖", "鎌倉大仏", "横浜中華街"],
    gourmet: ["横浜中華街小籠包", "鎌倉しらす丼", "箱根黒たまご"],
    description: "都心からのアクセス抜群。歴史の都鎌倉、異国情緒の横浜、日本を代表する温泉リゾート箱根。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "箱根温泉・鎌倉・横浜",
        slug: "hakone-kamakura",
        description: "神奈川県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "箱根芦ノ湖", description: "神奈川県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "鎌倉大仏", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["横浜中華街小籠包", "鎌倉しらす丼", "箱根黒たまご"],
        keywords: ["神奈川県", "箱根温泉・鎌倉・横浜"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "箱根温泉・鎌倉・横浜",
                        "postId": "142874",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/142874/142874.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/142874/142874.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "箱根温泉・鎌倉・横浜",
                        "postId": "10956",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/10956/10956.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/10956/10956.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "箱根温泉・鎌倉・横浜",
                        "postId": "9669",
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
        name: "神奈川県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "神奈川県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "神奈川県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "神奈川県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "神奈川県 代表銘醸地酒",
        brewery: "神奈川県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "niigata",
    name: "新潟県",
    region: "甲信越・北陸",
    highlights: ["佐渡金山", "清津峡渓谷トンネル", "越後湯沢温泉"],
    gourmet: ["南魚沼産コシヒカリ", "のどぐろ", "タレカツ丼"],
    description: "日本一の米どころと極上の日本酒、銀世界の銀盤と絶景名湯が織りなす憧れの雪国。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "越後湯沢・苗場・佐渡",
        slug: "echigo-yuzawa",
        description: "新潟県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "佐渡金山", description: "新潟県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "清津峡渓谷トンネル", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["南魚沼産コシヒカリ", "のどぐろ", "タレカツ丼"],
        keywords: ["新潟県", "越後湯沢・苗場・佐渡"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "越後湯沢・苗場・佐渡",
                        "postId": "7518",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7518/7518.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7518/7518.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "越後湯沢・苗場・佐渡",
                        "postId": "30694",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/30694/30694.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/30694/30694.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "越後湯沢・苗場・佐渡",
                        "postId": "197415",
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
        name: "新潟県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "新潟県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "新潟県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "新潟県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "新潟県 代表銘醸地酒",
        brewery: "新潟県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "toyama",
    name: "富山県",
    region: "甲信越・北陸",
    highlights: ["立山黒部アルペンルート", "雨晴海岸", "宇奈月温泉"],
    gourmet: ["富山湾の白エビ", "鱒寿司", "氷見ハモ"],
    description: "「富山湾の宝石」白エビや寒ブリと、3000m級の立山連峰が織りなす神秘的な絶景エリア。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "富山・立山黒部・宇奈月温泉",
        slug: "toyama-unazuki",
        description: "富山県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "立山黒部アルペンルート", description: "富山県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "雨晴海岸", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["富山湾の白エビ", "鱒寿司", "氷見ハモ"],
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
        name: "富山県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "富山県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "富山県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "富山県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "富山県 代表銘醸地酒",
        brewery: "富山県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "ishikawa",
    name: "石川県",
    region: "甲信越・北陸",
    highlights: ["兼六園", "金沢ひがし茶屋街", "加賀温泉郷"],
    gourmet: ["加賀料理", "金沢カレー", "ズワイガニ"],
    description: "加賀百万石の伝統文化と金箔工芸、絶品の日本海海鮮が咲き誇る人気No.1観光ハブ。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "金沢・ひがし茶屋街周辺",
        slug: "higashi-chaya",
        description: "石川県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "兼六園", description: "石川県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "金沢ひがし茶屋街", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["加賀料理", "金沢カレー", "ズワイガニ"],
        keywords: ["石川県", "金沢・ひがし茶屋街周辺"],
        subAreaHotels: [
            {
                        "hotelName": "金沢・ひがし茶屋街周辺 厳選ホテル",
                        "areaName": "金沢・ひがし茶屋街周辺",
                        "postId": "1017"
            },
            {
                        "hotelName": "金沢・ひがし茶屋街周辺 温泉旅館",
                        "areaName": "金沢・ひがし茶屋街周辺",
                        "postId": "1019"
            },
            {
                        "hotelName": "金沢・ひがし茶屋街周辺 和モダン宿",
                        "areaName": "金沢・ひがし茶屋街周辺",
                        "postId": "104526"
            }
]
      }
    ],
    cafes: [
      {
        name: "石川県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "石川県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "石川県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "石川県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "石川県 代表銘醸地酒",
        brewery: "石川県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "fukui",
    name: "福井県",
    region: "甲信越・北陸",
    highlights: ["東尋坊", "福井県立恐竜博物館", "あわら温泉"],
    gourmet: ["越前ガニ", "ソースカツ丼", "越前おろしそば"],
    description: "世界的な恐竜博物館と東尋坊の崖絶景、王者越前ガニの美食が詰まった人気スポット。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "あわら温泉・敦賀・若狭",
        slug: "awara-tsuruga",
        description: "福井県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "東尋坊", description: "福井県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "福井県立恐竜博物館", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["越前ガニ", "ソースカツ丼", "越前おろしそば"],
        keywords: ["福井県", "あわら温泉・敦賀・若狭"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "あわら温泉・敦賀・若狭",
                        "postId": "50242",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/50242/50242.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/50242/50242.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "あわら温泉・敦賀・若狭",
                        "postId": "27722",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/27722/27722.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/27722/27722.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "あわら温泉・敦賀・若狭",
                        "postId": "50247",
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
        name: "福井県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "福井県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "福井県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "福井県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "福井県 代表銘醸地酒",
        brewery: "福井県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "yamanashi",
    name: "山梨県",
    region: "甲信越・北陸",
    highlights: ["富士山", "河口湖", "新倉山浅間公園"],
    gourmet: ["ほうとう", "甲州ブドウ・ワイン", "信玄餅"],
    description: "富士山の雄大な姿を正面に仰ぎ、名物ほうとうと日本一のワイナリー巡りを楽しむ。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "富士五湖・河口湖・石和温泉",
        slug: "fujigoko-isawa",
        description: "山梨県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "富士山", description: "山梨県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "河口湖", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["ほうとう", "甲州ブドウ・ワイン", "信玄餅"],
        keywords: ["山梨県", "富士五湖・河口湖・石和温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "富士五湖・河口湖・石和温泉",
                        "postId": "4862",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4862/4862.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/4862/4862.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "富士五湖・河口湖・石和温泉",
                        "postId": "130481",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/130481/130481.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/130481/130481.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "富士五湖・河口湖・石和温泉",
                        "postId": "180416",
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
        name: "山梨県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "山梨県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "山梨県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "山梨県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "山梨県 代表銘醸地酒",
        brewery: "山梨県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "nagano",
    name: "長野県",
    region: "甲信越・北陸",
    highlights: ["上高地河童橋", "善光寺", "軽井沢プリンスショッピングプラザ"],
    gourmet: ["信州そば", "おやき", "野沢菜"],
    description: "信州の大自然パノラマと洗練された避暑地軽井沢、歴史ある善光寺の参拝ルート。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "軽井沢・上高地・白馬",
        slug: "karuizawa-kamikochi",
        description: "長野県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "上高地河童橋", description: "長野県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "善光寺", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["信州そば", "おやき", "野沢菜"],
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
        name: "長野県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "長野県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "長野県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "長野県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "長野県 代表銘醸地酒",
        brewery: "長野県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "gifu",
    name: "岐阜県",
    region: "東海",
    highlights: ["白川郷合掌造り集落", "飛騨高山古い町並", "下呂温泉"],
    gourmet: ["飛騨牛ステーキ", "朴葉みそ", "栗きんとん"],
    description: "世界遺産白川郷と天下の名湯下呂温泉、江戸の面影が色濃く残る飛騨高山の風情。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "飛騨高山・白川郷・下呂温泉",
        slug: "takayama-shirakawa",
        description: "岐阜県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "白川郷合掌造り集落", description: "岐阜県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "飛騨高山古い町並", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["飛騨牛ステーキ", "朴葉みそ", "栗きんとん"],
        keywords: ["岐阜県", "飛騨高山・白川郷・下呂温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "飛騨高山・白川郷・下呂温泉",
                        "postId": "199118",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/199118/199118.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/199118/199118.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "飛騨高山・白川郷・下呂温泉",
                        "postId": "166277",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/166277/166277.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/166277/166277.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "飛騨高山・白川郷・下呂温泉",
                        "postId": "8326",
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
        name: "岐阜県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "岐阜県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "岐阜県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "岐阜県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "岐阜県 代表銘醸地酒",
        brewery: "岐阜県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "shizuoka",
    name: "静岡県",
    region: "東海",
    highlights: ["富士山絶景", "熱海温泉", "城ヶ崎海岸"],
    gourmet: ["富士宮やきそば", "静岡茶", "桜えび・うなぎ"],
    description: "海と温泉の特等席。熱海・伊豆のリゾートリラクゼーションと新鮮魚介の美食旅。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "熱海・伊東・伊豆高原",
        slug: "atami-ito",
        description: "静岡県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "富士山絶景", description: "静岡県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "熱海温泉", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["富士宮やきそば", "静岡茶", "桜えび・うなぎ"],
        keywords: ["静岡県", "熱海・伊東・伊豆高原"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "熱海・伊東・伊豆高原",
                        "postId": "29878",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/29878/29878.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/29878/29878.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "熱海・伊東・伊豆高原",
                        "postId": "7616",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7616/7616.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7616/7616.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "熱海・伊東・伊豆高原",
                        "postId": "3044",
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
        name: "静岡県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "静岡県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "静岡県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "静岡県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "静岡県 代表銘醸地酒",
        brewery: "静岡県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "aichi",
    name: "愛知県",
    region: "東海",
    highlights: ["名古屋城", "熱田神宮", "ジブリパーク"],
    gourmet: ["ひつまぶし", "味噌カツ", "手羽先唐揚げ"],
    description: "黄金のシャチホコ輝く名古屋城と話題のジブリパーク、名物なごやめしの食べ歩き。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "名古屋・知多半島",
        slug: "nagoya-chita",
        description: "愛知県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "名古屋城", description: "愛知県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "熱田神宮", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["ひつまぶし", "味噌カツ", "手羽先唐揚げ"],
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
        name: "愛知県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "愛知県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "愛知県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "愛知県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "愛知県 代表銘醸地酒",
        brewery: "愛知県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "mie",
    name: "三重県",
    region: "東海",
    highlights: ["伊勢神宮", "おかげ横丁", "英虞湾絶景"],
    gourmet: ["松阪牛", "伊勢海老", "赤福"],
    description: "日本人の心のふるさと伊勢神宮と、リアス式海岸の英虞湾、最高峰ブランド松阪牛。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "伊勢神宮・志摩・鳥羽",
        slug: "ise-shima",
        description: "三重県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "伊勢神宮", description: "三重県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "おかげ横丁", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["松阪牛", "伊勢海老", "赤福"],
        keywords: ["三重県", "伊勢神宮・志摩・鳥羽"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "伊勢神宮・志摩・鳥羽",
                        "postId": "5545",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5545/5545.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/5545/5545.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "伊勢神宮・志摩・鳥羽",
                        "postId": "12598",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/12598/12598.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/12598/12598.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "伊勢神宮・志摩・鳥羽",
                        "postId": "188466",
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
        name: "三重県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "三重県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "三重県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "三重県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "三重県 代表銘醸地酒",
        brewery: "三重県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "shiga",
    name: "滋賀県",
    region: "近畿",
    highlights: ["琵琶湖", "彦根城", "比叡山延暦寺"],
    gourmet: ["近江牛ステーキ", "鮒ずし", "サラダパン"],
    description: "日本最大の湖・琵琶湖と国宝彦根城、歴史の深遠さを感じる比叡山延暦寺の絶景旅。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "琵琶湖・彦根・長浜",
        slug: "biwako-hikone",
        description: "滋賀県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "琵琶湖", description: "滋賀県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "彦根城", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["近江牛ステーキ", "鮒ずし", "サラダパン"],
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
        name: "滋賀県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "滋賀県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "滋賀県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "滋賀県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "滋賀県 代表銘醸地酒",
        brewery: "滋賀県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "kyoto",
    name: "京都府",
    region: "近畿",
    highlights: ["清水寺", "金閣寺", "嵐山竹林の小径"],
    gourmet: ["京懐石", "宇治抹茶スイーツ", "湯豆腐"],
    description: "千年の都の雅と世界遺産社寺群。四季折々の庭園と抹茶スイーツが五感を魅了。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "嵐山・宇治・天橋立",
        slug: "arashiyama-uji",
        description: "京都府を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "清水寺", description: "京都府旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "金閣寺", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["京懐石", "宇治抹茶スイーツ", "湯豆腐"],
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
        name: "京都府 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "京都府限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "京都府 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "京都府のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "京都府 代表銘醸地酒",
        brewery: "京都府名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "osaka",
    name: "大阪府",
    region: "近畿",
    highlights: ["道頓堀グリコサイン", "大阪城", "ユニバーサル・スタジオ・ジャパン"],
    gourmet: ["たこ焼き", "お好み焼き", "串カツ"],
    description: "活気あふれる天下の台所！食い倒れの街のお笑いとグルメ、大迫力テーマパーク。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "難波・梅田・ベイエリア",
        slug: "namba-umeda",
        description: "大阪府を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "道頓堀グリコサイン", description: "大阪府旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "大阪城", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["たこ焼き", "お好み焼き", "串カツ"],
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
        name: "大阪府 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "大阪府限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "大阪府 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "大阪府のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "大阪府 代表銘醸地酒",
        brewery: "大阪府名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "hyogo",
    name: "兵庫県",
    region: "近畿",
    highlights: ["姫路城", "神戸ポートタワー", "有馬温泉"],
    gourmet: ["神戸牛", "明石焼き", "丹波黒豆"],
    description: "世界遺産姫路城とハイカラな神戸港、日本最古の名湯有馬と志賀直哉ゆかりの城崎温泉。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "有馬温泉・城崎温泉・神戸",
        slug: "arima-kinosaki",
        description: "兵庫県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "姫路城", description: "兵庫県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "神戸ポートタワー", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["神戸牛", "明石焼き", "丹波黒豆"],
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
        name: "兵庫県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "兵庫県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "兵庫県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "兵庫県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "兵庫県 代表銘醸地酒",
        brewery: "兵庫県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "nara",
    name: "奈良県",
    region: "近畿",
    highlights: ["東大寺大仏殿", "奈良公園のシカ", "吉野山の千本桜"],
    gourmet: ["柿の葉寿司", "吉野葛スイーツ", "三輪そうめん"],
    description: "古社寺と緑豊かな奈良公園、千本桜咲き誇る吉野山。古代のロマンが今も息づく。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "奈良公園・吉野山",
        slug: "nara-yoshino",
        description: "奈良県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "東大寺大仏殿", description: "奈良県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "奈良公園のシカ", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["柿の葉寿司", "吉野葛スイーツ", "三輪そうめん"],
        keywords: ["奈良県", "奈良公園・吉野山"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "奈良公園・吉野山",
                        "postId": "8045",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8045/8045.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8045/8045.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "奈良公園・吉野山",
                        "postId": "188878",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188878/188878.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/188878/188878.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "奈良公園・吉野山",
                        "postId": "76939",
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
        name: "奈良県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "奈良県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "奈良県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "奈良県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "奈良県 代表銘醸地酒",
        brewery: "奈良県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "wakayama",
    name: "和歌山県",
    region: "近畿",
    highlights: ["高野山金剛峯寺", "熊野古道", "白浜海水浴場"],
    gourmet: ["和歌山ラーメン", "クエ料理", "紀州南高梅"],
    description: "聖地熊野古道と高野山の静寂、南紀白浜の真っ白な砂浜と温泉リゾート。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "白浜温泉・勝浦・高野山",
        slug: "shirahama-katsuura",
        description: "和歌山県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "高野山金剛峯寺", description: "和歌山県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "熊野古道", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["和歌山ラーメン", "クエ料理", "紀州南高梅"],
        keywords: ["和歌山県", "白浜温泉・勝浦・高野山"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "白浜温泉・勝浦・高野山",
                        "postId": "8226",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8226/8226.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8226/8226.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "白浜温泉・勝浦・高野山",
                        "postId": "9133",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9133/9133.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/9133/9133.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "白浜温泉・勝浦・高野山",
                        "postId": "8113",
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
        name: "和歌山県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "和歌山県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "和歌山県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "和歌山県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "和歌山県 代表銘醸地酒",
        brewery: "和歌山県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "tottori",
    name: "鳥取県",
    region: "中国",
    highlights: ["鳥取砂丘", "水木しげるロード", "三朝温泉"],
    gourmet: ["松葉ガニ", "鳥取牛骨ラーメン", "二十世紀梨"],
    description: "風紋広がる雄大な鳥取砂丘と鬼太郎に会える境港、ラジウム豊富な三朝の名湯。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "鳥取砂丘・皆生温泉・三朝温泉",
        slug: "sakaiminato-misasa",
        description: "鳥取県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "鳥取砂丘", description: "鳥取県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "水木しげるロード", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["松葉ガニ", "鳥取牛骨ラーメン", "二十世紀梨"],
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
        name: "鳥取県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "鳥取県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "鳥取県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "鳥取県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "鳥取県 代表銘醸地酒",
        brewery: "鳥取県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "shimane",
    name: "島根県",
    region: "中国",
    highlights: ["出雲大社", "国宝松江城", "宍道湖の夕日"],
    gourmet: ["出雲そば", "宍道湖のしじみ汁", "島根和牛"],
    description: "縁結びの神様出雲大社と水の都松江、肌がスベスベになる美肌の湯・玉造温泉。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "出雲大社・松江・玉造温泉",
        slug: "izumo-matsue",
        description: "島根県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "出雲大社", description: "島根県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "国宝松江城", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["出雲そば", "宍道湖のしじみ汁", "島根和牛"],
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
        name: "島根県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "島根県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "島根県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "島根県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "島根県 代表銘醸地酒",
        brewery: "島根県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "okayama",
    name: "岡山県",
    region: "中国",
    highlights: ["倉敷美観地区", "日本三名園後楽園", "岡山城"],
    gourmet: ["岡山フルーツパフェ", "デミカツ丼", "ひるぜん焼きそば"],
    description: "白壁の土蔵が立ち並ぶレトロな倉敷と晴れの国の果物王国。日本三名園後楽園の優美。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "倉敷美観地区・後楽園",
        slug: "kurashiki-korakuen",
        description: "岡山県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "倉敷美観地区", description: "岡山県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "日本三名園後楽園", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["岡山フルーツパフェ", "デミカツ丼", "ひるぜん焼きそば"],
        keywords: ["岡山県", "倉敷美観地区・後楽園"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "倉敷美観地区・後楽園",
                        "postId": "147499",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147499/147499.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/147499/147499.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "倉敷美観地区・後楽園",
                        "postId": "182714",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/182714/182714.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/182714/182714.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "倉敷美観地区・後楽園",
                        "postId": "799",
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
        name: "岡山県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "岡山県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "岡山県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "岡山県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "岡山県 代表銘醸地酒",
        brewery: "岡山県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "hiroshima",
    name: "広島県",
    region: "中国",
    highlights: ["厳島神社大鳥居", "原爆ドーム", "尾道の坂道"],
    gourmet: ["広島風お好み焼き", "宮島生牡蠣", "もみじまんじゅう"],
    description: "海に浮かぶ赤い大鳥居の宮島と坂の街尾道、熱々のお好み焼きとぷりぷりの牡蠣。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "宮島・厳島神社・尾道",
        slug: "miyajima-onomichi",
        description: "広島県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "厳島神社大鳥居", description: "広島県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "原爆ドーム", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["広島風お好み焼き", "宮島生牡蠣", "もみじまんじゅう"],
        keywords: ["広島県", "宮島・厳島神社・尾道"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "宮島・厳島神社・尾道",
                        "postId": "7754",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7754/7754.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7754/7754.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "宮島・厳島神社・尾道",
                        "postId": "188903",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188903/188903.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/188903/188903.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "宮島・厳島神社・尾道",
                        "postId": "180527",
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
        name: "広島県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "広島県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "広島県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "広島県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "広島県 代表銘醸地酒",
        brewery: "広島県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "yamaguchi",
    name: "山口県",
    region: "中国",
    highlights: ["角島大橋", "元乃隅神社", "錦帯橋"],
    gourmet: ["下関ふぐ料理", "瓦そば", "獺祭"],
    description: "コバルトブルーの海を渡る角島大橋と赤い鳥居が連なる元乃隅神社、名物ふぐ刺し。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "角島・萩・長門湯本温泉",
        slug: "tsunoshima-hagi",
        description: "山口県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "角島大橋", description: "山口県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "元乃隅神社", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["下関ふぐ料理", "瓦そば", "獺祭"],
        keywords: ["山口県", "角島・萩・長門湯本温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "角島・萩・長門湯本温泉",
                        "postId": "147160",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147160/147160.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/147160/147160.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "角島・萩・長門湯本温泉",
                        "postId": "7243",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7243/7243.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7243/7243.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "角島・萩・長門湯本温泉",
                        "postId": "54096",
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
        name: "山口県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "山口県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "山口県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "山口県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "山口県 代表銘醸地酒",
        brewery: "山口県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "tokushima",
    name: "徳島県",
    region: "四国",
    highlights: ["鳴門の渦潮", "祖谷のかずら橋", "阿波おどり会館"],
    gourmet: ["徳島ラーメン", "阿波尾鶏", "すだち料理"],
    description: "大迫力の鳴門の渦潮と秘境祖谷のかずら橋、阿波おどりの情熱がほとばしるエリア。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "鳴門・祖谷渓温泉",
        slug: "naruto-iya",
        description: "徳島県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "鳴門の渦潮", description: "徳島県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "祖谷のかずら橋", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["徳島ラーメン", "阿波尾鶏", "すだち料理"],
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
        name: "徳島県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "徳島県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "徳島県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "徳島県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "徳島県 代表銘醸地酒",
        brewery: "徳島県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "kagawa",
    name: "香川県",
    region: "四国",
    highlights: ["金刀比羅宮（こんぴらさん）", "栗林公園", "小豆島オリーブ公園"],
    gourmet: ["讃岐うどん", "骨付鳥", "小豆島オリーブ"],
    description: "「うどん県」の絶品うどん巡りと参道の石段登るこんぴらさん、風光明媚な小豆島。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "琴平・金刀比羅宮・小豆島",
        slug: "kotohira-shodoshima",
        description: "香川県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "金刀比羅宮（こんぴらさん）", description: "香川県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "栗林公園", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["讃岐うどん", "骨付鳥", "小豆島オリーブ"],
        keywords: ["香川県", "琴平・金刀比羅宮・小豆島"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "琴平・金刀比羅宮・小豆島",
                        "postId": "176626",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176626/176626.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/176626/176626.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "琴平・金刀比羅宮・小豆島",
                        "postId": "5901",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/5901/5901.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "琴平・金刀比羅宮・小豆島",
                        "postId": "5900",
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
        name: "香川県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "香川県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "香川県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "香川県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "香川県 代表銘醸地酒",
        brewery: "香川県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "ehime",
    name: "愛媛県",
    region: "四国",
    highlights: ["道後温泉本館", "松山城", "しまなみ海道"],
    gourmet: ["宇和島鯛めし", "愛媛みかん", "じゃこ天"],
    description: "日本最古の道後温泉本館とサイクリストの聖地しまなみ海道、贅沢な鯛めし。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "道後温泉・しまなみ海道",
        slug: "dogo-shimanami",
        description: "愛媛県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "道後温泉本館", description: "愛媛県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "松山城", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["宇和島鯛めし", "愛媛みかん", "じゃこ天"],
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
        name: "愛媛県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "愛媛県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "愛媛県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "愛媛県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "愛媛県 代表銘醸地酒",
        brewery: "愛媛県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "kochi",
    name: "高知県",
    region: "四国",
    highlights: ["桂浜・坂本龍馬像", "ひろめ市場", "四万十川沈下橋"],
    gourmet: ["カツオのたたき", "屋台餃子", "ゆずドリンク"],
    description: "太平洋を望む桂浜と日本最後の清流四万十川、ひろめ市場の豪快なカツオのたたき。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "桂浜・四万十川",
        slug: "katsurahama-shimanto",
        description: "高知県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "桂浜・坂本龍馬像", description: "高知県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "ひろめ市場", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["カツオのたたき", "屋台餃子", "ゆずドリンク"],
        keywords: ["高知県", "桂浜・四万十川"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "桂浜・四万十川",
                        "postId": "1553",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1553/1553.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/1553/1553.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "桂浜・四万十川",
                        "postId": "54659",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/54659/54659.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/54659/54659.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "桂浜・四万十川",
                        "postId": "8724",
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
        name: "高知県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "高知県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "高知県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "高知県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "高知県 代表銘醸地酒",
        brewery: "高知県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "fukuoka",
    name: "福岡県",
    region: "九州・沖縄",
    highlights: ["太宰府天満宮", "博多屋台街", "糸島サンセットロード"],
    gourmet: ["博多とんこつラーメン", "博多もつ鍋", "辛子明太子"],
    description: "学問の神様太宰府と屋台文化あふれる博多、リゾート感漂う糸島のフォトジェニック空間。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "太宰府・糸島・柳川",
        slug: "dazaifu-itoishima",
        description: "福岡県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "太宰府天満宮", description: "福岡県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "博多屋台街", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["博多とんこつラーメン", "博多もつ鍋", "辛子明太子"],
        keywords: ["福岡県", "太宰府・糸島・柳川"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "太宰府・糸島・柳川",
                        "postId": "108259",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108259/108259.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/108259/108259.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "太宰府・糸島・柳川",
                        "postId": "5012",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5012/5012.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/5012/5012.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "太宰府・糸島・柳川",
                        "postId": "165238",
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
        name: "福岡県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "福岡県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "福岡県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "福岡県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "福岡県 代表銘醸地酒",
        brewery: "福岡県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "saga",
    name: "佐賀県",
    region: "九州・沖縄",
    highlights: ["嬉野温泉", "吉野ヶ里歴史公園", "唐津城"],
    gourmet: ["呼子のイカ生造り", "佐賀牛", "嬉野温泉湯豆腐"],
    description: "透明な透き通る呼子のイカと日本三大美肌の湯嬉野温泉、有田・伊万里焼きの磁器。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "嬉野温泉・武雄・唐津",
        slug: "ureseno-karatsu",
        description: "佐賀県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "嬉野温泉", description: "佐賀県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "吉野ヶ里歴史公園", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["呼子のイカ生造り", "佐賀牛", "嬉野温泉湯豆腐"],
        keywords: ["佐賀県", "嬉野温泉・武雄・唐津"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "嬉野温泉・武雄・唐津",
                        "postId": "68081",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68081/68081.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/68081/68081.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "嬉野温泉・武雄・唐津",
                        "postId": "40786",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40786/40786.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/40786/40786.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "嬉野温泉・武雄・唐津",
                        "postId": "40527",
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
        name: "佐賀県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "佐賀県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "佐賀県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "佐賀県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "佐賀県 代表銘醸地酒",
        brewery: "佐賀県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "nagasaki",
    name: "長崎県",
    region: "九州・沖縄",
    highlights: ["ハウステンボス", "グラバー園", "軍艦島"],
    gourmet: ["長崎ちゃんぽん", "カステラ", "佐世保バーガー"],
    description: "異国情緒あふれる街並みとヨーロッパのテーマパークハウステンボス、名物ちゃんぽん。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "ハウステンボス・雲仙温泉",
        slug: "huistenbosch-unzen",
        description: "長崎県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "ハウステンボス", description: "長崎県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "グラバー園", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["長崎ちゃんぽん", "カステラ", "佐世保バーガー"],
        keywords: ["長崎県", "ハウステンボス・雲仙温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "ハウステンボス・雲仙温泉",
                        "postId": "7808",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7808/7808.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7808/7808.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "ハウステンボス・雲仙温泉",
                        "postId": "9157",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/9157/9157.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "ハウステンボス・雲仙温泉",
                        "postId": "53172",
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
        name: "長崎県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "長崎県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "長崎県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "長崎県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "長崎県 代表銘醸地酒",
        brewery: "長崎県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "kumamoto",
    name: "熊本県",
    region: "九州・沖縄",
    highlights: ["熊本城", "阿蘇カルデラ・大観峰", "黒川温泉"],
    gourmet: ["熊本馬刺し", "あか牛丼", "熊本ラーメン"],
    description: "雄大な阿蘇カルデラのパノラマと武者返しの熊本城、入湯手形での入浴が楽しい黒川温泉。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "黒川温泉・阿蘇山",
        slug: "kurokawa-aso",
        description: "熊本県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "熊本城", description: "熊本県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "阿蘇カルデラ・大観峰", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["熊本馬刺し", "あか牛丼", "熊本ラーメン"],
        keywords: ["熊本県", "黒川温泉・阿蘇山"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "黒川温泉・阿蘇山",
                        "postId": "27949",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/27949/27949.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/27949/27949.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "黒川温泉・阿蘇山",
                        "postId": "31796",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/31796/31796.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/31796/31796.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "黒川温泉・阿蘇山",
                        "postId": "147706",
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
        name: "熊本県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "熊本県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "熊本県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "熊本県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "熊本県 代表銘醸地酒",
        brewery: "熊本県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "oita",
    name: "大分県",
    region: "九州・沖縄",
    highlights: ["別府地獄めぐり", "湯布院金鱗湖", "九重夢大吊橋"],
    gourmet: ["とり天", "関あじ・関さば", "ゆずごしょう"],
    description: "「おんせん県」大分。湯けむり立ち上る別府地獄めぐりとオシャレな由布院のショップ巡り。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "別府温泉・由布院温泉",
        slug: "beppu-yufuin",
        description: "大分県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "別府地獄めぐり", description: "大分県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "湯布院金鱗湖", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["とり天", "関あじ・関さば", "ゆずごしょう"],
        keywords: ["大分県", "別府温泉・由布院温泉"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "別府温泉・由布院温泉",
                        "postId": "198983",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/198983/198983.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/198983/198983.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "別府温泉・由布院温泉",
                        "postId": "139452",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/139452/139452.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/139452/139452.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "別府温泉・由布院温泉",
                        "postId": "106080",
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
        name: "大分県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "大分県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "大分県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "大分県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "大分県 代表銘醸地酒",
        brewery: "大分県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "miyazaki",
    name: "宮崎県",
    region: "九州・沖縄",
    highlights: ["高千穂峡", "青島神社", "サンメッセ日南"],
    gourmet: ["チキン南蛮", "宮崎牛", "マンゴー"],
    description: "神話の郷高千穂峡の神秘的ボートめぐりと南国ムードあふれる青島、極上チキン南蛮。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "高千穂・青島・日南",
        slug: "takachiho-aoshima",
        description: "宮崎県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "高千穂峡", description: "宮崎県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "青島神社", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["チキン南蛮", "宮崎牛", "マンゴー"],
        keywords: ["宮崎県", "高千穂・青島・日南"],
        subAreaHotels: [
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "高千穂・青島・日南",
                        "postId": "199224",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/199224/199224.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/199224/199224.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "高千穂・青島・日南",
                        "postId": "8782",
                        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8782/8782.jpg",
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/8782/8782.html"
            },
            {
                        "hotelName": "ãã£ã¨è¦ã",
                        "areaName": "高千穂・青島・日南",
                        "postId": "162643",
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
        name: "宮崎県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "宮崎県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "宮崎県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "宮崎県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "宮崎県 代表銘醸地酒",
        brewery: "宮崎県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "kagoshima",
    name: "鹿児島県",
    region: "九州・沖縄",
    highlights: ["桜島", "指宿砂むし温泉", "屋久島縄文杉"],
    gourmet: ["黒豚しゃぶしゃぶ", "しろくまかき氷", "芋焼酎"],
    description: "モコモコと煙を上げる桜島と指宿の砂むし温泉、世界自然遺産屋久島の神秘的な森。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "指宿温泉・霧島温泉・屋久島",
        slug: "ibusuki-kirishima",
        description: "鹿児島県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "桜島", description: "鹿児島県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "指宿砂むし温泉", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["黒豚しゃぶしゃぶ", "しろくまかき氷", "芋焼酎"],
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
        name: "鹿児島県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "鹿児島県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "鹿児島県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "鹿児島県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "鹿児島県 代表銘醸地酒",
        brewery: "鹿児島県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
      }
    ]
  },
  {
    slug: "okinawa",
    name: "沖縄県",
    region: "九州・沖縄",
    highlights: ["美ら海水族館", "川平湾", "古宇利大橋"],
    gourmet: ["沖縄そば", "アグー豚しゃぶしゃぶ", "タコライス"],
    description: "エメラルドグリーンの美ら海と白い砂浜、独自の琉球文化と美味しい沖縄料理が迎える楽園。",
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    subAreas: [
      {
        areaName: "石垣島・宮古島・恩納村",
        slug: "ishigaki-miyako",
        description: "沖縄県を代表する絶景・文化・名湯が凝縮された最高峰観光エリア。",
        spots: [
          { name: "美ら海水族館", description: "沖縄県旅行で絶対に外せない人気No.1景勝スポット。" },
          { name: "川平湾", description: "四季折々の風情と感動が広がる代表的見どころ。" }
        ],
        gourmet: ["沖縄そば", "アグー豚しゃぶしゃぶ", "タコライス"],
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
        name: "沖縄県 古民家・和モダンカフェ",
        type: "レトロ喫茶・スイーツ",
        description: "風情ある空間で地元食材を使った手作りスイーツと珈琲を楽しめます。",
        recommend: "沖縄県限定スイーツセット"
      }
    ],
    souvenirs: [
      {
        name: "沖縄県 伝統銘菓＆特産お土産",
        category: "伝統銘菓",
        description: "沖縄県のお土産として長年愛される伝統銘菓と最新トレンド手土産。"
      }
    ],
    sakes: [
      {
        name: "沖縄県 代表銘醸地酒",
        brewery: "沖縄県名門蔵元",
        type: "純米大吟醸",
        description: "名水と伝統の技で醸す、料理を引き立てる芳醇辛口の至高の日本酒。"
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
