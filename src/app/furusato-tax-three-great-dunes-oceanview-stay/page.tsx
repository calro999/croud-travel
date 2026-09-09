import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大砂丘の壮大な風紋と夕日オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳥取砂丘・遠州砂丘・吹上浜',
  description: '海風が織りなす神秘的な風紋と、見渡す限りの砂と海のコントラスト「日本三大砂丘」（鳥取砂丘・遠州砂丘・吹上浜）。東シナ海や日本海に沈む夕日を望むオーシャンビュー露天風呂と新鮮な海の幸。楽天ふるさと納税の宿泊割引クーポンを利用して巡る絶景沿岸ステイ。',
  keywords: ["日本三大砂丘","鳥取砂丘岩井屋","御前崎グランドホテル","いせえび荘","遠州大砂丘","吹上浜","オーシャンビュー温泉","楽天ふるさと納税"],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-dunes-oceanview-stay/',
  },
  openGraph: {
    title: '日本三大砂丘の壮大な風紋と夕日オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳥取砂丘・遠州砂丘・吹上浜',
    description: '海風が織りなす神秘的な風紋と、見渡す限りの砂と海のコントラスト「日本三大砂丘」（鳥取砂丘・遠州砂丘・吹上浜）。東シナ海や日本海に沈む夕日を望むオーシャンビュー露天風呂と新鮮な海の幸。楽天ふるさと納税の宿泊割引クーポンを利用して巡る絶景沿岸ステイ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-dunes-oceanview-stay',
    siteName: '旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

const hotels = [
  {
    "key": "dune_tottori",
    "hotelNo": 68150,
    "hotelName": "岩井温泉　岩井屋",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68150/68150.jpg",
    "hotelMinCharge": 13200,
    "reviewAverage": "4.5",
    "reviewCount": 191,
    "address": "鳥取県岩美郡岩美町岩井544",
    "access": "岩美駅より日交バス≪岩井温泉行き≫約１０分、岩井温泉下車後徒歩すぐ",
    "userReview": "民藝の温かみと居心地の良さに大満足とにかく雰囲気が素敵すぎます。ロビー、お部屋、温泉、どこにいても居心地がいいです。民藝品の家具や小物、食器等が、ひとつひとつあたたかみがあってとてもお洒落。夕飯は…",
    "label": "鳥取県鳥取市・岩美町ふるさと納税・日本屈指の風紋パノラマ・鳥取砂丘と山陰最古の秘湯「岩井温泉 岩井屋」",
    "spotTitle": "鳥取県岩美町ふるさと納税：鳥取砂丘へ好アクセス・山陰最古の源泉かけ流し名宿「岩井温泉 岩井屋」",
    "spotDesc": "鳥取砂丘から車で約20分、創業1300年の歴史を誇る山陰最古の温泉地。木造建築の温もりと、足元から自噴する極上の源泉かけ流し温泉、日本海の松葉ガニや白イカ会席を堪能できます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "dune_enshu",
    "hotelNo": 181060,
    "hotelName": "御前崎グランドホテル",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/181060/181060.jpg",
    "hotelMinCharge": 6000,
    "reviewAverage": "2.0",
    "reviewCount": 16,
    "address": "静岡県御前崎市御前崎1412-1",
    "access": "掛川駅／静岡空港よりお車にて約４５分",
    "userReview": "絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。素晴らしい滞在となりました。",
    "label": "静岡県御前崎市ふるさと納税・遠州灘の雄大な波と風紋の丘・オーシャンフロント絶景「御前崎グランドホテル」",
    "spotTitle": "静岡県御前崎市ふるさと納税：遠州灘の波音と大砂丘パノラマ・全室オーシャンビュー「御前崎グランドホテル」",
    "spotDesc": "遠州灘と大砂丘のパノラマを一望する海辺のリゾートホテル。雄大な太平洋から昇る朝日と沈む夕日を眺めながら、御前崎港直送の新鮮な海の幸バイキングや温泉大浴場で寛げます。",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
  },
  {
    "key": "dune_fukiage",
    "hotelNo": 54146,
    "hotelName": "いせえび荘",
    "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/54146/54146.jpg",
    "hotelMinCharge": 8800,
    "reviewAverage": "4.7",
    "reviewCount": 239,
    "address": "鹿児島県南九州市頴娃町別府5202",
    "access": "JR水成川駅より徒歩約20分（車で約2分）、南薩縦貫道・南九州知覧ICより車で約20分／水成川駅より送迎有（事前要予約）",
    "userReview": "波の音に癒やされ、食事と接客も最高波の音がしてほっとゆっくり出来る宿でした。食事は最高でした。接客も丁寧で皆さん感じの良い方々でした。クチコミの詳細はこちらから　https://revie…",
    "label": "鹿児島県南さつま市・南九州市ふるさと納税・東シナ海に沈む夕日と日本三大砂丘吹上浜・開聞岳「いせえび荘」",
    "spotTitle": "鹿児島県南九州市ふるさと納税：吹上浜と東シナ海の夕日・名物伊勢海老料理の極上宿「いせえび荘」",
    "spotDesc": "薩摩富士と称される開聞岳を望む海沿いの名宿。目の前で獲れた新鮮な伊勢海老を刺身・塩焼き・味噌汁で味わい尽くす贅沢会席と、東シナ海を赤く染める夕景露天風呂が感動を呼びます。",
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
            <span>日本三大砂丘・風紋絶景オーシャンステイ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三大砂丘の壮大な風紋と夕日オーシャンビュー宿×ふるさと納税完全ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本にいながらにして砂漠のような神秘的な情景と、どこまでも続く水平線が融合する「日本三大砂丘」。風が砂地に描き出す一瞬の芸術「風紋」、黄金色に輝く夕暮れ時のマジックアワー。砂丘散策の後は、海辺の温泉宿で波音を聞きながら名湯に浸かり、獲れたての伊勢海老や旬魚を味わう贅沢。楽天ふるさと納税を活用して、記憶に深く刻まれる砂丘と海のリゾートへ出かけましょう。
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
              風が描き出す砂の芸術「風紋」と日本海・太平洋の圧倒的水平線
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              早朝の誰も足を踏み入れていない砂丘に広がる神秘的な風紋や、夕日に黄金色に輝く絶景を心ゆくまで堪能できます。
            </p>
          </div>
          <div key="02" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              水平線に沈む夕日と満天の星を望むオーシャンビュー露天風呂
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              波の音をBGMに、刻一刻と表情を変える海と空のグラデーションを眺めながら入浴する至福のリラックスタイム。
            </p>
          </div>
          <div key="03" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              水揚げされたばかりの活伊勢海老・松葉ガニ・金目鯛など極上の海の幸
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              砂丘の海沿いだからこそ味わえる鮮度抜群の海鮮料理。職人の技が光る舟盛りや名物料理を満喫できます。
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
