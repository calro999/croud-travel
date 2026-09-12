import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日本三名泉・天下の名湯！下呂温泉の美肌の湯めぐり＆国登録有形文化財・極上飛騨牛会席×ふるさと納税完全攻略ガイド【2026年最新】水明館・望川館・湯之島館',
  description: '有馬・草津と並ぶ日本三名泉・岐阜県下呂温泉！美容液のような滑らかなpH9.2アルカリ性単純温泉。「下呂温泉 水明館」「下呂温泉 望川館」「下呂温泉 湯之島館」を、岐阜県下呂市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。三大大浴場、千百坪日本庭園、昭和初期木造建築美、最高峰飛騨牛会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '下呂温泉 日本三名泉＆名門宿特集',
    '楽天ふるさと納税 トラベル',
    '下呂温泉　水明館',
    '下呂温泉　望川館（ぼうせんかん）',
    '下呂温泉　湯之島館',
    '高級温泉旅館',
    '絶景露天風呂',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-gero-onsen-bihada-luxury-stay',
  },
  openGraph: {
    title: '日本三名泉・天下の名湯！下呂温泉の美肌の湯めぐり＆国登録有形文化財・極上飛騨牛会席×ふるさと納税完全攻略ガイド【2026年最新】水明館・望川館・湯之島館',
    description: '有馬・草津と並ぶ日本三名泉・岐阜県下呂温泉！美容液のような滑らかなpH9.2アルカリ性単純温泉。「下呂温泉 水明館」「下呂温泉 望川館」「下呂温泉 湯之島館」を、岐阜県下呂市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。三大大浴場、千百坪日本庭園、昭和初期木造建築美、最高峰飛騨牛会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-gero-onsen-bihada-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoGeroOnsenBihadaStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">下呂温泉 日本三名泉＆名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          日本三名泉・美肌の湯！岐阜県下呂温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          日本三名泉・天下の名湯！下呂温泉の美肌の湯めぐり＆国登録有形文化財・極上飛騨牛会席×ふるさと納税完全攻略ガイド【2026年最新】水明館・望川館・湯之島館
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          飛騨川のせせらぎ、湯煙立ちのぼる白鷺の湯。絹のように滑らかな美肌の湯に包まれる下呂温泉の休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          室町時代の詩僧・万里集九や、江戸時代の儒学者・林羅山によって「有馬温泉」「草津温泉」とともに日本三名泉の一つとして天下に轟く岐阜県「下呂温泉（げろおんせん）」。傷ついた白鷺が泉源を教えたという伝説が残り、千有余年の長きにわたり旅人の心と体を癒やし続けてきました。下呂温泉の最大の誇りは、「天然の美肌液」と称される極上の泉質。pH9.2前後のアルカリ性単純温泉は、無色透明でほのかな硫黄の香りが漂い、肌に触れた瞬間にトロリとまとわりつくようなまろやかな感触が特徴です。古い角質を落とし肌をつるつるに整えるクレンジング効果と高い保湿効果を誇り、一度入浴すればその違いを実感できます。宿の露天風呂から飛騨川の清流や山々の稜線を眺めながら入る温泉は、まさに極楽の心地。さらに食事は、豊かな大自然と清流が育んだ最高峰のブランド黒毛和牛「飛騨牛（ひだぎゅう）」。美しい霜降りのサーロインステーキや陶板焼き、名物朴葉味噌（ほおばみそ）焼きなど、料理人が腕を振るう華やかな本格会席料理が旅を至高の歓びで満たしてくれます。本特集では、創業九十余年の歴史を誇り館内に三つの異なる大浴場を擁する象徴的宿「下呂温泉 水明館」、飛騨川沿いの一千百坪もの壮大な日本庭園と開放感あふれる大露天風呂が自慢の「下呂温泉 望川館」、そして昭和6年築の国登録有形文化財の木造建築美と五万坪の森林に佇む最高峰「下呂温泉 湯之島館」の3大名宿を厳選。岐阜県下呂市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの下呂温泉ステイをお得に予約しましょう。
        </p>
        <div className="bg-white/90 rounded-xl p-4 md:p-5 border border-amber-300 shadow-sm">
          <h3 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-1.5">
            <span>📌</span> なぜ「ふるさと納税×楽天トラベル」が選ばれているのか？
          </h3>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>寄付額の最大30％が宿泊クーポンとして即時付与</strong>され、楽天ポイントも二重に貯まる</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>有効期限はたっぷり3年間！</strong>寄付後に旅行時期や部屋タイプをじっくり選べる安心設計</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span>予約済み日程への<strong>「あとからクーポン適用」</strong>にも対応（※条件あり）で直前でも安心</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 rounded-xl p-5 mb-12 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📑</span> 目次
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">下呂温泉 日本三名泉＆名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】下呂温泉　水明館</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】下呂温泉　望川館（ぼうせんかん）</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】下呂温泉　湯之島館</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 下呂温泉 日本三名泉＆名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">日本三名泉・天然の化粧水「美肌の湯」！pH9.2のトロトロ温泉で至極の癒やし</h3>
            <p className="text-sm text-gray-600 leading-relaxed">肌にしっとりと馴染む美容液のような泉質。湯上がりのつるつる感と体の芯からポカポカ温まる持続力は感動的です。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">ブランド黒毛和牛「飛騨牛」の極上会席！朴葉味噌焼きやすき焼きの贅沢な饗宴</h3>
            <p className="text-sm text-gray-600 leading-relaxed">とろけるような脂の甘みと濃厚な赤身の旨味。飛騨の地酒とともに味わう贅を尽くしたディナーを堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">下呂市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">名古屋から特急ひだで約1時間半の好アクセス。寄付から3年間有効なので、新緑や紅葉、冬の雪見風呂に合わせて計画できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            下呂温泉　水明館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">岐阜県下呂市・創業九十余年の象徴！飛騨川沿い「野天風呂」「展望大浴場」「檜風呂」の三大大浴場巡り＆飛騨牛会席（水明館・口コミ6,200件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 岐阜県下呂市幸田1268</div>
            <div><strong>アクセス:</strong> ＪＲ高山本線下呂駅より徒歩３分【下呂駅まで随時送迎バス有】／中央自動車道 中津川ＩＣよりＲ２５７で約６０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.35</span> (6222件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,250円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">飛騨川のほとりに広大な敷地を持つ、下呂温泉を代表する創業九十余年の老舗旅館。館内には「青嵐荘」「臨川閣」「飛泉閣」「山水閣」の4つの館があり、皇族やVIPをお迎えしてきた格式を誇ります。最大の自慢は、館内にいながらにして楽しめる3つの異なる大浴場。「巨岩を配した野天風呂」「下呂の街並みと夜景を一望する展望大浴場」「木の香りが心地よい総檜風呂」のすべてで名湯を満喫できます。夕食は最高ランク飛騨牛を取り入れた伝統の本格和食会席料理のほか、本格欧風フレンチや中国料理レストランも完備。美術品が並ぶロビーや日本庭園など、細部にまで至高の美意識が宿る名旅館です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              趣のことなる三箇所の大浴場と充実した設備が自慢です。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “館内の素晴らしさと温泉三昧で大満足水明館は一人旅にはちょっと泊まりにくい宿のイメージがあり今回初の宿泊をさせてもらいました。さすがに館内素晴らしく驚嘆せざるを得ませんでした.三箇所ある温泉もどれも…　2026-09-05 19:47:53投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8886%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 2 */}
      <section id="hotel-2" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第2選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            下呂温泉　望川館（ぼうせんかん）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">岐阜県下呂市・飛騨川を望む一千百坪の壮大な日本庭園！四季の自然美と開放感抜群の大露天風呂＆飛騨牛料理（望川館）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 岐阜県下呂市湯之島190-1</div>
            <div><strong>アクセス:</strong> 中津川ＩＣよりR257約1時間。ＪＲ高山線下呂駅より無料送迎（時間等詳細はお問い合わせください）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.21</span> (1591件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">清流・飛騨川に面して広がる一千百坪もの広大な日本庭園が旅人を迎える、情緒あふれる名門温泉宿。四季折々に表情を変える庭園では、春の桜、初夏の新緑、秋の紅葉、冬の雪景色と、散策するだけで心が洗われます。庭園の緑と飛騨川を望む大露天風呂は開放感抜群で、下呂の良質なアルカリ性単純温泉が贅沢に注がれます。足湯や貸切露天風呂も完備。客室は庭園ビューの和室や露天風呂付き客室が揃い、ファミリーからカップルまで人気。夕食は特選飛騨牛の陶板焼きや朴葉味噌焼き、地元の清流魚を盛り込んだ贅沢な会席料理を個室やお部屋で堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              約1100坪の日本庭園。大浴場は夜通し利用可能。大人が休めてお子様も遊べる湯上がり処も♪
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “間近で見る花火と改装後の快適な部屋花火が間近に見られる部屋で、料金も非常にリーズナブルでした。部屋も改装後で大変快適に過ごすことができました。クチコミの詳細はこちらから　https://r…　2026-09-05 08:16:58投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7299%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 3 */}
      <section id="hotel-3" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第3選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            下呂温泉　湯之島館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">岐阜県下呂市・昭和六年創業・国の登録有形文化財！五万坪の大森林に佇む木造建築の最高峰＆自家源泉100％名湯（湯之島館）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 岐阜県下呂市湯之島645番地</div>
            <div><strong>アクセス:</strong> 下呂駅よりお車にて約５分／中津川ＩＣより国道２５７号線約６０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.53</span> (717件)</div>
            <div><strong>参考価格:</strong> 1名あたり約17,820円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">下呂の温泉街を見下ろす山腹、約五万坪もの鬱蒼とした森林に囲まれた孤高の名旅館。昭和6年に建築された本館は国の登録有形文化財に指定されており、宮大工の技が光る繊細な格天井や数寄屋造りの意匠、渡り廊下など、建物自体が日本の近代建築史に残る貴重な美術品です。敷地内の源泉から湧くお湯は、展望大浴場や森の露天風呂、全客室の内湯・露天風呂にまで贅沢に配湯。夕食は月替わりの本格京風会席料理で、極上の飛騨牛や山の幸を歴史の情緒あふれるお部屋食でゆったりと味わえ、日常を忘れさせる本物の別天地ステイを体験できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              創業昭和６年。下呂温泉の町並みを眼下に望む敷地５万坪の木立に佇む、登録有形文化財の古格の宿。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “レトロとモダンな館内と温泉に大満足下呂に行ったら一度は泊まってみたい旅館でした。スタンプラリーがあるおかげで遠慮なく館内が散策できてよかったです。レトロとモダンを堪能できました。部屋は本館で、入っ…　2026-09-02 20:34:26投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D15967%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* ふるさと納税手順 */}
      <section id="furusato-step" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-200 mb-16 shadow-sm">
        <h2 className="text-xl md:text-3xl font-extrabold text-amber-950 mb-6 flex items-center gap-2">
          <span>💡</span> 楽天ふるさと納税トラベルクーポンで実質2,000円予約する4ステップ
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">控除限度額をチェック</h3>
              <p className="text-xs md:text-sm text-gray-600">年収や家族構成によって自己負担2,000円で利用できる上限額が決まります。まずは楽天ふるさと納税のシミュレーターで上限を確認しましょう。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自治体を選んでトラベルクーポンを寄付</h3>
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽天トラベルで宿泊予約＆クーポン適用</h3>
              <p className="text-xs md:text-sm text-gray-600">有効期限は3年間。宿泊日や部屋タイプを決め、予約画面で取得したトラベルクーポンを選択すると宿泊代金から即時値引きされます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ワンストップ特例または確定申告で完了</h3>
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で旅行をさらにアップグレードできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>❓</span> よくある質問（Q&A）
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>すでに予約している宿泊プランにもふるさと納税クーポンは使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。旅行予定に合わせてじっくり使えます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>ハイシーズンや週末でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、お盆や紅葉・雪見シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          
          <Link
            href="/furusato-tax-hida-takayama-old-town-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【飛騨高山 古い町並み＆極上飛騨牛宿×ふるさと納税】花兆庵・花扇・光風館
          </Link>
          <Link
            href="/furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【有馬温泉 金泉銀泉＆名門旅館×ふるさと納税】兵衛向陽閣・御所坊・月光園鴻朧館
          </Link>
          <Link
            href="/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋
          </Link>
          <Link
            href="/furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿
          </Link>
        </div>
      </section>
    </article>
  );
}
