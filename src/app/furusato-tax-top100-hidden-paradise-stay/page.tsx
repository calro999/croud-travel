import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '秘境百選の隠れ宿と源泉秘湯オーベルジュ×ふるさと納税完全ガイド【2026年最新】祖谷・高千穂・秋山郷',
  description: '日常を遠く離れた山深き日本の桃源郷！平家落人伝説の徳島「祖谷渓谷」、神話のふるさと宮崎「高千穂峡」、豪雪と秘湯の長野「信州秋山郷」。ケーブルカーで下る谷底露天風呂や極上宿坊を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: ["日本の秘境百選","ホテル祖谷温泉","旅館神仙","切明リバーサイドハウス","秘湯旅館","高千穂峡","秋山郷","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-top100-hidden-paradise-stay',
  },
  openGraph: {
    title: '秘境百選の隠れ宿と源泉秘湯オーベルジュ×ふるさと納税完全ガイド【2026年最新】祖谷・高千穂・秋山郷',
    description: '日常を遠く離れた山深き日本の桃源郷！平家落人伝説の徳島「祖谷渓谷」、神話のふるさと宮崎「高千穂峡」、豪雪と秘湯の長野「信州秋山郷」。ケーブルカーで下る谷底露天風呂や極上宿坊を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-top100-hidden-paradise-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "hidden_iya",
    "hotelNo": 13663,
    "hotelName": "和の宿　ホテル祖谷温泉",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/13663/13663.jpg",
    "hotelMinCharge": 22000,
    "reviewAverage": "4.6",
    "reviewCount": 566,
    "address": "徳島県三好市池田町松尾松本367-28",
    "access": "井川池田ＩＣより約２５km（国道３２号線経由）／ＪＲ大歩危駅下車　四国交通バスで約30分　",
    "userReview": "階段を上り下りしてでも入りたい露天風呂山に包まれた、秘境感溢れる立地に、そして、谷底にある川のせせらぎを聞きながら浸かる風情溢れる露天風呂、本当に非日常を思う存分楽しめ、至福の時が過ごせました。…",
    "label": "徳島県三好市ふるさと納税・日本三大秘境・ケーブルカーで下る源泉かけ流し谷底露天「祖谷渓谷」和の宿ホテル祖谷温泉",
    "spotTitle": "徳島県三好市ふるさと納税：ケーブルカーで下る谷底源泉かけ流し露天「和の宿 ホテル祖谷温泉」",
    "spotDesc": "祖谷渓の断崖にせり出すように建つ秘境の一軒宿。傾斜角42度の専用ケーブルカーで約5分下った谷底には、毎分1500リットル自噴するエメラルドグリーンの源泉露天風呂が待ち受けます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "hidden_takachiho",
    "hotelNo": 30082,
    "hotelName": "高千穂　旅館　神仙",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/30082/30082.jpg",
    "hotelMinCharge": 49500,
    "reviewAverage": "4.8",
    "reviewCount": 243,
    "address": "宮崎県西臼杵郡高千穂町三田井1127-5",
    "access": "高千穂バスセンターよりタクシーで５分／九州自動車道　松橋ＩＣより車で約１００分",
    "userReview": "雨で観光は断念したが、快適に過ごせた雨がすごく高千穂渓谷には行けませんでしたが、お宿は快適でした。また、秋に伺います。クチコミの詳細はこちらから　https://review.trav…",
    "label": "宮崎県高千穂町ふるさと納税・神話が息づく天孫降臨の秘境・数寄屋造りの極上宿「高千穂峡」旅館神仙",
    "spotTitle": "宮崎県高千穂町ふるさと納税：神々の郷に佇む純和風数寄屋造りの名料亭旅館「高千穂 旅館 神仙」",
    "spotDesc": "神話のふるさと高千穂峡にほど近い、静寂に包まれた極上の日本旅館。全国の美食家が称賛する本格京風懐石と特選高千穂牛、隅々まで磨き抜かれた心づくしのおもてなしが至福の時を紡ぎます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "hidden_akiyamago",
    "hotelNo": 2379,
    "hotelName": "信州秋山郷　切明温泉　切明リバーサイドハウス",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/2379/2379.jpg",
    "hotelMinCharge": 11300,
    "reviewAverage": "4.6",
    "reviewCount": 74,
    "address": "長野県下水内郡栄村切明17878-2",
    "access": "ＪＲ越後湯沢から森宮野原行きバスで50分津南下車、乗換え路線バス終点地見玉よりデマンドバス（要予約）",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。素晴らしい滞在となりました。",
    "label": "長野県栄村・新潟県津南町ふるさと納税・苗場山麓の秘境と名湯「信州秋山郷・ニュー・グリーンピア津南」",
    "spotTitle": "長野県栄村ふるさと納税：苗場山麓の最奥・川原を掘れば温泉が湧き出る秘湯「信州秋山郷 切明リバーサイドハウス」",
    "spotDesc": "信州と越後の境、平家落人伝説が眠る秘境・秋山郷の最深部「切明温泉」。清流中津川のほとりに佇み、川原を自分で掘って自分だけの露天風呂を作る野趣あふれる秘湯体験が楽しめます。",
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
            <span>日本の秘境百選・桃源郷ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            秘境百選の隠れ宿と源泉秘湯オーベルジュ×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            険しい山々を越えた先に広がる、まるで時間が止まったかのような日本の桃源郷。平家落人伝説が息づく祖谷、神話のふるさと高千穂、そして豪雪の山深くに佇む秋山郷。大自然の懐に抱かれた極上の隠れ宿で、清流のせせらぎと満天の星、滋味豊かな山菜・ジビエ料理を堪能するひとときは何物にも代えがたい贅沢です。楽天ふるさと納税を活用して、憧れの秘境ステイを賢く叶えましょう。
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
              専用ケーブルカーで下る谷底の源泉かけ流し露天風呂など唯一無二の温泉体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              切り立った断崖の底、川のせせらぎの真横で湧き出るぬる湯の硫黄泉に浸かり、大自然と一体化する感動を味わえます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              神話や平家落人の歴史浪漫が息づく幽玄なロケーションと静寂
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              夜になると人工の光が遮られ、降るような星空と谷を抜ける風の音だけが響く至極のプライベートステイが約束されます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              祖谷そば・鮎の塩焼き・高千穂牛・山菜など里山テロワール会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              その土地でしか味わえない希少な食材を、料理長が心を込めて調理。滋味あふれる山のごちそうに舌鼓を打てます。
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
