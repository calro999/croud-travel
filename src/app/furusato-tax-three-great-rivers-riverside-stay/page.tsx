import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大河川の雄大な流れを望むリバーサイド名湯宿×ふるさと納税完全ガイド【2026年最新】利根川・筑後川・吉野川',
  description: '坂東太郎（利根川）・筑紫次郎（筑後川）・四国三郎（吉野川）と称される日本三大河川の雄大な流域美とせせらぎに癒やされる旅。水上温泉、筑後川温泉、大歩危峡の絶景露天風呂を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
  keywords: ["日本三大河川","利根川松乃井","筑後川温泉清乃屋","大歩危峡まんなか","リバーサイド温泉","水上温泉","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-rivers-riverside-stay',
  },
  openGraph: {
    title: '日本三大河川の雄大な流れを望むリバーサイド名湯宿×ふるさと納税完全ガイド【2026年最新】利根川・筑後川・吉野川',
    description: '坂東太郎（利根川）・筑紫次郎（筑後川）・四国三郎（吉野川）と称される日本三大河川の雄大な流域美とせせらぎに癒やされる旅。水上温泉、筑後川温泉、大歩危峡の絶景露天風呂を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-rivers-riverside-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "river_tone",
    "hotelNo": 9290,
    "hotelName": "大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/9290/9290.jpg",
    "hotelMinCharge": 14500,
    "reviewAverage": "4.1",
    "reviewCount": 3774,
    "address": "群馬県利根郡みなかみ町湯原551",
    "access": "関越道水上ＩＣより車５分、ＪＲ上越線水上駅より徒歩１５分。",
    "userReview": "プレミアム化で以前より質が低下し残念松乃井は3度目の利用ですが、プレミアムになってガッカリです。チェックインの行列がいつになってもなくならない。部屋には、15時にならないと入れなく、待合のラウ…",
    "label": "群馬県みなかみ町ふるさと納税・坂東太郎「利根川」源流のせせらぎと四つの源泉巡り「水上温泉 源泉湯の宿松乃井」",
    "spotTitle": "群馬県みなかみ町ふるさと納税：利根川源流の自然美と四つの源泉巡り「大江戸温泉物語Premium 松乃井」",
    "spotDesc": "利根川のせせらぎに包まれた1万坪の広大な庭園を有する温泉旅館。生きた源泉を贅沢に掛け流す四つの源泉湯巡りや、みなかみの大自然を望む露天風呂、上州の味覚ビュッフェが人気を集めています。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "river_chikugo",
    "hotelNo": 78128,
    "hotelName": "筑後川温泉　清乃屋",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/78128/78128.jpg",
    "hotelMinCharge": 7150,
    "reviewAverage": "4.3",
    "reviewCount": 721,
    "address": "福岡県うきは市浮羽町古川1099-3",
    "access": "大分自動車道　杷木ICより車で5分　久大本線　筑後大石駅よりお車にて５分",
    "userReview": "夕食は絶品だが朝食や設備に改善の余地あり久しぶりのリピ。リノベーションしてあった。外国の方が案内から配膳親切に接客。部屋は、露天風呂付きだったが源泉が熱いのかすぐ入れず温度調整は、セルフな…",
    "label": "福岡県うきは市ふるさと納税・筑紫次郎「筑後川」の優美な流れと美肌の自噴温泉「筑後川温泉 清乃屋」",
    "spotTitle": "福岡県うきは市ふるさと納税：筑紫次郎・筑後川のほとりに湧く美肌の自噴温泉「筑後川温泉 清乃屋」",
    "spotDesc": "筑後川の雄大な流れを客室や展望風呂から眺める癒やしの宿。ph8.5以上のアルカリ性単純硫黄温泉は「美肌の湯」として名高く、うきはの豊かなフルーツや郷土会席とともに極上の休息を届けます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "river_yoshino",
    "hotelNo": 53066,
    "hotelName": "峡谷の湯宿　大歩危峡まんなか",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53066/53066.jpg",
    "hotelMinCharge": 7500,
    "reviewAverage": "4.6",
    "reviewCount": 1884,
    "address": "徳島県三好市山城町西宇1644-1",
    "access": "大歩危駅より車で5分(徒歩20分)ご宿泊のお客様は送迎有（要予約）井川池田IC・大豊ICより各約30分　高知空港が最寄り",
    "userReview": "予想以上こういった立地のお宿は、実際行ってみると古さを感じるところが多くありますが、こちらは清潔感もあり、アメニティも豊富だったので、予想以上でした。お料理も美味しく、とても満足です。クチコミ…",
    "label": "徳島県三好市ふるさと納税・四国三郎「吉野川」激流の渓谷美を眼下に望む露天風呂「大歩危峡まんなか」",
    "spotTitle": "徳島県三好市ふるさと納税：吉野川が刻んだ大渓谷・大歩危峡を一望する絶景湯宿「峡谷の湯宿 大歩危峡まんなか」",
    "spotDesc": "四国三郎・吉野川の激流が創り出した大歩危峡の真上に位置する絶景宿。渓谷を眼下に望む露天風呂や、大歩危遊覧船乗り場すぐの好立地、阿波尾鶏や祖谷そばなどの郷土の恵みを堪能できます。",
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
            <span>日本三大河川・水辺の名湯特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大河川の雄大な流れを望むリバーサイド名湯宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            古来より日本の風土と文化を育んできた三大河川「坂東太郎・利根川」「筑紫次郎・筑後川」「四国三郎・吉野川」。滔々と流れる大河のせせらぎやダイナミックな峡谷を望む露天風呂は、日々の喧騒を洗い流してくれる格別の癒やし空間です。本特集では、大河のほとりに佇む屈指の名旅館・リゾートを厳選。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する極上リバーサイドステイへご案内します。
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
              大河の清らかなせせらぎに耳を澄ませるリバービュー露天風呂
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              客室テラスや大浴場から、時間とともに表情を変える大河の水面と周囲の山々を眺めながら優雅な湯浴みが楽しめます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              激流が削り出したダイナミックな渓谷美とラフティング体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              大歩危峡や利根川源流域では、奇岩が連なる峡谷の絶景クルーズやアクティブな川下りなど、水の躍動を体感できます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              鮎や山女魚、肥沃な流域の平野が育んだブランド和牛と新鮮野菜
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              清流の天然川魚や上州牛、博多和牛、阿波牛など、大河の豊かな恵みを凝縮した旬の会席料理を味わい尽くせます。
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
