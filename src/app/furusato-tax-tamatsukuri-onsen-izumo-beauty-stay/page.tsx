import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【玉造温泉×ふるさと納税】出雲大社参拝と神の湯美肌ステイ！化粧水いらずの名湯＆山陰味覚会席ガイド｜佳翠苑皆美・長楽園・白石家',
  description: '『出雲国風土記』に「一度洗えば容姿端麗、再び浴びれば万病治癒」と記された日本最古の美肌温泉・玉造温泉を楽天ふるさと納税で満喫！出雲大社への良縁祈願とセットで訪れたい老舗旅館「佳翠苑 皆美」、日本一の混浴大露天風呂を誇る「長楽園」、花あふれる純和風宿「白石家」を徹底解説。',
  keywords: '玉造温泉 ふるさと納税,出雲大社 温泉 旅館,佳翠苑皆美 ふるさと納税,長楽園 玉造温泉 クーポン,松江市 ふるさと納税 宿泊',
  openGraph: {
    title: '【玉造温泉×ふるさと納税】出雲大社参拝と神の湯美肌ステイ！化粧水いらずの名湯＆山陰味覚会席ガイド｜佳翠苑皆美・長楽園・白石家',
    description: '『出雲国風土記』に「一度洗えば容姿端麗、再び浴びれば万病治癒」と記された日本最古の美肌温泉・玉造温泉を楽天ふるさと納税で満喫！出雲大社への良縁祈願とセットで訪れたい老舗旅館「佳翠苑 皆美」、日本一の混浴大露天風呂を誇る「長楽園」、花あふれる純和風宿「白石家」を徹底解説。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-tamatsukuri-onsen-izumo-beauty-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-tamatsukuri-onsen-izumo-beauty-stay',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            【玉造温泉×ふるさと納税】出雲大社参拝と神の湯美肌ステイ！化粧水いらずの名湯＆山陰味覚会席ガイド｜佳翠苑皆美・長楽園・白石家
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            『出雲国風土記』に「一度洗えば容姿端麗、再び浴びれば万病治癒」と記された日本最古の美肌温泉・玉造温泉を楽天ふるさと納税で満喫！出雲大社への良縁祈願とセットで訪れたい老舗旅館「佳翠苑 皆美」、日本一の混浴大露天風呂を誇る「長楽園」、花あふれる純和風宿「白石家」を徹底解説。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">島根県松江市</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            神話の国・出雲で巡る美肌の湯、縁結びの祈りと山陰の至福会席——玉造温泉で過ごす潤いのふるさと納税旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            島根県松江市に位置し、奈良時代の『出雲国風土記』にも「ひとたび濯げば形容端正しく、再び浴すれば万の病ことごとく癒ゆ」と記された日本最古の美肌温泉・玉造温泉。その泉質は硫酸塩・塩化物泉で、保湿成分であるメタケイ酸やカルシウムイオンが豊富に含まれ、天然の化粧水と称されるほど高い美肌作用を誇ります。玉湯川沿いには風情ある旅館が建ち並び、桜並木や足湯、勾玉橋など、歩くだけで心が洗われる温泉街が広がっています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            玉造温泉は、日本屈指のパワースポットである「出雲大社」へのアクセスも抜群。出雲大社で良縁を祈願し、玉作湯神社で「願い石・叶い石」を授かり、美肌の湯に浸かるコースは、女子旅や夫婦・カップル旅行に絶大な人気を誇ります。さらに夕食には、日本海で獲れたのどぐろ、松葉ガニ、しまね和牛、宍道湖の七道など山陰の美食が勢揃い。松江市へのふるさと納税を活用すれば、30%相当のトラベルクーポンにより憧れの名門老舗旅館へお得に滞在できます。
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">島根県松江市のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>


          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7798/7798.jpg"
                alt="玉造温泉　佳翠苑　皆美"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.67（口コミ 1476件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">島根県松江市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  玉造温泉　佳翠苑　皆美
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百三十余年の歴史を誇る名門！手入れの行き届いた日本庭園と展望大浴場「天遊の湯」・秘伝の皆美鯛めし
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  玉造温泉 佳翠苑 皆美 —— 数寄屋の風情と名園の静寂。プロが選ぶ日本のホテル・旅館100選常連の格式宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階から玉造温泉街を見晴らす展望露天風呂「天遊の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">最上階に位置する展望露天風呂からは、玉造の山並みと街並みを一望。天然の化粧水と称される自家源泉が注がれ、朝夕で表情を変える絶景パノラマ湯浴みを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 松江藩主・松平不昧公ゆかりの秘伝「皆美家伝鯛めし」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">皆美館の歴史とともに受け継がれてきた名物料理。そぼろ状にした鯛の身、裏漉しした卵、出汁をかけて味わう伝統の鯛めしは、ここでしか味わえない至高の逸品です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> うるおい手湯足湯と四季の移ろいを映す日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内ロビーから眺める枯山水の美しい日本庭園。足湯や手湯処も整備され、温泉街の散策前後にもゆったりと癒しの時間を過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ1400件超。「おもてなし、お部屋、温泉、食事、すべてがパーフェクト」「朝食の鯛めしが忘れられない美味しさ」と絶賛の声が寄せられています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 島根県 松江市玉湯町玉造1218-8</div>
                <div>最寄り駅・アクセス: 米子自動車道　国道9号線で約50分。JR山陰本線　玉造温泉駅。</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥20,900〜</span></div>
                <div>ホテル番号: No.7798</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12628/12628.jpg"
                alt="玉造温泉　湯之助の宿　長楽園"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.36（口コミ 1929件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">島根県松江市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  玉造温泉　湯之助の宿　長楽園
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本一の広さを誇る百二十坪の混浴大露天風呂！一万坪の壮大な廻遊式日本庭園と湧き出る美肌源泉
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  玉造温泉 湯之助の宿 長楽園 —— 明治元年創業・玉造の湯守の歴史。大自然の湯船に抱かれる至極の湯浴み
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本一の広さを誇る混浴大露天風呂「龍宮の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">120坪という驚異的な広さを誇る源泉掛け流し露天風呂。湯浴み着を着用して入浴するため、家族やカップルで気兼ねなく広大な湯船を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 一万坪の広大な敷地に広がる廻遊式日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">四季折々の花々や池、小橋が配された名園。昭和天皇をはじめ多くの皇族や要人が宿泊された歴史があり、静かな散策路を歩くだけで心が整います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> しまね和牛と日本海の旬魚を味わう季節会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が選び抜いた山陰の山海の幸。のどぐろの塩焼きやしまね和牛のステーキなど、素材の鮮度と職人技が光る贅沢なディナーを堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.36点、口コミ1900件超。圧倒的な広さを誇る大露天風呂の開放感、手入れの行き届いた1万坪の庭園の美しさに深い感動の声が集まっています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 島根県 松江市玉湯町玉造323</div>
                <div>最寄り駅・アクセス: JR「玉造温泉駅」下車 ・タクシーで約10分/ 米子自動車道→山陰自動車道→松江・玉造ICより国道９号線経由</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥13,750〜</span></div>
                <div>ホテル番号: No.12628</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/78179/78179.jpg"
                alt="出雲・玉造温泉　白石家"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.69（口コミ 3977件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">島根県松江市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  出雲・玉造温泉　白石家
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業三百年・花と音楽でお迎えする老舗宿！総檜大浴場と毎夜開催される伝統芸能「安来節ショー」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  出雲・玉造温泉 白石家 —— 女性に優しいおもてなしの宿。総檜風呂の木の温もりと山陰美食の饗宴
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 古代檜の香りに包まれる総檜大浴場「白露の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">樹齢二千年の古代檜を贅沢に使用した大浴場。檜の清々しい香りと弱アルカリ性の美肌温泉が融合し、極上のリフレッシュ効果をもたらします。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 毎夜ロビーで開催される迫力の安来節生ライブ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">島根の伝統芸能「安来節（どじょうすくい）」の生演奏と踊りを毎晩ロビーで上演。観客も参加できる楽しい演出で、旅の夜を笑顔で締めくくれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 選べる色浴衣と細やかな女性向けアメニティ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">数十種類から選べる色浴衣の無料貸出や、こだわりのスキンケアアメニティを用意。女子旅や母娘旅行に嬉しい細やかな気配りが随所に施されています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.69点、口コミ約4000件という圧倒的支持。「スタッフの皆様が本当に親切で温かい」「安来節ショーがとても楽しく良い思い出になった」と高いリピート率を誇ります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 島根県 松江市玉湯町玉造44-2</div>
                <div>最寄り駅・アクセス: 【山陰道】玉造インターから車で約１０分 ■出雲大社から車で約４０分の距離 ■ＪＲ玉造温泉駅より送迎有（事前連絡要）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥13,000〜</span></div>
                <div>ホテル番号: No.78179</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D78179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            玉造温泉街のパワースポットめぐり＆出雲大社観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 玉作湯神社の「願い石・叶い石」と恋叶い橋
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">玉造温泉街の奥に鎮座する「玉作湯神社」。社務所で授かる「叶い石」を境内の「願い石」に触れさせて祈願するオリジナルの願掛けが全国から女性参拝者を集めています。宮橋（恋叶い橋）から鳥居を背景に写真を撮ると良縁に恵まれるというジンクスも有名です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 美肌温泉ボトルのテイクアウトと足湯散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">玉湯川沿いには「湯薬師広場」があり、備え付けのボトル（200円）に湧き出たばかりの新鮮な源泉を詰めて持ち帰ることができます。防腐剤無添加の天然化粧水として自宅でも美肌ケアが楽しめます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 出雲大社（いづもおおやしろ）と日御碕灯台
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">玉造温泉から車または電車で約1時間。大国主大神を祀る縁結びの聖地・出雲大社へ。神楽殿の大注連縄や本殿参拝の後は、門前の神門通りで出雲そばやぜんざいを味わい、日本一の高さを誇る白亜の「日御碕灯台」へ足を延ばすのが王道ルートです。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              島根県松江市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「島根県松江市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「松江市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で出雲大社参拝旅行を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。神在月（旧暦10月・11月頃）の出雲大社参拝や、春の桜シーズン、秋の味覚シーズンなど希望の日程に合わせて予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベルで玉造の宿を予約しクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">皆美、長楽園、白石家などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kinosaki-onsen-sotoyu-crab-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 城崎温泉 外湯めぐり＆松葉ガニ・但馬牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
