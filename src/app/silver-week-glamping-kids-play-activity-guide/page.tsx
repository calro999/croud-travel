import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【子連れグランピング巨大遊具＆体験付き】アスレチック・動物ふれあい・収穫体験で子供が大はしゃぎ！ ｜ 日本全国・旅宿クラウド",
  description:
    "子供が1日中遊び尽くせる体験型グランピング特集！ツリーハウスアスレチック、ヤギやウサギとのふれあい牧場、秋のサツマイモ・栗拾い体験、ピザ窯焼き体験ができるファミリー向け施設徹底比較。",
  keywords: [
    "子連れ グランピング アスレチック",
    "子供 体験 グランピング",
    "動物 ふれあい グランピング 牧場",
    "秋 味覚狩り 収穫体験 グランピング",
    "ピザ窯体験 グランピング ファミリー",
    "シルバーウィーク 子連れ 宿泊",
    "ファミリー グランピング おすすめ"
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
      return data["silver-week-glamping-kids-play-activity-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-kids-play-activity-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingKidsPlayActivityPage() {
  const hotels = loadHotels();

  // 子供が大興奮する4大アクティビティ
  const activities = [
    {
      badge: "大自然アスレチック",
      title: "空中回廊ツリーハウス＆ジップライン",
      desc: "敷地内の森に広がるネット遊具や木登りアドベンチャー。地面に足をつけずに進む空中アスレチックで、子供たちのバランス感覚と冒険心がフル稼働！安全ネット完備でパパママも安心です。",
      icon: "🌲",
    },
    {
      badge: "動物とのふれあい",
      title: "牧場でヤギ・ヒツジの餌やり＆ポニー乗馬",
      desc: "隣接する観光牧場や専用ファームで、モルモットの抱っこやヤギ・アルパカへのミルク・おやつやり体験。都会では味わえない動物たちの温もりに直接触れられる命の学び場です。",
      icon: "🐑",
    },
    {
      badge: "食育・クラフト",
      title: "本格ピザ窯で生地こね焼き上げ体験",
      desc: "自分で生地をのばし、地元野菜やチーズをトッピング！薪を焚べた高温の石窯へ投入し、約90秒で香ばしく焼き上がる熱々ピザは最高のごちそう。食育ワークショップとしても人気です。",
      icon: "🍕",
    },
    {
      badge: "秋の収穫体験",
      title: "ホクホク焼き芋＆栗拾い・どんぐり工作",
      desc: "9月下旬のシルバーウィークは秋の恵みが実るベストシーズン。専用農園で泥んこになってサツマイモ掘りを楽しみ、夜の焚き火ピットでそのまま甘〜い焼き芋にして頬張る感動体験が待っています。",
      icon: "🍠",
    },
  ];

  // パパママ目線の安心設備チェックリスト
  const safetyChecklist = [
    {
      point: "完全個室トイレ＆専用シャワー・お風呂",
      detail: "夜中の「トイレ行きたい！」でも暗い共用通路を歩く必要なし。棟内完備だからオムツ替えも気兼ねなくスムーズ。",
    },
    {
      point: "全室エアコン・加湿空気清浄機完備",
      detail: "昼は動いて汗ばみ、夜は冷え込む秋の山間部でも、温度調整ボタン一つで子供の寝冷えや風邪をブロック。",
    },
    {
      point: "キッズアメニティ・ベビーベッド貸出",
      detail: "子供用歯ブラシ・スリッパ・補助便座や、ベッドからの転落を防ぐベッドガードの手配が可能。",
    },
    {
      point: "広々ウッドデッキで周囲を気にせず走り回れる",
      detail: "ホテルのように階下への足音トラブルを心配する必要なし。柵付きプライベートテラスで自由に遊ばせられます。",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "乳幼児（0歳〜2歳）や未就学児を連れて行っても大丈夫ですか？",
      answer:
        "はい、大歓迎の施設ばかりです。テントやヴィラ内は段差が少なく靴を脱いで上がるスタイルが多いため、ハイハイ期の赤ちゃんでも安心して過ごせます。ミルク用のお湯を沸かせる電気ケトルや電子レンジ、ベビーソープ、おむつ専用ゴミ箱などを無料貸出している宿も多数あります。",
    },
    {
      question: "雨が降った場合でも遊べるアクティビティはありますか？",
      answer:
        "屋根付きの屋内ワークショップスペース（木のバッジ作り、キャンドル作り、ピザ作りなど）や、併設の屋内プレイグラウンド、ボードゲーム貸出が用意されている施設が多いため、天候を気にせず思い出づくりが可能です。",
    },
    {
      question: "子供向けの食事メニューはどんな内容ですか？",
      answer:
        "大人の本格ステーキBBQとは別に、手ごねハンバーグ、無添加ソーセージ、焼きとうもろこし、スマイルポテト、パンケーキなど、子供が大好きなメニューをワンプレートにした「キッズBBQセット」が用意されているプランが一般的です。",
    },
    {
      question: "アクティビティは当日予約でも参加できますか？",
      answer:
        "ピザ焼き体験や収穫体験、レザークラフトなどは定員制となっている場合が多いため、宿泊予約時のオプション追加または事前WEB予約をおすすめします。牧場ふれあいやアスレチック遊具は滞在中いつでも自由に利用できる施設がほとんどです。",
    },
  ];

  // FAQPage JSON-LD構造化データ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
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

      {/* ヒーローセクション（Amber/Warm Orange パレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-600/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              KIDS PLAY & ADVENTURE 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-amber-200 bg-amber-800/80 border border-amber-500/50 px-3 py-1 rounded-full">
              巨大アスレチック・牧場ふれあい・石窯ピザ体験
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【子連れグランピング巨大遊具＆体験付き】アスレチック・動物ふれあい・収穫体験で子供が大はしゃぎ！
          </h1>

          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed font-medium">
            「子供を大自然の中で思いっきり遊ばせたい、でもテント泊の準備や衛生面はちょっと心配…」そんなファミリーの願いを叶える体験型グランピング！森のツリーハウスアスレチックから、もふもふ動物への餌やり、石窯ピザ焼き、秋の味覚収穫まで、親子の笑顔があふれる特別な休日をご提案します。全室エアコン＆専用バスルーム完備でママパパもストレスゼロ！
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-300">
            <span className="flex items-center gap-1.5">✓ 巨大遊具・動物ふれあい・自然体験付き</span>
            <span className="flex items-center gap-1.5">✓ 完全個室トイレ・お風呂・冷暖房完備</span>
            <span className="flex items-center gap-1.5">✓ キッズ専用BBQメニュー＆アメニティ充実</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 子供が大興奮する4大体験 */}
      <section className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">FAMILY ADVENTURE</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            子供の五感を刺激する！人気グランピングの4大アクティビティ
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            ゲームやスマホを置いて、秋の青空の下で夢中になれるとっておきの体験をご紹介。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 hover:border-amber-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{act.icon}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900">
                  {act.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                {act.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* パパママ安心チェックリスト */}
      <section className="bg-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl border border-amber-700/40">
        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">PARENTS PEACE OF MIND</span>
          <h2 className="text-xl sm:text-2xl font-black font-journal-serif text-white">
            赤ちゃん・幼児連れでも安心！パパママ目線の設備チェックポイント
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80">
            周囲への気兼ねなく、家族全員が笑顔でぐっすり眠れる充実設備を標準装備。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {safetyChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-amber-900/40 border border-amber-700/50 space-y-1.5"
            >
              <div className="flex items-center gap-2 font-bold text-amber-300 text-sm">
                <span>🛡️</span>
                <span>{item.point}</span>
              </div>
              <p className="text-xs text-amber-100/80 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選キッズ＆ファミリー向けグランピング宿一覧 */}
      <section className="space-y-6" aria-labelledby="kids-hotels-heading">
        <div className="border-l-4 border-amber-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">FAMILY PICKS</span>
          <h2 id="kids-hotels-heading" className="text-xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            遊具・牧場・体験が充実！子供が主役のグランピングリゾート
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            隣接テーマパークや牧場、広大な敷地で一日中遊び倒せる高評価スポットです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-amber-200 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {hotel.hotelMinCharge && (
                    <div className="absolute bottom-3 right-3 bg-stone-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-black shadow-md border border-amber-500/40">
                      1名最安: ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-stone-900 px-2.5 py-1 rounded-full text-[11px] font-black shadow flex items-center gap-1 border border-amber-200">
                      <span className="text-amber-500">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-stone-500 font-normal text-[10px]">
                          ({hotel.reviewCount})
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-600">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2}
                    </span>
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-amber-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "敷地内での自然ふれあいやアクティビティが豊富で、小さな子供から小学生まで家族みんなで笑顔になれる体験型リゾート。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-500 font-medium">
                    <span>{hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "無料駐車場あり"}</span>
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
            子連れ・体験型グランピングのよくある質問
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
          <span>🎠</span> ファミリー旅行・子連れレジャーの関連記事
        </h3>
        <p className="text-xs text-stone-600">
          全国の動物園・大自然スポットや子連れモデルコースもチェック！
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/family-kanazawa-1night2days-model-course"
            className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              家族旅行モデルコース
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【金沢家族旅行 1泊2日モデルコース】子連れ・3世代で行く兼六園・近江町市場・21世紀美術館
            </div>
          </Link>

          <Link
            href="/hokkaido-family-trip-zoo-nature-guide"
            className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              動物・自然体験ガイド
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【北海道 子連れ家族旅行】旭山動物園＆富良野ネイチャー体験・キッズ大満足ルート
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
          <span>全国47都道府県の子連れグランピング・宿泊施設一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
