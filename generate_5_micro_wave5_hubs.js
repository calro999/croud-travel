const fs = require('fs');
const path = require('path');

const microWave5Configs = [
  {
    slug: 'shizuoka-atami-bayside-stay',
    badge: 'ATAMI ONSEN MICRO GUIDE',
    title: '【静岡・熱海温泉】海上花火＆サンビーチ・相模湾オーシャンビュー宿 完全ガイド',
    metaDesc: '都心から新幹線45分！熱海温泉エリア完全特化！年間10回以上開催の熱海海上花火大会、熱海サンビーチ、来宮神社（大楠）、アカオハーブ＆ローズガーデンと相模湾地魚・金目鯛が自慢の温泉ホテルを徹底解説。',
    heroDesc: '青い相模湾とすり鉢状の斜面に広がる熱海の街並み。夜空を彩る大迫力の海上花火大会と、日本屈指の湧出量を誇る美肌温泉。海風を感じながら極上のリゾートステイへ。',
    categoryKey: 'shizuoka-atami-bayside-stay',
    areaGuides: [
      {
        key: 'atami_fireworks_view',
        title: '1. 熱海湾・高台エリア（年間10回以上！海上花火大会を特等席で鑑賞）',
        timing: '通年（春夏秋冬オールシーズン開催される熱海名物海上花火）',
        desc: 'すり鉢状の地形が生み出すスタジアムのような大音響。海に面した客室バルコニーや最上階展望露天風呂から、海面に反射する大空中ナイアガラを混雑なしで独占鑑賞できる贅沢。',
        spots: '熱海海上花火大会（熱海湾）、熱海城（展望天守閣）、アタミロープウェイ、あいじょう岬',
        access: '東海道新幹線「熱海駅」下車。東京駅から新幹線でわずか約45分。各旅館の無料送迎バスあり。',
        tip: '花火大会開催日は数ヶ月前から予約が埋まるため、日程発表と同時に早めの客室確保が必須です。'
      },
      {
        key: 'atami_sunbeach_walk',
        title: '2. 熱海サンビーチ〜親水公園・熱海銀座（ヤシの木並木とレトロプリン散歩）',
        timing: '通年（夜は日本初のビーチライトアップ開催）',
        desc: '南国リゾートの風情漂う「熱海サンビーチ」。ムーンライトビーチの幻想的な夜間照明や、レトロな熱海銀座商店街での「熱海プリン」や干物定食、海鮮丼の食べ歩き。',
        spots: '熱海サンビーチ、親水公園（スカイデッキ・レインボーデッキ）、熱海銀座商店街、熱海プリン',
        access: '熱海駅より平和通り商店街を抜けて徒歩約15分、または路線バス約5分。',
        tip: '親水公園沿いのオープンカフェテラスで、潮風を感じながらいただく静岡クラフトビールとジェラートが人気です。'
      },
      {
        key: 'atami_kinomiya_luxury',
        title: '3. 来宮神社〜熱海梅園・桃山（樹齢2100年の大楠と静寂の隠れ家リトリート）',
        timing: '通年（1月中旬〜3月上旬の熱海梅園梅まつり・初夏の青もみじ）',
        desc: '幹を一回りすると寿命が1年延びると伝わる国指定天然記念物「来宮神社の大楠」。お洒落なオープンカフェが併設された神域を参拝し、高台の緑に囲まれた全室露天風呂付き隠れ宿で伊豆牛と金目鯛を堪能。',
        spots: '来宮神社（大楠・茶寮報鼓）、熱海梅園、MOA美術館（国宝・円形ホール）、起雲閣（名邸・名庭）',
        access: 'JR伊東線「来宮駅」徒歩約5分。熱海駅よりタクシー約8分。',
        tip: 'MOA美術館の「円形ホール万華鏡プロジェクションマッピング」と高台からの初島・伊豆大島パノラマは必見です。'
      }
    ]
  },
  {
    slug: 'gunma-ikaho-stairs-stay',
    badge: 'IKAHO STAIRS MICRO GUIDE',
    title: '【群馬・伊香保温泉】365段の石段街・黄金の湯＆水沢うどん極上宿 完全ガイド',
    metaDesc: '群馬・伊香保温泉エリア完全特化！365段の石段街散策、茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」、河鹿橋の紅葉、日本三大うどん「水沢うどん」と老舗名門旅館を徹底解説。',
    heroDesc: '榛名山の中腹、標高約700mに位置する「伊香保温泉」。365段の石段を一段一段登るごとに広がるレトロな射的場や足湯。鉄分を豊富に含む茶褐色の黄金の湯に浸かり、歴史の情緒に抱かれる旅。',
    categoryKey: 'gunma-ikaho-stairs-stay',
    areaGuides: [
      {
        key: 'ikaho_stairs_walk',
        title: '1. 365段の石段街（温泉まんじゅう発祥の地と射的・足湯めぐり）',
        timing: '通年（石段の途中に流れる「湯樋」の温泉景観）',
        desc: '400年以上の歴史を誇る伊香保のシンボル「石段街」。中央のガラス窓から流れる源泉を眺め、射的や輪投げで遊び、元祖温泉まんじゅう「勝月堂の湯乃花まんじゅう」を頬張りながら登る情緒あふれる散策。',
        spots: '伊香保石段街（365段）、石段の湯（共同浴場）、岸権旅館前足湯「辰の湯」、勝月堂（湯乃花まんじゅう元祖）',
        access: 'JR上越線「渋川駅」より関越交通バスで約25分「伊香保温泉」下車すぐ。新宿から直行高速バスあり。',
        tip: '勝月堂の出来立て熱々の湯乃花まんじゅうは、皮がもちもちで餡がなめらか。朝9時の開店直後が狙い目です。'
      },
      {
        key: 'ikaho_kajikabashi_view',
        title: '2. 河鹿橋〜伊香保神社・飲泉所（朱塗りの太鼓橋と茶褐色の名湯「黄金の湯」）',
        timing: '秋（10月下旬〜11月中旬の河鹿橋紅葉ライトアップ）',
        desc: '石段の頂上に鎮座する伊香保神社を抜けた先にある「河鹿橋」。モミジやカエデが朱塗りの橋を包み込む群馬屈指の紅葉名所。伊香保露天風呂の開放的な湯船で、鉄分と硫酸塩を含む黄金の湯を満喫。',
        spots: '伊香保神社、河鹿橋（紅葉ライトアップ）、伊香保温泉飲泉所、伊香保露天風呂',
        access: '石段街最上段より遊歩道徒歩約5〜8分。',
        tip: '伊香保露天風呂は源泉地の真横にあり、中央で湯船が「あつ湯」と「ぬる湯」に分かれているのが特徴です。'
      },
      {
        key: 'mizusawa_udon_stay',
        title: '3. 水沢観音〜水沢うどん街道＆榛名湖（400年の伝統麺と榛名富士パノラマ）',
        timing: '通年（榛名湖の冬期イルミネーション・ワカサギ釣り）',
        desc: '讃岐・稲庭と並ぶ日本三大うどんの一つ「水沢うどん」。強いコシと透明感ある麺をごまダレや醤油ダレで味わう名店街。坂東三十三観音霊場の水沢寺参拝や、榛名山ロープウェイからの絶景。',
        spots: '水澤観世音（水澤寺）、水沢うどん街道（大澤屋・清水屋）、榛名湖・榛名山（榛名富士ロープウェイ）、竹久夢二伊香保記念館',
        access: '伊香保温泉街より路線バス・車で約10〜15分。',
        tip: '「大澤屋」では岡本太郎の絵画や陶器を眺めながら、舞茸の天ぷらとともに極上の水沢うどんを味わえます。'
      }
    ]
  },
  {
    slug: 'mie-toba-iseshima-bay-stay',
    badge: 'TOBA BAY RESORT GUIDE',
    title: '【三重・鳥羽温泉郷】鳥羽水族館・ミキモト真珠島＆伊勢海老会席極上宿 完全ガイド',
    metaDesc: '三重・鳥羽エリア完全特化！飼育種類数日本一の鳥羽水族館（ジュゴン）、ミキモト真珠島、鳥羽湾めぐり遊覧船、答志島・坂手島パノラマと本場伊勢海老・アワビ・牡蠣が味わえるオーシャンビュー温泉旅館を徹底解説。',
    heroDesc: 'リアス海岸の穏やかな鳥羽湾に浮かぶ島々。日本で唯一ジュゴンに逢える「鳥羽水族館」と真珠王・御木本幸吉の歴史。海を望む展望露天風呂で温まり、伊勢志摩の海の幸を心ゆくまで堪能する海辺の旅。',
    categoryKey: 'mie-toba-iseshima-bay-stay',
    areaGuides: [
      {
        key: 'toba_aquarium_walk',
        title: '1. 鳥羽港・中之郷周辺（飼育種数日本一の水族館と真珠の島）',
        timing: '通年（雨の日でも楽しめる全天候型リゾート）',
        desc: '約1,200種もの生きものを飼育する「鳥羽水族館」。日本で唯一飼育されているジュゴンのセレナやラッコの食事タイム。ミキモト真珠島での海女の実演見学など、海と生命の神秘に出逢うエリア。',
        spots: '鳥羽水族館（12のゾーン・ジュゴン・ラッコ）、ミキモト真珠島（海女の実演ショー・真珠博物館）、鳥羽湾めぐりとイルカ島',
        access: '近鉄・JR「鳥羽駅」より徒歩約10〜15分、またはかもめバスで約5分。',
        tip: '鳥羽水族館には順路がなく自由に回れるため、ラッコやアシカショーのタイムスケジュールを先に確認して回るのがコツです。'
      },
      {
        key: 'toba_iseebi_luxury',
        title: '2. 鳥羽温泉郷・安楽島〜小浜（海にせり出すインフィニティ露天風呂と伊勢海老会席）',
        timing: '通年（10月〜4月の伊勢海老・冬の浦村牡蠣）',
        desc: '鳥羽湾を一望する岬の高台に立ち並ぶリゾートホテル・名門旅館。美肌効果の高いアルカリ性単純温泉の露天風呂から、行き交う船や朝日に輝く海を鑑賞。生きた伊勢海老のお造りやアワビの陶板焼きを満喫。',
        spots: '鳥羽展望台（食国蔵王・天空テラス）、安楽島大橋、鳥羽マリンターミナル',
        access: '鳥羽駅より各旅館の無料シャトルバスで約5〜15分。',
        tip: '「鳥羽展望台」の天空カフェテラスから望む太平洋の大パノラマと、名物「伊勢海老ソフトクリーム」がドライブ客に大人気です。'
      },
      {
        key: 'toba_ijika_seafood',
        title: '3. 相差（おうさつ）・海女と漁師の町（日本一海女が多いまちの豪快舟盛りと石神さん）',
        timing: '通年（女性の願いを一つ叶えてくれる石神さん参拝）',
        desc: '現役の海女さんが最も多く暮らす町・相差。女性の願いを一つだけ必ず叶えてくれるとされる「石神さん（神明神社）」や、海女小屋で獲れたてのサザエや大アサリを炭火で焼いて味わう海女小屋体験。',
        spots: '神明神社（石神さん）、海女小屋相差かまど、千鳥ヶ浜海岸、相差海女文化資料館',
        access: '鳥羽駅より三重交通バス「国崎行き」で約35分「相差」下車。各宿送迎あり。',
        tip: '石神さんの参拝時は、ピンク色の祈願紙に願い事を一つだけ書き、願い箱に納めるのが古くからの習わしです。'
      }
    ]
  },
  {
    slug: 'nagasaki-unzen-onsen-hell-stay',
    badge: 'UNZEN JIGOKU MICRO GUIDE',
    title: '【長崎・雲仙温泉】雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 完全ガイド',
    metaDesc: '長崎・雲仙天草国立公園エリア完全特化！もうもうと白煙が上がる「雲仙地獄」、日本最初の国立公園のクラシックホテル、濃厚な白濁硫黄泉、名物雲仙温泉レモネードと長崎和牛・島原郷土料理旅館を徹底解説。',
    heroDesc: '標高700mの高原に広がるキリシタン哀史の地「雲仙地獄」。ゴウゴウと噴き出す白煙と硫黄の香り。明治時代に外国人の避暑地として開かれたクラシックな洋館リゾートと、極上の白濁湯に浸る休日。',
    categoryKey: 'nagasaki-unzen-onsen-hell-stay',
    areaGuides: [
      {
        key: 'unzen_jigoku_walk',
        title: '1. 雲仙地獄めぐり（大叫喚地獄・お糸地獄の奇観と温泉たまご）',
        timing: '通年（冬の霧氷・初夏のミヤマキリシマ）',
        desc: '約30箇所もの地獄から高熱の温泉と白い噴煙が吹き上がる「雲仙地獄」。木道が整備された地獄内を散策し、地熱を直接体感できる「足蒸し」や、地獄の蒸気で蒸し上げた名物「温泉たまご」を味わう。',
        spots: '雲仙地獄（大叫喚地獄・お糸地獄・邪見地獄）、雲仙地獄工房（温泉たまご）、雲仙温泉足湯ふれあいの湯',
        access: 'JR諫早駅より島鉄バス「雲仙行き」で約80分「雲仙」下車。長崎空港よりバス・レンタカー。',
        tip: '「雲仙地獄工房」の温泉たまごは、食べると「1個で1年、2個で2年、3個で死ぬまで長生き」と言われる名物です。'
      },
      {
        key: 'unzen_classic_hotel',
        title: '2. 雲仙クラシックリゾート（昭和10年創業の洋館建築美と長崎和牛フレンチ）',
        timing: '通年（避暑地として愛されたノスタルジー）',
        desc: '日本最初の国立公園に指定された雲仙。国の登録有形文化財「雲仙観光ホテル」に代表されるスイス・シャレースタイルのクラシックホテル。重厚な木造建築、ステンドグラス、本格フレンチディナーを堪能。',
        spots: '雲仙観光ホテル（バー・撞球室）、雲仙ビードロ美術館、古湯・新湯・小地獄温泉街',
        access: '雲仙温泉街中心部。',
        tip: '雲仙ビードロ美術館では19世紀のボヘミアンガラスやアンティークオルゴールの音色を楽しめます。'
      },
      {
        key: 'unzen_nita_pass',
        title: '3. 仁田峠〜妙見岳・平成新山（ロープウェイから望む有明海と活火山の雄姿）',
        timing: '春（5月のミヤマキリシマ）・秋（10月下旬の紅葉）・冬（霧氷）',
        desc: '標高1,080mの仁田峠から雲仙ロープウェイで妙見岳山頂へ。平成の噴火で誕生した日本で最も新しい山「平成新山（標高1,483m）」や、有明海・天草諸島を一望する360度の大パノラマ。',
        spots: '仁田峠循環道路、雲仙ロープウェイ、妙見岳展望台、平成新山（普賢岳）',
        access: '雲仙温泉街より車・乗合タクシーで約20分「仁田峠」へ。',
        tip: '冬の仁田峠は木々に氷が結晶化する「霧氷（むひょう）」の銀世界が広がり、幻想的な白銀絶景を楽しめます。'
      }
    ]
  },
  {
    slug: 'okayama-kurashiki-bikan-stay',
    badge: 'KURASHIKI BIKAN MICRO GUIDE',
    title: '【岡山・倉敷美観地区】白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 完全ガイド',
    metaDesc: '岡山・倉敷美観地区エリア完全特化！倉敷川の舟流し、白壁土蔵の町並み、日本初の西洋美術館「大原美術館」、倉敷デニムストリート、岡山白桃・マスカットパフェと美観地区の風情ある町家ホテルを徹底解説。',
    heroDesc: '白壁の土蔵となまこ壁、川面に揺れる柳並木。江戸時代の天領の面影を色濃く残す「倉敷美観地区」。モネの『睡蓮』を所蔵する大原美術館と、町家をリノベーションした上質な宿泊体験。',
    categoryKey: 'okayama-kurashiki-bikan-stay',
    areaGuides: [
      {
        key: 'kurashiki_river_walk',
        title: '1. 倉敷川沿い・美観地区中心部（くらしき川舟流しと白壁土蔵の夜景ライトアップ）',
        timing: '通年（夕暮れから始まる景観照明が極めてロマンチック）',
        desc: '白壁の土蔵と柳並木が続く倉敷美観地区のメインストリート。かつて物資を運んだ川舟に乗る「くらしき川舟流し」。夜間には照明デザイナー石井幹子氏が手がけた幻想的なライトアップが町を照らします。',
        spots: '倉敷川畔（中橋・今橋）、くらしき川舟流し、倉敷館（観光案内所・大正洋風建築）、有隣荘（緑御殿）',
        access: 'JR山陽本線・伯備線「倉敷駅」南口より徒歩約10〜12分。山陽新幹線岡山駅より在来線で約17分。',
        tip: '「くらしき川舟流し」は当日販売の乗船券が必要で午前中に売り切れることが多いため、到着直後に倉敷館で購入しましょう。'
      },
      {
        key: 'kurashiki_ohara_art',
        title: '2. 大原美術館〜倉敷アイビースクエア（世界的名画鑑賞と赤レンガ紡績工場リゾート）',
        timing: '通年（モネ・エル・グレコ・ゴーギャンの本物に出逢う）',
        desc: '昭和5年に設立された日本最初の私立西洋美術館「大原美術館」。エル・グレコの『受胎告知』やモネの『睡蓮』。明治時代の紡績工場を再生したツタ（アイビー）の絡まる赤レンガホテルで優雅な滞在。',
        spots: '大原美術館（本館・分館・工芸東洋館）、倉敷アイビースクエア（愛美赤煉瓦館）、倉敷デニムストリート',
        access: '美観地区内、倉敷駅より徒歩約15分。',
        tip: '倉敷デニムストリートでは、日本屈指の児島デニム製品のほか、青い「デニムまん」や「デニムソフト」が話題です。'
      },
      {
        key: 'kurashiki_gourmet_fruits',
        title: '3. フルーツ王国岡山のパフェ＆瀬戸内の幸（白桃・シャインマスカットと下津井タコ）',
        timing: '通年（夏〜秋の白桃・マスカット、冬〜春のいちごパフェ）',
        desc: 'フルーツ王国・岡山。美観地区内の古民家フルーツパーラー「くらしき桃子」などで味わう贅沢なプレミアムパフェ。宿の夕食では、瀬戸内海の急流で育った名物「下津井タコ」や希少な「千屋牛（ちやぎゅう）」を堪能。',
        spots: 'くらしき桃子（倉敷本店・総本店）、三宅商店（町家カフェ・季節のパフェ）、下津井港（タコ料理）',
        access: '美観地区本町通り・東町周辺。',
        tip: '町家カフェ「三宅商店」の季節のフルーツパフェは、築150年の町家の畳敷きでいただく至福のスイーツ体験です。'
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

for (const cfg of microWave5Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
