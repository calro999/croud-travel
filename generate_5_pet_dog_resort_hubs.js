const fs = require('fs');
const path = require('path');

const petConfigs = [
  {
    slug: 'dog-friendly-private-onsen-bath-resort-stay',
    badge: 'DOG PRIVATE ONSEN GUIDE',
    title: '【愛犬専用温泉付き客室＆露天風呂宿】伊豆・那須・箱根・関西 完全ガイド',
    metaDesc: '愛犬と一緒に温泉で極上の癒やし！客室専用愛犬用温泉・足湯＆露天風呂付き宿完全特化！伊豆高原、那須高原、箱根、京都・関西、愛犬専用バスタブ完備、滑りにくい床素材、美肌の天然温泉宿を徹底解説。',
    heroDesc: '大好きな愛犬と一緒に湯浴みを楽しむ夢の休日「愛犬専用温泉付き客室＆露天風呂宿」。客室テラスに設えられた愛犬専用の天然温泉バスタブや足湯。飼い主の露天風呂のすぐ隣で一緒に温まる至福。愛犬用ドライヤーやトリミング台完備の名宿へ。',
    categoryKey: 'dog-friendly-private-onsen-bath-resort-stay',
    areaGuides: [
      {
        key: 'izu_kogen_dog_onsen_resort',
        title: '1. 静岡・伊豆高原（愛犬の聖地！客室専用ドッグ温泉露天風呂）',
        timing: '通年（温暖な気候で一年中ドッグフレンドリーなリゾート）',
        desc: '日本有数の愛犬同伴リゾート地「伊豆高原」。客室テラスに飼い主用と愛犬用の温泉露天風呂が並んで設置された贅沢な宿。アルカリ性単純温泉で愛犬の毛並みもつやつやに。滑りにくい防水床や愛犬専用アメニティ完備。',
        spots: '伊豆高原ドッグフォレスト、城ヶ崎海岸遊歩道、大室山（リフト愛犬同伴可）、伊豆シャボテン動物公園',
        access: '東名高速・厚木ICまたは小田原厚木道路経由。JR伊豆急行線「伊豆高原駅」周辺。',
        tip: '大室山登山リフトは小型犬〜中型犬（抱っこ可能サイズ）であれば愛犬と一緒に山頂まで登ることができ、山頂お鉢巡りのお散歩が爽快です。'
      },
      {
        key: 'nasu_hakone_dog_luxury_onsen',
        title: '2. 栃木・那須高原＆神奈川・箱根（涼冷な高原と大自然のドッグスパ）',
        timing: '通年（夏期の避暑・秋の紅葉ドッグラン散策）',
        desc: '広大な森に包まれた那須高原や箱根強羅のラグジュアリードッグホテル。客室露天風呂の横に愛犬専用の温泉シャワーや足湯。愛犬用バスローブ、プロ仕様のブロアー＆ドライヤーコーナー完備。森のプライベートドッグラン直結。',
        spots: '那須ハイランドパーク（愛犬同伴アトラクション）、箱根芦ノ湖遊覧船、那須ガーデンアウトレット、仙石原ススキ草原',
        access: '東北道「那須IC」または東名「御殿場IC」より車約15〜20分。',
        tip: '那須高原は愛犬同伴可能なカフェやレストランが日本一の密度で集積しており、散策の途中にテラス席で一緒にランチやカフェを楽しめます。'
      },
      {
        key: 'kansai_dog_private_bath_stay',
        title: '3. 関西・京都天橋立＆兵庫淡路島（海と温泉を愛犬と独占するヴィラ）',
        timing: '通年（京阪神から車で90〜120分の好アクセス）',
        desc: '京都・天橋立や兵庫・淡路島の海岸沿いに建つプライベートヴィラ。客室専用の天然温泉（金温泉・美肌の湯）と愛犬用足湯。客室からそのまま出られるオーシャンビューのプライベート天然芝ドッグラン。',
        spots: '天橋立公園（松並木お散歩）、淡路島国営明石海峡公園、淡路シェフガーデン',
        access: '京阪神より車で約1〜2時間。',
        tip: '天橋立の約3.6kmに及ぶ白砂青松の松並木道は、日陰が多く地面も砂地のため、愛犬の足腰に優しく最高のお散歩コースになります。'
      }
    ]
  },
  {
    slug: 'dog-private-grass-run-villa-stay',
    badge: 'PRIVATE DOG RUN VILLA GUIDE',
    title: '【天然芝プライベートドッグラン付きヴィラ】アジリティ＆貸切一棟ステイ 完全ガイド',
    metaDesc: 'ノーリードで思いっきり駆け回る歓び！客室専用天然芝プライベートドッグラン付き一棟貸しヴィラ完全特化！千葉九十九里・那須・軽井沢・琵琶湖、アジリティ完備、足洗い場＆温水シャワー、愛犬とBBQを楽しむ宿を徹底解説。',
    heroDesc: 'リビングの掃き出し窓を開けると、目の前に広がる100平米超の専用天然芝ガーデン！「天然芝プライベートドッグラン付きヴィラ」。他の犬を気にせずノーリードで全力疾走。アジリティ遊具やプール、足洗い場完備。愛犬の笑顔を独占する休日へ。',
    categoryKey: 'dog-private-grass-run-villa-stay',
    areaGuides: [
      {
        key: 'chiba_kujukuri_dog_villa_run',
        title: '1. 千葉・九十九里＆南房総（100坪超の広大天然芝ドッグランと海風）',
        timing: '通年（都心から車で約90分・年間を通じて温暖）',
        desc: '太平洋の潮風を感じる九十九里海岸沿いの一棟貸しヴィラ。敷地内に100坪〜200坪の完全フェンス付き天然芝ドッグラン。愛犬用アジリティ（ハードル・トンネル）完備。ナイター照明付きで夜でも安全に遊べる設計。ウッドデッキBBQ。',
        spots: '九十九里ビーチ（愛犬と砂浜ダッシュ）、片貝海水浴場、ハーブガーデン、道の駅オライはすぬま',
        access: '圏央道「東金IC」または「松尾横芝IC」より車約15〜20分。',
        tip: '九十九里の砂浜は遠浅で砂が細かく、早朝や夕暮れ時に愛犬と一緒に波打ち際を走ると最高のフォトジェニックな写真が撮れます。'
      },
      {
        key: 'karuizawa_nasu_dog_forest_villa',
        title: '2. 長野・軽井沢＆栃木・那須（緑の木漏れ日とウッドチップラン）',
        timing: '通年（夏期の涼しい避暑地滞在・秋の紅葉ラン）',
        desc: '浅間山山麓の軽井沢や那須の原生林に佇むプライベートヴィラ。クッション性が高く足腰に優しいウッドチップや天然芝のドッグラン。薪ストーブが灯るリビングで愛犬と添い寝。愛犬同伴OKの軽井沢プリンスショッピングプラザ。',
        spots: '軽井沢プリンスショッピングプラザ（ドッグラン・愛犬同伴店舗多数）、ハルニレテラス、雲場池、浅間牧場',
        access: '上信越道「碓氷軽井沢IC」より車約15〜20分。北陸新幹線軽井沢駅。',
        tip: '軽井沢の「ハルニレテラス」は清流沿いのウッドデッキテラス席が全店愛犬同伴可能で、せせらぎを聞きながら愛犬と優雅なカフェタイムを過ごせます。'
      },
      {
        key: 'biwako_kansai_dog_run_resort',
        title: '3. 滋賀・琵琶湖畔＆兵庫・淡路島（レイクサイドドッグランとグランピング）',
        timing: '通年（水遊びが大好きなレトリバーにも大人気）',
        desc: '琵琶湖の白砂ビーチに直結したドッグヴィラや、淡路島の海を望むグランピング。ドッグランからそのまま湖に入ってドッグサップや水遊び。温水フットシャワーやトリミングスペース完備。近江牛BBQディナー。',
        spots: '琵琶湖マイアミビーチ、びわこ箱館山（ドッグラン・ゴンドラ愛犬OK）、淡路島明石海峡大橋展望台',
        access: '名神高速「京都東IC」より湖西道路経由、または神戸淡路鳴門道経由。',
        tip: '「びわこ箱館山」のパノラマゴンドラは愛犬と一緒に乗車でき、山頂に広がる広大な天然芝ドッグランから琵琶湖を見下ろす大絶景が楽しめます。'
      }
    ]
  },
  {
    slug: 'dog-room-dining-special-course-hotel-stay',
    badge: 'DOG GOURMET DINING GUIDE',
    title: '【愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿】無添加ごちそう＆記念日 完全ガイド',
    metaDesc: '愛犬も一緒にお祝いする美食の旅！愛犬用特製フルコース＆お部屋食・レストラン同伴宿完全特化！獣医師・ペット栄養管理士監修の無添加ワンちゃんごはん、バースデーケーキ、飼い主用極上会席・フレンチディナー宿を徹底解説。',
    heroDesc: '旅行中もずっと一緒、食事の時間も離れない！「愛犬同伴お部屋食＆愛犬用フルコース宿」。お部屋食または愛犬同伴専用ダイニング。獣医師監修の厳選鹿肉や温野菜プレート。愛犬の誕生日や記念日を祝う特製ドッグケーキ付きプランへ。',
    categoryKey: 'dog-room-dining-special-course-hotel-stay',
    areaGuides: [
      {
        key: 'dog_gourmet_room_dining_stay',
        title: '1. お部屋食確約旅館（他のワンちゃんが苦手な子も安心の完全個室）',
        timing: '通年（周囲に気兼ねなくゆっくり味わう温泉会席）',
        desc: '朝夕ともにお部屋出しされる温泉旅館。他の犬や宿泊者と接触することがないため、臆病なワンちゃんや高齢犬でもストレスフリー。料理長が腕を振るう旬の会席料理と、愛犬用の茹で鶏ササミや温野菜プレート。',
        spots: '伊豆修善寺温泉、鬼怒川温泉、鳥羽温泉郷、有馬温泉の愛犬同伴老舗旅館',
        access: '各温泉地。',
        tip: 'お部屋食プランなら、食事中も愛犬をケージに入れる必要がなく、座布団の上でくつろぐ愛犬の様子を見守りながら食事を楽しめます。'
      },
      {
        key: 'dog_course_dining_luxury_hotel',
        title: '2. 愛犬同伴専用レストラン（フレンチ・イタリアンの愛犬専用フルコース）',
        timing: '通年（愛犬用カート貸出・リードフック完備）',
        desc: '愛犬と一緒にテーブル席で食事ができる専用ダイニング。ペット栄養管理士が監修した「エゾ鹿肉のロースト」「馬肉のタルタル」「米粉のパン」。飼い主には本格的なフレンチフルコースや鉄板焼きディナー。',
        spots: 'レジーナリゾート（富士・軽井沢・箱根・鴨川・蓼科）、ホテルフォレストヒルズ那須、ルシアン旧軽井沢',
        access: '主要リゾート地。',
        tip: '「レジーナリゾート」各施設では、レストラン内に愛犬用バギーが用意されており、大型犬から小型犬まで落ち着いて一緒にディナーを堪能できます。'
      },
      {
        key: 'dog_birthday_anniversary_resort',
        title: '3. 愛犬のアニバーサリープラン（無添加特製ドッグケーキ＆記念撮影）',
        timing: '通年（愛犬の誕生日・うちの子記念日）',
        desc: '米粉とサツマイモ、豆乳クリームで作られた無添加の愛犬専用アニバーサリーケーキ。ネームプレート付き。プロカメラマンによる記念撮影や、特製フォトフレームのプレゼント特典。愛犬用のおしゃれなアメニティギフト。',
        spots: 'キサラピア・愛犬記念日リゾート、Wan\'s Resort（山中湖・城ヶ崎）、CARO FORESTA',
        access: '富士五湖・伊豆・那須エリア。',
        tip: 'バースデープランを予約すると、スタッフ一同からの温かいバースデーカードや記念写真のプレゼントがあり、一生の思い出に残る家族旅行になります。'
      }
    ]
  },
  {
    slug: 'large-dog-multi-pet-friendly-resort-stay',
    badge: 'LARGE DOG & MULTI PET GUIDE',
    title: '【大型犬・多頭飼い歓迎リゾート】ノーリード・広々客室＆超大型犬OK 完全ガイド',
    metaDesc: 'ゴールデンやラブラドール、多頭飼いも大歓迎！大型犬・超大型犬・頭数制限なし宿完全特化！広々80平米以上の客室、頑丈なフェンス、頭数追加無料プラン、大型犬専用ドッグラン＆足洗い場完備リゾートを徹底解説。',
    heroDesc: '「大型犬だから…」「頭数が多いから…」と諦める必要は一切ありません！「大型犬・超大型犬＆多頭飼い歓迎リゾート」。80平米超のゆとりある客室。頭数制限なし・大型犬追加料金リーズナブル。大型犬も思いっきり走れる広大なフィールドへ。',
    categoryKey: 'large-dog-multi-pet-friendly-resort-stay',
    areaGuides: [
      {
        key: 'large_dog_welcome_resort_stay',
        title: '1. 大型犬・超大型犬専用設備（頑丈なフェンスと大型犬用バスタブ）',
        timing: '通年（レトリバー、シェパード、グレートピレニーズ等も快適）',
        desc: '大型犬がゆったり寝そべることができる広々としたリビング。高さ150cm以上の頑丈な脱走防止フェンス。大型犬用の大型ドライヤー＆シャンプー台。体重30kg以上の超大型犬でも宿泊制限のない完全ドッグウェルカムリゾート。',
        spots: 'エンゼルフォレスト白河高原（福島・羽鳥湖）、ドッグリゾートWOOF（山中湖・屋内大型ドッグプール）',
        access: '東北道「白河IC」または東富士五湖道路「山中湖IC」より車。',
        tip: '「ドッグリゾートWOOF」には日本最大級の25m屋内ドッグプールがあり、大型犬が思いっきりダイブして泳げる聖地として全国から愛犬家が集まります。'
      },
      {
        key: 'multi_dog_no_limit_stay',
        title: '2. 頭数制限なしの一棟貸しコテージ（3頭以上の多頭飼いも気兼ねなし）',
        timing: '通年（オフ会・多頭飼いファミリー旅行に最適）',
        desc: '1棟に何頭でも同伴可能な貸切コテージ。頭数追加料金が無料または定額のプラン。複数のケージや食器、トイレシートの大量常備。完全プライベート空間のため、ワンちゃん同士がじゃれ合って走り回っても安心。',
        spots: '八ヶ岳わんわんパラダイス、ドッグコテージ海の音（千葉九十九里）、コトヴィラ（淡路島）',
        access: '中央道「小淵沢IC」または館山道経由。',
        tip: '「八ヶ岳わんわんパラダイス」の森のコテージは棟間が離れており、多頭飼いで多少賑やかになっても周囲に全く迷惑がかからない最高の環境です。'
      },
      {
        key: 'large_dog_nature_forest_stay',
        title: '3. 白河高原＆八ヶ岳・大自然の広大ドッグフィールド（森林浴トレイル）',
        timing: '通年（雪遊びが大好きな北方系大型犬にも絶大な人気）',
        desc: '東京ドーム数個分の敷地に天然温泉・湖・森の散策路が広がる複合ドッグリゾート。ノーリードでお散歩できる専用フォレストトレイル。冬期の白銀のパウダースノーで雪ダイブ。愛犬と一緒に乗れるカヌー体験。',
        spots: 'エンゼルフォレスト白河高原（湖畔カヌー・天然温泉バイキング）、清里高原（清泉寮・萌木の村）',
        access: '新甲子温泉・白河高原エリア。',
        tip: '冬のエンゼルフォレスト白河高原はパウダースノーが積もり、雪まみれになって大はしゃぎする大型犬の可愛い姿を見られる絶好のシーズンです。'
      }
    ]
  },
  {
    slug: 'dog-oceanfront-beach-glamping-villa-stay',
    badge: 'DOG BEACH & GLAMPING GUIDE',
    title: '【海直結・愛犬とビーチフロントグランピング＆ヴィラ】砂浜ラン＆BBQ 完全ガイド',
    metaDesc: '目の前がすぐ海！愛犬と海遊び＆ビーチフロントステイ完全特化！千葉館山・白浜、淡路島、伊豆下田、沖縄、砂浜直結のプライベートヴィラ＆ドームテントグランピング、夕陽BBQ宿を徹底解説。',
    heroDesc: '朝起きてゲートを開ければ、そこはどこまでも広がるプライベートビーチ！「愛犬とビーチフロントグランピング＆ヴィラ」。波打ち際を全力でダッシュし、海風を感じながらの焚き火とテラスBBQ。波音を聞きながら愛犬と眠るオーシャンステイへ。',
    categoryKey: 'dog-oceanfront-beach-glamping-villa-stay',
    areaGuides: [
      {
        key: 'tateyama_dog_beach_villa_stay',
        title: '1. 千葉・館山＆白浜（平砂浦ビーチ直結！夕陽と富士山を望むドッグヴィラ）',
        timing: '通年（冬でも温暖な南房総・夕暮れのダイヤモンド富士）',
        desc: '南房総・平砂浦海岸や白浜のオーシャンフロントヴィラ。テラスから直接砂浜へ出られる抜群のロケーション。海水浴後の温水足洗いシャワー完備。海に沈む夕陽を眺めながら味わう房総アワビや伊勢海老の炭火BBQ。',
        spots: '平砂浦海岸、房総フラワーライン、野島埼灯台、館山夕日桟橋',
        access: '富津館山道路「富浦IC」より車約20分。',
        tip: '平砂浦海岸は日本の道百選「房総フラワーライン」沿いにあり、愛犬と一緒にどこまでも続く白砂の海岸線をのんびりお散歩できます。'
      },
      {
        key: 'awaji_dog_ocean_glamping_stay',
        title: '2. 兵庫・淡路島（瀬戸内海のサンセット＆ドームテントグランピング）',
        timing: '通年（海に沈む夕陽が絶景の西海岸サンセットライン）',
        desc: '淡路島西海岸の海沿いに並ぶラグジュアリードームテント。専用の天然芝ドッグラン付き。愛犬用アメニティやベッド完備。波の音をBGMにプライベートデッキで味わう淡路牛ステーキBBQ。夜の満天の星空と焚き火ナイト。',
        spots: '淡路島サンセットライン、クラフトサーカス（愛犬OKオーシャンレストラン）、多賀の浜海水浴場',
        access: '神戸淡路鳴門自動車道「北淡IC」または「津名一宮IC」より車。',
        tip: '淡路島西海岸の「CRAFT CIRCUS」には巨大な愛犬専用テラス席とドッグランがあり、海を眺めながら淡路島バーガーやピザを一緒に食べられます。'
      },
      {
        key: 'okinawa_izu_dog_beach_resort',
        title: '3. 静岡・伊豆下田＆沖縄（透き通る青い海と愛犬とのマリンリゾート）',
        timing: '通年（下田の白浜海岸・沖縄の通年リゾート）',
        desc: '本州屈指の透明度を誇る下田の吉佐美大浜や沖縄本島のプライベートビーチ至近リゾート。愛犬用ライフジャケット貸出、ドッグSUP体験。南国の心地よい風が吹き抜けるテラス席でのブレックファスト。',
        spots: '吉佐美大浜海岸（サンドスキー場・竜宮窟）、白浜大浜海岸、沖縄恩納村ビーチ',
        access: '伊豆急下田駅より車約10分、または那覇空港よりレンタカー。',
        tip: '下田の吉佐美大浜は海外のような開放的な雰囲気があり、愛犬同伴OKのビーチカフェが点在する人気のドッグビーチです。'
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
  keywords: ["${config.slug}", "ペットと泊まれる宿", "愛犬同伴", "ドッグリゾート", "プライベートドッグラン", "楽天トラベル"],
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

export default function PetDogResortHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-emerald-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
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

      {/* テーマ別徹底ガイド＆厳選宿 */}
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
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🐾 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめスポット＆お散歩エリア</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-1.5">
                  <span className="font-bold text-orange-950 block text-[11px]">💡 愛犬と快適に過ごすコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ドッグフレンドリー宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの愛犬同伴厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    愛犬歓迎宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで愛犬同伴プランを見る
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
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

for (const cfg of petConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated pet dog resort hub page: /${cfg.slug}`);
}
