import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '富士山と燃えるような紅葉の競演！富士河口湖紅葉まつり・もみじ回廊＆絶景温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】 | 旅宿クラウド',
  description: '10月下旬〜11月下旬に開催される日本屈指の秋イベント「富士河口湖紅葉まつり」。約60本の大古木モミジが織りなす「もみじ回廊」の幻想的なライトアップと、富士山を正面に望む極上温泉！「大池ホテル」「四季の宿 富士山」「ホテル鐘山苑」など厳選宿を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '富士河口湖紅葉まつり＆もみじ回廊・富士山絶景温泉宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-fujikawaguchiko-autumn-leaves-festival-stay/'
  },
  openGraph: {
    title: '富士山と燃えるような紅葉の競演！富士河口湖紅葉まつり・もみじ回廊＆絶景温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】',
    description: '10月下旬〜11月下旬に開催される日本屈指の秋イベント「富士河口湖紅葉まつり」。約60本の大古木モミジが織りなす「もみじ回廊」の幻想的なライトアップと、富士山を正面に望む極上温泉！「大池ホテル」「四季の宿 富士山」「ホテル鐘山苑」など厳選宿を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-fujikawaguchiko-autumn-leaves-festival-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoFujiKawaguchikoAutumnLeavesStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">富士河口湖もみじ回廊＆富士山絶景温泉宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              富士河口湖紅葉まつり＆もみじ回廊・富士山絶景温泉宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              富士山と燃えるような紅葉の競演！富士河口湖紅葉まつり・もみじ回廊＆絶景温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月下旬〜11月下旬に開催される日本屈指の秋イベント「富士河口湖紅葉まつり」。約60本の大古木モミジが織りなす「もみじ回廊」の幻想的なライトアップと、富士山を正面に望む極上温泉！「大池ホテル」「四季の宿 富士山」「ホテル鐘山苑」など厳選宿を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 2026年最新版（10-11月秋シーズン）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>✨</span> 実質自己負担2,000円
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-4 border-l-4 border-amber-600 pl-4">
            夜の闇に浮かび上がる紅葉のトンネルと、雪化粧を始めた霊峰富士。圧倒的な日本の美を愛でる秋の湖畔旅へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            秋が深まる10月下旬から11月下旬、富士山麓の河口湖北岸で開催される「富士河口湖紅葉まつり」。梨川沿いに約150mにわたって続く「もみじ回廊」は、樹齢を重ねた巨木モミジが一斉に真紅や黄金に染まり、夜間のライトアップではまるで光のトンネルのような幽玄な絶景が広がります。さらに湖畔の各所からは、青く澄み渡る秋空と初冠雪の白いベールをまとった富士山、そして色づく紅葉が織りなす絵画のような大パノラマを堪能。そんな贅沢な秋のひとときをさらに格別なものにしてくれるのが、河口湖畔に湧き出る天然温泉と、富士山を真正面に望む展望露天風呂を誇る名宿の数々です。最上階の展望風呂や富士山ビュー露天風呂付き客室で名高い「大池ホテル」、リーズナブルに河口湖温泉の潤いを満喫できる「四季の宿 富士山」、そして二万坪の広大な日本庭園と三段露天風呂「きよみの湯」から富士山を一望する屈指の高級旅館「ホテル鐘山苑」。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、感動に満ちた錦秋の富士山ステイへ出かけましょう。
          </p>
        </section>

        {/* 3つの魅力ポイント */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 text-center">
            この特集で厳選した宿をおすすめする3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  幻想的な夜間ライトアップ！名所「もみじ回廊」と紅葉トンネルの散策
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                日没とともにライトアップされるもみじ回廊。足元を埋め尽くす落ち葉の赤い絨毯と、頭上に広がる鮮やかな紅葉のグラデーションは圧巻の美しさです。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  初冠雪の富士山×河口湖のダブル絶景！湯船から富士を仰ぐ展望露天風呂
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                澄み切った秋の空気の中、初冠雪の富士山を眺めながら浸かる天然温泉。朝焼けに染まる「赤富士」や夕暮れのシルエット富士など、時間ごとの絶景に出会えます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  甲州牛ステーキや名物ほうとう鍋！山梨の秋の味覚を贅沢に味わう会席料理
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                旨味豊かな甲州牛の溶岩焼きや、旬の秋野菜がたっぷり入った郷土鍋、採れたての果実を使ったデザートなど、山梨ならではの滋味深いグルメを満喫できます。
              </p>
            </div>
  
          </div>
        </section>

        {/* ホテル一覧 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">
              【2026年最新】ふるさと納税で行く極上おすすめ宿3選
            </h2>
            <p className="text-stone-600 text-sm">
              宿泊予約時にトラベルクーポンを適用することで、最大30％割引＆実質2,000円で泊まれます。
            </p>
          </div>

          <div className="space-y-8">

            <div key="kawaguchiko_oike" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県富士河口湖町・最上階パノラマ展望大浴場から富士山を一望！富士山ビュー客室露天風呂の宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.35 <span className="text-stone-400 text-xs">(5,549件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    富士河口湖温泉　富士山の見える温泉旅館　大池ホテル
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県南都留郡富士河口湖町船津6713-103 ｜ 駅から無料送迎有■駐車場無料■河口湖駅から車で4分■富士急から車で7分河口湖ICから車で12分新宿駅からバスで約120分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946.jpg"
                        alt="富士河口湖温泉　富士山の見える温泉旅館　大池ホテル"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      河口湖畔の中心に位置し、本館最上階の展望パノラマ大浴場や別館の庭園露天風呂から富士山を雄大に望む人気の温泉宿。富士山を一望できる客室露天風呂付きプランや多彩な和モダン客室が充実。夕食は甲州牛や季節の彩りを添えた本格和食会席膳をお部屋や個室ダイニングでゆったりと味わえます。河口湖駅からの無料送迎もあり、紅葉まつり会場へのアクセスも抜群のロケーションです。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 山梨 富士山 河口湖 露天風呂 温泉 バイキング ブッフェ 温泉　貸切露天風呂</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 無料駐車場50台・河口湖駅からの無料送迎有・バイク専用の駐車場無・富士急ハイランドまで車で7分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 13,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2946%2F2946.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="kawaguchiko_fujisan" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県富士河口湖町・河口湖畔まで徒歩すぐ！天然温泉大浴場と心地よい寛ぎを届ける快適宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.70 <span className="text-stone-400 text-xs">(381件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    富士河口湖温泉郷　四季の宿　富士山
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県南都留郡富士河口湖町船津6713-19 ｜ 富士急行線　河口湖駅より車で５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/50707/50707.jpg"
                        alt="富士河口湖温泉郷　四季の宿　富士山"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      河口湖畔の静かなエリアに佇み、観光や紅葉散策の拠点として高い利便性を誇る温泉宿。富士河口湖温泉の天然温泉を引き込んだ大浴場では、清潔感あふれる空間で旅の疲れを心地よく癒やすことができます。落ち着きある客室と親しみやすいおもてなし、リーズナブルな価格設定が魅力で、紅葉巡りをアクティブに楽しみたいカップルやファミリー、一人旅に最適です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 河口湖畔沿いにある富士山を望む温泉宿</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　13台　無料　予約不要　※満車時は隣接町営無料駐車場をご案内</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 5,500円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50707%2F50707.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="kawaguchiko_kaneyamaen" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県富士吉田市・二万坪の大庭園と世界遺産富士山！三段露天風呂「露天風呂 富士山」の最高峰旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.71 <span className="text-stone-400 text-xs">(1,132件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    庭園と感動の宿　富士山温泉　ホテル鐘山苑
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県富士吉田市上吉田東9-1-18 ｜ 富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg"
                        alt="庭園と感動の宿　富士山温泉　ホテル鐘山苑"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      富士の裾野、二万坪もの雄大な日本庭園を有する甲斐屈指の高級名門旅館。屋上に設けられた三段露天風呂「露天風呂 富士山」からは、遮るもののない大パノラマで霊峰富士を一望。秋には庭園内の木々が見事に紅葉し、夜には庭園ライトアップや迫力の霊峰太鼓ショーが催されます。旬の贅を尽くした極上会席料理と一流のおもてなしが、一生の思い出に残るプレミアムな滞在を約束します。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　5００台　無料</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 22,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19206%2F19206.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

            <li key="furusato-tax-autumn-sengokuhara-silver-grass-hotspring-stay">
              <Link
                href="/furusato-tax-autumn-sengokuhara-silver-grass-hotspring-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【箱根仙石原ススキ草原＆にごり湯×ふるさと納税】黄金の海と名湯宿
              </Link>
            </li>
  

            <li key="furusato-tax-koshu-winery-harvest-autumn-wine-resort-stay">
              <Link
                href="/furusato-tax-koshu-winery-harvest-autumn-wine-resort-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【山梨甲州ワイナリー新酒＆石和温泉×ふるさと納税】秋のワインリゾート旅
              </Link>
            </li>
  

            <li key="furusato-tax-autumn-foliage-open-air-bath-stay">
              <Link
                href="/furusato-tax-autumn-foliage-open-air-bath-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【絶景紅葉露天風呂＆名所旅館×ふるさと納税】定山渓・日光・黒川の名宿
              </Link>
            </li>
  

            <li key="furusato-tax-lakeview-onsen-resort-hotel-stay">
              <Link
                href="/furusato-tax-lakeview-onsen-resort-hotel-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【絶景レイクビュー温泉リゾート×ふるさと納税】琵琶湖・洞爺湖・箱根芦ノ湖
              </Link>
            </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
