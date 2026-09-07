import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税完全ガイド【2026年最新】富士山・立山・白山',
  description: '古来より山岳信仰の聖地として崇敬される日本三大霊峰（富士山・立山連峰・白山）。湖越しに望む逆さ富士、標高2,400mの雲海ホテル、白山信仰の囲炉裏炭火料理宿。楽天ふるさと納税の宿泊割引クーポンでお得に巡る完全ガイド。',
  keywords: ["日本三大霊峰","秀峰閣湖月","立山弥陀ヶ原ホテル","一里野高原ホテルろあん","富士山ビュー","立山連峰","白山温泉","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-sacred-mountains-stay',
  },
  openGraph: {
    title: '日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税完全ガイド【2026年最新】富士山・立山・白山',
    description: '古来より山岳信仰の聖地として崇敬される日本三大霊峰（富士山・立山連峰・白山）。湖越しに望む逆さ富士、標高2,400mの雲海ホテル、白山信仰の囲炉裏炭火料理宿。楽天ふるさと納税の宿泊割引クーポンでお得に巡る完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-sacred-mountains-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "mountain_fuji",
    "hotelNo": 43939,
    "hotelName": "富士河口湖温泉　秀峰閣　湖月",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/43939/43939.jpg",
    "hotelMinCharge": 26400,
    "reviewAverage": "4.7",
    "reviewCount": 584,
    "address": "山梨県南都留郡富士河口湖町河口2312",
    "access": "富士急行線　河口湖駅より車で１０分",
    "userReview": "スタッフの接客が素晴らしく、また必ず来たい今回、2回目の訪問になります。スタッフの方のホスピタリティの高い接客に、最後まで気持ちよく利用することができました。また絶対お伺いしたいと思い…",
    "label": "山梨県富士河口湖町ふるさと納税・日本第一の霊峰を湖越しに望む全室富士ビュー「富士山」秀峰閣湖月",
    "spotTitle": "山梨県富士河口湖町ふるさと納税：河口湖越しに霊峰富士を一望する全室絶景宿「富士河口湖温泉 秀峰閣 湖月」",
    "spotDesc": "河口湖の北岸に位置し、遮るもののない富士山と河口湖の絶景を全客室・露天風呂から堪能できる至高の宿。夕暮れに赤く染まる赤富士や、朝の澄んだ空気の中に浮かぶ富士の美しさは圧巻です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "mountain_tateyama",
    "hotelNo": 184017,
    "hotelName": "立山黒部アルペンルートオフィシャルホテル　弥陀ヶ原ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/184017/184017.jpg",
    "hotelMinCharge": 28600,
    "reviewAverage": "4.7",
    "reviewCount": 77,
    "address": "富山県中新川郡立山町芦峅寺弥陀ヶ原",
    "access": "立山駅よりケーブルカーとバスで約40分　「弥陀ヶ原バス停」下りてすぐ",
    "userReview": "とても楽しい滞在でした立山黒部を訪れる時にどこかで1泊したいと思い、こちらのホテルを選びました。弥陀ヶ原湿原のガイドツアーやスライドショーなど、滞在中のイベントが盛りだくさんでとても楽しめまし…",
    "label": "富山県立山町ふるさと納税・神々が宿る北アルプスの大自然と雲海「立山連峰」立山高原ホテル",
    "spotTitle": "富山県立山町ふるさと納税：標高1,930m・雲上の楽園に佇む山岳オフィシャルホテル「弥陀ヶ原ホテル」",
    "spotDesc": "立山黒部アルペンルートの高原地帯に建つ天空のホテル。ラムサール条約登録の弥陀ヶ原湿原が目の前に広がり、夕暮れ時には雲海に沈む夕日、夜には満天の天の川を鑑賞できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "mountain_hakusan",
    "hotelNo": 4817,
    "hotelName": "一里野高原ホテル　ろあん",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4817/4817.jpg",
    "hotelMinCharge": 15530,
    "reviewAverage": "4.1",
    "reviewCount": 152,
    "address": "石川県白山市尾添チ70-4",
    "access": "金沢駅より車で９０分｜北陸自動車道白山ＩＣ６０分｜北陸鉄道バス瀬女まで無料送迎可（前日までの予約制）",
    "userReview": "炉端焼とロボット接客に子供も大満足家族4人で避暑目的でお得に泊まれる宿を探していたところ、夕飯の炉端焼に惹かれて予約しました。建物自体は古いのですが、趣味のよい小物も多く、趣あるホテルといった…",
    "label": "石川県白山市ふるさと納税・白山信仰の聖地と囲炉裏炭火会席・源泉かけ流し「霊峰白山」一里野高原ホテルろあん",
    "spotTitle": "石川県白山市ふるさと納税：霊峰白山の麓・古民家移築の風情と囲炉裏炭火料理「一里野高原ホテル ろあん」",
    "spotDesc": "白山信仰の登山拠点として親しまれてきた山麓のリゾート。飛騨白川郷から移築した古民家の食事処でいただく囲炉裏炭火焼き会席や、白山山麓の源泉かけ流し天然温泉が心身を温めてくれます。",
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
            <span>日本三大霊峰・聖地温泉リトリート特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            古より人々が祈りを捧げ、崇敬を集めてきた「日本三大霊峰」——富士山、立山、白山。朝日に染まる神々しい稜線、眼下に広がる広大な雲海、そして山麓から湧き出づる霊験あらたかな名湯。三大霊峰の自然と神気に包まれる滞在は、忙しい現代人の魂を深く潤してくれます。楽天ふるさと納税の宿泊割引クーポンを活用して、心洗われる聖地への贅沢な旅へご案内します。
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
              客室の窓いっぱいに広がる霊峰の神々しいパノラマビュー
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              早朝のモルゲンロート（朝焼け）や夕景の赤富士など、刻一刻と表情を変える神聖な山肌をプライベート空間から眺められます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              標高数千メートルの雲海や手つかずの高山植物が広がる天空の世界
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              下界の蒸し暑さや喧騒を遠く離れ、澄み切った高冷地の空気と満天の星空に包まれる別次元のリフレッシュが叶います。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              山岳修験の歴史を伝える囲炉裏炭火会席と霊山山麓の名湯
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              霊山から湧き出る清らかな雪解け水で仕込んだ地酒や山菜、飛騨牛・能登牛、白山名物のジビエ料理を堪能できます。
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
