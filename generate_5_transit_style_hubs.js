const fs = require('fs');
const path = require('path');

const transitStyleConfigs = [
  {
    slug: 'shinkansen-direct-walk-onsen-stay',
    badge: 'SHINKANSEN DIRECT & NO CAR GUIDE',
    title: '【新幹線駅直結・徒歩5分温泉宿】車なし・レンタカー不要！手ぶら温泉旅 完全ガイド',
    metaDesc: '運転不要・新幹線駅から徒歩圏内の温泉宿完全特化！東京・名古屋・新大阪・博多から新幹線1本で直行。駅直結ホテル、徒歩5分以内の源泉かけ流し温泉旅館、駅前商店街食べ歩きと手ぶら極上旅を徹底解説。',
    heroDesc: '渋滞知らず、運転疲れゼロ！新幹線改札を出てすぐにチェックインできる「新幹線駅直結・徒歩5分の温泉宿」。ビールを飲みながら駅弁を味わう優雅な移動時間と、駅からすぐの極上名湯に癒やされるスマートな大人の休日。',
    categoryKey: 'shinkansen-direct-walk-onsen-stay',
    areaGuides: [
      {
        key: 'shinkansen_station_walk_onsen',
        title: '1. 新幹線駅直結・徒歩3分ホテル（改札を出て雨に濡れずにチェックイン）',
        timing: '通年（仕事帰りの金曜夜泊や気軽な週末温泉トリップ）',
        desc: '新幹線改札から連絡通路で直結、または駅前ロータリー徒歩数分。重い荷物を預けてすぐに温泉大浴場やサウナへ直行。悪天候でも雨に濡れることなく移動でき、チェックアウト後も新幹線の発車直前まで部屋やラウンジで寛げる快適性。',
        spots: '駅直結ペデストリアンデッキ、駅前温泉展望大浴場、エキナカ商業施設、クラブラウンジ',
        access: '越後湯沢駅、熱海駅、軽井沢駅、京都駅、新大阪駅、富山駅、金沢駅など。',
        tip: '駅直結ホテルなら、チェックイン前後にフロントへ荷物を預けて手ぶらで周辺観光や名物グルメ散策に出かけられます。'
      },
      {
        key: 'atami_yuzawa_shinkansen_ryokan',
        title: '2. 新幹線停車駅の温泉街（熱海・越後湯沢・軽井沢・嬉野・武雄など）',
        timing: '通年（東京から最速35分〜70分で温泉街に到着）',
        desc: '東海道新幹線で東京から最速約35分の「熱海温泉」、上越新幹線で最速約70分の「越後湯沢温泉」、西九州新幹線直結の「嬉野温泉」「武雄温泉」。駅前から続く温泉街の商店街で名物プリンや温泉まんじゅうを食べ歩き。',
        spots: '熱海平和通り商店街、越後湯沢ぽんしゅ館、軽井沢プリンスショッピングプラザ、嬉野温泉街',
        access: '新幹線主要駅から徒歩または路線バス数分。',
        tip: '熱海駅前や越後湯沢駅前には無料の足湯があり、新幹線の待ち時間にも気軽に名湯を楽しめます。'
      },
      {
        key: 'no_car_transit_station_stay',
        title: '3. 車なし・レンタカー不要の旅（地酒を心置きなく味わう自由な温泉旅）',
        timing: '通年（運転免許がない方やシニア世代・お酒好きに最適）',
        desc: '運転の心配がないため、昼から地ビールや地酒の飲み比べを心ゆくまで堪能。観光案内所から発着する周遊観光バスやシェアサイクル、レトロな路面電車を活用して名所を効率よく巡るスマートな旅のスタイル。',
        spots: '市内周遊レトロバス、観光案内所レンタサイクル、駅前地酒バル、老舗居酒屋',
        access: '路面電車や路線バス網が発達した観光都市。',
        tip: '各都市で販売されている「1日乗車券」を購入すると、路面電車や観光周遊バスが乗り放題になり非常にお得です。'
      }
    ]
  },
  {
    slug: 'scenic-tourist-train-onsen-trip-stay',
    badge: 'SCENIC TRAIN & LUXURY RYOKAN GUIDE',
    title: '【観光列車＆極上温泉宿】サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 完全ガイド',
    metaDesc: 'プレミアム観光列車で行く極上温泉旅完全特化！「サフィール踊り子」「観光特急しまかぜ」「特急ゆふいんの森」「ろくもん」「雪月花」の豪華車内体験、プレミアムシート、カフェ車両と沿線の名門温泉旅館を徹底解説。',
    heroDesc: '移動そのものが贅沢なエンターテインメント！パノラマ車窓から海や山を望むプレミアム観光列車「サフィール踊り子」「しまかぜ」「ゆふいんの森」。カフェ車両でスイーツや地ビールを味わい、終着駅で待つ極上の名門温泉宿へ。',
    categoryKey: 'scenic-tourist-train-onsen-trip-stay',
    areaGuides: [
      {
        key: 'saphir_odoriko_izu_stay',
        title: '1. サフィール踊り子（東京・新宿〜伊豆急下田：全席グリーン席のプレミアム列車）',
        timing: '通年（相模湾の青い海を望む絶景ルート）',
        desc: '全席がグリーン席以上の豪華特急「サフィール踊り子」。天窓付きのプレミアムグリーン席や個室、カフェテリア（食堂車）で提供される有名シェフ監修のラーメンやスイーツ。相模湾の水平線を眺めながら伊豆の温泉郷へ。',
        spots: 'サフィール踊り子カフェテリア車両、伊豆熱川・伊豆稲取・伊豆急下田駅周辺の名旅館',
        access: '東京駅・新宿駅より直通約2時間30分。',
        tip: '4名用・6名用の「グリーン個室」を予約すると、プライベート空間で家族や友人とカフェメニューを部屋に届けてもらえます。'
      },
      {
        key: 'shimakaze_iseshima_resort',
        title: '2. 観光特急しまかぜ（大阪難波・京都・近鉄名古屋〜賢島：本革電動リクライニング）',
        timing: '通年（伊勢神宮参拝と伊勢志摩のリアス式海岸リゾート）',
        desc: 'ハイグレードな本革電動リクライニングシートにマッサージ機能付きの「観光特急しまかぜ」。2階建てカフェ車両で味わう松阪牛重や海の幸ピラフ、地ビール。伊勢神宮参拝から英虞湾のラグジュアリーリゾートへ直行。',
        spots: 'しまかぜカフェ車両（2階席パノラマ）、鳥羽駅、鵜方駅、賢島駅周辺の名門リゾート',
        access: '大阪難波・京都・近鉄名古屋より約2時間〜2時間30分。',
        tip: '2階建てカフェ車両の「2階席」は、高い視点から伊勢志摩の豊かな自然や海を見渡せる特等席です。'
      },
      {
        key: 'yufuin_mori_kyushu_onsen',
        title: '3. 特急ゆふいんの森（博多〜由布院・別府：木目調のハイデッカークラシックトレイン）',
        timing: '通年（耳納連山や慈恩の滝を望む九州横断の旅）',
        desc: '木の温もりあふれるクラシックなインテリアと高い視線のハイデッカー構造「特急ゆふいんの森」。ビュッフェカウンターで販売される特製スイーツ「ゆふいんわっぱ弁当」や地サイダー。由布岳を望む名旅館へ。',
        spots: 'ゆふいんの森ビュッフェ、由布院駅（足湯併設駅）、湯の坪街道、金鱗湖',
        access: '博多駅より約2時間15分。',
        tip: '列車が「慈恩の滝」の横を通過する際、車内アナウンスとともに速度を落として徐行運転してくれる絶景サービスがあります。'
      }
    ]
  },
  {
    slug: 'airport-access-direct-resort-stay',
    badge: 'AIRPORT ACCESS & LUXURY ONEN GUIDE',
    title: '【空港直行＆空港至近リゾート宿】羽田・成田・関空・福岡・那覇・千歳 完全ガイド',
    metaDesc: 'フライト前後も快適な空港アクセス特化温泉宿！羽田エアポートガーデン展望温泉、新千歳空港内天然温泉、関空対岸オーシャンビュー、福岡空港至近の博多温泉、那覇空港から直行の瀬長島ウミカジテラス温泉宿を徹底解説。',
    heroDesc: '飛行機を降りてすぐに温泉と美食のリゾートへ！羽田・新千歳など空港直結・至近の展望天然温泉。滑走路を離着陸する飛行機や富士山を眺めながら湯船に浸かり、フライト前後の移動ストレスをゼロにする究極のスマートステイ。',
    categoryKey: 'airport-access-direct-resort-stay',
    areaGuides: [
      {
        key: 'haneda_chitose_airport_onsen',
        title: '1. 空港直結・展望露天風呂（羽田空港＆新千歳空港の天然温泉ホテル）',
        timing: '通年（早朝便・深夜便の前後泊やフライト疲れのリセット）',
        desc: '羽田空港第3ターミナル直結「泉天空の湯 羽田空港」では、富士山や飛行機を眺める屋上展望露天風呂。新千歳空港国内線ターミナル直結の「新千歳空港温泉」では、塩分を多く含む保温美肌の弱アルカリ性温泉。',
        spots: '展望露天風呂（滑走路ビュー・富士山ビュー）、岩盤浴、サウナ、リラクゼーションラウンジ',
        access: '羽田空港第3ターミナル直結、新千歳空港ターミナルビル4階。',
        tip: '羽田空港の「泉天空の湯」は24時間営業しており、深夜到着や早朝出発のフライトでも仮眠や温泉入浴が可能です。'
      },
      {
        key: 'naha_senagajima_resort',
        title: '2. 那覇・瀬長島ウミカジテラス温泉（那覇空港から車15分のアイランドリゾート）',
        timing: '通年（沖縄の青い海と夕陽、頭上を通過する大迫力の飛行機）',
        desc: '那覇空港から車でわずか約15分の瀬長島。「琉球温泉 瀬長島ホテル」では、地下1,000mから湧き出る天然温泉の「立ち湯露天風呂」から慶良間諸島に沈む夕日を一望。隣接するウミカジテラスでお洒落なカフェ巡り。',
        spots: '琉球温泉 龍神の湯（立ち湯露天・ロウリュサウナ）、瀬長島ウミカジテラス（白亜のテラスショップ群）',
        access: '那覇空港より路線バス「ウミカジライナー」で約20分。タクシーで約15分。',
        tip: '立ち湯露天風呂からは、那覇空港の第2滑走路に着陸する飛行機が真横を通過する大迫力の光景が見られます。'
      },
      {
        key: 'kanku_fukuoka_airport_stay',
        title: '3. 関空＆福岡空港アクセス温泉（無料シャトルバスで行く快適トランジット）',
        timing: '通年（関西・九州旅行のゲートウェイ）',
        desc: '関西国際空港の対岸「りんくうタウン」に位置するオーシャンビュー温泉ホテルや、福岡空港から地下鉄でわずか5分の博多駅周辺に佇む天然温泉ホテル。空港への無料シャトルバス運行でスムーズな移動。',
        spots: 'りんくうプレミアム・アウトレット、関空展望ホールSky View、博多駅前天然温泉大浴場',
        access: '関空よりシャトルバス約10分、福岡空港より地下鉄約5分。',
        tip: 'りんくうタウンのホテルに宿泊すると、アウトレットでのショッピングと海辺温泉をフライト前日に楽しめます。'
      }
    ]
  },
  {
    slug: 'drive-touring-garage-onsen-stay',
    badge: 'DRIVE & SCENIC ROAD GUIDE',
    title: '【愛車・ドライブ旅の温泉宿】絶景ワインディング・屋内ガレージ＆EV充電 完全ガイド',
    metaDesc: '車好き・ツーリング愛好家完全特化！ビーナスライン・伊豆スカイライン・阿蘇パノラマライン直結、大切な愛車・バイクを守る屋内ガレージ＆屋根付き駐車場、EV充電スタンド完備、絶景ワインディングと温泉宿を徹底解説。',
    heroDesc: '最高のワインディングロードを走り抜けた後に待つ至福の温泉！ビーナスラインや伊豆スカイラインの絶景ドライブ、大切な愛車やバイクを雨風から守る「屋根付きガレージ」、テラスから愛車を眺められるガレージヴィラへ。',
    categoryKey: 'drive-touring-garage-onsen-stay',
    areaGuides: [
      {
        key: 'garage_villa_car_stay',
        title: '1. ガレージ付きプライベートヴィラ（リビングやテラスから愛車を愛でる贅沢）',
        timing: '通年（愛車とのドライブ旅行・プライベートステイ）',
        desc: '客室に専用のシャッター付きインナーガレージが直結したラグジュアリーヴィラ。リビングのガラス越しやテラスから愛車を眺めながらグラスを傾ける時間。EV急速充電器完備で、電気自動車でのロングドライブも安心。',
        spots: 'インナーガレージ付きヴィラ、EV普通・急速充電スタンド、プライベートサウナ、BBQデッキ',
        access: '富士五湖、軽井沢、那須、伊豆高原、箱根などのドライブ人気エリア。',
        tip: '洗車用ホースやマイクロファイバークロス、工具セットを無料で貸し出してくれる車好き専用宿も人気です。'
      },
      {
        key: 'scenic_drive_route_onsen',
        title: '2. 日本屈指の絶景ワインディング（ビーナスライン・伊豆スカイライン・阿蘇）',
        timing: 'グリーンシーズン：4月〜11月（初夏の新緑・秋の紅葉ワインディング）',
        desc: '標高2,000mの高原を駆け抜ける「信州ビーナスライン」、相模湾と富士山を望む「伊豆スカイライン」、世界最大級のカルデラを走る「阿蘇パノラマライン」。カーブを抜けるたびに広がる絶景と、峠の先にある名湯。',
        spots: 'ビーナスライン（霧ヶ峰・美ヶ原）、伊豆スカイライン（滝知山展望台）、阿蘇ミルクロード（ラピュタの道）',
        access: '主要高速ICからワインディングロード経由。',
        tip: '早朝のワインディングは交通量が少なく、朝霧や朝焼けの雲海の中を爽快にドライブできます。'
      },
      {
        key: 'touring_bike_roof_parking',
        title: '3. ライダー歓迎・屋根付きバイク駐車場（雨風・盗難から愛車を守る安心設備）',
        timing: '春〜秋（ツーリングシーズン）',
        desc: 'ツーリングライダーのために、屋根付き駐車場や舗装された専用駐輪スペースを完備。防犯カメラ設置やチェーンロック貸出。ヘルメットや濡れたライディングウェアを乾かす乾燥室、温泉とサウナでツーリングの疲労を回復。',
        spots: '屋根付きバイク専用駐車場、ライディングギア乾燥室、無料コンプレッサー（空気入れ）、温泉大浴場',
        access: '信州、東北、九州、四国などのツーリングメッカ。',
        tip: 'バイク仲間とのマスツーリングでは、大広間や宴会場で地元の肉料理や地酒を囲んで語り合える宿が喜ばれます。'
      }
    ]
  },
  {
    slug: 'highway-express-bus-direct-onsen-stay',
    badge: 'EXPRESS BUS & DIRECT RESORT GUIDE',
    title: '【高速バス直行・バスターミナル直結温泉宿】乗り換えなし・座席指定で楽々アクセス 完全ガイド',
    metaDesc: '東京・新宿・渋谷・名古屋・大阪から直行！高速バスで行ける温泉宿完全特化！バスタ新宿や主要ターミナルから乗り換えなし。草津温泉・伊香保温泉・白馬・河口湖・南紀白浜などバスターミナル至近の名門旅館を徹底解説。',
    heroDesc: '大きな荷物を持った乗り換えのストレスなし！バスタ新宿や東京駅、梅田から高速バス1本で温泉街の中心へダイレクトアクセス「高速バス直行の温泉宿」。リーズナブルで確実着席、車窓の景色を眺めながらゆったり名湯へ。',
    categoryKey: 'highway-express-bus-direct-onsen-stay',
    areaGuides: [
      {
        key: 'express_bus_kusatsu_ikaho',
        title: '1. 草津温泉・伊香保温泉（バスタ新宿・東京駅から乗り換えなし直行）',
        timing: '通年（冬の雪道運転の心配がなく安全・快適）',
        desc: 'バスタ新宿や東京駅八重洲口から毎日多数運行される高速バス「ゆめぐり号」「上州ゆめぐり号」。草津温泉バスターミナルや伊香保温泉バスターミナルに直着。湯畑や石段街まで徒歩数分の老舗旅館にスムーズにチェックイン。',
        spots: '草津温泉バスターミナル（湯畑まで徒歩5分）、伊香保温泉石段街口、温泉まんじゅう通り',
        access: 'バスタ新宿より高速バスで草津温泉まで直通約3時間45分、伊香保温泉まで約2時間30分。',
        tip: '冬の草津・伊香保は積雪や凍結がありますが、プロドライバーが運転する高速バスならスタッドレスやチェーンの心配なく安心です。'
      },
      {
        key: 'express_bus_kawaguchiko_fuji',
        title: '2. 富士五湖・河口湖（新宿・渋谷・東京駅から約100分の高速アクセス）',
        timing: '通年（外国人観光客にも大人気の富士山絶景ルート）',
        desc: '首都圏主要ターミナルから約10分〜15分間隔で頻発する河口湖行き高速バス。河口湖駅バスターミナル到着後、各ホテルの無料送迎バスや路線バスで湖畔の温泉リゾートへ。富士山と湖を一望する絶景客室ステイ。',
        spots: '河口湖駅前、富士急ハイランドバスターミナル、河口湖遊覧船乗り場',
        access: 'バスタ新宿・東京駅より高速バスで約1時間45分。',
        tip: '高速バスの座席は進行方向「右側（新宿発）」または「左側（富士山発）」を座席指定すると、道中も富士山が見えやすくなります。'
      },
      {
        key: 'express_bus_hakuba_kamikochi',
        title: '3. 白馬・飛騨高山・白川郷（長距離夜行・昼行バスで行く大自然リゾート）',
        timing: '通年（冬のスキー・夏の北アルプス登山・秋の高山祭）',
        desc: '都内や大阪から直行する信州・飛騨方面の高速バス。白馬八方バスターミナルや高山濃飛バスターミナルに到着。重いスキー板やスノーボード、登山リュックをトランクに預けて、終着地まで眠りながら移動できる利便性。',
        spots: '白馬八方バスターミナル、高山濃飛バスセンター（古い町並み徒歩10分）、平湯バスターミナル（奥飛騨温泉郷）',
        access: '新宿・名古屋・大阪より高速バス直行。',
        tip: '夜行便（夜発・翌朝早朝着）を利用すると、朝一番から丸一日ゲレンデや登山、温泉街観光を満喫できます。'
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

export default function TransitStyleHubPage() {
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

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* アクセス・移動ルート・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要発着点＆ルート</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 スムーズな旅のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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

for (const cfg of transitStyleConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated transit style hub page: /${cfg.slug}`);
}
