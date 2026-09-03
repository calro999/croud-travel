import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【沖縄旅行で後悔したことワースト5】本州の3倍の紫外線で大火傷！？レンタカー返却渋滞＆必須持ち物 ｜ 日本全国・旅宿クラウド",
  description: "沖縄旅行でありがちな失敗と後悔を完全回避！日焼け止めを塗っても火傷するシュノーケリング対策（ラッシュガード必須）、那覇空港周辺のレンタカー返却大渋滞で飛行機乗り遅れ危機、雨雲レーダー活用術。",
  keywords: [
    "沖縄旅行 失敗",
    "沖縄旅行 後悔",
    "沖縄 紫外線 日焼け止め 火傷",
    "沖縄 レンタカー 渋滞 乗り遅れ",
    "沖縄 スコール 雨雲レーダー",
    "沖縄 持ち物 リスト",
    "沖縄 ホテル 楽天トラベル",
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
      return data["okinawa-packing-mistakes-sunburn-rentalcar-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for okinawa-packing-mistakes-sunburn-rentalcar-guide", e);
  }
  return [];
}

export default function OkinawaPackingMistakesGuidePage() {
  const hotels = loadHotels();

  // 後悔ワースト5
  const worst5Mistakes = [
    {
      rank: "第1位",
      tag: "激痛・医療トラブル",
      title: "「日焼け止め塗ったから平気」と水着で海に入り、背中と太もも裏が大火傷",
      story: "沖縄の紫外線強度は本州の約1.5〜3倍。水面反射も加わり、シュノーケリングでわずか30分海面に浮いていただけで水ぶくれ・熱発するII度熱傷レベルに。翌日以降服が擦れるだけで悶絶し、観光もベッドから動けなくなる最悪のパターン。",
      avoidRule: "「塗る日焼け止め」は水や汗で流れます。長袖長ズボンのラッシュガード＋マリンレギンスの着用が義務級に必須。直射日光を物理的に100%遮断するのが南国の鉄則です。",
      gear: "UPF50+長袖ラッシュガード＆トレンカレギンス、アロエジェル（万一のアフターケア）"
    },
    {
      rank: "第2位",
      tag: "飛行機乗り遅れ危機",
      title: "最終日の那覇空港周辺レンタカー返却渋滞を見くびり、フライト直前でダッシュ",
      story: "夕方の国道331号・58号線、那覇空港周辺は地元通勤車と観光客の返却車両が集中し、普段15分の距離が60分〜90分動かなくなる大渋滞が日常茶飯事。さらに営業所での返却点検・送迎バス待ちで長蛇の列ができ、保安検査場締切に間に合わず青ざめる旅行者が後を絶ちません。",
      avoidRule: "那覇空港発フライトの【最低3時間前（繁忙期は3時間半前）】にレンタカー営業所着のスケジュールを組むこと。返却後はゆいレール駅徒歩圏の店舗ならモノレール移動で渋滞をバイパスできます。",
      gear: "フライト3時間半前のスケジュールアラーム、ゆいレール1日乗車券"
    },
    {
      rank: "第3位",
      tag: "天気予報の罠",
      title: "天気予報の「雨マーク」に絶望して室内プランに変更→外は超快晴だった",
      story: "沖縄の天気予報は海風で雨雲が猛スピードで流れるため、本州のような「1日中シトシト雨」は稀。予報が雨でも、降るのは局地的な15分のスコール（カタブイ）だけで、1日の大半は青空が広がるケースが日常です。予報だけで終日プランを潰すのは大損。",
      avoidRule: "週間天気予報の「降水確率」ではなく、気象庁やウェザーニュースの「高解像度降雨・雨雲レーダー」を1時間単位で確認。雨雲が抜けるカフェで30分雨宿りすれば、すぐにエメラルドグリーンの海に戻れます。",
      gear: "雨雲レーダーアプリ、折りたたみワンタッチ晴雨兼用遮光傘（暴風対応）"
    },
    {
      rank: "第4位",
      tag: "足元負傷＆サンゴ礁",
      title: "ビーチサンダルで磯やビーチを歩いてサンゴや貝殻で足裏をザックリ切創",
      story: "沖縄の砂浜は白砂だけでなく、鋭利な死サンゴ片やゴツゴツした琉球石灰岩、ガンガゼ（ウニの仲間）が無数に存在します。ビーチサンダルだと波にさらわれて脱げる上、滑って岩場で足を深く切る事故が多発します。",
      avoidRule: "海遊びは底が厚手ラバーのマリンシューズ（ウォーターシューズ）一択。踵が固定され岩場でも滑らず、熱い砂浜でも火傷せず安全に歩行できます。",
      gear: "ソール厚手マリンシューズ（岩場対応）、防水絆創膏・消毒液"
    },
    {
      rank: "第5位",
      tag: "車内・屋内温度差",
      title: "猛暑の屋外とエアコン強風（18℃冷房）の室内・レンタカー内で自律神経崩壊",
      story: "外気温33度の炎天下から、ギンギンに冷やされた道の駅・カフェ・美ら海水族館に入ると気温差が15℃以上。汗で濡れたTシャツが冷房で一気に冷え、激しい頭痛やお腹下し、夏バテを引き起こします。",
      avoidRule: "真夏でも薄手の長袖リネンシャツやパッカブルUVパーカーを必ず携帯し、屋内に入った瞬間に羽織ること。レンタカーのエアコン吹き出し口が直接体に当たらないよう風向設定も徹底しましょう。",
      gear: "速乾接触冷感UVパーカー、薄手カーディガン、塩分補給タブレット"
    }
  ];

  // 沖縄パッキング完全チェックリスト
  const packingChecklist = [
    { item: "UPF50+ 長袖ラッシュガード＆レギンス", cat: "日焼け・海", note: "海・プールに入るなら日焼け止めより10倍重要。背中と膝裏を守る" },
    { item: "マリンシューズ（ウォーターシューズ）", cat: "日焼け・海", note: "鋭いサンゴ片・岩場・熱湯のような砂浜から足裏を守る必須装備" },
    { item: "完全遮光100% 日傘（耐風骨仕様）", cat: "暑さ・紫外線", note: "日陰のない城跡や古宇利大橋で体感温度を5℃下げる。突風に強い骨" },
    { item: "スマホ用完全防水フローティングケース", cat: "ガジェット", note: "首掛け式。万一海に落としても水面に浮かぶフロート付きが安全" },
    { item: "雨雲レーダーアプリ＆速乾タオル", cat: "スコール対策", note: "局地的なゲリラ豪雨（カタブイ）を察知して雨宿り。速乾で快適" },
    { item: "サングラス（偏光レンズ仕様）", cat: "紫外線ケア", note: "海面のギラつきを抑え、エメラルドグリーンの珊瑚礁がクッキリ見える" },
    { item: "薄手はおりもの（UVカットパーカー）", cat: "冷房対策", note: "水族館やショッピングモール、レンタカー内の極冷房から身体をガード" },
    { item: "アロエ冷却ジェル＆大判ウェットシート", cat: "スキンケア", note: "ほてった肌の即時沈静。ベタつく潮風を拭き取る厚手シート" },
    { item: "シガーソケット急速USB充電器＆スマホ車載ホルダー", cat: "レンタカー", note: "ナビ起動でスマホ電池激減。返却時の充電切れを防ぐ" },
    { item: "エコバッグ（大サイズ数枚）", cat: "買い物・ビーチ", note: "濡れた水着・お土産の紅芋タルトや泡盛をまとめるのに必須" },
  ];

  return (
    <div className="min-h-screen bg-cyan-950 text-slate-100 selection:bg-cyan-500 selection:text-white pb-20">
      {/* ヒーローヘッダー（Vibrant Cyan & Marine Blue Palette） */}
      <header className="relative overflow-hidden bg-gradient-to-b from-cyan-900 via-sky-950 to-cyan-950 border-b border-cyan-800/40 py-16 md:py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
            <span>🌺 OKINAWA MISTAKES & PACKING</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight md:leading-tight text-white font-journal-serif">
            【沖縄旅行で後悔したことワースト5】<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-200">
              本州の3倍の紫外線で大火傷！？レンタカー返却渋滞＆必須持ち物
            </span>
          </h1>

          <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
            青い海と白い砂浜！最高の思い出になるはずが「日焼けで皮膚科送り」「レンタカー渋滞で那覇空港の飛行機に乗り遅れ」…沖縄旅行経験者が「これだけは知っておきたかった」と悔やむリアルな落とし穴と対策を総まとめ。
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-bold text-cyan-200">
            <span className="bg-cyan-950/90 px-3.5 py-1.5 rounded-lg border border-cyan-800">☀️ 紫外線本州3倍の現実</span>
            <span className="bg-cyan-950/90 px-3.5 py-1.5 rounded-lg border border-cyan-800">🚗 国道331号・58号大渋滞</span>
            <span className="bg-cyan-950/90 px-3.5 py-1.5 rounded-lg border border-cyan-800">🌧️ カタブイ（スコール）攻略</span>
            <span className="bg-cyan-950/90 px-3.5 py-1.5 rounded-lg border border-cyan-800">🧳 現地調達不可ギア</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        {/* ⚠️ 後悔ワースト5 詳細解説 */}
        <section className="space-y-8">
          <div className="border-b border-cyan-800/60 pb-4 space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-black tracking-wider uppercase">
              <span>⚠️ TOP 5 REGRETS IN OKINAWA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-journal-serif">
              沖縄旅行で旅行者がガチ後悔したことワースト5
            </h2>
            <p className="text-xs sm:text-sm text-cyan-200/80">
              「知らなかった」では済まされない！出発前に知るだけで回避できる致命的トラブル。
            </p>
          </div>

          <div className="space-y-6">
            {worst5Mistakes.map((item) => (
              <div
                key={item.rank}
                className="bg-slate-900/90 border border-cyan-900/60 hover:border-cyan-400/50 transition duration-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyan-900/40 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black bg-gradient-to-r from-rose-600 to-amber-600 text-white px-3 py-1 rounded-lg">
                      {item.rank}
                    </span>
                    <span className="text-xs font-bold text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-xl font-black text-white">
                  {item.title}
                </h3>

                <div className="bg-rose-950/20 border-l-4 border-rose-500 p-3.5 rounded-r-xl space-y-1">
                  <span className="text-xs font-black text-rose-300">💣 実際に起きた生々しい悲劇</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.story}
                  </p>
                </div>

                <div className="bg-cyan-950/50 border-l-4 border-cyan-400 p-3.5 rounded-r-xl space-y-1">
                  <span className="text-xs font-black text-cyan-300">🛡️ プロ直伝の完全回避ルール</span>
                  <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
                    {item.avoidRule}
                  </p>
                </div>

                <div className="text-xs text-cyan-300/80 pt-1 flex items-center gap-2">
                  <span>🧰 必須対策装備：</span>
                  <strong className="text-white font-medium">{item.gear}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📋 沖縄パッキングチェックリスト */}
        <section className="bg-slate-900/90 border border-cyan-900/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-cyan-800/40 pb-4 space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-black tracking-wider uppercase">
              <span>📋 PACKING ESSENTIALS CHECKLIST</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              「持って行って本当に助かった」沖縄必須持ち物リスト
            </h2>
            <p className="text-xs text-cyan-300/80">
              現地ホテルやコンビニで買うと観光地価格で高くつく、または手に入らない厳選10品。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingChecklist.map((pack, idx) => (
              <div
                key={idx}
                className="bg-cyan-950/30 border border-cyan-900/50 rounded-2xl p-4 space-y-1.5 hover:border-cyan-400/40 transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    {pack.cat}
                  </span>
                  <span className="text-xs text-cyan-500">✓ 必需品</span>
                </div>
                <h3 className="text-sm font-black text-white">
                  {pack.item}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pack.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🚗 那覇空港レンタカー返却タイムテーブルハック */}
        <section className="bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-1 border-b border-cyan-800/50 pb-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-black tracking-wider uppercase">
              <span>🚗 RENTAL CAR RETURN SURVIVAL</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              那覇空港レンタカー返却で「乗り遅れない」黄金タイムスケジュール
            </h2>
            <p className="text-xs sm:text-sm text-cyan-200">
              フライト時刻が17:00の場合のモデルタイムライン。これより遅れると綱渡りになります！
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-900/40">
              <span className="text-xs font-black text-amber-300 bg-amber-950/80 px-2 py-1 rounded shrink-0">
                13:30 (3.5h前)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">観光地を出発し那覇方面へ南下</div>
                <div className="text-xs text-slate-300">恩納村や名護からは沖縄自動車道を利用。許田IC・那覇ICの渋滞を考慮。</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-900/40">
              <span className="text-xs font-black text-amber-300 bg-amber-950/80 px-2 py-1 rounded shrink-0">
                14:30 (2.5h前)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">営業所付近でガソリン満タン給油＆返却手続き</div>
                <div className="text-xs text-slate-300">営業所併設または指定スタンドでレシートをもらい返却。点検・精算に15分。</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-900/40">
              <span className="text-xs font-black text-amber-300 bg-amber-950/80 px-2 py-1 rounded shrink-0">
                15:00 (2.0h前)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">レンタカー送迎バスに乗車して那覇空港へ</div>
                <div className="text-xs text-slate-300">夕方の空港周辺道路の混雑で送迎バスが20〜30分かかる場合あり。</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-900/40">
              <span className="text-xs font-black text-cyan-300 bg-cyan-950 px-2 py-1 rounded shrink-0">
                15:30 (1.5h前)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">那覇空港到着・受託手荷物預け＆お土産購入</div>
                <div className="text-xs text-slate-300">荷物検査の列が長い場合でも心に余裕。空港限定マンゴースイーツを楽しめます。</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-cyan-900/40">
              <span className="text-xs font-black text-emerald-300 bg-emerald-950 px-2 py-1 rounded shrink-0">
                16:40 (20分前)
              </span>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">搭乗口前でスタンバイ</div>
                <div className="text-xs text-slate-300">汗だくにならず、お土産を抱えて安全に帰路へ！</div>
              </div>
            </div>
          </div>
        </section>

        {/* 🏨 那覇空港アクセス抜群＆プール・ビーチ付き厳選ホテル */}
        <section className="space-y-6">
          <div className="border-b border-cyan-800/60 pb-4 space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-black tracking-wider uppercase">
              <span>🏨 RECOMMENDED OKINAWA RESORTS & HOTELS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              那覇空港近＆渋滞知らず！プール・ビーチ充実の沖縄おすすめホテル
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              最終日の移動が楽な空港近接ホテルから、目の前が極上ビーチのリゾートまで楽天トラベルで高評価の宿泊施設です。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between bg-slate-900/90 border border-cyan-900/50 hover:border-cyan-400/50 rounded-2xl overflow-hidden shadow-lg transition duration-200"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-800">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                          {hotel.hotelName}
                        </div>
                      )}
                      {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-cyan-950/90 text-cyan-200 px-2.5 py-0.5 rounded border border-cyan-800">
                          ¥{hotel.hotelMinCharge.toLocaleString()}〜
                        </span>
                      )}
                      {hotel.nearestStation && (
                        <span className="absolute top-2 left-2 text-[10px] font-black bg-slate-950/80 text-cyan-200 px-2 py-0.5 rounded">
                          ✈️ {hotel.nearestStation}
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                        <div className="flex items-center text-xs font-bold text-amber-400">
                          <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount || 0}件）</span>
                        </div>
                      )}
                      <h3 className="text-sm font-black text-white line-clamp-2">
                        {hotel.hotelName}
                      </h3>
                      {hotel.hotelSpecial && (
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {hotel.hotelSpecial}
                        </p>
                      )}
                      {hotel.access && (
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          📍 {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 text-xs font-black text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition shadow"
                    >
                      🌴 楽天トラベルでプラン・空室を見る
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-slate-500">
              ホテル情報を読み込み中または該当ホテルがありません。
            </div>
          )}
        </section>

        {/* 内部リンク＆沖縄旅計画導線 */}
        <section className="bg-slate-900/60 border border-cyan-900/40 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-black tracking-wider uppercase">
            <span>🔗 OKINAWA TRAVEL GUIDES</span>
          </div>
          <h2 className="text-lg font-black text-white">
            予算・泊数・家族旅行の計画もあわせてチェック
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/okinawa-travel-budget-plan"
              className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-900/40 hover:border-cyan-400 transition space-y-1.5 group"
            >
              <div className="text-xs font-black text-cyan-400 group-hover:text-cyan-300">
                💰 沖縄予算シュミレーション
              </div>
              <h3 className="text-sm font-bold text-white">
                沖縄旅行の予算相場と費用を安く抑える賢い節約術
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                飛行機・ホテル・レンタカー・食事代の時期別リアル相場とコスパ重視の旅費設計。
              </p>
            </Link>

            <Link
              href="/okinawa-family-trip-how-many-nights-budget"
              className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-900/40 hover:border-cyan-400 transition space-y-1.5 group"
            >
              <div className="text-xs font-black text-cyan-400 group-hover:text-cyan-300">
                👨‍👩‍👧 子連れ・ファミリー旅行
              </div>
              <h3 className="text-sm font-bold text-white">
                子連れ沖縄は何泊がベスト？年齢別モデルコース＆予算内訳
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                無理のない移動スケジュールとキッズプール・離乳食対応ホテル選びの極意。
              </p>
            </Link>
          </div>
        </section>

        {/* 全国都道府県一覧 */}
        <div className="text-center pt-4">
          <Link
            href="/prefectures"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-cyan-900/60 px-8 py-3.5 rounded-2xl transition shadow-sm"
          >
            <span>🗾</span>
            <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
            <span>→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
