import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【手ぶらBBQグランピングおすすめ】準備・片付け不要！黒毛和牛ステーキ＆海鮮が豪華すぎる秋のごちそう泊 ｜ 日本全国・旅宿クラウド",
  description:
    "面倒な買い出し・火起こし・炭の後片付けは一切不要！シェフ監修の特選黒毛和牛サーロイン、オマール海老やアワビの海鮮グリル、地ビール飲み放題プラン付きの美食グランピング比較。女子旅や子連れに大人気。",
  keywords: [
    "手ぶらBBQ グランピング",
    "グランピング 食事付き おすすめ",
    "黒毛和牛 BBQ 宿泊",
    "女子旅 グランピング 手ぶら",
    "子連れ グランピング 夕食付き",
    "海鮮BBQ グランピング",
    "シルバーウィーク 美食グランピング"
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
      return data["silver-week-glamping-bbq-empty-handed-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-bbq-empty-handed-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingBbqEmptyHandedPage() {
  const hotels = loadHotels();

  // 手ぶらBBQが圧倒的に快適な理由（比較表用データ）
  const comparisonList = [
    {
      factor: "食材・飲み物の準備",
      traditional: "スーパーで大量買い出し、クーラーボックス・保冷剤の手配、下処理",
      emptyHanded: "地元精肉店・漁港直送の特選素材が冷蔵庫に下ごしらえ済みでスタンバイ",
    },
    {
      factor: "火起こし・調理器具",
      traditional: "炭・着火剤・うちわで30分以上の悪戦苦闘、火の粉で衣服汚れ",
      emptyHanded: "高性能ガスグリル（Weber等）のスイッチ1つで5分後に本格グリル開始",
    },
    {
      factor: "片付け・ゴミ処理",
      traditional: "油ギトギトの網・鉄板洗い、消火炭の処理、生ゴミの分別と持ち帰り",
      emptyHanded: "食器類は専用コンテナに入れるだけ、炭捨てや網の洗浄はスタッフにお任せ",
    },
    {
      factor: "天候への対応",
      traditional: "急な秋雨や風でタープが飛ばされBBQ中断・中止の危険",
      emptyHanded: "全天候型の冷暖房完備テラス・専用ガゼボで雨でも快適ディナー",
    },
  ];

  // 秋の特選グルメメニュー例
  const autumnGourmetMenu = [
    {
      badge: "肉料理",
      title: "ブランド黒毛和牛サーロイン＆骨付きバックリブ",
      desc: "厚切り200gオーバーのステーキを豪快に直火焼き。自家製トリュフ塩や特製タレで、噛むほどに溢れる肉汁を堪能。",
    },
    {
      badge: "海鮮料理",
      title: "アワビの踊り焼き＆殻付きホタテ・有頭海老のアヒージョ",
      desc: "近海で水揚げされた新鮮魚介をバゲットとともに。スキレットでグツグツ煮立つオリーブオイルとガーリックの香りが食欲を刺激。",
    },
    {
      badge: "秋の味覚",
      title: "旬の松茸・キノコ炊き込みご飯＆丸ごと焼き芋",
      desc: "メスティンや南部鉄器で炊き上げる出汁の染みたご飯。デザートには炭火の遠赤外線でねっとり甘く仕上げた安納芋を。",
    },
    {
      badge: "焚き火スイーツ",
      title: "本格スモア＆ベルギーチョコのホットフォンデュ",
      desc: "夕食後はテラスの専用ファイヤーピットへ。炙った大粒マシュマロとグラハムクラッカー、フルーツを絡めるナイトデザート。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "手ぶらBBQプランの場合、飲み物やおやつの持ち込みは可能ですか？",
      answer:
        "多くのグランピング施設で好きなアルコール・ソフトドリンク・お菓子の持ち込みが可能です。客室内に大型冷蔵庫が完備されていることがほとんどですが、持ち込み料（チャージ料）が発生する施設や持ち込み完全禁止のオールインクルーシブ施設もあるため、プラン詳細ページの「持ち込み規定」を事前に確認しておくと安心です。",
    },
    {
      question: "雨が降った場合、夕食のバーベキューはどうなりますか？",
      answer:
        "本記事で厳選したグランピング施設は、全室に屋根付きの専用テラスデッキやガゼボ（東屋）、または開閉式クリアカーテンを完備しています。雨天や強風時でも濡れずに快適な温度で手ぶらBBQをお楽しみいただけます。",
    },
    {
      question: "子ども用のキッズメニューやアレルギー対応はありますか？",
      answer:
        "ハンバーグやソーセージ、コーンバターなどのキッズBBQプレートを用意している施設が多数あります。食物アレルギーに関しても、宿泊日前の事前連絡により原材料の変更や個別プレート対応が可能な施設が多いため、予約時の備考欄や電話で事前相談することをおすすめします。",
    },
    {
      question: "調味料や食器、カトラリーは持参する必要がありますか？",
      answer:
        "お皿、グラス、フォーク、トング、包丁、ハサミのほか、塩・胡椒・オリーブオイル・オリジナルBBQソースなどの基本調味料はすべて施設側で用意されています。お好みの特殊スパイス（アウトドアスパイスほりにし等）があれば持ち込むとさらに楽しめます。",
    },
  ];

  // JSON-LD FAQPage 構造化データ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 px-4 sm:px-6">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ヒーローセクション（Amberパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-500/20">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              EMPTY-HANDED GOURMET BBQ 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-amber-200 bg-amber-900/60 border border-amber-400/40 px-3 py-1 rounded-full">
              準備・火起こし・片付けゼロの秋美食泊
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【手ぶらBBQグランピングおすすめ】準備・片付け不要！黒毛和牛ステーキ＆海鮮が豪華すぎる秋のごちそう泊
          </h1>

          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed font-medium">
            面倒な炭の火起こしや重いクーラーボックスの買い出し、ギトギト油の網洗いとはもうサヨナラ。地元特選黒毛和牛の極厚ステーキ、伊勢海老やアワビの豪快海鮮グリル、地元採れたて秋野菜のスキレット料理まで、シェフ監修の贅沢メニューがプライベートデッキに揃う美食グランピング特集です。女子旅や小さな子ども連れファミリーにも選ばれています。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-300">
            <span className="flex items-center gap-1.5">✓ 炭起こし・網片付け一切不要</span>
            <span className="flex items-center gap-1.5">✓ 全天候型ルーフ付テラス完備</span>
            <span className="flex items-center gap-1.5">✓ 特選牛ステーキ＆海鮮グリル</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 通常キャンプと手ぶらグランピングの比較表 */}
      <section className="bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Stress-Free BBQ</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            一般的なBBQキャンプ vs 手ぶら美食グランピング比較
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            「食べる楽しさ」だけを100%味わえるのがグランピング最大のメリットです。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-amber-200 bg-amber-50/50">
                <th className="py-3 px-4 font-black text-stone-900 w-1/4">項目</th>
                <th className="py-3 px-4 font-bold text-stone-500 w-3/8">一般的なBBQ・キャンプ</th>
                <th className="py-3 px-4 font-black text-amber-900 bg-amber-100/70 w-3/8">
                  手ぶらグランピングBBQ ✨
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {comparisonList.map((row, i) => (
                <tr key={i} className="hover:bg-amber-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-stone-900">{row.factor}</td>
                  <td className="py-3.5 px-4 text-stone-600 leading-relaxed">{row.traditional}</td>
                  <td className="py-3.5 px-4 font-medium text-amber-950 bg-amber-50/60 leading-relaxed">
                    {row.emptyHanded}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 秋の味覚を堪能する特選コースメニュー */}
      <section className="bg-amber-50/40 border border-amber-200 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-amber-700 uppercase tracking-wider">Autumn Feast Menu</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            シルバーウィーク限定！秋の厳選ごちそうBBQメニュー
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            食材の質に妥協しない、高級レストラン水準のこだわりアウトドアダイニング。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {autumnGourmetMenu.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm space-y-2">
              <span className="inline-block text-[10px] font-black bg-amber-500 text-stone-950 px-2.5 py-0.5 rounded-full">
                {m.badge}
              </span>
              <h3 className="font-bold text-sm sm:text-base text-stone-900">{m.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選手ぶらBBQグランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-amber-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Selected Gourmet Glamping</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            料理評価が高評価！手ぶらBBQが楽しめるおすすめグランピング宿
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            熟成肉ステーキ・天然温泉・全天候型ダイニングを完備したシルバーウィークおすすめ施設。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-amber-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-amber-50">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-amber-300 text-xs font-bold">
                    {hotel.hotelName}
                  </div>
                )}
                {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-black bg-stone-950/85 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-500/30">
                    1名 ¥{hotel.hotelMinCharge.toLocaleString()}〜
                  </span>
                ) : null}
                {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                  <div className="absolute top-2.5 left-2.5 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-1 border border-white/10">
                    <span className="text-amber-400">★</span>
                    <span>{hotel.reviewAverage.toFixed(2)}</span>
                    {hotel.reviewCount ? (
                      <span className="text-stone-300 text-[9px]">({hotel.reviewCount}件)</span>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2 ? `· ${hotel.address2.split("町")[0]}町` : ""}
                    </span>
                    {hotel.nearestStation && (
                      <span className="text-stone-400 text-[10px]">（最寄: {hotel.nearestStation}）</span>
                    )}
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-amber-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "地元名産の厳選食材を炭火や高性能グリルで楽しむ手ぶらBBQディナーが自慢のリゾートステイ。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-500 font-medium">
                    <span>手ぶらBBQ対応</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 ✈️
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-amber-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            手ぶらBBQグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-amber-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-amber-600 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・関連旅行ガイド */}
      <section className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>🍇</span> あわせて読みたい秋のグルメ＆家族旅行ガイド
        </h3>
        <p className="text-xs text-stone-600">
          旬のフルーツ狩りや家族で楽しめる観光名所モデルコースも合わせてチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/yamanashi-grape-bus-tour-daytrip-guide"
            className="block p-4 rounded-2xl bg-white border border-amber-200/60 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              秋の味覚狩り
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【山梨ぶどう狩り・シャインマスカット日帰りバスツアー比較】食べ放題・ワイナリー試飲つき厳選
            </div>
          </Link>

          <Link
            href="/family-kanazawa-1night2days-model-course"
            className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              家族旅行モデルコース
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【金沢家族旅行 1泊2日モデルコース】子連れ・3世代で行く兼六園・近江町市場・21世紀美術館
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-amber-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
