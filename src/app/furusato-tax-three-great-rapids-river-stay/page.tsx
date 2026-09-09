import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大急流の豪快な舟下りと大自然リバーサイド温泉宿×ふるさと納税完全ガイド【2026年最新】最上川・富士川・球磨川',
  description: '轟く水飛沫とダイナミックな渓谷美を誇る「日本三大急流」（山形・最上川、山梨・富士川、熊本・球磨川）。芭蕉ゆかりの舟下り、信玄の隠し湯・下部温泉、清流アユと天然露天風呂。楽天ふるさと納税宿泊クーポン完全活用。',
  keywords: ["日本三大急流","最上川別邸紅","下部ホテル","人吉温泉あゆの里","最上川舟下り","球磨川","リバーサイド温泉","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-rapids-river-stay/',
  },
  openGraph: {
    title: '日本三大急流の豪快な舟下りと大自然リバーサイド温泉宿×ふるさと納税完全ガイド【2026年最新】最上川・富士川・球磨川',
    description: '轟く水飛沫とダイナミックな渓谷美を誇る「日本三大急流」（山形・最上川、山梨・富士川、熊本・球磨川）。芭蕉ゆかりの舟下り、信玄の隠し湯・下部温泉、清流アユと天然露天風呂。楽天ふるさと納税宿泊クーポン完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-rapids-river-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "rapid_mogami",
    "hotelNo": 147592,
    "hotelName": "高見屋　最上川別邸　紅",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147592/147592.jpg",
    "hotelMinCharge": 10450,
    "reviewAverage": "4.3",
    "reviewCount": 405,
    "address": "山形県最上郡戸沢村古口3058",
    "access": "東京・仙台方面→東北自動車道→村田JCT→山形自動車道→山形北IC→国道13号→国道47号→宿",
    "userReview": "川の眺めは良いが工事の視線が気になったお風呂が残念部屋から目の前の川がよく見える所でよかったが反対側で工事をしている作業員が10名ほどこれ以上言わなくてもわかると思いますがチェックイン…",
    "label": "山形県戸沢村ふるさと納税・五月雨をあつめて早し最上川・芭蕉ゆかりの舟下りと清流露天「最上川別邸 紅」",
    "spotTitle": "山形県戸沢村ふるさと納税：最上川舟下りの乗船場直結・全室リバービューの隠れ宿「高見屋 最上川別邸 紅」",
    "spotDesc": "雄大な最上川のほとりに佇むデザイナーズ旅館。客室や露天風呂の目の前を舟下りの和船がゆったりと通り過ぎ、山形牛や日本海の幸を贅沢に使った創作会席を堪能できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "rapid_fuji",
    "hotelNo": 40916,
    "hotelName": "山梨県の温泉旅館　下部温泉郷　下部ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916.jpg",
    "hotelMinCharge": 15400,
    "reviewAverage": "4.4",
    "reviewCount": 1273,
    "address": "山梨県南巨摩郡身延町上之平1900",
    "access": "ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分",
    "userReview": "温泉と接客は最高だが夕食が期待外れ温泉はぬる湯とあつ湯で楽しめ、泉質も良かった。接客も質が高くここち良い。夕食のみ期待していた分、とても残念。一品一品をもっとおいしくしてほしい。お寿司はねっとりし…",
    "label": "山梨県身延町ふるさと納税・富士山の懐を貫く急流富士川と信玄の隠し湯「下部温泉 下部ホテル」",
    "spotTitle": "山梨県身延町ふるさと納税：富士川の懐・武田信玄の隠し湯と里山体験「下部温泉 下部ホテル」",
    "spotDesc": "日本の名湯百選・下部温泉の老舗ホテル。庭園内に湧く二種類の自家源泉（硫黄泉と単純泉）を十二の湯舟で湯巡りでき、甲州名物ほうとうやヤマメの塩焼き実演ビュッフェが好評です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "rapid_kuma",
    "hotelNo": 19539,
    "hotelName": "人吉温泉　あゆの里",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19539/19539.jpg",
    "hotelMinCharge": 9350,
    "reviewAverage": "4.5",
    "reviewCount": 968,
    "address": "熊本県人吉市九日町30",
    "access": "九州新幹線新八代駅から高速バスで約30分。周辺観光：青井阿蘇神社へ徒歩約10分。",
    "userReview": "毎年恒例の美味しい料理と景色に大満足ここ数年、あゆの里を利用させてもらっています。去年と一緒でお料理も美味しく、のんびり過ごさせて頂きました。お部屋からの景色も良かったです。また、来年…",
    "label": "熊本県人吉市ふるさと納税・日本三大急流球磨川のラフティングと木炭・アユの美食「清流山水花 あゆの里」",
    "spotTitle": "熊本県人吉市ふるさと納税：日本三大急流球磨川を一望する和モダン温泉リゾート「清流山水花 あゆの里」",
    "spotDesc": "球磨川の清流を望むテラスと足湯が心地よい名宿。源泉かけ流しの温泉大浴場や露天風呂、球磨川天然アユの塩焼きや極上黒毛和牛、球磨焼酎のペアリングを楽しめます。",
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
            <span>日本三大急流・水辺の躍動ステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大急流の豪快な舟下りと大自然リバーサイド温泉宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            山々を切り裂き、轟音とともに流れる圧倒的な水量とダイナミックな渓谷景観「日本三大急流」。「五月雨をあつめて早し」と詠まれた最上川の舟下り、甲州から駿河へと注ぐ急流富士川と名湯下部温泉、そして九州山地を潤す清流球磨川のラフティングとアユ美食。川のせせらぎとマイナスイオンに包まれ、贅沢な源泉かけ流し露天風呂に身を委ねる時間。楽天ふるさと納税の宿泊割引クーポンを利用して、実質2,000円の自己負担で叶える迫力満点のリバーサイドステイへご案内します。
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
              船頭の舟唄を聴きながら激流と奇岩をすり抜ける爽快な舟下り体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              四季折々の山肌が迫る大河を舟で下る迫力の時間。新緑や紅葉、冬の雪見舟など一年中楽しめます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              川のせせらぎを間近に感じるリバーサイド露天風呂と歴史ある名湯
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              武田信玄の隠し湯・下部温泉や人吉温泉など、豊富な湯量を誇る天然温泉でアクティビティの疲れを癒やせます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              鮎の塩焼き・米沢牛・甲州ワインビーフなど急流域が育む絶品グルメ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              清流で育った新鮮な川魚や地元のブランド肉を炭火で焼き上げる贅沢な夕食を満喫できます。
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
