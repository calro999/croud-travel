const fs = require('fs');
const path = require('path');

const microWave4Configs = [
  {
    slug: 'yamagata-ginzan-onsen-retro-stay',
    badge: 'GINZAN ONSEN MICRO GUIDE',
    title: '【山形・銀山温泉】ガス灯揺れる大正ロマン木造街＆尾花沢牛極上宿 完全ガイド',
    metaDesc: '山形・銀山温泉エリア完全特化！銀山川沿いの木造三層四層楼閣、ガス灯の夜景、隈研吾設計の藤屋、尾花沢牛・鴨鍋グルメと雪景色露天風呂旅館を徹底解説。',
    heroDesc: 'まるで大正時代にタイムスリップしたかのような木造多層建築の温泉街。夕暮れ時にオレンジ色のガス灯が灯り、川面から立ち上る湯けむり。冬の白銀に包まれる日本一フォトジェニックな名湯へ。',
    categoryKey: 'yamagata-ginzan-onsen-retro-stay',
    areaGuides: [
      {
        key: 'ginzan_river_side',
        title: '1. 銀山川沿い・温泉街中心部（ガス灯が灯る木造多層楼閣と鏝絵の景観）',
        timing: '通年（特に12月下旬〜3月上旬の白銀の雪景色が最高潮）',
        desc: '銀山川の両岸に大正末期から昭和初期に建てられた洋風木造多層建築が立ち並ぶメインストリート。壁面に描かれた色鮮やかな「鏝絵（こてえ）」や、夜のガス灯ライトアップを眺めながらそぞろ歩き。',
        spots: '銀山温泉街（ガス灯ライトアップ）、和楽足湯（わらしゆ）、しろがね湯（隈研吾設計）、能登屋旅館（登録有形文化財）',
        access: 'JR山形新幹線「大石田駅」より銀山線路線バス「はながさバス」で約40分。各旅館の無料送迎バスあり。',
        tip: '夕暮れから日没後30分（ブルーアワー）は、雪景色とガス灯のオレンジ色の光が最も美しく重なる奇跡の時間帯です。'
      },
      {
        key: 'ginzan_obanazawa_wagyu',
        title: '2. 尾花沢牛＆山形郷土の味覚（極上の霜降り和牛と名物カリーパン食べ歩き）',
        timing: '通年（冬の鴨鍋・山菜料理）',
        desc: '寒暖差の激しい気候で育まれた最高級黒毛和牛「尾花沢牛」。銀山温泉の老舗宿で味わうすき焼きや陶板焼き会席。「はいからさんのカリーパン」や出来立ての「立ち喰い豆腐」など散策グルメも充実。',
        spots: 'はいからさんのカリーパン、野川とうふや（立ち喰い生揚げ）、伊豆の華（蕎麦カフェ）',
        access: '温泉街の中心部、徒歩圏内に点在。',
        tip: '「野川とうふや」の手作り生揚げは、外はカリッと中は熱々ジューシーで、足湯に浸かりながら食べるのが定番です。'
      },
      {
        key: 'ginzan_takimidai',
        title: '3. 白銀公園〜延沢銀坑道（落差22mの名瀑と歴史ある銀山跡トレッキング）',
        timing: 'グリーンシーズン：5月〜11月（冬期は積雪のため一部立ち入り制限あり）',
        desc: '温泉街の最奥に広がる自然公園。豪快な水しぶきを上げる「白銀の滝」や、かつて日本三大銀山と称された「延沢銀坑道」。静かなせせらぎを聞きながらのマイナスイオン散策。',
        spots: '白銀の滝、籟音滝（らいおんのたき）、延沢銀坑道（銀鉱洞・国の史跡）、滝見館周辺',
        access: '温泉街奥より遊歩道徒歩約5〜20分。',
        tip: '滝見館の高台露天風呂からは、四季折々の山並みと白銀の渓谷を一望する絶景湯あみが楽しめます。'
      }
    ]
  },
  {
    slug: 'tochigi-kinugawa-onsen-valley-stay',
    badge: 'KINUGAWA VALLEY MICRO GUIDE',
    title: '【栃木・鬼怒川温泉】渓谷美・鬼怒楯岩大吊橋＆ライン下り極上宿 完全ガイド',
    metaDesc: '日光・鬼怒川温泉エリア完全特化！鬼怒川渓谷の奇岩怪石、鬼怒楯岩大吊橋パノラマ、鬼怒川ライン下り、東武ワールドスクウェア周辺観光と絶景渓谷露天風呂ホテルを徹底解説。',
    heroDesc: '鬼怒川の清流が刻んだダイナミックな渓谷美。川沿いの断崖に大型温泉ホテルや高級旅館が立ち並ぶ関東屈指の温泉郷。名湯につかりながら渓谷の四季を愛でる極上の温泉リゾートへ。',
    categoryKey: 'tochigi-kinugawa-onsen-valley-stay',
    areaGuides: [
      {
        key: 'kinugawa_valley_luxury',
        title: '1. 鬼怒川渓谷リバーフロント（ダイナミックな断崖絶景とアルカリ性単純温泉）',
        timing: '通年（秋の渓谷紅葉・初夏の新緑）',
        desc: 'エメラルドグリーンの鬼怒川と奇岩怪石が織りなす大渓谷。客室のバルコニーや渓流露天風呂から眼下に流れる川のせせらぎを体感。とちぎ和牛や日光湯波（ゆば）会席を堪能。',
        spots: '鬼怒川ライン下り（木造船川下り）、鬼怒川温泉ロープウェイ（おさるの山）、龍王峡（トレッキングコース）',
        access: '東武特急スペーシアX・リバティで浅草・新宿から「鬼怒川温泉駅」まで直通約2時間。',
        tip: '「龍王峡」の遊歩道は、川治温泉まで続く約3kmの奇岩・滝めぐりルートで紅葉時期の絶景ハイクに最適です。'
      },
      {
        key: 'kinugawa_station_walk',
        title: '2. 鬼怒川温泉駅前〜温泉街（SL大樹の発着と足湯カフェ・テーマパーク）',
        timing: '通年（SL大樹の運行・ワールドスクウェア）',
        desc: '東武鉄道「SL大樹（たいじゅ）」の転車台がある鬼怒川温泉駅前。駅前広場の足湯「鬼怒太の湯」や温泉まんじゅう店。世界の名所を再現した「東武ワールドスクウェア」や「日光江戸村」へのアクセスも抜群。',
        spots: 'SL大樹（転車台ショー）、駅前足湯「鬼怒太の湯」、東武ワールドスクウェア、日光江戸村（EDO WONDERLAND）',
        access: '東武鬼怒川線「鬼怒川温泉駅」下車すぐ。日光宇都宮道路今市ICより車約20分。',
        tip: '鬼怒川温泉駅の転車台でSL機関車が向きを変えるダイナミックなショーは、鉄道ファンのみならず必見です。'
      },
      {
        key: 'kinugawa_tateiwa_bridge',
        title: '3. 鬼怒楯岩大吊橋〜楯岩展望台（高さ37mのスリルと縁結びの鐘）',
        timing: '通年（360度の大パノラマ絶景）',
        desc: '全長140m、高さ37mの歩道専用吊り橋「鬼怒楯岩大吊橋」。足元に鬼怒川の急流が広がるスリルと、橋を渡った先の楯岩展望台（楯岩鬼怒姫神社・縁結びの鐘）からの大パノラマ。',
        spots: '鬼怒楯岩大吊橋、楯岩展望台、楯岩鬼怒姫神社、古釜の滝',
        access: '鬼怒川温泉駅より徒歩約15分、またはダイヤルバス。',
        tip: '楯岩展望台にある「縁結びの鐘」を鳴らし、鬼怒川の雄大な山並みに願いを響かせるのが人気です。'
      }
    ]
  },
  {
    slug: 'nagano-shibu-onsen-retro-stay',
    badge: 'SHIBU ONSEN RETRO GUIDE',
    title: '【長野・信州渋温泉】九湯めぐり＆金具屋・スノーモンキー極上宿 完全ガイド',
    metaDesc: '信州・渋温泉エリア完全特化！九つの外湯めぐり（厄除巡浴外湯めぐり）、国登録有形文化財「歴史の宿 金具屋」、地獄谷野猿公苑（スノーモンキー）と石畳温泉街の老舗旅館を徹底解説。',
    heroDesc: '石畳が敷き詰められたレトロな小径と、下駄の音が心地よく響く「信州渋温泉」。宿泊者限定で鍵が渡される9つの外湯めぐり、木造建築美の極致・金具屋。ノスタルジーに浸る大人の温泉旅路。',
    categoryKey: 'nagano-shibu-onsen-retro-stay',
    areaGuides: [
      {
        key: 'shibu_kanaguya_history',
        title: '1. 金具屋・斉月楼周辺（宮大工が腕を競った木造建築の最高峰と大正浪漫）',
        timing: '通年（夜のライトアップは年中無休で幻想的）',
        desc: '昭和11年に完成した国登録有形文化財「斉月楼（木造四階建て）」と「大広間」。ジブリ映画の舞台を彷彿とさせる圧倒的な建築美。夜のライトアップされた木造楼閣と、自家源泉から引く8つの風呂を巡る贅沢。',
        spots: '金具屋（斉月楼・居人風呂・浪漫風呂）、渋高薬師（温泉街を見下ろす高台）、石畳通り',
        access: '長野電鉄長野線「湯田中駅」より路線バス・タクシーで約7分。各旅館の送迎バスあり。',
        tip: '金具屋に宿泊すると毎日夕方に開催される「文化財建築解説ツアー」に参加でき、宮大工の粋なこだわりを学べます。'
      },
      {
        key: 'shibu_kyuto_sotoyu',
        title: '2. 厄除巡浴九湯めぐり（宿泊者専用の鍵で巡る一番湯〜九番湯「渋大湯」）',
        timing: '通年（手ぬぐいにスタンプを集めて満願成就祈願）',
        desc: '渋温泉の宿に宿泊すると渡される「九湯の鍵」。初湯から大湯まで異なる源泉・効能の9つの共同浴場を巡り、祈願手ぬぐいに朱印を集めて高台の渋高薬師にお参りする伝統の湯めぐり。',
        spots: '九番湯・渋大湯（名物蒸し風呂・足湯）、一番湯・初湯、羽織屋（温泉まんじゅう）、小石屋旅館（カフェバー）',
        access: '石畳の温泉街沿いに9箇所の外湯が点在（すべて徒歩数分圏内）。',
        tip: '「羽織屋」の焼きたて温泉まんじゅうや「小石屋旅館」のクラフトビールを湯上がりに味わうのが最高の楽しみです。'
      },
      {
        key: 'jigokudani_snow_monkey',
        title: '3. 地獄谷野猿公苑（世界で唯一！温泉に入る野生ニホンザルの楽園）',
        timing: '冬期（12月〜3月の雪景色の中での入浴が世界的人気）',
        desc: '世界中から旅行者が訪れる「Snow Monkey Park（地獄谷野猿公苑）」。雪が舞う露天風呂で気持ちよさそうに目を細めて温泉に浸かる野生の猿たち。上林温泉の自然豊かな宿で信州プレミアム牛を満喫。',
        spots: '地獄谷野猿公苑（スノーモンキー）、地獄谷噴泉（国の天然記念物）、上林温泉、志賀高原ロマン美術館',
        access: '湯田中駅よりバスで「上林温泉」下車、遊歩道を徒歩約30分。',
        tip: '冬の遊歩道は雪道となるため、上林温泉のインフォメーションセンターでスノーブーツやスパイクのレンタルがおすすめです。'
      }
    ]
  },
  {
    slug: 'ehime-matsuyama-dogo-onsen-stay',
    badge: 'DOGO ONSEN MICRO GUIDE',
    title: '【愛媛・道後温泉】本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 完全ガイド',
    metaDesc: '日本最古の温泉・道後温泉エリア完全特化！道後温泉本館（保存修理完了）、飛鳥乃湯泉、椿の湯、坊っちゃん列車、宇和島風＆松山風鯛めし食べ歩きと名門旅館を徹底解説。',
    heroDesc: '3000年の歴史を刻む日本最古の温泉「道後」。夏目漱石の小説『坊っちゃん』の舞台となった道後温泉本館の木造建築。からくり時計の音色を聞き、瀬戸内の鯛めしと滑らかな美肌湯に癒やされる旅。',
    categoryKey: 'ehime-matsuyama-dogo-onsen-stay',
    areaGuides: [
      {
        key: 'dogo_honkan_walk',
        title: '1. 道後温泉本館〜飛鳥乃湯泉・椿の湯（名湯三湯めぐりと湯の街そぞろ歩き）',
        timing: '通年（全館営業再開でますます賑わう歴史の湯）',
        desc: '国の重要文化財「道後温泉本館」。太鼓の音で開館を告げる「振鷺閣（しんろかく）」や神の湯・霊の湯。飛鳥時代の建築様式を取り入れた「飛鳥乃湯泉（あすかのゆ）」の開放的な露天風呂。',
        spots: '道後温泉本館、道後温泉別館 飛鳥乃湯泉、椿の湯、道後ハイカラ通り（道後商店街）、坊っちゃんカラクリ時計',
        access: '伊予鉄道市内電車（路面電車）「道後温泉駅」下車徒歩約3〜5分。松山空港よりリムジンバス約40分。',
        tip: '道後ハイカラ通りの「一六本舗」でいただく揚げたての一六タルトの天ぷらは、新感覚の絶品スイーツです。'
      },
      {
        key: 'dogo_taimeshi_gourmet',
        title: '2. 愛媛の二大鯛めし食べ比べ（炊き込み松山鯛めし＆生卵タレ漬け宇和島鯛めし）',
        timing: '通年（瀬戸内の真鯛は年中美味）',
        desc: '土鍋で鯛を一匹丸ごと炊き込む香ばしい「中予風（松山）鯛めし」と、新鮮な真鯛の刺身を生卵と特製醤油ダレに絡めて熱々ご飯にかける「南予風（宇和島）鯛めし」。道後の宿で贅沢に味わい尽くす。',
        spots: '丸水（がんすい・元祖鯛めし）、かどや道後店、道後麦酒館（道後ビールとじゃこ天）',
        access: '道後温泉本館周辺、ハイカラ通り沿いに名店が集中。',
        tip: '道後温泉本館の真向かいにある「道後麦酒館」で、湯上がりに生ビール「坊っちゃんビール」と揚げたてじゃこ天を味わうのが至高です。'
      },
      {
        key: 'dogo_onsen_view_luxury',
        title: '3. 道後高台・松山城パノラマ（湯築城跡・道後公園と贅沢な客室露天風呂宿）',
        timing: '通年（春の道後公園桜・秋の紅葉）',
        desc: '道後温泉街を見晴らす高台の静かな別荘エリア。「ふなや」や「茶玻瑠」「山の手ホテル」など洗練された宿が並び、客室露天風呂から松山市街や夜景を眺めながら極上のプライベートステイ。',
        spots: '道後公園（湯築城跡・展望台）、松山城（ロープウェイ・現存十二天守）、坂の上の雲ミュージアム',
        access: '道後温泉駅より徒歩約5〜10分、または各旅館送迎車。',
        tip: '日本最古の歴史を持つ創業390余年の「ふなや」の日本庭園「詠風庭」は、小川が流れる美しい散策路です。'
      }
    ]
  },
  {
    slug: 'toyama-unazuki-kurobe-gorge-stay',
    badge: 'UNAZUKI GORGE MICRO GUIDE',
    title: '【富山・黒部宇奈月温泉】トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 完全ガイド',
    metaDesc: '富山・宇奈月温泉＆黒部峡谷エリア完全特化！黒部峡谷トロッコ電車、山彦橋・やまびこ遊歩道、日本一の透明度を誇る弱アルカリ性美肌温泉、富山湾の白えび・紅ズワイガニ会席を徹底解説。',
    heroDesc: '日本一深いV字峡谷「黒部峡谷」の玄関口に湧く「宇奈月温泉」。トロッコ電車に揺られて大自然の秘境へ。黒部川のエメラルドグリーンを眺め、富山湾の宝石・白えびと美肌の湯に酔いしれる旅。',
    categoryKey: 'toyama-unazuki-kurobe-gorge-stay',
    areaGuides: [
      {
        key: 'unazuki_gorge_view',
        title: '1. 黒部川リバーサイド・峡谷展望露天風呂（エメラルドグリーンの清流と美肌の湯）',
        timing: '通年（秋の黒部峡谷全山紅葉・冬の雪景色峡谷）',
        desc: '黒部川の清流沿いに建つ宇奈月温泉の宿。日本屈指の透明度（弱アルカリ性単純温泉）を誇るお湯は「美肌の湯」として名高い名泉。川のせせらぎを聞きながら入る露天風呂で心身を解放。',
        spots: '山彦橋・新山彦橋（赤い鉄橋を渡るトロッコ電車のビューポイント）、やまびこ遊歩道、想影展望台',
        access: '北陸新幹線「黒部宇奈月温泉駅」隣接の新黒部駅より富山地方鉄道で約25分「宇奈月温泉駅」下車。',
        tip: '「山彦橋」から新山彦橋を渡るトロッコ電車に手を振ると、乗客や車掌さんが笑顔で振り返してくれる名物シーンに出逢えます。'
      },
      {
        key: 'unazuki_torokko_station',
        title: '2. 黒部峡谷鉄道トロッコ電車（鐘釣温泉・欅平へ向かう秘境アドベンチャー）',
        timing: '運行期間：4月中旬〜11月30日（冬期は特別運行・雪見ツアーあり）',
        desc: '宇奈月駅から欅平（けやきだいら）駅まで全長20.1kmを約1時間20分で結ぶオープンデッキのトロッコ電車。猿飛峡や後曳橋（うしろひきばし）、鐘釣温泉の河原露天風呂など、息をのむ絶景が連続。',
        spots: '黒部峡谷鉄道トロッコ電車、欅平駅（猿飛峡・奥鐘橋）、鐘釣駅（万年雪・河原露天風呂）、宇奈月ダム',
        access: '富山地方鉄道宇奈月温泉駅より徒歩約5分で黒部峡谷鉄道「宇奈月駅」へ。',
        tip: '窓のない「普通客車（オープン型）」に乗ると、肌で峡谷の風と水しぶきを感じられるダイナミックな体験ができます。'
      },
      {
        key: 'unazuki_toyama_seafood',
        title: '3. 富山湾の海の幸づくし（富山湾の宝石「白えび」＆紅ズワイガニ・寒ブリ会席）',
        timing: '通年（春〜秋の白えび・秋〜冬の紅ズワイガニ・冬の寒ブリ）',
        desc: '「天然の生け簀」と称される富山湾の極上魚介。一匹ずつ手剥きされた甘みたっぷりの「白えびの刺身」、水揚げ直後の「茹で紅ズワイガニ」、氷見直送の「寒ブリの刺身・ブリ大根」を堪能。',
        spots: '宇奈月温泉街（足湯おもかげ・足湯いっぷく）、宇奈月麦酒館、セレネ美術館',
        access: '宇奈月温泉街中心部。',
        tip: '名水仕込みの「宇奈月ビール（地ビール）」は国際ビール大賞金賞を受賞した名品で、魚介料理との相性抜群です。'
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

for (const cfg of microWave4Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
