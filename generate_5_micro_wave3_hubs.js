const fs = require('fs');
const path = require('path');

const microWave3Configs = [
  {
    slug: 'gunma-kusatsu-yubatake-stay',
    badge: 'KUSATSU YUBATAKE MICRO GUIDE',
    title: '【群馬・草津温泉】湯畑・西の河原＆湯もみ体験極上宿 完全ガイド',
    metaDesc: '日本一の名湯・草津温泉エリア完全特化！湯畑のライトアップ、西の河原大露天風呂、熱乃湯の湯もみショー、温泉街の食べ歩きと源泉かけ流し旅館を徹底解説。',
    heroDesc: '毎分3万2300リットル以上の自然湧出量を誇る日本屈指の温泉地「草津」。もうもうと立ち込める湯けむりとエメラルドグリーンの湯畑。強酸性の名湯で心身を清める極上の温泉旅へ。',
    categoryKey: 'gunma-kusatsu-yubatake-stay',
    areaGuides: [
      {
        key: 'kusatsu_yubatake_view',
        title: '1. 湯畑周辺・温泉街中心部（エメラルドグリーンの湯滝と夜のライトアップ）',
        timing: '通年（冬の湯けむりとイルミネーションが圧巻）',
        desc: '草津温泉のシンボル「湯畑」。木樋を流れる源泉と滝のように流れ落ちる湯滝。夜には幻想的にライトアップされ、浴衣姿で温泉まんじゅうや焼き鳥を片手にそぞろ歩き。',
        spots: '湯畑、熱乃湯（湯もみと踊りショー）、湯畑前足湯（湯けむり亭）、御座之湯、光泉寺（遅咲由札観音）',
        access: 'JR吾妻線「長野原草津口駅」よりJRバスで約25分「草津温泉バスターミナル」下車徒歩約5分。',
        tip: '光泉寺の階段上から見下ろす湯畑の全景は、草津で最も有名な記念撮影スポットです。'
      },
      {
        key: 'kusatsu_sainokawara',
        title: '2. 西の河原公園〜大露天風呂（至る所から湯が湧く奇観と日本屈指のメガ露天）',
        timing: '通年（秋の紅葉・冬の雪見露天風呂）',
        desc: '湯川の河原からあちこち温泉が湧き出し、湯けむりが立ち込める「西の河原公園」。最奥には総面積500平方メートルの圧倒的開放感を誇る「西の河原露天風呂」が広がります。',
        spots: '西の河原公園、西の河原露天風呂、鬼の茶屋、穴守稲荷神社',
        access: '湯畑より西の河原通り（お土産・甘味ストリート）を抜けて徒歩約10分。',
        tip: '金曜日の夜限定で「西の河原露天風呂」が混浴イベント（湯あみ着着用）を開催しておりカップルに人気です。'
      },
      {
        key: 'kusatsu_luxury_hideaway',
        title: '3. 草津高台・白根山麓（万代鉱源泉や白旗源泉を引く全室離れ・大人宿）',
        timing: '通年（新緑・夏の避暑・冬のスキーリゾート）',
        desc: '中心街の賑わいから一歩離れた閑静な高台。つつじ亭や望雲など名門宿が点在し、異なる複数の自家源泉を引く贅沢な湯巡りと、上州牛・群馬の旬食材を使った本格会席を堪能。',
        spots: '草津温泉スキー場（天狗山プレイゾーン）、草津白根山（湯釜）、ベルツ記念館',
        access: '草津温泉バスターミナルより各旅館の無料送迎車で約3〜5分。',
        tip: '草津温泉スキー場の「バンジップテング（日本一急勾配のジップライン）」で空中散歩を楽しむのも爽快です。'
      }
    ]
  },
  {
    slug: 'gifu-takayama-sanmachi-stay',
    badge: 'HIDA TAKAYAMA MICRO GUIDE',
    title: '【岐阜・飛騨高山】古い町並・宮川朝市＆飛騨牛尽くし極上宿 完全ガイド',
    metaDesc: '飛騨高山エリア完全特化！ミシュラン三つ星「さんまち通り（古い町並）」、宮川朝市、高山陣屋、飛騨牛にぎり寿司食べ歩きと飛騨高山温泉の老舗宿を徹底解説。',
    heroDesc: '出格子の町家と用水路が続く「飛騨の小京都・高山」。朝の宮川沿いで地元のおばあちゃんと会話を楽しむ朝市、芳ばしい香りの飛騨牛串焼き。歴史と木の温もりに包まれる名宿へ。',
    categoryKey: 'gifu-takayama-sanmachi-stay',
    areaGuides: [
      {
        key: 'takayama_old_town',
        title: '1. 上三之町・古い町並み（江戸時代の面影を残す黒木格子の町家と造り酒屋）',
        timing: '通年（4月・10月の高山祭・冬の雪景色）',
        desc: '国の重要伝統的建造物群保存地区「さんまち通り」。杉玉が下がる造り酒屋での地酒試飲や、みたらし団子、飛騨牛にぎり寿司の食べ歩き。夕暮れ時は提灯が灯り格別の風情に。',
        spots: '上三之町・上二之町、高山陣屋（日本唯一現存の江戸幕府郡代役所）、中橋（赤い中橋）、舩坂酒造店',
        access: 'JR高山本線「高山駅」東口より徒歩約10〜12分。',
        tip: '舩坂酒造店の中庭にあるコイン式日本酒サーバーで、名醸「深山菊」などを少しずつ飲み比べるのが人気です。'
      },
      {
        key: 'takayama_hidagyu_gourmet',
        title: '2. 飛騨牛づくし美食ステイ（きめ細やかな霜降りA5飛騨牛ステーキ・朴葉味噌焼き）',
        timing: '通年（冬の飛騨牛すき焼き・しゃぶしゃぶ）',
        desc: 'きめ細やかなサシと芳醇な香りが自慢の最高級黒毛和牛「飛騨牛」。飛騨高山温泉の名宿で、郷土の朴葉味噌（ほおばみそ）ステーキや、口の中でとろけるサーロインを個室で堪能。',
        spots: '宮川朝市（毎朝開催・果物・漬物・民芸品）、陣屋前朝市、東山遊歩道（寺町散策）',
        access: '高山駅より車・タクシーで約5分。',
        tip: '「宮川朝市」で販売されている「おわら玉天」や焼きたてのみたらし団子は、高山の朝の定番名物です。'
      },
      {
        key: 'takayama_station_walk',
        title: '3. 高山駅周辺〜白川郷アクセス拠点（温泉大浴場付きデザイナーズホテル）',
        timing: '通年（冬の白川郷ライトアップ観光の拠点）',
        desc: 'JR高山駅および濃飛バスターミナル周辺。世界遺産・白川郷合掌造り集落への直行バス発着拠点として最適。最上階に展望露天風呂を備えたモダンホテルで快適な滞在。',
        spots: '濃飛バスターミナル（白川郷行きバス約50分）、飛騨民俗村・飛騨の里、高山祭屋台会館',
        access: 'JR高山駅下車すぐ。名古屋駅から特急「ひだ号」で約2時間20分。',
        tip: '白川郷へ向かう高速バスは予約制のため、宿泊予約と同時にバスチケットも確保しておくのが鉄則です。'
      }
    ]
  },
  {
    slug: 'kanagawa-hakone-ashinoko-stay',
    badge: 'HAKONE ASHINOKO MICRO GUIDE',
    title: '【箱根・芦ノ湖＆元箱根】湖畔鳥居・海賊船＆富士ビュー極上宿 完全ガイド',
    metaDesc: '箱根・芦ノ湖・元箱根エリア完全特化！箱根神社「平和の鳥居」、芦ノ湖遊覧海賊船、成川美術館、湖畔ベーカリーカフェと絶景オーシャンビューならぬレイクビュー温泉ホテルを徹底解説。',
    heroDesc: '湖上に浮かぶ朱塗りの鳥居と、雪化粧した富士山の霊峰パノラマ。海賊船が行き交う波静かな芦ノ湖畔。元箱根の歴史あるパワースポットと、優雅なレイクサイドアートステイ。',
    categoryKey: 'kanagawa-hakone-ashinoko-stay',
    areaGuides: [
      {
        key: 'motohakone_jingu',
        title: '1. 元箱根港〜箱根神社（湖上の「平和の鳥居」と九頭龍神社縁結び）',
        timing: '通年（早朝の湖畔散策・毎月13日の九頭龍神社本祭）',
        desc: '芦ノ湖の水面に鮮やかに映える箱根神社「平和の鳥居」。早朝の澄んだ空気の中で参拝し、湖畔の「Bakery & Table 東海」で足湯に浸かりながら焼きたてパンを味わう至福のモーニング。',
        spots: '箱根神社（平和の鳥居・九頭龍神社新宮）、成川美術館（現代日本画と展望ラウンジ）、Bakery & Table 東海',
        access: '小田急箱根高速バス「元箱根港」下車すぐ。箱根登山バス「元箱根港」行き。',
        tip: '成川美術館の展望ラウンジの巨大ガラス窓から眺める「芦ノ湖・海賊船・富士山」は箱根随一の絵画のような絶景です。'
      },
      {
        key: 'ashinoko_lake_view',
        title: '2. 芦ノ湖西岸・桃源台〜箱根町港（箱根海賊船クルーズとレイクビューホテル）',
        timing: '通年（秋の湖畔紅葉・初夏の新緑）',
        desc: '芦ノ湖を縦断する「箱根海賊船」。展望デッキで爽快な風を受けながら、桃源台から元箱根・箱根町港へ。湖畔に佇むザ・プリンス箱根芦ノ湖などで、蛸川温泉と極上フレンチ・日本料理を堪能。',
        spots: '箱根海賊船（クイーン芦ノ湖・ロワイヤルII）、箱根園（箱根園水族館・駒ヶ岳ロープウェー）、箱根関所',
        access: '箱根ロープウェイ「桃源台駅」直結。新宿から小田急箱根高速バス直通。',
        tip: '「箱根駒ヶ岳ロープウェー」で標高1,356mの山頂に登ると、駿河湾・富士山・相模湾の360度大パノラマが広がります。'
      },
      {
        key: 'sengokuhara_susuki',
        title: '3. 仙石原高原（黄金色のすすき草原と世界的ミュージアムリゾート）',
        timing: '秋（9月下旬〜11月上旬のすすき見頃）',
        desc: '台ヶ岳の山裾一面に広がる「仙石原すすき草原」。見渡す限りの黄金色の波を歩いた後は、ポーラ美術館や箱根ラリック美術館でアート鑑賞。乳白色の大涌谷温泉を引く高原リゾートで宿泊。',
        spots: '仙石原すすき草原、ポーラ美術館（印象派絵画・森の遊歩道）、箱根ラリック美術館、箱根湿生花園',
        access: '強羅駅・箱根湯本駅より箱根登山バス「仙石案内所前」「ポーラ美術館」行き。',
        tip: 'ポーラ美術館の「森の遊歩道」にはブナの原生林に野外彫刻が点在し、森林浴アート散歩が楽しめます。'
      }
    ]
  },
  {
    slug: 'nagano-kamikochi-azusa-river-stay',
    badge: 'KAMIKOCHI NATURE MICRO GUIDE',
    title: '【長野・上高地＆大正池】河童橋・穂高連峰＆梓川クラシック宿 完全ガイド',
    metaDesc: '神降地・上高地エリア完全特化！河童橋、大正池の立ち枯れの木、明神池、エメラルドグリーンの梓川と穂高連峰パノラマ、上高地帝国ホテルなど歴史ある名門リゾートを徹底解説。',
    heroDesc: 'マイカー規制によって守られた日本屈指の山岳景勝地「上高地」。梓川にかかる河童橋から仰ぐ穂高連峰の威容。朝靄に包まれる大正池の静寂と、大自然の中で過ごす贅沢なクラシックホテルステイ。',
    categoryKey: 'nagano-kamikochi-azusa-river-stay',
    areaGuides: [
      {
        key: 'kamikochi_kappabashi',
        title: '1. 河童橋・上高地バスターミナル周辺（穂高連峰と梓川の象徴的絶景）',
        timing: 'シーズン：4月下旬〜11月15日（閉山期以外）',
        desc: '木製の吊り橋「河童橋」の正面にそびえる標高3,190mの奥穂高岳と吊尾根。橋のたもとに建つ「五千尺ホテル上高地」や「上高地ホテル白樺荘」のカフェテラスで、名物アップルパイを味わいながら絶景鑑賞。',
        spots: '河童橋、梓川左岸・右岸遊歩道、上高地ビジターセンター、上高地帝国ホテル',
        access: '松本駅より松本電鉄上高地線で新島々駅へ、路線バス乗換「上高地バスターミナル」下車。',
        tip: '五千尺ホテルのラウンジ「5HORN」のプレミアムアップルパイは完売必至の人気名物です。'
      },
      {
        key: 'kamikochi_taishoike',
        title: '2. 大正池〜田代湿原（焼岳の噴火が生んだ立ち枯れの木と朝靄の奇跡）',
        timing: '通年（特に秋のカラマツ黄葉と早朝の朝靄）',
        desc: '大正4年の焼岳噴火で梓川がせき止められて誕生した「大正池」。水面に立ち枯れの木が佇む幻想的な景観。「上高地大正池ホテル」に宿泊すれば、観光バスが到着する前の静寂な朝靄と星空を独占できます。',
        spots: '大正池、田代池・田代湿原、焼岳（活火山）、田代橋',
        access: '上高地行きバス「大正池バス停」下車すぐ。',
        tip: '大正池から河童橋までの約1時間の平坦なネイチャートレッキングは、上高地で最もおすすめの散策ルートです。'
      },
      {
        key: 'kamikochi_shirahone',
        title: '3. 白骨温泉（上高地の麓・「三日入れば三年風邪をひかぬ」乳白色の秘湯）',
        timing: '通年（上高地トレッキング前後の宿泊に最適）',
        desc: '乗鞍岳の東山麓、湯川渓谷の深い谷底に湧く白骨温泉。ミルクのような乳白色の炭酸水素塩泉は肌に優しく体の芯まで温まります。名宿「泡の湯」の巨大混浴大野天風呂は日本を代表する名湯景観。',
        spots: '泡の湯大野天風呂、竜神の滝、白骨温泉飲泉所、乗鞍高原',
        access: '松本ICより車約60分。新島々駅より路線バスあり。上高地沢渡駐車場から車約15分。',
        tip: '温泉水で炊き上げた「温泉粥」は胃腸に優しく、白骨温泉の旅館の朝食の定番名物です。'
      }
    ]
  },
  {
    slug: 'hiroshima-miyajima-itsukushima-stay',
    badge: 'MIYAJIMA ITSUKUSHIMA MICRO GUIDE',
    title: '【広島・宮島＆嚴島神社】海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 完全ガイド',
    metaDesc: '日本三景・安芸の宮島エリア完全特化！世界遺産「嚴島神社」大鳥居の潮干狩り・満潮の絶景、宮島ロープウエー弥山登山、揚げもみじ・焼き牡蠣食べ歩きと老舗温泉旅館を徹底解説。',
    heroDesc: '潮の満ち引きで海に浮かぶ世界遺産「嚴島神社」。宮島に宿泊した人だけが出逢える、観光客が去った後の静寂な夜のライトアップと神聖な早朝参拝。名物あなごめしと宮島温泉に癒やされる特別な島時間。',
    categoryKey: 'hiroshima-miyajima-itsukushima-stay',
    areaGuides: [
      {
        key: 'miyajima_shrine_view',
        title: '1. 嚴島神社・大鳥居周辺（海上の廻廊参拝と夜の幻想ライトアップ）',
        timing: '通年（満潮時の海に浮かぶ姿と干潮時の大鳥居ウォーク）',
        desc: '推古天皇の時代に創建された日本屈指の海上社殿。満潮時にはまるで海に浮かんでいるかのような朱塗りの廻廊を歩き、干潮時には大鳥居の根元まで歩いて行ける奇跡の神社。夜のナイトクルーズも人気。',
        spots: '嚴島神社（国宝社殿・大鳥居・能舞台）、五重塔・千畳閣（豊国神社）、紅葉谷公園',
        access: 'JR宮島口駅・広電宮島口駅よりJR西日本フェリーまたは松大汽船で約10分「宮島桟橋」下車。',
        tip: 'JR西日本フェリーに乗ると、大鳥居に最接近する航路を通るため海上からの大鳥居撮影が可能です。'
      },
      {
        key: 'miyajima_omotesando',
        title: '2. 宮島表参道商店街〜町家通り（焼き牡蠣・揚げもみじ・名物あなごめし）',
        timing: '通年（冬の広島牡蠣シーズンが最高峰）',
        desc: '宮島桟橋から嚴島神社へ続く約350mのメインストリート。ぷりぷりの「焼き牡蠣」や出来立て熱々の「揚げもみじ」、香ばしく焼き上げた「あなごめし」の食べ歩きが楽しめる賑やかな通り。',
        spots: '宮島表参道商店街（清盛通り）、町家通り（レトロな裏路地）、紅葉谷川、みやじマリン（宮島水族館）',
        access: '宮島桟橋より徒歩約3〜5分。',
        tip: '紅葉堂の「揚げもみじ」は外はサクサク、中はアツアツの餡がとろけ、食べ歩きNo.1人気スイーツです。'
      },
      {
        key: 'miyajimaguchi_bay',
        title: '3. 弥山（みせん）パノラマ＆宮島口（弘法大師の霊山と瀬戸内海の多島美）',
        timing: '通年（秋の紅葉谷・初夏の新緑）',
        desc: '初代総理大臣・伊藤博文が「日本三景の一の真価は頂上の眺めにあり」と絶賛した霊峰・弥山（標高535m）。宮島ロープウエーで獅子岩展望台へ登り、瀬戸内海に浮かぶ島々を一望。',
        spots: '弥山山頂展望台、獅子岩展望台、霊火堂（1200年消えずの火）、宮島ロープウエー',
        access: '紅葉谷公園より無料送迎バスでロープウエー紅葉谷駅へ。',
        tip: '霊火堂の「消えずの火」で沸かした霊水（大茶釜のお湯）をいただくと万病に効くと伝えられています。'
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

for (const cfg of microWave3Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
