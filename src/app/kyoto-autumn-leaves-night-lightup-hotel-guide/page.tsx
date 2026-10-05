import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kyoto-autumn-leaves-night-lightup-hotel-guide/" },
  title: "【京都 紅葉ライトアップ2026おすすめ7選】夜間特別拝観・永観堂・東寺・清水寺＆混雑回避の夜回り宿 ｜ 日本全国・旅宿クラウド",
  description: "息をのむ美しさ！2026年秋の京都紅葉ライトアップ特集。永観堂「みかえり阿弥陀」の紅葉トンネル、東寺五重塔の池鏡リフレクション、高台寺のプロジェクションマッピング、東山・烏丸のホテル完全ガイド。",
  keywords: ["京都", "夜間特別拝観", "永観堂", "東寺", "清水寺", "混雑回避の夜回り宿", "温泉宿"],
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
      return data["kyoto-autumn-leaves-night-lightup-hotel-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-autumn-leaves-night-lightup-hotel-guide", e);
  }
  return [];
}

export default function KyotoAutumnLeavesNightLightupPage() {
  const hotels = loadHotels();

  // 厳選7大ライトアップスポット
  const spots = [
    {
      name: "永観堂 禅林寺",
      area: "左京区・東山北部",
      highlights: "「秋はもみじの永観堂」。放生池を囲む約3,000本のもみじが極彩色に浮かび上がる圧巻の回遊庭園。",
      period: "11月上旬〜12月上旬（17:30〜20:30受付終了 / 21:00閉門）",
      fee: "夜間特別拝観：700円（予定）",
      trafficTip: "地下鉄東西線「蹴上駅」から徒歩約15分。市バスは大渋滞するため地下鉄＋徒歩が鉄則。",
      photoSpot: "極楽橋から見上げる錦雲橋と放生池の水鏡リフレクション。"
    },
    {
      name: "東寺（教王護国寺）",
      area: "南区・京都駅南側",
      highlights: "日本一の高さを誇る国宝「五重塔」と、ひょうたん池に映る紅葉のシンメトリー鏡面世界。",
      period: "10月下旬〜12月上旬（18:00〜21:00受付終了 / 21:30閉館）",
      fee: "夜間特別拝観：1,000円",
      trafficTip: "京都駅八条口から徒歩15分、または近鉄「東寺駅」徒歩約5分。夜間も平坦で歩きやすい。",
      photoSpot: "ひょうたん池南東側から五重塔と逆さ五重塔を同時に収める構図。"
    },
    {
      name: "音羽山 清水寺",
      area: "東山区・清水",
      highlights: "漆黒の夜空へ一直線に放たれる青い一筋の光（観音様の慈悲）と、紅葉の海に浮かぶ「清水の舞台」。",
      period: "11月中旬〜11月下旬（17:30〜21:00受付終了 / 21:30閉門）",
      fee: "夜間特別拝観：400円",
      trafficTip: "五条坂・清水道のバスは乗降困難。京阪「清水五条駅」から徒歩約25分の坂道ウォークが確実。",
      photoSpot: "奥の院から本堂舞台と京都の夜景をワイドに見渡すアングル。"
    },
    {
      name: "高台寺（鷲峰山 高台寺）",
      area: "東山区・ねねの道",
      highlights: "方丈前庭「波心庭」の現代的なプロジェクションマッピングと、臥龍池の幻想的な無風リフレクション。",
      period: "10月下旬〜12月上旬（17:00点灯〜21:30受付終了 / 22:00閉門）",
      fee: "大人600円（掌美術館含む）",
      trafficTip: "祇園四条駅から徒歩約15分。圓徳院との共通拝観券を購入しておくと並びがスムーズ。",
      photoSpot: "臥龍池の水面に吸い込まれそうな紅葉と開山堂の倒影。"
    },
    {
      name: "青蓮院門跡（しょうれんいん）",
      area: "東山区・粟田口",
      highlights: "大小の青色LEDが苔庭を銀河のように照らし出す神秘の光アート。楠の大木ライトアップも見事。",
      period: "10月下旬〜12月上旬（18:00〜21:30受付終了 / 22:00閉門）",
      fee: "大人1,000円",
      trafficTip: "地下鉄東西線「東山駅」徒歩5分。永観堂や知恩院と徒歩で組み合わせやすい立地。",
      photoSpot: "宸殿の縁側に腰掛け、苔庭に散りばめられた青い光粒を見つめる視点。"
    },
    {
      name: "北野天満宮（もみじ苑）",
      area: "上京区・北野",
      highlights: "紙屋川沿いに自生する約350本のモミジ。朱塗りの鶯橋と赤く染まる渓谷のライトアップが風雅。",
      period: "11月上旬〜12月上旬（日没〜20:00受付終了 / 20:30閉門）",
      fee: "大人1,200円（老松の茶菓子付き）",
      trafficTip: "夜は嵐電「北野白梅町駅」徒歩約5分が快適。バスは夕方大混雑するため嵐電経由がおすすめ。",
      photoSpot: "鶯橋の真上から見下ろす紙屋川の水流と川面に散るモミジの絨毯。"
    },
    {
      name: "貴船神社（貴船もみじ灯篭）",
      area: "左京区・鞍馬貴船",
      highlights: "春日灯篭が連なる本宮参道の階段と、叡山電鉄「もみじのトンネル」車内消灯徐行運転の感動体験。",
      period: "11月上旬〜11月下旬（夕暮れ〜20:30頃）",
      fee: "境内参拝自由（叡山電鉄運賃別途）",
      trafficTip: "叡山電鉄「出町柳駅」発の展望列車「きらら」利用。市街地より気温が5度以上低いので防寒必須。",
      photoSpot: "本宮へ続く朱塗りの灯篭階段を下から見上げる構図。"
    }
  ];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【京都 紅葉ライトアップ2026おすすめ7選】夜間特別拝観・永観堂・東寺・清水寺＆混雑回避の夜回り宿 ｜ 日本全国・旅宿クラウド",
    "description": "息をのむ美しさ！2026年秋の京都紅葉ライトアップ特集。永観堂「みかえり阿弥陀」の紅葉トンネル、東寺五重塔の池鏡リフレクション、高台寺のプロジェクションマッピング、東山・烏丸のホテル完全ガイド。",
    "url": "https://croud-travel.pages.dev/kyoto-autumn-leaves-night-lightup-hotel-guide/",
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
      { "@type": "ListItem", "position": 2, "name": "【京都 紅葉ライトアップ2026おすすめ7選】夜間特別拝観・永観堂・東寺・清水寺＆混雑回避の夜回り宿 ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kyoto-autumn-leaves-night-lightup-hotel-guide/" }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-rose-600 selection:text-white pb-20 space-y-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* 🌌 HERO SECTION: 漆黒の夜と真紅のコントラスト */}
      <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-900 via-rose-950/40 to-stone-950 border-b border-rose-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            2026 Autumn Night Illuminations Kyoto
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-white leading-snug">
            【京都 紅葉ライトアップ2026おすすめ7選】
            <span className="block mt-2 bg-gradient-to-r from-rose-300 via-amber-200 to-rose-400 bg-clip-text text-transparent">
              夜間特別拝観・永観堂・東寺・清水寺＆混雑回避の夜回り宿
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
            秋の宵闇に浮かび上がる黄金と真紅の回遊式庭園。永観堂の放生池リフレクション、東寺五重塔の水鏡、清水の舞台から射す青き観音の光線——。2026年秋、絶対に訪れるべき厳選7社寺の見頃時期と、大混雑をスマートにかわす「地下鉄×徒歩」の夜回り術、そしてライトアップ後に即チェックインできる利便性抜群の厳選ホテルを徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-stone-400">
            <span className="bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🍁 <strong className="text-stone-200">見頃ピーク：</strong> 11月中旬〜11月下旬
            </span>
            <span className="bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🌙 <strong className="text-stone-200">点灯時間：</strong> 17:00〜17:30点灯 / 21:00前後閉門
            </span>
            <span className="bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🚶 <strong className="text-stone-200">混雑回避：</strong> 20時以降のレイト入場がおすすめ
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 🏮 厳選7大ライトアップ名所詳細 */}
        <section className="space-y-8">
          <div className="border-l-4 border-rose-500 pl-4 space-y-1">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">Top 7 Illuminations</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              息をのむ美しさ！京都の夜間特別拝観おすすめ7選
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              各寺院のライトアップ期間・拝観料・混雑回避のポイントを分かりやすく整理しました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spots.map((spot, idx) => (
              <div
                key={idx}
                className="bg-stone-900/80 border border-stone-800 hover:border-rose-500/50 rounded-2xl p-6 transition duration-300 space-y-4 relative overflow-hidden group shadow-lg"
              >
                <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-l from-rose-950 to-transparent text-rose-300 font-serif text-sm font-bold border-b border-l border-rose-900/30 rounded-bl-xl">
                  第{idx + 1}選
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-rose-400 bg-rose-950/70 border border-rose-800/40 px-2.5 py-0.5 rounded">
                    {spot.area}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-white mt-2 group-hover:text-rose-200 transition">
                    {spot.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-medium">
                  {spot.highlights}
                </p>

                <div className="space-y-2 text-xs border-t border-stone-800/80 pt-3">
                  <div className="flex items-start gap-2 text-stone-400">
                    <span className="text-rose-400 min-w-[50px] font-bold">期間・時:</span>
                    <span className="text-stone-200">{spot.period}</span>
                  </div>
                  <div className="flex items-start gap-2 text-stone-400">
                    <span className="text-rose-400 min-w-[50px] font-bold">拝観料:</span>
                    <span className="text-stone-200">{spot.fee}</span>
                  </div>
                  <div className="flex items-start gap-2 text-stone-400">
                    <span className="text-rose-400 min-w-[50px] font-bold">回避術:</span>
                    <span className="text-amber-200/90 font-medium">{spot.trafficTip}</span>
                  </div>
                  <div className="flex items-start gap-2 text-stone-400">
                    <span className="text-rose-400 min-w-[50px] font-bold">映え構図:</span>
                    <span className="text-stone-300">{spot.photoSpot}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 💡 混雑回避＆夜回りのプロテクニック */}
        <section className="bg-gradient-to-br from-rose-950/40 via-stone-900 to-stone-900 border border-rose-900/30 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">Night Walking Guide</span>
            <h2 className="text-xl sm:text-2xl font-black font-serif text-white">
              京都紅葉ライトアップを120%満喫する「3つの夜回りハック」
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2">
              <div className="text-2xl">🚇</div>
              <h3 className="font-bold text-white text-sm sm:text-base">市バスは使わず地下鉄＋徒歩</h3>
              <p className="text-stone-300 leading-relaxed text-xs">
                東大路通や丸太町通は秋の夕方大渋滞します。市バスが30分動かないことも日常茶飯事。地下鉄東西線（蹴上・東山）や烏丸線（五条・京都）を軸に歩くのが最短です。
              </p>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2">
              <div className="text-2xl">⏰</div>
              <h3 className="font-bold text-white text-sm sm:text-base">開門ダッシュより「20時以降」</h3>
              <p className="text-stone-300 leading-relaxed text-xs">
                17:30の点灯直後はツアー客や一般客で行列がピークになります。受付終了30分前（20:00〜20:30）に訪れると、驚くほど列が解消され静寂な池鏡を楽しめます。
              </p>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2">
              <div className="text-2xl">🧣</div>
              <h3 className="font-bold text-white text-sm sm:text-base">盆地特有の底冷え対策</h3>
              <p className="text-stone-300 leading-relaxed text-xs">
                11月中旬の京都の夜は10度を下回ります。薄手ダウン、ストール、手袋をバッグに忍ばせておくことで、長時間の夜間拝観も快適に鑑賞できます。
              </p>
            </div>
          </div>
        </section>

        {/* 🏨 夜回り後もらくらく！おすすめ宿泊拠点 */}
        <section className="space-y-6">
          <div className="border-l-4 border-rose-500 pl-4 space-y-1">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">Selected Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              ライトアップ帰りに直行できるおすすめホテル・お宿
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              地下鉄烏丸線・京都駅近郊で夜間拝観のアクセスに優れた拠点を厳選。早めの予約が必須です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-stone-900 border border-stone-800 hover:border-rose-600/50 rounded-2xl overflow-hidden flex flex-col justify-between transition duration-300 group shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-800 overflow-hidden">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-500 text-xs">
                        写真準備中
                      </div>
                    )}
                    {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2.5 right-2.5 bg-stone-950/90 text-rose-300 text-xs font-bold px-2.5 py-1 rounded border border-rose-900/40">
                        目安 ¥{hotel.hotelMinCharge.toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      {hotel.nearestStation && (
                        <span className="text-stone-400 bg-stone-800/80 px-2 py-0.5 rounded text-[11px]">
                          最寄: {hotel.nearestStation}
                        </span>
                      )}
                      {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                        <span className="text-amber-300 font-bold text-xs flex items-center gap-1">
                          ★ {hotel.reviewAverage.toFixed(1)}
                          <span className="text-stone-500 font-normal text-[10px]">({hotel.reviewCount}件)</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold font-serif text-white line-clamp-2 group-hover:text-rose-300 transition">
                      {hotel.hotelName}
                    </h3>

                    {hotel.hotelSpecial && (
                      <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed">
                        {hotel.hotelSpecial}
                      </p>
                    )}

                    {hotel.access && (
                      <p className="text-[11px] text-stone-500 line-clamp-2 border-t border-stone-800/60 pt-2">
                        📍 {hotel.access}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-gradient-to-r from-rose-700 to-rose-900 hover:from-rose-600 hover:to-rose-800 text-white font-bold text-xs rounded-xl shadow transition duration-200 flex items-center justify-center gap-2 text-center"
                  >
                    <span>楽天トラベルでプラン・空室を見る</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🍁 楽天トラベル バスツアー＆特設クーポン */}
        <section className="bg-gradient-to-r from-rose-950 via-stone-900 to-amber-950 border border-rose-800/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rose-900/40 pb-5">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Rakuten Travel Campaign</span>
              <h2 className="text-xl sm:text-2xl font-black font-serif text-white mt-1">
                紅葉ライトアップバスツアー＆京都限定クーポン
              </h2>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fseason%2Fautumn%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs transition shadow-md whitespace-nowrap"
            >
              秋の紅葉特集を見る →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-950/60 hover:bg-stone-950/90 border border-rose-900/30 hover:border-amber-400/50 p-4 rounded-xl space-y-2 transition block group"
            >
              <div className="text-2xl">🚌</div>
              <h3 className="font-bold text-white group-hover:text-amber-300">
                夜間特別拝観バスツアー（直行貸切）
              </h3>
              <p className="text-stone-400 leading-relaxed text-xs">
                市バスの混雑や乗換の心配不要！主要駅発着でライトアップ寺院を効率よく巡る添乗員同行バスツアー。
              </p>
            </a>

            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-950/60 hover:bg-stone-950/90 border border-rose-900/30 hover:border-amber-400/50 p-4 rounded-xl space-y-2 transition block group"
            >
              <div className="text-2xl">🎟️</div>
              <h3 className="font-bold text-white group-hover:text-amber-300">
                楽天トラベル 高級宿・温泉宿割引クーポン
              </h3>
              <p className="text-stone-400 leading-relaxed text-xs">
                毎月5と0のつく日は最大20%OFF！京都の老舗旅館や町家ホテルで使える最新クーポンを事前獲得。
              </p>
            </a>
          </div>
        </section>

        {/* 🔗 内部リンク */}
        <nav className="border-t border-stone-800 pt-8 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">関連記事・あわせて読みたい京都ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/kyoto-travel-budget-how-many-nights"
              className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-rose-500/40 transition block group"
            >
              <span className="text-rose-400 text-xs font-bold">予算＆滞在日数ガイド</span>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-white mt-1">
                【京都旅行は何泊がベスト？】1泊2日・2泊3日の費用相場とモデルコース完全比較 →
              </h3>
            </Link>

            <Link
              href="/kyoto-rainy-day-indoor-guide"
              className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-rose-500/40 transition block group"
            >
              <span className="text-rose-400 text-xs font-bold">雨天・悪天候対策</span>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-white mt-1">
                【雨の日の京都観光】しっとり濡れる庭園・美術館・京町家カフェ屋内スポット厳選 →
              </h3>
            </Link>
          </div>
        </nav>
      
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
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ishikawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                石川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shizuoka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                静岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/niigata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="kyoto-autumn-leaves-night-lightup-hotel-guide" />
</div>
  );
}
