import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '最高級黒毛和牛ステーキ＆鉄板焼きカウンター宿×ふるさと納税完全ガイド【2026年最新】松阪牛・近江牛・米沢牛の美食ホテル',
  description: 'シェフの華麗な手さばきと極上肉の香り！三重松阪牛のA5サーロイン鉄板焼き、滋賀おごと温泉の日本三大和牛近江牛ステーキ、山形米沢牛の極上フィレ肉ディナー。目の前で焼き上がる音と芳醇な肉汁を名湯とともに楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: [
    '楽天ふるさと納税',
    'ふるさと納税 宿泊クーポン',
    '楽天トラベル ふるさと納税',
    '高級温泉旅館',
    '露天風呂付き客室',
    '2026年旅行'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kuroge-wagyu-teppanyaki-luxury-stay/'
  },
  openGraph: {
    title: '最高級黒毛和牛ステーキ＆鉄板焼きカウンター宿×ふるさと納税完全ガイド【2026年最新】松阪牛・近江牛・米沢牛の美食ホテル',
    description: 'シェフの華麗な手さばきと極上肉の香り！三重松阪牛のA5サーロイン鉄板焼き、滋賀おごと温泉の日本三大和牛近江牛ステーキ、山形米沢牛の極上フィレ肉ディナー。目の前で焼き上がる音と芳醇な肉汁を名湯とともに楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kuroge-wagyu-teppanyaki-luxury-stay',
    type: 'article',
    siteName: '旅宿クラウド'
  }
};

export default function FurusatoFeaturePage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>黒毛和牛鉄板焼き・美食カウンター特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            最高級黒毛和牛ステーキ＆鉄板焼きカウンター宿×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本三大和牛と称される「松阪牛」「近江牛」「米沢牛」。きめ細やかなサシ（霜降り）が美しく入り、低温で溶け出す上品な脂の甘みと赤身の深い旨味。客室付きのプライベートダイニングや、臨場感あふれる鉄板焼きカウンターで、シェフが絶妙な火入れで仕立てる最高級ステーキは記念日や特別な旅の主役にふさわしい贅沢です。名湯に浸かって日々の疲れを癒やし、極上の黒毛和牛コースに舌鼓を打つ夢のようなひとときを楽天ふるさと納税でお得に実現しましょう。
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心して活用いただけます。
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
          ジュワッと響く至高の音と立ち上る芳香。専属シェフが目の前で焼き上げる極上黒毛和牛ステイ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="0" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              五感で味わう鉄板焼きカウンター！焼き立て熱々の瞬間を堪能
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              フランベの炎、芳醇なガーリックと肉の香り、ナイフを入れた瞬間にあふれ出す肉汁を目の前で楽しむエンターテインメントディナー。
            </p>
          </div>
          
          <div key="1" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              A5ランク厳選部位のサーロイン・シャトーブリアン食べ比べ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              宿自慢の仕入れルートだからこそ味わえる希少部位や熟成肉。海鮮グリルや地元契約農家の旬野菜とともに贅を尽くせます。
            </p>
          </div>
          
          <div key="2" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ふるさと納税宿泊クーポンで憧れの高級鉄板焼きプランへ賢くアップグレード
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              寄附額の最大30%がクーポンとして還元されるため、通常プランから鉄板焼きカウンター指定コースへ無理なくグレードアップできます。
            </p>
          </div>
          
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          
          <div key="matsusaka_wagyu" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                三重県松阪市・湯の山温泉ふるさと納税：「肉の芸術品」松阪牛A5ランクサーロイン鉄板焼きと名湯の宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                深みのある赤身と上質な脂肪が織りなす「松阪牛」。職人が鉄板で香ばしく焼き上げ、伊勢湾の鮑や伊勢海老とともに味わう至高の晩餐。御在所岳を望む湯の山温泉の美肌湯に癒やされます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="12599"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/12599/12599.jpg"
                    alt="湯の山温泉　旅館寿亭"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.64 (1433件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    三重県三重郡菰野町菰野8585
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    湯の山温泉　旅館寿亭
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    選べる6つの貸切風呂と部屋食で味わう三重の旬。大切な人と気兼ねなく過ごす湯の山温泉の老舗旅館
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥12,650〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12599"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="13536"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/13536/13536.jpg"
                    alt="湯の山温泉　鹿の湯ホテル"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.52 (808件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    三重県三重郡菰野町菰野8520-1
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    湯の山温泉　鹿の湯ホテル
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    露天風呂付き客室・貸切風呂・無料スイーツカフェが人気■女性に色浴衣無料サービス■長島・鈴鹿近い温泉地
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥9,900〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13536"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="4723"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/4723/4723.jpg"
                    alt="リゾートヒルズ豊浜蒼空の風　～ＳＯＲＡ　ｎｏ　ＫＡＺＥ～"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.55 (1759件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    三重県鳥羽市相差町1471 ◆千鳥ヶ浜沿い高台／伊勢神宮３５分
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    リゾートヒルズ豊浜蒼空の風　～ＳＯＲＡ　ｎｏ　ＫＡＺＥ～
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    全プラン舟盛付！ハンモックやフィッシュ足湯で笑顔いっぱいの思い出を♪温泉を満喫できるアットホームな宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥11,550〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4723"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="omi_wagyu" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                滋賀県大津市・長浜太閤温泉ふるさと納税：日本最古のブランド牛「近江牛」の極上鉄板ステーキと琵琶湖畔リゾート
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                約400年の歴史を誇る近江牛。融点が低く滑らかな肉質を、琵琶湖のレイクビューを望む鉄板焼きカウンターで満喫。太閤秀吉ゆかりの名湯とともに優雅な夜を過ごせます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="13910"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/13910/13910.jpg"
                    alt="びわ湖畔　おいしい湯の宿　長浜太閤温泉　浜湖月"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.75 (69件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    滋賀県長浜市公園町4-25
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    びわ湖畔　おいしい湯の宿　長浜太閤温泉　浜湖月
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    琵琶湖を眺め、新鮮な湖国の幸を活かした料理自慢
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥16,500〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13910"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="38783"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/38783/38783.jpg"
                    alt="びわ湖畔　味覚の宿　双葉荘"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.58 (128件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    滋賀県彦根市松原町網代口1377
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    びわ湖畔　味覚の宿　双葉荘
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    びわ湖まで徒歩1分。 レイクビューの客室で美しい夕日と料理を堪能！
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥10,450〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38783"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="yonezawa_wagyu" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                山形県米沢市・小野川温泉ふるさと納税：寒暖差が育む究極の霜降り「米沢牛」フィレステーキと美人の湯宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                盆地特有の厳しい気候が極上の肉質を育てる米沢牛。箸で切れるほど柔らかい極上フィレステーキと、小野小町ゆかりの含硫黄ナトリウム塩化物泉で心身がとろける美食湯治ステイです。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="14534"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/14534/14534.jpg"
                    alt="小野川温泉　湯杜　匠味庵　山川　ｙｕｍｏｒｉ－ｓｈｏｍｉａｎ　ＹＡＭＡＫＡＷＡ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.2 (963件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    山形県米沢市小野川町2436
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    小野川温泉　湯杜　匠味庵　山川　ｙｕｍｏｒｉ－ｓｈｏｍｉａｎ　ＹＡＭＡＫＡＷＡ
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ～名湯一門　高見屋～★ 湯×味 ★ 「美人の湯」で癒されて、ここでしか味わえない美食の時間♪
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥8,250〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14534"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
        </div>
      </section>

      {/* 下部CTAバナー */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-stone-900 border border-amber-500/40 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100 mb-4">
              ふるさと納税の宿泊クーポンでお得に極上の旅へ
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              寄附上限額の範囲内なら、実質自己負担2,000円で憧れの特等席宿やリゾートに宿泊可能。楽天ポイント還元も併用して、賢く贅沢なひとときをお過ごしください。
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

      {/* 関連記事 内部リンク */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-200 mb-6">
          あわせて読みたい！テーマ別ふるさと納税トラベルガイド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link
            key="0"
            href="/furusato-tax-brand-pork-shabu-gourmet-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                銘柄豚・極上しゃぶしゃぶ料理の名湯宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                鹿児島黒豚・平田牧場金華豚・那須高原豚の美食旅。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="1"
            href="/furusato-tax-brand-jidori-mizutaki-gourmet-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                比内地鶏・土佐ジロー・黒さつま鶏の美食宿。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="2"
            href="/furusato-tax-sake-brewery-pairing-onsen-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                越後湯沢・諏訪・会津の名酒と温泉旅。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
        </div>
      </section>
    </div>
  );
}
