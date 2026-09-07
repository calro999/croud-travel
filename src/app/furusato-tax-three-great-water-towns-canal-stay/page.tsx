import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大水郷の情緒あふれる川下りと水辺の名旅館×ふるさと納税完全ガイド【2026年最新】近江八幡・柳川・潮来',
  description: '白壁土蔵が水面に映える滋賀・近江八幡の八幡堀、どんこ舟で巡る福岡・柳川の掘割と鰻せいろ蒸し、十二橋めぐりとあやめ薫る茨城・潮来。日本の水郷情緒に癒やされる旅。楽天ふるさと納税宿泊クーポン完全活用。',
  keywords: ["日本三大水郷","近江八幡休暇村","柳川立花邸御花","潮来ホテル","水郷巡り","川下り","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-water-towns-canal-stay',
  },
  openGraph: {
    title: '日本三大水郷の情緒あふれる川下りと水辺の名旅館×ふるさと納税完全ガイド【2026年最新】近江八幡・柳川・潮来',
    description: '白壁土蔵が水面に映える滋賀・近江八幡の八幡堀、どんこ舟で巡る福岡・柳川の掘割と鰻せいろ蒸し、十二橋めぐりとあやめ薫る茨城・潮来。日本の水郷情緒に癒やされる旅。楽天ふるさと納税宿泊クーポン完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-water-towns-canal-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "town_omihachiman",
    "hotelNo": 76886,
    "hotelName": "休暇村　近江八幡",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76886/76886.jpg",
    "hotelMinCharge": 13000,
    "reviewAverage": "4.3",
    "reviewCount": 785,
    "address": "滋賀県近江八幡市沖島町宮ヶ浜",
    "access": "JR　近江八幡駅より近江鉄道バス休暇村行きにて約43分　※近江鉄道バス休暇村行き、土日祝日運休",
    "userReview": "近江牛は絶品だが部屋や設備に難あり東館なら落ち着いて過ごせると思って選んだのですが、お子様連れがたくさんいらっしゃって賑やかでした...夏休み中だし仕方ないのかもですが、夕食会場が宴会…",
    "label": "滋賀県近江八幡市ふるさと納税・白壁土蔵と水郷巡り・近江商人の伝統息づく八幡堀「休暇村 近江八幡」",
    "spotTitle": "滋賀県近江八幡市ふるさと納税：琵琶湖水辺のパノラマ温泉と日本三大和牛近江牛「休暇村 近江八幡」",
    "spotDesc": "八幡堀の水郷巡りや琵琶湖の自然を満喫できる湖畔の温泉宿。宮ヶ浜の目の前に位置し、近江牛ディナービュッフェや天然温泉「村ひとつ星の湯」から望む琵琶湖の夕景が旅人を魅了します。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "town_yanagawa",
    "hotelNo": 29756,
    "hotelName": "柳川藩主立花邸　御花",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29756/29756.jpg",
    "hotelMinCharge": 28435,
    "reviewAverage": "4.9",
    "reviewCount": 158,
    "address": "福岡県柳川市新外町1",
    "access": "佐賀空港よりリムジンバスで30分／西鉄柳川駅よりタクシーで約１０分／九州自動車道みやま・柳川ＩＣより約25分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。素晴らしい滞在となりました。",
    "label": "福岡県柳川市ふるさと納税・水路をゆったり進むどんこ舟川下りと名物うなぎのせいろ蒸し「柳川藩主立花邸 御花」",
    "spotTitle": "福岡県柳川市ふるさと納税：柳川掘割川下り発着点・旧藩主の泊まれる国名勝文化財「柳川藩主立花邸 御花」",
    "spotDesc": "旧柳川藩主・立花家の広大な敷地に佇む歴史の宿。国指定名勝の庭園「松濤園」を眺めながら、名物・うなぎのせいろ蒸しや有明海の珍味を取り入れた本格会席を味わう特別な宿泊体験が叶います。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "town_itako",
    "hotelNo": 52239,
    "hotelName": "潮来ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/52239/52239.jpg",
    "hotelMinCharge": 7700,
    "reviewAverage": "3.4",
    "reviewCount": 232,
    "address": "茨城県潮来市あやめ1-10-7",
    "access": "鹿島工業地帯まで車で20分、東京から車または高速バスで90分（バス停まで無料送迎有）、JR潮来駅徒歩4分",
    "userReview": "寮のように気軽にコスパ良く過ごせた寮のように気軽にコスパ良く滞在できて良かったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…",
    "label": "茨城県潮来市ふるさと納税・前川あやめ園と十二橋めぐり・利根川下流の水郷情緒「潮来ホテル」",
    "spotTitle": "茨城県潮来市ふるさと納税：前川あやめ園と利根川水系の水郷情緒漂う老舗「潮来ホテル」",
    "spotDesc": "初夏には白や紫のあやめが咲き誇る水郷潮来の中心に位置するホテル。利根川や霞ヶ浦水系の雄大な水景を望み、水郷潮来ならではの川魚料理や常陸牛、地酒とともにゆったり寛げます。",
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
            <span>日本三大水郷・舟運川下り特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大水郷の情緒あふれる川下りと水辺の名旅館×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            水とともに生き、豊かな生活文化を育んできた「日本三大水郷」。近江商人の栄華を伝える八幡堀とヨシ原が広がる「近江八幡」、縦横に巡らされた掘割を竿一本で巧みに操る川下りが名物の「柳川」、前川のあやめと利根川水系の舟運の歴史が息づく「潮来」。櫓の音や川のせせらぎに耳を澄まし、獲れたての湖魚や名物うなぎ料理を味わう贅沢。楽天ふるさと納税の宿泊クーポンを活用して、水辺の情緒あふれる大人の休息旅へご案内します。
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
              竿一本で巧みに水路を進むどんこ舟や手漕ぎ和船で巡る水辺の原風景
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              柳並木や白壁土蔵、ヨシの群生地を水面すれすれの目線から眺め、心地よい風と櫓の音に身を委ねる癒やしの舟旅。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              水郷の歴史薫る大名屋敷や湖畔のリゾートで過ごす非日常のひととき
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              柳川藩主の旧邸宅に泊まる貴重な文化体験や、琵琶湖を一望する天然温泉など、水辺ならではの風情を満喫できます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              名物うなぎのせいろ蒸し・近江牛会席・常陸牛など水郷自慢の郷土美食
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              ふっくらと蒸し上げられたタレ香るうなぎ料理や日本三大和牛の近江牛など、水辺の町が育んだ絶品グルメを堪能。
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
