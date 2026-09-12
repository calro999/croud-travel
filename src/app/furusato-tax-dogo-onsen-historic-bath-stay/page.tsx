import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【道後温泉×ふるさと納税】日本最古の湯・道後温泉本館と文学＆アートの街を旅する極上宿ガイド｜ふなや・大和屋本店・茶玻瑠',
  description: '日本書紀にも登場する日本最古の名湯・道後温泉を楽天ふるさと納税でお得に満喫！保存修理工事を終えた道後温泉本館の全館営業再開、夏目漱石「坊っちゃん」ゆかりの歴史、飛鳥乃湯泉や道後商店街の散策まで徹底案内。老舗最高峰「ふなや」、能舞台を擁する「大和屋本店」、屋上絶景露天の「茶玻瑠」をご紹介。',
  keywords: '道後温泉 ふるさと納税,道後温泉本館 旅館,ふなや 道後温泉 クーポン,大和屋本店 ふるさと納税,松山市 楽天トラベル クーポン',
  openGraph: {
    title: '【道後温泉×ふるさと納税】日本最古の湯・道後温泉本館と文学＆アートの街を旅する極上宿ガイド｜ふなや・大和屋本店・茶玻瑠',
    description: '日本書紀にも登場する日本最古の名湯・道後温泉を楽天ふるさと納税でお得に満喫！保存修理工事を終えた道後温泉本館の全館営業再開、夏目漱石「坊っちゃん」ゆかりの歴史、飛鳥乃湯泉や道後商店街の散策まで徹底案内。老舗最高峰「ふなや」、能舞台を擁する「大和屋本店」、屋上絶景露天の「茶玻瑠」をご紹介。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-dogo-onsen-historic-bath-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-dogo-onsen-historic-bath-stay',
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
            【道後温泉×ふるさと納税】日本最古の湯・道後温泉本館と文学＆アートの街を旅する極上宿ガイド｜ふなや・大和屋本店・茶玻瑠
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本書紀にも登場する日本最古の名湯・道後温泉を楽天ふるさと納税でお得に満喫！保存修理工事を終えた道後温泉本館の全館営業再開、夏目漱石「坊っちゃん」ゆかりの歴史、飛鳥乃湯泉や道後商店街の散策まで徹底案内。老舗最高峰「ふなや」、能舞台を擁する「大和屋本店」、屋上絶景露天の「茶玻瑠」をご紹介。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">愛媛県松山市</strong></span>
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
            三千年の歴史を誇る名湯、文学の息吹、飛鳥ロマン——道後温泉で過ごす上質な休日とふるさと納税活用術
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            聖徳太子や舒明天皇をはじめ、多くの皇族や文豪が訪れた記録が残る日本最古の温泉地・道後温泉。そのシンボルである木造三階建ての「道後温泉本館」は、長年の保存修理工事を終えて全館営業を再開し、明治の建築美と大浴場の風情が今ふたたび完全な姿で蘇りました。アルカリ性単純温泉の柔らかな湯は刺激が少なく、湯上がりの肌がしっとりと潤う「美人の湯」として古くから親しまれています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            さらに現代の道後温泉は、歴史情緒だけでなく「道後オンセナート」に代表される最先端のアートが融合した知的な温泉街としても大人気。夏目漱石の小説『坊っちゃん』の舞台となった街並みを歩き、道後麦酒館で地ビールを味わい、伊予牛や瀬戸内の真鯛を堪能する滞在は最高の贅沢です。松山市へのふるさと納税を活用すれば、名門旅館の宿泊代金を大幅に抑えながら、ワンランク上の客室や会席プランを手に入れることができます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">愛媛県松山市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/11332/11332.jpg"
                alt="道後温泉　ふなや"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.74（口コミ 2015件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛媛県松山市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後温泉　ふなや
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  寛永四年創業・道後随一の歴史を誇る名門老舗！皇族や夏目漱石が愛した千五百坪の日本庭園「詠風庭」と至高の湯
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  道後温泉 ふなや —— 390有余年の伝統とおもてなし。渓流と緑が包む広大な庭園で味わう極上の非日常
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 千五百坪の自然美が広がる庭園「詠風庭」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">御手洗川の清流が流れ、四季折々の草花が咲き誇る広大な日本庭園。夏目漱石や正岡子規、高浜虚子ら文人墨客が憩った足跡が残り、川床テラス「足湯カフェ」でのんびりと憩うことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 道後温泉の引き湯を満喫する檜と御影石の湯処
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大浴場「檜湯」と「御影湯」には、肌に優しい道後の源泉がたっぷりと注がれます。サウナや打たせ湯も備え、静かな庭園の緑を眺めながら心身を芯から解きほぐすことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 瀬戸内の天然真鯛と伊予牛を極める伝統会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">愛媛の豊かな海の幸・山の幸を知り尽くした料理長が紡ぐ四季会席。鯛の兜煮や鯛飯、肉質柔らかな伊予牛フィレステーキなど、歴史ある料亭旅館ならではの洗練された味わいが感動を呼びます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.74点、レビュー数2000件超えの名実ともに道後を代表する名館。庭園散策の素晴らしさ、スタッフ一人ひとりの品格ある所作、お部屋の快適さと料理の完成度に圧倒的な高評価が寄せられています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 愛媛県 松山市道後湯之町1-33</div>
                <div>最寄り駅・アクセス: 道後温泉駅から徒歩3分 松山ＩＣより車で25分 ＪＲ松山駅前から市内電車で30分 空港からリムジンバスで35分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥19,635〜</span></div>
                <div>ホテル番号: No.11332</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D11332"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/13429/13429.jpg"
                alt="道後温泉　大和屋本店"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.62（口コミ 2279件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛媛県松山市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後温泉　大和屋本店
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  本格数寄屋造りの純和風旅館！能舞台「千寿殿」を望むロビーと、道後初のフリーフローラウンジで優雅な滞在
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  道後温泉 大和屋本店 —— 能舞台の幽玄美と現代の粋。慶応四年創業の伝統が織りなす和モダン湯宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 館内に鎮座する本格能舞台「千寿殿」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ロビー正面に広がる檜造りの本格能舞台。定期的に能や狂言の解説付き公演や体験が催され、日本の伝統文化を身近に感じる唯一無二の滞在体験を提供しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 檜と岩の趣ある大浴場と充実の湯上がりサービス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">道後温泉本館からほど近い立地にありながら、広々とした大浴場と緑を望む露天風呂を完備。湯上がりラウンジでは、冷たい愛媛の日本酒やビール、名物駄菓子などが振る舞われます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和食・洋食・中華の巨匠が腕を振るう美食体験
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伝統的な日本料理会席はもちろん、瀬戸内フレンチや本格中国料理など、多彩なダイニングスタイルを選択可能。食のクオリティに対するこだわりは愛媛屈指と評されています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.62点、レビュー2200件超。道後温泉本館まで徒歩1分の好立地、能舞台の圧倒的な存在感、フリーフロースタイルのラウンジサービスと地酒の美味しさが特に高い支持を集めています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 愛媛県 松山市道後湯之町20-8</div>
                <div>最寄り駅・アクセス: ＪＲ『松山駅』より車で約20分・松山ＩＣより車で約２０分／松山空港より車で約３０分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥17,968〜</span></div>
                <div>ホテル番号: No.13429</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13429"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17668/17668.jpg"
                alt="道後温泉　茶玻瑠"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.13（口コミ 2819件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛媛県松山市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後温泉　茶玻瑠
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  道後温泉本館の真裏に佇むスタイリッシュリゾート！屋上露天風呂から松山城を遠望し、女性に愛される美食フレンチ＆和食
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  道後温泉 茶玻瑠 —— アートと光が彩る現代湯宿。松山パノラマを望む屋上露天と四季のイングリッシュガーデン
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 松山城と市街の夜景を見晴らす屋上露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">最上階10階に位置する屋上露天風呂「月の湯」「星の湯」。道後温泉街を見下ろし、天気の良い日には遠く松山城のライトアップや瀬戸内の夕暮れパノラマを望む絶景入浴が叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 世界的デザイナーによるイングリッシュガーデン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内には世界的ガーデナーが手掛けた開放的なイングリッシュガーデンが広がり、温泉旅館の枠を超えたスタイリッシュで心地よいリゾート空間を演出しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 女性人気の高い創作フレンチ＆伊予の旬会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元愛媛の新鮮野菜や瀬戸内の魚介をふんだんに取り入れたオープンキッチン形式の創作料理。見た目にも美しいコース料理は、女子旅やカップル旅行に絶大な支持を得ています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.13点、2800件以上の口コミ。道後温泉本館から徒歩30秒という抜群の立地、屋上露天風呂の開放感、そして朝食ビュッフェの美味しさとデザイン性の高い館内が高く評価されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 愛媛県 松山市道後湯月町4-4</div>
                <div>最寄り駅・アクセス: 私鉄伊予鉄道線道後温泉下車徒歩５分／ＪＲ予讃線松山駅下車タクシー１５分／松山空港から車で３０分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥7,700〜</span></div>
                <div>ホテル番号: No.17668</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D17668"
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
            道後温泉本館・別館飛鳥乃湯泉＆松山観光パーフェクトガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 道後温泉本館の全館再開と楽しみ方
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">重要文化財でありながら公衆浴場として営業を続ける道後温泉本館。神の湯・霊の湯の2つの大浴場に加え、坊っちゃんの間や又新殿（日本唯一の皇族専用浴室）の観覧など、建築遺産としての見どころが満載。混雑が予想されるため、早朝（朝6時開館）の入浴や事前の整理券確認がおすすめです。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 飛鳥乃湯泉（あすかのゆ）と椿の湯の湯巡り
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">本館から徒歩数分の場所にある「道後温泉別館 飛鳥乃湯泉」は、飛鳥時代の建築様式を取り入れた湯屋。愛媛の伝統工芸（砥部焼や大島石、今治タオルなど）と現代アートが融合した特別個室風呂は、プライベートな入浴を楽しみたい旅行者に大人気です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 坊っちゃん列車・松山城・道後ハイカラ通りの散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">道後温泉駅から伸びるアーケード商店街「道後ハイカラ通り」には、一六タルトや坊っちゃん団子、今治タオル専門店、愛媛みかんジュースの蛇口スタンドがずらり。レトロな「坊っちゃん列車」に乗って松山城の天守閣へ向かうショートトリップも定番のモデルコースです。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              松山市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 愛媛県松山市の返礼品クーポンを取得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「愛媛県松山市」のトラベルクーポンを返礼品として選択・寄付します。寄付完了後、数分以内に自分の楽天アカウントへ自動付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期限内で旅行プランを決定</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行からたっぷり3年間。道後温泉本館の予約や連休・週末の空室状況を見ながら、じっくりと旅行日程を組み立てられます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約時にクーポンを選択・割引即時適用</div>
              <p className="text-stone-200 leading-relaxed">ふなや、大和屋本店、茶玻瑠など松山市内の対象宿を予約する際、決済画面でクーポンを適用。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
              <Link href="/furusato-tax-gero-onsen-bihada-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 日本三名泉・下呂温泉 美肌の湯名宿ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
