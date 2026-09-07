import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大銘牛の極上鉄板焼き＆すき焼き名湯宿×ふるさと納税完全ガイド【2026年最新】松阪牛・神戸牛・米沢牛',
  description: '世界が絶賛する最高峰の和牛ブランド「日本三大和牛」（松阪牛・神戸ビーフ・米沢牛）。口の中でとろける極上の霜降り肉を、本場の名門料理旅館や名湯宿の客室・鉄板焼きカウンターで堪能。楽天ふるさと納税の宿泊割引クーポンを活用して、至高の美食温泉旅へ。',
  keywords: ["日本三大和牛","松阪牛鯛屋旅館","有馬温泉欽山","小野川温泉吾妻荘","神戸牛","米沢牛","鉄板焼き","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-wagyu-beef-luxury-stay',
  },
  openGraph: {
    title: '日本三大銘牛の極上鉄板焼き＆すき焼き名湯宿×ふるさと納税完全ガイド【2026年最新】松阪牛・神戸牛・米沢牛',
    description: '世界が絶賛する最高峰の和牛ブランド「日本三大和牛」（松阪牛・神戸ビーフ・米沢牛）。口の中でとろける極上の霜降り肉を、本場の名門料理旅館や名湯宿の客室・鉄板焼きカウンターで堪能。楽天ふるさと納税の宿泊割引クーポンを活用して、至高の美食温泉旅へ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-wagyu-beef-luxury-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "wagyu_matsusaka",
    "hotelNo": 189090,
    "hotelName": "鯛屋旅館",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/189090/189090.jpg",
    "hotelMinCharge": 4600,
    "reviewAverage": "4.0",
    "reviewCount": 38,
    "address": "静岡県富士市吉原2-3-21",
    "access": "吉原本町駅 徒歩約８分",
    "userReview": "登山前泊に最適、おもてなしと利便性が抜群富士山御殿場口新五合目から登るための前泊で泊まりました。良かったポイント・お店の方のおもてなしがとても良い・素泊まりが5000円程で安い・2…",
    "label": "三重県松阪市ふるさと納税・創業二百余年・肉の芸術品松阪牛元祖の味と城下町情緒「鯛屋旅館」",
    "spotTitle": "三重県松阪市ふるさと納税：創業二百余年・元祖松阪牛の味を代々守り続ける名門「鯛屋旅館」",
    "spotDesc": "江戸時代から城下町松阪の歴史とともに歩んできた老舗旅館。特選松阪牛のすき焼きや肉鍋料理を、歴史情緒あふれる個室で中居さんの丁寧な給仕とともに贅沢に味わい尽くせます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wagyu_kobe",
    "hotelNo": 53390,
    "hotelName": "有馬温泉　欽山",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390.jpg",
    "hotelMinCharge": 23650,
    "reviewAverage": "4.6",
    "reviewCount": 497,
    "address": "兵庫県神戸市北区有馬町1302-4",
    "access": "神戸電鉄「有馬温泉駅」より徒歩５分・山陽新幹線「新神戸駅」よりバスにて約30分・大阪（梅田）より高速バスにて約55分",
    "userReview": "誕生日祝いに最適、食事と接客に感動母親の誕生日祝いに初めてお世話になりました。部屋はとても広く清潔で快適でした。但、段差があちこちあるので、高齢者には常に注意を払う必要がありました。夕食、朝食共に…",
    "label": "兵庫県神戸市ふるさと納税・最高峰のA5特選神戸ビーフ会席と金泉名湯・数寄屋造りの名料亭旅館「有馬温泉 欽山」",
    "spotTitle": "兵庫県神戸市ふるさと納税：名湯有馬温泉の最高峰・特選神戸ビーフと数寄屋造りの料亭宿「有馬温泉 欽山」",
    "spotDesc": "ミシュランの星や数々の栄誉に輝く有馬温泉屈指の高級料亭旅館。A5ランク特選神戸牛を贅沢に用いた会席料理と、名湯「金泉」の露天風呂、洗練されたおもてなしで至高の寛ぎを提供します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "wagyu_yonezawa",
    "hotelNo": 75394,
    "hotelName": "小野川温泉　名湯の宿　吾妻荘　",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/75394/75394.jpg",
    "hotelMinCharge": 13500,
    "reviewAverage": "4.6",
    "reviewCount": 621,
    "address": "山形県米沢市小野川町2471",
    "access": "東北自動車道、福島JCTより東北中央道へ　米沢中央ＩＣより20分。",
    "userReview": "食事と温泉に満足、忘れ物の対応も迅速お部屋は落ち着いて過ごせましたし、食事もとても美味しかったです。お風呂は私には少し熱く感じましたが、硫黄のとても気持ちの良い温泉で何度も入ってしまいました。…",
    "label": "山形県米沢市ふるさと納税・極上の霜降り米沢牛サーロインと美肌の硫黄泉「小野川温泉 名湯の宿 吾妻荘」",
    "spotTitle": "山形県米沢市ふるさと納税：米沢牛の極上サーロインと美肌の源泉硫黄泉「小野川温泉 名湯の宿 吾妻荘」",
    "spotDesc": "米沢の奥座敷・小野川温泉に佇む温泉旅館。キメ細やかなサシが美しい米沢牛のステーキかすき焼きを選べるプランが好評で、源泉掛け流しの硫黄泉とともに至福のガストロノミーステイが楽しめます。",
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
            <span>日本三大和牛・極上ガストロノミー特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大銘牛の極上鉄板焼き＆すき焼き名湯宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本が世界に誇る肉の芸術品「松阪牛」「神戸ビーフ」「米沢牛」。徹底した血統管理と伝統の肥育技術によって生み出されるきめ細やかなサシ、甘みと芳醇な香りは、まさに至福の味覚体験です。本特集では、各産地の歴史ある温泉街で本物の三大和牛会席を供する名宿を厳選。楽天ふるさと納税の宿泊クーポンを活用して、実質2,000円の自己負担で叶える究極のガストロノミー温泉ステイをお届けします。
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
              融点の低い上質な脂が舌の上でとろける本物のA5特選黒毛和牛
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              産地直結だからこそ実現できる最高品質の牛肉。すき焼き・しゃぶしゃぶ・鉄板ステーキなど、最高の調理法で味わえます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              有馬の金泉や名湯温泉に浸かり、お腹も心も満たされる極上の休日
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              日本屈指の名湯で湯浴みを満喫した後にいただく極上和牛ディナー。これ以上ない贅沢なひとときが約束されます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              創業百余年を誇る名門料亭旅館の洗練されたおもてなしと個室食事
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              周囲に気兼ねなく、落ち着いた個室食事処や客室で、プライベート感あふれる美食の時間をゆっくり堪能できます。
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
