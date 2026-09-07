import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大花火大会の特等席と快適眺望ホテル×ふるさと納税完全ガイド【2026年最新】大曲・長岡・土浦',
  description: '夜空を揺るがす光と音の饗宴「日本三大花火大会」（秋田・大曲の花火、新潟・長岡まつり大花火大会、茨城・土浦全国花火競技大会）。内閣総理大臣賞を競う最高峰の煙火芸術や復興祈願フェニックス花火。楽天ふるさと納税完全活用。',
  keywords: ["日本三大花火大会","大曲の花火ルートイン","ホテルニューオータニ長岡","ホテルマロウド筑波","長岡花火","土浦全国花火","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-fireworks-resort-stay',
  },
  openGraph: {
    title: '日本三大花火大会の特等席と快適眺望ホテル×ふるさと納税完全ガイド【2026年最新】大曲・長岡・土浦',
    description: '夜空を揺るがす光と音の饗宴「日本三大花火大会」（秋田・大曲の花火、新潟・長岡まつり大花火大会、茨城・土浦全国花火競技大会）。内閣総理大臣賞を競う最高峰の煙火芸術や復興祈願フェニックス花火。楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-fireworks-resort-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "fireworks_omagari",
    "hotelNo": 70699,
    "hotelName": "ホテルルートイン　大曲駅前",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/70699/70699.jpg",
    "hotelMinCharge": 6650,
    "reviewAverage": "4.3",
    "reviewCount": 1512,
    "address": "秋田県大仙市大曲通町3-14",
    "access": "ＪＲ秋田新幹線大曲駅より徒歩３分/大曲I.Cより車で約10分/秋田市より秋田自動車道利用で約40分",
    "userReview": "駐車場が不便で精算の手間が惜しい提携駐車場の場所がホテル横に2軒あり、奥側とすぐには気づけなかった。一泊しただけで1500円程度手持ちキャッシュが無いと駐車場から出られず、両替が必要かつ、…",
    "label": "秋田県大仙市ふるさと納税・全国花火競技大会・内閣総理大臣賞を競う日本最高峰の花火芸術「大曲の花火」大曲ステイ",
    "spotTitle": "秋田県大仙市ふるさと納税：大曲の花火競技大会の拠点・大曲駅徒歩3分の快適ホテル「ホテルルートイン 大曲駅前」",
    "spotDesc": "全国花火競技大会「大曲の花火」会場へのアクセス抜群な駅前ホテル。活性石人工温泉大浴場を備え、花火観賞で冷えた身体を温め、秋田名物いぶりがっこや郷土朝食を楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "fireworks_nagaoka",
    "hotelNo": 2104,
    "hotelName": "ホテルニューオータニ長岡",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2104/2104.jpg",
    "hotelMinCharge": 8700,
    "reviewAverage": "4.3",
    "reviewCount": 2599,
    "address": "新潟県長岡市台町2丁目8番35号",
    "access": "上越新幹線・信越本線の長岡駅東口より徒歩２分／長岡ICから車で長岡駅方面約２０分／１泊１台１，０００円の駐車場あり",
    "userReview": "長岡駅に近くビジネス利用に便利でした。朝食が美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/2104?…",
    "label": "新潟県長岡市ふるさと納税・復興の祈りを捧げる正三尺玉とフェニックス花火「長岡まつり大花火大会」ホテルニューオータニ長岡",
    "spotTitle": "新潟県長岡市ふるさと納税：長岡まつり大花火大会のメイン拠点・信濃川の空を仰ぐシティホテル「ホテルニューオータニ長岡」",
    "spotDesc": "長岡駅東口直結の名門シティホテル。長岡花火の開催地・信濃川河川敷へのアクセス至便で、ニューオータニ伝統の洗練された料理と上質なホスピタリティで寛げます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "fireworks_tsuchiura",
    "hotelNo": 1812,
    "hotelName": "ホテルマロウド筑波",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1812/1812.jpg",
    "hotelMinCharge": 5200,
    "reviewAverage": "4.0",
    "reviewCount": 1566,
    "address": "茨城県土浦市城北町2-24",
    "access": "JR常磐線 土浦駅西口から徒歩１2分 お車でＴＸつくば駅から２５分 常磐道桜土浦ＩＣから１５分 土浦北ＩＣから１０分",
    "userReview": "急な予約にも快く対応、また利用したい急な予約でしたが、ご対応いただきましてありがとうございました。また茨城へ行く際には、金額もお手頃なので利用したいと思います。クチコミの詳細はこちらから　…",
    "label": "茨城県土浦市ふるさと納税・秋の夜空を彩る煙火芸術の頂上決戦「土浦全国花火競技大会」ホテルマロウド筑波",
    "spotTitle": "茨城県土浦市ふるさと納税：秋の夜空を彩る土浦全国花火競技大会の特等席ホテル「ホテルマロウド筑波」",
    "spotDesc": "土浦全国花火競技大会が開催される桜川河畔にほど近いシティホテル。最上階のスカイレストランからは霞ヶ浦や筑波山を望み、地元茨城の常陸牛や新鮮野菜を味わえます。",
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
            <span>日本三大花火・光と音の特等席特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大花火大会の特等席と快適眺望ホテル×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            一瞬の輝きに魂を込める花火師たちの技術の粋と、夜空いっぱいに広がる大輪の火の華「日本三大花火大会」。全国の精鋭が覇を競う「大曲の花火」、信濃川の夜空に打ち上がる大迫力の正三尺玉とフェニックス「長岡花火」、秋風の中で繰り広げられる煙火競技の最高峰「土浦花火」。胸の奥まで響く重低音と煌めく光のシャワーに心を奪われる至福の夜。楽天ふるさと納税の宿泊クーポンを駆使して、日本の夏の風物詩を快適に味わうプレミアムステイをお楽しみください。
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
              視界を覆い尽くす超大型ワイドスターマインと大地を揺るがす大迫力の轟音
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日本最高峰の花火師たちが技を競い合う芸術玉。色彩と音楽が完全にシンクロする至高のエンターテインメント。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              花火終了後の大混雑を避けてゆったり休める駅前・近隣ホテルステイ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              数十万人が集う花火大会でも、会場近くのホテルを確保しておけば余韻に浸りながらスムーズにチェックイン可能。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              秋田比内地鶏・新潟魚沼産コシヒカリ・茨城常陸牛など銘醸地グルメ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              花火大会の興奮をそのままに、各地が誇る銘酒と郷土の贅を尽くしたディナーに舌鼓を打てます。
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
