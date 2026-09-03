import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【東京駅 早朝6時・7時オープンの朝食カフェ＆コインロッカー】夜行バス到着後のリフレッシュ完全ガイド",
  description:
    "バスタ新宿や東京駅鍛冶橋駐車場に早朝到着した旅行者必見！朝6時台から開いている八重洲・丸の内の極上モーニング、グランスタの朝限定弁当、空いている早朝コインロッカー穴場と駅前朝風呂ホテル。",
  keywords: [
    "東京駅 早朝 朝食",
    "東京駅 モーニング 6時 7時",
    "鍛冶橋駐車場 早朝 過ごし方",
    "東京駅 コインロッカー 空き 穴場",
    "東京駅 グランスタ 朝ごはん",
    "東京駅 夜行バス シャワー 朝風呂",
    "東京駅 朝食 カフェ 電源"
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
      return data["tokyo-station-early-morning-breakfast-cafe-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-station-early-morning-breakfast-cafe-guide", e);
  }
  return [];
}

export default function TokyoStationEarlyMorningBreakfastPage() {
  const hotels = loadHotels();

  // 東京駅 早朝オープン厳選モーニングスポット
  const breakfastVenues = [
    {
      timeTag: "06:30 OPEN",
      badge: "八重洲地下街（ヤエチカ）",
      name: "アロマ珈琲 八重洲店",
      feature: "厚切りバタートースト＆自家焙煎サイフォン珈琲（おかわり無料サービス）",
      hours: "平日・土 6:30〜21:00 / 日祝 7:00〜",
      location: "八重洲地下街 中4号（鍛冶橋駐車場から徒歩約4分）",
      price: "¥600〜¥800",
      description:
        "1970年創業の昭和レトロな純喫茶。看板のモーニングセットは、極厚切りのトーストにバターがじゅわっと染み込み、ゆで卵とあんこが付いてきます。特筆すべきはサイフォン仕立てのブレンド珈琲が1杯おかわり無料な点。鍛冶橋駐車場に到着した夜行バス客の定番オアシスです。",
      facilities: "喫煙専用ブースあり / どこか懐かしい木目調のボックス席"
    },
    {
      timeTag: "07:00 OPEN",
      badge: "グランスタ東京（改札内）",
      name: "ほんのり屋 東京本店",
      feature: "会津産コシヒカリの炊きたておむすび・季節の味噌汁セット",
      hours: "7:00〜22:00",
      location: "JR東京駅1F 改札内 グランスタ東京（中央通路）",
      price: "¥480〜¥850",
      description:
        "お米の粒立ちと海苔の香りに徹底してこだわるおむすび専門店。早朝から店頭で握られる鮭・高菜・明太子のおにぎりは一口頬張るだけでホッとする温かさ。新幹線乗車前のクイック朝食やテイクアウトに圧倒的な人気を誇ります。",
      facilities: "カウンターイートイン席あり / Suica・各種電子マネー即時決済"
    },
    {
      timeTag: "06:30 OPEN",
      badge: "八重洲南口直結",
      name: "マクドナルド JR東京駅店",
      feature: "コンセント席多数・最速チャージ＆朝マック",
      hours: "6:00〜23:00",
      location: "JR東京駅 八重洲南口改札外すぐ",
      price: "¥350〜¥600",
      description:
        "鍛冶橋駐車場からもっとも近い電源スポットのひとつ。カウンター席にはUSB・ACコンセントが備わっており、夜行バス移動で消耗したスマートフォンの充電を最優先したい朝に重宝します。リーズナブルにホットコーヒーとソーセージエッグマフィンで一息つけます。",
      facilities: "コンセント席充実 / フリーWi-Fi / キャッシュレス専用レジ"
    },
    {
      timeTag: "07:00 OPEN",
      badge: "東京駅一番街・東京ラーメンストリート",
      name: "六厘舎（ろくりんしゃ）",
      feature: "あっさり煮干しが染み渡る！伝説の「朝つけめん」",
      hours: "7:30〜9:45（L.O. 9:30）※昼の部とはスープが異なります",
      location: "東京駅一番街 B1F（八重洲地下中央口改札外すぐ）",
      price: "¥790〜¥1,050",
      description:
        "昼夜は長蛇の列ができる名店・六厘舎ですが、早朝限定の「朝つけめん」は通常の超濃厚魚介豚骨とは異なり、魚介出汁をすっきりと利かせた朝専用チューニング。寝起きの胃袋にも優しくスルスルと収まり、スープ割りまで飲み干せる贅沢な朝ラーメン体験です。",
      facilities: "荷物カゴ完備 / 食券事前購入制 / 活気あふれるカウンター"
    },
    {
      timeTag: "07:00 OPEN",
      badge: "丸の内北口・オアゾ",
      name: "ポワン エ リーニュ（POINT ET LIGNE）",
      feature: "焼き立て自家製パン6種食べ比べプレート＆スープモーニング",
      hours: "8:00〜21:00（土日祝は朝営業確認推奨） / 新丸ビル周辺ベーカリー",
      location: "新丸ビル B1F（丸の内地下中央口直結）",
      price: "¥1,200〜¥1,800",
      description:
        "丸の内OLや感度の高い旅行者に愛される最高峰ブーランジェリー。小麦本来の甘みが際立つ自家製パンの盛り合わせに、ディップや温かいポタージュスープを添えたホテルライクなモーニングをカジュアルに楽しめます。",
      facilities: "洗練されたシックなインテリア / テラス風カウンター"
    },
    {
      timeTag: "07:00 OPEN",
      badge: "丸の内南口 KITTE地下",
      name: "シティベーカリー（THE CITY BAKERY）KITTE丸の内",
      feature: "NY仕込みのプレッツェルクロワッサン＆ホットチョコレート",
      hours: "7:00〜21:00",
      location: "KITTE丸の内 B1F（丸の内地下南口直結）",
      price: "¥800〜¥1,400",
      description:
        "ずっしり香ばしいゴマと岩塩がアクセントの「プレッツェルクロワッサン」が代名詞。広々としたテーブル席と落ち着いた照明の中で、本格的なアメリカンスタイルのモーニングエッグベネディクトや濃厚ラテを味わえます。",
      facilities: "大型スーツケース同伴可 / 電源席一部あり"
    }
  ];

  // コインロッカー穴場マップ
  const lockerHacks = [
    {
      zone: "穴場 1",
      area: "八重洲地下街（ヤエチカ）最奥ゾーン",
      feature: "地上中央口が満車でも空き率高め",
      desc: "改札正面のコインロッカーは朝7時で埋まり始めますが、ヤエチカを外堀通り方面へ少し進んだ地下通路沿いロッカーは早朝なら大型スーツケース用も空きが目立ちます。"
    },
    {
      zone: "穴場 2",
      area: "京葉線連絡通路（地下1F〜地下2F中間）",
      feature: "ディズニー客用で数が多いが早朝は余裕あり",
      desc: "八重洲南口から京葉線方面へ向かう長い動く歩道の通路沿いは、ロッカー総数が東京駅最大級。移動のついでに預けるなら最も確実な選択肢です。"
    },
    {
      zone: "穴場 3",
      area: "丸の内地下北口・東西線連絡地下通路",
      feature: "ビジネス街側のため休日の早朝はガラガラ",
      desc: "観光客が集中する八重洲側・中央口側を避け、丸の内北口地下から大手町方面へ抜ける地下通路に点在するロッカーは休日の早朝7時台ならほぼ確実に空いています。"
    }
  ];

  // リフレッシュ＆シャワー情報
  const showerPoints = [
    {
      name: "高濃度炭酸泉 八重桜の湯（スーパーホテルPremier東京駅八重洲中央口）",
      type: "大浴場・天然温泉",
      note: "宿泊者専用ですが、夜行バス直後前泊プランやデイユース設定がある場合、都心の一等大地で炭酸泉に浸かれる最高の癒やし拠点。"
    },
    {
      name: "グランスタ東京内 クローク・手荷物預かり所（B1F）",
      type: "有人手荷物預かり",
      note: "ロッカーに入らない特大キャリーや楽器なども確実預け可能。朝8:30から対応。"
    },
    {
      name: "鍛冶橋駐車場待合室＆周辺パウダールーム",
      type: "身支度スペース",
      note: "バス降車後すぐ歯磨きや着替えを行いたい場合は、八重洲地下街の有料パウダールームや駅直結ビルの洗面スペースが清潔でおすすめ。"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans pb-24">
      {/* ヒーローセクション（ミッドナイトインディゴ調） */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950/70 via-slate-900 to-slate-950 pt-16 pb-20 border-b border-indigo-500/20">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4 tracking-wide">
            <span className="animate-pulse">☕</span> 鍛冶橋駐車場・八重洲口降車後の完全エスコート
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5">
            【東京駅 早朝6時・7時オープンの朝食カフェ＆コインロッカー】
            <span className="block text-indigo-400 mt-2 text-xl sm:text-3xl font-black">
              夜行バス到着後のリフレッシュ完全ガイド
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            夜行高速バスで東京駅鍛冶橋駐車場やバスタ新宿へ早朝に到着した旅行者が真っ先に直面する
            「重い荷物をどこに預ける？」「スマホを充電できるカフェは？」「朝風呂でさっぱりしたい」という切実な悩みを全解決。
            早朝6時台から開いている実力店と、失敗しない移動動線をプロの視点でナビゲートします。
          </p>

          {/* クイックサマリータグ */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-200">
              ⚡ 6:30〜開いている電源カフェ
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-200">
              🍜 六厘舎の早朝限定「朝つけめん」
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-200">
              🧳 空いているコインロッカー3大穴場
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-200">
              ♨️ 駅前大浴場＆朝サウナホテル
            </span>
          </div>
        </div>
      </section>

      {/* コンテンツ本体 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 space-y-12">
        {/* キャンペーンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 導入：鍛冶橋駐車場からの最短脱出マップ */}
        <section className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-950/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black flex items-center justify-center text-sm">
              🧭
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              鍛冶橋駐車場から東京駅へ！迷わず潜る早朝ルート
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            多くの長距離夜行バスが到着する「鍛冶橋駐車場」は、東京駅八重洲南口まで徒歩約5分の屋外バスターミナルです。
            早朝の冷え込みや雨風を避けるため、到着後は<strong className="text-indigo-300">「八重洲地下街（ヤエチカ）地下入口」</strong>へ直行するのが最もスマートな脱出法です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-indigo-400 font-bold block mb-1">① 鍛冶橋交差点を北上</span>
              鍛冶橋駐車場を出たら外堀通りを東京駅八重洲口方面へ直進（徒歩約2分）。
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-indigo-400 font-bold block mb-1">② 八重洲地下街26番階段へ</span>
              階段またはエレベーターで地下へ降りると、空調の効いた明るいヤエチカ街が広がります。
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="text-indigo-400 font-bold block mb-1">③ 6:30オープンの喫茶店へ</span>
              ヤエチカ中4号の「アロマ珈琲」などで荷物を下ろし、温かいモーニングで体力を回復！
            </div>
          </div>
        </section>

        {/* メイン：早朝モーニングおすすめ店 */}
        <section className="space-y-6">
          <div className="border-b border-indigo-500/30 pb-3">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
              <span className="text-indigo-400 font-mono">MORNING</span>
              東京駅 早朝6時・7時オープンの極上朝食6選
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              昭和レトロなサイフォン珈琲から朝限定つけ麺、焼きたてベーカリーまで
            </p>
          </div>

          <div className="space-y-6">
            {breakfastVenues.map((venue, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition rounded-3xl p-6 sm:p-7 shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-indigo-500 text-white font-mono font-bold text-xs">
                      {venue.timeTag}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-indigo-900/60">
                      {venue.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-semibold">
                    <span>予算: {venue.price}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">{venue.name}</h3>
                <p className="text-xs sm:text-sm font-medium text-indigo-300 mb-3">{venue.feature}</p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {venue.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <div className="text-slate-400">
                    <strong className="text-indigo-300">場所:</strong> {venue.location}
                  </div>
                  <div className="text-slate-400">
                    <strong className="text-indigo-300">設備:</strong> {venue.facilities}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* コインロッカー穴場マップセクション */}
        <section className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧳</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              東京駅 コインロッカー難民を回避する「早朝穴場マップ」
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            日中は「空きゼロ」になりがちな東京駅。早朝7時前後のうちに確実に確保すべき3大ポイント
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lockerHacks.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-950 flex flex-col justify-between"
              >
                <div>
                  <span className="text-indigo-400 text-xs font-black font-mono block mb-1">
                    {item.zone}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1.5">{item.area}</h4>
                  <p className="text-[11px] text-indigo-200/90 font-medium mb-3">{item.feature}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 早朝リフレッシュ・シャワー＆身支度 */}
        <section className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🚿</span> 夜行バスの汗を流す！早朝シャワー＆リフレッシュ拠点
          </h2>
          <div className="space-y-4">
            {showerPoints.map((pt, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                      {pt.type}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">{pt.name}</h4>
                  </div>
                  <p className="text-xs text-slate-300">{pt.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天トラベルホテル紹介セクション */}
        <section className="space-y-6">
          <div className="border-b border-indigo-500/30 pb-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <span className="text-indigo-400">🏨</span>
                  東京駅・八重洲周辺の大浴場＆極上モーニングホテル
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  夜行バスの前後泊や朝食バイキングで最高のエネルギーチャージができる人気宿
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/40">
                楽天トラベル厳選
              </span>
            </div>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/60 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      {hotel.hotelImageUrl && (
                        <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                          <img
                            src={hotel.hotelImageUrl}
                            alt={hotel.hotelName}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            loading="lazy"
                          />
                          {hotel.reviewAverage && (
                            <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full text-indigo-400 text-xs font-black border border-indigo-500/30 flex items-center gap-1 shadow">
                              <span>★</span>
                              <span>{hotel.reviewAverage.toFixed(1)}</span>
                              {hotel.reviewCount && (
                                <span className="text-[10px] text-slate-400">({hotel.reviewCount})</span>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 text-xs text-indigo-400/90 mb-2 font-medium">
                          <span>📍</span>
                          <span>最寄り: {hotel.nearestStation || "東京駅"}</span>
                          {hotel.address1 && (
                            <span className="text-slate-400">
                              ({hotel.address1}
                              {hotel.address2 ? ` ${hotel.address2}` : ""})
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 leading-snug">
                          {hotel.hotelName}
                        </h3>

                        {hotel.hotelSpecial && (
                          <p className="text-xs text-slate-300 line-clamp-3 mb-3 leading-relaxed">
                            {hotel.hotelSpecial}
                          </p>
                        )}

                        {hotel.access && (
                          <p className="text-[11px] text-slate-400 line-clamp-2">
                            🚌 {hotel.access}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">参考最安料金（1名〜）</span>
                        <span className="text-base sm:text-lg font-black text-indigo-400">
                          {minCharge ? `¥${minCharge}〜` : "プラン確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-indigo-500/20 transition transform hover:-translate-y-0.5"
                      >
                        <span>空室・朝食付プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-900 rounded-2xl p-8 text-center text-slate-400">
              現在、東京駅エリアのおすすめ宿泊プランを読み込み中です。
            </div>
          )}
        </section>

        {/* 内部リンク回遊ブロック */}
        <section className="pt-8 border-t border-slate-800">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <h3 className="text-sm font-bold text-slate-300 mb-4">
              夜行バス・新幹線旅行のお役立ち関連記事
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/tokyo-osaka-bus-vs-shinkansen-guide"
                className="text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                【東京〜大阪】新幹線 vs 夜行バス 時間・料金・体力負担の徹底比較
              </Link>
              <span className="hidden sm:inline text-slate-600">|</span>
              <Link
                href="/night-highway-bus-packing-comfort-sleep-guide"
                className="text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                【夜行バス持ち物ガイド】首枕・耳栓・快眠グッズ厳選12選
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
