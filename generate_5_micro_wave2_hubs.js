const fs = require('fs');
const path = require('path');

const microWave2Configs = [
  {
    slug: 'kanagawa-kamakura-shonan-stay',
    badge: 'KAMAKURA & ENOSHIMA MICRO GUIDE',
    title: '【古都鎌倉＆湘南江の島】鶴岡八幡宮・江ノ電・富士夕景ホテル 完全ガイド',
    metaDesc: '鎌倉・湘南・江の島エリア完全特化！鶴岡八幡宮、小町通り、高徳院大仏、江ノ電沿線、七里ヶ浜オーシャンビューホテルと相模湾の地魚・しらすグルメを徹底解説。',
    heroDesc: '江ノ電がコトコト走る相模湾沿い。由緒ある古社寺の静寂と、夕日に染まる富士山と江の島シーキャンドル。都心から1時間で出逢える極上の湘南リゾートステイ。',
    categoryKey: 'kanagawa-kamakura-shonan-stay',
    areaGuides: [
      {
        key: 'kamakura_station_walk',
        title: '1. 鎌倉駅〜小町通り＆鶴岡八幡宮（古都の歴史散策と食べ歩き）',
        timing: '通年（春の段葛桜並木・秋の紅葉・年末年始初詣）',
        desc: '源頼朝ゆかりの鶴岡八幡宮へ続く「段葛」と、人気スイーツ店や伝統工芸店が並ぶ「小町通り」。朝の静かな時間に八幡宮を参拝し、鎌倉野菜や手打ち蕎麦を味わう贅沢な散策ステイ。',
        spots: '鶴岡八幡宮、段葛、小町通り、鎌倉国宝館、銭洗弁財天宇賀福神社',
        access: 'JR横須賀線・湘南新宿ライン「鎌倉駅」東口下車徒歩すぐ。東京・新宿から直通約55分。',
        tip: '早朝の段葛散策（朝7時〜8時頃）は人通りが少なく、鶴岡八幡宮の清々しい神域の空気を満喫できます。'
      },
      {
        key: 'shichirigahama_ocean',
        title: '2. 七里ヶ浜＆由比ヶ浜（相模湾越しに富士山と江の島を望む特等席）',
        timing: '通年（秋・冬の澄んだ夕景・サンセットタイムが至高）',
        desc: '江ノ電の車窓に広がる青い海。七里ヶ浜沿いのラグジュアリーホテルや由比ヶ浜の古民家宿では、客室のテラスから海に沈む夕日と富士山のシルエットを眺め、名物ブレックファーストを満喫。',
        spots: '七里ヶ浜海岸、稲村ヶ崎（夕日スポット）、bills七里ヶ浜、由比ヶ浜海岸',
        access: '江ノ島電鉄「七里ヶ浜駅」「由比ヶ浜駅」下車。',
        tip: '稲村ヶ崎から眺める「江の島と富士山の夕景」はかながわの景勝50選に選ばれる絶景フォトスポットです。'
      },
      {
        key: 'enoshima_bayside',
        title: '3. 江の島島内＆片瀬海岸（江島神社参拝と天然温泉・生しらすグルメ）',
        timing: '通年（冬期は湘南の宝石イルミネーション開催）',
        desc: '江の島弁天橋を渡って島内へ。江島神社の三宮巡りや江の島シーキャンドル展望台からの360度パノラマ。片瀬海岸沿いの天然温泉付きホテルで、名物「生しらす丼」やサザエの壺焼きを堪能。',
        spots: '江島神社（辺津宮・中津宮・奥津宮）、江の島シーキャンドル（展望灯台）、江の島岩屋、新江ノ島水族館',
        access: '小田急江ノ島線「片瀬江ノ島駅」、江ノ電「江ノ島駅」、湘南モノレール「湘南江の島駅」。',
        tip: '冬に開催される「湘南の宝石（江の島イルミネーション）」は関東三大イルミネーション認定の圧巻の輝きです。'
      }
    ]
  },
  {
    slug: 'hyogo-kinosaki-onsen-stay',
    badge: 'KINOSAKI ONSEN MICRO GUIDE',
    title: '【兵庫・城崎温泉】七田外湯めぐり＆松葉ガニ・浴衣街歩き極上宿 完全ガイド',
    metaDesc: '兵庫・城崎温泉エリア完全特化！大谿川の柳並木、一の湯・御所の湯など7つの外湯めぐり、津居山・柴山港タグ付き松葉ガニと老舗木造旅館を徹底解説。',
    heroDesc: '浴衣に丹前を羽織り、カランコロンと下駄を鳴らして太鼓橋を渡る。1300年の歴史を誇る名湯・城崎温泉で、7つの外湯めぐりと冬の味覚の王者・松葉ガニに酔いしれる至福の旅。',
    categoryKey: 'hyogo-kinosaki-onsen-stay',
    areaGuides: [
      {
        key: 'kinosaki_river_walk',
        title: '1. 大谿川・柳並木通り（川沿いの石造太鼓橋と大正レトロな木造景観）',
        timing: '通年（冬の雪景色と湯けむりが最高潮）',
        desc: '城崎温泉を象徴する大谿川（おおたにがわ）沿いの柳並木。川沿いに佇む登録有形文化財の木造旅館やレトロカフェを巡り、夜にはライトアップされた太鼓橋を眺めながらそぞろ歩き。',
        spots: '大谿川柳並木、一の湯（洞窟風呂）、柳湯、城崎文芸館、木屋町小路',
        access: 'JR山陰本線「城崎温泉駅」下車徒歩約5〜10分。',
        tip: '浴衣のレンタルや着付けサービス付きの旅館を選ぶと、お気に入りの色浴衣で温泉街散策を楽しめます。'
      },
      {
        key: 'kinosaki_crab_luxury',
        title: '2. 津居山・柴山港直送（タグ付き本松葉ガニのフルコースと地酒ペアリング）',
        timing: '松葉ガニシーズン：11月6日〜翌年3月下旬',
        desc: '近隣の津居山港や柴山港で水揚げされた最高ランクの「津居山ガニ」「柴山ガニ」。花咲くカニ刺し、香ばしい焼きガニ、濃厚なカニ味噌甲羅焼き、カニすき鍋まで、本場の活カニ料理を堪能。',
        spots: '城崎温泉ロープウェイ、温泉寺（本堂・宝物館）、御所の湯（滝見露天風呂）',
        access: '城崎温泉駅より各旅館の無料送迎バス運行。',
        tip: '「姿茹でガニ」をお土産用に宿や駅前のお魚ストリートで手配するのが城崎旅行の定番です。'
      },
      {
        key: 'kinosaki_station_sotoyu',
        title: '3. 城崎温泉駅前〜さとの湯（足湯・飲泉場と7つの外湯完全制覇）',
        timing: '通年（デジタル外湯券「ゆめぱ」で何度でも入浴可能）',
        desc: '駅舎のすぐ隣にある「さとの湯（展望露天風呂）」からスタート。駅前の飲泉場や足湯、お土産ストリートで名物の城崎地ビールや但馬牛まんを味わい、鴻の湯や曼荼羅湯へ。',
        spots: 'さとの湯、鴻の湯（庭園露天風呂）、まんだら湯、地蔵湯、駅前飲泉場',
        access: 'JR城崎温泉駅下車すぐ。大阪・京都から特急で約2時間40分。',
        tip: '「一の湯」の隣にある足湯や「城崎スイーツ本店」の米粉ジェラートが湯上がりの休憩に大人気です。'
      }
    ]
  },
  {
    slug: 'nagano-karuizawa-kyu-stay',
    badge: 'OLD KARUIZAWA MICRO GUIDE',
    title: '【長野・旧軽井沢＆中軽井沢】雲場池・ハルニレテラス＆高原リゾート宿 完全ガイド',
    metaDesc: '軽井沢エリア完全特化！旧軽井沢銀座、雲場池（スワンレイク）、星野エリア・ハルニレテラス、トンボの湯周辺の観光と、森の隠れ家ホテル・クラシック宿を徹底解説。',
    heroDesc: '木漏れ日が揺れる白樺の小径と、澄み渡る高原の風。洗練されたベーカリーやカフェが立ち並ぶ旧軽井沢銀座と、清流沿いのハルニレテラス。自然と文化が調和する日本最高峰の高原リゾートへ。',
    categoryKey: 'nagano-karuizawa-kyu-stay',
    areaGuides: [
      {
        key: 'kyukaruizawa_classic',
        title: '1. 旧軽井沢通り〜雲場池（スワンレイクの絶景と歴史ある別荘地散策）',
        timing: '通年（秋の雲場池紅葉・初夏の避暑シーズン）',
        desc: '水面に映る木々のグラデーションが美しい「雲場池」や、ジョン・レノンも通った名門ホテルやベーカリーが並ぶ旧軽井沢銀座通り。歴史ある洋館ホテルで優雅なティータイムとフレンチを満喫。',
        spots: '雲場池（スワンレイク）、旧軽井沢銀座通り、聖パウロカトリック教会、万平ホテル周辺',
        access: '北陸新幹線「軽井沢駅」北口より路線バス・レンタサイクルで約5〜10分。',
        tip: '雲場池の遊歩道は1周約20分。朝8時前の風のない時間帯は水面が鏡のようになり写真撮影に最適です。'
      },
      {
        key: 'nakakaruizawa_hoshino',
        title: '2. 中軽井沢・星野エリア（ハルニレテラスの清流デッキとトンボの湯）',
        timing: '通年（冬は軽井沢高原教会のキャンドルナイト）',
        desc: '湯川の清流沿いにウッドデッキで結ばれた「ハルニレテラス」。名物カフェやレストラン、源泉かけ流しの「星野温泉トンボの湯」、軽井沢野鳥の森など、自然と上質なリゾートが融合したエリア。',
        spots: 'ハルニレテラス、星野温泉トンボの湯、軽井沢高原教会、軽井沢石の教会内村鑑三記念堂',
        access: 'しなの鉄道「中軽井沢駅」より路線バス約5分。軽井沢駅より無料シャトルバスあり。',
        tip: 'ハルニレテラスの「丸山珈琲」テラス席で、川のせせらぎを聞きながらいただく淹れたて珈琲が至福です。'
      },
      {
        key: 'karuizawa_forest_villa',
        title: '3. 南軽井沢〜プリンス通り（広大な自然とアウトレットショッピング）',
        timing: '通年（秋のショッピング・冬のスキーリゾート）',
        desc: '日本最大級のアウトレット「軽井沢・プリンスショッピングプラザ」や軽井沢プリンスホテルスキー場。暖炉付きコテージや天然温泉大浴場を備えたリゾートで、アクティブ＆ラグジュアリーステイ。',
        spots: '軽井沢・プリンスショッピングプラザ、軽井沢タリアセン（塩沢湖）、軽井沢発地市庭',
        access: '軽井沢駅南口直結・徒歩すぐ。上信越道碓氷軽井沢ICより車約15分。',
        tip: '「軽井沢発地市庭」では朝採れの新鮮な霧下野菜や地元産チーズ・ジャムを直売価格で購入できます。'
      }
    ]
  },
  {
    slug: 'ishikawa-noto-wakura-onsen-stay',
    badge: 'NOTO WAKURA MICRO GUIDE',
    title: '【石川・能登和倉温泉】七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 完全ガイド',
    metaDesc: '石川・能登半島和倉温泉エリア完全特化！七尾湾を一望する展望露天風呂、開湯1200年の海の温泉、能登牛・寒ブリ・のどぐろ会席と名門老舗旅館を徹底解説。',
    heroDesc: '波静かな七尾湾の海辺に湧き出す、国内屈指の高温泉「和倉温泉」。日本海の旬の恵み（寒ブリ・能登牛・加能ガニ）と、加賀屋をはじめとする名門旅館の極上のおもてなしに浸る旅。',
    categoryKey: 'ishikawa-noto-wakura-onsen-stay',
    areaGuides: [
      {
        key: 'wakura_bay_luxury',
        title: '1. 和倉温泉街・七尾湾沿い（海に突き出す展望露天風呂と名門のおもてなし）',
        timing: '通年（冬の雪景色と寒ブリシーズンが最高峰）',
        desc: '七尾湾の穏やかな海を目の前に望む和倉温泉街。塩分を多く含む無色透明の泉質は保温・美肌効果抜群。名門旅館「加賀屋」をはじめ、海と一体になる絶景インフィニティ露天風呂を満喫。',
        spots: '湯元の広場（飲泉・温泉卵作り）、和倉温泉総湯、弁天崎源泉公園、辻口博啓美術館（ル ミュゼ ドゥ アッシュ）',
        access: 'JR七尾線特急「能登かがり火号」で金沢駅から和倉温泉駅まで約60分。のと里山海道経由。',
        tip: 'パティシエ辻口博啓氏のミュージアムカフェ「ル ミュゼ ドゥ アッシュ」で七尾湾を眺めながらいただく限定スイーツが絶品です。'
      },
      {
        key: 'wakura_seafood_gourmet',
        title: '2. 能登半島美食ステイ（冬の寒ブリ・幻の能登牛・高級魚のどぐろ会席）',
        timing: '冬期（寒ブリ・ズワイガニ・牡蠣の冬の三大味覚）',
        desc: '豊かな里山里海が育む能登の極上食材。脂がのった「能登寒ブリのしゃぶしゃぶ」、炭火で香ばしく焼き上げる「のどぐろの塩焼き」、希少な「能登牛のサーロインステーキ」を堪能。',
        spots: '能登島大橋、のとじま水族館、七尾フィッシャーマンズ・ワーフ能登食祭市場',
        access: '和倉温泉駅から車・路線バスで能登島・七尾市内へ。',
        tip: '七尾食祭市場では、館内で購入した新鮮な魚介をその場で炭火焼きにして味わえる「浜焼きコーナー」が大人気です。'
      },
      {
        key: 'nanao_bay_resort',
        title: '3. 能登島＆ツインブリッジのと（イルカが棲む海と絶景アイランドドライブ）',
        timing: '通年（能登島のガラス工房体験）',
        desc: '和倉温泉から能登島大橋を渡って能登島へ。野生のミナミハンドウイルカが暮らす穏やかな内海。島内のガラス工房での吹きガラス体験や、ツインブリッジのとからのパノラマ絶景。',
        spots: '石川県能登島ガラス美術館、ツインブリッジのと、能登島マリンパーク海族公園',
        access: '和倉温泉街より能登島大橋経由で車約10分。',
        tip: 'ツインブリッジのとの展望台からは、七尾北湾に浮かぶ牡蠣棚と吊り橋の優美なコントラストを一望できます。'
      }
    ]
  },
  {
    slug: 'oita-yufuin-kinrin-lake-stay',
    badge: 'YUFUIN KINRIN LAKE MICRO GUIDE',
    title: '【大分・由布院】金鱗湖・湯の坪街道＆由布岳パノラマ極上宿 完全ガイド',
    metaDesc: '大分・由布院（湯布院）エリア完全特化！朝霧立ち込める金鱗湖、湯の坪街道のスイーツ食べ歩き、由布岳を仰ぐ全室離れ・客室露天風呂旅館を徹底解説。',
    heroDesc: '豊後富士と称される美しい「由布岳」の麓。温泉と冷泉が同時に湧き出る神秘の「金鱗湖」に立ち上る朝霧。大人の上質な隠れ家旅館が点在する日本屈指の温泉リゾートへ。',
    categoryKey: 'oita-yufuin-kinrin-lake-stay',
    areaGuides: [
      {
        key: 'kinrin_lake_walk',
        title: '1. 金鱗湖周辺・岳本エリア（湖底から湧く温泉の朝霧とカフェテラス）',
        timing: '通年（秋〜冬の早朝に現れる幻想的な朝霧が最高潮）',
        desc: '湖底から温泉と清水が湧き出る不思議な湖「金鱗湖」。冬の冷え込んだ早朝、湖面から立ち上る湯けむりの朝霧は息をのむ美しさ。湖畔のカフェ「シャガール美術館カフェ」や茅葺き屋根の隠れ宿で過ごす時間。',
        spots: '金鱗湖、天祖神社（湖上の鳥居）、豊の国商人館、マルク・シャガールゆふいん金鱗湖美術館',
        access: 'JR久大本線「由布院駅」より徒歩約20分、またはタクシー約5分。',
        tip: '朝霧を見るなら日の出直後から朝8時頃までが勝負。湖畔の宿に泊まれば早朝散歩ですぐに絶景に出逢えます。'
      },
      {
        key: 'yunotsubo_street',
        title: '2. 湯の坪街道〜由布院駅前（スイーツ食べ歩きとギャラリー散策）',
        timing: '通年（ロールケーキ・プリンどら・コロッケ）',
        desc: '由布院駅から金鱗湖へ続くメインストリート「湯の坪街道」。名物のB-speakロールケーキや金賞コロッケ、抹茶スイーツの食べ歩きや、個性豊かなクラフトギャラリーが並ぶ賑やかな散策路。',
        spots: '湯の坪街道、湯布院フローラルヴィレッジ、コミコアートミュージアム由布院、B-speak',
        access: 'JR由布院駅下車すぐ。博多駅から特急「ゆふいんの森号」で約2時間15分。',
        tip: '隈研吾設計の「COMICO ART MUSEUM YUFUIN」では、草間彌生や村上隆の現代アートを由布岳を借景に鑑賞できます。'
      },
      {
        key: 'yufudake_luxury_villa',
        title: '3. 鳥越・川上・由布岳山麓（雄大な由布岳を仰ぐ全室離れの極上リトリート）',
        timing: '通年（新緑の由布岳・秋のススキ草原・冬の雪化粧）',
        desc: '由布院の奥座敷・鳥越地区や山麓の高台。広大な敷地にわずか数室〜十数室の全室離れ宿が点在。「御三家（亀の井別荘・由布院玉の湯・山荘無量塔）」に代表される日本最高峰のおもてなしと豊後牛炭火焼き。',
        spots: '由布岳（豊後富士・標高1,583m）、狭霧台（さぎりだい展望台）、蛇越展望所',
        access: '由布院駅より車・タクシーで約5〜10分。大分道湯布院ICより車約10分。',
        tip: '由布岳の中腹にある「狭霧台展望台」からは、由布院盆地を一望する大パノラマと秋の朝霧雲海を望めます。'
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

for (const cfg of microWave2Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
