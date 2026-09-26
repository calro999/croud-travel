import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【札幌 すすきの夜パフェ＆深夜ラーメンおすすめ店】深夜2時まで営業！飲んだ後のシメ文化完全攻略",
  description:
    "札幌独自の夜文化「シメパフェ」の名店を厳選！旬の北海道フルーツとアイスが美しいアートパフェ、深夜行列のできる味噌ラーメン、すすきのの繁華街から歩いて帰れる大浴場＆サウナ付きホテル。",
  keywords: [
    "札幌 夜パフェ シメパフェ",
    "すすきの 深夜ラーメン",
    "札幌 深夜 パフェ 2時",
    "パフェテリア パル すすきの",
    "すすきの 朝まで 居酒屋",
    "札幌 シメパフェ おすすめ",
    "すすきの ホテル 大浴場 サウナ"
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
      // 当該キーからホテルを取得し、もし札幌以外のホテルが混ざっている場合は北海道・札幌のホテルに限定
      const currentList: Hotel[] = data["sapporo-shime-parfait-late-night-guide"]?.hotels || [];
      const sapporoFiltered = currentList.filter(
        (h) => h.address1 === "北海道" || h.nearestStation?.includes("すすきの") || h.nearestStation?.includes("札幌")
      );

      // 3軒以上のリッチな表示にするため、別キーの札幌厳選ホテルをフォールバック補完
      if (sapporoFiltered.length < 3 && data["hokkaido-travel-budget-plan"]?.hotels) {
        for (const h of data["hokkaido-travel-budget-plan"].hotels) {
          if (
            (h.address1 === "北海道" && (h.address2?.includes("札幌") || h.nearestStation?.includes("すすきの"))) &&
            !sapporoFiltered.some((item) => item.hotelNo === h.hotelNo)
          ) {
            sapporoFiltered.push(h);
            if (sapporoFiltered.length >= 3) break;
          }
        }
      }
      return sapporoFiltered;
    }
  } catch (e) {
    console.error("Failed to load hotels for sapporo-shime-parfait-late-night-guide", e);
  }
  return [];
}

export default function SapporoShimeParfaitLateNightGuidePage() {
  const hotels = loadHotels();

  // シメパフェの名店厳選
  const parfaitShops = [
    {
      num: "PARFAIT 01",
      name: "夜パフェ専門店 パフェテリア パル（Parfaiteria PaL）",
      genre: "シメパフェ文化の発祥牽引店・芸術的アセンブル",
      hours: "18:00〜翌2:00（L.O. 翌1:30）",
      access: "地下鉄南北線「すすきの駅」2番出口から徒歩約3分（第3グリーンビル6F）",
      price: "¥1,800〜¥2,600（ドリンクセット推奨）",
      description:
        "札幌の夜パフェブームを全国区に押し上げた立役者。旬の和洋果実、ほろ苦いソルベ、スパイスジュレ、サクサクのメレンゲなどが緻密に計算されたグラスは、もはや食べる現代アート。甘さ控えめで酸味とビター感のバランスが極上で、ビールやウイスキーを飲んだ後のシメに信じられないほどスッキリと馴染みます。",
      menu: "『ピスタチオとチョコレートのパフェ』『季節限定の洋梨とゴルゴンゾーラ』",
      hack: "金・土の22時以降はエレベーター前まで行列必至。19時前後の1次会終わりのタイミング、または深夜1時前の来店が穴場。"
    },
    {
      num: "PARFAIT 02",
      name: "パフェ、珈琲、酒、佐藤（さとう）",
      genre: "和と洋の調和・自家製アイスクリームの極み",
      hours: "火〜木 18:00〜24:00 / 金 18:00〜翌2:00 / 土 13:00〜翌2:00 / 日 13:00〜24:00",
      access: "地下鉄「豊水すすきの駅」1番出口徒歩2分 / すすきの駅徒歩5分（狸小路1丁目路地裏）",
      price: "¥1,600〜¥2,400",
      description:
        "路地裏の引き戸を開けると現れる、和モダンで洗練された大人の隠れ家空間。ソフトクリームからソルベ、ムース、焼き菓子に至るまですべて自家製にこだわり抜く姿勢が熱烈なファンを生んでいます。ネルドリップ珈琲や日本酒とのペアリングも提案してくれます。",
      menu: "『塩キャラメルとピスタチオ』『ショコラ〜カシスとヘーゼルナッツ〜』",
      hack: "店舗向かいに姉妹店「佐藤堂」もあり。混雑時は整理券LINE呼び出しシステムを活用して狸小路を散策するのが吉。"
    },
    {
      num: "PARFAIT 03",
      name: "イニシャル サッポロ（INITIAL Sapporo）",
      genre: "厳選北海道産フルーツ×カクテルペアリング",
      hours: "15:00〜24:00（金土祝前日は翌1:00まで営業）",
      access: "地下鉄「すすきの駅」徒歩3分（狸小路5丁目沿いビル2F）",
      price: "¥1,700〜¥2,500",
      description:
        "北海道産の新鮮な苺やメロン、柑橘類を惜しみなくグラスの縁まで美しく飾り付けたデザイン性の高いパフェが評判。アルコール入りの大人のジュレやリキュールを使用したグラニテなど、お酒とのマリアージュを追求したメニューが揃っています。",
      menu: "『贅沢いちごのパルフェ』『ショコラ・バナーヌ』",
      hack: "広々とした店内はカウンター席とテーブル席があり、落ち着いた照明でデートや女子旅のシメに最適。"
    }
  ];

  // 深夜ラーメン＆シメグルメ
  const ramenSpots = [
    {
      num: "RAMEN 01",
      name: "麺屋 雪風（ゆきかぜ） すすきの本店",
      genre: "濃厚白湯味噌×炙りチャーシュー",
      hours: "18:00〜翌3:00（スープ完売次第終了）",
      access: "地下鉄南北線「すすきの駅」徒歩約4分（南7条西4丁目）",
      price: "¥950〜¥1,200",
      description:
        "すすきのの夜を締めくくるラーメンとして圧倒的人気を誇る名店。豚骨・鶏白湯・煮干しをじっくり煮込み、特製味噌ダレと合わせたスープはクリーミーで濃厚ながらしつこさが一切ありません。縮れ中太麺にスープが絡みつき、冷え切った身体に染み渡ります。"
    },
    {
      num: "RAMEN 02",
      name: "元祖さっぽろラーメン横丁（ひぐま / 白樺山荘など）",
      genre: "伝統の札幌味噌ラーメン集合横丁",
      hours: "各店舗により異なる（多くの店舗が翌2:00〜3:00まで営業）",
      access: "すすきの駅徒歩3分（南5条西3丁目 第4グリーンビル裏）",
      price: "¥900〜¥1,300",
      description:
        "昭和の風情を残す細い路地に約17軒のラーメン専門店が軒を連ねる聖地。ニンニクがガツンと効いた味噌やバターコーンラーメンなど、深夜でも湯気と威勢のいい掛け声に包まれています。"
    },
    {
      num: "SOBA 03",
      name: "いらの蕎麦・深夜の立ち食いそば / 24時間食堂",
      genre: "胃にやさしい出汁とハイボールの最終終着点",
      hours: "深夜〜早朝営業",
      access: "すすきの中心街各所",
      price: "¥600〜¥1,000",
      description:
        "パフェやラーメンのさらに後、午前3時を回って胃袋を優しく労わりたいときの最終手段。熱々の鰹出汁と甘辛い油揚げが、北国の夜遊びのラストを温かく包み込みます。"
    }
  ];

  // すすきの夜遊びサバイバル＆朝風呂ハック
  const lateNightHacks = [
    {
      step: "21:30",
      action: "ジンギスカン or 海鮮居酒屋で1次会完了",
      detail: "すすきのの夜はここからが本番。アルコールが適度に回った状態でパフェの整理券状況をチェック。"
    },
    {
      step: "22:15",
      action: "夜パフェ専門店で大人のシメスイーツ",
      detail: "甘酸っぱい果実ソルベとカクテルで口内をリセット。深夜の背徳感と至高のビジュアルに浸る時間。"
    },
    {
      step: "24:00",
      action: "夜風に吹かれながら深夜ラーメンへハシゴ",
      detail: "雪風やラーメン横丁で熱々の濃厚味噌スープをすする。寒冷地ならではの体温上昇を実感。"
    },
    {
      step: "01:30",
      action: "すすきの駅徒歩圏ホテルで大浴場＆サウナ直行",
      detail: "タクシー不要の徒歩圏ホテルへ。ヒノキ風呂やサウナで汗を流せば、翌朝の二日酔いもすっきり撃退！"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950 font-sans pb-24">
      {/* ヒーローセクション（ナイトティール＆オーロラ調） */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-950/70 via-slate-900 to-slate-950 pt-16 pb-20 border-b border-teal-500/20">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4 tracking-wide">
            <span className="animate-pulse">🍨</span> 北の歓楽街が育んだ唯一無二のナイトカルチャー
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5">
            【札幌 すすきの夜パフェ＆深夜ラーメンおすすめ店】
            <span className="block text-teal-400 mt-2 text-xl sm:text-3xl font-black">
              深夜2時まで営業！飲んだ後のシメ文化完全攻略
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            「飲んだ後のシメはお酒ではなくパフェ」。札幌で定着したシメパフェ文化は、
            旬の北海道ミルクやフルーツ、カクテルジュレを組み合わせた極上のアートスイーツ体験です。
            深夜行列が絶えない濃厚味噌ラーメンから、歩いて帰れる大浴場＆サウナ付きホテルまで、
            すすきのの夜を最高に楽しむための完全攻略ガイドをお届けします。
          </p>

          {/* クイックサマリータグ */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-200">
              🍨 パフェテリア パル / 佐藤
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-200">
              🍜 深夜3時まで営業の行列ラーメン「雪風」
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-200">
              🍸 バー感覚で楽しむお酒×パフェ
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-200">
              🧖 すすきの駅前サウナ付ホテル
            </span>
          </div>
        </div>
      </section>

      {/* コンテンツ本体 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 space-y-12">
        {/* キャンペーンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* イントロ：なぜ札幌で「シメパフェ」なのか？ */}
        <section className="bg-slate-900/90 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-xl shadow-teal-950/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm">
              ✨
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              なぜ札幌市民は飲んだ後に「夜パフェ」を食べるのか？
            </h2>
          </div>
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              酪農王国・北海道の濃厚で新鮮な生乳やアイスクリーム、冷涼な気候で育つベリー類。
              もともと上質な素材に恵まれていた札幌のバーテンダーやパティシエたちが、
              「お酒を飲んだ後の口内を爽やかにリセットできる、甘さ控えめでビターなパフェ」を開発したのがシメパフェの始まりです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-teal-900/50">
                <span className="text-teal-400 font-bold block mb-1">特徴 ①：甘さ控えめ＆ソルベ中心の構成</span>
                生クリームを過剰に使わず、柑橘ソルベや洋酒ジュレ、ハーブを多用。飲酒後でもスルスル完食できます。
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-teal-900/50">
                <span className="text-teal-400 font-bold block mb-1">特徴 ②：深夜2時・3時まで開いている専門店</span>
                居酒屋やジンギスカンの2次会・3次会として機能するよう、バー顔負けの酒類や照明設計がなされています。
              </div>
            </div>
          </div>
        </section>

        {/* メイン1：夜パフェ名店3選 */}
        <section className="space-y-6">
          <div className="border-b border-teal-500/30 pb-3">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
              <span className="text-teal-400 font-mono">PARFAIT</span>
              すすきのの夜を彩る！極上シメパフェ名店3選
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              深夜2時まで営業。視覚と味覚を刺激する大人の芸術パフェ
            </p>
          </div>

          <div className="space-y-6">
            {parfaitShops.map((shop, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 transition rounded-3xl p-6 sm:p-7 shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-teal-500 text-slate-950 font-mono font-black text-xs">
                      {shop.num}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-teal-900/60">
                      {shop.genre}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    <span className="text-teal-300 font-mono font-semibold">⏰ {shop.hours}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{shop.name}</h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {shop.description}
                </p>

                <div className="bg-slate-950/80 border border-teal-900/50 p-3.5 rounded-2xl space-y-2 mb-3 text-xs">
                  <div>
                    <span className="text-teal-400 font-bold">🍨 代表メニュー例:</span>{" "}
                    <span className="text-slate-300">{shop.menu}</span>
                  </div>
                  <div>
                    <span className="text-teal-400 font-bold">💡 並び回避ハック:</span>{" "}
                    <span className="text-slate-300">{shop.hack}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{shop.access}</span>
                  <span className="ml-auto font-mono text-teal-300">{shop.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* メイン2：深夜ラーメン＆温かいシメ */}
        <section className="space-y-6">
          <div className="border-b border-teal-500/30 pb-3">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
              <span className="text-teal-400 font-mono">RAMEN</span>
              深夜の身体を芯から温める！すすきの深夜麺3選
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              パフェとハシゴも可能！深夜2時・3時でも熱気の冷めない名店たち
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ramenSpots.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 p-5 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-teal-400 text-xs font-mono font-bold block mb-1">
                    {item.num}
                  </span>
                  <h4 className="text-base font-bold text-white mb-1.5">{item.name}</h4>
                  <span className="text-[11px] text-teal-300/90 font-medium block mb-3">
                    {item.genre}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <div>⏰ {item.hours}</div>
                  <div className="text-teal-300 font-mono mt-0.5">💰 {item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* すすきの夜遊びタイムライン */}
        <section className="bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 border border-teal-500/30 rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <span>🌙</span> 翌朝も爽快！「すすきの夜遊び〜サウナ就寝」モデルコース
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            深夜2時まで遊んでも翌日バテないためのベストルート
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {lateNightHacks.map((hack, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-teal-400 font-mono font-black text-sm block mb-1">
                    {hack.step}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-2">{hack.action}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{hack.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天トラベルホテル紹介セクション */}
        <section className="space-y-6">
          <div className="border-b border-teal-500/30 pb-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <span className="text-teal-400">🏨</span>
                  すすきの繁華街から歩いて帰れる！大浴場＆サウナ付きホテル
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  深夜のシメパフェ・ラーメン後も徒歩数分でベッドイン！朝食いくら食べ放題宿も
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/40">
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
                    className="bg-slate-900/90 border border-slate-800 hover:border-teal-500/60 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl"
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
                            <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full text-teal-400 text-xs font-black border border-teal-500/30 flex items-center gap-1 shadow">
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
                        <div className="flex items-center gap-2 text-xs text-teal-400/90 mb-2 font-medium">
                          <span>📍</span>
                          <span>最寄り: {hotel.nearestStation || "すすきの駅"}</span>
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
                            🚶 {hotel.access}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">参考最安料金（目安）</span>
                        <span className="text-base sm:text-lg font-black text-teal-400">
                          {minCharge ? `¥${minCharge}〜` : "プラン確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-teal-500/20 transition transform hover:-translate-y-0.5"
                      >
                        <span>空室・サウナ付プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-900 rounded-2xl p-8 text-center text-slate-400">
              現在、札幌・すすきのエリアのおすすめ宿泊プランを読み込み中です。
            </div>
          )}
        </section>

        {/* 内部リンク回遊ブロック */}
        <section className="pt-8 border-t border-slate-800">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <h3 className="text-sm font-bold text-slate-300 mb-4">
              あわせて読みたい北海道旅行ガイド
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/hokkaido-travel-budget-plan"
                className="text-xs sm:text-sm font-semibold text-teal-400 hover:text-teal-300 underline underline-offset-4"
              >
                【北海道旅行 費用】札幌・小樽2泊3日の総額予算シミュレーション
              </Link>
              <span className="hidden sm:inline text-slate-600">|</span>
              <Link
                href="/hokkaido-winter-shoes-clothing-mistakes-guide"
                className="text-xs sm:text-sm font-semibold text-teal-400 hover:text-teal-300 underline underline-offset-4"
              >
                【北海道の冬服装】転ばないスノーブーツ＆夜間防寒着の選び方
              </Link>
            </div>
          </div>
        </section>
      </div>
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/niigata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kochi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                高知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kyoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                京都府の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
