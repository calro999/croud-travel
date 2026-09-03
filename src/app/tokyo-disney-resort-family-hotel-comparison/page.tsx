import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【子連れディズニー後泊ホテル比較】舞浜・新浦安・葛西のコスパ宿＆二段ベッド・洗い場付きお風呂完備 ｜ 日本全国・旅宿クラウド",
  description: "子連れディズニー旅行の宿泊先を徹底比較！舞浜駅直結オフィシャルホテル vs 無料シャトルバス付き新浦安パートナーホテル vs コスパ抜群の葛西エリア。洗い場付きバスルーム、2段ベッドルーム、添い寝無料条件を全比較。",
  keywords: [
    "子連れディズニー ホテル",
    "ディズニー 後泊 子連れ",
    "舞浜 ホテル 洗い場付きお風呂",
    "新浦安 ファミリーホテル 2段ベッド",
    "ディズニー 添い寝無料",
    "楽天トラベル ディズニー"
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
      return data["tokyo-disney-resort-family-hotel-comparison"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-disney-resort-family-hotel-comparison", e);
  }
  return [];
}

export default function DisneyFamilyHotelComparisonPage() {
  const hotels = loadHotels();

  // エリア別比較マトリクス
  const areaComparison = [
    {
      area: "① 舞浜オフィシャル・ベイエリア",
      distance: "リゾートラインまたは無料バスで約5〜10分",
      priceRange: "1室 25,000円〜60,000円",
      bathFeature: "多くの客室で洗い場付きセパレート完備",
      merit: "閉園まで遊んでも数分でベッドへ。ベビーカーのまま部屋までスムーズ。",
      demerit: "週末や繁忙期は宿泊費が高騰しやすい。パーク内ショップの混雑回避は要工夫。",
      badge: "疲労度ゼロ・即チェックイン",
      color: "border-indigo-500 bg-indigo-50/50"
    },
    {
      area: "② 新浦安・東野エリア（パートナー・周辺）",
      distance: "専用シャトルバスで約10〜15分（直行便多数）",
      priceRange: "1室 12,000円〜28,000円",
      bathFeature: "ファミリー特化で琉球畳や洗い場付き風呂が標準仕様",
      merit: "二段ベッドや大型ファミリールームが充実。深夜の夜鳴き茶漬けや無料ドリンクも。",
      demerit: "閉園直後の無料シャトルバス待機列ができることがある（ベビーカー畳む必要あり）。",
      badge: "圧倒的コスパ・設備充実",
      color: "border-indigo-400 bg-white"
    },
    {
      area: "③ 葛西・西葛西エリア（京葉線・東西線）",
      distance: "京葉線で舞浜から1〜2駅（約5分）またはバス直行",
      priceRange: "1室 8,000円〜18,000円",
      bathFeature: "ユニットバス中心（大浴場付きホテルあり）",
      demerit: "電車移動の混雑時間帯はベビーカーの取り回しに注意が必要。",
      merit: "駅周辺にコンビニ・ドラッグストア・ファミレスが多く、夜食や離乳食調達が最強に楽。",
      badge: "節約＆夜食調達◎",
      color: "border-slate-300 bg-slate-50/60"
    }
  ];

  // 子連れチェックリスト（パパママ目線）
  const familyCheckpoints = [
    {
      title: "お風呂は「洗い場付き（セパレート）」か？",
      desc: "パークで丸一日歩き回った子どもをユニットバスで洗うのは至難の業。洗い場があれば、自宅と同じようにパパママが座って頭や体を洗ってあげられ、湯船で温まれます。",
      icon: "🛁"
    },
    {
      title: "ベッドの「壁付け」または「ベッドガード」貸出はあるか？",
      desc: "寝相が激しい幼児との宿泊で一番怖いのがベッドからの転落。ハリウッドツイン（2台のベッドを隙間なく密着）や壁寄せ配置が可能か、事前リクエストできる宿を選びましょう。",
      icon: "🛏️"
    },
    {
      title: "靴を脱いで上がる客室（フローリング・畳）か？",
      desc: "ハイハイ期の赤ちゃんや靴を脱ぎたがるキッズがいる場合、カーペット敷きの土足客室は衛生面が気になります。玄関で靴を脱ぐスタイルなら床で伸び伸び遊べます。",
      icon: "👶"
    },
    {
      title: "翌朝のチェックアウト時間と手荷物預かり",
      desc: "前日閉園まで遊んだ翌朝は、子どもがなかなか起きられません。チェックアウトが11:00以降のホテルや、東京駅・舞浜駅ウェルカムセンターでの荷物預かり連携が命綱です。",
      icon: "⏰"
    }
  ];

  // パパママの体験型スケジュール（後泊プラン）
  const itinerary = [
    {
      time: "20:45",
      title: "パーク退園・ナイト花火を見届けて移動開始",
      detail: "エレクトロニカルパレードや花火が終わったら速やかに退園ゲートへ。ベビーカーで寝てしまった子どもを抱っこ紐へスライドさせ、バス乗り場またはリゾートラインへ向かいます。"
    },
    {
      time: "21:15",
      title: "ホテル到着・スムーズにチェックイン＆足用シート貼付",
      detail: "ホテル直通シャトルや駅近ホテルなら移動ストレス最小。フロントで子供用アメニティ（パジャマ・スリッパ・歯ブラシ）を受け取り、客室へ。"
    },
    {
      time: "21:40",
      title: "洗い場付きお風呂で全身さっぱり＆夜食タイム",
      detail: "広い洗い場付きバスタブで入浴。大浴場があるホテルならパパ・ママ交代でサウナや露天風呂に浸かってパーク2万歩の筋肉痛をリセット。夜鳴き茶漬けサービスを堪能。"
    },
    {
      time: "08:30",
      title: "翌朝はゆっくり起床＆キッズバイキング朝食",
      detail: "前泊と違って早朝の開園待ちダッシュがないのが後泊の醍醐味！子供が好きなパンケーキやフルーツ豊富な朝食ビュッフェを心ゆくまで楽しみ、11時のレイトチェックアウトで帰路へ。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-slate-800">
      {/* ヒーローセクション（Indigo Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white p-8 md:p-14 shadow-2xl border border-indigo-700/50">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-12 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-indigo-500/40 text-indigo-100 border border-indigo-300/40 px-3.5 py-1 rounded-full uppercase shadow-sm">
              FAMILY RESORT GUIDE
            </span>
            <span className="text-xs font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow font-semibold">
              パパママ目線・後泊徹底比較
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【子連れディズニー後泊ホテル比較】<br />
            <span className="text-indigo-200">舞浜・新浦安・葛西のコスパ宿＆二段ベッド・洗い場付きお風呂完備</span>
          </h1>

          <p className="text-sm md:text-base text-indigo-100/90 leading-relaxed font-normal pt-1">
            夢の国で1日中遊び倒した後の帰り道、寝てしまった子どもを抱っこして満員電車に乗るのはパパママにとって最大の修羅場…。「パーク閉園後にそのまま泊まる“後泊”」なら、夜のパレードや花火を最後まで見届けても数分でお風呂とベッドに直行できます！
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-indigo-200">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">✓</span> 洗い場付きお風呂確約
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">✓</span> 添い寝無料＆ベッド壁寄せ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">✓</span> 無料シャトルバス直行
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル公式 ファミリー応援クーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 目次・クイックナビゲーション */}
      <nav className="bg-indigo-50/70 border border-indigo-200/80 rounded-2xl p-6 shadow-sm">
        <h2 className="text-base font-black text-indigo-950 mb-3 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
          本記事のポイント・目次
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm text-indigo-900">
          <li className="flex items-center gap-2">
            <span className="text-indigo-500 font-bold">01.</span>
            <a href="#area-matrix" className="hover:underline hover:text-indigo-600">舞浜・新浦安・葛西 3大エリア特徴比較</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500 font-bold">02.</span>
            <a href="#checkpoints" className="hover:underline hover:text-indigo-600">失敗しない子連れホテルの4大チェック基準</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500 font-bold">03.</span>
            <a href="#hotels" className="hover:underline hover:text-indigo-600">厳選おすすめホテル詳細＆プラン一覧</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500 font-bold">04.</span>
            <a href="#schedule" className="hover:underline hover:text-indigo-600">閉園後の理想の後泊スケジュール</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500 font-bold">05.</span>
            <a href="#transit-link" className="hover:underline hover:text-indigo-600">新幹線・夜行バス交通ガイド連携</a>
          </li>
        </ul>
      </nav>

      {/* セクション1: 3大エリア比較表 */}
      <section id="area-matrix" className="space-y-6">
        <div className="border-l-4 border-indigo-600 pl-4">
          <h2 className="text-2xl font-black text-slate-900">
            舞浜・新浦安・葛西の宿泊エリア比較
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            予算・子どもの月齢・翌日の移動プランに合わせて最適なエリアをチョイスしましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {areaComparison.map((item, idx) => (
            <div key={idx} className={`rounded-2xl border-2 p-5 shadow-sm space-y-3 flex flex-col justify-between ${item.color}`}>
              <div>
                <span className="inline-block text-[11px] font-black px-2.5 py-0.5 rounded-full bg-indigo-900 text-white mb-2">
                  {item.badge}
                </span>
                <h3 className="text-lg font-black text-slate-900">{item.area}</h3>
                
                <dl className="mt-3 space-y-2 text-xs">
                  <div className="bg-white/80 p-2 rounded-lg border border-indigo-100">
                    <dt className="text-indigo-800 font-bold">パークからの所要時間</dt>
                    <dd className="text-slate-800 font-medium">{item.distance}</dd>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg border border-indigo-100">
                    <dt className="text-indigo-800 font-bold">1泊1室の相場目安</dt>
                    <dd className="text-slate-900 font-bold">{item.priceRange}</dd>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg border border-indigo-100">
                    <dt className="text-indigo-800 font-bold">お風呂の仕様</dt>
                    <dd className="text-slate-700">{item.bathFeature}</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-2 border-t border-indigo-100 text-xs space-y-1.5">
                <p className="text-emerald-700">
                  <strong className="font-bold">◎ メリット：</strong>{item.merit}
                </p>
                <p className="text-amber-800">
                  <strong className="font-bold">▲ 注意点：</strong>{item.demerit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* セクション2: 失敗しない子連れチェックリスト */}
      <section id="checkpoints" className="space-y-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8">
        <div className="border-l-4 border-indigo-600 pl-4">
          <h2 className="text-xl md:text-2xl font-black text-slate-900">
            乳幼児・幼児連れパパママが絶対にチェックすべき4大ポイント
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            「大人の快適さ」と「赤ちゃんの安全性」は別物！予約確定前にここだけは確認してください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {familyCheckpoints.map((cp, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 bg-indigo-50 rounded-xl">{cp.icon}</span>
                <h3 className="font-black text-slate-900 text-base">{cp.title}</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-1">
                {cp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* セクション3: 厳選ホテルリスト (all_seasonal_rakuten_hotels.json連携) */}
      <section id="hotels" className="space-y-8">
        <div className="border-l-4 border-indigo-600 pl-4">
          <span className="text-xs font-black text-indigo-600 tracking-wider uppercase">RECOMMENDED HOTELS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            子連れディズニー後泊におすすめの厳選ホテル
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            洗い場付きバス・無料シャトル・ファミリー配慮が揃った楽天トラベル提携の人気宿。
          </p>
        </div>

        <div className="space-y-6">
          {hotels.map((hotel, index) => (
            <article
              key={hotel.hotelNo || index}
              className="bg-white border-2 border-indigo-100 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* ホテル写真 */}
              <div className="md:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-inner">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    No Image Available
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-indigo-900/90 text-white text-[11px] font-black px-3 py-1 rounded-full shadow">
                  PICK UP #{index + 1}
                </span>
              </div>

              {/* ホテル情報 */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {hotel.reviewAverage && (
                      <span className="text-xs font-black bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(2)}
                        {hotel.reviewCount && <span className="text-[10px] text-amber-700">({hotel.reviewCount}件)</span>}
                      </span>
                    )}
                    {hotel.nearestStation && (
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        最寄: {hotel.nearestStation}駅
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                    {hotel.hotelName}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-slate-700 bg-indigo-50/60 p-3.5 rounded-xl border border-indigo-100 leading-relaxed font-medium">
                  {hotel.hotelSpecial || "子連れファミリーに嬉しい充実のファシリティとおもてなし。パークへのアクセス良好な人気ホテルです。"}
                </p>

                {hotel.access && (
                  <p className="text-xs text-slate-500 flex items-start gap-1.5">
                    <span className="font-bold text-indigo-700 shrink-0">📍 アクセス:</span>
                    <span>{hotel.access}</span>
                  </p>
                )}

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-slate-500 block">参考最安料金（1名あたり）</span>
                    <span className="text-2xl font-black text-indigo-700">
                      {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "料金プラン参照"}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-1">消費税込み</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center group cursor-pointer"
                  >
                    <span>楽天トラベルで空室・プランを見る</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* セクション4: 閉園後の理想の後泊タイムスケジュール */}
      <section id="schedule" className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-6">
        <div className="border-l-4 border-amber-400 pl-4">
          <span className="text-xs font-black text-amber-400 tracking-wider uppercase">ITINERARY</span>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            【実践】閉園後の疲労を最小限にする後泊スケジュール
          </h2>
          <p className="text-sm text-indigo-200 mt-1">
            子どもがグズらず、パパママも翌日に疲れを残さない理想のタイムライン。
          </p>
        </div>

        <div className="space-y-4">
          {itinerary.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="shrink-0 bg-amber-400 text-slate-950 font-black text-xs md:text-sm px-3 py-1.5 rounded-xl">
                {step.time}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs md:text-sm text-indigo-200 leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・交通ガイドへの導線 */}
      <section id="transit-link" className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🚄</span>
          <div>
            <h3 className="text-lg md:text-xl font-black text-amber-950">
              遠方（関西・名古屋方面）からディズニー遠征をご検討の方へ
            </h3>
            <p className="text-xs md:text-sm text-amber-800">
              新幹線と夜行バスの料金・所要時間比較、浮いた交通費でホテルをグレードアップする裏技はこちら！
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/tokyo-osaka-bus-vs-shinkansen-guide"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-black text-sm px-6 py-3 rounded-xl shadow transition"
          >
            <span>【東京〜大阪】安く行く方法！新幹線 vs 夜行高速バス徹底比較を読む</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 楽天トラベル下部リマインドバナー */}
      <div className="pt-4">
        <SpecialCouponBanner variant="prominent" />
      </div>
    </div>
  );
}
