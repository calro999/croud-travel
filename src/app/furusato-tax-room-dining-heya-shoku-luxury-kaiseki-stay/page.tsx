import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: 'お部屋食でゆったり寛ぐ極上会席料理＆老舗名門温泉旅館×ふるさと納税完全ガイド【2026年最新】城崎・有馬・草津',
  description: '周囲を気にせず自分たちのプライベート空間で伝統の本格会席を味わう至福！創業百六十年の数寄屋建築と老舗の部屋食会席が名高い城崎温泉の最高峰「西村屋本館」、日本三古湯・有馬の金泉と伝統の美味を部屋で堪能する「兵衛向陽閣」、湯守が磨き上げる名湯・白旗源泉と熟練仲居の丁寧なおもてなしを誇る草津温泉「奈良屋」。移動なしの部屋食と掛け流し名湯を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '贅沢部屋食・老舗旅館会席料理宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-room-dining-heya-shoku-luxury-kaiseki-stay' },
  openGraph: {
    title: 'お部屋食でゆったり寛ぐ極上会席料理＆老舗名門温泉旅館×ふるさと納税完全ガイド【2026年最新】城崎・有馬・草津',
    description: '周囲を気にせず自分たちのプライベート空間で伝統の本格会席を味わう至福！創業百六十年の数寄屋建築と老舗の部屋食会席が名高い城崎温泉の最高峰「西村屋本館」、日本三古湯・有馬の金泉と伝統の美味を部屋で堪能する「兵衛向陽閣」、湯守が磨き上げる名湯・白旗源泉と熟練仲居の丁寧なおもてなしを誇る草津温泉「奈良屋」。移動なしの部屋食と掛け流し名湯を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-room-dining-heya-shoku-luxury-kaiseki-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoRoomDiningHeyaShokuStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '極上部屋食会席＆老舗温泉旅館特集', item: baseUrl + '/furusato-tax-room-dining-heya-shoku-luxury-kaiseki-stay' },
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
          <span className="text-stone-800 font-medium">極上部屋食会席＆老舗温泉旅館特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            贅沢部屋食・老舗旅館会席料理宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            お部屋食でゆったり寛ぐ極上会席料理＆老舗名門温泉旅館×ふるさと納税完全ガイド【2026年最新】城崎・有馬・草津
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            日本の旅館文化が誇る最高峰の贅沢のひとつ「部屋食（お部屋食会席）」。食事処やレストランへ移動する必要がなく、温泉上がりの浴衣姿のまま、寛ぎ慣れた自分たちの客室で出来立ての料理を一品一品ゆったりと味わう時間は、格別の安らぎをもたらしてくれます。小さな子ども連れのファミリーも周囲に気兼ねすることなく団欒を楽しめ、ご年配の方や記念日を祝うカップルにとっても、誰にも邪魔されない至極のプライベート空間が約束されます。文豪・志賀直哉ゆかりの城崎温泉で百六十年の歴史を刻み、日本庭園を望む数寄屋造りの客室で但馬牛や松葉蟹の部屋食会席を振る舞う「西村屋本館」、創業七百年・有馬温泉の老舗として良質な金泉と匠の技が光る部屋食会席を誇る「兵衛向陽閣」、そして湯畑のすぐそばに佇み、草津最古の白旗源泉を湯守が手入れした極上の湯と旬の味覚を部屋食で届ける「奈良屋」。熟練の仲居さんによる温かなおもてなしが息づく部屋食の名旅館を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円で賢く予約し、日本の粋を味わう贅沢な温泉旅へ出かけましょう。
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
                  移動ゼロ＆浴衣姿の完全プライベート空間！周りを気にせず会話とお酒を楽しむ贅沢
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                お風呂上がりのリラックスした状態のまま、畳の香る落ち着いた客室で食事をスタート。小さなお子様がぐずっても、お酒が進んで会話が弾んでも、周囲の目を気にすることなく自分たちのペースで贅沢な夕餉を満喫できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  できたてを一品ずつ運ぶ仲居さんのプロの技！絶妙なタイミングで供される会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                先付、お造り、焼物、煮物、揚物、ご飯ものまで、熟練の仲居さんがお客様の食べるペースを見計らいながら最適な温度で一品ずつ配膳。料理の説明や土地の歴史を聞きながらいただく時間は、旅館ならではの温かな醍醐味です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  但馬牛、神戸牛、上州牛！各地の最高級ブランド牛や日本海の海の幸を堪能
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                城崎の但馬牛や旬の地魚、有馬の神戸牛の鉄板焼きや小鍋仕立て、草津の上州牛すき焼きなど、厳選された特産品を部屋の中でじっくりと堪能。プライベートな空間だからこそ、素材本来の香りと旨味に心ゆくまで浸れます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75399/75399.jpg"
                  alt="城崎温泉　西村屋本館"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 5 (338件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    兵庫県豊岡市・創業百六十年！数寄屋造りの美と庭園を望む老舗中の老舗部屋食旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    城崎温泉　西村屋本館
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    城崎温泉のシンボルとして百六十余年の歴史を誇り、国の登録有形文化財にも選ばれる日本屈指の名門旅館。丹精込めて手入れされた広大な日本庭園を取り囲むように配された数寄屋造りの客室で、伝統の部屋食会席を堪能できます。冬は幻の松葉蟹、四季を通じて神戸ビーフの素牛である但馬牛や日本海の鮮魚をふんだんに使用し、専任の仲居さんが一品ずつ心を込めて配膳。歴史の重みを感じる美しい和の空間で名湯・城崎の湯に浸かり、日本旅館のおもてなしの神髄を体感できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 兵庫県豊岡市城崎町湯島469</div>
                    <div><strong>アクセス:</strong> 【車】北近畿豊岡自動車道　豊岡出石ICより約18分　【電車】城崎温泉駅より徒歩15分（旅館組合無料バス有）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約15,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D75399"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg"
                  alt="有馬温泉　兵衛向陽閣"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.55 (2592件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    兵庫県神戸市・創業七百年！有馬温泉を代表する名門で金泉と老舗の部屋食会席を満喫
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    有馬温泉　兵衛向陽閣
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    太閤秀吉から「兵衛」の名を授かったと伝えられる、有馬温泉随一の歴史と規模を誇る老舗名門宿。三つの異なる大浴場で有馬名物の赤茶色の濃厚な「金泉」を巡ることができ、広々とした和室での贅沢な部屋食プランが大好評です。夕食には神戸牛や瀬戸内の海の幸、季節の旬菜を熟練の和食料理人が丁寧に仕立てた会席料理が並び、自分たちのプライベートな空間でゆっくりとお酒とともに味わえます。細やかな気配りの行き届いたおもてなしで、三世代家族や長寿の祝い旅にも絶大な信頼を集めています。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「憧れのお宿で心温まるおもてなしと温泉を満喫憧れのお宿に泊まることができて、とても嬉しかったです。こちらの事情で、チェックインが遅くなり、夕飯が遅いスタートになってしまったのですが、荷物や車など様々… 2026-09-05 08:23:30投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 兵庫県神戸市北区有馬町1904</div>
                    <div><strong>アクセス:</strong> 神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約15,950円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8636"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70807/70807.jpg"
                  alt="草津温泉　奈良屋"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.68 (910件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    群馬県草津町・湯畑すぐ！専任の湯守が守る名湯白旗源泉と静寂の客室で味わう月替わり部屋食
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    草津温泉　奈良屋
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    草津温泉のシンボル「湯畑」から徒歩約1分、明治十年創業の伝統と大正ロマンの風情を残す格式高い温泉旅館。宿の最大の誇りは、草津でも最も貴重とされる源泉「白旗の湯」を、専門の職人「湯守」が一晩中手作業で湯守りして適温に整えた極上の湯殿。湯上がりには、趣ある純和風客室で板前が腕を振るう月替わりの本格会席料理を部屋食で堪能できます。上州牛の石焼きや地元の山の恵みを取り入れた滋味あふれる料理と、名湯の力強い温もりが心身の奥深くまで染み渡ります。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「食事はどの料理も美味しかったです目の前で握っていただけるお寿司も良いパフォーマンスですね部屋にある冷蔵庫に飲みかけの水(部屋に置いてあるペットボトルと同じもの)が入っていたので 前のお客さ… 2026-09-05 17:17:57投稿 つづ…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 群馬県吾妻郡草津町草津396</div>
                    <div><strong>アクセス:</strong> ＪＲ長野原草津口駅よりＪＲバスで草温泉へ２５分、下車後送迎バスあり。（原則　8:30～18:00 ）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約31,036円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70807"
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

              <li key="furusato-tax-luxury-hotspring-ryokan-stay">
                <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-generation-family-luxury-stay">
                <Link href="/furusato-tax-three-generation-family-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【三世代ファミリー家族旅行×ふるさと納税】部屋食・貸切風呂のある名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-kanreki-celebration-oyakoukou-onsen-stay">
                <Link href="/furusato-tax-kanreki-celebration-oyakoukou-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【還暦祝い＆親孝行温泉旅×ふるさと納税】感謝を届けるおもてなし名旅館</span>
                </Link>
              </li>
  

              <li key="furusato-tax-traditional-kamado-rice-irori-stay">
                <Link href="/furusato-tax-traditional-kamado-rice-irori-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【かまど炊きご飯＆囲炉裏料理宿×ふるさと納税】里山の伝統美味と温泉</span>
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
