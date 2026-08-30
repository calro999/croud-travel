const fs = require('fs');
const path = require('path');

const targetAudienceConfigs = [
  {
    slug: 'family-baby-welcome-onsen',
    badge: 'BABY & KIDS WELCOME GUIDE',
    title: '【赤ちゃん・子連れ歓迎温泉宿】ウェルカムベビー認定・部屋食＆貸切風呂 完全ガイド',
    metaDesc: 'ミキハウス子育て総研「ウェルカムベビーのお宿」認定ホテル＆旅館完全特化！調乳ポット・おむつ用ゴミ箱完備、赤ちゃん温泉デビュー、周りを気にせず安心の部屋食・個室食、家族専用貸切風呂付き温泉宿を徹底解説。',
    heroDesc: '初めての家族旅行や赤ちゃんの温泉デビューを全力応援！ミキハウス認定の充実ベビーアメニティ、転んでも痛くない和室・クッションフロア、周囲に気兼ねなく楽しめるお部屋食や貸切風呂完備の極上宿。',
    categoryKey: 'family-baby-welcome-onsen',
    areaGuides: [
      {
        key: 'baby_certified_resort',
        title: '1. ウェルカムベビー認定リゾート（手ぶらで泊まれる至れり尽くせりの安心設計）',
        timing: '通年（首すわり後の生後5〜6ヶ月〜ハイハイ期・幼児期まで）',
        desc: 'ミキハウス子育て総研の厳しい100項目基準をクリアした「ウェルカムベビーのお宿」。おむつ使い放題プランや、調乳ポット、ベビーベッド、補助便座、おしりふきが客室に完備。荷物を大幅に減らして快適ステイ。',
        spots: 'ホテル内キッズルーム、授乳室、ベビーカー貸出、離乳食ビュッフェ・温めサービス',
        access: '新幹線主要駅からの無料送迎バスや、高速ICからアクセスの良いリゾート地。',
        tip: 'フロントで年齢に応じた紙おむつのサイズや離乳食の月齢（初期・中期・完了期）を選べる宿が特に人気です。'
      },
      {
        key: 'baby_private_bath_heya',
        title: '2. 貸切風呂＆お部屋食（赤ちゃんの泣き声を気にせず家族水入らずの温泉時間）',
        timing: '通年（パパママのご褒美温泉リフレッシュ）',
        desc: '他の宿泊客に気兼ねなく温泉を楽しめる「客室露天風呂」や「無料貸切風呂」。ベビーバスやベビーソープ、温度計完備で安心の温泉デビュー。夕朝食はお部屋食または個室ダイニングで、赤ちゃんのペースに合わせて食事。',
        spots: '客室専用露天風呂、畳敷き浴場、個室食事処、ベビー用バンボ・ハイチェア',
        access: '箱根、熱海、那須、伊豆、有馬など首都圏・関西圏からアクセスの良い温泉街。',
        tip: '浴槽の床が滑りにくい「畳敷きの温泉」や、低刺激の単純温泉・弱アルカリ性温泉を選ぶと赤ちゃん肌にも安心です。'
      },
      {
        key: 'kids_theme_play_hotel',
        title: '3. 巨大キッズパーク＆ファミリービュッフェ（雨の日も退屈しない室内アクティビティ）',
        timing: '通年（雨の日・冬の寒い日でも館内で一日中遊べる全天候型）',
        desc: 'ボールプールやボルダリング、大型アスレチックが備わるホテル内キッズスペース。温水プールや縁日イベント、夜のビンゴ大会。シェフが目の前で作るキッズバイキングやチョコレートファウンテン。',
        spots: 'ホテル内室内温水プール、アミューズメントコーナー、体験クラフト工房、星空シアター',
        access: '大型高原リゾートやテーマパーク直結ホテル。',
        tip: '子供が遊んでいる様子をラウンジから見守りながら、パパママがフリードリンクの珈琲やワインを楽しめる宿が増えています。'
      }
    ]
  },
  {
    slug: 'three-generation-family-celebration-stay',
    badge: '3-GENERATION & CELEBRATION GUIDE',
    title: '【三世代旅行＆還暦・長寿祝い温泉宿】バリアフリー・個室宴会＆二間続き客室 完全ガイド',
    metaDesc: '祖父母・両親・孫の三世代旅行＆還暦・古希・喜寿・米寿のお祝い温泉宿完全特化！車椅子対応バリアフリー客室、大人数で泊まれる二間続き・コネクティングルーム、祝い膳＆赤いちゃんちゃんこ貸出、個室宴会場付き名門旅館を徹底解説。',
    heroDesc: 'おじいちゃん・おばあちゃんからお孫さんまで笑顔があふれる三世代旅行！車椅子でも安心の段差なしフラット設計、ゆったり寛げる二間続きの広々和洋室、お祝いのちゃんちゃんこや記念写真付きプランで一生の思い出を。',
    categoryKey: 'three-generation-family-celebration-stay',
    areaGuides: [
      {
        key: 'three_gen_barrier_free',
        title: '1. バリアフリー・ユニバーサルデザイン客室（車椅子や足腰に優しい安心設計）',
        timing: '通年（シニア世代も安心して移動できる館内動線）',
        desc: '館内の段差を極力排除したスロープ設計やエレベーター完備。客室内も段差のないフラットフロア、手すり付きトイレ、シャワーキャリーでそのまま入れる温泉露天風呂。車椅子の無料貸出やベッド完備の和洋室。',
        spots: '段差なしフラット和洋室、手すり付き大浴場・貸切風呂、車椅子対応トイレ、エレベーター至近客室',
        access: '最寄り新幹線駅から車で15分以内の平坦な温泉街や大型ホテル。',
        tip: '予約時に「足腰が不安なためエレベーターに近い客室希望」や「ベッドの高さ」を伝えておくと配慮してもらえます。'
      },
      {
        key: 'celebration_longevity_kanreki',
        title: '2. 還暦・長寿のお祝いプラン（赤いちゃんちゃんこ・祝い膳＆記念写真サービス）',
        timing: '通年（還暦60歳・古希70歳・喜寿77歳・傘寿80歳・米寿88歳・白寿99歳のお祝い）',
        desc: '人生の節目を祝う記念日ステイ。各年齢に応じた色（赤・紫・黄・白）の「ちゃんちゃんこ・頭巾」無料貸出。鯛の姿焼きや赤飯がついた豪華「祝い会席」、専属スタッフによる記念写真撮影とフォトフレーム進呈。',
        spots: '完全個室宴会場、お祝い演出（ケーキ・花束・ワイン手配）、記念写真撮影サービス',
        access: '名門老舗旅館や高級温泉リゾート。',
        tip: '家族水入らずで盛り上がれる「完全個室の食事処・宴会場」を確約できるプランを選ぶのが成功の秘訣です。'
      },
      {
        key: 'connecting_spacious_suite',
        title: '3. 二間続き・コネクティング客室（プライベートを保ちながら団らんできる広々空間）',
        timing: '通年（祖父母・両親・子供それぞれの就寝リズムに配慮）',
        desc: '80平米〜100平米を超える広々とした二間続き客室や、隣り合う客室が内ドアで繋がるコネクティングルーム。昼間はみんなでリビングに集まり、夜は早寝の祖父母と夜更かしの子供で部屋を分けられる快適設計。',
        spots: '二間続き和洋室、コネクティングルーム、広々リビング付き特別室、プライベートテラス',
        access: '広大な敷地を持つ温泉リゾートや大型名門旅館。',
        tip: '客室専用の露天風呂が付いている特別室なら、大浴場まで歩かずにいつでも好きな時に温泉を満喫できます。'
      }
    ]
  },
  {
    slug: 'girls-trip-spa-afternoontea-stay',
    badge: 'LUXURY GIRLS RETREAT GUIDE',
    title: '【大人の女子旅・ご褒美温泉】極上スパエステ・アフタヌーンティー＆美肌宿 完全ガイド',
    metaDesc: '女性同士のご褒美旅行完全特化！高級オーガニックスパエステ、ウェルカムアフタヌーンティー、選べる色浴衣、Refaやダイソンなど高級美容家電完備、絶景インフィニティラウンジと美肌会席宿を徹底解説。',
    heroDesc: '日常の忙しさを忘れて自分を解き放つ大人の女子旅！ウェルカムスイーツとアフタヌーンティーで迎えられ、極上のアロマスパで至福のデトックス。Refaドライヤーや高級アメニティが揃う洗練された美の隠れ家へ。',
    categoryKey: 'girls-trip-spa-afternoontea-stay',
    areaGuides: [
      {
        key: 'girls_spa_aesthetic_resort',
        title: '1. 本格オーガニックスパ＆極上トリートメント（全身を解きほぐすアロマテラピー）',
        timing: '通年（週末のデトックス＆リラクゼーション）',
        desc: '厳選されたオーガニック精油や国産ハーブを使用したサロン品質のスパトリートメント。二人同時に施術を受けられるペアルームや、美肌温泉とサウナで身体を温めた後のディープクレンジングフェイシャル＆ボディ。',
        spots: 'ホテル直営スパサロン、アロマミストサウナ、デトックスハーブティーラウンジ、岩盤浴',
        access: '箱根、軽井沢、伊豆、熱海、京都など景観の美しいリゾート地。',
        tip: '施術前に入浴して血行を促進しておくと、アロマオイルの浸透率とリラクゼーション効果が劇的に高まります。'
      },
      {
        key: 'afternoon_tea_lounge_stay',
        title: '2. アフタヌーンティー＆宿泊者専用ラウンジ（優雅なティースタンドとワインフリーフロー）',
        timing: '通年（チェックイン直後の贅沢なティータイム）',
        desc: 'パティシエ特製の三段ティースタンドで提供されるウェルカムアフタヌーンティー。宿泊者専用ラウンジでのスパークリングワインやクラフト生ビール、ハーブティー、フィンガーフードの無料フリーフロー。',
        spots: '展望ティーラウンジ、暖炉テラス、ライブラリーカフェ、ナイトバータイム',
        access: '洗練されたデザインホテルやラグジュアリー旅館。',
        tip: 'チェックイン開始時間（14時〜15時）に合わせて早めに到着し、優雅なアフタヌーンティーを堪能するのがおすすめです。'
      },
      {
        key: 'beauty_amenity_yukata_stay',
        title: '3. 高級美容家電＆選べる色浴衣（ReFa・ダイソン完備と映える女子旅フォト）',
        timing: '通年（SNS映えするお洒落な空間とヘアケア体験）',
        desc: 'ReFa（リファ）のシャワーヘッドやドライヤー・ヘアアイロン、Dysonの最新機器が客室にフル完備。数十種類から選べる色浴衣や帯、ロクシタンやTHREEのスキンケアアメニティ。夜はお部屋でゆったりおしゃべり。',
        spots: '選べる色浴衣コーナー、パウダールーム、インスタ映えテラス、オーガニックアメニティバー',
        access: '温泉街中心部のお洒落なデザイナーズ旅館。',
        tip: '色浴衣を着て温泉街のカフェ巡りや足湯散策に出かけると、素敵な旅の写真がたくさん残せます。'
      }
    ]
  },
  {
    slug: 'solo-travel-retreat-private-onsen-stay',
    badge: 'SOLO TRAVEL RETREAT GUIDE',
    title: '【大人のひとり温泉旅】お部屋食・客室露天風呂＆レイトアウト完全おこもり宿 完全ガイド',
    metaDesc: '贅沢なひとり旅完全特化！誰にも邪魔されないお部屋食確約、24時間好きな時に浸かれる客室専用露天風呂、シングル利用歓迎の名門宿、11時以降レイトチェックアウト、読書ラウンジ付き極上おこもり宿を徹底解説。',
    heroDesc: '誰にも気兼ねせず、自分のリズムだけで過ごす至福のひとり温泉旅。夕朝食ともにお部屋でいただく贅沢な美食、湯気立ち上る客室専用露天風呂、静かな読書ラウンジ。心と身体を深く整える究極のリトリートへ。',
    categoryKey: 'solo-travel-retreat-private-onsen-stay',
    areaGuides: [
      {
        key: 'solo_private_bath_room',
        title: '1. 客室専用露天風呂＆お部屋食（誰にも会わずにチェックインからアウトまで完結）',
        timing: '通年（静かに心をリセットしたい週末や平日休み）',
        desc: '客室のテラスに備わる専用の源泉かけ流し露天風呂。好きな時に何度でも入浴し、湯上がりはバスローブのままベッドやソファでうたた寝。夕食・朝食もお部屋に運ばれるため、他の宿泊客と顔を合わせることなく完全プライベート。',
        spots: '客室専用源泉かけ流し露天風呂、月見テラス、お部屋食ダイニング、ミニバーフリー',
        access: '湯河原、伊豆高原、箱根、草津、有馬などの静かな山あいや別荘地。',
        tip: '一人旅プランを用意している宿は、配膳の回数を最小限にしてくれるなど一人客へのプライバシー配慮が行き届いています。'
      },
      {
        key: 'solo_library_work_retreat',
        title: '2. ブックラウンジ＆薪サウナ（本と珈琲、極上のととのいを味わう静寂ステイ）',
        timing: '通年（デジタルデトックス・読書三昧・自己対話）',
        desc: '数百冊から数千冊の選書が並ぶブックラウンジ。挽きたて珈琲を片手に読書に没頭し、森の中に佇むセルフロウリュ可能なプライベート薪サウナで深いととのい。静寂の中で感性を研ぎ澄ますリトリート。',
        spots: 'ブックライブラリーラウンジ、セルフロウリュサウナ、森林外気浴デッキ、レコードリスニングルーム',
        access: '奥日光、湯河原惣湯、長野・信州、ニセコなどの自然豊かなエリア。',
        tip: 'スマートフォンを部屋の金庫に預けて過ごす「デジタルデトックスステイ」を実践すると、驚くほど深い睡眠が得られます。'
      },
      {
        key: 'solo_late_checkout_luxury',
        title: '3. 11時・12時レイトチェックアウト（朝風呂のあとも二度寝できる至福の朝時間）',
        timing: '通年（朝の時間を贅沢にゆっくり使いたい休日）',
        desc: '通常10時のチェックアウトを11時や12時まで延長できるレイトアウト特典。早朝の澄んだ空気の中で朝風呂に入り、朝食をいただいた後もベッドで二度寝したり、テラスで珈琲を飲んだりできる最高の朝の贅沢。',
        spots: 'レイトチェックアウト（11:00 / 12:00）、朝食ルームサービス、朝の森林浴散策路',
        access: '駅チカまたは送迎バスが充実した名門リゾート。',
        tip: '12時アウトの宿なら、午前中に大浴場が清掃に入る前の空いている時間帯を狙って独占入浴が楽しめます。'
      }
    ]
  },
  {
    slug: 'anniversary-propose-luxury-stay',
    badge: 'ANNIVERSARY & PROPOSE GUIDE',
    title: '【記念日・プロポーズ極上宿】夜景スイート・サプライズ演出＆フレンチフルコース 完全ガイド',
    metaDesc: '大切な記念日・誕生日・プロポーズ完全特化！最上階パノラマ夜景スイートルーム、シャンパン＆ホールケーキ、100本のバラ花束サプライズ手配、ミシュラン星付きシェフ監修フレンチと一生に一度の感動宿を徹底解説。',
    heroDesc: '二人の特別な日を最高の感動で彩るアニバーサリーステイ！息をのむ大パノラマ夜景を望むラグジュアリースイート、ベッドルームへの花束やバルーンデコレーションサプライズ、記憶に残る極上ディナーへ。',
    categoryKey: 'anniversary-propose-luxury-stay',
    areaGuides: [
      {
        key: 'anniversary_luxury_suite_view',
        title: '1. 最上階パノラマ夜景スイート（宝石のような夜景と客室展望ジャグジー）',
        timing: '通年（煌めく都市夜景・満天の星空・海に映る月光）',
        desc: '窓一面に広がる大パノラマ夜景。最上階のコーナースイートや、ビューバス・客室展望露天風呂から夜景を眺めながらシャンパンで乾杯。洗練されたインテリアとキングサイズベッドが約束する至高の滞在。',
        spots: 'パノラマ夜景スイートルーム、ビューバス・展望ジャグジー、クラブラウンジアクセス、インルームダイニング',
        access: '東京ベイエリア、横浜みなとみらい、神戸ハーバーランド、大阪・梅田、箱根・伊豆高台。',
        tip: 'クラブラウンジ付きのクラブフロア客室を選ぶと、チェックインからイブニングカクテルまで特別待遇でエスコートできます。'
      },
      {
        key: 'propose_surprise_flower_cake',
        title: '2. プロポーズ＆誕生日サプライズ演出（専任コンシェルジュによる完璧なサポート）',
        timing: '通年（誕生日・結婚記念日・プロポーズの決行日）',
        desc: 'ディナーの間に客室のベッドを100本の赤バラやバルーンで華やかにデコレーション。メッセージプレート付き特製ホールケーキや高級シャンパンのインルームサーブ。チャペルを貸し切ったプロポーズプラン。',
        spots: 'ホテルチャペル貸切、ベッドデコレーション（フラワーアート）、シャンパン・ケーキ手配、プロポーズ専任コンシェルジュ',
        access: '一流ラグジュアリーホテル・高級温泉旅館。',
        tip: 'ホテルの「アニバーサリーコンシェルジュ」に事前相談すると、照明のタイミングや音楽、プレゼントの配置まで完璧に演出してくれます。'
      },
      {
        key: 'anniversary_michelin_dinner',
        title: '3. ミシュラン星付き監修フレンチ＆極上鉄板焼き（記念日を彩る華やかな美食ディナー）',
        timing: '通年（ソムリエ厳選ワインペアリングとともに）',
        desc: 'キャビア、フォアグラ、トリュフ、伊勢海老、最高級黒毛和牛を使った贅沢なフルコースディナー。専属ソムリエが料理一皿ごとに合わせる極上ワインペアリング。美しいデザートプレートへのメッセージ。',
        spots: 'メインダイニング（フレンチ・イタリアン）、鉄板焼きカウンター、ペアリングワインコース、夜景バーラウンジ',
        access: 'ホテル内ファインダイニング。',
        tip: '窓側確約のテーブル席や個室を事前予約し、アレルギーや苦手な食材を事前に伝えておくことでスムーズで完璧なエスコートが可能です。'
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

export default function TargetAudienceHubPage() {
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

              {/* 滞在・設備・ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 充実の設備＆サービス特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 おすすめエリア＆アクセス</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 失敗しない予約＆滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選プラン宿</span>
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

for (const cfg of targetAudienceConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated target audience hub page: /${cfg.slug}`);
}
