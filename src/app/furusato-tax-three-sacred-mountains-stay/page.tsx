import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税厳選ガイド富士山・立山・白山',
  description: '古来より山岳信仰の聖地として崇敬される日本三大霊峰（富士山・立山連峰・白山）。湖越しに望む逆さ富士、標高2,400mの雲海ホテル、白山信仰の囲炉裏炭火料理宿。楽天ふるさと納税の宿泊割引クーポンでお得に巡る完全ガイド。',
  keywords: ["高山温泉宿×ふるさと納税", "2026年最新", "富士山", "立山", "白山", "温泉宿", "宿泊予約"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-three-sacred-mountains-stay/",
  },
  openGraph: {
    title: '日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税厳選ガイド富士山・立山・白山',
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
    "userReview": "スタッフの接客が素晴らしく、また必ず来たい今回、2回目の訪問になります。スタッフの方のホスピタリティの高い接客に、最後まで気持ちよく利用することができました。また絶対お伺いしたいと思い。",
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
    "userReview": "とても楽しい滞在でした立山黒部を訪れる時にどこかで1泊したいと思い、こちらのホテルを選びました。弥陀ヶ原湿原のガイドツアーやスライドショーなど、滞在中のイベントが盛りだくさんでとても楽しめまし。",
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
    "userReview": "炉端焼とロボット接客に子供も大満足家族4人で避暑目的でお得に泊まれる宿を探していたところ、夕飯の炉端焼に惹かれて予約しました。建物自体は古いのですが、趣味のよい小物も多く、趣あるホテルといった。",
    "label": "石川県白山市ふるさと納税・白山信仰の聖地と囲炉裏炭火会席・源泉かけ流し「霊峰白山」一里野高原ホテルろあん",
    "spotTitle": "石川県白山市ふるさと納税：霊峰白山の麓・古民家移築の風情と囲炉裏炭火料理「一里野高原ホテル ろあん」",
    "spotDesc": "白山信仰の登山拠点として親しまれてきた山麓のリゾート。飛騨白川郷から移築した古民家の食事処でいただく囲炉裏炭火焼き会席や、白山山麓の源泉かけ流し天然温泉が心身を温めてくれます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoUpgradedPage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税完全ガイド【2026年最新】富士山・立山・白山",
    "description": "古来より山岳信仰の聖地として崇敬される日本三大霊峰（富士山・立山連峰・白山）。湖越しに望む逆さ富士、標高2,400mの雲海ホテル、白山信仰の囲炉裏炭火料理宿。楽天ふるさと納税の宿泊割引クーポンでお得に巡る完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-three-sacred-mountains-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税完全ガイド【2026年最新】富士山・立山・白山", "item": "https://croud-travel.pages.dev/furusato-tax-three-sacred-mountains-stay/" }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三大霊峰・聖地温泉リトリート特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税厳選ガイド</h1>
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
                <div className="flex flex-col">
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
    
      
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6 my-10 max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">📊 日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿×ふるさと納税厳選ガイド富士山・立山・白山：楽天トラベル高評価宿スペック比較表＆クチコミ徹底解説</h2>
          <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
            楽天トラベル公式APIから取得した全国の高評価宿データ（所在地・最寄り駅・駐車場・総合評価・参考最安料金）と実際の宿泊者レビューを整理しました。ふるさと納税の旅行クーポンや早期割引プランと併用することで、ワンランク上の滞在をお得に実現できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th><th className="p-3">所在地</th><th className="p-3">アクセス</th><th className="p-3">駐車場</th><th className="p-3">評価</th><th className="p-3">最安目安</th><th className="p-3">予約</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. ホテルニューオータニ幕張</td>
                <td className="p-3 text-stone-600">千葉県千葉市美浜区ひび野2-120-3</td>
                <td className="p-3 text-stone-600">海浜幕張</td>
                <td className="p-3 text-stone-600">有り/ 屋外平面300台（宿泊者無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.4（4344件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1609%2F1609.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 山代温泉　ゆのくに天祥</td>
                <td className="p-3 text-stone-600"></td>
                <td className="p-3 text-stone-600">【車】北陸自動車道加賀IC、片山津ICより約15分【電車】JR・IRいしかわ鉄道加賀温泉駅より無料送迎 予約制</td>
                <td className="p-3 text-stone-600">有り</td>
                <td className="p-3 font-bold text-amber-600">★4.5（3744件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1616%2F1616.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルオークラ神戸</td>
                <td className="p-3 text-stone-600">兵庫県神戸市中央区波止場町2-1  メリケンパーク内</td>
                <td className="p-3 text-stone-600">元町（兵庫）</td>
                <td className="p-3 text-stone-600">1泊1500円 ※予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.57（8846件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1648%2F1648.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 熱海温泉　熱海後楽園ホテル</td>
                <td className="p-3 text-stone-600">静岡県熱海市和田浜南町10-1</td>
                <td className="p-3 text-stone-600">熱海</td>
                <td className="p-3 text-stone-600">有り／120台　※2025年5月8日(木)より1泊につき500円/台(チェックアウト日の12時まで)</td>
                <td className="p-3 font-bold text-amber-600">★4.4（3218件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,320〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1656%2F1656.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 洲本温泉　夢海游　淡路島</td>
                <td className="p-3 text-stone-600">兵庫県洲本市山手1-1-50</td>
                <td className="p-3 text-stone-600">舞子</td>
                <td className="p-3 text-stone-600">有り　１００台収容可・無料</td>
                <td className="p-3 font-bold text-amber-600">★4.43（2443件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1657%2F1657.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">プラン確認</a></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold text-stone-900">🏨 注目宿のクチコミ・アクセス詳細</h3>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">1. ホテルニューオータニ幕張（千葉県・★4.4）</h4>
              <p><strong>【特徴】</strong>美しい海と幕張の市街地を望む絶好のロケーションでリゾート気分を満喫♪</p>
              <p><strong>【交通・駐車場】</strong>JR京葉線海浜幕張駅徒歩5分 蘇我駅約12分 幕張メッセ直結 東京ディズニーリゾート（R）グッドネイバーホテル ／ 駐車場：有り/ 屋外平面300台（宿泊者無料）</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「謎解きと美味しい食事でいつも大満足謎解きもあり、ご飯も最高に美味しくていつも楽しんでます。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/h…　2026-10-08 20:14:13投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=1609」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">2. 山代温泉　ゆのくに天祥（・★4.5）</h4>
              <p><strong>【特徴】</strong></p>
              <p><strong>【交通・駐車場】</strong>【車】北陸自動車道加賀IC、片山津ICより約15分【電車】JR・IRいしかわ鉄道加賀温泉駅より無料送迎 予約制 ／ 駐車場：有り</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「食事も温泉も接客も最高、また来たい旅館大変満足した1日でした。夕食、朝食共に見栄えに味申し分ありません。朝食は胃にとてもやさしい味付け。お風呂もとても素敵でした。担当に付いてくれた…　2026-09-19 13:47:08投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1616&quot; clas」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">3. ホテルオークラ神戸（兵庫県・★4.57）</h4>
              <p><strong>【特徴】</strong>神戸ポートタワーのとなり、35階建てホテル。夜景が自慢。ホテル～三宮間無料シャトルバス毎日運行</p>
              <p><strong>【交通・駐車場】</strong>ＪＲ神戸線・阪神線 元町駅から徒歩で10分。 新幹線 新神戸駅から 車で15分。 ／ 駐車場：1泊1500円 ※予約不要</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「LIVE後の利用に最適、清潔で親切な対応LIVE終わりの宿泊に利便性を考慮して選んだホテルですが最高のホテルでした三宮や元町方面にも徒歩可能ですが...暑い夏には少し距離感ありましたホテル…　2026-08-21 17:47:55投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=1648&quot;」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">4. 熱海温泉　熱海後楽園ホテル（静岡県・★4.4）</h4>
              <p><strong>【特徴】</strong>熱海の夜景と相模灘を眼前に望める絶好のロケーション！源泉を使用した大展望風呂で、ゆっくりと温泉三昧。</p>
              <p><strong>【交通・駐車場】</strong>東京から新幹線で50分！熱海駅よりタクシーで約10分。送迎バス　9:40～19:00まで40分毎 ／ 駐車場：有り／120台　※2025年5月8日(木)より1泊につき500円/台(チェックアウト日の12時まで)</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「オーシャンビューと美味しい料理に大満足オーシャンビューでバルコニーから海が良く見えました。料理も美味しくて沢山食べてしましました。クチコミの詳細はこちらから　https://revie…　2026-10-10 10:35:13投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=1656&quot; cl」</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2 text-xs text-stone-700 leading-relaxed">
              <h4 className="text-sm font-bold text-stone-900">5. 洲本温泉　夢海游　淡路島（兵庫県・★4.43）</h4>
              <p><strong>【特徴】</strong>2020年7月リニューアルの大浴場「森のSPA」や離れスパ海音の森など多彩な湯処と島の山海の幸を堪能</p>
              <p><strong>【交通・駐車場】</strong>車：洲本ICから10分／高速バス：大阪120分・三宮80分で洲本BCへ ／ 駐車場：有り　１００台収容可・無料</p>
              <p className="italic text-stone-600">💬 宿泊者レビュー：「料理も接客も素晴らしく、子供も大満足部屋も綺麗だったし接客も丁寧で夕食時の担当してくれた女性が子供にも優しくいい人でした。料理も美味しく7歳には子供会席、5歳にはお子様ランチで子供も美味しいと言っ…　2026-10-10 19:48:56投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=16」</p>
            </div>
          </div>
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h3 className="text-base font-bold text-stone-900">🗺️ 合わせて訪れたい日本の代表的観光名所ガイド</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 清水寺</h4>
              <p className="text-xs text-stone-600 leading-relaxed">「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 函館山（夜景）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 横浜みなとみらい21</h4>
              <p className="text-xs text-stone-600 leading-relaxed">ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <h4 className="text-sm font-bold text-stone-900">📍 国宝 姫路城（白鷺城）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
            </div>
            </div>
          </div>
        </section>

<HubRelatedPosts currentSlug="furusato-tax-three-sacred-mountains-stay" />
</div>
  );
}
