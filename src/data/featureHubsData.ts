export interface FeatureHubMeta {
  slug: string;
  title: string;
  shortTitle: string;
  theme: string;
  description: string;
  keywords: string[];
  recommendedPrefSlugs?: string[];
}

export const FEATURE_HUBS_DATA: FeatureHubMeta[] = [
  // 季節・紅葉・秋旅
  {
    slug: "autumn-leaves",
    title: "【全国】紅葉露天風呂＆絶景温泉旅館 完全ガイド",
    shortTitle: "🍁 紅葉露天風呂＆絶景温泉特集",
    theme: "紅葉・秋旅",
    description: "全国屈指の紅葉名所と湯船から錦秋の絶景を一望できる人気露天風呂付き旅館ガイド。",
    keywords: ["紅葉", "露天風呂", "秋", "絶景", "温泉", "日光", "箱根", "嵐山", "黒川温泉"],
    recommendedPrefSlugs: ["tochigi", "kanagawa", "kyoto", "kumamoto", "akita", "gunma", "nagano"]
  },
  {
    slug: "autumn-gourmet-matsutake-wagyu",
    title: "【秋の味覚】松茸・ブランド和牛・秋の極上会席宿特集",
    shortTitle: "🍄 松茸＆ブランド和牛 贅沢グルメ宿",
    theme: "秋の味覚・グルメ",
    description: "旬の松茸やブランド和牛、秋の味覚を心ゆくまで味わえる美食の宿。",
    keywords: ["松茸", "和牛", "秋の味覚", "グルメ", "会席料理", "料理自慢"],
    recommendedPrefSlugs: ["kyoto", "nagano", "gifu", "hyogo", "shizuoka"]
  },
  {
    slug: "autumn-temple-garden-lightup",
    title: "【夜の絶景】秋の寺院・庭園ライトアップと夜間特別拝観の宿",
    shortTitle: "🏮 秋の寺院庭園ライトアップの宿",
    theme: "絶景・ライトアップ",
    description: "幻想的に照らし出される庭園や寺院ライトアップを間近で楽しむ特別ステイ。",
    keywords: ["ライトアップ", "庭園", "寺院", "夜景", "京都", "金沢"],
    recommendedPrefSlugs: ["kyoto", "ishikawa", "nara", "tochigi"]
  },
  {
    slug: "autumn-winter-sea-of-clouds",
    title: "【幻想雲海】朝露の絶景！雲海を望むテラス＆天空露天風呂の宿",
    shortTitle: "☁️ 雲海テラス＆天空の露天風呂特集",
    theme: "絶景・雲海",
    description: "早朝に広がる神秘的な雲海テラスや高台から大自然を見渡す感動の宿泊体験。",
    keywords: ["雲海", "天空", "テラス", "絶景", "阿蘇", "秩父", "トマム"],
    recommendedPrefSlugs: ["hokkaido", "nagano", "saitama", "kumamoto", "hyogo"]
  },

  // 温泉・サウナ・リトリート
  {
    slug: "autumn-winter-private-bath-ryokan",
    title: "【貸切風呂・客室露天】誰にも邪魔されない極上プライベート温泉旅館",
    shortTitle: "♨️ 貸切風呂＆客室露天 プライベート温泉",
    theme: "温泉・おこもり",
    description: "プライベート空間で名湯を心ゆくまで堪能できる客室露天・貸切風呂自慢の宿。",
    keywords: ["客室露天風呂", "貸切風呂", "プライベート温泉", "温泉", "露天風呂付き客室"],
    recommendedPrefSlugs: ["kanagawa", "shizuoka", "gunma", "oita", "kumamoto", "tochigi"]
  },
  {
    slug: "autumn-winter-sauna-retreat",
    title: "【ととのい旅】絶景バレルサウナ・水風呂・外気浴完備のサウナリトリート",
    shortTitle: "🧖 ととのい絶景サウナリトリート",
    theme: "サウナ・スパ",
    description: "森林浴サウナや湖畔の水風呂など、大自然の中で極上のととのいを体験できるサウナ特化宿。",
    keywords: ["サウナ", "バレルサウナ", "ととのう", "外気浴", "水風呂", "ロウリュ"],
    recommendedPrefSlugs: ["nagano", "yamanashi", "shizuoka", "hokkaido", "gunma"]
  },
  {
    slug: "autumn-winter-hot-spring-cure",
    title: "【湯治・名湯】源泉かけ流しと薬効を楽しむ大人の本格温泉湯治旅",
    shortTitle: "🧪 本格源泉かけ流し＆湯治の名宿",
    theme: "本格温泉・湯治",
    description: "歴史ある名湯と源泉かけ流しの贅沢な湯あみを心身ともに癒す本格湯治特集。",
    keywords: ["源泉かけ流し", "湯治", "名湯", "秘湯", "にごり湯", "酸ヶ湯", "草津", "有馬"],
    recommendedPrefSlugs: ["gunma", "aomori", "akita", "hyogo", "oita", "yamagata"]
  },
  {
    slug: "autumn-winter-all-inclusive-luxury",
    title: "【オールインクルーシブ】飲食もアクティビティも無料の贅沢リゾートステイ",
    shortTitle: "🍸 オールインクルーシブ贅沢ホテル",
    theme: "オールインクルーシブ",
    description: "追加料金を気にせずラウンジやバー、極上ディナーを満喫できるオールインクルーシブの宿。",
    keywords: ["オールインクルーシブ", "フリーフロー", "ラウンジ", "高級リゾート", "飲み放題"],
    recommendedPrefSlugs: ["okinawa", "shizuoka", "kanagawa", "nagano", "mie"]
  },

  // ファミリー・ペット・グループ
  {
    slug: "family-baby-welcome-onsen",
    title: "【ウェルカムベビー】赤ちゃん・子連れファミリー大満足の安心温泉宿",
    shortTitle: "👶 赤ちゃん＆子連れファミリー歓迎宿",
    theme: "家族旅行・子連れ",
    description: "おむつ替えグッズや部屋食、キッズスペース完備でパパママも安心の温泉宿特集。",
    keywords: ["子連れ", "赤ちゃん", "ウェルカムベビー", "ファミリー", "キッズ", "部屋食"],
    recommendedPrefSlugs: ["shizuoka", "chiba", "kanagawa", "nagano", "tochigi", "mie"]
  },
  {
    slug: "autumn-winter-onsen-with-pet",
    title: "【愛犬とお泊まり】ドッグラン＆部屋食完備のペット同伴温泉リゾート",
    shortTitle: "🐶 愛犬と泊まれる温泉リゾート＆ヴィラ",
    theme: "ペット同伴",
    description: "客室専用ドッグランや愛犬用温泉、一緒に食べられる特製ご飯付きのペット歓迎宿。",
    keywords: ["ペット", "愛犬", "犬と泊まれる", "ドッグラン", "ペット同伴"],
    recommendedPrefSlugs: ["shizuoka", "kanagawa", "chiba", "nagano", "tochigi", "hyogo"]
  },

  // 記念日・カップル・大人旅
  {
    slug: "anniversary-luxury-suite",
    title: "【記念日・プロポーズ】夜景と特別なディナーで彩る最高峰スイートルーム",
    shortTitle: "🥂 記念日・プロポーズ最高峰スイート",
    theme: "記念日・カップル",
    description: "大切な人の誕生日や記念日、プロポーズにふさわしい特別演出と極上スイートの宿。",
    keywords: ["記念日", "誕生日", "プロポーズ", "スイート", "カップル", "高級ホテル", "夜景"],
    recommendedPrefSlugs: ["tokyo", "kanagawa", "osaka", "kyoto", "okinawa", "hyogo"]
  },
  {
    slug: "autumn-winter-solo-travel-retreat",
    title: "【一人旅リトリート】誰にも気兼ねせず自分を整える大人の贅沢ソロステイ",
    shortTitle: "🧘 大人の極上ひとり旅リトリート",
    theme: "一人旅・ソロ",
    description: "静寂に包まれた宿で読書や温泉に浸かり、自分自身と向き合う極上の一人旅特集。",
    keywords: ["一人旅", "ひとり旅", "ソロ", "リトリート", "静寂", "読書"],
    recommendedPrefSlugs: ["kyoto", "kanagawa", "nagano", "shizuoka", "ishikawa"]
  },

  // ドライブ・鉄道・アクティビティ
  {
    slug: "autumn-winter-scenic-drive-pass",
    title: "【絶景ドライブ】峠やパノラマラインを駆け抜けるドライブ旅行＆温泉宿",
    shortTitle: "🚗 絶景パノラマドライブ＆温泉旅",
    theme: "ドライブ・ツーリング",
    description: "海岸線や山岳スカイラインの絶景ドライブを満喫した後にゆったり泊まれる温泉宿。",
    keywords: ["ドライブ", "ツーリング", "スカイライン", "絶景ロード", "駐車場完備"],
    recommendedPrefSlugs: ["shizuoka", "kanagawa", "gunma", "nagano", "mie", "kumamoto"]
  },
  {
    slug: "autumn-winter-train-scenery-station",
    title: "【観光列車・車窓旅】ローカル線の絶景と駅近・送迎付き名宿ガイド",
    shortTitle: "🚃 観光列車＆ローカル線の旅宿特集",
    theme: "鉄道・駅近",
    description: "車窓からの絶景を満喫する列車旅。駅から徒歩圏や送迎付きでアクセス抜群の宿。",
    keywords: ["観光列車", "鉄道", "駅近", "ローカル線", "トロッコ"],
    recommendedPrefSlugs: ["kyoto", "akita", "aomori", "shizuoka", "gunma"]
  }
];

export function getFeatureHubBySlug(slug: string): FeatureHubMeta | undefined {
  return FEATURE_HUBS_DATA.find(f => f.slug === slug);
}

export function getRecommendedFeatureHubs(options: {
  prefSlug?: string;
  categories?: string[];
  keywords?: string[];
  limit?: number;
}): FeatureHubMeta[] {
  const { prefSlug, categories = [], keywords = [], limit = 3 } = options;
  const allText = [...categories, ...keywords].join(" ").toLowerCase();

  const scored = FEATURE_HUBS_DATA.map(hub => {
    let score = 0;
    if (prefSlug && hub.recommendedPrefSlugs?.includes(prefSlug)) {
      score += 3;
    }
    for (const kw of hub.keywords) {
      if (allText.includes(kw.toLowerCase())) {
        score += 2;
      }
    }
    return { hub, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s => s.hub);
}
