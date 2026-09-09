import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'パーク徒歩圏＆天然温泉！USJオフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】近鉄・京阪タワー・リーベルで大阪旅行をお得に満喫',
  description: 'ユニバーサル・スタジオ・ジャパン（USJ）の目の前に泊まる感動！パークまで徒歩1〜2分、スタジオ・パスのホテル内購入やキャラクタールーム、地上110mの絶景天然温泉など特典満載。「ホテル近鉄ユニバーサル・シティ」「ホテル京阪 ユニバーサル・タワー」「リーベルホテル大阪」を、大阪市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    'USJオフィシャルホテル特集',
    '楽天ふるさと納税 トラベル',
    'ホテル近鉄ユニバーサル・シティ',
    'ホテル京阪　ユニバーサル・タワー',
    'リーベルホテル大阪',
    'オフィシャルホテル',
    'ファミリー旅行',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-usj-osaka-official-partner-hotel-stay/',
  },
  openGraph: {
    title: 'パーク徒歩圏＆天然温泉！USJオフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】近鉄・京阪タワー・リーベルで大阪旅行をお得に満喫',
    description: 'ユニバーサル・スタジオ・ジャパン（USJ）の目の前に泊まる感動！パークまで徒歩1〜2分、スタジオ・パスのホテル内購入やキャラクタールーム、地上110mの絶景天然温泉など特典満載。「ホテル近鉄ユニバーサル・シティ」「ホテル京阪 ユニバーサル・タワー」「リーベルホテル大阪」を、大阪市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-usj-osaka-official-partner-hotel-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoUSJOfficialPartnerHotelStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">USJオフィシャルホテル特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          超人気！ユニバーサル・スタジオ・ジャパン公式宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          パーク徒歩圏＆天然温泉！USJオフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】近鉄・京阪タワー・リーベルで大阪旅行をお得に満喫
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-09">2026年9月9日公開</time>
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
          パークゲートを出てすぐベッドへダイブ！天然温泉やキャラクタールームでUSJと大阪観光を満喫する極上ステイ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          スーパー・ニンテンドー・ワールドやウィザーディング・ワールド・オブ・ハリー・ポッターなど、世界中から熱い視線が集まるユニバーサル・スタジオ・ジャパン（USJ）。朝一番の開園ダッシュから夜のナイトパレードまで遊び尽くすなら、パーク徒歩圏内のオフィシャルホテル宿泊が絶対の正解です。ホテル内で当日のスタジオ・パスが購入できチケットブースの行列を回避できるほか、アトラクションの待ち時間モニター完備、キャラクタールームなど、オフィシャルホテルならではの手厚いメリットが目白押し。本特集では、パークゲートまで徒歩1分・セサミストリートのコンセプトフロアが大人気の「ホテル近鉄ユニバーサル・シティ」、USJエリア最高層32階建て・地上110mに展望天然温泉大浴場を備えた「ホテル京阪 ユニバーサル・タワー」、そして広大なリバーサイドテラスと地下約1,000mから湧く広大な天然温泉スパを誇る都市型リゾート「リーベルホテル大阪」の3宿を厳選。大阪市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円でUSJ旅行をお得に実現しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">USJオフィシャルホテル特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】ホテル近鉄ユニバーサル・シティ</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】ホテル京阪　ユニバーサル・タワー</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】リーベルホテル大阪</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> USJオフィシャルホテル特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">パークまで徒歩1分〜駅直結！混雑前のアトラクションへいち早く直行できる好立地</h3>
            <p className="text-sm text-gray-600 leading-relaxed">開園前の待ち列にいち早く並べ、遊び疲れたら途中でお部屋に戻って休憩も自由自在。閉園までアトラクションを楽しんだ後も、混雑する電車に乗らず徒歩でホテルへ帰着できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">パークの疲れをリセットする天然温泉！地上110mの夜景展望風呂や広大露天スパ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">USJ周辺には良質な天然温泉を完備したオフィシャル宿が充実。一日中歩き回った足を広々とした大浴場や露天風呂、サウナで癒やし、翌朝も元気に大阪観光へ出発できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">大阪市ふるさと納税で最大30％OFF！3年間有効クーポンでイベントに合わせて利用可能</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ハロウィーンホラーナイトやクリスマス、春休みの旅行シーズンなど、ピーク時期に合わせて自由に予約可能。予約済み日程への「あとからクーポン適用」にも対応しています。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ホテル近鉄ユニバーサル・シティ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大阪府大阪市・USJゲートまで徒歩1分！セサミストリートのポップな世界観と館内チケットカウンター完備</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大阪府大阪市此花区島屋6-2-68</div>
            <div><strong>アクセス:</strong> JRユニバーサルシティ駅より徒歩約2分【大阪駅から直通列車で約12分】／阪神高速湾岸線ユニバーサルシティ出口より約5分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.54</span> (13360件)</div>
            <div><strong>参考価格:</strong> 1名あたり約4,275円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">ユニバーサルシティ駅とUSJゲートを結ぶメインストリートに直結し、パークのメインゲートまで徒歩わずか1分という抜群のロケーションを誇る人気オフィシャルホテル。館内はセサミストリートの仲間たちが出迎えるカラフルでエネルギッシュな空間が広がり、客室フロア全体がセサミストリートの世界になったコンセプトフロアは子どもから大人まで大興奮。ホテル内に直営チケットカウンターがあり、当日のスタジオ・パスやアトラクション情報をスムーズに入手可能。朝食ビュッフェでは大阪名物のたこ焼きや串カツ、キッズ専用カウンターも用意され、USJの熱気そのままに滞在できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【楽天トラベルゴールドアワード７年連続受賞】宿泊者特典有り
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “USJ目の前で便利だがチェックインの行列が疲れるチェックイン時に1時間ほど並びました。USJの目の前で便利がよく清潔、お値段以上のロケーションですがパークを出た後に並ぶのは疲れます。…　2026-09-05 23:42:29投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16654%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
            ホテル京阪　ユニバーサル・タワー
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大阪府大阪市・USJエリア最高層32階タワー！地上110m「スパ・ハーブス」の展望天然温泉とパノラマ夜景</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大阪府大阪市此花区島屋6-2-45</div>
            <div><strong>アクセス:</strong> JRユニバーサルシティ駅・USJへ徒歩スグ！阪神高速ユニバーサルシティ出口より車で約5分！大阪駅まで電車で約11分！</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.58</span> (9651件)</div>
            <div><strong>参考価格:</strong> 1名あたり約6,700円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">JRユニバーサルシティ駅直結、高さ138m・エリア最高層を誇るランドマークオフィシャルホテル。31階には地上110mから大阪市街のきらめく夜景と大阪湾を一望できる展望天然温泉「S-PARK（スパ・ハーブス）」を完備。サウナやジャグジー、バイブラバスでパークの疲れを芯から癒やせます。客室はシックで落ち着きのあるモダンインテリアで統一され、高層階からのパノラマビューは息をのむ美しさ。最上階スカイレストランでのディナーや朝食ビュッフェでは、シェフが焼き上げるライブステーキやホテル特製フレンチトーストを堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              駅・USJ徒歩スグのオフィシャルホテル！31階天然展望温泉（有料）は大人気
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “31階の朝食は種類豊富でオレンジジュースが最高ここ毎年ユニバに行く時はお世話になっておりますが、31階の朝食は沢山の種類があり良かった!搾りたてのオレンジジュースはテンションが上がりましたクチ…　2026-09-05 23:34:54投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D71921%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
            リーベルホテル大阪
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大阪府大阪市・楽天アワード受賞＆口コミ4.7超！地下1000m天然温泉大浴場と安治川を望む広大テラス</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大阪府大阪市此花区桜島1丁目1番35号</div>
            <div><strong>アクセス:</strong> ＪＲゆめ咲線 桜島駅より徒歩1分　テーマパークまで徒歩約13分、ユニバーサルシティ駅1分1駅　大阪駅まで電車で最短14分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.71</span> (6678件)</div>
            <div><strong>参考価格:</strong> 1名あたり約4,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">桜島駅目の前・USJへ徒歩圏内に建つ、エリア最大規模を誇る都市型スパリゾートホテル。敷地地下約1,000mから湧き出る自家源泉「リバーサイドスパ」には、広々とした露天風呂や内湯、炭酸風呂、ドライサウナ、水風呂が完備され、温泉旅館顔負けの本格スパ体験を提供。広大なオープンエアのリバーサイドテラスからは天保山大観覧車や大阪ベイエリアの夜景が一望できます。朝食ビュッフェではシェフが目の前で炭火焼きする牛肉ステーキやジェラート食べ放題など口コミ評価4.7超の極上メニューが並び、満足度の高い滞在が約束されます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ≪6年連続楽天トラベルアワード受賞≫2025ゴールドアワード☆ホテル＆旅館オブ・ザ・イヤー全国9位☆
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “朝食も温泉も大満足、また利用したい朝食バイキング2日間違う所で食べました。両方とも美味しいですが1階のレストランは落ち着いた雰囲気でよかったです。温泉では同じ階にマッサージチャアーもあるのでだいぶ…　2026-09-05 13:00:21投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D172378%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルのある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算でお土産やテーマパークグッズを満喫できます。</p>
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
              <span>複数人や家族での宿泊代金全体に対して割引されますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、1回の予約の「総宿泊代金」に対してクーポンが適用されますので、家族全員分やグループ旅行の宿泊費全体から割引を受けることが可能です。
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
            href="/furusato-tax-tokyo-disney-resort-official-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【東京ディズニーリゾート公式ホテル×ふるさと納税】舞浜直結オフィシャル
          </Link>
          <Link
            href="/furusato-tax-themepark-aquarium-family-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【テーマパーク＆水族館満喫ホテル×ふるさと納税】家族旅行におすすめの宿
          </Link>
          <Link
            href="/furusato-tax-indoor-pool-kids-family-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート
          </Link>
          <Link
            href="/furusato-tax-all-inclusive-free-drinks-alcohol-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【お酒飲み放題オールインクルーシブ宿×ふるさと納税】贅沢ラウンジステイ
          </Link>
        </div>
      </section>
    </article>
  );
}
