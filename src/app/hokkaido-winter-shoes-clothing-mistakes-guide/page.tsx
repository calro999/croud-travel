import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の北海道旅行 滑らない靴＆防寒着の失敗談】着膨れして室内で大汗！？氷道で転ばない完全防備マニュアル ｜ 日本全国・旅宿クラウド",
  description: "冬の北海道（札幌・小樽・旭川）で後悔しないための服装・靴選び！ツルツル氷道で滑らないスノーブーツの選び方、外氷点下×室内25度の温度差対策、スマホバッテリー急減対策、駅直結地下街ホテルまとめ。",
  keywords: [
    "北海道 冬 服装 失敗",
    "冬 北海道 靴 滑らない",
    "スノーブーツ 札幌",
    "北海道旅行 持ち物 冬",
    "北海道 室内 暑い 汗",
    "氷道 歩き方 コツ",
    "札幌駅直結 ホテル"
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
      return data["hokkaido-winter-shoes-clothing-mistakes-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-winter-shoes-clothing-mistakes-guide", e);
  }
  return [];
}

export default function HokkaidoWinterShoesClothingGuidePage() {
  const hotels = loadHotels();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 font-sans text-slate-800 space-y-12">
      {/* ヒーローヘッダー - Slate & Ice Blue / 凍結路面とブリザードの冷涼感 */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-slate-600 text-sky-200 text-xs font-bold px-3.5 py-1.5 rounded-full">
            <span>❄️</span> 極寒とブラックアイスバーンを生き抜く知恵
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-black tracking-tight leading-snug">
            【冬の北海道旅行 滑らない靴＆防寒着の失敗談】<br />
            着膨れして室内で大汗！？氷道で転ばない完全防備マニュアル
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl pt-2">
            外は氷点下マイナス5度、一歩建物に入ると暖房ガンガンで室温25度…！冬の北海道初心者が真っ先に陥る「足元ツルツル転倒事故」と「着込みすぎて汗冷え風邪」の二大トラップ。現地道民の知恵と旅行者の生々しい失敗談から導き出した、最強の防備術をお届けします。
          </p>
        </div>
      </section>

      {/* 2大トラップの警告グリッド */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-black text-lg mb-2">
            <span className="text-2xl">⛸</span> トラップ1：見えない氷「ブラックアイスバーン」
          </div>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            雪が降っていないからと油断した舗装路面。実は濡れているのではなく、アスファルトの上に薄い氷の膜が張った「ブラックアイスバーン」です。普通のスニーカーや革靴で乗った瞬間、スケートリンクのように足元をすくわれ後頭部を強打します。
          </p>
        </div>

        <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 font-black text-lg mb-2">
            <span className="text-2xl">🔥</span> トラップ2：外気温マイナス×室内＋25度の寒暖差
          </div>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            北海道の建物内や地下街、JR電車内は強力な暖房設備が効いており、Tシャツでも過ごせるほどの暖かさ。脱げない極暖ヒートテックを何重にも着込んでいると、室内に入った途端に滝のような汗をかき、再び外に出た瞬間に凍結して風邪を引きます。
          </p>
        </div>
      </div>

      {/* 失敗談セクション */}
      <section className="space-y-6">
        <div className="border-b-2 border-slate-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Real Regrets</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            冬の北海道で旅行者が後悔した「足元＆装備」の生々しい失敗例
          </h2>
        </div>

        <div className="space-y-4">
          {/* 失敗1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-8 border-l-slate-700">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-rose-600 font-black">×</span>
              某有名ブランドのムートンブーツで行ったら、雪解け水で中までグショグショに
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              暖かそうに見えるシープスキンのムートンブーツ。しかし撥水・防水加工がないものは、雪道を踏みしめた体温で雪が溶け、スポンジのように水分を吸い上げます。開始30分で靴下が濡れて氷のように冷たくなり、つま先の感覚が麻痺して歩行不能に。
            </p>
            <div className="bg-slate-100 p-3 rounded-xl text-xs text-slate-800 font-medium">
              ✅ 解決策：スノーブーツは必ず<strong>完全防水（または耐水圧の高い防寒ブーツ）</strong>を選ぶこと。ソールにはハイドロストッパーやガラス繊維配合の防滑ゴム底が必須です。
            </div>
          </div>

          {/* 失敗2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-8 border-l-slate-600">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-rose-600 font-black">×</span>
              厚手ニットの上に極厚ダウンを着て、デパ地下や地下歩行空間で脱げずに悶絶
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              札幌駅から大通・すすきのまで続く巨大な地下街「チ・カ・ホ」や商業施設はTシャツでも過ごせるほどの暖かさ。インナーに超極暖を着て厚手のセーターを重ねていると、ダウンを脱いでも汗が止まらなくなります。
            </p>
            <div className="bg-slate-100 p-3 rounded-xl text-xs text-slate-800 font-medium">
              ✅ 解決策：トップスは<strong>「薄手の長袖＋前開きカーディガン＋本格防風ダウン」</strong>のように前開きで素早く温度調整できるレイヤリングが正解。
            </div>
          </div>

          {/* 失敗3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-8 border-l-slate-500">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-rose-600 font-black">×</span>
              雪まつりや小樽運河の夜景撮影中、スマホのバッテリーが残量70%から一瞬で1%に
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              スマホのリチウムイオン電池は氷点下の環境で急激に電圧が降下し、シャットダウンする特性があります。写真を撮ろうとポケットから出して外気に晒していたら突如画面が真っ暗になり、電子チケットやマップが見られなくなるトラブルが続出。
            </p>
            <div className="bg-slate-100 p-3 rounded-xl text-xs text-slate-800 font-medium">
              ✅ 解決策：スマホは<strong>ダウンの内ポケット（体温で温まる場所）</strong>に入れ、スマホ専用の使い捨てカイロをケース背面に貼るか、大容量モバイルバッテリーを常時接続しておきましょう。
            </div>
          </div>
        </div>
      </section>

      {/* 滑らない歩き方＆靴選びマニュアル */}
      <section className="bg-slate-900 rounded-3xl p-6 md:p-10 text-white shadow-lg space-y-6">
        <div className="space-y-2">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Walking Technique</span>
          <h2 className="text-2xl md:text-3xl font-black">
            道民直伝！ツルツル氷道で転ばない「ペンギン歩き」4原則
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-1.5">
            <div className="text-xl font-bold text-cyan-300">01. 歩幅は小さく</div>
            <p className="text-xs text-slate-300">大股で歩くと重心が崩れます。すり足気味に、いつもの半分の歩幅でちょこちょこ進むこと。</p>
          </div>
          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-1.5">
            <div className="text-xl font-bold text-cyan-300">02. 足裏全体で着地</div>
            <p className="text-xs text-slate-300">かかとから着地すると100%滑ります。地面に対して足裏全体をフラットに垂直に下ろします。</p>
          </div>
          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-1.5">
            <div className="text-xl font-bold text-cyan-300">03. 両手をポケットに入れない</div>
            <p className="text-xs text-slate-300">転倒時に受け身が取れず大怪我に直結。必ず手袋をして、手は外に出してバランスを取りましょう。</p>
          </div>
          <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-1.5">
            <div className="text-xl font-bold text-cyan-300">04. 簡易スパイクを装着</div>
            <p className="text-xs text-slate-300">靴底につける着脱式スパイク（ゴム製滑り止め）は、新千歳空港や札幌駅の売店で約1,000円〜1,500円で即買えます。</p>
          </div>
        </div>
      </section>

      {/* 持ち物チェックリスト */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-md space-y-6">
        <div className="text-center space-y-2">
          <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full">Winter Packing List</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            冬の北海道 持ち物完全チェックリスト
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            マイナス10度でも快適に観光するための厳選装備。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
              <span>🧳</span> 必須ウェア・防寒ギア
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>防水スノーブーツ：</strong> ガラス繊維配合防滑ソールまたは現地装着スパイク</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>防風ロングダウン（フード付き）：</strong> 吹雪時に耳と頭を守るフードは絶対</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>スマホ対応厚手手袋：</strong> 素手を外に出すと数十秒で凍えて痛くなります</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>耳あて付きニット帽 or イヤーマフ：</strong> 耳の凍傷・冷え頭痛防止</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>ネックウォーマー：</strong> マフラーより解けず隙間風を防げる</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
              <span>🔋</span> 現地で救われる実用ガジェット＆消耗品
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>大容量モバイルバッテリー（10000mAh以上）：</strong> 極寒バッテリー落ち対策</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>貼るカイロ（靴用＆体用）：</strong> 足裏つま先用カイロは冬散策の生命線</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>折りたたみ靴用防水スプレー：</strong> 出発前と滞在中に吹きかけて防水性キープ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>高保湿リップクリーム＆ハンドクリーム：</strong> 強烈な乾燥対策</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-800 font-bold">☑</span>
                <span><strong>ジッパー付きビニール袋：</strong> 濡れた手袋や折りたたみ傘の一時保管用</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 楽天トラベル宿泊特集セクション：冬は駅直結・地下街直結が最強 */}
      <section className="space-y-6">
        <div className="bg-gradient-to-r from-sky-800 to-slate-800 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Winter Stay Strategy
            </span>
            <h3 className="text-xl md:text-2xl font-black">
              冬の北海道は「駅直結・地下街直結ホテル」を選ぶのが勝利の鉄則！
            </h3>
            <p className="text-slate-300 text-xs md:text-sm">
              雪道を重いスーツケースを引いて歩くのは過酷そのもの。駅直結ホテルなら外気に触れずチェックインできます。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2F50coupon%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 hover:bg-slate-100 font-black px-6 py-3.5 rounded-full text-sm shadow-md transition-all shrink-0 text-center"
          >
            楽天トラベル限定クーポンを見る →
          </a>
        </div>

        <div className="border-b-2 border-slate-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Curated Accommodations</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            駅直結＆冬の滞在が快適な北海道おすすめホテル
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-1">
            雪道知らずのアクセスと極上サービスを誇る人気宿泊施設をピックアップ。
          </p>
        </div>

        <div className="grid gap-6">
          {hotels.slice(0, 4).map((hotel) => (
            <div
              key={hotel.hotelNo}
              className="bg-white rounded-3xl p-5 md:p-6 border border-slate-200 hover:border-slate-500 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              {hotel.hotelImageUrl && (
                <div className="w-full md:w-56 h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 space-y-3 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  {hotel.reviewAverage && (
                    <span className="bg-slate-100 text-slate-900 text-xs font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                      ★ {hotel.reviewAverage.toFixed(2)}
                      {hotel.reviewCount && <span className="font-normal text-slate-600">({hotel.reviewCount}件)</span>}
                    </span>
                  )}
                  {hotel.nearestStation && (
                    <span className="bg-sky-50 text-sky-800 text-xs px-2.5 py-1 rounded-full">
                      最寄: {hotel.nearestStation}
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                  {hotel.hotelName}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 line-clamp-2">
                  {hotel.hotelSpecial || "冬の北海道観光に最高のアクセスと快適な客室を備えた宿泊施設です。"}
                </p>

                {hotel.access && (
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-700">アクセス：</span>{hotel.access}
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <div>
                    {hotel.hotelMinCharge ? (
                      <div className="text-xs text-slate-500">
                        最安目安：<span className="text-lg font-black text-slate-900">{hotel.hotelMinCharge.toLocaleString()}円〜</span> /人
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400">プラン詳細はリンク先で確認</div>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow transition-colors"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンクカード */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-slate-900">北海道旅行の関連記事もあわせてチェック</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <Link
            href="/hokkaido-travel-budget-plan"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-500 hover:shadow-sm transition group"
          >
            <div className="text-slate-600 text-xs font-bold mb-1">旅行費用シミュレーション</div>
            <div className="font-bold text-slate-800 group-hover:text-slate-900">
              北海道旅行 2泊3日・3泊4日いくらかかる？予算完全ガイド
            </div>
            <p className="text-xs text-slate-500 mt-1">航空券・レンタカー・ホテル・グルメの費用内訳</p>
          </Link>

          <Link
            href="/hokkaido-family-trip-zoo-nature-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-500 hover:shadow-sm transition group"
          >
            <div className="text-slate-600 text-xs font-bold mb-1">モデルコース＆観光</div>
            <div className="font-bold text-slate-800 group-hover:text-slate-900">
              旭山動物園＆美瑛・富良野 大自然満喫ファミリー旅ガイド
            </div>
            <p className="text-xs text-slate-500 mt-1">ペンギンの雪中散歩や絶景スポットの見どころ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
