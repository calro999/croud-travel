import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税厳選ガイド白川水源・安曇野・柿田川',
  description: '大地が育んだ日本屈指の名水湧出地（熊本・南阿蘇白川水源、長野・安曇野わさび田湧水、静岡・富士山柿田川湧水群）。清冽な名水で仕込んだ地酒や信州蕎麦、名水豆腐に舌鼓を打ち、源泉名湯で癒やされる旅。楽天ふるさと納税完全活用。',
  keywords: ["美肌温泉宿×ふるさと納税", "2026年最新", "白川水源", "安曇野", "柿田川", "温泉宿", "宿泊予約"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-famous-spring-waters-healing-stay/",
  },
  openGraph: {
    title: '日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税厳選ガイド白川水源・安曇野・柿田川',
    description: '大地が育んだ日本屈指の名水湧出地（熊本・南阿蘇白川水源、長野・安曇野わさび田湧水、静岡・富士山柿田川湧水群）。清冽な名水で仕込んだ地酒や信州蕎麦、名水豆腐に舌鼓を打ち、源泉名湯で癒やされる旅。楽天ふるさと納税完全活用。',
    url: 'https://croud-travel.pages.dev/furusato-tax-famous-spring-waters-healing-stay/',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "spring_shirakawa",
    "hotelNo": 74601,
    "hotelName": "南阿蘇夢しずく温泉　別邸蘇庵",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/74601/74601.jpg",
    "hotelMinCharge": 30500,
    "reviewAverage": "4.7",
    "reviewCount": 243,
    "address": "熊本県阿蘇郡南阿蘇村河陰5-56",
    "access": "【長陽大橋開通】熊本ICより57号線経由車で50分・【 俵山トンネル経由】 熊本空港より車で約30分",
    "userReview": "すき焼きと釜炊きご飯が絶品、接客も丁寧露天風呂付き客室。風呂場は広いが湯船は少し狭い。自動湯はりシステムは、1度に出るお湯の量が少なく何度も出さなければならないのが少し面倒。ロケー。",
    "label": "熊本県南阿蘇村ふるさと納税・毎分60トンの名水を誇る白川水源と阿蘇五岳を望む美肌温泉「南阿蘇温泉ホテル夢しずく」",
    "spotTitle": "熊本県南阿蘇村ふるさと納税：名水・白川水源の郷・全室客室露天風呂付き離れ「南阿蘇夢しずく温泉 別邸蘇庵」",
    "spotDesc": "阿蘇五岳を一望する静寂の地に佇む大人の隠れ家。すべての客室に天然温泉の露天風呂を備え、阿蘇の湧水で育まれたあか牛や旬の野菜をふんだんに用いた創作懐石料理を堪能できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "spring_azumino",
    "hotelNo": 7149,
    "hotelName": "穂高温泉郷　安曇野穂高ビューホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/7149/7149.jpg",
    "hotelMinCharge": 13500,
    "reviewAverage": "4.3",
    "reviewCount": 1333,
    "address": "長野県安曇野市穂高牧2200-3",
    "access": "長野自動車道【安曇野IC】よりお車で約25分。【松本IC】よりお車で約40分／JR大糸線穂高駅よりバスで約15分　",
    "userReview": "ワインのコイン返却でリンゴジュースをゲットワインのコインを利用しなかったので、チェックアウトの時返したらリンゴジュース(缶)をもらいました。おいしかった。",
    "label": "長野県安曇野市ふるさと納税・北アルプスの清冽な雪解け水湧くわさび田と山麓の名湯「穂高温泉郷 穂高ビューホテル」",
    "spotTitle": "長野県安曇野市ふるさと納税：大王わさび田の湧水と北アルプスの森に包まれるリゾート「穂高温泉郷 安曇野穂高ビューホテル」",
    "spotDesc": "北アルプス安曇野の広大な赤松林の中に佇むホテル。天然ラドンを含む穂高温泉の大浴場・露天風呂や、清流の恵みである安曇野わさび、信州サーモンを取り入れたフレンチ・和食が魅力です。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "spring_kakitagawa",
    "hotelNo": 179020,
    "hotelName": "富士山三島東急ホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/179020/179020.jpg",
    "hotelMinCharge": 9800,
    "reviewAverage": "4.5",
    "reviewCount": 699,
    "address": "静岡県三島市一番町17-1",
    "access": "ＪＲ　三島駅（南口）／伊豆箱根鉄道　三島駅より徒歩にて約１分",
    "userReview": "三島駅を見下ろす眺望と豪華な朝食に満足いつも利用している三島駅を上空から眺める楽しい滞在を家族と過ごしました。朝食も豪華でとても良かった。",
    "label": "静岡県三島市・清水町ふるさと納税・富士山の伏流水が湧き出る東洋一の湧水群「柿田川湧水」富士山三島東急ホテル",
    "spotTitle": "静岡県三島市ふるさと納税：柿田川湧水群・富士山の伏流水を望む展望温浴「富士山三島東急ホテル」",
    "spotDesc": "三島駅直結、富士山と柿田川湧水群へのアクセス抜群なホテル。最上階の展望温浴施設からは霊峰富士の大パノラマを望み、駿河湾の海の幸や箱根西麓野菜を味わうグリル料理が楽しめます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  }
];

export default function FurusatoUpgradedPage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】白川水源・安曇野・柿田川",
    "description": "大地が育んだ日本屈指の名水湧出地（熊本・南阿蘇白川水源、長野・安曇野わさび田湧水、静岡・富士山柿田川湧水群）。清冽な名水で仕込んだ地酒や信州蕎麦、名水豆腐に舌鼓を打ち、源泉名湯で癒やされる旅。楽天ふるさと納税完全活用。",
    "url": "https://croud-travel.pages.dev/furusato-tax-famous-spring-waters-healing-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】白川水源・安曇野・柿田川", "item": "https://croud-travel.pages.dev/furusato-tax-famous-spring-waters-healing-stay/" }
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
            <span>日本名水百選・清冽リトリート特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税厳選ガイド</h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            幾重もの地層をくぐり抜け、気の遠くなるような歳月を経て湧き出づる「日本名水百選」の奇跡の水。毎分60トンの清冽な水が砂を巻き上げて噴き出す「白川水源」、北アルプスの雪解け水が広大なわさび田を潤す「安曇野」、富士山の伏流水が青く輝く東洋一の湧水「柿田川」。名水が育む採れたての旬菜、銘酒、そして名水仕込みの美肌温泉。楽天ふるさと納税の宿泊割引クーポンを駆使して、心身を清らかに潤す名水巡礼の旅へ出かけましょう。
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto shadow-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！</h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心してご活用いただけます。
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
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">この特集で出会える極上の滞在体験と3つの魅力</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="01" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              大地からコンコンと湧き出る透明度抜群の清冽な湧水で五感をリフレッシュ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              水底の砂を押し上げて湧き出す名水を汲み、その清らかさと口当たりの良さを現地で直接味わえます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              名水仕込みの信州手打ち蕎麦・名水豆腐・地酒・わさび料理の贅沢
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              清らかな水があるからこそ生まれる本物の味。雑味のない澄んだ味わいのグルメが旅の満足度を高めます。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              雄大な山麓から湧き出るミネラル豊富な天然温泉で肌を磨く湯浴み
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              阿蘇カルデラや北アルプス山麓の天然温泉。豊かな自然林に囲まれた露天風呂で心ゆくまで癒やされます。
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
                        <a href={h.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">
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
                        rel="sponsored noopener noreferrer"
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
          <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-4">ふるさと納税トラベルクーポンの簡単3ステップ</h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">寄附から割引適用まで全てオンラインで完結。実質2,000円の負担で憧れの名旅館や絶景リゾートをお得に楽しめます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 01</div>
              <h3 className="font-bold text-white mb-2">自治体に寄附する</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">宿泊したい施設がある自治体を選び、楽天ふるさと納税で寄附を申し込みます。楽天ポイントも通常通り進呈されます。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 02</div>
              <h3 className="font-bold text-white mb-2">クーポンが自動付与</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">寄附完了の翌日、楽天アカウントの「マイクーポン」に寄附額に応じた宿泊割引クーポンが自動的に追加されます。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800">
              <div className="text-2xl font-black text-amber-400 mb-2">STEP 03</div>
              <h3 className="font-bold text-white mb-2">楽天トラベルで予約</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">対象のホテル・旅館を予約する際、決済画面でクーポンを選択するだけで宿泊代金から最大30%が即座に割引されます。
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
            href="/furusato-tax-three-great-scenic-coasts-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大絶景海岸</span>
            <span className="font-bold text-white text-sm">【日本三大名勝海岸】東尋坊・浄土ヶ浜・白良浜ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-famous-waterfalls-healing-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名瀑ヒーリング</span>
            <span className="font-bold text-white text-sm">【日本三大名瀑】白糸・吹割・鮎帰りの滝の癒やし湯宿特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-hotsprings-luxury-villas-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大名湯の離れ</span>
            <span className="font-bold text-white text-sm">【日本三大名湯】草津・有馬・下呂の極上別邸ステイ特集</span>
          </Link>
          <Link
            href="/furusato-tax-three-great-tea-plantations-stay/"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition block"
          >
            <span className="text-xs font-bold text-amber-400 block mb-1">三大茶園テロワール</span>
            <span className="font-bold text-white text-sm">【日本三大茶園】牧之原・宇治・八女の茶香美食ステイ特集</span>
          </Link>
        </div>
      </section>
    
      
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税厳選ガイド白川水源・安曇野・柿田川：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税厳選ガイド白川水源・安曇野・柿田川」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 南阿蘇夢しずく温泉　別邸蘇庵</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南阿蘇村河陰5-56</td>
                <td className="p-3 text-stone-600">白水高原駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.69（243件）</td>
                <td className="p-3 font-bold text-rose-600">¥30,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74601%2F74601.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 穂高温泉郷　安曇野穂高ビューホテル</td>
                <td className="p-3 text-stone-600">長野県安曇野市穂高牧2200-3</td>
                <td className="p-3 text-stone-600">松本駅周辺</td>
                <td className="p-3 text-stone-600">有り　80台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.3（1339件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7149%2F7149.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 富士山三島東急ホテル</td>
                <td className="p-3 text-stone-600">静岡県三島市一番町17-1</td>
                <td className="p-3 text-stone-600">三島駅周辺</td>
                <td className="p-3 text-stone-600">提携駐車場／複合施設敷地内15台(屋外平面)1,500円/1泊(先着順)◆予約不可・途中出庫不可</td>
                <td className="p-3 font-bold text-amber-600">★4.52（690件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179020%2F179020.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税厳選ガイド白川水源・安曇野・柿田川エリアの宿泊施設別スペック＆滞在チェックポイント
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南阿蘇夢しずく温泉　別邸蘇庵</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆめしずくおんせん　べっていそあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥30,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/74601/74601_ky1.jpg" alt="南阿蘇夢しずく温泉　別邸蘇庵 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「日本名水百選の湧水地と名水仕込み美食・美肌温泉宿×ふるさと納税厳選ガイド白川水源・安曇野・柿田川」の旅の拠点として、落ち着いた客室環境と丁寧なおもてなしを備えた人気の宿泊施設です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南阿蘇村河陰5-56 ／ 最寄り駅：白水高原 ／ 交通案内：【長陽大橋開通】熊本ICより57号線経由車で50分・【 俵山トンネル経由】 熊本空港より車で約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「すき焼きと釜炊きご飯が絶品、接客も丁寧露天風呂付き客室。風呂場は広いが湯船は少し狭い。自動湯はりシステムは、1度に出るお湯の量が少なく何度も出さなければならないのが少し面倒。ロケー…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">穂高温泉郷　安曇野穂高ビューホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほたかおんせんきょう　あずみのほたかびゅーほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7149/7149_to.jpg" alt="穂高温泉郷　安曇野穂高ビューホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>松本エリアから車で約40分★口コミ朝食４．7 心癒す旅を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県安曇野市穂高牧2200-3 ／ 最寄り駅：松本 ／ 交通案内：長野自動車道【安曇野IC】よりお車で約25分。【松本IC】よりお車で約40分／JR大糸線穂高駅よりバスで約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　80台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「建物は古いが朝ごはんが最高に美味しい設備や建物は古いですが、朝ごはんが美味しくて最高でした。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富士山三島東急ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじさんみしまとうきゅうほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/179020/179020_kan1.jpg" alt="富士山三島東急ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>三島駅南口より徒歩1分★富士山の美しさを感じるアーバンリゾートホテル★最上階展望温浴施設がオススメ♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県三島市一番町17-1 ／ 最寄り駅：三島 ／ 交通案内：ＪＲ　三島駅（南口）／伊豆箱根鉄道　三島駅より徒歩にて約１分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携駐車場／複合施設敷地内15台(屋外平面)1,500円/1泊(先着順)◆予約不可・途中出庫不可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「セキリュティもよく安心して泊まれました。お風呂が最高です。三嶋大社や三島散策も近くて便利でした。また利用したいとおもいます。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>

      <HubRelatedPosts currentSlug="furusato-tax-famous-spring-waters-healing-stay" />
</div>
  );
}
