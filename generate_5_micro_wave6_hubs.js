const fs = require('fs');
const path = require('path');

const microWave6Configs = [
  {
    slug: 'mie-shima-kashikojima-resort-stay',
    badge: 'SHIMA KASHIKOJIMA LUXURY GUIDE',
    title: '【三重・志摩賢島】英虞湾リアス多島美＆志摩観光ホテル・伊勢海老極上宿 完全ガイド',
    metaDesc: '伊勢志摩サミットの舞台・賢島エリア完全特化！英虞湾リアス式海岸の夕景、横山展望台天空カフェ、賢島エスパーニャクルーズ、志摩観光ホテルの伝統フレンチと絶景リゾートホテルを徹底解説。',
    heroDesc: '真珠養殖発祥の地・英虞湾（あごわん）に浮かぶ賢島。夕暮れに黄金色に染まるリアス海岸の多島美と、各国の首脳を魅了した日本最高峰のラグジュアリーリゾートステイ。',
    categoryKey: 'mie-shima-kashikojima-resort-stay',
    areaGuides: [
      {
        key: 'kashikojima_luxury_resort',
        title: '1. 賢島・英虞湾リゾート（サミット首脳が愛した多島美と伝統の海の幸フレンチ）',
        timing: '通年（特に夕暮れ時の英虞湾サンセットが息をのむ美しさ）',
        desc: '伊勢志摩サミットの舞台となった「志摩観光ホテル（ザ クラシック／ザ ベイスイート）」。英虞湾の穏やかな入江と真珠筏を望むラウンジ。伝統の「アワビのステーキ」「伊勢海老のクリームスープ」を堪能。',
        spots: '志摩観光ホテル（サミット記念ギャラリー）、賢島港、賢島エスパーニャクルーズ（あご湾遊覧）、賢島大橋',
        access: '近鉄特急「賢島駅」下車すぐ（大阪難波・近鉄名古屋から直通特急あり）。無料送迎あり。',
        tip: 'ベイスイート屋上庭園からの夕日は、日本の夕陽百選にも選ばれる息をのむ絶景パノラマです。'
      },
      {
        key: 'yokoyama_view_terrace',
        title: '2. 横山展望台〜天空カフェテラス（リアス海岸を一望するウッドデッキ絶景）',
        timing: '通年（午前中の順光・夕暮れ時のグラデーション）',
        desc: '標高140mから英虞湾に浮かぶ60以上の島々と真珠筏を一望する「横山展望台」。併設の「天空カフェテラス（Mirador Shima）」の木製デッキで、伊勢志摩サイダーやスコーンを味わいながら絶景鑑賞。',
        spots: '横山展望台（天空カフェテラス・木漏れ日のテラス・英虞湾展望台）、ともやま公園、桐垣展望台（夕日名所）',
        access: '近鉄鵜方駅よりタクシー・車で約10分。',
        tip: '「桐垣展望台」はカメラマンが集まる英虞湾随一の夕日撮影スポットで、水面に映る夕焼けが圧巻です。'
      },
      {
        key: 'shima_spain_village_stay',
        title: '3. 志摩スペイン村〜パルケエスパーニャ（南欧情緒のテーマパーク＆温泉）',
        timing: '通年（情熱的なフラメンコショー・冬のイルミネーション）',
        desc: 'スペインの街並みやアトラクションが広がる「志摩スペイン村 パルケエスパーニャ」。「ホテル志摩スペイン村」に宿泊すれば、南欧風の客室と伊賀焼の露天風呂「ひまわりの湯」で贅沢な休日。',
        spots: '志摩スペイン村（パルケエスパーニャ）、ホテル志摩スペイン村、伊勢志摩温泉「ひまわりの湯」',
        access: '近鉄鵜方駅より直通バスで約13分。',
        tip: '天然温泉「ひまわりの湯」はアルカリ性単純温泉で、ヌルヌルとした肌触りの極上美肌湯です。'
      }
    ]
  },
  {
    slug: 'tochigi-nasu-highland-nature-stay',
    badge: 'NASU HIGHLAND NATURE GUIDE',
    title: '【栃木・那須高原】茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 完全ガイド',
    metaDesc: '皇室の御用邸があるロイヤルリゾート・那須高原エリア完全特化！那須連山・茶臼岳ロープウェイ、殺生石、ペニーレインなど人気ベーカリーカフェ、那須温泉郷の鹿の湯（にごり湯）とクラシックホテルを徹底解説。',
    heroDesc: '標高1,000mを超える那須連山の山裾に広がる「那須高原」。開湯1300年の硫黄泉「鹿の湯」と、パチパチ薪が燃える暖炉付き高原リゾート。澄みきった空気の中で過ごす優雅な休日。',
    categoryKey: 'tochigi-nasu-highland-nature-stay',
    areaGuides: [
      {
        key: 'nasu_shikanoyu_onsen',
        title: '1. 那須湯本・鹿の湯周辺（白濁硫黄泉の元祖と殺生石の奇観）',
        timing: '通年（冬の雪見風呂・秋の紅葉シーズン）',
        desc: '630年開湯、栃木県最古の木造共同浴場「鹿の湯」。41度から48度まで分かれた浴槽で短時間入浴を繰り返す伝統の入浴法。九尾の狐伝説が残る「殺生石」の硫黄の香り漂う奇勝。',
        spots: '元湯 鹿の湯、殺生石（九尾の狐伝説）、那須温泉神社、湯善の里',
        access: '東北新幹線「那須塩原駅」より関東自動車バス「那須ロープウェイ行き」で約35分「那須湯本温泉」下車。',
        tip: '鹿の湯はシャンプーや石鹸の使用が禁止されている本格湯治場のため、純粋なお湯の力だけを体感しましょう。'
      },
      {
        key: 'nasu_forest_resort',
        title: '2. 那須高原・御用邸の森リゾート（暖炉ラウンジ＆那須黒毛和牛ディナー）',
        timing: '通年（新緑の避暑・秋の全山紅葉）',
        desc: '那須御用邸に隣接する広大な森林リゾート。暖炉付きラウンジでのワインフリーフローや、那須黒毛和牛のグリルステーキ、地元契約農家の高原野菜を味わう贅沢なオールインクルーシブステイ。',
        spots: '那須平成の森（御用邸用地の原生林ガイドウォーク）、那須ロープウェイ（茶臼岳九合目）、那須高原展望台（恋人の聖地）',
        access: '東北新幹線那須塩原駅より各ホテル無料送迎バスで約30分。東北道那須ICより約15分。',
        tip: '「那須平成の森」では専門ガイドと一緒に歩くガイドウォークに参加すると、手つかずの巨木や野鳥に出逢えます。'
      },
      {
        key: 'nasu_bakery_cafe_stay',
        title: '3. ベーカリーカフェ＆アートミュージアム（ペニーレインとステンドグラス）',
        timing: '通年（ビートルズファン・アンティーク好き必見）',
        desc: 'ビートルズの世界観が広がる名門ベーカリー「BAKERY PENNY LANE（ペニーレイン）」。名物ブルーベリーブレッドや、アンティークステンドグラスが輝く美術館、那須どうぶつ王国など充実の観光。',
        spots: 'BAKERY PENNY LANE那須店、那須ステンドグラス美術館、那須どうぶつ王国、那須とりっくあーとぴあ',
        access: '那須高原広谷地交差点より車で約5〜15分。',
        tip: 'ペニーレインのモーニングは早朝から行列ができるため、オープン前（朝7時半頃）の到着がおすすめです。'
      }
    ]
  },
  {
    slug: 'kyoto-ujigawa-greentea-stay',
    badge: 'KYOTO UJI TEA & HERITAGE GUIDE',
    title: '【京都・宇治】平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 完全ガイド',
    metaDesc: '世界遺産・京都宇治エリア完全特化！十円玉に描かれた平等院鳳凰堂、宇治川の鵜飼い・橘橋、創業数百年の宇治茶老舗（辻利・中村藤吉）の抹茶パフェ、源氏物語宇治十帖と川畔温泉旅館を徹底解説。',
    heroDesc: '宇治川の滔々たる清流と、極楽浄土を現世に再現した「平等院鳳凰堂」。香ばしい宇治茶の焙じ香が漂う参道。源氏物語の舞台となった歴史の古都で、極上の抹茶スイーツと川畔の静寂に浸る旅。',
    categoryKey: 'kyoto-ujigawa-greentea-stay',
    areaGuides: [
      {
        key: 'uji_byodoin_view',
        title: '1. 平等院鳳凰堂〜宇治川リバーサイド（極楽浄土の建築美と川畔の朝散歩）',
        timing: '通年（春の藤棚・秋の紅葉ライトアップ）',
        desc: '永承7年（1053年）関白藤原頼通によって建立された国宝「平等院鳳凰堂」。阿字池に映る優美な鳳凰堂の姿。宇治川の中州（塔の島・橘島）にかかる喜撰橋や橘橋を渡る風情ある散策。',
        spots: '平等院（鳳凰堂内部拝観・ミュージアム鳳翔館）、宇治川（橘橋・喜撰橋・十三重石塔）、宇治川の鵜飼い（夏期）',
        access: 'JR奈良線「宇治駅」南出口より徒歩約10分。京阪宇治線「宇治駅」より徒歩約10分。',
        tip: '平等院鳳凰堂の内部拝観は当日受付の先着順（定員制）のため、開門直後の朝9時に予約を済ませましょう。'
      },
      {
        key: 'uji_greentea_sweets',
        title: '2. 平等院表参道〜宇治茶老舗めぐり（挽きたて宇治抹茶パフェ＆茶団子食べ歩き）',
        timing: '通年（新茶の季節：5月〜6月）',
        desc: '茶香炉から漂うお茶の香りに包まれる「平等院表参道」。「中村藤吉本店」の竹筒に入った生茶ゼリイや「伊藤久右衛門」の宇治抹茶パフェ。宿の夕食では、抹茶塩でいただく天ぷらや茶粥会席を堪能。',
        spots: '平等院表参道、中村藤吉本店（生茶ゼリイ）、伊藤久右衛門宇治本店、辻利一本店',
        access: 'JR宇治駅・京阪宇治駅より表参道まで徒歩約5〜8分。',
        tip: '「中村藤吉本店」のカフェは整理券発券機で順番待ちができるため、発券後に平等院を参拝すると効率的です。'
      },
      {
        key: 'uji_genji_heritage',
        title: '3. 宇治上神社〜さわらびの道（世界遺産の日本最古神社建築と源氏物語）',
        timing: '通年（緑豊かな歴史の散策路）',
        desc: '日本最古の本殿建築（国宝）を有する世界遺産「宇治上神社」と「宇治神社」。宇治川東岸の「さわらびの道」を歩き、紫式部が描いた『源氏物語』宇治十帖の舞台となった文学の里を巡る。',
        spots: '宇治上神社（国宝本殿・桐原水）、宇治神社（みかえり兎）、源氏物語ミュージアム、興聖寺（琴坂の紅葉）',
        access: '京阪宇治駅より徒歩約10分。JR宇治駅より徒歩約20分。',
        tip: '宇治上神社の境内にある「桐原水（とうげんすい）」は、宇治七名水の中で唯一現存する名水湧水です。'
      }
    ]
  },
  {
    slug: 'oita-beppu-hell-hotspring-stay',
    badge: 'BEPPU JIGOKU MICRO GUIDE',
    title: '【大分・別府八湯＆別府地獄めぐり】海地獄・血の池地獄＆地獄蒸し極上宿 完全ガイド',
    metaDesc: '日本一の湧出量・別府温泉郷エリア完全特化！海地獄・血の池地獄など7つの別府地獄めぐり、鉄輪温泉の湯けむり展望台、地獄蒸し料理体験、砂湯と老舗温泉旅館を徹底解説。',
    heroDesc: '街の至る所から立ち上る湯けむり。日本一の温泉湧出量と源泉数を誇る「おんせん県おおいた・別府」。コバルトブルーの海地獄、真っ赤な血の池地獄。地熱と温泉の圧倒的パワーに癒やされる旅。',
    categoryKey: 'oita-beppu-hell-hotspring-stay',
    areaGuides: [
      {
        key: 'beppu_kannawa_steam',
        title: '1. 鉄輪（かんなわ）温泉街（もうもうと立ち上る湯けむりと伝統の地獄蒸し）',
        timing: '通年（夜の湯けむりライトアップが日本の夜景遺産認定）',
        desc: '別府で最も温泉情緒が濃厚な「鉄輪温泉」。温泉の蒸気熱で野菜や海鮮、卵を一気に蒸し上げる「地獄蒸し工房鉄輪」での調理体験。石畳の小径に立ち込める湯けむりと、足蒸し・むし湯を満喫。',
        spots: '地獄蒸し工房鉄輪、湯けむり展望台、鉄輪むし湯、ひょうたん温泉（ミシュラン三ツ星・砂湯・滝湯）',
        access: 'JR日豊本線「別府駅」西口より亀の井バスで約20分「鉄輪」下車。',
        tip: '「湯けむり展望台」から眺める鉄輪温泉街の湯けむりと鶴見岳の夕景・夜景は、国の重要文化的景観です。'
      },
      {
        key: 'beppu_jigoku_walk',
        title: '2. 別府地獄めぐり（コバルトブルーの海地獄から真っ赤な血の池地獄まで）',
        timing: '通年（7つの地獄共通観覧券で完全制覇）',
        desc: '1000年以上前から噴気や熱泥が噴出する奇勝「別府地獄めぐり」。神秘的な青さの「海地獄」、赤い粘土が沸き立つ「血の池地獄」、間欠泉が豪快に吹き上がる「龍巻地獄」など圧巻の自然現象。',
        spots: '海地獄（国指定名勝・極楽饅頭）、血の池地獄、龍巻地獄、白池地獄、鬼石坊主地獄、かまど地獄、鬼山地獄（ワニ）',
        access: '鉄輪バスターミナル周辺に5地獄、バス約5分の柴石エリアに2地獄が点在。',
        tip: '海地獄の売店で販売されている「地獄蒸し焼きプリン」は、濃厚でほろ苦いカラメルが絶品の名物スイーツです。'
      },
      {
        key: 'beppu_bayside_luxury',
        title: '3. 別府湾リバーフロント＆観海寺高台（朝日を望むインフィニティ温泉リゾート）',
        timing: '通年（海から昇る感動の朝日サンライズ）',
        desc: '別府湾を見下ろす高台の「観海寺温泉」や海岸沿いのラグジュアリーホテル。「杉乃井ホテル（棚湯）」をはじめ、海と空が一体になる大展望露天風呂から別府市街の夜景と朝日を一望。',
        spots: '別府温泉 杉乃井ホテル（棚湯・アクアガーデン）、別府タワー、別府海浜砂湯、高崎山自然動物園',
        access: '別府駅より無料シャトルバスまたはタクシー約10分。',
        tip: '「別府海浜砂湯」では、波打ち際で温かい砂に埋もれながら潮騒を聞く唯一無二の砂湯体験ができます。'
      }
    ]
  },
  {
    slug: 'kanagawa-yugawara-onsen-bangei-stay',
    badge: 'YUGAWARA RETREAT GUIDE',
    title: '【神奈川・湯河原温泉】文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 完全ガイド',
    metaDesc: '都心から特急75分！湯河原温泉エリア完全特化！文豪・夏目漱石や芥川龍之介が執筆した名湯、万葉公園「湯河原惣湯 Books and Retreat」、不動の滝、相模湾の地魚舟盛りと数寄屋造り料亭旅館を徹底解説。',
    heroDesc: '『万葉集』に唯一詠われた古湯「湯河原」。千歳川のせせらぎが響く静寂な山あいに、数寄屋造りの名門旅館が佇む。清流沿いのブックリトリートと、相模湾の鮮魚・湯河原みかんに癒やされる大人の隠れ家へ。',
    categoryKey: 'kanagawa-yugawara-onsen-bangei-stay',
    areaGuides: [
      {
        key: 'yugawara_manyo_retreat',
        title: '1. 万葉公園〜湯河原惣湯 Books and Retreat（渓流のせせらぎと読書・源泉サウナ）',
        timing: '通年（新緑・夏の避暑・秋の渓谷紅葉）',
        desc: '千歳川の渓流沿いに広がる「万葉公園」。カフェやライブラリーが融合した「玄関テラス」と、森の奥深くで源泉かけ流し露天風呂と食事を楽しむ予約制「惣湯テラス」。自然と本に囲まれる極上リトリート。',
        spots: '万葉公園（湯河原惣湯 Books and Retreat・玄関テラス・惣湯テラス）、独歩の湯跡、不動の滝',
        access: 'JR東海道線「湯河原駅」より奥湯河原行きバスで約12分「落合橋」下車すぐ。東京駅から特急踊り子で直通約75分。',
        tip: '「玄関テラス」のカフェは予約不要で利用でき、清流のせせらぎを聞きながらテラス席でサンドイッチと珈琲を楽しめます。'
      },
      {
        key: 'yugawara_bungo_luxury',
        title: '2. 奥湯河原・名門料亭旅館（夏目漱石『明暗』・芥川龍之介ゆかりの静寂）',
        timing: '通年（大人が静かに過ごすおこもり旅行）',
        desc: '湯河原の最奥、藤木川の清流沿いに広がる「奥湯河原」。「海石榴（つばき）」や「石葉」など日本を代表する数寄屋造りの名宿。四季折々の日本庭園、客室専用露天風呂、一流の懐石料理を堪能。',
        spots: '奥湯河原もみじの郷、池峰もみじの広場、五万石遊歩道',
        access: '湯河原駅より奥湯河原行きバス終点下車、またはタクシー約15分。',
        tip: '秋の「もみじの郷」には約540本のイロハモミジが一斉に紅葉し、奥湯河原随一の紅葉のトンネルが広がります。'
      },
      {
        key: 'yugawara_seafood_view',
        title: '3. 相模湾の獲れたて地魚＆湯河原みかん（金目鯛姿煮と柑橘スイーツ）',
        timing: '通年（秋〜冬の湯河原みかん狩り・冬の金目鯛）',
        desc: '相模湾・福浦港や真鶴港直送の鮮魚。脂がのった金目鯛の煮付けや、アジ・伊勢海老のお造り。温暖な気候が育む名産「湯河原みかん」の生搾りジュースやタルトなど、海の恵みと果実のコラボレーション。',
        spots: '福浦漁港（みなと食堂）、湯河原みかん狩り農園、ちぼり湯河原スイーツファクトリー',
        access: '湯河原駅周辺および海岸エリア。',
        tip: '「ちぼり湯河原スイーツファクトリー」では、クッキーバイキング（食べ放題）や工場見学が楽しめお土産購入に最適です。'
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

for (const cfg of microWave6Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
