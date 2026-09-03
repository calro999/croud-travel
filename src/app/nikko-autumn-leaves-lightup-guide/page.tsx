import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【日光・いろは坂 紅葉2026見頃完全マップ】大渋滞回避の時間帯・中禅寺湖ライトアップ＆奥日光硫黄泉の宿 ｜ 日本全国・旅宿クラウド",
  description:
    "2026年秋の日光紅葉狩り完全攻略！いろは坂・明智平・竜頭の滝・湯ノ湖の見頃時期（10月上旬〜11月上旬）、早朝6時通過で大渋滞を回避する裏ワザ、中禅寺湖畔の乳白色硫黄泉旅館まとめ。",
  keywords: [
    "日光 紅葉 2026",
    "いろは坂 渋滞 回避",
    "中禅寺湖 ライトアップ",
    "明智平ロープウェイ 見頃",
    "奥日光 湯元温泉 乳白色",
    "竜頭の滝 紅葉",
    "日光 楽天トラベル 紅葉バスツアー",
  ],
};

interface Hotel {
  hotelNo: number;
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
  address1?: string;
  address2?: string;
  access?: string;
  nearestStation?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nikko-autumn-leaves-lightup-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for nikko-autumn-leaves-lightup-guide", e);
  }
  return [];
}

export default function NikkoAutumnLeavesGuidePage() {
  const hotels = loadHotels();

  // エリア別・標高差による見頃時期スケジュール
  const foliageStages = [
    {
      area: "奥日光・湯ノ湖＆湯元温泉",
      altitude: "標高 約1,480m",
      bestPeriod: "10月上旬 〜 10月中旬",
      status: "日光で最も早い紅葉の幕開け",
      desc: "湖畔を黄金色に染めるカラマツやダケカンバ、ナナカマドの燃えるような赤。湖面に映る逆さ紅葉と硫黄泉の湯けむりが織りなす幻想美。",
      spots: ["湯ノ湖畔散策路", "湯滝展望台", "奥日光湿原"],
      accentColor: "bg-amber-100 text-amber-900 border-amber-300",
    },
    {
      area: "戦場ヶ原・竜頭の滝",
      altitude: "標高 約1,350m〜1,400m",
      bestPeriod: "10月上旬 〜 10月下旬",
      status: "草紅葉と渓流爆布の錦秋コラボ",
      desc: "湿原一面がセピア色から黄金色に染まる「草紅葉（くさもみじ）」と、岩肌を滑り落ちる滝を挟む真っ赤なモミジ・カエデのコントラストが圧巻。",
      spots: ["竜頭の滝 滝見茶屋", "小田代原（貴婦人の白樺）", "赤沼木道"],
      accentColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
    },
    {
      area: "中禅寺湖畔・華厳の滝・八丁出島",
      altitude: "標高 約1,270m",
      bestPeriod: "10月中旬 〜 10月下旬",
      status: "湖上クルーズと夜間ライトアップの本番",
      desc: "遊覧船から望む八丁出島のカラフルな紅葉パノラマ。夜には中禅寺湖畔や英国・イタリア大使館別荘記念公園周辺で幻想的な紅葉ライトアップが点灯。",
      spots: ["中禅寺湖機船（紅葉廻り航路）", "華厳の滝 観瀑台", "半月山展望台"],
      accentColor: "bg-amber-200 text-amber-950 border-amber-400",
    },
    {
      area: "いろは坂（第二いろは坂上り＆第一下り）・明智平",
      altitude: "標高 約800m〜1,200m",
      bestPeriod: "10月中旬 〜 11月上旬",
      status: "カーブごとに広がる360度絶景パノラマ",
      desc: "48カ所の急カーブを登りながら車窓を埋め尽くす紅葉グラデーション。明智平ロープウェイ展望台からは男体山・中禅寺湖・華厳の滝が一望可能。",
      spots: ["明智平展望台", "黒髪平展望台", "第一いろは坂下り絶壁"],
      accentColor: "bg-amber-300/60 text-amber-900 border-amber-500",
    },
    {
      area: "日光山内（東照宮・輪王寺・神橋・霧降高原）",
      altitude: "標高 約600m〜700m",
      bestPeriod: "11月上旬 〜 11月中旬",
      status: "世界遺産の漆黒・金箔と深紅の共演",
      desc: "世界遺産「日光の社寺」を包む風格ある巨木モミジ。輪王寺逍遥園では国指定名勝の日本庭園が夜間特別ライトアップされ幽玄の境地へ誘います。",
      spots: ["輪王寺逍遥園ライトアップ", "神橋大谷川沿い", "日光東照宮五重塔前"],
      accentColor: "bg-orange-100 text-orange-900 border-orange-300",
    },
  ];

  // いろは坂渋滞回避 5大プロハック
  const trafficHacks = [
    {
      step: "01",
      title: "「早朝6:00前」に馬返（いろは坂始点）を通過する",
      desc: "ピーク期のいろは坂は朝7:30からテールランプの列が伸び始め、8:00には通過に2時間以上かかることも。午前5:30〜6:00に馬返を抜ければノンストップ約20分で明智平・中禅寺湖へ登り切れます。",
      badge: "最重要ルール",
    },
    {
      step: "02",
      title: "明智平駐車場は「朝7:00の開場待ち」を狙う",
      desc: "明智平ロープウェイの駐車場は収容台数が約60台と極小。朝8時以降は駐車待ちの車で車線が埋まります。早朝に到着して朝日を浴びる男体山を眺めながら待機するのが最短攻略法です。",
      badge: "駐車場対策",
    },
    {
      step: "03",
      title: "帰りの下り（第一いろは坂）は「14:30前」か「18:30以降」",
      desc: "中禅寺湖から日光市街地へ下る第一いろは坂は、15:00〜18:00が観光帰りの大集中時間帯。この時間を外し、中禅寺湖畔の乳白色温泉で日帰り入浴やライトアップを鑑賞して夜遅くに下るのが賢明。",
      badge: "下り回避策",
    },
    {
      step: "04",
      title: "東武鉄道「日光WEBフリーパス」＋早朝特急でノーカー快適移動",
      desc: "マイカーの渋滞疲れを避けたいなら、浅草発の特急リバティ・スペーシア早朝便と東武バス日光の組み合わせが最強。フリーパスなら中禅寺湖や湯元温泉まで乗り降り自由です。",
      badge: "電車＆バス派",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50/40 text-stone-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* ヒーローセクション */}
      <header className="relative overflow-hidden bg-gradient-to-b from-amber-900 via-amber-950 to-stone-900 text-amber-50 pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-600">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500 text-stone-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
              2026 Autumn Leaf Special
            </span>
            <span className="bg-amber-950/80 text-amber-300 border border-amber-600/60 text-xs px-3 py-1 rounded-full font-bold">
              見頃標高差 800m〜1,500m 徹底解剖
            </span>
            <span className="text-amber-300/80 text-xs">
              更新日: 2026年9月
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight sm:leading-snug mb-6 text-white drop-shadow">
            【日光・いろは坂 紅葉2026見頃完全マップ】<br className="hidden sm:inline" />
            <span className="text-amber-400">大渋滞回避の時間帯</span>・中禅寺湖ライトアップ＆奥日光硫黄泉の宿
          </h1>

          <p className="text-sm sm:text-lg text-amber-100/90 leading-relaxed max-w-3xl mb-8">
            カエデやモミジ、カラマツが標高1,500mの湯ノ湖から世界遺産・日光東照宮まで約1ヶ月半かけて山を駆け下りる日本屈指の錦秋スペクタクル。
            毎年全国ニュースになる「いろは坂大渋滞」を賢く回避するタイムマネジメントから、中禅寺湖・竜頭の滝の見頃推移、白濁の湯けむり立ち上る奥日光湯元温泉のおすすめ宿までを徹底網羅しました。
          </p>

          {/* クイックサマリーカード */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-amber-900/60 border border-amber-700/60 backdrop-blur rounded-2xl p-3.5">
              <span className="text-amber-300 text-xs block mb-1 font-bold">見頃期間</span>
              <span className="text-lg sm:text-xl font-black text-white">10月上旬〜11月中旬</span>
            </div>
            <div className="bg-amber-900/60 border border-amber-700/60 backdrop-blur rounded-2xl p-3.5">
              <span className="text-amber-300 text-xs block mb-1 font-bold">渋滞回避リミット</span>
              <span className="text-lg sm:text-xl font-black text-amber-400">早朝 6:00前 通過</span>
            </div>
            <div className="bg-amber-900/60 border border-amber-700/60 backdrop-blur rounded-2xl p-3.5">
              <span className="text-amber-300 text-xs block mb-1 font-bold">名物紅葉スポット</span>
              <span className="text-lg sm:text-xl font-black text-white">竜頭の滝・八丁出島</span>
            </div>
            <div className="bg-amber-900/60 border border-amber-700/60 backdrop-blur rounded-2xl p-3.5">
              <span className="text-amber-300 text-xs block mb-1 font-bold">推奨泉質</span>
              <span className="text-lg sm:text-xl font-black text-amber-300">奥日光 乳白色硫黄泉</span>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* キャンペーンバナー */}
        <section>
          <SpecialCouponBanner variant="prominent" />
        </section>

        {/* 1. 標高差別！紅葉カレンダー */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-200">
          <div className="border-l-4 border-amber-600 pl-4 mb-6">
            <span className="text-amber-700 text-xs font-black tracking-widest uppercase block">Elevation & Peak Timing</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              日光紅葉2026 標高差800mを駆け下りる見頃推移
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
            日光の紅葉最大の特徴は、標高約1,500mの湯元温泉から標高約600mの日光駅・東照宮周辺まで、約900mもの標高差があること。
            そのため、10月上旬から11月中旬までの約6週間にわたり、訪れるエリアを変えることで常にベストな紅葉に出会えます。
          </p>

          <div className="space-y-4">
            {foliageStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200/80 hover:border-amber-400 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-stone-900">
                      {stage.area}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-stone-200/80 text-stone-700">
                      {stage.altitude}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-black border ${stage.accentColor}`}>
                      {stage.bestPeriod}
                    </span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-bold text-amber-900 mb-2">
                  ✨ {stage.status}
                </div>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-3">
                  {stage.desc}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-amber-200/60">
                  <span className="text-[11px] font-bold text-amber-950">必見スポット:</span>
                  {stage.spots.map((spot, sIdx) => (
                    <span key={sIdx} className="text-xs bg-white text-stone-700 px-2 py-0.5 rounded-md border border-amber-200">
                      📍 {spot}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. いろは坂大渋滞完全回避マニュアル */}
        <section className="bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-700">
          <div className="border-l-4 border-amber-400 pl-4 mb-6">
            <span className="text-amber-400 text-xs font-black tracking-widest uppercase block">Traffic Hack 2026</span>
            <h2 className="text-xl sm:text-3xl font-black text-amber-100">
              いろは坂の「大渋滞地獄」を回避する5大鉄則
            </h2>
          </div>
          <p className="text-amber-100/80 text-sm sm:text-base leading-relaxed mb-6">
            紅葉シーズンのいろは坂（上り・下り）は、日本でも有数の混雑ポイント。
            「トイレに行けないまま坂道で3時間停止」「明智平駐車場に入れず通過を余儀なくされた」という悲劇を防ぐため、地元ドライバーや紅葉リピーター直伝の時間帯攻略法を必ず確認してください。
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {trafficHacks.map((hack, hIdx) => (
              <div
                key={hIdx}
                className="bg-amber-900/40 border border-amber-600/40 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-amber-400 font-mono font-black text-xl">
                      {hack.step}
                    </span>
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {hack.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white mb-2">
                    {hack.title}
                  </h3>
                  <p className="text-amber-100/70 text-xs sm:text-sm leading-relaxed">
                    {hack.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <strong className="text-white block mb-0.5">トイレ対策を万全に！</strong>
              いろは坂（馬返〜明智平〜中禅寺湖）の登坂ルート上には、明智平まで約10kmにわたり公衆トイレが一切ありません。馬返パーキングの手前で必ず同行者全員のトイレ休憩を済ませましょう。
            </div>
          </div>
        </section>

        {/* 3. 中禅寺湖＆輪王寺逍遥園 ライトアップ情報 */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-200">
          <div className="border-l-4 border-amber-600 pl-4 mb-6">
            <span className="text-amber-700 text-xs font-black tracking-widest uppercase block">Night Illuminations</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              夜を彩る光と紅葉！中禅寺湖＆輪王寺逍遥園ライトアップ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-amber-200 rounded-2xl p-5 bg-amber-50/30 flex flex-col justify-between">
              <div>
                <span className="bg-amber-600 text-white text-xs font-black px-2.5 py-1 rounded-full mb-3 inline-block">
                  日光市街・世界遺産エリア
                </span>
                <h3 className="text-lg font-black text-stone-900 mb-2">
                  日光山輪王寺 逍遥園「秋のライトアップ」
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  江戸初期に作庭された池泉回遊式庭園「逍遥園」に広がるモミジの名木群を、柔らかな光でライトアップ。池の水面に映り込む「逆さ紅葉」は息を呑む美しさです。
                </p>
              </div>
              <div className="text-xs bg-white p-3 rounded-xl border border-amber-200 text-stone-700 space-y-1">
                <p><strong>期間：</strong>10月下旬 〜 11月中旬（16:00〜20:00）</p>
                <p><strong>料金：</strong>大人500円 / 小中学生無料</p>
                <p><strong>アクセス：</strong>JR・東武日光駅から東武バス「神橋」または「勝道上人像前」下車すぐ</p>
              </div>
            </div>

            <div className="border border-amber-200 rounded-2xl p-5 bg-amber-50/30 flex flex-col justify-between">
              <div>
                <span className="bg-amber-700 text-white text-xs font-black px-2.5 py-1 rounded-full mb-3 inline-block">
                  奥日光・中禅寺湖畔
                </span>
                <h3 className="text-lg font-black text-stone-900 mb-2">
                  中禅寺湖畔 イルミネーション＆英国大使館別荘記念公園
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  大鳥居周辺や国際避暑地として栄えた洋館がライトアップされ、夜の静謐な中禅寺湖がロマンチックに浮かび上がります。夜間遊覧船（期間限定）からの眺めも格別。
                </p>
              </div>
              <div className="text-xs bg-white p-3 rounded-xl border border-amber-200 text-stone-700 space-y-1">
                <p><strong>期間：</strong>10月中旬 〜 11月上旬（16:30〜19:30）</p>
                <p><strong>防寒必須：</strong>中禅寺湖畔の10月下旬夜間は気温5度以下に冷え込みます。ダウンジャケット着用を推奨</p>
                <p><strong>見どころ：</strong>中禅寺立木観音の夜間特別参拝、英国大使館別荘カフェの温かい紅茶</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 楽天トラベル提携宿セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-200">
          <div className="border-l-4 border-amber-600 pl-4 mb-4">
            <span className="text-amber-700 text-xs font-black tracking-widest uppercase block">Selected Ryokan & Hotels</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              紅葉めぐりの拠点に！日光・奥日光・鬼怒川の厳選宿
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
            いろは坂の混雑を避けるなら「中禅寺湖畔や奥日光の宿に前泊する」のがプロの常套手段。
            乳白色の濃厚な硫黄泉で冷えた体を温め、早朝に誰もいない湖畔や滝を独り占めできる楽天トラベル提携の名宿を厳選しました。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-stone-50 rounded-2xl overflow-hidden border border-amber-200/80 hover:border-amber-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-stone-200 overflow-hidden">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400">
                        No Image
                      </div>
                    )}
                    {hotel.reviewAverage && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 font-black text-xs px-2 py-1 rounded-md shadow flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(1)}
                        {hotel.reviewCount && (
                          <span className="text-[10px] font-normal text-stone-800">
                            ({hotel.reviewCount}件)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-stone-900 mb-2 leading-snug line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-amber-900 line-clamp-2 mb-3 bg-amber-100/60 p-2 rounded-lg border border-amber-200">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                    <div className="text-xs text-stone-500 space-y-1 mb-4">
                      {hotel.nearestStation && (
                        <p className="flex items-center gap-1">
                          <span>🚉 最寄：</span>
                          <span>{hotel.nearestStation}駅</span>
                        </p>
                      )}
                      {hotel.access && (
                        <p className="line-clamp-1">
                          <span>🚗 </span>{hotel.access}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-baseline justify-between mb-3 border-t border-stone-200 pt-3">
                    <span className="text-xs text-stone-500">参考最安料金</span>
                    <span className="text-amber-700 font-black text-lg">
                      {hotel.hotelMinCharge
                        ? `¥${hotel.hotelMinCharge.toLocaleString()}〜`
                        : "プラン参照"}
                    </span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow hover:shadow-md transition-all duration-200"
                  >
                    空室確認・紅葉プランを予約 🍁
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 楽天トラベルバスツアー訴求 */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 text-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                運転ストレスゼロ
              </span>
              <h4 className="text-base sm:text-lg font-black text-amber-950">
                首都圏発！楽天トラベル 日光・いろは坂 紅葉日帰り＆宿泊バスツアー
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                渋滞でも運転の疲れなし！明智平ロープウェイ乗車券付きや日光東照宮参拝、湯波御膳ランチ付きツアーが秋限定で受付中。
              </p>
            </div>
            <a
              href="https://travel.rakuten.co.jp/bus/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow transition"
            >
              秋のバスツアーを検索 🚌
            </a>
          </div>
        </section>

        {/* 5. 内部リンク＆関連記事 */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-300/80">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
            <span>🔗</span> あわせて読みたい日光＆東日本トラベルガイド
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/nikko-chuzenji-car-free-travel-guide"
              className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-500 hover:shadow transition group"
            >
              <span className="text-xs text-amber-700 font-bold block mb-1">車なし観光ガイド</span>
              <h3 className="text-sm sm:text-base font-bold text-stone-800 group-hover:text-amber-700 transition">
                【日光・中禅寺湖 車なし観光 1泊2日】スペーシアX＆東武バス完全攻略 →
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                紅葉時期のバス乗り継ぎと日光WEBフリーパスの活用術。
              </p>
            </Link>

            <Link
              href="/tokyo-sendai-bus-vs-shinkansen-guide"
              className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-500 hover:shadow transition group"
            >
              <span className="text-xs text-amber-700 font-bold block mb-1">東日本交通比較</span>
              <h3 className="text-sm sm:text-base font-bold text-stone-800 group-hover:text-amber-700 transition">
                【東京〜仙台 高速バス vs 新幹線】料金・所要時間・快適性比較 →
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                東北・北関東への秋旅を最安・最短で移動する交通手段の選び方。
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
