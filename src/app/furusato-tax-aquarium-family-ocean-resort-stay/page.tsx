import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '水族館直結＆イルカ・シャチの感動体験！ファミリー大満足オーシャンリゾートホテル×ふるさと納税完全ガイド【2026年最新】鴨川・鳥羽・沖縄美ら海',
  description: '海の生きものたちと間近に出逢う感動のファミリーバカンス！シャチの大迫力ジャンプで名高い鴨川シーワールド直結・宿泊者パスポート付き「鴨川シーワールドホテル」、日本一の飼育種類数を誇る鳥羽水族館至近＆真珠風呂「鳥羽国際ホテル 潮路亭」、沖縄美ら海水族館へ徒歩すぐ・備瀬のフクギ並木前の最高峰リゾート「オリオンホテル モトブリゾート＆スパ」。全室オーシャンビューや温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '水族館直結＆海の生きものふれあいリゾートホテル特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-aquarium-family-ocean-resort-stay/' },
  openGraph: {
    title: '水族館直結＆イルカ・シャチの感動体験！ファミリー大満足オーシャンリゾートホテル×ふるさと納税完全ガイド【2026年最新】鴨川・鳥羽・沖縄美ら海',
    description: '海の生きものたちと間近に出逢う感動のファミリーバカンス！シャチの大迫力ジャンプで名高い鴨川シーワールド直結・宿泊者パスポート付き「鴨川シーワールドホテル」、日本一の飼育種類数を誇る鳥羽水族館至近＆真珠風呂「鳥羽国際ホテル 潮路亭」、沖縄美ら海水族館へ徒歩すぐ・備瀬のフクギ並木前の最高峰リゾート「オリオンホテル モトブリゾート＆スパ」。全室オーシャンビューや温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-aquarium-family-ocean-resort-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoAquariumFamilyResortStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '水族館直結＆ファミリーオーシャンリゾートホテル特集', item: baseUrl + '/furusato-tax-aquarium-family-ocean-resort-stay' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">水族館直結＆ファミリーオーシャンリゾートホテル特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            水族館直結＆海の生きものふれあいリゾートホテル特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            水族館直結＆イルカ・シャチの感動体験！ファミリー大満足オーシャンリゾートホテル×ふるさと納税完全ガイド【2026年最新】鴨川・鳥羽・沖縄美ら海
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            巨大な水槽越しに悠々と泳ぐ魚たちの群れ、ダイナミックな水しぶきを上げるシャチやイルカのショー、手で触れ合える海の生きものたち――「水族館」は、家族連れやカップルにとって最高の笑顔と感動が生まれる特別な場所です。水族館のすぐ隣や敷地内に位置するリゾートホテルに滞在すれば、開館直後の空いている時間帯にゆったり見学でき、疲れたらすぐに部屋に戻って休憩できるため、小さなお子様連れの旅行でもストレスフリーで楽しめます。雄大な太平洋を望み、宿泊期間中「鴨川シーワールド」へ何度でも無料で入館できる専用通路を備えたオフィシャルホテル「鴨川シーワールドホテル」、ジュゴンやラッコなど日本一の飼育種類数を誇る「鳥羽水族館」にほど近く、ミキモト コスメティックス開発のパールオーロラ風呂が女性に大人気の「鳥羽国際ホテル 潮路亭」、そして世界屈指の巨大アクリルパネルでジンベエザメが泳ぐ「沖縄美ら海水族館」へ徒歩約7分、エメラルドビーチを眼下に望む全室オーシャンビューの「オリオンホテル モトブリゾート＆スパ」。家族の最高の思い出を刻む水族館リゾートを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円で賢く予約し、心躍る海の旅へ出かけましょう。
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  水族館直結や専用入館パス！開館から閉館まで何度でも出入り自由の圧倒的利便性
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                オフィシャルホテルや隣接ホテルならではの特権。混雑する日中を避けて朝一番のシャチパフォーマンスや夕方の餌やりタイムを狙えるほか、お昼寝や着替えのために部屋へいつでも戻れる安心感が魅力です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  全室オーシャンビュー＆波音のBGM！大浴場や露天風呂で大人もしっかりリフレッシュ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                昼間は水族館で思い切りはしゃぎ、夕暮れには部屋のバルコニーから水平線に沈む夕日を鑑賞。天然温泉や真珠エキス配合の美肌風呂で旅の疲れを洗い流し、大人も贅沢なリゾート気分を満喫できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  キッズバイキングやベビーアメニティ完備！子連れファミリーに寄り添う万全の設備
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                子ども用のプレートや離乳食対応、ベッドガードやオムツ用ゴミ箱の貸出など、ファミリー向けのホスピタリティが充実。大人は新鮮な海の幸や地元牛をバイキングや会席で贅沢に味わえます。
              </p>
            </div>
  
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">

            {/* ホテルカード 1 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2910/2910.jpg"
                  alt="鴨川シーワールドホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.26 (3598件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    千葉県鴨川市・鴨川シーワールド直結！宿泊者限定入館パスポート付き全室オーシャンビューホテル
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    鴨川シーワールドホテル
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    房総半島の太平洋沿いに建ち、日本有数の海洋テーマパーク「鴨川シーワールド」に専用連絡通路で直結する公式ホテル。宿泊客はチェックイン日からチェックアウト日まで何度でも無料で水族館に入館できるパスポート付きで、朝一番のシャチパフォーマンスやナイトアドベンチャーなど公式ホテルだけの特別体験も充実しています。全客室が太平洋を望むオーシャンビューで、館内には天然温泉大浴場やキッズアメニティも完備。房総の新鮮な海の幸を取り入れたディナーバイキングとともに、家族みんなが笑顔になれる至高の水族館ステイが叶います。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「フロントにいる従業員の接客もよく、夕飯でブリの解体ショーがあり、解体したブリで作ったお寿司がとても美味しかった。クチコミの詳細はこちらから 2026-09-05 17:58:44投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 千葉県鴨川市東町1464-18</div>
                    <div><strong>アクセス:</strong> 電車）安房鴨川駅から無料バスで5分。2015年4月～安房鴨川駅（西口）から鴨川シーワールド無料送迎バスでホテル前下車。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約12,400円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8528/8528.jpg"
                  alt="鳥羽国際ホテル　潮路亭"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.51 (979件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    三重県鳥羽市・日本一の飼育数を誇る鳥羽水族館至近！ミキモト真珠風呂と伊勢志摩の美食リゾート
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    鳥羽国際ホテル　潮路亭
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    波静かな鳥羽湾を望み、日本一の生きものの種類数を誇る「鳥羽水族館」へ車でわずか約3分の好立地に建つ和モダンリゾート。宿の最大のハイライトは、ミキモト コスメティックスが手掛けた世界初の「パールオーロラ風呂」。真珠由来の美容成分が溶け込んだキラキラと輝く湯船に浸かれば、お肌がしっとりと潤う至福の湯浴みが体験できます。夕食には伊勢海老や鮑、松阪牛など伊勢志摩の最高級食材をオープンキッチンで豪快かつ繊細に仕上げる会席料理が並び、大人も子どもも贅沢な休日を満喫できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「食事が美味しい良い宿です お風呂も素敵でした「白石」のお食事、朝ごはん、どちらもとても美味しかった。食材本来の味がいかされており調味料は控えめ、そのため最後までさっぱりと美味しくいただけました。た… 2026-09-05 21:57:51投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 三重県鳥羽市鳥羽1-23-1</div>
                    <div><strong>アクセス:</strong> ＪＲ及び近鉄「鳥羽駅」より車で3分。近鉄鳥羽駅１番出口から無料シャトルバス有。（12時半～18時の間毎時0分・30分発）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約9,680円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8528"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419.jpg"
                  alt="オリオンホテル　モトブリゾート＆スパ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.57 (934件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    沖縄県本部町・沖縄美ら海水族館へ徒歩約7分！エメラルドビーチ直結の全室オーシャンフロントホテル
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    オリオンホテル　モトブリゾート＆スパ
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    沖縄本島北部・本部半島の美しいエメラルドビーチの正面に位置し、世界的な名所「沖縄美ら海水族館」へ徒歩約7分・備瀬のフクギ並木へも徒歩圏という絶好のロケーションを誇る最高峰リゾート。全客室が50平米以上の広々としたオーシャンフロントバルコニー付きで、伊江島の城山（タッチュー）と東シナ海に沈むサンセットを一望できます。地下1,500mから湧出する天然温泉大浴場「ジュラ紀温泉」やインドアプール、沖縄県産食材をふんだんに使った贅沢ビュッフェやバーベキューなど、南国の極上バカンスをお過ごしいただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「すべてが最高で、また必ず泊まりたい8月の末に利用させていただきました。クラブウィング側に宿泊しました。チェックインがスムーズだったこと、マカロンのおいしさに感動こと、クラブラウンジが静かで上質… 2026-08-31 08:58:44投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 沖縄県国頭郡本部町備瀬148-1</div>
                    <div><strong>アクセス:</strong> 那覇空港からお車で高速利用約100分。空港バス利用約150分ホテル前停車。美ら海水族館へ徒歩7分、海洋博公園隣接</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約14,025円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D145419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    
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

              <li key="furusato-tax-themepark-aquarium-family-hotel-stay">
                <Link href="/furusato-tax-themepark-aquarium-family-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【テーマパーク＆水族館×ふるさと納税】子連れファミリー向け人気ホテル</span>
                </Link>
              </li>
  

              <li key="furusato-tax-welcome-baby-family-kids-stay">
                <Link href="/furusato-tax-welcome-baby-family-kids-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ウェルカムベビーのお宿×ふるさと納税】赤ちゃん・子連れ安心のファミリー名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-generation-family-luxury-stay">
                <Link href="/furusato-tax-three-generation-family-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【三世代ファミリー旅行×ふるさと納税】広々客室・バイキング・名湯の旅</span>
                </Link>
              </li>
  

              <li key="furusato-tax-remote-island-luxury-resort-stay">
                <Link href="/furusato-tax-remote-island-luxury-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【極上の離島リゾート×ふるさと納税】青い海と自然に抱かれる南国ステイ</span>
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
