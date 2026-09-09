import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '東洋一の宮古ブルーとウミガメの楽園！宮古島の全室スイートリゾート＆プライベートプール付き極上ヴィラ×ふるさと納税完全攻略ガイド【2026年最新】アラマンダ・ヒルトン・シギラミラージュ',
  description: '「宮古ブルー」と称される世界最高峰の透明度！沖縄屈指の楽園リゾート・宮古島。「シギラベイサイドスイート アラマンダ」「キャノピーbyヒルトン沖縄宮古島リゾート」「ホテルシギラミラージュ」を、沖縄県宮古島市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ウミガメが泳ぐラグーン、プライベートプール、宮古牛を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '宮古島 宮古ブルー＆最高級ヴィラ特集',
    '楽天ふるさと納税 トラベル',
    'シギラベイサイドスイート　アラマンダ　＜宮古島＞',
    'キャノピーｂｙヒルトン沖縄宮古島リゾート＜宮古島＞',
    'ホテルシギラミラージュ＜宮古島＞',
    '高級リゾートホテル',
    'プライベートプール',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-miyakojima-allamanda-resort-stay/',
  },
  openGraph: {
    title: '東洋一の宮古ブルーとウミガメの楽園！宮古島の全室スイートリゾート＆プライベートプール付き極上ヴィラ×ふるさと納税完全攻略ガイド【2026年最新】アラマンダ・ヒルトン・シギラミラージュ',
    description: '「宮古ブルー」と称される世界最高峰の透明度！沖縄屈指の楽園リゾート・宮古島。「シギラベイサイドスイート アラマンダ」「キャノピーbyヒルトン沖縄宮古島リゾート」「ホテルシギラミラージュ」を、沖縄県宮古島市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ウミガメが泳ぐラグーン、プライベートプール、宮古牛を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-miyakojima-allamanda-resort-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoMiyakojimaLuxuryStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">宮古島 宮古ブルー＆最高級ヴィラ特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          東洋一の透明度を誇る海！沖縄県宮古島特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          東洋一の宮古ブルーとウミガメの楽園！宮古島の全室スイートリゾート＆プライベートプール付き極上ヴィラ×ふるさと納税完全攻略ガイド【2026年最新】アラマンダ・ヒルトン・シギラミラージュ
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          息を呑む宮古ブルーのグラデーション、ウミガメが戯れる碧いラグーン。至高の贅と安らぎに満ちた宮古島スイートステイへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          沖縄本島から南西へ約300キロ、世界中のダイバーやリゾートファンが息を呑む「宮古ブルー」の海に抱かれた「沖縄県・宮古島（みやこじま）」。山や川がなく、土砂が海に流れ込まないサンゴ礁の大地だからこそ生まれる海の透明度は、東洋一とも称される奇跡の美しさを誇ります。与那覇前浜ビーチの真っ白なパウダースノーの砂浜、伊良部大橋を渡る爽快なドライブ、ウミガメがすぐ目の前を泳ぐサンゴのリーフなど、どこを訪れても非日常の感動が広がります。宮古島で最も洗練された滞在を約束するのが、島南部に広がる百四十万坪もの一大ネイチャーリゾート「シギラセブンマイルズリゾート」。ウミガメが優雅に泳ぐラグーンを取り囲む全室スイートルームの贅沢なホテルや、テラスにプライベート温水プールとジャグジーを備えた最高峰ヴィラが点在し、誰にも邪魔されない至福のプライベートバカンスが叶います。夕食は、ミネラルたっぷりの島草で育った希少な極上黒毛和牛「宮古牛」の鉄板焼きステーキや炭火焼肉、獲れたての伊勢海老やミーバイなど、島の恵みを贅を尽くして味わう美食の数々。本特集では、ウミガメが泳ぐラグーンと全室スイートの贅を誇る「シギラベイサイドスイート アラマンダ」、みやこサンセットビーチ至近で伊良部大橋のパノラマを望む「キャノピーbyヒルトン沖縄宮古島リゾート」、そしてシギラリゾート最高峰のモダンラグジュアリー「ホテルシギラミラージュ」の3宿を厳選。沖縄県宮古島市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの宮古島スイートステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">宮古島 宮古ブルー＆最高級ヴィラ特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】シギラベイサイドスイート　アラマンダ　＜宮古島＞</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】キャノピーｂｙヒルトン沖縄宮古島リゾート＜宮古島＞</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】ホテルシギラミラージュ＜宮古島＞</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 宮古島 宮古ブルー＆最高級ヴィラ特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">東洋一と称される「宮古ブルー」の海とウミガメが泳ぐプライベートラグーン</h3>
            <p className="text-sm text-gray-600 leading-relaxed">客室テラスから望むエメラルドブルーの絶景と、敷地内ラグーンを優雅に泳ぐウミガメ。自然の生命力に包まれる唯一無二の感動体験。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">全室スイート仕様＆プライベートプール付きヴィラで過ごす究極の贅沢</h3>
            <p className="text-sm text-gray-600 leading-relaxed">デイベッドやジャグジー、温水プライベートプールを備えた開放的なスイートルーム。ハネムーンや記念日に最高の非日常をお届けします。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">宮古島市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や長期滞在に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ハイエンドなリゾートヴィラもふるさと納税なら実質自己負担2,000円。有効期限3年を活かして、ゆったりとした島時間を計画的に確保できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            シギラベイサイドスイート　アラマンダ　＜宮古島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県宮古島市・ウミガメが泳ぐラグーンを取り囲む全室スイート！プライベートプール付きヴィラ＆宮古牛鉄板焼き（シギラリゾート）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県宮古島市上野新里926-25</div>
            <div><strong>アクセス:</strong> 宮古空港ーホテル：シャトルバス空港カウンター受付（１０時ー１７時３０分）、下地島空港ーホテル：公式サイトをご確認ください</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.58</span> (496件)</div>
            <div><strong>参考価格:</strong> 1名あたり約32,910円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">シギラセブンマイルズリゾートの中心に位置し、色鮮やかな南国の花々と豊かな緑に包まれた全室スイートルームのプレミアムリゾート。ホテルの象徴であるラグーンには毎朝ウミガメが優雅に泳ぎ、餌付け体験も楽しめます。特に「プールヴィラ ロイヤルスイート」や「ラグーンスイート」は、広々としたテラスにプライベート温水プールやデイベッドを完備し、極上のプライベート感を演出。夕食は館内のレストラン「マラルンガ」にて、希少な宮古牛の極上鉄板焼きや本格琉球会席を堪能でき、大人の上質な記念日旅行に全国から圧倒的な支持を集めています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              洗練された大人にふさわしい全室スイートのプレミアム・プライベートホテル。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “宮古島旅行を満喫、食事もサービスも最高親子3人初めての4泊5日の宮古島旅行!アラマンダを選んで本当に良かったと思います!子供達もウミガメに餌やりしたりお部屋のプールも清潔感があってずっと入って…　2026-08-31 18:01:46投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D56662%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
            キャノピーｂｙヒルトン沖縄宮古島リゾート＜宮古島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県宮古島市・みやこサンセットビーチ直結！伊良部大橋と夕日を一望するルーフトップバー＆洗練のヒルトンクオリティ</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県宮古島市平良久貝550-7</div>
            <div><strong>アクセス:</strong> 宮古空港から車で約15分、下地島空港から車で約25分。宮古空港シャトルバス（無料）運行</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.58</span> (19件)</div>
            <div><strong>参考価格:</strong> 1名あたり約23,112円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">宮古空港から車で約15分、みやこサンセットビーチとトゥリバー地区に誕生したヒルトンブランドの最新リゾート。客室の大きな窓やプライベートバルコニーからは、宮古ブルーの海と伊良部大橋の美しい弓なりのシルエットが一望できます。館内には3つの屋外プールや屋内温水プール、スパを完備。夕暮れ時には伊良部島に沈む息を呑むサンセットを望むルーフトップバーで極上のカクテルタイムを満喫。食事は宮古島の新鮮食材をふんだんに使ったオールデイダイニングビュッフェや本格トラットリアで、洗練されたリゾートダイニングを体験できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              宮古島の絶景を楽しむルーフトップとインフィニティプール。ビーチも街も近く観光にも便利なロケーション
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “清潔感のある部屋と沖縄料理で大満足お部屋は清潔感があり、アメニティーも充実、景色も良く気持ちの良い宿泊ができました。また、食事は沖縄料理を堪能でき、バーなどもあり、このホテルだけでも十分満足できる…　2026-08-20 10:34:25投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D198474%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
            ホテルシギラミラージュ＜宮古島＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">沖縄県宮古島市・シギラリゾートの最高峰ラグジュアリー！オーシャンビューテラスジャグジー＆全室バトラーサービス付きヒルサイドヴィラ</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 沖縄県宮古島市上野新里1405-201</div>
            <div><strong>アクセス:</strong> 宮古空港ーホテル：シャトルバス空港カウンター受付（１０時ー１７時３０分）、下地島空港ーホテル：公式サイトをご確認ください</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.76</span> (417件)</div>
            <div><strong>参考価格:</strong> 1名あたり約38,050円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">シギラセブンマイルズリゾートの海沿いに聳え立つ、モダンラグジュアリーの最高峰ホテル。客室はすべて広々としたテラス付きで、高層階の客室にはジャグジーが備わり、地平線まで続く宮古ブルーの海と潮風を全身で感じることができます。また小高い丘に佇むヴィラ棟「ヒルサイド」は、全室にプライベートプールを備えた完全独立型の別天地。専属バトラーによるきめ細やかなおもてなしが特別な滞在をサポートします。夕食は宮古牛や近海魚を華やかに仕立てたモダンフレンチや江戸前寿司など、美食の粋を集めたコースをゆったりと楽しめます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              旅人を魅了する蒼の楽園 ～二つとして同じ色のない幻想の世界へ～
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “スタッフの案内が最高、朝食も充実で大満足チェックインの時から最高です!何が食べたいかで周辺の食事処を案内してくれたり、滞在中のスケジュールからオススメのスポットなども併せて教えてくれます。朝食…　2026-09-01 09:07:51投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D168769%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルや温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <span>ハイシーズンや連休でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、ゴールデンウィークや夏休み、年末年始や紅葉シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-ishigakijima-resort-villa-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【石垣島 ビーチリゾート＆赤瓦ヴィラ×ふるさと納税】フサキ・ANAインターコンチネンタル・グランヴィリオ
          </Link>
          <Link
            href="/furusato-tax-okinawa-beach-resort-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【沖縄本島最高峰ビーチリゾート×ふるさと納税】ハレクラニ・ルネッサンス・ロワジール
          </Link>
          <Link
            href="/furusato-tax-shirahama-onsen-ocean-view-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【南紀白浜温泉 白良浜オーシャンビュー宿×ふるさと納税】むさし・海舟・シーモア
          </Link>
          <Link
            href="/furusato-tax-private-villa-hanare-hideaway-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿
          </Link>
        </div>
      </section>
    </article>
  );
}
