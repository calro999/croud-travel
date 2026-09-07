import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大カルストの白銀石灰岩パノラマと高原リゾート宿×ふるさと納税完全ガイド【2026年最新】秋吉台・四国カルスト・平尾台',
  description: '緑の高原に無数の白大理石・石灰岩が羊の群れのように広がる日本三大カルスト（秋吉台・四国カルスト・平尾台）。標高1400mの星空リゾートやカルスト山麓の天然温泉宿で非日常を満喫。楽天ふるさと納税を活用したお得で開放感溢れる絶景高原旅行術を徹底解説。',
  keywords: ["日本三大カルスト","秋吉台温泉","星ふるヴィレッジTENGU","ホテルクラウンパレス小倉","四国カルスト","平尾台","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-karsts-highland-stay',
  },
  openGraph: {
    title: '日本三大カルストの白銀石灰岩パノラマと高原リゾート宿×ふるさと納税完全ガイド【2026年最新】秋吉台・四国カルスト・平尾台',
    description: '緑の高原に無数の白大理石・石灰岩が羊の群れのように広がる日本三大カルスト（秋吉台・四国カルスト・平尾台）。標高1400mの星空リゾートやカルスト山麓の天然温泉宿で非日常を満喫。楽天ふるさと納税を活用したお得で開放感溢れる絶景高原旅行術を徹底解説。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-karsts-highland-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "karst_akiyoshi",
    "hotelNo": 27871,
    "hotelName": "湯野温泉　芳山園",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/27871/27871.jpg",
    "hotelMinCharge": 8800,
    "reviewAverage": "4.5",
    "reviewCount": 516,
    "address": "山口県周南市湯野4255-1",
    "access": "新幹線徳山駅→ＪＲ山陽本線 戸田駅より車で7分／山陽自動車道徳山西ＩＣ下車６分",
    "userReview": "山口県内の比較的アクセスの良い地に、こんな歴史ある温泉があるのを知りませんでした。徳山からも近いのに、山の中の鄙びた温泉の風情があり、静かで長閑な環境です。歴史ある旅館なのでしょうが、大浴場は日帰…",
    "label": "山口県美祢市ふるさと納税・東洋屈指の大石灰岩台地と悠久の鍾乳洞巡り「秋吉台温泉ステイ」",
    "spotTitle": "山口県山口市ふるさと納税：秋吉台観光の拠点・山紫水明の日本庭園と名湯「湯野温泉 芳山園」",
    "spotDesc": "東洋屈指の大カルスト台地・秋吉台や秋芳洞へ好アクセスの静寂な温泉宿。広大な日本庭園と、天然ラドンを豊富に含む名湯、山口のふぐや銘柄牛を味わう会席料理でゆったり寛げます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "karst_shikoku",
    "hotelNo": 129993,
    "hotelName": "星ふるヴィレッジＴＥＮＧＵ",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129993/129993.jpg",
    "hotelMinCharge": 13600,
    "reviewAverage": "4.4",
    "reviewCount": 376,
    "address": "高知県高岡郡津野町芳生野乙4921-22",
    "access": "須崎東ICより国道197号線を津野町役場西庁舎目印に国道439号線へ。須崎東ICより約80分",
    "userReview": "道中は険しいが景色とサービスは満点!辿り着くのに道路が工事中だったり、片側一車線道路からセンターラインがなくなって離合不可の道を経ての到着。しかし、部屋の設備やらサービスはピカイチ!もちろ…",
    "label": "高知県梼原町ふるさと納税・標高1400m天空の絶景・四国カルストの星空リゾート「星ふるヴィレッジTENGU」",
    "spotTitle": "高知県梼原町ふるさと納税：標高1,400m四国カルストの頂・満天の星空リゾート「星ふるヴィレッジTENGU」",
    "spotDesc": "四国カルスト天狗高原の頂上に建つ絶景リゾートホテル。全天候型の天文台プラネタリウムを備え、客室や展望大浴場からはどこまでも続く白い石灰岩の稜線と雲海、満天の星空を独占できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "karst_hiraodai",
    "hotelNo": 5546,
    "hotelName": "ホテルクラウンパレス小倉",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/5546/5546.jpg",
    "hotelMinCharge": 4300,
    "reviewAverage": "4.1",
    "reviewCount": 1853,
    "address": "福岡県北九州市小倉北区馬借1-2-1",
    "access": "小倉駅から徒歩11分、お車3分、バス5分（詳細は施設紹介「アクセス・駐車場」項目をご覧ください）",
    "userReview": "設備は古めだが清潔、朝食が美味しくコスパ良し設備は古めでは有りますが、清潔感も有って不快感は無いです。朝食の種類が豊富で、とても美味しかったです。唯一、残念だったのが天井にホコリがこびりつ…",
    "label": "福岡県北九州市ふるさと納税・羊群原の雄大なカルスト台地・平尾台散策の拠点「ホテルクラウンパレス小倉」",
    "spotTitle": "福岡県北九州市ふるさと納税：平尾台カルスト台地へのアクセス良好な都市型ホテル「ホテルクラウンパレス小倉」",
    "spotDesc": "国の天然記念物・平尾台の羊群原散策の拠点として最適なシティホテル。紫川のほとりに位置し、小倉城を望む快適な客室と、九州の旬の味覚を活かしたレストラン料理を優雅に楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoUpgradedPage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大カルスト・高原リゾート特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大カルストの白銀石灰岩パノラマと高原リゾート宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            青空と緑の草原に純白の石灰岩が点在する、まるでヨーロッパの高原や異世界を思わせる「日本三大カルスト」。秋吉台の悠久の鍾乳洞、四国カルストの雲海と満天の星、平尾台の雄大な羊群原パノラマ。大地の造形美に抱かれながら過ごす休日は、心洗われる爽快感に満ちています。楽天ふるさと納税の宿泊割引クーポンを駆使して、天空のカルスト高原リゾートを賢くスマートにお楽しみください。
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto shadow-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心してご活用いただけます。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* メリット3選 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">
          この特集で出会える極上の滞在体験と3つの魅力
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="01" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              見渡す限りの大草原に白い巨岩が点在する異世界のような絶景パノラマ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日本とは思えないほどの雄大なカルスト台地をドライブやトレッキングで巡り、どこまでも広がる青空を満喫できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              標高1,400mの高原ホテルで体験する満天の天の川と早朝の雲海
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              四国カルストの頂上付近に泊まれば、夜は街明かりの届かないプラネタリウムのような星空、朝は広大な雲海が目の前に広がります。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              カルスト山麓の天然温泉と地元テロワール高原グルメ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              山口の見蘭牛や四国の土佐あかうし、新鮮な高原野菜やチーズなど、清らかな大地が育む美味を堪能できます。
            </p>
          </div>
        </div>
      </section>

      {/* 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          {hotels.map((h, idx) => (
            <div key={h.key} className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                  {h.spotTitle}
                </h2>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {h.spotDesc}
                </p>
              </div>

              <div className="rounded-3xl bg-stone-950/80 border border-stone-800 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[300px] md:min-h-full bg-stone-900">
                    <Image
                      src={h.hotelImageUrl}
                      alt={h.hotelName}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold px-3 py-1 rounded-lg">
                      厳選名宿 #{idx + 1}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-amber-500/90 mb-1 tracking-wider uppercase">
                        {h.label}
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3 hover:text-amber-400 transition">
                        <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                          {h.hotelName}
                        </a>
                      </h3>
                      <div className="flex items-center gap-3 mb-4 text-sm text-stone-400">
                        <span className="flex items-center text-amber-400 font-bold">
                          ★ {h.reviewAverage}
                        </span>
                        <span>({h.reviewCount}件の評価)</span>
                        <span className="text-amber-400 font-semibold">・ 参考最安目安: ¥{Number(h.hotelMinCharge).toLocaleString()}〜</span>
                      </div>
                      <p className="text-stone-300 text-sm mb-4 leading-relaxed bg-stone-900/80 p-4 rounded-xl border border-stone-800/80 italic">
                        「{h.userReview}」
                      </p>
                      <div className="text-xs text-stone-400 space-y-1 mb-6">
                        <p>📍 所在地: {h.address}</p>
                        <p>🚗 アクセス: {h.access}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row gap-3">
                      <a
                        href={h.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black py-3 px-6 rounded-xl shadow-lg transition duration-150 text-sm"
                      >
                        楽天ふるさと納税で宿を予約する
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-stone-800 hover:bg-stone-700 text-amber-200 font-bold py-3 px-6 rounded-xl border border-stone-700 transition duration-150 text-sm"
                      >
                        自治体返礼品クーポン一覧
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 利用ステップ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-950 border border-amber-500/20 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-4">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            寄附から割引適用まで全てオンラインで完結。実質2,000円の負担で憧れの名旅館や絶景リゾートをお得に楽しめます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 01</div>
              <h3 className="font-bold text-white mb-2">自治体に寄附する</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                宿泊したい施設がある自治体を選び、楽天ふるさと納税で寄附を申し込みます。楽天ポイントも通常通り進呈されます。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 02</div>
              <h3 className="font-bold text-white mb-2">クーポンが自動付与</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                寄附完了の翌日、楽天アカウントの「マイクーポン」に寄附額に応じた宿泊割引クーポンが自動的に追加されます。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 03</div>
              <h3 className="font-bold text-white mb-2">楽天トラベルで予約</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                対象のホテル・旅館を予約する際、決済画面でクーポンを選択するだけで宿泊代金から最大30%が即座に割引されます。
              </p>
            </div>
          </div>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-lg shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>対象の宿泊割引クーポンを探す</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* 相互リンク */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-black text-amber-200 mb-6">あわせて読みたい極上ふるさと納税旅特集</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/furusato-tax-three-great-scenic-coasts-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大絶景海岸</span>
            <span className="font-bold text-white text-sm">【日本三大名勝海岸】東尋坊・浄土ヶ浜・白良浜ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-famous-waterfalls-healing-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名瀑ヒーリング</span>
            <span className="font-bold text-white text-sm">【日本三大名瀑】白糸・吹割・鮎帰りの滝の癒やし湯宿特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-hotsprings-luxury-villas-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名湯の離れ</span>
            <span className="font-bold text-white text-sm">【日本三大名湯】草津・有馬・下呂の極上別邸ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-tea-plantations-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大茶園テロワール</span>
            <span className="font-bold text-white text-sm">【日本三大茶園】牧之原・宇治・八女の茶香美食ステイ特集</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
