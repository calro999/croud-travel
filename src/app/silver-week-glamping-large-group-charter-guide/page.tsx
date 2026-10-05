import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/silver-week-glamping-large-group-charter-guide/" },
  title: "【大人数・10人以上OK グランピング】シルバーウィーク全棟貸切・サークル合宿・3世代家族旅行 ｜ 日本全国・旅宿クラウド",
  description:
    "10人〜20人以上のグループでも気兼ねなく楽しめる大型グランピング＆一棟貸しヴィラ特集！全棟貸切でプライベートBBQ、大人数用焚き火スペース、サークルや親族旅行に最適な施設厳選。",
  keywords: ["大人数", "10人以上OK", "グランピング", "シルバーウィーク全棟貸切", "サークル合宿", "3世代家族旅行", "温泉宿"],
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
      return data["silver-week-glamping-large-group-charter-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-large-group-charter-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingLargeGroupCharterPage() {
  const hotels = loadHotels();

  const faqList = [
    {
      q: "10人〜15人以上の大人数で予約する際、いつ頃までに押さえるべきですか？",
      a: "定員10名以上の大型棟や複数ドームの一括貸切プランは、各施設に1〜2棟しか枠がない希少タイプです。シルバーウィークなどの連休は3〜4ヶ月前（5月〜6月頃）からサークル合宿や親族の同窓会需要で埋まり始めます。8月以降はキャンセル待ちになることが多いため、日程が決まり次第、即座に空室を確保することが最優先です。",
    },
    {
      q: "1人あたりの料金コスパや、割り勘精算時のメリットは？",
      a: "大型一棟貸しヴィラや古民家グランピングは「1棟貸切定額（または人数増で1人あたり単価が大幅に下がる設定）」が多く、10名以上で利用すると1人あたり1万円台〜2万円前後でハイグレードな施設に泊まれるケースが多々あります。食材やドリンクを持ち寄り形式にすることで、高級ホテルに個別に泊まるよりトータル費用を約30〜40%抑制可能です。",
    },
    {
      q: "夜遅くまでの宴会やBBQの音出し、消音ルールはどうなっていますか？",
      a: "敷地全体を貸し切る完全プライベート施設であっても、自然豊かな別荘地や集落内にある場合は近隣配慮のため「屋外でのBBQ・音楽再生・歓談は21:00〜22:00まで」とサイレントタイムが定められている施設が標準です。夜遅くまで語り合いたい場合は、防音性の高いリビングルームや屋内ダイニングスペースを備えた一棟貸しヴィラを選ぶと安心です。",
    },
    {
      q: "車複数台でのアクセス時、駐車スペースの確保はどうすればいいですか？",
      a: "10人以上のグループでは車3〜5台での分乗移動になることが多く、施設ごとの無料駐車場収容台数の確認が不可欠です。今回掲載の大型対応施設は敷地内に4台〜10台以上の駐車スペースを確保している施設が中心ですが、予約時の備考欄に来場予定の車両台数を事前に伝えておくと誘導がスムーズです。",
    },
  ];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【大人数・10人以上OK グランピング】シルバーウィーク全棟貸切・サークル合宿・3世代家族旅行 ｜ 日本全国・旅宿クラウド",
    "description": "10人〜20人以上のグループでも気兼ねなく楽しめる大型グランピング＆一棟貸しヴィラ特集！全棟貸切でプライベートBBQ、大人数用焚き火スペース、サークルや親族旅行に最適な施設厳選。",
    "url": "https://croud-travel.pages.dev/silver-week-glamping-large-group-charter-guide/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【大人数・10人以上OK グランピング】シルバーウィーク全棟貸切・サークル合宿・3世代家族旅行 ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/silver-week-glamping-large-group-charter-guide/" }
    ]
  };

  return (
    <div className="min-h-screen bg-indigo-50/30 text-slate-800 antialiased selection:bg-indigo-600 selection:text-white font-sans">
      {/* 構造化データ FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqList.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* ヒーローセクション（落ち着きと知性、夜空と連帯感を象徴するインディゴ＆ディープバイオレット） */}
      <header className="relative bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-indigo-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            10人〜20名規模 全棟貸切＆大型ヴィラ特集・2026秋
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【大人数・10人以上OK グランピング】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-violet-200">
              全棟貸切・サークル合宿・3世代家族
            </span>
            <br />
            大型BBQスペース＆一棟貸しヴィラ厳選
          </h1>
          <p className="text-indigo-100/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            サークル仲間や大学同期の同窓会、会社のチームビルディング、祖父母から孫まで揃う3世代ファミリー旅行。
            他のお客様に気兼ねなく笑い合える「全棟貸切」「大型一棟貸し古民家・ヴィラ」を徹底厳選。大人数用BBQグリルや巨大ファイヤーピット完備の極上宿をご紹介します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-indigo-300 text-xs font-semibold">収容人数</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">10名〜20名超</div>
              <div className="text-[11px] text-indigo-200/80 mt-0.5">大型ヴィラ＆古民家</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-indigo-300 text-xs font-semibold">プライベート空間</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">完全貸切可能</div>
              <div className="text-[11px] text-indigo-200/80 mt-0.5">他客に気兼ねゼロ</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-indigo-300 text-xs font-semibold">コスパメリット</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">頭割りで割安</div>
              <div className="text-[11px] text-indigo-200/80 mt-0.5">1人あたり1万円台〜</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-indigo-300 text-xs font-semibold">共有設備</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">大型焚き火炉</div>
              <div className="text-[11px] text-indigo-200/80 mt-0.5">サウナ＆露天風呂</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 楽天トラベル クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="大人数・グループ旅行モデルコース" className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
            <span className="text-xl">🚌</span>
            <span>大人数ドライブや連休グループ旅行と合わせて読みたい観光ガイド：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/hakone-freepass-break-even-model-route"
              className="inline-flex items-center text-xs font-bold text-indigo-900 bg-white border border-indigo-300 hover:bg-indigo-600 hover:text-white px-3.5 py-1.5 rounded-xl shadow-xs transition"
            >
              箱根フリーパス元取れ周遊モデルルート →
            </Link>
            <Link
              href="/fuji-five-lakes-car-free-bus-guide"
              className="inline-flex items-center text-xs font-bold text-indigo-900 bg-white border border-indigo-300 hover:bg-indigo-600 hover:text-white px-3.5 py-1.5 rounded-xl shadow-xs transition"
            >
              富士五湖・山中湖 観光バス周遊ガイド →
            </Link>
          </div>
        </nav>

        {/* セクション1: 大人数グランピング失敗しない施設選びの3原則 */}
        <section aria-labelledby="group-strategy-heading" className="space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 id="group-strategy-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              サークル合宿・3世代旅行で失敗しない施設選び「3大原則」
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              人数が多いからこそ発生する「トイレ待ち」「寝室のプライバシー」「駐車スペース」の課題をクリアする方法。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-indigo-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-lg mb-3">
                  ① 水回り（バス・トイレ）の複数設置
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">朝の身支度ストレスを完全ゼロに</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  10人以上の滞在で最も混雑するのが起床後のトイレと洗面台。トイレが2箇所以上ある一棟貸しヴィラや、複数ドームを分宿して敷地を共有するスタイルを選ぶのが快適ステイの鉄則です。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-100 text-[11px] font-bold text-indigo-700">
                女子グループや3世代親族旅行で特に重視
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-indigo-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-violet-100 text-violet-800 text-xs font-bold rounded-lg mb-3">
                  ② 全天候型大型BBQテラス＆リビング
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">全員が一堂に会せるワイド設計</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  部屋が分かれていても、夕食時は全員がひとつの長テーブルを囲める大型ルーフ付きウッドデッキや、20畳以上の広々リビングがある施設なら、天候急変時でも宴会が中断しません。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-100 text-[11px] font-bold text-violet-700">
                雨天でもバーベキューを諦めない屋根付き
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-indigo-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg mb-3">
                  ③ 複数台の専用駐車場スペース
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">車3〜5台でもスムーズに横付け</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  各自の出発地から分乗して現地集合するケースが多いため、敷地内に3台以上の無料駐車区画があるか、あるいは施設すぐ近くに第2駐車場が確保されているかを事前確認しましょう。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-100 text-[11px] font-bold text-blue-700">
                重い食材やドリンクの荷降ろしも劇的に楽
              </div>
            </div>
          </div>
        </section>

        {/* セクション2: 厳選宿泊施設 */}
        <section aria-labelledby="hotels-heading" className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【10名以上OK】シルバーウィークにおすすめの大型ヴィラ＆グランピング
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              最大13名収容の古民家貸切から、富士山パノラマヴィラ、白樺林の高原コテージまで。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-3xl border border-indigo-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-bold">
                      大人数対応グランピング＆貸切ヴィラ
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow">
                      <span className="text-amber-400 font-bold">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-slate-300 text-[10px]">({hotel.reviewCount}件)</span>
                      )}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-indigo-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow">
                    大人数・貸切OK
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-indigo-800 mb-1">
                      <span>📍</span>
                      <span>{hotel.address1} {hotel.address2} {hotel.nearestStation ? `（最寄り: ${hotel.nearestStation}駅）` : ""}</span>
                    </div>
                    <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-indigo-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {hotel.hotelSpecial || "大人数でのグループステイに最適な一棟貸切リゾート。広いウッドデッキでの大型BBQや焚き火、プライベートな時間をお楽しみいただけます。"}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block font-medium">最安参考料金（1名）</span>
                      <span className="text-indigo-700 font-black text-xl">
                        {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルで空室確認 ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3: 大人数BBQ幹事の成功マニュアル */}
        <section className="bg-gradient-to-br from-slate-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-indigo-800/40 space-y-6">
          <div>
            <span className="text-indigo-400 font-black text-xs uppercase tracking-wider">Large Group Organizer Guide</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              幹事必見！10名以上のBBQ＆買い出しを成功させる3箇条
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-indigo-300 text-sm mb-1.5">① 肉・主食は「施設手ぶらセット」＋追加調達</h4>
              <p className="text-slate-400 leading-relaxed">
                全員分の食材をゼロからスーパーで揃えるとクーラーボックスが何箱も必要になり管理が煩雑に。ベースは施設の豪華BBQコースを頼み、現地の道の駅で追加のフルーツや地酒を買い足すハイブリッド方式が最もスマートです。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-indigo-300 text-sm mb-1.5">② 役割分担（火起こし・調理・買い出し）の事前決定</h4>
              <p className="text-slate-400 leading-relaxed">
                到着後にバタつかないよう、炭の火起こし担当、食材下ごしらえ担当、ドリンク管理担当をあらかじめ決めておくと、チェックインから乾杯まで30分以内でスムーズに進行できます。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-indigo-300 text-sm mb-1.5">③ ゴミ分別と消火の施設ルール事前周知</h4>
              <p className="text-slate-400 leading-relaxed">
                大人数利用で施設側とトラブルになりやすいのが「ゴミの分別不備」と「焚き火の放置」です。チェックイン時に配布される分別ガイドをグループチャットで共有し、全員でマナーを守ることで快適な滞在が完成します。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4: FAQ（構造化データ連動） */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-3xl border border-indigo-200 p-6 sm:p-8">
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-indigo-600">❓</span> 大人数グランピングのよくある質問
          </h2>
          <div className="divide-y divide-indigo-100">
            {faqList.map((faq, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                  <span className="text-indigo-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      
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
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kumamoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                熊本県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagoshima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鹿児島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/aomori"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                青森県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="silver-week-glamping-large-group-charter-guide" />
</div>
  );
}
