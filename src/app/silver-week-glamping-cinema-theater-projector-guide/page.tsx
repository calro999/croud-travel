import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【プロジェクター・巨大シアター付きグランピング】テント内で映画鑑賞＆推し活！夜長を楽しむシアターステイ ｜ 日本全国・旅宿クラウド",
  description:
    "ドームテントの天井や大画面スクリーンに映像を投影！100インチ超えの大迫力プロジェクター、高音質スピーカー完備、動画配信サービス見放題で楽しむ夜の映画祭＆推し活お泊まり会。",
  keywords: [
    "プロジェクター付き グランピング",
    "シアター グランピング",
    "ドームテント プロジェクター",
    "推し活 グランピング",
    "グランピング 女子会 映画",
    "ポップインアラジン キャンプ",
    "大画面 映画鑑賞 テント",
    "秋の夜長 シアターステイ"
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
      return data["silver-week-glamping-cinema-theater-projector-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-cinema-theater-projector-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingCinemaTheaterProjectorPage() {
  const hotels = loadHotels();

  // シアターグランピングの4大ハイライト
  const theaterHighlights = [
    {
      badge: "100インチ超大画面",
      title: "ドームテントの曲面壁や特大スクリーンに映し出す圧巻のスケール",
      desc: "天井や壁一面に広がる大迫力のシネマビジョン。寝転びながら映画の世界にダイブできる、ドーム型テントならではの包み込まれるようなプライベートシアター設計。",
    },
    {
      badge: "推し活・ライブ鑑賞",
      title: "ペンライト・うちわ持ち込みOK！完全遮音空間で推しの生配信に熱狂",
      desc: "周囲を気にせず大音量でライブ映像やMVを再生。推しカラーのドリンクやバルーンで飾り付けたテント内で、ファン仲間と夜通し語り合えるプライベートステイ。",
    },
    {
      badge: "シネマフード完備",
      title: "ポップコーンマシーン＆スパークリングワインで本格映画祭気分",
      desc: "弾けるバター醤油やキャラメルポップコーンの香りに包まれるナイトタイム。冷えたクラフトビールやホットココアを片手に、贅沢な映画鑑賞スタイルを満喫。",
    },
    {
      badge: "スマートストリーミング",
      title: "高速Wi-Fi＆各種動画配信サービス完備（Netflix・Prime・YouTube）",
      desc: "Aladdin X（旧popIn Aladdin）や高輝度4Kプロジェクター、Bluetoothサラウンドスピーカーを標準搭載。手持ちのスマホやタブレットからのミラーリング投影にも対応。",
    },
  ];

  // シアターグランピングの夜のタイムテーブル
  const theaterTimeline = [
    {
      time: "16:00〜",
      title: "チェックイン＆シアターセッティング",
      desc: "テント内のプロジェクターや照明を動作確認。推し活グッズのデコレーションや配信リストの準備。",
    },
    {
      time: "18:00〜",
      title: "夕暮れプライベートBBQディナー",
      desc: "テラスで厚切りステーキやアヒージョを堪能。お腹を満たしていよいよ夜のシアタータイムへ。",
    },
    {
      time: "20:00〜",
      title: "第1部：できたてポップコーンと新作映画鑑賞",
      desc: "部屋の照明を落とし、100インチ超えの大画面を起動。ふかふかのベッドやソファに寝そべって映画の世界へ。",
    },
    {
      time: "22:30〜",
      title: "第2部：夜通しの推しライブ映像上映会",
      desc: "お気に入りのペンライトを灯し、伝説のライブ円盤やMVをノンストップ鑑賞。語り明かす至福の夜長。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "NetflixやAmazonプライムビデオなどのアカウントは必要ですか？",
      answer:
        "施設備え付けの共通アカウントで見放題になっている場合と、ご自身の個人アカウントでログインして視聴するスタイルがあります。ご自身のアカウントを使用された場合は、チェックアウト前にログアウトをお忘れなく。YouTubeやABEMA等の無料コンテンツはログイン不要でそのまま楽しめます。",
    },
    {
      question: "スマホやNintendo Switch、BDプレイヤーの映像を投影できますか？",
      answer:
        "HDMI入力端子やAirPlay / Chromecast等の画面ミラーリング機能を備えたプロジェクターが主流です。ゲーム機やブルーレイプレイヤーを繋ぎたい場合は、HDMIケーブル（長さ2m以上推奨）を持参すると確実です。",
    },
    {
      question: "音漏れで隣のテントに迷惑がかからないか心配です。",
      answer:
        "ドームテントは十分な棟間距離が保たれており、テント自体の防音断熱構造により通常の音量であれば外に響きにくい設計になっています。ただし22時以降のクワイエットタイム（サイレント時間）は、窓や扉を閉め、常識的な音量でお楽しみいただくのがマナーです。",
    },
    {
      question: "昼間でもカーテンを閉めればプロジェクターは見られますか？",
      answer:
        "遮光カーテンや二重スクリーンが備わっている施設であれば日中でも鑑賞可能ですが、やはり日没後の暗がりの中で投影した方が圧倒的に鮮明で高いコントラストを楽しめます。夕暮れ以降の上映会スタートがおすすめです。",
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

      {/* ヒーローセクション（Indigoパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-stone-900 to-indigo-900 text-white p-8 md:p-14 shadow-2xl border border-indigo-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-indigo-500 text-white px-3.5 py-1 rounded-full uppercase shadow-md font-mono">
              CINEMA & THEATER GLAMPING 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-indigo-200 bg-indigo-950/80 border border-indigo-500/40 px-3 py-1 rounded-full">
              大画面と極上サウンドに浸る夜のシアターステイ
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【プロジェクター・巨大シアター付きグランピング】テント内で映画鑑賞＆推し活！夜長を楽しむシアターステイ
          </h1>

          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed font-medium">
            ドームテントの白い壁や天井一面に投影される100インチ超えの銀幕。涼風が心地よい秋の夜長、気の置けない仲間や恋人とベッドに横たわりながら、映画の世界に没入する贅沢を味わいませんか？高音質スピーカー、ポップコーン、推し活ライブ鑑賞にも最適なプロジェクター完備のシアターグランピングを厳選しました。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-indigo-300">
            <span className="flex items-center gap-1.5">🎬 100インチ超えプロジェクター＆大画面シアター完備</span>
            <span className="flex items-center gap-1.5">🍿 ポップコーン＆動画ストリーミング対応</span>
            <span className="flex items-center gap-1.5">💖 女子会・推し活お泊まり会に完全対応</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* シアターグランピングの4大ハイライト */}
      <section className="bg-white border border-indigo-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Cinema & Theater Highlights</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            秋の夜長を遊び尽くす！シアターグランピング4つの極上ポイント
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            映画館でも自宅でも味わえない、自然の中の秘密基地で楽しむ臨場感とワクワク感。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {theaterHighlights.map((hl, i) => (
            <div key={i} className="bg-indigo-50/40 rounded-2xl p-6 border border-indigo-100 space-y-2.5">
              <span className="text-[10px] font-black text-indigo-800 bg-indigo-200/80 px-3 py-0.5 rounded-full inline-block">
                {hl.badge}
              </span>
              <h3 className="font-bold text-base text-stone-900 leading-snug">{hl.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">{hl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ナイトシアターのタイムスケジュール */}
      <section className="bg-stone-950 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md border border-indigo-900/40">
        <div className="space-y-1">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">Cinema Night Flow</span>
          <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
            映画祭＆推し活ナイト！シアターグランピングの理想スケジュール
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200/80">
            日没後のBBQから深夜の上映会まで。時間を忘れて熱中する特別なナイトルーティン。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {theaterTimeline.map((item, i) => (
            <div key={i} className="bg-indigo-950/40 rounded-2xl p-5 border border-indigo-800/40 space-y-2">
              <span className="text-xs font-black text-indigo-400 tracking-wider block font-mono">
                {item.time}
              </span>
              <h3 className="font-bold text-sm text-indigo-100 leading-snug">{item.title}</h3>
              <p className="text-xs text-stone-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選シアター宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Selected Theater Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            プロジェクター・シアター設備付き！おすすめ宿泊施設
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            伊豆や瀬戸内の絶景グランピングから都内・福岡の話題のシアタールームまで厳選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-2xl border border-indigo-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-indigo-50">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <span className="text-indigo-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-indigo-200">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-indigo-800 font-bold">
                    🎬 {hotel.address1} {hotel.address2}
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-indigo-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "シアタープロジェクターや快適なドーム空間で、映画鑑賞や推し活ステイを満喫できる話題のスポット。"}
                  </p>

                  {hotel.nearestStation && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚉 最寄駅: {hotel.nearestStation}
                    </p>
                  )}
                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-indigo-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge && hotel.hotelMinCharge < 90000 ? (
                      <div>
                        最安目安: <span className="text-sm font-black text-indigo-900">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-indigo-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            シアターグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-indigo-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-indigo-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・東京駅早朝カフェ＆ディズニーパッキング */}
      <section className="bg-indigo-50/60 border border-indigo-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>🎒</span> あわせて読みたい女子旅・旅行準備お役立ちガイド
        </h3>
        <p className="text-xs text-stone-600">
          お泊まり会や旅行出発前の朝時間活用と、後悔しない持ち物パッキングのコツ。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/tokyo-station-early-morning-breakfast-cafe-guide"
            className="block p-4 rounded-2xl bg-white border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              東京駅・早朝カフェ
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-indigo-700 transition line-clamp-2">
              【東京駅】早朝7時前から開いている朝食モーニング＆カフェおすすめ厳選ガイド！新幹線前の優雅な時間
            </div>
          </Link>

          <Link
            href="/disney-trip-packing-regrets-worst5-guide"
            className="block p-4 rounded-2xl bg-white border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              パッキング後悔対策
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-indigo-700 transition line-clamp-2">
              【ディズニー旅行の持ち物後悔ワースト5】持って行けばよかった神アイテム＆不要だった荷物完全まとめ
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-indigo-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
