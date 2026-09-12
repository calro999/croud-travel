import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '三千年の歴史を誇る日本最古の名湯！道後温泉本館徒歩圏＆名門旅館×ふるさと納税完全攻略ガイド【2026年最新】ふなや・道後御湯・道後プリンス',
  description: '日本最古の温泉・道後温泉！重要文化財「道後温泉本館」の保存修理完了で賑わう温泉街へ徒歩すぐ。「道後温泉 ふなや」「道後御湯」「道後プリンスホテル」を、愛媛県松山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業390余年の皇族御用達宿、全室客室露天風呂、8つの露天風呂とボンネットバスを堪能。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '道後温泉 本館散策＆名門宿特集',
    '楽天ふるさと納税 トラベル',
    '道後温泉　ふなや',
    '道後御湯',
    '道後プリンスホテル～旬華趣湯　あったらいいな、が湧く湯宿～',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-dogo-onsen-honkan-walk-luxury-stay/',
  },
  openGraph: {
    title: '三千年の歴史を誇る日本最古の名湯！道後温泉本館徒歩圏＆名門旅館×ふるさと納税完全攻略ガイド【2026年最新】ふなや・道後御湯・道後プリンス',
    description: '日本最古の温泉・道後温泉！重要文化財「道後温泉本館」の保存修理完了で賑わう温泉街へ徒歩すぐ。「道後温泉 ふなや」「道後御湯」「道後プリンスホテル」を、愛媛県松山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業390余年の皇族御用達宿、全室客室露天風呂、8つの露天風呂とボンネットバスを堪能。',
    url: 'https://croud-travel.pages.dev/furusato-tax-dogo-onsen-honkan-walk-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoDogoOnsenHonkanStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">道後温泉 本館散策＆名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          日本最古の名湯！愛媛県松山市 道後温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          三千年の歴史を誇る日本最古の名湯！道後温泉本館徒歩圏＆名門旅館×ふるさと納税完全攻略ガイド【2026年最新】ふなや・道後御湯・道後プリンス
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-09">2026年9月9日公開</time>
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
          重要文化財「道後温泉本館」の風情と湯玉のぬくもり。三千年の歴史が息づく伊予の湯の街で過ごす大人の休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          『日本書紀』や『万葉集』にも登場し、聖徳太子や夏目漱石など歴史の偉人たちが愛した三千年の歴史を誇る日本最古の温泉地「道後温泉」。明治27年建築の重厚な木造三層楼「道後温泉本館」は保存修理工事を終えて全館営業を再開し、神の湯や霊の湯、又新殿の美しさを求めて全国から旅人が訪れています。浴衣に湯かごを持ってハイカラ通りを散策し、坊っちゃん団子やみかんスイーツを味わう湯の街巡りは風情たっぷり。アルカリ性単純温泉の源泉は肌触りがとても優しく、湯上がりの肌をしっとりと滑らかに整えてくれます。夕食には瀬戸内海の旬の鮮魚（鯛一郎クン・来島鯛の鯛めし・伊予牛）を取り入れた贅沢な会席料理に舌鼓。本特集では、寛永年間創業・約390年の歴史を誇り夏目漱石や昭和天皇も宿泊された老舗の最高峰「道後温泉 ふなや」、全客室に道後温泉の引き湯露天風呂を備え現代アートと展望ラウンジが調和する大人の宿「道後御湯（みゆ）」、そしてレトロなボンネットバスの無料送迎と8つの露天風呂巡りで家族連れ人気No.1を誇る「道後プリンスホテル」の3大宿を厳選。愛媛県松山市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で道後温泉の贅沢な湯治旅を予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">道後温泉 本館散策＆名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】道後温泉　ふなや</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】道後御湯</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】道後プリンスホテル～旬華趣湯　あったらいいな、が湧く湯宿～</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 道後温泉 本館散策＆名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">道後温泉本館や飛鳥乃湯泉へ徒歩すぐ！湯かご片手にそぞろ歩く湯の街情緒</h3>
            <p className="text-sm text-gray-600 leading-relaxed">本館やハイカラ通りへ徒歩数分の好立地。浴衣と湯かごを片手に外湯巡りや足湯、歴史ある坊っちゃんカラクリ時計の鑑賞を気ままに楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">三千年の恵み・なめらかな美肌の湯！日本庭園の清流露天や全室客室露天風呂</h3>
            <p className="text-sm text-gray-600 leading-relaxed">刺激の少ないアルカリ性単純温泉は、湯あたりしにくく肌にすっと馴染む名湯。庭園を望む露天風呂やプライベートな客室風呂で何度も湯浴みできます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">松山市ふるさと納税で最大30％OFF！3年間有効クーポンで四季の四国旅行に使える</h3>
            <p className="text-sm text-gray-600 leading-relaxed">四国・松山の観光拠点として年間を通じて利用可能。有効期限3年間で、春の桜から秋の紅葉、冬の温泉シーズンに合わせてお得に宿泊できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            道後温泉　ふなや
          </h2>
          <p className="text-xs md:text-sm text-amber-100">愛媛県松山市・寛永年間創業・約三百九十余年の歴史！夏目漱石や昭和天皇ゆかりの老舗最高峰名旅館と千五百坪の自然庭園</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 愛媛県松山市道後湯之町1-33</div>
            <div><strong>アクセス:</strong> 道後温泉駅から徒歩3分 松山ＩＣより車で25分 ＪＲ松山駅前から市内電車で30分 空港からリムジンバスで35分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.74</span> (2015件)</div>
            <div><strong>参考価格:</strong> 1名あたり約19,635円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">道後温泉本館から徒歩わずか3分、江戸時代初期の寛永年間に創業した道後随一の歴史を誇る老舗旅館。皇族方のご宿泊や夏目漱石・正岡子規ら文人墨客が逗留した格式高い宿として知られます。敷地内には清流が流れる千五百坪の自然庭園「詠風庭」が広がり、川床での足湯や散策を満喫。道後温泉の引き湯大浴場「檜湯」「湯の音菜」では、歴史ある名湯に心ゆくまで身を委ねられます。夕食は瀬戸内海の真鯛を使った名物鯛めしや伊予牛、旬の地場野菜を職人が丹精込めて仕立てた本格和食会席をお部屋や個室で堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ★文人ゆかりの宿・道後一の老舗★　日本庭園には、自然の川が流れ四季折々の風情がお楽しみいただけます。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “料理も温泉も最高、家族全員大満足の旅家族4人で利用しました。これまでの旅館の中で最高と言える経験でした。料理はとても美味しく丁寧に作られていて感動しました。配膳を担当してくださった方は、親切丁寧に…　2026-08-30 16:53:49投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D11332%26f_flg%3DPLAN"
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
            道後御湯
          </h2>
          <p className="text-xs md:text-sm text-amber-100">愛媛県松山市・全室に道後温泉引き湯の露天風呂を完備！口コミ総合4.9超・現代アートと美空間が調和する大人の宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 愛媛県松山市道後鷺谷町2-20</div>
            <div><strong>アクセス:</strong> 伊予鉄道　道後温泉駅より徒歩にて約５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.92</span> (311件)</div>
            <div><strong>参考価格:</strong> 1名あたり約26,410円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">道後温泉本館から徒歩ですぐの高台に佇む、大人のためのハイエンド温泉宿。最大の贅沢は、全客室のデッキテラスに道後温泉の源泉を引いた客室露天風呂が完備されている点。松山城や道後の街並みを眺めながら、24時間いつでも好きな時にプライベートな湯浴みを楽しめます。館内には現代アート作品が配され、最上階の展望ラウンジではフリードリンクとともに優雅なひとときを提供。夕食は愛媛・瀬戸内の山海の恵みを五感で味わう創作会席で、洗練されたおもてなしと高いプライベート感が高く評価されています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              大人のための上質で贅沢な空間で「現代の湯治」をお愉しみください。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “家族旅行で伺いました。到着した時から温かく迎えてくださり、若いスタッフさんもとても礼儀正しく言葉遣いも綺麗で食事の内容も一品ずつ細かく丁寧に笑顔で説明してくださいました。お料理、お部屋も最高です。大浴…　2026-08-29 15:08:52投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D165194%26f_flg%3DPLAN"
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
            道後プリンスホテル～旬華趣湯　あったらいいな、が湧く湯宿～
          </h2>
          <p className="text-xs md:text-sm text-amber-100">愛媛県松山市・道後温泉本館へレトロなボンネットバス運行！8つの露天風呂巡りと湯上がりビール・太鼓ショー</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 愛媛県松山市道後姫塚100</div>
            <div><strong>アクセス:</strong> 【車】松山道松山ICより30分。【リムジンバス】松山空港より40分。松山観光港より45分。道後温泉駅到着後、電話で送迎有</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.47</span> (2240件)</div>
            <div><strong>参考価格:</strong> 1名あたり約7,700円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">道後温泉街と宿を結ぶレトロな無料ボンネットバスが運行し、ファミリーからシニアまで圧倒的な人気を誇る温泉エンターテインメント旅館。館内にはバイブラバスや釜風呂、歩行湯など趣の異なる8つの露天風呂が揃い、宿にいながら本格的な湯巡り体験が可能。湯上がり処ではソフトクリームやポップコーン、地酒・生ビールの振る舞いサービスが大好評。夕食は伊予牛や瀬戸内の新鮮魚介が並ぶ会席料理やバイキングが選べ、夜には迫力ある水軍太鼓ショーが開催されるなど滞在の楽しさが満載の宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              シルバーアワード受賞♪あったらいいな、が沸く湯宿＊wi-fi完備・道後温泉駅～レトロバスで無料送迎
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “リピーターです2回目の利用。お風呂は大浴場が広くてお湯も温度が私にはちょうど良く(40度ぐらい)気持ちいいです。シャンプーの種類が豊富で悩ましい。朝食は美味しくつい食べ過ぎてしまいます。だし巻…　2026-09-02 17:48:05投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8384%26f_flg%3DPLAN"
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
              <span>由布院や登別、道後、城崎のハイシーズンでも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、紅葉や雪見温泉のハイシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-yufuin-onsen-kinrinko-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【由布院温泉＆金鱗湖名門宿×ふるさと納税】花由・秀峰館・梅園
          </Link>
          <Link
            href="/furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【城崎温泉 七田外湯めぐり宿×ふるさと納税】招月庭・小宿縁
          </Link>
          <Link
            href="/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【草津温泉 湯畑散策＆名湯名門宿×ふるさと納税】櫻井・一井・奈良屋
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
