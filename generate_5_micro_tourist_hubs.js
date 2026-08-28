const fs = require('fs');
const path = require('path');

const microConfigs = [
  {
    slug: 'kyoto-arashiyama-bamboo-stay',
    badge: 'KYOTO ARASHIYAMA MICRO GUIDE',
    title: '【京都・嵐山】竹林の小径・渡月橋＆嵯峨野おこもり宿 完全ガイド',
    metaDesc: '京都・嵐山エリア完全特化！渡月橋、竹林の小径、天龍寺、保津川下り周辺の徒歩観光ルートと、嵐山温泉・客室露天風呂付き旅館を徹底解説。',
    heroDesc: '早朝の静寂に包まれる竹林の小径、夕暮れに茜色に染まる渡月橋。京都・嵐山を心ゆくまで味わい尽くすための徒歩観光完全ルートと極上宿ガイド。',
    categoryKey: 'kyoto-arashiyama-bamboo-stay',
    areaGuides: [
      {
        key: 'arashiyama_luxury',
        title: '1. 渡月橋・保津川リバーサイド（清流と嵐山を望む特等席）',
        timing: '通年（秋の紅葉・春の桜・初夏の青もみじ）',
        desc: '桂川（保津川）のせせらぎを聞きながら、渡月橋を眼下に望む嵐山の一等地。嵐山温泉の弱アルカリ性美肌湯と、伝統の技が息づく京懐石を客室や個室でゆっくり味わえます。',
        spots: '渡月橋、嵐山公園（中之島地区）、天龍寺（曹源池庭園）、保津川下り着船場',
        access: '阪急嵐山線「嵐山駅」徒歩約5分。JR嵯峨野線「嵯峨嵐山駅」徒歩約15分。',
        tip: '早朝6時台の渡月橋は観光客がほぼおらず、静寂と朝靄に包まれた幻想的な絶景を独占できます。'
      },
      {
        key: 'arashiyama_station',
        title: '2. 嵐電嵐山駅〜メインストリート（竹林の小径へ直行＆食べ歩き）',
        timing: '通年（キモノフォレストのライトアップ）',
        desc: '京福電鉄（嵐電）嵐山駅周辺。駅構内のキモノフォレスト（京友禅ポール）や足湯を楽しみ、天龍寺門前の湯豆腐店や和カフェを巡りながら竹林の小径へスムーズにアクセスできます。',
        spots: '竹林の小径、野宮神社（縁結びの黒木鳥居）、キモノフォレスト、嵐電足湯',
        access: '嵐電「嵐山駅」下車すぐ。JR嵯峨嵐山駅より徒歩約10分。',
        tip: '竹林の小径から野宮神社を抜けて大河内山荘庭園へ向かうルートは、嵐山で最も風情ある散策路です。'
      },
      {
        key: 'sagano_hideaway',
        title: '3. 奥嵯峨・鳥居本（茅葺き屋根と苔庭が美しい日本の原風景）',
        timing: '通年（静かに過ごしたい大人旅に最適）',
        desc: '観光客の喧騒から離れた奥嵯峨エリア。重要伝統的建造物群保存地区の鳥居本や、8,000体もの石仏が並ぶあだし野念仏寺、常寂光寺の美しい苔と紅葉に包まれる静寂の滞在。',
        spots: '常寂光寺、祇王寺（苔庭）、化野念仏寺、嵯峨鳥居本町並み保存地区',
        access: 'JR嵯峨嵐山駅よりタクシー約10分、または徒歩約25分。',
        tip: '祇王寺の青苔と木漏れ日のコントラストは京都屈指の美しさ。午前中の早い時間が特におすすめです。'
      }
    ]
  },
  {
    slug: 'hakone-gora-luxury-stay',
    badge: 'HAKONE GORA MICRO GUIDE',
    title: '【箱根・強羅】大涌谷にごり湯＆美術館めぐり極上宿 完全ガイド',
    metaDesc: '箱根・強羅エリア完全特化！大涌谷の白濁硫黄泉、強羅公園、彫刻の森美術館周辺の観光と、客室露天風呂・贅沢会席が自慢の強羅温泉旅館を徹底解説。',
    heroDesc: '標高約500m、豊かな森と澄んだ空気に包まれる箱根の高級別荘地「強羅」。乳白色のにごり湯に浸かり、アートと美食に酔いしれる大人の休日。',
    categoryKey: 'hakone-gora-luxury-stay',
    areaGuides: [
      {
        key: 'gora_luxury_view',
        title: '1. 強羅高台・早雲山周辺（相模湾・明星ヶ岳の大文字を望むパノラマ）',
        timing: '通年（8月の大文字焼き・秋の紅葉）',
        desc: '強羅の高台に位置する隠れ家宿。大涌谷から直接引湯する濃厚な酸性硫酸塩泉（白濁湯）や、箱根連山・相模湾を見晴らす客室露天風呂で心ゆくまでプライベートな時間を。',
        spots: '早雲山駅（cu―mo箱根・展望テラス足湯）、箱根ロープウェイ（大涌谷直通）、明星ヶ岳大文字',
        access: '箱根登山ケーブルカー「早雲山駅」「上強羅駅」下車。強羅駅より送迎あり。',
        tip: '早雲山駅の「cu―mo箱根」展望テラスで名物スムージー「ニューベル」を飲みながら足湯に浸かるのが人気です。'
      },
      {
        key: 'gora_station_walk',
        title: '2. 強羅駅周辺・温泉街（登山電車とケーブルカーの結節点で快適ステイ）',
        timing: '通年（箱根周遊の最高の拠点）',
        desc: '箱根登山電車と箱根登山ケーブルカーの乗換駅である強羅駅。駅前には名物の豆腐かつ煮店やお土産店が並び、芦ノ湖や大涌谷、仙石原方面へのアクセスも抜群です。',
        spots: '箱根強羅公園（熱帯植物館・クラフトハウス）、田むら銀かつ亭（豆腐かつ煮）、強羅駅前足湯',
        access: '箱根登山鉄道「強羅駅」下車すぐ。箱根湯本駅から登山電車で約35分。',
        tip: '「田むら銀かつ亭」の名物豆腐かつ煮は整理券必須の人気店。チェックイン前や早めの時間に整理券を発券しましょう。'
      },
      {
        key: 'gora_art_resort',
        title: '3. 彫刻の森・中強羅エリア（緑豊かな野外美術館とスタイリッシュ宿）',
        timing: '通年（野外彫刻と足湯カフェ）',
        desc: '7万平方メートルの広大な芝生にピカソ館やヘンリー・ムーアの彫刻が点在する「彫刻の森美術館」。アート散策の後は、モダンなデザイナーズ温泉ホテルでリラックス。',
        spots: '彫刻の森美術館（幸せをよぶシンフォニー彫刻・温泉足湯）、箱根写真美術館、箱根美術館',
        access: '箱根登山鉄道「彫刻の森駅」下車徒歩約2分。',
        tip: '彫刻の森美術館内の源泉かけ流し天然温泉足湯は、散策で疲れた足を癒やす最高の休憩スポットです。'
      }
    ]
  },
  {
    slug: 'nikko-chuzenji-lake-stay',
    badge: 'NIKKO CHUZENJI MICRO GUIDE',
    title: '【奥日光・中禅寺湖】華厳の滝＆湖畔リゾート極上宿 完全ガイド',
    metaDesc: '奥日光・中禅寺湖畔エリア完全特化！日本三名瀑・華厳の滝、中禅寺湖遊覧船、男体山、日光湯元温泉周辺の絶景観光ルートと人気レイクサイドホテルを徹底解説。',
    heroDesc: '標高1,269m、天空の湖・中禅寺湖。雄大な男体山が湖面に映り、華厳の滝の大迫力の水しぶきが舞う奥日光。静寂と大自然に抱かれる極上のリゾートステイ。',
    categoryKey: 'nikko-chuzenji-lake-stay',
    areaGuides: [
      {
        key: 'chuzenji_lakeside',
        title: '1. 中禅寺湖畔・レイクサイド（男体山を望む絶景と英国・伊国大使館別荘）',
        timing: '通年（秋の湖畔紅葉・初夏の避暑リゾート）',
        desc: 'かつて各国の外交官が愛した国際的避暑地。湖畔に建つ「ザ・リッツ・カールトン日光」やクラシックリゾートホテルでは、客室から静かな湖水と男体山の雄姿を一望できます。',
        spots: '英国大使館別荘記念公園、イタリア大使館別荘記念公園、中禅寺湖遊覧船、中禅寺立木観音',
        access: 'JR・東武日光駅より東武バス「中禅寺温泉行き」で約45分。日光宇都宮道路清滝ICよりいろは坂経由。',
        tip: 'イタリア大使館別荘記念公園の湖畔カフェテラスで、中禅寺湖の波音を聞きながらいただくカプチーノは格別です。'
      },
      {
        key: 'kegon_falls_stay',
        title: '2. 華厳の滝〜中禅寺温泉街（日本三名瀑の大迫力と乳白色の美肌名湯）',
        timing: '通年（冬の氷瀑・新緑のマイナスイオン）',
        desc: '落差97mを一気に落下する日本屈指の名瀑・華厳の滝。エレベーターで滝壺近くまで降りて大迫力の轟音を体感した後は、日光湯元から引湯する中禅寺温泉の白濁硫黄泉で温まります。',
        spots: '華厳の滝（エレベーター観瀑台）、中禅寺温泉バスターミナル周辺、日光二荒山神社中宮祠',
        access: '中禅寺温泉バスターミナル下車徒歩約5分。',
        tip: '中禅寺温泉街で味わう「ヒメマス（日光岩魚・鱒）の塩焼き」や「ゆばコロッケ」が散策のお供に最適です。'
      },
      {
        key: 'senjogahara_nature',
        title: '3. 奥日光湯元温泉＆戦場ヶ原（源泉湧出の湯ノ湖と本格濃厚硫黄泉）',
        timing: '通年（秋の湿原草紅葉・冬の雪見風呂）',
        desc: '中禅寺湖のさらに奥、湯ノ湖の湖畔に広がる日光湯元温泉。地面からポコポコと温泉が湧き出す「温泉寺」の源泉小屋があり、日本で4番目に濃いとされるエメラルドグリーンの硫黄泉を堪能。',
        spots: '日光湯元温泉寺（参拝と入浴）、湯ノ湖、湯滝、戦場ヶ原（木道トレッキング）',
        access: '東武バス「日光湯元温泉行き」終点下車（中禅寺温泉から約25分、日光駅から約75分）。',
        tip: '日光山輪王寺の別院「温泉寺」では、全国でも極めて珍しい「お寺の本堂で入浴できる温泉」を体験できます。'
      }
    ]
  },
  {
    slug: 'kumamoto-kurokawa-onsen-stay',
    badge: 'KUROKAWA ONSEN MICRO GUIDE',
    title: '【熊本・黒川温泉】入湯手形＆渓流露天風呂めぐり極上宿 完全ガイド',
    metaDesc: '阿蘇・黒川温泉エリア完全特化！入湯手形での28露天風呂めぐり、川端通りの食べ歩き、囲炉裏料理と渓流沿いの隠れ家木造旅館を徹底解説。',
    heroDesc: '杉木立に囲まれた山あいの渓流沿いに、統一された黒と木目の落ち着いた旅館が連なる「黒川温泉」。入湯手形を首から下げて下駄を鳴らし、個性豊かな露天風呂を巡る極上の癒やし旅。',
    categoryKey: 'kumamoto-kurokawa-onsen-stay',
    areaGuides: [
      {
        key: 'kurokawa_river',
        title: '1. 川端通り・温泉街中心部（田の原川のせせらぎと風情ある木造旅館街）',
        timing: '通年（冬は竹灯籠「湯あかり」開催）',
        desc: '黒川温泉の中心を流れる田の原川沿い。石段や小径に風情ある旅館が並び、浴衣姿で歩くだけで旅情に浸れます。川のせせらぎを間近に感じる渓流露天風呂と、肥後赤牛や旬の山菜会席を満喫。',
        spots: '川端通り、ふれあい通り、地蔵堂（首なし地蔵）、べっちん館（入湯手形購入）',
        access: '熊本空港より車で約80分。博多駅・熊本駅より直行高速バス運行。',
        tip: '中心部の「どらどら」で味わう出来立ての「どら焼きアイス」や地酒ソフトクリームが食べ歩きに大人気です。'
      },
      {
        key: 'kurokawa_okugomori',
        title: '2. 奥黒川・静寂の山あいの里（全室離れ・客室専用露天風呂のおこもりステイ）',
        timing: '通年（新緑・秋の紅葉・冬の雪景色）',
        desc: '温泉街の中心部から少し離れた静かな森の中に佇む「奥黒川」。広大な敷地に数室限定の独立型ヴィラや離れが点在し、専用の源泉かけ流し露天風呂で誰にも邪魔されない至福の時間を過ごせます。',
        spots: '平野台親水公園（恋人の聖地・阿蘇パノラマ展望台）、小萩山稲荷神社、夫婦滝',
        access: '黒川温泉バス停より各旅館の無料送迎車で約5〜10分。',
        tip: '夕暮れ時に平野台展望台へドライブすると、阿蘇五岳と祖母連山を赤く染める夕日パノラマが楽しめます。'
      },
      {
        key: 'kurokawa_tegata',
        title: '3. 入湯手形露天風呂めぐり（洞窟風呂・立ち湯・滝見露天風呂の個性派湯めぐり）',
        timing: '通年（入湯手形1枚で3箇所の露天風呂に入浴可能）',
        desc: '黒川温泉の代名詞「入湯手形（大人1,500円）」。混浴大露天風呂や、深さ1.5mの「立ち湯」、青い光が差し込む「洞窟風呂」、滝を眺める「滝見風呂」など、趣の異なる名湯を心ゆくまで満喫。',
        spots: 'いこい旅館（日本名湯秘湯百選・立ち湯）、山みず木（幽谷の渓流露天）、黒川荘（びょうぶ岩露天）',
        access: '各旅館へは温泉街巡回バスや徒歩でアクセス。',
        tip: '入湯手形を使い終わった後は、旅の記念に持ち帰るか、温泉街の地蔵堂に奉納して旅の安全を祈願できます。'
      }
    ]
  },
  {
    slug: 'mie-ise-shima-gourmet-stay',
    badge: 'ISE SHIMA MICRO GUIDE',
    title: '【三重・伊勢志摩】お伊勢参り＆伊勢海老・的矢かき極上宿 完全ガイド',
    metaDesc: '伊勢神宮・鳥羽志摩エリア完全特化！内宮・外宮の両参り、おかげ横丁食べ歩き、英虞湾パノラマと、本場伊勢海老・松阪牛・的矢かきを堪能する名宿を徹底解説。',
    heroDesc: '日本人の心のふるさと「伊勢神宮」と、リアス海岸の美しい真珠の海「伊勢志摩」。厳かな神域で新年の多幸を祈り、海の王様・伊勢海老と極上温泉に癒やされる特別な旅路。',
    categoryKey: 'mie-ise-shima-gourmet-stay',
    areaGuides: [
      {
        key: 'ise_jingu_walk',
        title: '1. 伊勢神宮・内宮門前＆おかげ横丁（早朝参拝と伊勢うどん・赤福本店）',
        timing: '通年（年末年始の初詣・毎月1日の朔日参り）',
        desc: '五十鈴川の清流を渡り、宇治橋をくぐって参拝する伊勢神宮内宮。内宮門前の老舗宿に宿泊すれば、人通りの少ない静寂の早朝参拝（朝5時〜）が叶い、おはらい町・おかげ横丁で赤福や伊勢うどんを満喫。',
        spots: '伊勢神宮（内宮・外宮）、おかげ横丁、おはらい町（赤福本店・五十鈴川カフェ）、猿田彦神社',
        access: '近鉄「宇治山田駅」「五十鈴川駅」より三重交通バス「内宮前行き」で約15〜20分。',
        tip: 'おかげ横丁の「赤福本店」でいただく出来立ての柔らかい赤福餅と番茶は、早朝参拝後の最高の朝食です。'
      },
      {
        key: 'toba_bay_view',
        title: '2. 鳥羽湾・鳥羽温泉郷（海に浮かぶ島々と本場伊勢海老・アワビ会席）',
        timing: '通年（冬の伊勢海老・牡蠣シーズンが最高）',
        desc: '鳥羽水族館やミキモト真珠島がある鳥羽湾。海岸沿いの高台に建つ温泉旅館からは、行き交う船や答志島を望むパノラマビュー。夕食には生きた伊勢海老のお造りやアワビの踊り焼きが豪快に並びます。',
        spots: '鳥羽水族館（飼育種数日本一・ジュゴン）、ミキモト真珠島、鳥羽展望台（天空のドライブイン）、夫婦岩',
        access: '近鉄・JR「鳥羽駅」下車。名古屋駅から近鉄特急で約1時間40分。各宿送迎バスあり。',
        tip: '二見浦の「二見興玉神社・夫婦岩」で海から昇る朝日を拝んでから伊勢神宮へ向かうのが古来の正しい参拝順序です。'
      },
      {
        key: 'ago_bay_luxury',
        title: '3. 志摩・英虞湾＆賢島（サミットの舞台！多島美を望む極上リゾート）',
        timing: '通年（リアス海岸の美しい夕日）',
        desc: '伊勢志摩サミットのメイン会場となった賢島。志摩観光ホテルをはじめとする名門リゾートでは、英虞湾の夕景を眺めながら伝統の「アワビのステーキ」や「伊勢海老のビスク」フレンチを堪能できます。',
        spots: '横山展望台（天空カフェテラス）、賢島エスパーニャクルーズ、志摩スペイン村、英虞湾夕日スポット',
        access: '近鉄特急「賢島駅」下車。大阪難波・近鉄名古屋から直通特急あり。',
        tip: '横山展望台の「天空カフェテラス（Mirador Shima）」の木製デッキから見下ろす英虞湾の多島美は息をのむ絶景です。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of microConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
