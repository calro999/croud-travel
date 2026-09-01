const fs = require('fs');
const path = require('path');

const themeparkConfigs = [
  {
    slug: 'tokyo-disney-resort-partner-official-hotel-stay',
    badge: 'DISNEY RESORT HOTEL GUIDE',
    title: '【東京ディズニーリゾート®提携ホテル】オフィシャル＆パートナーホテル・無料シャトル宿 完全ガイド',
    metaDesc: '夢の国を満喫するホテル選び完全特化！東京ディズニーランド®・東京ディズニーシー®直結のモノレール沿線オフィシャルホテル、パーク直通無料シャトルバス運行パートナーホテル、洗い場付きお風呂＆大浴場完備宿を徹底解説。',
    heroDesc: '開園から閉園まで時間を気にせず夢の世界に浸る「東京ディズニーリゾート®提携ホテル」。パーク内・舞浜エリアのオフィシャルホテルや新浦安のパートナーホテル。無料シャトルバス、ホテル内ショップ、疲れた体を癒やす展望大浴場へ。',
    categoryKey: 'tokyo-disney-resort-partner-official-hotel-stay',
    areaGuides: [
      {
        key: 'maihama_official_bay_hotel',
        title: '1. 舞浜ベイエリア・オフィシャルホテル（ディズニーリゾートラインでパーク直結）',
        timing: '通年（ハロウィーン・クリスマス・春休み・イベント期間）',
        desc: '東京ディズニーリゾート®内に位置する6つのオフィシャルホテル。ディズニーリゾートラインの「ベイサイド・ステーション」至近。ホテル内でパークチケット購入権利やパークの最新グッズが買える「ディズニー・ファンタジー」。オーシャンビュー客室。',
        spots: '東京ディズニーランド®、東京ディズニーシー®、イクスピアリ、ディズニーリゾートライン（ベイサイド・ステーション）',
        access: 'JR京葉線・武蔵野線「舞浜駅」より無料シャトルバスまたはディズニーリゾートライン利用。',
        tip: 'オフィシャルホテル宿泊者は、JR舞浜駅前の「東京ディズニーリゾート・ウェルカムセンター」で荷物を預けるとホテルまで無料で届けてくれるバゲッジデリバリーサービスが利用できます。'
      },
      {
        key: 'shinurayasu_partner_family_stay',
        title: '2. 新浦安・パートナーホテル（無料シャトルバス約15分＆大展望風呂付き）',
        timing: '通年（ファミリー・3世代・グループ旅行に高コスパ）',
        desc: '新浦安エリアに位置するパートナーホテル。パーク直通の「パートナーホテル・シャトル（無料）」が常時運行。全室洗い場付きお風呂や最上階の天然温泉展望大浴場。2段ベッド付きファミリールームやキッズスペース完備。',
        spots: '新浦安駅直結商業施設、浦安市総合公園、大江戸温泉物語 浦安万華郷跡周辺',
        access: 'JR京葉線「新浦安駅」周辺。パークまで無料シャトルバスで約15分。',
        tip: 'パートナーホテル・シャトルは予約不要・無料で運行しており、閉園後の混雑した電車に乗ることなく座ってホテルまで戻れるのが最大のメリットです。'
      },
      {
        key: 'goodneighbor_tokyo_bay_stay',
        title: '3. お台場＆幕張・グッドネイバーホテル（観光やショッピングも楽しむ複合ステイ）',
        timing: '通年（東京観光・イベント参加とセットの旅）',
        desc: 'お台場・有明・新宿・幕張などに位置するグッドネイバーホテル。パークへの無料送迎バス「グッドネイバーホテル・シャトル（予約制）」運行。夜景の美しい高層階客室、豪華な朝食ビュッフェ、ショッピングモール直結の利便性。',
        spots: 'お台場海浜公園、アクアシティお台場、東京ビッグサイト、幕張メッセ',
        access: '都内各主要駅・空港よりリムジンバス運行。',
        tip: 'グッドネイバーホテル・シャトルは完全事前予約制のため、宿泊予約が完了したらすぐにホテルの公式サイト等からバスの座席を確保しましょう。'
      }
    ]
  },
  {
    slug: 'usj-partner-official-hotel-osaka-stay',
    badge: 'USJ OFFICIAL HOTEL GUIDE',
    title: '【ユニバーサル・スタジオ・ジャパン（USJ）公認ホテル】オフィシャルホテル＆駅直結宿 完全ガイド',
    metaDesc: 'パークまで徒歩数分の感動体験！ユニバーサル・スタジオ・ジャパン（USJ）オフィシャルホテル完全特化！ユニバーサルシティ駅直結、ミニオンやセサミストリートのキャラクタールーム、パークチケット確約、展望天然温泉スパ宿を徹底解説。',
    heroDesc: 'ゲートをくぐればすぐそこは熱狂のエンターテインメント！ユニバーサル・スタジオ・ジャパン（USJ）のオフィシャルホテル。パークまで徒歩1〜3分の抜群のロケーション。人気キャラクターのコンセプトルームや夜景スパで余韻に浸る旅。',
    categoryKey: 'usj-partner-official-hotel-osaka-stay',
    areaGuides: [
      {
        key: 'universal_city_official_hotel',
        title: '1. ユニバーサルシティウォーク〜メインゲート（パークまで徒歩1〜3分の最高立地）',
        timing: '通年（ハロウィーン・クリスマス・春休み・新エリアオープン期）',
        desc: 'JRユニバーサルシティ駅とUSJメインゲートを結ぶユニバーサル・シティウォーク大阪沿いのホテル群。パークまで徒歩1〜3分。ミニオンやスヌーピーなどの世界観を再現したキャラクタールーム。ホテル内でアトラクションの待ち時間をリアルタイム確認。',
        spots: 'ユニバーサル・スタジオ・ジャパン（スーパー・ニンテンドー・ワールド™、ウィザーディング・ワールド・オブ・ハリー・ポッター™）、ユニバーサル・シティウォーク大阪',
        access: 'JRゆめ咲線「ユニバーサルシティ駅」直結・徒歩すぐ。大阪駅（梅田）より直通電車で約11分。',
        tip: 'オフィシャルホテル内のロビーモニターでアトラクションの待ち時間情報を確認できるため、混雑状況に合わせたスムーズな入園計画が立てられます。'
      },
      {
        key: 'usj_onsen_spa_luxury_stay',
        title: '2. 最上階展望天然温泉＆ルーフトップスパ（パーク夜景と足の疲れを癒やす名湯）',
        timing: '通年（1日歩き回った後の極上リラクゼーション）',
        desc: '地下約1,000mから湧き出る天然温泉を地上高層階に設えたラグジュアリーホテル。湯船から見下ろすパークの夜景と大阪ベイエリアのパノラマ。サウナやジェットバスで歩き疲れた足をリフレッシュ。充実の朝食ビュッフェ。',
        spots: 'ホテル京阪 ユニバーサル・タワー（天然展望温泉）、リーベルホテル（スパ＆テラス）',
        access: 'ユニバーサルシティ駅・桜島駅周辺。',
        tip: '天然温泉スパ付きホテルを選ぶと、パークで遊び疲れた身体を広いお風呂とサウナで芯から回復させ、翌朝も元気に観光を楽しめます。'
      },
      {
        key: 'osaka_bay_usj_alliance_stay',
        title: '3. 大阪ベイエリア〜天保山・海遊館（シャトル船で結ばれる水族館＆ベイリゾート）',
        timing: '通年（海遊館とUSJを両方楽しむ大阪観光）',
        desc: '対岸の天保山（海遊館・天保山大観覧車）とUSJをわずか10分で結ぶシャトル船「キャプテンライン」。大阪港の潮風を感じるオーシャンビューホテル。広々としたファミリールームと大阪グルメ（たこ焼き・串カツ）が並ぶ朝食。',
        spots: '海遊館（ジンベエザメ・太平洋水槽）、天保山大観覧車、キャプテンライン（海上シャトル船）、咲洲コスモタワー展望台',
        access: '大阪メトロ中央線「大阪港駅」、キャプテンライン乗り場周辺。',
        tip: '「キャプテンライン」を利用すると、USJと海遊館の間をユニークなクルージング感覚で移動でき、移動時間の大幅な短縮にもなります。'
      }
    ]
  },
  {
    slug: 'fuji-q-highland-fujigoko-activity-stay',
    badge: 'FUJI-Q & ACTIVITY GUIDE',
    title: '【富士急ハイランド＆富士五湖アクティビティ宿】絶叫アトラクション＆グランピング 完全ガイド',
    metaDesc: '世界最高峰の絶叫マシンと富士山麓大自然アクティビティ完全特化！富士急ハイランド優先入園付きオフィシャルホテル、富士五湖（河口湖・山中湖）カヤック・SUP・バギー体験、富士山ビューグランピング＆露天風呂宿を徹底解説。',
    heroDesc: 'FUJIYAMA・ド・ドドンパ・ええじゃないかで絶叫し、富士山麓の湖で風を切る！「富士急ハイランド＆富士五湖アクティビティ宿」。開園前優先入園特典付きオフィシャルホテル。湖畔でのカヌー・SUPや森のグランピングで大自然を満喫する休日へ。',
    categoryKey: 'fuji-q-highland-fujigoko-activity-stay',
    areaGuides: [
      {
        key: 'fujiq_highland_official_hotel',
        title: '1. 富士急ハイランド〜ハイランドリゾート（開園前優先入園＆ふじやま温泉無料）',
        timing: '通年（夏休みの絶叫体験・秋の紅葉富士・冬のクリアな富士山）',
        desc: '富士急ハイランドに隣接する「ハイランドリゾート ホテル＆スパ」。一般開園より15分早く入園できる「優先入園特典」。純木造の大浴場「ふじやま温泉」の入館無料特典。トーマスルームやリサとガスパールタウン直結の楽しさ。',
        spots: '富士急ハイランド（FUJIYAMA、ええじゃないか、ZOKKON、戦慄迷宮）、ふじやま温泉、リサとガスパール タウン',
        access: '富士急行線「富士山駅」または「富士急ハイランド駅」より無料送迎バス。中央高速バス直行便多数。',
        tip: 'オフィシャルホテル宿泊者限定の「開園前優先入園」を利用すると、人気絶叫アトラクションに待ち時間ほぼゼロで一番乗りできます。'
      },
      {
        key: 'fujigoko_glamping_activity_stay',
        title: '2. 富士五湖グランピング＆アウトドアサウナ（星空と富士山を望むドームテント）',
        timing: '通年（薪ストーブやBBQを楽しむ秋冬グランピングも大人気）',
        desc: '河口湖や山中湖の森の中に佇むラグジュアリーグランピング施設。全室冷暖房完備の大型ドームテント。甲州ワインビーフや富士桜ポークを味わう本格BBQ。専用バレルサウナでロウリュを楽しんだ後の富士山外気浴。',
        spots: '河口湖畔グランピングヴィラ、山中湖パノラマ台、忍野八海、花の都公園',
        access: '中央道「河口湖IC」または東富士五湖道路「山中湖IC」より車約10〜15分。',
        tip: 'プライベートサウナ付きドームテントでは、サウナ後に水風呂へ入り、インフィニティチェアで富士山の夕暮れや星空を眺める究極のととのいが体験できます。'
      },
      {
        key: 'fuji_nature_adventure_stay',
        title: '3. 富士五湖ウォーターアクティビティ＆樹海探検（カヤック・SUP・バギーツアー）',
        timing: 'グリーンシーズン：4月〜11月（早朝カヤックは湖面が鏡のように穏やか）',
        desc: '本栖湖や西湖での早朝カヤック＆SUP体験。富士山を湖上から見上げる感動。青木ヶ原樹海の洞窟（富岳風穴・鳴沢氷穴）探検ネイチャーツアー。フォレストアドベンチャー・フジでのジップライン。アクティビティ後の温泉。',
        spots: '本栖湖（逆さ富士千円札アングル）、西湖根場浜、富岳風穴・鳴沢氷穴、フォレストアドベンチャー・フジ',
        access: '富士五湖周辺。',
        tip: '本栖湖の早朝カヤックツアーは風がなく波が立たないため、湖面に富士山がくっきりと映る逆さ富士の真ん中を漕ぎ進む奇跡の体験ができます。'
      }
    ]
  },
  {
    slug: 'huistenbosch-official-hotel-nagasaki-stay',
    badge: 'HUIS TEN BOSCH HOTEL GUIDE',
    title: '【ハウステンボス直営＆オフィシャルホテル】ヨーロッパの街並み＆イルミネーション宿 完全ガイド',
    metaDesc: '日本一の広さを誇るテーマパーク完全特化！長崎ハウステンボス直営・オフィシャルホテル！パーク内運河に佇む「ホテルヨーロッパ」、場内唯一の天然温泉宿、1300万球の光の王国イルミネーション確約ビューホテルを徹底解説。',
    heroDesc: 'ヨーロッパの街並みと運河が広がる異国情緒のワンダーランド「ハウステンボス」。専用クルーザーでチェックインする最高級ホテルヨーロッパや、パーク内直営ホテル。日本一の1300万球イルミネーションを客室から見下ろす贅沢な休日へ。',
    categoryKey: 'huistenbosch-official-hotel-nagasaki-stay',
    areaGuides: [
      {
        key: 'huistenbosch_direct_luxury_hotel',
        title: '1. ハウステンボス場内直営ホテル（専用クルーザーで運河を渡るチェックイン）',
        timing: '通年（春のチューリップ祭・秋のハロウィーン・冬の光の街のクリスマス）',
        desc: 'ハウステンボス場内に位置する直営ホテル「ホテルヨーロッパ」「ホテルアムステルダム」。ウェルカムゲートから宿泊者専用カナルクルーザーで運河を進みホテルへチェックイン。毎夜ロビーで開催されるクラシック生演奏コンサート。',
        spots: 'ハウステンボス（タワーシティ、光のファンタジアシティ、フラワーロード、アンブレラストリート）',
        access: 'JR大村線「ハウステンボス駅」下車徒歩約5分。長崎空港より高速船で約50分。',
        tip: '「ホテルヨーロッパ」に宿泊すると、開園前の静寂に包まれた朝のヨーロッパの街並みを誰もいない状態で優雅に散策できる特別な特権があります。'
      },
      {
        key: 'huistenbosch_official_onsen_stay',
        title: '2. ハウステンボス温泉＆オフィシャルホテル群（黄金の湯と充実のバイキング）',
        timing: '通年（ファミリー・カップルに快適なスパリゾート）',
        desc: 'JRハウステンボス駅前にそびえる「ホテルオークラJRハウステンボス」や「ホテル日航ハウステンボス」。100%源泉かけ流しの天然温泉「琴乃湯（黄金色のナトリウム塩化物泉）」。佐世保名物レモンステーキや長崎名物が並ぶ朝食。',
        spots: 'ホテルオークラJRハウステンボス（天然温泉・ベーカリー）、ホテル日航ハウステンボス（専用再入場ゲート）',
        access: 'JRハウステンボス駅前。',
        tip: 'ホテルオークラJRハウステンボスはアムステルダム中央駅を模した美しい外観で、館内の天然温泉露天風呂からはハウステンボスのカナルが望めます。'
      },
      {
        key: 'huistenbosch_illumination_view_stay',
        title: '3. 日本一1300万球「光の王国」イルミネーション（客室の窓から望む光の海）',
        timing: '通年（世界最大級のイルミネーションフェスティバル）',
        desc: '全国イルミネーションランキングで10年連続第1位に輝く「光の王国」。光と音楽の噴水ショー「ウォーターマジック」、シンボルタワー「ドムトールン」の展望台。パークビュー客室の窓一面に広がる幻想的な光のパノラマ。',
        spots: 'アートガーデン（光の滝・光のオーケストラ）、ドムトールン展望台、白銀の世界、ファンタジアストリート',
        access: 'ハウステンボス場内各所。',
        tip: 'ドムトールン展望室（地上80m）へは夕暮れ時に登ると、夕陽に染まる大村湾と一斉に点灯する1300万球のイルミネーションを360度見渡せます。'
      }
    ]
  },
  {
    slug: 'japan-alps-mountain-resort-trekking-stay',
    badge: 'JAPAN ALPS TREKKING GUIDE',
    title: '【日本アルプス・本格トレッキング＆山岳リゾート宿】上高地・白馬・立山黒部・涸沢 完全ガイド',
    metaDesc: '標高3000mの稜線と白銀の氷河地形完全特化！神降る地「上高地帝国ホテル・河童橋」、白馬八方尾根・栂池自然園トレッキング、立山黒部アルペンルート・室堂平「ホテル立山」、穂高連峰涸沢カール拠点宿を徹底解説。',
    heroDesc: '梓川のエメラルドグリーンと穂高連峰の険しい岩峰「日本アルプス」。日本初の本格山岳リゾート上高地、高山植物が咲き誇る白馬八方尾根、標高2,450m日本最高所のホテル立山。雲上のパノラマと満天の天の川を仰ぐ山岳ステイへ。',
    categoryKey: 'japan-alps-mountain-resort-trekking-stay',
    areaGuides: [
      {
        key: 'kamikochi_highland_luxury_stay',
        title: '1. 上高地〜河童橋・明神池（国の特別名勝・特別天然記念物の清らかな山岳美）',
        timing: '開山期間：4月中旬〜11月15日（新緑の6月・紅葉の10月）',
        desc: '穂高連峰と焼岳を仰ぐ日本屈指の山岳景勝地「上高地」。梓川にかかる木造の「河童橋」。早朝の霧が立ち込める大正池の立ち枯れの木々。日本初の本格山岳リゾート「上高地帝国ホテル」の赤い三角屋根と薪の暖炉。',
        spots: '河童橋、大正池、明神池（穂高神社奥宮・御船神事）、岳沢湿原、上高地ビジターセンター',
        access: '松本ICより車で沢渡駐車場へ、シャトルバスで約30分（通年マイカー規制）。',
        tip: '上高地に宿泊すると、日帰り観光客が帰った後の静寂の夕暮れや、朝もやが水面に立ち込める幻想的な早朝の梓川沿い散策を独占できます。'
      },
      {
        key: 'hakuba_happo_trekking_resort',
        title: '2. 白馬八方尾根〜八方池・栂池自然園（高山植物の宝庫と白馬三山の雄姿）',
        timing: 'グリーンシーズン：6月中旬〜10月下旬（高山植物百花繚乱の7月〜8月）',
        desc: '八方アルペンライン（ゴンドラとリフト）で標高1,830mへ。木道を歩いて目指す標高2,060mの「八方池」。水面に映る白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）。白馬八方温泉の日本屈指の強アルカリ美肌湯。',
        spots: '八方尾根自然研究路（八方池・第1〜第3ケルン）、白馬ジャンプ競技場、栂池自然園（栂池パノラマウェイ・ワタスゲ湿原）、白馬マウンテンハーバー',
        access: 'JR大糸線「白馬駅」下車。長野駅（北陸新幹線）より特急バスで約75分。',
        tip: '白馬岩岳マウンテンリゾートの「HAKUBA MOUNTAIN HARBOR」では、テラスから北アルプス白馬三山へダイナミックにせり出した絶景デッキで美味しいベーカリーが楽しめます。'
      },
      {
        key: 'tateyama_murodo_sky_resort',
        title: '3. 立山黒部アルペンルート〜室堂平（標高2450m・星に一番近いリゾート）',
        timing: '営業期間：4月中旬〜11月30日（春の「雪の大谷」・秋の立山紅葉）',
        desc: '標高2,450mの室堂平に建つ日本最高所のホテル「ホテル立山」。高山植物が生い茂る「みくりが池」と立山三山。日本最高所の天然温泉「みくりが池温泉（白濁硫黄泉）」。天上の星空観測会と朝のご来光ツアー。',
        spots: '室堂平（みくりが池・みくりが池温泉・立山玉殿の湧水）、雪の大谷（高さ20mの雪壁）、黒部ダム（観光放水）、大観峰展望台',
        access: '富山側（立山駅）または長野側（扇沢駅）よりアルペンルート各種乗り物を乗り継ぎ室堂へ。',
        tip: 'ホテル立山に宿泊すると、夜の天体観測会で肉眼で見える天の川や流れ星、早朝には富山湾雲海からのご来光を専任ネイチャーガイドの案内で体験できます。'
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

export default function ThemeParkActivityHubPage() {
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

              {/* パーク特典・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要アトラクション＆スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆シャトル運行</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 パーク＆アクティビティ満喫のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選ホテル</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    提携プラン
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

for (const cfg of themeparkConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated theme park activity hub page: /${cfg.slug}`);
}
