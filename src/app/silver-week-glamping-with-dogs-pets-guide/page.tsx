import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【愛犬と泊まるシルバーウィーク グランピング】プライベートドッグラン付き＆ノーリードOKの極上ヴィラ ｜ 日本全国・旅宿クラウド",
  description:
    "ワンちゃんと一緒に秋の連休を満喫！客室直結のプライベート芝生ドッグラン、足洗い場・ペット用アメニティ完備、大型犬OK・多頭飼い対応のグランピング施設特集。涼しくなる9月がベストシーズンの理由。",
  keywords: [
    "愛犬と泊まる グランピング シルバーウィーク",
    "ペット同伴 グランピング プライベートドッグラン",
    "ノーリード グランピング 犬連れ 旅行",
    "大型犬 宿泊可 グランピング ヴィラ",
    "犬 連れ グランピング 関東 関西",
    "シルバーウィーク ペット 旅行 おすすめ宿",
    "ドッグラン付き ドームテント 予約",
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
      return data["silver-week-glamping-with-dogs-pets-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-with-dogs-pets-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingWithDogsPetsPage() {
  const hotels = loadHotels();

  const faqList = [
    {
      q: "なぜ真夏ではなく9月のシルバーウィークが愛犬グランピングのベストシーズンなのですか？",
      a: "犬は人間よりも体高が低く、真夏は熱せられた地面や芝生のアスファルト熱（放射熱）で熱中症や足裏の火傷リスクが非常に高くなります。9月下旬の連休は最高気温が25℃前後に落ち着き、木陰や芝生の上でワンちゃんが思い切り全力疾走できる最適な気候条件が揃うためです。",
    },
    {
      q: "プライベートドッグラン付き客室を選ぶメリットは何ですか？",
      a: "共用のドッグランと異なり、他のワンちゃんとの予期せぬトラブルや相性を心配することなく、客室のテラスから直接ノーリードで遊ばせることができます。オーナーもBBQを楽しみながら愛犬の様子を見守れるため、愛犬家にとって最もストレスフリーな宿泊形態です。",
    },
    {
      q: "宿泊時に持参が必須な証明書やドッググッズは？",
      a: "多くの施設で「狂犬病予防接種証明書」および「混合ワクチン接種証明書（1年以内）」の提示が義務付けられています。普段食べ慣れているドッグフード、マナーパンツ・オムツ、使い慣れたベッドやブランケットを持参すると、環境の変化による愛犬のストレスを最小限に抑えられます。",
    },
    {
      q: "大型犬や多頭飼いでも宿泊できますか？",
      a: "施設や客室タイプによって受入条件が異なります。今回ご紹介する施設の中には大型犬2頭まで同伴可能なヴィラや、頭数制限の緩やかな広大ドッグラン付き施設が含まれています。予約時に体重や頭数を必ず確認の上、お申し込みください。",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50/40 text-slate-800 antialiased selection:bg-amber-600 selection:text-white font-sans">
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

      {/* ヒーローセクション（Amberテーマ：秋の温かみ、豊かな大地、愛犬とのぬくもり） */}
      <header className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.22),transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            愛犬ファーストの秋連休リゾート滞在記
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【愛犬と泊まるシルバーウィーク グランピング】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-200 to-yellow-200">
              専用芝生ドッグラン＆ノーリードOK
            </span>
            <br />
            秋風の天然芝を駆け回る極上ヴィラ特集
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            真夏の危険な暑さを乗り越え、いよいよワンちゃんが快適に屋外で走り回れる最高の秋シーズンが到来。
            お部屋のドアを開ければそのまま直結するプライベートドッグラン、足洗い場や充実の専用アメニティ、
            愛犬の視界に入りながら楽しめるデッキBBQなど、大切な家族の一員と心ゆくまでくつろげるグランピング宿を厳選しました。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">9月の散歩環境</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">芝生が快適</div>
              <div className="text-[11px] text-slate-300 mt-0.5">地面熱ゼロで肉球安心</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">プライベート空間</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">専用フェンス完備</div>
              <div className="text-[11px] text-slate-300 mt-0.5">他犬との接触なし</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">受入サイズ</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">小型犬〜大型犬</div>
              <div className="text-[11px] text-slate-300 mt-0.5">多頭飼いOKプランも</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">ドッグ設備</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">温水足洗い場</div>
              <div className="text-[11px] text-slate-300 mt-0.5">ペットアメニティ充実</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 楽天トラベル クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="ファミリー・温泉旅行ガイド" className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
            <span className="text-xl">🐾</span>
            <span>家族みんなで安心して泊まれるおすすめ宿泊ガイド：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/kanto-baby-friendly-onsen-ryokan-guide"
              className="inline-flex items-center text-xs font-bold text-amber-900 bg-white border border-amber-300 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              関東ウェルカムベビー温泉旅館ガイド →
            </Link>
          </div>
        </nav>

        {/* セクション1: 愛犬連れで「プライベートドッグラン付き」を選ぶべき4つの理由 */}
        <section aria-labelledby="pet-reasons-heading" className="space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 id="pet-reasons-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              後悔しないドッググランピング選びのチェック基準
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              「ペット同伴可」のホテルと「客室専用ドッグラン付きグランピング」では快適度が劇的に異なります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-black flex items-center justify-center text-lg mb-4">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">朝起きてすぐパジャマのまま芝生へ出せる</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                一般のホテルでは朝の散歩のために着替えてリードを付け、エレベーターや共用廊下を移動する必要があります。プライベートランなら窓を開けるだけで愛犬が朝日の中で自由に排泄・運動できます。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-black flex items-center justify-center text-lg mb-4">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">BBQ中も孤立させず、同じ空間で笑顔を共有</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                テラスデッキとランが隣接しているため、大人が炭火グリルで肉を焼きながら、足元で愛犬が楽しそうにボール遊びをする姿を眺められます。ケージでお留守番させる罪悪感は一切ありません。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-black flex items-center justify-center text-lg mb-4">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">他のワンちゃんが苦手なシャイな子も安心</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                共用ランでは吠え合いや噛み付きが心配なデリケートなワンちゃんも、高いフェンスで囲まれた専用空間なら完全にリラックス。周囲を気にせず自分のペースで探索を楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-black flex items-center justify-center text-lg mb-4">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">専用温水足洗い場＆乾燥タオルで入室スムーズ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                芝生や土で汚れた手足をすぐ洗える専用水栓をデッキに完備。ペットシーツや消臭スプレー、ウェットティッシュなど充実したアメニティで室内も清潔に保てます。
              </p>
            </div>
          </div>
        </section>

        {/* セクション2: 施設一覧 */}
        <section aria-labelledby="hotels-heading" className="space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【愛犬同伴対応】シルバーウィークに泊まりたい厳選グランピング施設
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              プライベートドッグラン付き客室や広大な敷地を誇る、全国の楽天トラベル高評価リゾートを厳選。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
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
                      愛犬と泊まれるグランピング
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
                  <div className="absolute top-3 right-3 bg-amber-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow">
                    ペット歓迎ステイ
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-amber-800 mb-1">
                      <span>📍</span>
                      <span>{hotel.address1 || "リゾート"} {hotel.nearestStation ? `（最寄り: ${hotel.nearestStation}駅）` : ""}</span>
                    </div>
                    <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-amber-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {hotel.hotelSpecial || "愛犬と一緒に自然を満喫できる専用ドッグラン付きグランピング。広大な芝生と充実のペット用設備で、大切な家族みんなで特別な休日を過ごせます。"}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block font-medium">最安参考料金（1名）</span>
                      <span className="text-amber-700 font-black text-xl">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルでプランを見る ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3: 愛犬旅行の持ち物チェックリスト */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 border border-amber-800/40 space-y-6">
          <div>
            <span className="text-amber-400 font-black text-xs uppercase tracking-wider">Dog Trip Packing Checklist</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              愛犬と行くグランピング【秋の必需品リスト】
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-amber-300 text-sm mb-1.5">① 各種接種証明書（写真保存も推奨）</h4>
              <p className="text-slate-400 leading-relaxed">
                狂犬病および混合ワクチンの接種証明書（1年以内）。原本を持参しつつ、スマートフォンに写真を撮影して保存しておくと提示がスムーズです。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-amber-300 text-sm mb-1.5">② 食べ慣れたドッグフード＆おやつ</h4>
              <p className="text-slate-400 leading-relaxed">
                環境が変わると食欲が落ちたりお腹を壊したりしやすいため、普段のフードを1回分ずつ小分けにして持参。水分補給用の携帯ボトルも必須です。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-amber-300 text-sm mb-1.5">③ お気に入りのブランケット・マナーウェア</h4>
              <p className="text-slate-400 leading-relaxed">
                自宅の匂いがついたタオルやクッションをドーム内に置くだけで愛犬が落ち着きます。室内での粗相を防ぐため、マナーオムツも数枚用意しておきましょう。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4: FAQ（構造化データ連動） */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-8">
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-amber-600">❓</span> 愛犬グランピングのよくある質問
          </h2>
          <div className="divide-y divide-amber-100">
            {faqList.map((faq, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                  <span className="text-amber-600 font-black">Q.</span>
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
                href="/prefectures/fukuoka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nara"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                奈良県の宿・温泉
              </Link>
              <Link
                href="/prefectures/chiba"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                千葉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/aichi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛知県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
